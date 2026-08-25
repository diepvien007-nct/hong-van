(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function Di(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function am(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}var Vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},za={duration:.5,overwrite:!1,delay:0},Vu,Qe,me,Jn=1e8,ue=1/Jn,mh=Math.PI*2,eg=mh/4,ng=0,om=Math.sqrt,ig=Math.cos,rg=Math.sin,Ze=function(t){return typeof t=="string"},we=function(t){return typeof t=="function"},Gi=function(t){return typeof t=="number"},Gu=function(t){return typeof t>"u"},bi=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Hu=function(){return typeof window<"u"},Eo=function(t){return we(t)||Ze(t)},lm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,sg=/random\([^)]+\)/g,ag=/,\s*/g,$f=/(?:-?\.?\d|\.)+/gi,cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hm=/[+-]=-?[.\d]+/,og=/[^,'"\[\]\s]+/gi,lg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ve,fi,_h,Wu,Hn={},Al={},um,fm=function(t){return(Al=Ws(t,Hn))&&wn},Xu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ka=function(t,e){return!e&&console.warn(t)},dm=function(t,e){return t&&(Hn[t]=e)&&Al&&(Al[t]=e)||Hn},Va=function(){return 0},cg={suppressEvents:!0,isStart:!0,kill:!1},sl={suppressEvents:!0,kill:!1},hg={suppressEvents:!0},Yu={},ur=[],gh={},pm,Ln={},dc={},Jf=30,al=[],qu="",Zu=function(t){var e=t[0],n,r;if(bi(e)||we(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=al.length;r--&&!al[r].targetTest(e););n=al[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Fm(t[r],n)))||t.splice(r,1);return t},Vr=function(t){return t._gsap||Zu(Qn(t))[0]._gsap},mm=function(t,e,n){return(n=t[e])&&we(n)?t[e]():Gu(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Le=function(t){return Math.round(t*1e5)/1e5||0},xe=function(t){return Math.round(t*1e7)/1e7||0},Ls=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},ug=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},Cl=function(){var t=ur.length,e=ur.slice(0),n,r;for(gh={},ur.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ku=function(t){return!!(t._initted||t._startAt||t.add)},_m=function(t,e,n,r){ur.length&&!Qe&&Cl(),t.render(e,n,!!(Qe&&e<0&&Ku(t))),ur.length&&!Qe&&Cl()},gm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(og).length<2?e:Ze(t)?t.trim():t},xm=function(t){return t},Wn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fg=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},Ws=function(t,e){for(var n in e)t[n]=e[n];return t},Qf=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=bi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},Rl=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Aa=function(t){var e=t.parent||ve,n=t.keyframes?fg(ln(t.keyframes)):Wn;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},dg=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},vm=function(t,e,n,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},ec=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},gr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Gr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},pg=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},xh=function(t,e,n,r){return t._startAt&&(Qe?t._startAt.revert(sl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},mg=function i(t){return!t||t._ts&&i(t.parent)},jf=function(t){return t._repeat?Xs(t._tTime,t=t.duration()+t._rDelay)*t:0},Xs=function(t,e){var n=Math.floor(t=xe(t/e));return t&&n===t?n-1:n},Pl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},nc=function(t){return t._end=xe(t._start+(t._tDur/Math.abs(t._ts||t._rts||ue)||0))},ic=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=xe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),nc(t),n._dirty||Gr(n,t)),t},ym=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Pl(t.rawTime(),e),(!e._dur||lo(0,e.totalDuration(),n)-e._tTime>ue)&&e.render(n,!0)),Gr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ue}},mi=function(t,e,n,r){return e.parent&&gr(e),e._start=xe((Gi(n)?n:n||t!==ve?qn(t,n,e):t._time)+e._delay),e._end=xe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vm(t,e,"_first","_last",t._sort?"_start":0),vh(e)||(t._recent=e),r||ym(t,e),t._ts<0&&ic(t,t._tTime),t},Mm=function(t,e){return(Hn.ScrollTrigger||Xu("scrollTrigger",e))&&Hn.ScrollTrigger.create(e,t)},Sm=function(t,e,n,r,s){if(Ju(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pm!==On.frame)return ur.push(t),t._lazy=[s,r],1},_g=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},vh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},gg=function(t,e,n,r){var s=t.ratio,a=e<0||!e&&(!t._start&&_g(t)&&!(!t._initted&&vh(t))||(t._ts<0||t._dp._ts<0)&&!vh(t))?0:1,o=t._rDelay,l=0,c,h,f;if(o&&t._repeat&&(l=lo(0,t._tDur,e),h=Xs(l,o),t._yoyo&&h&1&&(a=1-a),h!==Xs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Qe||r||t._zTime===ue||!e&&t._zTime){if(!t._initted&&Sm(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?ue:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&xh(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&gr(t,1),!n&&!Qe&&(zn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xg=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Ys=function(t,e,n,r){var s=t._repeat,a=xe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:xe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&ic(t,t._tTime=t._tDur*o),t.parent&&nc(t),n||Gr(t.parent,t),t},td=function(t){return t instanceof xn?Gr(t):Ys(t,t._dur)},vg={_start:0,endTime:Va,totalDuration:Va},qn=function i(t,e,n){var r=t.labels,s=t._recent||vg,a=t.duration()>=Jn?s.endTime(!1):t._dur,o,l,c;return Ze(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),o>1?i(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ca=function(t,e,n){var r=Gi(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Oe(e[0],a,e[s+1])},Sr=function(t,e){return t||t===0?e(t):e},lo=function(t,e,n){return n<t?t:n>e?e:n},an=function(t,e){return!Ze(t)||!(e=lg.exec(t))?"":e[1]},yg=function(t,e,n){return Sr(n,function(r){return lo(t,e,r)})},yh=[].slice,bm=function(t,e){return t&&bi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&bi(t[0]))&&!t.nodeType&&t!==fi},Mg=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ze(r)&&!e||bm(r,1)?(s=n).push.apply(s,Qn(r)):n.push(r)})||n},Qn=function(t,e,n){return me&&!e&&me.selector?me.selector(t):Ze(t)&&!n&&(_h||!qs())?yh.call((e||Wu).querySelectorAll(t),0):ln(t)?Mg(t,n):bm(t)?yh.call(t,0):t?[t]:[]},Mh=function(t){return t=Qn(t)[0]||ka("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Qn(e,n.querySelectorAll?n:n===t?ka("Invalid scope")||Wu.createElement("div"):t)}},Em=function(t){return t.sort(function(){return .5-Math.random()})},Tm=function(t){if(we(t))return t;var e=bi(t)?t:{each:t},n=Hr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,h=r,f=r;return Ze(r)?h=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(h=r[0],f=r[1]),function(u,d,_){var g=(_||e).length,p=a[g],m,T,S,v,M,w,A,x,b;if(!p){if(b=e.grid==="auto"?0:(e.grid||[1,Jn])[1],!b){for(A=-Jn;A<(A=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(p=a[g]=[],m=l?Math.min(b,g)*h-.5:r%b,T=b===Jn?0:l?g*f/b-.5:r/b|0,A=0,x=Jn,w=0;w<g;w++)S=w%b-m,v=T-(w/b|0),p[w]=M=c?Math.abs(c==="y"?v:S):om(S*S+v*v),M>A&&(A=M),M<x&&(x=M);r==="random"&&Em(p),p.max=A-x,p.min=x,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=an(e.amount||e.each)||0,n=n&&g<0?Ng(n):n}return g=(p[u]-p.min)/p.max||0,xe(p.b+(n?n(g):g)*p.v)+p.u}},Sh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=xe(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(Gi(n)?0:an(n))}},wm=function(t,e){var n=ln(t),r,s;return!n&&bi(t)&&(r=n=t.radius||Jn,t.values?(t=Qn(t.values),(s=!Gi(t[0]))&&(r*=r)):t=Sh(t.increment)),Sr(e,n?we(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Jn,h=0,f=t.length,u,d;f--;)s?(u=t[f].x-o,d=t[f].y-l,u=u*u+d*d):u=Math.abs(t[f]-o),u<c&&(c=u,h=f);return h=!r||c<=r?t[h]:a,s||h===a||Gi(a)?h:h+an(a)}:Sh(t))},Am=function(t,e,n,r){return Sr(ln(t)?!e:n===!0?!!(n=0):!r,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},Sg=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,a){return a(s)},r)}},bg=function(t,e){return function(n){return t(parseFloat(n))+(e||an(n))}},Eg=function(t,e,n){return Rm(t,e,0,1,n)},Cm=function(t,e,n){return Sr(n,function(r){return t[~~e(r)]})},Tg=function i(t,e,n){var r=e-t;return ln(t)?Cm(t,i(0,t.length),e):Sr(n,function(s){return(r+(s-t)%r)%r+t})},wg=function i(t,e,n){var r=e-t,s=r*2;return ln(t)?Cm(t,i(0,t.length-1),e):Sr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},Ga=function(t){return t.replace(sg,function(e){var n=e.indexOf("[")+1,r=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(ag);return Am(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},Rm=function(t,e,n,r,s){var a=e-t,o=r-n;return Sr(s,function(l){return n+((l-t)/a*o||0)})},Ag=function i(t,e,n,r){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ze(t),o={},l,c,h,f,u;if(n===!0&&(r=1)&&(n=null),a)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(h=[],f=t.length,u=f-2,c=1;c<f;c++)h.push(i(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else r||(t=Ws(ln(t)?[]:{},t));if(!h){for(l in e)$u.call(o,t,l,"get",e[l]);s=function(_){return tf(_,o)||(a?t.p:t)}}}return Sr(n,s)},ed=function(t,e,n){var r=t.labels,s=Jn,a,o,l;for(a in r)o=r[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},zn=function(t,e,n){var r=t.vars,s=r[e],a=me,o=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&ur.length&&Cl(),o&&(me=o),h=l?s.apply(c,l):s.call(c),me=a,h},ga=function(t){return gr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&zn(t,"onInterrupt"),t},Rs,Pm=[],Dm=function(t){if(t)if(t=!t.name&&t.default||t,Hu()||t.headless){var e=t.name,n=we(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Va,render:tf,add:$u,kill:Wg,modifier:Hg,rawVars:0},a={targetTest:0,get:0,getSetter:ju,aliases:{},register:0};if(qs(),t!==r){if(Ln[e])return;Wn(r,Wn(Rl(t,s),a)),Ws(r.prototype,Ws(s,Rl(t,a))),Ln[r.prop=e]=r,t.targetTest&&(al.push(r),Yu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}dm(e,r),t.register&&t.register(wn,r,bn)}else Pm.push(t)},he=255,xa={aqua:[0,he,he],lime:[0,he,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,he],navy:[0,0,128],white:[he,he,he],olive:[128,128,0],yellow:[he,he,0],orange:[he,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[he,0,0],pink:[he,192,203],cyan:[0,he,he],transparent:[he,he,he,0]},pc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*he+.5|0},Lm=function(t,e,n){var r=t?Gi(t)?[t>>16,t>>8&he,t&he]:0:xa.black,s,a,o,l,c,h,f,u,d,_;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xa[t])r=xa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&he,r&he,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&he,t&he]}else if(t.substr(0,3)==="hsl"){if(r=_=t.match($f),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=pc(l+1/3,s,a),r[1]=pc(l,s,a),r[2]=pc(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(cm),n&&r.length<4&&(r[3]=1),r}else r=t.match($f)||xa.transparent;r=r.map(Number)}return e&&!_&&(s=r[0]/he,a=r[1]/he,o=r[2]/he,f=Math.max(s,a,o),u=Math.min(s,a,o),h=(f+u)/2,f===u?l=c=0:(d=f-u,c=h>.5?d/(2-f-u):d/(f+u),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},Im=function(t){var e=[],n=[],r=-1;return t.split(fr).forEach(function(s){var a=s.match(Cs)||[];e.push.apply(e,a),n.push(r+=a.length+1)}),e.c=n,e},nd=function(t,e,n){var r="",s=(t+r).match(fr),a=e?"hsla(":"rgba(",o=0,l,c,h,f;if(!s)return t;if(s=s.map(function(u){return(u=Lm(u,e,1))&&a+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Im(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(fr,"1").split(Cs),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(fr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},fr=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xa)i+="|"+t+"\\b";return new RegExp(i+")","gi")})(),Cg=/hsl[a]?\(/,Nm=function(t){var e=t.join(" "),n;if(fr.lastIndex=0,fr.test(e))return n=Cg.test(e),t[1]=nd(t[1],n),t[0]=nd(t[0],n,Im(t[1])),!0},Ha,On=(function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,h,f,u,d,_=function g(p){var m=i()-r,T=p===!0,S,v,M,w;if((m>t||m<0)&&(n+=m-e),r+=m,M=r-n,S=M-a,(S>0||T)&&(w=++f.frame,u=M-f.time*1e3,f.time=M=M/1e3,a+=S+(S>=s?4:s-S),v=1),T||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](M,u,w,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){um&&(!_h&&Hu()&&(fi=_h=window,Wu=fi.document||{},Hn.gsap=wn,(fi.gsapVersions||(fi.gsapVersions=[])).push(wn.version),fm(Al||fi.GreenSockGlobals||!fi.gsap&&fi||{}),Pm.forEach(Dm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=h||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Ha=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=Va},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,T){var S=m?function(v,M,w,A){p(v,M,w,A),f.remove(S)}:p;return f.remove(p),o[T?"unshift":"push"](S),qs(),S},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f})(),qs=function(){return!Ha&&On.wake()},Zt={},Rg=/^[\d.\-M][\d.\-,\s]/,Pg=/["']/g,Dg=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(Pg,"").trim():+c,r=l.substr(o+1).trim();return e},Lg=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Ig=function(t){var e=(t+"").split("("),n=Zt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Dg(e[1])]:Lg(t).split(",").map(gm)):Zt._CE&&Rg.test(t)?Zt._CE("",t):n},Ng=function(t){return function(e){return 1-t(1-e)}},Hr=function(t,e){return t&&(we(t)?t:Zt[t]||Ig(t))||e},Jr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},a;return Sn(t,function(o){Zt[o]=Hn[o]=s,Zt[a=o.toLowerCase()]=n;for(var l in s)Zt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Zt[o+"."+l]=s[l]}),s},Um=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},mc=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/mh*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*rg((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Um(o);return s=mh/s,l.config=function(c,h){return i(t,c,h)},l},_c=function i(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Um(n);return r.config=function(s){return i(t,s)},r};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Jr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Zt.Linear.easeNone=Zt.none=Zt.Linear.easeIn;Jr("Elastic",mc("in"),mc("out"),mc());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(o){return o<e?i*o*o:o<n?i*Math.pow(o-1.5/t,2)+.75:o<r?i*(o-=2.25/t)*o+.9375:i*Math.pow(o-2.625/t,2)+.984375};Jr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Jr("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Jr("Circ",function(i){return-(om(1-i*i)-1)});Jr("Sine",function(i){return i===1?1:-ig(i*eg)+1});Jr("Back",_c("in"),_c("out"),_c());Zt.SteppedEase=Zt.steps=Hn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,a=1-ue;return function(o){return((r*lo(0,a,o)|0)+s)*n}}};za.ease=Zt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return qu+=i+","+i+"Params,"});var Fm=function(t,e){this.id=ng++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mm,this.set=e?e.getSetter:ju},Wa=(function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ys(this,+e.duration,1,1),this.data=e.data,me&&(this._ctx=me,me.data.push(this)),Ha||On.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ic(this,n),!s._dp||s.parent||ym(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ue||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),_m(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jf(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Xs(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-ue?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Pl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ue?0:this._rts,this.totalTime(lo(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),nc(this),pg(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ue&&(this._tTime-=ue)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=xe(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pl(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hg);var r=Qe;return Qe=n,Ku(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,td(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,td(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(qn(this,n),Mn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Mn(r)),this._dur||(this._zTime=-ue),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ue:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ue,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ue)},t.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},t.then=function(n){var r=this,s=r._prom;return new Promise(function(a){var o=we(n)?n:xm,l=function(){var h=r.then;r.then=null,s&&s(),we(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=h),a(o),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){ga(this)},i})();Wn(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ue,_prom:0,_ps:!1,_rts:1});var xn=(function(i){am(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),ve&&mi(n.parent||ve,Di(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Mm(Di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Ca(0,arguments,this),this},e.from=function(r,s,a){return Ca(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Ca(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Oe(r,s,qn(this,a),1),this},e.call=function(r,s,a){return mi(this,Oe.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Oe(r,a,qn(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,h){return a.runBackwards=1,Aa(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,h)},e.staggerFromTo=function(r,s,a,o,l,c,h,f){return o.startAt=a,Aa(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,l,c,h,f)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:xe(r),f=this._zTime<0!=r<0&&(this._initted||!c),u,d,_,g,p,m,T,S,v,M,w,A;if(this!==ve&&h>l&&r>=0&&(h=l),h!==this._tTime||a||f){if(o!==this._time&&c&&(h+=this._time-o,r+=this._time-o),u=h,v=this._start,S=this._ts,m=!S,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(u=xe(h%p),h===l?(g=this._repeat,u=c):(M=xe(h/p),g=~~M,g&&g===M&&(u=c,g--),u>c&&(u=c)),M=Xs(this._tTime,p),!o&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),w&&g&1&&(u=c-u,A=1),g!==M&&!this._lock){var x=w&&M&1,b=x===(w&&g&1);if(g<M&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(A?0:xe(g*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=xg(this,xe(o),xe(u)),T&&(h-=u-(u=T._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&c&&!s&&!M&&(zn(this,"onStart"),this._tTime!==h))return this;if(u>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||u>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(u-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(u-d._start)*d._ts,s,a),u!==this._time||!this._ts&&!m){T=0,_&&(h+=this._zTime=-ue);break}}d=_}else{d=this._last;for(var R=r<0?r:u;d;){if(_=d._prev,(d._act||R<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,a||Qe&&Ku(d)),u!==this._time||!this._ts&&!m){T=0,_&&(h+=this._zTime=R?-ue:ue);break}}d=_}}if(T&&!s&&(this.pause(),T.render(u>=o?0:-ue)._zTime=u>=o?1:-1,this._ts))return this._start=v,nc(this),this.render(r,s,a);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&gr(this,1),!s&&!(r<0&&!o)&&(h||o||!l)&&(zn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(Gi(s)||(s=qn(this,s,r)),!(r instanceof Wa)){if(ln(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Ze(r))return this.addLabel(r,s);if(we(r))r=Oe.delayedCall(0,r);else return this}return this!==r?mi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Oe?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return Ze(r)?this.removeLabel(r):we(r)?this.killTweensOf(r):(r.parent===this&&ec(this,r),r===this._recent&&(this._recent=this._last),Gr(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xe(On.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=qn(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=Oe.delayedCall(0,s||Va,a);return o.data="isPause",this._hasPause=1,mi(this,o,qn(this,r))},e.removePause=function(r){var s=this._first;for(r=qn(this,r);s;)s._start===r&&s.data==="isPause"&&gr(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)ar!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=Qn(r),l=this._first,c=Gi(s),h;l;)l instanceof Oe?ug(l._targets,o)&&(c?(!ar||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=qn(a,r),l=s,c=l.startAt,h=l.onStart,f=l.onStartParams,u=l.immediateRender,d,_=Oe.to(a,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ue,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ys(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,Wn({startAt:{time:qn(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),ed(this,qn(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),ed(this,qn(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ue)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=xe(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Gr(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Gr(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Jn,c,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=xe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ys(a,a===ve&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(ve._ts&&(_m(ve,Pl(r,ve)),pm=On.frame),On.frame>=Jf){Jf+=Vn.autoSleep||120;var s=ve._first;if((!s||!s._ts)&&Vn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},t})(Wa);Wn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ug=function(t,e,n,r,s,a,o){var l=new bn(this._pt,t,e,0,1,Gm,null,s),c=0,h=0,f,u,d,_,g,p,m,T;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=Ga(r)),a&&(T=[n,r],a(T,t,e),n=T[0],r=T[1]),u=n.match(fc)||[];f=fc.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:p,c:_.charAt(1)==="="?Ls(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=fc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(hm.test(r)||m)&&(l.e=0),this._pt=l,l},$u=function(t,e,n,r,s,a,o,l,c,h){we(r)&&(r=r(s||0,t,a));var f=t[e],u=n!=="get"?n:we(f)?c?t[e.indexOf("set")||!we(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=we(f)?c?kg:km:Qu,_;if(Ze(r)&&(~r.indexOf("random(")&&(r=Ga(r)),r.charAt(1)==="="&&(_=Ls(u,r)+(an(u)||0),(_||_===0)&&(r=_))),!h||u!==r||bh)return!isNaN(u*r)&&r!==""?(_=new bn(this._pt,t,e,+u||0,r-(u||0),typeof f=="boolean"?Gg:Vm,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&Xu(e,r),Ug.call(this,t,e,u,r,d,l||Vn.stringFilter,c))},Fg=function(t,e,n,r,s){if(we(t)&&(t=Ra(t,s,e,n,r)),!bi(t)||t.style&&t.nodeType||ln(t)||lm(t))return Ze(t)?Ra(t,s,e,n,r):t;var a={},o;for(o in t)a[o]=Ra(t[o],s,e,n,r);return a},Om=function(t,e,n,r,s,a){var o,l,c,h;if(Ln[t]&&(o=new Ln[t]).init(s,o.rawVars?e[t]:Fg(e[t],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new bn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Rs))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},ar,bh,Ju=function i(t,e,n){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,f=r.yoyoEase,u=r.keyframes,d=r.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,T=m&&m.data==="nested"?m.vars.targets:p,S=t._overwrite==="auto"&&!Vu,v=t.timeline,M=r.easeReverse||f,w,A,x,b,R,P,D,B,H,I,z,U,Y;if(v&&(!u||!s)&&(s="none"),t._ease=Hr(s,za.ease),t._rEase=M&&(Hr(M)||t._ease),t._from=!v&&!!r.runBackwards,t._from&&(t.ratio=1),!v||u&&!r.stagger){if(B=p[0]?Vr(p[0]).harness:0,U=B&&r[B.prop],w=Rl(r,Yu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?sl:cg),g._lazy=0),a){if(gr(t._startAt=Oe.set(p,Wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!o&&!d)&&t._startAt.revert(sl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),x=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Mn(l),immediateRender:o,stagger:0,parent:m},w),U&&(x[B.prop]=U),gr(t._startAt=Oe.set(p,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(sl):t._startAt.render(-1,!0)),t._zTime=e,!o)i(t._startAt,ue,ue);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Mn(l)||l&&!_,A=0;A<p.length;A++){if(R=p[A],D=R._gsap||Zu(p)[A]._gsap,t._ptLookup[A]=I={},gh[D.id]&&ur.length&&Cl(),z=T===p?A:T.indexOf(R),B&&(H=new B).init(R,U||w,t,z,T)!==!1&&(t._pt=b=new bn(t._pt,R,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(J){I[J]=b}),H.priority&&(P=1)),!B||U)for(x in w)Ln[x]&&(H=Om(x,w,t,z,R,T))?H.priority&&(P=1):I[x]=b=$u.call(t,R,x,"get",w[x],z,T,0,r.stringFilter);t._op&&t._op[A]&&t.kill(R,t._op[A]),S&&t._pt&&(ar=t,ve.killTweensOf(R,I,t.globalTime(e)),Y=!t.parent,ar=0),t._pt&&l&&(gh[D.id]=1)}P&&Hm(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,u&&e<=0&&v.render(Jn,!0,!0)},Og=function(t,e,n,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,f,u,d;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,d=t._targets.length;d--;){if(h=u[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return bh=1,t.vars[e]="+=0",Ju(t,o),bh=0,l?ka(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)f=c[d],h=f._pt||f,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,f.e&&(f.e=Le(n)+an(f.e)),f.b&&(f.b=h.s+an(f.b))},Bg=function(t,e){var n=t[0]?Vr(t[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return e;s=Ws({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},zg=function(t,e,n,r){var s=e.ease||r||"power1.inOut",a,o;if(ln(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ra=function(t,e,n,r,s){return we(t)?t.call(e,n,r,s):Ze(t)&&~t.indexOf("random(")?Ga(t):t},Bm=qu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",zm={};Sn(Bm+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return zm[i]=1});var Oe=(function(i){am(t,i);function t(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Aa(r))||this;var l=o.vars,c=l.duration,h=l.delay,f=l.immediateRender,u=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=r.parent||ve,T=(ln(n)||lm(n)?Gi(n[0]):"length"in r)?[n]:Qn(n),S,v,M,w,A,x,b,R;if(o._targets=T.length?Zu(T):ka("GSAP target "+n+" not found. https://gsap.com",!Vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||u||Eo(c)||Eo(h)){r=o.vars;var P=r.easeReverse||r.yoyoEase;if(S=o.timeline=new xn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:T}),S.kill(),S.parent=S._dp=Di(o),S._start=0,u||Eo(c)||Eo(h)){if(w=T.length,b=u&&Tm(u),bi(u))for(A in u)~Bm.indexOf(A)&&(R||(R={}),R[A]=u[A]);for(v=0;v<w;v++)M=Rl(r,zm),M.stagger=0,P&&(M.easeReverse=P),R&&Ws(M,R),x=T[v],M.duration=+Ra(c,Di(o),v,x,T),M.delay=(+Ra(h,Di(o),v,x,T)||0)-o._delay,!u&&w===1&&M.delay&&(o._delay=h=M.delay,o._start+=h,M.delay=0),S.to(x,M,b?b(v,x,T):0),S._ease=Zt.none;S.duration()?c=h=0:o.timeline=0}else if(_){Aa(Wn(S.vars.defaults,{ease:"none"})),S._ease=Hr(_.ease||r.ease||"none");var D=0,B,H,I;if(ln(_))_.forEach(function(z){return S.to(T,z,">")}),S.duration();else{M={};for(A in _)A==="ease"||A==="easeEach"||zg(A,_[A],M,_.easeEach);for(A in M)for(B=M[A].sort(function(z,U){return z.t-U.t}),D=0,v=0;v<B.length;v++)H=B[v],I={ease:H.e,duration:(H.t-(v?B[v-1].t:0))/100*c},I[A]=H.v,S.to(T,I,D),D+=I.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!Vu&&(ar=Di(o),ve.killTweensOf(T),ar=0),mi(m,Di(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===xe(m._time)&&Mn(f)&&mg(Di(o))&&m.data!=="nested")&&(o._tTime=-ue,o.render(Math.max(0,-h)||0)),p&&Mm(Di(o),p),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,h=r<0,f=r>l-ue&&!h?l:r<ue?0:r,u,d,_,g,p,m,T,S;if(!c)gg(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+r,s,a);if(u=xe(f%g),f===l?(_=this._repeat,u=c):(p=xe(f/g),_=~~p,_&&_===p?(u=c,_--):u>c&&(u=c)),m=this._yoyo&&_&1,m&&(u=c-u),p=Xs(this._tTime,g),u===o&&!a&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==g&&this._initted&&(this._lock=a=1,this.render(xe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Sm(this,h?r:u,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var v=u<o;if(v!==this._inv){var M=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(v?-1:1)/M:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(u/c);if(this._from&&(this.ratio=T=1-T),this._tTime=f,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;S&&S.render(r<0?r:S._dur*S._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&xh(this,r,s,a),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(h&&!this._onUpdate&&xh(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gr(this,1),!s&&!(h&&!o)&&(f||o||m)&&(zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){Ha||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ju(this,c),h=this._ease(c/this._dur),Og(this,r,s,a,o,h,c,l)?this.resetTo(r,s,a,o,1):(ic(this,0),this.parent||vm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ga(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ar&&ar.vars.overwrite!==!0)._first||ga(this),this.parent&&a!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Qn(r):o,c=this._ptLookup,h=this._pt,f,u,d,_,g,p,m;if((!s||s==="all")&&dg(o,l))return s==="all"&&(this._pt=0),ga(this);for(f=this._op=this._op||[],s!=="all"&&(Ze(s)&&(g={},Sn(s,function(T){return g[T]=1}),s=g),s=Bg(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(f[m]=s,_=u,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=u&&u[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ec(this,p,"_pt"),delete u[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&ga(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ca(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Ca(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return ve.killTweensOf(r,s,a)},t})(Wa);Wn(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(i){Oe[i]=function(){var t=new xn,e=yh.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Qu=function(t,e,n){return t[e]=n},km=function(t,e,n){return t[e](n)},kg=function(t,e,n,r){return t[e](r.fp,n)},Vg=function(t,e,n){return t.setAttribute(e,n)},ju=function(t,e){return we(t[e])?km:Gu(t[e])&&t.setAttribute?Vg:Qu},Vm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Gg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gm=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},tf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Hg=function(t,e,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,n),s=a},Wg=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?ec(this,e,"_pt"):e.dep||(n=1),e=r;return!n},Xg=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Hm=function(t){for(var e=t._pt,n,r,s,a;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=n}t._pt=s},bn=(function(){function i(e,n,r,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Vm,this.d=l||this,this.set=c||Qu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Xg,this.m=n,this.mt=s,this.tween=r},i})();Sn(qu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(i){return Yu[i]=1});Hn.TweenMax=Hn.TweenLite=Oe;Hn.TimelineLite=Hn.TimelineMax=xn;ve=new xn({sortChildren:!1,defaults:za,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Vn.stringFilter=Nm;var Wr=[],ol={},Yg=[],id=0,qg=0,gc=function(t){return(ol[t]||Yg).map(function(e){return e()})},Eh=function(){var t=Date.now(),e=[];t-id>2&&(gc("matchMediaInit"),Wr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=fi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),gc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),id=t,gc("matchMedia"))},Wm=(function(){function i(e,n){this.selector=n&&Mh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=qg++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){we(n)&&(s=r,r=n,n=we);var a=this,o=function(){var c=me,h=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Mh(s)),me=a,f=r.apply(a,arguments),we(f)&&a._r.push(f),me=c,a.selector=h,a.isReverted=!1,f};return a.last=o,n===we?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var r=me;me=null,n(this),me=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Oe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,f){return f.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Oe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},t.revert=function(n){this.kill(n||{})},i})(),Zg=(function(){function i(e){this.contexts=[],this.scope=e,me&&me.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){bi(n)||(n={matches:n});var a=new Wm(0,s||this.scope),o=a.conditions={},l,c,h;me&&!a.selector&&(a.selector=me.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?h=1:(l=fi.matchMedia(n[c]),l&&(Wr.indexOf(a)<0&&Wr.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Eh):l.addEventListener("change",Eh)));return h&&r(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),Dl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return Dm(r)})},timeline:function(t){return new xn(t)},getTweensOf:function(t,e){return ve.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ze(t)&&(t=Qn(t)[0]);var s=Vr(t||{}).get,a=n?xm:gm;return n==="native"&&(n=""),t&&(e?a((Ln[e]&&Ln[e].get||s)(t,e,n,r)):function(o,l,c){return a((Ln[o]&&Ln[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Qn(t),t.length>1){var r=t.map(function(h){return wn.quickSetter(h,e,n)}),s=r.length;return function(h){for(var f=s;f--;)r[f](h)}}t=t[0]||{};var a=Ln[e],o=Vr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var f=new a;Rs._pt=0,f.init(t,n?h+n:h,Rs,0,[t]),f.render(1,f),Rs._pt&&tf(1,Rs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var r,s=wn.to(t,Wn((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return ve.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Hr(t.ease,za.ease)),Qf(za,t||{})},config:function(t){return Qf(Vn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Ln[o]&&!Hn[o]&&ka(e+" effect requires "+o+" plugin.")}),dc[e]=function(o,l,c){return n(Qn(o),Wn(l||{},s),c)},a&&(xn.prototype[e]=function(o,l,c){return this.add(dc[e](o,bi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Zt[t]=Hr(e)},parseEase:function(t,e){return arguments.length?Hr(t,e):Zt},getById:function(t){return ve.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new xn(t),r,s;for(n.smoothChildTiming=Mn(t.smoothChildTiming),ve.remove(n),n._dp=0,n._time=n._tTime=ve._time,r=ve._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Oe&&r.vars.onComplete===r._targets[0]))&&mi(n,r,r._start-r._delay),r=s;return mi(ve,n,0),n},context:function(t,e){return t?new Wm(t,e):me},matchMedia:function(t){return new Zg(t)},matchMediaRefresh:function(){return Wr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Eh()},addEventListener:function(t,e){var n=ol[t]||(ol[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ol[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:Tg,wrapYoyo:wg,distribute:Tm,random:Am,snap:wm,normalize:Eg,getUnit:an,clamp:yg,splitColor:Lm,toArray:Qn,selector:Mh,mapRange:Rm,pipe:Sg,unitize:bg,interpolate:Ag,shuffle:Em},install:fm,effects:dc,ticker:On,updateRoot:xn.updateRoot,plugins:Ln,globalTimeline:ve,core:{PropTween:bn,globals:dm,Tween:Oe,Timeline:xn,Animation:Wa,getCache:Vr,_removeLinkedListItem:ec,reverting:function(){return Qe},context:function(t){return t&&me&&(me.data.push(t),t._ctx=me),me},suppressOverwrites:function(t){return Vu=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Dl[i]=Oe[i]});On.add(xn.updateRoot);Rs=Dl.to({},{duration:0});var Kg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},$g=function(t,e){var n=t._targets,r,s,a;for(r in e)for(s=n.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Kg(a,r)),a&&a.modifier&&a.modifier(e[r],t,n[s],r))},xc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Ze(s)&&(l={},Sn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}$g(o,s)}}}},wn=Dl.registerPlugin({name:"attr",init:function(t,e,n,r,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},xc("roundProps",Sh),xc("modifiers"),xc("snap",wm))||Dl;Oe.version=xn.version=wn.version="3.15.0";um=1;Hu()&&qs();Zt.Power0;Zt.Power1;Zt.Power2;Zt.Power3;Zt.Power4;Zt.Linear;Zt.Quad;Zt.Cubic;Zt.Quart;Zt.Quint;Zt.Strong;Zt.Elastic;Zt.Back;Zt.SteppedEase;Zt.Bounce;Zt.Sine;Zt.Expo;Zt.Circ;var rd,or,Is,ef,Ur,sd,nf,Jg=function(){return typeof window<"u"},Hi={},Lr=180/Math.PI,Ns=Math.PI/180,rs=Math.atan2,ad=1e8,rf=/([A-Z])/g,Qg=/(left|right|width|margin|padding|x)/i,jg=/[\s,\(]\S/,xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Th=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},tx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ex=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},nx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ix=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Xm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ym=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},rx=function(t,e,n){return t.style[e]=n},sx=function(t,e,n){return t.style.setProperty(e,n)},ax=function(t,e,n){return t._gsap[e]=n},ox=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},lx=function(t,e,n,r,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},cx=function(t,e,n,r,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},ye="transform",En=ye+"Origin",hx=function i(t,e){var n=this,r=this.target,s=r.style,a=r._gsap;if(t in Hi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=xi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Li(r,o)}):this.tfm[t]=a.x?a[t]:Li(r,t),t===En&&(this.tfm.zOrigin=a.zOrigin);else return xi.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(ye)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=ye}(s||e)&&this.props.push(t,e,s[t])},qm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ux=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(rf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=nf(),(!s||!s.isStart)&&!n[ye]&&(qm(n),r.zOrigin&&n[En]&&(n[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Zm=function(t,e){var n={target:t,props:[],revert:ux,save:hx};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},Km,wh=function(t,e){var n=or.createElementNS?or.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):or.createElement(t);return n&&n.style?n:or.createElement(t)},kn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(rf,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Zs(e)||e,1)||""},od="O,Moz,ms,Ms,Webkit".split(","),Zs=function(t,e,n){var r=e||Ur,s=r.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(od[a]+t in s););return a<0?null:(a===3?"ms":a>=0?od[a]:"")+t},Ah=function(){Jg()&&window.document&&(rd=window,or=rd.document,Is=or.documentElement,Ur=wh("div")||{style:{}},wh("div"),ye=Zs(ye),En=ye+"Origin",Ur.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Km=!!Zs("perspective"),nf=wn.core.reverting,ef=1)},ld=function(t){var e=t.ownerSVGElement,n=wh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Is.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Is.removeChild(n),s},cd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},$m=function(t){var e,n;try{e=t.getBBox()}catch{e=ld(t),n=1}return e&&(e.width||e.height)||n||(e=ld(t)),e&&!e.width&&!e.x&&!e.y?{x:+cd(t,["x","cx","x1"])||0,y:+cd(t,["y","cy","y1"])||0,width:0,height:0}:e},Jm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&$m(t))},xr=function(t,e){if(e){var n=t.style,r;e in Hi&&e!==En&&(e=ye),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(rf,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,r,s,a){var o=new bn(t._pt,e,n,0,1,a?Ym:Xm);return t._pt=o,o.b=r,o.e=s,t._props.push(n),o},hd={deg:1,rad:1,turn:1},fx={grid:1,flex:1},vr=function i(t,e,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ur.style,l=Qg.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),f=100,u=r==="px",d=r==="%",_,g,p,m;if(r===a||!s||hd[r]||hd[a])return s;if(a!=="px"&&!u&&(s=i(t,e,n,"px")),m=t.getCTM&&Jm(t),(d||a==="%")&&(Hi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[h],Le(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(u?a:r),g=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===or||!g.appendChild)&&(g=or.body),p=g._gsap,p&&d&&p.width&&l&&p.time===On.time&&!p.uncache)return Le(s/p.width*f);if(d&&(e==="height"||e==="width")){var T=t.style[e];t.style[e]=f+r,_=t[h],T?t.style[e]=T:xr(t,e)}else(d||a==="%")&&!fx[kn(g,"display")]&&(o.position=kn(t,"position")),g===t&&(o.position="static"),g.appendChild(Ur),_=Ur[h],g.removeChild(Ur),o.position="absolute";return l&&d&&(p=Vr(g),p.time=On.time,p.width=g[h]),Le(u?_*s/f:_&&s?f/_*s:0)},Li=function(t,e,n,r){var s;return ef||Ah(),e in xi&&e!=="transform"&&(e=xi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Hi[e]&&e!=="transform"?(s=Ya(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Il(kn(t,En))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ll[e]&&Ll[e](t,e,n)||kn(t,e)||mm(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(t,e,s,n)+n:s},dx=function(t,e,n,r){if(!n||n==="none"){var s=Zs(e,t,1),a=s&&kn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=kn(t,"borderTopColor"))}var o=new bn(this._pt,t.style,e,0,1,Gm),l=0,c=0,h,f,u,d,_,g,p,m,T,S,v,M;if(o.b=n,o.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=kn(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=t.style[e],t.style[e]=r,r=kn(t,e)||r,g?t.style[e]=g:xr(t,e)),h=[n,r],Nm(h),n=h[0],r=h[1],u=n.match(Cs)||[],M=r.match(Cs)||[],M.length){for(;f=Cs.exec(r);)p=f[0],T=r.substring(l,f.index),_?_=(_+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(_=1),p!==(g=u[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=Ls(d,p)+v),m=parseFloat(p),S=p.substr((m+"").length),l=Cs.lastIndex-S.length,S||(S=S||Vn.units[e]||v,l===r.length&&(r+=S,o.e+=S)),v!==S&&(d=vr(t,e,g,S)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:m-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Ym:Xm;return hm.test(r)&&(o.e=0),this._pt=o,o},ud={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},px=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=ud[n]||n,e[1]=ud[r]||r,e.join(" ")},mx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Hi[o]&&(l=1,o=o==="transformOrigin"?En:ye),xr(n,o);l&&(xr(n,ye),a&&(a.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ya(n,1),a.uncache=1,qm(r)))}},Ll={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var a=t._pt=new bn(t._pt,e,n,0,0,mx);return a.u=r,a.pr=-10,a.tween=s,t._props.push(n),1}}},Xa=[1,0,0,1,0,0],Qm={},jm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fd=function(t){var e=kn(t,ye);return jm(e)?Xa:e.substr(7).match(cm).map(Le)},sf=function(t,e){var n=t._gsap||Vr(t),r=t.style,s=fd(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xa:s):(s===Xa&&!t.offsetParent&&t!==Is&&!n.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Is.appendChild(t)),s=fd(t),l?r.display=l:xr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Is.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ch=function(t,e,n,r,s,a){var o=t._gsap,l=s||sf(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,f=o.xOffset||0,u=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],T=l[5],S=e.split(" "),v=parseFloat(S[0])||0,M=parseFloat(S[1])||0,w,A,x,b;n?l!==Xa&&(A=d*p-_*g)&&(x=v*(p/A)+M*(-g/A)+(g*T-p*m)/A,b=v*(-_/A)+M*(d/A)-(d*T-_*m)/A,v=x,M=b):(w=$m(t),v=w.x+(~S[0].indexOf("%")?v/100*w.width:v),M=w.y+(~(S[1]||S[0]).indexOf("%")?M/100*w.height:M)),r||r!==!1&&o.smooth?(m=v-c,T=M-h,o.xOffset=f+(m*d+T*g)-m,o.yOffset=u+(m*_+T*p)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!n,t.style[En]="0px 0px",a&&(lr(a,o,"xOrigin",c,v),lr(a,o,"yOrigin",h,M),lr(a,o,"xOffset",f,o.xOffset),lr(a,o,"yOffset",u,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+M)},Ya=function(t,e){var n=t._gsap||new Fm(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=kn(t,En)||"0",h,f,u,d,_,g,p,m,T,S,v,M,w,A,x,b,R,P,D,B,H,I,z,U,Y,J,it,et,ft,Ht,Kt,Ut;return h=f=u=g=p=m=T=S=v=0,d=_=1,n.svg=!!(t.getCTM&&Jm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ye]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ye]!=="none"?l[ye]:"")),r.scale=r.rotate=r.translate="none"),A=sf(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",U=""):U=!e&&t.getAttribute("data-svg-origin"),Ch(t,U||c,!!U||n.originIsAbsolute,n.smooth!==!1,A)),M=n.xOrigin||0,w=n.yOrigin||0,A!==Xa&&(P=A[0],D=A[1],B=A[2],H=A[3],h=I=A[4],f=z=A[5],A.length===6?(d=Math.sqrt(P*P+D*D),_=Math.sqrt(H*H+B*B),g=P||D?rs(D,P)*Lr:0,T=B||H?rs(B,H)*Lr+g:0,T&&(_*=Math.abs(Math.cos(T*Ns))),n.svg&&(h-=M-(M*P+w*B),f-=w-(M*D+w*H))):(Ut=A[6],Ht=A[7],it=A[8],et=A[9],ft=A[10],Kt=A[11],h=A[12],f=A[13],u=A[14],x=rs(Ut,ft),p=x*Lr,x&&(b=Math.cos(-x),R=Math.sin(-x),U=I*b+it*R,Y=z*b+et*R,J=Ut*b+ft*R,it=I*-R+it*b,et=z*-R+et*b,ft=Ut*-R+ft*b,Kt=Ht*-R+Kt*b,I=U,z=Y,Ut=J),x=rs(-B,ft),m=x*Lr,x&&(b=Math.cos(-x),R=Math.sin(-x),U=P*b-it*R,Y=D*b-et*R,J=B*b-ft*R,Kt=H*R+Kt*b,P=U,D=Y,B=J),x=rs(D,P),g=x*Lr,x&&(b=Math.cos(x),R=Math.sin(x),U=P*b+D*R,Y=I*b+z*R,D=D*b-P*R,z=z*b-I*R,P=U,I=Y),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Le(Math.sqrt(P*P+D*D+B*B)),_=Le(Math.sqrt(z*z+Ut*Ut)),x=rs(I,z),T=Math.abs(x)>2e-4?x*Lr:0,v=Kt?1/(Kt<0?-Kt:Kt):0),n.svg&&(U=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!jm(kn(t,ye)),U&&t.setAttribute("transform",U))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,T+=T<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Le(d),n.scaleY=Le(_),n.rotation=Le(g)+o,n.rotationX=Le(p)+o,n.rotationY=Le(m)+o,n.skewX=T+o,n.skewY=S+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[En]=Il(c)),n.xOffset=n.yOffset=0,n.force3D=Vn.force3D,n.renderTransform=n.svg?gx:Km?t0:_x,n.uncache=0,n},Il=function(t){return(t=t.split(" "))[0]+" "+t[1]},vc=function(t,e,n){var r=an(e);return Le(parseFloat(e)+parseFloat(vr(t,"x",n+"px",r)))+r},_x=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,t0(t,e)},wr="0deg",ra="0px",Ar=") ",t0=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,f=n.rotationX,u=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,S=n.zOrigin,v="",M=m==="auto"&&t&&t!==1||m===!0;if(S&&(f!==wr||h!==wr)){var w=parseFloat(h)*Ns,A=Math.sin(w),x=Math.cos(w),b;w=parseFloat(f)*Ns,b=Math.cos(w),a=vc(T,a,A*b*-S),o=vc(T,o,-Math.sin(w)*-S),l=vc(T,l,x*b*-S+S)}p!==ra&&(v+="perspective("+p+Ar),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||a!==ra||o!==ra||l!==ra)&&(v+=l!==ra||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ar),c!==wr&&(v+="rotate("+c+Ar),h!==wr&&(v+="rotateY("+h+Ar),f!==wr&&(v+="rotateX("+f+Ar),(u!==wr||d!==wr)&&(v+="skew("+u+", "+d+Ar),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ar),T.style[ye]=v||"translate(0, 0)"},gx=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,f=n.scaleX,u=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,S=parseFloat(a),v=parseFloat(o),M,w,A,x,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ns,c*=Ns,M=Math.cos(l)*f,w=Math.sin(l)*f,A=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Ns,b=Math.tan(c-h),b=Math.sqrt(1+b*b),A*=b,x*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,w*=b)),M=Le(M),w=Le(w),A=Le(A),x=Le(x)):(M=f,x=u,w=A=0),(S&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(S=vr(d,"x",a,"px"),v=vr(d,"y",o,"px")),(_||g||p||m)&&(S=Le(S+_-(_*M+g*A)+p),v=Le(v+g-(_*w+g*x)+m)),(r||s)&&(b=d.getBBox(),S=Le(S+r/100*b.width),v=Le(v+s/100*b.height)),b="matrix("+M+","+w+","+A+","+x+","+S+","+v+")",d.setAttribute("transform",b),T&&(d.style[ye]=b)},xx=function(t,e,n,r,s){var a=360,o=Ze(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Lr:1),c=l-r,h=r+c+"deg",f,u;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*ad)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*ad)%a-~~(c/a)*a)),t._pt=u=new bn(t._pt,e,n,r,c,tx),u.e=h,u.u="deg",t._props.push(n),u},dd=function(t,e){for(var n in e)t[n]=e[n];return t},vx=function(t,e,n){var r=dd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,f,u,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[ye]=e,o=Ya(n,1),xr(n,ye),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ye],a[ye]=e,o=Ya(n,1),a[ye]=c);for(l in Hi)c=r[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=an(c),_=an(h),f=d!==_?vr(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new bn(t._pt,o,l,f,u-f,Th),t._pt.u=_||0,t._props.push(l));dd(o,r)};Sn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",a=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(o){return t<2?i+o:"border"+o+i});Ll[t>1?"border"+i:i]=function(o,l,c,h,f){var u,d;if(arguments.length<4)return u=a.map(function(_){return Li(o,_,c)}),d=u.join(" "),d.split(u[0]).length===5?u[0]:d;u=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=u[g]=u[g]||u[(g-1)/2|0]}),o.init(l,d,f)}});var e0={name:"css",register:Ah,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,f,u,d,_,g,p,m,T,S,v,M,w,A,x,b;ef||Ah(),this.styles=this.styles||Zm(t),x=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(Ln[g]&&Om(g,e,n,r,t,s)))){if(d=typeof h,_=Ll[g],d==="function"&&(h=h.call(n,r,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ga(h)),_)_(this,t,g,h,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",fr.lastIndex=0,fr.test(c)||(p=an(c),m=an(h),m?p!==m&&(c=vr(t,g,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,r,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,t,s):l[g],Ze(c)&&~c.indexOf("random(")&&(c=Ga(c)),an(c+"")||c==="auto"||(c+=Vn.units[g]||an(Li(t,g))||""),(c+"").charAt(1)==="="&&(c=Li(t,g))):c=Li(t,g),u=parseFloat(c),T=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),T&&(h=h.substr(2)),f=parseFloat(h),g in xi&&(g==="autoAlpha"&&(u===1&&Li(t,"visibility")==="hidden"&&f&&(u=0),x.push("visibility",0,o.visibility),lr(this,o,"visibility",u?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Hi,S){if(this.styles.save(g),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=kn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=h,h=kn(t,"perspective"),R?t.style.perspective=R:xr(t,"perspective")}f=parseFloat(h)}if(v||(M=t._gsap,M.renderTransform&&!e.parseTransform||Ya(t,e.parseTransform),w=e.smoothOrigin!==!1&&M.smooth,v=this._pt=new bn(this._pt,o,ye,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new bn(this._pt,M,"scaleY",M.scaleY,(T?Ls(M.scaleY,T+f):f)-M.scaleY||0,Th),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(En,0,o[En]),h=px(h),M.svg?Ch(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&lr(this,M,"zOrigin",M.zOrigin,m),lr(this,o,g,Il(c),Il(h)));continue}else if(g==="svgOrigin"){Ch(t,h,1,w,0,this);continue}else if(g in Qm){xx(this,M,g,u,T?Ls(u,T+h):h);continue}else if(g==="smoothOrigin"){lr(this,M,"smooth",M.smooth,h);continue}else if(g==="force3D"){M[g]=h;continue}else if(g==="transform"){vx(this,h,t);continue}}else g in o||(g=Zs(g)||g);if(S||(f||f===0)&&(u||u===0)&&!jg.test(h)&&g in o)p=(c+"").substr((u+"").length),f||(f=0),m=an(h)||(g in Vn.units?Vn.units[g]:p),p!==m&&(u=vr(t,g,c,m)),this._pt=new bn(this._pt,S?M:o,g,u,(T?Ls(u,T+f):f)-u,!S&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?ix:Th),this._pt.u=m||0,S&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=nx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=ex);else if(g in o)dx.call(this,t,g,c,T?T+h:h);else if(g in t)this.add(t,g,c||t[g],T?T+h:h,r,s);else if(g!=="parseTransform"){Xu(g,h);continue}S||(g in o?x.push(g,0,o[g]):typeof t[g]=="function"?x.push(g,2,t[g]()):x.push(g,1,c||t[g])),a.push(g)}}A&&Hm(this)},render:function(t,e){if(e.tween._time||!nf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Li,aliases:xi,getSetter:function(t,e,n){var r=xi[e];return r&&r.indexOf(",")<0&&(e=r),e in Hi&&e!==En&&(t._gsap.x||Li(t,"x"))?n&&sd===n?e==="scale"?ox:ax:(sd=n||{})&&(e==="scale"?lx:cx):t.style&&!Gu(t.style[e])?rx:~e.indexOf("-")?sx:ju(t,e)},core:{_removeProperty:xr,_getMatrix:sf}};wn.utils.checkPrefix=Zs;wn.core.getStyleSaver=Zm;(function(i,t,e,n){var r=Sn(i+","+t+","+e,function(s){Hi[s]=1});Sn(t,function(s){Vn.units[s]="deg",Qm[s]=1}),xi[r[13]]=i+","+t,Sn(n,function(s){var a=s.split(":");xi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Vn.units[i]="px"});wn.registerPlugin(e0);var Dt=wn.registerPlugin(e0)||wn;Dt.core.Tween;const af="185",Us={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yx=0,pd=1,Mx=2,ll=1,Sx=2,va=3,yr=0,cn=1,pn=2,Bi=0,Xr=1,dr=2,md=3,_d=4,bx=5,Ir=100,Ex=101,Tx=102,wx=103,Ax=104,Cx=200,Rx=201,Px=202,Dx=203,Rh=204,Ph=205,Lx=206,Ix=207,Nx=208,Ux=209,Fx=210,Ox=211,Bx=212,zx=213,kx=214,Dh=0,Lh=1,Ih=2,Ks=3,Nh=4,Uh=5,Fh=6,Oh=7,n0=0,Vx=1,Gx=2,Mi=0,i0=1,r0=2,s0=3,a0=4,o0=5,l0=6,c0=7,h0=300,Yr=301,$s=302,yc=303,Mc=304,rc=306,Nl=1e3,Fi=1001,Bh=1002,Je=1003,Hx=1004,To=1005,on=1006,Sc=1007,Fr=1008,Kn=1009,u0=1010,f0=1011,qa=1012,of=1013,Ei=1014,vi=1015,Wi=1016,lf=1017,cf=1018,Za=1020,d0=35902,p0=35899,m0=1021,_0=1022,ri=1023,Xi=1026,Or=1027,g0=1028,hf=1029,qr=1030,uf=1031,ff=1033,cl=33776,hl=33777,ul=33778,fl=33779,zh=35840,kh=35841,Vh=35842,Gh=35843,Hh=36196,Wh=37492,Xh=37496,Yh=37488,qh=37489,Ul=37490,Zh=37491,Kh=37808,$h=37809,Jh=37810,Qh=37811,jh=37812,tu=37813,eu=37814,nu=37815,iu=37816,ru=37817,su=37818,au=37819,ou=37820,lu=37821,cu=36492,hu=36494,uu=36495,fu=36283,du=36284,Fl=36285,pu=36286,Wx=3200,gd=0,Xx=1,ir="",sn="srgb",Ol="srgb-linear",Bl="linear",ee="srgb",ss=7680,xd=519,Yx=512,qx=513,Zx=514,df=515,Kx=516,$x=517,pf=518,Jx=519,mu=35044,vd="300 es",yi=2e3,zl=2001;function Qx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ka(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jx(){const i=Ka("canvas");return i.style.display="block",i}const yd={};function kl(...i){const t="THREE."+i.shift();console.log(t,...i)}function x0(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=x0(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=x0(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fs(...i){const t=i.join(" ");t in yd||(yd[t]=!0,Lt(...i))}function tv(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ev={[Dh]:Lh,[Ih]:Fh,[Nh]:Oh,[Ks]:Uh,[Lh]:Dh,[Fh]:Ih,[Oh]:Nh,[Uh]:Ks};class br{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dl=Math.PI/180,_u=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function nv(i,t){return(i%t+t)%t}function bc(i,t,e){return(1-e)*i+e*t}function _i(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const iv={DEG2RAD:dl},Ff=class Ff{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ff.prototype.isVector2=!0;let ot=Ff;class Mr{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3],u=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(f!==g||l!==u||c!==d||h!==_){let p=l*u+c*d+h*_+f*g;p<0&&(u=-u,d=-d,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const T=Math.acos(p),S=Math.sin(T);m=Math.sin(m*T)/S,o=Math.sin(o*T)/S,l=l*m+u*o,c=c*m+d*o,h=h*m+_*o,f=f*m+g*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+_*o,f=f*m+g*o;const T=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=T,c*=T,h*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=s[a],u=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*f+l*d-c*u,t[e+1]=l*_+h*u+c*f-o*d,t[e+2]=c*_+h*d+o*u-l*f,t[e+3]=h*_-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),f=o(s/2),u=l(n/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"YXZ":this._x=u*h*f+c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"ZXY":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f-u*d*_;break;case"ZYX":this._x=u*h*f-c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f+u*d*_;break;case"YZX":this._x=u*h*f+c*d*_,this._y=c*d*f+u*h*_,this._z=c*h*_-u*d*f,this._w=c*h*f-u*d*_;break;case"XZY":this._x=u*h*f-c*d*_,this._y=c*d*f-u*h*_,this._z=c*h*_+u*d*f,this._w=c*h*f+u*d*_;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Of=class Of{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Md.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ec.copy(this).projectOnVector(t),this.sub(Ec)}reflect(t){return this.sub(Ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Of.prototype.isVector3=!0;let L=Of;const Ec=new L,Md=new Mr,Bf=class Bf{constructor(t,e,n,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],T=r[1],S=r[4],v=r[7],M=r[2],w=r[5],A=r[8];return s[0]=a*g+o*T+l*M,s[3]=a*p+o*S+l*w,s[6]=a*m+o*v+l*A,s[1]=c*g+h*T+f*M,s[4]=c*p+h*S+f*w,s[7]=c*m+h*v+f*A,s[2]=u*g+d*T+_*M,s[5]=u*p+d*S+_*w,s[8]=u*m+d*v+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,_=e*f+n*u+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(r*c-h*n)*g,t[2]=(o*n-r*a)*g,t[3]=u*g,t[4]=(h*e-r*l)*g,t[5]=(r*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tc.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tc.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Bf.prototype.isMatrix3=!0;let Nt=Bf;const Tc=new Nt,Sd=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rv(){const i={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ee&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?Bl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ol]:{primaries:t,whitePoint:n,transfer:Bl,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Sd,fromXYZ:bd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}const qt=rv();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let as;class sv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=Ka("canvas")),as.width=t.width,as.height=t.height;const r=as.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ka("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let av=0;class mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wc(r[a].image)):s.push(wc(r[a]))}else s=wc(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}let ov=0;const Ac=new L;class je extends br{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,n=Fi,r=Fi,s=on,a=Fr,o=ri,l=Kn,c=je.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=zi(),this.name="",this.source=new mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ac).x}get height(){return this.source.getSize(Ac).y}get depth(){return this.source.getSize(Ac).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==h0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nl:t.x=t.x-Math.floor(t.x);break;case Fi:t.x=t.x<0?0:1;break;case Bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nl:t.y=t.y-Math.floor(t.y);break;case Fi:t.y=t.y<0?0:1;break;case Bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=h0;je.DEFAULT_ANISOTROPY=1;const zf=class zf{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,M=(m+1)/2,w=(h+u)/4,A=(f+g)/4,x=(_+p)/4;return S>v&&S>M?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=w/n,s=A/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=x/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=x/s),this.set(n,r,s,e),this}let T=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(p-_)/T,this.y=(f-g)/T,this.z=(u-h)/T,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zf.prototype.isVector4=!0;let Te=zf;class lv extends br{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new je(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new mf(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends lv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class v0 extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cv extends je{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Je,this.minFilter=Je,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=class tc{constructor(t,e,n,r,s,a,o,l,c,h,f,u,d,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,f,u,d,_,g,p)}set(t,e,n,r,s,a,o,l,c,h,f,u,d,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tc().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/os.setFromMatrixColumn(t,0).length(),s=1/os.setFromMatrixColumn(t,1).length(),a=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const u=a*h,d=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=u-g*c,e[9]=-o*l,e[2]=g-u*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,_=c*h,g=c*f;e[0]=u-g*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,_=o*h,g=o*f;e[0]=l*h,e[4]=_*c-d,e[8]=u*c+g,e[1]=l*f,e[5]=g*c+u,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-u*f,e[8]=_*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+_,e[10]=u-g*f}else if(t.order==="XZY"){const u=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+g,e[5]=a*h,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*h,e[10]=g*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hv,t,uv)}lookAt(t,e,n){const r=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),$i.crossVectors(n,Cn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),$i.crossVectors(n,Cn)),$i.normalize(),wo.crossVectors(Cn,$i),r[0]=$i.x,r[4]=wo.x,r[8]=Cn.x,r[1]=$i.y,r[5]=wo.y,r[9]=Cn.y,r[2]=$i.z,r[6]=wo.z,r[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],T=n[3],S=n[7],v=n[11],M=n[15],w=r[0],A=r[4],x=r[8],b=r[12],R=r[1],P=r[5],D=r[9],B=r[13],H=r[2],I=r[6],z=r[10],U=r[14],Y=r[3],J=r[7],it=r[11],et=r[15];return s[0]=a*w+o*R+l*H+c*Y,s[4]=a*A+o*P+l*I+c*J,s[8]=a*x+o*D+l*z+c*it,s[12]=a*b+o*B+l*U+c*et,s[1]=h*w+f*R+u*H+d*Y,s[5]=h*A+f*P+u*I+d*J,s[9]=h*x+f*D+u*z+d*it,s[13]=h*b+f*B+u*U+d*et,s[2]=_*w+g*R+p*H+m*Y,s[6]=_*A+g*P+p*I+m*J,s[10]=_*x+g*D+p*z+m*it,s[14]=_*b+g*B+p*U+m*et,s[3]=T*w+S*R+v*H+M*Y,s[7]=T*A+S*P+v*I+M*J,s[11]=T*x+S*D+v*z+M*it,s[15]=T*b+S*B+v*U+M*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],_=t[3],g=t[7],p=t[11],m=t[15],T=l*d-c*u,S=o*d-c*f,v=o*u-l*f,M=a*d-c*h,w=a*u-l*h,A=a*f-o*h;return e*(g*T-p*S+m*v)-n*(_*T-p*M+m*w)+r*(_*S-g*M+m*A)-s*(_*v-g*w+p*A)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(s*h-o*l)+r*(s*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],_=t[12],g=t[13],p=t[14],m=t[15],T=e*o-n*a,S=e*l-r*a,v=e*c-s*a,M=n*l-r*o,w=n*c-s*o,A=r*c-s*l,x=h*g-f*_,b=h*p-u*_,R=h*m-d*_,P=f*p-u*g,D=f*m-d*g,B=u*m-d*p,H=T*B-S*D+v*P+M*R-w*b+A*x;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=(o*B-l*D+c*P)*I,t[1]=(r*D-n*B-s*P)*I,t[2]=(g*A-p*w+m*M)*I,t[3]=(u*w-f*A-d*M)*I,t[4]=(l*R-a*B-c*b)*I,t[5]=(e*B-r*R+s*b)*I,t[6]=(p*v-_*A-m*S)*I,t[7]=(h*A-u*v+d*S)*I,t[8]=(a*D-o*R+c*x)*I,t[9]=(n*R-e*D-s*x)*I,t[10]=(_*w-g*v+m*T)*I,t[11]=(f*v-h*w-d*T)*I,t[12]=(o*b-a*P-l*x)*I,t[13]=(e*P-n*b+r*x)*I,t[14]=(g*S-_*M-p*T)*I,t[15]=(h*M-f*S+u*T)*I,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,_=s*f,g=a*h,p=a*f,m=o*f,T=l*c,S=l*h,v=l*f,M=n.x,w=n.y,A=n.z;return r[0]=(1-(g+m))*M,r[1]=(d+v)*M,r[2]=(_-S)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(u+m))*w,r[6]=(p+T)*w,r[7]=0,r[8]=(_+S)*A,r[9]=(p-T)*A,r[10]=(1-(u+g))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=os.set(r[0],r[1],r[2]).length();const o=os.set(r[4],r[5],r[6]).length(),l=os.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ti.copy(this);const c=1/a,h=1/o,f=1/l;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,e.setFromRotationMatrix(ti),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,r,s,a,o=yi,l=!1){const c=this.elements,h=2*s/(e-t),f=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===yi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===zl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=yi,l=!1){const c=this.elements,h=2/(e-t),f=2/(n-r),u=-(e+t)/(e-t),d=-(n+r)/(n-r);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===yi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===zl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};tc.prototype.isMatrix4=!0;let pe=tc;const os=new L,ti=new pe,hv=new L(0,0,0),uv=new L(1,1,1),$i=new L,wo=new L,Cn=new L,Ed=new pe,Td=new Mr;class Zr{constructor(t=0,e=0,n=0,r=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ed.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ed,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Td.setFromEuler(this),this.setFromQuaternion(Td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class _f{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fv=0;const wd=new L,ls=new Mr,wi=new pe,Ao=new L,sa=new L,dv=new L,pv=new Mr,Ad=new L(1,0,0),Cd=new L(0,1,0),Rd=new L(0,0,1),Pd={type:"added"},mv={type:"removed"},cs={type:"childadded",child:null},Cc={type:"childremoved",child:null};class hn extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const t=new L,e=new Zr,n=new Mr,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pe},normalMatrix:{value:new Nt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Ad,t)}rotateY(t){return this.rotateOnAxis(Cd,t)}rotateZ(t){return this.rotateOnAxis(Rd,t)}translateOnAxis(t,e){return wd.copy(t).applyQuaternion(this.quaternion),this.position.add(wd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ad,t)}translateY(t){return this.translateOnAxis(Cd,t)}translateZ(t){return this.translateOnAxis(Rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(sa,Ao,this.up):wi.lookAt(Ao,sa,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(wi),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Pd),cs.child=t,this.dispatchEvent(cs),cs.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mv),Cc.child=t,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Pd),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,t,dv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,pv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}hn.DEFAULT_UP=new L(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oi extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _v={type:"move"};class Rc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&u>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Oi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Co={h:0,s:0,l:0};function Pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=nv(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Pc(a,s,t+1/3),this.g=Pc(a,s,t),this.b=Pc(a,s,t-1/3)}return qt.colorSpaceToWorking(this,r),this}setStyle(t,e=sn){function n(s){s!==void 0&&parseFloat(s)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=sn){const n=y0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=sn){return qt.workingToColorSpace(nn.copy(this),t),Math.round(Gt(nn.r*255,0,255))*65536+Math.round(Gt(nn.g*255,0,255))*256+Math.round(Gt(nn.b*255,0,255))}getHexString(t=sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(nn.copy(this),e);const n=nn.r,r=nn.g,s=nn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=sn){qt.workingToColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,r=nn.b;return t!==sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ji),this.setHSL(Ji.h+t,Ji.s+e,Ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ji),t.getHSL(Co);const n=bc(Ji.h,Co.h,e),r=bc(Ji.s,Co.s,e),s=bc(Ji.l,Co.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new kt;kt.NAMES=y0;class gf{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new gf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class M0 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ei=new L,Ai=new L,Dc=new L,Ci=new L,hs=new L,us=new L,Dd=new L,Lc=new L,Ic=new L,Nc=new L,Uc=new Te,Fc=new Te,Oc=new Te;class $n{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ei.subVectors(t,e),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ei.subVectors(r,e),Ai.subVectors(n,e),Dc.subVectors(t,e);const a=ei.dot(ei),o=ei.dot(Ai),l=ei.dot(Dc),c=Ai.dot(Ai),h=Ai.dot(Dc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,_=(a*h-o*l)*u;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return Uc.setScalar(0),Fc.setScalar(0),Oc.setScalar(0),Uc.fromBufferAttribute(t,e),Fc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Uc,s.x),a.addScaledVector(Fc,s.y),a.addScaledVector(Oc,s.z),a}static isFrontFacing(t,e,n,r){return ei.subVectors(n,e),Ai.subVectors(t,e),ei.cross(Ai).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),ei.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return $n.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return $n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;hs.subVectors(r,n),us.subVectors(s,n),Lc.subVectors(t,n);const l=hs.dot(Lc),c=us.dot(Lc);if(l<=0&&c<=0)return e.copy(n);Ic.subVectors(t,r);const h=hs.dot(Ic),f=us.dot(Ic);if(h>=0&&f<=h)return e.copy(r);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(hs,a);Nc.subVectors(t,s);const d=hs.dot(Nc),_=us.dot(Nc);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(us,o);const p=h*_-d*f;if(p<=0&&f-h>=0&&d-_>=0)return Dd.subVectors(s,r),o=(f-h)/(f-h+(d-_)),e.copy(r).addScaledVector(Dd,o);const m=1/(p+g+u);return a=g*m,o=u*m,e.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class co{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ni.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ni.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ni.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(t.matrixWorld),this.expandByPoint(ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(t.matrixWorld),this.union(Ro)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ni),ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(aa),Po.subVectors(this.max,aa),fs.subVectors(t.a,aa),ds.subVectors(t.b,aa),ps.subVectors(t.c,aa),Qi.subVectors(ds,fs),ji.subVectors(ps,ds),Cr.subVectors(fs,ps);let e=[0,-Qi.z,Qi.y,0,-ji.z,ji.y,0,-Cr.z,Cr.y,Qi.z,0,-Qi.x,ji.z,0,-ji.x,Cr.z,0,-Cr.x,-Qi.y,Qi.x,0,-ji.y,ji.x,0,-Cr.y,Cr.x,0];return!Bc(e,fs,ds,ps,Po)||(e=[1,0,0,0,1,0,0,0,1],!Bc(e,fs,ds,ps,Po))?!1:(Do.crossVectors(Qi,ji),e=[Do.x,Do.y,Do.z],Bc(e,fs,ds,ps,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ri=[new L,new L,new L,new L,new L,new L,new L,new L],ni=new L,Ro=new co,fs=new L,ds=new L,ps=new L,Qi=new L,ji=new L,Cr=new L,aa=new L,Po=new L,Do=new L,Rr=new L;function Bc(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rr.fromArray(i,s);const o=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=t.dot(Rr),c=e.dot(Rr),h=n.dot(Rr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ue=new L,Lo=new ot;let gv=0;class qe extends br{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_i(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_i(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_i(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class S0 extends qe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class b0 extends qe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class _e extends qe{constructor(t,e,n){super(new Float32Array(t),e,n)}}const xv=new co,oa=new L,zc=new L;class ho{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xv.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;oa.subVectors(t,this.center);const e=oa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(oa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(oa.copy(t.center).add(zc)),this.expandByPoint(oa.copy(t.center).sub(zc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let vv=0;const Yn=new pe,kc=new hn,ms=new L,Rn=new co,la=new co,Xe=new L;class Ae extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qx(t)?b0:S0)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Yn.makeRotationFromQuaternion(t),this.applyMatrix4(Yn),this}rotateX(t){return Yn.makeRotationX(t),this.applyMatrix4(Yn),this}rotateY(t){return Yn.makeRotationY(t),this.applyMatrix4(Yn),this}rotateZ(t){return Yn.makeRotationZ(t),this.applyMatrix4(Yn),this}translate(t,e,n){return Yn.makeTranslation(t,e,n),this.applyMatrix4(Yn),this}scale(t,e,n){return Yn.makeScale(t,e,n),this.applyMatrix4(Yn),this}lookAt(t){return kc.lookAt(t),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(Rn.min,la.min),Rn.expandByPoint(Xe),Xe.addVectors(Rn.max,la.max),Rn.expandByPoint(Xe)):(Rn.expandByPoint(la.min),Rn.expandByPoint(la.max))}Rn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(t,c),Xe.add(ms)),r=Math.max(r,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new qe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new L,l[x]=new L;const c=new L,h=new L,f=new L,u=new ot,d=new ot,_=new ot,g=new L,p=new L;function m(x,b,R){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),u.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,R),h.sub(c),f.sub(c),d.sub(u),_.sub(u);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(P),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),o[x].add(g),o[b].add(g),o[R].add(g),l[x].add(p),l[b].add(p),l[R].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,b=T.length;x<b;++x){const R=T[x],P=R.start,D=R.count;for(let B=P,H=P+D;B<H;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new L,v=new L,M=new L,w=new L;function A(x){M.fromBufferAttribute(r,x),w.copy(M);const b=o[x];S.copy(b),S.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(w,b);const P=v.dot(l[x])<0?-1:1;a.setXYZW(x,S.x,S.y,S.z,P)}for(let x=0,b=T.length;x<b;++x){const R=T[x],P=R.start,D=R.count;for(let B=P,H=P+D;B<H;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new qe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,f=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){const _=t.getX(u+0),g=t.getX(u+1),p=t.getX(u+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let m=0;m<h;m++)u[_++]=c[d++]}return new qe(u,h,f)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=mu,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new L;class Vl{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyMatrix4(t),this.setXYZ(e,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.applyNormalMatrix(t),this.setXYZ(e,un.x,un.y,un.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)un.fromBufferAttribute(this,e),un.transformDirection(t),this.setXYZ(e,un.x,un.y,un.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),r=se(r,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){kl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new qe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vl(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){kl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Mv=0;class Qr extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Xr,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rh,this.blendDst=Ph,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Rh&&(n.blendSrc=this.blendSrc),this.blendDst!==Ph&&(n.blendDst=this.blendDst),this.blendEquation!==Ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class E0 extends Qr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _s;const ca=new L,gs=new L,xs=new L,vs=new ot,ha=new ot,T0=new pe,Io=new L,ua=new L,No=new L,Ld=new ot,Vc=new ot,Id=new ot;class Sv extends hn{constructor(t=new E0){if(super(),this.isSprite=!0,this.type="Sprite",_s===void 0){_s=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new yv(e,5);_s.setIndex([0,1,2,0,2,3]),_s.setAttribute("position",new Vl(n,3,0,!1)),_s.setAttribute("uv",new Vl(n,2,3,!1))}this.geometry=_s,this.material=t,this.center=new ot(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),T0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-xs.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;Uo(Io.set(-.5,-.5,0),xs,a,gs,r,s),Uo(ua.set(.5,-.5,0),xs,a,gs,r,s),Uo(No.set(.5,.5,0),xs,a,gs,r,s),Ld.set(0,0),Vc.set(1,0),Id.set(1,1);let o=t.ray.intersectTriangle(Io,ua,No,!1,ca);if(o===null&&(Uo(ua.set(-.5,.5,0),xs,a,gs,r,s),Vc.set(0,1),o=t.ray.intersectTriangle(Io,No,ua,!1,ca),o===null))return;const l=t.ray.origin.distanceTo(ca);l<t.near||l>t.far||e.push({distance:l,point:ca.clone(),uv:$n.getInterpolation(ca,Io,ua,No,Ld,Vc,Id,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uo(i,t,e,n,r,s){vs.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(ha.x=s*vs.x-r*vs.y,ha.y=r*vs.x+s*vs.y):ha.copy(vs),i.copy(t),i.x+=ha.x,i.y+=ha.y,i.applyMatrix4(T0)}const Pi=new L,Gc=new L,Fo=new L,tr=new L,Hc=new L,Oo=new L,Wc=new L;class uo{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Gc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),tr.copy(this.origin).sub(Gc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Fo),o=tr.dot(this.direction),l=-tr.dot(Fo),c=tr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,_;if(h>0)if(f=a*l-o,u=a*o-l,_=s*h,f>=0)if(u>=-_)if(u<=_){const g=1/h;f*=g,u*=g,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Gc).addScaledVector(Fo,u),d}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const n=Pi.dot(this.direction),r=Pi.dot(Pi)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,n,r,s){Hc.subVectors(e,t),Oo.subVectors(n,t),Wc.crossVectors(Hc,Oo);let a=this.direction.dot(Wc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,t);const l=o*this.direction.dot(Oo.crossVectors(tr,Oo));if(l<0)return null;const c=o*this.direction.dot(Hc.cross(tr));if(c<0||l+c>a)return null;const h=-o*tr.dot(Wc);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vi extends Qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=n0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Nd=new pe,Pr=new uo,Bo=new ho,Ud=new L,zo=new L,ko=new L,Vo=new L,Xc=new L,Go=new L,Fd=new L,Ho=new L;class ke extends hn{constructor(t=new Ae,e=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],f=s[l];h!==0&&(Xc.fromBufferAttribute(f,t),a?Go.addScaledVector(Xc,h):Go.addScaledVector(Xc.sub(e),h))}e.add(Go)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Pr.copy(t.ray).recast(t.near),!(Bo.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Bo,Ud)===null||Pr.origin.distanceToSquared(Ud)>(t.far-t.near)**2))&&(Nd.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Nd),!(n.boundingBox!==null&&Pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Pr)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],T=Math.max(p.start,d.start),S=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,M=S;v<M;v+=3){const w=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);r=Wo(this,m,t,n,c,h,f,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=o.getX(p),S=o.getX(p+1),v=o.getX(p+2);r=Wo(this,a,t,n,c,h,f,T,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=u.length;_<g;_++){const p=u[_],m=a[p.materialIndex],T=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=T,M=S;v<M;v+=3){const w=v,A=v+1,x=v+2;r=Wo(this,m,t,n,c,h,f,w,A,x),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const T=p,S=p+1,v=p+2;r=Wo(this,a,t,n,c,h,f,T,S,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function bv(i,t,e,n,r,s,a,o){let l;if(t.side===cn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===yr,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ho);return c<e.near||c>e.far?null:{distance:c,point:Ho.clone(),object:i}}function Wo(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,zo),i.getVertexPosition(l,ko),i.getVertexPosition(c,Vo);const h=bv(i,t,e,n,zo,ko,Vo,Fd);if(h){const f=new L;$n.getBarycoord(Fd,zo,ko,Vo,f),r&&(h.uv=$n.getInterpolatedAttribute(r,o,l,c,f,new ot)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,l,c,f,new ot)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,f,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};$n.getNormal(zo,ko,Vo,u.normal),h.face=u,h.barycoord=f}return h}class Ev extends je{constructor(t=null,e=1,n=1,r,s,a,o,l,c=Je,h=Je,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yc=new L,Tv=new L,wv=new Nt;class nr{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Yc.subVectors(n,e).cross(Tv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(Yc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||wv.getNormalMatrix(t),r=this.coplanarPoint(Yc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new ho,Av=new ot(.5,.5),Xo=new L;class w0{constructor(t=new nr,e=new nr,n=new nr,r=new nr,s=new nr,a=new nr){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],f=s[5],u=s[6],d=s[7],_=s[8],g=s[9],p=s[10],m=s[11],T=s[12],S=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-a,d-h,m-_,M-T).normalize(),r[1].setComponents(c+a,d+h,m+_,M+T).normalize(),r[2].setComponents(c+o,d+f,m+g,M+S).normalize(),r[3].setComponents(c-o,d-f,m-g,M-S).normalize(),n)r[4].setComponents(l,u,p,v).normalize(),r[5].setComponents(c-l,d-u,m-p,M-v).normalize();else if(r[4].setComponents(c-l,d-u,m-p,M-v).normalize(),e===yi)r[5].setComponents(c+l,d+u,m+p,M+v).normalize();else if(e===zl)r[5].setComponents(l,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);const e=Av.distanceTo(t.center);return Dr.radius=.7071067811865476+e,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Xo.x=r.normal.x>0?t.max.x:t.min.x,Xo.y=r.normal.y>0?t.max.y:t.min.y,Xo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class A0 extends Qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gl=new L,Hl=new L,Od=new pe,fa=new uo,Yo=new ho,qc=new L,Bd=new L;class Cv extends hn{constructor(t=new Ae,e=new A0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Gl.fromBufferAttribute(e,r-1),Hl.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Gl.distanceTo(Hl);t.setAttribute("lineDistance",new _e(n,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),Yo.radius+=s,t.ray.intersectsSphere(Yo)===!1)return;Od.copy(r).invert(),fa.copy(t.ray).applyMatrix4(Od);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=h.getX(g),T=h.getX(g+1),S=qo(this,t,fa,l,m,T,g);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),p=h.getX(d),m=qo(this,t,fa,l,g,p,_-1);m&&e.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=d,p=_-1;g<p;g+=c){const m=qo(this,t,fa,l,g,g+1,g);m&&e.push(m)}if(this.isLineLoop){const g=qo(this,t,fa,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function qo(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Gl.fromBufferAttribute(o,r),Hl.fromBufferAttribute(o,s),e.distanceSqToSegment(Gl,Hl,qc,Bd)>n)return;qc.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qc);if(!(c<t.near||c>t.far))return{distance:c,point:Bd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class pl extends Qr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zd=new pe,gu=new uo,Zo=new ho,Ko=new L;class Zc extends hn{constructor(t=new Ae,e=new pl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),Zo.radius+=s,t.ray.intersectsSphere(Zo)===!1)return;zd.copy(r).invert(),gu.copy(t.ray).applyMatrix4(zd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=u,g=d;_<g;_++){const p=c.getX(_);Ko.fromBufferAttribute(f,p),kd(Ko,p,l,r,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let _=u,g=d;_<g;_++)Ko.fromBufferAttribute(f,_),kd(Ko,_,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kd(i,t,e,n,r,s,a){const o=gu.distanceSqToPoint(i);if(o<e){const l=new L;gu.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class C0 extends je{constructor(t=[],e=Yr,n,r,s,a,o,l,c,h){super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fo extends je{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Js extends je{constructor(t,e,n=Ei,r,s,a,o=Je,l=Je,c,h=Xi,f=1){if(h!==Xi&&h!==Or)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mf(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rv extends Js{constructor(t,e=Ei,n=Yr,r,s,a=Je,o=Je,l,c=Xi){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class R0 extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class po extends Ae{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,r,a,2),_("x","z","y",1,-1,t,n,-e,r,a,3),_("x","y","z",1,-1,t,e,n,r,s,4),_("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(f,2));function _(g,p,m,T,S,v,M,w,A,x,b){const R=v/A,P=M/x,D=v/2,B=M/2,H=w/2,I=A+1,z=x+1;let U=0,Y=0;const J=new L;for(let it=0;it<z;it++){const et=it*P-B;for(let ft=0;ft<I;ft++){const Ht=ft*R-D;J[g]=Ht*T,J[p]=et*S,J[m]=H,c.push(J.x,J.y,J.z),J[g]=0,J[p]=0,J[m]=w>0?1:-1,h.push(J.x,J.y,J.z),f.push(ft/A),f.push(1-it/x),U+=1}}for(let it=0;it<x;it++)for(let et=0;et<A;et++){const ft=u+et+I*it,Ht=u+et+I*(it+1),Kt=u+(et+1)+I*(it+1),Ut=u+(et+1)+I*it;l.push(ft,Ht,Ut),l.push(Ht,Kt,Ut),Y+=6}o.addGroup(d,Y,b),d+=Y,u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xf extends Ae{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],u=[],d=[];let _=0;const g=[],p=n/2;let m=0;T(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new _e(f,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(d,2));function T(){const v=new L,M=new L;let w=0;const A=(e-t)/n;for(let x=0;x<=s;x++){const b=[],R=x/s,P=R*(e-t)+t;for(let D=0;D<=r;D++){const B=D/r,H=B*l+o,I=Math.sin(H),z=Math.cos(H);M.x=P*I,M.y=-R*n+p,M.z=P*z,f.push(M.x,M.y,M.z),v.set(I,A,z).normalize(),u.push(v.x,v.y,v.z),d.push(B,1-R),b.push(_++)}g.push(b)}for(let x=0;x<r;x++)for(let b=0;b<s;b++){const R=g[b][x],P=g[b+1][x],D=g[b+1][x+1],B=g[b][x+1];(t>0||b!==0)&&(h.push(R,P,B),w+=3),(e>0||b!==s-1)&&(h.push(P,D,B),w+=3)}c.addGroup(m,w,0),m+=w}function S(v){const M=_,w=new ot,A=new L;let x=0;const b=v===!0?t:e,R=v===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,p*R,0),u.push(0,R,0),d.push(.5,.5),_++;const P=_;for(let D=0;D<=r;D++){const H=D/r*l+o,I=Math.cos(H),z=Math.sin(H);A.x=b*z,A.y=p*R,A.z=b*I,f.push(A.x,A.y,A.z),u.push(0,R,0),w.x=I*.5+.5,w.y=z*.5*R+.5,d.push(w.x,w.y),_++}for(let D=0;D<r;D++){const B=M+D,H=P+D;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],u=n[r+1]-h,d=(a-h)/u;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ot:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,r=[],s=[],a=[],o=new L,l=new pe;for(let d=0;d<=t;d++){const _=d/t;r[d]=this.getTangentAt(_,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Gt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vf extends Ti{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Pv extends vf{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yf(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,r(a,o,u,d)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Vd=new L,Gd=new L,Kc=new yf,$c=new yf,Jc=new yf;class Dv extends Ti{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Gd.subVectors(r[0],r[1]).add(r[0]),c=Gd);const f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Vd.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Vd),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Kc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,_,g,p),$c.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,_,g,p),Jc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,_,g,p)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),$c.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Jc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Kc.calc(l),$c.calc(l),Jc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hd(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Lv(i,t){const e=1-i;return e*e*t}function Iv(i,t){return 2*(1-i)*i*t}function Nv(i,t){return i*i*t}function Pa(i,t,e,n){return Lv(i,t)+Iv(i,e)+Nv(i,n)}function Uv(i,t){const e=1-i;return e*e*e*t}function Fv(i,t){const e=1-i;return 3*e*e*i*t}function Ov(i,t){return 3*(1-i)*i*i*t}function Bv(i,t){return i*i*i*t}function Da(i,t,e,n,r){return Uv(i,t)+Fv(i,e)+Ov(i,n)+Bv(i,r)}class P0 extends Ti{constructor(t=new ot,e=new ot,n=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Da(t,r.x,s.x,a.x,o.x),Da(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class D0 extends Ti{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Da(t,r.x,s.x,a.x,o.x),Da(t,r.y,s.y,a.y,o.y),Da(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class L0 extends Ti{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zv extends Ti{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class I0 extends Ti{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Pa(t,r.x,s.x,a.x),Pa(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kv extends Ti{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Pa(t,r.x,s.x,a.x),Pa(t,r.y,s.y,a.y),Pa(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class N0 extends Ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return n.set(Hd(o,l.x,c.x,h.x,f.x),Hd(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new ot().fromArray(r))}return this}}var Wd=Object.freeze({__proto__:null,ArcCurve:Pv,CatmullRomCurve3:Dv,CubicBezierCurve:P0,CubicBezierCurve3:D0,EllipseCurve:vf,LineCurve:L0,LineCurve3:zv,QuadraticBezierCurve:I0,QuadraticBezierCurve3:kv,SplineCurve:N0});class Vv extends Ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Wd[r.type]().fromJSON(r))}return this}}class Xd extends Vv{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new L0(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new I0(this.currentPoint.clone(),new ot(t,e),new ot(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new P0(this.currentPoint.clone(),new ot(t,e),new ot(n,r),new ot(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new N0(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new vf(t,e,n,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class U0 extends Xd{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Xd().fromJSON(r))}return this}}function Gv(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=F0(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=qv(i,t,s,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<r;u+=e){const d=i[u],_=i[u+1];d<o&&(o=d),_<l&&(l=_),d>h&&(h=d),_>f&&(f=_)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return $a(s,a,e,o,l,c,0),a}function F0(i,t,e,n,r){let s;if(r===ry(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=Yd(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Yd(a/n|0,i[a],i[a+1],s);return s&&Qs(s,s.next)&&(Qa(s),s=s.next),s}function Kr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||Me(e.prev,e,e.next)===0)){if(Qa(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $a(i,t,e,n,r,s,a){if(!i)return;!a&&s&&Qv(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?Wv(i,n,r,s):Hv(i)){t.push(l.i,i.i,c.i),Qa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xv(Kr(i),t),$a(i,t,e,n,r,s,2)):a===2&&Yv(i,t,e,n,r,s):$a(Kr(i),t,e,n,r,s,1);break}}}function Hv(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(r,s,a),f=Math.min(o,l,c),u=Math.max(r,s,a),d=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=f&&_.y<=d&&ya(r,o,s,l,a,c,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Wv(i,t,e,n){const r=i.prev,s=i,a=i.next;if(Me(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,u=a.y,d=Math.min(o,l,c),_=Math.min(h,f,u),g=Math.max(o,l,c),p=Math.max(h,f,u),m=xu(d,_,t,e,n),T=xu(g,p,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=m&&v&&v.z<=T;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==a&&ya(o,h,l,f,c,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==a&&ya(o,h,l,f,c,u,v.x,v.y)&&Me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=m;){if(S.x>=d&&S.x<=g&&S.y>=_&&S.y<=p&&S!==r&&S!==a&&ya(o,h,l,f,c,u,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=T;){if(v.x>=d&&v.x<=g&&v.y>=_&&v.y<=p&&v!==r&&v!==a&&ya(o,h,l,f,c,u,v.x,v.y)&&Me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Xv(i,t){let e=i;do{const n=e.prev,r=e.next.next;!Qs(n,r)&&B0(n,e,e.next,r)&&Ja(n,r)&&Ja(r,n)&&(t.push(n.i,e.i,r.i),Qa(e),Qa(e.next),e=i=r),e=e.next}while(e!==i);return Kr(e)}function Yv(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ey(a,o)){let l=z0(a,o);a=Kr(a,a.next),l=Kr(l,l.next),$a(a,t,e,n,r,s,0),$a(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function qv(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=F0(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(ty(c))}r.sort(Zv);for(let s=0;s<r.length;s++)e=Kv(r[s],e);return e}function Zv(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Kv(i,t){const e=$v(i,t);if(!e)return t;const n=z0(e,i);return Kr(n,n.next),Kr(e,e.next)}function $v(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(Qs(i,e))return e;do{if(Qs(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>s&&(s=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&O0(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const f=Math.abs(r-e.y)/(n-e.x);Ja(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Jv(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Jv(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function Qv(i,t,e,n){let r=i;do r.z===0&&(r.z=xu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,jv(r)}function jv(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function xu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ty(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function O0(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function ya(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&O0(i,t,e,n,r,s,a,o)}function ey(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!ny(i,t)&&(Ja(i,t)&&Ja(t,i)&&iy(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||Qs(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qs(i,t){return i.x===t.x&&i.y===t.y}function B0(i,t,e,n){const r=Jo(Me(i,t,e)),s=Jo(Me(i,t,n)),a=Jo(Me(e,n,i)),o=Jo(Me(e,n,t));return!!(r!==s&&a!==o||r===0&&$o(i,e,t)||s===0&&$o(i,n,t)||a===0&&$o(e,i,n)||o===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Jo(i){return i>0?1:i<0?-1:0}function ny(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&B0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ja(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function iy(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function z0(i,t){const e=vu(i.i,i.x,i.y),n=vu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Yd(i,t,e,n){const r=vu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ry(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class sy{static triangulate(t,e,n=2){return Gv(t,e,n)}}class La{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return La.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];qd(t),Zd(n,t);let a=t.length;e.forEach(qd);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,Zd(n,e[l]);const o=sy.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function qd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class mo extends Ae{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,f=t/o,u=e/l,d=[],_=[],g=[],p=[];for(let m=0;m<h;m++){const T=m*u-a;for(let S=0;S<c;S++){const v=S*f-s;_.push(v,-T,0),g.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const S=T+c*m,v=T+c*(m+1),M=T+1+c*(m+1),w=T+1+c*m;d.push(S,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new _e(_,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mf extends Ae{constructor(t=.5,e=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],h=[];let f=t;const u=(e-t)/r,d=new L,_=new ot;for(let g=0;g<=r;g++){for(let p=0;p<=n;p++){const m=s+p/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}f+=u}for(let g=0;g<r;g++){const p=g*(n+1);for(let m=0;m<n;m++){const T=m+p,S=T,v=T+n+1,M=T+n+2,w=T+1;o.push(S,v,w),o.push(v,M,w)}}this.setIndex(o),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(c,3)),this.setAttribute("uv",new _e(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wl extends Ae{constructor(t=new U0([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new _e(r,3)),this.setAttribute("normal",new _e(s,3)),this.setAttribute("uv",new _e(a,2));function c(h){const f=r.length/3,u=h.extractPoints(e);let d=u.shape;const _=u.holes;La.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=_.length;p<m;p++){const T=_[p];La.isClockWise(T)===!0&&(_[p]=T.reverse())}const g=La.triangulateShape(d,_);for(let p=0,m=_.length;p<m;p++){const T=_[p];d=d.concat(T)}for(let p=0,m=d.length;p<m;p++){const T=d[p];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let p=0,m=g.length;p<m;p++){const T=g[p],S=T[0]+f,v=T[1]+f,M=T[2]+f;n.push(S,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ay(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new Wl(n,t.curveSegments)}}function ay(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class js extends Ae{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new L,u=new L,d=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const T=[],S=m/n,v=a+S*o,M=t*Math.cos(v),w=Math.sqrt(t*t-M*M);let A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){const b=x/e,R=r+b*s;f.x=-w*Math.cos(R),f.y=M,f.z=w*Math.sin(R),_.push(f.x,f.y,f.z),u.copy(f).normalize(),g.push(u.x,u.y,u.z),p.push(b+A,1-S),T.push(c++)}h.push(T)}for(let m=0;m<n;m++)for(let T=0;T<e;T++){const S=h[m][T+1],v=h[m][T],M=h[m+1][T],w=h[m+1][T+1];(m!==0||a>0)&&d.push(S,v,w),(m!==n-1||l<Math.PI)&&d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new _e(_,3)),this.setAttribute("normal",new _e(g,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ta(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(Kd(r))r.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Kd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function fn(i){const t={};for(let e=0;e<i.length;e++){const n=ta(i[e]);for(const r in n)t[r]=n[r]}return t}function Kd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function oy(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function k0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ly={clone:ta,merge:fn};var cy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends Qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ta(t.uniforms),this.uniformsGroups=oy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(r.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(r.value);break;case"v3":this.uniforms[n].value=new L().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Te().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Nt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class uy extends Tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fy extends Qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dy extends Qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Qc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&($d(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!$d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $d(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class py{constructor(t,e,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const my=new py;class Sf{constructor(t){this.manager=t!==void 0?t:my,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Sf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ys=new WeakMap;class _y extends Sf{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Qc.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let f=ys.get(a);f===void 0&&(f=[],ys.set(a,f)),f.push({onLoad:e,onError:r})}return a}const o=Ka("img");function l(){h(),e&&e(this);const f=ys.get(this)||[];for(let u=0;u<f.length;u++){const d=f[u];d.onLoad&&d.onLoad(this)}ys.delete(this),s.manager.itemEnd(t)}function c(f){h(),r&&r(f),Qc.remove(`image:${t}`);const u=ys.get(this)||[];for(let d=0;d<u.length;d++){const _=u[d];_.onError&&_.onError(f)}ys.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qc.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class gy extends Sf{constructor(t){super(t)}load(t,e,n,r){const s=new je,a=new _y(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}const Qo=new L,jo=new Mr,hi=new L;class V0 extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Qo,jo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,hi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Qo,jo,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qo,jo,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const er=new L,Jd=new ot,Qd=new ot;class Un extends V0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_u*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _u*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){er.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(er.x,er.y).multiplyScalar(-t/er.z),er.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(er.x,er.y).multiplyScalar(-t/er.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(dl*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class G0 extends V0{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ms=-90,Ss=1;class xy extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(Ms,Ss,t,e);r.layers=this.layers,this.add(r);const s=new Un(Ms,Ss,t,e);s.layers=this.layers,this.add(s);const a=new Un(Ms,Ss,t,e);a.layers=this.layers,this.add(a);const o=new Un(Ms,Ss,t,e);o.layers=this.layers,this.add(o);const l=new Un(Ms,Ss,t,e);l.layers=this.layers,this.add(l);const c=new Un(Ms,Ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vy extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jd=new pe;class yy{constructor(t,e,n=0,r=1/0){this.ray=new uo(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new _f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return jd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jd),this}intersectObject(t,e=!0,n=[]){return yu(t,this,n,e),n.sort(tp),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)yu(t[r],this,n,e);return n.sort(tp),n}}function tp(i,t){return i.distance-t.distance}function yu(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)yu(s[a],t,e,!0)}}class ep{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const kf=class kf{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};kf.prototype.isMatrix2=!0;let np=kf;class My extends br{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Lt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ip(i,t,e,n){const r=Sy(n);switch(e){case m0:return i*t;case g0:return i*t/r.components*r.byteLength;case hf:return i*t/r.components*r.byteLength;case qr:return i*t*2/r.components*r.byteLength;case uf:return i*t*2/r.components*r.byteLength;case _0:return i*t*3/r.components*r.byteLength;case ri:return i*t*4/r.components*r.byteLength;case ff:return i*t*4/r.components*r.byteLength;case cl:case hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kh:case Gh:return Math.max(i,16)*Math.max(t,8)/4;case zh:case Vh:return Math.max(i,8)*Math.max(t,8)/2;case Hh:case Wh:case Yh:case qh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xh:case Ul:case Zh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case nu:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case iu:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ru:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case au:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case lu:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case cu:case hu:case uu:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fu:case du:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fl:case pu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sy(i){switch(i){case Kn:case u0:return{byteLength:1,components:1};case qa:case f0:case Wi:return{byteLength:2,components:1};case lf:case cf:return{byteLength:2,components:4};case Ei:case of:case vi:return{byteLength:4,components:1};case d0:case p0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:af}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=af);function H0(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function by(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<f.length;d++){const _=f[u],g=f[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,f[u]=g)}f.length=u+1;for(let d=0,_=f.length;d<_;d++){const g=f[d];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ty=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ry=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ly=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,By=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_M=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,AM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Ey,alphahash_pars_fragment:Ty,alphamap_fragment:wy,alphamap_pars_fragment:Ay,alphatest_fragment:Cy,alphatest_pars_fragment:Ry,aomap_fragment:Py,aomap_pars_fragment:Dy,batching_pars_vertex:Ly,batching_vertex:Iy,begin_vertex:Ny,beginnormal_vertex:Uy,bsdfs:Fy,iridescence_fragment:Oy,bumpmap_pars_fragment:By,clipping_planes_fragment:zy,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:Vy,clipping_planes_vertex:Gy,color_fragment:Hy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:Yy,common:qy,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Ky,displacementmap_pars_vertex:$y,displacementmap_vertex:Jy,emissivemap_fragment:Qy,emissivemap_pars_fragment:jy,colorspace_fragment:tM,colorspace_pars_fragment:eM,envmap_fragment:nM,envmap_common_pars_fragment:iM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:_M,envmap_vertex:aM,fog_vertex:oM,fog_pars_vertex:lM,fog_fragment:cM,fog_pars_fragment:hM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:fM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:pM,lights_pars_begin:mM,lights_toon_fragment:gM,lights_toon_pars_fragment:xM,lights_phong_fragment:vM,lights_phong_pars_fragment:yM,lights_physical_fragment:MM,lights_physical_pars_fragment:SM,lights_fragment_begin:bM,lights_fragment_maps:EM,lights_fragment_end:TM,lightprobes_pars_fragment:wM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:PM,map_fragment:DM,map_pars_fragment:LM,map_particle_fragment:IM,map_particle_pars_fragment:NM,metalnessmap_fragment:UM,metalnessmap_pars_fragment:FM,morphinstance_vertex:OM,morphcolor_vertex:BM,morphnormal_vertex:zM,morphtarget_pars_vertex:kM,morphtarget_vertex:VM,normal_fragment_begin:GM,normal_fragment_maps:HM,normal_pars_fragment:WM,normal_pars_vertex:XM,normal_vertex:YM,normalmap_pars_fragment:qM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:JM,opaque_fragment:QM,packing:jM,premultiplied_alpha_fragment:tS,project_vertex:eS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:aS,shadowmap_pars_vertex:oS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:hS,skinning_pars_vertex:uS,skinning_vertex:fS,skinnormal_vertex:dS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:_S,tonemapping_pars_fragment:gS,transmission_fragment:xS,transmission_pars_fragment:vS,uv_pars_fragment:yS,uv_pars_vertex:MS,uv_vertex:SS,worldpos_vertex:bS,background_vert:ES,background_frag:TS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:CS,cube_frag:RS,depth_vert:PS,depth_frag:DS,distance_vert:LS,distance_frag:IS,equirect_vert:NS,equirect_frag:US,linedashed_vert:FS,linedashed_frag:OS,meshbasic_vert:BS,meshbasic_frag:zS,meshlambert_vert:kS,meshlambert_frag:VS,meshmatcap_vert:GS,meshmatcap_frag:HS,meshnormal_vert:WS,meshnormal_frag:XS,meshphong_vert:YS,meshphong_frag:qS,meshphysical_vert:ZS,meshphysical_frag:KS,meshtoon_vert:$S,meshtoon_frag:JS,points_vert:QS,points_frag:jS,shadow_vert:tb,shadow_frag:eb,sprite_vert:nb,sprite_frag:ib},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},pi={basic:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:fn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:fn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:fn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:fn([mt.points,mt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:fn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:fn([mt.common,mt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:fn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:fn([mt.sprite,mt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:fn([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:fn([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};pi.physical={uniforms:fn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const tl={r:0,b:0,g:0},rb=new pe,W0=new Nt;W0.set(-1,0,0,0,1,0,0,0,1);function sb(i,t,e,n,r,s){const a=new kt(0);let o=r===!0?0:1,l,c,h=null,f=0,u=null;function d(T){let S=T.isScene===!0?T.background:null;if(S&&S.isTexture){const v=T.backgroundBlurriness>0;S=t.get(S,v)}return S}function _(T){let S=!1;const v=d(T);v===null?p(a,o):v&&v.isColor&&(p(v,1),S=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(T,S){const v=d(S);v&&(v.isCubeTexture||v.mapping===rc)?(c===void 0&&(c=new ke(new po(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:ta(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(W0),c.material.toneMapped=qt.getTransfer(v.colorSpace)!==ee,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ke(new mo(2,2),new Tn({name:"BackgroundMaterial",uniforms:ta(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,S){T.getRGB(tl,k0(i)),e.buffers.color.setClear(tl.r,tl.g,tl.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:_,addToRenderList:g,dispose:m}}function ab(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(P,D,B,H,I){let z=!1;const U=f(P,H,B,D);s!==U&&(s=U,c(s.object)),z=d(P,H,B,I),z&&_(P,H,B,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,v(P,D,B,H),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function f(P,D,B,H){const I=H.wireframe===!0;let z=n[D.id];z===void 0&&(z={},n[D.id]=z);const U=P.isInstancedMesh===!0?P.id:0;let Y=z[U];Y===void 0&&(Y={},z[U]=Y);let J=Y[B.id];J===void 0&&(J={},Y[B.id]=J);let it=J[I];return it===void 0&&(it=u(l()),J[I]=it),it}function u(P){const D=[],B=[],H=[];for(let I=0;I<e;I++)D[I]=0,B[I]=0,H[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:P,attributes:{},index:null}}function d(P,D,B,H){const I=s.attributes,z=D.attributes;let U=0;const Y=B.getAttributes();for(const J in Y)if(Y[J].location>=0){const et=I[J];let ft=z[J];if(ft===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ft=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ft=P.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;U++}return s.attributesNum!==U||s.index!==H}function _(P,D,B,H){const I={},z=D.attributes;let U=0;const Y=B.getAttributes();for(const J in Y)if(Y[J].location>=0){let et=z[J];et===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),I[J]=ft,U++}s.attributes=I,s.attributesNum=U,s.index=H}function g(){const P=s.newAttributes;for(let D=0,B=P.length;D<B;D++)P[D]=0}function p(P){m(P,0)}function m(P,D){const B=s.newAttributes,H=s.enabledAttributes,I=s.attributeDivisors;B[P]=1,H[P]===0&&(i.enableVertexAttribArray(P),H[P]=1),I[P]!==D&&(i.vertexAttribDivisor(P,D),I[P]=D)}function T(){const P=s.newAttributes,D=s.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==P[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function S(P,D,B,H,I,z,U){U===!0?i.vertexAttribIPointer(P,D,B,I,z):i.vertexAttribPointer(P,D,B,H,I,z)}function v(P,D,B,H){g();const I=H.attributes,z=B.getAttributes(),U=D.defaultAttributeValues;for(const Y in z){const J=z[Y];if(J.location>=0){let it=I[Y];if(it===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),it!==void 0){const et=it.normalized,ft=it.itemSize,Ht=t.get(it);if(Ht===void 0)continue;const Kt=Ht.buffer,Ut=Ht.type,K=Ht.bytesPerElement,st=Ut===i.INT||Ut===i.UNSIGNED_INT||it.gpuType===of;if(it.isInterleavedBufferAttribute){const nt=it.data,It=nt.stride,Ft=it.offset;if(nt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<J.locationSize;Rt++)m(J.location+Rt,nt.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Rt=0;Rt<J.locationSize;Rt++)p(J.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let Rt=0;Rt<J.locationSize;Rt++)S(J.location+Rt,ft/J.locationSize,Ut,et,It*K,(Ft+ft/J.locationSize*Rt)*K,st)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<J.locationSize;nt++)m(J.location+nt,it.meshPerAttribute);P.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<J.locationSize;nt++)p(J.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let nt=0;nt<J.locationSize;nt++)S(J.location+nt,ft/J.locationSize,Ut,et,ft*K,ft/J.locationSize*nt*K,st)}}else if(U!==void 0){const et=U[Y];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(J.location,et);break;case 3:i.vertexAttrib3fv(J.location,et);break;case 4:i.vertexAttrib4fv(J.location,et);break;default:i.vertexAttrib1fv(J.location,et)}}}}T()}function M(){b();for(const P in n){const D=n[P];for(const B in D){const H=D[B];for(const I in H){const z=H[I];for(const U in z)h(z[U].object),delete z[U];delete H[I]}}delete n[P]}}function w(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const B in D){const H=D[B];for(const I in H){const z=H[I];for(const U in z)h(z[U].object),delete z[U];delete H[I]}}delete n[P.id]}function A(P){for(const D in n){const B=n[D];for(const H in B){const I=B[H];if(I[P.id]===void 0)continue;const z=I[P.id];for(const U in z)h(z[U].object),delete z[U];delete I[P.id]}}}function x(P){for(const D in n){const B=n[D],H=P.isInstancedMesh===!0?P.id:0,I=B[H];if(I!==void 0){for(const z in I){const U=I[z];for(const Y in U)h(U[Y].object),delete U[Y];delete I[z]}delete B[H],Object.keys(B).length===0&&delete n[D]}}}function b(){R(),a=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:T}}function ob(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lb(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==ri&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===Wi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Kn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==vi&&!x)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function cb(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new nr,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||n!==0||r;return r=u,n=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?h(null):c();else{const T=s?0:n,S=T*4;let v=m.clippingState||null;l.value=v,v=h(_,u,S,d);for(let M=0;M!==S;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,v=d;S!==g;++S,v+=4)a.copy(f[S]).applyMatrix4(T,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}const cr=4,rp=[.125,.215,.35,.446,.526,.582],Nr=20,hb=256,da=new G0,sp=new kt;let jc=null,th=0,eh=0,nh=!1;const ub=new L;class ap{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=ub}=s;jc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,th,eh),this._renderer.xr.enabled=nh,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yr||t.mapping===$s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:Wi,format:ri,colorSpace:Ol,depthBuffer:!1},r=op(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fb(s)),this._blurMaterial=pb(s,t,e),this._ggxMaterial=db(s,t,e)}return r}_compileMaterial(t){const e=new ke(new Ae,t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,r,s){const l=new Un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(sp),f.toneMapping=Mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new po,new Vi({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,m=!0):(p.color.copy(sp),m=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));const M=this._cubeSize;bs(r,v*M,S>2?M:0,M,M),f.setRenderTarget(r),m&&f.render(g,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Yr||t.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-cr?n-_+cr:0),m=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=_-e,bs(s,p,m,3*g,2*g),r.setRenderTarget(s),r.render(o,da),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,bs(t,p,m,3*g,2*g),r.setRenderTarget(t),r.render(o,da)}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Nr-1),g=s/_,p=isFinite(s)?1+Math.floor(h*g):Nr;p>Nr&&Lt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nr}`);const m=[];let T=0;for(let A=0;A<Nr;++A){const x=A/g,b=Math.exp(-x*x/2);m.push(b),A===0?T+=b:A<p&&(T+=2*b)}for(let A=0;A<m.length;A++)m[A]=m[A]/T;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;const v=this._sizeLods[r],M=3*v*(r>S-cr?r-S+cr:0),w=4*(this._cubeSize-v);bs(e,M,w,3*v,2*v),l.setRenderTarget(e),l.render(f,da)}}function fb(i){const t=[],e=[],n=[];let r=i;const s=i-cr+1+rp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-cr?l=rp[a-i+cr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,_=6,g=3,p=2,m=1,T=new Float32Array(g*_*d),S=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,x=w>2?0:-1,b=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];T.set(b,g*_*w),S.set(u,p*_*w);const R=[w,w,w,w,w,w];v.set(R,m*_*w)}const M=new Ae;M.setAttribute("position",new qe(T,g)),M.setAttribute("uv",new qe(S,p)),M.setAttribute("faceIndex",new qe(v,m)),n.push(new ke(M,null)),r>cr&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function op(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function db(i,t,e){return new Tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function pb(i,t,e){const n=new Float32Array(Nr),r=new L(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function lp(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function cp(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class X0 extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new C0(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new po(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:ta(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Bi});s.uniforms.tEquirect.value=e;const a=new ke(r,s),o=e.minFilter;return e.minFilter===Fr&&(e.minFilter=on),new xy(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}function mb(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,d=!1){return u==null?null:d?a(u):s(u)}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===yc||d===Mc)if(t.has(u)){const _=t.get(u).texture;return o(_,u.mapping)}else{const _=u.image;if(_&&_.height>0){const g=new X0(_.height);return g.fromEquirectangularTexture(i,u),t.set(u,g),u.addEventListener("dispose",c),o(g.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,_=d===yc||d===Mc,g=d===Yr||d===$s;if(_||g){let p=e.get(u);const m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new ap(i)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{const T=u.image;return _&&T&&T.height>0||g&&T&&l(T)?(n===null&&(n=new ap(i)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===yc?u.mapping=Yr:d===Mc&&(u.mapping=$s),u}function l(u){let d=0;const _=6;for(let g=0;g<_;g++)u[g]!==void 0&&d++;return d===_}function c(u){const d=u.target;d.removeEventListener("dispose",c);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function _b(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Fs("WebGLRenderer: "+n+" extension not supported."),r}}}function gb(i,t,e,n){const r={},s=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete r[u.id];const d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,_=f.attributes.position;let g=0;if(_===void 0)return;if(d!==null){const T=d.array;g=d.version;for(let S=0,v=T.length;S<v;S+=3){const M=T[S+0],w=T[S+1],A=T[S+2];u.push(M,w,w,A,A,M)}}else{const T=_.array;g=_.version;for(let S=0,v=T.length/3-1;S<v;S+=3){const M=S+0,w=S+1,A=S+2;u.push(M,w,w,A,A,M)}}const p=new(_.count>=65535?b0:S0)(u,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function h(f){const u=s.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function xb(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,s,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,d);let g=0;for(let p=0;p<d;p++)g+=u[p];e.update(g,n,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function yb(i,t,e){const n=new WeakMap,r=new Te;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==f){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let M=o.attributes.position.count*v,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*w*4*f),x=new v0(A,M,w,f);x.type=vi,x.needsUpdate=!0;const b=v*4;for(let P=0;P<f;P++){const D=m[P],B=T[P],H=S[P],I=M*w*4*P;for(let z=0;z<D.count;z++){const U=z*b;_===!0&&(r.fromBufferAttribute(D,z),A[I+U+0]=r.x,A[I+U+1]=r.y,A[I+U+2]=r.z,A[I+U+3]=0),g===!0&&(r.fromBufferAttribute(B,z),A[I+U+4]=r.x,A[I+U+5]=r.y,A[I+U+6]=r.z,A[I+U+7]=0),p===!0&&(r.fromBufferAttribute(H,z),A[I+U+8]=r.x,A[I+U+9]=r.y,A[I+U+10]=r.z,A[I+U+11]=H.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new ot(M,w)},n.set(o,u),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Mb(i,t,e,n,r){let s=new WeakMap;function a(c){const h=r.render.frame,f=c.geometry,u=t.get(c,f);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return u}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const Sb={[i0]:"LINEAR_TONE_MAPPING",[r0]:"REINHARD_TONE_MAPPING",[s0]:"CINEON_TONE_MAPPING",[a0]:"ACES_FILMIC_TONE_MAPPING",[l0]:"AGX_TONE_MAPPING",[c0]:"NEUTRAL_TONE_MAPPING",[o0]:"CUSTOM_TONE_MAPPING"};function bb(i,t,e,n,r,s){const a=new Si(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Js(t,e):void 0}),o=new Si(t,e,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),l=new Ae;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));const c=new uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ke(l,c),f=new G0(-1,1,1,-1,0,1);let u=null,d=null,_=!1,g,p=null,m=[],T=!1;this.setSize=function(S,v){a.setSize(S,v),o.setSize(S,v);for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(S,v)}},this.setEffects=function(S){m=S,T=m.length>0&&m[0].isRenderPass===!0;const v=a.width,M=a.height;for(let w=0;w<m.length;w++){const A=m[w];A.setSize&&A.setSize(v,M)}},this.begin=function(S,v){if(_||S.toneMapping===Mi&&m.length===0)return!1;if(p=v,v!==null){const M=v.width,w=v.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return T===!1&&S.setRenderTarget(a),g=S.toneMapping,S.toneMapping=Mi,!0},this.hasRenderPass=function(){return T},this.end=function(S,v){S.toneMapping=g,_=!0;let M=a,w=o;for(let A=0;A<m.length;A++){const x=m[A];if(x.enabled!==!1&&(x.render(S,w,M,v),x.needsSwap!==!1)){const b=M;M=w,w=b}}if(u!==S.outputColorSpace||d!==S.toneMapping){u=S.outputColorSpace,d=S.toneMapping,c.defines={},qt.getTransfer(u)===ee&&(c.defines.SRGB_TRANSFER="");const A=Sb[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(p),S.render(h,f),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Y0=new je,Mu=new Js(1,1),q0=new v0,Z0=new cv,K0=new C0,hp=[],up=[],fp=new Float32Array(16),dp=new Float32Array(9),pp=new Float32Array(4);function ia(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=hp[r];if(s===void 0&&(s=new Float32Array(r),hp[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ac(i,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Eb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function wb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function Ab(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function Cb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;pp.set(n),i.uniformMatrix2fv(this.addr,!1,pp),He(e,n)}}function Rb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),He(e,n)}}function Pb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;fp.set(n),i.uniformMatrix4fv(this.addr,!1,fp),He(e,n)}}function Db(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Ib(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Nb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Ub(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Ob(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Bb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function zb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Mu.compareFunction=e.isReversedDepthBuffer()?pf:df,s=Mu):s=Y0,e.setTexture2D(t||s,r)}function kb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Z0,r)}function Vb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||K0,r)}function Gb(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||q0,r)}function Hb(i){switch(i){case 5126:return Eb;case 35664:return Tb;case 35665:return wb;case 35666:return Ab;case 35674:return Cb;case 35675:return Rb;case 35676:return Pb;case 5124:case 35670:return Db;case 35667:case 35671:return Lb;case 35668:case 35672:return Ib;case 35669:case 35673:return Nb;case 5125:return Ub;case 36294:return Fb;case 36295:return Ob;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}function Wb(i,t){i.uniform1fv(this.addr,t)}function Xb(i,t){const e=ia(t,this.size,2);i.uniform2fv(this.addr,e)}function Yb(i,t){const e=ia(t,this.size,3);i.uniform3fv(this.addr,e)}function qb(i,t){const e=ia(t,this.size,4);i.uniform4fv(this.addr,e)}function Zb(i,t){const e=ia(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kb(i,t){const e=ia(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $b(i,t){const e=ia(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jb(i,t){i.uniform1iv(this.addr,t)}function Qb(i,t){i.uniform2iv(this.addr,t)}function jb(i,t){i.uniform3iv(this.addr,t)}function tE(i,t){i.uniform4iv(this.addr,t)}function eE(i,t){i.uniform1uiv(this.addr,t)}function nE(i,t){i.uniform2uiv(this.addr,t)}function iE(i,t){i.uniform3uiv(this.addr,t)}function rE(i,t){i.uniform4uiv(this.addr,t)}function sE(i,t,e){const n=this.cache,r=t.length,s=ac(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mu:a=Y0;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function aE(i,t,e){const n=this.cache,r=t.length,s=ac(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Z0,s[a])}function oE(i,t,e){const n=this.cache,r=t.length,s=ac(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||K0,s[a])}function lE(i,t,e){const n=this.cache,r=t.length,s=ac(e,r);Ge(n,s)||(i.uniform1iv(this.addr,s),He(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||q0,s[a])}function cE(i){switch(i){case 5126:return Wb;case 35664:return Xb;case 35665:return Yb;case 35666:return qb;case 35674:return Zb;case 35675:return Kb;case 35676:return $b;case 5124:case 35670:return Jb;case 35667:case 35671:return Qb;case 35668:case 35672:return jb;case 35669:case 35673:return tE;case 5125:return eE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}class hE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hb(e.type)}}class uE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cE(e.type)}}class fE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const ih=/(\w+)(\])?(\[|\.)?/g;function mp(i,t){i.seq.push(t),i.map[t.id]=t}function dE(i,t,e){const n=i.name,r=n.length;for(ih.lastIndex=0;;){const s=ih.exec(n),a=ih.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){mp(e,c===void 0?new hE(o,i,t):new uE(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new fE(o),mp(e,f)),e=f}}}class ml{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);dE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function _p(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pE=37297;let mE=0;function _E(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const gp=new Nt;function gE(i){qt._getMatrix(gp,qt.workingColorSpace,i);const t=`mat3( ${gp.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Bl:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function xp(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+_E(i.getShaderSource(t),o)}else return s}function xE(i,t){const e=gE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const vE={[i0]:"Linear",[r0]:"Reinhard",[s0]:"Cineon",[a0]:"ACESFilmic",[l0]:"AgX",[c0]:"Neutral",[o0]:"Custom"};function yE(i,t){const e=vE[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const el=new L;function ME(){qt.getLuminanceCoefficients(el);const i=el.x.toFixed(4),t=el.y.toFixed(4),e=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function bE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function EE(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ma(i){return i!==""}function vp(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const TE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(i){return i.replace(TE,AE)}const wE=new Map;function AE(i,t){let e=zt[t];if(e===void 0){const n=wE.get(t);if(n!==void 0)e=zt[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Su(e)}const CE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(CE,RE)}function RE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const PE={[ll]:"SHADOWMAP_TYPE_PCF",[va]:"SHADOWMAP_TYPE_VSM"};function DE(i){return PE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LE={[Yr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function IE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":LE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const NE={[$s]:"ENVMAP_MODE_REFRACTION"};function UE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":NE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FE={[n0]:"ENVMAP_BLENDING_MULTIPLY",[Vx]:"ENVMAP_BLENDING_MIX",[Gx]:"ENVMAP_BLENDING_ADD"};function OE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":FE[i.combine]||"ENVMAP_BLENDING_NONE"}function BE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function zE(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=DE(e),c=IE(e),h=UE(e),f=OE(e),u=BE(e),d=SE(e),_=bE(s),g=r.createProgram();let p,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ma).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ma).join(`
`),m.length>0&&(m+=`
`)):(p=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),m=[Sp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?zt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?yE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,xE("linearToOutputTexel",e.outputColorSpace),ME(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ma).join(`
`)),a=Su(a),a=vp(a,e),a=yp(a,e),o=Su(o),o=vp(o,e),o=yp(o,e),a=Mp(a),o=Mp(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=T+p+a,v=T+m+o,M=_p(r,r.VERTEX_SHADER,S),w=_p(r,r.FRAGMENT_SHADER,v);r.attachShader(g,M),r.attachShader(g,w),e.index0AttributeName!==void 0?r.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){const D=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(M)||"",H=r.getShaderInfoLog(w)||"",I=D.trim(),z=B.trim(),U=H.trim();let Y=!0,J=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,M,w);else{const it=xp(r,M,"vertex"),et=xp(r,w,"fragment");Xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+it+`
`+et)}else I!==""?Lt("WebGLProgram: Program Info Log:",I):(z===""||U==="")&&(J=!1);J&&(P.diagnostics={runnable:Y,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:U,prefix:m}})}r.deleteShader(M),r.deleteShader(w),x=new ml(r,g),b=EE(r,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(g,pE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mE++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}let kE=0;class VE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new GE(t),e.set(t,n)),n}}class GE{constructor(t){this.id=kE++,this.code=t,this.usedTimes=0}}function HE(i){return i===qr||i===Ul||i===Fl}function WE(i,t,e,n,r,s){const a=new _f,o=new VE,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,R,P,D,B){const H=P.fog,I=D.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||z,U),J=Y&&Y.mapping===rc?Y.image.height:null,it=d[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Lt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ft=et!==void 0?et.length:0;let Ht=0;I.morphAttributes.position!==void 0&&(Ht=1),I.morphAttributes.normal!==void 0&&(Ht=2),I.morphAttributes.color!==void 0&&(Ht=3);let Kt,Ut,K,st;if(it){const Mt=pi[it];Kt=Mt.vertexShader,Ut=Mt.fragmentShader}else{Kt=x.vertexShader,Ut=x.fragmentShader;const Mt=o.getVertexShaderStage(x),be=o.getFragmentShaderStage(x);o.update(x,Mt,be),K=Mt.id,st=be.id}const nt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Ft=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,Ce=!!x.map,Wt=!!x.matcap,oe=!!Y,Qt=!!x.aoMap,$t=!!x.lightMap,Ie=!!x.bumpMap&&x.wireframe===!1,Be=!!x.normalMap,We=!!x.displacementMap,Ke=!!x.emissiveMap,Se=!!x.metalnessMap,Ne=!!x.roughnessMap,F=x.anisotropy>0,_n=x.clearcoat>0,te=x.dispersion>0,C=x.iridescence>0,y=x.sheen>0,k=x.transmission>0,W=F&&!!x.anisotropyMap,q=_n&&!!x.clearcoatMap,rt=_n&&!!x.clearcoatNormalMap,lt=_n&&!!x.clearcoatRoughnessMap,Z=C&&!!x.iridescenceMap,Q=C&&!!x.iridescenceThicknessMap,ct=y&&!!x.sheenColorMap,Et=y&&!!x.sheenRoughnessMap,pt=!!x.specularMap,ht=!!x.specularColorMap,At=!!x.specularIntensityMap,Pt=k&&!!x.transmissionMap,Ot=k&&!!x.thicknessMap,N=!!x.gradientMap,at=!!x.alphaMap,$=x.alphaTest>0,ut=!!x.alphaHash,xt=!!x.extensions;let j=Mi;x.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(j=i.toneMapping);const bt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Kt,fragmentShader:Ut,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&D.instanceColor!==null,instancingMorph:Ft&&D.morphTexture!==null,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ce,matcap:Wt,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:J,aoMap:Qt,lightMap:$t,bumpMap:Ie,normalMap:Be,displacementMap:We,emissiveMap:Ke,normalMapObjectSpace:Be&&x.normalMapType===Xx,normalMapTangentSpace:Be&&x.normalMapType===gd,packedNormalMap:Be&&x.normalMapType===gd&&HE(x.normalMap.format),metalnessMap:Se,roughnessMap:Ne,anisotropy:F,anisotropyMap:W,clearcoat:_n,clearcoatMap:q,clearcoatNormalMap:rt,clearcoatRoughnessMap:lt,dispersion:te,iridescence:C,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:y,sheenColorMap:ct,sheenRoughnessMap:Et,specularMap:pt,specularColorMap:ht,specularIntensityMap:At,transmission:k,transmissionMap:Pt,thicknessMap:Ot,gradientMap:N,opaque:x.transparent===!1&&x.blending===Xr&&x.alphaToCoverage===!1,alphaMap:at,alphaTest:$,alphaHash:ut,combine:x.combine,mapUv:Ce&&_(x.map.channel),aoMapUv:Qt&&_(x.aoMap.channel),lightMapUv:$t&&_(x.lightMap.channel),bumpMapUv:Ie&&_(x.bumpMap.channel),normalMapUv:Be&&_(x.normalMap.channel),displacementMapUv:We&&_(x.displacementMap.channel),emissiveMapUv:Ke&&_(x.emissiveMap.channel),metalnessMapUv:Se&&_(x.metalnessMap.channel),roughnessMapUv:Ne&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(x.sheenRoughnessMap.channel),specularMapUv:pt&&_(x.specularMap.channel),specularColorMapUv:ht&&_(x.specularColorMap.channel),specularIntensityMapUv:At&&_(x.specularIntensityMap.channel),transmissionMapUv:Pt&&_(x.transmissionMap.channel),thicknessMapUv:Ot&&_(x.thicknessMap.channel),alphaMapUv:at&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Be||F),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Ce||at),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&Be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:It,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ht,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:Ce&&x.map.isVideoTexture===!0&&qt.getTransfer(x.map.colorSpace)===ee,decodeVideoTextureEmissive:Ke&&x.emissiveMap.isVideoTexture===!0&&qt.getTransfer(x.emissiveMap.colorSpace)===ee,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===pn,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||Rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(b,x),T(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function S(x){const b=d[x.type];let R;if(b){const P=pi[b];R=ly.clone(P.uniforms)}else R=x.uniforms;return R}function v(x,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new zE(i,b,x,r),c.push(R),h.set(b,R)),R}function M(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:S,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function XE(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function YE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function bp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ep(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,_,g,p,m){let T=i[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},i[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=_,T.materialVariant=a(u),T.groupOrder=g,T.renderOrder=u.renderOrder,T.z=p,T.group=m),t++,T}function l(u,d,_,g,p,m){const T=o(u,d,_,g,p,m);_.transmission>0?n.push(T):_.transparent===!0?r.push(T):e.push(T)}function c(u,d,_,g,p,m){const T=o(u,d,_,g,p,m);_.transmission>0?n.unshift(T):_.transparent===!0?r.unshift(T):e.unshift(T)}function h(u,d,_){e.length>1&&e.sort(u||YE),n.length>1&&n.sort(d||bp),r.length>1&&r.sort(d||bp),_&&(e.reverse(),n.reverse(),r.reverse())}function f(){for(let u=t,d=i.length;u<d;u++){const _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:h}}function qE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ep,i.set(n,[a])):r>=s.length?(a=new Ep,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ZE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new kt};break;case"SpotLight":e={position:new L,direction:new L,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function KE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $E=0;function JE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function QE(i){const t=new ZE,e=KE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new pe,a=new pe;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,_=0,g=0,p=0,m=0,T=0,S=0,v=0,M=0,w=0,A=0;c.sort(JE);for(let b=0,R=c.length;b<R;b++){const P=c[b],D=P.color,B=P.intensity,H=P.distance;let I=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===qr?I=P.shadow.map.texture:I=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*B,f+=D.g*B,u+=D.b*B;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],B);A++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,Y=e.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=P.shadow.matrix,T++}n.directional[d]=z,d++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(D).multiplyScalar(B),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[g]=z;const U=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,U.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=U.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=I,v++}g++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(D).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=z,p++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const U=P.shadow,Y=e.get(P);Y.shadowIntensity=U.intensity,Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=I,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=z,_++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(B),z.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==d||x.pointLength!==_||x.spotLength!==g||x.rectAreaLength!==p||x.hemiLength!==m||x.numDirectionalShadows!==T||x.numPointShadows!==S||x.numSpotShadows!==v||x.numSpotMaps!==M||x.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,x.directionalLength=d,x.pointLength=_,x.spotLength=g,x.rectAreaLength=p,x.hemiLength=m,x.numDirectionalShadows=T,x.numPointShadows=S,x.numSpotShadows=v,x.numSpotMaps=M,x.numLightProbes=A,n.version=$E++)}function l(c,h){let f=0,u=0,d=0,_=0,g=0;const p=h.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const S=c[m];if(S.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),f++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function Tp(i){const t=new QE(i),e=[],n=[],r=[];function s(u){f.camera=u,e.length=0,n.length=0,r.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jE(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Tp(i),t.set(r,[o])):s>=a.length?(o=new Tp(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nT=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],iT=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],wp=new pe,pa=new L,rh=new L;function rT(i,t,e){let n=new w0;const r=new ot,s=new ot,a=new Te,o=new fy,l=new dy,c={},h=e.maxTextureSize,f={[yr]:cn,[cn]:yr,[pn]:pn},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:tT,fragmentShader:eT}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ae;_.setAttribute("position",new qe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ke(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let m=this.type;this.render=function(w,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Sx&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ll);const b=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Bi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=m!==this.type;B&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(I=>I.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,I=w.length;H<I;H++){const z=w[H],U=z.shadow;if(U===void 0){Lt("WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const Y=U.getFrameExtents();r.multiply(Y),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Y.x),r.x=s.x*Y.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Y.y),r.y=s.y*Y.y,U.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=J,U.map===null||B===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===va){if(z.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Si(r.x,r.y,{format:qr,type:Wi,minFilter:on,magFilter:on,generateMipmaps:!1}),U.map.texture.name=z.name+".shadowMap",U.map.depthTexture=new Js(r.x,r.y,vi),U.map.depthTexture.name=z.name+".shadowMapDepth",U.map.depthTexture.format=Xi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Je,U.map.depthTexture.magFilter=Je}else z.isPointLight?(U.map=new X0(r.x),U.map.depthTexture=new Rv(r.x,Ei)):(U.map=new Si(r.x,r.y),U.map.depthTexture=new Js(r.x,r.y,Ei)),U.map.depthTexture.name=z.name+".shadowMap",U.map.depthTexture.format=Xi,this.type===ll?(U.map.depthTexture.compareFunction=J?pf:df,U.map.depthTexture.minFilter=on,U.map.depthTexture.magFilter=on):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Je,U.map.depthTexture.magFilter=Je);U.camera.updateProjectionMatrix()}const it=U.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<it;et++){if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,et),i.clear();else{et===0&&(i.setRenderTarget(U.map),i.clear());const ft=U.getViewport(et);a.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),D.viewport(a)}if(z.isPointLight){const ft=U.camera,Ht=U.matrix,Kt=z.distance||ft.far;Kt!==ft.far&&(ft.far=Kt,ft.updateProjectionMatrix()),pa.setFromMatrixPosition(z.matrixWorld),ft.position.copy(pa),rh.copy(ft.position),rh.add(nT[et]),ft.up.copy(iT[et]),ft.lookAt(rh),ft.updateMatrixWorld(),Ht.makeTranslation(-pa.x,-pa.y,-pa.z),wp.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),U._frustum.setFromProjectionMatrix(wp,ft.coordinateSystem,ft.reversedDepth)}else U.updateMatrices(z);n=U.getFrustum(),v(A,x,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===va&&T(U,x),U.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,R,P)};function T(w,A){const x=t.update(g);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Si(r.x,r.y,{format:qr,type:Wi})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,x,u,g,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,x,d,g,null)}function S(w,A,x,b){let R=null;const P=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=R.uuid,B=A.uuid;let H=c[D];H===void 0&&(H={},c[D]=H);let I=H[B];I===void 0&&(I=R.clone(),H[B]=I,A.addEventListener("dispose",M)),R=I}if(R.visible=A.visible,R.wireframe=A.wireframe,b===va?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=i.properties.get(R);D.light=x}return R}function v(w,A,x,b,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===va)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const B=t.update(w),H=w.material;if(Array.isArray(H)){const I=B.groups;for(let z=0,U=I.length;z<U;z++){const Y=I[z],J=H[Y.materialIndex];if(J&&J.visible){const it=S(w,J,b,R);w.onBeforeShadow(i,w,A,x,B,it,Y),i.renderBufferDirect(x,null,B,it,w,Y),w.onAfterShadow(i,w,A,x,B,it,Y)}}}else if(H.visible){const I=S(w,H,b,R);w.onBeforeShadow(i,w,A,x,B,I,null),i.renderBufferDirect(x,null,B,I,w,null),w.onAfterShadow(i,w,A,x,B,I,null)}}const D=w.children;for(let B=0,H=D.length;B<H;B++)v(D[B],A,x,b,R)}function M(w){w.target.removeEventListener("dispose",M);for(const x in c){const b=c[x],R=w.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function sT(i,t){function e(){let N=!1;const at=new Te;let $=null;const ut=new Te(0,0,0,0);return{setMask:function(xt){$!==xt&&!N&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){N=xt},setClear:function(xt,j,bt,Mt,be){be===!0&&(xt*=Mt,j*=Mt,bt*=Mt),at.set(xt,j,bt,Mt),ut.equals(at)===!1&&(i.clearColor(xt,j,bt,Mt),ut.copy(at))},reset:function(){N=!1,$=null,ut.set(-1,0,0,0)}}}function n(){let N=!1,at=!1,$=null,ut=null,xt=null;return{setReversed:function(j){if(at!==j){const bt=t.get("EXT_clip_control");j?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),at=j;const Mt=xt;xt=null,this.setClear(Mt)}},getReversed:function(){return at},setTest:function(j){j?nt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(j){$!==j&&!N&&(i.depthMask(j),$=j)},setFunc:function(j){if(at&&(j=ev[j]),ut!==j){switch(j){case Dh:i.depthFunc(i.NEVER);break;case Lh:i.depthFunc(i.ALWAYS);break;case Ih:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Nh:i.depthFunc(i.EQUAL);break;case Uh:i.depthFunc(i.GEQUAL);break;case Fh:i.depthFunc(i.GREATER);break;case Oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=j}},setLocked:function(j){N=j},setClear:function(j){xt!==j&&(xt=j,at&&(j=1-j),i.clearDepth(j))},reset:function(){N=!1,$=null,ut=null,xt=null,at=!1}}}function r(){let N=!1,at=null,$=null,ut=null,xt=null,j=null,bt=null,Mt=null,be=null;return{setTest:function(fe){N||(fe?nt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(fe){at!==fe&&!N&&(i.stencilMask(fe),at=fe)},setFunc:function(fe,oi,li){($!==fe||ut!==oi||xt!==li)&&(i.stencilFunc(fe,oi,li),$=fe,ut=oi,xt=li)},setOp:function(fe,oi,li){(j!==fe||bt!==oi||Mt!==li)&&(i.stencilOp(fe,oi,li),j=fe,bt=oi,Mt=li)},setLocked:function(fe){N=fe},setClear:function(fe){be!==fe&&(i.clearStencil(fe),be=fe)},reset:function(){N=!1,at=null,$=null,ut=null,xt=null,j=null,bt=null,Mt=null,be=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,_=[],g=null,p=!1,m=null,T=null,S=null,v=null,M=null,w=null,A=null,x=new kt(0,0,0),b=0,R=!1,P=null,D=null,B=null,H=null,I=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,Y=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),U=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),U=Y>=2);let it=null,et={};const ft=i.getParameter(i.SCISSOR_BOX),Ht=i.getParameter(i.VIEWPORT),Kt=new Te().fromArray(ft),Ut=new Te().fromArray(Ht);function K(N,at,$,ut){const xt=new Uint8Array(4),j=i.createTexture();i.bindTexture(N,j),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let bt=0;bt<$;bt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(at+bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return j}const st={};st[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),st[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),st[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(i.DEPTH_TEST),a.setFunc(Ks),Ie(!1),Be(pd),nt(i.CULL_FACE),Qt(Bi);function nt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function It(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ft(N,at){return u[N]!==at?(i.bindFramebuffer(N,at),u[N]=at,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=at),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=at),!0):!1}function Rt(N,at){let $=_,ut=!1;if(N){$=d.get(at),$===void 0&&($=[],d.set(at,$));const xt=N.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let j=0,bt=xt.length;j<bt;j++)$[j]=i.COLOR_ATTACHMENT0+j;$.length=xt.length,ut=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,ut=!0);ut&&i.drawBuffers($)}function Ce(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Wt={[Ir]:i.FUNC_ADD,[Ex]:i.FUNC_SUBTRACT,[Tx]:i.FUNC_REVERSE_SUBTRACT};Wt[wx]=i.MIN,Wt[Ax]=i.MAX;const oe={[Cx]:i.ZERO,[Rx]:i.ONE,[Px]:i.SRC_COLOR,[Rh]:i.SRC_ALPHA,[Fx]:i.SRC_ALPHA_SATURATE,[Nx]:i.DST_COLOR,[Lx]:i.DST_ALPHA,[Dx]:i.ONE_MINUS_SRC_COLOR,[Ph]:i.ONE_MINUS_SRC_ALPHA,[Ux]:i.ONE_MINUS_DST_COLOR,[Ix]:i.ONE_MINUS_DST_ALPHA,[Ox]:i.CONSTANT_COLOR,[Bx]:i.ONE_MINUS_CONSTANT_COLOR,[zx]:i.CONSTANT_ALPHA,[kx]:i.ONE_MINUS_CONSTANT_ALPHA};function Qt(N,at,$,ut,xt,j,bt,Mt,be,fe){if(N===Bi){p===!0&&(It(i.BLEND),p=!1);return}if(p===!1&&(nt(i.BLEND),p=!0),N!==bx){if(N!==m||fe!==R){if((T!==Ir||M!==Ir)&&(i.blendEquation(i.FUNC_ADD),T=Ir,M=Ir),fe)switch(N){case Xr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFunc(i.ONE,i.ONE);break;case md:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _d:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case Xr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case md:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _d:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}S=null,v=null,w=null,A=null,x.set(0,0,0),b=0,m=N,R=fe}return}xt=xt||at,j=j||$,bt=bt||ut,(at!==T||xt!==M)&&(i.blendEquationSeparate(Wt[at],Wt[xt]),T=at,M=xt),($!==S||ut!==v||j!==w||bt!==A)&&(i.blendFuncSeparate(oe[$],oe[ut],oe[j],oe[bt]),S=$,v=ut,w=j,A=bt),(Mt.equals(x)===!1||be!==b)&&(i.blendColor(Mt.r,Mt.g,Mt.b,be),x.copy(Mt),b=be),m=N,R=!1}function $t(N,at){N.side===pn?It(i.CULL_FACE):nt(i.CULL_FACE);let $=N.side===cn;at&&($=!$),Ie($),N.blending===Xr&&N.transparent===!1?Qt(Bi):Qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ut=N.stencilWrite;o.setTest(ut),ut&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?nt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(N){P!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),P=N)}function Be(N){N!==yx?(nt(i.CULL_FACE),N!==D&&(N===pd?i.cullFace(i.BACK):N===Mx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),D=N}function We(N){N!==B&&(U&&i.lineWidth(N),B=N)}function Ke(N,at,$){N?(nt(i.POLYGON_OFFSET_FILL),(H!==at||I!==$)&&(H=at,I=$,a.getReversed()&&(at=-at),i.polygonOffset(at,$))):It(i.POLYGON_OFFSET_FILL)}function Se(N){N?nt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function Ne(N){N===void 0&&(N=i.TEXTURE0+z-1),it!==N&&(i.activeTexture(N),it=N)}function F(N,at,$){$===void 0&&(it===null?$=i.TEXTURE0+z-1:$=it);let ut=et[$];ut===void 0&&(ut={type:void 0,texture:void 0},et[$]=ut),(ut.type!==N||ut.texture!==at)&&(it!==$&&(i.activeTexture($),it=$),i.bindTexture(N,at||st[N]),ut.type=N,ut.texture=at)}function _n(){const N=et[it];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function y(){try{i.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function k(){try{i.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function rt(){try{i.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function lt(){try{i.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Z(){try{i.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Q(){try{i.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ct(N){return f[N]!==void 0?f[N]:i.getParameter(N)}function Et(N,at){f[N]!==at&&(i.pixelStorei(N,at),f[N]=at)}function pt(N){Kt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Kt.copy(N))}function ht(N){Ut.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Ut.copy(N))}function At(N,at){let $=c.get(at);$===void 0&&($=new WeakMap,c.set(at,$));let ut=$.get(N);ut===void 0&&(ut=i.getUniformBlockIndex(at,N.name),$.set(N,ut))}function Pt(N,at){const ut=c.get(at).get(N);l.get(at)!==ut&&(i.uniformBlockBinding(at,ut,N.__bindingPointIndex),l.set(at,ut))}function Ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},it=null,et={},u={},d=new WeakMap,_=[],g=null,p=!1,m=null,T=null,S=null,v=null,M=null,w=null,A=null,x=new kt(0,0,0),b=0,R=!1,P=null,D=null,B=null,H=null,I=null,Kt.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:It,bindFramebuffer:Ft,drawBuffers:Rt,useProgram:Ce,setBlending:Qt,setMaterial:$t,setFlipSided:Ie,setCullFace:Be,setLineWidth:We,setPolygonOffset:Ke,setScissorTest:Se,activeTexture:Ne,bindTexture:F,unbindTexture:_n,compressedTexImage2D:te,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:Et,getParameter:ct,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:rt,texStorage3D:lt,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:pt,viewport:ht,reset:Ot}}function aT(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return _?new OffscreenCanvas(C,y):Ka("canvas")}function p(C,y,k){let W=1;const q=te(C);if((q.width>k||q.height>k)&&(W=k/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const rt=Math.floor(W*q.width),lt=Math.floor(W*q.height);u===void 0&&(u=g(rt,lt));const Z=y?g(rt,lt):u;return Z.width=rt,Z.height=lt,Z.getContext("2d").drawImage(C,0,0,rt,lt),Lt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+rt+"x"+lt+")."),Z}else return"data"in C&&Lt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),C;return C}function m(C){return C.generateMipmaps}function T(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,y,k,W,q,rt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let lt;W&&(lt=t.get("EXT_texture_norm16"),lt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&lt&&(Z=lt.R16_EXT),k===i.SHORT&&lt&&(Z=lt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),y===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&lt&&(Z=lt.RG16_EXT),k===i.SHORT&&lt&&(Z=lt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGB16_EXT),k===i.SHORT&&lt&&(Z=lt.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){const Q=rt?Bl:qt.getTransfer(q);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=Q===ee?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&lt&&(Z=lt.RGBA16_EXT),k===i.SHORT&&lt&&(Z=lt.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(C,y){let k;return C?y===null||y===Ei||y===Za?k=i.DEPTH24_STENCIL8:y===vi?k=i.DEPTH32F_STENCIL8:y===qa&&(k=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===Za?k=i.DEPTH_COMPONENT24:y===vi?k=i.DEPTH_COMPONENT32F:y===qa&&(k=i.DEPTH_COMPONENT16),k}function w(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),b(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function x(C){const y=C.target;y.removeEventListener("dispose",x),P(y)}function b(C){const y=n.get(C);if(y.__webglInit===void 0)return;const k=C.source,W=d.get(k);if(W){const q=W[y.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(C),Object.keys(W).length===0&&d.delete(k)}n.remove(C)}function R(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const k=C.source,W=d.get(k);delete W[y.__cacheKey],a.memory.textures--}function P(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(y.__webglFramebuffer[W]))for(let q=0;q<y.__webglFramebuffer[W].length;q++)i.deleteFramebuffer(y.__webglFramebuffer[W][q]);else i.deleteFramebuffer(y.__webglFramebuffer[W]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[W])}else{if(Array.isArray(y.__webglFramebuffer))for(let W=0;W<y.__webglFramebuffer.length;W++)i.deleteFramebuffer(y.__webglFramebuffer[W]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let W=0;W<y.__webglColorRenderbuffer.length;W++)y.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[W]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let W=0,q=k.length;W<q;W++){const rt=n.get(k[W]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(C)}let D=0;function B(){D=0}function H(){return D}function I(C){D=C}function z(){const C=D;return C>=r.maxTextures&&Lt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function U(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function Y(C,y){const k=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const W=C.image;if(W===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{It(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function J(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){It(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function it(C,y){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){It(k,C,y);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function et(C,y){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ft(k,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}const ft={[Nl]:i.REPEAT,[Fi]:i.CLAMP_TO_EDGE,[Bh]:i.MIRRORED_REPEAT},Ht={[Je]:i.NEAREST,[Hx]:i.NEAREST_MIPMAP_NEAREST,[To]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[Sc]:i.LINEAR_MIPMAP_NEAREST,[Fr]:i.LINEAR_MIPMAP_LINEAR},Kt={[Yx]:i.NEVER,[Jx]:i.ALWAYS,[qx]:i.LESS,[df]:i.LEQUAL,[Zx]:i.EQUAL,[pf]:i.GEQUAL,[Kx]:i.GREATER,[$x]:i.NOTEQUAL};function Ut(C,y){if(y.type===vi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Sc||y.magFilter===To||y.magFilter===Fr||y.minFilter===on||y.minFilter===Sc||y.minFilter===To||y.minFilter===Fr)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ft[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ft[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ft[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Ht[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Ht[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Kt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Je||y.minFilter!==To&&y.minFilter!==Fr||y.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function K(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const W=y.source;let q=d.get(W);q===void 0&&(q={},d.set(W,q));const rt=U(y);if(rt!==C.__cacheKey){q[rt]===void 0&&(q[rt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),q[rt].usedTimes++;const lt=q[C.__cacheKey];lt!==void 0&&(q[C.__cacheKey].usedTimes--,lt.usedTimes===0&&R(y)),C.__cacheKey=rt,C.__webglTexture=q[rt].texture}return k}function st(C,y,k){return Math.floor(Math.floor(C/k)/y)}function nt(C,y,k,W){const rt=C.updateRanges;if(rt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,W,y.data);else{rt.sort((Et,pt)=>Et.start-pt.start);let lt=0;for(let Et=1;Et<rt.length;Et++){const pt=rt[lt],ht=rt[Et],At=pt.start+pt.count,Pt=st(ht.start,y.width,4),Ot=st(pt.start,y.width,4);ht.start<=At+1&&Pt===Ot&&st(ht.start+ht.count-1,y.width,4)===Pt?pt.count=Math.max(pt.count,ht.start+ht.count-pt.start):(++lt,rt[lt]=ht)}rt.length=lt+1;const Z=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ct=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Et=0,pt=rt.length;Et<pt;Et++){const ht=rt[Et],At=Math.floor(ht.start/4),Pt=Math.ceil(ht.count/4),Ot=At%y.width,N=Math.floor(At/y.width),at=Pt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Ot,N,at,$,k,W,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ct)}}function It(C,y,k){let W=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(W=i.TEXTURE_3D);const q=K(C,y),rt=y.source;e.bindTexture(W,C.__webglTexture,i.TEXTURE0+k);const lt=n.get(rt);if(rt.version!==lt.__version||q===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const $=qt.getPrimaries(qt.workingColorSpace),ut=y.colorSpace===ir?null:qt.getPrimaries(y.colorSpace),xt=y.colorSpace===ir||$===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=p(y.image,!1,r.maxTextureSize);Q=_n(y,Q);const ct=s.convert(y.format,y.colorSpace),Et=s.convert(y.type);let pt=v(y.internalFormat,ct,Et,y.normalized,y.colorSpace,y.isVideoTexture);Ut(W,y);let ht;const At=y.mipmaps,Pt=y.isVideoTexture!==!0,Ot=lt.__version===void 0||q===!0,N=rt.dataReady,at=w(y,Q);if(y.isDepthTexture)pt=M(y.format===Or,y.type),Ot&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,pt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,pt,Q.width,Q.height,0,ct,Et,null));else if(y.isDataTexture)if(At.length>0){Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,at,pt,At[0].width,At[0].height);for(let $=0,ut=At.length;$<ut;$++)ht=At[$],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,Et,ht.data):e.texImage2D(i.TEXTURE_2D,$,pt,ht.width,ht.height,0,ct,Et,ht.data);y.generateMipmaps=!1}else Pt?(Ot&&e.texStorage2D(i.TEXTURE_2D,at,pt,Q.width,Q.height),N&&nt(y,Q,ct,Et)):e.texImage2D(i.TEXTURE_2D,0,pt,Q.width,Q.height,0,ct,Et,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Pt&&Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,pt,At[0].width,At[0].height,Q.depth);for(let $=0,ut=At.length;$<ut;$++)if(ht=At[$],y.format!==ri)if(ct!==null)if(Pt){if(N)if(y.layerUpdates.size>0){const xt=ip(ht.width,ht.height,y.format,y.type);for(const j of y.layerUpdates){const bt=ht.data.subarray(j*xt/ht.data.BYTES_PER_ELEMENT,(j+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,j,ht.width,ht.height,1,ct,bt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,Q.depth,ct,ht.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,pt,ht.width,ht.height,Q.depth,0,ht.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ht.width,ht.height,Q.depth,ct,Et,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,pt,ht.width,ht.height,Q.depth,0,ct,Et,ht.data)}else{Pt&&Ot&&e.texStorage2D(i.TEXTURE_2D,at,pt,At[0].width,At[0].height);for(let $=0,ut=At.length;$<ut;$++)ht=At[$],y.format!==ri?ct!==null?Pt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,$,pt,ht.width,ht.height,0,ht.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ht.width,ht.height,ct,Et,ht.data):e.texImage2D(i.TEXTURE_2D,$,pt,ht.width,ht.height,0,ct,Et,ht.data)}else if(y.isDataArrayTexture)if(Pt){if(Ot&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,pt,Q.width,Q.height,Q.depth),N)if(y.layerUpdates.size>0){const $=ip(Q.width,Q.height,y.format,y.type);for(const ut of y.layerUpdates){const xt=Q.data.subarray(ut*$/Q.data.BYTES_PER_ELEMENT,(ut+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,ct,Et,xt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ct,Et,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,Q.width,Q.height,Q.depth,0,ct,Et,Q.data);else if(y.isData3DTexture)Pt?(Ot&&e.texStorage3D(i.TEXTURE_3D,at,pt,Q.width,Q.height,Q.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ct,Et,Q.data)):e.texImage3D(i.TEXTURE_3D,0,pt,Q.width,Q.height,Q.depth,0,ct,Et,Q.data);else if(y.isFramebufferTexture){if(Ot)if(Pt)e.texStorage2D(i.TEXTURE_2D,at,pt,Q.width,Q.height);else{let $=Q.width,ut=Q.height;for(let xt=0;xt<at;xt++)e.texImage2D(i.TEXTURE_2D,xt,pt,$,ut,0,ct,Et,null),$>>=1,ut>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),f.add(y),$.onpaint=ut=>{const xt=ut.changedElements;for(const j of f)xt.includes(j.image)&&(j.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const xt=i.RGBA,j=i.RGBA,bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,j,bt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(At.length>0){if(Pt&&Ot){const $=te(At[0]);e.texStorage2D(i.TEXTURE_2D,at,pt,$.width,$.height)}for(let $=0,ut=At.length;$<ut;$++)ht=At[$],Pt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ct,Et,ht):e.texImage2D(i.TEXTURE_2D,$,pt,ct,Et,ht);y.generateMipmaps=!1}else if(Pt){if(Ot){const $=te(Q);e.texStorage2D(i.TEXTURE_2D,at,pt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,Et,Q)}else e.texImage2D(i.TEXTURE_2D,0,pt,ct,Et,Q);m(y)&&T(W),lt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Ft(C,y,k){if(y.image.length!==6)return;const W=K(C,y),q=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const rt=n.get(q);if(q.version!==rt.__version||W===!0){e.activeTexture(i.TEXTURE0+k);const lt=qt.getPrimaries(qt.workingColorSpace),Z=y.colorSpace===ir?null:qt.getPrimaries(y.colorSpace),Q=y.colorSpace===ir||lt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ct=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let j=0;j<6;j++)!ct&&!Et?pt[j]=p(y.image[j],!0,r.maxCubemapSize):pt[j]=Et?y.image[j].image:y.image[j],pt[j]=_n(y,pt[j]);const ht=pt[0],At=s.convert(y.format,y.colorSpace),Pt=s.convert(y.type),Ot=v(y.internalFormat,At,Pt,y.normalized,y.colorSpace),N=y.isVideoTexture!==!0,at=rt.__version===void 0||W===!0,$=q.dataReady;let ut=w(y,ht);Ut(i.TEXTURE_CUBE_MAP,y);let xt;if(ct){N&&at&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ot,ht.width,ht.height);for(let j=0;j<6;j++){xt=pt[j].mipmaps;for(let bt=0;bt<xt.length;bt++){const Mt=xt[bt];y.format!==ri?At!==null?N?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Mt.width,Mt.height,At,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,Ot,Mt.width,Mt.height,0,Mt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,0,0,Mt.width,Mt.height,At,Pt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt,Ot,Mt.width,Mt.height,0,At,Pt,Mt.data)}}}else{if(xt=y.mipmaps,N&&at){xt.length>0&&ut++;const j=te(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Ot,j.width,j.height)}for(let j=0;j<6;j++)if(Et){N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pt[j].width,pt[j].height,At,Pt,pt[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,pt[j].width,pt[j].height,0,At,Pt,pt[j].data);for(let bt=0;bt<xt.length;bt++){const be=xt[bt].image[j].image;N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,be.width,be.height,At,Pt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,Ot,be.width,be.height,0,At,Pt,be.data)}}else{N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,Pt,pt[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ot,At,Pt,pt[j]);for(let bt=0;bt<xt.length;bt++){const Mt=xt[bt];N?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,0,0,At,Pt,Mt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,bt+1,Ot,At,Pt,Mt.image[j])}}}m(y)&&T(i.TEXTURE_CUBE_MAP),rt.__version=q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Rt(C,y,k,W,q,rt){const lt=s.convert(k.format,k.colorSpace),Z=s.convert(k.type),Q=v(k.internalFormat,lt,Z,k.normalized,k.colorSpace),ct=n.get(y),Et=n.get(k);if(Et.__renderTarget=y,!ct.__hasExternalTextures){const pt=Math.max(1,y.width>>rt),ht=Math.max(1,y.height>>rt);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,rt,Q,pt,ht,y.depth,0,lt,Z,null):e.texImage2D(q,rt,Q,pt,ht,0,lt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ne(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,q,Et.__webglTexture,0,Se(y)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,q,Et.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(C,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const W=y.depthTexture,q=W&&W.isDepthTexture?W.type:null,rt=M(y.stencilBuffer,q),lt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),rt,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,rt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,C)}else{const W=y.textures;for(let q=0;q<W.length;q++){const rt=W[q],lt=s.convert(rt.format,rt.colorSpace),Z=s.convert(rt.type),Q=v(rt.internalFormat,lt,Z,rt.normalized,rt.colorSpace);Ne(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se(y),Q,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Wt(C,y,k){const W=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=n.get(y.depthTexture);if(q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,y.depthTexture);const ct=s.convert(y.depthTexture.format),Et=s.convert(y.depthTexture.type);let pt;y.depthTexture.format===Xi?pt=i.DEPTH_COMPONENT24:y.depthTexture.format===Or&&(pt=i.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,pt,y.width,y.height,0,ct,Et,null)}}else Y(y.depthTexture,0);const rt=q.__webglTexture,lt=Se(y),Z=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Q=y.depthTexture.format===Or?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)Ne(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,rt,0);else if(y.depthTexture.format===Or)Ne(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,rt,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(C){const y=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const W=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),W){const q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),y.__depthDisposeCallback=q}y.__boundDepthTexture=W}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Wt(y.__webglFramebuffer[W],C,W);else{const W=C.texture.mipmaps;W&&W.length>0?Wt(y.__webglFramebuffer[0],C,0):Wt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[W]),y.__webglDepthbuffer[W]===void 0)y.__webglDepthbuffer[W]=i.createRenderbuffer(),Ce(y.__webglDepthbuffer[W],C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,rt)}}else{const W=C.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ce(y.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,rt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(C,y,k){const W=n.get(C);y!==void 0&&Rt(W.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&oe(C)}function $t(C){const y=C.texture,k=n.get(C),W=n.get(y);C.addEventListener("dispose",x);const q=C.textures,rt=C.isWebGLCubeRenderTarget===!0,lt=q.length>1;if(lt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=y.version,a.memory.textures++),rt){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let Q=0;Q<y.mipmaps.length;Q++)k.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(lt)for(let Z=0,Q=q.length;Z<Q;Z++){const ct=n.get(q[Z]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ne(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<q.length;Z++){const Q=q[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);const ct=s.convert(Q.format,Q.colorSpace),Et=s.convert(Q.type),pt=v(Q.internalFormat,ct,Et,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),ht=Se(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,pt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Rt(k.__webglFramebuffer[Z][Q],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Rt(k.__webglFramebuffer[Z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let Z=0,Q=q.length;Z<Q;Z++){const ct=q[Z],Et=n.get(ct);let pt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Et.__webglTexture),Ut(pt,ct),Rt(k.__webglFramebuffer,C,ct,i.COLOR_ATTACHMENT0+Z,pt,0),m(ct)&&T(pt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,W.__webglTexture),Ut(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)Rt(k.__webglFramebuffer[Q],C,y,i.COLOR_ATTACHMENT0,Z,Q);else Rt(k.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&T(Z),e.unbindTexture()}C.depthBuffer&&oe(C)}function Ie(C){const y=C.textures;for(let k=0,W=y.length;k<W;k++){const q=y[k];if(m(q)){const rt=S(C),lt=n.get(q).__webglTexture;e.bindTexture(rt,lt),T(rt),e.unbindTexture()}}}const Be=[],We=[];function Ke(C){if(C.samples>0){if(Ne(C)===!1){const y=C.textures,k=C.width,W=C.height;let q=i.COLOR_BUFFER_BIT;const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(C),Z=y.length>1;if(Z)for(let ct=0;ct<y.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ct=0;ct<y.length;ct++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Et=n.get(y[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,k,W,0,0,k,W,q,i.NEAREST),l===!0&&(Be.length=0,We.length=0,Be.push(i.COLOR_ATTACHMENT0+ct),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Be.push(rt),We.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,We)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ct=0;ct<y.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ct]);const Et=n.get(y[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Se(C){return Math.min(r.maxSamples,C.samples)}function Ne(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function _n(C,y){const k=C.colorSpace,W=C.format,q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Ol&&k!==ir&&(qt.getTransfer(k)===ee?(W!==ri||q!==Kn)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",k)),y}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.getTextureUnits=H,this.setTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=et,this.rebindTextures=Qt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oT(i,t){function e(n,r=ir){let s;const a=qt.getTransfer(r);if(n===Kn)return i.UNSIGNED_BYTE;if(n===lf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===cf)return i.UNSIGNED_SHORT_5_5_5_1;if(n===d0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===p0)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===u0)return i.BYTE;if(n===f0)return i.SHORT;if(n===qa)return i.UNSIGNED_SHORT;if(n===of)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===vi)return i.FLOAT;if(n===Wi)return i.HALF_FLOAT;if(n===m0)return i.ALPHA;if(n===_0)return i.RGB;if(n===ri)return i.RGBA;if(n===Xi)return i.DEPTH_COMPONENT;if(n===Or)return i.DEPTH_STENCIL;if(n===g0)return i.RED;if(n===hf)return i.RED_INTEGER;if(n===qr)return i.RG;if(n===uf)return i.RG_INTEGER;if(n===ff)return i.RGBA_INTEGER;if(n===cl||n===hl||n===ul||n===fl)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===cl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===cl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zh||n===kh||n===Vh||n===Gh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hh||n===Wh||n===Xh||n===Yh||n===qh||n===Ul||n===Zh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Hh||n===Wh)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xh)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yh)return s.COMPRESSED_R11_EAC;if(n===qh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ul)return s.COMPRESSED_RG11_EAC;if(n===Zh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Kh||n===$h||n===Jh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===lu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Kh)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ru)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===au)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cu||n===hu||n===uu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cu)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===du||n===Fl||n===pu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new R0(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:lT,fragmentShader:cT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ke(new mo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends br{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,_=null;const g=typeof XRWebGLBinding<"u",p=new hT,m={},T=e.getContextAttributes();let S=null,v=null;const M=[],w=[],A=new ot;let x=null;const b=new Un;b.viewport=new Te;const R=new Un;R.viewport=new Te;const P=[b,R],D=new vy;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=M[K];return st===void 0&&(st=new Rc,M[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=M[K];return st===void 0&&(st=new Rc,M[K]=st),st.getGripSpace()},this.getHand=function(K){let st=M[K];return st===void 0&&(st=new Rc,M[K]=st),st.getHandSpace()};function I(K){const st=w.indexOf(K.inputSource);if(st===-1)return;const nt=M[st];nt!==void 0&&(nt.update(K.inputSource,K.frame,c||a),nt.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",U);for(let K=0;K<M.length;K++){const st=w[K];st!==null&&(w[K]=null,M[K].disconnect(st))}B=null,H=null,p.reset();for(const K in m)delete m[K];t.setRenderTarget(S),d=null,u=null,f=null,r=null,v=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=t.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",z),r.addEventListener("inputsourceschange",U),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,It=null,Ft=null;T.depth&&(Ft=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=T.stencil?Or:Xi,It=T.stencil?Za:Ei);const Rt={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Rt),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Si(u.textureWidth,u.textureHeight,{format:ri,type:Kn,depthTexture:new Js(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const nt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,nt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Si(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ut.setContext(r),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function U(K){for(let st=0;st<K.removed.length;st++){const nt=K.removed[st],It=w.indexOf(nt);It>=0&&(w[It]=null,M[It].disconnect(nt))}for(let st=0;st<K.added.length;st++){const nt=K.added[st];let It=w.indexOf(nt);if(It===-1){for(let Rt=0;Rt<M.length;Rt++)if(Rt>=w.length){w.push(nt),It=Rt;break}else if(w[Rt]===null){w[Rt]=nt,It=Rt;break}if(It===-1)break}const Ft=M[It];Ft&&Ft.connect(nt)}}const Y=new L,J=new L;function it(K,st,nt){Y.setFromMatrixPosition(st.matrixWorld),J.setFromMatrixPosition(nt.matrixWorld);const It=Y.distanceTo(J),Ft=st.projectionMatrix.elements,Rt=nt.projectionMatrix.elements,Ce=Ft[14]/(Ft[10]-1),Wt=Ft[14]/(Ft[10]+1),oe=(Ft[9]+1)/Ft[5],Qt=(Ft[9]-1)/Ft[5],$t=(Ft[8]-1)/Ft[0],Ie=(Rt[8]+1)/Rt[0],Be=Ce*$t,We=Ce*Ie,Ke=It/(-$t+Ie),Se=Ke*-$t;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Se),K.translateZ(Ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ft[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ne=Ce+Ke,F=Wt+Ke,_n=Be-Se,te=We+(It-Se),C=oe*Wt/F*Ne,y=Qt*Wt/F*Ne;K.projectionMatrix.makePerspective(_n,te,C,y,Ne,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function et(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let st=K.near,nt=K.far;p.texture!==null&&(p.depthNear>0&&(st=p.depthNear),p.depthFar>0&&(nt=p.depthFar)),D.near=R.near=b.near=st,D.far=R.far=b.far=nt,(B!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,H=D.far),D.layers.mask=K.layers.mask|6,b.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const It=K.parent,Ft=D.cameras;et(D,It);for(let Rt=0;Rt<Ft.length;Rt++)et(Ft[Rt],It);Ft.length===2?it(D,b,R):D.projectionMatrix.copy(b.projectionMatrix),ft(K,D,It)};function ft(K,st,nt){nt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(nt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_u*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(K){return m[K]};let Ht=null;function Kt(K,st){if(h=st.getViewerPose(c||a),_=st,h!==null){const nt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let It=!1;nt.length!==D.cameras.length&&(D.cameras.length=0,It=!0);for(let Wt=0;Wt<nt.length;Wt++){const oe=nt[Wt];let Qt=null;if(d!==null)Qt=d.getViewport(oe);else{const Ie=f.getViewSubImage(u,oe);Qt=Ie.viewport,Wt===0&&(t.setRenderTargetTextures(v,Ie.colorTexture,Ie.depthStencilTexture),t.setRenderTarget(v))}let $t=P[Wt];$t===void 0&&($t=new Un,$t.layers.enable(Wt),$t.viewport=new Te,P[Wt]=$t),$t.matrix.fromArray(oe.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(oe.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Wt===0&&(D.matrix.copy($t.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),It===!0&&D.cameras.push($t)}const Ft=r.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const Wt=f.getDepthInformation(nt[0]);Wt&&Wt.isValid&&Wt.texture&&p.init(Wt,r.renderState)}if(Ft&&Ft.includes("camera-access")&&g){t.state.unbindTexture(),f=n.getBinding();for(let Wt=0;Wt<nt.length;Wt++){const oe=nt[Wt].camera;if(oe){let Qt=m[oe];Qt||(Qt=new R0,m[oe]=Qt);const $t=f.getCameraImage(oe);Qt.sourceTexture=$t}}}}for(let nt=0;nt<M.length;nt++){const It=w[nt],Ft=M[nt];It!==null&&Ft!==void 0&&Ft.update(It,st,c||a)}Ht&&Ht(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const Ut=new H0;Ut.setAnimationLoop(Kt),this.setAnimationLoop=function(K){Ht=K},this.dispose=function(){}}}const fT=new pe,$0=new Nt;$0.set(-1,0,0,0,1,0,0,0,1);function dT(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,k0(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,T,S,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=t.get(m),S=T.envMap,v=T.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=S*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const T=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pT(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(p(v),w=h(v),r[v.id]=w,v.addEventListener("dispose",T));const A=M.program;n.updateUBOMapping(v,A);const x=t.render.frame;s[v.id]!==x&&(u(v),s[v.id]=x)}function h(v){const M=f();v.__bindingPointIndex=M;const w=i.createBuffer(),A=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const M=r[v.id],w=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,b=w.length;x<b;x++){const R=w[x];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)d(R[P],x,P,A);else d(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,A){if(g(v,M,w,A)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){const D=b[P],B=m(D);_(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function _(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function g(v,M,w,A){const x=v.value,b=M+"_"+w;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{const R=A[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function p(v){const M=v.uniforms;let w=0;const A=16;for(let b=0,R=M.length;b<R;b++){const P=Array.isArray(M[b])?M[b]:[M[b]];for(let D=0,B=P.length;D<B;D++){const H=P[D],I=Array.isArray(H.value)?H.value:[H.value];for(let z=0,U=I.length;z<U;z++){const Y=I[z],J=m(Y),it=w%A,et=it%J.boundary,ft=it+et;w+=et,ft!==0&&A-ft<J.storage&&(w+=A-ft),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=w,w+=J.storage}}}const x=w%A;return x>0&&(w+=A-x),v.__size=w,v.__cache={},this}function m(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",v),M}function T(v){const M=v.target;M.removeEventListener("dispose",T);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function S(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:S}}const mT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ui=null;function _T(){return ui===null&&(ui=new Ev(mT,16,16,qr,Wi),ui.name="DFG_LUT",ui.minFilter=on,ui.magFilter=on,ui.wrapS=Fi,ui.wrapT=Fi,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class J0{constructor(t={}){const{canvas:e=jx(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Kn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=d,p=new Set([ff,uf,hf]),m=new Set([Kn,Ei,qa,Za,lf,cf]),T=new Uint32Array(4),S=new Int32Array(4),v=new L;let M=null,w=null;const A=[],x=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,B=null,H=null,I=null;this._outputColorSpace=sn;let z=0,U=0,Y=null,J=-1,it=null;const et=new Te,ft=new Te;let Ht=null;const Kt=new kt(0);let Ut=0,K=e.width,st=e.height,nt=1,It=null,Ft=null;const Rt=new Te(0,0,K,st),Ce=new Te(0,0,K,st);let Wt=!1;const oe=new w0;let Qt=!1,$t=!1;const Ie=new pe,Be=new L,We=new Te,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function Ne(){return Y===null?nt:1}let F=n;function _n(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${af}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",oi,!1),F===null){const O="webgl2";if(F=_n(O,E),F===null)throw _n(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw Xt("WebGLRenderer: "+E.message),E}let te,C,y,k,W,q,rt,lt,Z,Q,ct,Et,pt,ht,At,Pt,Ot,N,at,$,ut,xt,j;function bt(){te=new _b(F),te.init(),ut=new oT(F,te),C=new lb(F,te,t,ut),y=new sT(F,te),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),B=F.createFramebuffer(),H=F.createFramebuffer(),I=F.createFramebuffer(),k=new vb(F),W=new XE,q=new aT(F,te,y,W,C,ut,k),rt=new mb(R),lt=new by(F),xt=new ab(F,lt),Z=new gb(F,lt,k,xt),Q=new Mb(F,Z,lt,xt,k),N=new yb(F,C,q),At=new cb(W),ct=new WE(R,rt,te,C,xt,At),Et=new dT(R,W),pt=new qE,ht=new jE(te),Ot=new sb(R,rt,y,Q,_,l),Pt=new rT(R,Q,C),j=new pT(F,k,C,y),at=new ob(F,te,k),$=new xb(F,te,k),k.programs=ct.programs,R.capabilities=C,R.extensions=te,R.properties=W,R.renderLists=pt,R.shadowMap=Pt,R.state=y,R.info=k}bt(),g!==Kn&&(b=new bb(g,e.width,e.height,o,r,s));const Mt=new uT(R,F);this.xr=Mt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(K,st,!1))},this.getSize=function(E){return E.set(K,st)},this.setSize=function(E,O,X=!0){if(Mt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,st=O,e.width=Math.floor(E*nt),e.height=Math.floor(O*nt),X===!0&&(e.style.width=E+"px",e.style.height=O+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(K*nt,st*nt).floor()},this.setDrawingBufferSize=function(E,O,X){K=E,st=O,nt=X,e.width=Math.floor(E*X),e.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(g===Kn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(et)},this.getViewport=function(E){return E.copy(Rt)},this.setViewport=function(E,O,X,V){E.isVector4?Rt.set(E.x,E.y,E.z,E.w):Rt.set(E,O,X,V),y.viewport(et.copy(Rt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(Ce)},this.setScissor=function(E,O,X,V){E.isVector4?Ce.set(E.x,E.y,E.z,E.w):Ce.set(E,O,X,V),y.scissor(ft.copy(Ce).multiplyScalar(nt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(E){y.setScissorTest(Wt=E)},this.setOpaqueSort=function(E){It=E},this.setTransparentSort=function(E){Ft=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let V=0;if(E){let G=!1;if(Y!==null){const gt=Y.texture.format;G=p.has(gt)}if(G){const gt=Y.texture.type,yt=m.has(gt),_t=Ot.getClearColor(),St=Ot.getClearAlpha(),Tt=_t.r,Bt=_t.g,Vt=_t.b;yt?(T[0]=Tt,T[1]=Bt,T[2]=Vt,T[3]=St,F.clearBufferuiv(F.COLOR,0,T)):(S[0]=Tt,S[1]=Bt,S[2]=Vt,S[3]=St,F.clearBufferiv(F.COLOR,0,S))}else V|=F.COLOR_BUFFER_BIT}O&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",oi,!1),Ot.dispose(),pt.dispose(),ht.dispose(),W.dispose(),rt.dispose(),Q.dispose(),xt.dispose(),j.dispose(),ct.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Gf),Mt.removeEventListener("sessionend",Hf),Tr.stop()};function be(E){E.preventDefault(),kl("WebGLRenderer: Context Lost."),P=!0}function fe(){kl("WebGLRenderer: Context Restored."),P=!1;const E=k.autoReset,O=Pt.enabled,X=Pt.autoUpdate,V=Pt.needsUpdate,G=Pt.type;bt(),k.autoReset=E,Pt.enabled=O,Pt.autoUpdate=X,Pt.needsUpdate=V,Pt.type=G}function oi(E){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function li(E){const O=E.target;O.removeEventListener("dispose",li),Z_(O)}function Z_(E){K_(E),W.remove(E)}function K_(E){const O=W.get(E).programs;O!==void 0&&(O.forEach(function(X){ct.releaseProgram(X)}),E.isShaderMaterial&&ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,V,G,gt){O===null&&(O=Ke);const yt=G.isMesh&&G.matrixWorld.determinantAffine()<0,_t=Q_(E,O,X,V,G);y.setMaterial(V,yt);let St=X.index,Tt=1;if(V.wireframe===!0){if(St=Z.getWireframeAttribute(X),St===void 0)return;Tt=2}const Bt=X.drawRange,Vt=X.attributes.position;let wt=Bt.start*Tt,re=(Bt.start+Bt.count)*Tt;gt!==null&&(wt=Math.max(wt,gt.start*Tt),re=Math.min(re,(gt.start+gt.count)*Tt)),St!==null?(wt=Math.max(wt,0),re=Math.min(re,St.count)):Vt!=null&&(wt=Math.max(wt,0),re=Math.min(re,Vt.count));const Re=re-wt;if(Re<0||Re===1/0)return;xt.setup(G,V,_t,X,St);let Ee,le=at;if(St!==null&&(Ee=lt.get(St),le=$,le.setIndex(Ee)),G.isMesh)V.wireframe===!0?(y.setLineWidth(V.wireframeLinewidth*Ne()),le.setMode(F.LINES)):le.setMode(F.TRIANGLES);else if(G.isLine){let tn=V.linewidth;tn===void 0&&(tn=1),y.setLineWidth(tn*Ne()),G.isLineSegments?le.setMode(F.LINES):G.isLineLoop?le.setMode(F.LINE_LOOP):le.setMode(F.LINE_STRIP)}else G.isPoints?le.setMode(F.POINTS):G.isSprite&&le.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(te.get("WEBGL_multi_draw"))le.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const tn=G._multiDrawStarts,vt=G._multiDrawCounts,An=G._multiDrawCount,Jt=St?lt.get(St).bytesPerElement:1,Xn=W.get(V).currentProgram.getUniforms();for(let ci=0;ci<An;ci++)Xn.setValue(F,"_gl_DrawID",ci),le.render(tn[ci]/Jt,vt[ci])}else if(G.isInstancedMesh)le.renderInstances(wt,Re,G.count);else if(X.isInstancedBufferGeometry){const tn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,tn);le.renderInstances(wt,Re,vt)}else le.render(wt,Re)};function Vf(E,O,X){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,bo(E,O,X),E.side=yr,E.needsUpdate=!0,bo(E,O,X),E.side=pn):bo(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),w=ht.get(X),w.init(O),x.push(w),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const V=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const gt=G.material;if(gt)if(Array.isArray(gt))for(let yt=0;yt<gt.length;yt++){const _t=gt[yt];Vf(_t,X,G),V.add(_t)}else Vf(gt,X,G),V.add(gt)}),w=x.pop(),V},this.compileAsync=function(E,O,X=null){const V=this.compile(E,O,X);return new Promise(G=>{function gt(){if(V.forEach(function(yt){W.get(yt).currentProgram.isReady()&&V.delete(yt)}),V.size===0){G(E);return}setTimeout(gt,10)}te.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let hc=null;function $_(E){hc&&hc(E)}function Gf(){Tr.stop()}function Hf(){Tr.start()}const Tr=new H0;Tr.setAnimationLoop($_),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(E){hc=E,Mt.setAnimationLoop(E),E===null?Tr.stop():Tr.start()},Mt.addEventListener("sessionstart",Gf),Mt.addEventListener("sessionend",Hf),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(E,O);const X=Mt.enabled===!0&&Mt.isPresenting===!0,V=b!==null&&(Y===null||X)&&b.begin(R,Y);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(O),O=Mt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,O,Y),w=ht.get(E,x.length),w.init(O),w.state.textureUnits=q.getTextureUnits(),x.push(w),Ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),oe.setFromProjectionMatrix(Ie,yi,O.reversedDepth),$t=this.localClippingEnabled,Qt=At.init(this.clippingPlanes,$t),M=pt.get(E,A.length),M.init(),A.push(M),Mt.enabled===!0&&Mt.isPresenting===!0){const yt=R.xr.getDepthSensingMesh();yt!==null&&uc(yt,O,-1/0,R.sortObjects)}uc(E,O,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(It,Ft,O.reversedDepth),Se=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Se&&Ot.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&At.beginShadows();const G=w.state.shadowsArray;if(Pt.render(G,E,O),Qt===!0&&At.endShadows(),(V&&b.hasRenderPass())===!1){const yt=M.opaque,_t=M.transmissive;if(w.setupLights(),O.isArrayCamera){const St=O.cameras;if(_t.length>0)for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){const Vt=St[Tt];Xf(yt,_t,E,Vt)}Se&&Ot.render(E);for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){const Vt=St[Tt];Wf(M,E,Vt,Vt.viewport)}}else _t.length>0&&Xf(yt,_t,E,O),Se&&Ot.render(E),Wf(M,E,O)}Y!==null&&U===0&&(q.updateMultisampleRenderTarget(Y),q.updateRenderTargetMipmap(Y)),V&&b.end(R),E.isScene===!0&&E.onAfterRender(R,E,O),xt.resetDefaultState(),J=-1,it=null,x.pop(),x.length>0?(w=x[x.length-1],q.setTextureUnits(w.state.textureUnits),Qt===!0&&At.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,D!==null&&D.renderEnd()};function uc(E,O,X,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||oe.intersectsSprite(E)){V&&We.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);const yt=Q.update(E),_t=E.material;_t.visible&&M.push(E,yt,_t,X,We.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||oe.intersectsObject(E))){const yt=Q.update(E),_t=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),We.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),We.copy(yt.boundingSphere.center)),We.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(_t)){const St=yt.groups;for(let Tt=0,Bt=St.length;Tt<Bt;Tt++){const Vt=St[Tt],wt=_t[Vt.materialIndex];wt&&wt.visible&&M.push(E,yt,wt,X,We.z,Vt)}}else _t.visible&&M.push(E,yt,_t,X,We.z,null)}}const gt=E.children;for(let yt=0,_t=gt.length;yt<_t;yt++)uc(gt[yt],O,X,V)}function Wf(E,O,X,V){const{opaque:G,transmissive:gt,transparent:yt}=E;w.setupLightsView(X),Qt===!0&&At.setGlobalState(R.clippingPlanes,X),V&&y.viewport(et.copy(V)),G.length>0&&So(G,O,X),gt.length>0&&So(gt,O,X),yt.length>0&&So(yt,O,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Xf(E,O,X,V){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const wt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Si(1,1,{generateMipmaps:!0,type:wt?Wi:Kn,minFilter:Fr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace})}const gt=w.state.transmissionRenderTarget[V.id],yt=V.viewport||et;gt.setSize(yt.z*R.transmissionResolutionScale,yt.w*R.transmissionResolutionScale);const _t=R.getRenderTarget(),St=R.getActiveCubeFace(),Tt=R.getActiveMipmapLevel();R.setRenderTarget(gt),R.getClearColor(Kt),Ut=R.getClearAlpha(),Ut<1&&R.setClearColor(16777215,.5),R.clear(),Se&&Ot.render(X);const Bt=R.toneMapping;R.toneMapping=Mi;const Vt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Qt===!0&&At.setGlobalState(R.clippingPlanes,V),So(E,X,V),q.updateMultisampleRenderTarget(gt),q.updateRenderTargetMipmap(gt),te.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let re=0,Re=O.length;re<Re;re++){const Ee=O[re],{object:le,geometry:tn,material:vt,group:An}=Ee;if(vt.side===pn&&le.layers.test(V.layers)){const Jt=vt.side;vt.side=cn,vt.needsUpdate=!0,Yf(le,X,V,tn,vt,An),vt.side=Jt,vt.needsUpdate=!0,wt=!0}}wt===!0&&(q.updateMultisampleRenderTarget(gt),q.updateRenderTargetMipmap(gt))}R.setRenderTarget(_t,St,Tt),R.setClearColor(Kt,Ut),Vt!==void 0&&(V.viewport=Vt),R.toneMapping=Bt}function So(E,O,X){const V=O.isScene===!0?O.overrideMaterial:null;for(let G=0,gt=E.length;G<gt;G++){const yt=E[G],{object:_t,geometry:St,group:Tt}=yt;let Bt=yt.material;Bt.allowOverride===!0&&V!==null&&(Bt=V),_t.layers.test(X.layers)&&Yf(_t,O,X,St,Bt,Tt)}}function Yf(E,O,X,V,G,gt){E.onBeforeRender(R,O,X,V,G,gt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(R,O,X,V,E,gt),G.transparent===!0&&G.side===pn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,R.renderBufferDirect(X,O,V,G,E,gt),G.side=yr,G.needsUpdate=!0,R.renderBufferDirect(X,O,V,G,E,gt),G.side=pn):R.renderBufferDirect(X,O,V,G,E,gt),E.onAfterRender(R,O,X,V,G,gt)}function bo(E,O,X){O.isScene!==!0&&(O=Ke);const V=W.get(E),G=w.state.lights,gt=w.state.shadowsArray,yt=G.state.version,_t=ct.getParameters(E,G.state,gt,O,X,w.state.lightProbeGridArray),St=ct.getProgramCacheKey(_t);let Tt=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const Bt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=rt.get(E.envMap||V.environment,Bt),V.envMapRotation=V.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",li),Tt=new Map,V.programs=Tt);let Vt=Tt.get(St);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===yt)return Zf(E,_t),Vt}else _t.uniforms=ct.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,X,_t),E.onBeforeCompile(_t,R),Vt=ct.acquireProgram(_t,St),Tt.set(St,Vt),V.uniforms=_t.uniforms;const wt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=At.uniform),Zf(E,_t),V.needsLights=tg(E),V.lightsStateVersion=yt,V.needsLights&&(wt.ambientLightColor.value=G.state.ambient,wt.lightProbe.value=G.state.probe,wt.directionalLights.value=G.state.directional,wt.directionalLightShadows.value=G.state.directionalShadow,wt.spotLights.value=G.state.spot,wt.spotLightShadows.value=G.state.spotShadow,wt.rectAreaLights.value=G.state.rectArea,wt.ltc_1.value=G.state.rectAreaLTC1,wt.ltc_2.value=G.state.rectAreaLTC2,wt.pointLights.value=G.state.point,wt.pointLightShadows.value=G.state.pointShadow,wt.hemisphereLights.value=G.state.hemi,wt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,wt.spotLightMatrix.value=G.state.spotLightMatrix,wt.spotLightMap.value=G.state.spotLightMap,wt.pointShadowMatrix.value=G.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Vt,V.uniformsList=null,Vt}function qf(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ml.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Zf(E,O){const X=W.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function J_(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let X=0,V=E.length;X<V;X++){const G=E[X];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function Q_(E,O,X,V,G){O.isScene!==!0&&(O=Ke),q.resetTextureUnits();const gt=O.fog,yt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,_t=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:qt.workingColorSpace,St=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Tt=rt.get(V.envMap||yt,St),Bt=V.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),wt=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Re=!!X.morphAttributes.color;let Ee=Mi;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ee=R.toneMapping);const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,tn=le!==void 0?le.length:0,vt=W.get(V),An=w.state.lights;if(Qt===!0&&($t===!0||E!==it)){const de=E===it&&V.id===J;At.setState(V,E,de)}let Jt=!1;V.version===vt.__version?(vt.needsLights&&vt.lightsStateVersion!==An.state.version||vt.outputColorSpace!==_t||G.isBatchedMesh&&vt.batching===!1||!G.isBatchedMesh&&vt.batching===!0||G.isBatchedMesh&&vt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&vt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&vt.instancing===!1||!G.isInstancedMesh&&vt.instancing===!0||G.isSkinnedMesh&&vt.skinning===!1||!G.isSkinnedMesh&&vt.skinning===!0||G.isInstancedMesh&&vt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&vt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&vt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&vt.instancingMorph===!1&&G.morphTexture!==null||vt.envMap!==Tt||V.fog===!0&&vt.fog!==gt||vt.numClippingPlanes!==void 0&&(vt.numClippingPlanes!==At.numPlanes||vt.numIntersection!==At.numIntersection)||vt.vertexAlphas!==Bt||vt.vertexTangents!==Vt||vt.morphTargets!==wt||vt.morphNormals!==re||vt.morphColors!==Re||vt.toneMapping!==Ee||vt.morphTargetsCount!==tn||!!vt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Jt=!0):(Jt=!0,vt.__version=V.version);let Xn=vt.currentProgram;Jt===!0&&(Xn=bo(V,O,G),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Xn,vt));let ci=!1,qi=!1,ns=!1;const ce=Xn.getUniforms(),Pe=vt.uniforms;if(y.useProgram(Xn.program)&&(ci=!0,qi=!0,ns=!0),V.id!==J&&(J=V.id,qi=!0),vt.needsLights){const de=J_(w.state.lightProbeGridArray,G);vt.lightProbeGrid!==de&&(vt.lightProbeGrid=de,qi=!0)}if(ci||it!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(F,"projectionMatrix",E.projectionMatrix),ce.setValue(F,"viewMatrix",E.matrixWorldInverse);const Ki=ce.map.cameraPosition;Ki!==void 0&&Ki.setValue(F,Be.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&ce.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ce.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),it!==E&&(it=E,qi=!0,ns=!0)}if(vt.needsLights&&(An.state.directionalShadowMap.length>0&&ce.setValue(F,"directionalShadowMap",An.state.directionalShadowMap,q),An.state.spotShadowMap.length>0&&ce.setValue(F,"spotShadowMap",An.state.spotShadowMap,q),An.state.pointShadowMap.length>0&&ce.setValue(F,"pointShadowMap",An.state.pointShadowMap,q)),G.isSkinnedMesh){ce.setOptional(F,G,"bindMatrix"),ce.setOptional(F,G,"bindMatrixInverse");const de=G.skeleton;de&&(de.boneTexture===null&&de.computeBoneTexture(),ce.setValue(F,"boneTexture",de.boneTexture,q))}G.isBatchedMesh&&(ce.setOptional(F,G,"batchingTexture"),ce.setValue(F,"batchingTexture",G._matricesTexture,q),ce.setOptional(F,G,"batchingIdTexture"),ce.setValue(F,"batchingIdTexture",G._indirectTexture,q),ce.setOptional(F,G,"batchingColorTexture"),G._colorsTexture!==null&&ce.setValue(F,"batchingColorTexture",G._colorsTexture,q));const Zi=X.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&N.update(G,X,Xn),(qi||vt.receiveShadow!==G.receiveShadow)&&(vt.receiveShadow=G.receiveShadow,ce.setValue(F,"receiveShadow",G.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=_T()),qi){if(ce.setValue(F,"toneMappingExposure",R.toneMappingExposure),vt.needsLights&&j_(Pe,ns),gt&&V.fog===!0&&Et.refreshFogUniforms(Pe,gt),Et.refreshMaterialUniforms(Pe,V,nt,st,w.state.transmissionRenderTarget[E.id]),vt.needsLights&&vt.lightProbeGrid){const de=vt.lightProbeGrid;Pe.probesSH.value=de.texture,Pe.probesMin.value.copy(de.boundingBox.min),Pe.probesMax.value.copy(de.boundingBox.max),Pe.probesResolution.value.copy(de.resolution)}ml.upload(F,qf(vt),Pe,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ml.upload(F,qf(vt),Pe,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ce.setValue(F,"center",G.center),ce.setValue(F,"modelViewMatrix",G.modelViewMatrix),ce.setValue(F,"normalMatrix",G.normalMatrix),ce.setValue(F,"modelMatrix",G.matrixWorld),V.uniformsGroups!==void 0){const de=V.uniformsGroups;for(let Ki=0,is=de.length;Ki<is;Ki++){const Kf=de[Ki];j.update(Kf,Xn),j.bind(Kf,Xn)}}return Xn}function j_(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function tg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(E,O,X){const V=W.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=O,W.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:X,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const X=W.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,X=0){Y=E,z=O,U=X;let V=null,G=!1,gt=!1;if(E){const _t=W.get(E);if(_t.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,_t.__webglFramebuffer),et.copy(E.viewport),ft.copy(E.scissor),Ht=E.scissorTest,y.viewport(et),y.scissor(ft),y.setScissorTest(Ht),J=-1;return}else if(_t.__webglFramebuffer===void 0)q.setupRenderTarget(E);else if(_t.__hasExternalTextures)q.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Bt=E.depthTexture;if(_t.__boundDepthTexture!==Bt){if(Bt!==null&&W.has(Bt)&&(E.width!==Bt.image.width||E.height!==Bt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(E)}}const St=E.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(gt=!0);const Tt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[O])?V=Tt[O][X]:V=Tt[O],G=!0):E.samples>0&&q.useMultisampledRTT(E)===!1?V=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?V=Tt[X]:V=Tt,et.copy(E.viewport),ft.copy(E.scissor),Ht=E.scissorTest}else et.copy(Rt).multiplyScalar(nt).floor(),ft.copy(Ce).multiplyScalar(nt).floor(),Ht=Wt;if(X!==0&&(V=B),y.bindFramebuffer(F.FRAMEBUFFER,V)&&y.drawBuffers(E,V),y.viewport(et),y.scissor(ft),y.setScissorTest(Ht),G){const _t=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,_t.__webglTexture,X)}else if(gt){const _t=O;for(let St=0;St<E.textures.length;St++){const Tt=W.get(E.textures[St]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+St,Tt.__webglTexture,X,_t)}}else if(E!==null&&X!==0){const _t=W.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_t.__webglTexture,X)}J=-1},this.readRenderTargetPixels=function(E,O,X,V,G,gt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){y.bindFramebuffer(F.FRAMEBUFFER,St);try{const Tt=E.textures[_t],Bt=Tt.format,Vt=Tt.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Bt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Vt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-V&&X>=0&&X<=E.height-G&&F.readPixels(O,X,V,G,ut.convert(Bt),ut.convert(Vt),gt)}finally{const Tt=Y!==null?W.get(Y).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,V,G,gt,yt,_t=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St)if(O>=0&&O<=E.width-V&&X>=0&&X<=E.height-G){y.bindFramebuffer(F.FRAMEBUFFER,St);const Tt=E.textures[_t],Bt=Tt.format,Vt=Tt.type;if(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.bufferData(F.PIXEL_PACK_BUFFER,gt.byteLength,F.STREAM_READ),F.readPixels(O,X,V,G,ut.convert(Bt),ut.convert(Vt),0);const re=Y!==null?W.get(Y).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,re);const Re=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await tv(F,Re,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,wt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,gt),F.deleteBuffer(wt),F.deleteSync(Re),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){const V=Math.pow(2,-X),G=Math.floor(E.image.width*V),gt=Math.floor(E.image.height*V),yt=O!==null?O.x:0,_t=O!==null?O.y:0;q.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,yt,_t,G,gt),y.unbindTexture()},this.copyTextureToTexture=function(E,O,X=null,V=null,G=0,gt=0){let yt,_t,St,Tt,Bt,Vt,wt,re,Re;const Ee=E.isCompressedTexture?E.mipmaps[gt]:E.image;if(X!==null)yt=X.max.x-X.min.x,_t=X.max.y-X.min.y,St=X.isBox3?X.max.z-X.min.z:1,Tt=X.min.x,Bt=X.min.y,Vt=X.isBox3?X.min.z:0;else{const Pe=Math.pow(2,-G);yt=Math.floor(Ee.width*Pe),_t=Math.floor(Ee.height*Pe),E.isDataArrayTexture?St=Ee.depth:E.isData3DTexture?St=Math.floor(Ee.depth*Pe):St=1,Tt=0,Bt=0,Vt=0}V!==null?(wt=V.x,re=V.y,Re=V.z):(wt=0,re=0,Re=0);const le=ut.convert(O.format),tn=ut.convert(O.type);let vt;O.isData3DTexture?(q.setTexture3D(O,0),vt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(q.setTexture2DArray(O,0),vt=F.TEXTURE_2D_ARRAY):(q.setTexture2D(O,0),vt=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const An=y.getParameter(F.UNPACK_ROW_LENGTH),Jt=y.getParameter(F.UNPACK_IMAGE_HEIGHT),Xn=y.getParameter(F.UNPACK_SKIP_PIXELS),ci=y.getParameter(F.UNPACK_SKIP_ROWS),qi=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Tt),y.pixelStorei(F.UNPACK_SKIP_ROWS,Bt),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);const ns=E.isDataArrayTexture||E.isData3DTexture,ce=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Pe=W.get(E),Zi=W.get(O),de=W.get(Pe.__renderTarget),Ki=W.get(Zi.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,de.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let is=0;is<St;is++)ns&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(E).__webglTexture,G,Vt+is),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(O).__webglTexture,gt,Re+is)),F.blitFramebuffer(Tt,Bt,yt,_t,wt,re,yt,_t,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||W.has(E)){const Pe=W.get(E),Zi=W.get(O);y.bindFramebuffer(F.READ_FRAMEBUFFER,H),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,I);for(let de=0;de<St;de++)ns?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,G,Vt+de):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,G),ce?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zi.__webglTexture,gt,Re+de):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zi.__webglTexture,gt),G!==0?F.blitFramebuffer(Tt,Bt,yt,_t,wt,re,yt,_t,F.COLOR_BUFFER_BIT,F.NEAREST):ce?F.copyTexSubImage3D(vt,gt,wt,re,Re+de,Tt,Bt,yt,_t):F.copyTexSubImage2D(vt,gt,wt,re,Tt,Bt,yt,_t);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ce?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(vt,gt,wt,re,Re,yt,_t,St,le,tn,Ee.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(vt,gt,wt,re,Re,yt,_t,St,le,Ee.data):F.texSubImage3D(vt,gt,wt,re,Re,yt,_t,St,le,tn,Ee):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,gt,wt,re,yt,_t,le,tn,Ee.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,gt,wt,re,Ee.width,Ee.height,le,Ee.data):F.texSubImage2D(F.TEXTURE_2D,gt,wt,re,yt,_t,le,tn,Ee);y.pixelStorei(F.UNPACK_ROW_LENGTH,An),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Xn),y.pixelStorei(F.UNPACK_SKIP_ROWS,ci),y.pixelStorei(F.UNPACK_SKIP_IMAGES,qi),gt===0&&O.generateMipmaps&&F.generateMipmap(vt),y.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?q.setTextureCube(E,0):E.isData3DTexture?q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?q.setTexture2DArray(E,0):q.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){z=0,U=0,Y=null,y.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Ap={type:"change"},bf={type:"start"},Q0={type:"end"},nl=new uo,Cp=new nr,gT=Math.cos(70*iv.DEG2RAD),ze=new L,gn=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sh=1e-6;class xT extends My{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Mr,this._lastTargetPosition=new L,this._quat=new Mr().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ep,this._sphericalDelta=new ep,this._scale=1,this._panOffset=new L,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new L,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=yT.bind(this),this._onPointerDown=vT.bind(this),this._onPointerUp=MT.bind(this),this._onContextMenu=CT.bind(this),this._onMouseWheel=ET.bind(this),this._onKeyDown=TT.bind(this),this._onTouchStart=wT.bind(this),this._onTouchMove=AT.bind(this),this._onMouseDown=ST.bind(this),this._onMouseMove=bT.bind(this),this._interceptControlDown=RT.bind(this),this._interceptControlUp=PT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ap),this.update(),this.state=ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ze.copy(e).sub(this.target),ze.applyQuaternion(this._quat),this._spherical.setFromVector3(ze),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),r<-Math.PI?r+=gn:r>Math.PI&&(r-=gn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ze.setFromSpherical(this._spherical),ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ze.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<gT?this.object.lookAt(this.target):(Cp.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(Cp,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sh||this._lastTargetPosition.distanceToSquared(this.target)>sh?(this.dispatchEvent(Ap),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ze.setFromMatrixColumn(e,0),ze.multiplyScalar(-t),this._panOffset.add(ze)}_panUp(t,e){this.screenSpacePanning===!0?ze.setFromMatrixColumn(e,1):(ze.setFromMatrixColumn(e,0),ze.crossVectors(this.object.up,ze)),ze.multiplyScalar(t),this._panOffset.add(ze)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ze.copy(r).sub(this.target);let s=ze.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function vT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function yT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function MT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Q0),this.state=ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ST(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case Us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case Us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(bf)}function bT(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ET(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(bf),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Q0))}function TT(i){this.enabled!==!1&&this._handleKeyDown(i)}function wT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(bf)}function AT(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function CT(i){this.enabled!==!1&&i.preventDefault()}function RT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function PT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}Dt.registerPlugin({name:"drawn",init(i,t){const e=i.getTotalLength();i.style.strokeDasharray=e,this.target=i,this.len=e,this.value=t},render(i,t){t.target.style.strokeDashoffset=t.len*(1-t.value*i)}});const tt=i=>document.getElementById(i),Br=tt("tree"),Ct=Br.getContext("2d"),DT=tt("wish"),ea=tt("hero"),bu=tt("eyebrow"),Eu=tt("hint"),Rp=tt("motes"),Dn=tt("target"),Es=tt("targetHeart"),Ia=Dn.querySelector(".heart__glow"),j0=tt("aim"),dn=tt("archery"),LT=tt("bow"),In=tt("arrow"),IT=tt("strL"),NT=tt("strR"),t_=tt("serving"),rr=tt("flood"),Bs=tt("field"),Pp=tt("camera"),Dp=tt("fgrid"),Tu=tt("kSideLeft"),wu=tt("kSideRight"),ah=tt("kParticles"),Au=tt("kEyebrow"),Cu=tt("kSub"),_l=tt("barTop"),gl=tt("barBot"),Ru=tt("uline").querySelector(".uline__path"),zr=tt("bloom");function jr(i){for(let t=1;t<=6;t++){const e=tt(`navStep${t}`);e&&e.classList.toggle("is-active",t===i)}}function Ef(i){const t=tt("timelineNav"),e=tt("timelineNavToggle");if(!t)return;const n=i!==void 0?i:!t.classList.contains("is-open");t.classList.toggle("is-open",n),e&&e.setAttribute("aria-expanded",n?"true":"false")}const e_=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Tf=new URLSearchParams(location.search).has("record");Tf&&(window.bdayCues=[]);let Pu=0;function Ni(i){Tf&&Pu&&window.bdayCues.push({cue:i,t:(performance.now()-Pu)/1e3})}const dt=(i,t)=>i+Math.random()*(t-i),Xl=i=>i[Math.random()*i.length|0],pr=(i,t,e)=>i<t?t:i>e?e:i,mr=i=>i<0?0:i>1?1:i,xl=(i,t,e)=>i+(t-i)*e,n_=i=>1-Math.pow(1-i,3),UT=i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2);function FT(i,t){const e=parseInt(i.slice(1),16),n=pr((e>>16)+t,0,255),r=pr((e>>8&255)+t,0,255),s=pr((e&255)+t,0,255);return`rgb(${n|0},${r|0},${s|0})`}const Yl=[{c0:"#ffe1ec",c1:"#ff80aa"},{c0:"#ffd0e0",c1:"#f4577f"},{c0:"#ffc4d2",c1:"#e23b67"},{c0:"#ffd9c4",c1:"#ff8a5b"},{c0:"#ffeec2",c1:"#f6b13e"},{c0:"#ffd2e6",c1:"#e84d9a"}],Fe={trunkStart:.1,branchSpan:1.8,bloomT0:1.25,bloomSpan:2,petalT0:2.45,noteStart:.45,done:4.6},De=168;function zs(i,t,e,n,r){i.beginPath(),i.moveTo(t,e+r*.28),i.bezierCurveTo(t,e,t-n*.5,e,t-n*.5,e+r*.28),i.bezierCurveTo(t-n*.5,e+r*.6,t-n*.16,e+r*.8,t,e+r),i.bezierCurveTo(t+n*.16,e+r*.8,t+n*.5,e+r*.6,t+n*.5,e+r*.28),i.bezierCurveTo(t+n*.5,e,t,e,t,e+r*.28),i.closePath()}function Lp({c0:i,c1:t},e){const n=document.createElement("canvas");n.width=n.height=De;const r=n.getContext("2d"),s=De*.62,a=De*.58,o=De/2,l=De*.17;r.save(),r.shadowColor="rgba(150,38,72,0.32)",r.shadowBlur=De*.085,r.shadowOffsetY=De*.05,r.fillStyle=t,zs(r,o,l,s,a),r.fill(),r.restore();const c=r.createRadialGradient(o-s*.2,l+a*.2,a*.04,o,l+a*.42,a*.92);c.addColorStop(0,i),c.addColorStop(.55,t),c.addColorStop(1,FT(t,-26)),zs(r,o,l,s,a),r.fillStyle=c,r.fill(),r.save(),zs(r,o,l,s,a),r.clip();const h=r.createLinearGradient(0,l,0,l+a);if(h.addColorStop(0,"rgba(255,255,255,0)"),h.addColorStop(.65,"rgba(110,16,46,0)"),h.addColorStop(1,"rgba(110,16,46,0.26)"),r.fillStyle=h,r.fillRect(0,0,De,De),r.globalAlpha=.55,r.fillStyle="#ffffff",r.beginPath(),r.ellipse(o-s*.15,l+a*.24,s*.17,a*.11,-.5,0,Math.PI*2),r.fill(),r.restore(),!e)return n;const f=document.createElement("canvas");f.width=f.height=De;const u=f.getContext("2d");return u.filter="blur(2.6px)",u.drawImage(n,0,0),u.filter="none",u.globalCompositeOperation="source-atop",u.globalAlpha=.42,u.fillStyle="#fff3ea",u.fillRect(0,0,De,De),f}function oh(i){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d"),r=n.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);return r.addColorStop(0,`rgba(${i},0.9)`),r.addColorStop(.45,`rgba(${i},0.22)`),r.addColorStop(1,`rgba(${i},0)`),n.fillStyle=r,n.fillRect(0,0,128,128),e}function OT(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=64/2,r=e.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,"rgba(255,255,255,0.95)"),r.addColorStop(.25,"rgba(255,236,200,0.5)"),r.addColorStop(1,"rgba(255,236,200,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,n,n,0,6.2832),e.fill(),e.fillStyle="rgba(255,255,255,0.95)",e.translate(n,n);for(let s=0;s<2;s++)e.beginPath(),e.moveTo(0,-n),e.quadraticCurveTo(0,0,n,0),e.quadraticCurveTo(0,0,0,n),e.quadraticCurveTo(0,0,-n,0),e.quadraticCurveTo(0,0,0,-n),e.fill(),e.rotate(Math.PI/4),e.scale(.5,.5);return t}let yn={crisp:[],soft:[]},i_=[],r_=null;const BT=63,zT=Array.from({length:BT},(i,t)=>`./memories/memory-${String(t+1).padStart(2,"0")}.jpg`);let mn=[],s_=[];const Ip=new Map;function kT(i){if(!i||!i.complete||i.naturalWidth===0)return null;const t=document.createElement("canvas");t.width=t.height=De;const e=t.getContext("2d"),n=De*.64,r=De*.6,s=De/2,a=De*.16;return e.save(),e.shadowColor="rgba(180,40,80,0.42)",e.shadowBlur=De*.1,e.shadowOffsetY=De*.06,e.fillStyle="#ff6f97",zs(e,s,a,n,r),e.fill(),e.restore(),e.save(),zs(e,s,a,n,r),e.clip(),e.drawImage(i,s-n*.5,a,n,r),e.fillStyle="rgba(255,100,150,0.12)",e.fillRect(0,0,De,De),e.restore(),e.save(),zs(e,s,a,n,r),e.strokeStyle="rgba(255,255,255,0.92)",e.lineWidth=3.5,e.stroke(),e.fillStyle="rgba(255,255,255,0.6)",e.beginPath(),e.ellipse(s-n*.15,a+r*.24,n*.17,r*.11,-.5,0,Math.PI*2),e.fill(),e.restore(),t}function Du(i){if(!(!i||!i.complete||i.naturalWidth===0)&&!Ip.has(i.src)){const t=kT(i);t&&(Ip.set(i.src,t),mn.push(t))}}function VT(){zT.forEach(i=>{const t=new Image;t.onload=()=>{Du(t)},t.src=i,s_.push(t),t.complete&&Du(t)})}VT();function GT(){yn={crisp:Yl.map(i=>Lp(i,!1)),soft:Yl.map(i=>Lp(i,!0))},i_=[oh("255,224,188"),oh("255,196,214"),oh("255,238,210")],r_=OT(),s_.forEach(i=>Du(i))}function _o(i,t,e,n,r,s){i&&(Ct.save(),Ct.translate(t,e),r&&Ct.rotate(r),Ct.globalAlpha=s,Ct.drawImage(i,-n*.5,-n*.47,n,n),Ct.restore())}let a_=null;function HT(){const i=[];let t=1e9,e=-1e9,n=1e9,r=-1e9;for(let c=0;c<=160;c++){const h=c/160*Math.PI*2,f=16*Math.pow(Math.sin(h),3),u=13*Math.cos(h)-5*Math.cos(2*h)-2*Math.cos(3*h)-Math.cos(4*h);i.push([f,u]),f<t&&(t=f),f>e&&(e=f),u<n&&(n=u),u>r&&(r=u)}const s=(t+e)/2,a=(n+r)/2,o=(e-t)/2,l=(r-n)/2;a_=i.map(([c,h])=>[(c-s)/o,(h-a)/l])}function Np(i,t){let e=!1;const n=a_;for(let r=0,s=n.length-1;r<n.length;s=r++){const a=n[r][0],o=n[r][1],l=n[s][0],c=n[s][1];o>t!=c>t&&i<(l-a)*(t-o)/(c-o)+a&&(e=!e)}return e}let jt=0,Yt=0,ma=1,ii=0,Ii=0,il=0,Pn=0,wf=0,Ts=[],si=[],Na=[],ks=[],Lu=[],Iu=[],ws=[],As=null,Sa=null,vl=null;const Up=(i,t)=>{const e=1-t,n=e*e,r=2*e*t,s=t*t;return{x:n*i.x1+r*i.cx+s*i.x2,y:n*i.y1+r*i.cy+s*i.y2}};function WT(i,t,e,n,r){const s=Ct.createLinearGradient(i,t,e,n);return s.addColorStop(0,`hsl(348 26% ${26+r*3}%)`),s.addColorStop(1,`hsl(346 24% ${40+r*5}%)`),s}function Af(){Ts=[],si=[],Na=[],ks=[],ws=[],Lu=[],Iu=[],HT();const i=jt/Yt>1.2;ii=jt*(i?.67:.52),Ii=Yt*(i?.38:.35),Pn=Math.min(Yt*(i?.31:.28),jt*(i?.27:.34)),il=Pn*1.15,wf=Yt*.93,As=Ct.createLinearGradient(0,0,0,Yt),As.addColorStop(0,"#fff3e9"),As.addColorStop(.46,"#ffe7d6"),As.addColorStop(.78,"#fcd9c4"),As.addColorStop(1,"#f3c4b5"),Sa=Ct.createRadialGradient(ii,Ii,Pn*.1,ii,Ii,Pn*1.55),Sa.addColorStop(0,"rgba(255,219,170,0.6)"),Sa.addColorStop(.5,"rgba(255,170,150,0.2)"),Sa.addColorStop(1,"rgba(255,170,150,0)"),vl=Ct.createRadialGradient(ii,Yt*1.02,Pn*.2,ii,Yt*1.02,Pn*1.6),vl.addColorStop(0,"rgba(255,205,165,0.5)"),vl.addColorStop(1,"rgba(255,205,165,0)");for(let S=0;S<11;S++)Lu.push({x:dt(0,jt),y:dt(0,Yt),r:dt(jt*.05,jt*.17),vy:dt(-6,-16),drift:dt(-.3,.3),phase:dt(0,6.28),alpha:dt(.05,.13),sprite:Xl(i_)});const t=i?18:15;for(let S=0;S<t;S++){const v=Math.random();Iu.push({x:dt(0,jt),y:dt(-Yt*.1,Yt*1.1),depth:v,idx:Math.random()*Yl.length|0,box:xl(Math.min(jt,Yt)*.025,Math.min(jt,Yt)*.075,v),vy:xl(7,20,v),sway:dt(8,22),phase:dt(0,6.28),rot:dt(-.4,.4),vrot:dt(-.5,.5),baseA:xl(.16,.5,v),soft:v<.45})}const e=ii,n=Yt*1,r=Ii+Pn*.62,s=Math.max(9,jt*.024),a=Pn*.6,o=(S,v,M=.9)=>Np((S-ii)/(il*M),(Ii-v)/(Pn*M));function l(S,v,M,w,A,x,b){let R=S+Math.cos(M)*w,P=v+Math.sin(M)*w,D=!1;if(!o(R,P)){let Y=0,J=1;for(let it=0;it<12;it++){const et=(Y+J)/2;o(S+Math.cos(M)*w*et,v+Math.sin(M)*w*et)?Y=et:J=et}R=S+Math.cos(M)*w*Y,P=v+Math.sin(M)*w*Y,D=!0}const B=(S+R)/2,H=(v+P)/2,I=M+Math.PI/2,z=dt(-1,1)*w*.12,U=A*.66;return Ts.push({x1:S,y1:v,cx:B+Math.cos(I)*z,cy:H+Math.sin(I)*z,x2:R,y2:P,w0:A,w1:U,t0:b,dur:Math.max(.14,.32-x*.03),depth:x,grad:WT(S,v,R,P,x)}),{ex:R,ey:P,w1:U,clipped:D}}function c(S,v,M,w,A,x,b){const R=l(S,v,M,w,A,x,b);if(R.clipped||x>=6||w<Pn*.06)return;const P=b+(.32-x*.03)*.6,D=Math.random()<.55?2:3;for(let B=0;B<D;B++){const H=.6*(B-(D-1)/2)+dt(-.22,.22),I=-.06+dt(-.05,.05);c(R.ex,R.ey,M+H+I,w*dt(.74,.84),R.w1,x+1,P+B*.03)}}l(e,n,-Math.PI/2,n-r,s,0,Fe.trunkStart),Ts[0].dur=.55;const h=Fe.trunkStart+.36,f=3;for(let S=0;S<f;S++){const v=-Math.PI/2+.62*(S-(f-1)/2)+dt(-.12,.12);c(e,r,v,a,s*.7,1,h+S*.05)}const u=Ts.reduce((S,v)=>Math.max(S,v.t0+v.dur),0),d=(Fe.branchSpan-Fe.trunkStart)/(u-Fe.trunkStart);for(const S of Ts)S.t0=Fe.trunkStart+(S.t0-Fe.trunkStart)*d;const _=Math.round(pr(il*Pn/56,280,480)),g=pr(Math.min(jt,Yt)*.115,30,74);let p=0,m=0;const T=Math.min(mn.length,63);for(;si.length<_&&p<_*50;){p++;const S=dt(-1.06,1.06),v=dt(-1.06,1.06);if(!Np(S,v))continue;const M=ii+S*il,w=Ii-v*Pn,A=mr(Math.hypot(S,v+1)/2.4),x=Fe.bloomT0+A*(Fe.bloomSpan*.82)+dt(0,Fe.bloomSpan*.18),b=Math.random()<.35,R=!b&&mn.length>0&&(m<T||Math.random()<.45),P=m%(mn.length||1);R&&m++,si.push({x:M,y:w,idx:Math.random()*Yl.length|0,soft:b,isPhoto:R,photoIdx:P,box:g*(R?dt(1.18,1.42):b?dt(.6,.85):dt(.78,1.12)),rot:dt(-.55,.55),sway:dt(0,6.28),t0:x})}si.sort((S,v)=>S.soft===v.soft?S.y-v.y:S.soft?-1:1)}function o_(){Ct.globalAlpha=1,Ct.fillStyle=As,Ct.fillRect(0,0,jt,Yt),Ct.save(),Ct.globalCompositeOperation="lighter",Ct.globalAlpha=1,Ct.fillStyle=vl,Ct.fillRect(0,0,jt,Yt),Ct.restore()}function l_(i,t){if(t<=0)return;Ct.save(),Ct.globalCompositeOperation="lighter";const e=ii,n=Ii-Pn*.35,r=Math.hypot(jt,Yt)*1.1,s=9,a=Math.sin(i*.07)*.18;for(let o=0;o<s;o++){const l=-Math.PI/2+a+(o-(s-1)/2)*.2,c=.035+.02*(.5+.5*Math.sin(i*.5+o*1.7)),h=l-c,f=l+c,u=Ct.createLinearGradient(e,n,e+Math.cos(l)*r,n+Math.sin(l)*r);u.addColorStop(0,`rgba(255,232,190,${.1*t})`),u.addColorStop(.5,`rgba(255,214,170,${.05*t})`),u.addColorStop(1,"rgba(255,214,170,0)"),Ct.fillStyle=u,Ct.beginPath(),Ct.moveTo(e,n),Ct.lineTo(e+Math.cos(h)*r,n+Math.sin(h)*r),Ct.lineTo(e+Math.cos(f)*r,n+Math.sin(f)*r),Ct.closePath(),Ct.fill()}Ct.restore()}function c_(i){const t=mr((i-Fe.bloomT0)/(Fe.bloomSpan*.9));t<=0||(Ct.save(),Ct.globalAlpha=t,Ct.globalCompositeOperation="lighter",Ct.fillStyle=Sa,Ct.fillRect(0,0,jt,Yt),Ct.restore())}function h_(i,t){Ct.save(),Ct.globalCompositeOperation="lighter";for(const e of Lu)e.y+=e.vy*t,e.x+=Math.sin(i*.3+e.phase)*e.drift,e.y<-e.r&&(e.y=Yt+e.r,e.x=dt(0,jt)),Ct.globalAlpha=e.alpha,Ct.drawImage(e.sprite,e.x-e.r,e.y-e.r,e.r*2,e.r*2);Ct.restore()}function ql(i,t,e){const n=mr((i-.2)/1.4);if(!(n<=0))for(const r of Iu)r.depth>=.6===e&&(r.y-=r.vy*t,r.x+=Math.sin(i*.5+r.phase)*r.sway*t,r.rot+=r.vrot*t,r.y<-r.box&&(r.y=Yt+r.box,r.x=dt(0,jt)),_o((r.soft?yn.soft:yn.crisp)[r.idx],r.x,r.y,r.box,r.rot,r.baseA*n))}function u_(i){Ct.lineCap="round",Ct.lineJoin="round";for(const t of Ts){const e=mr((i-t.t0)/t.dur);if(e<=0)continue;const n=n_(e);Ct.strokeStyle=t.grad;const r=12,s=Math.max(1,Math.ceil(r*n));let a=Up(t,0);for(let o=1;o<=s;o++){const l=Math.min(n,o/r),c=Up(t,l);Ct.lineWidth=xl(t.w0,t.w1,l),Ct.beginPath(),Ct.moveTo(a.x,a.y),Ct.lineTo(c.x,c.y),Ct.stroke(),a=c}}}function f_(i){const t=1+Math.sin(i*.8)*.012;for(const e of si){const n=mr((i-e.t0)/.6);if(n<=0)continue;const r=Math.max(0,UT(n));let s=mr(n*1.7);e.soft&&(s*=.8);const o=mr((i-e.t0-.6)/.7)*Math.sin(i*1.5+e.sway)*(e.box*.05),l=(1-n_(n))*e.box*.45,c=ii+(e.x-ii)*t+o,h=Ii+(e.y-Ii)*t-l;let f=(e.soft?yn.soft:yn.crisp)[e.idx%(yn.crisp.length||1)];if(e.isPhoto&&mn.length>0){const u=mn[e.photoIdx%mn.length];u&&(f=u)}f&&_o(f,c,h,e.box*r,e.rot+o*.012,s)}}function XT(i,t){if(i>Fe.bloomT0+Fe.bloomSpan*.45&&ws.length<9&&Math.random()<.5){const n=si[Math.random()*si.length|0];n&&ws.push({x:n.x,y:n.y,size:dt(.6,1.3)*(Math.min(jt,Yt)*.05),age:0,life:dt(.7,1.2),rot:dt(0,6.28)})}Ct.save(),Ct.globalCompositeOperation="lighter";for(let n=ws.length-1;n>=0;n--){const r=ws[n];r.age+=t;const s=r.age/r.life;if(s>=1){ws.splice(n,1);continue}const a=Math.sin(s*Math.PI);_o(r_,r.x,r.y,r.size*(.6+.4*a),r.rot+s*1.2,a)}Ct.restore()}function Fp(){const i=si[Math.random()*si.length|0];if(!i)return;const t=i.isPhoto||Math.random()<.35&&mn.length>0,e=t?i.photoIdx!==void 0?i.photoIdx:Math.random()*(mn.length||1)|0:i.idx;Na.push({x:i.x+dt(-8,8),y:i.y+dt(-8,8),vy:dt(14,30),vx:dt(-8,8),sway:dt(.6,1.4),phase:dt(0,6.28),box:i.box*dt(.34,.6),idx:e,isPhoto:t,rot:dt(0,6.28),vrot:dt(-1.4,1.4),age:0,land:wf+dt(-6,Yt*.05)})}function YT(i,t){for(let e=Na.length-1;e>=0;e--){const n=Na[e];if(n.age+=t,n.vy+=8*t,n.x+=(n.vx+Math.sin(i*n.sway+n.phase)*16)*t,n.y+=n.vy*t,n.rot+=n.vrot*t,n.y>=n.land){ks.push({x:pr(n.x,6,jt-6),y:n.land,box:n.box,idx:n.idx,isPhoto:n.isPhoto,rot:n.rot,a:dt(.7,.95)}),ks.length>90&&ks.shift(),Na.splice(e,1);continue}const r=n.age<.3?n.age/.3:1;let s=yn.crisp&&yn.crisp.length>0?yn.crisp[n.idx%yn.crisp.length]:null;if(n.isPhoto&&mn.length>0){const a=mn[n.idx%mn.length];a&&(s=a)}s&&_o(s,n.x,n.y,n.box,n.rot,r)}}function d_(){for(const i of ks){let t=yn.crisp&&yn.crisp.length>0?yn.crisp[i.idx%yn.crisp.length]:null;if(i.isPhoto&&mn.length>0){const e=mn[i.idx%mn.length];e&&(t=e)}t&&_o(t,i.x,i.y,i.box,i.rot,i.a)}}const qT=["Chuyến bay sắp tới sẽ đưa cậu đến một miền đất mới, mở ra một hành trình mới với thật nhiều ước mơ và hoài bão.","Ở nơi xa ấy, dù có khác múi giờ, nhớ luôn ăn uống đầy đủ, giữ gìn sức khỏe và luôn cười thật rạng rỡ như lúc này nha cậu!","Dù có cách xa bao nhiêu cây số, tụi mình ở đây vẫn luôn dõi theo, ủng hộ và luôn là bến đỗ bình yên đón cậu trở về.","Chúc Hồng Vân lên đường bình an, học tập và làm việc thật thành công nhé! ♥"];let Zl=!1,Kl=[];function ZT(){Kl.forEach(i=>clearTimeout(i)),Kl=[],Zl=!1}function p_(){const i=tt("letterBody"),t=document.querySelector(".letter__footer"),e=tt("openFilmBtn");i&&(i.innerHTML=`
      <p id="tp-0"></p>
      <p id="tp-1"></p>
      <p id="tp-2"></p>
      <p id="tp-3" class="letter__highlight"></p>
    `),t&&t.classList.add("is-typing-hidden"),e&&e.classList.add("is-typing-hidden")}function KT(){if(Zl)return;Zl=!0,p_();const i=document.querySelector(".letter__footer"),t=tt("openFilmBtn");let e=450;qT.forEach((s,a)=>{const o=tt(`tp-${a}`);if(o){for(let l=0;l<=s.length;l++){const c=e+l*28,h=setTimeout(()=>{if(!o)return;const f=s.slice(0,l);l<s.length?o.innerHTML=f+'<span class="letter__cursor"></span>':o.innerHTML=f},c);Kl.push(h)}e+=s.length*28+350}});const n=e+250,r=setTimeout(()=>{i&&i.classList.remove("is-typing-hidden"),t&&t.classList.remove("is-typing-hidden")},n);Kl.push(r)}function sr(i){DT.classList.toggle("is-in",i),i?Zl||KT():(ZT(),p_())}let yl=0,Ml=0,Vs=0,Nu=0;window.bdayDone=!1;function m_(i){try{yl||(yl=i,Ml=i);const t=(i-yl)/1e3,e=Math.min(.05,(i-Ml)/1e3);Ml=i;const n=mr((t-Fe.bloomT0)/Fe.bloomSpan);o_(),l_(t,n),c_(t),h_(t,e),ql(t,e,!1),u_(t),f_(t),XT(t,e),t>Fe.petalT0&&i-Nu>150&&(Fp(),Fp(),Nu=i),YT(t,e),d_(),ql(t,e,!0),sr(t>=Fe.noteStart),!window.bdayDone&&t>=Fe.done&&(window.bdayDone=!0)}catch(t){console.error("Tree render glitch:",t)}Vs=requestAnimationFrame(m_)}function __(){yl=0,Ml=0,Nu=0,window.bdayDone=!1,jr(3),Ni("grow"),Af(),Vs||(Vs=requestAnimationFrame(m_))}function g_(){Vs&&(cancelAnimationFrame(Vs),Vs=0),Ct.clearRect(0,0,jt,Yt)}function x_(){Af(),o_(),l_(0,1),c_(Fe.done),h_(0,0),ql(99,0,!1),u_(99),f_(99);for(let i=0;i<40;i++){const t=si[Math.random()*si.length|0];t&&ks.push({x:pr(t.x+dt(-jt*.3,jt*.3),6,jt-6),y:wf+dt(-6,Yt*.05),box:t.box*.5,idx:t.idx,rot:dt(0,6.28),a:.85})}d_(),ql(99,0,!0),sr(!0),window.bdayDone=!0}function v_(i){const t=[...i.textContent];return i.textContent="",t.map(e=>{const n=document.createElement("span");return n.className="hl__ch",n.textContent=e===" "?" ":e,i.appendChild(n),n})}const Cf=v_(tt("wLine1")),Rf=v_(tt("wLine2")),$T=[...Cf,...Rf];function JT(){Rp.innerHTML="";for(let i=0;i<12;i++){const t=document.createElement("span");t.className="mote";const e=dt(4,12);t.style.width=t.style.height=`${e}px`,t.style.left=`${dt(4,96)}%`,t.style.top=`${dt(10,96)}%`,Rp.appendChild(t),Dt.set(t,{opacity:dt(.25,.7)}),Dt.to(t,{y:-dt(40,140),x:dt(-30,30),duration:dt(7,14),repeat:-1,yoyo:!0,ease:"sine.inOut",delay:-dt(0,8)}),Dt.to(t,{opacity:dt(.1,.5),duration:dt(2.5,5),repeat:-1,yoyo:!0,ease:"sine.inOut"})}}const QT=tt("tip");let Pf=1,$l=0,ja=0,to=120,jn=0,y_=0,M_=1;const go=96,oc={val:go};function Df(){const i=oc.val;IT.setAttribute("y2",i),NT.setAttribute("y2",i),t_.setAttribute("cy",i)}function S_(){jt=Br.clientWidth||window.innerWidth||800,Yt=Br.clientHeight||window.innerHeight||600;const i=jt*.24,t=Yt*.76,e=jt*.5,n=Yt*.33,r=Math.atan2(e-i,t-n);y_=-Math.sin(r),M_=Math.cos(r),oc.val=go,Df(),Dt.set(dn,{rotation:0,scale:1,x:0,y:0}),dn.style.left="0px",dn.style.top="0px",Dt.set(In,{x:0,y:0});const s=dn.getBoundingClientRect(),a=LT.getBoundingClientRect(),o=t_.getBoundingClientRect(),l=In.getBoundingClientRect();Pf=a.width?a.width/460:.3;const c=a.left-s.left+.5*(a.width||120),h=a.top-s.top+240/300*(a.height||100),f=o.left-s.left+.5*(o.width||20),u=o.top-s.top+.5*(o.height||20);$l=f-(l.left-s.left+.5*(l.width||20)),ja=u-(l.top-s.top+205/220*(l.height||100)),dn.style.left=i-c+"px",dn.style.top=t-h+"px",Dt.set(dn,{transformOrigin:`${c}px ${h}px`,rotation:r*180/Math.PI}),Dt.set(In,{x:$l,y:ja}),to=Math.min((a.height||100)*.72,Yt*.16,132),jn=0}function xo(i){jn=pr(i,0,to),Dt.set(In,{x:$l,y:ja+jn}),oc.val=go+jn/Pf,Df(),Dt.set(j0,{opacity:.55*(jn/to)})}let Ua=null;function jT(){Dt.set(Es,{scale:1}),Dt.set(Ia,{scale:1,opacity:.7}),Ua=Dt.timeline({repeat:-1,repeatDelay:.5}),Ua.to(Es,{scale:1.07,duration:.13,ease:"power2.out"},0).to(Ia,{scale:1.15,opacity:.9,duration:.13,ease:"power2.out"},0).to(Es,{scale:1,duration:.2,ease:"power2.in"},.13).to(Es,{scale:1.05,duration:.12,ease:"power2.out"},.3).to(Es,{scale:1,duration:.5,ease:"power2.inOut"},.42).to(Ia,{scale:1,opacity:.7,duration:.7,ease:"power2.inOut"},.3)}function t1(){Ua&&(Ua.kill(),Ua=null),Dt.set(Es,{scale:1})}function b_(i){return`<svg viewBox="0 0 24 22" width="100%" height="100%"><path d="M12 20C5.5 15 1.5 11.4 1.5 6.9 1.5 3.6 4 1.5 7 1.5c2 0 3.4 1.1 5 3 1.6-1.9 3-3 5-3 3 0 5.5 2.1 5.5 5.4C23.5 11.4 19.5 15 12 20Z" fill="${i}"/></svg>`}function e1(){const i=Dn.getBoundingClientRect(),t=ea.getBoundingClientRect(),e=i.left-t.left+i.width/2,n=i.top-t.top+i.height*.42,r=["#ff6f97","#ffb14e","#ff8fae","#ffd36a","#e23b67"],s=document.createDocumentFragment(),a=[];for(let o=0;o<12;o++){const l=o<8,c=document.createElement("span");c.className="burst";const h=l?dt(12,22):dt(4,8);c.style.cssText=`position:absolute;left:${e}px;top:${n}px;width:${h}px;height:${h}px;margin:${-h/2}px 0 0 ${-h/2}px;pointer-events:none;z-index:4;`,l?c.innerHTML=b_(Xl(r)):(c.style.borderRadius="50%",c.style.background="radial-gradient(circle,#fff,rgba(255,210,150,0) 70%)"),s.appendChild(c),a.push({el:c,heart:l})}ea.appendChild(s),a.forEach(({el:o,heart:l})=>{const c=dt(-Math.PI,0),h=dt(l?70:40,l?190:120);Dt.to(o,{x:Math.cos(c)*h,y:Math.sin(c)*h-dt(10,50),rotation:dt(-120,120),scale:l?dt(.7,1.2):dt(.4,1),duration:dt(.7,1.15),ease:"power2.out"}),Dt.to(o,{opacity:0,duration:.5,delay:dt(.35,.6),ease:"power1.in",onComplete:()=>o.remove()})})}function E_(){const i=QT.getBoundingClientRect(),t=Dn.getBoundingClientRect(),e=i.left+i.width/2,n=i.top+i.height/2,r=t.left+t.width/2,s=t.top+t.height/2,a=Math.hypot(r-e,s-n),o=Math.min(Yt*.26,Yt-s-t.height*.4),l=r,c=s+o,h=Math.hypot(Math.max(l,jt-l),Math.max(c,Yt-c)),f=Math.hypot(jt/2,Yt/2);return{arrowStartY:ja+jn,arrowFlyY:ja+jn-a,drawnNock:go+jn/Pf,fallPx:o,fx:l-jt/2,fy:c-Yt/2,floodScale:h*1.12/70,bloomScale:f*1.2/30}}function n1(){if(!ah)return;ah.innerHTML="";const i=["#ffd1e0","#ff8fae","#ffd36a","#ffffff","#ff9ebe"];for(let t=0;t<18;t++){const e=t%2===0,n=document.createElement("div");n.className="kPart";const r=e?dt(12,22):dt(4,8);n.style.cssText=`position:absolute;left:${dt(3,97)}%;top:${dt(8,92)}%;width:${r}px;height:${r}px;pointer-events:none;`,e?(n.innerHTML=b_(Xl(i)),n.style.opacity=`${dt(.35,.8)}`):(n.style.borderRadius="50%",n.style.background=Xl(i),n.style.boxShadow="0 0 10px rgba(255,255,255,0.85)",n.style.opacity=`${dt(.4,.9)}`),ah.appendChild(n),Dt.to(n,{y:-dt(50,130),x:dt(-25,25),rotation:dt(-45,45),duration:dt(4,8),repeat:-1,yoyo:!0,ease:"sine.inOut",delay:-dt(0,5)})}}let Zn=null;function T_(i){n1();const t=Dt.timeline({paused:!0,onComplete:()=>{Dt.set(Bs,{autoAlpha:0}),__(),Dt.to(zr,{autoAlpha:0,duration:1.15,ease:"power2.out"})}});return t.set(Dn,{y:0,scaleX:1,scaleY:1,opacity:1}).set(In,{opacity:1,x:$l,y:i.arrowStartY,scaleY:1}).set([rr,zr],{autoAlpha:0,scale:.001,x:0,y:0}).set(rr,{x:i.fx,y:i.fy}).set(Bs,{autoAlpha:0}).set(".blob",{opacity:0}).set(Pp,{scale:1,yPercent:0}).set(Dp,{xPercent:0,yPercent:0}).set(_l,{yPercent:-100}).set(gl,{yPercent:100}).set([Tu,wu],{opacity:0,scale:.7,y:14}).set(Au,{opacity:0,y:14}).set(Cu,{opacity:0,y:14}).set($T,{transformPerspective:620,transformOrigin:"50% 100%",yPercent:135,rotationX:-82}).set(Ru,{drawn:0}),t.fromTo(oc,{val:i.drawnNock},{val:go,duration:.5,ease:"elastic.out(1,0.34)",onUpdate:Df},0).to(In,{y:i.arrowFlyY,duration:.26,ease:"power2.in"},0).to(In,{scaleY:1.16,duration:.14,ease:"power2.in"},0).to(In,{scaleY:1,duration:.1,ease:"power1.out"},.16).to(j0,{opacity:0,duration:.18},0).to([bu,Eu],{opacity:0,duration:.2,ease:"power1.out"},0),t.add(e1,.26).to(Dn,{x:7,y:-9,duration:.06,ease:"power2.out"},.26).to(Dn,{x:0,y:0,duration:.32,ease:"power2.out"},.32).to(Dn,{scale:1.14,duration:.06,ease:"power2.out"},.26).to(Dn,{scale:1,duration:.26,ease:"power2.inOut"},.32).to(In,{rotation:"+=4",duration:.05,yoyo:!0,repeat:4,ease:"sine.inOut"},.27).set(In,{rotation:0},.52).to(In,{opacity:0,duration:.16,ease:"power1.out"},.56),t.to(Dn,{y:i.fallPx,scaleX:.84,scaleY:1.3,duration:.34,ease:"power1.in"},.64).to(Dn,{scaleX:1.4,scaleY:.6,duration:.07,ease:"power2.out"},.98).set(rr,{autoAlpha:1},1).fromTo(rr,{scale:.02},{scale:i.floodScale,duration:.34,ease:"power2.in"},1).to(Dn,{opacity:0,duration:.12,ease:"power1.out"},1.06),t.set(Bs,{autoAlpha:1},1.32).set(ea,{autoAlpha:0},1.33).to(".blob",{opacity:1,duration:.8,ease:"power2.out"},1.34).set(rr,{autoAlpha:0},1.36),t.fromTo(Pp,{scale:1,yPercent:0},{scale:1.06,yPercent:-1.2,duration:5.6,ease:"none"},1.38).fromTo(Dp,{xPercent:0,yPercent:0},{xPercent:-1.5,yPercent:-1,duration:5.6,ease:"none"},1.38),t.call(Ni,["hit"],.26).call(Ni,["flood"],1).call(Ni,["wish"],2).call(Ni,["wish2"],2.7).call(Ni,["bloom"],6.5),t.to(_l,{yPercent:0,duration:.8,ease:"power2.out"},1.5).to(gl,{yPercent:0,duration:.8,ease:"power2.out"},1.5),t.call(()=>jr(2),[],1.85),t.to(Tu,{opacity:1,scale:1,y:0,duration:.85,ease:"back.out(1.3)"},1.65).to(wu,{opacity:1,scale:1,y:0,duration:.85,ease:"back.out(1.3)"},1.75).to(Au,{opacity:1,y:0,duration:.7,ease:"power3.out"},1.85).to(Cf,{yPercent:0,rotationX:0,duration:.75,ease:"power3.out",stagger:.045},2.3).to(Rf,{yPercent:0,rotationX:0,duration:.75,ease:"power3.out",stagger:.045},2.9).to(Ru,{drawn:1,duration:.75,ease:"power2.inOut"},3.6).to(Cu,{opacity:1,y:0,duration:.85,ease:"power3.out"},4.1),t.to(_l,{yPercent:-100,duration:.7,ease:"power2.in"},6.4).to(gl,{yPercent:100,duration:.7,ease:"power2.in"},6.4).set(zr,{autoAlpha:1},6.5).fromTo(zr,{scale:.02},{scale:i.bloomScale,duration:.75,ease:"power2.in"},6.5),t}let $r=!1,eo=!1,w_=0,A_=0,C_=0;function R_(){$r||($r=!0,eo=!1,io(),t1(),Ni("release"),Ni("whoosh"),Zn=T_(E_()),Zn.play(0))}function i1(){const i=jn;Dt.to({d:i},{d:0,duration:.55,ease:"elastic.out(1,0.4)",onUpdate(){xo(this.targets()[0].d)}})}function P_(){$r||(Pu=performance.now(),Ni("draw"),Dt.to({d:jn},{d:to*.94,duration:.62,ease:"power2.inOut",onUpdate(){xo(this.targets()[0].d)},onComplete:()=>Dt.delayedCall(.16,R_)}))}dn.addEventListener("pointerdown",i=>{if(!$r){eo=!0;try{dn.setPointerCapture(i.pointerId)}catch{}w_=i.clientX,A_=i.clientY,C_=jn,i.preventDefault()}});dn.addEventListener("pointermove",i=>{if(!eo)return;const t=(i.clientX-w_)*y_+(i.clientY-A_)*M_;xo(C_+t)});function D_(){eo&&(eo=!1,jn>to*.26?R_():i1())}dn.addEventListener("pointerup",D_);dn.addEventListener("pointercancel",D_);dn.addEventListener("keydown",i=>{$r||(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),P_())});function L_(){jr(1),Dt.set(ea,{autoAlpha:1}),S_(),xo(0),Dt.set([bu,Eu],{opacity:0,y:14}),Dt.set(Dn,{opacity:0,y:10,scaleX:.9,scaleY:.9}),Dt.set(dn,{opacity:0,scale:.85}),Dt.set(Ia,{opacity:0,scale:1}),Dt.set(In,{opacity:1}),Dt.timeline({onComplete:jT}).to(Dn,{opacity:1,y:0,scaleX:1,scaleY:1,duration:.8,ease:"power3.out"},.1).to(Ia,{opacity:.7,duration:.8,ease:"power2.out"},.2).to(dn,{opacity:1,scale:1,duration:.8,ease:"power3.out"},.28).to(bu,{opacity:1,y:0,duration:.7,ease:"power3.out"},.4).to(Eu,{opacity:1,y:0,duration:.7,ease:"power3.out"},.7)}function Lf(){g_(),sr(!1),cc(),es=!1,Ve&&(cancelAnimationFrame(Ve),Ve=null),oo=!1,ie&&(ie.position.set(0,20,30),ie.lookAt(0,0,0)),ne&&(ne.enabled=!1,ne.target.set(0,0,0),ne.update());const i=tt("filmCosmosView");i&&(i.classList.remove("is-active"),i.hidden=!0,i.style.display="none");const t=tt("filmSphereView");t&&(t.classList.remove("is-active"),t.hidden=!0,t.style.display="none"),If(),window.bdayDone=!1,Zn&&Zn.pause(0),Dt.set([rr,zr],{autoAlpha:0}),Dt.set(Bs,{autoAlpha:0}),Dt.set(In,{opacity:1,scaleY:1}),$r=!1,L_()}const r1=tt("cosmosReplayBtn");r1?.addEventListener("click",Lf);function I_(){if(ma=Math.min(window.devicePixelRatio||1,2),jt=Br.clientWidth||window.innerWidth||800,Yt=Br.clientHeight||window.innerHeight||600,Br.width=Math.round(jt*ma),Br.height=Math.round(Yt*ma),Ct.setTransform(ma,0,0,ma,0,0),GT(),Af(),e_){x_();return}if($r&&Zn){const i=Zn.time(),t=Zn.isActive();Zn=T_(E_()),Zn.pause(i),t&&Zn.play(i)}else S_(),xo(0)}let lh=0;window.addEventListener("resize",()=>{lh||(lh=requestAnimationFrame(()=>{lh=0,I_()}))});I_();e_?x_():(JT(),L_());const Jl=tt("bgMusic"),s1=tt("musicToggleBtn"),Op=tt("musicIcon"),Bp=tt("musicText");let no=!1;function N_(){Op&&Op.classList.toggle("is-playing",no),Bp&&(Bp.textContent=no?"Tắt Nhạc":"Bật Nhạc")}function io(){Jl&&Jl.play().then(()=>{no=!0,N_()}).catch(()=>{})}function If(){Jl&&(Jl.pause(),no=!1,N_())}function a1(){no?If():io()}s1?.addEventListener("click",a1);const Ui=Array.from({length:63},(i,t)=>`./memories/memory-${String(t+1).padStart(2,"0")}.jpg`),Ql=["🌸 Khoảnh khắc thanh xuân rực rỡ mở đầu thước phim của tụi mình","✈️ Chuyến bay sắp tới đưa bạn tui vươn ra biển lớn","✨ Vậy mà đã mấy năm rồi","😂 Không biết mốt gặp lại còn nhớ nhau không","🍵 Qua bển nhớ ăn uống đầy đủ, cấm nhịn ăn giảm cân nha má!","☀️ Qua đó cày giàu rồi thì đừng quên tụi tao nhé","📸 Một thời báo cùng lũ giặc","🌍 Sang đó mà hốt được anh nào thì đâm cưới nhớ mời","🌻 Nơi phương xa nhớ luôn giữ nụ cười lạc quan này nhé","🍔 Qua bển nhớ khám phá đồ ăn ngon thì ship về cho tụi tao nhé","🕊️ Tự tin sải cánh trên bầu trời mới ngập tràn hoài bão","🎓 Mới hồi còn ngại ngại mà chả biết từ lúc nào đã thân nhau như vậy rồi","🍀 May mắn và quý nhân sẽ luôn phù trợ cho Hồng Vân","🌊 Chuyến đi biển huyền thoại lưu giữ bao tiếng cười","💫 Dù cách nhau cả nửa vòng trái đất thì tim vẫn gần xịt","🌷 Cô gái nhỏ nhưng mang trong mình ước mơ to bự","🧥 Mùa đông bên đó lạnh lắm, nhớ mặc ấm như gấu bông nha","🌈 Sau cơn mưa trời lại sáng, hành trình mới sẽ ngập tràn may mắn","☕ Giữ liên lạc nào stress thì gọi về cho tụi tao nha mày","⭐ Bạn tui là đỉnh nhất, tự tin tỏa sáng nơi đất khách nha!","🤪 Những khoảnh khắc dìm hàng nhưng vẫn thấy cưng xỉu","🎁 Qua đó nhớ săn đồ xịn gửi về cho lũ bạn này nha","🎉 Thanh xuân có cậu đồng hành là điều siêu tuyệt vời","💌 Tụi tui ở nhà luôn là hậu phương vững chắc đón cậu về","🌸 Trưởng thành là khi tụi mình bay xa nhưng tình bạn không đổi","💪 Học giỏi, kiếm nhiều tiền rồi bao tụi tui đi du lịch tiếp nha","✨ Hãy luôn tự hào về những gì cậu đã và đang nỗ lực đạt được","🌤️ Chúc mỗi ngày thức dậy đều là một ngày vui vẻ, bình an","🍁 Nhớ những ngày đánh bài búng tai đỏ chót","💖 Bạn thân là người dù ở đâu cũng nhớ đến nhau đầu tiên","🌟 Tỏa sáng rực rỡ trên con đường cậu đã chọn nhé","🥘 Nhớ tự nấu ăn ngon, đừng ăn mì gói hoài nha cô nương","🎒 Hành trang mang theo là trọn vẹn tình cảm của tụi tớ","🥂 Hẹn ngày cậu về nước làm bữa tiệc ăn mừng hoành tráng!","🌺 Luôn giữ vững sự tự tin và năng lượng tích cực này","🕊️ Bay cao bay xa, chinh phục mọi đỉnh cao mới","🌿 Một chặng đường mới mở ra với bao điều thú vị đang chờ","😆 Về mà không mua quà là tụi này giận á","🎈 Cảm ơn vì đã luôn là một người bạn tuyệt vời của nhau","🌞 Bầu trời nơi phương xa sẽ chứng kiến sự thành công của cậu","🍀 Vạn sự hanh thông, mọi dự định đều thành công rực rỡ","📱 Nhớ check tin nhắn nhóm thường xuyên, cấm có seen rồi bơ!","👗 Dù ở phương trời nào vẫn phải luôn xinh đẹp và rạng rỡ","🤝 Tình bạn chúng mình mãi bền vững theo năm tháng","🏖️ Kỷ niệm những chuyến đi cháy phố cùng hội bạn thân","✈️ Lên đường may mắn, thuận buồm xuôi gió nha Hồng Vân!","🍫 Cuộc sống xứ người ngọt ngào như sô cô la","🎯 Chúc cậu đạt được mọi mục tiêu học tập và sự nghiệp","🥰 Dù có bạn mới bên đó cũng không được quên bạn cũ nha","💃 Tự tin bước đi trên con đường của riêng mình","📚 Học hết mình nhưng cũng nhớ quẩy hết nhiệt nhé","❄️ Chạm tay vào tuyết trắng và trải nghiệm những điều mới lạ","💎 Qua đó đừng có đấm sếp nha má","🚀 Bứt phá mọi giới hạn, thành công vang dội","🥳 Kỷ niệm những lần cười muốn tiền đình cùng nhau","💐 Luôn có những người bạn ở đây dõi theo và ủng hộ cậu","🏰 Chúc cậu xây dựng nên một tương lai rực rỡ như cổ tích","🔥 Cháy hết mình với đam mê và hoài bão tuổi trẻ","🥐 Thưởng thức thật nhiều món ngon nha xong về đây nấu cho tụi tao ăn nữa","🎊 Mọi điều ước của cậu đều sẽ sớm thành hiện thực","🌟 Luôn là niềm tự hào của gia đình và bạn bè","💖 Cảm ơn vì những năm tháng thanh xuân tuyệt đẹp bên nhau","🎓 Chúc Hồng Vân vạn dặm bình an, thành công rực rỡ trở về! ♥"],o1=tt("openFilmBtn"),ge=tt("filmModal"),l1=tt("filmClose"),c1=tt("filmBackdrop"),zp=tt("filmAmbi"),h1=tt("filmPhotoWrap"),_a=tt("filmImg"),kp=tt("filmTag"),Vp=tt("filmIndex"),u1=tt("filmPrev"),f1=tt("filmNext"),ro=tt("filmPlayToggle"),Gp=tt("filmProgressFill"),kr=tt("filmThumbTrack"),Gs=tt("filmZoomModal"),Hp=tt("filmZoomImg"),Wp=tt("filmZoomCaption"),d1=tt("filmZoomClose"),p1=tt("filmZoomBackdrop");let Nn=0,hr=!0,Sl=null,so=!1;const Xp=["ken-burns-1","ken-burns-2","ken-burns-3"];let ba=!1,Yp=0,qp=0,bl=0;function m1(){const i=tt("filmThumbTrack");if(!i||i.dataset.dragInit)return;i.dataset.dragInit="true";const t=r=>{ba=!0,Yp=r.clientX,qp=i.scrollLeft,bl=0,i.classList.add("is-dragging")},e=r=>{if(!ba)return;const s=r.clientX-Yp;bl=Math.abs(s),i.scrollLeft=qp-s},n=()=>{ba&&(ba=!1,i.classList.remove("is-dragging"),setTimeout(()=>{bl=0},80))};i.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),window.addEventListener("pointercancel",n),i.addEventListener("wheel",r=>{r.deltaY!==0&&(r.preventDefault(),i.scrollLeft+=r.deltaY)},{passive:!1})}function _1(){kr&&(kr.innerHTML="",Ui.forEach((i,t)=>{const e=document.createElement("button");e.className=`filmThumb ${t===Nn?"is-active":""}`,e.type="button",e.setAttribute("aria-label",`Xem ảnh ${t+1}`),e.innerHTML=`<img src="${i}" loading="lazy" alt="Ảnh ${t+1}" />`,e.addEventListener("click",()=>{bl>6||(vo(t),Yi())}),kr.appendChild(e)}),m1())}function vo(i){if(Nn=(i+Ui.length)%Ui.length,!_a)return;if(Vp&&(Vp.textContent=`${Nn+1} / ${Ui.length}`),kp&&(kp.textContent=Ql[Nn%Ql.length]),Gp){const e=(Nn+1)/Ui.length*100;Gp.style.width=`${e}%`}kr?.querySelectorAll(".filmThumb")?.forEach((e,n)=>{const r=n===Nn;if(e.classList.toggle("is-active",r),r&&kr&&!ba){const s=e.offsetLeft,a=e.offsetWidth,o=kr.offsetWidth,l=s-o/2+a/2;kr.scrollTo({left:l,behavior:"smooth"})}}),_a.style.opacity="0",setTimeout(()=>{const e=Ui[Nn];_a.src=e,zp&&(zp.src=e),_a.className=Xp[Nn%Xp.length],_a.style.opacity="1"},140)}function Nf(){if(Nn===Ui.length-1&&hr){v1();return}vo(Nn+1)}function U_(){vo(Nn-1)}function Yi(){Er(),Sl=setInterval(()=>{hr&&!so&&!Mo&&!ts&&Nf()},3400)}function Er(){Sl&&(clearInterval(Sl),Sl=null)}function g1(){!Gs||!Hp||(Er(),so=!0,Hp.src=Ui[Nn],Wp&&(Wp.textContent=Ql[Nn%Ql.length]),Gs.hidden=!1,requestAnimationFrame(()=>{Gs.classList.add("is-open")}))}function yo(){!Gs||!so||(so=!1,Gs.classList.remove("is-open"),setTimeout(()=>{Gs.hidden=!0},350),hr&&!Mo&&!ts&&Yi())}const Hs=tt("filmEndCard"),Fa=tt("filmEndContent"),x1=tt("filmEndTriggerBtn");let Mo=!1;function v1(){Er(),Hs&&(Mo=!0,Hs.hidden=!1,Fa&&Dt.set(Fa,{scale:1,opacity:1}),requestAnimationFrame(()=>{Hs.classList.add("is-open")}))}function ao(){Hs&&(Mo=!1,Hs.classList.remove("is-open"),setTimeout(()=>{Hs.hidden=!0},500))}let Uu=null,Bn=null,Fn=null,gi=null,Zp=[],Fu=[],Gn=null,ts=!1,Ea=!1,lc=9.2,Oa=9.2,ch=0,hh=0,F_=0,Ou=0,Ta=!1,uh=0,fh=0;const dh=4.2;function y1(i,t,e,n,r,s,a){const o=new Ae,l=[],c=[],h=[];for(let f=0;f<=a;f++){const u=f/a,d=n+u*(r-n);for(let _=0;_<=s;_++){const g=_/s,p=t+g*(e-t);l.push(i*Math.sin(d)*Math.cos(p),i*Math.cos(d),i*Math.sin(d)*Math.sin(p)),c.push(g,1-u)}}for(let f=0;f<a;f++)for(let u=0;u<s;u++){const d=f*(s+1)+u,_=d+1,g=d+(s+1),p=g+1;h.push(d,g,_,_,g,p)}return o.setAttribute("position",new _e(l,3)),o.setAttribute("uv",new _e(c,2)),o.setIndex(h),o.computeVertexNormals(),o}function Uf(){const i=window.innerWidth,t=window.innerHeight,e=i/t;return e<1?Math.max(10.5,9.2/e*.78):9.2}function O_(){const i=tt("sphereContainer");if(!i||Fn)return;const t=window.innerWidth,e=window.innerHeight,n=Uf();lc=n,Oa=n,Uu=new M0,Bn=new Un(65,t/e,.1,1e3),Bn.position.set(0,0,n),Fn=new J0({alpha:!0,antialias:!0}),Fn.setSize(t,e),Fn.setPixelRatio(Math.min(window.devicePixelRatio,2)),Fn.setClearColor(0,0),i.appendChild(Fn.domElement),gi=new Oi,Uu.add(gi);const r=new gy;Fu=Ui.map(s=>{const a=r.load(s);return a.colorSpace=sn,a}),M1(),S1(i)}function M1(){if(!gi)return;for(;gi.children.length>0;)gi.remove(gi.children[0]);Zp=[];const i=6,t=.015,e=Math.PI*t,r=Math.PI*(1-t)-e,s=Fu.length||1;let a=0;for(let o=0;o<i;o++){const l=e+o/i*r,c=e+(o+1)/i*r,h=(l+c)/2,f=2*Math.PI*dh*Math.sin(h),u=r*dh/i,d=Math.max(4,Math.round(f/u)),_=2*Math.PI/d;for(let g=0;g<d;g++){const p=g*_,m=Fu[a%s];a++;const T=y1(dh,p,p+_,l,c,8,8),S=new Vi({map:m,side:pn,transparent:!0,opacity:.98}),v=new ke(T,S);gi.add(v),Zp.push(v)}}}function S1(i){if(!i||i.dataset.ctrlInit)return;i.dataset.ctrlInit="true";let t=0,e=0,n=0,r=0;const s=(c,h)=>{Ta=!0,t=performance.now(),e=c,n=h,uh=c,fh=h,r=0},a=(c,h)=>{if(!Ta)return;const f=c-uh,u=h-fh;r+=Math.hypot(f,u),Ou+=f*.005,F_+=u*.005,uh=c,fh=h},o=(c,h)=>{if(!Ta)return;Ta=!1;const f=c!==void 0&&h!==void 0?Math.hypot(c-e,h-n):r,u=performance.now()-t;f<22&&r<30&&u<500&&Kp()};i.addEventListener("mousedown",c=>s(c.clientX,c.clientY)),window.addEventListener("mousemove",c=>a(c.clientX,c.clientY)),window.addEventListener("mouseup",c=>o(c.clientX,c.clientY)),i.addEventListener("touchstart",c=>{c.touches.length===1&&s(c.touches[0].clientX,c.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",c=>{c.touches.length===1&&a(c.touches[0].clientX,c.touches[0].clientY)},{passive:!0}),window.addEventListener("touchend",c=>{c.changedTouches.length===1?o(c.changedTouches[0].clientX,c.changedTouches[0].clientY):o()},{passive:!0}),tt("sphereHint")?.addEventListener("click",c=>{c.stopPropagation(),Kp()})}function Kp(){Ea=!Ea,lc=Ea?.15:Uf();const i=tt("sphereToggleText"),t=tt("sphereHint");Ea?(i&&(i.textContent="Nhìn từ bên ngoài 🌐"),t&&(t.textContent="💫 Bạn đang ở bên trong quả cầu (Kéo để xoay 360° / Nhấn để ra ngoài)")):(i&&(i.textContent="Bước vào bên trong 360°"),t&&(t.textContent="✨ Nhấn vào quả cầu để bước vào bên trong 360°"))}function B_(){!ts||!Fn||(Ta||(Ou+=.0035),Oa+=(lc-Oa)*.08,Bn&&(Bn.position.z=Oa),ch+=(F_-ch)*.1,hh+=(Ou-hh)*.1,gi&&(gi.rotation.x=ch,gi.rotation.y=hh),Fn.render(Uu,Bn),Gn=requestAnimationFrame(B_))}function Bu(i){Er(),jr(5),es=!1,Ve&&(cancelAnimationFrame(Ve),Ve=null);const t=document.querySelector(".filmModal__content"),e=tt("filmSphereView"),n=tt("filmCosmosView");if(t&&(t.style.display="none"),n&&(n.classList.remove("is-active"),n.hidden=!0,n.style.display="none"),e&&(e.hidden=!1,e.style.display="flex",e.classList.add("is-active")),ts=!0,!Fn)O_();else if(Bn){const a=window.innerWidth,o=window.innerHeight;Bn.aspect=a/o,Bn.updateProjectionMatrix(),Fn.setSize(a,o)}Ea=!1;const r=Uf();lc=r,Oa=r,Bn&&(Bn.position.z=r);const s=tt("sphereHint");s&&(s.textContent="✨ Nhấn vào quả cầu để bước vào bên trong 360°"),Gn&&cancelAnimationFrame(Gn),Gn=requestAnimationFrame(B_)}function z_(i){i&&(i.stopPropagation(),i.preventDefault()),ts=!1,Gn&&(cancelAnimationFrame(Gn),Gn=null),es=!1,Ve&&(cancelAnimationFrame(Ve),Ve=null);const t=document.querySelector(".filmModal__content"),e=tt("filmSphereView"),n=tt("filmCosmosView");e&&(e.classList.remove("is-active"),e.hidden=!0,e.style.display="none"),n&&(n.classList.remove("is-active"),n.hidden=!0,n.style.display="none"),t&&(t.style.display="flex"),vo(0),Yi()}x1?.addEventListener("click",i=>{i&&(i.stopPropagation(),i.preventDefault()),Fa?Dt.to(Fa,{scale:.8,opacity:0,duration:.35,ease:"power2.out",onComplete:()=>{ao(),Dt.set(Fa,{scale:1,opacity:1}),Bu()}}):(ao(),Bu())});const b1=tt("sphereBackToFilmBtn"),E1=tt("sphereToCosmosBtn"),T1=tt("cosmosBackToSphereBtn"),w1=tt("cosmosBackToFilmBtn");b1?.addEventListener("click",i=>z_(i));E1?.addEventListener("click",i=>H_(i));T1?.addEventListener("click",i=>backToSphereFromCosmos(i));w1?.addEventListener("click",i=>backToFilmFromCosmos(i));tt("filmSphereView")?.addEventListener("click",i=>i.stopPropagation());tt("filmCosmosView")?.addEventListener("click",i=>i.stopPropagation());let $e=null,ie=null,rn=null,ne=null,vn=null,rl=null,Ba=[],ph=null,wa=[],$p=null,jl=null,zu=[],Ye=null,di=null,Ve=null,es=!1,oo=!1;const Jp=["CHÚC CẬU THÀNH CÔNG NHÉ","NHỚ GIỮ SỨC KHỎE VÀ ĐỪNG QUÊN TỤI NÀY NHÉ","NGUYỄN THỊ HỒNG VÂN"],Qp=Array.from({length:10},(i,t)=>`./memories/memory-${String(t+1).padStart(2,"0")}.jpg`);function jp(i,t=128,e=.55){const n=document.createElement("canvas");n.width=n.height=t;const r=n.getContext("2d"),s=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);s.addColorStop(0,i),s.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=s,r.fillRect(0,0,t,t);const a=new fo(n);return new Sv(new E0({map:a,transparent:!0,opacity:e,depthWrite:!1,blending:dr}))}function A1(i=512){const t=document.createElement("canvas");t.width=t.height=i;const e=t.getContext("2d"),n=e.createRadialGradient(i/2,i/2,i/8,i/2,i/2,i/2);n.addColorStop(0,"#f8bbd0"),n.addColorStop(.12,"#f48fb1"),n.addColorStop(.22,"#f06292"),n.addColorStop(.35,"#ffffff"),n.addColorStop(.5,"#e1aaff"),n.addColorStop(.62,"#a259f7"),n.addColorStop(.75,"#b2ff59"),n.addColorStop(1,"#3fd8c7"),e.fillStyle=n,e.fillRect(0,0,i,i);const r=["#f8bbd0","#f48fb1","#f06292","#ffffff","#e1aaff","#a259f7","#b2ff59"];for(let a=0;a<40;a++){const o=Math.random()*i,l=Math.random()*i,c=30+Math.random()*120,h=r[Math.floor(Math.random()*r.length)],f=e.createRadialGradient(o,l,0,o,l,c);f.addColorStop(0,h+"cc"),f.addColorStop(1,h+"00"),e.fillStyle=f,e.fillRect(0,0,i,i)}for(let a=0;a<8;a++)e.beginPath(),e.moveTo(Math.random()*i,Math.random()*i),e.bezierCurveTo(Math.random()*i,Math.random()*i,Math.random()*i,Math.random()*i,Math.random()*i,Math.random()*i),e.strokeStyle="rgba(180, 120, 200, "+(.12+Math.random()*.18)+")",e.lineWidth=8+Math.random()*18,e.stroke();const s=new fo(t);return s.colorSpace=sn,s}function C1(i,t=256){const e=document.createElement("canvas");e.width=e.height=t;const n=e.getContext("2d"),r=i.width&&i.height?i.width/i.height:1;let s,a,o,l;r>1?(s=t,a=t/r,o=0,l=(t-a)/2):(a=t,s=t*r,o=(t-s)/2,l=0),n.clearRect(0,0,t,t);const c=t*.1;n.save(),n.beginPath(),n.moveTo(o+c,l),n.lineTo(o+s-c,l),n.arcTo(o+s,l,o+s,l+c,c),n.lineTo(o+s,l+a-c),n.arcTo(o+s,l+a,o+s-c,l+a,c),n.lineTo(o+c,l+a),n.arcTo(o,l+a,o,l+a-c,c),n.lineTo(o,l+c),n.arcTo(o,l,o+c,l,c),n.closePath(),n.clip(),i&&i.complete&&i.naturalWidth>0&&n.drawImage(i,o,l,s,a),n.restore(),n.strokeStyle="#ffffff",n.lineWidth=5,n.shadowColor="#ff69b4",n.shadowBlur=16,n.stroke();const h=new fo(e);return h.colorSpace=sn,h}function R1(){Ye=new Oi,Ye.name="hint-icon-group",$e.add(Ye);const i=new Oi,t=new U0,e=1.5,n=e*.5;t.moveTo(0,0),t.lineTo(-n*.4,-e*.7),t.lineTo(-n*.25,-e*.7),t.lineTo(-n*.5,-e),t.lineTo(n*.5,-e),t.lineTo(n*.25,-e*.7),t.lineTo(n*.4,-e*.7),t.closePath();const r=new Wl(t),s=new Vi({color:16777215,side:pn}),a=new ke(r,s),o=new Wl(t),l=new Vi({color:16777215,side:pn}),c=new ke(o,l);c.scale.set(.8,.8,1),c.position.z=.01,i.add(a,c),i.position.y=e/2,i.rotation.x=Math.PI/2;const h=new Mf(1.8,2,32),f=new Vi({color:16777215,side:pn,transparent:!0,opacity:.6}),u=new ke(h,f);u.rotation.x=Math.PI/2,Ye.userData.ringMesh=u,Ye.add(i),Ye.add(u),Ye.position.set(1.5,1.5,15),Ye.scale.set(.8,.8,.8),vn&&Ye.lookAt(vn.position),Ye.userData.initialPosition=Ye.position.clone()}function P1(){const t=document.createElement("canvas");t.width=t.height=512;const e=t.getContext("2d"),n=50,r="Chạm Vào Tinh Cầu";e.font=`bold ${n}px Arial, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffb3de",e.shadowBlur=5,e.lineWidth=2,e.strokeStyle="rgba(255, 200, 220, 0.8)",e.strokeText(r,512/2,512/2),e.shadowColor="#e0b3ff",e.shadowBlur=5,e.lineWidth=2,e.strokeStyle="rgba(220, 180, 255, 0.5)",e.strokeText(r,512/2,512/2),e.shadowColor="transparent",e.shadowBlur=0,e.fillStyle="white",e.fillText(r,512/2,512/2);const s=new fo(t),a=new Vi({map:s,transparent:!0,side:pn}),o=new mo(16,8);di=new ke(o,a),di.position.set(0,15,0),$e.add(di)}function k_(){if(!$e)return;const i=100,t=new js(2,32,32),e=new Vi({color:16777215,transparent:!0,opacity:0,blending:dr}),n=new ke(t,e),r=new js(3,32,32),s=new Tn({uniforms:{time:{value:0}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      uniform float time;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * (0.8 + sin(time * 5.0) * 0.2));
      }
    `,transparent:!0,blending:dr,side:cn}),a=new ke(r,s);n.add(a);const o=new L(-200+Math.random()*100,-100+Math.random()*200,-100+Math.random()*200),l=new L(600+Math.random()*200,o.y+(-100+Math.random()*200),o.z+(-100+Math.random()*200)),c=new L(o.x+200+Math.random()*100,o.y+(-50+Math.random()*100),o.z+(-50+Math.random()*100)),h=new L(l.x-200+Math.random()*100,l.y+(-50+Math.random()*100),l.z+(-50+Math.random()*100)),f=new D0(o,c,h,l),u=[];for(let m=0;m<i;m++)u.push(f.getPoint(m/(i-1)));const d=new Ae().setFromPoints(u),_=new A0({color:10087167,transparent:!0,opacity:.7,linewidth:2}),g=new Cv(d,_),p=new Oi;p.add(n),p.add(g),p.userData={curve:f,progress:0,speed:.001+Math.random()*.001,life:0,maxLife:300,head:n,trail:g,trailLength:i,trailPoints:u},$e.add(p),wa.push(p)}function V_(){const i=tt("cosmosContainer");if(!i||rn)return;const t=window.innerWidth,e=window.innerHeight;$e=new M0,$e.fog=new gf(0,.0015),ie=new Un(75,t/e,.1,1e5),ie.position.set(0,20,30),rn=new J0({antialias:!0,alpha:!1}),rn.setSize(t,e),rn.setPixelRatio(Math.min(window.devicePixelRatio,2)),rn.outputColorSpace=sn,rn.setClearColor(0,1),i.appendChild(rn.domElement),ne=new xT(ie,rn.domElement),ne.enableDamping=!0,ne.autoRotate=!0,ne.autoRotateSpeed=.5,ne.enabled=!1,ne.target.set(0,0,0),ne.enablePan=!1,ne.minDistance=15,ne.maxDistance=300,ne.zoomSpeed=.3,ne.rotateSpeed=.3,ne.update(),D1(),I1(rn.domElement)}function D1(){if(!$e)return;rl=jp("rgba(255,255,255,0.8)",156,.25),rl.scale.set(8,8,1),rl.name="main-glow",$e.add(rl);for(let v=0;v<15;v++){const w=`hsla(${Math.random()*360}, 80%, 50%, 0.6)`,A=jp(w,256);A.scale.set(100,100,1),A.position.set((Math.random()-.5)*175,(Math.random()-.5)*175,(Math.random()-.5)*175),$e.add(A)}const i={count:1e5,arms:6,radius:100,spin:.5,randomness:.2,randomnessPower:20,insideColor:new kt(14040790),outsideColor:new kt(4765880)},t=new Float32Array(i.count*3),e=new Float32Array(i.count*3);let n=0;for(let v=0;v<i.count;v++){const M=Math.pow(Math.random(),i.randomnessPower)*i.radius,w=v%i.arms/i.arms*Math.PI*2,A=M*i.spin,x=(Math.random()-.5)*i.randomness*M,b=(Math.random()-.5)*i.randomness*M*1.2,R=(Math.random()-.5)*i.randomness*M,P=w+A;if(M<30&&Math.random()<.8)continue;const D=n*3;t[D]=Math.cos(P)*M+x,t[D+1]=b,t[D+2]=Math.sin(P)*M+R;const B=new kt(16738047);B.lerp(new kt(6750207),M/i.radius),B.multiplyScalar(.7+.3*Math.random()),e[D]=B.r,e[D+1]=B.g,e[D+2]=B.b,n++}const r=new Ae;r.setAttribute("position",new qe(t.slice(0,n*3),3)),r.setAttribute("color",new qe(e.slice(0,n*3),3)),jl=new Tn({uniforms:{uTime:{value:0},uSize:{value:50*(window.devicePixelRatio||1)},uRippleTime:{value:-1},uRippleSpeed:{value:40},uRippleWidth:{value:20}},vertexShader:`
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
    `,fragmentShader:`
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        gl_FragColor = vec4(vColor, 1.0);
      }
    `,blending:dr,depthWrite:!1,transparent:!0,vertexColors:!0}),$p=new Zc(r,jl),$e.add($p);const s=Qp.length,a=Math.floor(i.count/s);for(let v=0;v<s;v++){const M=new Float32Array(a*3),w=new Float32Array(a*3),A=new Float32Array(a*3);let x=0;for(let z=0;z<a;z++){const U=x*3,Y=v*a+z,J=Math.pow(Math.random(),i.randomnessPower)*i.radius;if(J<30)continue;const it=Y%i.arms/i.arms*Math.PI*2,et=J*i.spin,ft=(Math.random()-.5)*i.randomness*J,Ht=(Math.random()-.5)*i.randomness*J*.5,Kt=(Math.random()-.5)*i.randomness*J,Ut=it+et;M[U]=Math.cos(Ut)*J+ft,M[U+1]=Ht,M[U+2]=Math.sin(Ut)*J+Kt;const K=new kt(16777215);w[U]=K.r,w[U+1]=K.g,w[U+2]=K.b;const st=i.insideColor.clone();st.lerp(i.outsideColor,J/i.radius),st.multiplyScalar(.7+.3*Math.random()),A[U]=st.r,A[U+1]=st.g,A[U+2]=st.b,x++}if(x===0)continue;const b=new Ae;b.setAttribute("position",new qe(M.slice(0,x*3),3)),b.setAttribute("color",new qe(w.slice(0,x*3),3));const R=new Ae;R.setAttribute("position",new qe(M.slice(0,x*3),3)),R.setAttribute("color",new qe(A.slice(0,x*3),3));const P=R.getAttribute("position");let D=0,B=0,H=0;for(let z=0;z<P.count;z++)D+=P.getX(z),B+=P.getY(z),H+=P.getZ(z);D/=P.count,B/=P.count,H/=P.count,b.translate(-D,-B,-H),R.translate(-D,-B,-H);const I=new Image;I.crossOrigin="Anonymous",I.src=Qp[v],I.onload=()=>{const z=C1(I,256),U=new pl({size:1.8,map:z,transparent:!1,alphaTest:.2,depthWrite:!0,depthTest:!0,blending:Xr,vertexColors:!0}),Y=new pl({size:1.8,map:z,transparent:!0,alphaTest:.2,depthWrite:!1,blending:dr,vertexColors:!0}),J=new Zc(R,Y);J.position.set(D,B,H),J.userData={materialNear:U,geometryNear:b,materialFar:Y,geometryFar:R},$e.add(J),zu.push(J)}}const o=2e4,l=new Float32Array(o*3);for(let v=0;v<o;v++)l[v*3]=(Math.random()-.5)*900,l[v*3+1]=(Math.random()-.5)*900,l[v*3+2]=(Math.random()-.5)*900;const c=new Ae;c.setAttribute("position",new qe(l,3));const h=new pl({color:16777215,size:.7,transparent:!0,opacity:.7,depthWrite:!1});ph=new Zc(c,h),ph.name="starfield",$e.add(ph);const f=10,u=new js(f,48,48),d=A1(),_=new Tn({uniforms:{time:{value:0},baseTexture:{value:d}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
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
    `});vn=new ke(u,_),vn.name="main-planet",vn.position.set(0,0,0),$e.add(vn);const g=new js(f*1.05,48,48),p=new Tn({uniforms:{glowColor:{value:new kt(14726143)}},vertexShader:`
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      uniform vec3 glowColor;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, 1.0) * intensity;
      }
    `,side:cn,blending:dr,transparent:!0});vn.add(new ke(g,p));const m=Jp.length,T=f*1.1,S=5;Ba=[];for(let v=0;v<m;v++){const M=T+v*S,w=150,A=Math.max(130,.8*w),b=document.createElement("canvas").getContext("2d");b.font=`bold ${A}px Arial, sans-serif`;const R=Jp[v]+"   ",P=b.measureText(R).width,D=2*Math.PI*M*180,B=Math.ceil(D/P);let H="";for(let ft=0;ft<B;ft++)H+=R;const I=document.createElement("canvas");I.width=Math.ceil(Math.max(1,P*B)),I.height=w;const z=I.getContext("2d");z.clearRect(0,0,I.width,w),z.font=`bold ${A}px Arial, sans-serif`,z.textAlign="left",z.textBaseline="alphabetic",z.shadowColor="#e0b3ff",z.shadowBlur=18,z.lineWidth=7,z.strokeStyle="#fff",z.strokeText(H,0,w*.82),z.shadowColor="#ffb3de",z.shadowBlur=24,z.fillStyle="#fff",z.fillText(H,0,w*.84);const U=new fo(I);U.wrapS=Nl,U.repeat.x=P*B/D,U.needsUpdate=!0;const Y=new xf(M,M,1,128,1,!0),J=new Vi({map:U,transparent:!0,side:pn,alphaTest:.01,opacity:1,depthWrite:!1}),it=new ke(Y,J);it.position.set(0,0,0),it.rotation.y=Math.PI/2;const et=new Oi;et.add(it),et.userData={ringRadius:M,angleOffset:.15*Math.PI*.5,speed:.002+25e-5,tiltSpeed:0,rollSpeed:0,pitchSpeed:0,tiltAmplitude:Math.PI/3,rollAmplitude:Math.PI/6,pitchAmplitude:Math.PI/8,tiltPhase:Math.PI*2,rollPhase:Math.PI*2,pitchPhase:Math.PI*2,isTextRing:!0},et.rotation.x=v/m*Math.PI,$e.add(et),Ba.push(et)}R1(),P1(),k_()}function L1(){if(!ie)return;const i={x:ie.position.x,y:ie.position.y,z:ie.position.z},t={x:i.x,y:0,z:i.z},e={x:i.x,y:0,z:160},n={x:-40,y:100,z:100},r=.2,s=.55,a=.4;let o=0;function l(){o+=.0025;let c;if(o<r){const h=o/r;c={x:i.x+(t.x-i.x)*h,y:i.y+(t.y-i.y)*h,z:i.z+(t.z-i.z)*h}}else if(o<r+s){const h=(o-r)/s;c={x:t.x+(e.x-t.x)*h,y:t.y+(e.y-t.y)*h,z:t.z+(e.z-t.z)*h}}else if(o<r+s+a){const h=(o-r-s)/a,f=.5-.5*Math.cos(Math.PI*h);c={x:e.x+(n.x-e.x)*f,y:e.y+(n.y-e.y)*f,z:e.z+(n.z-e.z)*f}}else{ie.position.set(n.x,n.y,n.z),ie.lookAt(0,0,0),ne&&(ne.target.set(0,0,0),ne.update(),ne.enabled=!0);return}ie.position.set(c.x,c.y,c.z),ie.lookAt(0,0,0),requestAnimationFrame(l)}ne&&(ne.enabled=!1),l()}function I1(i){if(!i||i.dataset.cosmosClickBound)return;i.dataset.cosmosClickBound="true";const t=new yy,e=new ot,n=(a,o)=>{if(oo||!ie||!vn)return;const l=i.getBoundingClientRect();e.x=(a-l.left)/l.width*2-1,e.y=-((o-l.top)/l.height)*2+1,t.setFromCamera(e,ie),t.intersectObject(vn).length>0&&(oo=!0,L1())};i.addEventListener("click",a=>{n(a.clientX,a.clientY)});let r=0,s=0;i.addEventListener("touchstart",a=>{a.touches.length===1&&(r=a.touches[0].clientX,s=a.touches[0].clientY)},{passive:!0}),i.addEventListener("touchend",a=>{if(a.changedTouches.length===1){const o=Math.abs(a.changedTouches[0].clientX-r),l=Math.abs(a.changedTouches[0].clientY-s);o<10&&l<10&&n(a.changedTouches[0].clientX,a.changedTouches[0].clientY)}},{passive:!0})}function G_(){if(!es||!rn||!$e||!ie)return;const i=performance.now()*.001;if(Ye)if(oo)Ye.visible=!1,di&&(di.visible=!1);else{Ye.visible=!0;const t=Math.sin(i*2.5)*1.5,e=new L;Ye.getWorldDirection(e),Ye.position.copy(Ye.userData.initialPosition).addScaledVector(e,-t);const n=Ye.userData.ringMesh;if(n){const r=1+Math.sin(i*2.5)*.1;n.scale.set(r,r,1),n.material.opacity=.5+Math.sin(i*2.5)*.2}di&&(di.visible=!0,di.material.opacity=.7+Math.sin(i*3)*.3,di.position.y=15+Math.sin(i*2)*.5,di.lookAt(ie.position))}ne&&ne.enabled&&ne.update(),vn&&vn.material&&vn.material.uniforms&&(vn.material.uniforms.time.value=i*.5,vn.lookAt(ie.position)),Ba&&Ba.forEach((t,e)=>{const n=t.userData;n.angleOffset+=n.speed;const r=Math.sin(i*n.tiltSpeed+n.tiltPhase)*n.tiltAmplitude,s=Math.cos(i*n.rollSpeed+n.rollPhase)*n.rollAmplitude,a=Math.sin(i*n.pitchSpeed+n.pitchPhase)*n.pitchAmplitude;t.rotation.x=e/Ba.length*Math.PI+r,t.rotation.z=s,t.rotation.y=n.angleOffset+a,t.position.y=Math.sin(i*(n.tiltSpeed*.7)+n.tiltPhase)*.3;const o=(Math.sin(i*1.5+e)+1)/2,l=t.children[0];l&&l.material&&(l.material.opacity=.7+o*.3)});for(let t=wa.length-1;t>=0;t--){const e=wa[t];e.userData.life++;let n=1;if(e.userData.life<30?n=e.userData.life/30:e.userData.life>e.userData.maxLife-30&&(n=(e.userData.maxLife-e.userData.life)/30),e.userData.progress+=e.userData.speed,e.userData.progress>1){$e.remove(e),wa.splice(t,1);continue}const r=e.userData.curve.getPoint(e.userData.progress);e.position.copy(r),e.userData.head.material.opacity=n,e.userData.head.children[0]&&(e.userData.head.children[0].material.uniforms.time.value=i);const s=e.userData.trailPoints;s[0].copy(r);for(let a=1;a<e.userData.trailLength;a++){const o=Math.max(0,e.userData.progress-a*.01);s[a].copy(e.userData.curve.getPoint(o))}e.userData.trail.geometry.setFromPoints(s),e.userData.trail.material.opacity=n*.7}wa.length<3&&Math.random()<.02&&k_(),zu&&zu.forEach(t=>{if(t.isPoints&&t.userData.materialNear&&t.userData.materialFar){const e=t.geometry.getAttribute("position");let n=!1;for(let r=0;r<e.count;r++){const s=e.getX(r)+t.position.x,a=e.getY(r)+t.position.y,o=e.getZ(r)+t.position.z;if(ie.position.distanceTo(new L(s,a,o))<10){n=!0;break}}n?t.material!==t.userData.materialNear&&(t.material=t.userData.materialNear,t.geometry=t.userData.geometryNear):t.material!==t.userData.materialFar&&(t.material=t.userData.materialFar,t.geometry=t.userData.geometryFar)}}),jl&&(jl.uniforms.uTime.value=i),rn.render($e,ie),Ve=requestAnimationFrame(G_)}function H_(i){i&&(i.stopPropagation(),i.preventDefault()),Er(),jr(6),ts=!1,Gn&&(cancelAnimationFrame(Gn),Gn=null);const t=document.querySelector(".filmModal__content"),e=tt("filmSphereView"),n=tt("filmCosmosView");if(t&&(t.style.display="none"),e&&(e.classList.remove("is-active"),e.hidden=!0,e.style.display="none"),n&&(n.hidden=!1,n.style.display="flex",n.classList.add("is-active")),es=!0,!rn)V_();else if(ie){const r=window.innerWidth,s=window.innerHeight;ie.aspect=r/s,ie.updateProjectionMatrix(),rn.setSize(r,s),oo||(ie.position.set(0,20,30),ie.lookAt(0,0,0),ne&&(ne.enabled=!1,ne.target.set(0,0,0),ne.update()))}Ve&&cancelAnimationFrame(Ve),Ve=requestAnimationFrame(G_)}const tm=["Hồng Vân ơi 🌸","Lên đường bình an ✈️","Vạn sự may mắn 🍀","Thành công rực rỡ ✨","Luôn cười tươi nha 🥰","Mãi là bạn tốt 🤝","Giữ gìn sức khỏe 💖","Bay cao bay xa 🕊️","Tự tin tỏa sáng ⭐","Tụi tui luôn ở đây 💌","Nhớ giữ liên lạc nha 📱","Hẹn ngày trở về 🥂","Thanh xuân rực rỡ 🌈","Bình an nơi phương xa 🌤️","Chinh phục ước mơ 🚀","Mãi bên nhau bạn nhé 💕"],em=["💖","🌸","✨","✈️","🍀","⭐","🕊️","🥰","💕","❤️","💗"],nm=["#ff7487","#ffa0b5","#ffd1dc","#ff8fae","#ffcad4"];let _r=!1,El=null,Tl=null;const Ds=new Set,N1=45,ai=tt("filmGalaxyCanvas"),na=tt("filmTextGalaxy");let ku=[];function W_(){if(!ai)return;const i=window.innerWidth,t=window.innerHeight;ai.width=i,ai.height=t,ku=[];for(let e=0;e<180;e++)ku.push({x:Math.random()*i,y:Math.random()*t,size:Math.random()*1.8+.4,alpha:Math.random()*.8+.2,speed:Math.random()*.02+.005,phase:Math.random()*Math.PI*2})}function X_(){if(!ai||!_r)return;const i=ai.getContext("2d"),t=ai.width,e=ai.height;i.clearRect(0,0,t,e);for(const n of ku){n.phase+=n.speed;const r=n.alpha*(.5+.5*Math.sin(n.phase));i.fillStyle=`rgba(255, 220, 235, ${r})`,i.beginPath(),i.arc(n.x,n.y,n.size,0,Math.PI*2),i.fill()}El=requestAnimationFrame(X_)}function U1(){if(!na||!_r||Ds.size>=N1)return;const i=document.createElement("div"),t=Math.random()<.35;i.className="text-particle-bg",i.textContent=t?em[Math.floor(Math.random()*em.length)]:tm[Math.floor(Math.random()*tm.length)];const e=(t?22:16)+Math.random()*10;i.style.fontSize=`${e}px`,i.style.color=nm[Math.floor(Math.random()*nm.length)],i.style.opacity="0",na.appendChild(i);const n=i.offsetWidth||70,r=window.innerWidth,s=window.innerHeight;i.style.left=`${Math.random()*(r-n)}px`;const a=-Math.random()*320,o=-40,l=s+40,c=8500+Math.random()*4500,h=performance.now();function f(u){if(!_r){i.remove(),Ds.delete(i);return}const d=u-h;if(d<c){const _=d/c;i.style.transform=`translateY(${o+_*(l-o)}px) translateZ(${a}px)`,i.style.opacity=_<.12?_/.12*.9:_>.85?(1-_)/.15*.9:.9,requestAnimationFrame(f)}else i.remove(),Ds.delete(i)}Ds.add(i),requestAnimationFrame(f)}function F1(){_r||(_r=!0,W_(),X_(),Tl=setInterval(()=>{if(_r)for(let i=0;i<3;i++)U1()},420))}function Y_(){_r=!1,El&&(cancelAnimationFrame(El),El=null),Tl&&(clearInterval(Tl),Tl=null),Ds.forEach(i=>i.remove()),Ds.clear(),na&&(na.innerHTML=""),ai&&ai.getContext("2d").clearRect(0,0,ai.width,ai.height)}function wl(){ge&&(jr(4),ge.hidden=!1,ge.setAttribute("aria-hidden","false"),requestAnimationFrame(()=>{ge.classList.add("is-open"),_1(),vo(0),hr=!0,ro&&(ro.textContent="⏸"),Yi(),F1(),io(),setTimeout(()=>{Fn||O_(),rn||V_()},400)}))}function cc(){if(!ge)return;ge.classList.remove("is-open"),ge.setAttribute("aria-hidden","true"),Er(),Y_(),yo(),ao(),es=!1,Ve&&(cancelAnimationFrame(Ve),Ve=null);const i=tt("filmCosmosView");i&&(i.classList.remove("is-active"),i.hidden=!0,i.style.display="none"),z_(),If(),setTimeout(()=>{ge.hidden=!0},600)}function q_(){hr=!hr,ro&&(ro.textContent=hr?"⏸":"▶"),hr?Yi():Er()}o1?.addEventListener("click",wl);l1?.addEventListener("click",cc);c1?.addEventListener("click",cc);u1?.addEventListener("click",()=>{U_(),Yi()});f1?.addEventListener("click",()=>{Nf(),Yi()});ro?.addEventListener("click",q_);h1?.addEventListener("click",g1);d1?.addEventListener("click",yo);p1?.addEventListener("click",yo);ge?.addEventListener("mousemove",i=>{if(!_r)return;const t=window.innerWidth/2,e=window.innerHeight/2,n=(i.clientX-t)/t*8,r=-(i.clientY-e)/e*8;na&&(na.style.transform=`translate(-50%, -50%) rotateX(${r}deg) rotateY(${n}deg)`)});const im=tt("cursorTrailContainer"),rm=["💖","✨","⭐","🌸","💕","🥰","💫"];let sm=0;window.addEventListener("mousemove",i=>{const t=performance.now();if(t-sm<38||(sm=t,!im))return;const e=document.createElement("span");e.className="cursorParticle",e.textContent=rm[Math.floor(Math.random()*rm.length)];const n=13+Math.random()*8;e.style.fontSize=`${n}px`,e.style.left=`${i.clientX}px`,e.style.top=`${i.clientY}px`,e.style.setProperty("--dx",`${(Math.random()-.5)*36}px`),e.style.setProperty("--dy",`${-12-Math.random()*30}px`),e.style.setProperty("--drot",`${(Math.random()-.5)*60}deg`),im.appendChild(e),setTimeout(()=>e.remove(),1100)});const O1=tt("timelineNavToggle");O1?.addEventListener("click",i=>{i.stopPropagation(),Ef()});document.addEventListener("click",i=>{const t=tt("timelineNav");t&&t.classList.contains("is-open")&&!t.contains(i.target)&&Ef(!1)});function B1(i){if(Ef(!1),jr(i),i===1){Lf();return}g_(),Er(),Y_(),yo(),ao(),es=!1,Ve&&(cancelAnimationFrame(Ve),Ve=null),ts=!1,Gn&&(cancelAnimationFrame(Gn),Gn=null),Zn&&Zn.pause(0);const t=document.querySelector(".filmModal__content"),e=tt("filmSphereView"),n=tt("filmCosmosView");if(i===2){ge&&(ge.classList.remove("is-open"),ge.hidden=!0,ge.setAttribute("aria-hidden","true")),sr(!1),Dt.set([rr,zr],{autoAlpha:0}),Dt.set(ea,{autoAlpha:0}),Dt.set(Bs,{autoAlpha:1}),Dt.to(".blob",{opacity:1,duration:.4}),Dt.set([_l,gl],{yPercent:0}),Dt.set(Tu,{opacity:1,scale:1,y:0}),Dt.set(wu,{opacity:1,scale:1,y:0}),Dt.set(Au,{opacity:1,y:0}),Dt.set(Cf,{yPercent:0,rotationX:0}),Dt.set(Rf,{yPercent:0,rotationX:0}),Dt.set(Ru,{drawn:1}),Dt.set(Cu,{opacity:1,y:0}),io();return}if(i===3){ge&&(ge.classList.remove("is-open"),ge.hidden=!0,ge.setAttribute("aria-hidden","true")),Dt.set([ea,rr,Bs,zr],{autoAlpha:0}),__(),sr(!0),io();return}if(i===4){sr(!1),e&&(e.classList.remove("is-active"),e.hidden=!0,e.style.display="none"),n&&(n.classList.remove("is-active"),n.hidden=!0,n.style.display="none"),t&&(t.style.display="flex"),wl();return}if(i===5){sr(!1),(!ge||ge.hidden)&&wl(),Bu();return}if(i===6){sr(!1),(!ge||ge.hidden)&&wl(),H_();return}}for(let i=1;i<=6;i++)tt(`navStep${i}`)?.addEventListener("click",e=>{e.stopPropagation(),B1(i)});window.addEventListener("keydown",i=>{if(so&&i.key==="Escape"){yo();return}if(Mo&&i.key==="Escape"){ao();return}!ge||ge.hidden||(i.key==="Escape"?cc():i.key==="ArrowRight"?(Nf(),Yi()):i.key==="ArrowLeft"?(U_(),Yi()):i.key===" "&&(i.preventDefault(),q_()))});window.addEventListener("resize",()=>{const i=window.innerWidth,t=window.innerHeight;Bn&&Fn&&(Bn.aspect=i/t,Bn.updateProjectionMatrix(),Fn.setSize(i,t)),ie&&rn&&(ie.aspect=i/t,ie.updateProjectionMatrix(),rn.setSize(i,t)),W_()});Tf&&(window.bdayAPI={start(){P_()},replay(){Lf()}});
