"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1921:(t,e,n)=>{n.d(e,{Ay:()=>tx,os:()=>tx});var r,i,s,o,a,c,l,u=n(2913),f={},p=180/Math.PI,h=Math.PI/180,d=Math.atan2,g=/([A-Z])/g,y=/(left|right|width|margin|padding|x)/i,m=/[\s,\(]\S/,v={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},b=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},x=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},O=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},E=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},C=function(t,e,n){return t.style[e]=n},S=function(t,e,n){return t.style.setProperty(e,n)},A=function(t,e,n){return t._gsap[e]=n},M=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},P=function(t,e,n,r,i){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(i,s)},j=function(t,e,n,r,i){var s=t._gsap;s[e]=n,s.renderTransform(i,s)},T="transform",k=T+"Origin",F=function t(e,n){var r=this,i=this.target,s=i.style,o=i._gsap;if(e in f&&s){if(this.tfm=this.tfm||{},"transform"===e)return v.transform.split(",").forEach(function(e){return t.call(r,e,n)});if(~(e=v[e]||e).indexOf(",")?e.split(",").forEach(function(t){return r.tfm[t]=G(i,t)}):this.tfm[e]=o.x?o[e]:G(i,e),e===k&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(T)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(k,n,"")),e=T}(s||n)&&this.props.push(e,n,s[e])},Y=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},z=function(){var t,e,n=this.props,r=this.target,i=r.style,s=r._gsap;for(t=0;t<n.length;t+=3)n[t+1]?2===n[t+1]?r[n[t]](n[t+2]):r[n[t]]=n[t+2]:n[t+2]?i[n[t]]=n[t+2]:i.removeProperty("--"===n[t].substr(0,2)?n[t]:n[t].replace(g,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),(t=c())&&t.isStart||i[T]||(Y(i),s.zOrigin&&i[k]&&(i[k]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},B=function(t,e){var n={target:t,props:[],revert:z,save:F};return t._gsap||u.os.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(t){return n.save(t)}),n},N=function(t,e){var n=r.createElementNS?r.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):r.createElement(t);return n&&n.style?n:r.createElement(t)},D=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(g,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,X(n)||n,1)||""},W="O,Moz,ms,Ms,Webkit".split(","),X=function(t,e,n){var r=(e||o).style,i=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);i--&&!(W[i]+t in r););return i<0?null:(3===i?"ms":i>=0?W[i]:"")+t},R=function(){"undefined"!=typeof window&&window.document&&(i=(r=window.document).documentElement,o=N("div")||{style:{}},N("div"),k=(T=X(T))+"Origin",o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",l=!!X("perspective"),c=u.os.core.reverting,s=1)},I=function(t){var e,n=t.ownerSVGElement,r=N("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0);s.style.display="block",r.appendChild(s),i.appendChild(r);try{e=s.getBBox()}catch(t){}return r.removeChild(s),i.removeChild(r),e},L=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},V=function(t){var e,n;try{e=t.getBBox()}catch(r){e=I(t),n=1}return e&&(e.width||e.height)||n||(e=I(t)),!e||e.width||e.x||e.y?e:{x:+L(t,["x","cx","x1"])||0,y:+L(t,["y","cy","y1"])||0,width:0,height:0}},$=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&V(t))},q=function(t,e){if(e){var n,r=t.style;e in f&&e!==k&&(e=T),r.removeProperty?(("ms"===(n=e.substr(0,2))||"webkit"===e.substr(0,6))&&(e="-"+e),r.removeProperty("--"===n?e:e.replace(g,"-$1").toLowerCase())):r.removeAttribute(e)}},H=function(t,e,n,r,i,s){var o=new u.J7(t._pt,e,n,0,1,s?E:_);return t._pt=o,o.b=r,o.e=i,t._props.push(n),o},J={deg:1,rad:1,turn:1},Z={grid:1,flex:1},U=function t(e,n,i,s){var a,c,l,p,h=parseFloat(i)||0,d=(i+"").trim().substr((h+"").length)||"px",g=o.style,m=y.test(n),v="svg"===e.tagName.toLowerCase(),b=(v?"client":"offset")+(m?"Width":"Height"),x="px"===s,w="%"===s;if(s===d||!h||J[s]||J[d])return h;if("px"===d||x||(h=t(e,n,i,"px")),p=e.getCTM&&$(e),(w||"%"===d)&&(f[n]||~n.indexOf("adius")))return a=p?e.getBBox()[m?"width":"height"]:e[b],(0,u.E_)(w?h/a*100:h/100*a);if(g[m?"width":"height"]=100+(x?d:s),c="rem"!==s&&~n.indexOf("adius")||"em"===s&&e.appendChild&&!v?e:e.parentNode,p&&(c=(e.ownerSVGElement||{}).parentNode),c&&c!==r&&c.appendChild||(c=r.body),(l=c._gsap)&&w&&l.width&&m&&l.time===u.au.time&&!l.uncache)return(0,u.E_)(h/l.width*100);if(w&&("height"===n||"width"===n)){var O=e.style[n];e.style[n]=100+s,a=e[b],O?e.style[n]=O:q(e,n)}else(w||"%"===d)&&!Z[D(c,"display")]&&(g.position=D(e,"position")),c===e&&(g.position="static"),c.appendChild(o),a=o[b],c.removeChild(o),g.position="absolute";return m&&w&&((l=(0,u.a0)(c)).time=u.au.time,l.width=c[b]),(0,u.E_)(x?a*h/100:a&&h?100/a*h:0)},G=function(t,e,n,r){var i;return s||R(),e in v&&"transform"!==e&&~(e=v[e]).indexOf(",")&&(e=e.split(",")[0]),f[e]&&"transform"!==e?(i=tl(t,r),i="transformOrigin"!==e?i[e]:i.svg?i.origin:tu(D(t,k))+" "+i.zOrigin+"px"):(!(i=t.style[e])||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=tn[e]&&tn[e](t,e,n)||D(t,e)||(0,u.n)(t,e)||+("opacity"===e)),n&&!~(i+"").trim().indexOf(" ")?U(t,e,i,n)+n:i},Q=function(t,e,n,r){if(!n||"none"===n){var i=X(e,t,1),s=i&&D(t,i,1);s&&s!==n?(e=i,n=s):"borderColor"===e&&(n=D(t,"borderTopColor"))}var o,a,c,l,f,p,h,d,g,y,m,v=new u.J7(this._pt,t.style,e,0,1,u.l1),b=0,x=0;if(v.b=n,v.e=r,n+="","auto"==(r+="")&&(p=t.style[e],t.style[e]=r,r=D(t,e)||r,p?t.style[e]=p:q(t,e)),o=[n,r],(0,u.Uc)(o),n=o[0],r=o[1],c=n.match(u.vM)||[],(r.match(u.vM)||[]).length){for(;a=u.vM.exec(r);)h=a[0],g=r.substring(b,a.index),f?f=(f+1)%5:("rgba("===g.substr(-5)||"hsla("===g.substr(-5))&&(f=1),h!==(p=c[x++]||"")&&(l=parseFloat(p)||0,m=p.substr((l+"").length),"="===h.charAt(1)&&(h=(0,u.B0)(l,h)+m),d=parseFloat(h),y=h.substr((d+"").length),b=u.vM.lastIndex-y.length,y||(y=y||u.Yz.units[e]||m,b!==r.length||(r+=y,v.e+=y)),m!==y&&(l=U(t,e,p,y)||0),v._pt={_next:v._pt,p:g||1===x?g:",",s:l,c:d-l,m:f&&f<4||"zIndex"===e?Math.round:0});v.c=b<r.length?r.substring(b,r.length):""}else v.r="display"===e&&"none"===r?E:_;return u.Ks.test(r)&&(v.e=0),this._pt=v,v},K={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tt=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return("top"===n||"bottom"===n||"left"===r||"right"===r)&&(t=n,n=r,r=t),e[0]=K[n]||n,e[1]=K[r]||r,e.join(" ")},te=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,s=e.t,o=s.style,a=e.u,c=s._gsap;if("all"===a||!0===a)o.cssText="",r=1;else for(i=(a=a.split(",")).length;--i>-1;)f[n=a[i]]&&(r=1,n="transformOrigin"===n?k:T),q(s,n);r&&(q(s,T),c&&(c.svg&&s.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",tl(s,1),c.uncache=1,Y(o)))}},tn={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var s=t._pt=new u.J7(t._pt,e,n,0,0,te);return s.u=r,s.pr=-10,s.tween=i,t._props.push(n),1}}},tr=[1,0,0,1,0,0],ti={},ts=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},to=function(t){var e=D(t,T);return ts(e)?tr:e.substr(7).match(u.vX).map(u.E_)},ta=function(t,e){var n,r,s,o,a=t._gsap||(0,u.a0)(t),c=t.style,l=to(t);return a.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(l=[(s=t.transform.baseVal.consolidate().matrix).a,s.b,s.c,s.d,s.e,s.f]).join(",")?tr:l:(l!==tr||t.offsetParent||t===i||a.svg||(s=c.display,c.display="block",(n=t.parentNode)&&(t.offsetParent||t.getBoundingClientRect().width)||(o=1,r=t.nextElementSibling,i.appendChild(t)),l=to(t),s?c.display=s:q(t,"display"),o&&(r?n.insertBefore(t,r):n?n.appendChild(t):i.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},tc=function(t,e,n,r,i,s){var o,a,c,l,u=t._gsap,f=i||ta(t,!0),p=u.xOrigin||0,h=u.yOrigin||0,d=u.xOffset||0,g=u.yOffset||0,y=f[0],m=f[1],v=f[2],b=f[3],x=f[4],w=f[5],O=e.split(" "),_=parseFloat(O[0])||0,E=parseFloat(O[1])||0;n?f!==tr&&(a=y*b-m*v)&&(c=b/a*_+-v/a*E+(v*w-b*x)/a,l=-m/a*_+y/a*E-(y*w-m*x)/a,_=c,E=l):(_=(o=V(t)).x+(~O[0].indexOf("%")?_/100*o.width:_),E=o.y+(~(O[1]||O[0]).indexOf("%")?E/100*o.height:E)),r||!1!==r&&u.smooth?(x=_-p,w=E-h,u.xOffset=d+(x*y+w*v)-x,u.yOffset=g+(x*m+w*b)-w):u.xOffset=u.yOffset=0,u.xOrigin=_,u.yOrigin=E,u.smooth=!!r,u.origin=e,u.originIsAbsolute=!!n,t.style[k]="0px 0px",s&&(H(s,u,"xOrigin",p,_),H(s,u,"yOrigin",h,E),H(s,u,"xOffset",d,u.xOffset),H(s,u,"yOffset",g,u.yOffset)),t.setAttribute("data-svg-origin",_+" "+E)},tl=function(t,e){var n=t._gsap||new u.n6(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,s,o,a,c,f,g,y,m,v,b,x,w,O,_,E,C,S,A,M,P,j,F,Y,z,B,N,W,X,R,I,L=t.style,V=n.scaleX<0,q=getComputedStyle(t),H=D(t,k)||"0";return r=i=s=c=f=g=y=m=v=0,o=a=1,n.svg=!!(t.getCTM&&$(t)),q.translate&&(("none"!==q.translate||"none"!==q.scale||"none"!==q.rotate)&&(L[T]=("none"!==q.translate?"translate3d("+(q.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==q.rotate?"rotate("+q.rotate+") ":"")+("none"!==q.scale?"scale("+q.scale.split(" ").join(",")+") ":"")+("none"!==q[T]?q[T]:"")),L.scale=L.rotate=L.translate="none"),w=ta(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),H=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),tc(t,F||H,!!F||n.originIsAbsolute,!1!==n.smooth,w)),b=n.xOrigin||0,x=n.yOrigin||0,w!==tr&&(C=w[0],S=w[1],A=w[2],M=w[3],r=P=w[4],i=j=w[5],6===w.length?(o=Math.sqrt(C*C+S*S),a=Math.sqrt(M*M+A*A),c=C||S?d(S,C)*p:0,(y=A||M?d(A,M)*p+c:0)&&(a*=Math.abs(Math.cos(y*h))),n.svg&&(r-=b-(b*C+x*A),i-=x-(b*S+x*M))):(I=w[6],X=w[7],B=w[8],N=w[9],W=w[10],R=w[11],r=w[12],i=w[13],s=w[14],f=(O=d(I,W))*p,O&&(F=P*(_=Math.cos(-O))+B*(E=Math.sin(-O)),Y=j*_+N*E,z=I*_+W*E,B=-(P*E)+B*_,N=-(j*E)+N*_,W=-(I*E)+W*_,R=-(X*E)+R*_,P=F,j=Y,I=z),g=(O=d(-A,W))*p,O&&(F=C*(_=Math.cos(-O))-B*(E=Math.sin(-O)),Y=S*_-N*E,z=A*_-W*E,R=M*E+R*_,C=F,S=Y,A=z),c=(O=d(S,C))*p,O&&(F=C*(_=Math.cos(O))+S*(E=Math.sin(O)),Y=P*_+j*E,S=S*_-C*E,j=j*_-P*E,C=F,P=Y),f&&Math.abs(f)+Math.abs(c)>359.9&&(f=c=0,g=180-g),o=(0,u.E_)(Math.sqrt(C*C+S*S+A*A)),a=(0,u.E_)(Math.sqrt(j*j+I*I)),y=Math.abs(O=d(P,j))>2e-4?O*p:0,v=R?1/(R<0?-R:R):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!ts(D(t,T)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&270>Math.abs(y)&&(V?(o*=-1,y+=c<=0?180:-180,c+=c<=0?180:-180):(a*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=r-((n.xPercent=r&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+"px",n.y=i-((n.yPercent=i&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+"px",n.z=s+"px",n.scaleX=(0,u.E_)(o),n.scaleY=(0,u.E_)(a),n.rotation=(0,u.E_)(c)+"deg",n.rotationX=(0,u.E_)(f)+"deg",n.rotationY=(0,u.E_)(g)+"deg",n.skewX=y+"deg",n.skewY=m+"deg",n.transformPerspective=v+"px",(n.zOrigin=parseFloat(H.split(" ")[2])||!e&&n.zOrigin||0)&&(L[k]=tu(H)),n.xOffset=n.yOffset=0,n.force3D=u.Yz.force3D,n.renderTransform=n.svg?tg:l?td:tp,n.uncache=0,n},tu=function(t){return(t=t.split(" "))[0]+" "+t[1]},tf=function(t,e,n){var r=(0,u.l_)(e);return(0,u.E_)(parseFloat(e)+parseFloat(U(t,"x",n+"px",r)))+r},tp=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,td(t,e)},th="0deg",td=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,s=n.x,o=n.y,a=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,f=n.skewX,p=n.skewY,d=n.scaleX,g=n.scaleY,y=n.transformPerspective,m=n.force3D,v=n.target,b=n.zOrigin,x="",w="auto"===m&&t&&1!==t||!0===m;if(b&&(u!==th||l!==th)){var O,_=parseFloat(l)*h,E=Math.sin(_),C=Math.cos(_);s=tf(v,s,-(E*(O=Math.cos(_=parseFloat(u)*h))*b)),o=tf(v,o,-(-Math.sin(_)*b)),a=tf(v,a,-(C*O*b)+b)}"0px"!==y&&(x+="perspective("+y+") "),(r||i)&&(x+="translate("+r+"%, "+i+"%) "),(w||"0px"!==s||"0px"!==o||"0px"!==a)&&(x+="0px"!==a||w?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+") "),c!==th&&(x+="rotate("+c+") "),l!==th&&(x+="rotateY("+l+") "),u!==th&&(x+="rotateX("+u+") "),(f!==th||p!==th)&&(x+="skew("+f+", "+p+") "),(1!==d||1!==g)&&(x+="scale("+d+", "+g+") "),v.style[T]=x||"translate(0, 0)"},tg=function(t,e){var n,r,i,s,o,a=e||this,c=a.xPercent,l=a.yPercent,f=a.x,p=a.y,d=a.rotation,g=a.skewX,y=a.skewY,m=a.scaleX,v=a.scaleY,b=a.target,x=a.xOrigin,w=a.yOrigin,O=a.xOffset,_=a.yOffset,E=a.forceCSS,C=parseFloat(f),S=parseFloat(p);d=parseFloat(d),g=parseFloat(g),(y=parseFloat(y))&&(g+=y=parseFloat(y),d+=y),d||g?(d*=h,g*=h,n=Math.cos(d)*m,r=Math.sin(d)*m,i=-(Math.sin(d-g)*v),s=Math.cos(d-g)*v,g&&(y*=h,i*=o=Math.sqrt(1+(o=Math.tan(g-y))*o),s*=o,y&&(n*=o=Math.sqrt(1+(o=Math.tan(y))*o),r*=o)),n=(0,u.E_)(n),r=(0,u.E_)(r),i=(0,u.E_)(i),s=(0,u.E_)(s)):(n=m,s=v,r=i=0),(C&&!~(f+"").indexOf("px")||S&&!~(p+"").indexOf("px"))&&(C=U(b,"x",f,"px"),S=U(b,"y",p,"px")),(x||w||O||_)&&(C=(0,u.E_)(C+x-(x*n+w*i)+O),S=(0,u.E_)(S+w-(x*r+w*s)+_)),(c||l)&&(o=b.getBBox(),C=(0,u.E_)(C+c/100*o.width),S=(0,u.E_)(S+l/100*o.height)),o="matrix("+n+","+r+","+i+","+s+","+C+","+S+")",b.setAttribute("transform",o),E&&(b.style[T]=o)},ty=function(t,e,n,r,i){var s,o,a=(0,u.vQ)(i),c=parseFloat(i)*(a&&~i.indexOf("rad")?p:1)-r,l=r+c+"deg";return a&&("short"===(s=i.split("_")[1])&&(c%=360)!=c%180&&(c+=c<0?360:-360),"cw"===s&&c<0?c=(c+36e9)%360-360*~~(c/360):"ccw"===s&&c>0&&(c=(c-36e9)%360-360*~~(c/360))),t._pt=o=new u.J7(t._pt,e,n,r,c,x),o.e=l,o.u="deg",t._props.push(n),o},tm=function(t,e){for(var n in e)t[n]=e[n];return t},tv=function(t,e,n){var r,i,s,o,a,c,l,p=tm({},n._gsap),h=n.style;for(i in p.svg?(s=n.getAttribute("transform"),n.setAttribute("transform",""),h[T]=e,r=tl(n,1),q(n,T),n.setAttribute("transform",s)):(s=getComputedStyle(n)[T],h[T]=e,r=tl(n,1),h[T]=s),f)(s=p[i])!==(o=r[i])&&0>"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)&&(a=(0,u.l_)(s)!==(l=(0,u.l_)(o))?U(n,i,s,l):parseFloat(s),c=parseFloat(o),t._pt=new u.J7(t._pt,r,i,a,c-a,b),t._pt.u=l||0,t._props.push(i));tm(r,p)};(0,u.fA)("padding,margin,Width,Radius",function(t,e){var n="Right",r="Bottom",i="Left",s=(e<3?["Top",n,r,i]:["Top"+i,"Top"+n,r+n,r+i]).map(function(n){return e<2?t+n:"border"+n+t});tn[e>1?"border"+t:t]=function(t,e,n,r,i){var o,a;if(arguments.length<4)return 5===(a=(o=s.map(function(e){return G(t,e,n)})).join(" ")).split(o[0]).length?o[0]:a;o=(r+"").split(" "),a={},s.forEach(function(t,e){return a[t]=o[e]=o[e]||o[(e-1)/2|0]}),t.init(e,a,i)}});var tb={name:"css",register:R,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var o,a,c,l,p,h,d,g,y,x,_,E,C,S,A,M,P=this._props,j=t.style,F=n.vars.startAt;for(d in s||R(),this.styles=this.styles||B(t),M=this.styles.props,this.tween=n,e){if("autoRound"!==d){if(a=e[d],!(u.wU[d]&&(0,u.Zm)(d,e,n,r,t,i))){if(p=typeof a,h=tn[d],"function"===p&&(p=typeof(a=a.call(n,r,t,i))),"string"===p&&~a.indexOf("random(")&&(a=(0,u.Vy)(a)),h)h(this,t,d,a,n)&&(A=1);else if("--"===d.substr(0,2))o=(getComputedStyle(t).getPropertyValue(d)+"").trim(),a+="",u.qA.lastIndex=0,u.qA.test(o)||(g=(0,u.l_)(o),y=(0,u.l_)(a)),y?g!==y&&(o=U(t,d,o,y)+y):g&&(a+=g),this.add(j,"setProperty",o,a,r,i,0,0,d),P.push(d),M.push(d,0,j[d]);else if("undefined"!==p){if(F&&d in F?(o="function"==typeof F[d]?F[d].call(n,r,t,i):F[d],(0,u.vQ)(o)&&~o.indexOf("random(")&&(o=(0,u.Vy)(o)),(0,u.l_)(o+"")||"auto"===o||(o+=u.Yz.units[d]||(0,u.l_)(G(t,d))||""),"="===(o+"").charAt(1)&&(o=G(t,d))):o=G(t,d),l=parseFloat(o),(x="string"===p&&"="===a.charAt(1)&&a.substr(0,2))&&(a=a.substr(2)),c=parseFloat(a),d in v&&("autoAlpha"===d&&(1===l&&"hidden"===G(t,"visibility")&&c&&(l=0),M.push("visibility",0,j.visibility),H(this,j,"visibility",l?"inherit":"hidden",c?"inherit":"hidden",!c)),"scale"!==d&&"transform"!==d&&~(d=v[d]).indexOf(",")&&(d=d.split(",")[0])),_=d in f){if(this.styles.save(d),E||((C=t._gsap).renderTransform&&!e.parseTransform||tl(t,e.parseTransform),S=!1!==e.smoothOrigin&&C.smooth,(E=this._pt=new u.J7(this._pt,j,T,0,1,C.renderTransform,C,0,-1)).dep=1),"scale"===d)this._pt=new u.J7(this._pt,C,"scaleY",C.scaleY,(x?(0,u.B0)(C.scaleY,x+c):c)-C.scaleY||0,b),this._pt.u=0,P.push("scaleY",d),d+="X";else if("transformOrigin"===d){M.push(k,0,j[k]),a=tt(a),C.svg?tc(t,a,0,S,0,this):((y=parseFloat(a.split(" ")[2])||0)!==C.zOrigin&&H(this,C,"zOrigin",C.zOrigin,y),H(this,j,d,tu(o),tu(a)));continue}else if("svgOrigin"===d){tc(t,a,1,S,0,this);continue}else if(d in ti){ty(this,C,d,l,x?(0,u.B0)(l,x+a):a);continue}else if("smoothOrigin"===d){H(this,C,"smooth",C.smooth,a);continue}else if("force3D"===d){C[d]=a;continue}else if("transform"===d){tv(this,a,t);continue}}else d in j||(d=X(d)||d);if(_||(c||0===c)&&(l||0===l)&&!m.test(a)&&d in j)g=(o+"").substr((l+"").length),c||(c=0),y=(0,u.l_)(a)||(d in u.Yz.units?u.Yz.units[d]:g),g!==y&&(l=U(t,d,o,y)),this._pt=new u.J7(this._pt,_?C:j,d,l,(x?(0,u.B0)(l,x+c):c)-l,_||"px"!==y&&"zIndex"!==d||!1===e.autoRound?b:O),this._pt.u=y||0,g!==y&&"%"!==y&&(this._pt.b=o,this._pt.r=w);else if(d in j)Q.call(this,t,d,o,x?x+a:a);else if(d in t)this.add(t,d,o||t[d],x?x+a:a,r,i);else if("parseTransform"!==d){(0,u.dg)(d,a);continue}_||(d in j?M.push(d,0,j[d]):"function"==typeof t[d]?M.push(d,2,t[d]()):M.push(d,1,o||t[d])),P.push(d)}}}}A&&(0,u.St)(this)},render:function(t,e){if(e.tween._time||!c())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:G,aliases:v,getSetter:function(t,e,n){var r=v[e];return r&&0>r.indexOf(",")&&(e=r),e in f&&e!==k&&(t._gsap.x||G(t,"x"))?n&&a===n?"scale"===e?M:A:(a=n||{},"scale"===e?P:j):t.style&&!(0,u.OF)(t.style[e])?C:~e.indexOf("-")?S:(0,u.Dx)(t,e)},core:{_removeProperty:q,_getMatrix:ta}};u.os.utils.checkPrefix=X,u.os.core.getStyleSaver=B,function(t,e,n,r){var i=(0,u.fA)(t+","+e+","+n,function(t){f[t]=1});(0,u.fA)(e,function(t){u.Yz.units[t]="deg",ti[t]=1}),v[i[13]]=t+","+e,(0,u.fA)(r,function(t){var e=t.split(":");v[e[1]]=i[e[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),(0,u.fA)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){u.Yz.units[t]="px"}),u.os.registerPlugin(tb);var tx=u.os.registerPlugin(tb)||u.os;tx.core.Tween},4496:(t,e,n)=>{n.d(e,{L:()=>u});var r=n(6092),i=n(1921);let s="undefined"!=typeof document?r.useLayoutEffect:r.useEffect,o=t=>t&&!Array.isArray(t)&&"object"==typeof t,a=[],c={},l=i.Ay,u=(t,e=a)=>{let n=c;o(t)?(n=t,t=null,e="dependencies"in n?n.dependencies:a):o(e)&&(e="dependencies"in(n=e)?n.dependencies:a),t&&"function"!=typeof t&&console.warn("First parameter must be a function or config object");let{scope:i,revertOnUpdate:u}=n,f=(0,r.useRef)(!1),p=(0,r.useRef)(l.context(()=>{},i)),h=(0,r.useRef)(t=>p.current.add(null,t)),d=e&&e.length&&!u;return d&&s(()=>(f.current=!0,()=>p.current.revert()),a),s(()=>{if(t&&p.current.add(t,i),!d||!f.current)return()=>p.current.revert()},e),{context:p.current,contextSafe:h.current}};u.register=t=>{l=t},u.headless=!0},9641:(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach(function(e){var r;r=n[e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){i=!0,s=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}}(t,e)||l(t,e)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||l(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){return Object.getOwnPropertyNames(Object(t)).reduce(function(n,r){var i=Object.getOwnPropertyDescriptor(Object(t),r),s=Object.getOwnPropertyDescriptor(Object(e),r);return Object.defineProperty(n,r,s||i)},{})}function p(t){return"string"==typeof t}function h(t){return Array.isArray(t)}function d(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=f(e);return void 0!==n.types?t=n.types:void 0!==n.split&&(t=n.split),void 0!==t&&(n.types=(p(t)||h(t)?String(t):"").split(",").map(function(t){return String(t).trim()}).filter(function(t){return/((line)|(word)|(char))/i.test(t)})),(n.absolute||n.position)&&(n.absolute=n.absolute||/absolute/.test(e.position)),n}function g(t){var e=p(t)||h(t)?String(t):"";return{none:!e,lines:/line/i.test(e),words:/word/i.test(e),chars:/char/i.test(e)}}function y(t){return null!==t&&"object"==typeof t}function m(t){return y(t)&&/^(1|3|11)$/.test(t.nodeType)}function v(t){var e;return h(t)?t:null==t?[]:y(t)&&"number"==typeof(e=t.length)&&e>-1&&e%1==0?Array.prototype.slice.call(t):[t]}function b(t){var e=t;return p(t)&&(e=/^(#[a-z]\w+)$/.test(t.trim())?document.getElementById(t.trim().slice(1)):document.querySelectorAll(t)),v(e).reduce(function(t,e){return[].concat(c(t),c(v(e).filter(m)))},[])}n.d(e,{A:()=>J}),function(){function t(){for(var t=arguments.length,e=0;e<t;e++){var n=e<0||arguments.length<=e?void 0:arguments[e];1===n.nodeType||11===n.nodeType?this.appendChild(n):this.appendChild(document.createTextNode(String(n)))}}function e(){for(;this.lastChild;)this.removeChild(this.lastChild);arguments.length&&this.append.apply(this,arguments)}function n(){for(var t=this.parentNode,e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.length;if(t)for(i||t.removeChild(this);i--;){var s=n[i];"object"!=typeof s?s=this.ownerDocument.createTextNode(s):s.parentNode&&s.parentNode.removeChild(s),i?t.insertBefore(this.previousSibling,s):t.replaceChild(s,this)}}"undefined"==typeof Element||(Element.prototype.append||(Element.prototype.append=t,DocumentFragment.prototype.append=t),Element.prototype.replaceChildren||(Element.prototype.replaceChildren=e,DocumentFragment.prototype.replaceChildren=e),Element.prototype.replaceWith||(Element.prototype.replaceWith=n,DocumentFragment.prototype.replaceWith=n))}();var x=Object.entries,w="_splittype",O={},_=0;function E(t,e,n){if(!y(t))return console.warn("[data.set] owner is not an object"),null;var r=t[w]||(t[w]=++_),i=O[r]||(O[r]={});return void 0===n?e&&Object.getPrototypeOf(e)===Object.prototype&&(O[r]=o(o({},i),e)):void 0!==e&&(i[e]=n),n}function C(t,e){var n=y(t)?t[w]:null,r=n&&O[n]||{};return void 0===e?r:r[e]}function S(t){var e=t&&t[w];e&&(delete t[e],delete O[e])}var A="\ud800-\udfff",M="\\u0300-\\u036f\\ufe20-\\ufe23",P="\\u20d0-\\u20f0",j="\\ufe0e\\ufe0f",T="[".concat(M).concat(P,"]"),k="\ud83c[\udffb-\udfff]",F="(?:".concat(T,"|").concat(k,")"),Y="[^".concat(A,"]"),z="(?:\ud83c[\udde6-\uddff]){2}",B="[\ud800-\udbff][\udc00-\udfff]",N="\\u200d",D="".concat(F,"?"),W="[".concat(j,"]?"),X="(?:"+N+"(?:"+[Y,z,B].join("|")+")"+W+D+")*",R="(?:".concat(["".concat(Y).concat(T,"?"),T,z,B,"[".concat(A,"]")].join("|"),"\n)"),I=RegExp("".concat(k,"(?=").concat(k,")|").concat(R).concat(W+D+X),"g"),L=[N,A,M,P,j],V=RegExp("[".concat(L.join(""),"]"));function $(t,e){var n=document.createElement(t);return e&&Object.keys(e).forEach(function(t){var r=e[t],i=p(r)?r.trim():r;null!==i&&""!==i&&("children"===t?n.append.apply(n,c(v(i))):n.setAttribute(t,i))}),n}var q={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",types:["lines","words","chars"],absolute:!1,tagName:"div"},H=f(q,{}),J=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t),this.isSplit=!1,this.settings=f(H,d(n)),this.elements=b(e),this.split()}return i(t,null,[{key:"clearData",value:function(){Object.keys(O).forEach(function(t){delete O[t]})}},{key:"setDefaults",value:function(t){return H=f(H,d(t)),q}},{key:"revert",value:function(t){b(t).forEach(function(t){var e=C(t),n=e.isSplit,r=e.html,i=e.cssWidth,s=e.cssHeight;n&&(t.innerHTML=r,t.style.width=i||"",t.style.height=s||"",S(t))})}},{key:"create",value:function(e,n){return new t(e,n)}},{key:"data",get:function(){return O}},{key:"defaults",get:function(){return H},set:function(t){H=f(H,d(t))}}]),i(t,[{key:"split",value:function(t){var e=this;this.revert(),this.elements.forEach(function(t){E(t,"html",t.innerHTML)}),this.lines=[],this.words=[],this.chars=[];var n=[window.pageXOffset,window.pageYOffset];void 0!==t&&(this.settings=f(this.settings,d(t)));var r=g(this.settings.types);!r.none&&(this.elements.forEach(function(t){E(t,"isRoot",!0);var n=function t(e,n){var r,i,s,o,a,l,u,h=e.nodeType,d={words:[],chars:[]};if(!/(1|3|11)/.test(h))return d;if(3===h&&/\S/.test(e.nodeValue))return i=g((r=f(q,r=n)).types),s=r.tagName,o=e.nodeValue,a=document.createDocumentFragment(),l=[],u=[],/^\s/.test(o)&&a.append(" "),l=(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return(t?String(t):"").trim().replace(/\s+/g," ").split(e)})(o).reduce(function(t,e,n,o){var l,f;return i.chars&&(f=(function(t){var e,n,r,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(t=null==(e=t)?"":String(e))&&p(t)&&!s&&(n=t,V.test(n))?(i=r=t,V.test(i))?r.match(I)||[]:r.split(""):t.split(s)})(e).map(function(t){var e=$(s,{class:"".concat(r.splitClass," ").concat(r.charClass),style:"display: inline-block;",children:t});return E(e,"isChar",!0),u=[].concat(c(u),[e]),e})),i.words||i.lines?(E(l=$(s,{class:"".concat(r.wordClass," ").concat(r.splitClass),style:"display: inline-block; ".concat(i.words&&r.absolute?"position: relative;":""),children:i.chars?f:e}),{isWord:!0,isWordStart:!0,isWordEnd:!0}),a.appendChild(l)):f.forEach(function(t){a.appendChild(t)}),n<o.length-1&&a.append(" "),i.words?t.concat(l):t},[]),/\s$/.test(o)&&a.append(" "),e.replaceWith(a),{words:l,chars:u};var y=v(e.childNodes);if(y.length&&(E(e,"isSplit",!0),!C(e).isRoot)){e.style.display="inline-block",e.style.position="relative";var m=e.nextSibling,b=e.previousSibling,x=e.textContent||"",w=m?m.textContent:" ",O=b?b.textContent:" ";E(e,{isWordEnd:/\s$/.test(x)||/^\s/.test(w),isWordStart:/^\s/.test(x)||/\s$/.test(O)})}return y.reduce(function(e,r){var i=t(r,n),s=i.words,o=i.chars;return{words:[].concat(c(e.words),c(s)),chars:[].concat(c(e.chars),c(o))}},d)}(t,e.settings),r=n.words,i=n.chars;e.words=[].concat(c(e.words),c(r)),e.chars=[].concat(c(e.chars),c(i))}),this.elements.forEach(function(t){if(r.lines||e.settings.absolute){var i,s,o,l,u,f,p,h,d,y,m,b,x,w,O,_,A,M=(u=g((i=e.settings).types),f=i.tagName,p=t.getElementsByTagName("*"),h=[],d=[],y=null,m=[],b=t.parentElement,x=t.nextElementSibling,w=document.createDocumentFragment(),_=(O=window.getComputedStyle(t)).textAlign,A=.2*parseFloat(O.fontSize),i.absolute&&(l={left:t.offsetLeft,top:t.offsetTop,width:t.offsetWidth},o=t.offsetWidth,s=t.offsetHeight,E(t,{cssWidth:t.style.width,cssHeight:t.style.height})),v(p).forEach(function(e){var r=e.parentElement===t,s=function(t,e,n,r){if(!n.absolute)return{top:e?t.offsetTop:null};var i=t.offsetParent,s=a(r,2),o=s[0],c=s[1],l=0,u=0;if(i&&i!==document.body){var f=i.getBoundingClientRect();l=f.x+o,u=f.y+c}var p=t.getBoundingClientRect(),h=p.width,d=p.height,g=p.x;return{width:h,height:d,top:p.y+c-u,left:g+o-l}}(e,r,i,n),o=s.width,c=s.height,l=s.top,f=s.left;!/^br$/i.test(e.nodeName)&&(u.lines&&r&&((null===y||l-y>=A)&&(y=l,h.push(d=[])),d.push(e)),i.absolute&&E(e,{top:l,left:f,width:o,height:c}))}),b&&b.removeChild(t),u.lines&&(m=h.map(function(t){var e=$(f,{class:"".concat(i.splitClass," ").concat(i.lineClass),style:"display: block; text-align: ".concat(_,"; width: 100%;")});E(e,"isLine",!0);var n={height:0,top:1e4};return w.appendChild(e),t.forEach(function(t,r,i){var s=C(t),o=s.isWordEnd,a=s.top,c=s.height,l=i[r+1];n.height=Math.max(n.height,c),n.top=Math.min(n.top,a),e.appendChild(t),o&&C(l).isWordStart&&e.append(" ")}),i.absolute&&E(e,{height:n.height,top:n.top}),e}),u.words||function t(e){C(e).isWord?(S(e),e.replaceWith.apply(e,c(e.childNodes))):v(e.children).forEach(function(e){return t(e)})}(w),t.replaceChildren(w)),i.absolute&&(t.style.width="".concat(t.style.width||o,"px"),t.style.height="".concat(s,"px"),v(p).forEach(function(t){var e=C(t),n=e.isLine,r=e.top,i=e.left,s=e.width,o=e.height,a=C(t.parentElement),c=!n&&a.isLine;t.style.top="".concat(c?r-a.top:r,"px"),t.style.left=n?"".concat(l.left,"px"):"".concat(i-(c?l.left:0),"px"),t.style.height="".concat(o,"px"),t.style.width=n?"".concat(l.width,"px"):"".concat(s,"px"),t.style.position="absolute"})),b&&(x?b.insertBefore(t,x):b.appendChild(t)),m);e.lines=[].concat(c(e.lines),c(M))}}),this.isSplit=!0,window.scrollTo(n[0],n[1]),x(O).forEach(function(t){var e=a(t,2),n=e[0],r=e[1],i=r.isRoot,s=r.isSplit;i&&s||(O[n]=null,delete O[n])}))}},{key:"revert",value:function(){this.isSplit&&(this.lines=null,this.words=null,this.chars=null,this.isSplit=!1),t.revert(this.elements)}}]),t}()}}]);