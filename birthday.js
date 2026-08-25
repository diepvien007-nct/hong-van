/* ============================================================
   HAPPY BIRTHDAY — a birthday film in four acts
   Vanilla canvas 2D for the tree + GSAP for the orchestration.

   ACT 1  a real recurve bow with a Cupid's arrow nocked — you
          DRAW the string down and RELEASE to fire (pointer drag,
          or keyboard). A softly beating heart waits above as the
          target.
   ACT 2  the arrow flies up and strikes the heart; the heart
          jolts, falls, and bursts into a flood of rose that
          swallows the frame (no cross-fade).
   ACT 3  a kinetic wish hinges up out of that colour, glyph by
          glyph, under cinema bars and a slow camera push.
   ACT 4  a gold light blooms, and the tree grows into one heart
          of lit blossoms with the hand-lettered wish.

   A GSAP master timeline runs the shot + Acts 2–3; at its end it
   starts the canvas tree (Act 4), which owns its own rAF and
   plays once, then holds — living, never looping.
   ============================================================ */

import gsap from 'gsap';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/* the pen-stroke plugin: a `drawn` 0..1 property for the underline */
gsap.registerPlugin({
  name: 'drawn',
  init(target, value) {
    const len = target.getTotalLength();
    target.style.strokeDasharray = len;
    this.target = target; this.len = len; this.value = value;
  },
  render(ratio, data) {
    data.target.style.strokeDashoffset = data.len * (1 - data.value * ratio);
  },
});

const $ = (id) => document.getElementById(id);

const canvas = $('tree');
const ctx    = canvas.getContext('2d');
const wishEl = $('wish');

const hero       = $('hero');
const eyebrow    = $('eyebrow');
const hint       = $('hint');
const motes      = $('motes');
const target     = $('target');
const targetHeart= $('targetHeart');
const heartGlow  = target.querySelector('.heart__glow');
const aim        = $('aim');

const archery = $('archery');
const bow     = $('bow');
const arrow   = $('arrow');
const strL    = $('strL');
const strR    = $('strR');
const serving = $('serving');

const flood   = $('flood');
const field   = $('field');
const camera  = $('camera');
const fgrid   = $('fgrid');
const kSideLeft  = $('kSideLeft');
const kSideRight = $('kSideRight');
const kParticles = $('kParticles');
const kEyebrow= $('kEyebrow');
const kSub    = $('kSub');
const barTop  = $('barTop');
const barBot  = $('barBot');
const uline   = $('uline').querySelector('.uline__path');
const bloom   = $('bloom');

/* ============================================================
   TIMELINE QUICK NAVIGATION CONTROLLER (Mục lục hành trình 6 chặng)
   ============================================================ */
let currentActiveStep = 1;

function updateActiveNavStep(stepNum) {
  currentActiveStep = stepNum;
  for (let i = 1; i <= 6; i++) {
    const btn = $(`navStep${i}`);
    if (btn) btn.classList.toggle('is-active', i === stepNum);
  }
}

function toggleTimelineNav(forceState) {
  const timelineNav = $('timelineNav');
  const timelineNavToggle = $('timelineNavToggle');
  if (!timelineNav) return;
  const isOpen = forceState !== undefined ? forceState : !timelineNav.classList.contains('is-open');
  timelineNav.classList.toggle('is-open', isOpen);
  if (timelineNavToggle) timelineNavToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isRecord     = new URLSearchParams(location.search).has('record');

/* --- cue log for the recorder: the page stays muted, but it timestamps every
   beat the film crosses, and the offline sound synth fires foley at those exact
   times so the audio can never drift from the picture. --- */
if (isRecord) window.bdayCues = [];
let recT0 = 0;
function cue(name){ if (isRecord && recT0) window.bdayCues.push({ cue: name, t: (performance.now() - recT0) / 1000 }); }

/* ============================================================
   MATH HELPERS
   ============================================================ */
const rand  = (a, b) => a + Math.random() * (b - a);
const pick  = (a)    => a[(Math.random() * a.length) | 0];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp  = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeOutBack  = (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

function shade(hex, amt){
  const n = parseInt(hex.slice(1), 16);
  const r = clamp((n >> 16) + amt, 0, 255), g = clamp(((n >> 8) & 255) + amt, 0, 255), b = clamp((n & 255) + amt, 0, 255);
  return `rgb(${r | 0},${g | 0},${b | 0})`;
}

/* ============================================================
   TREE ENGINE (Act 4) — canvas
   ============================================================ */
const BLOSSOM = [
  { c0: '#ffe1ec', c1: '#ff80aa' },
  { c0: '#ffd0e0', c1: '#f4577f' },
  { c0: '#ffc4d2', c1: '#e23b67' },
  { c0: '#ffd9c4', c1: '#ff8a5b' },
  { c0: '#ffeec2', c1: '#f6b13e' },
  { c0: '#ffd2e6', c1: '#e84d9a' },
];

/* timeline (seconds, relative to the tree's own start) — brisk */
const T = {
  trunkStart: 0.10,
  branchSpan: 1.80,
  bloomT0:    1.25,
  bloomSpan:  2.00,
  petalT0:    2.45,
  noteStart:  0.45,
  done:       4.60,
};

const SS = 168;

function heartShape(c, x, top, w, h){
  c.beginPath();
  c.moveTo(x, top + h * 0.28);
  c.bezierCurveTo(x, top, x - w * 0.5, top, x - w * 0.5, top + h * 0.28);
  c.bezierCurveTo(x - w * 0.5, top + h * 0.60, x - w * 0.16, top + h * 0.80, x, top + h);
  c.bezierCurveTo(x + w * 0.16, top + h * 0.80, x + w * 0.5, top + h * 0.60, x + w * 0.5, top + h * 0.28);
  c.bezierCurveTo(x + w * 0.5, top, x, top, x, top + h * 0.28);
  c.closePath();
}

function makeBlossom({ c0, c1 }, soft){
  const cv = document.createElement('canvas'); cv.width = cv.height = SS;
  const c = cv.getContext('2d');
  const w = SS * 0.62, h = SS * 0.58, x = SS / 2, top = SS * 0.17;

  c.save();
  c.shadowColor = 'rgba(150,38,72,0.32)';
  c.shadowBlur = SS * 0.085; c.shadowOffsetY = SS * 0.05;
  c.fillStyle = c1; heartShape(c, x, top, w, h); c.fill();
  c.restore();

  const g = c.createRadialGradient(x - w * 0.20, top + h * 0.20, h * 0.04, x, top + h * 0.42, h * 0.92);
  g.addColorStop(0, c0); g.addColorStop(0.55, c1); g.addColorStop(1, shade(c1, -26));
  heartShape(c, x, top, w, h); c.fillStyle = g; c.fill();

  c.save(); heartShape(c, x, top, w, h); c.clip();
  const g2 = c.createLinearGradient(0, top, 0, top + h);
  g2.addColorStop(0, 'rgba(255,255,255,0)');
  g2.addColorStop(0.65, 'rgba(110,16,46,0)');
  g2.addColorStop(1, 'rgba(110,16,46,0.26)');
  c.fillStyle = g2; c.fillRect(0, 0, SS, SS);
  c.globalAlpha = 0.55; c.fillStyle = '#ffffff';
  c.beginPath(); c.ellipse(x - w * 0.15, top + h * 0.24, w * 0.17, h * 0.11, -0.5, 0, Math.PI * 2); c.fill();
  c.restore();

  if (!soft) return cv;

  const cv2 = document.createElement('canvas'); cv2.width = cv2.height = SS;
  const c2 = cv2.getContext('2d');
  c2.filter = 'blur(2.6px)'; c2.drawImage(cv, 0, 0); c2.filter = 'none';
  c2.globalCompositeOperation = 'source-atop';
  c2.globalAlpha = 0.42; c2.fillStyle = '#fff3ea'; c2.fillRect(0, 0, SS, SS);
  return cv2;
}

function makeBokeh(rgb){
  const S = 128, cv = document.createElement('canvas'); cv.width = cv.height = S;
  const c = cv.getContext('2d');
  const g = c.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, `rgba(${rgb},0.9)`); g.addColorStop(0.45, `rgba(${rgb},0.22)`); g.addColorStop(1, `rgba(${rgb},0)`);
  c.fillStyle = g; c.fillRect(0, 0, S, S);
  return cv;
}

function makeSparkle(){
  const S = 64, cv = document.createElement('canvas'); cv.width = cv.height = S;
  const c = cv.getContext('2d'); const m = S / 2;
  const g = c.createRadialGradient(m, m, 0, m, m, m);
  g.addColorStop(0, 'rgba(255,255,255,0.95)'); g.addColorStop(0.25, 'rgba(255,236,200,0.5)'); g.addColorStop(1, 'rgba(255,236,200,0)');
  c.fillStyle = g; c.beginPath(); c.arc(m, m, m, 0, 6.2832); c.fill();
  c.fillStyle = 'rgba(255,255,255,0.95)';
  c.translate(m, m);
  for (let k = 0; k < 2; k++){
    c.beginPath();
    c.moveTo(0, -m); c.quadraticCurveTo(0, 0, m, 0); c.quadraticCurveTo(0, 0, 0, m); c.quadraticCurveTo(0, 0, -m, 0); c.quadraticCurveTo(0, 0, 0, -m);
    c.fill(); c.rotate(Math.PI / 4); c.scale(0.5, 0.5);
  }
  return cv;
}

let SPR = { crisp: [], soft: [] }, BOKEH = [], SPARKLE = null;

// Load memory photos for tree canopy blossoms and slideshow (63 photos)
const MEMORY_COUNT = 63;
const MEMORY_URLS = Array.from({ length: MEMORY_COUNT }, (_, i) =>
  `/memories/memory-${String(i + 1).padStart(2, '0')}.jpg`
);

let memorySprites = [];
let memoryImgs = [];
const spriteCache = new Map();

function makeMemoryBlossom(img){
  if (!img || !img.complete || img.naturalWidth === 0) return null;
  const cv = document.createElement('canvas');
  cv.width = cv.height = SS;
  const c = cv.getContext('2d');
  const w = SS * 0.64, h = SS * 0.60, x = SS / 2, top = SS * 0.16;

  c.save();
  c.shadowColor = 'rgba(180,40,80,0.42)';
  c.shadowBlur = SS * 0.1;
  c.shadowOffsetY = SS * 0.06;
  c.fillStyle = '#ff6f97';
  heartShape(c, x, top, w, h);
  c.fill();
  c.restore();

  c.save();
  heartShape(c, x, top, w, h);
  c.clip();
  c.drawImage(img, x - w * 0.5, top, w, h);
  c.fillStyle = 'rgba(255,100,150,0.12)';
  c.fillRect(0, 0, SS, SS);
  c.restore();

  c.save();
  heartShape(c, x, top, w, h);
  c.strokeStyle = 'rgba(255,255,255,0.92)';
  c.lineWidth = 3.5;
  c.stroke();

  c.fillStyle = 'rgba(255,255,255,0.6)';
  c.beginPath();
  c.ellipse(x - w * 0.15, top + h * 0.24, w * 0.17, h * 0.11, -0.5, 0, Math.PI * 2);
  c.fill();
  c.restore();

  return cv;
}

function addMemorySpriteForImg(img){
  if (!img || !img.complete || img.naturalWidth === 0) return;
  if (!spriteCache.has(img.src)) {
    const sp = makeMemoryBlossom(img);
    if (sp) {
      spriteCache.set(img.src, sp);
      memorySprites.push(sp);
    }
  }
}

function initMemoryImages(){
  MEMORY_URLS.forEach(url => {
    const img = new Image();
    img.onload = () => {
      addMemorySpriteForImg(img);
    };
    img.src = url;
    memoryImgs.push(img);
    if (img.complete) {
      addMemorySpriteForImg(img);
    }
  });
}
initMemoryImages();

function buildSprites(){
  SPR = { crisp: BLOSSOM.map((b) => makeBlossom(b, false)), soft: BLOSSOM.map((b) => makeBlossom(b, true)) };
  BOKEH = [makeBokeh('255,224,188'), makeBokeh('255,196,214'), makeBokeh('255,238,210')];
  SPARKLE = makeSparkle();
  memoryImgs.forEach(img => addMemorySpriteForImg(img));
}

function drawSprite(sprite, x, y, size, rot, alpha){
  if (!sprite) return;
  ctx.save();
  ctx.translate(x, y);
  if (rot) ctx.rotate(rot);
  ctx.globalAlpha = alpha;
  ctx.drawImage(sprite, -size * 0.5, -size * 0.47, size, size);
  ctx.restore();
}

let heartPoly = null;
function buildHeartPoly(){
  const raw = []; let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
  for (let i = 0; i <= 160; i++){
    const t = (i / 160) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    raw.push([x, y]);
    if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y;
  }
  const midX = (minX + maxX) / 2, midY = (minY + maxY) / 2, hw = (maxX - minX) / 2, hh = (maxY - minY) / 2;
  heartPoly = raw.map(([x, y]) => [(x - midX) / hw, (y - midY) / hh]);
}
function pointInPoly(x, y){
  let inside = false; const p = heartPoly;
  for (let i = 0, j = p.length - 1; i < p.length; j = i++){
    const xi = p[i][0], yi = p[i][1], xj = p[j][0], yj = p[j][1];
    if (((yi > y) !== (yj > y)) && (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)) inside = !inside;
  }
  return inside;
}

let W = 0, H = 0, dpr = 1;
let cx = 0, cy = 0, rx = 0, ry = 0, groundY = 0;
let branches = [], hearts = [], petals = [], rested = [], orbs = [], floaters = [], twinkles = [];
let bgGrad = null, glowGrad = null, groundGrad = null;

const quad = (b, t) => { const m = 1 - t, a = m * m, k = 2 * m * t, d = t * t; return { x: a * b.x1 + k * b.cx + d * b.x2, y: a * b.y1 + k * b.cy + d * b.y2 }; };

function barkGrad(x1, y1, x2, y2, depth){
  const g = ctx.createLinearGradient(x1, y1, x2, y2);
  g.addColorStop(0, `hsl(348 26% ${26 + depth * 3}%)`);
  g.addColorStop(1, `hsl(346 24% ${40 + depth * 5}%)`);
  return g;
}

function buildScene(){
  branches = []; hearts = []; petals = []; rested = []; twinkles = []; orbs = []; floaters = [];
  buildHeartPoly();

  const wide = W / H > 1.2;
  cx = W * (wide ? 0.67 : 0.52);
  cy = H * (wide ? 0.38 : 0.35);
  ry = Math.min(H * (wide ? 0.31 : 0.28), W * (wide ? 0.27 : 0.34));
  rx = ry * 1.15;
  groundY = H * 0.93;

  bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#fff3e9');
  bgGrad.addColorStop(0.46, '#ffe7d6');
  bgGrad.addColorStop(0.78, '#fcd9c4');
  bgGrad.addColorStop(1, '#f3c4b5');
  glowGrad = ctx.createRadialGradient(cx, cy, ry * 0.1, cx, cy, ry * 1.55);
  glowGrad.addColorStop(0, 'rgba(255,219,170,0.6)');
  glowGrad.addColorStop(0.5, 'rgba(255,170,150,0.2)');
  glowGrad.addColorStop(1, 'rgba(255,170,150,0)');
  groundGrad = ctx.createRadialGradient(cx, H * 1.02, ry * 0.2, cx, H * 1.02, ry * 1.6);
  groundGrad.addColorStop(0, 'rgba(255,205,165,0.5)');
  groundGrad.addColorStop(1, 'rgba(255,205,165,0)');

  for (let i = 0; i < 11; i++){
    orbs.push({ x: rand(0, W), y: rand(0, H), r: rand(W * 0.05, W * 0.17), vy: rand(-6, -16), drift: rand(-0.3, 0.3), phase: rand(0, 6.28), alpha: rand(0.05, 0.13), sprite: pick(BOKEH) });
  }

  const FN = wide ? 18 : 15;
  for (let i = 0; i < FN; i++){
    const depth = Math.random();
    floaters.push({
      x: rand(0, W), y: rand(-H * 0.1, H * 1.1), depth,
      idx: (Math.random() * BLOSSOM.length) | 0,
      box: lerp(Math.min(W, H) * 0.025, Math.min(W, H) * 0.075, depth),
      vy: lerp(7, 20, depth), sway: rand(8, 22), phase: rand(0, 6.28),
      rot: rand(-0.4, 0.4), vrot: rand(-0.5, 0.5),
      baseA: lerp(0.16, 0.5, depth), soft: depth < 0.45,
    });
  }

  const baseX = cx, baseY = H * 1.0;
  const trunkTopY = cy + ry * 0.62;
  const trunkW = Math.max(9, W * 0.024);
  const limbLen = ry * 0.6;
  const insidePx = (x, y, m = 0.9) => pointInPoly((x - cx) / (rx * m), (cy - y) / (ry * m));

  function addBranch(x, y, ang, len, w0, depth, t0){
    let ex = x + Math.cos(ang) * len, ey = y + Math.sin(ang) * len, clipped = false;
    if (!insidePx(ex, ey)){
      let lo = 0, hi = 1;
      for (let k = 0; k < 12; k++){ const mid = (lo + hi) / 2; (insidePx(x + Math.cos(ang) * len * mid, y + Math.sin(ang) * len * mid) ? lo = mid : hi = mid); }
      ex = x + Math.cos(ang) * len * lo; ey = y + Math.sin(ang) * len * lo; clipped = true;
    }
    const mx = (x + ex) / 2, my = (y + ey) / 2, perp = ang + Math.PI / 2, bend = rand(-1, 1) * len * 0.12, w1 = w0 * 0.66;
    branches.push({ x1: x, y1: y, cx: mx + Math.cos(perp) * bend, cy: my + Math.sin(perp) * bend, x2: ex, y2: ey, w0, w1, t0, dur: Math.max(0.14, 0.32 - depth * 0.03), depth, grad: barkGrad(x, y, ex, ey, depth) });
    return { ex, ey, w1, clipped };
  }
  function grow(x, y, ang, len, w, depth, t0){
    const r = addBranch(x, y, ang, len, w, depth, t0);
    if (r.clipped || depth >= 6 || len < ry * 0.06) return;
    const childT0 = t0 + (0.32 - depth * 0.03) * 0.6;
    const n = Math.random() < 0.55 ? 2 : 3;
    for (let i = 0; i < n; i++){
      const spread = 0.6 * (i - (n - 1) / 2) + rand(-0.22, 0.22), lift = -0.06 + rand(-0.05, 0.05);
      grow(r.ex, r.ey, ang + spread + lift, len * rand(0.74, 0.84), r.w1, depth + 1, childT0 + i * 0.03);
    }
  }
  addBranch(baseX, baseY, -Math.PI / 2, baseY - trunkTopY, trunkW, 0, T.trunkStart);
  branches[0].dur = 0.55;
  const limbT0 = T.trunkStart + 0.36, L = 3;
  for (let i = 0; i < L; i++){
    const ang = -Math.PI / 2 + 0.62 * (i - (L - 1) / 2) + rand(-0.12, 0.12);
    grow(baseX, trunkTopY, ang, limbLen, trunkW * 0.7, 1, limbT0 + i * 0.05);
  }
  const maxT0 = branches.reduce((m, b) => Math.max(m, b.t0 + b.dur), 0);
  const sc = (T.branchSpan - T.trunkStart) / (maxT0 - T.trunkStart);
  for (const b of branches) b.t0 = T.trunkStart + (b.t0 - T.trunkStart) * sc;

  const COUNT = Math.round(clamp(rx * ry / 56, 280, 480));
  const baseBox = clamp(Math.min(W, H) * 0.115, 30, 74);
  let guard = 0;
  let photoCount = 0;
  const targetPhotos = Math.min(memorySprites.length, 63);
  while (hearts.length < COUNT && guard < COUNT * 50){
    guard++;
    const u = rand(-1.06, 1.06), v = rand(-1.06, 1.06);
    if (!pointInPoly(u, v)) continue;
    const x = cx + u * rx, y = cy - v * ry;
    const d = clamp01(Math.hypot(u, v + 1) / 2.4);
    const t0 = T.bloomT0 + d * (T.bloomSpan * 0.82) + rand(0, T.bloomSpan * 0.18);
    const soft = Math.random() < 0.35;
    const isPhoto = !soft && memorySprites.length > 0 && (photoCount < targetPhotos || Math.random() < 0.45);
    const photoIdx = photoCount % (memorySprites.length || 1);
    if (isPhoto) photoCount++;
    hearts.push({ x, y, idx: (Math.random() * BLOSSOM.length) | 0, soft, isPhoto, photoIdx, box: baseBox * (isPhoto ? rand(1.18, 1.42) : (soft ? rand(0.6, 0.85) : rand(0.78, 1.12))), rot: rand(-0.55, 0.55), sway: rand(0, 6.28), t0 });
  }
  hearts.sort((a, b) => (a.soft === b.soft ? a.y - b.y : a.soft ? -1 : 1));
}

function drawBackground(){
  ctx.globalAlpha = 1;
  ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, W, H);
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  ctx.globalAlpha = 1; ctx.fillStyle = groundGrad; ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

function drawGodRays(t, intensity){
  if (intensity <= 0) return;
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const ox = cx, oy = cy - ry * 0.35, R = Math.hypot(W, H) * 1.1;
  const rays = 9, sweep = Math.sin(t * 0.07) * 0.18;
  for (let i = 0; i < rays; i++){
    const a = -Math.PI / 2 + sweep + (i - (rays - 1) / 2) * 0.2;
    const hw = 0.035 + 0.02 * (0.5 + 0.5 * Math.sin(t * 0.5 + i * 1.7));
    const a1 = a - hw, a2 = a + hw;
    const g = ctx.createLinearGradient(ox, oy, ox + Math.cos(a) * R, oy + Math.sin(a) * R);
    g.addColorStop(0, `rgba(255,232,190,${0.10 * intensity})`);
    g.addColorStop(0.5, `rgba(255,214,170,${0.05 * intensity})`);
    g.addColorStop(1, 'rgba(255,214,170,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + Math.cos(a1) * R, oy + Math.sin(a1) * R);
    ctx.lineTo(ox + Math.cos(a2) * R, oy + Math.sin(a2) * R);
    ctx.closePath(); ctx.fill();
  }
  ctx.restore();
}

function drawGlow(t){
  const gi = clamp01((t - T.bloomT0) / (T.bloomSpan * 0.9));
  if (gi <= 0) return;
  ctx.save(); ctx.globalAlpha = gi; ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = glowGrad; ctx.fillRect(0, 0, W, H);
  ctx.restore();
}

function drawBokeh(t, dt){
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (const o of orbs){
    o.y += o.vy * dt; o.x += Math.sin(t * 0.3 + o.phase) * o.drift;
    if (o.y < -o.r){ o.y = H + o.r; o.x = rand(0, W); }
    ctx.globalAlpha = o.alpha;
    ctx.drawImage(o.sprite, o.x - o.r, o.y - o.r, o.r * 2, o.r * 2);
  }
  ctx.restore();
}

function drawFloaters(t, dt, front){
  const appear = clamp01((t - 0.2) / 1.4);
  if (appear <= 0) return;
  for (const f of floaters){
    if ((f.depth >= 0.6) !== front) continue;
    f.y -= f.vy * dt;
    f.x += Math.sin(t * 0.5 + f.phase) * f.sway * dt;
    f.rot += f.vrot * dt;
    if (f.y < -f.box){ f.y = H + f.box; f.x = rand(0, W); }
    drawSprite((f.soft ? SPR.soft : SPR.crisp)[f.idx], f.x, f.y, f.box, f.rot, f.baseA * appear);
  }
}

function drawBranches(t){
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const b of branches){
    const f = clamp01((t - b.t0) / b.dur);
    if (f <= 0) continue;
    const e = easeOutCubic(f);
    ctx.strokeStyle = b.grad;
    const steps = 12, last = Math.max(1, Math.ceil(steps * e));
    let prev = quad(b, 0);
    for (let i = 1; i <= last; i++){
      const tt = Math.min(e, i / steps), p = quad(b, tt);
      ctx.lineWidth = lerp(b.w0, b.w1, tt);
      ctx.beginPath(); ctx.moveTo(prev.x, prev.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      prev = p;
    }
  }
}

function drawHearts(t){
  const breathe = 1 + Math.sin(t * 0.8) * 0.012;
  for (const h of hearts){
    const p = clamp01((t - h.t0) / 0.6);
    if (p <= 0) continue;
    const scale = Math.max(0, easeOutBack(p));
    let alpha = clamp01(p * 1.7); if (h.soft) alpha *= 0.8;
    const settled = clamp01((t - h.t0 - 0.6) / 0.7);
    const sway = settled * Math.sin(t * 1.5 + h.sway) * (h.box * 0.05);
    const rise = (1 - easeOutCubic(p)) * h.box * 0.45;
    const hx = cx + (h.x - cx) * breathe + sway;
    const hy = cy + (h.y - cy) * breathe - rise;
    let sprite = (h.soft ? SPR.soft : SPR.crisp)[h.idx % (SPR.crisp.length || 1)];
    if (h.isPhoto && memorySprites.length > 0){
      const ms = memorySprites[h.photoIdx % memorySprites.length];
      if (ms) sprite = ms;
    }
    if (sprite) {
      drawSprite(sprite, hx, hy, h.box * scale, h.rot + sway * 0.012, alpha);
    }
  }
}

function updateTwinkles(t, dt){
  const active = t > T.bloomT0 + T.bloomSpan * 0.45;
  if (active && twinkles.length < 9 && Math.random() < 0.5){
    const h = hearts[(Math.random() * hearts.length) | 0];
    if (h) twinkles.push({ x: h.x, y: h.y, size: rand(0.6, 1.3) * (Math.min(W, H) * 0.05), age: 0, life: rand(0.7, 1.2), rot: rand(0, 6.28) });
  }
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (let i = twinkles.length - 1; i >= 0; i--){
    const s = twinkles[i]; s.age += dt;
    const k = s.age / s.life;
    if (k >= 1){ twinkles.splice(i, 1); continue; }
    const a = Math.sin(k * Math.PI);
    drawSprite(SPARKLE, s.x, s.y, s.size * (0.6 + 0.4 * a), s.rot + k * 1.2, a);
  }
  ctx.restore();
}

function spawnPetal(){
  const h = hearts[(Math.random() * hearts.length) | 0];
  if (!h) return;
  const isPhotoPetal = h.isPhoto || (Math.random() < 0.35 && memorySprites.length > 0);
  const pIdx = isPhotoPetal ? ((h.photoIdx !== undefined) ? h.photoIdx : (Math.random() * (memorySprites.length || 1) | 0)) : h.idx;
  petals.push({
    x: h.x + rand(-8, 8),
    y: h.y + rand(-8, 8),
    vy: rand(14, 30),
    vx: rand(-8, 8),
    sway: rand(0.6, 1.4),
    phase: rand(0, 6.28),
    box: h.box * rand(0.34, 0.6),
    idx: pIdx,
    isPhoto: isPhotoPetal,
    rot: rand(0, 6.28),
    vrot: rand(-1.4, 1.4),
    age: 0,
    land: groundY + rand(-6, H * 0.05)
  });
}
function drawPetals(t, dt){
  for (let i = petals.length - 1; i >= 0; i--){
    const p = petals[i]; p.age += dt; p.vy += 8 * dt;
    p.x += (p.vx + Math.sin(t * p.sway + p.phase) * 16) * dt;
    p.y += p.vy * dt; p.rot += p.vrot * dt;
    if (p.y >= p.land){
      rested.push({ x: clamp(p.x, 6, W - 6), y: p.land, box: p.box, idx: p.idx, isPhoto: p.isPhoto, rot: p.rot, a: rand(0.7, 0.95) });
      if (rested.length > 90) rested.shift();
      petals.splice(i, 1); continue;
    }
    const a = p.age < 0.3 ? p.age / 0.3 : 1;
    let sprite = (SPR.crisp && SPR.crisp.length > 0) ? SPR.crisp[p.idx % SPR.crisp.length] : null;
    if (p.isPhoto && memorySprites.length > 0) {
      const ms = memorySprites[p.idx % memorySprites.length];
      if (ms) sprite = ms;
    }
    if (sprite) drawSprite(sprite, p.x, p.y, p.box, p.rot, a);
  }
}
function drawRested(){
  for (const r of rested){
    let sprite = (SPR.crisp && SPR.crisp.length > 0) ? SPR.crisp[r.idx % SPR.crisp.length] : null;
    if (r.isPhoto && memorySprites.length > 0) {
      const ms = memorySprites[r.idx % memorySprites.length];
      if (ms) sprite = ms;
    }
    if (sprite) drawSprite(sprite, r.x, r.y, r.box, r.rot, r.a);
  }
}

/* ============================================================
   TYPEWRITER EFFECT FOR FRIENDSHIP LETTER (Act 4)
   ============================================================ */
const LETTER_PARAGRAPHS = [
  "Chuyến bay sắp tới sẽ đưa cậu đến một miền đất mới, mở ra một hành trình mới với thật nhiều ước mơ và hoài bão.",
  "Ở nơi xa ấy, dù có khác múi giờ, nhớ luôn ăn uống đầy đủ, giữ gìn sức khỏe và luôn cười thật rạng rỡ như lúc này nha cậu!",
  "Dù có cách xa bao nhiêu cây số, tụi mình ở đây vẫn luôn dõi theo, ủng hộ và luôn là bến đỗ bình yên đón cậu trở về.",
  "Chúc Hồng Vân lên đường bình an, học tập và làm việc thật thành công nhé! ♥"
];

let typewriterStarted = false;
let typewriterTimeouts = [];

function clearTypewriter(){
  typewriterTimeouts.forEach(t => clearTimeout(t));
  typewriterTimeouts = [];
  typewriterStarted = false;
}

function resetLetterBody(){
  const letterBody = $('letterBody');
  const letterFooter = document.querySelector('.letter__footer');
  const openFilmBtn = $('openFilmBtn');
  if (letterBody) {
    letterBody.innerHTML = `
      <p id="tp-0"></p>
      <p id="tp-1"></p>
      <p id="tp-2"></p>
      <p id="tp-3" class="letter__highlight"></p>
    `;
  }
  if (letterFooter) letterFooter.classList.add('is-typing-hidden');
  if (openFilmBtn) openFilmBtn.classList.add('is-typing-hidden');
}

function startTypewriter(){
  if (typewriterStarted) return;
  typewriterStarted = true;
  resetLetterBody();

  const letterFooter = document.querySelector('.letter__footer');
  const openFilmBtn = $('openFilmBtn');
  let cumulativeDelay = 450; // Bắt đầu sau khi thiệp mở 450ms

  LETTER_PARAGRAPHS.forEach((text, pIdx) => {
    const pEl = $(`tp-${pIdx}`);
    if (!pEl) return;

    for (let i = 0; i <= text.length; i++) {
      const delay = cumulativeDelay + i * 28; // Tốc độ đánh 28ms mỗi chữ
      const tid = setTimeout(() => {
        if (!pEl) return;
        const currentText = text.slice(0, i);
        if (i < text.length) {
          pEl.innerHTML = currentText + '<span class="letter__cursor"></span>';
        } else {
          pEl.innerHTML = currentText;
        }
      }, delay);
      typewriterTimeouts.push(tid);
    }
    cumulativeDelay += text.length * 28 + 350; // Nghỉ giữa các đoạn văn
  });

  const finalDelay = cumulativeDelay + 250;
  const tidFinal = setTimeout(() => {
    if (letterFooter) letterFooter.classList.remove('is-typing-hidden');
    if (openFilmBtn) openFilmBtn.classList.remove('is-typing-hidden');
  }, finalDelay);
  typewriterTimeouts.push(tidFinal);
}

function showWish(on){
  wishEl.classList.toggle('is-in', on);
  if (on) {
    if (!typewriterStarted) startTypewriter();
  } else {
    clearTypewriter();
    resetLetterBody();
  }
}

/* the tree's own rAF: plays once from treeStart(), then holds, living */
let treeStartT = 0, treeLastT = 0, treeRAF = 0, lastPetal = 0, replayArmed = false;
window.bdayDone = false;

function treeFrame(now){
  try {
    if (!treeStartT){ treeStartT = now; treeLastT = now; }
    const t  = (now - treeStartT) / 1000;
    const dt = Math.min(0.05, (now - treeLastT) / 1000); treeLastT = now;

    const rays = clamp01((t - T.bloomT0) / T.bloomSpan);

    drawBackground();
    drawGodRays(t, rays);
    drawGlow(t);
    drawBokeh(t, dt);
    drawFloaters(t, dt, false);
    drawBranches(t);
    drawHearts(t);
    updateTwinkles(t, dt);
    if (t > T.petalT0 && now - lastPetal > 150){ spawnPetal(); spawnPetal(); lastPetal = now; }
    drawPetals(t, dt);
    drawRested();
    drawFloaters(t, dt, true);

    showWish(t >= T.noteStart);

    if (!window.bdayDone && t >= T.done) window.bdayDone = true;
  } catch (err) {
    console.error('Tree render glitch:', err);
  }

  treeRAF = requestAnimationFrame(treeFrame);
}

function treeStart(){
  treeStartT = 0; treeLastT = 0; lastPetal = 0; replayArmed = false; window.bdayDone = false;
  updateActiveNavStep(3);
  cue('grow');
  buildScene();
  if (!treeRAF) treeRAF = requestAnimationFrame(treeFrame);
}
function treeStop(){
  if (treeRAF){ cancelAnimationFrame(treeRAF); treeRAF = 0; }
  ctx.clearRect(0, 0, W, H);
}

function drawFinal(){
  buildScene();
  drawBackground(); drawGodRays(0, 1); drawGlow(T.done); drawBokeh(0, 0); drawFloaters(99, 0, false);
  drawBranches(99); drawHearts(99);
  for (let i = 0; i < 40; i++){ const h = hearts[(Math.random() * hearts.length) | 0]; if (h) rested.push({ x: clamp(h.x + rand(-W * 0.3, W * 0.3), 6, W - 6), y: groundY + rand(-6, H * 0.05), box: h.box * 0.5, idx: h.idx, rot: rand(0, 6.28), a: 0.85 }); }
  drawRested(); drawFloaters(99, 0, true);
  showWish(true);
  window.bdayDone = true;
}

/* ============================================================
   ACTS 1–3 (GSAP) — the bow, the shot, the wish
   ============================================================ */

/* the two headline words become per-glyph spans so each hinges up on its own */
function splitWord(el){
  const chars = [...el.textContent];
  el.textContent = '';
  return chars.map((c) => {
    const s = document.createElement('span');
    s.className = 'hl__ch';
    s.textContent = c === ' ' ? ' ' : c;
    el.appendChild(s);
    return s;
  });
}
const line1Chars = splitWord($('wLine1'));
const line2Chars = splitWord($('wLine2'));
const kChars = [...line1Chars, ...line2Chars];

/* drifting light motes behind the scene */
function buildMotes(){
  motes.innerHTML = '';
  for (let i = 0; i < 12; i++){
    const m = document.createElement('span');
    m.className = 'mote';
    const s = rand(4, 12);
    m.style.width = m.style.height = `${s}px`;
    m.style.left = `${rand(4, 96)}%`;
    m.style.top  = `${rand(10, 96)}%`;
    motes.appendChild(m);
    gsap.set(m, { opacity: rand(0.25, 0.7) });
    gsap.to(m, { y: -rand(40, 140), x: rand(-30, 30), duration: rand(7, 14), repeat: -1, yoyo: true, ease: 'sine.inOut', delay: -rand(0, 8) });
    gsap.to(m, { opacity: rand(0.1, 0.5), duration: rand(2.5, 5), repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }
}

/* --- bow geometry (measured; re-measured on resize) -------------------------
   The rig lives lower-left and is rotated so its local "up" axis points at the
   heart; the shot therefore travels on a diagonal. The draw + arrow math all
   live in the rig's LOCAL space (offset geometry is transform-independent, so
   rotation never corrupts it); only the aim ANGLE and the flight DISTANCE come
   from screen measurements. */
const tip = $('tip');
let svgScale = 1, arrowBaseX = 0, arrowBaseY = 0, maxDraw = 120, curDraw = 0;
let pullUX = 0, pullUY = 1;                               // screen unit: string pull-back
const REST_NOCK = 96;                                    // string nock, in bow viewBox units
const nockProxy = { val: REST_NOCK };

function applyNock(){
  const y = nockProxy.val;
  strL.setAttribute('y2', y); strR.setAttribute('y2', y); serving.setAttribute('cy', y);
}

function refreshRig(){
  W = canvas.clientWidth || window.innerWidth || 800;
  H = canvas.clientHeight || window.innerHeight || 600;
  const gripX = W * 0.24, gripY = H * 0.76;
  const heartX = W * 0.5, heartY = H * 0.33;
  const aimRad = Math.atan2(heartX - gripX, gripY - heartY);
  pullUX = -Math.sin(aimRad); pullUY = Math.cos(aimRad);

  nockProxy.val = REST_NOCK; applyNock();
  gsap.set(archery, { rotation: 0, scale: 1, x: 0, y: 0 });
  archery.style.left = '0px'; archery.style.top = '0px';
  gsap.set(arrow, { x: 0, y: 0 });
  const aR = archery.getBoundingClientRect();
  const bR = bow.getBoundingClientRect();
  const sR = serving.getBoundingClientRect();
  const rR = arrow.getBoundingClientRect();
  svgScale = bR.width ? bR.width / 460 : 0.3;
  const gripLX = (bR.left - aR.left) + 0.5 * (bR.width || 120);
  const gripLY = (bR.top  - aR.top ) + (240 / 300) * (bR.height || 100);
  const nockLX = (sR.left - aR.left) + 0.5 * (sR.width || 20);
  const nockLY = (sR.top  - aR.top ) + 0.5 * (sR.height || 20);
  arrowBaseX = nockLX - ((rR.left - aR.left) + 0.5 * (rR.width || 20));
  arrowBaseY = nockLY - ((rR.top  - aR.top ) + (205 / 220) * (rR.height || 100));

  archery.style.left = (gripX - gripLX) + 'px';
  archery.style.top  = (gripY - gripLY) + 'px';
  gsap.set(archery, { transformOrigin: `${gripLX}px ${gripLY}px`, rotation: aimRad * 180 / Math.PI });
  gsap.set(arrow, { x: arrowBaseX, y: arrowBaseY });
  maxDraw = Math.min((bR.height || 100) * 0.72, H * 0.16, 132);
  curDraw = 0;
}

function setDraw(d){
  curDraw = clamp(d, 0, maxDraw);
  gsap.set(arrow, { x: arrowBaseX, y: arrowBaseY + curDraw });   // local +Y = pull back
  nockProxy.val = REST_NOCK + curDraw / svgScale; applyNock();
  gsap.set(aim, { opacity: 0.55 * (curDraw / maxDraw) });
}

/* the target heart's beat — gentle, alive; killed the instant we fire */
let beatTL = null;
function startBeat(){
  gsap.set(targetHeart, { scale: 1 });
  gsap.set(heartGlow, { scale: 1, opacity: 0.7 });
  beatTL = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
  beatTL.to(targetHeart, { scale: 1.07, duration: 0.13, ease: 'power2.out' }, 0)
        .to(heartGlow,   { scale: 1.15, opacity: 0.9, duration: 0.13, ease: 'power2.out' }, 0)
        .to(targetHeart, { scale: 1.0, duration: 0.2, ease: 'power2.in' }, 0.13)
        .to(targetHeart, { scale: 1.05, duration: 0.12, ease: 'power2.out' }, 0.3)
        .to(targetHeart, { scale: 1.0, duration: 0.5, ease: 'power2.inOut' }, 0.42)
        .to(heartGlow,   { scale: 1.0, opacity: 0.7, duration: 0.7, ease: 'power2.inOut' }, 0.3);
}
function stopBeat(){ if (beatTL){ beatTL.kill(); beatTL = null; } gsap.set(targetHeart, { scale: 1 }); }

/* a little burst of hearts + sparks where the arrow strikes */
function miniHeartSVG(fill){
  return `<svg viewBox="0 0 24 22" width="100%" height="100%"><path d="M12 20C5.5 15 1.5 11.4 1.5 6.9 1.5 3.6 4 1.5 7 1.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3 0 5.5 2.1 5.5 5.4C23.5 11.4 19.5 15 12 20Z" fill="${fill}"/></svg>`;
}
function burstHearts(){
  const r = target.getBoundingClientRect();
  const hr = hero.getBoundingClientRect();
  const ox = r.left - hr.left + r.width / 2;
  const oy = r.top - hr.top + r.height * 0.42;
  const cols = ['#ff6f97', '#ffb14e', '#ff8fae', '#ffd36a', '#e23b67'];
  const frag = document.createDocumentFragment();
  const nodes = [];
  for (let i = 0; i < 12; i++){
    const heart = i < 8;
    const el = document.createElement('span');
    el.className = 'burst';
    const s = heart ? rand(12, 22) : rand(4, 8);
    el.style.cssText = `position:absolute;left:${ox}px;top:${oy}px;width:${s}px;height:${s}px;margin:${-s / 2}px 0 0 ${-s / 2}px;pointer-events:none;z-index:4;`;
    if (heart) el.innerHTML = miniHeartSVG(pick(cols));
    else { el.style.borderRadius = '50%'; el.style.background = 'radial-gradient(circle,#fff,rgba(255,210,150,0) 70%)'; }
    frag.appendChild(el); nodes.push({ el, heart });
  }
  hero.appendChild(frag);
  nodes.forEach(({ el, heart }) => {
    const ang = rand(-Math.PI, 0);                       // fan upward + out
    const dist = rand(heart ? 70 : 40, heart ? 190 : 120);
    gsap.to(el, {
      x: Math.cos(ang) * dist, y: Math.sin(ang) * dist - rand(10, 50),
      rotation: rand(-120, 120), scale: heart ? rand(0.7, 1.2) : rand(0.4, 1),
      duration: rand(0.7, 1.15), ease: 'power2.out',
    });
    gsap.to(el, { opacity: 0, duration: 0.5, delay: rand(0.35, 0.6), ease: 'power1.in', onComplete: () => el.remove() });
  });
}

/* --- the shot + Acts 2–3 timeline ------------------------------------------ */
function shotGeom(){
  // flight distance = straight-line from the arrow tip to the heart (measured on
  // screen, rotation-aware). Moving the arrow that far along its local "up" axis
  // — which is aimed at the heart — lands the tip dead-centre on it.
  const tipR = tip.getBoundingClientRect();
  const tRect = target.getBoundingClientRect();
  const tipX = tipR.left + tipR.width / 2, tipY = tipR.top + tipR.height / 2;
  const tcx = tRect.left + tRect.width / 2, tcy = tRect.top + tRect.height / 2;
  const flightDist = Math.hypot(tcx - tipX, tcy - tipY);
  const fallPx = Math.min(H * 0.26, H - tcy - tRect.height * 0.4);
  const impactX = tcx, impactY = tcy + fallPx;
  const distC = Math.hypot(Math.max(impactX, W - impactX), Math.max(impactY, H - impactY));
  const reach = Math.hypot(W / 2, H / 2);
  return {
    arrowStartY: arrowBaseY + curDraw,
    arrowFlyY:   arrowBaseY + curDraw - flightDist,       // local -Y = toward the heart
    drawnNock:   REST_NOCK + curDraw / svgScale,
    fallPx, fx: impactX - W / 2, fy: impactY - H / 2,
    floodScale: (distC * 1.12) / 70, bloomScale: (reach * 1.2) / 30,
  };
}

function buildFieldParticles(){
  if (!kParticles) return;
  kParticles.innerHTML = '';
  const cols = ['#ffd1e0', '#ff8fae', '#ffd36a', '#ffffff', '#ff9ebe'];
  for (let i = 0; i < 18; i++){
    const isHeart = i % 2 === 0;
    const el = document.createElement('div');
    el.className = 'kPart';
    const s = isHeart ? rand(12, 22) : rand(4, 8);
    el.style.cssText = `position:absolute;left:${rand(3, 97)}%;top:${rand(8, 92)}%;width:${s}px;height:${s}px;pointer-events:none;`;
    if (isHeart) {
      el.innerHTML = miniHeartSVG(pick(cols));
      el.style.opacity = `${rand(0.35, 0.8)}`;
    } else {
      el.style.borderRadius = '50%';
      el.style.background = pick(cols);
      el.style.boxShadow = '0 0 10px rgba(255,255,255,0.85)';
      el.style.opacity = `${rand(0.4, 0.9)}`;
    }
    kParticles.appendChild(el);
    gsap.to(el, {
      y: -rand(50, 130),
      x: rand(-25, 25),
      rotation: rand(-45, 45),
      duration: rand(4, 8),
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: -rand(0, 5)
    });
  }
}

let filmTL = null;
function buildFilm(m){
  buildFieldParticles();
  const t = gsap.timeline({
    paused: true,
    onComplete: () => {
      gsap.set(field, { autoAlpha: 0 });
      treeStart();
      // fade promptly so the growing tree is revealed with no white hold
      gsap.to(bloom, { autoAlpha: 0, duration: 1.15, ease: 'power2.out' });
    },
  });

  // reset (t=0)
  t.set(target, { y: 0, scaleX: 1, scaleY: 1, opacity: 1 })
   .set(arrow, { opacity: 1, x: arrowBaseX, y: m.arrowStartY, scaleY: 1 })
   .set([flood, bloom], { autoAlpha: 0, scale: 0.001, x: 0, y: 0 })
   .set(flood, { x: m.fx, y: m.fy })
   .set(field, { autoAlpha: 0 })
   .set('.blob', { opacity: 0 })
   .set(camera, { scale: 1, yPercent: 0 })
   .set(fgrid, { xPercent: 0, yPercent: 0 })
   .set(barTop, { yPercent: -100 })
   .set(barBot, { yPercent: 100 })
   .set([kSideLeft, kSideRight], { opacity: 0, scale: 0.7, y: 14 })
   .set(kEyebrow, { opacity: 0, y: 14 })
   .set(kSub, { opacity: 0, y: 14 })
   .set(kChars, { transformPerspective: 620, transformOrigin: '50% 100%', yPercent: 135, rotationX: -82 })
   .set(uline, { drawn: 0 });

  // --- the shot: string snaps (twang), arrow flies up into the heart --------
  t.fromTo(nockProxy, { val: m.drawnNock }, { val: REST_NOCK, duration: 0.5, ease: 'elastic.out(1,0.34)', onUpdate: applyNock }, 0)
   .to(arrow, { y: m.arrowFlyY, duration: 0.26, ease: 'power2.in' }, 0)
   .to(arrow, { scaleY: 1.16, duration: 0.14, ease: 'power2.in' }, 0)
   .to(arrow, { scaleY: 1.0, duration: 0.1, ease: 'power1.out' }, 0.16)
   .to(aim, { opacity: 0, duration: 0.18 }, 0)
   .to([eyebrow, hint], { opacity: 0, duration: 0.2, ease: 'power1.out' }, 0);

  // --- the strike: the arrow embeds, the heart recoils, then holds pierced --
  t.add(burstHearts, 0.26)
   // recoil along the arrow's line (up + right), springing back
   .to(target, { x: 7, y: -9, duration: 0.06, ease: 'power2.out' }, 0.26)
   .to(target, { x: 0, y: 0, duration: 0.32, ease: 'power2.out' }, 0.32)
   .to(target, { scale: 1.14, duration: 0.06, ease: 'power2.out' }, 0.26)
   .to(target, { scale: 1.0, duration: 0.26, ease: 'power2.inOut' }, 0.32)
   // the arrow shudders in the wound, holds embedded so the hit reads, then sinks in
   .to(arrow, { rotation: '+=4', duration: 0.05, yoyo: true, repeat: 4, ease: 'sine.inOut' }, 0.27)
   .set(arrow, { rotation: 0 }, 0.52)
   .to(arrow, { opacity: 0, duration: 0.16, ease: 'power1.out' }, 0.56);

  // --- the fall + the burst / flood -----------------------------------------
  t.to(target, { y: m.fallPx, scaleX: 0.84, scaleY: 1.3, duration: 0.34, ease: 'power1.in' }, 0.64)
   .to(target, { scaleX: 1.4, scaleY: 0.6, duration: 0.07, ease: 'power2.out' }, 0.98)
   .set(flood, { autoAlpha: 1 }, 1.00)
   .fromTo(flood, { scale: 0.02 }, { scale: m.floodScale, duration: 0.34, ease: 'power2.in' }, 1.00)
   .to(target, { opacity: 0, duration: 0.12, ease: 'power1.out' }, 1.06);

  // seam: the field is the same rose as the flood
  t.set(field, { autoAlpha: 1 }, 1.32)
   .set(hero, { autoAlpha: 0 }, 1.33)
   .to('.blob', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 1.34)
   .set(flood, { autoAlpha: 0 }, 1.36);

  // --- the camera push (smoother, extended to 5.6s to match the slower reading time)
  t.fromTo(camera, { scale: 1.0, yPercent: 0 }, { scale: 1.06, yPercent: -1.2, duration: 5.6, ease: 'none' }, 1.38)
   .fromTo(fgrid, { xPercent: 0, yPercent: 0 }, { xPercent: -1.5, yPercent: -1.0, duration: 5.6, ease: 'none' }, 1.38);

  // beat markers for the recorder's soundtrack (no-ops off ?record)
  t.call(cue, ['hit'], 0.26)
   .call(cue, ['flood'], 1.00)
   .call(cue, ['wish'], 2.00)
   .call(cue, ['wish2'], 2.70)
   .call(cue, ['bloom'], 6.50);

  // cinema bars ease into a letterbox
  t.to(barTop, { yPercent: 0, duration: 0.8, ease: 'power2.out' }, 1.5)
   .to(barBot, { yPercent: 0, duration: 0.8, ease: 'power2.out' }, 1.5);

  // --- the kinetic wish & side photos entry (smoother, romantic pacing) ------------
  t.call(() => updateActiveNavStep(2), [], 1.85);
  t.to(kSideLeft,  { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'back.out(1.3)' }, 1.65)
   .to(kSideRight, { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: 'back.out(1.3)' }, 1.75)
   .to(kEyebrow, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 1.85)
   .to(line1Chars, { yPercent: 0, rotationX: 0, duration: 0.75, ease: 'power3.out', stagger: 0.045 }, 2.30)
   .to(line2Chars, { yPercent: 0, rotationX: 0, duration: 0.75, ease: 'power3.out', stagger: 0.045 }, 2.90)
   .to(uline, { drawn: 1, duration: 0.75, ease: 'power2.inOut' }, 3.60)
   .to(kSub, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' }, 4.10);

  // --- the handoff bloom (holds until t=6.5 so the wish can be enjoyed fully) ---
  t.to(barTop, { yPercent: -100, duration: 0.7, ease: 'power2.in' }, 6.4)
   .to(barBot, { yPercent: 100, duration: 0.7, ease: 'power2.in' }, 6.4)
   .set(bloom, { autoAlpha: 1 }, 6.5)
   .fromTo(bloom, { scale: 0.02 }, { scale: m.bloomScale, duration: 0.75, ease: 'power2.in' }, 6.5);

  return t;
}

/* --- draw / release interaction -------------------------------------------- */
let played = false, drawing = false, startPX = 0, startPY = 0, startDraw = 0;

function fire(){
  if (played) return;
  played = true;
  drawing = false;
  playMusic();
  stopBeat();
  cue('release'); cue('whoosh');
  filmTL = buildFilm(shotGeom());
  filmTL.play(0);
}

function springBack(){
  const from = curDraw;
  gsap.to({ d: from }, { d: 0, duration: 0.55, ease: 'elastic.out(1,0.4)', onUpdate() { setDraw(this.targets()[0].d); } });
}

function autoFire(){
  if (played) return;
  recT0 = performance.now(); cue('draw');       // t=0 of the soundtrack
  gsap.to({ d: curDraw }, {
    d: maxDraw * 0.94, duration: 0.62, ease: 'power2.inOut',
    onUpdate() { setDraw(this.targets()[0].d); },
    onComplete: () => gsap.delayedCall(0.16, fire),
  });
}

archery.addEventListener('pointerdown', (e) => {
  if (played) return;
  drawing = true;
  try { archery.setPointerCapture(e.pointerId); } catch (_) {}
  startPX = e.clientX; startPY = e.clientY; startDraw = curDraw;
  e.preventDefault();
});
archery.addEventListener('pointermove', (e) => {
  if (!drawing) return;
  // project the drag onto the pull-back axis, so dragging back along the aim
  // (down + away from the heart) draws the string — on any shot angle.
  const proj = (e.clientX - startPX) * pullUX + (e.clientY - startPY) * pullUY;
  setDraw(startDraw + proj);
});
function endDraw(){
  if (!drawing) return;
  drawing = false;
  if (curDraw > maxDraw * 0.26) fire(); else springBack();
}
archery.addEventListener('pointerup', endDraw);
archery.addEventListener('pointercancel', endDraw);
archery.addEventListener('keydown', (e) => {
  if (played) return;
  if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); autoFire(); }
});

/* boot Act 1: reveal the target + bow + hint, then start the beat */
function enter(){
  updateActiveNavStep(1);
  gsap.set(hero, { autoAlpha: 1 });
  refreshRig();
  setDraw(0);
  gsap.set([eyebrow, hint], { opacity: 0, y: 14 });
  gsap.set(target, { opacity: 0, y: 10, scaleX: 0.9, scaleY: 0.9 });
  gsap.set(archery, { opacity: 0, scale: 0.85 });        // scale from the grip; keeps rotation
  gsap.set(heartGlow, { opacity: 0, scale: 1 });
  gsap.set(arrow, { opacity: 1 });

  const tl = gsap.timeline({ onComplete: startBeat });
  tl.to(target,   { opacity: 1, y: 0, scaleX: 1, scaleY: 1, duration: 0.8, ease: 'power3.out' }, 0.1)
    .to(heartGlow,{ opacity: 0.7, duration: 0.8, ease: 'power2.out' }, 0.2)
    .to(archery,  { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, 0.28)
    .to(eyebrow,  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.4)
    .to(hint,     { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.7);
}

/* back to Act 1, ready to be drawn again */
function resetAll(){
  treeStop();
  showWish(false);
  closeFilm();

  // Dừng và reset hoàn toàn màn Tinh Cầu Vũ Trụ
  isCosmosActive = false;
  if (cosmosRAF) { cancelAnimationFrame(cosmosRAF); cosmosRAF = null; }
  cosmosIntroStarted = false;
  cosmosFadeInProgress = false;
  cosmosFadeOpacity = 0.1;
  if (cosmosCamera) {
    cosmosCamera.position.set(0, 20, 30);
    cosmosCamera.lookAt(0, 0, 0);
  }
  if (cosmosControls) {
    cosmosControls.enabled = false;
    cosmosControls.target.set(0, 0, 0);
    cosmosControls.update();
  }
  const filmCosmosView = $('filmCosmosView');
  if (filmCosmosView) {
    filmCosmosView.classList.remove('is-active');
    filmCosmosView.hidden = true;
    filmCosmosView.style.display = 'none';
  }
  const filmSphereView = $('filmSphereView');
  if (filmSphereView) {
    filmSphereView.classList.remove('is-active');
    filmSphereView.hidden = true;
    filmSphereView.style.display = 'none';
  }

  pauseMusic();
  window.bdayDone = false;
  replayArmed = false;
  if (filmTL){ filmTL.pause(0); }
  gsap.set([flood, bloom], { autoAlpha: 0 });
  gsap.set(field, { autoAlpha: 0 });
  gsap.set(arrow, { opacity: 1, scaleY: 1 });
  played = false;
  enter();
}

const cosmosReplayBtn = $('cosmosReplayBtn');
cosmosReplayBtn?.addEventListener('click', resetAll);

/* ============================================================
   SIZING + BOOT
   ============================================================ */
function resize(){
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = canvas.clientWidth || window.innerWidth || 800;
  H = canvas.clientHeight || window.innerHeight || 600;
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  buildSprites();
  buildScene();
  if (reduceMotion){ drawFinal(); return; }
  if (played && filmTL){
    const at = filmTL.time(); const active = filmTL.isActive();
    filmTL = buildFilm(shotGeom());
    filmTL.pause(at);
    if (active) filmTL.play(at);
  } else {
    refreshRig(); setDraw(0);
  }
}
let resizeRAF = 0;
window.addEventListener('resize', () => { if (resizeRAF) return; resizeRAF = requestAnimationFrame(() => { resizeRAF = 0; resize(); }); });

resize();

if (reduceMotion){
  drawFinal();
} else {
  buildMotes();
  enter();
}

/* ============================================================
   BACKGROUND MUSIC & CINEMATIC MEMORY FILM (57 PHOTOS)
   ============================================================ */
const bgMusic = $('bgMusic');
const musicToggleBtn = $('musicToggleBtn');
const musicIcon = $('musicIcon');
const musicText = $('musicText');
let isMusicPlaying = false;

function updateMusicUI(){
  if (musicIcon) musicIcon.classList.toggle('is-playing', isMusicPlaying);
  if (musicText) musicText.textContent = isMusicPlaying ? 'Tắt Nhạc' : 'Bật Nhạc';
}

function playMusic(){
  if (!bgMusic) return;
  bgMusic.play().then(() => {
    isMusicPlaying = true;
    updateMusicUI();
  }).catch(() => {});
}

function pauseMusic(){
  if (!bgMusic) return;
  bgMusic.pause();
  isMusicPlaying = false;
  updateMusicUI();
}

function toggleMusic(){
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

musicToggleBtn?.addEventListener('click', toggleMusic);

// --- MEMORY FILM SLIDESHOW ---
const MEMORIES = MEMORY_URLS;

const CAPTIONS = [
  "🌸 Khoảnh khắc thanh xuân rực rỡ mở đầu thước phim của tụi mình",
  "✈️ Chuyến bay sắp tới đưa bạn tui vươn ra biển lớn",
  "✨ Vậy mà đã mấy năm rồi",
  "😂 Không biết mốt gặp lại còn nhớ nhau không",
  "🍵 Qua bển nhớ ăn uống đầy đủ, cấm nhịn ăn giảm cân nha má!",
  "☀️ Qua đó cày giàu rồi thì đừng quên tụi tao nhé",
  "📸 Một thời báo cùng lũ giặc",
  "🌍 Sang đó mà hốt được anh nào thì đâm cưới nhớ mời",
  "🌻 Nơi phương xa nhớ luôn giữ nụ cười lạc quan này nhé",
  "🍔 Qua bển nhớ khám phá đồ ăn ngon thì ship về cho tụi tao nhé",
  "🕊️ Tự tin sải cánh trên bầu trời mới ngập tràn hoài bão",
  "🎓 Mới hồi còn ngại ngại mà chả biết từ lúc nào đã thân nhau như vậy rồi",
  "🍀 May mắn và quý nhân sẽ luôn phù trợ cho Hồng Vân",
  "🌊 Chuyến đi biển huyền thoại lưu giữ bao tiếng cười",
  "💫 Dù cách nhau cả nửa vòng trái đất thì tim vẫn gần xịt",
  "🌷 Cô gái nhỏ nhưng mang trong mình ước mơ to bự",
  "🧥 Mùa đông bên đó lạnh lắm, nhớ mặc ấm như gấu bông nha",
  "🌈 Sau cơn mưa trời lại sáng, hành trình mới sẽ ngập tràn may mắn",
  "☕ Giữ liên lạc nào stress thì gọi về cho tụi tao nha mày",
  "⭐ Bạn tui là đỉnh nhất, tự tin tỏa sáng nơi đất khách nha!",
  "🤪 Những khoảnh khắc dìm hàng nhưng vẫn thấy cưng xỉu",
  "🎁 Qua đó nhớ săn đồ xịn gửi về cho lũ bạn này nha",
  "🎉 Thanh xuân có cậu đồng hành là điều siêu tuyệt vời",
  "💌 Tụi tui ở nhà luôn là hậu phương vững chắc đón cậu về",
  "🌸 Trưởng thành là khi tụi mình bay xa nhưng tình bạn không đổi",
  "💪 Học giỏi, kiếm nhiều tiền rồi bao tụi tui đi du lịch tiếp nha",
  "✨ Hãy luôn tự hào về những gì cậu đã và đang nỗ lực đạt được",
  "🌤️ Chúc mỗi ngày thức dậy đều là một ngày vui vẻ, bình an",
  "🍁 Nhớ những ngày đánh bài búng tai đỏ chót",
  "💖 Bạn thân là người dù ở đâu cũng nhớ đến nhau đầu tiên",
  "🌟 Tỏa sáng rực rỡ trên con đường cậu đã chọn nhé",
  "🥘 Nhớ tự nấu ăn ngon, đừng ăn mì gói hoài nha cô nương",
  "🎒 Hành trang mang theo là trọn vẹn tình cảm của tụi tớ",
  "🥂 Hẹn ngày cậu về nước làm bữa tiệc ăn mừng hoành tráng!",
  "🌺 Luôn giữ vững sự tự tin và năng lượng tích cực này",
  "🕊️ Bay cao bay xa, chinh phục mọi đỉnh cao mới",
  "🌿 Một chặng đường mới mở ra với bao điều thú vị đang chờ",
  "😆 Về mà không mua quà là tụi này giận á",
  "🎈 Cảm ơn vì đã luôn là một người bạn tuyệt vời của nhau",
  "🌞 Bầu trời nơi phương xa sẽ chứng kiến sự thành công của cậu",
  "🍀 Vạn sự hanh thông, mọi dự định đều thành công rực rỡ",
  "📱 Nhớ check tin nhắn nhóm thường xuyên, cấm có seen rồi bơ!",
  "👗 Dù ở phương trời nào vẫn phải luôn xinh đẹp và rạng rỡ",
  "🤝 Tình bạn chúng mình mãi bền vững theo năm tháng",
  "🏖️ Kỷ niệm những chuyến đi cháy phố cùng hội bạn thân",
  "✈️ Lên đường may mắn, thuận buồm xuôi gió nha Hồng Vân!",
  "🍫 Cuộc sống xứ người ngọt ngào như sô cô la",
  "🎯 Chúc cậu đạt được mọi mục tiêu học tập và sự nghiệp",
  "🥰 Dù có bạn mới bên đó cũng không được quên bạn cũ nha",
  "💃 Tự tin bước đi trên con đường của riêng mình",
  "📚 Học hết mình nhưng cũng nhớ quẩy hết nhiệt nhé",
  "❄️ Chạm tay vào tuyết trắng và trải nghiệm những điều mới lạ",
  "💎 Qua đó đừng có đấm sếp nha má",
  "🚀 Bứt phá mọi giới hạn, thành công vang dội",
  "🥳 Kỷ niệm những lần cười muốn tiền đình cùng nhau",
  "💐 Luôn có những người bạn ở đây dõi theo và ủng hộ cậu",
  "🏰 Chúc cậu xây dựng nên một tương lai rực rỡ như cổ tích",
  "🔥 Cháy hết mình với đam mê và hoài bão tuổi trẻ",
  "🥐 Thưởng thức thật nhiều món ngon nha xong về đây nấu cho tụi tao ăn nữa",
  "🎊 Mọi điều ước của cậu đều sẽ sớm thành hiện thực",
  "🌟 Luôn là niềm tự hào của gia đình và bạn bè",
  "💖 Cảm ơn vì những năm tháng thanh xuân tuyệt đẹp bên nhau",
  "🎓 Chúc Hồng Vân vạn dặm bình an, thành công rực rỡ trở về! ♥"
];

const openFilmBtn = $('openFilmBtn');
const filmModal = $('filmModal');
const filmClose = $('filmClose');
const filmBackdrop = $('filmBackdrop');
const filmAmbi = $('filmAmbi');
const filmPhotoWrap = $('filmPhotoWrap');
const filmImg = $('filmImg');
const filmTag = $('filmTag');
const filmIndex = $('filmIndex');
const filmPrev = $('filmPrev');
const filmNext = $('filmNext');
const filmPlayToggle = $('filmPlayToggle');
const filmProgressFill = $('filmProgressFill');
const filmThumbTrack = $('filmThumbTrack');

const filmZoomModal = $('filmZoomModal');
const filmZoomImg = $('filmZoomImg');
const filmZoomCaption = $('filmZoomCaption');
const filmZoomClose = $('filmZoomClose');
const filmZoomBackdrop = $('filmZoomBackdrop');

let curFilmIdx = 0;
let isFilmAutoPlaying = true;
let filmInterval = null;
let isZoomOpen = false;
const KEN_BURNS_CLASSES = ['ken-burns-1', 'ken-burns-2', 'ken-burns-3'];

// --- DRAGGABLE THUMBNAIL TRACK (Kéo qua lại loạt ảnh mượt mà 100% phản hồi) ---
let isThumbDragging = false;
let startPointerX = 0;
let startScrollLeft = 0;
let dragDistance = 0;

function setupThumbDrag(){
  const track = $('filmThumbTrack');
  if (!track || track.dataset.dragInit) return;
  track.dataset.dragInit = 'true';

  const onPointerDown = (e) => {
    isThumbDragging = true;
    startPointerX = e.clientX;
    startScrollLeft = track.scrollLeft;
    dragDistance = 0;
    track.classList.add('is-dragging');
  };

  const onPointerMove = (e) => {
    if (!isThumbDragging) return;
    const dx = e.clientX - startPointerX;
    dragDistance = Math.abs(dx);
    track.scrollLeft = startScrollLeft - dx;
  };

  const onPointerUp = () => {
    if (isThumbDragging) {
      isThumbDragging = false;
      track.classList.remove('is-dragging');
      // Đặt timeout ngắn để phân biệt rõ giữa click và kéo
      setTimeout(() => {
        dragDistance = 0;
      }, 80);
    }
  };

  track.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  // Hỗ trợ cuộn ngang bằng con lăn chuột mượt mà
  track.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  }, { passive: false });
}

function initFilmThumbnails(){
  if (!filmThumbTrack) return;
  filmThumbTrack.innerHTML = '';
  MEMORIES.forEach((url, i) => {
    const btn = document.createElement('button');
    btn.className = `filmThumb ${i === curFilmIdx ? 'is-active' : ''}`;
    btn.type = 'button';
    btn.setAttribute('aria-label', `Xem ảnh ${i + 1}`);
    btn.innerHTML = `<img src="${url}" loading="lazy" alt="Ảnh ${i + 1}" />`;
    btn.addEventListener('click', () => {
      // Nếu chỉ là click hoặc rê rất nhẹ (< 6px) thì luôn kích hoạt xem ảnh
      if (dragDistance > 6) return;
      showFilmSlide(i);
      startFilmTimer();
    });
    filmThumbTrack.appendChild(btn);
  });
  setupThumbDrag();
}

function showFilmSlide(idx){
  curFilmIdx = (idx + MEMORIES.length) % MEMORIES.length;
  if (!filmImg) return;
  
  // Cập nhật thông tin text và thanh tiến trình ổn định
  if (filmIndex) filmIndex.textContent = `${curFilmIdx + 1} / ${MEMORIES.length}`;
  if (filmTag) filmTag.textContent = CAPTIONS[curFilmIdx % CAPTIONS.length];
  if (filmProgressFill) {
    const pct = ((curFilmIdx + 1) / MEMORIES.length) * 100;
    filmProgressFill.style.width = `${pct}%`;
  }

  // Đánh dấu và tự động cuộn thumbnail đang phát vào giữa tầm nhìn
  const allThumbs = filmThumbTrack?.querySelectorAll('.filmThumb');
  allThumbs?.forEach((t, i) => {
    const active = i === curFilmIdx;
    t.classList.toggle('is-active', active);
    if (active && filmThumbTrack && !isThumbDragging) {
      const tLeft = t.offsetLeft;
      const tWidth = t.offsetWidth;
      const trackWidth = filmThumbTrack.offsetWidth;
      const targetScroll = tLeft - (trackWidth / 2) + (tWidth / 2);
      filmThumbTrack.scrollTo({ left: targetScroll, behavior: 'smooth' });
    }
  });

  // Chuyển ảnh mượt mà kèm hiệu ứng chuyển động Ken Burns sống động
  filmImg.style.opacity = '0';
  
  setTimeout(() => {
    const src = MEMORIES[curFilmIdx];
    filmImg.src = src;
    if (filmAmbi) filmAmbi.src = src;
    filmImg.className = KEN_BURNS_CLASSES[curFilmIdx % KEN_BURNS_CLASSES.length];
    filmImg.style.opacity = '1';
  }, 140);
}

function nextFilmSlide(){
  if (curFilmIdx === MEMORIES.length - 1 && isFilmAutoPlaying) {
    // Khi phát hết 63 ảnh, tự động mở màn phóng to ảnh cuối kèm nút "Ấn đi cậu"
    showEndOfFilmCard();
    return;
  }
  showFilmSlide(curFilmIdx + 1);
}

function prevFilmSlide(){
  showFilmSlide(curFilmIdx - 1);
}

function startFilmTimer(){
  stopFilmTimer();
  filmInterval = setInterval(() => {
    if (isFilmAutoPlaying && !isZoomOpen && !isEndCardOpen && !isSphereActive) nextFilmSlide();
  }, 3400);
}

function stopFilmTimer(){
  if (filmInterval) { clearInterval(filmInterval); filmInterval = null; }
}

// --- FULLSCREEN PHOTO ZOOM LIGHTBOX (Phóng to ảnh bất kỳ & Tạm dừng) ---
function openZoomPhoto(){
  if (!filmZoomModal || !filmZoomImg) return;
  stopFilmTimer(); // Tạm dừng chuyển slide, nhạc vẫn chạy
  isZoomOpen = true;
  filmZoomImg.src = MEMORIES[curFilmIdx];
  if (filmZoomCaption) filmZoomCaption.textContent = CAPTIONS[curFilmIdx % CAPTIONS.length];
  filmZoomModal.hidden = false;
  requestAnimationFrame(() => {
    filmZoomModal.classList.add('is-open');
  });
}

function closeZoomPhoto(){
  if (!filmZoomModal || !isZoomOpen) return;
  isZoomOpen = false;
  filmZoomModal.classList.remove('is-open');
  setTimeout(() => {
    filmZoomModal.hidden = true;
  }, 350);
  // Tự động chạy tiếp thước phim
  if (isFilmAutoPlaying && !isEndCardOpen && !isSphereActive) {
    startFilmTimer();
  }
}

// --- END OF FILM CARD (Bức ảnh cuối + Nút "Ấn đi cậu") ---
const filmEndCard = $('filmEndCard');
const filmEndContent = $('filmEndContent');
const filmEndTriggerBtn = $('filmEndTriggerBtn');
let isEndCardOpen = false;

function showEndOfFilmCard(){
  stopFilmTimer();
  if (!filmEndCard) return;
  isEndCardOpen = true;
  filmEndCard.hidden = false;
  if (filmEndContent) gsap.set(filmEndContent, { scale: 1, opacity: 1 });
  requestAnimationFrame(() => {
    filmEndCard.classList.add('is-open');
  });
}

function hideEndOfFilmCard(){
  if (!filmEndCard) return;
  isEndCardOpen = false;
  filmEndCard.classList.remove('is-open');
  setTimeout(() => {
    filmEndCard.hidden = true;
  }, 500);
}

/* ============================================================
   3D PHOTO SPHERE VIEW (Quả Cầu Kỷ Niệm 63 Ảnh 3D - 8-3-main)
   ============================================================ */
let sphereScene = null, sphereCamera = null, sphereRenderer = null;
let sphereGroup = null, sphereMeshes = [], sphereTextures = [];
let sphereRAF = null, isSphereActive = false;
let isSphereInside = false;
let spTargetCamZ = 9.2, spCurrentCamZ = 9.2;
let spRotX = 0, spRotY = 0;
let spTargetRotX = 0, spTargetRotY = 0;
let spIsDragging = false, spMouseDownX = 0, spMouseDownY = 0, spWasDrag = false;
const SP_RADIUS = 4.2;

function spCreatePatch(r, t0, t1, p0, p1, ws, hs) {
  const geo = new THREE.BufferGeometry();
  const verts = [], uvs = [], idx = [];
  for (let y = 0; y <= hs; y++) {
    const v = y / hs, phi = p0 + v * (p1 - p0);
    for (let x = 0; x <= ws; x++) {
      const u = x / ws, theta = t0 + u * (t1 - t0);
      verts.push(r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
      uvs.push(u, 1 - v);
    }
  }
  for (let y = 0; y < hs; y++) for (let x = 0; x < ws; x++) {
    const a = y * (ws + 1) + x, b = a + 1, c = a + (ws + 1), d = c + 1;
    idx.push(a, c, b, b, c, d);
  }
  geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function getSphereDefaultCamZ(){
  const w = window.innerWidth, h = window.innerHeight;
  const aspect = w / h;
  if (aspect < 1) {
    // Chế độ màn hình dọc / Mobile: Tự động lùi camera ra xa vừa vặn để thấy trọn vẹn 100% quả cầu
    return Math.max(10.5, (9.2 / aspect) * 0.78);
  }
  return 9.2;
}

function initSphereScene(){
  const container = $('sphereContainer');
  if (!container || sphereRenderer) return;

  const w = window.innerWidth;
  const h = window.innerHeight;

  const defaultZ = getSphereDefaultCamZ();
  spTargetCamZ = defaultZ;
  spCurrentCamZ = defaultZ;

  sphereScene = new THREE.Scene();
  sphereCamera = new THREE.PerspectiveCamera(65, w / h, 0.1, 1000);
  sphereCamera.position.set(0, 0, defaultZ);

  sphereRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  sphereRenderer.setSize(w, h);
  sphereRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  sphereRenderer.setClearColor(0x000000, 0);
  container.appendChild(sphereRenderer.domElement);

  sphereGroup = new THREE.Group();
  sphereScene.add(sphereGroup);

  // Load 63 textures for sphere in advance
  const loader = new THREE.TextureLoader();
  sphereTextures = MEMORIES.map(url => {
    const tex = loader.load(url);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  });

  buildPhotoSphere();
  setupSphereControls(container);
}

function buildPhotoSphere(){
  if (!sphereGroup) return;
  while(sphereGroup.children.length > 0){
    sphereGroup.remove(sphereGroup.children[0]);
  }
  sphereMeshes = [];

  const SP_ROWS = 6;
  const SP_POLAR_MARGIN = 0.015; // Bọc kín từ cực bắc đến cực nam, không để khoảng trống
  const phiStart = Math.PI * SP_POLAR_MARGIN;
  const phiEnd = Math.PI * (1 - SP_POLAR_MARGIN);
  const phiRange = phiEnd - phiStart;
  const totalTex = sphereTextures.length || 1;
  let texIdx = 0;

  for (let row = 0; row < SP_ROWS; row++) {
    const p1 = phiStart + (row / SP_ROWS) * phiRange;
    const p2 = phiStart + ((row + 1) / SP_ROWS) * phiRange;
    const pMid = (p1 + p2) / 2;
    const circ = 2 * Math.PI * SP_RADIUS * Math.sin(pMid);
    const imgH = (phiRange * SP_RADIUS) / SP_ROWS;
    const n = Math.max(4, Math.round(circ / imgH));
    const tStep = (2 * Math.PI) / n;

    for (let col = 0; col < n; col++) {
      const t = col * tStep;
      const tex = sphereTextures[texIdx % totalTex];
      texIdx++;

      const geo = spCreatePatch(SP_RADIUS, t, t + tStep, p1, p2, 8, 8);
      const mat = new THREE.MeshBasicMaterial({
        map: tex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.98
      });
      const mesh = new THREE.Mesh(geo, mat);
      sphereGroup.add(mesh);
      sphereMeshes.push(mesh);
    }
  }
}

function setupSphereControls(container){
  if (!container || container.dataset.ctrlInit) return;
  container.dataset.ctrlInit = 'true';

  let downT = 0, startX = 0, startY = 0, totalDist = 0;

  const onPointerDown = (clientX, clientY) => {
    spIsDragging = true;
    downT = performance.now();
    startX = clientX;
    startY = clientY;
    spMouseDownX = clientX;
    spMouseDownY = clientY;
    totalDist = 0;
  };

  const onPointerMove = (clientX, clientY) => {
    if (!spIsDragging) return;
    const dx = clientX - spMouseDownX;
    const dy = clientY - spMouseDownY;
    totalDist += Math.hypot(dx, dy);
    spTargetRotY += dx * 0.005;
    spTargetRotX += dy * 0.005;
    spMouseDownX = clientX;
    spMouseDownY = clientY;
  };

  const onPointerUp = (clientX, clientY) => {
    if (!spIsDragging) return;
    spIsDragging = false;
    const netDist = (clientX !== undefined && clientY !== undefined) ? Math.hypot(clientX - startX, clientY - startY) : totalDist;
    const dt = performance.now() - downT;
    // Chạm/Tap nhẹ trên điện thoại hoặc chuột click (di chuyển < 22px và thời gian < 500ms)
    if (netDist < 22 && totalDist < 30 && dt < 500) {
      toggleSphereViewMode();
    }
  };

  container.addEventListener('mousedown', (e) => onPointerDown(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => onPointerMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', (e) => onPointerUp(e.clientX, e.clientY));

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      onPointerUp(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    } else {
      onPointerUp();
    }
  }, { passive: true });

  const sphereHint = $('sphereHint');
  sphereHint?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSphereViewMode();
  });
}

function toggleSphereViewMode(){
  isSphereInside = !isSphereInside;
  spTargetCamZ = isSphereInside ? 0.15 : getSphereDefaultCamZ();
  const toggleText = $('sphereToggleText');
  const sphereHint = $('sphereHint');
  if (isSphereInside) {
    if (toggleText) toggleText.textContent = "Nhìn từ bên ngoài 🌐";
    if (sphereHint) sphereHint.textContent = "💫 Bạn đang ở bên trong quả cầu (Kéo để xoay 360° / Nhấn để ra ngoài)";
  } else {
    if (toggleText) toggleText.textContent = "Bước vào bên trong 360°";
    if (sphereHint) sphereHint.textContent = "✨ Nhấn vào quả cầu để bước vào bên trong 360°";
  }
}

function renderSphere(){
  if (!isSphereActive || !sphereRenderer) return;

  if (!spIsDragging) {
    spTargetRotY += 0.0035;
  }

  spCurrentCamZ += (spTargetCamZ - spCurrentCamZ) * 0.08;
  if (sphereCamera) sphereCamera.position.z = spCurrentCamZ;

  spRotX += (spTargetRotX - spRotX) * 0.1;
  spRotY += (spTargetRotY - spRotY) * 0.1;
  if (sphereGroup) {
    sphereGroup.rotation.x = spRotX;
    sphereGroup.rotation.y = spRotY;
  }

  sphereRenderer.render(sphereScene, sphereCamera);
  sphereRAF = requestAnimationFrame(renderSphere);
}

function showSphereView(e){
  if (e) { e.stopPropagation(); e.preventDefault(); }
  stopFilmTimer();
  updateActiveNavStep(5);
  isCosmosActive = false;
  if (cosmosRAF) { cancelAnimationFrame(cosmosRAF); cosmosRAF = null; }

  const filmContent = document.querySelector('.filmModal__content');
  const filmSphereView = $('filmSphereView');
  const filmCosmosView = $('filmCosmosView');

  if (filmContent) filmContent.style.display = 'none';
  if (filmCosmosView) {
    filmCosmosView.classList.remove('is-active');
    filmCosmosView.hidden = true;
    filmCosmosView.style.display = 'none';
  }

  if (filmSphereView) {
    filmSphereView.hidden = false;
    filmSphereView.style.display = 'flex';
    filmSphereView.classList.add('is-active');
  }
  isSphereActive = true;
  if (!sphereRenderer) {
    initSphereScene();
  } else if (sphereCamera) {
    const w = window.innerWidth, h = window.innerHeight;
    sphereCamera.aspect = w / h;
    sphereCamera.updateProjectionMatrix();
    sphereRenderer.setSize(w, h);
  }
  isSphereInside = false;
  const defCamZ = getSphereDefaultCamZ();
  spTargetCamZ = defCamZ;
  spCurrentCamZ = defCamZ;
  if (sphereCamera) sphereCamera.position.z = defCamZ;
  const sphereHint = $('sphereHint');
  if (sphereHint) sphereHint.textContent = "✨ Nhấn vào quả cầu để bước vào bên trong 360°";
  
  if (sphereRAF) cancelAnimationFrame(sphereRAF);
  sphereRAF = requestAnimationFrame(renderSphere);
}

function backToFilmView(e){
  if (e) { e.stopPropagation(); e.preventDefault(); }
  isSphereActive = false;
  if (sphereRAF) { cancelAnimationFrame(sphereRAF); sphereRAF = null; }
  isCosmosActive = false;
  if (cosmosRAF) { cancelAnimationFrame(cosmosRAF); cosmosRAF = null; }

  const filmContent = document.querySelector('.filmModal__content');
  const filmSphereView = $('filmSphereView');
  const filmCosmosView = $('filmCosmosView');

  if (filmSphereView) {
    filmSphereView.classList.remove('is-active');
    filmSphereView.hidden = true;
    filmSphereView.style.display = 'none';
  }
  if (filmCosmosView) {
    filmCosmosView.classList.remove('is-active');
    filmCosmosView.hidden = true;
    filmCosmosView.style.display = 'none';
  }

  if (filmContent) filmContent.style.display = 'flex';
  showFilmSlide(0);
  startFilmTimer();
}

filmEndTriggerBtn?.addEventListener('click', (e) => {
  if (e) { e.stopPropagation(); e.preventDefault(); }
  if (filmEndContent) {
    gsap.to(filmEndContent, {
      scale: 0.8,
      opacity: 0,
      duration: 0.35,
      ease: 'power2.out',
      onComplete: () => {
        hideEndOfFilmCard();
        gsap.set(filmEndContent, { scale: 1, opacity: 1 });
        showSphereView();
      }
    });
  } else {
    hideEndOfFilmCard();
    showSphereView();
  }
});

const sphereBackToFilmBtn = $('sphereBackToFilmBtn');
const sphereToCosmosBtn = $('sphereToCosmosBtn');
const cosmosBackToSphereBtn = $('cosmosBackToSphereBtn');
const cosmosBackToFilmBtn = $('cosmosBackToFilmBtn');

sphereBackToFilmBtn?.addEventListener('click', (e) => backToFilmView(e));
sphereToCosmosBtn?.addEventListener('click', (e) => showCosmosView(e));
cosmosBackToSphereBtn?.addEventListener('click', (e) => backToSphereFromCosmos(e));
cosmosBackToFilmBtn?.addEventListener('click', (e) => backToFilmFromCosmos(e));

$('filmSphereView')?.addEventListener('click', (e) => e.stopPropagation());
$('filmCosmosView')?.addEventListener('click', (e) => e.stopPropagation());

/* ============================================================
   3D COSMOS UNIVERSE ENGINE — BẢN GỐC TỪ FOLDER "vutru"
   ============================================================ */
let cosmosScene = null, cosmosCamera = null, cosmosRenderer = null, cosmosControls = null;
let cosmosPlanet = null, cosmosCentralGlow = null, cosmosTextRings = [];
let cosmosStarField = null, cosmosShootingStars = [];
let cosmosGalaxy = null, cosmosGalaxyMaterial = null;
let cosmosHeartGroupObjects = [];
let cosmosHintIcon = null, cosmosHintText = null;
let cosmosRAF = null, isCosmosActive = false;
let cosmosIntroStarted = false;
let cosmosFadeOpacity = 0.1, cosmosFadeInProgress = false;

// 3 dòng chữ bản gốc được đổi sang lời chúc cho Hồng Vân
const COSMOS_RING_TEXTS = [
  'CHÚC CẬU THÀNH CÔNG NHÉ',
  'NHỚ GIỮ SỨC KHỎE VÀ ĐỪNG QUÊN TỤI NÀY NHÉ',
  'NGUYỄN THỊ HỒNG VÂN'
];

// 10 bức ảnh kỷ niệm từ folder memories
const COSMOS_HEART_IMAGES = Array.from({ length: 10 }, (_, i) =>
  `/memories/memory-${String(i + 1).padStart(2, '0')}.jpg`
);

function createCosmosGlowMaterial(color, size = 128, opacity = 0.55) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const c = cv.getContext('2d');
  const gradient = c.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, color);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = gradient;
  c.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(cv);
  return new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
}

function createCosmosPlanetTexture(size = 512) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');

  const gradient = ctx.createRadialGradient(size / 2, size / 2, size / 8, size / 2, size / 2, size / 2);
  gradient.addColorStop(0.00, '#f8bbd0');
  gradient.addColorStop(0.12, '#f48fb1');
  gradient.addColorStop(0.22, '#f06292');
  gradient.addColorStop(0.35, '#ffffff');
  gradient.addColorStop(0.50, '#e1aaff');
  gradient.addColorStop(0.62, '#a259f7');
  gradient.addColorStop(0.75, '#b2ff59');
  gradient.addColorStop(1.00, '#3fd8c7');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const spotColors = ['#f8bbd0', '#f48fb1', '#f06292', '#ffffff', '#e1aaff', '#a259f7', '#b2ff59'];
  for (let i = 0; i < 40; i++) {
    const x = Math.random() * size, y = Math.random() * size;
    const radius = 30 + Math.random() * 120;
    const col = spotColors[Math.floor(Math.random() * spotColors.length)];
    const spotGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    spotGradient.addColorStop(0, col + 'cc');
    spotGradient.addColorStop(1, col + '00');
    ctx.fillStyle = spotGradient;
    ctx.fillRect(0, 0, size, size);
  }

  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * size, Math.random() * size);
    ctx.bezierCurveTo(Math.random() * size, Math.random() * size, Math.random() * size, Math.random() * size, Math.random() * size, Math.random() * size);
    ctx.strokeStyle = 'rgba(180, 120, 200, ' + (0.12 + Math.random() * 0.18) + ')';
    ctx.lineWidth = 8 + Math.random() * 18;
    ctx.stroke();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createCosmosNeonTexture(image, size = 256) {
  const cv = document.createElement('canvas');
  cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const aspectRatio = (image.width && image.height) ? (image.width / image.height) : 1;
  let drawWidth, drawHeight, offsetX, offsetY;
  if (aspectRatio > 1) {
    drawWidth = size;
    drawHeight = size / aspectRatio;
    offsetX = 0;
    offsetY = (size - drawHeight) / 2;
  } else {
    drawHeight = size;
    drawWidth = size * aspectRatio;
    offsetX = (size - drawWidth) / 2;
    offsetY = 0;
  }
  ctx.clearRect(0, 0, size, size);
  const cornerRadius = size * 0.1;
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(offsetX + cornerRadius, offsetY);
  ctx.lineTo(offsetX + drawWidth - cornerRadius, offsetY);
  ctx.arcTo(offsetX + drawWidth, offsetY, offsetX + drawWidth, offsetY + cornerRadius, cornerRadius);
  ctx.lineTo(offsetX + drawWidth, offsetY + drawHeight - cornerRadius);
  ctx.arcTo(offsetX + drawWidth, offsetY + drawHeight, offsetX + drawWidth - cornerRadius, offsetY + drawHeight, cornerRadius);
  ctx.lineTo(offsetX + cornerRadius, offsetY + drawHeight);
  ctx.arcTo(offsetX, offsetY + drawHeight, offsetX, offsetY + drawHeight - cornerRadius, cornerRadius);
  ctx.lineTo(offsetX, offsetY + cornerRadius);
  ctx.arcTo(offsetX, offsetY, offsetX + cornerRadius, offsetY, cornerRadius);
  ctx.closePath();
  ctx.clip();
  if (image && image.complete && image.naturalWidth > 0) {
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  }
  ctx.restore();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 5;
  ctx.shadowColor = '#ff69b4';
  ctx.shadowBlur = 16;
  ctx.stroke();

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createCosmosHintIcon() {
  cosmosHintIcon = new THREE.Group();
  cosmosHintIcon.name = 'hint-icon-group';
  cosmosScene.add(cosmosHintIcon);

  const cursorVisuals = new THREE.Group();
  const cursorShape = new THREE.Shape();
  const h = 1.5, w = h * 0.5;

  cursorShape.moveTo(0, 0);
  cursorShape.lineTo(-w * 0.4, -h * 0.7);
  cursorShape.lineTo(-w * 0.25, -h * 0.7);
  cursorShape.lineTo(-w * 0.5, -h);
  cursorShape.lineTo(w * 0.5, -h);
  cursorShape.lineTo(w * 0.25, -h * 0.7);
  cursorShape.lineTo(w * 0.4, -h * 0.7);
  cursorShape.closePath();

  const bgGeo = new THREE.ShapeGeometry(cursorShape);
  const bgMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const bgMesh = new THREE.Mesh(bgGeo, bgMat);

  const fgGeo = new THREE.ShapeGeometry(cursorShape);
  const fgMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
  const fgMesh = new THREE.Mesh(fgGeo, fgMat);
  fgMesh.scale.set(0.8, 0.8, 1);
  fgMesh.position.z = 0.01;

  cursorVisuals.add(bgMesh, fgMesh);
  cursorVisuals.position.y = h / 2;
  cursorVisuals.rotation.x = Math.PI / 2;

  const ringGeo = new THREE.RingGeometry(1.8, 2.0, 32);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, opacity: 0.6 });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2;
  cosmosHintIcon.userData.ringMesh = ringMesh;

  cosmosHintIcon.add(cursorVisuals);
  cosmosHintIcon.add(ringMesh);
  cosmosHintIcon.position.set(1.5, 1.5, 15);
  cosmosHintIcon.scale.set(0.8, 0.8, 0.8);
  if (cosmosPlanet) cosmosHintIcon.lookAt(cosmosPlanet.position);
  cosmosHintIcon.userData.initialPosition = cosmosHintIcon.position.clone();
}

function createCosmosHintText() {
  const canvasSize = 512;
  const cv = document.createElement('canvas');
  cv.width = cv.height = canvasSize;
  const ctx = cv.getContext('2d');
  const fontSize = 50;
  const text = 'Chạm Vào Tinh Cầu';

  ctx.font = `bold ${fontSize}px Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#ffb3de';
  ctx.shadowBlur = 5;
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(255, 200, 220, 0.8)';
  ctx.strokeText(text, canvasSize / 2, canvasSize / 2);
  ctx.shadowColor = '#e0b3ff';
  ctx.shadowBlur = 5;
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'rgba(220, 180, 255, 0.5)';
  ctx.strokeText(text, canvasSize / 2, canvasSize / 2);
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'white';
  ctx.fillText(text, canvasSize / 2, canvasSize / 2);

  const textTexture = new THREE.CanvasTexture(cv);
  const textMaterial = new THREE.MeshBasicMaterial({
    map: textTexture,
    transparent: true,
    side: THREE.DoubleSide
  });
  const planeGeo = new THREE.PlaneGeometry(16, 8);
  cosmosHintText = new THREE.Mesh(planeGeo, textMaterial);
  cosmosHintText.position.set(0, 15, 0);
  cosmosScene.add(cosmosHintText);
}

function createCosmosShootingStar() {
  if (!cosmosScene) return;
  const trailLength = 100;
  const headGeo = new THREE.SphereGeometry(2, 32, 32);
  const headMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending });
  const head = new THREE.Mesh(headGeo, headMat);

  const glowGeo = new THREE.SphereGeometry(3, 32, 32);
  const glowMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      uniform float time;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * (0.8 + sin(time * 5.0) * 0.2));
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  head.add(glow);

  const startPoint = new THREE.Vector3(-200 + Math.random() * 100, -100 + Math.random() * 200, -100 + Math.random() * 200);
  const endPoint = new THREE.Vector3(600 + Math.random() * 200, startPoint.y + (-100 + Math.random() * 200), startPoint.z + (-100 + Math.random() * 200));
  const c1 = new THREE.Vector3(startPoint.x + 200 + Math.random() * 100, startPoint.y + (-50 + Math.random() * 100), startPoint.z + (-50 + Math.random() * 100));
  const c2 = new THREE.Vector3(endPoint.x - 200 + Math.random() * 100, endPoint.y + (-50 + Math.random() * 100), endPoint.z + (-50 + Math.random() * 100));
  const curve = new THREE.CubicBezierCurve3(startPoint, c1, c2, endPoint);

  const trailPoints = [];
  for (let i = 0; i < trailLength; i++) trailPoints.push(curve.getPoint(i / (trailLength - 1)));
  const trailGeo = new THREE.BufferGeometry().setFromPoints(trailPoints);
  const trailMat = new THREE.LineBasicMaterial({ color: 0x99eaff, transparent: true, opacity: 0.7, linewidth: 2 });
  const trail = new THREE.Line(trailGeo, trailMat);

  const shootingStarGroup = new THREE.Group();
  shootingStarGroup.add(head);
  shootingStarGroup.add(trail);
  shootingStarGroup.userData = {
    curve,
    progress: 0,
    speed: 0.001 + Math.random() * 0.001,
    life: 0,
    maxLife: 300,
    head,
    trail,
    trailLength,
    trailPoints
  };
  cosmosScene.add(shootingStarGroup);
  cosmosShootingStars.push(shootingStarGroup);
}

function initCosmosScene(){
  const container = $('cosmosContainer');
  if (!container || cosmosRenderer) return;

  const w = window.innerWidth, h = window.innerHeight;
  cosmosScene = new THREE.Scene();
  cosmosScene.fog = new THREE.FogExp2(0x000000, 0.0015);

  cosmosCamera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100000);
  cosmosCamera.position.set(0, 20, 30);

  cosmosRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  cosmosRenderer.setSize(w, h);
  cosmosRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  cosmosRenderer.outputColorSpace = THREE.SRGBColorSpace;
  cosmosRenderer.setClearColor(0x000000, 1);
  container.appendChild(cosmosRenderer.domElement);

  cosmosControls = new OrbitControls(cosmosCamera, cosmosRenderer.domElement);
  cosmosControls.enableDamping = true;
  cosmosControls.autoRotate = true;
  cosmosControls.autoRotateSpeed = 0.5;
  cosmosControls.enabled = false;
  cosmosControls.target.set(0, 0, 0);
  cosmosControls.enablePan = false;
  cosmosControls.minDistance = 15;
  cosmosControls.maxDistance = 300;
  cosmosControls.zoomSpeed = 0.3;
  cosmosControls.rotateSpeed = 0.3;
  cosmosControls.update();

  buildCosmosUniverseOriginal();
  setupCosmosEvents(cosmosRenderer.domElement);
}

function buildCosmosUniverseOriginal(){
  if (!cosmosScene) return;

  // 1. Central Glow
  cosmosCentralGlow = createCosmosGlowMaterial('rgba(255,255,255,0.8)', 156, 0.25);
  cosmosCentralGlow.scale.set(8, 8, 1);
  cosmosCentralGlow.name = 'main-glow';
  cosmosScene.add(cosmosCentralGlow);

  // 2. Nebula Clouds
  for (let i = 0; i < 15; i++) {
    const hue = Math.random() * 360;
    const col = `hsla(${hue}, 80%, 50%, 0.6)`;
    const nebula = createCosmosGlowMaterial(col, 256);
    nebula.scale.set(100, 100, 1);
    nebula.position.set((Math.random() - 0.5) * 175, (Math.random() - 0.5) * 175, (Math.random() - 0.5) * 175);
    cosmosScene.add(nebula);
  }

  // 3. Galaxy Particles
  const galaxyParams = {
    count: 100000,
    arms: 6,
    radius: 100,
    spin: 0.5,
    randomness: 0.2,
    randomnessPower: 20,
    insideColor: new THREE.Color(0xd63ed6),
    outsideColor: new THREE.Color(0x48b8b8),
  };

  const positions = new Float32Array(galaxyParams.count * 3);
  const colors = new Float32Array(galaxyParams.count * 3);
  let pointIdx = 0;

  for (let i = 0; i < galaxyParams.count; i++) {
    const radius = Math.pow(Math.random(), galaxyParams.randomnessPower) * galaxyParams.radius;
    const branchAngle = (i % galaxyParams.arms) / galaxyParams.arms * Math.PI * 2;
    const spinAngle = radius * galaxyParams.spin;
    const randomX = (Math.random() - 0.5) * galaxyParams.randomness * radius;
    const randomY = (Math.random() - 0.5) * galaxyParams.randomness * radius * 1.2;
    const randomZ = (Math.random() - 0.5) * galaxyParams.randomness * radius;
    const totalAngle = branchAngle + spinAngle;

    if (radius < 30 && Math.random() < 0.8) continue;

    const i3 = pointIdx * 3;
    positions[i3] = Math.cos(totalAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(totalAngle) * radius + randomZ;

    const mixedColor = new THREE.Color(0xff66ff);
    mixedColor.lerp(new THREE.Color(0x66ffff), radius / galaxyParams.radius);
    mixedColor.multiplyScalar(0.7 + 0.3 * Math.random());
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
    pointIdx++;
  }

  const galaxyGeo = new THREE.BufferGeometry();
  galaxyGeo.setAttribute('position', new THREE.BufferAttribute(positions.slice(0, pointIdx * 3), 3));
  galaxyGeo.setAttribute('color', new THREE.BufferAttribute(colors.slice(0, pointIdx * 3), 3));

  cosmosGalaxyMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0.0 },
      uSize: { value: 50.0 * (window.devicePixelRatio || 1) },
      uRippleTime: { value: -1.0 },
      uRippleSpeed: { value: 40.0 },
      uRippleWidth: { value: 20.0 }
    },
    vertexShader: `
      uniform float uSize;
      uniform float uTime;
      uniform float uRippleTime;
      uniform float uRippleSpeed;
      uniform float uRippleWidth;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        if (uRippleTime > 0.0) {
          float rippleRadius = (uTime - uRippleTime) * uRippleSpeed;
          float particleDist = length(modelPosition.xyz);
          float strength = 1.0 - smoothstep(rippleRadius - uRippleWidth, rippleRadius + uRippleWidth, particleDist);
          strength *= smoothstep(rippleRadius + uRippleWidth, rippleRadius - uRippleWidth, particleDist);
          if (strength > 0.0) {
            vColor += vec3(strength * 2.0);
          }
        }
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;
        gl_PointSize = uSize / -viewPosition.z;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    transparent: true,
    vertexColors: true
  });
  cosmosGalaxy = new THREE.Points(galaxyGeo, cosmosGalaxyMaterial);
  cosmosScene.add(cosmosGalaxy);

  // 4. 10 Ảnh Kỷ Niệm Hình Trái Tim / Điểm Neon
  const numGroups = COSMOS_HEART_IMAGES.length;
  const pointsPerGroup = Math.floor(galaxyParams.count / numGroups);

  for (let group = 0; group < numGroups; group++) {
    const groupPositions = new Float32Array(pointsPerGroup * 3);
    const groupColorsNear = new Float32Array(pointsPerGroup * 3);
    const groupColorsFar = new Float32Array(pointsPerGroup * 3);
    let validPointCount = 0;

    for (let i = 0; i < pointsPerGroup; i++) {
      const idx = validPointCount * 3;
      const globalIdx = group * pointsPerGroup + i;
      const radius = Math.pow(Math.random(), galaxyParams.randomnessPower) * galaxyParams.radius;
      if (radius < 30) continue;

      const branchAngle = (globalIdx % galaxyParams.arms) / galaxyParams.arms * Math.PI * 2;
      const spinAngle = radius * galaxyParams.spin;
      const randomX = (Math.random() - 0.5) * galaxyParams.randomness * radius;
      const randomY = (Math.random() - 0.5) * galaxyParams.randomness * radius * 0.5;
      const randomZ = (Math.random() - 0.5) * galaxyParams.randomness * radius;
      const totalAngle = branchAngle + spinAngle;

      groupPositions[idx] = Math.cos(totalAngle) * radius + randomX;
      groupPositions[idx + 1] = randomY;
      groupPositions[idx + 2] = Math.sin(totalAngle) * radius + randomZ;

      const colorNear = new THREE.Color(0xffffff);
      groupColorsNear[idx] = colorNear.r;
      groupColorsNear[idx + 1] = colorNear.g;
      groupColorsNear[idx + 2] = colorNear.b;

      const colorFar = galaxyParams.insideColor.clone();
      colorFar.lerp(galaxyParams.outsideColor, radius / galaxyParams.radius);
      colorFar.multiplyScalar(0.7 + 0.3 * Math.random());
      groupColorsFar[idx] = colorFar.r;
      groupColorsFar[idx + 1] = colorFar.g;
      groupColorsFar[idx + 2] = colorFar.b;

      validPointCount++;
    }

    if (validPointCount === 0) continue;

    const groupGeoNear = new THREE.BufferGeometry();
    groupGeoNear.setAttribute('position', new THREE.BufferAttribute(groupPositions.slice(0, validPointCount * 3), 3));
    groupGeoNear.setAttribute('color', new THREE.BufferAttribute(groupColorsNear.slice(0, validPointCount * 3), 3));

    const groupGeoFar = new THREE.BufferGeometry();
    groupGeoFar.setAttribute('position', new THREE.BufferAttribute(groupPositions.slice(0, validPointCount * 3), 3));
    groupGeoFar.setAttribute('color', new THREE.BufferAttribute(groupColorsFar.slice(0, validPointCount * 3), 3));

    const posAttr = groupGeoFar.getAttribute('position');
    let cx = 0, cy = 0, cz = 0;
    for (let i = 0; i < posAttr.count; i++) {
      cx += posAttr.getX(i); cy += posAttr.getY(i); cz += posAttr.getZ(i);
    }
    cx /= posAttr.count; cy /= posAttr.count; cz /= posAttr.count;
    groupGeoNear.translate(-cx, -cy, -cz);
    groupGeoFar.translate(-cx, -cy, -cz);

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = COSMOS_HEART_IMAGES[group];
    img.onload = () => {
      const neonTexture = createCosmosNeonTexture(img, 256);
      const materialNear = new THREE.PointsMaterial({
        size: 1.8,
        map: neonTexture,
        transparent: false,
        alphaTest: 0.2,
        depthWrite: true,
        depthTest: true,
        blending: THREE.NormalBlending,
        vertexColors: true
      });
      const materialFar = new THREE.PointsMaterial({
        size: 1.8,
        map: neonTexture,
        transparent: true,
        alphaTest: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });
      const pointsObj = new THREE.Points(groupGeoFar, materialFar);
      pointsObj.position.set(cx, cy, cz);
      pointsObj.userData = { materialNear, geometryNear: groupGeoNear, materialFar, geometryFar: groupGeoFar };
      cosmosScene.add(pointsObj);
      cosmosHeartGroupObjects.push(pointsObj);
    };
  }

  // 5. Starfield Background
  const starCount = 20000;
  const starPositions = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 900;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 900;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 900;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, transparent: true, opacity: 0.7, depthWrite: false });
  cosmosStarField = new THREE.Points(starGeo, starMat);
  cosmosStarField.name = 'starfield';
  cosmosScene.add(cosmosStarField);

  // 6. Central Planet
  const planetRadius = 10;
  const planetGeo = new THREE.SphereGeometry(planetRadius, 48, 48);
  const planetTex = createCosmosPlanetTexture();
  const stormMat = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      baseTexture: { value: planetTex }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform sampler2D baseTexture;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float angle = length(uv - vec2(0.5)) * 3.0;
        float twist = sin(angle * 3.0 + time) * 0.1;
        uv.x += twist * sin(time * 0.5);
        uv.y += twist * cos(time * 0.5);
        vec4 texColor = texture2D(baseTexture, uv);
        float noise = sin(uv.x * 10.0 + time) * sin(uv.y * 10.0 + time) * 0.1;
        texColor.rgb += noise * vec3(0.8, 0.4, 0.2);
        gl_FragColor = texColor;
      }
    `
  });
  cosmosPlanet = new THREE.Mesh(planetGeo, stormMat);
  cosmosPlanet.name = 'main-planet';
  cosmosPlanet.position.set(0, 0, 0);
  cosmosScene.add(cosmosPlanet);

  // Atmosphere around planet
  const atmosGeo = new THREE.SphereGeometry(planetRadius * 1.05, 48, 48);
  const atmosMat = new THREE.ShaderMaterial({
    uniforms: { glowColor: { value: new THREE.Color(0xe0b3ff) } },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      uniform vec3 glowColor;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, 1.0) * intensity;
      }
    `,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true
  });
  cosmosPlanet.add(new THREE.Mesh(atmosGeo, atmosMat));

  // 7. 3 Dòng Chữ Vòng Quanh Hành Tinh (bản gốc)
  const numRings = COSMOS_RING_TEXTS.length;
  const baseRingRadius = planetRadius * 1.1;
  const ringSpacing = 5;
  cosmosTextRings = [];

  for (let i = 0; i < numRings; i++) {
    const ringRadius = baseRingRadius + i * ringSpacing;
    const textureHeight = 150;
    const fontSize = Math.max(130, 0.8 * textureHeight);

    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = `bold ${fontSize}px Arial, sans-serif`;
    const repeatedTextSegment = COSMOS_RING_TEXTS[i] + '   ';
    const segmentWidth = tempCtx.measureText(repeatedTextSegment).width;
    const textureWidthCircumference = 2 * Math.PI * ringRadius * 180;
    const repeatCount = Math.ceil(textureWidthCircumference / segmentWidth);

    let fullText = '';
    for (let j = 0; j < repeatCount; j++) fullText += repeatedTextSegment;

    const textCanvas = document.createElement('canvas');
    textCanvas.width = Math.ceil(Math.max(1, segmentWidth * repeatCount));
    textCanvas.height = textureHeight;
    const tCtx = textCanvas.getContext('2d');

    tCtx.clearRect(0, 0, textCanvas.width, textureHeight);
    tCtx.font = `bold ${fontSize}px Arial, sans-serif`;
    tCtx.textAlign = 'left';
    tCtx.textBaseline = 'alphabetic';

    tCtx.shadowColor = '#e0b3ff';
    tCtx.shadowBlur = 18;
    tCtx.lineWidth = 7;
    tCtx.strokeStyle = '#fff';
    tCtx.strokeText(fullText, 0, textureHeight * 0.82);

    tCtx.shadowColor = '#ffb3de';
    tCtx.shadowBlur = 24;
    tCtx.fillStyle = '#fff';
    tCtx.fillText(fullText, 0, textureHeight * 0.84);

    const ringTexture = new THREE.CanvasTexture(textCanvas);
    ringTexture.wrapS = THREE.RepeatWrapping;
    ringTexture.repeat.x = (segmentWidth * repeatCount) / textureWidthCircumference;
    ringTexture.needsUpdate = true;

    const ringGeo = new THREE.CylinderGeometry(ringRadius, ringRadius, 1, 128, 1, true);
    const ringMat = new THREE.MeshBasicMaterial({
      map: ringTexture,
      transparent: true,
      side: THREE.DoubleSide,
      alphaTest: 0.01,
      opacity: 1,
      depthWrite: false
    });
    const textRingMesh = new THREE.Mesh(ringGeo, ringMat);
    textRingMesh.position.set(0, 0, 0);
    textRingMesh.rotation.y = Math.PI / 2;

    const ringGroup = new THREE.Group();
    ringGroup.add(textRingMesh);
    ringGroup.userData = {
      ringRadius,
      angleOffset: 0.15 * Math.PI * 0.5,
      speed: 0.002 + 0.00025,
      tiltSpeed: 0, rollSpeed: 0, pitchSpeed: 0,
      tiltAmplitude: Math.PI / 3, rollAmplitude: Math.PI / 6, pitchAmplitude: Math.PI / 8,
      tiltPhase: Math.PI * 2, rollPhase: Math.PI * 2, pitchPhase: Math.PI * 2,
      isTextRing: true
    };
    ringGroup.rotation.x = i / numRings * Math.PI;
    cosmosScene.add(ringGroup);
    cosmosTextRings.push(ringGroup);
  }

  // 8. Hint Icon & Hint Text
  createCosmosHintIcon();
  createCosmosHintText();
  createCosmosShootingStar();
}

function startCosmosCameraAnimation() {
  if (!cosmosCamera) return;
  const startPos = { x: cosmosCamera.position.x, y: cosmosCamera.position.y, z: cosmosCamera.position.z };
  const midPos1 = { x: startPos.x, y: 0, z: startPos.z };
  const midPos2 = { x: startPos.x, y: 0, z: 160 };
  const endPos = { x: -40, y: 100, z: 100 };

  const duration1 = 0.2, duration2 = 0.55, duration3 = 0.4;
  let progress = 0;

  function animatePath() {
    progress += 0.0025;
    let newPos;
    if (progress < duration1) {
      const t = progress / duration1;
      newPos = { x: startPos.x + (midPos1.x - startPos.x) * t, y: startPos.y + (midPos1.y - startPos.y) * t, z: startPos.z + (midPos1.z - startPos.z) * t };
    } else if (progress < duration1 + duration2) {
      const t = (progress - duration1) / duration2;
      newPos = { x: midPos1.x + (midPos2.x - midPos1.x) * t, y: midPos1.y + (midPos2.y - midPos1.y) * t, z: midPos1.z + (midPos2.z - midPos1.z) * t };
    } else if (progress < duration1 + duration2 + duration3) {
      const t = (progress - duration1 - duration2) / duration3;
      const easedT = 0.5 - 0.5 * Math.cos(Math.PI * t);
      newPos = { x: midPos2.x + (endPos.x - midPos2.x) * easedT, y: midPos2.y + (endPos.y - midPos2.y) * easedT, z: midPos2.z + (endPos.z - midPos2.z) * easedT };
    } else {
      cosmosCamera.position.set(endPos.x, endPos.y, endPos.z);
      cosmosCamera.lookAt(0, 0, 0);
      if (cosmosControls) {
        cosmosControls.target.set(0, 0, 0);
        cosmosControls.update();
        cosmosControls.enabled = true;
      }
      return;
    }
    cosmosCamera.position.set(newPos.x, newPos.y, newPos.z);
    cosmosCamera.lookAt(0, 0, 0);
    requestAnimationFrame(animatePath);
  }
  if (cosmosControls) cosmosControls.enabled = false;
  animatePath();
}

function setupCosmosEvents(domElement){
  if (!domElement || domElement.dataset.cosmosClickBound) return;
  domElement.dataset.cosmosClickBound = 'true';

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const handlePlanetTrigger = (clientX, clientY) => {
    if (cosmosIntroStarted || !cosmosCamera || !cosmosPlanet) return;
    const rect = domElement.getBoundingClientRect();
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, cosmosCamera);

    const intersects = raycaster.intersectObject(cosmosPlanet);
    if (intersects.length > 0) {
      cosmosIntroStarted = true;
      cosmosFadeInProgress = true;
      startCosmosCameraAnimation();
    }
  };

  domElement.addEventListener('click', (event) => {
    handlePlanetTrigger(event.clientX, event.clientY);
  });

  let touchStartX = 0, touchStartY = 0;
  domElement.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  domElement.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 1) {
      const dx = Math.abs(e.changedTouches[0].clientX - touchStartX);
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
      if (dx < 10 && dy < 10) {
        handlePlanetTrigger(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    }
  }, { passive: true });
}

function renderCosmos(){
  if (!isCosmosActive || !cosmosRenderer || !cosmosScene || !cosmosCamera) return;

  const time = performance.now() * 0.001;

  // Animate Hint Icon & Hint Text
  if (cosmosHintIcon) {
    if (!cosmosIntroStarted) {
      cosmosHintIcon.visible = true;
      const tapOffset = Math.sin(time * 2.5) * 1.5;
      const direction = new THREE.Vector3();
      cosmosHintIcon.getWorldDirection(direction);
      cosmosHintIcon.position.copy(cosmosHintIcon.userData.initialPosition).addScaledVector(direction, -tapOffset);

      const ring = cosmosHintIcon.userData.ringMesh;
      if (ring) {
        const ringScale = 1 + Math.sin(time * 2.5) * 0.1;
        ring.scale.set(ringScale, ringScale, 1);
        ring.material.opacity = 0.5 + Math.sin(time * 2.5) * 0.2;
      }
      if (cosmosHintText) {
        cosmosHintText.visible = true;
        cosmosHintText.material.opacity = 0.7 + Math.sin(time * 3) * 0.3;
        cosmosHintText.position.y = 15 + Math.sin(time * 2) * 0.5;
        cosmosHintText.lookAt(cosmosCamera.position);
      }
    } else {
      cosmosHintIcon.visible = false;
      if (cosmosHintText) cosmosHintText.visible = false;
    }
  }

  if (cosmosControls && cosmosControls.enabled) cosmosControls.update();
  if (cosmosPlanet && cosmosPlanet.material && cosmosPlanet.material.uniforms) {
    cosmosPlanet.material.uniforms.time.value = time * 0.5;
    cosmosPlanet.lookAt(cosmosCamera.position);
  }

  // Fade-in logic
  if (cosmosFadeInProgress && cosmosFadeOpacity < 1) {
    cosmosFadeOpacity += 0.025;
    if (cosmosFadeOpacity > 1) cosmosFadeOpacity = 1;
  }

  // Animate Text Rings
  if (cosmosTextRings) {
    cosmosTextRings.forEach((ringGroup, index) => {
      const userData = ringGroup.userData;
      userData.angleOffset += userData.speed;
      const tilt = Math.sin(time * userData.tiltSpeed + userData.tiltPhase) * userData.tiltAmplitude;
      const roll = Math.cos(time * userData.rollSpeed + userData.rollPhase) * userData.rollAmplitude;
      const pitch = Math.sin(time * userData.pitchSpeed + userData.pitchPhase) * userData.pitchAmplitude;

      ringGroup.rotation.x = (index / cosmosTextRings.length) * Math.PI + tilt;
      ringGroup.rotation.z = roll;
      ringGroup.rotation.y = userData.angleOffset + pitch;
      ringGroup.position.y = Math.sin(time * (userData.tiltSpeed * 0.7) + userData.tiltPhase) * 0.3;

      const pulse = (Math.sin(time * 1.5 + index) + 1) / 2;
      const textMesh = ringGroup.children[0];
      if (textMesh && textMesh.material) {
        textMesh.material.opacity = 0.7 + pulse * 0.3;
      }
    });
  }

  // Animate Shooting Stars
  for (let i = cosmosShootingStars.length - 1; i >= 0; i--) {
    const star = cosmosShootingStars[i];
    star.userData.life++;
    let opacity = 1.0;
    if (star.userData.life < 30) opacity = star.userData.life / 30;
    else if (star.userData.life > star.userData.maxLife - 30) opacity = (star.userData.maxLife - star.userData.life) / 30;

    star.userData.progress += star.userData.speed;
    if (star.userData.progress > 1) {
      cosmosScene.remove(star);
      cosmosShootingStars.splice(i, 1);
      continue;
    }
    const currentPos = star.userData.curve.getPoint(star.userData.progress);
    star.position.copy(currentPos);
    star.userData.head.material.opacity = opacity;
    if (star.userData.head.children[0]) star.userData.head.children[0].material.uniforms.time.value = time;

    const trailPoints = star.userData.trailPoints;
    trailPoints[0].copy(currentPos);
    for (let j = 1; j < star.userData.trailLength; j++) {
      const trailProgress = Math.max(0, star.userData.progress - j * 0.01);
      trailPoints[j].copy(star.userData.curve.getPoint(trailProgress));
    }
    star.userData.trail.geometry.setFromPoints(trailPoints);
    star.userData.trail.material.opacity = opacity * 0.7;
  }

  if (cosmosShootingStars.length < 3 && Math.random() < 0.02) {
    createCosmosShootingStar();
  }

  // Material transition for Heart image point clouds
  if (cosmosHeartGroupObjects) {
    cosmosHeartGroupObjects.forEach(obj => {
      if (obj.isPoints && obj.userData.materialNear && obj.userData.materialFar) {
        const posAttr = obj.geometry.getAttribute('position');
        let isClose = false;
        for (let i = 0; i < posAttr.count; i++) {
          const wx = posAttr.getX(i) + obj.position.x;
          const wy = posAttr.getY(i) + obj.position.y;
          const wz = posAttr.getZ(i) + obj.position.z;
          if (cosmosCamera.position.distanceTo(new THREE.Vector3(wx, wy, wz)) < 10) {
            isClose = true;
            break;
          }
        }
        if (isClose) {
          if (obj.material !== obj.userData.materialNear) {
            obj.material = obj.userData.materialNear;
            obj.geometry = obj.userData.geometryNear;
          }
        } else {
          if (obj.material !== obj.userData.materialFar) {
            obj.material = obj.userData.materialFar;
            obj.geometry = obj.userData.geometryFar;
          }
        }
      }
    });
  }

  if (cosmosGalaxyMaterial) {
    cosmosGalaxyMaterial.uniforms.uTime.value = time;
  }

  cosmosRenderer.render(cosmosScene, cosmosCamera);
  cosmosRAF = requestAnimationFrame(renderCosmos);
}

function showCosmosView(e){
  if (e) { e.stopPropagation(); e.preventDefault(); }
  stopFilmTimer();
  updateActiveNavStep(6);
  isSphereActive = false;
  if (sphereRAF) { cancelAnimationFrame(sphereRAF); sphereRAF = null; }

  const filmContent = document.querySelector('.filmModal__content');
  const filmSphereView = $('filmSphereView');
  const filmCosmosView = $('filmCosmosView');

  if (filmContent) filmContent.style.display = 'none';
  if (filmSphereView) {
    filmSphereView.classList.remove('is-active');
    filmSphereView.hidden = true;
    filmSphereView.style.display = 'none';
  }

  if (filmCosmosView) {
    filmCosmosView.hidden = false;
    filmCosmosView.style.display = 'flex';
    filmCosmosView.classList.add('is-active');
  }

  isCosmosActive = true;
  if (!cosmosRenderer) {
    initCosmosScene();
  } else if (cosmosCamera) {
    const w = window.innerWidth, h = window.innerHeight;
    cosmosCamera.aspect = w / h;
    cosmosCamera.updateProjectionMatrix();
    cosmosRenderer.setSize(w, h);
    if (!cosmosIntroStarted) {
      cosmosCamera.position.set(0, 20, 30);
      cosmosCamera.lookAt(0, 0, 0);
      if (cosmosControls) {
        cosmosControls.enabled = false;
        cosmosControls.target.set(0, 0, 0);
        cosmosControls.update();
      }
    }
  }

  if (cosmosRAF) cancelAnimationFrame(cosmosRAF);
  cosmosRAF = requestAnimationFrame(renderCosmos);
}

/* ============================================================
   3D STARFIELD & FLOATING WISH GALAXY (Hiệu ứng từ folder loves)
   ============================================================ */
const GALAXY_MESSAGES = [
  "Hồng Vân ơi 🌸",
  "Lên đường bình an ✈️",
  "Vạn sự may mắn 🍀",
  "Thành công rực rỡ ✨",
  "Luôn cười tươi nha 🥰",
  "Mãi là bạn tốt 🤝",
  "Giữ gìn sức khỏe 💖",
  "Bay cao bay xa 🕊️",
  "Tự tin tỏa sáng ⭐",
  "Tụi tui luôn ở đây 💌",
  "Nhớ giữ liên lạc nha 📱",
  "Hẹn ngày trở về 🥂",
  "Thanh xuân rực rỡ 🌈",
  "Bình an nơi phương xa 🌤️",
  "Chinh phục ước mơ 🚀",
  "Mãi bên nhau bạn nhé 💕"
];

const GALAXY_ICONS = ["💖", "🌸", "✨", "✈️", "🍀", "⭐", "🕊️", "🥰", "💕", "❤️", "💗"];
const GALAXY_COLORS = ["#ff7487", "#ffa0b5", "#ffd1dc", "#ff8fae", "#ffcad4"];

let galaxyActive = false;
let galaxyRAF = null;
let galaxySpawnInterval = null;
const activeGalaxyParticles = new Set();
const maxGalaxyParticles = 45;

const galaxyCanvas = $('filmGalaxyCanvas');
const galaxyCont = $('filmTextGalaxy');

let galaxyStars = [];
function initGalaxyStars(){
  if (!galaxyCanvas) return;
  const w = window.innerWidth, h = window.innerHeight;
  galaxyCanvas.width = w;
  galaxyCanvas.height = h;
  galaxyStars = [];
  for (let i = 0; i < 180; i++){
    galaxyStars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2
    });
  }
}

function drawGalaxyStars(){
  if (!galaxyCanvas || !galaxyActive) return;
  const gctx = galaxyCanvas.getContext('2d');
  const w = galaxyCanvas.width, h = galaxyCanvas.height;
  gctx.clearRect(0, 0, w, h);

  for (const s of galaxyStars){
    s.phase += s.speed;
    const a = s.alpha * (0.5 + 0.5 * Math.sin(s.phase));
    gctx.fillStyle = `rgba(255, 220, 235, ${a})`;
    gctx.beginPath();
    gctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    gctx.fill();
  }

  galaxyRAF = requestAnimationFrame(drawGalaxyStars);
}

function createGalaxyTextParticle(){
  if (!galaxyCont || !galaxyActive || activeGalaxyParticles.size >= maxGalaxyParticles) return;
  const el = document.createElement('div');
  const isIcon = Math.random() < 0.35;
  el.className = 'text-particle-bg';
  el.textContent = isIcon
    ? GALAXY_ICONS[Math.floor(Math.random() * GALAXY_ICONS.length)]
    : GALAXY_MESSAGES[Math.floor(Math.random() * GALAXY_MESSAGES.length)];

  const fontSize = (isIcon ? 22 : 16) + Math.random() * 10;
  el.style.fontSize = `${fontSize}px`;
  el.style.color = GALAXY_COLORS[Math.floor(Math.random() * GALAXY_COLORS.length)];
  el.style.opacity = '0';

  galaxyCont.appendChild(el);

  const w = el.offsetWidth || 70;
  const winW = window.innerWidth, winH = window.innerHeight;
  el.style.left = `${Math.random() * (winW - w)}px`;

  const translateZ = -Math.random() * 320;
  const startY = -40, endY = winH + 40;
  const duration = 8500 + Math.random() * 4500;
  const t0 = performance.now();

  function anim(t){
    if (!galaxyActive) {
      el.remove();
      activeGalaxyParticles.delete(el);
      return;
    }
    const dt = t - t0;
    if (dt < duration){
      const p = dt / duration;
      el.style.transform = `translateY(${startY + p * (endY - startY)}px) translateZ(${translateZ}px)`;
      el.style.opacity = p < 0.12 ? (p / 0.12) * 0.9 : (p > 0.85 ? ((1 - p) / 0.15) * 0.9 : 0.9);
      requestAnimationFrame(anim);
    } else {
      el.remove();
      activeGalaxyParticles.delete(el);
    }
  }

  activeGalaxyParticles.add(el);
  requestAnimationFrame(anim);
}

function startGalaxy(){
  if (galaxyActive) return;
  galaxyActive = true;
  initGalaxyStars();
  drawGalaxyStars();
  
  galaxySpawnInterval = setInterval(() => {
    if (!galaxyActive) return;
    for (let i = 0; i < 3; i++){
      createGalaxyTextParticle();
    }
  }, 420);
}

function stopGalaxy(){
  galaxyActive = false;
  if (galaxyRAF) { cancelAnimationFrame(galaxyRAF); galaxyRAF = null; }
  if (galaxySpawnInterval) { clearInterval(galaxySpawnInterval); galaxySpawnInterval = null; }
  activeGalaxyParticles.forEach(el => el.remove());
  activeGalaxyParticles.clear();
  if (galaxyCont) galaxyCont.innerHTML = '';
  if (galaxyCanvas) {
    const gctx = galaxyCanvas.getContext('2d');
    gctx.clearRect(0, 0, galaxyCanvas.width, galaxyCanvas.height);
  }
}

function openFilm(){
  if (!filmModal) return;
  updateActiveNavStep(4);
  filmModal.hidden = false;
  filmModal.setAttribute('aria-hidden', 'false');
  requestAnimationFrame(() => {
    filmModal.classList.add('is-open');
    initFilmThumbnails();
    showFilmSlide(0);
    isFilmAutoPlaying = true;
    if (filmPlayToggle) filmPlayToggle.textContent = '⏸';
    startFilmTimer();
    startGalaxy();
    playMusic();
    // Tải và khởi tạo trước Quả Cầu & Vũ Trụ 3D ngầm trong nền (GPU pre-warm)
    setTimeout(() => {
      if (!sphereRenderer) initSphereScene();
      if (!cosmosRenderer) initCosmosScene();
    }, 400);
  });
}

function closeFilm(){
  if (!filmModal) return;
  filmModal.classList.remove('is-open');
  filmModal.setAttribute('aria-hidden', 'true');
  stopFilmTimer();
  stopGalaxy();
  closeZoomPhoto();
  hideEndOfFilmCard();
  isCosmosActive = false;
  if (cosmosRAF) { cancelAnimationFrame(cosmosRAF); cosmosRAF = null; }
  const filmCosmosView = $('filmCosmosView');
  if (filmCosmosView) {
    filmCosmosView.classList.remove('is-active');
    filmCosmosView.hidden = true;
    filmCosmosView.style.display = 'none';
  }
  backToFilmView();
  pauseMusic();
  setTimeout(() => { filmModal.hidden = true; }, 600);
}

function toggleFilmAutoPlay(){
  isFilmAutoPlaying = !isFilmAutoPlaying;
  if (filmPlayToggle) filmPlayToggle.textContent = isFilmAutoPlaying ? '⏸' : '▶';
  if (isFilmAutoPlaying) startFilmTimer();
  else stopFilmTimer();
}

openFilmBtn?.addEventListener('click', openFilm);
filmClose?.addEventListener('click', closeFilm);
filmBackdrop?.addEventListener('click', closeFilm);
filmPrev?.addEventListener('click', () => { prevFilmSlide(); startFilmTimer(); });
filmNext?.addEventListener('click', () => { nextFilmSlide(); startFilmTimer(); });
filmPlayToggle?.addEventListener('click', toggleFilmAutoPlay);

filmPhotoWrap?.addEventListener('click', openZoomPhoto);
filmZoomClose?.addEventListener('click', closeZoomPhoto);
filmZoomBackdrop?.addEventListener('click', closeZoomPhoto);

filmModal?.addEventListener('mousemove', (e) => {
  if (!galaxyActive) return;
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  const rotY = ((e.clientX - cx) / cx) * 8;
  const rotX = (-(e.clientY - cy) / cy) * 8;
  if (galaxyCont) {
    galaxyCont.style.transform = `translate(-50%, -50%) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }
});

/* ============================================================
   CURSOR HEART & STAR SPARKLE TRAIL (Vệt trái tim & ngôi sao theo chuột)
   ============================================================ */
const cursorTrailContainer = $('cursorTrailContainer');
const CURSOR_ICONS = ['💖', '✨', '⭐', '🌸', '💕', '🥰', '💫'];
let lastTrailTime = 0;

window.addEventListener('mousemove', (e) => {
  const now = performance.now();
  if (now - lastTrailTime < 38) return; // Tạo vệt cách nhau 38ms
  lastTrailTime = now;

  if (!cursorTrailContainer) return;
  const p = document.createElement('span');
  p.className = 'cursorParticle';
  p.textContent = CURSOR_ICONS[Math.floor(Math.random() * CURSOR_ICONS.length)];
  const size = 13 + Math.random() * 8;
  p.style.fontSize = `${size}px`;
  p.style.left = `${e.clientX}px`;
  p.style.top = `${e.clientY}px`;
  p.style.setProperty('--dx', `${(Math.random() - 0.5) * 36}px`);
  p.style.setProperty('--dy', `${-12 - Math.random() * 30}px`);
  p.style.setProperty('--drot', `${(Math.random() - 0.5) * 60}deg`);

  cursorTrailContainer.appendChild(p);
  setTimeout(() => p.remove(), 1100);
});

/* ============================================================
   TIMELINE QUICK NAVIGATION CONTROLLER (Mục lục hành trình 6 chặng)
   ============================================================ */
const timelineNavToggle = $('timelineNavToggle');

timelineNavToggle?.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleTimelineNav();
});

document.addEventListener('click', (e) => {
  const timelineNav = $('timelineNav');
  if (timelineNav && timelineNav.classList.contains('is-open') && !timelineNav.contains(e.target)) {
    toggleTimelineNav(false);
  }
});

function jumpToTimelineStep(stepNum) {
  toggleTimelineNav(false);
  updateActiveNavStep(stepNum);

  // 1. Chặng 1: Bắn Cung Mở Màn
  if (stepNum === 1) {
    resetAll();
    return;
  }

  // Dọn dẹp trạng thái chung trước khi nhảy
  treeStop();
  stopFilmTimer();
  stopGalaxy();
  closeZoomPhoto();
  hideEndOfFilmCard();
  isCosmosActive = false;
  if (cosmosRAF) { cancelAnimationFrame(cosmosRAF); cosmosRAF = null; }
  isSphereActive = false;
  if (sphereRAF) { cancelAnimationFrame(sphereRAF); sphereRAF = null; }
  if (filmTL) { filmTL.pause(0); }

  const filmContent = document.querySelector('.filmModal__content');
  const filmSphereView = $('filmSphereView');
  const filmCosmosView = $('filmCosmosView');

  // 2. Chặng 2: Chữ Nghệ Thuật Hồng Vân
  if (stepNum === 2) {
    if (filmModal) {
      filmModal.classList.remove('is-open');
      filmModal.hidden = true;
      filmModal.setAttribute('aria-hidden', 'true');
    }
    showWish(false);
    gsap.set([flood, bloom], { autoAlpha: 0 });
    gsap.set(hero, { autoAlpha: 0 });
    gsap.set(field, { autoAlpha: 1 });
    gsap.to('.blob', { opacity: 1, duration: 0.4 });
    gsap.set([barTop, barBot], { yPercent: 0 });
    gsap.set(kSideLeft, { opacity: 1, scale: 1, y: 0 });
    gsap.set(kSideRight, { opacity: 1, scale: 1, y: 0 });
    gsap.set(kEyebrow, { opacity: 1, y: 0 });
    gsap.set(line1Chars, { yPercent: 0, rotationX: 0 });
    gsap.set(line2Chars, { yPercent: 0, rotationX: 0 });
    gsap.set(uline, { drawn: 1 });
    gsap.set(kSub, { opacity: 1, y: 0 });
    playMusic();
    return;
  }

  // 3. Chặng 3: Cây Tình Yêu & Bức Thư
  if (stepNum === 3) {
    if (filmModal) {
      filmModal.classList.remove('is-open');
      filmModal.hidden = true;
      filmModal.setAttribute('aria-hidden', 'true');
    }
    gsap.set([hero, flood, field, bloom], { autoAlpha: 0 });
    treeStart();
    showWish(true);
    playMusic();
    return;
  }

  // 4. Chặng 4: Thước Phim Scrapbook 63 ảnh
  if (stepNum === 4) {
    showWish(false);
    if (filmSphereView) {
      filmSphereView.classList.remove('is-active');
      filmSphereView.hidden = true;
      filmSphereView.style.display = 'none';
    }
    if (filmCosmosView) {
      filmCosmosView.classList.remove('is-active');
      filmCosmosView.hidden = true;
      filmCosmosView.style.display = 'none';
    }
    if (filmContent) filmContent.style.display = 'flex';
    openFilm();
    return;
  }

  // 5. Chặng 5: Quả Cầu 360°
  if (stepNum === 5) {
    showWish(false);
    if (!filmModal || filmModal.hidden) {
      openFilm();
    }
    showSphereView();
    return;
  }

  // 6. Chặng 6: Tinh Cầu Vũ Trụ (Màn Kết)
  if (stepNum === 6) {
    showWish(false);
    if (!filmModal || filmModal.hidden) {
      openFilm();
    }
    showCosmosView();
    return;
  }
}

for (let i = 1; i <= 6; i++) {
  const btn = $(`navStep${i}`);
  btn?.addEventListener('click', (e) => {
    e.stopPropagation();
    jumpToTimelineStep(i);
  });
}

// Cập nhật trạng thái active tự động khi người dùng lướt qua các chặng tự nhiên
window.addEventListener('keydown', (e) => {
  if (isZoomOpen && e.key === 'Escape') {
    closeZoomPhoto();
    return;
  }
  if (isEndCardOpen && e.key === 'Escape') {
    hideEndOfFilmCard();
    return;
  }
  if (!filmModal || filmModal.hidden) return;
  if (e.key === 'Escape') closeFilm();
  else if (e.key === 'ArrowRight') { nextFilmSlide(); startFilmTimer(); }
  else if (e.key === 'ArrowLeft') { prevFilmSlide(); startFilmTimer(); }
  else if (e.key === ' ') { e.preventDefault(); toggleFilmAutoPlay(); }
});

window.addEventListener('resize', () => {
  const w = window.innerWidth, h = window.innerHeight;
  if (sphereCamera && sphereRenderer) {
    sphereCamera.aspect = w / h;
    sphereCamera.updateProjectionMatrix();
    sphereRenderer.setSize(w, h);
  }
  if (cosmosCamera && cosmosRenderer) {
    cosmosCamera.aspect = w / h;
    cosmosCamera.updateProjectionMatrix();
    cosmosRenderer.setSize(w, h);
  }
  initGalaxyStars();
});

/* ============================================================
   RECORDING HOOK — the rig draws + fires after its pre-roll
   ============================================================ */
if (isRecord){
  window.bdayAPI = {
    start(){ autoFire(); },
    replay(){ resetAll(); },
  };
}
