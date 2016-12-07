// https://d3js.org Version 4.4.0. Copyright 2016 Mike Bostock.
(function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.d3=t.d3||{})})(this,function(t){"use strict";function n(t){return function(n,e){return Ms(t(n),e)}}function e(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=Fs?i*=10:o>=Is?i*=5:o>=Ys&&(i*=2),n<t?-i:i}function r(t){return t.length}function i(){}function o(t,n){var e=new i;if(t instanceof i)t.each(function(t,n){e.set(n,t)});else if(Array.isArray(t)){var r,o=-1,u=t.length;if(null==n)for(;++o<u;)e.set(o,t[o]);else for(;++o<u;)e.set(n(r=t[o],o,t),r)}else if(t)for(var a in t)e.set(a,t[a]);return e}function u(){return{}}function a(t,n,e){t[n]=e}function c(){return o()}function s(t,n,e){t.set(n,e)}function f(){}function l(t,n){var e=new f;if(t instanceof f)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}function h(t){return+t}function p(t){return t*t}function d(t){return t*(2-t)}function v(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function _(t){return t*t*t}function y(t){return--t*t*t+1}function g(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function m(t){return 1-Math.cos(t*Tf)}function x(t){return Math.sin(t*Tf)}function b(t){return(1-Math.cos(Mf*t))/2}function w(t){return Math.pow(2,10*t-10)}function M(t){return 1-Math.pow(2,-10*t)}function T(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function N(t){return 1-Math.sqrt(1-t*t)}function k(t){return Math.sqrt(1- --t*t)}function S(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function E(t){return 1-A(1-t)}function A(t){return(t=+t)<Nf?qf*t*t:t<Sf?qf*(t-=kf)*t+Ef:t<Cf?qf*(t-=Af)*t+zf:qf*(t-=Pf)*t+Rf}function C(t){return((t*=2)<=1?1-A(1-t):A(t-1)+1)/2}function z(t,n){return t[0]-n[0]||t[1]-n[1]}function P(t){for(var n=t.length,e=[0,1],r=2,i=2;i<n;++i){for(;r>1&&Wf(t[e[r-2]],t[e[r-1]],t[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function R(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function q(){return new R}function L(t,n,e,r){if(isNaN(n)||isNaN(e))return t;var i,o,u,a,c,s,f,l,h,p=t._root,d={data:r},v=t._x0,_=t._y0,y=t._x1,g=t._y1;if(!p)return t._root=d,t;for(;p.length;)if((s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u,i=p,!(p=p[l=f<<1|s]))return i[l]=d,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&e===c)return d.next=p,i?i[l]=d:t._root=d,t;do i=i?i[l]=new Array(4):t._root=new Array(4),(s=n>=(o=(v+y)/2))?v=o:y=o,(f=e>=(u=(_+g)/2))?_=u:g=u;while((l=f<<1|s)===(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=d,t}function U(t){var n,e,r,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,s=1/0,f=-(1/0),l=-(1/0);for(e=0;e<o;++e)isNaN(r=+this._x.call(null,n=t[e]))||isNaN(i=+this._y.call(null,n))||(u[e]=r,a[e]=i,r<c&&(c=r),r>f&&(f=r),i<s&&(s=i),i>l&&(l=i));for(f<c&&(c=this._x0,f=this._x1),l<s&&(s=this._y0,l=this._y1),this.cover(c,s).cover(f,l),e=0;e<o;++e)L(this,u[e],a[e],t[e]);return this}function D(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function O(t){return t[0]}function F(t){return t[1]}function I(t,n,e){var r=new Y(null==n?O:n,null==e?F:e,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Y(t,n,e,r,i,o){this._x=t,this._y=n,this._x0=e,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function B(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}function j(t){if(!(t>=1))throw new Error;this._size=t,this._call=this._error=null,this._tasks=[],this._data=[],this._waiting=this._active=this._ended=this._start=0}function H(t){if(!t._start)try{X(t)}catch(n){if(t._tasks[t._ended+t._active-1])W(t,n);else if(!t._data)throw n}}function X(t){for(;t._start=t._waiting&&t._active<t._size;){var n=t._ended+t._active,e=t._tasks[n],r=e.length-1,i=e[r];e[r]=V(t,n),--t._waiting,++t._active,e=i.apply(null,e),t._tasks[n]&&(t._tasks[n]=e||_l)}}function V(t,n){return function(e,r){t._tasks[n]&&(--t._active,++t._ended,t._tasks[n]=null,null==t._error&&(null!=e?W(t,e):(t._data[n]=r,t._waiting?H(t):$(t))))}}function W(t,n){var e,r=t._tasks.length;for(t._error=n,t._data=void 0,t._waiting=NaN;--r>=0;)if((e=t._tasks[r])&&(t._tasks[r]=null,e.abort))try{e.abort()}catch(t){}t._active=NaN,$(t)}function $(t){if(!t._active&&t._call){var n=t._data;t._data=void 0,t._call(t._error,n)}}function Z(t){return new j(arguments.length?+t:1/0)}function G(t){return t.innerRadius}function J(t){return t.outerRadius}function Q(t){return t.startAngle}function K(t){return t.endAngle}function tt(t){return t&&t.padAngle}function nt(t){return t>=1?xl:t<=-1?-xl:Math.asin(t)}function et(t,n,e,r,i,o,u,a){var c=e-t,s=r-n,f=u-i,l=a-o,h=(f*(n-o)-l*(t-i))/(l*c-f*s);return[t+h*c,n+h*s]}function rt(t,n,e,r,i,o,u){var a=t-e,c=n-r,s=(u?o:-o)/Math.sqrt(a*a+c*c),f=s*c,l=-s*a,h=t+f,p=n+l,d=e+f,v=r+l,_=(h+d)/2,y=(p+v)/2,g=d-h,m=v-p,x=g*g+m*m,b=i-o,w=h*v-d*p,M=(m<0?-1:1)*Math.sqrt(Math.max(0,b*b*x-w*w)),T=(w*m-g*M)/x,N=(-w*g-m*M)/x,k=(w*m+g*M)/x,S=(-w*g+m*M)/x,E=T-_,A=N-y,C=k-_,z=S-y;return E*E+A*A>C*C+z*z&&(T=k,N=S),{cx:T,cy:N,x01:-f,y01:-l,x11:T*(i/b-1),y11:N*(i/b-1)}}function it(t){this._context=t}function ot(t){return t[0]}function ut(t){return t[1]}function at(t){this._curve=t}function ct(t){function n(n){return new at(t(n))}return n._curve=t,n}function st(t){var n=t.curve;return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?n(ct(t)):n()._curve},t}function ft(t,n,e){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+e)/6)}function lt(t){this._context=t}function ht(t){this._context=t}function pt(t){this._context=t}function dt(t,n){this._basis=new lt(t),this._beta=n}function vt(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function _t(t,n){this._context=t,this._k=(1-n)/6}function yt(t,n){this._context=t,this._k=(1-n)/6}function gt(t,n){this._context=t,this._k=(1-n)/6}function mt(t,n,e){var r=t._x1,i=t._y1,o=t._x2,u=t._y2;if(t._l01_a>gl){var a=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*a-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,i=(i*a-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>gl){var s=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,f=3*t._l23_a*(t._l23_a+t._l12_a);o=(o*s+t._x1*t._l23_2a-n*t._l12_2a)/f,u=(u*s+t._y1*t._l23_2a-e*t._l12_2a)/f}t._context.bezierCurveTo(r,i,o,u,t._x2,t._y2)}function xt(t,n){this._context=t,this._alpha=n}function bt(t,n){this._context=t,this._alpha=n}function wt(t,n){this._context=t,this._alpha=n}function Mt(t){this._context=t}function Tt(t){return t<0?-1:1}function Nt(t,n,e){var r=t._x1-t._x0,i=n-t._x1,o=(t._y1-t._y0)/(r||i<0&&-0),u=(e-t._y1)/(i||r<0&&-0),a=(o*i+u*r)/(r+i);return(Tt(o)+Tt(u))*Math.min(Math.abs(o),Math.abs(u),.5*Math.abs(a))||0}function kt(t,n){var e=t._x1-t._x0;return e?(3*(t._y1-t._y0)/e-n)/2:n}function St(t,n,e){var r=t._x0,i=t._y0,o=t._x1,u=t._y1,a=(o-r)/3;t._context.bezierCurveTo(r+a,i+a*n,o-a,u-a*e,o,u)}function Et(t){this._context=t}function At(t){this._context=new Ct(t)}function Ct(t){this._context=t}function zt(t){return new Et(t)}function Pt(t){return new At(t)}function Rt(t){this._context=t}function qt(t){var n,e,r=t.length-1,i=new Array(r),o=new Array(r),u=new Array(r);for(i[0]=0,o[0]=2,u[0]=t[0]+2*t[1],n=1;n<r-1;++n)i[n]=1,o[n]=4,u[n]=4*t[n]+2*t[n+1];for(i[r-1]=2,o[r-1]=7,u[r-1]=8*t[r-1]+t[r],n=1;n<r;++n)e=i[n]/o[n-1],o[n]-=e,u[n]-=e*u[n-1];for(i[r-1]=u[r-1]/o[r-1],n=r-2;n>=0;--n)i[n]=(u[n]-i[n+1])/o[n];for(o[r-1]=(t[r]+i[r-1])/2,n=0;n<r-1;++n)o[n]=2*t[n+1]-i[n+1];return[i,o]}function Lt(t,n){this._context=t,this._t=n}function Ut(t){return new Lt(t,0)}function Dt(t){return new Lt(t,1)}function Ot(t,n){return t[n]}function Ft(t){for(var n,e=0,r=-1,i=t.length;++r<i;)(n=+t[r][1])&&(e+=n);return e}function It(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function Yt(){}function Bt(t){var n;return t=(t+"").trim().toLowerCase(),(n=Ah.exec(t))?(n=parseInt(n[1],16),new Wt(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=Ch.exec(t))?jt(parseInt(n[1],16)):(n=zh.exec(t))?new Wt(n[1],n[2],n[3],1):(n=Ph.exec(t))?new Wt(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=Rh.exec(t))?Ht(n[1],n[2],n[3],n[4]):(n=qh.exec(t))?Ht(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=Lh.exec(t))?$t(n[1],n[2]/100,n[3]/100,1):(n=Uh.exec(t))?$t(n[1],n[2]/100,n[3]/100,n[4]):Dh.hasOwnProperty(t)?jt(Dh[t]):"transparent"===t?new Wt(NaN,NaN,NaN,0):null}function jt(t){return new Wt(t>>16&255,t>>8&255,255&t,1)}function Ht(t,n,e,r){return r<=0&&(t=n=e=NaN),new Wt(t,n,e,r)}function Xt(t){return t instanceof Yt||(t=Bt(t)),t?(t=t.rgb(),new Wt(t.r,t.g,t.b,t.opacity)):new Wt}function Vt(t,n,e,r){return 1===arguments.length?Xt(t):new Wt(t,n,e,null==r?1:r)}function Wt(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function $t(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Jt(t,n,e,r)}function Zt(t){if(t instanceof Jt)return new Jt(t.h,t.s,t.l,t.opacity);if(t instanceof Yt||(t=Bt(t)),!t)return new Jt;if(t instanceof Jt)return t;t=t.rgb();var n=t.r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(e-r)/a+6*(e<r):e===o?(r-n)/a+2:(n-e)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new Jt(u,a,c,t.opacity)}function Gt(t,n,e,r){return 1===arguments.length?Zt(t):new Jt(t,n,e,null==r?1:r)}function Jt(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function Qt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function Kt(t){if(t instanceof nn)return new nn(t.l,t.a,t.b,t.opacity);if(t instanceof sn){var n=t.h*Oh;return new nn(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof Wt||(t=Xt(t));var e=un(t.r),r=un(t.g),i=un(t.b),o=en((.4124564*e+.3575761*r+.1804375*i)/Yh),u=en((.2126729*e+.7151522*r+.072175*i)/Bh),a=en((.0193339*e+.119192*r+.9503041*i)/jh);return new nn(116*u-16,500*(o-u),200*(u-a),t.opacity)}function tn(t,n,e,r){return 1===arguments.length?Kt(t):new nn(t,n,e,null==r?1:r)}function nn(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function en(t){return t>Wh?Math.pow(t,1/3):t/Vh+Hh}function rn(t){return t>Xh?t*t*t:Vh*(t-Hh)}function on(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function un(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function an(t){if(t instanceof sn)return new sn(t.h,t.c,t.l,t.opacity);t instanceof nn||(t=Kt(t));var n=Math.atan2(t.b,t.a)*Fh;return new sn(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function cn(t,n,e,r){return 1===arguments.length?an(t):new sn(t,n,e,null==r?1:r)}function sn(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function fn(t){if(t instanceof hn)return new hn(t.h,t.s,t.l,t.opacity);t instanceof Wt||(t=Xt(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(np*r+Kh*n-tp*e)/(np+Kh-tp),o=r-i,u=(Qh*(e-i)-Gh*o)/Jh,a=Math.sqrt(u*u+o*o)/(Qh*i*(1-i)),c=a?Math.atan2(u,o)*Fh-120:NaN;return new hn(c<0?c+360:c,a,i,t.opacity)}function ln(t,n,e,r){return 1===arguments.length?fn(t):new hn(t,n,e,null==r?1:r)}function hn(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function pn(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function dn(t,n){return function(e){return t+e*n}}function vn(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function _n(t,n){var e=n-t;return e?dn(t,e>180||e<-180?e-360*Math.round(e/360):e):cp(isNaN(t)?n:t)}function yn(t){return 1===(t=+t)?gn:function(n,e){return e-n?vn(n,e,t):cp(isNaN(n)?e:n)}}function gn(t,n){var e=n-t;return e?dn(t,e):cp(isNaN(t)?n:t)}function mn(t){return function(n){var e,r,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(e=0;e<i;++e)r=Vt(n[e]),o[e]=r.r||0,u[e]=r.g||0,a[e]=r.b||0;return o=t(o),u=t(u),a=t(a),r.opacity=1,function(t){return r.r=o(t),r.g=u(t),r.b=a(t),r+""}}}function xn(t){return function(){return t}}function bn(t){return function(n){return t(n)+""}}function wn(t){return"none"===t?wp:(ep||(ep=document.createElement("DIV"),rp=document.documentElement,ip=document.defaultView),ep.style.transform=t,t=ip.getComputedStyle(rp.appendChild(ep),null).getPropertyValue("transform"),rp.removeChild(ep),t=t.slice(7,-1).split(","),Mp(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function Mn(t){return null==t?wp:(op||(op=document.createElementNS("http://www.w3.org/2000/svg","g")),op.setAttribute("transform",t),(t=op.transform.baseVal.consolidate())?(t=t.matrix,Mp(t.a,t.b,t.c,t.d,t.e,t.f)):wp)}function Tn(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var c=u.push("translate(",null,n,null,e);a.push({i:c-4,x:dp(t,i)},{i:c-2,x:dp(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:dp(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:dp(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:dp(t,e)},{i:a-2,x:dp(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function Nn(t){return((t=Math.exp(t))+1/t)/2}function kn(t){return((t=Math.exp(t))-1/t)/2}function Sn(t){return((t=Math.exp(2*t))-1)/(t+1)}function En(t){return function(n,e){var r=t((n=Gt(n)).h,(e=Gt(e)).h),i=gn(n.s,e.s),o=gn(n.l,e.l),u=gn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.s=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function An(t,n){var e=gn((t=tn(t)).l,(n=tn(n)).l),r=gn(t.a,n.a),i=gn(t.b,n.b),o=gn(t.opacity,n.opacity);return function(n){return t.l=e(n),t.a=r(n),t.b=i(n),t.opacity=o(n),t+""}}function Cn(t){return function(n,e){var r=t((n=cn(n)).h,(e=cn(e)).h),i=gn(n.c,e.c),o=gn(n.l,e.l),u=gn(n.opacity,e.opacity);return function(t){return n.h=r(t),n.c=i(t),n.l=o(t),n.opacity=u(t),n+""}}}function zn(t){return function n(e){function r(n,r){var i=t((n=ln(n)).h,(r=ln(r)).h),o=gn(n.s,r.s),u=gn(n.l,r.l),a=gn(n.opacity,r.opacity);return function(t){return n.h=i(t),n.s=o(t),n.l=u(Math.pow(t,e)),n.opacity=a(t),n+""}}return e=+e,r.gamma=n,r}(1)}function Pn(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r)throw new Error("illegal type: "+t);r[t]=[]}return new Rn(r)}function Rn(t){this._=t}function qn(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function Ln(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function Un(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=Op,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}function Dn(t){return new Function("d","return {"+t.map(function(t,n){return JSON.stringify(t)+": d["+n+"]"}).join(",")+"}")}function On(t,n){var e=Dn(t);return function(r,i){return n(e(r),i,t)}}function Fn(t){var n=Object.create(null),e=[];return t.forEach(function(t){for(var r in t)r in n||e.push(n[r]=r)}),e}function In(t){return function(n,e){t(null==n?e:null)}}function Yn(t){var n=t.responseType;return n&&"text"!==n?t.response:t.responseText}function Bn(t,n){return function(e){return t(e.responseText,n)}}function jn(){return hd||(vd(Hn),hd=dd.now()+pd)}function Hn(){hd=0}function Xn(){this._call=this._time=this._next=null}function Vn(t,n,e){var r=new Xn;return r.restart(t,n,e),r}function Wn(){jn(),++ad;for(var t,n=Fp;n;)(t=hd-n._time)>=0&&n._call.call(null,t),n=n._next;--ad}function $n(){hd=(ld=dd.now())+pd,ad=cd=0;try{Wn()}finally{ad=0,Gn(),hd=0}}function Zn(){var t=dd.now(),n=t-ld;n>fd&&(pd-=n,ld=t)}function Gn(){for(var t,n,e=Fp,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Fp=n);Ip=t,Jn(r)}function Jn(t){if(!ad){cd&&(cd=clearTimeout(cd));var n=t-hd;n>24?(t<1/0&&(cd=setTimeout($n,n)),sd&&(sd=clearInterval(sd))):(sd||(sd=setInterval(Zn,fd)),ad=1,vd($n))}}function Qn(t,n,e,r){function i(n){return t(n=new Date(+n)),n}return i.floor=i,i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r&&o>0))return u;do u.push(new Date(+e));while(n(e,o),t(e),e<r);return u},i.filter=function(e){return Qn(function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)},function(t,r){if(t>=t)for(;--r>=0;)for(;n(t,1),!e(t););})},e&&(i.count=function(n,r){return gd.setTime(+n),md.setTime(+r),t(gd),t(md),Math.floor(e(gd,md))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0}:function(n){return i.count(0,n)%t===0}):i:null}),i}function Kn(t){return Qn(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Md)/kd})}function te(t){return Qn(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/kd})}function ne(t){if(!(n=zv.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],c=!!n[7],s=n[8]&&+n[8].slice(1),f=n[9]||"";"n"===f?(c=!0,f="g"):Cv[f]||(f=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=c,this.precision=s,this.type=f}function ee(t){return t}function re(n){return Rv=Lv(n),t.format=Rv.format,t.formatPrefix=Rv.formatPrefix,Rv}function ie(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function oe(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function ue(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function ae(t){function n(t,n){return function(e){var r,i,o,u=[],a=-1,c=0,s=t.length;for(e instanceof Date||(e=new Date(+e));++a<s;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=Iv[r=t.charAt(++a)])?r=t.charAt(++a):i="e"===r?" ":"0",(o=n[r])&&(r=o(e,i)),u.push(r),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function e(t,n){return function(e){var i=ue(1900),o=r(i,t,e+="",0);if(o!=e.length)return null;if("p"in i&&(i.H=i.H%12+12*i.p),"W"in i||"U"in i){"w"in i||(i.w="W"in i?1:0);var u="Z"in i?oe(ue(i.y)).getUTCDay():n(ue(i.y)).getDay();i.m=0,i.d="W"in i?(i.w+6)%7+7*i.W-(u+5)%7:i.w+7*i.U-(u+6)%7}return"Z"in i?(i.H+=i.Z/100|0,i.M+=i.Z%100,oe(i)):n(i)}}function r(t,n,e,r){for(var i,o,u=0,a=n.length,c=e.length;u<a;){if(r>=c)return-1;if(i=n.charCodeAt(u++),37===i){if(i=n.charAt(u++),o=B[i in Iv?n.charAt(u++):i],!o||(r=o(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function i(t,n,e){var r=C.exec(n.slice(e));return r?(t.p=z[r[0].toLowerCase()],e+r[0].length):-1}function o(t,n,e){var r=q.exec(n.slice(e));return r?(t.w=L[r[0].toLowerCase()],e+r[0].length):-1}function u(t,n,e){var r=P.exec(n.slice(e));return r?(t.w=R[r[0].toLowerCase()],e+r[0].length):-1}function a(t,n,e){var r=O.exec(n.slice(e));return r?(t.m=F[r[0].toLowerCase()],e+r[0].length):-1}function c(t,n,e){var r=U.exec(n.slice(e));return r?(t.m=D[r[0].toLowerCase()],e+r[0].length):-1}function s(t,n,e){return r(t,w,n,e)}function f(t,n,e){return r(t,M,n,e)}function l(t,n,e){return r(t,T,n,e)}function h(t){return S[t.getDay()]}function p(t){return k[t.getDay()]}function d(t){return A[t.getMonth()]}function v(t){return E[t.getMonth()]}function _(t){return N[+(t.getHours()>=12)]}function y(t){return S[t.getUTCDay()]}function g(t){return k[t.getUTCDay()]}function m(t){return A[t.getUTCMonth()]}function x(t){return E[t.getUTCMonth()]}function b(t){return N[+(t.getUTCHours()>=12)]}var w=t.dateTime,M=t.date,T=t.time,N=t.periods,k=t.days,S=t.shortDays,E=t.months,A=t.shortMonths,C=fe(N),z=le(N),P=fe(k),R=le(k),q=fe(S),L=le(S),U=fe(E),D=le(E),O=fe(A),F=le(A),I={a:h,A:p,b:d,B:v,c:null,d:ke,e:ke,H:Se,I:Ee,j:Ae,L:Ce,m:ze,M:Pe,p:_,S:Re,U:qe,w:Le,W:Ue,x:null,X:null,y:De,Y:Oe,Z:Fe,"%":tr},Y={a:y,A:g,b:m,B:x,c:null,d:Ie,e:Ie,H:Ye,I:Be,j:je,L:He,m:Xe,M:Ve,p:b,S:We,U:$e,w:Ze,W:Ge,x:null,X:null,y:Je,Y:Qe,Z:Ke,"%":tr},B={a:o,A:u,b:a,B:c,c:s,d:me,e:me,H:be,I:be,j:xe,L:Te,m:ge,M:we,p:i,S:Me,U:pe,w:he,W:de,x:f,X:l,y:_e,Y:ve,Z:ye,"%":Ne};return I.x=n(M,I),I.X=n(T,I),I.c=n(w,I),Y.x=n(M,Y),Y.X=n(T,Y),Y.c=n(w,Y),{format:function(t){var e=n(t+="",I);return e.toString=function(){return t},e},parse:function(t){var n=e(t+="",ie);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Y);return e.toString=function(){return t},e},utcParse:function(t){var n=e(t,oe);return n.toString=function(){return t},n}}}function ce(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",o=i.length;return r+(o<e?new Array(e-o+1).join(n)+i:i)}function se(t){return t.replace(jv,"\\$&")}function fe(t){return new RegExp("^(?:"+t.map(se).join("|")+")","i")}function le(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function he(t,n,e){var r=Yv.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function pe(t,n,e){var r=Yv.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function de(t,n,e){var r=Yv.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function ve(t,n,e){var r=Yv.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function _e(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function ye(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function ge(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function me(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function xe(t,n,e){var r=Yv.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function be(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function we(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function Me(t,n,e){var r=Yv.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function Te(t,n,e){var r=Yv.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function Ne(t,n,e){var r=Bv.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function ke(t,n){return ce(t.getDate(),n,2)}function Se(t,n){return ce(t.getHours(),n,2)}function Ee(t,n){return ce(t.getHours()%12||12,n,2)}function Ae(t,n){return ce(1+Rd.count(Jd(t),t),n,3)}function Ce(t,n){return ce(t.getMilliseconds(),n,3)}function ze(t,n){return ce(t.getMonth()+1,n,2)}function Pe(t,n){return ce(t.getMinutes(),n,2)}function Re(t,n){return ce(t.getSeconds(),n,2)}function qe(t,n){return ce(Ld.count(Jd(t),t),n,2)}function Le(t){return t.getDay()}function Ue(t,n){return ce(Ud.count(Jd(t),t),n,2)}function De(t,n){return ce(t.getFullYear()%100,n,2)}function Oe(t,n){return ce(t.getFullYear()%1e4,n,4)}function Fe(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ce(n/60|0,"0",2)+ce(n%60,"0",2)}function Ie(t,n){return ce(t.getUTCDate(),n,2)}function Ye(t,n){return ce(t.getUTCHours(),n,2)}function Be(t,n){return ce(t.getUTCHours()%12||12,n,2)}function je(t,n){return ce(1+rv.count(bv(t),t),n,3)}function He(t,n){return ce(t.getUTCMilliseconds(),n,3)}function Xe(t,n){return ce(t.getUTCMonth()+1,n,2)}function Ve(t,n){return ce(t.getUTCMinutes(),n,2)}function We(t,n){return ce(t.getUTCSeconds(),n,2)}function $e(t,n){return ce(ov.count(bv(t),t),n,2)}function Ze(t){return t.getUTCDay()}function Ge(t,n){return ce(uv.count(bv(t),t),n,2)}function Je(t,n){return ce(t.getUTCFullYear()%100,n,2)}function Qe(t,n){return ce(t.getUTCFullYear()%1e4,n,4)}function Ke(){return"+0000"}function tr(){return"%"}function nr(n){return Uv=ae(n),t.timeFormat=Uv.format,t.timeParse=Uv.parse,t.utcFormat=Uv.utcFormat,t.utcParse=Uv.utcParse,Uv}function er(t){return t.toISOString()}function rr(t){var n=new Date(t);return isNaN(n)?null:n}function ir(t){function n(n){var o=n+"",u=e.get(o);if(!u){if(i!==Gv)return i;e.set(o,u=r.push(n))}return t[(u-1)%t.length]}var e=o(),r=[],i=Gv;return t=null==t?[]:Zv.call(t),n.domain=function(t){if(!arguments.length)return r.slice();r=[],e=o();for(var i,u,a=-1,c=t.length;++a<c;)e.has(u=(i=t[a])+"")||e.set(u,r.push(i));return n},n.range=function(e){return arguments.length?(t=Zv.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(i=t,n):i},n.copy=function(){return ir().domain(r).range(t).unknown(i)},n}function or(){function t(){var t=i().length,r=u[1]<u[0],l=u[r-0],h=u[1-r];n=(h-l)/Math.max(1,t-c+2*s),a&&(n=Math.floor(n)),l+=(h-l-n*(t-c))*f,e=n*(1-c),a&&(l=Math.round(l),e=Math.round(e));var p=Os(t).map(function(t){return l+n*t});return o(r?p.reverse():p)}var n,e,r=ir().unknown(void 0),i=r.domain,o=r.range,u=[0,1],a=!1,c=0,s=0,f=.5;return delete r.unknown,r.domain=function(n){return arguments.length?(i(n),t()):i()},r.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},r.rangeRound=function(n){return u=[+n[0],+n[1]],a=!0,t()},r.bandwidth=function(){return e},r.step=function(){return n},r.round=function(n){return arguments.length?(a=!!n,t()):a},r.padding=function(n){return arguments.length?(c=s=Math.max(0,Math.min(1,n)),t()):c},r.paddingInner=function(n){return arguments.length?(c=Math.max(0,Math.min(1,n)),t()):c},r.paddingOuter=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},r.align=function(n){return arguments.length?(f=Math.max(0,Math.min(1,n)),t()):f},r.copy=function(){return or().domain(i()).range(u).round(a).paddingInner(c).paddingOuter(s).align(f)},t()}function ur(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return ur(n())},t}function ar(){return ur(or().paddingInner(1))}function cr(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:Jv(n)}function sr(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function fr(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function lr(t,n,e,r){var i=t[0],o=t[1],u=n[0],a=n[1];return o<i?(i=e(o,i),u=r(a,u)):(i=e(i,o),u=r(u,a)),function(t){return u(i(t))}}function hr(t,n,e,r){var i=Math.min(t.length,n.length)-1,o=new Array(i),u=new Array(i),a=-1;for(t[i]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++a<i;)o[a]=e(t[a],t[a+1]),u[a]=r(n[a],n[a+1]);return function(n){var e=ks(t,n,1,i)-1;return u[e](o[e](n))}}function pr(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function dr(t,n){function e(){return i=Math.min(a.length,c.length)>2?hr:lr,o=u=null,r}function r(n){return(o||(o=i(a,c,f?sr(t):t,s)))(+n)}var i,o,u,a=Kv,c=Kv,s=mp,f=!1;return r.invert=function(t){return(u||(u=i(c,a,cr,f?fr(n):n)))(+t)},r.domain=function(t){return arguments.length?(a=$v.call(t,Qv),e()):a.slice()},r.range=function(t){return arguments.length?(c=Zv.call(t),e()):c.slice()},r.rangeRound=function(t){return c=Zv.call(t),s=xp,e()},r.clamp=function(t){return arguments.length?(f=!!t,e()):f},r.interpolate=function(t){return arguments.length?(s=t,e()):s},e()}function vr(t){var n=t.domain;return t.ticks=function(t){var e=n();return Bs(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return t_(n(),t,e)},t.nice=function(r){var i=n(),o=i.length-1,u=null==r?10:r,a=i[0],c=i[o],s=e(a,c,u);return s&&(s=e(Math.floor(a/s)*s,Math.ceil(c/s)*s,u),i[0]=Math.floor(a/s)*s,i[o]=Math.ceil(c/s)*s,n(i)),t},t}function _r(){var t=dr(cr,dp);return t.copy=function(){return pr(t,_r())},vr(t)}function yr(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=$v.call(e,Qv),t):n.slice()},t.copy=function(){return yr().domain(n)},vr(t)}function gr(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:Jv(n)}function mr(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function xr(t){return isFinite(t)?+("1e"+t):t<0?0:t}function br(t){return 10===t?xr:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function wr(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function Mr(t){return function(n){return-t(-n)}}function Tr(){function n(){return o=wr(i),u=br(i),r()[0]<0&&(o=Mr(o),u=Mr(u)),e}var e=dr(gr,mr).domain([1,10]),r=e.domain,i=10,o=wr(10),u=br(10);return e.base=function(t){return arguments.length?(i=+t,n()):i},e.domain=function(t){return arguments.length?(r(t),n()):r()},e.ticks=function(t){var n,e=r(),a=e[0],c=e[e.length-1];(n=c<a)&&(h=a,a=c,c=h);var s,f,l,h=o(a),p=o(c),d=null==t?10:+t,v=[];if(!(i%1)&&p-h<d){if(h=Math.round(h)-1,p=Math.round(p)+1,a>0){for(;h<p;++h)for(f=1,s=u(h);f<i;++f)if(l=s*f,!(l<a)){if(l>c)break;v.push(l)}}else for(;h<p;++h)for(f=i-1,s=u(h);f>=1;--f)if(l=s*f,!(l<a)){if(l>c)break;v.push(l)}}else v=Bs(h,p,Math.min(p-h,d)).map(u);return n?v.reverse():v},e.tickFormat=function(n,r){if(null==r&&(r=10===i?".0e":","),"function"!=typeof r&&(r=t.format(r)),n===1/0)return r;null==n&&(n=10);var a=Math.max(1,i*n/e.ticks().length);return function(t){var n=t/u(Math.round(o(t)));return n*i<i-.5&&(n*=i),n<=a?r(t):""}},e.nice=function(){return r(n_(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return pr(e,Tr().base(i))},e}function Nr(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function kr(){function t(t,n){return(n=Nr(n,e)-(t=Nr(t,e)))?function(r){return(Nr(r,e)-t)/n}:Jv(n)}function n(t,n){return n=Nr(n,e)-(t=Nr(t,e)),function(r){return Nr(t+n*r,1/e)}}var e=1,r=dr(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return pr(r,kr().exponent(e))},vr(r)}function Sr(){return kr().exponent(.5)}function Er(){function t(){var t=0,o=Math.max(1,r.length);for(i=new Array(o-1);++t<o;)i[t-1]=Xs(e,t/o);return n}function n(t){if(!isNaN(t=+t))return r[ks(i,t)]}var e=[],r=[],i=[];return n.invertExtent=function(t){var n=r.indexOf(t);return n<0?[NaN,NaN]:[n>0?i[n-1]:e[0],n<i.length?i[n]:e[e.length-1]]},n.domain=function(n){if(!arguments.length)return e.slice();e=[];for(var r,i=0,o=n.length;i<o;++i)r=n[i],null==r||isNaN(r=+r)||e.push(r);return e.sort(Ms),t()},n.range=function(n){return arguments.length?(r=Zv.call(n),t()):r.slice()},n.quantiles=function(){return i.slice()},n.copy=function(){return Er().domain(e).range(r)},n}function Ar(){function t(t){if(t<=t)return u[ks(o,t,0,i)]}function n(){var n=-1;for(o=new Array(i);++n<i;)o[n]=((n+1)*r-(n-i)*e)/(i+1);return t}var e=0,r=1,i=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n()):[e,r]},t.range=function(t){return arguments.length?(i=(u=Zv.call(t)).length-1,n()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[e,o[0]]:n>=i?[o[i-1],r]:[o[n-1],o[n]]},t.copy=function(){return Ar().domain([e,r]).range(u)},vr(t)}function Cr(){function t(t){if(t<=t)return e[ks(n,t,0,r)]}var n=[.5],e=[0,1],r=1;return t.domain=function(i){return arguments.length?(n=Zv.call(i),r=Math.min(n.length,e.length-1),t):n.slice()},t.range=function(i){return arguments.length?(e=Zv.call(i),r=Math.min(n.length,e.length-1),t):e.slice()},t.invertExtent=function(t){var r=e.indexOf(t);return[n[r-1],n[r]]},t.copy=function(){return Cr().domain(n).range(e)},t}function zr(t){return new Date(t);
}function Pr(t){return t instanceof Date?+t:+new Date(+t)}function Rr(t,n,r,i,o,u,a,c,s){function f(e){return(a(e)<e?v:u(e)<e?_:o(e)<e?y:i(e)<e?g:n(e)<e?r(e)<e?m:x:t(e)<e?b:w)(e)}function l(n,r,i,o){if(null==n&&(n=10),"number"==typeof n){var u=Math.abs(i-r)/n,a=Ts(function(t){return t[2]}).right(M,u);a===M.length?(o=e(r/c_,i/c_,n),n=t):a?(a=M[u/M[a-1][2]<M[a][2]/u?a-1:a],o=a[1],n=a[0]):(o=e(r,i,n),n=c)}return null==o?n:n.every(o)}var h=dr(cr,dp),p=h.invert,d=h.domain,v=s(".%L"),_=s(":%S"),y=s("%I:%M"),g=s("%I %p"),m=s("%a %d"),x=s("%b %d"),b=s("%B"),w=s("%Y"),M=[[a,1,e_],[a,5,5*e_],[a,15,15*e_],[a,30,30*e_],[u,1,r_],[u,5,5*r_],[u,15,15*r_],[u,30,30*r_],[o,1,i_],[o,3,3*i_],[o,6,6*i_],[o,12,12*i_],[i,1,o_],[i,2,2*o_],[r,1,u_],[n,1,a_],[n,3,3*a_],[t,1,c_]];return h.invert=function(t){return new Date(p(t))},h.domain=function(t){return arguments.length?d($v.call(t,Pr)):d().map(zr)},h.ticks=function(t,n){var e,r=d(),i=r[0],o=r[r.length-1],u=o<i;return u&&(e=i,i=o,o=e),e=l(t,i,o,n),e=e?e.range(i,o+1):[],u?e.reverse():e},h.tickFormat=function(t,n){return null==n?f:s(n)},h.nice=function(t,n){var e=d();return(t=l(t,e[0],e[e.length-1],n))?d(n_(e,t)):h},h.copy=function(){return pr(h,Rr(t,n,r,i,o,u,a,c,s))},h}function qr(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function Lr(t){function n(n){var o=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,o)):o)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return Lr(t).domain([e,r]).clamp(i)},vr(n)}function Ur(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===N_&&n.documentElement.namespaceURI===N_?n.createElement(t):n.createElementNS(e,t)}}function Dr(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Or(){return new Fr}function Fr(){this._="@"+(++A_).toString(36)}function Ir(t,n,e){return t=Yr(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function Yr(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function Br(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function jr(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function Hr(t,n,e){var r=q_.hasOwnProperty(t.type)?Ir:Yr;return function(i,o,u){var a,c=this.__on,s=r(n,o,u);if(c)for(var f=0,l=c.length;f<l;++f)if((a=c[f]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},c?c.push(a):this.__on=[a]}}function Xr(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function Vr(){}function Wr(){return[]}function $r(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function Zr(t,n,e,r,i,o){for(var u,a=0,c=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new $r(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function Gr(t,n,e,r,i,o,u){var a,c,s,f={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=s=$_+u.call(c,c.__data__,a,n),s in f?i[a]=c:f[s]=c);for(a=0;a<h;++a)s=$_+u.call(t,o[a],a,o),(c=f[s])?(r[a]=c,c.__data__=o[a],f[s]=null):e[a]=new $r(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&f[p[a]]===c&&(i[a]=c)}function Jr(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function Qr(t){return function(){this.removeAttribute(t)}}function Kr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function ti(t,n){return function(){this.setAttribute(t,n)}}function ni(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function ei(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function ri(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function ii(t){return function(){this.style.removeProperty(t)}}function oi(t,n,e){return function(){this.style.setProperty(t,n,e)}}function ui(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function ai(t){return function(){delete this[t]}}function ci(t,n){return function(){this[t]=n}}function si(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function fi(t){return t.trim().split(/^|\s+/)}function li(t){return t.classList||new hi(t)}function hi(t){this._node=t,this._names=fi(t.getAttribute("class")||"")}function pi(t,n){for(var e=li(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function di(t,n){for(var e=li(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function vi(t){return function(){pi(this,t)}}function _i(t){return function(){di(this,t)}}function yi(t,n){return function(){(n.apply(this,arguments)?pi:di)(this,t)}}function gi(){this.textContent=""}function mi(t){return function(){this.textContent=t}}function xi(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function bi(){this.innerHTML=""}function wi(t){return function(){this.innerHTML=t}}function Mi(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function Ti(){this.nextSibling&&this.parentNode.appendChild(this)}function Ni(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ki(){return null}function Si(){var t=this.parentNode;t&&t.removeChild(this)}function Ei(t,n,e){var r=ay(t),i=r.CustomEvent;i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Ai(t,n){return function(){return Ei(this,t,n)}}function Ci(t,n){return function(){return Ei(this,t,n.apply(this,arguments))}}function zi(t,n){this._groups=t,this._parents=n}function Pi(){return new zi([[document.documentElement]],xy)}function Ri(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Sy)throw new Error("too late");return e}function qi(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Ay)throw new Error("too late");return e}function Li(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function Ui(t,n,e){function r(t){e.state=Ey,e.timer.restart(i,e.delay,e.time),e.delay<=t&&i(t-e.delay)}function i(r){var s,f,l,h;if(e.state!==Ey)return u();for(s in c)if(h=c[s],h.name===e.name){if(h.state===Cy)return _d(i);h.state===zy?(h.state=Ry,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete c[s]):+s<n&&(h.state=Ry,h.timer.stop(),delete c[s])}if(_d(function(){e.state===Cy&&(e.state=zy,e.timer.restart(o,e.delay,e.time),o(r))}),e.state=Ay,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Ay){for(e.state=Cy,a=new Array(l=e.tween.length),s=0,f=-1;s<l;++s)(h=e.tween[s].value.call(t,t.__data__,e.index,e.group))&&(a[++f]=h);a.length=f+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=Py,1),i=-1,o=a.length;++i<o;)a[i].call(null,r);e.state===Py&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=Ry,e.timer.stop(),delete c[n];for(var r in c)return;delete t.__transition}var a,c=t.__transition;c[n]=e,e.timer=Vn(r,0,e.time)}function Di(t,n){var e,r;return function(){var i=qi(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function Oi(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=qi(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},c=0,s=i.length;c<s;++c)if(i[c].name===n){i[c]=a;break}c===s&&i.push(a)}o.tween=i}}function Fi(t,n,e){var r=t._id;return t.each(function(){var t=qi(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return Li(t,r).value[n]}}function Ii(t){return function(){this.removeAttribute(t)}}function Yi(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Bi(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function ji(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function Hi(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function Xi(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function Vi(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function Wi(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function $i(t,n){return function(){Ri(this,t).delay=+n.apply(this,arguments)}}function Zi(t,n){return n=+n,function(){Ri(this,t).delay=n}}function Gi(t,n){return function(){qi(this,t).duration=+n.apply(this,arguments)}}function Ji(t,n){return n=+n,function(){qi(this,t).duration=n}}function Qi(t,n){if("function"!=typeof n)throw new Error;return function(){qi(this,t).ease=n}}function Ki(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function to(t,n,e){var r,i,o=Ki(n)?Ri:qi;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function no(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function eo(t,n){var e,r,i;return function(){var o=ay(this).getComputedStyle(this,null),u=o.getPropertyValue(t),a=(this.style.removeProperty(t),o.getPropertyValue(t));return u===a?null:u===e&&a===r?i:i=n(e=u,r=a)}}function ro(t){return function(){this.style.removeProperty(t)}}function io(t,n,e){var r,i;return function(){var o=ay(this).getComputedStyle(this,null).getPropertyValue(t);return o===e?null:o===r?i:i=n(r=o,e)}}function oo(t,n,e){var r,i,o;return function(){var u=ay(this).getComputedStyle(this,null),a=u.getPropertyValue(t),c=e(this);return null==c&&(this.style.removeProperty(t),c=u.getPropertyValue(t)),a===c?null:a===r&&c===i?o:o=n(r=a,i=c)}}function uo(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function ao(t){return function(){this.textContent=t}}function co(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function so(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function fo(t){return Pi().transition(t)}function lo(){return++eg}function ho(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return ig.time=jn(),ig;return e}function po(t,n,e){var r=t(e);return"translate("+(isFinite(r)?r:n(e))+",0)"}function vo(t,n,e){var r=t(e);return"translate(0,"+(isFinite(r)?r:n(e))+")"}function _o(t){var n=t.bandwidth()/2;return t.round()&&(n=Math.round(n)),function(e){return t(e)+n}}function yo(){return!this.__axis}function go(t,n){function e(e){var s,f=null==i?n.ticks?n.ticks.apply(n,r):n.domain():i,l=null==o?n.tickFormat?n.tickFormat.apply(n,r):sg:o,h=Math.max(u,0)+c,p=t===fg||t===hg?po:vo,d=n.range(),v=d[0]+.5,_=d[d.length-1]+.5,y=(n.bandwidth?_o:sg)(n.copy()),g=e.selection?e.selection():e,m=g.selectAll(".domain").data([null]),x=g.selectAll(".tick").data(f,n).order(),b=x.exit(),w=x.enter().append("g").attr("class","tick"),M=x.select("line"),T=x.select("text"),N=t===fg||t===pg?-1:1,k=t===pg||t===lg?(s="x","y"):(s="y","x");m=m.merge(m.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),x=x.merge(w),M=M.merge(w.append("line").attr("stroke","#000").attr(s+"2",N*u).attr(k+"1",.5).attr(k+"2",.5)),T=T.merge(w.append("text").attr("fill","#000").attr(s,N*h).attr(k,.5).attr("dy",t===fg?"0em":t===hg?"0.71em":"0.32em")),e!==g&&(m=m.transition(e),x=x.transition(e),M=M.transition(e),T=T.transition(e),b=b.transition(e).attr("opacity",dg).attr("transform",function(t){return p(y,this.parentNode.__axis||y,t)}),w.attr("opacity",dg).attr("transform",function(t){return p(this.parentNode.__axis||y,y,t)})),b.remove(),m.attr("d",t===pg||t==lg?"M"+N*a+","+v+"H0.5V"+_+"H"+N*a:"M"+v+","+N*a+"V0.5H"+_+"V"+N*a),x.attr("opacity",1).attr("transform",function(t){return p(y,y,t)}),M.attr(s+"2",N*u),T.attr(s,N*h).text(l),g.filter(yo).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===lg?"start":t===pg?"end":"middle"),g.each(function(){this.__axis=y})}var r=[],i=null,o=null,u=6,a=6,c=3;return e.scale=function(t){return arguments.length?(n=t,e):n},e.ticks=function(){return r=cg.call(arguments),e},e.tickArguments=function(t){return arguments.length?(r=null==t?[]:cg.call(t),e):r.slice()},e.tickValues=function(t){return arguments.length?(i=null==t?null:cg.call(t),e):i&&i.slice()},e.tickFormat=function(t){return arguments.length?(o=t,e):o},e.tickSize=function(t){return arguments.length?(u=a=+t,e):u},e.tickSizeInner=function(t){return arguments.length?(u=+t,e):u},e.tickSizeOuter=function(t){return arguments.length?(a=+t,e):a},e.tickPadding=function(t){return arguments.length?(c=+t,e):c},e}function mo(t){return go(fg,t)}function xo(t){return go(lg,t)}function bo(t){return go(hg,t)}function wo(t){return go(pg,t)}function Mo(t,n){return t.parent===n.parent?1:2}function To(t){return t.reduce(No,0)/t.length}function No(t,n){return t+n.x}function ko(t){return 1+t.reduce(So,0)}function So(t,n){return Math.max(t,n.y)}function Eo(t){for(var n;n=t.children;)t=n[0];return t}function Ao(t){for(var n;n=t.children;)t=n[n.length-1];return t}function Co(t,n){if(t===n)return t;var e=t.ancestors(),r=n.ancestors(),i=null;for(t=e.pop(),n=r.pop();t===n;)i=t,t=e.pop(),n=r.pop();return i}function zo(t,n){var e,r,i,o,u,a=new Uo(t),c=+t.value&&(a.value=t.value),s=[a];for(null==n&&(n=Ro);e=s.pop();)if(c&&(e.value=+e.data.value),(i=n(e.data))&&(u=i.length))for(e.children=new Array(u),o=u-1;o>=0;--o)s.push(r=e.children[o]=new Uo(i[o])),r.parent=e,r.depth=e.depth+1;return a.eachBefore(Lo)}function Po(){return zo(this).eachBefore(qo)}function Ro(t){return t.children}function qo(t){t.data=t.data.data}function Lo(t){var n=0;do t.height=n;while((t=t.parent)&&t.height<++n)}function Uo(t){this.data=t,this.depth=this.height=0,this.parent=null}function Do(t){this._=t,this.next=null}function Oo(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r-n.r;return i*i+1e-6>e*e+r*r}function Fo(t,n){var e,r,i,o=null,u=t.head;switch(n.length){case 1:e=Io(n[0]);break;case 2:e=Yo(n[0],n[1]);break;case 3:e=Bo(n[0],n[1],n[2])}for(;u;)i=u._,r=u.next,e&&Oo(e,i)?o=u:(o?(t.tail=o,o.next=null):t.head=t.tail=null,n.push(i),e=Fo(t,n),n.pop(),t.head?(u.next=t.head,t.head=u):(u.next=null,t.head=t.tail=u),o=t.tail,o.next=r),u=r;return t.tail=o,e}function Io(t){return{x:t.x,y:t.y,r:t.r}}function Yo(t,n){var e=t.x,r=t.y,i=t.r,o=n.x,u=n.y,a=n.r,c=o-e,s=u-r,f=a-i,l=Math.sqrt(c*c+s*s);return{x:(e+o+c/l*f)/2,y:(r+u+s/l*f)/2,r:(l+i+a)/2}}function Bo(t,n,e){var r=t.x,i=t.y,o=t.r,u=n.x,a=n.y,c=n.r,s=e.x,f=e.y,l=e.r,h=2*(r-u),p=2*(i-a),d=2*(c-o),v=r*r+i*i-o*o-u*u-a*a+c*c,_=2*(r-s),y=2*(i-f),g=2*(l-o),m=r*r+i*i-o*o-s*s-f*f+l*l,x=_*p-h*y,b=(p*m-y*v)/x-r,w=(y*d-p*g)/x,M=(_*v-h*m)/x-i,T=(h*g-_*d)/x,N=w*w+T*T-1,k=2*(b*w+M*T+o),S=b*b+M*M-o*o,E=(-k-Math.sqrt(k*k-4*N*S))/(2*N);return{x:b+w*E+r,y:M+T*E+i,r:E}}function jo(t,n,e){var r=t.x,i=t.y,o=n.r+e.r,u=t.r+e.r,a=n.x-r,c=n.y-i,s=a*a+c*c;if(s){var f=.5+((u*=u)-(o*=o))/(2*s),l=Math.sqrt(Math.max(0,2*o*(u+s)-(u-=s)*u-o*o))/(2*s);e.x=r+f*a+l*c,e.y=i+f*c-l*a}else e.x=r+u,e.y=i}function Ho(t,n){var e=n.x-t.x,r=n.y-t.y,i=t.r+n.r;return i*i>e*e+r*r}function Xo(t,n,e){var r=t.x-n,i=t.y-e;return r*r+i*i}function Vo(t){this._=t,this.next=null,this.previous=null}function Wo(t){if(!(i=t.length))return 0;var n,e,r,i;if(n=t[0],n.x=0,n.y=0,!(i>1))return n.r;if(e=t[1],n.x=-e.r,e.x=n.r,e.y=0,!(i>2))return n.r+e.r;jo(e,n,r=t[2]);var o,u,a,c,s,f,l,h=n.r*n.r,p=e.r*e.r,d=r.r*r.r,v=h+p+d,_=h*n.x+p*e.x+d*r.x,y=h*n.y+p*e.y+d*r.y;n=new Vo(n),e=new Vo(e),r=new Vo(r),n.next=r.previous=e,e.next=n.previous=r,r.next=e.previous=n;t:for(a=3;a<i;++a){if(jo(n._,e._,r=t[a]),r=new Vo(r),(s=n.previous)===(c=e.next)){if(Ho(c._,r._)){n=e,e=c,--a;continue t}}else{f=c._.r,l=s._.r;do if(f<=l){if(Ho(c._,r._)){e=c,n.next=e,e.previous=n,--a;continue t}c=c.next,f+=c._.r}else{if(Ho(s._,r._)){n=s,n.next=e,e.previous=n,--a;continue t}s=s.previous,l+=s._.r}while(c!==s.next)}for(r.previous=n,r.next=e,n.next=e.previous=e=r,v+=d=r._.r*r._.r,_+=d*r._.x,y+=d*r._.y,h=Xo(n._,o=_/v,u=y/v);(r=r.next)!==e;)(d=Xo(r._,o,u))<h&&(n=r,h=d);e=n.next}for(n=[e._],r=e;(r=r.next)!==e;)n.push(r._);for(r=Sg(n),a=0;a<i;++a)n=t[a],n.x-=r.x,n.y-=r.y;return r.r}function $o(t){return null==t?null:Zo(t)}function Zo(t){if("function"!=typeof t)throw new Error;return t}function Go(){return 0}function Jo(t){return Math.sqrt(t.value)}function Qo(t){return function(n){n.children||(n.r=Math.max(0,+t(n)||0))}}function Ko(t,n){return function(e){if(r=e.children){var r,i,o,u=r.length,a=t(e)*n||0;if(a)for(i=0;i<u;++i)r[i].r+=a;if(o=Wo(r),a)for(i=0;i<u;++i)r[i].r-=a;e.r=o+a}}}function tu(t){return function(n){var e=n.parent;n.r*=t,e&&(n.x=e.x+t*n.x,n.y=e.y+t*n.y)}}function nu(t){return t.id}function eu(t){return t.parentId}function ru(t,n){return t.parent===n.parent?1:2}function iu(t){var n=t.children;return n?n[0]:t.t}function ou(t){var n=t.children;return n?n[n.length-1]:t.t}function uu(t,n,e){var r=e/(n.i-t.i);n.c-=r,n.s+=e,t.c+=r,n.z+=e,n.m+=e}function au(t){for(var n,e=0,r=0,i=t.children,o=i.length;--o>=0;)n=i[o],n.z+=e,n.m+=e,e+=n.s+(r+=n.c)}function cu(t,n,e){return t.a.parent===n.parent?t.a:e}function su(t,n){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=n}function fu(t){for(var n,e,r,i,o,u=new su(t,0),a=[u];n=a.pop();)if(r=n._.children)for(n.children=new Array(o=r.length),i=o-1;i>=0;--i)a.push(e=n.children[i]=new su(r[i],i)),e.parent=n;return(u.parent=new su(null,0)).children=[u],u}function lu(t,n,e,r,i,o){for(var u,a,c,s,f,l,h,p,d,v,_,y=[],g=n.children,m=0,x=0,b=g.length,w=n.value;m<b;){c=i-e,s=o-r;do f=g[x++].value;while(!f&&x<b);for(l=h=f,v=Math.max(s/c,c/s)/(w*t),_=f*f*v,d=Math.max(h/_,_/l);x<b;++x){if(f+=a=g[x].value,a<l&&(l=a),a>h&&(h=a),_=f*f*v,p=Math.max(h/_,_/l),p>d){f-=a;break}d=p}y.push(u={value:f,dice:c<s,children:g.slice(m,x)}),u.dice?Pg(u,e,r,i,w?r+=s*f/w:o):Fg(u,e,r,w?e+=c*f/w:i,o),w-=f,m=x}return y}function hu(t){return t.x+t.vx}function pu(t){return t.y+t.vy}function du(t){return t.index}function vu(t,n){var e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function _u(t){return t.x}function yu(t){return t.y}function gu(){t.event.stopImmediatePropagation()}function mu(t,n){var e=t.document.documentElement,r=by(t).on("dragstart.drag",null);n&&(r.on("click.drag",rm,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in e?r.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function xu(t,n,e,r,i,o,u,a,c,s){this.target=t,this.type=n,this.subject=e,this.identifier=r,this.active=i,this.x=o,this.y=u,this.dx=a,this.dy=c,this._=s}function bu(){return!t.event.button}function wu(){return this.parentNode}function Mu(n){return null==n?{x:t.event.x,y:t.event.y}:n}function Tu(t){return t[0]}function Nu(t){return t[1]}function ku(){this._=null}function Su(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Eu(t,n){var e=n,r=n.R,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Au(t,n){var e=n,r=n.L,i=e.U;i?i.L===e?i.L=r:i.R=r:t._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Cu(t){for(;t.L;)t=t.L;return t}function zu(t,n,e,r){var i=[null,null],o=hm.push(i)-1;return i.left=t,i.right=n,e&&Ru(i,t,n,e),r&&Ru(i,n,t,r),fm[t.index].halfedges.push(o),fm[n.index].halfedges.push(o),i}function Pu(t,n,e){var r=[n,e];return r.left=t,r}function Ru(t,n,e,r){t[0]||t[1]?t.left===e?t[1]=r:t[0]=r:(t[0]=r,t.left=n,t.right=e)}function qu(t,n,e,r,i){var o,u=t[0],a=t[1],c=u[0],s=u[1],f=a[0],l=a[1],h=0,p=1,d=f-c,v=l-s;if(o=n-c,d||!(o>0)){if(o/=d,d<0){if(o<h)return;o<p&&(p=o)}else if(d>0){if(o>p)return;o>h&&(h=o)}if(o=r-c,d||!(o<0)){if(o/=d,d<0){if(o>p)return;o>h&&(h=o)}else if(d>0){if(o<h)return;o<p&&(p=o)}if(o=e-s,v||!(o>0)){if(o/=v,v<0){if(o<h)return;o<p&&(p=o)}else if(v>0){if(o>p)return;o>h&&(h=o)}if(o=i-s,v||!(o<0)){if(o/=v,v<0){if(o>p)return;o>h&&(h=o)}else if(v>0){if(o<h)return;o<p&&(p=o)}return!(h>0||p<1)||(h>0&&(t[0]=[c+h*d,s+h*v]),p<1&&(t[1]=[c+p*d,s+p*v]),!0)}}}}}function Lu(t,n,e,r,i){var o=t[1];if(o)return!0;var u,a,c=t[0],s=t.left,f=t.right,l=s[0],h=s[1],p=f[0],d=f[1],v=(l+p)/2,_=(h+d)/2;if(d===h){if(v<n||v>=r)return;if(l>p){if(c){if(c[1]>=i)return}else c=[v,e];o=[v,i]}else{if(c){if(c[1]<e)return}else c=[v,i];o=[v,e]}}else if(u=(l-p)/(d-h),a=_-u*v,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(e-a)/u,e];o=[(i-a)/u,i]}else{if(c){if(c[1]<e)return}else c=[(i-a)/u,i];o=[(e-a)/u,e]}else if(h<d){if(c){if(c[0]>=r)return}else c=[n,u*n+a];o=[r,u*r+a]}else{if(c){if(c[0]<n)return}else c=[r,u*r+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function Uu(t,n,e,r){for(var i,o=hm.length;o--;)Lu(i=hm[o],t,n,e,r)&&qu(i,t,n,e,r)&&(Math.abs(i[0][0]-i[1][0])>vm||Math.abs(i[0][1]-i[1][1])>vm)||delete hm[o]}function Du(t){return fm[t.index]={site:t,halfedges:[]}}function Ou(t,n){var e=t.site,r=n.left,i=n.right;return e===i&&(i=r,r=e),i?Math.atan2(i[1]-r[1],i[0]-r[0]):(e===r?(r=n[1],i=n[0]):(r=n[0],i=n[1]),Math.atan2(r[0]-i[0],i[1]-r[1]))}function Fu(t,n){return n[+(n.left!==t.site)]}function Iu(t,n){return n[+(n.left===t.site)]}function Yu(){for(var t,n,e,r,i=0,o=fm.length;i<o;++i)if((t=fm[i])&&(r=(n=t.halfedges).length)){var u=new Array(r),a=new Array(r);for(e=0;e<r;++e)u[e]=e,a[e]=Ou(t,hm[n[e]]);for(u.sort(function(t,n){return a[n]-a[t]}),e=0;e<r;++e)a[e]=n[u[e]];for(e=0;e<r;++e)n[e]=a[e]}}function Bu(t,n,e,r){var i,o,u,a,c,s,f,l,h,p,d,v,_=fm.length,y=!0;for(i=0;i<_;++i)if(o=fm[i]){for(u=o.site,c=o.halfedges,a=c.length;a--;)hm[c[a]]||c.splice(a,1);for(a=0,s=c.length;a<s;)p=Iu(o,hm[c[a]]),d=p[0],v=p[1],f=Fu(o,hm[c[++a%s]]),l=f[0],h=f[1],(Math.abs(d-l)>vm||Math.abs(v-h)>vm)&&(c.splice(a,0,hm.push(Pu(u,p,Math.abs(d-t)<vm&&r-v>vm?[t,Math.abs(l-t)<vm?h:r]:Math.abs(v-r)<vm&&e-d>vm?[Math.abs(h-r)<vm?l:e,r]:Math.abs(d-e)<vm&&v-n>vm?[e,Math.abs(l-e)<vm?h:n]:Math.abs(v-n)<vm&&d-t>vm?[Math.abs(h-n)<vm?l:t,n]:null))-1),++s);s&&(y=!1)}if(y){var g,m,x,b=1/0;for(i=0,y=null;i<_;++i)(o=fm[i])&&(u=o.site,g=u[0]-t,m=u[1]-n,x=g*g+m*m,x<b&&(b=x,y=o));if(y){var w=[t,n],M=[t,r],T=[e,r],N=[e,n];y.halfedges.push(hm.push(Pu(u=y.site,w,M))-1,hm.push(Pu(u,M,T))-1,hm.push(Pu(u,T,N))-1,hm.push(Pu(u,N,w))-1)}}for(i=0;i<_;++i)(o=fm[i])&&(o.halfedges.length||delete fm[i])}function ju(){Su(this),this.x=this.y=this.arc=this.site=this.cy=null}function Hu(t){var n=t.P,e=t.N;if(n&&e){var r=n.site,i=t.site,o=e.site;if(r!==o){var u=i[0],a=i[1],c=r[0]-u,s=r[1]-a,f=o[0]-u,l=o[1]-a,h=2*(c*l-s*f);if(!(h>=-_m)){var p=c*c+s*s,d=f*f+l*l,v=(l*p-s*d)/h,_=(c*d-f*p)/h,y=pm.pop()||new ju;y.arc=t,y.site=i,y.x=v+u,y.y=(y.cy=_+a)+Math.sqrt(v*v+_*_),t.circle=y;for(var g=null,m=lm._;m;)if(y.y<m.y||y.y===m.y&&y.x<=m.x){if(!m.L){g=m.P;break}m=m.L}else{if(!m.R){g=m;break}m=m.R}lm.insert(g,y),g||(cm=y)}}}}function Xu(t){var n=t.circle;n&&(n.P||(cm=n.N),lm.remove(n),pm.push(n),Su(n),t.circle=null)}function Vu(){Su(this),this.edge=this.site=this.circle=null}function Wu(t){var n=dm.pop()||new Vu;return n.site=t,n}function $u(t){Xu(t),sm.remove(t),dm.push(t),Su(t)}function Zu(t){var n=t.circle,e=n.x,r=n.cy,i=[e,r],o=t.P,u=t.N,a=[t];$u(t);for(var c=o;c.circle&&Math.abs(e-c.circle.x)<vm&&Math.abs(r-c.circle.cy)<vm;)o=c.P,a.unshift(c),$u(c),c=o;a.unshift(c),Xu(c);for(var s=u;s.circle&&Math.abs(e-s.circle.x)<vm&&Math.abs(r-s.circle.cy)<vm;)u=s.N,a.push(s),$u(s),s=u;a.push(s),Xu(s);var f,l=a.length;for(f=1;f<l;++f)s=a[f],c=a[f-1],Ru(s.edge,c.site,s.site,i);c=a[0],s=a[l-1],s.edge=zu(c.site,s.site,null,i),Hu(c),Hu(s)}function Gu(t){for(var n,e,r,i,o=t[0],u=t[1],a=sm._;a;)if(r=Ju(a,u)-o,r>vm)a=a.L;else{if(i=o-Qu(a,u),!(i>vm)){r>-vm?(n=a.P,e=a):i>-vm?(n=a,e=a.N):n=e=a;break}if(!a.R){n=a;break}a=a.R}Du(t);var c=Wu(t);if(sm.insert(n,c),n||e){if(n===e)return Xu(n),e=Wu(n.site),sm.insert(c,e),c.edge=e.edge=zu(n.site,c.site),Hu(n),void Hu(e);if(!e)return void(c.edge=zu(n.site,c.site));Xu(n),Xu(e);var s=n.site,f=s[0],l=s[1],h=t[0]-f,p=t[1]-l,d=e.site,v=d[0]-f,_=d[1]-l,y=2*(h*_-p*v),g=h*h+p*p,m=v*v+_*_,x=[(_*g-p*m)/y+f,(h*m-v*g)/y+l];Ru(e.edge,s,d,x),c.edge=zu(s,t,null,x),e.edge=zu(t,d,null,x),Hu(n),Hu(e)}}function Ju(t,n){var e=t.site,r=e[0],i=e[1],o=i-n;if(!o)return r;var u=t.P;if(!u)return-(1/0);e=u.site;var a=e[0],c=e[1],s=c-n;if(!s)return a;var f=a-r,l=1/o-1/s,h=f/s;return l?(-h+Math.sqrt(h*h-2*l*(f*f/(-2*s)-c+s/2+i-o/2)))/l+r:(r+a)/2}function Qu(t,n){var e=t.N;if(e)return Ju(e,n);var r=t.site;return r[1]===n?r[0]:1/0}function Ku(t,n,e){return(t[0]-e[0])*(n[1]-t[1])-(t[0]-n[0])*(e[1]-t[1])}function ta(t,n){return n[1]-t[1]||n[0]-t[0]}function na(t,n){var e,r,i,o=t.sort(ta).pop();for(hm=[],fm=new Array(t.length),sm=new ku,lm=new ku;;)if(i=cm,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===e&&o[1]===r||(Gu(o),e=o[0],r=o[1]),o=t.pop();else{if(!i)break;Zu(i.arc)}if(Yu(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],s=+n[1][1];Uu(u,a,c,s),Bu(u,a,c,s)}this.edges=hm,this.cells=fm,sm=lm=hm=fm=null}function ea(t,n,e){this.target=t,this.type=n,this.transform=e}function ra(t,n,e){this.k=t,this.x=n,this.y=e}function ia(t){return t.__zoom||mm}function oa(){t.event.stopImmediatePropagation()}function ua(){return!t.event.button}function aa(){var t,n,e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,t=e.width.baseVal.value,n=e.height.baseVal.value):(t=e.clientWidth,n=e.clientHeight),[[0,0],[t,n]]}function ca(){return this.__zoom||mm}function sa(){t.event.stopImmediatePropagation()}function fa(t){return{type:t}}function la(){return!t.event.button}function ha(){var t=this.ownerSVGElement||this;return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function pa(t){for(;!t.__brush;)if(!(t=t.parentNode))return;return t.__brush}function da(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function va(t){var n=t.__brush;return n?n.dim.output(n.selection):null}function _a(){return ga(Am)}function ya(){return ga(Cm)}function ga(n){function e(t){var e=t.property("__brush",a).selectAll(".overlay").data([fa("overlay")]);e.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Pm.overlay).merge(e).each(function(){var t=pa(this).extent;by(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([fa("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Pm.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges");var i=t.selectAll(".handle").data(n.handles,function(t){return t.type});i.exit().remove(),i.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Pm[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",u)}function r(){var t=by(this),n=pa(this).selection;n?(t.selectAll(".selection").style("display",null).attr("x",n[0][0]).attr("y",n[0][1]).attr("width",n[1][0]-n[0][0]).attr("height",n[1][1]-n[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?n[1][0]-h/2:n[0][0]-h/2}).attr("y",function(t){return"s"===t.type[0]?n[1][1]-h/2:n[0][1]-h/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?n[1][0]-n[0][0]+h:h}).attr("height",function(t){return"e"===t.type||"w"===t.type?n[1][1]-n[0][1]+h:h})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function i(t,n){return t.__brush.emitter||new o(t,n)}function o(t,n){this.that=t,this.args=n,this.state=t.__brush,this.active=0}function u(){function e(){var t=F_(T);!U||w||M||(Math.abs(t[0]-O[0])>Math.abs(t[1]-O[1])?M=!0:w=!0),O=t,b=!0,Tm(),o()}function o(){var t;switch(m=O[0]-D[0],x=O[1]-D[1],k){case km:case Nm:S&&(m=Math.max(P-l,Math.min(q-v,m)),h=l+m,_=v+m),E&&(x=Math.max(R-p,Math.min(L-y,x)),d=p+x,g=y+x);break;case Sm:S<0?(m=Math.max(P-l,Math.min(q-l,m)),h=l+m,_=v):S>0&&(m=Math.max(P-v,Math.min(q-v,m)),h=l,_=v+m),E<0?(x=Math.max(R-p,Math.min(L-p,x)),d=p+x,g=y):E>0&&(x=Math.max(R-y,Math.min(L-y,x)),d=p,g=y+x);break;case Em:S&&(h=Math.max(P,Math.min(q,l-m*S)),_=Math.max(P,Math.min(q,v+m*S))),E&&(d=Math.max(R,Math.min(L,p-x*E)),g=Math.max(R,Math.min(L,y+x*E)))}_<h&&(S*=-1,t=l,l=v,v=t,t=h,h=_,_=t,N in Rm&&Y.attr("cursor",Pm[N=Rm[N]])),g<d&&(E*=-1,t=p,p=y,y=t,t=d,d=g,g=t,N in qm&&Y.attr("cursor",Pm[N=qm[N]])),A.selection&&(z=A.selection),w&&(h=z[0][0],_=z[1][0]),M&&(d=z[0][1],g=z[1][1]),z[0][0]===h&&z[0][1]===d&&z[1][0]===_&&z[1][1]===g||(A.selection=[[h,d],[_,g]],r.call(T),F.brush())}function u(){if(sa(),t.event.touches){if(t.event.touches.length)return;c&&clearTimeout(c),c=setTimeout(function(){c=null},500),I.on("touchmove.brush touchend.brush touchcancel.brush",null)}else mu(t.event.view,b),B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null);I.attr("pointer-events","all"),Y.attr("cursor",Pm.overlay),A.selection&&(z=A.selection),da(z)&&(A.selection=null,r.call(T)),F.end()}function a(){switch(t.event.keyCode){case 16:U=S&&E;break;case 18:k===Sm&&(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),k=Em,o());break;case 32:k!==Sm&&k!==Em||(S<0?v=_-m:S>0&&(l=h-m),E<0?y=g-x:E>0&&(p=d-x),k=km,Y.attr("cursor",Pm.selection),o());break;default:return}Tm()}function s(){switch(t.event.keyCode){case 16:U&&(w=M=U=!1,o());break;case 18:k===Em&&(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),k=Sm,o());break;case 32:k===km&&(t.event.altKey?(S&&(v=_-m*S,l=h+m*S),E&&(y=g-x*E,p=d+x*E),k=Em):(S<0?v=_:S>0&&(l=h),E<0?y=g:E>0&&(p=d),k=Sm),Y.attr("cursor",Pm[N]),o());break;default:return}Tm()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return Tm()}else if(c)return;if(f.apply(this,arguments)){var l,h,p,d,v,_,y,g,m,x,b,w,M,T=this,N=t.event.target.__data__.type,k="selection"===(t.event.metaKey?N="overlay":N)?Nm:t.event.altKey?Em:Sm,S=n===Cm?null:Lm[N],E=n===Am?null:Um[N],A=pa(T),C=A.extent,z=A.selection,P=C[0][0],R=C[0][1],q=C[1][0],L=C[1][1],U=S&&E&&t.event.shiftKey,D=F_(T),O=D,F=i(T,arguments).beforestart();"overlay"===N?A.selection=z=[[l=n===Cm?P:D[0],p=n===Am?R:D[1]],[v=n===Cm?q:l,y=n===Am?L:p]]:(l=z[0][0],p=z[0][1],v=z[1][0],y=z[1][1]),h=l,d=p,_=v,g=y;var I=by(T).attr("pointer-events","none"),Y=I.selectAll(".overlay").attr("cursor",Pm[N]);if(t.event.touches)I.on("touchmove.brush",e,!0).on("touchend.brush touchcancel.brush",u,!0);else{var B=by(t.event.view).on("keydown.brush",a,!0).on("keyup.brush",s,!0).on("mousemove.brush",e,!0).on("mouseup.brush",u,!0);im(t.event.view)}sa(),Ly(T),r.call(T),F.start()}}function a(){var t=this.__brush||{selection:null};return t.extent=s.apply(this,arguments),t.dim=n,t}var c,s=ha,f=la,l=Pn(e,"start","brush","end"),h=6;return e.move=function(t,e){t.selection?t.on("start.brush",function(){i(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){i(this,arguments).end()}).tween("brush",function(){function t(t){u.selection=1===t&&da(s)?null:f(t),r.call(o),a.brush()}var o=this,u=o.__brush,a=i(o,arguments),c=u.selection,s=n.input("function"==typeof e?e.apply(this,arguments):e,u.extent),f=mp(c,s);
return c&&s?t:t(1)}):t.each(function(){var t=this,o=arguments,u=t.__brush,a=n.input("function"==typeof e?e.apply(t,o):e,u.extent),c=i(t,o).beforestart();Ly(t),u.selection=null==a||da(a)?null:a,r.call(t),c.start().brush().end()})},o.prototype={beforestart:function(){return 1===++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0===--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){Xr(new Mm(e,t,n.output(this.state.selection)),l.apply,l,[t,this.that,this.args])}},e.extent=function(t){return arguments.length?(s="function"==typeof t?t:wm([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):s},e.filter=function(t){return arguments.length?(f="function"==typeof t?t:wm(!!t),e):f},e.handleSize=function(t){return arguments.length?(h=+t,e):h},e.on=function(){var t=l.on.apply(l,arguments);return t===l?e:t},e}function ma(t){return function(n,e){return t(n.source.value+n.target.value,e.source.value+e.target.value)}}function xa(t){return t.source}function ba(t){return t.target}function wa(t){return t.radius}function Ma(t){return t.startAngle}function Ta(t){return t.endAngle}function Na(){this.reset()}function ka(t,n,e){var r=t.s=n+e,i=r-n,o=r-i;t.t=n-o+(e-i)}function Sa(t){return t>1?0:t<-1?Ax:Math.acos(t)}function Ea(t){return t>1?Cx:t<-1?-Cx:Math.asin(t)}function Aa(t){return(t=jx(t/2))*t}function Ca(){}function za(t,n){t&&$x.hasOwnProperty(t.type)&&$x[t.type](t,n)}function Pa(t,n,e){var r,i=-1,o=t.length-e;for(n.lineStart();++i<o;)r=t[i],n.point(r[0],r[1],r[2]);n.lineEnd()}function Ra(t,n){var e=-1,r=t.length;for(n.polygonStart();++e<r;)Pa(t[e],n,1);n.polygonEnd()}function qa(){Qx.point=Ua}function La(){Da(Zm,Gm)}function Ua(t,n){Qx.point=Da,Zm=t,Gm=n,t*=qx,n*=qx,Jm=t,Qm=Ox(n=n/2+zx),Km=jx(n)}function Da(t,n){t*=qx,n*=qx,n=n/2+zx;var e=t-Jm,r=e>=0?1:-1,i=r*e,o=Ox(n),u=jx(n),a=Km*u,c=Qm*o+a*Ox(i),s=a*r*jx(i);Gx.add(Dx(s,c)),Jm=t,Qm=o,Km=u}function Oa(t){return[Dx(t[1],t[0]),Ea(t[2])]}function Fa(t){var n=t[0],e=t[1],r=Ox(e);return[r*Ox(n),r*jx(n),jx(e)]}function Ia(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function Ya(t,n){return[t[1]*n[2]-t[2]*n[1],t[2]*n[0]-t[0]*n[2],t[0]*n[1]-t[1]*n[0]]}function Ba(t,n){t[0]+=n[0],t[1]+=n[1],t[2]+=n[2]}function ja(t,n){return[t[0]*n,t[1]*n,t[2]*n]}function Ha(t){var n=Xx(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]/=n,t[1]/=n,t[2]/=n}function Xa(t,n){cx.push(sx=[tx=t,ex=t]),n<nx&&(nx=n),n>rx&&(rx=n)}function Va(t,n){var e=Fa([t*qx,n*qx]);if(ax){var r=Ya(ax,e),i=[r[1],-r[0],0],o=Ya(i,r);Ha(o),o=Oa(o);var u,a=t-ix,c=a>0?1:-1,s=o[0]*Rx*c,f=Lx(a)>180;f^(c*ix<s&&s<c*t)?(u=o[1]*Rx,u>rx&&(rx=u)):(s=(s+360)%360-180,f^(c*ix<s&&s<c*t)?(u=-o[1]*Rx,u<nx&&(nx=u)):(n<nx&&(nx=n),n>rx&&(rx=n))),f?t<ix?Qa(tx,t)>Qa(tx,ex)&&(ex=t):Qa(t,ex)>Qa(tx,ex)&&(tx=t):ex>=tx?(t<tx&&(tx=t),t>ex&&(ex=t)):t>ix?Qa(tx,t)>Qa(tx,ex)&&(ex=t):Qa(t,ex)>Qa(tx,ex)&&(tx=t)}else Xa(t,n);ax=e,ix=t}function Wa(){nb.point=Va}function $a(){sx[0]=tx,sx[1]=ex,nb.point=Xa,ax=null}function Za(t,n){if(ax){var e=t-ix;tb.add(Lx(e)>180?e+(e>0?360:-360):e)}else ox=t,ux=n;Qx.point(t,n),Va(t,n)}function Ga(){Qx.lineStart()}function Ja(){Za(ox,ux),Qx.lineEnd(),Lx(tb)>Sx&&(tx=-(ex=180)),sx[0]=tx,sx[1]=ex,ax=null}function Qa(t,n){return(n-=t)<0?n+360:n}function Ka(t,n){return t[0]-n[0]}function tc(t,n){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}function nc(t,n){t*=qx,n*=qx;var e=Ox(n);ec(e*Ox(t),e*jx(t),jx(n))}function ec(t,n,e){++fx,hx+=(t-hx)/fx,px+=(n-px)/fx,dx+=(e-dx)/fx}function rc(){rb.point=ic}function ic(t,n){t*=qx,n*=qx;var e=Ox(n);Mx=e*Ox(t),Tx=e*jx(t),Nx=jx(n),rb.point=oc,ec(Mx,Tx,Nx)}function oc(t,n){t*=qx,n*=qx;var e=Ox(n),r=e*Ox(t),i=e*jx(t),o=jx(n),u=Dx(Xx((u=Tx*o-Nx*i)*u+(u=Nx*r-Mx*o)*u+(u=Mx*i-Tx*r)*u),Mx*r+Tx*i+Nx*o);lx+=u,vx+=u*(Mx+(Mx=r)),_x+=u*(Tx+(Tx=i)),yx+=u*(Nx+(Nx=o)),ec(Mx,Tx,Nx)}function uc(){rb.point=nc}function ac(){rb.point=sc}function cc(){fc(bx,wx),rb.point=nc}function sc(t,n){bx=t,wx=n,t*=qx,n*=qx,rb.point=fc;var e=Ox(n);Mx=e*Ox(t),Tx=e*jx(t),Nx=jx(n),ec(Mx,Tx,Nx)}function fc(t,n){t*=qx,n*=qx;var e=Ox(n),r=e*Ox(t),i=e*jx(t),o=jx(n),u=Tx*o-Nx*i,a=Nx*r-Mx*o,c=Mx*i-Tx*r,s=Xx(u*u+a*a+c*c),f=Mx*r+Tx*i+Nx*o,l=s&&-Sa(f)/s,h=Dx(s,f);gx+=l*u,mx+=l*a,xx+=l*c,lx+=h,vx+=h*(Mx+(Mx=r)),_x+=h*(Tx+(Tx=i)),yx+=h*(Nx+(Nx=o)),ec(Mx,Tx,Nx)}function lc(t,n){return[t>Ax?t-Px:t<-Ax?t+Px:t,n]}function hc(t,n,e){return(t%=Px)?n||e?ub(dc(t),vc(n,e)):dc(t):n||e?vc(n,e):lc}function pc(t){return function(n,e){return n+=t,[n>Ax?n-Px:n<-Ax?n+Px:n,e]}}function dc(t){var n=pc(t);return n.invert=pc(-t),n}function vc(t,n){function e(t,n){var e=Ox(n),a=Ox(t)*e,c=jx(t)*e,s=jx(n),f=s*r+a*i;return[Dx(c*o-f*u,a*r-s*i),Ea(f*o+c*u)]}var r=Ox(t),i=jx(t),o=Ox(n),u=jx(n);return e.invert=function(t,n){var e=Ox(n),a=Ox(t)*e,c=jx(t)*e,s=jx(n),f=s*o-c*u;return[Dx(c*o+s*u,a*r+f*i),Ea(f*r-a*i)]},e}function _c(t,n,e,r,i,o){if(e){var u=Ox(n),a=jx(n),c=r*e;null==i?(i=n+r*Px,o=n-c/2):(i=yc(u,i),o=yc(u,o),(r>0?i<o:i>o)&&(i+=r*Px));for(var s,f=i;r>0?f>o:f<o;f-=c)s=Oa([u,-a*Ox(f),-a*jx(f)]),t.point(s[0],s[1])}}function yc(t,n){n=Fa(n),n[0]-=t,Ha(n);var e=Sa(-n[1]);return((-n[2]<0?-e:e)+Px-Sx)%Px}function gc(t,n,e,r){this.x=t,this.z=n,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function mc(t){if(n=t.length){for(var n,e,r=0,i=t[0];++r<n;)i.n=e=t[r],e.p=i,i=e;i.n=e=t[0],e.p=i}}function xc(t,n,e,r){function i(i,o){return t<=i&&i<=e&&n<=o&&o<=r}function o(i,o,a,s){var f=0,l=0;if(null==i||(f=u(i,a))!==(l=u(o,a))||c(i,o)<0^a>0){do s.point(0===f||3===f?t:e,f>1?r:n);while((f=(f+a+4)%4)!==l)}else s.point(o[0],o[1])}function u(r,i){return Lx(r[0]-t)<Sx?i>0?0:3:Lx(r[0]-e)<Sx?i>0?2:1:Lx(r[1]-n)<Sx?i>0?1:0:i>0?3:2}function a(t,n){return c(t.x,n.x)}function c(t,n){var e=u(t,1),r=u(n,1);return e!==r?e-r:0===e?n[1]-t[1]:1===e?t[0]-n[0]:2===e?t[1]-n[1]:n[0]-t[0]}return function(u){function c(t,n){i(t,n)&&k.point(t,n)}function s(){for(var n=0,e=0,i=_.length;e<i;++e)for(var o,u,a=_[e],c=1,s=a.length,f=a[0],l=f[0],h=f[1];c<s;++c)o=l,u=h,f=a[c],l=f[0],h=f[1],u<=r?h>r&&(l-o)*(r-u)>(h-u)*(t-o)&&++n:h<=r&&(l-o)*(r-u)<(h-u)*(t-o)&&--n;return n}function f(){k=S,v=[],_=[],N=!0}function l(){var t=s(),n=N&&t,e=(v=Js(v)).length;(n||e)&&(u.polygonStart(),n&&(u.lineStart(),o(null,null,1,u),u.lineEnd()),e&&Mb(v,a,t,o,u),u.polygonEnd()),k=u,v=_=y=null}function h(){E.point=d,_&&_.push(y=[]),T=!0,M=!1,b=w=NaN}function p(){v&&(d(g,m),x&&M&&S.rejoin(),v.push(S.result())),E.point=c,M&&k.lineEnd()}function d(o,u){var a=i(o,u);if(_&&y.push([o,u]),T)g=o,m=u,x=a,T=!1,a&&(k.lineStart(),k.point(o,u));else if(a&&M)k.point(o,u);else{var c=[b=Math.max(Nb,Math.min(Tb,b)),w=Math.max(Nb,Math.min(Tb,w))],s=[o=Math.max(Nb,Math.min(Tb,o)),u=Math.max(Nb,Math.min(Tb,u))];bb(c,s,t,n,e,r)?(M||(k.lineStart(),k.point(c[0],c[1])),k.point(s[0],s[1]),a||k.lineEnd(),N=!1):a&&(k.lineStart(),k.point(o,u),N=!1)}b=o,w=u,M=a}var v,_,y,g,m,x,b,w,M,T,N,k=u,S=xb(),E={point:c,lineStart:h,lineEnd:p,polygonStart:f,polygonEnd:l};return E}}function bc(){Eb.point=Mc,Eb.lineEnd=wc}function wc(){Eb.point=Eb.lineEnd=Ca}function Mc(t,n){t*=qx,n*=qx,ab=t,cb=jx(n),sb=Ox(n),Eb.point=Tc}function Tc(t,n){t*=qx,n*=qx;var e=jx(n),r=Ox(n),i=Lx(t-ab),o=Ox(i),u=jx(i),a=r*u,c=sb*e-cb*r*o,s=cb*e+sb*r*o;Sb.add(Dx(Xx(a*a+c*c),s)),ab=t,cb=e,sb=r}function Nc(t,n,e){var r=Os(t,n-Sx,e).concat(n);return function(t){return r.map(function(n){return[t,n]})}}function kc(t,n,e){var r=Os(t,n-Sx,e).concat(n);return function(t){return r.map(function(n){return[n,t]})}}function Sc(){function t(){return{type:"MultiLineString",coordinates:n()}}function n(){return Os(Fx(o/_)*_,i,_).map(h).concat(Os(Fx(s/y)*y,c,y).map(p)).concat(Os(Fx(r/d)*d,e,d).filter(function(t){return Lx(t%_)>Sx}).map(f)).concat(Os(Fx(a/v)*v,u,v).filter(function(t){return Lx(t%y)>Sx}).map(l))}var e,r,i,o,u,a,c,s,f,l,h,p,d=10,v=d,_=90,y=360,g=2.5;return t.lines=function(){return n().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[h(o).concat(p(c).slice(1),h(i).reverse().slice(1),p(s).reverse().slice(1))]}},t.extent=function(n){return arguments.length?t.extentMajor(n).extentMinor(n):t.extentMinor()},t.extentMajor=function(n){return arguments.length?(o=+n[0][0],i=+n[1][0],s=+n[0][1],c=+n[1][1],o>i&&(n=o,o=i,i=n),s>c&&(n=s,s=c,c=n),t.precision(g)):[[o,s],[i,c]]},t.extentMinor=function(n){return arguments.length?(r=+n[0][0],e=+n[1][0],a=+n[0][1],u=+n[1][1],r>e&&(n=r,r=e,e=n),a>u&&(n=a,a=u,u=n),t.precision(g)):[[r,a],[e,u]]},t.step=function(n){return arguments.length?t.stepMajor(n).stepMinor(n):t.stepMinor()},t.stepMajor=function(n){return arguments.length?(_=+n[0],y=+n[1],t):[_,y]},t.stepMinor=function(n){return arguments.length?(d=+n[0],v=+n[1],t):[d,v]},t.precision=function(n){return arguments.length?(g=+n,f=Nc(a,u,90),l=kc(r,e,g),h=Nc(s,c,90),p=kc(o,i,g),t):g},t.extentMajor([[-180,-90+Sx],[180,90-Sx]]).extentMinor([[-180,-80-Sx],[180,80+Sx]])}function Ec(){return Sc()()}function Ac(){Db.point=Cc}function Cc(t,n){Db.point=zc,fb=hb=t,lb=pb=n}function zc(t,n){Ub.add(pb*t-hb*n),hb=t,pb=n}function Pc(){zc(fb,lb)}function Rc(t,n){t<Ob&&(Ob=t),t>Ib&&(Ib=t),n<Fb&&(Fb=n),n>Yb&&(Yb=n)}function qc(t,n){jb+=t,Hb+=n,++Xb}function Lc(){Qb.point=Uc}function Uc(t,n){Qb.point=Dc,qc(_b=t,yb=n)}function Dc(t,n){var e=t-_b,r=n-yb,i=Xx(e*e+r*r);Vb+=i*(_b+t)/2,Wb+=i*(yb+n)/2,$b+=i,qc(_b=t,yb=n)}function Oc(){Qb.point=qc}function Fc(){Qb.point=Yc}function Ic(){Bc(db,vb)}function Yc(t,n){Qb.point=Bc,qc(db=_b=t,vb=yb=n)}function Bc(t,n){var e=t-_b,r=n-yb,i=Xx(e*e+r*r);Vb+=i*(_b+t)/2,Wb+=i*(yb+n)/2,$b+=i,i=yb*t-_b*n,Zb+=i*(_b+t),Gb+=i*(yb+n),Jb+=3*i,qc(_b=t,yb=n)}function jc(t){this._context=t}function Hc(){this._string=[]}function Xc(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function Vc(t){return t.length>1}function Wc(t,n){return((t=t.x)[0]<0?t[1]-Cx-Sx:Cx-t[1])-((n=n.x)[0]<0?n[1]-Cx-Sx:Cx-n[1])}function $c(t){var n,e=NaN,r=NaN,i=NaN;return{lineStart:function(){t.lineStart(),n=1},point:function(o,u){var a=o>0?Ax:-Ax,c=Lx(o-e);Lx(c-Ax)<Sx?(t.point(e,r=(r+u)/2>0?Cx:-Cx),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),t.point(o,r),n=0):i!==a&&c>=Ax&&(Lx(e-i)<Sx&&(e-=i*Sx),Lx(o-a)<Sx&&(o-=a*Sx),r=Zc(e,r,o,u),t.point(i,r),t.lineEnd(),t.lineStart(),t.point(a,r),n=0),t.point(e=o,r=u),i=a},lineEnd:function(){t.lineEnd(),e=r=NaN},clean:function(){return 2-n}}}function Zc(t,n,e,r){var i,o,u=jx(t-e);return Lx(u)>Sx?Ux((jx(n)*(o=Ox(r))*jx(e)-jx(r)*(i=Ox(n))*jx(t))/(i*o*u)):(n+r)/2}function Gc(t,n,e,r){var i;if(null==t)i=e*Cx,r.point(-Ax,i),r.point(0,i),r.point(Ax,i),r.point(Ax,0),r.point(Ax,-i),r.point(0,-i),r.point(-Ax,-i),r.point(-Ax,0),r.point(-Ax,i);else if(Lx(t[0]-n[0])>Sx){var o=t[0]<n[0]?Ax:-Ax;i=e*o/2,r.point(-o,i),r.point(0,i),r.point(o,i)}else r.point(n[0],n[1])}function Jc(t){return function(n){var e=new Qc;for(var r in t)e[r]=t[r];return e.stream=n,e}}function Qc(){}function Kc(t,n,e){var r=n[1][0]-n[0][0],i=n[1][1]-n[0][1],o=t.clipExtent&&t.clipExtent();t.scale(150).translate([0,0]),null!=o&&t.clipExtent(null),Zx(e,t.stream(Bb));var u=Bb.result(),a=Math.min(r/(u[1][0]-u[0][0]),i/(u[1][1]-u[0][1])),c=+n[0][0]+(r-a*(u[1][0]+u[0][0]))/2,s=+n[0][1]+(i-a*(u[1][1]+u[0][1]))/2;return null!=o&&t.clipExtent(o),t.scale(150*a).translate([c,s])}function ts(t,n,e){return Kc(t,[[0,0],n],e)}function ns(t){return Jc({point:function(n,e){n=t(n,e),this.stream.point(n[0],n[1])}})}function es(t,n){function e(r,i,o,u,a,c,s,f,l,h,p,d,v,_){var y=s-r,g=f-i,m=y*y+g*g;if(m>4*n&&v--){var x=u+h,b=a+p,w=c+d,M=Xx(x*x+b*b+w*w),T=Ea(w/=M),N=Lx(Lx(w)-1)<Sx||Lx(o-l)<Sx?(o+l)/2:Dx(b,x),k=t(N,T),S=k[0],E=k[1],A=S-r,C=E-i,z=g*A-y*C;(z*z/m>n||Lx((y*A+g*C)/m-.5)>.3||u*h+a*p+c*d<aw)&&(e(r,i,o,u,a,c,S,E,N,x/=M,b/=M,w,v,_),_.point(S,E),e(S,E,N,x,b,w,s,f,l,h,p,d,v,_))}}return function(n){function r(e,r){e=t(e,r),n.point(e[0],e[1])}function i(){y=NaN,w.point=o,n.lineStart()}function o(r,i){var o=Fa([r,i]),u=t(r,i);e(y,g,_,m,x,b,y=u[0],g=u[1],_=r,m=o[0],x=o[1],b=o[2],uw,n),n.point(y,g)}function u(){w.point=r,n.lineEnd()}function a(){i(),w.point=c,w.lineEnd=s}function c(t,n){o(f=t,n),l=y,h=g,p=m,d=x,v=b,w.point=o}function s(){e(y,g,_,m,x,b,l,h,f,p,d,v,uw,n),w.lineEnd=u,u()}var f,l,h,p,d,v,_,y,g,m,x,b,w={point:r,lineStart:i,lineEnd:u,polygonStart:function(){n.polygonStart(),w.lineStart=a},polygonEnd:function(){n.polygonEnd(),w.lineStart=i}};return w}}function rs(t){return is(function(){return t})()}function is(t){function n(t){return t=f(t[0]*qx,t[1]*qx),[t[0]*_+a,c-t[1]*_]}function e(t){return t=f.invert((t[0]-a)/_,(c-t[1])/_),t&&[t[0]*Rx,t[1]*Rx]}function r(t,n){return t=u(t,n),[t[0]*_+a,c-t[1]*_]}function i(){f=ub(s=hc(b,w,M),u);var t=u(m,x);return a=y-t[0]*_,c=g+t[1]*_,o()}function o(){return d=v=null,n}var u,a,c,s,f,l,h,p,d,v,_=150,y=480,g=250,m=0,x=0,b=0,w=0,M=0,T=null,N=rw,k=null,S=qb,E=.5,A=cw(r,E);return n.stream=function(t){return d&&v===t?d:d=sw(N(s,A(S(v=t))))},n.clipAngle=function(t){return arguments.length?(N=+t?iw(T=t*qx,6*qx):(T=null,rw),o()):T*Rx},n.clipExtent=function(t){return arguments.length?(S=null==t?(k=l=h=p=null,qb):xc(k=+t[0][0],l=+t[0][1],h=+t[1][0],p=+t[1][1]),o()):null==k?null:[[k,l],[h,p]]},n.scale=function(t){return arguments.length?(_=+t,i()):_},n.translate=function(t){return arguments.length?(y=+t[0],g=+t[1],i()):[y,g]},n.center=function(t){return arguments.length?(m=t[0]%360*qx,x=t[1]%360*qx,i()):[m*Rx,x*Rx]},n.rotate=function(t){return arguments.length?(b=t[0]%360*qx,w=t[1]%360*qx,M=t.length>2?t[2]%360*qx:0,i()):[b*Rx,w*Rx,M*Rx]},n.precision=function(t){return arguments.length?(A=cw(r,E=t*t),o()):Xx(E)},n.fitExtent=function(t,e){return Kc(n,t,e)},n.fitSize=function(t,e){return ts(n,t,e)},function(){return u=t.apply(this,arguments),n.invert=u.invert&&e,i()}}function os(t){var n=0,e=Ax/3,r=is(t),i=r(n,e);return i.parallels=function(t){return arguments.length?r(n=t[0]*qx,e=t[1]*qx):[n*Rx,e*Rx]},i}function us(t){function n(t,n){return[t*e,jx(n)/e]}var e=Ox(t);return n.invert=function(t,n){return[t/e,Ea(n*e)]},n}function as(t,n){function e(t,n){var e=Xx(o-2*i*jx(n))/i;return[e*jx(t*=i),u-e*Ox(t)]}var r=jx(t),i=(r+jx(n))/2;if(Lx(i)<Sx)return us(t);var o=1+r*(2*i-r),u=Xx(o)/i;return e.invert=function(t,n){var e=u-n;return[Dx(t,Lx(e))/i*Hx(e),Ea((o-(t*t+e*e)*i*i)/(2*i))]},e}function cs(t){var n=t.length;return{point:function(e,r){for(var i=-1;++i<n;)t[i].point(e,r)},sphere:function(){for(var e=-1;++e<n;)t[e].sphere()},lineStart:function(){for(var e=-1;++e<n;)t[e].lineStart()},lineEnd:function(){for(var e=-1;++e<n;)t[e].lineEnd()},polygonStart:function(){for(var e=-1;++e<n;)t[e].polygonStart()},polygonEnd:function(){for(var e=-1;++e<n;)t[e].polygonEnd()}}}function ss(t){return function(n,e){var r=Ox(n),i=Ox(e),o=t(r*i);return[o*i*jx(n),o*jx(e)]}}function fs(t){return function(n,e){var r=Xx(n*n+e*e),i=t(r),o=jx(i),u=Ox(i);return[Dx(n*o,r*u),Ea(r&&e*o/r)]}}function ls(t,n){return[t,Yx(Vx((Cx+n)/2))]}function hs(t){var n,e=rs(t),r=e.scale,i=e.translate,o=e.clipExtent;return e.scale=function(t){return arguments.length?(r(t),n&&e.clipExtent(null),e):r()},e.translate=function(t){return arguments.length?(i(t),n&&e.clipExtent(null),e):i()},e.clipExtent=function(t){if(!arguments.length)return n?null:o();if(n=null==t){var u=Ax*r(),a=i();t=[[a[0]-u,a[1]-u],[a[0]+u,a[1]+u]]}return o(t),e},e.clipExtent(null)}function ps(t){return Vx((Cx+t)/2)}function ds(t,n){function e(t,n){o>0?n<-Cx+Sx&&(n=-Cx+Sx):n>Cx-Sx&&(n=Cx-Sx);var e=o/Bx(ps(n),i);return[e*jx(i*t),o-e*Ox(i*t)]}var r=Ox(t),i=t===n?jx(t):Yx(r/Ox(n))/Yx(ps(n)/ps(t)),o=r*Bx(ps(t),i)/i;return i?(e.invert=function(t,n){var e=o-n,r=Hx(i)*Xx(t*t+e*e);return[Dx(t,Lx(e))/i*Hx(e),2*Ux(Bx(o/r,1/i))-Cx]},e):ls}function vs(t,n){return[t,n]}function _s(t,n){function e(t,n){var e=o-n,r=i*t;return[e*jx(r),o-e*Ox(r)]}var r=Ox(t),i=t===n?jx(t):(r-Ox(n))/(n-t),o=r/i+t;return Lx(i)<Sx?vs:(e.invert=function(t,n){var e=o-n;return[Dx(t,Lx(e))/i*Hx(e),o-Hx(i)*Xx(t*t+e*e)]},e)}function ys(t,n){var e=Ox(n),r=Ox(t)*e;return[e*jx(t)/r,jx(n)/r]}function gs(t,n,e,r){return 1===t&&1===n&&0===e&&0===r?qb:Jc({point:function(i,o){this.stream.point(i*t+e,o*n+r)}})}function ms(t,n){return[Ox(n)*jx(t),jx(n)]}function xs(t,n){var e=Ox(n),r=1+Ox(t)*e;return[e*jx(t)/r,jx(n)/r]}function bs(t,n){return[Yx(Vx((Cx+n)/2)),-t]}var ws="4.4.0",Ms=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},Ts=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},Ns=Ts(Ms),ks=Ns.right,Ss=Ns.left,Es=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},As=function(t){return null===t?NaN:+t},Cs=function(t,n){var e,r,i=t.length,o=0,u=0,a=-1,c=0;if(null==n)for(;++a<i;)isNaN(e=As(t[a]))||(r=e-o,o+=r/++c,u+=r*(e-o));else for(;++a<i;)isNaN(e=As(n(t[a],a,t)))||(r=e-o,o+=r/++c,u+=r*(e-o));if(c>1)return u/(c-1)},zs=function(t,n){var e=Cs(t,n);return e?Math.sqrt(e):e},Ps=function(t,n){var e,r,i,o=-1,u=t.length;if(null==n){for(;++o<u;)if(null!=(r=t[o])&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=t[o])&&(e>r&&(e=r),i<r&&(i=r))}else{for(;++o<u;)if(null!=(r=n(t[o],o,t))&&r>=r){e=i=r;break}for(;++o<u;)null!=(r=n(t[o],o,t))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]},Rs=Array.prototype,qs=Rs.slice,Ls=Rs.map,Us=function(t){return function(){return t}},Ds=function(t){return t},Os=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},Fs=Math.sqrt(50),Is=Math.sqrt(10),Ys=Math.sqrt(2),Bs=function(t,n,r){var i=e(t,n,r);return Os(Math.ceil(t/i)*i,Math.floor(n/i)*i+i/2,i)},js=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},Hs=function(){function t(t){var i,o,u=t.length,a=new Array(u);for(i=0;i<u;++i)a[i]=n(t[i],i,t);var c=e(a),s=c[0],f=c[1],l=r(a,s,f);Array.isArray(l)||(l=Bs(s,f,l));for(var h=l.length;l[0]<=s;)l.shift(),--h;for(;l[h-1]>=f;)l.pop(),--h;var p,d=new Array(h+1);for(i=0;i<=h;++i)p=d[i]=[],p.x0=i>0?l[i-1]:s,p.x1=i<h?l[i]:f;for(i=0;i<u;++i)o=a[i],s<=o&&o<=f&&d[ks(l,o,0,h)].push(t[i]);return d}var n=Ds,e=Ps,r=js;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:Us(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:Us([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:Us(Array.isArray(n)?qs.call(n):n),t):r},t},Xs=function(t,n,e){if(null==e&&(e=As),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t),a=+e(t[o+1],o+1,t);return u+(a-u)*(i-o)}},Vs=function(t,n,e){return t=Ls.call(t,As).sort(Ms),Math.ceil((e-n)/(2*(Xs(t,.75)-Xs(t,.25))*Math.pow(t.length,-1/3)))},Ws=function(t,n,e){return Math.ceil((e-n)/(3.5*zs(t)*Math.pow(t.length,-1/3)))},$s=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&r>e&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&r>e&&(e=r)}return e},Zs=function(t,n){var e,r=0,i=t.length,o=-1,u=i;if(null==n)for(;++o<i;)isNaN(e=As(t[o]))?--u:r+=e;else for(;++o<i;)isNaN(e=As(n(t[o],o,t)))?--u:r+=e;if(u)return r/u},Gs=function(t,n){var e,r=[],i=t.length,o=-1;if(null==n)for(;++o<i;)isNaN(e=As(t[o]))||r.push(e);else for(;++o<i;)isNaN(e=As(n(t[o],o,t)))||r.push(e);return Xs(r.sort(Ms),.5)},Js=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e},Qs=function(t,n){var e,r,i=-1,o=t.length;if(null==n){for(;++i<o;)if(null!=(r=t[i])&&r>=r){e=r;break}for(;++i<o;)null!=(r=t[i])&&e>r&&(e=r)}else{for(;++i<o;)if(null!=(r=n(t[i],i,t))&&r>=r){e=r;break}for(;++i<o;)null!=(r=n(t[i],i,t))&&e>r&&(e=r)}return e},Ks=function(t){for(var n=0,e=t.length-1,r=t[0],i=new Array(e<0?0:e);n<e;)i[n]=[r,r=t[++n]];return i},tf=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},nf=function(t,n){if(e=t.length){var e,r,i=0,o=0,u=t[o];for(n||(n=Ms);++i<e;)(n(r=t[i],u)<0||0!==n(u,u))&&(u=r,o=i);return 0===n(u,u)?o:void 0}},ef=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},rf=function(t,n){var e,r=0,i=t.length,o=-1;if(null==n)for(;++o<i;)(e=+t[o])&&(r+=e);else for(;++o<i;)(e=+n(t[o],o,t))&&(r+=e);return r},of=function(t){if(!(o=t.length))return[];for(var n=-1,e=Qs(t,r),i=new Array(e);++n<e;)for(var o,u=-1,a=i[n]=new Array(o);++u<o;)a[u]=t[u][n];return i},uf=function(){return of(arguments)},af="$";i.prototype=o.prototype={constructor:i,has:function(t){return af+t in this},get:function(t){return this[af+t]},set:function(t,n){return this[af+t]=n,this},remove:function(t){var n=af+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===af&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===af&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===af&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===af&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===af&&++t;return t},empty:function(){for(var t in this)if(t[0]===af)return!1;return!0},each:function(t){for(var n in this)n[0]===af&&t(this[n],n.slice(1),this)}};var cf=function(){function t(n,i,u,a){if(i>=f.length)return null!=r?r(n):null!=e?n.sort(e):n;for(var c,s,l,h=-1,p=n.length,d=f[i++],v=o(),_=u();++h<p;)(l=v.get(c=d(s=n[h])+""))?l.push(s):v.set(c,[s]);return v.each(function(n,e){a(_,e,t(n,i,u,a))}),_}function n(t,e){if(++e>f.length)return t;var i,o=l[e-1];return null!=r&&e>=f.length?i=t.entries():(i=[],t.each(function(t,r){i.push({key:r,values:n(t,e)})})),null!=o?i.sort(function(t,n){return o(t.key,n.key)}):i}var e,r,i,f=[],l=[];return i={object:function(n){return t(n,0,u,a)},map:function(n){return t(n,0,c,s)},entries:function(e){return n(t(e,0,c,s),0)},key:function(t){return f.push(t),i},sortKeys:function(t){return l[f.length-1]=t,i},sortValues:function(t){return e=t,i},rollup:function(t){return r=t,i}}},sf=o.prototype;f.prototype=l.prototype={constructor:f,has:sf.has,add:function(t){return t+="",this[af+t]=t,this},remove:sf.remove,clear:sf.clear,values:sf.keys,size:sf.size,empty:sf.empty,each:sf.each};var ff=function(t){var n=[];for(var e in t)n.push(e);return n},lf=function(t){var n=[];for(var e in t)n.push(t[e]);return n},hf=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n},pf=function(t,n){return t=null==t?0:+t,n=null==n?1:+n,1===arguments.length?(n=t,t=0):n-=t,function(){return Math.random()*n+t}},df=function(t,n){var e,r;return t=null==t?0:+t,n=null==n?1:+n,function(){var i;if(null!=e)i=e,e=null;else do e=2*Math.random()-1,i=2*Math.random()-1,r=e*e+i*i;while(!r||r>1);return t+n*i*Math.sqrt(-2*Math.log(r)/r)}},vf=function(){var t=df.apply(this,arguments);return function(){return Math.exp(t())}},_f=function(t){return function(){for(var n=0,e=0;e<t;++e)n+=Math.random();return n}},yf=function(t){var n=_f(t);return function(){return n()/t}},gf=function(t){return function(){return-Math.log(1-Math.random())/t}},mf=3,xf=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(mf),bf=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(mf),wf=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(mf),Mf=Math.PI,Tf=Mf/2,Nf=4/11,kf=6/11,Sf=8/11,Ef=.75,Af=9/11,Cf=10/11,zf=.9375,Pf=21/22,Rf=63/64,qf=1/Nf/Nf,Lf=1.70158,Uf=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(Lf),Df=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(Lf),Of=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(Lf),Ff=2*Math.PI,If=1,Yf=.3,Bf=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Ff);return r.amplitude=function(n){return t(n,e*Ff)},r.period=function(e){return t(n,e)},r}(If,Yf),jf=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Ff);return r.amplitude=function(n){return t(n,e*Ff)},r.period=function(e){return t(n,e)},r}(If,Yf),Hf=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=Ff);return r.amplitude=function(n){return t(n,e*Ff)},r.period=function(e){return t(n,e)},r}(If,Yf),Xf=function(t){for(var n,e=-1,r=t.length,i=t[r-1],o=0;++e<r;)n=i,i=t[e],o+=n[1]*i[0]-n[0]*i[1];return o/2},Vf=function(t){for(var n,e,r=-1,i=t.length,o=0,u=0,a=t[i-1],c=0;++r<i;)n=a,a=t[r],c+=e=n[0]*a[1]-a[0]*n[1],o+=(n[0]+a[0])*e,u+=(n[1]+a[1])*e;return c*=3,[o/c,u/c]},Wf=function(t,n,e){return(n[0]-t[0])*(e[1]-t[1])-(n[1]-t[1])*(e[0]-t[0])},$f=function(t){if((e=t.length)<3)return null;var n,e,r=new Array(e),i=new Array(e);for(n=0;n<e;++n)r[n]=[+t[n][0],+t[n][1],n];for(r.sort(z),n=0;n<e;++n)i[n]=[r[n][0],-r[n][1]];var o=P(r),u=P(i),a=u[0]===o[0],c=u[u.length-1]===o[o.length-1],s=[];for(n=o.length-1;n>=0;--n)s.push(t[r[o[n]][2]]);for(n=+a;n<u.length-c;++n)s.push(t[r[u[n]][2]]);return s},Zf=function(t,n){for(var e,r,i=t.length,o=t[i-1],u=n[0],a=n[1],c=o[0],s=o[1],f=!1,l=0;l<i;++l)o=t[l],e=o[0],r=o[1],r>a!=s>a&&u<(c-e)*(a-r)/(s-r)+e&&(f=!f),c=e,s=r;return f},Gf=function(t){for(var n,e,r=-1,i=t.length,o=t[i-1],u=o[0],a=o[1],c=0;++r<i;)n=u,e=a,o=t[r],u=o[0],a=o[1],n-=u,e-=a,c+=Math.sqrt(n*n+e*e);return c},Jf=Math.PI,Qf=2*Jf,Kf=1e-6,tl=Qf-Kf;R.prototype=q.prototype={constructor:R,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,r){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+r)},bezierCurveTo:function(t,n,e,r,i,o){this._+="C"+ +t+","+ +n+","+ +e+","+ +r+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,e,r,i){t=+t,n=+n,e=+e,r=+r,i=+i;var o=this._x1,u=this._y1,a=e-t,c=r-n,s=o-t,f=u-n,l=s*s+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>Kf)if(Math.abs(f*a-c*s)>Kf&&i){var h=e-o,p=r-u,d=a*a+c*c,v=h*h+p*p,_=Math.sqrt(d),y=Math.sqrt(l),g=i*Math.tan((Jf-Math.acos((d+l-v)/(2*_*y)))/2),m=g/y,x=g/_;Math.abs(m-1)>Kf&&(this._+="L"+(t+m*s)+","+(n+m*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>s*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,r,i,o){t=+t,n=+n,e=+e;var u=e*Math.cos(r),a=e*Math.sin(r),c=t+u,s=n+a,f=1^o,l=o?r-i:i-r;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+c+","+s:(Math.abs(this._x1-c)>Kf||Math.abs(this._y1-s)>Kf)&&(this._+="L"+c+","+s),e&&(l>tl?this._+="A"+e+","+e+",0,1,"+f+","+(t-u)+","+(n-a)+"A"+e+","+e+",0,1,"+f+","+(this._x1=c)+","+(this._y1=s):(l<0&&(l=l%Qf+Qf),this._+="A"+e+","+e+",0,"+ +(l>=Jf)+","+f+","+(this._x1=t+e*Math.cos(i))+","+(this._y1=n+e*Math.sin(i))))},rect:function(t,n,e,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +r+"h"+-e+"Z"},toString:function(){return this._}};var nl=function(t){var n=+this._x.call(null,t),e=+this._y.call(null,t);return L(this.cover(n,e),n,e,t)},el=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(e))i=(e=Math.floor(t))+1,o=(r=Math.floor(n))+1;else{if(!(e>t||t>i||r>n||n>o))return this;var u,a,c=i-e,s=this._root;switch(a=(n<(r+o)/2)<<1|t<(e+i)/2){case 0:do u=new Array(4),u[a]=s,s=u;while(c*=2,i=e+c,o=r+c,t>i||n>o);break;case 1:do u=new Array(4),u[a]=s,s=u;while(c*=2,e=i-c,o=r+c,e>t||n>o);break;case 2:do u=new Array(4),u[a]=s,s=u;while(c*=2,i=e+c,r=o-c,t>i||r>n);break;case 3:do u=new Array(4),u[a]=s,s=u;while(c*=2,e=i-c,r=o-c,e>t||r>n)}this._root&&this._root.length&&(this._root=s)}return this._x0=e,this._y0=r,this._x1=i,this._y1=o,this},rl=function(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t},il=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},ol=function(t,n,e,r,i){this.node=t,this.x0=n,this.y0=e,this.x1=r,this.y1=i},ul=function(t,n,e){var r,i,o,u,a,c,s,f=this._x0,l=this._y0,h=this._x1,p=this._y1,d=[],v=this._root;for(v&&d.push(new ol(v,f,l,h,p)),null==e?e=1/0:(f=t-e,l=n-e,h=t+e,p=n+e,e*=e);c=d.pop();)if(!(!(v=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<f||(a=c.y1)<l))if(v.length){var _=(i+u)/2,y=(o+a)/2;d.push(new ol(v[3],_,y,u,a),new ol(v[2],i,y,_,a),new ol(v[1],_,o,u,y),new ol(v[0],i,o,_,y)),(s=(n>=y)<<1|t>=_)&&(c=d[d.length-1],d[d.length-1]=d[d.length-1-s],d[d.length-1-s]=c)}else{var g=t-+this._x.call(null,v.data),m=n-+this._y.call(null,v.data),x=g*g+m*m;if(x<e){var b=Math.sqrt(e=x);f=t-b,l=n-b,h=t+b,p=n+b,r=v.data}}return r},al=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,e,r,i,o,u,a,c,s,f,l,h,p=this._root,d=this._x0,v=this._y0,_=this._x1,y=this._y1;if(!p)return this;if(p.length)for(;;){if((s=o>=(a=(d+_)/2))?d=a:_=a,(f=u>=(c=(v+y)/2))?v=c:y=c,n=p,!(p=p[l=f<<1|s]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(e=n,h=l)}for(;p.data!==t;)if(r=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,r?(i?r.next=i:delete r.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(e?e[h]=p:this._root=p),this):(this._root=i,this)},cl=function(){return this._root},sl=function(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t},fl=function(t){var n,e,r,i,o,u,a=[],c=this._root;for(c&&a.push(new ol(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,r=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var s=(r+o)/2,f=(i+u)/2;(e=c[3])&&a.push(new ol(e,s,f,o,u)),(e=c[2])&&a.push(new ol(e,r,f,s,u)),(e=c[1])&&a.push(new ol(e,s,i,o,f)),(e=c[0])&&a.push(new ol(e,r,i,s,f))}return this},ll=function(t){var n,e=[],r=[];for(this._root&&e.push(new ol(this._root,this._x0,this._y0,this._x1,this._y1));n=e.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,s=n.y1,f=(u+c)/2,l=(a+s)/2;(o=i[0])&&e.push(new ol(o,u,a,f,l)),(o=i[1])&&e.push(new ol(o,f,a,c,l)),(o=i[2])&&e.push(new ol(o,u,l,f,s)),(o=i[3])&&e.push(new ol(o,f,l,c,s))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},hl=function(t){return arguments.length?(this._x=t,this):this._x},pl=function(t){return arguments.length?(this._y=t,this):this._y},dl=I.prototype=Y.prototype;dl.copy=function(){var t,n,e=new Y(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return e;if(!r.length)return e._root=B(r),e;for(t=[{source:r,target:e._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(n=r.source[i])&&(n.length?t.push({source:n,target:r.target[i]=new Array(4)}):r.target[i]=B(n));return e},dl.add=nl,dl.addAll=U,dl.cover=el,dl.data=rl,dl.extent=il,dl.find=ul,dl.remove=al,dl.removeAll=D,dl.root=cl,dl.size=sl,dl.visit=fl,dl.visitAfter=ll,dl.x=hl,dl.y=pl;var vl=[].slice,_l={};j.prototype=Z.prototype={constructor:j,defer:function(t){if("function"!=typeof t||this._call)throw new Error;if(null!=this._error)return this;var n=vl.call(arguments,1);return n.push(t),++this._waiting,this._tasks.push(n),H(this),this},abort:function(){return null==this._error&&W(this,new Error("abort")),this},await:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=function(n,e){t.apply(null,[n].concat(e))},$(this),this},awaitAll:function(t){if("function"!=typeof t||this._call)throw new Error;return this._call=t,$(this),this}};var yl=function(t){return function(){
return t}},gl=1e-12,ml=Math.PI,xl=ml/2,bl=2*ml,wl=function(){function t(){var t,s,f=+n.apply(this,arguments),l=+e.apply(this,arguments),h=o.apply(this,arguments)-xl,p=u.apply(this,arguments)-xl,d=Math.abs(p-h),v=p>h;if(c||(c=t=q()),l<f&&(s=l,l=f,f=s),l>gl)if(d>bl-gl)c.moveTo(l*Math.cos(h),l*Math.sin(h)),c.arc(0,0,l,h,p,!v),f>gl&&(c.moveTo(f*Math.cos(p),f*Math.sin(p)),c.arc(0,0,f,p,h,v));else{var _,y,g=h,m=p,x=h,b=p,w=d,M=d,T=a.apply(this,arguments)/2,N=T>gl&&(i?+i.apply(this,arguments):Math.sqrt(f*f+l*l)),k=Math.min(Math.abs(l-f)/2,+r.apply(this,arguments)),S=k,E=k;if(N>gl){var A=nt(N/f*Math.sin(T)),C=nt(N/l*Math.sin(T));(w-=2*A)>gl?(A*=v?1:-1,x+=A,b-=A):(w=0,x=b=(h+p)/2),(M-=2*C)>gl?(C*=v?1:-1,g+=C,m-=C):(M=0,g=m=(h+p)/2)}var z=l*Math.cos(g),P=l*Math.sin(g),R=f*Math.cos(b),L=f*Math.sin(b);if(k>gl){var U=l*Math.cos(m),D=l*Math.sin(m),O=f*Math.cos(x),F=f*Math.sin(x);if(d<ml){var I=w>gl?et(z,P,O,F,U,D,R,L):[R,L],Y=z-I[0],B=P-I[1],j=U-I[0],H=D-I[1],X=1/Math.sin(Math.acos((Y*j+B*H)/(Math.sqrt(Y*Y+B*B)*Math.sqrt(j*j+H*H)))/2),V=Math.sqrt(I[0]*I[0]+I[1]*I[1]);S=Math.min(k,(f-V)/(X-1)),E=Math.min(k,(l-V)/(X+1))}}M>gl?E>gl?(_=rt(O,F,z,P,l,E,v),y=rt(U,D,R,L,l,E,v),c.moveTo(_.cx+_.x01,_.cy+_.y01),E<k?c.arc(_.cx,_.cy,E,Math.atan2(_.y01,_.x01),Math.atan2(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,E,Math.atan2(_.y01,_.x01),Math.atan2(_.y11,_.x11),!v),c.arc(0,0,l,Math.atan2(_.cy+_.y11,_.cx+_.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),!v),c.arc(y.cx,y.cy,E,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!v))):(c.moveTo(z,P),c.arc(0,0,l,g,m,!v)):c.moveTo(z,P),f>gl&&w>gl?S>gl?(_=rt(R,L,U,D,f,-S,v),y=rt(z,P,O,F,f,-S,v),c.lineTo(_.cx+_.x01,_.cy+_.y01),S<k?c.arc(_.cx,_.cy,S,Math.atan2(_.y01,_.x01),Math.atan2(y.y01,y.x01),!v):(c.arc(_.cx,_.cy,S,Math.atan2(_.y01,_.x01),Math.atan2(_.y11,_.x11),!v),c.arc(0,0,f,Math.atan2(_.cy+_.y11,_.cx+_.x11),Math.atan2(y.cy+y.y11,y.cx+y.x11),v),c.arc(y.cx,y.cy,S,Math.atan2(y.y11,y.x11),Math.atan2(y.y01,y.x01),!v))):c.arc(0,0,f,b,x,v):c.lineTo(R,L)}else c.moveTo(0,0);if(c.closePath(),t)return c=null,t+""||null}var n=G,e=J,r=yl(0),i=null,o=Q,u=K,a=tt,c=null;return t.centroid=function(){var t=(+n.apply(this,arguments)+ +e.apply(this,arguments))/2,r=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-ml/2;return[Math.cos(r)*t,Math.sin(r)*t]},t.innerRadius=function(e){return arguments.length?(n="function"==typeof e?e:yl(+e),t):n},t.outerRadius=function(n){return arguments.length?(e="function"==typeof n?n:yl(+n),t):e},t.cornerRadius=function(n){return arguments.length?(r="function"==typeof n?n:yl(+n),t):r},t.padRadius=function(n){return arguments.length?(i=null==n?null:"function"==typeof n?n:yl(+n),t):i},t.startAngle=function(n){return arguments.length?(o="function"==typeof n?n:yl(+n),t):o},t.endAngle=function(n){return arguments.length?(u="function"==typeof n?n:yl(+n),t):u},t.padAngle=function(n){return arguments.length?(a="function"==typeof n?n:yl(+n),t):a},t.context=function(n){return arguments.length?(c=null==n?null:n,t):c},t};it.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var Ml=function(t){return new it(t)},Tl=function(){function t(t){var a,c,s,f=t.length,l=!1;for(null==i&&(u=o(s=q())),a=0;a<=f;++a)!(a<f&&r(c=t[a],a,t))===l&&((l=!l)?u.lineStart():u.lineEnd()),l&&u.point(+n(c,a,t),+e(c,a,t));if(s)return u=null,s+""||null}var n=ot,e=ut,r=yl(!0),i=null,o=Ml,u=null;return t.x=function(e){return arguments.length?(n="function"==typeof e?e:yl(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:yl(+n),t):e},t.defined=function(n){return arguments.length?(r="function"==typeof n?n:yl(!!n),t):r},t.curve=function(n){return arguments.length?(o=n,null!=i&&(u=o(i)),t):o},t.context=function(n){return arguments.length?(null==n?i=u=null:u=o(i=n),t):i},t},Nl=function(){function t(t){var n,f,l,h,p,d=t.length,v=!1,_=new Array(d),y=new Array(d);for(null==a&&(s=c(p=q())),n=0;n<=d;++n){if(!(n<d&&u(h=t[n],n,t))===v)if(v=!v)f=n,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),l=n-1;l>=f;--l)s.point(_[l],y[l]);s.lineEnd(),s.areaEnd()}v&&(_[n]=+e(h,n,t),y[n]=+i(h,n,t),s.point(r?+r(h,n,t):_[n],o?+o(h,n,t):y[n]))}if(p)return s=null,p+""||null}function n(){return Tl().defined(u).curve(c).context(a)}var e=ot,r=null,i=yl(0),o=ut,u=yl(!0),a=null,c=Ml,s=null;return t.x=function(n){return arguments.length?(e="function"==typeof n?n:yl(+n),r=null,t):e},t.x0=function(n){return arguments.length?(e="function"==typeof n?n:yl(+n),t):e},t.x1=function(n){return arguments.length?(r=null==n?null:"function"==typeof n?n:yl(+n),t):r},t.y=function(n){return arguments.length?(i="function"==typeof n?n:yl(+n),o=null,t):i},t.y0=function(n){return arguments.length?(i="function"==typeof n?n:yl(+n),t):i},t.y1=function(n){return arguments.length?(o=null==n?null:"function"==typeof n?n:yl(+n),t):o},t.lineX0=t.lineY0=function(){return n().x(e).y(i)},t.lineY1=function(){return n().x(e).y(o)},t.lineX1=function(){return n().x(r).y(i)},t.defined=function(n){return arguments.length?(u="function"==typeof n?n:yl(!!n),t):u},t.curve=function(n){return arguments.length?(c=n,null!=a&&(s=c(a)),t):c},t.context=function(n){return arguments.length?(null==n?a=s=null:s=c(a=n),t):a},t},kl=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},Sl=function(t){return t},El=function(){function t(t){var a,c,s,f,l,h=t.length,p=0,d=new Array(h),v=new Array(h),_=+i.apply(this,arguments),y=Math.min(bl,Math.max(-bl,o.apply(this,arguments)-_)),g=Math.min(Math.abs(y)/h,u.apply(this,arguments)),m=g*(y<0?-1:1);for(a=0;a<h;++a)(l=v[d[a]=a]=+n(t[a],a,t))>0&&(p+=l);for(null!=e?d.sort(function(t,n){return e(v[t],v[n])}):null!=r&&d.sort(function(n,e){return r(t[n],t[e])}),a=0,s=p?(y-h*m)/p:0;a<h;++a,_=f)c=d[a],l=v[c],f=_+(l>0?l*s:0)+m,v[c]={data:t[c],index:a,value:l,startAngle:_,endAngle:f,padAngle:g};return v}var n=Sl,e=kl,r=null,i=yl(0),o=yl(bl),u=yl(0);return t.value=function(e){return arguments.length?(n="function"==typeof e?e:yl(+e),t):n},t.sortValues=function(n){return arguments.length?(e=n,r=null,t):e},t.sort=function(n){return arguments.length?(r=n,e=null,t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:yl(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:yl(+n),t):o},t.padAngle=function(n){return arguments.length?(u="function"==typeof n?n:yl(+n),t):u},t},Al=ct(Ml);at.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,n){this._curve.point(n*Math.sin(t),n*-Math.cos(t))}};var Cl=function(){return st(Tl().curve(Al))},zl=function(){var t=Nl().curve(Al),n=t.curve,e=t.lineX0,r=t.lineX1,i=t.lineY0,o=t.lineY1;return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return st(e())},delete t.lineX0,t.lineEndAngle=function(){return st(r())},delete t.lineX1,t.lineInnerRadius=function(){return st(i())},delete t.lineY0,t.lineOuterRadius=function(){return st(o())},delete t.lineY1,t.curve=function(t){return arguments.length?n(ct(t)):n()._curve},t},Pl={draw:function(t,n){var e=Math.sqrt(n/ml);t.moveTo(e,0),t.arc(0,0,e,0,bl)}},Rl={draw:function(t,n){var e=Math.sqrt(n/5)/2;t.moveTo(-3*e,-e),t.lineTo(-e,-e),t.lineTo(-e,-3*e),t.lineTo(e,-3*e),t.lineTo(e,-e),t.lineTo(3*e,-e),t.lineTo(3*e,e),t.lineTo(e,e),t.lineTo(e,3*e),t.lineTo(-e,3*e),t.lineTo(-e,e),t.lineTo(-3*e,e),t.closePath()}},ql=Math.sqrt(1/3),Ll=2*ql,Ul={draw:function(t,n){var e=Math.sqrt(n/Ll),r=e*ql;t.moveTo(0,-e),t.lineTo(r,0),t.lineTo(0,e),t.lineTo(-r,0),t.closePath()}},Dl=.8908130915292852,Ol=Math.sin(ml/10)/Math.sin(7*ml/10),Fl=Math.sin(bl/10)*Ol,Il=-Math.cos(bl/10)*Ol,Yl={draw:function(t,n){var e=Math.sqrt(n*Dl),r=Fl*e,i=Il*e;t.moveTo(0,-e),t.lineTo(r,i);for(var o=1;o<5;++o){var u=bl*o/5,a=Math.cos(u),c=Math.sin(u);t.lineTo(c*e,-a*e),t.lineTo(a*r-c*i,c*r+a*i)}t.closePath()}},Bl={draw:function(t,n){var e=Math.sqrt(n),r=-e/2;t.rect(r,r,e,e)}},jl=Math.sqrt(3),Hl={draw:function(t,n){var e=-Math.sqrt(n/(3*jl));t.moveTo(0,2*e),t.lineTo(-jl*e,-e),t.lineTo(jl*e,-e),t.closePath()}},Xl=-.5,Vl=Math.sqrt(3)/2,Wl=1/Math.sqrt(12),$l=3*(Wl/2+1),Zl={draw:function(t,n){var e=Math.sqrt(n/$l),r=e/2,i=e*Wl,o=r,u=e*Wl+e,a=-o,c=u;t.moveTo(r,i),t.lineTo(o,u),t.lineTo(a,c),t.lineTo(Xl*r-Vl*i,Vl*r+Xl*i),t.lineTo(Xl*o-Vl*u,Vl*o+Xl*u),t.lineTo(Xl*a-Vl*c,Vl*a+Xl*c),t.lineTo(Xl*r+Vl*i,Xl*i-Vl*r),t.lineTo(Xl*o+Vl*u,Xl*u-Vl*o),t.lineTo(Xl*a+Vl*c,Xl*c-Vl*a),t.closePath()}},Gl=[Pl,Rl,Ul,Bl,Yl,Hl,Zl],Jl=function(){function t(){var t;if(r||(r=t=q()),n.apply(this,arguments).draw(r,+e.apply(this,arguments)),t)return r=null,t+""||null}var n=yl(Pl),e=yl(64),r=null;return t.type=function(e){return arguments.length?(n="function"==typeof e?e:yl(e),t):n},t.size=function(n){return arguments.length?(e="function"==typeof n?n:yl(+n),t):e},t.context=function(n){return arguments.length?(r=null==n?null:n,t):r},t},Ql=function(){};lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:ft(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:ft(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Kl=function(t){return new lt(t)};ht.prototype={areaStart:Ql,areaEnd:Ql,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x2,this._y2),this._context.closePath();break;case 2:this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break;case 3:this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x2=t,this._y2=n;break;case 1:this._point=2,this._x3=t,this._y3=n;break;case 2:this._point=3,this._x4=t,this._y4=n,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+n)/6);break;default:ft(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var th=function(t){return new ht(t)};pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var e=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+n)/6;this._line?this._context.lineTo(e,r):this._context.moveTo(e,r);break;case 3:this._point=4;default:ft(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var nh=function(t){return new pt(t)};dt.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,n=this._y,e=t.length-1;if(e>0)for(var r,i=t[0],o=n[0],u=t[e]-i,a=n[e]-o,c=-1;++c<=e;)r=c/e,this._basis.point(this._beta*t[c]+(1-this._beta)*(i+r*u),this._beta*n[c]+(1-this._beta)*(o+r*a));this._x=this._y=null,this._basis.lineEnd()},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var eh=function t(n){function e(t){return 1===n?new lt(t):new dt(t,n)}return e.beta=function(n){return t(+n)},e}(.85);_t.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:vt(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:vt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var rh=function t(n){function e(t){return new _t(t,n)}return e.tension=function(n){return t(+n)},e}(0);yt.prototype={areaStart:Ql,areaEnd:Ql,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:vt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ih=function t(n){function e(t){return new yt(t,n)}return e.tension=function(n){return t(+n)},e}(0);gt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:vt(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var oh=function t(n){function e(t){return new gt(t,n)}return e.tension=function(n){return t(+n)},e}(0);xt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3;default:mt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var uh=function t(n){function e(t){return n?new xt(t,n):new _t(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);bt.prototype={areaStart:Ql,areaEnd:Ql,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath();break;case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath();break;case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=n;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=n);break;case 2:this._point=3,this._x5=t,this._y5=n;break;default:mt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ah=function t(n){function e(t){return n?new bt(t,n):new yt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);wt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){if(t=+t,n=+n,this._point){var e=this._x2-t,r=this._y2-n;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(e*e+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:mt(this,t,n)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}};var ch=function t(n){function e(t){return n?new wt(t,n):new gt(t,0)}return e.alpha=function(n){return t(+n)},e}(.5);Mt.prototype={areaStart:Ql,areaEnd:Ql,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,n){t=+t,n=+n,this._point?this._context.lineTo(t,n):(this._point=1,this._context.moveTo(t,n))}};var sh=function(t){return new Mt(t)};Et.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:St(this,this._t0,kt(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){var e=NaN;if(t=+t,n=+n,t!==this._x1||n!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,St(this,kt(this,e=Nt(this,t,n)),e);break;default:St(this,this._t0,e=Nt(this,t,n))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n,this._t0=e}}},(At.prototype=Object.create(Et.prototype)).point=function(t,n){Et.prototype.point.call(this,n,t)},Ct.prototype={moveTo:function(t,n){this._context.moveTo(n,t)},closePath:function(){this._context.closePath()},lineTo:function(t,n){this._context.lineTo(n,t)},bezierCurveTo:function(t,n,e,r,i,o){this._context.bezierCurveTo(n,t,r,e,o,i)}},Rt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,n=this._y,e=t.length;if(e)if(this._line?this._context.lineTo(t[0],n[0]):this._context.moveTo(t[0],n[0]),2===e)this._context.lineTo(t[1],n[1]);else for(var r=qt(t),i=qt(n),o=0,u=1;u<e;++o,++u)this._context.bezierCurveTo(r[0][o],i[0][o],r[1][o],i[1][o],t[u],n[u]);(this._line||0!==this._line&&1===e)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,n){this._x.push(+t),this._y.push(+n)}};var fh=function(t){return new Rt(t)};Lt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:if(this._t<=0)this._context.lineTo(this._x,n),this._context.lineTo(t,n);else{var e=this._x*(1-this._t)+t*this._t;this._context.lineTo(e,this._y),this._context.lineTo(e,n)}}this._x=t,this._y=n}};var lh=function(t){return new Lt(t,.5)},hh=Array.prototype.slice,ph=function(t,n){if((r=t.length)>1)for(var e,r,i=1,o=t[n[0]],u=o.length;i<r;++i){e=o,o=t[n[i]];for(var a=0;a<u;++a)o[a][1]+=o[a][0]=isNaN(e[a][1])?e[a][0]:e[a][1]}},dh=function(t){for(var n=t.length,e=new Array(n);--n>=0;)e[n]=n;return e},vh=function(){function t(t){var o,u,a=n.apply(this,arguments),c=t.length,s=a.length,f=new Array(s);for(o=0;o<s;++o){for(var l,h=a[o],p=f[o]=new Array(c),d=0;d<c;++d)p[d]=l=[0,+i(t[d],h,d,t)],l.data=t[d];p.key=h}for(o=0,u=e(f);o<s;++o)f[u[o]].index=o;return r(f,u),f}var n=yl([]),e=dh,r=ph,i=Ot;return t.keys=function(e){return arguments.length?(n="function"==typeof e?e:yl(hh.call(e)),t):n},t.value=function(n){return arguments.length?(i="function"==typeof n?n:yl(+n),t):i},t.order=function(n){return arguments.length?(e=null==n?dh:"function"==typeof n?n:yl(hh.call(n)),t):e},t.offset=function(n){return arguments.length?(r=null==n?ph:n,t):r},t},_h=function(t,n){if((r=t.length)>0){for(var e,r,i,o=0,u=t[0].length;o<u;++o){for(i=e=0;e<r;++e)i+=t[e][o][1]||0;if(i)for(e=0;e<r;++e)t[e][o][1]/=i}ph(t,n)}},yh=function(t,n){if((e=t.length)>0){for(var e,r=0,i=t[n[0]],o=i.length;r<o;++r){for(var u=0,a=0;u<e;++u)a+=t[u][r][1]||0;i[r][1]+=i[r][0]=-a/2}ph(t,n)}},gh=function(t,n){if((i=t.length)>0&&(r=(e=t[n[0]]).length)>0){for(var e,r,i,o=0,u=1;u<r;++u){for(var a=0,c=0,s=0;a<i;++a){for(var f=t[n[a]],l=f[u][1]||0,h=f[u-1][1]||0,p=(l-h)/2,d=0;d<a;++d){var v=t[n[d]],_=v[u][1]||0,y=v[u-1][1]||0;p+=_-y}c+=l,s+=p*l}e[u-1][1]+=e[u-1][0]=o,c&&(o-=s/c)}e[u-1][1]+=e[u-1][0]=o,ph(t,n)}},mh=function(t){var n=t.map(Ft);return dh(t).sort(function(t,e){return n[t]-n[e]})},xh=function(t){return mh(t).reverse()},bh=function(t){var n,e,r=t.length,i=t.map(Ft),o=dh(t).sort(function(t,n){return i[n]-i[t]}),u=0,a=0,c=[],s=[];for(n=0;n<r;++n)e=o[n],u<a?(u+=i[e],c.push(e)):(a+=i[e],s.push(e));return s.reverse().concat(c)},wh=function(t){return dh(t).reverse()},Mh=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},Th=.7,Nh=1/Th,kh="\\s*([+-]?\\d+)\\s*",Sh="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Eh="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Ah=/^#([0-9a-f]{3})$/,Ch=/^#([0-9a-f]{6})$/,zh=new RegExp("^rgb\\("+[kh,kh,kh]+"\\)$"),Ph=new RegExp("^rgb\\("+[Eh,Eh,Eh]+"\\)$"),Rh=new RegExp("^rgba\\("+[kh,kh,kh,Sh]+"\\)$"),qh=new RegExp("^rgba\\("+[Eh,Eh,Eh,Sh]+"\\)$"),Lh=new RegExp("^hsl\\("+[Sh,Eh,Eh]+"\\)$"),Uh=new RegExp("^hsla\\("+[Sh,Eh,Eh,Sh]+"\\)$"),Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Mh(Yt,Bt,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),Mh(Wt,Vt,It(Yt,{brighter:function(t){return t=null==t?Nh:Math.pow(Nh,t),new Wt(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?Th:Math.pow(Th,t),new Wt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),Mh(Jt,Gt,It(Yt,{brighter:function(t){return t=null==t?Nh:Math.pow(Nh,t),new Jt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Th:Math.pow(Th,t),new Jt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new Wt(Qt(t>=240?t-240:t+120,i,r),Qt(t,i,r),Qt(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var Oh=Math.PI/180,Fh=180/Math.PI,Ih=18,Yh=.95047,Bh=1,jh=1.08883,Hh=4/29,Xh=6/29,Vh=3*Xh*Xh,Wh=Xh*Xh*Xh;Mh(nn,tn,It(Yt,{brighter:function(t){return new nn(this.l+Ih*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new nn(this.l-Ih*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=Bh*rn(t),n=Yh*rn(n),e=jh*rn(e),new Wt(on(3.2404542*n-1.5371385*t-.4985314*e),on(-.969266*n+1.8760108*t+.041556*e),on(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),Mh(sn,cn,It(Yt,{brighter:function(t){return new sn(this.h,this.c,this.l+Ih*(null==t?1:t),this.opacity)},darker:function(t){return new sn(this.h,this.c,this.l-Ih*(null==t?1:t),this.opacity)},rgb:function(){return Kt(this).rgb()}}));var $h=-.14861,Zh=1.78277,Gh=-.29227,Jh=-.90649,Qh=1.97294,Kh=Qh*Jh,tp=Qh*Zh,np=Zh*Gh-Jh*$h;Mh(hn,ln,It(Yt,{brighter:function(t){return t=null==t?Nh:Math.pow(Nh,t),new hn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?Th:Math.pow(Th,t),new hn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Oh,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new Wt(255*(n+e*($h*r+Zh*i)),255*(n+e*(Gh*r+Jh*i)),255*(n+e*(Qh*r)),this.opacity)}}));var ep,rp,ip,op,up=function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],u=r>0?t[r-1]:2*i-o,a=r<n-1?t[r+2]:2*o-i;return pn((e-r/n)*n,u,i,o,a)}},ap=function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],u=t[(r+1)%n],a=t[(r+2)%n];return pn((e-r/n)*n,i,o,u,a)}},cp=function(t){return function(){return t}},sp=function t(n){function e(t,n){var e=r((t=Vt(t)).r,(n=Vt(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=r(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}var r=yn(n);return e.gamma=t,e}(1),fp=mn(up),lp=mn(ap),hp=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=mp(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},pp=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},dp=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},vp=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=mp(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},_p=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,yp=new RegExp(_p.source,"g"),gp=function(t,n){var e,r,i,o=_p.lastIndex=yp.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(e=_p.exec(t))&&(r=yp.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,c.push({i:u,x:dp(e,r)})),o=yp.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?bn(c[0].x):xn(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)a[(e=c[r]).i]=e.x(t);return a.join("")})},mp=function(t,n){var e,r=typeof n;return null==n||"boolean"===r?cp(n):("number"===r?dp:"string"===r?(e=Bt(n))?(n=e,sp):gp:n instanceof Bt?sp:n instanceof Date?pp:Array.isArray(n)?hp:isNaN(n)?vp:dp)(t,n)},xp=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},bp=180/Math.PI,wp={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},Mp=function(t,n,e,r,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,c/=a),t*r<n*e&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*bp,skewX:Math.atan(c)*bp,scaleX:u,scaleY:a}},Tp=Tn(wn,"px, ","px)","deg)"),Np=Tn(Mn,", ",")",")"),kp=Math.SQRT2,Sp=2,Ep=4,Ap=1e-12,Cp=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],c=n[1],s=n[2],f=a-i,l=c-o,h=f*f+l*l;if(h<Ap)r=Math.log(s/u)/kp,e=function(t){return[i+t*f,o+t*l,u*Math.exp(kp*t*r)]};else{var p=Math.sqrt(h),d=(s*s-u*u+Ep*h)/(2*u*Sp*p),v=(s*s-u*u-Ep*h)/(2*s*Sp*p),_=Math.log(Math.sqrt(d*d+1)-d),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-_)/kp,e=function(t){var n=t*r,e=Nn(_),a=u/(Sp*p)*(e*Sn(kp*n+_)-kn(_));return[i+a*f,o+a*l,u*e/Nn(kp*n+_)]}}return e.duration=1e3*r,e},zp=En(_n),Pp=En(gn),Rp=Cn(_n),qp=Cn(gn),Lp=zn(_n),Up=zn(gn),Dp=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e},Op={value:function(){}};Rn.prototype=Pn.prototype={constructor:Rn,on:function(t,n){var e,r=this._,i=qn(t+"",r),o=-1,u=i.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);
for(;++o<u;)if(e=(t=i[o]).type)r[e]=Un(r[e],t.name,n);else if(null==n)for(e in r)r[e]=Un(r[e],t.name,null);return this}for(;++o<u;)if((e=(t=i[o]).type)&&(e=Ln(r[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new Rn(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var Fp,Ip,Yp=function(t){function n(t,n){var r,i,o=e(t,function(t,e){return r?r(t,e-1):(i=t,void(r=n?On(t,n):Dn(t)))});return o.columns=i,o}function e(t,n){function e(){if(f>=s)return u;if(i)return i=!1,o;var n,e=f;if(34===t.charCodeAt(e)){for(var r=e;r++<s;)if(34===t.charCodeAt(r)){if(34!==t.charCodeAt(r+1))break;++r}return f=r+2,n=t.charCodeAt(r+1),13===n?(i=!0,10===t.charCodeAt(r+2)&&++f):10===n&&(i=!0),t.slice(e+1,r).replace(/""/g,'"')}for(;f<s;){var a=1;if(n=t.charCodeAt(f++),10===n)i=!0;else if(13===n)i=!0,10===t.charCodeAt(f)&&(++f,++a);else if(n!==c)continue;return t.slice(e,f-a)}return t.slice(e)}for(var r,i,o={},u={},a=[],s=t.length,f=0,l=0;(r=e())!==u;){for(var h=[];r!==o&&r!==u;)h.push(r),r=e();n&&null==(h=n(h,l++))||a.push(h)}return a}function r(n,e){return null==e&&(e=Fn(n)),[e.map(u).join(t)].concat(n.map(function(n){return e.map(function(t){return u(n[t])}).join(t)})).join("\n")}function i(t){return t.map(o).join("\n")}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":a.test(t+="")?'"'+t.replace(/\"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n]"),c=t.charCodeAt(0);return{parse:n,parseRows:e,format:r,formatRows:i}},Bp=Yp(","),jp=Bp.parse,Hp=Bp.parseRows,Xp=Bp.format,Vp=Bp.formatRows,Wp=Yp("\t"),$p=Wp.parse,Zp=Wp.parseRows,Gp=Wp.format,Jp=Wp.formatRows,Qp=function(t,n){function e(t){var n,e=f.status;if(!e&&Yn(f)||e>=200&&e<300||304===e){if(u)try{n=u.call(r,f)}catch(t){return void c.call("error",r,t)}else n=f;c.call("load",r,n)}else c.call("error",r,t)}var r,i,u,a,c=Pn("beforesend","progress","load","error"),s=o(),f=new XMLHttpRequest,l=null,h=null,p=0;if("undefined"==typeof XDomainRequest||"withCredentials"in f||!/^(http(s)?:)?\/\//.test(t)||(f=new XDomainRequest),"onload"in f?f.onload=f.onerror=f.ontimeout=e:f.onreadystatechange=function(t){f.readyState>3&&e(t)},f.onprogress=function(t){c.call("progress",r,t)},r={header:function(t,n){return t=(t+"").toLowerCase(),arguments.length<2?s.get(t):(null==n?s.remove(t):s.set(t,n+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(a=t,r):a},timeout:function(t){return arguments.length?(p=+t,r):p},user:function(t){return arguments.length<1?l:(l=null==t?null:t+"",r)},password:function(t){return arguments.length<1?h:(h=null==t?null:t+"",r)},response:function(t){return u=t,r},get:function(t,n){return r.send("GET",t,n)},post:function(t,n){return r.send("POST",t,n)},send:function(n,e,o){return f.open(n,t,!0,l,h),null==i||s.has("accept")||s.set("accept",i+",*/*"),f.setRequestHeader&&s.each(function(t,n){f.setRequestHeader(n,t)}),null!=i&&f.overrideMimeType&&f.overrideMimeType(i),null!=a&&(f.responseType=a),p>0&&(f.timeout=p),null==o&&"function"==typeof e&&(o=e,e=null),null!=o&&1===o.length&&(o=In(o)),null!=o&&r.on("error",o).on("load",function(t){o(null,t)}),c.call("beforesend",r,f),f.send(null==e?null:e),r},abort:function(){return f.abort(),r},on:function(){var t=c.on.apply(c,arguments);return t===c?r:t}},null!=n){if("function"!=typeof n)throw new Error("invalid callback: "+n);return r.get(n)}return r},Kp=function(t,n){return function(e,r){var i=Qp(e).mimeType(t).response(n);if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r);return i.get(r)}return i}},td=Kp("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)}),nd=Kp("application/json",function(t){return JSON.parse(t.responseText)}),ed=Kp("text/plain",function(t){return t.responseText}),rd=Kp("application/xml",function(t){var n=t.responseXML;if(!n)throw new Error("parse error");return n}),id=function(t,n){return function(e,r,i){arguments.length<3&&(i=r,r=null);var o=Qp(e).mimeType(t);return o.row=function(t){return arguments.length?o.response(Bn(n,r=t)):r},o.row(r),i?o.get(i):o}},od=id("text/csv",jp),ud=id("text/tab-separated-values",$p),ad=0,cd=0,sd=0,fd=1e3,ld=0,hd=0,pd=0,dd="object"==typeof performance&&performance.now?performance:Date,vd="function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){setTimeout(t,17)};Xn.prototype=Vn.prototype={constructor:Xn,restart:function(t,n,e){if("function"!=typeof t)throw new TypeError("callback is not a function");e=(null==e?jn():+e)+(null==n?0:+n),this._next||Ip===this||(Ip?Ip._next=this:Fp=this,Ip=this),this._call=t,this._time=e,Jn()},stop:function(){this._call&&(this._call=null,this._time=1/0,Jn())}};var _d=function(t,n,e){var r=new Xn;return n=null==n?0:+n,r.restart(function(e){r.stop(),t(e+n)},n,e),r},yd=function(t,n,e){var r=new Xn,i=n;return null==n?(r.restart(t,n,e),r):(n=+n,e=null==e?jn():+e,r.restart(function o(u){u+=i,r.restart(o,i+=n,e),t(u)},n,e),r)},gd=new Date,md=new Date,xd=Qn(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});xd.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Qn(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):xd:null};var bd=xd.range,wd=1e3,Md=6e4,Td=36e5,Nd=864e5,kd=6048e5,Sd=Qn(function(t){t.setTime(Math.floor(t/wd)*wd)},function(t,n){t.setTime(+t+n*wd)},function(t,n){return(n-t)/wd},function(t){return t.getUTCSeconds()}),Ed=Sd.range,Ad=Qn(function(t){t.setTime(Math.floor(t/Md)*Md)},function(t,n){t.setTime(+t+n*Md)},function(t,n){return(n-t)/Md},function(t){return t.getMinutes()}),Cd=Ad.range,zd=Qn(function(t){var n=t.getTimezoneOffset()*Md%Td;n<0&&(n+=Td),t.setTime(Math.floor((+t-n)/Td)*Td+n)},function(t,n){t.setTime(+t+n*Td)},function(t,n){return(n-t)/Td},function(t){return t.getHours()}),Pd=zd.range,Rd=Qn(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*Md)/Nd},function(t){return t.getDate()-1}),qd=Rd.range,Ld=Kn(0),Ud=Kn(1),Dd=Kn(2),Od=Kn(3),Fd=Kn(4),Id=Kn(5),Yd=Kn(6),Bd=Ld.range,jd=Ud.range,Hd=Dd.range,Xd=Od.range,Vd=Fd.range,Wd=Id.range,$d=Yd.range,Zd=Qn(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Gd=Zd.range,Jd=Qn(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});Jd.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Qn(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var Qd=Jd.range,Kd=Qn(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*Md)},function(t,n){return(n-t)/Md},function(t){return t.getUTCMinutes()}),tv=Kd.range,nv=Qn(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+n*Td)},function(t,n){return(n-t)/Td},function(t){return t.getUTCHours()}),ev=nv.range,rv=Qn(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/Nd},function(t){return t.getUTCDate()-1}),iv=rv.range,ov=te(0),uv=te(1),av=te(2),cv=te(3),sv=te(4),fv=te(5),lv=te(6),hv=ov.range,pv=uv.range,dv=av.range,vv=cv.range,_v=sv.range,yv=fv.range,gv=lv.range,mv=Qn(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),xv=mv.range,bv=Qn(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});bv.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Qn(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var wv,Mv=bv.range,Tv=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},Nv=function(t){return t=Tv(Math.abs(t)),t?t[1]:NaN},kv=function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],c=0;i>0&&a>0&&(c+a+1>r&&(a=Math.max(1,r-c)),o.push(e.substring(i-=a,i+a)),!((c+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}},Sv=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},Ev=function(t,n){var e=Tv(t,n);if(!e)return t+"";var r=e[0],i=e[1],o=i-(wv=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=r.length;return o===u?r:o>u?r+new Array(o-u+1).join("0"):o>0?r.slice(0,o)+"."+r.slice(o):"0."+new Array(1-o).join("0")+Tv(t,Math.max(0,n+o-1))[0]},Av=function(t,n){var e=Tv(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},Cv={"":Sv,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return Av(100*t,n)},r:Av,s:Ev,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},zv=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i,Pv=function(t){return new ne(t)};ne.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var Rv,qv=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],Lv=function(t){function n(t){function n(t){var n,i,c,g=d,m=v;if("c"===p)m=_(t)+m,t="";else{t=+t;var x=(t<0||1/t<0)&&(t*=-1,!0);if(t=_(t,h),x)for(n=-1,i=t.length,x=!1;++n<i;)if(c=t.charCodeAt(n),48<c&&c<58||"x"===p&&96<c&&c<103||"X"===p&&64<c&&c<71){x=!0;break}if(g=(x?"("===a?a:"-":"-"===a||"("===a?"":a)+g,m=m+("s"===p?qv[8+wv/3]:"")+(x&&"("===a?")":""),y)for(n=-1,i=t.length;++n<i;)if(c=t.charCodeAt(n),48>c||c>57){m=(46===c?o+t.slice(n+1):t.slice(n))+m,t=t.slice(0,n);break}}l&&!s&&(t=r(t,1/0));var b=g.length+t.length+m.length,w=b<f?new Array(f-b+1).join(e):"";switch(l&&s&&(t=r(w+t,w.length?f-m.length:1/0),w=""),u){case"<":return g+t+m+w;case"=":return g+w+t+m;case"^":return w.slice(0,b=w.length>>1)+g+t+m+w.slice(b)}return w+g+t+m}t=Pv(t);var e=t.fill,u=t.align,a=t.sign,c=t.symbol,s=t.zero,f=t.width,l=t.comma,h=t.precision,p=t.type,d="$"===c?i[0]:"#"===c&&/[boxX]/.test(p)?"0"+p.toLowerCase():"",v="$"===c?i[1]:/[%p]/.test(p)?"%":"",_=Cv[p],y=!p||/[defgprs%]/.test(p);return h=null==h?p?6:12:/[gprs]/.test(p)?Math.max(1,Math.min(21,h)):Math.max(0,Math.min(20,h)),n.toString=function(){return t+""},n}function e(t,e){var r=n((t=Pv(t),t.type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Nv(e)/3))),o=Math.pow(10,-i),u=qv[8+i/3];return function(t){return r(o*t)+u}}var r=t.grouping&&t.thousands?kv(t.grouping,t.thousands):ee,i=t.currency,o=t.decimal;return{format:n,formatPrefix:e}};re({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var Uv,Dv=function(t){return Math.max(0,-Nv(Math.abs(t)))},Ov=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Nv(n)/3)))-Nv(Math.abs(t)))},Fv=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Nv(n)-Nv(t))+1},Iv={"-":"",_:" ",0:"0"},Yv=/^\s*\d+/,Bv=/^%/,jv=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;nr({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var Hv="%Y-%m-%dT%H:%M:%S.%LZ",Xv=Date.prototype.toISOString?er:t.utcFormat(Hv),Vv=+new Date("2000-01-01T00:00:00.000Z")?rr:t.utcParse(Hv),Wv=Array.prototype,$v=Wv.map,Zv=Wv.slice,Gv={name:"implicit"},Jv=function(t){return function(){return t}},Qv=function(t){return+t},Kv=[0,1],t_=function(n,r,i){var o,u=n[0],a=n[n.length-1],c=e(u,a,null==r?10:r);switch(i=Pv(null==i?",f":i),i.type){case"s":var s=Math.max(Math.abs(u),Math.abs(a));return null!=i.precision||isNaN(o=Ov(c,s))||(i.precision=o),t.formatPrefix(i,s);case"":case"e":case"g":case"p":case"r":null!=i.precision||isNaN(o=Fv(c,Math.max(Math.abs(u),Math.abs(a))))||(i.precision=o-("e"===i.type));break;case"f":case"%":null!=i.precision||isNaN(o=Dv(c))||(i.precision=o-2*("%"===i.type))}return t.format(i)},n_=function(t,n){t=t.slice();var e,r=0,i=t.length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t},e_=1e3,r_=60*e_,i_=60*r_,o_=24*i_,u_=7*o_,a_=30*o_,c_=365*o_,s_=function(){return Rr(Jd,Zd,Ld,Rd,zd,Ad,Sd,xd,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},f_=function(){return Rr(bv,mv,ov,rv,nv,Kd,Sd,xd,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},l_=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},h_=l_("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),p_=l_("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),d_=l_("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),v_=l_("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),__=Up(ln(300,.5,0),ln(-240,.5,1)),y_=Up(ln(-100,.75,.35),ln(80,1.5,.8)),g_=Up(ln(260,.75,.35),ln(80,1.5,.8)),m_=ln(),x_=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return m_.h=360*t-100,m_.s=1.5-1.5*n,m_.l=.8-.9*n,m_+""},b_=qr(l_("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),w_=qr(l_("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),M_=qr(l_("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),T_=qr(l_("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),N_="http://www.w3.org/1999/xhtml",k_={svg:"http://www.w3.org/2000/svg",xhtml:N_,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},S_=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),k_.hasOwnProperty(n)?{space:k_[n],local:t}:t},E_=function(t){var n=S_(t);return(n.local?Dr:Ur)(n)},A_=0;Fr.prototype=Or.prototype={constructor:Fr,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var C_=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var z_=document.documentElement;if(!z_.matches){var P_=z_.webkitMatchesSelector||z_.msMatchesSelector||z_.mozMatchesSelector||z_.oMatchesSelector;C_=function(t){return function(){return P_.call(this,t)}}}}var R_=C_,q_={};if(t.event=null,"undefined"!=typeof document){var L_=document.documentElement;"onmouseenter"in L_||(q_={mouseenter:"mouseover",mouseleave:"mouseout"})}var U_=function(t,n,e){var r,i,o=Br(t+""),u=o.length;{if(!(arguments.length<2)){for(a=n?Hr:jr,null==e&&(e=!1),r=0;r<u;++r)this.each(a(o[r],n,e));return this}var a=this.node().__on;if(a)for(var c,s=0,f=a.length;s<f;++s)for(r=0,c=a[s];r<u;++r)if((i=o[r]).type===c.type&&i.name===c.name)return c.value}},D_=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},O_=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},F_=function(t){var n=D_();return n.changedTouches&&(n=n.changedTouches[0]),O_(t,n)},I_=function(t){return null==t?Vr:function(){return this.querySelector(t)}},Y_=function(t){"function"!=typeof t&&(t=I_(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],c=a.length,s=r[i]=new Array(c),f=0;f<c;++f)(o=a[f])&&(u=t.call(o,o.__data__,f,a))&&("__data__"in o&&(u.__data__=o.__data__),s[f]=u);return new zi(r,this._parents)},B_=function(t){return null==t?Wr:function(){return this.querySelectorAll(t)}},j_=function(t){"function"!=typeof t&&(t=B_(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],c=a.length,s=0;s<c;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new zi(r,i)},H_=function(t){"function"!=typeof t&&(t=R_(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new zi(r,this._parents)},X_=function(t){return new Array(t.length)},V_=function(){return new zi(this._enter||this._groups.map(X_),this._parents)};$r.prototype={constructor:$r,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var W_=function(t){return function(){return t}},$_="$",Z_=function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?Gr:Zr,r=this._parents,i=this._groups;"function"!=typeof t&&(t=W_(t));for(var o=i.length,u=new Array(o),a=new Array(o),c=new Array(o),s=0;s<o;++s){var f=r[s],l=i[s],h=l.length,p=t.call(f,f&&f.__data__,s,r),d=p.length,v=a[s]=new Array(d),_=u[s]=new Array(d),y=c[s]=new Array(h);e(f,l,v,_,y,p,n);for(var g,m,x=0,b=0;x<d;++x)if(g=v[x]){for(x>=b&&(b=x+1);!(m=_[b])&&++b<d;);g._next=m||null}}return u=new zi(u,r),u._enter=a,u._exit=c,u},G_=function(){return new zi(this._exit||this._groups.map(X_),this._parents)},J_=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new zi(u,this._parents)},Q_=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},K_=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=Jr);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],c=a.length,s=i[o]=new Array(c),f=0;f<c;++f)(u=a[f])&&(s[f]=u);s.sort(n)}return new zi(i,this._parents).order()},ty=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},ny=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},ey=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},ry=function(){var t=0;return this.each(function(){++t}),t},iy=function(){return!this.node()},oy=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},uy=function(t,n){var e=S_(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?Kr:Qr:"function"==typeof n?e.local?ri:ei:e.local?ni:ti)(e,n))},ay=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},cy=function(t,n,e){var r;return arguments.length>1?this.each((null==n?ii:"function"==typeof n?ui:oi)(t,n,null==e?"":e)):ay(r=this.node()).getComputedStyle(r,null).getPropertyValue(t)},sy=function(t,n){return arguments.length>1?this.each((null==n?ai:"function"==typeof n?si:ci)(t,n)):this.node()[t]};hi.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var fy=function(t,n){var e=fi(t+"");if(arguments.length<2){for(var r=li(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?yi:n?vi:_i)(e,n))},ly=function(t){return arguments.length?this.each(null==t?gi:("function"==typeof t?xi:mi)(t)):this.node().textContent},hy=function(t){return arguments.length?this.each(null==t?bi:("function"==typeof t?Mi:wi)(t)):this.node().innerHTML},py=function(){return this.each(Ti)},dy=function(){return this.each(Ni)},vy=function(t){var n="function"==typeof t?t:E_(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},_y=function(t,n){var e="function"==typeof t?t:E_(t),r=null==n?ki:"function"==typeof n?n:I_(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},yy=function(){return this.each(Si)},gy=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},my=function(t,n){return this.each(("function"==typeof n?Ci:Ai)(t,n))},xy=[null];zi.prototype=Pi.prototype={constructor:zi,select:Y_,selectAll:j_,filter:H_,data:Z_,enter:V_,exit:G_,merge:J_,order:Q_,sort:K_,call:ty,nodes:ny,node:ey,size:ry,empty:iy,each:oy,attr:uy,style:cy,property:sy,classed:fy,text:ly,html:hy,raise:py,lower:dy,append:vy,insert:_y,remove:yy,datum:gy,on:U_,dispatch:my};var by=function(t){return"string"==typeof t?new zi([[document.querySelector(t)]],[document.documentElement]):new zi([[t]],xy)},wy=function(t){return"string"==typeof t?new zi([document.querySelectorAll(t)],[document.documentElement]):new zi([null==t?[]:t],xy)},My=function(t,n,e){arguments.length<3&&(e=n,n=D_().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return O_(t,r);return null},Ty=function(t,n){null==n&&(n=D_().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=O_(t,n[e]);return i},Ny=Pn("start","end","interrupt"),ky=[],Sy=0,Ey=1,Ay=2,Cy=3,zy=4,Py=5,Ry=6,qy=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};Ui(t,e,{name:n,index:r,group:i,on:Ny,tween:ky,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Sy})},Ly=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>Ay&&e.state<Py,e.state=Ry,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},Uy=function(t){return this.each(function(){Ly(this,t)})},Dy=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=Li(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?Di:Oi)(e,t,n))},Oy=function(t,n){var e;return("number"==typeof n?dp:n instanceof Bt?sp:(e=Bt(n))?(n=e,sp):gp)(t,n)},Fy=function(t,n){var e=S_(t),r="transform"===e?Np:Oy;return this.attrTween(t,"function"==typeof n?(e.local?Xi:Hi)(e,r,Fi(this,"attr."+t,n)):null==n?(e.local?Yi:Ii)(e):(e.local?ji:Bi)(e,r,n))},Iy=function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;var r=S_(t);return this.tween(e,(r.local?Vi:Wi)(r,n))},Yy=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?$i:Zi)(n,t)):Li(this.node(),n).delay},By=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Gi:Ji)(n,t)):Li(this.node(),n).duration},jy=function(t){var n=this._id;return arguments.length?this.each(Qi(n,t)):Li(this.node(),n).ease},Hy=function(t){"function"!=typeof t&&(t=R_(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,c=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&c.push(o);return new so(r,this._parents,this._name,this._id)},Xy=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var c,s=n[a],f=e[a],l=s.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=s[p]||f[p])&&(h[p]=c);for(;a<r;++a)u[a]=n[a];return new so(u,this._parents,this._name,this._id)},Vy=function(t,n){var e=this._id;return arguments.length<2?Li(this.node(),e).on.on(t):this.each(to(e,t,n))},Wy=function(){return this.on("end.remove",no(this._id))},$y=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=I_(t));for(var r=this._groups,i=r.length,o=new Array(i),u=0;u<i;++u)for(var a,c,s=r[u],f=s.length,l=o[u]=new Array(f),h=0;h<f;++h)(a=s[h])&&(c=t.call(a,a.__data__,h,s))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,qy(l[h],n,e,h,l,Li(a,e)));return new so(o,this._parents,n,e)},Zy=function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=B_(t));for(var r=this._groups,i=r.length,o=[],u=[],a=0;a<i;++a)for(var c,s=r[a],f=s.length,l=0;l<f;++l)if(c=s[l]){for(var h,p=t.call(c,c.__data__,l,s),d=Li(c,e),v=0,_=p.length;v<_;++v)(h=p[v])&&qy(h,n,e,v,p,d);o.push(p),u.push(c)}return new so(o,u,n,e);
},Gy=Pi.prototype.constructor,Jy=function(){return new Gy(this._groups,this._parents)},Qy=function(t,n,e){var r="transform"==(t+="")?Tp:Oy;return null==n?this.styleTween(t,eo(t,r)).on("end.style."+t,ro(t)):this.styleTween(t,"function"==typeof n?oo(t,r,Fi(this,"style."+t,n)):io(t,r,n),e)},Ky=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,uo(t,n,null==e?"":e))},tg=function(t){return this.tween("text","function"==typeof t?co(Fi(this,"text",t)):ao(null==t?"":t+""))},ng=function(){for(var t=this._name,n=this._id,e=lo(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)if(u=a[s]){var f=Li(u,n);qy(u,t,e,s,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new so(r,this._parents,t,e)},eg=0,rg=Pi.prototype;so.prototype=fo.prototype={constructor:so,select:$y,selectAll:Zy,filter:Hy,merge:Xy,selection:Jy,transition:ng,call:rg.call,nodes:rg.nodes,node:rg.node,size:rg.size,empty:rg.empty,each:rg.each,on:Vy,attr:Fy,attrTween:Iy,style:Qy,styleTween:Ky,text:tg,remove:Wy,tween:Dy,delay:Yy,duration:By,ease:jy};var ig={time:null,delay:0,duration:250,ease:g},og=function(t){var n,e;t instanceof so?(n=t._id,t=t._name):(n=lo(),(e=ig).time=jn(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],c=a.length,s=0;s<c;++s)(u=a[s])&&qy(u,t,n,s,a,e||ho(u,n));return new so(r,this._parents,t,n)};Pi.prototype.interrupt=Uy,Pi.prototype.transition=og;var ug=[null],ag=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>Ey&&e.name===n)return new so([[t]],ug,n,+r)}return null},cg=Array.prototype.slice,sg=function(t){return t},fg=1,lg=2,hg=3,pg=4,dg=1e-6,vg=function(){function t(t){var o,u=0;t.eachAfter(function(t){var e=t.children;e?(t.x=To(e),t.y=ko(e)):(t.x=o?u+=n(t,o):0,t.y=0,o=t)});var a=Eo(t),c=Ao(t),s=a.x-n(a,c)/2,f=c.x+n(c,a)/2;return t.eachAfter(i?function(n){n.x=(n.x-t.x)*e,n.y=(t.y-n.y)*r}:function(n){n.x=(n.x-s)/(f-s)*e,n.y=(1-(t.y?n.y/t.y:1))*r})}var n=Mo,e=1,r=1,i=!1;return t.separation=function(e){return arguments.length?(n=e,t):n},t.size=function(n){return arguments.length?(i=!1,e=+n[0],r=+n[1],t):i?null:[e,r]},t.nodeSize=function(n){return arguments.length?(i=!0,e=+n[0],r=+n[1],t):i?[e,r]:null},t},_g=function(t){var n,e,r,i,o=this,u=[o];do for(n=u.reverse(),u=[];o=n.pop();)if(t(o),e=o.children)for(r=0,i=e.length;r<i;++r)u.push(e[r]);while(u.length);return this},yg=function(t){for(var n,e,r=this,i=[r];r=i.pop();)if(t(r),n=r.children)for(e=n.length-1;e>=0;--e)i.push(n[e]);return this},gg=function(t){for(var n,e,r,i=this,o=[i],u=[];i=o.pop();)if(u.push(i),n=i.children)for(e=0,r=n.length;e<r;++e)o.push(n[e]);for(;i=u.pop();)t(i);return this},mg=function(t){return this.eachAfter(function(n){for(var e=+t(n.data)||0,r=n.children,i=r&&r.length;--i>=0;)e+=r[i].value;n.value=e})},xg=function(t){return this.eachBefore(function(n){n.children&&n.children.sort(t)})},bg=function(t){for(var n=this,e=Co(n,t),r=[n];n!==e;)n=n.parent,r.push(n);for(var i=r.length;t!==e;)r.splice(i,0,t),t=t.parent;return r},wg=function(){for(var t=this,n=[t];t=t.parent;)n.push(t);return n},Mg=function(){var t=[];return this.each(function(n){t.push(n)}),t},Tg=function(){var t=[];return this.eachBefore(function(n){n.children||t.push(n)}),t},Ng=function(){var t=this,n=[];return t.each(function(e){e!==t&&n.push({source:e.parent,target:e})}),n};Uo.prototype=zo.prototype={constructor:Uo,each:_g,eachAfter:gg,eachBefore:yg,sum:mg,sort:xg,path:bg,ancestors:wg,descendants:Mg,leaves:Tg,links:Ng,copy:Po};var kg=function(t){for(var n,e=(t=t.slice()).length,r=null,i=r;e;){var o=new Do(t[e-1]);i=i?i.next=o:r=o,t[n]=t[--e]}return{head:r,tail:i}},Sg=function(t){return Fo(kg(t),[])},Eg=function(t){return Wo(t),t},Ag=function(t){return function(){return t}},Cg=function(){function t(t){return t.x=e/2,t.y=r/2,n?t.eachBefore(Qo(n)).eachAfter(Ko(i,.5)).eachBefore(tu(1)):t.eachBefore(Qo(Jo)).eachAfter(Ko(Go,1)).eachAfter(Ko(i,t.r/Math.min(e,r))).eachBefore(tu(Math.min(e,r)/(2*t.r))),t}var n=null,e=1,r=1,i=Go;return t.radius=function(e){return arguments.length?(n=$o(e),t):n},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i="function"==typeof n?n:Ag(+n),t):i},t},zg=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},Pg=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(r-n)/t.value;++a<c;)o=u[a],o.y0=e,o.y1=i,o.x0=n,o.x1=n+=o.value*s},Rg=function(){function t(t){var u=t.height+1;return t.x0=t.y0=i,t.x1=e,t.y1=r/u,t.eachBefore(n(r,u)),o&&t.eachBefore(zg),t}function n(t,n){return function(e){e.children&&Pg(e,e.x0,t*(e.depth+1)/n,e.x1,t*(e.depth+2)/n);var r=e.x0,o=e.y0,u=e.x1-i,a=e.y1-i;u<r&&(r=u=(r+u)/2),a<o&&(o=a=(o+a)/2),e.x0=r,e.y0=o,e.x1=u,e.y1=a}}var e=1,r=1,i=0,o=!1;return t.round=function(n){return arguments.length?(o=!!n,t):o},t.size=function(n){return arguments.length?(e=+n[0],r=+n[1],t):[e,r]},t.padding=function(n){return arguments.length?(i=+n,t):i},t},qg="$",Lg={depth:-1},Ug={},Dg=function(){function t(t){var r,i,o,u,a,c,s,f=t.length,l=new Array(f),h={};for(i=0;i<f;++i)r=t[i],a=l[i]=new Uo(r),null!=(c=n(r,i,t))&&(c+="")&&(s=qg+(a.id=c),h[s]=s in h?Ug:a);for(i=0;i<f;++i)if(a=l[i],c=e(t[i],i,t),null!=c&&(c+="")){if(u=h[qg+c],!u)throw new Error("missing: "+c);if(u===Ug)throw new Error("ambiguous: "+c);u.children?u.children.push(a):u.children=[a],a.parent=u}else{if(o)throw new Error("multiple roots");o=a}if(!o)throw new Error("no root");if(o.parent=Lg,o.eachBefore(function(t){t.depth=t.parent.depth+1,--f}).eachBefore(Lo),o.parent=null,f>0)throw new Error("cycle");return o}var n=nu,e=eu;return t.id=function(e){return arguments.length?(n=Zo(e),t):n},t.parentId=function(n){return arguments.length?(e=Zo(n),t):e},t};su.prototype=Object.create(Uo.prototype);var Og=function(){function t(t){var r=fu(t);if(r.eachAfter(n),r.parent.m=-r.z,r.eachBefore(e),c)t.eachBefore(i);else{var s=t,f=t,l=t;t.eachBefore(function(t){t.x<s.x&&(s=t),t.x>f.x&&(f=t),t.depth>l.depth&&(l=t)});var h=s===f?1:o(s,f)/2,p=h-s.x,d=u/(f.x+h+p),v=a/(l.depth||1);t.eachBefore(function(t){t.x=(t.x+p)*d,t.y=t.depth*v})}return t}function n(t){var n=t.children,e=t.parent.children,i=t.i?e[t.i-1]:null;if(n){au(t);var u=(n[0].z+n[n.length-1].z)/2;i?(t.z=i.z+o(t._,i._),t.m=t.z-u):t.z=u}else i&&(t.z=i.z+o(t._,i._));t.parent.A=r(t,i,t.parent.A||e[0])}function e(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t,n,e){if(n){for(var r,i=t,u=t,a=n,c=i.parent.children[0],s=i.m,f=u.m,l=a.m,h=c.m;a=ou(a),i=iu(i),a&&i;)c=iu(c),u=ou(u),u.a=t,r=a.z+l-i.z-s+o(a._,i._),r>0&&(uu(cu(a,t,e),t,r),s+=r,f+=r),l+=a.m,s+=i.m,h+=c.m,f+=u.m;a&&!ou(u)&&(u.t=a,u.m+=l-f),i&&!iu(c)&&(c.t=i,c.m+=s-h,e=t)}return e}function i(t){t.x*=u,t.y=t.depth*a}var o=ru,u=1,a=1,c=null;return t.separation=function(n){return arguments.length?(o=n,t):o},t.size=function(n){return arguments.length?(c=!1,u=+n[0],a=+n[1],t):c?null:[u,a]},t.nodeSize=function(n){return arguments.length?(c=!0,u=+n[0],a=+n[1],t):c?[u,a]:null},t},Fg=function(t,n,e,r,i){for(var o,u=t.children,a=-1,c=u.length,s=t.value&&(i-e)/t.value;++a<c;)o=u[a],o.x0=n,o.x1=r,o.y0=e,o.y1=e+=o.value*s},Ig=(1+Math.sqrt(5))/2,Yg=function t(n){function e(t,e,r,i,o){lu(n,t,e,r,i,o)}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ig),Bg=function(){function t(t){return t.x0=t.y0=0,t.x1=i,t.y1=o,t.eachBefore(n),u=[0],r&&t.eachBefore(zg),t}function n(t){var n=u[t.depth],r=t.x0+n,i=t.y0+n,o=t.x1-n,h=t.y1-n;o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),t.x0=r,t.y0=i,t.x1=o,t.y1=h,t.children&&(n=u[t.depth+1]=a(t)/2,r+=l(t)-n,i+=c(t)-n,o-=s(t)-n,h-=f(t)-n,o<r&&(r=o=(r+o)/2),h<i&&(i=h=(i+h)/2),e(t,r,i,o,h))}var e=Yg,r=!1,i=1,o=1,u=[0],a=Go,c=Go,s=Go,f=Go,l=Go;return t.round=function(n){return arguments.length?(r=!!n,t):r},t.size=function(n){return arguments.length?(i=+n[0],o=+n[1],t):[i,o]},t.tile=function(n){return arguments.length?(e=Zo(n),t):e},t.padding=function(n){return arguments.length?t.paddingInner(n).paddingOuter(n):t.paddingInner()},t.paddingInner=function(n){return arguments.length?(a="function"==typeof n?n:Ag(+n),t):a},t.paddingOuter=function(n){return arguments.length?t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):t.paddingTop()},t.paddingTop=function(n){return arguments.length?(c="function"==typeof n?n:Ag(+n),t):c},t.paddingRight=function(n){return arguments.length?(s="function"==typeof n?n:Ag(+n),t):s},t.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:Ag(+n),t):f},t.paddingLeft=function(n){return arguments.length?(l="function"==typeof n?n:Ag(+n),t):l},t},jg=function(t,n,e,r,i){function o(t,n,e,r,i,u,a){if(t>=n-1){var s=c[t];return s.x0=r,s.y0=i,s.x1=u,s.y1=a,void 0}for(var l=f[t],h=e/2+l,p=t+1,d=n-1;p<d;){var v=p+d>>>1;f[v]<h?p=v+1:d=v}var _=f[p]-l,y=e-_;if(a-i>u-r){var g=(i*y+a*_)/e;o(t,p,_,r,i,u,g),o(p,n,y,r,g,u,a)}else{var m=(r*y+u*_)/e;o(t,p,_,r,i,m,a),o(p,n,y,m,i,u,a)}}var u,a,c=t.children,s=c.length,f=new Array(s+1);for(f[0]=a=u=0;u<s;++u)f[u+1]=a+=c[u].value;o(0,s,t.value,n,e,r,i)},Hg=function(t,n,e,r,i){(1&t.depth?Fg:Pg)(t,n,e,r,i)},Xg=function t(n){function e(t,e,r,i,o){if((u=t._squarify)&&u.ratio===n)for(var u,a,c,s,f,l=-1,h=u.length,p=t.value;++l<h;){for(a=u[l],c=a.children,s=a.value=0,f=c.length;s<f;++s)a.value+=c[s].value;a.dice?Pg(a,e,r,i,r+=(o-r)*a.value/p):Fg(a,e,r,e+=(i-e)*a.value/p,o),p-=a.value}else t._squarify=u=lu(n,t,e,r,i,o),u.ratio=n}return e.ratio=function(n){return t((n=+n)>1?n:1)},e}(Ig),Vg=function(t,n){function e(){var e,i,o=r.length,u=0,a=0;for(e=0;e<o;++e)i=r[e],u+=i.x,a+=i.y;for(u=u/o-t,a=a/o-n,e=0;e<o;++e)i=r[e],i.x-=u,i.y-=a}var r;return null==t&&(t=0),null==n&&(n=0),e.initialize=function(t){r=t},e.x=function(n){return arguments.length?(t=+n,e):t},e.y=function(t){return arguments.length?(n=+t,e):n},e},Wg=function(t){return function(){return t}},$g=function(){return 1e-6*(Math.random()-.5)},Zg=function(t){function n(){function t(t,n,e,r,i){var o=t.data,a=t.r,p=l+a;{if(!o)return n>s+p||r<s-p||e>f+p||i<f-p;if(o.index>c.index){var d=s-o.x-o.vx,v=f-o.y-o.vy,_=d*d+v*v;_<p*p&&(0===d&&(d=$g(),_+=d*d),0===v&&(v=$g(),_+=v*v),_=(p-(_=Math.sqrt(_)))/_*u,c.vx+=(d*=_)*(p=(a*=a)/(h+a)),c.vy+=(v*=_)*p,o.vx-=d*(p=1-p),o.vy-=v*p)}}}for(var n,r,c,s,f,l,h,p=i.length,d=0;d<a;++d)for(r=I(i,hu,pu).visitAfter(e),n=0;n<p;++n)c=i[n],l=o[c.index],h=l*l,s=c.x+c.vx,f=c.y+c.vy,r.visit(t)}function e(t){if(t.data)return t.r=o[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function r(){if(i){var n,e,r=i.length;for(o=new Array(r),n=0;n<r;++n)e=i[n],o[e.index]=+t(e,n,i)}}var i,o,u=1,a=1;return"function"!=typeof t&&(t=Wg(null==t?1:+t)),n.initialize=function(t){i=t,r()},n.iterations=function(t){return arguments.length?(a=+t,n):a},n.strength=function(t){return arguments.length?(u=+t,n):u},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:Wg(+e),r(),n):t},n},Gg=function(t){function n(t){return 1/Math.min(f[t.source.index],f[t.target.index])}function e(n){for(var e=0,r=t.length;e<v;++e)for(var i,o,u,s,f,h,p,d=0;d<r;++d)i=t[d],o=i.source,u=i.target,s=u.x+u.vx-o.x-o.vx||$g(),f=u.y+u.vy-o.y-o.vy||$g(),h=Math.sqrt(s*s+f*f),h=(h-c[d])/h*n*a[d],s*=h,f*=h,u.vx-=s*(p=l[d]),u.vy-=f*p,o.vx+=s*(p=1-p),o.vy+=f*p}function r(){if(s){var n,e,r=s.length,p=t.length,d=o(s,h);for(n=0,f=new Array(r);n<p;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=vu(d,e.source)),"object"!=typeof e.target&&(e.target=vu(d,e.target)),f[e.source.index]=(f[e.source.index]||0)+1,f[e.target.index]=(f[e.target.index]||0)+1;for(n=0,l=new Array(p);n<p;++n)e=t[n],l[n]=f[e.source.index]/(f[e.source.index]+f[e.target.index]);a=new Array(p),i(),c=new Array(p),u()}}function i(){if(s)for(var n=0,e=t.length;n<e;++n)a[n]=+p(t[n],n,t)}function u(){if(s)for(var n=0,e=t.length;n<e;++n)c[n]=+d(t[n],n,t)}var a,c,s,f,l,h=du,p=n,d=Wg(30),v=1;return null==t&&(t=[]),e.initialize=function(t){s=t,r()},e.links=function(n){return arguments.length?(t=n,r(),e):t},e.id=function(t){return arguments.length?(h=t,e):h},e.iterations=function(t){return arguments.length?(v=+t,e):v},e.strength=function(t){return arguments.length?(p="function"==typeof t?t:Wg(+t),i(),e):p},e.distance=function(t){return arguments.length?(d="function"==typeof t?t:Wg(+t),u(),e):d},e},Jg=10,Qg=Math.PI*(3-Math.sqrt(5)),Kg=function(t){function n(){e(),d.call("tick",u),a<c&&(p.stop(),d.call("end",u))}function e(){var n,e,r=t.length;for(a+=(f-a)*s,h.each(function(t){t(a)}),n=0;n<r;++n)e=t[n],null==e.fx?e.x+=e.vx*=l:(e.x=e.fx,e.vx=0),null==e.fy?e.y+=e.vy*=l:(e.y=e.fy,e.vy=0)}function r(){for(var n,e=0,r=t.length;e<r;++e){if(n=t[e],n.index=e,isNaN(n.x)||isNaN(n.y)){var i=Jg*Math.sqrt(e),o=e*Qg;n.x=i*Math.cos(o),n.y=i*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function i(n){return n.initialize&&n.initialize(t),n}var u,a=1,c=.001,s=1-Math.pow(c,1/300),f=0,l=.6,h=o(),p=Vn(n),d=Pn("tick","end");return null==t&&(t=[]),r(),u={tick:e,restart:function(){return p.restart(n),u},stop:function(){return p.stop(),u},nodes:function(n){return arguments.length?(t=n,r(),h.each(i),u):t},alpha:function(t){return arguments.length?(a=+t,u):a},alphaMin:function(t){return arguments.length?(c=+t,u):c},alphaDecay:function(t){return arguments.length?(s=+t,u):+s},alphaTarget:function(t){return arguments.length?(f=+t,u):f},velocityDecay:function(t){return arguments.length?(l=1-t,u):1-l},force:function(t,n){return arguments.length>1?(null==n?h.remove(t):h.set(t,i(n)),u):h.get(t)},find:function(n,e,r){var i,o,u,a,c,s=0,f=t.length;for(null==r?r=1/0:r*=r,s=0;s<f;++s)a=t[s],i=n-a.x,o=e-a.y,u=i*i+o*o,u<r&&(c=a,r=u);return c},on:function(t,n){return arguments.length>1?(d.on(t,n),u):d.on(t)}}},tm=function(){function t(t){var n,a=i.length,c=I(i,_u,yu).visitAfter(e);for(u=t,n=0;n<a;++n)o=i[n],c.visit(r)}function n(){if(i){var t,n,e=i.length;for(a=new Array(e),t=0;t<e;++t)n=i[t],a[n.index]=+c(n,t,i)}}function e(t){var n,e,r,i,o,u=0;if(t.length){for(r=i=o=0;o<4;++o)(n=t[o])&&(e=n.value)&&(u+=e,r+=e*n.x,i+=e*n.y);t.x=r/u,t.y=i/u}else{n=t,n.x=n.data.x,n.y=n.data.y;do u+=a[n.data.index];while(n=n.next)}t.value=u}function r(t,n,e,r){if(!t.value)return!0;var i=t.x-o.x,c=t.y-o.y,h=r-n,p=i*i+c*c;if(h*h/l<p)return p<f&&(0===i&&(i=$g(),p+=i*i),0===c&&(c=$g(),p+=c*c),p<s&&(p=Math.sqrt(s*p)),o.vx+=i*t.value*u/p,o.vy+=c*t.value*u/p),!0;if(!(t.length||p>=f)){(t.data!==o||t.next)&&(0===i&&(i=$g(),p+=i*i),0===c&&(c=$g(),p+=c*c),p<s&&(p=Math.sqrt(s*p)));do t.data!==o&&(h=a[t.data.index]*u/p,o.vx+=i*h,o.vy+=c*h);while(t=t.next)}}var i,o,u,a,c=Wg(-30),s=1,f=1/0,l=.81;return t.initialize=function(t){i=t,n()},t.strength=function(e){return arguments.length?(c="function"==typeof e?e:Wg(+e),n(),t):c},t.distanceMin=function(n){return arguments.length?(s=n*n,t):Math.sqrt(s)},t.distanceMax=function(n){return arguments.length?(f=n*n,t):Math.sqrt(f)},t.theta=function(n){return arguments.length?(l=n*n,t):Math.sqrt(l)},t},nm=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vx+=(o[e]-n.x)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=Wg(.1);return"function"!=typeof t&&(t=Wg(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Wg(+t),e(),n):u},n.x=function(r){return arguments.length?(t="function"==typeof r?r:Wg(+r),e(),n):t},n},em=function(t){function n(t){for(var n,e=0,u=r.length;e<u;++e)n=r[e],n.vy+=(o[e]-n.y)*i[e]*t}function e(){if(r){var n,e=r.length;for(i=new Array(e),o=new Array(e),n=0;n<e;++n)i[n]=isNaN(o[n]=+t(r[n],n,r))?0:+u(r[n],n,r)}}var r,i,o,u=Wg(.1);return"function"!=typeof t&&(t=Wg(null==t?0:+t)),n.initialize=function(t){r=t,e()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:Wg(+t),e(),n):u},n.y=function(r){return arguments.length?(t="function"==typeof r?r:Wg(+r),e(),n):t},n},rm=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},im=function(t){var n=t.document.documentElement,e=by(t).on("dragstart.drag",rm,!0);"onselectstart"in n?e.on("selectstart.drag",rm,!0):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")},om=function(t){return function(){return t}};xu.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var um=function(){function n(t){t.on("mousedown.drag",e).on("touchstart.drag",o).on("touchmove.drag",u).on("touchend.drag touchcancel.drag",a).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function e(){if(!f&&l.apply(this,arguments)){var n=c("mouse",h.apply(this,arguments),F_,this,arguments);n&&(by(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",i,!0),im(t.event.view),gu(),s=!1,n("start"))}}function r(){rm(),s=!0,d.mouse("drag")}function i(){by(t.event.view).on("mousemove.drag mouseup.drag",null),mu(t.event.view,s),rm(),d.mouse("end")}function o(){if(l.apply(this,arguments)){var n,e,r=t.event.changedTouches,i=h.apply(this,arguments),o=r.length;for(n=0;n<o;++n)(e=c(r[n].identifier,i,My,this,arguments))&&(gu(),e("start"))}}function u(){var n,e,r=t.event.changedTouches,i=r.length;for(n=0;n<i;++n)(e=d[r[n].identifier])&&(rm(),e("drag"))}function a(){var n,e,r=t.event.changedTouches,i=r.length;for(f&&clearTimeout(f),f=setTimeout(function(){f=null},500),n=0;n<i;++n)(e=d[r[n].identifier])&&(gu(),e("end"))}function c(e,r,i,o,u){var a,c,s,f=i(r,e),l=v.copy();if(Xr(new xu(n,"beforestart",a,e,_,f[0],f[1],0,0,l),function(){return null!=(t.event.subject=a=p.apply(o,u))&&(c=a.x-f[0]||0,s=a.y-f[1]||0,!0)}))return function t(h){var p,v=f;switch(h){case"start":d[e]=t,p=_++;break;case"end":delete d[e],--_;case"drag":f=i(r,e),p=_}Xr(new xu(n,h,a,e,p,f[0]+c,f[1]+s,f[0]-v[0],f[1]-v[1],l),l.apply,l,[h,o,u])}}var s,f,l=bu,h=wu,p=Mu,d={},v=Pn("start","drag","end"),_=0;return n.filter=function(t){return arguments.length?(l="function"==typeof t?t:om(!!t),n):l},n.container=function(t){return arguments.length?(h="function"==typeof t?t:om(t),n):h},n.subject=function(t){return arguments.length?(p="function"==typeof t?t:om(t),n):p},n.on=function(){var t=v.on.apply(v,arguments);return t===v?n:t},n},am=function(t){return function(){return t}};ku.prototype={constructor:ku,insert:function(t,n){var e,r,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;e=t}else this._?(t=Cu(this._),n.P=null,n.N=t,t.P=t.L=n,e=t):(n.P=n.N=null,this._=n,e=null);for(n.L=n.R=null,n.U=e,n.C=!0,t=n;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.R&&(Eu(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Au(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,t=r):(t===e.L&&(Au(this,e),t=e,e=t.U),e.C=!1,r.C=!0,Eu(this,r))),e=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,e,r,i=t.U,o=t.L,u=t.R;if(e=o?u?Cu(u):o:u,i?i.L===t?i.L=e:i.R=e:this._=e,o&&u?(r=e.C,e.C=t.C,e.L=o,o.U=e,e!==u?(i=e.U,e.U=t.U,t=e.R,i.L=t,e.R=u,u.U=e):(e.U=i,i=e,t=e.R)):(r=t.C,t=e),t&&(t.U=i),!r){if(t&&t.C)return void(t.C=!1);do{if(t===this._)break;if(t===i.L){if(n=i.R,n.C&&(n.C=!1,i.C=!0,Eu(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,Au(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,Eu(this,i),t=this._;break}}else if(n=i.L,n.C&&(n.C=!1,i.C=!0,Au(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,Eu(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,Au(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var cm,sm,fm,lm,hm,pm=[],dm=[],vm=1e-6,_m=1e-12;na.prototype={constructor:na,polygons:function(){var t=this.edges;return this.cells.map(function(n){var e=n.halfedges.map(function(e){return Fu(n,t[e])});return e.data=n.site.data,e})},triangles:function(){var t=[],n=this.edges;return this.cells.forEach(function(e,r){for(var i,o=e.site,u=e.halfedges,a=-1,c=u.length,s=n[u[c-1]],f=s.left===o?s.right:s.left;++a<c;)i=f,s=n[u[a]],f=s.left===o?s.right:s.left,i&&f&&r<i.index&&r<f.index&&Ku(o,i,f)<0&&t.push([o.data,i.data,f.data])}),t},links:function(){return this.edges.filter(function(t){return t.right}).map(function(t){return{source:t.left.data,target:t.right.data}})},find:function(t,n,e){var r,i=this,o=i._found||0,u=i.cells[o]||i.cells[o=0],a=t-u.site[0],c=n-u.site[1],s=a*a+c*c;do u=i.cells[r=o],o=null,u.halfedges.forEach(function(e){var r=i.edges[e],a=r.left;if(a!==u.site&&a||(a=r.right)){var c=t-a[0],f=n-a[1],l=c*c+f*f;l<s&&(s=l,o=a.index)}});while(null!==o);return i._found=r,null==e||s<=e*e?u.site:null}};var ym=function(){function t(t){return new na(t.map(function(r,i){var o=[Math.round(n(r,i,t)/vm)*vm,Math.round(e(r,i,t)/vm)*vm];return o.index=i,o.data=r,o}),r)}var n=Tu,e=Nu,r=null;return t.polygons=function(n){return t(n).polygons()},t.links=function(n){return t(n).links()},t.triangles=function(n){return t(n).triangles()},t.x=function(e){return arguments.length?(n="function"==typeof e?e:am(+e),t):n},t.y=function(n){return arguments.length?(e="function"==typeof n?n:am(+n),t):e},t.extent=function(n){return arguments.length?(r=null==n?null:[[+n[0][0],+n[0][1]],[+n[1][0],+n[1][1]]],t):r&&[[r[0][0],r[0][1]],[r[1][0],r[1][1]]]},t.size=function(n){return arguments.length?(r=null==n?null:[[0,0],[+n[0],+n[1]]],t):r&&[r[1][0]-r[0][0],r[1][1]-r[0][1]]},t},gm=function(t){return function(){return t}};ra.prototype={constructor:ra,scale:function(t){return 1===t?this:new ra(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new ra(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var mm=new ra(1,0,0);ia.prototype=ra.prototype;var xm=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},bm=function(){function n(t){t.on("wheel.zoom",s).on("mousedown.zoom",f).on("dblclick.zoom",l).on("touchstart.zoom",h).on("touchmove.zoom",p).on("touchend.zoom touchcancel.zoom",d).style("-webkit-tap-highlight-color","rgba(0,0,0,0)").property("__zoom",ca)}function e(t,n){return n=Math.max(m,Math.min(x,n)),n===t.k?t:new ra(n,t.x,t.y)}function r(t,n,e){var r=n[0]-e[0]*t.k,i=n[1]-e[1]*t.k;return r===t.x&&i===t.y?t:new ra(t.k,r,i)}function i(t,n){var e=t.invertX(n[0][0])-b,r=t.invertX(n[1][0])-w,i=t.invertY(n[0][1])-M,o=t.invertY(n[1][1])-T;return t.translate(r>e?(e+r)/2:Math.min(0,e)||Math.max(0,r),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function o(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function u(t,n,e){t.on("start.zoom",function(){a(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){a(this,arguments).end()}).tween("zoom",function(){var t=this,r=arguments,i=a(t,r),u=g.apply(t,r),c=e||o(u),s=Math.max(u[1][0]-u[0][0],u[1][1]-u[0][1]),f=t.__zoom,l="function"==typeof n?n.apply(t,r):n,h=k(f.invert(c).concat(s/f.k),l.invert(c).concat(s/l.k));return function(t){if(1===t)t=l;else{var n=h(t),e=s/n[2];t=new ra(e,c[0]-n[0]*e,c[1]-n[1]*e)}i.zoom(null,t)}})}function a(t,n){for(var e,r=0,i=S.length;r<i;++r)if((e=S[r]).that===t)return e;return new c(t,n)}function c(t,n){this.that=t,this.args=n,this.index=-1,this.active=0,this.extent=g.apply(t,n)}function s(){function n(){o.wheel=null,o.end()}if(y.apply(this,arguments)){var o=a(this,arguments),u=this.__zoom,c=Math.max(m,Math.min(x,u.k*Math.pow(2,-t.event.deltaY*(t.event.deltaMode?120:1)/500))),s=F_(this);if(o.wheel)o.mouse[0][0]===s[0]&&o.mouse[0][1]===s[1]||(o.mouse[1]=u.invert(o.mouse[0]=s)),clearTimeout(o.wheel);else{if(u.k===c)return;o.mouse=[s,u.invert(s)],Ly(this),o.start()}xm(),o.wheel=setTimeout(n,C),o.zoom("mouse",i(r(e(u,c),o.mouse[0],o.mouse[1]),o.extent))}}function f(){function n(){xm(),o.moved=!0,o.zoom("mouse",i(r(o.that.__zoom,o.mouse[0]=F_(o.that),o.mouse[1]),o.extent))}function e(){u.on("mousemove.zoom mouseup.zoom",null),mu(t.event.view,o.moved),xm(),o.end()}if(!_&&y.apply(this,arguments)){var o=a(this,arguments),u=by(t.event.view).on("mousemove.zoom",n,!0).on("mouseup.zoom",e,!0),c=F_(this);im(t.event.view),oa(),o.mouse=[c,this.__zoom.invert(c)],Ly(this),o.start()}}function l(){if(y.apply(this,arguments)){var o=this.__zoom,a=F_(this),c=o.invert(a),s=o.k*(t.event.shiftKey?.5:2),f=i(r(e(o,s),a,c),g.apply(this,arguments));xm(),N>0?by(this).transition().duration(N).call(u,f,a):by(this).call(n.transform,f)}}function h(){if(y.apply(this,arguments)){var n,e,r,i=a(this,arguments),o=t.event.changedTouches,u=o.length;for(oa(),n=0;n<u;++n)e=o[n],r=My(this,o,e.identifier),r=[r,this.__zoom.invert(r),e.identifier],i.touch0?i.touch1||(i.touch1=r):i.touch0=r;return v&&(v=clearTimeout(v),!i.touch1)?(i.end(),r=by(this).on("dblclick.zoom"),void(r&&r.apply(this,arguments))):void(t.event.touches.length===u&&(v=setTimeout(function(){v=null},A),Ly(this),i.start()))}}function p(){var n,o,u,c,s=a(this,arguments),f=t.event.changedTouches,l=f.length;for(xm(),v&&(v=clearTimeout(v)),n=0;n<l;++n)o=f[n],u=My(this,f,o.identifier),s.touch0&&s.touch0[2]===o.identifier?s.touch0[0]=u:s.touch1&&s.touch1[2]===o.identifier&&(s.touch1[0]=u);if(o=s.that.__zoom,s.touch1){var h=s.touch0[0],p=s.touch0[1],d=s.touch1[0],_=s.touch1[1],y=(y=d[0]-h[0])*y+(y=d[1]-h[1])*y,g=(g=_[0]-p[0])*g+(g=_[1]-p[1])*g;o=e(o,Math.sqrt(y/g)),u=[(h[0]+d[0])/2,(h[1]+d[1])/2],c=[(p[0]+_[0])/2,(p[1]+_[1])/2]}else{if(!s.touch0)return;u=s.touch0[0],c=s.touch0[1]}s.zoom("touch",i(r(o,u,c),s.extent))}function d(){var n,e,r=a(this,arguments),i=t.event.changedTouches,o=i.length;for(oa(),_&&clearTimeout(_),_=setTimeout(function(){_=null},A),n=0;n<o;++n)e=i[n],r.touch0&&r.touch0[2]===e.identifier?delete r.touch0:r.touch1&&r.touch1[2]===e.identifier&&delete r.touch1;r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0||r.end()}var v,_,y=ua,g=aa,m=0,x=1/0,b=-x,w=x,M=b,T=w,N=250,k=Cp,S=[],E=Pn("start","zoom","end"),A=500,C=150;return n.transform=function(t,n){var e=t.selection?t.selection():t;e.property("__zoom",ca),t!==e?u(t,n):e.interrupt().each(function(){a(this,arguments).start().zoom(null,"function"==typeof n?n.apply(this,arguments):n).end()})},n.scaleBy=function(t,e){n.scaleTo(t,function(){var t=this.__zoom.k,n="function"==typeof e?e.apply(this,arguments):e;return t*n})},n.scaleTo=function(t,u){n.transform(t,function(){var t=g.apply(this,arguments),n=this.__zoom,a=o(t),c=n.invert(a),s="function"==typeof u?u.apply(this,arguments):u;return i(r(e(n,s),a,c),t)})},n.translateBy=function(t,e,r){n.transform(t,function(){return i(this.__zoom.translate("function"==typeof e?e.apply(this,arguments):e,"function"==typeof r?r.apply(this,arguments):r),g.apply(this,arguments))})},c.prototype={start:function(){return 1===++this.active&&(this.index=S.push(this)-1,this.emit("start")),this},zoom:function(t,n){return this.mouse&&"mouse"!==t&&(this.mouse[1]=n.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=n.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=n.invert(this.touch1[0])),this.that.__zoom=n,this.emit("zoom"),this},end:function(){return 0===--this.active&&(S.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){Xr(new ea(n,t,this.that.__zoom),E.apply,E,[t,this.that,this.args])}},n.filter=function(t){return arguments.length?(y="function"==typeof t?t:gm(!!t),n):y},n.extent=function(t){return arguments.length?(g="function"==typeof t?t:gm([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):g},n.scaleExtent=function(t){return arguments.length?(m=+t[0],x=+t[1],n):[m,x]},n.translateExtent=function(t){return arguments.length?(b=+t[0][0],w=+t[1][0],M=+t[0][1],T=+t[1][1],n):[[b,M],[w,T]]},n.duration=function(t){return arguments.length?(N=+t,n):N},n.interpolate=function(t){return arguments.length?(k=t,n):k},n.on=function(){var t=E.on.apply(E,arguments);return t===E?n:t},n},wm=function(t){return function(){return t}},Mm=function(t,n,e){this.target=t,this.type=n,this.selection=e},Tm=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Nm={name:"drag"},km={name:"space"},Sm={name:"handle"},Em={name:"center"},Am={name:"x",handles:["e","w"].map(fa),input:function(t,n){return t&&[[t[0],n[0][1]],[t[1],n[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Cm={name:"y",handles:["n","s"].map(fa),input:function(t,n){return t&&[[n[0][0],t[0]],[n[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},zm={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(fa),input:function(t){return t},output:function(t){return t}},Pm={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Rm={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},qm={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},Lm={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Um={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},Dm=function(){return ga(zm)},Om=Math.cos,Fm=Math.sin,Im=Math.PI,Ym=Im/2,Bm=2*Im,jm=Math.max,Hm=function(){function t(t){var o,u,a,c,s,f,l=t.length,h=[],p=Os(l),d=[],v=[],_=v.groups=new Array(l),y=new Array(l*l);for(o=0,s=-1;++s<l;){for(u=0,f=-1;++f<l;)u+=t[s][f];h.push(u),d.push(Os(l)),o+=u}for(e&&p.sort(function(t,n){return e(h[t],h[n])}),r&&d.forEach(function(n,e){n.sort(function(n,i){return r(t[e][n],t[e][i])})}),o=jm(0,Bm-n*l)/o,c=o?n:Bm/l,u=0,s=-1;++s<l;){for(a=u,f=-1;++f<l;){var g=p[s],m=d[g][f],x=t[g][m],b=u,w=u+=x*o;y[m*l+g]={index:g,subindex:m,startAngle:b,endAngle:w,value:x}}_[g]={index:g,startAngle:a,endAngle:u,value:h[g]},u+=c}for(s=-1;++s<l;)for(f=s-1;++f<l;){var M=y[f*l+s],T=y[s*l+f];(M.value||T.value)&&v.push(M.value<T.value?{source:T,target:M}:{source:M,target:T})}return i?v.sort(i):v}var n=0,e=null,r=null,i=null;return t.padAngle=function(e){return arguments.length?(n=jm(0,e),t):n},t.sortGroups=function(n){return arguments.length?(e=n,t):e},t.sortSubgroups=function(n){return arguments.length?(r=n,t):r},t.sortChords=function(n){return arguments.length?(null==n?i=null:(i=ma(n))._=n,t):i&&i._},t},Xm=Array.prototype.slice,Vm=function(t){return function(){return t}},Wm=function(){function t(){var t,a=Xm.call(arguments),c=n.apply(this,a),s=e.apply(this,a),f=+r.apply(this,(a[0]=c,a)),l=i.apply(this,a)-Ym,h=o.apply(this,a)-Ym,p=f*Om(l),d=f*Fm(l),v=+r.apply(this,(a[0]=s,a)),_=i.apply(this,a)-Ym,y=o.apply(this,a)-Ym;if(u||(u=t=q()),u.moveTo(p,d),u.arc(0,0,f,l,h),l===_&&h===y||(u.quadraticCurveTo(0,0,v*Om(_),v*Fm(_)),u.arc(0,0,v,_,y)),u.quadraticCurveTo(0,0,p,d),u.closePath(),t)return u=null,t+""||null}var n=xa,e=ba,r=wa,i=Ma,o=Ta,u=null;return t.radius=function(n){return arguments.length?(r="function"==typeof n?n:Vm(+n),t):r},t.startAngle=function(n){return arguments.length?(i="function"==typeof n?n:Vm(+n),t):i},t.endAngle=function(n){return arguments.length?(o="function"==typeof n?n:Vm(+n),t):o},t.source=function(e){return arguments.length?(n=e,t):n},t.target=function(n){return arguments.length?(e=n,t):e},t.context=function(n){return arguments.length?(u=null==n?null:n,t):u},t},$m=function(){return new Na};Na.prototype={constructor:Na,reset:function(){this.s=this.t=0},add:function(t){ka(kx,t,this.t),ka(this,kx.s,this.s),this.s?this.t+=kx.t:this.s=kx.t},valueOf:function(){return this.s}};var Zm,Gm,Jm,Qm,Km,tx,nx,ex,rx,ix,ox,ux,ax,cx,sx,fx,lx,hx,px,dx,vx,_x,yx,gx,mx,xx,bx,wx,Mx,Tx,Nx,kx=new Na,Sx=1e-6,Ex=1e-12,Ax=Math.PI,Cx=Ax/2,zx=Ax/4,Px=2*Ax,Rx=180/Ax,qx=Ax/180,Lx=Math.abs,Ux=Math.atan,Dx=Math.atan2,Ox=Math.cos,Fx=Math.ceil,Ix=Math.exp,Yx=Math.log,Bx=Math.pow,jx=Math.sin,Hx=Math.sign||function(t){return t>0?1:t<0?-1:0},Xx=Math.sqrt,Vx=Math.tan,Wx={Feature:function(t,n){za(t.geometry,n);
},FeatureCollection:function(t,n){for(var e=t.features,r=-1,i=e.length;++r<i;)za(e[r].geometry,n)}},$x={Sphere:function(t,n){n.sphere()},Point:function(t,n){t=t.coordinates,n.point(t[0],t[1],t[2])},MultiPoint:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)t=e[r],n.point(t[0],t[1],t[2])},LineString:function(t,n){Pa(t.coordinates,n,0)},MultiLineString:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Pa(e[r],n,0)},Polygon:function(t,n){Ra(t.coordinates,n)},MultiPolygon:function(t,n){for(var e=t.coordinates,r=-1,i=e.length;++r<i;)Ra(e[r],n)},GeometryCollection:function(t,n){for(var e=t.geometries,r=-1,i=e.length;++r<i;)za(e[r],n)}},Zx=function(t,n){t&&Wx.hasOwnProperty(t.type)?Wx[t.type](t,n):za(t,n)},Gx=$m(),Jx=$m(),Qx={point:Ca,lineStart:Ca,lineEnd:Ca,polygonStart:function(){Gx.reset(),Qx.lineStart=qa,Qx.lineEnd=La},polygonEnd:function(){var t=+Gx;Jx.add(t<0?Px+t:t),this.lineStart=this.lineEnd=this.point=Ca},sphere:function(){Jx.add(Px)}},Kx=function(t){return Jx.reset(),Zx(t,Qx),2*Jx},tb=$m(),nb={point:Xa,lineStart:Wa,lineEnd:$a,polygonStart:function(){nb.point=Za,nb.lineStart=Ga,nb.lineEnd=Ja,tb.reset(),Qx.polygonStart()},polygonEnd:function(){Qx.polygonEnd(),nb.point=Xa,nb.lineStart=Wa,nb.lineEnd=$a,Gx<0?(tx=-(ex=180),nx=-(rx=90)):tb>Sx?rx=90:tb<-Sx&&(nx=-90),sx[0]=tx,sx[1]=ex}},eb=function(t){var n,e,r,i,o,u,a;if(rx=ex=-(tx=nx=1/0),cx=[],Zx(t,nb),e=cx.length){for(cx.sort(Ka),n=1,r=cx[0],o=[r];n<e;++n)i=cx[n],tc(r,i[0])||tc(r,i[1])?(Qa(r[0],i[1])>Qa(r[0],r[1])&&(r[1]=i[1]),Qa(i[0],r[1])>Qa(r[0],r[1])&&(r[0]=i[0])):o.push(r=i);for(u=-(1/0),e=o.length-1,n=0,r=o[e];n<=e;r=i,++n)i=o[n],(a=Qa(r[1],i[0]))>u&&(u=a,tx=i[0],ex=r[1])}return cx=sx=null,tx===1/0||nx===1/0?[[NaN,NaN],[NaN,NaN]]:[[tx,nx],[ex,rx]]},rb={sphere:Ca,point:nc,lineStart:rc,lineEnd:uc,polygonStart:function(){rb.lineStart=ac,rb.lineEnd=cc},polygonEnd:function(){rb.lineStart=rc,rb.lineEnd=uc}},ib=function(t){fx=lx=hx=px=dx=vx=_x=yx=gx=mx=xx=0,Zx(t,rb);var n=gx,e=mx,r=xx,i=n*n+e*e+r*r;return i<Ex&&(n=vx,e=_x,r=yx,lx<Sx&&(n=hx,e=px,r=dx),i=n*n+e*e+r*r,i<Ex)?[NaN,NaN]:[Dx(e,n)*Rx,Ea(r/Xx(i))*Rx]},ob=function(t){return function(){return t}},ub=function(t,n){function e(e,r){return e=t(e,r),n(e[0],e[1])}return t.invert&&n.invert&&(e.invert=function(e,r){return e=n.invert(e,r),e&&t.invert(e[0],e[1])}),e};lc.invert=lc;var ab,cb,sb,fb,lb,hb,pb,db,vb,_b,yb,gb=function(t){function n(n){return n=t(n[0]*qx,n[1]*qx),n[0]*=Rx,n[1]*=Rx,n}return t=hc(t[0]*qx,t[1]*qx,t.length>2?t[2]*qx:0),n.invert=function(n){return n=t.invert(n[0]*qx,n[1]*qx),n[0]*=Rx,n[1]*=Rx,n},n},mb=function(){function t(t,n){e.push(t=r(t,n)),t[0]*=Rx,t[1]*=Rx}function n(){var t=i.apply(this,arguments),n=o.apply(this,arguments)*qx,c=u.apply(this,arguments)*qx;return e=[],r=hc(-t[0]*qx,-t[1]*qx,0).invert,_c(a,n,c,1),t={type:"Polygon",coordinates:[e]},e=r=null,t}var e,r,i=ob([0,0]),o=ob(90),u=ob(6),a={point:t};return n.center=function(t){return arguments.length?(i="function"==typeof t?t:ob([+t[0],+t[1]]),n):i},n.radius=function(t){return arguments.length?(o="function"==typeof t?t:ob(+t),n):o},n.precision=function(t){return arguments.length?(u="function"==typeof t?t:ob(+t),n):u},n},xb=function(){var t,n=[];return{point:function(n,e){t.push([n,e])},lineStart:function(){n.push(t=[])},lineEnd:Ca,rejoin:function(){n.length>1&&n.push(n.pop().concat(n.shift()))},result:function(){var e=n;return n=[],t=null,e}}},bb=function(t,n,e,r,i,o){var u,a=t[0],c=t[1],s=n[0],f=n[1],l=0,h=1,p=s-a,d=f-c;if(u=e-a,p||!(u>0)){if(u/=p,p<0){if(u<l)return;u<h&&(h=u)}else if(p>0){if(u>h)return;u>l&&(l=u)}if(u=i-a,p||!(u<0)){if(u/=p,p<0){if(u>h)return;u>l&&(l=u)}else if(p>0){if(u<l)return;u<h&&(h=u)}if(u=r-c,d||!(u>0)){if(u/=d,d<0){if(u<l)return;u<h&&(h=u)}else if(d>0){if(u>h)return;u>l&&(l=u)}if(u=o-c,d||!(u<0)){if(u/=d,d<0){if(u>h)return;u>l&&(l=u)}else if(d>0){if(u<l)return;u<h&&(h=u)}return l>0&&(t[0]=a+l*p,t[1]=c+l*d),h<1&&(n[0]=a+h*p,n[1]=c+h*d),!0}}}}},wb=function(t,n){return Lx(t[0]-n[0])<Sx&&Lx(t[1]-n[1])<Sx},Mb=function(t,n,e,r,i){var o,u,a=[],c=[];if(t.forEach(function(t){if(!((n=t.length-1)<=0)){var n,e,r=t[0],u=t[n];if(wb(r,u)){for(i.lineStart(),o=0;o<n;++o)i.point((r=t[o])[0],r[1]);return void i.lineEnd()}a.push(e=new gc(r,t,null,!0)),c.push(e.o=new gc(r,null,e,!1)),a.push(e=new gc(u,t,null,!1)),c.push(e.o=new gc(u,null,e,!0))}}),a.length){for(c.sort(n),mc(a),mc(c),o=0,u=c.length;o<u;++o)c[o].e=e=!e;for(var s,f,l=a[0];;){for(var h=l,p=!0;h.v;)if((h=h.n)===l)return;s=h.z,i.lineStart();do{if(h.v=h.o.v=!0,h.e){if(p)for(o=0,u=s.length;o<u;++o)i.point((f=s[o])[0],f[1]);else r(h.x,h.n.x,1,i);h=h.n}else{if(p)for(s=h.p.z,o=s.length-1;o>=0;--o)i.point((f=s[o])[0],f[1]);else r(h.x,h.p.x,-1,i);h=h.p}h=h.o,s=h.z,p=!p}while(!h.v);i.lineEnd()}}},Tb=1e9,Nb=-Tb,kb=function(){var t,n,e,r=0,i=0,o=960,u=500;return e={stream:function(e){return t&&n===e?t:t=xc(r,i,o,u)(n=e)},extent:function(a){return arguments.length?(r=+a[0][0],i=+a[0][1],o=+a[1][0],u=+a[1][1],t=n=null,e):[[r,i],[o,u]]}}},Sb=$m(),Eb={sphere:Ca,point:Ca,lineStart:bc,lineEnd:Ca,polygonStart:Ca,polygonEnd:Ca},Ab=function(t){return Sb.reset(),Zx(t,Eb),+Sb},Cb=[null,null],zb={type:"LineString",coordinates:Cb},Pb=function(t,n){return Cb[0]=t,Cb[1]=n,Ab(zb)},Rb=function(t,n){var e=t[0]*qx,r=t[1]*qx,i=n[0]*qx,o=n[1]*qx,u=Ox(r),a=jx(r),c=Ox(o),s=jx(o),f=u*Ox(e),l=u*jx(e),h=c*Ox(i),p=c*jx(i),d=2*Ea(Xx(Aa(o-r)+u*c*Aa(i-e))),v=jx(d),_=d?function(t){var n=jx(t*=d)/v,e=jx(d-t)/v,r=e*f+n*h,i=e*l+n*p,o=e*a+n*s;return[Dx(i,r)*Rx,Dx(o,Xx(r*r+i*i))*Rx]}:function(){return[e*Rx,r*Rx]};return _.distance=d,_},qb=function(t){return t},Lb=$m(),Ub=$m(),Db={point:Ca,lineStart:Ca,lineEnd:Ca,polygonStart:function(){Db.lineStart=Ac,Db.lineEnd=Pc},polygonEnd:function(){Db.lineStart=Db.lineEnd=Db.point=Ca,Lb.add(Lx(Ub)),Ub.reset()},result:function(){var t=Lb/2;return Lb.reset(),t}},Ob=1/0,Fb=Ob,Ib=-Ob,Yb=Ib,Bb={point:Rc,lineStart:Ca,lineEnd:Ca,polygonStart:Ca,polygonEnd:Ca,result:function(){var t=[[Ob,Fb],[Ib,Yb]];return Ib=Yb=-(Fb=Ob=1/0),t}},jb=0,Hb=0,Xb=0,Vb=0,Wb=0,$b=0,Zb=0,Gb=0,Jb=0,Qb={point:qc,lineStart:Lc,lineEnd:Oc,polygonStart:function(){Qb.lineStart=Fc,Qb.lineEnd=Ic},polygonEnd:function(){Qb.point=qc,Qb.lineStart=Lc,Qb.lineEnd=Oc},result:function(){var t=Jb?[Zb/Jb,Gb/Jb]:$b?[Vb/$b,Wb/$b]:Xb?[jb/Xb,Hb/Xb]:[NaN,NaN];return jb=Hb=Xb=Vb=Wb=$b=Zb=Gb=Jb=0,t}};jc.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._context.moveTo(t,n),this._point=1;break;case 1:this._context.lineTo(t,n);break;default:this._context.moveTo(t+this._radius,n),this._context.arc(t,n,this._radius,0,Px)}},result:Ca},Hc.prototype={_circle:Xc(4.5),pointRadius:function(t){return this._circle=Xc(t),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,n){switch(this._point){case 0:this._string.push("M",t,",",n),this._point=1;break;case 1:this._string.push("L",t,",",n);break;default:this._string.push("M",t,",",n,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("");return this._string=[],t}}};var Kb=function(t,n){function e(t){return t&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),Zx(t,r(i))),i.result()}var r,i,o=4.5;return e.area=function(t){return Zx(t,r(Db)),Db.result()},e.bounds=function(t){return Zx(t,r(Bb)),Bb.result()},e.centroid=function(t){return Zx(t,r(Qb)),Qb.result()},e.projection=function(n){return arguments.length?(r=null==n?(t=null,qb):(t=n).stream,e):t},e.context=function(t){return arguments.length?(i=null==t?(n=null,new Hc):new jc(n=t),"function"!=typeof o&&i.pointRadius(o),e):n},e.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),e):o},e.projection(t).context(n)},tw=$m(),nw=function(t,n){var e=n[0],r=n[1],i=[jx(e),-Ox(e),0],o=0,u=0;tw.reset();for(var a=0,c=t.length;a<c;++a)if(f=(s=t[a]).length)for(var s,f,l=s[f-1],h=l[0],p=l[1]/2+zx,d=jx(p),v=Ox(p),_=0;_<f;++_,h=g,d=x,v=b,l=y){var y=s[_],g=y[0],m=y[1]/2+zx,x=jx(m),b=Ox(m),w=g-h,M=w>=0?1:-1,T=M*w,N=T>Ax,k=d*x;if(tw.add(Dx(k*M*jx(T),v*b+k*Ox(T))),o+=N?w+M*Px:w,N^h>=e^g>=e){var S=Ya(Fa(l),Fa(y));Ha(S);var E=Ya(i,S);Ha(E);var A=(N^w>=0?-1:1)*Ea(E[2]);(r>A||r===A&&(S[0]||S[1]))&&(u+=N^w>=0?1:-1)}}return(o<-Sx||o<Sx&&tw<-Sx)^1&u},ew=function(t,n,e,r){return function(i,o){function u(n,e){var r=i(n,e);t(n=r[0],e=r[1])&&o.point(n,e)}function a(t,n){var e=i(t,n);_.point(e[0],e[1])}function c(){b.point=a,_.lineStart()}function s(){b.point=u,_.lineEnd()}function f(t,n){v.push([t,n]);var e=i(t,n);m.point(e[0],e[1])}function l(){m.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),m.lineEnd();var t,n,e,r,i=m.clean(),u=g.result(),a=u.length;if(v.pop(),p.push(v),v=null,a)if(1&i){if(e=u[0],(n=e.length-1)>0){for(x||(o.polygonStart(),x=!0),o.lineStart(),t=0;t<n;++t)o.point((r=e[t])[0],r[1]);o.lineEnd()}}else a>1&&2&i&&u.push(u.pop().concat(u.shift())),d.push(u.filter(Vc))}var p,d,v,_=n(o),y=i.invert(r[0],r[1]),g=xb(),m=n(g),x=!1,b={point:u,lineStart:c,lineEnd:s,polygonStart:function(){b.point=f,b.lineStart=l,b.lineEnd=h,d=[],p=[]},polygonEnd:function(){b.point=u,b.lineStart=c,b.lineEnd=s,d=Js(d);var t=nw(p,y);d.length?(x||(o.polygonStart(),x=!0),Mb(d,Wc,t,e,o)):t&&(x||(o.polygonStart(),x=!0),o.lineStart(),e(null,null,1,o),o.lineEnd()),x&&(o.polygonEnd(),x=!1),d=p=null},sphere:function(){o.polygonStart(),o.lineStart(),e(null,null,1,o),o.lineEnd(),o.polygonEnd()}};return b}},rw=ew(function(){return!0},$c,Gc,[-Ax,-Cx]),iw=function(t,n){function e(e,r,i,o){_c(o,t,n,i,e,r)}function r(t,n){return Ox(t)*Ox(n)>a}function i(t){var n,e,i,a,f;return{lineStart:function(){a=i=!1,f=1},point:function(l,h){var p,d=[l,h],v=r(l,h),_=c?v?0:u(l,h):v?u(l+(l<0?Ax:-Ax),h):0;if(!n&&(a=i=v)&&t.lineStart(),v!==i&&(p=o(n,d),(wb(n,p)||wb(d,p))&&(d[0]+=Sx,d[1]+=Sx,v=r(d[0],d[1]))),v!==i)f=0,v?(t.lineStart(),p=o(d,n),t.point(p[0],p[1])):(p=o(n,d),t.point(p[0],p[1]),t.lineEnd()),n=p;else if(s&&n&&c^v){var y;_&e||!(y=o(d,n,!0))||(f=0,c?(t.lineStart(),t.point(y[0][0],y[0][1]),t.point(y[1][0],y[1][1]),t.lineEnd()):(t.point(y[1][0],y[1][1]),t.lineEnd(),t.lineStart(),t.point(y[0][0],y[0][1])))}!v||n&&wb(n,d)||t.point(d[0],d[1]),n=d,i=v,e=_},lineEnd:function(){i&&t.lineEnd(),n=null},clean:function(){return f|(a&&i)<<1}}}function o(t,n,e){var r=Fa(t),i=Fa(n),o=[1,0,0],u=Ya(r,i),c=Ia(u,u),s=u[0],f=c-s*s;if(!f)return!e&&t;var l=a*c/f,h=-a*s/f,p=Ya(o,u),d=ja(o,l),v=ja(u,h);Ba(d,v);var _=p,y=Ia(d,_),g=Ia(_,_),m=y*y-g*(Ia(d,d)-1);if(!(m<0)){var x=Xx(m),b=ja(_,(-y-x)/g);if(Ba(b,d),b=Oa(b),!e)return b;var w,M=t[0],T=n[0],N=t[1],k=n[1];T<M&&(w=M,M=T,T=w);var S=T-M,E=Lx(S-Ax)<Sx,A=E||S<Sx;if(!E&&k<N&&(w=N,N=k,k=w),A?E?N+k>0^b[1]<(Lx(b[0]-M)<Sx?N:k):N<=b[1]&&b[1]<=k:S>Ax^(M<=b[0]&&b[0]<=T)){var C=ja(_,(-y+x)/g);return Ba(C,d),[b,Oa(C)]}}}function u(n,e){var r=c?t:Ax-t,i=0;return n<-r?i|=1:n>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var a=Ox(t),c=a>0,s=Lx(a)>Sx;return ew(r,i,e,c?[0,-t]:[-Ax,t-Ax])},ow=function(t){return{stream:Jc(t)}};Qc.prototype={constructor:Qc,point:function(t,n){this.stream.point(t,n)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};var uw=16,aw=Ox(30*qx),cw=function(t,n){return+n?es(t,n):ns(t)},sw=Jc({point:function(t,n){this.stream.point(t*qx,n*qx)}}),fw=function(){return os(as).scale(155.424).center([0,33.6442])},lw=function(){return fw().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},hw=function(){function t(t){var n=t[0],e=t[1];return a=null,i.point(n,e),a||(o.point(n,e),a)||(u.point(n,e),a)}function n(){return e=r=null,t}var e,r,i,o,u,a,c=lw(),s=fw().rotate([154,0]).center([-2,58.5]).parallels([55,65]),f=fw().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(t,n){a=[t,n]}};return t.invert=function(t){var n=c.scale(),e=c.translate(),r=(t[0]-e[0])/n,i=(t[1]-e[1])/n;return(i>=.12&&i<.234&&r>=-.425&&r<-.214?s:i>=.166&&i<.234&&r>=-.214&&r<-.115?f:c).invert(t)},t.stream=function(t){return e&&r===t?e:e=cs([c.stream(r=t),s.stream(t),f.stream(t)])},t.precision=function(t){return arguments.length?(c.precision(t),s.precision(t),f.precision(t),n()):c.precision()},t.scale=function(n){return arguments.length?(c.scale(n),s.scale(.35*n),f.scale(n),t.translate(c.translate())):c.scale()},t.translate=function(t){if(!arguments.length)return c.translate();var e=c.scale(),r=+t[0],a=+t[1];return i=c.translate(t).clipExtent([[r-.455*e,a-.238*e],[r+.455*e,a+.238*e]]).stream(l),o=s.translate([r-.307*e,a+.201*e]).clipExtent([[r-.425*e+Sx,a+.12*e+Sx],[r-.214*e-Sx,a+.234*e-Sx]]).stream(l),u=f.translate([r-.205*e,a+.212*e]).clipExtent([[r-.214*e+Sx,a+.166*e+Sx],[r-.115*e-Sx,a+.234*e-Sx]]).stream(l),n()},t.fitExtent=function(n,e){return Kc(t,n,e)},t.fitSize=function(n,e){return ts(t,n,e)},t.scale(1070)},pw=ss(function(t){return Xx(2/(1+t))});pw.invert=fs(function(t){return 2*Ea(t/2)});var dw=function(){return rs(pw).scale(124.75).clipAngle(179.999)},vw=ss(function(t){return(t=Sa(t))&&t/jx(t)});vw.invert=fs(function(t){return t});var _w=function(){return rs(vw).scale(79.4188).clipAngle(179.999)};ls.invert=function(t,n){return[t,2*Ux(Ix(n))-Cx]};var yw=function(){return hs(ls).scale(961/Px)},gw=function(){return os(ds).scale(109.5).parallels([30,30])};vs.invert=vs;var mw=function(){return rs(vs).scale(152.63)},xw=function(){return os(_s).scale(131.154).center([0,13.9389])};ys.invert=fs(Ux);var bw=function(){return rs(ys).scale(144.049).clipAngle(60)},ww=function(){function t(){return i=o=null,u}var n,e,r,i,o,u,a=1,c=0,s=0,f=1,l=1,h=qb,p=null,d=qb;return u={stream:function(t){return i&&o===t?i:i=h(d(o=t))},clipExtent:function(i){return arguments.length?(d=null==i?(p=n=e=r=null,qb):xc(p=+i[0][0],n=+i[0][1],e=+i[1][0],r=+i[1][1]),t()):null==p?null:[[p,n],[e,r]]},scale:function(n){return arguments.length?(h=gs((a=+n)*f,a*l,c,s),t()):a},translate:function(n){return arguments.length?(h=gs(a*f,a*l,c=+n[0],s=+n[1]),t()):[c,s]},reflectX:function(n){return arguments.length?(h=gs(a*(f=n?-1:1),a*l,c,s),t()):f<0},reflectY:function(n){return arguments.length?(h=gs(a*f,a*(l=n?-1:1),c,s),t()):l<0},fitExtent:function(t,n){return Kc(u,t,n)},fitSize:function(t,n){return ts(u,t,n)}}};ms.invert=fs(Ea);var Mw=function(){return rs(ms).scale(249.5).clipAngle(90+Sx)};xs.invert=fs(function(t){return 2*Ux(t)});var Tw=function(){return rs(xs).scale(250).clipAngle(142)};bs.invert=function(t,n){return[-n,2*Ux(Ix(t))-Cx]};var Nw=function(){var t=hs(bs),n=t.center,e=t.rotate;return t.center=function(t){return arguments.length?n([-t[1],t[0]]):(t=n(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?e([t[0],t[1],t.length>2?t[2]+90:90]):(t=e(),[t[0],t[1],t[2]-90])},e([0,0,90]).scale(159.155)};t.version=ws,t.bisect=ks,t.bisectRight=ks,t.bisectLeft=Ss,t.ascending=Ms,t.bisector=Ts,t.descending=Es,t.deviation=zs,t.extent=Ps,t.histogram=Hs,t.thresholdFreedmanDiaconis=Vs,t.thresholdScott=Ws,t.thresholdSturges=js,t.max=$s,t.mean=Zs,t.median=Gs,t.merge=Js,t.min=Qs,t.pairs=Ks,t.permute=tf,t.quantile=Xs,t.range=Os,t.scan=nf,t.shuffle=ef,t.sum=rf,t.ticks=Bs,t.tickStep=e,t.transpose=of,t.variance=Cs,t.zip=uf,t.entries=hf,t.keys=ff,t.values=lf,t.map=o,t.set=l,t.nest=cf,t.randomUniform=pf,t.randomNormal=df,t.randomLogNormal=vf,t.randomBates=yf,t.randomIrwinHall=_f,t.randomExponential=gf,t.easeLinear=h,t.easeQuad=v,t.easeQuadIn=p,t.easeQuadOut=d,t.easeQuadInOut=v,t.easeCubic=g,t.easeCubicIn=_,t.easeCubicOut=y,t.easeCubicInOut=g,t.easePoly=wf,t.easePolyIn=xf,t.easePolyOut=bf,t.easePolyInOut=wf,t.easeSin=b,t.easeSinIn=m,t.easeSinOut=x,t.easeSinInOut=b,t.easeExp=T,t.easeExpIn=w,t.easeExpOut=M,t.easeExpInOut=T,t.easeCircle=S,t.easeCircleIn=N,t.easeCircleOut=k,t.easeCircleInOut=S,t.easeBounce=A,t.easeBounceIn=E,t.easeBounceOut=A,t.easeBounceInOut=C,t.easeBack=Of,t.easeBackIn=Uf,t.easeBackOut=Df,t.easeBackInOut=Of,t.easeElastic=jf,t.easeElasticIn=Bf,t.easeElasticOut=jf,t.easeElasticInOut=Hf,t.polygonArea=Xf,t.polygonCentroid=Vf,t.polygonHull=$f,t.polygonContains=Zf,t.polygonLength=Gf,t.path=q,t.quadtree=I,t.queue=Z,t.arc=wl,t.area=Nl,t.line=Tl,t.pie=El,t.radialArea=zl,t.radialLine=Cl,t.symbol=Jl,t.symbols=Gl,t.symbolCircle=Pl,t.symbolCross=Rl,t.symbolDiamond=Ul,t.symbolSquare=Bl,t.symbolStar=Yl,t.symbolTriangle=Hl,t.symbolWye=Zl,t.curveBasisClosed=th,t.curveBasisOpen=nh,t.curveBasis=Kl,t.curveBundle=eh,t.curveCardinalClosed=ih,t.curveCardinalOpen=oh,t.curveCardinal=rh,t.curveCatmullRomClosed=ah,t.curveCatmullRomOpen=ch,t.curveCatmullRom=uh,t.curveLinearClosed=sh,t.curveLinear=Ml,t.curveMonotoneX=zt,t.curveMonotoneY=Pt,t.curveNatural=fh,t.curveStep=lh,t.curveStepAfter=Dt,t.curveStepBefore=Ut,t.stack=vh,t.stackOffsetExpand=_h,t.stackOffsetNone=ph,t.stackOffsetSilhouette=yh,t.stackOffsetWiggle=gh,t.stackOrderAscending=mh,t.stackOrderDescending=xh,t.stackOrderInsideOut=bh,t.stackOrderNone=dh,t.stackOrderReverse=wh,t.color=Bt,t.rgb=Vt,t.hsl=Gt,t.lab=tn,t.hcl=cn,t.cubehelix=ln,t.interpolate=mp,t.interpolateArray=hp,t.interpolateDate=pp,t.interpolateNumber=dp,t.interpolateObject=vp,t.interpolateRound=xp,t.interpolateString=gp,t.interpolateTransformCss=Tp,t.interpolateTransformSvg=Np,t.interpolateZoom=Cp,t.interpolateRgb=sp,t.interpolateRgbBasis=fp,t.interpolateRgbBasisClosed=lp,t.interpolateHsl=zp,t.interpolateHslLong=Pp,t.interpolateLab=An,t.interpolateHcl=Rp,t.interpolateHclLong=qp,t.interpolateCubehelix=Lp,t.interpolateCubehelixLong=Up,t.interpolateBasis=up,t.interpolateBasisClosed=ap,t.quantize=Dp,t.dispatch=Pn,t.dsvFormat=Yp,t.csvParse=jp,t.csvParseRows=Hp,t.csvFormat=Xp,t.csvFormatRows=Vp,t.tsvParse=$p,t.tsvParseRows=Zp,t.tsvFormat=Gp,t.tsvFormatRows=Jp,t.request=Qp,t.html=td,t.json=nd,t.text=ed,t.xml=rd,t.csv=od,t.tsv=ud,t.now=jn,t.timer=Vn,t.timerFlush=Wn,t.timeout=_d,t.interval=yd,t.timeInterval=Qn,t.timeMillisecond=xd,t.timeMilliseconds=bd,t.timeSecond=Sd,t.timeSeconds=Ed,t.timeMinute=Ad,t.timeMinutes=Cd,t.timeHour=zd,t.timeHours=Pd,t.timeDay=Rd,t.timeDays=qd,t.timeWeek=Ld,t.timeWeeks=Bd,t.timeSunday=Ld,t.timeSundays=Bd,t.timeMonday=Ud,t.timeMondays=jd,t.timeTuesday=Dd,t.timeTuesdays=Hd;t.timeWednesday=Od;t.timeWednesdays=Xd,t.timeThursday=Fd,t.timeThursdays=Vd,t.timeFriday=Id,t.timeFridays=Wd,t.timeSaturday=Yd,t.timeSaturdays=$d,t.timeMonth=Zd,t.timeMonths=Gd,t.timeYear=Jd,t.timeYears=Qd,t.utcMillisecond=xd,t.utcMilliseconds=bd,t.utcSecond=Sd,t.utcSeconds=Ed,t.utcMinute=Kd,t.utcMinutes=tv,t.utcHour=nv,t.utcHours=ev,t.utcDay=rv,t.utcDays=iv,t.utcWeek=ov,t.utcWeeks=hv,t.utcSunday=ov,t.utcSundays=hv,t.utcMonday=uv,t.utcMondays=pv,t.utcTuesday=av,t.utcTuesdays=dv,t.utcWednesday=cv,t.utcWednesdays=vv,t.utcThursday=sv,t.utcThursdays=_v,t.utcFriday=fv,t.utcFridays=yv,t.utcSaturday=lv,t.utcSaturdays=gv,t.utcMonth=mv,t.utcMonths=xv,t.utcYear=bv,t.utcYears=Mv,t.formatLocale=Lv,t.formatDefaultLocale=re,t.formatSpecifier=Pv,t.precisionFixed=Dv,t.precisionPrefix=Ov,t.precisionRound=Fv,t.isoFormat=Xv,t.isoParse=Vv,t.timeFormatLocale=ae,t.timeFormatDefaultLocale=nr,t.scaleBand=or,t.scalePoint=ar,t.scaleIdentity=yr,t.scaleLinear=_r,t.scaleLog=Tr,t.scaleOrdinal=ir,t.scaleImplicit=Gv,t.scalePow=kr,t.scaleSqrt=Sr,t.scaleQuantile=Er,t.scaleQuantize=Ar,t.scaleThreshold=Cr,t.scaleTime=s_,t.scaleUtc=f_,t.schemeCategory10=h_,t.schemeCategory20b=p_,t.schemeCategory20c=d_,t.schemeCategory20=v_,t.scaleSequential=Lr,t.interpolateCubehelixDefault=__,t.interpolateRainbow=x_,t.interpolateWarm=y_,t.interpolateCool=g_,t.interpolateViridis=b_,t.interpolateMagma=w_,t.interpolateInferno=M_,t.interpolatePlasma=T_,t.creator=E_,t.customEvent=Xr,t.local=Or,t.matcher=R_,t.mouse=F_,t.namespace=S_,t.namespaces=k_,t.select=by,t.selectAll=wy,t.selection=Pi,t.selector=I_,t.selectorAll=B_,t.touch=My,t.touches=Ty,t.window=ay,t.active=ag,t.interrupt=Ly,t.transition=fo,t.axisTop=mo,t.axisRight=xo,t.axisBottom=bo,t.axisLeft=wo,t.cluster=vg,t.hierarchy=zo,t.pack=Cg,t.packSiblings=Eg,t.packEnclose=Sg,t.partition=Rg,t.stratify=Dg,t.tree=Og,t.treemap=Bg,t.treemapBinary=jg,t.treemapDice=Pg,t.treemapSlice=Fg,t.treemapSliceDice=Hg,t.treemapSquarify=Yg,t.treemapResquarify=Xg,t.forceCenter=Vg,t.forceCollide=Zg,t.forceLink=Gg,t.forceManyBody=tm,t.forceSimulation=Kg,t.forceX=nm,t.forceY=em,t.drag=um,t.dragDisable=im,t.dragEnable=mu,t.voronoi=ym,t.zoom=bm,t.zoomIdentity=mm,t.zoomTransform=ia,t.brush=Dm,t.brushX=_a,t.brushY=ya,t.brushSelection=va,t.chord=Hm,t.ribbon=Wm,t.geoAlbers=lw,t.geoAlbersUsa=hw,t.geoArea=Kx,t.geoAzimuthalEqualArea=dw,t.geoAzimuthalEqualAreaRaw=pw,t.geoAzimuthalEquidistant=_w,t.geoAzimuthalEquidistantRaw=vw,t.geoBounds=eb,t.geoCentroid=ib,t.geoCircle=mb,t.geoClipExtent=kb,t.geoConicConformal=gw,t.geoConicConformalRaw=ds,t.geoConicEqualArea=fw,t.geoConicEqualAreaRaw=as,t.geoConicEquidistant=xw,t.geoConicEquidistantRaw=_s,t.geoDistance=Pb,t.geoEquirectangular=mw,t.geoEquirectangularRaw=vs,t.geoGnomonic=bw,t.geoGnomonicRaw=ys,t.geoGraticule=Sc,t.geoGraticule10=Ec,t.geoIdentity=ww,t.geoInterpolate=Rb,t.geoLength=Ab,t.geoMercator=yw,t.geoMercatorRaw=ls,t.geoOrthographic=Mw,t.geoOrthographicRaw=ms,t.geoPath=Kb,t.geoProjection=rs,t.geoProjectionMutator=is,t.geoRotation=gb,t.geoStereographic=Tw,t.geoStereographicRaw=xs,t.geoStream=Zx,t.geoTransform=ow,t.geoTransverseMercator=Nw,t.geoTransverseMercatorRaw=bs,Object.defineProperty(t,"__esModule",{value:!0})});


(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['d3'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('d3'));
  } else {
    root.MG = factory(root.d3);
  }
}(this, function(d3) {
window.MG = {version: '2.10.1'};

//a set of helper functions, some that we've written, others that we've borrowed

MG.convert = {};

MG.convert.date = function(data, accessor, time_format) {
  time_format = (typeof time_format === "undefined") ? '%Y-%m-%d' : time_format;
  var parse_time = d3.timeParse(time_format);
  data = data.map(function(d) {
    d[accessor] = parse_time(d[accessor].trim());
    return d;
  });

  return data;
}

MG.convert.number = function(data, accessor) {
  data = data.map(function(d) {
    d[accessor] = Number(d[accessor]);
    return d;
  });

  return data;
}

MG.time_format = function(utc, specifier) {
  return utc ? d3.utcFormat(specifier) : d3.timeFormat(specifier);
}

function mg_jquery_exists() {
  if (typeof jQuery !== 'undefined' || typeof $ !== 'undefined') {
    return true;
  } else {
    return false;
  }
}

function mg_get_rollover_time_format(args) {
  var fmt;
  switch (args.processed.x_time_frame) {
    case 'millis':
      fmt = MG.time_format(args.utc_time, '%b %e, %Y  %H:%M:%S.%L');
      break;
    case 'seconds':
      fmt = MG.time_format(args.utc_time, '%b %e, %Y  %H:%M:%S');
      break;
    case 'less-than-a-day':
      fmt = MG.time_format(args.utc_time, '%b %e, %Y  %I:%M%p');
      break;
    case 'four-days':
      fmt = MG.time_format(args.utc_time, '%b %e, %Y  %I:%M%p');
      break;
    default:
      fmt = MG.time_format(args.utc_time, '%b %e, %Y');
  }
  return fmt;
}

function mg_data_in_plot_bounds(datum, args) {
  return datum[args.x_accessor] >= args.processed.min_x &&
    datum[args.x_accessor] <= args.processed.max_x &&
    datum[args.y_accessor] >= args.processed.min_y &&
    datum[args.y_accessor] <= args.processed.max_y;
}

function is_array(thing) {
  return Object.prototype.toString.call(thing) === '[object Array]';
}

function is_function(thing) {
  return Object.prototype.toString.call(thing) === '[object Function]';
}

function is_empty_array(thing) {
  return is_array(thing) && thing.length === 0;
}

function is_object(thing) {
  return Object.prototype.toString.call(thing) === '[object Object]';
}

function is_array_of_arrays(data) {
  var all_elements = data.map(function(d) {
    return is_array(d) === true && d.length > 0;
  });

  return d3.sum(all_elements) === data.length;
}

function is_array_of_objects(data) {
  // is every element of data an object?
  var all_elements = data.map(function(d) {
    return is_object(d) === true;
  });

  return d3.sum(all_elements) === data.length;
}

function is_array_of_objects_or_empty(data) {
  return is_empty_array(data) || is_array_of_objects(data);
}

function pluck(arr, accessor) {
  return arr.map(function(d) {
    return d[accessor] });
}

function count_array_elements(arr) {
  return arr.reduce(function(a, b) { a[b] = a[b] + 1 || 1;
    return a; }, {});
}

function mg_get_bottom(args) {
  return args.height - args.bottom;
}

function mg_get_plot_bottom(args) {
  // returns the pixel location of the bottom side of the plot area.
  return mg_get_bottom(args) - args.buffer;
}

function mg_get_top(args) {
  return args.top;
}

function mg_get_plot_top(args) {
  // returns the pixel location of the top side of the plot area.
  return mg_get_top(args) + args.buffer;
}

function mg_get_left(args) {
  return args.left;
}

function mg_get_plot_left(args) {
  // returns the pixel location of the left side of the plot area.
  return mg_get_left(args) + args.buffer;
}

function mg_get_right(args) {
  return args.width - args.right;
}

function mg_get_plot_right(args) {
  // returns the pixel location of the right side of the plot area.
  return mg_get_right(args) - args.buffer;
}

//////// adding elements, removing elements /////////////

function mg_exit_and_remove(elem) {
  elem.exit().remove();
}

function mg_selectAll_and_remove(svg, cl) {
  svg.selectAll(cl).remove();
}

function mg_add_g(svg, cl) {
  return svg.append('g').classed(cl, true);
}

function mg_remove_element(svg, elem) {
  svg.select(elem).remove();
}

//////// axis helper functions ////////////

function mg_make_rug(args, rug_class) {
  var svg = mg_get_svg_child_of(args.target);
  var all_data = mg_flatten_array(args.data);
  var rug = svg.selectAll('line.' + rug_class).data(all_data);

  rug.enter()
    .append('line')
      .attr('class', rug_class)
      .attr('opacity', 0.3);

  //remove rug elements that are no longer in use
  mg_exit_and_remove(rug);

  //set coordinates of new rug elements
  mg_exit_and_remove(rug);
  return rug;
}

function mg_add_color_accessor_to_rug(rug, args, rug_mono_class) {
  if (args.color_accessor) {
    rug.attr('stroke', args.scalefns.colorf);
    rug.classed(rug_mono_class, false);
  } else {
    rug.attr('stroke', null);
    rug.classed(rug_mono_class, true);
  }
}

function mg_rotate_labels(labels, rotation_degree) {
  if (rotation_degree) {
    labels.attr({
      dy: 0,
      transform: function() {
        var elem = d3.select(this);
        return 'rotate(' + rotation_degree + ' ' + elem.attr('x') + ',' + elem.attr('y') + ')';
      }
    });
  }
}

//////////////////////////////////////////////////

function mg_elements_are_overlapping(labels) {
  labels = labels.node();
  if (!labels) {
    return false;
  }

  for (var i = 0; i < labels.length; i++) {
    if (mg_is_horizontally_overlapping(labels[i], labels)) return true;
  }

  return false;
}

function mg_prevent_horizontal_overlap(labels, args) {
  if (!labels || labels.length == 1) {
    return;
  }

  //see if each of our labels overlaps any of the other labels
  for (var i = 0; i < labels.length; i++) {
    //if so, nudge it up a bit, if the label it intersects hasn't already been nudged
    if (mg_is_horizontally_overlapping(labels[i], labels)) {
      var node = d3.select(labels[i]);
      var newY = +node.attr('y');
      if (newY + 8 >= args.top) {
        newY = args.top - 16;
      }
      node.attr('y', newY);
    }
  }
}

function mg_prevent_vertical_overlap(labels, args) {
  if (!labels || labels.length == 1) {
    return;
  }

  labels.sort(function(b, a) {
    return d3.select(a).attr('y') - d3.select(b).attr('y');
  });

  labels.reverse();

  var overlap_amount, label_i, label_j;

  //see if each of our labels overlaps any of the other labels
  for (var i = 0; i < labels.length; i++) {
    //if so, nudge it up a bit, if the label it intersects hasn't already been nudged
    label_i = d3.select(labels[i]).text();

    for (var j = 0; j < labels.length; j++) {
      label_j = d3.select(labels[j]).text();
      overlap_amount = mg_is_vertically_overlapping(labels[i], labels[j]);

      if (overlap_amount !== false && label_i !== label_j) {
        var node = d3.select(labels[i]);
        var newY = +node.attr('y');
        newY = newY + overlap_amount;
        node.attr('y', newY);
      }
    }
  }
}

function mg_is_vertically_overlapping(element, sibling) {
  var element_bbox = element.getBoundingClientRect();
  var sibling_bbox = sibling.getBoundingClientRect();

  if (element_bbox.top <= sibling_bbox.bottom && element_bbox.top >= sibling_bbox.top) {
    return sibling_bbox.bottom - element_bbox.top;
  }

  return false;
}

function mg_is_horiz_overlap(element, sibling) {
  var element_bbox = element.getBoundingClientRect();
  var sibling_bbox = sibling.getBoundingClientRect();

  if (element_bbox.right >= sibling_bbox.left || element_bbox.top >= sibling_bbox.top) {
    return sibling_bbox.bottom - element_bbox.top;
  }
  return false;
}

function mg_is_horizontally_overlapping(element, labels) {
  var element_bbox = element.getBoundingClientRect();

  for (var i = 0; i < labels.length; i++) {
    if (labels[i] == element) {
      continue;
    }

    //check to see if this label overlaps with any of the other labels
    var sibling_bbox = labels[i].getBoundingClientRect();
    if (element_bbox.top === sibling_bbox.top &&
      !(sibling_bbox.left > element_bbox.right || sibling_bbox.right < element_bbox.left)
    ) {
      return true;
    }
  }

  return false;
}

function mg_infer_type(args, ns) {
    // must return categorical or numerical.
    var testPoint = mg_flatten_array(args.data);

    testPoint = testPoint[0][args[ns + '_accessor']];
    return typeof testPoint === 'string' ? 'categorical' : 'numerical';
  }

function mg_get_svg_child_of(selector_or_node) {
  return d3.select(selector_or_node).select('svg');
}

function mg_flatten_array(arr) {
  var flat_data = [];
  return flat_data.concat.apply(flat_data, arr);
}

function mg_next_id() {
  if (typeof MG._next_elem_id === 'undefined') {
    MG._next_elem_id = 0;
  }

  return 'mg-' + (MG._next_elem_id++);
}

function mg_target_ref(target) {
  if (typeof target === 'string') {
    return mg_normalize(target);

  } else if (target instanceof HTMLElement) {
    target_ref = target.getAttribute('data-mg-uid');
    if (!target_ref) {
      target_ref = mg_next_id();
      target.setAttribute('data-mg-uid', target_ref);
    }

    return target_ref;

  } else {
    console.warn('The specified target should be a string or an HTMLElement.', target);
    return mg_normalize(target);
  }
}

function mg_normalize(string) {
  return string
    .replace(/[^a-zA-Z0-9 _-]+/g, '')
    .replace(/ +?/g, '');
}

function get_pixel_dimension(target, dimension) {
  return Number(d3.select(target).style(dimension).replace(/px/g, ''));
}

function get_width(target) {
  return get_pixel_dimension(target, 'width');
}

function get_height(target) {
  return get_pixel_dimension(target, 'height');
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var each = function(obj, iterator, context) {
  // yanked out of underscore
  var breaker = {};
  if (obj === null) return obj;
  if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, length = obj.length; i < length; i++) {
      if (iterator.call(context, obj[i], i, obj) === breaker) return;
    }
  } else {
    for (var k in obj) {
      if (iterator.call(context, obj[k], k, obj) === breaker) return;
    }
  }

  return obj;
};

function merge_with_defaults(obj) {
  // taken from underscore
  each(Array.prototype.slice.call(arguments, 1), function(source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === void 0) obj[prop] = source[prop];
      }
    }
  });

  return obj;
}

MG.merge_with_defaults = merge_with_defaults;

function number_of_values(data, accessor, value) {
  var values = data.filter(function(d) {
    return d[accessor] === value;
  });

  return values.length;
}

function has_values_below(data, accessor, value) {
  var values = data.filter(function(d) {
    return d[accessor] <= value;
  });

  return values.length > 0;
}

function has_too_many_zeros(data, accessor, zero_count) {
  return number_of_values(data, accessor, 0) >= zero_count;
}

//deep copy
//http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
MG.clone = function(obj) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null === obj || "object" !== typeof obj) return obj;

  // Handle Date
  if (obj instanceof Date) {
    copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  // Handle Array
  if (obj instanceof Array) {
    copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = MG.clone(obj[i]);
    }
    return copy;
  }

  // Handle Object
  if (obj instanceof Object) {
    copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = MG.clone(obj[attr]);
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};

//give us the difference of two int arrays
//http://radu.cotescu.com/javascript-diff-function/
function arr_diff(a, b) {
  var seen = [],
    diff = [],
    i;
  for (i = 0; i < b.length; i++)
    seen[b[i]] = true;
  for (i = 0; i < a.length; i++)
    if (!seen[a[i]])
      diff.push(a[i]);
  return diff;
}

MG.arr_diff = arr_diff;

/**
  Print warning message to the console when a feature has been scheduled for removal

  @author Dan de Havilland (github.com/dandehavilland)
  @date 2014-12
*/
function warn_deprecation(message, untilVersion) {
  console.warn('Deprecation: ' + message + (untilVersion ? '. This feature will be removed in ' + untilVersion + '.' : ' the near future.'));
  console.trace();
}

MG.warn_deprecation = warn_deprecation;

/**
  Truncate a string to fit within an SVG text node
  CSS text-overlow doesn't apply to SVG <= 1.2

  @author Dan de Havilland (github.com/dandehavilland)
  @date 2014-12-02
*/
function truncate_text(textObj, textString, width) {
  var bbox,
    position = 0;

  textObj.textContent = textString;
  bbox = textObj.getBBox();

  while (bbox.width > width) {
    textObj.textContent = textString.slice(0, --position) + '...';
    bbox = textObj.getBBox();

    if (textObj.textContent === '...') {
      break;
    }
  }
}

MG.truncate_text = truncate_text;

/**
  Wrap the contents of a text node to a specific width

  Adapted from bl.ocks.org/mbostock/7555321

  @author Mike Bostock
  @author Dan de Havilland
  @date 2015-01-14
*/
function wrap_text(text, width, token, tspanAttrs) {
  text.each(function() {
    var text = d3.select(this),
      words = text.text().split(token || /\s+/).reverse(),
      word,
      line = [],
      lineNumber = 0,
      lineHeight = 1.1, // ems
      y = text.attr("y"),
      dy = 0,
      tspan = text.text(null)
      .append("tspan")
      .attr("x", 0)
      .attr("y", dy + "em")
      .attr(tspanAttrs || {});

    while (!!(word = words.pop())) {
      line.push(word);
      tspan.text(line.join(" "));
      if (width === null || tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text
          .append("tspan")
          .attr("x", 0)
          .attr("y", ++lineNumber * lineHeight + dy + "em")
          .attr(tspanAttrs || {})
          .text(word);
      }
    }
  });
}

MG.wrap_text = wrap_text;

function register(chartType, descriptor, defaults) {
  MG.charts[chartType] = {
    descriptor: descriptor,
    defaults: defaults || {}
  };
}

MG.register = register;

/**
  Record of all registered hooks.
  For internal use only.
*/
MG._hooks = {};

/**
  Add a hook callthrough to the stack.

  Hooks are executed in the order that they were registered.
*/
MG.add_hook = function(name, func, context) {
  var hooks;

  if (!MG._hooks[name]) {
    MG._hooks[name] = [];
  }

  hooks = MG._hooks[name];

  var already_registered =
    hooks.filter(function(hook) {
      return hook.func === func;
    })
    .length > 0;

  if (already_registered) {
    throw 'That function is already registered.';
  }

  hooks.push({
    func: func,
    context: context
  });
};

/**
  Execute registered hooks.

  Optional arguments
*/
MG.call_hook = function(name) {
  var hooks = MG._hooks[name],
    result = [].slice.apply(arguments, [1]),
    processed;

  if (hooks) {
    hooks.forEach(function(hook) {
      if (hook.func) {
        var params = processed || result;

        if (params && params.constructor !== Array) {
          params = [params];
        }

        params = [].concat.apply([], params);
        processed = hook.func.apply(hook.context, params);
      }
    });
  }

  return processed || result;
};

MG.globals = {};
MG.deprecations = {
  rollover_callback: { replacement: 'mouseover', version: '2.0' },
  rollout_callback: { replacement: 'mouseout', version: '2.0' },
  x_rollover_format: { replacement: 'x_mouseover', version: '2.10' },
  y_rollover_format: { replacement: 'y_mouseover', version: '2.10' },
  show_years: { replacement: 'show_secondary_x_label', version: '2.1' },
  xax_start_at_min: { replacement: 'axes_not_compact', version: '2.7' },
  interpolate_tension: { replacement: 'interpolate', version: '2.10' }
};
MG.globals.link = false;
MG.globals.version = "1.1";

MG.charts = {};

MG.data_graphic = function(args) {
  'use strict';
  var defaults = {
    missing_is_zero: false,                     // if true, missing values will be treated as zeros
    missing_is_hidden: false,                   // if true, missing values will appear as broken segments
    missing_is_hidden_accessor: null,           // the accessor that determines the boolean value for missing data points
    legend: '' ,                                // an array identifying the labels for a chart's lines
    legend_target: '',                          // if set, the specified element is populated with a legend
    error: '',                                  // if set, a graph will show an error icon and log the error to the console
    animate_on_load: false,                     // animate lines on load
    top: 65,                                    // the size of the top margin
    title_y_position: 10,                       // how many pixels from the top edge (0) should we show the title at
    center_title_full_width: false,             // center the title over the full graph (i.e. ignore left and right margins)
    bottom: 45,                                 // the size of the bottom margin
    right: 10,                                  // size of the right margin
    left: 50,                                   // size of the left margin
    buffer: 8,                                  // the buffer between the actual chart area and the margins
    width: 350,                                 // the width of the entire graphic
    height: 220,                                // the height of the entire graphic
    full_width: false,                          // sets the graphic width to be the width of the parent element and resizes dynamically
    full_height: false,                         // sets the graphic width to be the width of the parent element and resizes dynamically
    small_height_threshold: 120,                // the height threshold for when smaller text appears
    small_width_threshold: 160,                 // the width  threshold for when smaller text appears
    xax_count: 6,                               // number of x axis ticks
    xax_tick_length: 5,                         // x axis tick length
    axes_not_compact: true,
    yax_count: 3,                               // number of y axis ticks
    yax_tick_length: 5,                         // y axis tick length
    x_extended_ticks: false,                    // extends x axis ticks across chart - useful for tall charts
    y_extended_ticks: false,                    // extends y axis ticks across chart - useful for long charts
    y_scale_type: 'linear',
    max_x: null,
    max_y: null,
    min_x: null,
    min_y: null,                                // if set, y axis starts at an arbitrary value
    min_y_from_data: false,                     // if set, y axis will start at minimum value rather than at 0
    point_size: 2.5,                            // the size of the dot that appears on a line on mouse-over
    x_accessor: 'date',
    xax_units: '',
    x_label: '',
    x_sort: true,
    x_axis: true,
    y_axis: true,
    x_axis_position: 'bottom',
    y_axis_position: 'left',
    x_axis_type: null,                          // TO BE INTRODUCED IN 2.10
    y_axis_type: null,                          // TO BE INTRODUCED IN 2.10
    ygroup_accessor: null,
    xgroup_accessor:null,
    y_padding_percentage: 0.05,                 // for categorical scales
    y_outer_padding_percentage: .1,             // for categorical scales
    ygroup_padding_percentage:.25,              // for categorical scales
    ygroup_outer_padding_percentage: 0,         // for categorical scales
    x_padding_percentage: 0.05,                 // for categorical scales
    x_outer_padding_percentage: .1,             // for categorical scales
    xgroup_padding_percentage:.25,              // for categorical scales
    xgroup_outer_padding_percentage: 0,         // for categorical scales
    y_categorical_show_guides: false,
    x_categorical_show_guide: false,
    rotate_x_labels: 0,
    rotate_y_labels: 0,
    y_accessor: 'value',
    y_label: '',
    yax_units: '',
    yax_units_append: false,
    x_rug: false,
    y_rug: false,
    mouseover_align: 'right',                   // implemented in point.js
    x_mouseover: null,
    y_mouseover: null,
    transition_on_update: true,
    mouseover: null,
    click: null,
    show_rollover_text: true,
    show_confidence_band: null,                 // given [l, u] shows a confidence at each point from l to u
    xax_format: null,                           // xax_format is a function that formats the labels for the x axis.
    area: true,
    chart_type: 'line',
    data: [],
    decimals: 2,                                // the number of decimals in any rollover
    format: 'count',                            // format = {count, percentage}
    inflator: 10/9,                             // for setting y axis max
    linked: false,                              // links together all other graphs with linked:true, so rollovers in one trigger rollovers in the others
    linked_format: '%Y-%m-%d',                  // What granularity to link on for graphs. Default is at day
    list: false,
    baselines: null,                            // sets the baseline lines
    markers: null,                              // sets the marker lines
    scalefns: {},
    scales: {},
    utc_time: false,
    european_clock: false,
    show_year_markers: false,
    show_secondary_x_label: true,
    target: '#viz',
    interpolate: d3.curveCatmullRom.alpha(0),   // interpolation method to use when rendering lines; increase tension if your data is irregular and you notice artifacts
    custom_line_color_map: [],                  // allows arbitrary mapping of lines to colors, e.g. [2,3] will map line 1 to color 2 and line 2 to color 3
    colors: null,                               // UNIMPLEMENTED - allows direct color mapping to line colors. Will eventually require
    max_data_size: null,                        // explicitly specify the the max number of line series, for use with custom_line_color_map
    aggregate_rollover: false,                  // links the lines in a multi-line chart
    show_tooltips: true                         // if enabled, a chart's description will appear in a tooltip (requires jquery)
  };

  MG.call_hook('global.defaults', defaults);

  if (!args) { args = {}; }

  var selected_chart = MG.charts[args.chart_type || defaults.chart_type];
  merge_with_defaults(args, selected_chart.defaults, defaults);

  if (args.list) {
    args.x_accessor = 0;
    args.y_accessor = 1;
  }

  // check for deprecated parameters
  for (var key in MG.deprecations) {
    if (args.hasOwnProperty(key)) {
      var deprecation = MG.deprecations[key],
        message = 'Use of `args.' + key + '` has been deprecated',
        replacement = deprecation.replacement,
        version;

      // transparently alias the deprecated
      if (replacement) {
        if (args[replacement]) {
          message += '. The replacement - `args.' + replacement + '` - has already been defined. This definition will be discarded.';
        } else {
          args[replacement] = args[key];
        }
      }

      if (deprecation.warned) {
        continue;
      }

      deprecation.warned = true;

      if (replacement) {
        message += ' in favor of `args.' + replacement + '`';
      }

      warn_deprecation(message, deprecation.version);
    }
  }

  MG.call_hook('global.before_init', args);

  new selected_chart.descriptor(args);

  return args.data;
};

if (mg_jquery_exists()) {
    /* ========================================================================
     * Bootstrap: tooltip.js v3.3.5
     * http://getbootstrap.com/javascript/#tooltip
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */


    +function ($) {
      'use strict';

      // TOOLTIP PUBLIC CLASS DEFINITION
      // ===============================

      var Tooltip = function (element, options) {
        this.type       = null
        this.options    = null
        this.enabled    = null
        this.timeout    = null
        this.hoverState = null
        this.$element   = null
        this.inState    = null

        this.init('tooltip', element, options)
      }

      Tooltip.VERSION  = '3.3.5'

      Tooltip.TRANSITION_DURATION = 150

      Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
          selector: 'body',
          padding: 0
        }
      }

      Tooltip.prototype.init = function (type, element, options) {
        this.enabled   = true
        this.type      = type
        this.$element  = $(element)
        this.options   = this.getOptions(options)
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
        this.inState   = { click: false, hover: false, focus: false }

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
          throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
        }

        var triggers = this.options.trigger.split(' ')

        for (var i = triggers.length; i--;) {
          var trigger = triggers[i]

          if (trigger == 'click') {
            this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
          } else if (trigger != 'manual') {
            var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
            var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

            this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
            this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
          }
        }

        this.options.selector ?
          (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
          this.fixTitle()
      }

      Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS
      }

      Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)

        if (options.delay && typeof options.delay == 'number') {
          options.delay = {
            show: options.delay,
            hide: options.delay
          }
        }

        return options
      }

      Tooltip.prototype.getDelegateOptions = function () {
        var options  = {}
        var defaults = this.getDefaults()

        this._options && $.each(this._options, function (key, value) {
          if (defaults[key] != value) options[key] = value
        })

        return options
      }

      Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ?
          obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
          $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
        }

        if (self.tip().hasClass('in') || self.hoverState == 'in') {
          self.hoverState = 'in'
          return
        }

        clearTimeout(self.timeout)

        self.hoverState = 'in'

        if (!self.options.delay || !self.options.delay.show) return self.show()

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'in') self.show()
        }, self.options.delay.show)
      }

      Tooltip.prototype.isInStateTrue = function () {
        for (var key in this.inState) {
          if (this.inState[key]) return true
        }

        return false
      }

      Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ?
          obj : $(obj.currentTarget).data('bs.' + this.type)

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
          $(obj.currentTarget).data('bs.' + this.type, self)
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
        }

        if (self.isInStateTrue()) return

        clearTimeout(self.timeout)

        self.hoverState = 'out'

        if (!self.options.delay || !self.options.delay.hide) return self.hide()

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'out') self.hide()
        }, self.options.delay.hide)
      }

      Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type)

        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e)

          var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
          if (e.isDefaultPrevented() || !inDom) return
          var that = this

          var $tip = this.tip()

          var tipId = this.getUID(this.type)

          this.setContent()
          $tip.attr('id', tipId)
          this.$element.attr('aria-describedby', tipId)

          if (this.options.animation) $tip.addClass('fade')

          var placement = typeof this.options.placement == 'function' ?
            this.options.placement.call(this, $tip[0], this.$element[0]) :
            this.options.placement

          var autoToken = /\s?auto?\s?/i
          var autoPlace = autoToken.test(placement)
          if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

          $tip
            .detach()
            .css({ top: 0, left: 0, display: 'block' })
            .addClass(placement)
            .data('bs.' + this.type, this)

          this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
          this.$element.trigger('inserted.bs.' + this.type)

          var pos          = this.getPosition()
          var actualWidth  = $tip[0].offsetWidth
          var actualHeight = $tip[0].offsetHeight

          if (autoPlace) {
            var orgPlacement = placement
            var viewportDim = this.getPosition(this.$viewport)

            placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                        placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                        placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                        placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                        placement

            $tip
              .removeClass(orgPlacement)
              .addClass(placement)
          }

          var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

          this.applyPlacement(calculatedOffset, placement)

          var complete = function () {
            var prevHoverState = that.hoverState
            that.$element.trigger('shown.bs.' + that.type)
            that.hoverState = null

            if (prevHoverState == 'out') that.leave(that)
          }

          $.support.transition && this.$tip.hasClass('fade') ?
            $tip
              .one('bsTransitionEnd', complete)
              .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
            complete()
        }
      }

      Tooltip.prototype.applyPlacement = function (offset, placement) {
        var $tip   = this.tip()
        var width  = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop))  marginTop  = 0
        if (isNaN(marginLeft)) marginLeft = 0

        offset.top  += marginTop
        offset.left += marginLeft

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
          using: function (props) {
            $tip.css({
              top: Math.round(props.top),
              left: Math.round(props.left)
            })
          }
        }, offset), 0)

        $tip.addClass('in')

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth  = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight

        if (placement == 'top' && actualHeight != height) {
          offset.top = offset.top + height - actualHeight
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

        if (delta.left) offset.left += delta.left
        else offset.top += delta.top

        var isVertical          = /top|bottom/.test(placement)
        var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
      }

      Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
        this.arrow()
          .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
          .css(isVertical ? 'top' : 'left', '')
      }

      Tooltip.prototype.setContent = function () {
        var $tip  = this.tip()
        var title = this.getTitle()

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
      }

      Tooltip.prototype.hide = function (callback) {
        var that = this
        var $tip = $(this.$tip)
        var e    = $.Event('hide.bs.' + this.type)

        function complete() {
          if (that.hoverState != 'in') $tip.detach()
          that.$element
            .removeAttr('aria-describedby')
            .trigger('hidden.bs.' + that.type)
          callback && callback()
        }

        this.$element.trigger(e)

        if (e.isDefaultPrevented()) return

        $tip.removeClass('in')

        $.support.transition && $tip.hasClass('fade') ?
          $tip
            .one('bsTransitionEnd', complete)
            .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
          complete()

        this.hoverState = null

        return this
      }

      Tooltip.prototype.fixTitle = function () {
        var $e = this.$element
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
          $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
      }

      Tooltip.prototype.hasContent = function () {
        return this.getTitle()
      }

      Tooltip.prototype.getPosition = function ($element) {
        $element   = $element || this.$element

        var el     = $element[0]
        var isBody = el.tagName == 'BODY'

        var elRect    = el.getBoundingClientRect()
        if (elRect.width == null) {
          // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
          elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
        }
        var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
        var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
        var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

        return $.extend({}, elRect, scroll, outerDims, elOffset)
      }

      Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
               placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
               placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
            /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

      }

      Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
        var delta = { top: 0, left: 0 }
        if (!this.$viewport) return delta

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)

        if (/right|left/.test(placement)) {
          var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
          var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
          if (topEdgeOffset < viewportDimensions.top) { // top overflow
            delta.top = viewportDimensions.top - topEdgeOffset
          } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
          }
        } else {
          var leftEdgeOffset  = pos.left - viewportPadding
          var rightEdgeOffset = pos.left + viewportPadding + actualWidth
          if (leftEdgeOffset < viewportDimensions.left) { // left overflow
            delta.left = viewportDimensions.left - leftEdgeOffset
          } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
          }
        }

        return delta
      }

      Tooltip.prototype.getTitle = function () {
        var title
        var $e = this.$element
        var o  = this.options

        title = $e.attr('data-original-title')
          || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

        return title
      }

      Tooltip.prototype.getUID = function (prefix) {
        do prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))
        return prefix
      }

      Tooltip.prototype.tip = function () {
        if (!this.$tip) {
          this.$tip = $(this.options.template)
          if (this.$tip.length != 1) {
            throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
          }
        }
        return this.$tip
      }

      Tooltip.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
      }

      Tooltip.prototype.enable = function () {
        this.enabled = true
      }

      Tooltip.prototype.disable = function () {
        this.enabled = false
      }

      Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
      }

      Tooltip.prototype.toggle = function (e) {
        var self = this
        if (e) {
          self = $(e.currentTarget).data('bs.' + this.type)
          if (!self) {
            self = new this.constructor(e.currentTarget, this.getDelegateOptions())
            $(e.currentTarget).data('bs.' + this.type, self)
          }
        }

        if (e) {
          self.inState.click = !self.inState.click
          if (self.isInStateTrue()) self.enter(self)
          else self.leave(self)
        } else {
          self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
        }
      }

      Tooltip.prototype.destroy = function () {
        var that = this
        clearTimeout(this.timeout)
        this.hide(function () {
          that.$element.off('.' + that.type).removeData('bs.' + that.type)
          if (that.$tip) {
            that.$tip.detach()
          }
          that.$tip = null
          that.$arrow = null
          that.$viewport = null
        })
      }


      // TOOLTIP PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this   = $(this)
          var data    = $this.data('bs.tooltip')
          var options = typeof option == 'object' && option

          if (!data && /destroy|hide/.test(option)) return
          if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
          if (typeof option == 'string') data[option]()
        })
      }

      var old = $.fn.tooltip

      $.fn.tooltip             = Plugin
      $.fn.tooltip.Constructor = Tooltip


      // TOOLTIP NO CONFLICT
      // ===================

      $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
      }

    }(jQuery);


    /* ========================================================================
     * Bootstrap: popover.js v3.3.5
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================
     * Copyright 2011-2015 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */


    +function ($) {
      'use strict';

      // POPOVER PUBLIC CLASS DEFINITION
      // ===============================

      var Popover = function (element, options) {
        this.init('popover', element, options)
      }

      if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

      Popover.VERSION  = '3.3.5'

      Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      })


      // NOTE: POPOVER EXTENDS tooltip.js
      // ================================

      Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

      Popover.prototype.constructor = Popover

      Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS
      }

      Popover.prototype.setContent = function () {
        var $tip    = this.tip()
        var title   = this.getTitle()
        var content = this.getContent()

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
          this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
        ](content)

        $tip.removeClass('fade top bottom left right in')

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
      }

      Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
      }

      Popover.prototype.getContent = function () {
        var $e = this.$element
        var o  = this.options

        return $e.attr('data-content')
          || (typeof o.content == 'function' ?
                o.content.call($e[0]) :
                o.content)
      }

      Popover.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
      }


      // POPOVER PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this   = $(this)
          var data    = $this.data('bs.popover')
          var options = typeof option == 'object' && option

          if (!data && /destroy|hide/.test(option)) return
          if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
          if (typeof option == 'string') data[option]()
        })
      }

      var old = $.fn.popover

      $.fn.popover             = Plugin
      $.fn.popover.Constructor = Popover


      // POPOVER NO CONFLICT
      // ===================

      $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
      }

    }(jQuery);
}

function chart_title(args) {
  'use strict';

  var svg = mg_get_svg_child_of(args.target);

  //remove the current title if it exists
  svg.select('.mg-header').remove();

  if (args.target && args.title) {
    var chartTitle = svg.insert('text')
      .attr('class', 'mg-header')
      .attr('x', args.center_title_full_width ? args.width /2 : (args.width + args.left - args.right) / 2)
      .attr('y', args.title_y_position)
      .attr('text-anchor', 'middle')
      .attr('dy', '0.55em');

    //show the title
    chartTitle.append('tspan')
      .attr('class', 'mg-chart-title')
      .text(args.title);

    //show and activate the description icon if we have a description
    if (args.show_tooltips && args.description && mg_jquery_exists()) {
      chartTitle.append('tspan')
        .attr('class', 'mg-chart-description')
        .attr('dx', '0.3em')
        .text('\uf059');

      //now that the title is an svg text element, we'll have to trigger
      //mouseenter, mouseleave events manually for the popover to work properly
      var $chartTitle = $(chartTitle.node());
      $chartTitle.popover({
        html: true,
        animation: false,
        placement: 'top',
        content: args.description,
        container: args.target,
        trigger: 'manual',
        template: '<div class="popover mg-popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
      }).on('mouseenter', function() {
        d3.selectAll(args.target)
          .selectAll('.mg-popover')
          .remove();

        $(this).popover('show');
        $(d3.select(args.target).select('.popover').node())
          .on('mouseleave', function () {
            $chartTitle.popover('hide');
          });
      }).on('mouseleave', function () {
        setTimeout(function () {
          if (!$('.popover:hover').length) {
            $chartTitle.popover('hide');
          }
        }, 120);
      });
    } else if (args.show_tooltips && args.description && typeof $ === 'undefined') {
      args.error = 'In order to enable tooltips, please make sure you include jQuery.';
    }
  }

  if (args.error) {
    error(args);
  }
}

MG.chart_title = chart_title;

function mg_add_scale_function(args, scalefcn_name, scale, accessor, inflation) {
  args.scalefns[scalefcn_name] = function(di) {
    if (inflation === undefined) return args.scales[scale](di[accessor]);
    else return args.scales[scale](di[accessor]) + inflation;
  };
}

function mg_position(str, args) {
  if (str === 'bottom' || str === 'top') {
    return [mg_get_plot_left(args), mg_get_plot_right(args)];
  }

  if (str === 'left' || str === 'right') {
    return [mg_get_plot_bottom(args), args.top];
  }
}

function mg_cat_position(str, args) {
  if (str === 'bottom' || str === 'top') {
    return [mg_get_plot_left(args), mg_get_plot_right(args)]
  }

  if (str === 'left' || str === 'right') {
    return [mg_get_plot_bottom(args), mg_get_plot_top(args)];
  }
}

function MGScale(args) {
  // big wrapper around d3 scale that automatically formats & calculates scale bounds
  // according to the data, and handles other niceties.
  var scaleArgs = {}
  scaleArgs.use_inflator = false;
  scaleArgs.zero_bottom = false;
  scaleArgs.scaleType = 'numerical';

  this.namespace = function(_namespace) {
    scaleArgs.namespace = _namespace;
    scaleArgs.namespace_accessor_name = scaleArgs.namespace + '_accessor';
    scaleArgs.scale_name = scaleArgs.namespace.toUpperCase();
    scaleArgs.scalefn_name = scaleArgs.namespace + 'f';
    return this;
  }

  this.scaleName = function(scaleName) {
    scaleArgs.scale_name = scaleName.toUpperCase();
    scaleArgs.scalefn_name = scaleName +'f';
    return this;
  }

  this.inflateDomain = function(tf) {
    scaleArgs.use_inflator = tf;
    return this;
  }

  this.zeroBottom = function(tf) {
    scaleArgs.zero_bottom = tf;
    return this;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  /// all scale domains are either numerical (number, date, etc.) or categorical (factor, label, etc) /////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  // these functions automatically create the d3 scale function and place the domain.

  this.numericalDomainFromData = function() {
    var other_flat_data_arrays = [];

    if (arguments.length > 0) {
      other_flat_data_arrays = arguments;
    }

    // pull out a non-empty array in args.data.
    var illustrative_data;
    for (var i = 0; i < args.data.length; i++) {
      if (args.data[i].length > 0) {
        illustrative_data = args.data[i];
      }
    }
    scaleArgs.is_time_series = illustrative_data[0][args[scaleArgs.namespace_accessor_name]] instanceof Date ? true : false;

    mg_add_scale_function(args, scaleArgs.scalefn_name, scaleArgs.scale_name, args[scaleArgs.namespace_accessor_name]);

    mg_min_max_numerical(args, scaleArgs, other_flat_data_arrays, scaleArgs.use_inflator);

    var time_scale = (args.utc_time)
      ? d3.scaleUtc()
      : d3.scaleTime();

    args.scales[scaleArgs.scale_name] = (scaleArgs.is_time_series)
      ? time_scale
      : (args[scaleArgs.namespace + '_scale_type'] === 'log')
        ? d3.scaleLog()
        : d3.scaleLinear();

    args.scales[scaleArgs.scale_name].domain([args.processed['min_' + scaleArgs.namespace], args.processed['max_' + scaleArgs.namespace]]);
    scaleArgs.scaleType = 'numerical';

    return this;
  }

  this.categoricalDomain = function(domain) {
    args.scales[scaleArgs.scale_name] = d3.scaleOrdinal().domain(domain);
    mg_add_scale_function(args, scaleArgs.scalefn_name, scaleArgs.scale_name, args[scaleArgs.namespace_accessor_name]);
    return this;
  }

  this.categoricalDomainFromData = function() {
    // make args.categorical_variables.
    // lets make the categorical variables.
    var all_data = mg_flatten_array(args.data)
    //d3.set(data.map(function(d){return d[args.group_accessor]})).values()
    scaleArgs.categoricalVariables = d3.set(all_data.map(function(d) {
      return d[args[scaleArgs.namespace_accessor_name]] })).values();
    args.scales[scaleArgs.scale_name] = d3.scaleBand()
      .domain(scaleArgs.categoricalVariables);

    scaleArgs.scaleType = 'categorical';
    return this;
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////// all scale ranges are either positional (for axes, etc) or arbitrary (colors, size, etc) //////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  this.numericalRange = function(range) {
    if (typeof range === 'string') {
      args
        .scales[scaleArgs.scale_name]
        .range(mg_position(range, args));
    } else {
      args
        .scales[scaleArgs.scale_name]
        .range(range);
    }

    return this;
  }

  this.categoricalRangeBands = function(range, halfway) {
    if (halfway === undefined) halfway = false;

    var namespace = scaleArgs.namespace;
    var paddingPercentage = args[namespace + '_padding_percentage'];
    var outerPaddingPercentage = args[namespace + '_outer_padding_percentage'];
    if (typeof range === 'string') {
      // if string, it's a location. Place it accordingly.
      args.scales[scaleArgs.scale_name]
        .range(mg_position(range, args))
        .paddingInner(paddingPercentage)
        .paddingOuter(outerPaddingPercentage);
    } else {
      args.scales[scaleArgs.scale_name]
        .range(range)
        .paddingInner(paddingPercentage)
        .paddingOuter(outerPaddingPercentage);
    }

    mg_add_scale_function(
      args,
      scaleArgs.scalefn_name,
      scaleArgs.scale_name,
      args[scaleArgs.namespace_accessor_name],
      halfway
        ? args.scales[scaleArgs.scale_name].bandwidth() / 2
        : 0
    );

    return this;
  }

  this.categoricalRange = function(range) {
    args.scales[scaleArgs.scale_name].range(range);
    mg_add_scale_function(args, scaleArgs.scalefn_name, scaleArgs.scale_name, args[scaleArgs.namespace_accessor_name]);
    return this;
  }

  this.categoricalColorRange = function() {
    args.scales[scaleArgs.scale_name] = args.scales[scaleArgs.scale_name].domain().length > 10
      ? d3.scaleOrdinal(d3.schemeCategory20)
      : d3.scaleOrdinal(d3.schemeCategory10);

    args
      .scales[scaleArgs.scale_name]
      .domain(scaleArgs.categoricalVariables);

    mg_add_scale_function(args, scaleArgs.scalefn_name, scaleArgs.scale_name, args[scaleArgs.namespace_accessor_name]);
    return this;
  }

  this.clamp = function(yn) {
    args.scales[scaleArgs.scale_name].clamp(yn);
    return this;
  }

  return this;
}

MG.scale_factory = MGScale;

/////////////////////////////// x, x_accessor, markers, baselines, etc.
function mg_min_max_numerical(args, scaleArgs, additional_data_arrays) {
  // A BIT OF EXPLANATION ABOUT THIS FUNCTION
  // This function pulls out all the accessor values in all the arrays in args.data.
  // We also have this additional argument, additional_data_arrays, which is an array of arrays of raw data values.
  // These values also get concatenated to the data pulled from args.data, and the extents are calculate from that.
  // They are optional.
  //
  // This may seem arbitrary, but it gives us a lot of flexibility. For instance, if we're calculating
  // the min and max for the y axis of a line chart, we're going to want to also factor in baselines (horizontal lines
  // that might potentially be outside of the y value bounds). The easiest way to do this is in the line.js code
  // & scale creation to just flatten the args.baselines array, pull out hte values, and feed it in
  // so it appears in additional_data_arrays.
  var namespace = scaleArgs.namespace;
  var namespace_accessor_name = scaleArgs.namespace_accessor_name;
  var use_inflator = scaleArgs.use_inflator;
  var zero_bottom = scaleArgs.zero_bottom;

  var accessor = args[namespace_accessor_name];

  // add together all relevant data arrays.
  var all_data = mg_flatten_array(args.data)
    .map(function(dp) {
      return dp[accessor] })
    .concat(mg_flatten_array(additional_data_arrays));

  // do processing for log
  if (args[namespace + '_scale_type'] === 'log') {
    all_data = all_data.filter(function(d) {
      return d > 0;
    });
  }

  // use inflator?
  var extents = d3.extent(all_data);
  var min_val = extents[0];
  var max_val = extents[1];

  // bolt scale domain to zero when the right conditions are met:
  // not pulling the bottom of the range from data
  // not zero-bottomed
  // not a time series
  if (zero_bottom && !args['min_' + namespace + '_from_data'] && min_val > 0 && !scaleArgs.is_time_series) {
    min_val = args[namespace + '_scale_type'] === 'log' ? 1 : 0;
  }

  if (args[namespace + '_scale_type'] !== 'log' && min_val < 0 && !scaleArgs.is_time_series) {
    min_val = min_val - (min_val - min_val * args.inflator) * use_inflator;
  }

  if (!scaleArgs.is_time_series) {
    max_val = (max_val < 0) ? max_val + (max_val - max_val * args.inflator) * use_inflator : max_val * (use_inflator ? args.inflator : 1);
  }

  min_val = args['min_' + namespace] || min_val;
  max_val = args['max_' + namespace] || max_val;
  // if there's a single data point, we should custom-set the min and max values.

  if (min_val === max_val && !(args['min_' + namespace] && args['max_' + namespace])) {

    if (min_val instanceof Date) {
      max_val = new Date(MG.clone(min_val).setDate(min_val.getDate() + 1));
      min_val = new Date(MG.clone(min_val).setDate(min_val.getDate() - 1));
    } else if (typeof min_val === 'number') {
      min_val = min_val - 1;
      max_val = min_val + 1;
      mg_force_xax_count_to_be_two(args);
    }
  }

  args.processed['min_' + namespace] = min_val;
  args.processed['max_' + namespace] = max_val;

  MG.call_hook('x_axis.process_min_max', args, args.processed.min_x, args.processed.max_x);
  MG.call_hook('y_axis.process_min_max', args, args.processed.min_y, args.processed.max_y);
}

function mg_categorical_group_color_scale(args) {
  if (args.color_accessor !== false) {
    if (args.ygroup_accessor) {
      // add a custom accessor element.
      if (args.color_accessor === null) {
        args.color_accessor = args.y_accessor;
      } else {}
    }
    if (args.color_accessor !== null) {
      new MG.scale_factory(args)
        .namespace('color')
        .categoricalDomainFromData()
        .categoricalColorRange();
    }
  }
}

function mg_add_color_categorical_scale(args, domain, accessor) {
  args.scales.color = d3.scaleOrdinal(d3.schemeCategory20).domain(domain);
  args.scalefns.color = function(d) {
    return args.scales.color(d[accessor]);
  };
}

function mg_get_categorical_domain(data, accessor) {
  return d3.set(data.map(function(d) {
      return d[accessor]; }))
    .values();
}

function mg_get_color_domain(args) {
  var color_domain;
  if (args.color_domain === null) {
    if (args.color_type === 'number') {
      color_domain = d3.extent(args.data[0], function(d) {
        return d[args.color_accessor]; });
    } else if (args.color_type === 'category') {
      color_domain = mg_get_categorical_domain(args.data[0], args.color_accessor);

    }
  } else {
    color_domain = args.color_domain;
  }
  return color_domain;
}

function mg_get_color_range(args) {
  var color_range;
  if (args.color_range === null) {
    if (args.color_type === 'number') {
      color_range = ['blue', 'red'];
    } else {
      color_range = null;
    }
  } else {
    color_range = args.color_range;
  }
  return color_range;
}

function processScaleTicks (args, axis) {
  var accessor = args[axis + '_accessor'];
  var scale_ticks = args.scales[axis.toUpperCase()].ticks(args[axis + 'ax_count']);
  var max = args.processed['max_' + axis];

  function log10 (val) {
    if (val === 1000) {
      return 3;
    }
    if (val === 1000000) {
      return 7;
    }
    return Math.log(val) / Math.LN10;
  }

  if (args[axis + '_scale_type'] === 'log') {
    // get out only whole logs
    scale_ticks = scale_ticks.filter(function (d) {
      return Math.abs(log10(d)) % 1 < 1e-6 || Math.abs(log10(d)) % 1 > 1 - 1e-6;
    });
  }

  // filter out fraction ticks if our data is ints and if xmax > number of generated ticks
  var number_of_ticks = scale_ticks.length;

  // is our data object all ints?
  var data_is_int = true;
  args.data.forEach(function (d, i) {
    d.forEach(function (d, i) {
      if (d[accessor] % 1 !== 0) {
        data_is_int = false;
        return false;
      }
    });
  });

  if (data_is_int && number_of_ticks > max && args.format === 'count') {
    // remove non-integer ticks
    scale_ticks = scale_ticks.filter(function (d) {
      return d % 1 === 0;
    });
  }
  args.processed[axis + '_ticks'] = scale_ticks;
}

function rugPlacement (args, axisArgs) {
  var position = axisArgs.position;
  var ns = axisArgs.namespace;
  var coordinates = {};
  if (position === 'left') {
    coordinates.x1 = mg_get_left(args) + 1;
    coordinates.x2 = mg_get_left(args) + args.rug_buffer_size;
    coordinates.y1 = args.scalefns[ns + 'f'];
    coordinates.y2 = args.scalefns[ns + 'f'];
  }
  if (position === 'right') {
    coordinates.x1 = mg_get_right(args) - 1,
    coordinates.x2 = mg_get_right(args) - args.rug_buffer_size,
    coordinates.y1 = args.scalefns[ns + 'f'];
    coordinates.y2 = args.scalefns[ns + 'f'];
  }
  if (position === 'top') {
    coordinates.x1 = args.scalefns[ns + 'f'];
    coordinates.x2 = args.scalefns[ns + 'f'];
    coordinates.y1 = mg_get_top(args) + 1;
    coordinates.y2 = mg_get_top(args) + args.rug_buffer_size;
  }
  if (position === 'bottom') {
    coordinates.x1 = args.scalefns[ns + 'f'];
    coordinates.x2 = args.scalefns[ns + 'f'];
    coordinates.y1 = mg_get_bottom(args) - 1;
    coordinates.y2 = mg_get_bottom(args) - args.rug_buffer_size;
  }
  return coordinates;
}

function rimPlacement (args, axisArgs) {
  var ns = axisArgs.namespace;
  var position = axisArgs.position;
  var tick_length = args.processed[ns + '_ticks'].length;
  var ticks = args.processed[ns + '_ticks'];
  var scale = args.scales[ns.toUpperCase()];
  var coordinates = {};

  if (position === 'left') {
    coordinates.x1 = mg_get_left(args);
    coordinates.x2 = mg_get_left(args);
    coordinates.y1 = scale(ticks[0]).toFixed(2);
    coordinates.y2 = scale(ticks[tick_length - 1]).toFixed(2);
  }
  if (position === 'right') {
    coordinates.x1 = mg_get_right(args);
    coordinates.x2 = mg_get_right(args);
    coordinates.y1 = scale(ticks[0]).toFixed(2);
    coordinates.y2 = scale(ticks[tick_length - 1]).toFixed(2);
  }
  if (position === 'top') {
    coordinates.x1 = mg_get_left(args);
    coordinates.x2 = mg_get_right(args);
    coordinates.y1 = mg_get_top(args);
    coordinates.y2 = mg_get_top(args);
  }
  if (position === 'bottom') {
    coordinates.x1 = mg_get_left(args);
    coordinates.x2 = mg_get_right(args);
    coordinates.y1 = mg_get_bottom(args);
    coordinates.y2 = mg_get_bottom(args);
  }

  if (position === 'left' || position === 'right') {
    if (args.axes_not_compact) {
      coordinates.y1 = mg_get_bottom(args);
      coordinates.y2 = mg_get_top(args);
    } else if (tick_length) {
      coordinates.y1 = scale(ticks[0]).toFixed(2);
      coordinates.y2 = scale(ticks[tick_length - 1]).toFixed(2);
    }
  }

  return coordinates;
}

function labelPlacement (args, axisArgs) {
  var position = axisArgs.position;
  var ns = axisArgs.namespace;
  var tickLength = args[ns + 'ax_tick_length'];
  var scale = args.scales[ns.toUpperCase()];
  var coordinates = {};

  if (position === 'left') {
    coordinates.x = mg_get_left(args) - tickLength * 3 / 2;
    coordinates.y = function (d) {
      return scale(d).toFixed(2);
    };
    coordinates.dx = -3;
    coordinates.dy = '.35em';
    coordinates.textAnchor = 'end';
    coordinates.text = function (d) {
      return mg_compute_yax_format(args)(d);
    };
  }
  if (position === 'right') {
    coordinates.x = mg_get_right(args) + tickLength * 3 / 2;
    coordinates.y = function (d) {
      return scale(d).toFixed(2);
    };
    coordinates.dx = 3;
    coordinates.dy = '.35em';
    coordinates.textAnchor = 'start';
    coordinates.text = function (d) {
      return mg_compute_yax_format(args)(d); };
  }
  if (position === 'top') {
    coordinates.x = function (d) {
      return scale(d).toFixed(2);
    };
    coordinates.y = (mg_get_top(args) - tickLength * 7 / 3).toFixed(2);
    coordinates.dx = 0;
    coordinates.dy = '0em';
    coordinates.textAnchor = 'middle';
    coordinates.text = function (d) {
      return mg_default_xax_format(args)(d);
    };
  }
  if (position === 'bottom') {
    coordinates.x = function (d) {
      return scale(d).toFixed(2);
    };
    coordinates.y = (mg_get_bottom(args) + tickLength * 7 / 3).toFixed(2);
    coordinates.dx = 0;
    coordinates.dy = '.50em';
    coordinates.textAnchor = 'middle';
    coordinates.text = function (d) {
      return mg_default_xax_format(args)(d);
    };
  }

  return coordinates;
}

function selectXaxFormat (args) {
  var c = args.chart_type;
  if (!args.processed.xax_format) {
    if (args.xax_format) {
      args.processed.xax_format = args.xax_format;
    } else {
      if (c === 'line' || c === 'point' || c === 'histogram') {
        args.processed.xax_format = mg_default_xax_format(args);
      } else if (c === 'bar') {
        args.processed.xax_format = mg_default_bar_xax_format(args);
      }
    }
  }
}

function secondaryLabels (g, args, axisArgs) {
  if (args.time_series && (args.show_years || args.show_secondary_x_label)) {
    var tf = mg_get_yformat_and_secondary_time_function(args);
    addSecondaryLabelElements(args, axisArgs, g, tf.timeframe, tf.yformat, tf.secondary);
  }
}

function addSecondaryLabelElements (args, axisArgs, g, time_frame, yformat, secondary_function) {
  var years = secondary_function(args.processed.min_x, args.processed.max_x);
  if (years.length === 0) {
    var first_tick = args.scales.X.ticks(args.xax_count)[0];
    years = [first_tick];
  }

  var yg = mg_add_g(g, 'mg-year-marker');
  if (time_frame === 'default' && args.show_year_markers) {
    yearMarkerLine(args, axisArgs, yg, years, yformat);
  }
  if (time_frame != 'years') yearMarkerText(args, axisArgs, yg, years, yformat);
}

function yearMarkerLine (args, axisArgs, g, years, yformat) {
  g.selectAll('.mg-year-marker')
    .data(years).enter()
    .append('line')
    .attr('x1', function (d) {
      return args.scales.X(d).toFixed(2); })
    .attr('x2', function (d) {
      return args.scales.X(d).toFixed(2); })
    .attr('y1', mg_get_top(args))
    .attr('y2', mg_get_bottom(args));
}

function yearMarkerText (args, axisArgs, g, years, yformat) {
  var position = axisArgs.position;
  var ns = axisArgs.namespace;
  var scale = args.scales[ns.toUpperCase()];
  var x, y, dy, textAnchor, textFcn;
  var xAxisTextElement = d3.select(args.target)
    .select('.mg-x-axis text').node().getBoundingClientRect();

  if (position === 'top') {
    x = function (d, i) {
      return scale(d).toFixed(2); };
    y = (mg_get_top(args) - args.xax_tick_length * 7 / 3) - (xAxisTextElement.height);
    dy = '.50em';
    textAnchor = 'middle';
    textFcn = function (d) {
      return yformat(new Date(d)); };
  }
  if (position === 'bottom') {
    x = function (d, i) {
      return scale(d).toFixed(2); };
    y = (mg_get_bottom(args) + args.xax_tick_length * 7 / 3) + (xAxisTextElement.height * 0.8);
    dy = '.50em';
    textAnchor = 'middle';
    textFcn = function (d) {
      return yformat(new Date(d)); };
  }

  g.selectAll('.mg-year-marker')
    .data(years).enter()
    .append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('dy', dy)
    .attr('text-anchor', textAnchor)
    .text(textFcn);
}

function addNumericalLabels (g, args, axisArgs) {
  var ns = axisArgs.namespace;
  var coords = labelPlacement(args, axisArgs);
  var ticks = args.processed[ns + '_ticks'];

  var labels = g.selectAll('.mg-yax-labels')
    .data(ticks).enter()
    .append('text')
    .attr('x', coords.x)
    .attr('dx', coords.dx)
    .attr('y', coords.y)
    .attr('dy', coords.dy)
    .attr('text-anchor', coords.textAnchor)
    .text(coords.text);

  // move the labels if they overlap
  if (ns == 'x') {
    selectXaxFormat(args);
    if (args.time_series && args.european_clock) {
      labels.append('tspan').classed('mg-european-hours', true).text(function (_d, i) {
        var d = new Date(_d);
        if (i === 0) return d3.timeFormat('%H')(d);
        else return '';
      });
      labels.append('tspan').classed('mg-european-minutes-seconds', true).text(function (_d, i) {
        var d = new Date(_d);
        return ':' + args.processed.xax_format(d);
      });
    } else {
      labels.text(function (d) {
        return args.xax_units + args.processed.xax_format(d);
      });
    }
    secondaryLabels(g, args, axisArgs);
  }

  if (mg_elements_are_overlapping(labels)) {
    labels.filter(function (d, i) {
      return (i + 1) % 2 === 0;
    }).remove();

    var svg = mg_get_svg_child_of(args.target);
    svg.selectAll('.mg-' + ns + 'ax-ticks').filter(function (d, i) {
      return (i + 1) % 2 === 0; })
      .remove();
  }
}

function addTickLines (g, args, axisArgs) {
  // name
  var ns = axisArgs.namespace;
  var position = axisArgs.position;
  var scale = args.scales[ns.toUpperCase()];

  var ticks = args.processed[ns + '_ticks'];
  var ticksClass = 'mg-' + ns + 'ax-ticks';
  var extendedTicksClass = 'mg-extended-' + ns + 'ax-ticks';
  var extendedTicks = args[ns + '_extended_ticks'];
  var tickLength = args[ns + 'ax_tick_length'];

  var x1, x2, y1, y2;

  if (position === 'left') {
    x1 = mg_get_left(args);
    x2 = extendedTicks ? mg_get_right(args) : mg_get_left(args) - tickLength;
    y1 = function (d) {
      return scale(d).toFixed(2);
    };
    y2 = function (d) {
      return scale(d).toFixed(2);
    };
  }
  if (position === 'right') {
    x1 = mg_get_right(args);
    x2 = extendedTicks ? mg_get_left(args) : mg_get_right(args) + tickLength;
    y1 = function (d) {
      return scale(d).toFixed(2);
    };
    y2 = function (d) {
      return scale(d).toFixed(2);
    };
  }
  if (position === 'top') {
    x1 = function (d) {
      return scale(d).toFixed(2);
    };
    x2 = function (d) {
      return scale(d).toFixed(2);
    };
    y1 = mg_get_top(args);
    y2 = extendedTicks ? mg_get_bottom(args) : mg_get_top(args) - tickLength;
  }
  if (position === 'bottom') {
    x1 = function (d) {
      return scale(d).toFixed(2);
    };
    x2 = function (d) {
      return scale(d).toFixed(2);
    };
    y1 = mg_get_bottom(args);
    y2 = extendedTicks ? mg_get_top(args) : mg_get_bottom(args) + tickLength;
  }

  g.selectAll('.' + ticksClass)
    .data(ticks).enter()
    .append('line')
    .classed(extendedTicksClass, extendedTicks)
    .attr('x1', x1)
    .attr('x2', x2)
    .attr('y1', y1)
    .attr('y2', y2);
}

function initializeAxisRim (g, args, axisArgs) {
  var namespace = axisArgs.namespace;
  var tick_length = args.processed[namespace + '_ticks'].length;

  var rim = rimPlacement(args, axisArgs);

  if (!args[namespace + '_extended_ticks'] && !args[namespace + '_extended_ticks'] && tick_length) {
    g.append('line')
      .attr('x1', rim.x1)
      .attr('x2', rim.x2)
      .attr('y1', rim.y1)
      .attr('y2', rim.y2);
  }
}

function initializeRug (args, rug_class) {
  var svg = mg_get_svg_child_of(args.target);
  var all_data = mg_flatten_array(args.data);
  var rug = svg.selectAll('line.' + rug_class).data(all_data);

  // set the attributes that do not change after initialization, per
  rug.enter().append('svg:line').attr('class', rug_class).attr('opacity', 0.3);

  // remove rug elements that are no longer in use
  mg_exit_and_remove(rug);

  // set coordinates of new rug elements
  mg_exit_and_remove(rug);
  return rug;
}

function rug (args, axisArgs) {
  'use strict';
  args.rug_buffer_size = args.chart_type === 'point' ? args.buffer / 2 : args.buffer * 2 / 3;

  var rug = initializeRug(args, 'mg-' + axisArgs.namespace + '-rug');
  var rug_positions = rugPlacement(args, axisArgs);
  rug.attr('x1', rug_positions.x1)
    .attr('x2', rug_positions.x2)
    .attr('y1', rug_positions.y1)
    .attr('y2', rug_positions.y2);

  mg_add_color_accessor_to_rug(rug, args, 'mg-' + axisArgs.namespace + '-rug-mono');
}

function categoricalLabelPlacement (args, axisArgs, group) {
  var ns = axisArgs.namespace;
  var position = axisArgs.position;
  var scale = args.scales[ns.toUpperCase()];
  var groupScale = args.scales[(ns + 'group').toUpperCase()];
  var coords = {};
  coords.cat = {};
  coords.group = {};
  // x, y, dy, text-anchor

  if (position === 'left') {
    coords.cat.x = mg_get_plot_left(args) - args.buffer;
    coords.cat.y = function (d) {
      return groupScale(group) + scale(d) + scale.bandwidth() / 2;
    };
    coords.cat.dy = '.35em';
    coords.cat.textAnchor = 'end';
    coords.group.x = mg_get_plot_left(args) - args.buffer;
    coords.group.y = groupScale(group) + (groupScale.bandwidth ? groupScale.bandwidth() / 2 : 0);
    coords.group.dy = '.35em';
    coords.group.textAnchor = args['rotate_' + ns + '_labels'] ? 'end' : 'end';
  }

  if (position === 'right') {
    coords.cat.x = mg_get_plot_right(args) - args.buffer;
    coords.cat.y = function (d) {
      return groupScale(group) + scale(d) + scale.bandwidth() / 2;
    };
    coords.cat.dy = '.35em';
    coords.cat.textAnchor = 'start';
    coords.group.x = mg_get_plot_right(args) - args.buffer;
    coords.group.y = groupScale(group) + (groupScale.bandwidth ? groupScale.bandwidth() / 2 : 0);
    coords.group.dy = '.35em';
    coords.group.textAnchor = 'start';
  }

  if (position === 'top') {
    coords.cat.x = function (d) {
      return groupScale(group) + scale(d) + scale.bandwidth() / 2;
    };
    coords.cat.y = mg_get_plot_top(args) + args.buffer;
    coords.cat.dy = '.35em';
    coords.cat.textAnchor = args['rotate_' + ns + '_labels'] ? 'start' : 'middle';
    coords.group.x = groupScale(group) + (groupScale.bandwidth ? groupScale.bandwidth() / 2 : 0);
    coords.group.y = mg_get_plot_top(args) + args.buffer;
    coords.group.dy = '.35em';
    coords.group.textAnchor = args['rotate_' + ns + '_labels'] ? 'start' : 'middle';
  }

  if (position === 'bottom') {
    coords.cat.x = function (d) {
      return groupScale(group) + scale(d) + scale.bandwidth() / 2;
    };
    coords.cat.y = mg_get_plot_bottom(args) + args.buffer;
    coords.cat.dy = '.35em';
    coords.cat.textAnchor = args['rotate_' + ns + '_labels'] ? 'start' : 'middle';
    coords.group.x = groupScale(group) + (groupScale.bandwidth ? groupScale.bandwidth() / 2 - scale.bandwidth() / 2 : 0);
    coords.group.y = mg_get_plot_bottom(args) + args.buffer;
    coords.group.dy = '.35em';
    coords.group.textAnchor = args['rotate_' + ns + '_labels'] ? 'start' : 'middle';
  }

  return coords;
}

function categoricalLabels (args, axisArgs) {
  var ns = axisArgs.namespace;
  var nsClass = 'mg-' + ns + '-axis';
  var scale = args.scales[ns.toUpperCase()];
  var groupScale = args.scales[(ns + 'group').toUpperCase()];
  var groupAccessor = ns + 'group_accessor';

  var svg = mg_get_svg_child_of(args.target);
  mg_selectAll_and_remove(svg, '.' + nsClass);
  var g = mg_add_g(svg, nsClass);
  var group_g;
  var groups = groupScale.domain && groupScale.domain()
    ? groupScale.domain()
    : ['1'];

  groups.forEach(function (group) {
    // grab group placement stuff.
    var coords = categoricalLabelPlacement(args, axisArgs, group);

    group_g = mg_add_g(g, 'mg-group-' + mg_normalize(group));
    if (args[groupAccessor] !== null) {
      var labels = group_g.append('text')
        .classed('mg-barplot-group-label', true)
        .attr('x', coords.group.x)
        .attr('y', coords.group.y)
        .attr('dy', coords.group.dy)
        .attr('text-anchor', coords.group.textAnchor)
        .text(group);

    } else {
      var labels = group_g.selectAll('text')
        .data(scale.domain())
        .enter()
        .append('text')
        .attr('x', coords.cat.x)
        .attr('y', coords.cat.y)
        .attr('dy', coords.cat.dy)
        .attr('text-anchor', coords.cat.textAnchor)
        .text(String);
    }
    if (args['rotate_' + ns + '_labels']) {
      rotateLabels(labels, args['rotate_' + ns + '_labels']);
    }
  });
}

function categoricalGuides (args, axisArgs) {
  // for each group
  // for each data point

  var ns = axisArgs.namespace;
  var scalef = args.scalefns[ns + 'f'];
  var groupf = args.scalefns[ns + 'groupf'];
  var groupScale = args.scales[(ns + 'group').toUpperCase()];
  var scale = args.scales[ns.toUpperCase()];
  var position = axisArgs.position;

  var svg = mg_get_svg_child_of(args.target);
  var alreadyPlotted = [];

  var x1, x2, y1, y2;
  var grs = (groupScale.domain && groupScale.domain()) ? groupScale.domain() : [null];

  mg_selectAll_and_remove(svg, '.mg-category-guides');
  var g = mg_add_g(svg, 'mg-category-guides');

  grs.forEach(function (group) {
    scale.domain().forEach(function (cat) {
      if (position === 'left' || position === 'right') {
        x1 = mg_get_plot_left(args);
        x2 = mg_get_plot_right(args);
        y1 = scale(cat) + groupScale(group) + scale.bandwidth() / 2;
        y2 = scale(cat) + groupScale(group) + scale.bandwidth() / 2;
      }

      if (position === 'top' || position === 'bottom') {
        x1 = scale(cat) + groupScale(group) + scale.bandwidth() / 2 * (group === null);
        x2 = scale(cat) + groupScale(group) + scale.bandwidth() / 2 * (group === null);
        y1 = mg_get_plot_bottom(args);
        y2 = mg_get_plot_top(args);
      }

      g.append('line')
        .attr('x1', x1)
        .attr('x2', x2)
        .attr('y1', y1)
        .attr('y2', y2)
        .attr('stroke-dasharray', '2,1');
    });

    var first = groupScale(group) + scale(scale.domain()[0]) + scale.bandwidth() / 2 * (group === null || (position !== 'top' && position != 'bottom'));
    var last = groupScale(group) + scale(scale.domain()[scale.domain().length - 1]) + scale.bandwidth() / 2 * (group === null || (position !== 'top' && position != 'bottom'));

    if (position === 'left' || position === 'right') {
      x11 = mg_get_plot_left(args);
      x21 = mg_get_plot_left(args);
      y11 = first;
      y21 = last;

      x12 = mg_get_plot_right(args);
      x22 = mg_get_plot_right(args);
      y12 = first;
      y22 = last;
    }

    if (position === 'bottom' || position === 'top') {
      x11 = first;
      x21 = last;
      y11 = mg_get_plot_bottom(args);
      y21 = mg_get_plot_bottom(args);

      x12 = first;
      x22 = last;
      y12 = mg_get_plot_top(args);
      y22 = mg_get_plot_top(args);
    }

    g.append('line')
      .attr('x1', x11)
      .attr('x2', x21)
      .attr('y1', y11)
      .attr('y2', y21)
      .attr('stroke-dasharray', '2,1');

    g.append('line')
      .attr('x1', x12)
      .attr('x2', x22)
      .attr('y1', y12)
      .attr('y2', y22)
      .attr('stroke-dasharray', '2,1');
  });
}

function rotateLabels (labels, rotation_degree) {
  if (rotation_degree) {
    labels.attr('transform', function () {
      var elem = d3.select(this);
      return 'rotate(' + rotation_degree + ' ' + elem.attr('x') + ',' + elem.attr('y') + ')';
    });

  }
}

function zeroLine (args, axisArgs) {
  var svg = mg_get_svg_child_of(args.target);
  var ns = axisArgs.namespace;
  var position = axisArgs.position;
  var scale = args.scales[ns.toUpperCase()];
  var x1, x2, y1, y2;
  if (position === 'left' || position === 'right') {
    x1 = mg_get_plot_left(args);
    x2 = mg_get_plot_right(args);
    y1 = scale(0) + 1;
    y2 = scale(0) + 1;
  }
  if (position === 'bottom' || position === 'top') {
    y1 = mg_get_plot_top(args);
    y2 = mg_get_plot_bottom(args);
    x1 = scale(0) - 1;
    x2 = scale(0) - 1;
  }

  svg.append('line')
    .attr('x1', x1)
    .attr('x2', x2)
    .attr('y1', y1)
    .attr('y2', y2)
    .attr('stroke', 'black');
}

var mgDrawAxis = {};

mgDrawAxis.categorical = function (args, axisArgs) {
  var ns = axisArgs.namespace;

  categoricalLabels(args, axisArgs);
  categoricalGuides(args, axisArgs);
};

mgDrawAxis.numerical = function (args, axisArgs) {
  var namespace = axisArgs.namespace;
  var axisName = namespace + '_axis';
  var axisClass = 'mg-' + namespace + '-axis';
  var svg = mg_get_svg_child_of(args.target);

  mg_selectAll_and_remove(svg, '.' + axisClass);

  if (!args[axisName]) {
    return this;
  }

  var g = mg_add_g(svg, axisClass);

  processScaleTicks(args, namespace);
  initializeAxisRim(g, args, axisArgs);
  addTickLines(g, args, axisArgs);
  addNumericalLabels(g, args, axisArgs);

  // add label
  if (args[namespace + '_label']) {
    axisArgs.label(svg.select('.mg-' + namespace + '-axis'), args);
  }

  // add rugs
  if (args[namespace + '_rug']) {
    rug(args, axisArgs);
  }

  if (args.show_bar_zero) {
    mg_bar_add_zero_line(args);
  }

  return this;
};

function axisFactory (args) {
  var axisArgs = {};
  axisArgs.type = 'numerical';

  this.namespace = function (ns) {
    // take the ns in the scale, and use it to
    axisArgs.namespace = ns;
    return this;
  };

  this.rug = function (tf) {
    axisArgs.rug = tf;
    return this;
  };

  this.label = function (tf) {
    axisArgs.label = tf;
    return this;
  };

  this.type = function (t) {
    axisArgs.type = t;
    return this;
  };

  this.position = function (pos) {
    axisArgs.position = pos;
    return this;
  };

  this.zeroLine = function (tf) {
    axisArgs.zeroLine = tf;
    return this;
  };

  this.draw = function () {
    mgDrawAxis[axisArgs.type](args, axisArgs);
    return this;
  };

  return this;

}

MG.axis_factory = axisFactory;

/* ================================================================================ */
/* ================================================================================ */
/* ================================================================================ */

function y_rug (args) {
  'use strict';

  if (!args.y_rug) {
    return;
  }

  args.rug_buffer_size = args.chart_type === 'point'
    ? args.buffer / 2
    : args.buffer * 2 / 3;

  var rug = mg_make_rug(args, 'mg-y-rug');

  rug.attr('x1', args.left + 1)
    .attr('x2', args.left + args.rug_buffer_size)
    .attr('y1', args.scalefns.yf)
    .attr('y2', args.scalefns.yf);

  mg_add_color_accessor_to_rug(rug, args, 'mg-y-rug-mono');
}

MG.y_rug = y_rug;

function mg_change_y_extents_for_bars (args, my) {
  if (args.chart_type === 'bar') {
    my.min = 0;
    my.max = d3.max(args.data[0], function (d) {
      var trio = [];
      trio.push(d[args.y_accessor]);

      if (args.baseline_accessor !== null) {
        trio.push(d[args.baseline_accessor]);
      }

      if (args.predictor_accessor !== null) {
        trio.push(d[args.predictor_accessor]);
      }

      return Math.max.apply(null, trio);
    });
  }
  return my;
}

function mg_compute_yax_format (args) {
  var yax_format = args.yax_format;
  if (!yax_format) {
    if (args.format === 'count') {
      // increase decimals if we have small values, useful for realtime data
      if (args.processed.max_y < 0.0001) {
        args.decimals = 6;
      } else if (args.processed.max_y < 0.1) {
        args.decimals = 4;
      }

      yax_format = function (d) {
        var pf;

        if (d < 1.0 && d > -1.0 && d !== 0) {
          // don't scale tiny values
          pf = d3.format(',.' + args.decimals + 'f');
        } else if (d < 1000) {
          pf = d3.format(',.0f');
        } else {
          pf = d3.format(',.0s');
        }

        // are we adding units after the value or before?
        if (args.yax_units_append) {
          return pf(d) + args.yax_units;
        } else {
          return args.yax_units + pf(d);
        }
      };
    } else { // percentage
      yax_format = function (d_) {
        var n = d3.format('.0%');
        return n(d_);
      };
    }
  }
  return yax_format;
}

function mg_bar_add_zero_line (args) {
  var svg = mg_get_svg_child_of(args.target);
  var extents = args.scales.X.domain();
  if (0 >= extents[0] && extents[1] >= 0) {
    var r = args.scales.Y.range();
    var g = args.categorical_groups.length
      ? args.scales.YGROUP(args.categorical_groups[args.categorical_groups.length - 1])
      : args.scales.YGROUP();

    svg.append('svg:line')
      .attr('x1', args.scales.X(0))
      .attr('x2', args.scales.X(0))
      .attr('y1', r[0] + mg_get_plot_top(args))
      .attr('y2', r[r.length - 1] + g)
      .attr('stroke', 'black')
      .attr('opacity', .2);
  }
}

function set_min_max_y (args) {
  // flatten data
  // remove weird data, if log.
  var data = mg_flatten_array(args.data);

  if (args.y_scale_type === 'log') {
    data = data.filter(function (d) {
      return d[args.y_accessor] > 0;
    });
  }

  if (args.baselines) {
    data = data.concat(args.baselines);
  }

  var extents = d3.extent(data, function (d) {
    return d[args.y_accessor];
  });

  var my = {};
  my.min = extents[0];
  my.max = extents[1];
  // the default case is for the y-axis to start at 0, unless we explicitly want it
  // to start at an arbitrary number or from the data's minimum value
  if (my.min >= 0 && !args.min_y && !args.min_y_from_data) {
    my.min = 0;
  }

  mg_change_y_extents_for_bars(args, my);
  my.min = (args.min_y !== null) ? args.min_y : my.min;

  my.max = (args.max_y !== null) ? args.max_y : (my.max < 0) ? my.max + (my.max - my.max * args.inflator) : my.max * args.inflator;

  if (args.y_scale_type !== 'log' && my.min < 0) {
    my.min = my.min - (my.min - my.min * args.inflator);
  }

  if (!args.min_y && args.min_y_from_data) {
    var buff = (my.max - my.min) * .01;
    my.min = extents[0] - buff;
    my.max = extents[1] + buff;
  }
  args.processed.min_y = my.min;
  args.processed.max_y = my.max;
}

function mg_y_domain_range (args, scale) {
  scale.domain([args.processed.min_y, args.processed.max_y])
    .range([mg_get_plot_bottom(args), args.top]);
  return scale;
}

function mg_define_y_scales (args) {
  var scale = args.y_scale_type === 'log' ? d3.scaleLog() : d3.scaleLinear();
  if (args.y_scale_type === 'log') {
    if (args.chart_type === 'histogram') {
      // log histogram plots should start just below 1
      // so that bins with single counts are visible
      args.processed.min_y = 0.2;
    } else {
      if (args.processed.min_y <= 0) {
        args.processed.min_y = 1;
      }
    }
  }
  args.scales.Y = mg_y_domain_range(args, scale);
  args.scales.Y.clamp(args.y_scale_type === 'log');

  // used for ticks and such, and designed to be paired with log or linear
  args.scales.Y_axis = mg_y_domain_range(args, d3.scaleLinear());
}

function mg_add_y_label (g, args) {
  if (args.y_label) {
    g.append('text')
      .attr('class', 'label')
      .attr('x', function () {
        return -1 * (mg_get_plot_top(args) +
        ((mg_get_plot_bottom(args)) - (mg_get_plot_top(args))) / 2);
      })
      .attr('y', function () {
        return args.left / 2;
      })
      .attr('dy', '0.4em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return args.y_label;
      })
      .attr('transform', function (d) {
        return 'rotate(-90)';
      });
  }
}

function mg_add_y_axis_rim (g, args) {
  var tick_length = args.processed.y_ticks.length;
  if (!args.x_extended_ticks && !args.y_extended_ticks && tick_length) {
    var y1scale, y2scale;

    if (args.axes_not_compact && args.chart_type !== 'bar') {
      y1scale = args.height - args.bottom;
      y2scale = args.top;
    } else if (tick_length) {
      y1scale = args.scales.Y(args.processed.y_ticks[0]).toFixed(2);
      y2scale = args.scales.Y(args.processed.y_ticks[tick_length - 1]).toFixed(2);
    } else {
      y1scale = 0;
      y2scale = 0;
    }

    g.append('line')
      .attr('x1', args.left)
      .attr('x2', args.left)
      .attr('y1', y1scale)
      .attr('y2', y2scale);
  }
}

function mg_add_y_axis_tick_lines (g, args) {
  g.selectAll('.mg-yax-ticks')
    .data(args.processed.y_ticks).enter()
    .append('line')
    .classed('mg-extended-yax-ticks', args.y_extended_ticks)
    .attr('x1', args.left)
    .attr('x2', function () {
      return (args.y_extended_ticks) ? args.width - args.right : args.left - args.yax_tick_length;
    })
    .attr('y1', function (d) {
      return args.scales.Y(d).toFixed(2);
    })
    .attr('y2', function (d) {
      return args.scales.Y(d).toFixed(2);
    });
}

function mg_add_y_axis_tick_labels (g, args) {
  var yax_format = mg_compute_yax_format(args);
  g.selectAll('.mg-yax-labels')
    .data(args.processed.y_ticks).enter()
    .append('text')
    .attr('x', args.left - args.yax_tick_length * 3 / 2)
    .attr('dx', -3)
    .attr('y', function (d) {
      return args.scales.Y(d).toFixed(2);
    })
    .attr('dy', '.35em')
    .attr('text-anchor', 'end')
    .text(function (d) {
      var o = yax_format(d);
      return o;
    });
}

// TODO ought to be deprecated, only used by histogram
function y_axis (args) {
  if (!args.processed) {
    args.processed = {};
  }

  var svg = mg_get_svg_child_of(args.target);
  MG.call_hook('y_axis.process_min_max', args, args.processed.min_y, args.processed.max_y);
  mg_selectAll_and_remove(svg, '.mg-y-axis');

  if (!args.y_axis) {
    return this;
  }

  var g = mg_add_g(svg, 'mg-y-axis');
  mg_add_y_label(g, args);
  mg_process_scale_ticks(args, 'y');
  mg_add_y_axis_rim(g, args);
  mg_add_y_axis_tick_lines(g, args);
  mg_add_y_axis_tick_labels(g, args);

  if (args.y_rug) {
    y_rug(args);
  }

  return this;
}

MG.y_axis = y_axis;

function mg_add_categorical_labels (args) {
  var svg = mg_get_svg_child_of(args.target);
  mg_selectAll_and_remove(svg, '.mg-y-axis');
  var g = mg_add_g(svg, 'mg-y-axis');
  var group_g;(args.categorical_groups.length ? args.categorical_groups : ['1']).forEach(function (group) {
    group_g = mg_add_g(g, 'mg-group-' + mg_normalize(group));

    if (args.ygroup_accessor !== null) {
      mg_add_group_label(group_g, group, args);
    } else {
      var labels = mg_add_graphic_labels(group_g, group, args);
      mg_rotate_labels(labels, args.rotate_y_labels);
    }
  });
}

function mg_add_graphic_labels (g, group, args) {
  return g.selectAll('text').data(args.scales.Y.domain()).enter().append('svg:text')
    .attr('x', args.left - args.buffer)
    .attr('y', function (d) {
      return args.scales.YGROUP(group) + args.scales.Y(d) + args.scales.Y.bandwidth() / 2;
    })
    .attr('dy', '.35em')
    .attr('text-anchor', 'end')
    .text(String);
}

function mg_add_group_label (g, group, args) {
  g.append('svg:text')
    .classed('mg-barplot-group-label', true)
    .attr('x', args.left - args.buffer)
    .attr('y', args.scales.YGROUP(group) + args.scales.YGROUP.bandwidth() / 2)
    .attr('dy', '.35em')
    .attr('text-anchor', 'end')
    .text(group);
}

function mg_draw_group_lines (args) {
  var svg = mg_get_svg_child_of(args.target);
  var groups = args.scales.YGROUP.domain();
  var first = groups[0];
  var last = groups[groups.length - 1];

  svg.select('.mg-category-guides').selectAll('mg-group-lines')
    .data(groups)
    .enter().append('line')
      .attr('x1', mg_get_plot_left(args))
      .attr('x2', mg_get_plot_left(args))
      .attr('y1', function (d) {
        return args.scales.YGROUP(d);
      })
      .attr('y2', function (d) {
        return args.scales.YGROUP(d) + args.ygroup_height;
      })
      .attr('stroke-width', 1);
}

function mg_y_categorical_show_guides (args) {
  // for each group
  // for each data point
  var svg = mg_get_svg_child_of(args.target);
  var alreadyPlotted = [];
  args.data[0].forEach(function (d) {
    if (alreadyPlotted.indexOf(d[args.y_accessor]) === -1) {
      svg.select('.mg-category-guides').append('line')
        .attr('x1', mg_get_plot_left(args))
        .attr('x2', mg_get_plot_right(args))
        .attr('y1', args.scalefns.yf(d) + args.scalefns.ygroupf(d))
        .attr('y2', args.scalefns.yf(d) + args.scalefns.ygroupf(d))
        .attr('stroke-dasharray', '2,1');
    }
  });
}

function y_axis_categorical (args) {
  if (!args.y_axis) {
    return this;
  }

  mg_add_categorical_labels(args);
  // mg_draw_group_scaffold(args);
  if (args.show_bar_zero) mg_bar_add_zero_line(args);
  if (args.ygroup_accessor) mg_draw_group_lines(args);
  if (args.y_categorical_show_guides) mg_y_categorical_show_guides(args);
  return this;
}

MG.y_axis_categorical = y_axis_categorical;

function x_rug(args) {
  'use strict';

  if(!args.x_rug) {
    return;
  }

  args.rug_buffer_size = args.chart_type === 'point'
    ? args.buffer / 2
    : args.buffer;

  var rug = mg_make_rug(args, 'mg-x-rug');

  rug.attr('x1', args.scalefns.xf)
    .attr('x2', args.scalefns.xf)
    .attr('y1', args.height - args.bottom - args.rug_buffer_size)
    .attr('y2', args.height - args.bottom);

  mg_add_color_accessor_to_rug(rug, args, 'mg-x-rug-mono');
}

MG.x_rug = x_rug;

function mg_add_processed_object(args) {
  if (!args.processed) {
    args.processed = {};
  }
}

// TODO ought to be deprecated, only used by histogram
function x_axis(args) {
  'use strict';

  var svg = mg_get_svg_child_of(args.target);
  mg_add_processed_object(args);

  mg_select_xax_format(args);
  mg_selectAll_and_remove(svg, '.mg-x-axis');

  if (!args.x_axis) {
    return this;
  }

  var g = mg_add_g(svg, 'mg-x-axis');

  mg_add_x_ticks(g, args);
  mg_add_x_tick_labels(g, args);
  if (args.x_label) { mg_add_x_label(g, args); }
  if (args.x_rug) { x_rug(args); }

  return this;
}

MG.x_axis = x_axis;

function x_axis_categorical(args) {
  var svg = mg_get_svg_child_of(args.target);
  var additional_buffer = 0;
  if (args.chart_type === 'bar') {
    additional_buffer = args.buffer + 5;
  }

  mg_add_categorical_scale(args, 'X', args.categorical_variables.reverse(), args.left, mg_get_plot_right(args) - additional_buffer);
  mg_add_scale_function(args, 'xf', 'X', 'value');
  mg_selectAll_and_remove(svg, '.mg-x-axis');

  var g = mg_add_g(svg, 'mg-x-axis');

  if (!args.x_axis) {
    return this;
  }

  mg_add_x_axis_categorical_labels(g, args, additional_buffer);
  return this;
}

function mg_add_x_axis_categorical_labels(g, args, additional_buffer) {
  var labels = g.selectAll('text')
    .data(args.categorical_variables)
    .enter()
    .append('text');

  labels
    .attr('x', function(d) {
      return args.scales.X(d) + args.scales.X.bandwidth() / 2 + (args.buffer) * args.bar_outer_padding_percentage + (additional_buffer / 2);
    })
    .attr('y', mg_get_plot_bottom(args))
    .attr('dy', '.35em')
    .attr('text-anchor', 'middle')
    .text(String);

  if (args.truncate_x_labels) {
    labels.each(function(d, idx) {
      var elem = this, width = args.scales.X.bandwidth();
      truncate_text(elem, d, width);
    });
  }
  mg_rotate_labels(labels, args.rotate_x_labels);
}

MG.x_axis_categorical = x_axis_categorical;

function mg_point_add_color_scale(args) {
  var color_domain, color_range;

  if (args.color_accessor !== null) {
    color_domain = mg_get_color_domain(args);
    color_range = mg_get_color_range(args);

    if (args.color_type === 'number') {
      args.scales.color = d3.scaleLinear()
        .domain(color_domain)
        .range(color_range)
        .clamp(true);
    } else {
      args.scales.color = args.color_range !== null
        ? d3.scaleOrdinal().range(color_range)
        : (color_domain.length > 10
          ? d3.scaleOrdinal(d3.schemeCategory20)
          : d3.scaleOrdinal(d3.schemeCategory10));

      args.scales.color.domain(color_domain);
    }
    mg_add_scale_function(args, 'color', 'color', args.color_accessor);
  }
}

function mg_get_color_domain(args) {
  var color_domain;
  if (args.color_domain === null) {
    if (args.color_type === 'number') {
      color_domain = d3.extent(args.data[0], function(d) {
        return d[args.color_accessor];
      });
    } else if (args.color_type === 'category') {
      color_domain = d3.set(args.data[0]
          .map(function(d) {
            return d[args.color_accessor];
        }))
        .values();

      color_domain.sort();
    }
  } else {
    color_domain = args.color_domain;
  }
  return color_domain;
}

function mg_get_color_range(args) {
  var color_range;
  if (args.color_range === null) {
    if (args.color_type === 'number') {
      color_range = ['blue', 'red'];
    } else {
      color_range = null;
    }
  } else {
    color_range = args.color_range;
  }
  return color_range;
}

function mg_point_add_size_scale(args) {
  var min_size, max_size, size_domain, size_range;
  if (args.size_accessor !== null) {
    size_domain = mg_get_size_domain(args);
    size_range = mg_get_size_range(args);

    args.scales.size = d3.scaleLinear()
      .domain(size_domain)
      .range(size_range)
      .clamp(true);

    mg_add_scale_function(args, 'size', 'size', args.size_accessor);
  }
}

function mg_get_size_domain(args) {
  return (args.size_domain === null)
    ? d3.extent(args.data[0], function(d) { return d[args.size_accessor]; })
    : args.size_domain;
}

function mg_get_size_range(args) {
  var size_range;
  if (args.size_range === null) {
    size_range = [1, 5];
  } else {
    size_range = args.size_range;
  }
  return size_range;
}

function mg_add_x_label(g, args) {
  if (args.x_label) {
    g.append('text')
      .attr('class', 'label')
      .attr('x', function() {
        return mg_get_plot_left(args) + (mg_get_plot_right(args) - mg_get_plot_left(args)) / 2;
      })
      .attr('dx', args.x_label_nudge_x != null ? args.x_label_nudge_x : 0)
      .attr('y', function() {
        var xAxisTextElement = d3.select(args.target)
          .select('.mg-x-axis text').node().getBoundingClientRect();
        return mg_get_bottom(args) + args.xax_tick_length * (7 / 3) + xAxisTextElement.height * 0.8 + 10;
      })
      .attr('dy', '.5em')
      .attr('text-anchor', 'middle')
      .text(function(d) {
        return args.x_label;
      });
  }
}

function mg_default_bar_xax_format(args) {
  return function(d) {
    if (d < 1.0 && d > -1.0 && d !== 0) {
      // don't scale tiny values
      return args.xax_units + d.toFixed(args.decimals);
    } else {
      var pf = d3.format(',.0f');
      return args.xax_units + pf(d);
    }
  };
}

function mg_get_time_frame(diff) {
  // diff should be (max_x - min_x) / 1000, in other words, the difference in seconds.
  var time_frame;
  if (mg_milisec_diff(diff)) {
    time_frame = 'millis';
  } else if (mg_sec_diff(diff)) {
    time_frame = 'seconds';
  } else if (mg_day_diff(diff)) {
    time_frame = 'less-than-a-day';
  } else if (mg_four_days(diff)) {
    time_frame = 'four-days';
  } else if (mg_many_days(diff)) { // a handful of months?
    time_frame = 'many-days';
  } else if (mg_many_months(diff)) {
    time_frame = 'many-months';
  } else if (mg_years(diff)) {
    time_frame = 'years';
  } else {
    time_frame = 'default';
  }
  return time_frame;
}

function mg_milisec_diff(diff) {
  return diff < 10;
}

function mg_sec_diff(diff) {
  return diff < 60;
}

function mg_day_diff(diff) {
  return diff / (60 * 60) <= 24;
}

function mg_four_days(diff) {
  return diff / (60 * 60) <= 24 * 4;
}

function mg_many_days(diff) {
  return diff / (60 * 60 * 24) <= 93;
}

function mg_many_months(diff) {
  return diff / (60 * 60 * 24) < 365 * 2;
}

function mg_years(diff) {
  return diff / (60 * 60 * 24) >= 365 * 2;
}

function mg_get_time_format(utc, diff) {
  var main_time_format;
  if (mg_milisec_diff(diff)) {
    main_time_format = MG.time_format(utc, '%M:%S.%L');
  } else if (mg_sec_diff(diff)) {
    main_time_format = MG.time_format(utc, '%M:%S');
  } else if (mg_day_diff(diff)) {
    main_time_format = MG.time_format(utc, '%H:%M');
  } else if (mg_four_days(diff)) {
    main_time_format = MG.time_format(utc, '%H:%M');
  } else if (mg_many_days(diff)) {
    main_time_format = MG.time_format(utc, '%b %d');
  } else if (mg_many_months(diff)) {
    main_time_format = MG.time_format(utc, '%b');
  } else {
    main_time_format = MG.time_format(utc, '%Y');
  }
  return main_time_format;
}

function mg_process_time_format(args) {
  var diff;
  var main_time_format;
  var time_frame;

  if (args.time_series) {
    diff = (args.processed.max_x - args.processed.min_x) / 1000;
    time_frame = mg_get_time_frame(diff);
    main_time_format = mg_get_time_format(args.utc_time, diff);
  }

  args.processed.main_x_time_format = main_time_format;
  args.processed.x_time_frame = time_frame;
}

function mg_default_xax_format(args) {
  if (args.xax_format) {
    return args.xax_format;
  }

  var data = args.processed.original_data || args.data;
  var flattened = mg_flatten_array(data)[0];
  var test_point_x = flattened[args.processed.original_x_accessor || args.x_accessor];
  if (test_point_x === undefined) {
    test_point_x = flattened;
  }

  return function(d) {
    mg_process_time_format(args);

    if (test_point_x instanceof Date) {
      return args.processed.main_x_time_format(new Date(d));
    } else if (typeof test_point_x === 'number') {
      var is_float = d % 1 !== 0;
      var pf;

      if (is_float) {
        pf = d3.format(',.' + args.decimals + 'f');
      } else if (d < 1000) {
        pf = d3.format(',.0f');
      } else {
        pf = d3.format(',.0s');
      }
      return args.xax_units + pf(d);
    } else {
      return args.xax_units + d;
    }
  };
}

function mg_add_x_ticks(g, args) {
  mg_process_scale_ticks(args, 'x');
  mg_add_x_axis_rim(args, g);
  mg_add_x_axis_tick_lines(args, g);
}

function mg_add_x_axis_rim(args, g) {
  var tick_length = args.processed.x_ticks.length;
  var last_i = args.scales.X.ticks(args.xax_count).length - 1;

  if (!args.x_extended_ticks) {
    g.append('line')
      .attr('x1', function() {
        if (args.xax_count === 0) {
          return mg_get_plot_left(args);
        } else if (args.axes_not_compact && args.chart_type !== 'bar') {
          return args.left;
        } else {
          return (args.scales.X(args.scales.X.ticks(args.xax_count)[0])).toFixed(2);
        }
      })
      .attr('x2', function() {
        if (args.xax_count === 0 || (args.axes_not_compact && args.chart_type !== 'bar')) {
          return mg_get_right(args);
        } else {
          return args.scales.X(args.scales.X.ticks(args.xax_count)[last_i]).toFixed(2);
        }
      })
      .attr('y1', args.height - args.bottom)
      .attr('y2', args.height - args.bottom);
  }
}

function mg_add_x_axis_tick_lines(args, g) {
  g.selectAll('.mg-xax-ticks')
    .data(args.processed.x_ticks).enter()
    .append('line')
    .attr('x1', function(d) {
      return args.scales.X(d).toFixed(2); })
    .attr('x2', function(d) {
      return args.scales.X(d).toFixed(2); })
    .attr('y1', args.height - args.bottom)
    .attr('y2', function() {
      return (args.x_extended_ticks) ? args.top : args.height - args.bottom + args.xax_tick_length;
    })
    .attr('class', function() {
      if (args.x_extended_ticks) {
        return 'mg-extended-xax-ticks';
      }
    })
    .classed('mg-xax-ticks', true);
}

function mg_add_x_tick_labels(g, args) {
  mg_add_primary_x_axis_label(args, g);
  mg_add_secondary_x_axis_label(args, g);
}

function mg_add_primary_x_axis_label(args, g) {
  var labels = g.selectAll('.mg-xax-labels')
    .data(args.processed.x_ticks).enter()
    .append('text')
    .attr('x', function(d) {
      return args.scales.X(d).toFixed(2);
    })
    .attr('y', (args.height - args.bottom + args.xax_tick_length * 7 / 3).toFixed(2))
    .attr('dy', '.50em')
    .attr('text-anchor', 'middle');

  if (args.time_series && args.european_clock) {
    labels.append('tspan').classed('mg-european-hours', true).text(function(_d, i) {
      var d = new Date(_d);
      if (i === 0) return d3.timeFormat('%H')(d);
      else return '';
    });
    labels.append('tspan').classed('mg-european-minutes-seconds', true).text(function(_d, i) {
      var d = new Date(_d);
      return ':' + args.processed.xax_format(d);
    });
  } else {
    labels.text(function(d) {
      return args.xax_units + args.processed.xax_format(d);
    });
  }

  // CHECK TO SEE IF OVERLAP for labels. If so,
  // remove half of them. This is a dirty hack.
  // We will need to figure out a more principled way of doing this.
  if (mg_elements_are_overlapping(labels)) {
    labels.filter(function(d, i) {
      return (i + 1) % 2 === 0;
    }).remove();

    var svg = mg_get_svg_child_of(args.target);
    svg.selectAll('.mg-xax-ticks')
      .filter(function(d, i) {
        return (i + 1) % 2 === 0;
      })
      .remove();
  }
}

function mg_add_secondary_x_axis_label(args, g) {
  if (args.time_series && (args.show_years || args.show_secondary_x_label)) {
    var tf = mg_get_yformat_and_secondary_time_function(args);
    mg_add_secondary_x_axis_elements(args, g, tf.timeframe, tf.yformat, tf.secondary);
  }
}

function mg_get_yformat_and_secondary_time_function(args) {
  var tf = {};
  tf.timeframe = args.processed.x_time_frame;
  switch (tf.timeframe) {
    case 'millis':
    case 'seconds':
      tf.secondary = d3.timeDays;
      if (args.european_clock) tf.yformat = MG.time_format(args.utc_time, '%b %d');
      else tf.yformat = MG.time_format(args.utc_time, '%I %p');
      break;
    case 'less-than-a-day':
      tf.secondary = d3.timeDays;
      tf.yformat = MG.time_format(args.utc_time, '%b %d');
      break;
    case 'four-days':
      tf.secondary = d3.timeDays;
      tf.yformat = MG.time_format(args.utc_time, '%b %d');
      break;
    case 'many-days':
      tf.secondary = d3.timeYears;
      tf.yformat = MG.time_format(args.utc_time, '%Y');
      break;
    case 'many-months':
      tf.secondary = d3.timeYears;
      tf.yformat = MG.time_format(args.utc_time, '%Y');
      break;
    default:
      tf.secondary = d3.timeYears;
      tf.yformat = MG.time_format(args.utc_time, '%Y');
  }
  return tf;
}

function mg_add_secondary_x_axis_elements(args, g, time_frame, yformat, secondary_function) {
  var years = secondary_function(args.processed.min_x, args.processed.max_x);
  if (years.length === 0) {
    var first_tick = args.scales.X.ticks(args.xax_count)[0];
    years = [first_tick];
  }

  var yg = mg_add_g(g, 'mg-year-marker');
  if (time_frame === 'default' && args.show_year_markers) {
    mg_add_year_marker_line(args, yg, years, yformat);
  }
  if (time_frame != 'years') mg_add_year_marker_text(args, yg, years, yformat);
}

function mg_add_year_marker_line(args, g, years, yformat) {
  g.selectAll('.mg-year-marker')
    .data(years).enter()
    .append('line')
    .attr('x1', function(d) {
      return args.scales.X(d).toFixed(2);
    })
    .attr('x2', function(d) {
      return args.scales.X(d).toFixed(2);
    })
    .attr('y1', mg_get_top(args))
    .attr('y2', mg_get_bottom(args));
}

function mg_add_year_marker_text(args, g, years, yformat) {
  g.selectAll('.mg-year-marker')
    .data(years).enter()
    .append('text')
    .attr('x', function(d, i) {
      return args.scales.X(d).toFixed(2);
    })
    .attr('y', function() {
      var xAxisTextElement = d3.select(args.target)
        .select('.mg-x-axis text').node().getBoundingClientRect();
      return (mg_get_bottom(args) + args.xax_tick_length * 7 / 3) + (xAxisTextElement.height * 0.8);
    })
    .attr('dy', '.50em')
    .attr('text-anchor', 'middle')
    .text(function(d) {
      return yformat(new Date(d));
    });
}

function mg_min_max_x_for_nonbars(mx, args, data) {
  var extent_x = d3.extent(data, function(d) {
    return d[args.x_accessor];
  });
  mx.min = extent_x[0];
  mx.max = extent_x[1];
}

function mg_min_max_x_for_bars(mx, args, data) {
  mx.min = d3.min(data, function(d) {
    var trio = [
      d[args.x_accessor],
      (d[args.baseline_accessor]) ? d[args.baseline_accessor] : 0,
      (d[args.predictor_accessor]) ? d[args.predictor_accessor] : 0
    ];
    return Math.min.apply(null, trio);
  });

  if (mx.min > 0) mx.min = 0;

  mx.max = d3.max(data, function(d) {
    var trio = [
      d[args.x_accessor],
      (d[args.baseline_accessor]) ? d[args.baseline_accessor] : 0,
      (d[args.predictor_accessor]) ? d[args.predictor_accessor] : 0
    ];
    return Math.max.apply(null, trio);
  });
  return mx;
}

function mg_min_max_x_for_dates(mx) {
  var yesterday = MG.clone(mx.min).setDate(mx.min.getDate() - 1);
  var tomorrow = MG.clone(mx.min).setDate(mx.min.getDate() + 1);
  mx.min = yesterday;
  mx.max = tomorrow;
}

function mg_min_max_x_for_numbers(mx) {
  // TODO do we want to rewrite this?
  mx.min = mx.min - 1;
  mx.max = mx.max + 1;
}

function mg_min_max_x_for_strings(mx) {
  // TODO shouldn't be allowing strings here to be coerced into numbers
  mx.min = Number(mx.min) - 1;
  mx.max = Number(mx.max) + 1;
}

function mg_force_xax_count_to_be_two(args) {
  args.xax_count = 2;
}

function mg_sort_through_data_type_and_set_x_min_max_accordingly(mx, args, data) {
  if (args.chart_type === 'line' || args.chart_type === 'point' || args.chart_type === 'histogram') {
    mg_min_max_x_for_nonbars(mx, args, data);

  } else if (args.chart_type === 'bar') {
    mg_min_max_x_for_bars(mx, args, data);
  }
  // if data set is of length 1, expand the range so that we can build the x-axis
  if (mx.min === mx.max && !(args.min_x && args.max_x)) {
    if (mx.min instanceof Date) {
      mg_min_max_x_for_dates(mx);
    } else if (typeof min_x === 'number') {
      mg_min_max_x_for_numbers(mx);
    } else if (typeof min_x === 'string') {
      mg_min_max_x_for_strings(mx);
    }
    // force xax_count to be 2
    mg_force_xax_count_to_be_two(args);
  }
}

function mg_select_xax_format(args) {
  var c = args.chart_type;
  if (!args.processed.xax_format) {
    if (args.xax_format) {
      args.processed.xax_format = args.xax_format;
    } else {
      if (c === 'line' || c === 'point' || c === 'histogram') {
        args.processed.xax_format = mg_default_xax_format(args);
      } else if (c === 'bar') {
        args.processed.xax_format = mg_default_bar_xax_format(args);
      }
    }
  }
}

function mg_merge_args_with_defaults(args) {
  var defaults = {
    target: null,
    title: null,
    description: null
  };

  if (!args) {
    args = {};
  }

  if (!args.processed) {
    args.processed = {};
  }

  args = merge_with_defaults(args, defaults);
  return args;
}

function mg_is_time_series(args) {
  var first_elem = mg_flatten_array(args.processed.original_data || args.data)[0];
  args.time_series = first_elem[args.processed.original_x_accessor || args.x_accessor] instanceof Date;
}

function mg_init_compute_width(args) {
  var svg_width = args.width;
  if (args.full_width) {
    svg_width = get_width(args.target);
  }
  if (args.x_axis_type === 'categorical' && svg_width === null) {
    svg_width = mg_categorical_calculate_height(args, 'x');
  }

  args.width = svg_width;
}

function mg_init_compute_height(args) {
  var svg_height = args.height;
  if (args.full_height) {
    svg_height = get_height(args.target);
  }
  if (args.y_axis_type === 'categorical' && svg_height === null) {
    svg_height = mg_categorical_calculate_height(args, 'y');
  }

  args.height = svg_height;
}

function mg_remove_svg_if_chart_type_has_changed(svg, args) {
  if ((!svg.selectAll('.mg-main-line').empty() && args.chart_type !== 'line') ||
    (!svg.selectAll('.mg-points').empty() && args.chart_type !== 'point') ||
    (!svg.selectAll('.mg-histogram').empty() && args.chart_type !== 'histogram') ||
    (!svg.selectAll('.mg-barplot').empty() && args.chart_type !== 'bar')
  ) {
    svg.remove();
  }
}

function mg_add_svg_if_it_doesnt_exist(svg, args) {
  if (mg_get_svg_child_of(args.target).empty()) {
    svg = d3.select(args.target)
      .append('svg')
      .classed('linked', args.linked)
      .attr('width', args.width)
      .attr('height', args.height);
  }
  return svg;
}

function mg_add_clip_path_for_plot_area(svg, args) {
  svg.selectAll('.mg-clip-path').remove();
  svg.append('defs')
    .attr('class', 'mg-clip-path')
    .append('clipPath')
    .attr('id', 'mg-plot-window-' + mg_target_ref(args.target))
    .append('svg:rect')
    .attr('x', mg_get_left(args))
    .attr('y', mg_get_top(args))
    .attr('width', args.width - args.left - args.right - args.buffer)
    .attr('height', args.height - args.top - args.bottom - args.buffer + 1);
}

function mg_adjust_width_and_height_if_changed(svg, args) {
  if (args.width !== Number(svg.attr('width'))) {
    svg.attr('width', args.width);
  }
  if (args.height !== Number(svg.attr('height'))) {
    svg.attr('height', args.height);
  }
}

function mg_set_viewbox_for_scaling(svg, args) {
  // we need to reconsider how we handle automatic scaling
  svg.attr('viewBox', '0 0 ' + args.width + ' ' + args.height);
  if (args.full_width || args.full_height) {
    svg.attr('preserveAspectRatio', 'xMinYMin meet');
  }
}

function mg_remove_missing_classes_and_text(svg) {
  // remove missing class
  svg.classed('mg-missing', false);

  // remove missing text
  svg.selectAll('.mg-missing-text').remove();
  svg.selectAll('.mg-missing-pane').remove();
}

function mg_remove_outdated_lines(svg, args) {
  // if we're updating an existing chart and we have fewer lines than
  // before, remove the outdated lines, e.g. if we had 3 lines, and we're calling
  // data_graphic() on the same target with 2 lines, remove the 3rd line

  var i = 0;

  if (svg.selectAll('.mg-main-line').nodes().length >= args.data.length) {
    // now, the thing is we can't just remove, say, line3 if we have a custom
    // line-color map, instead, see which are the lines to be removed, and delete those
    if (args.custom_line_color_map.length > 0) {
      var array_full_series = function(len) {
        var arr = new Array(len);
        for (var i = 0; i < arr.length; i++) { arr[i] = i + 1; }
        return arr;
      };

      // get an array of lines ids to remove
      var lines_to_remove = arr_diff(
        array_full_series(args.max_data_size),
        args.custom_line_color_map);

      for (i = 0; i < lines_to_remove.length; i++) {
        svg.selectAll('.mg-main-line.mg-line' + lines_to_remove[i] + '-color')
          .remove();
      }
    } else {
      // if we don't have a custom line-color map, just remove the lines from the end
      var num_of_new = args.data.length;
      var num_of_existing = (svg.selectAll('.mg-main-line').nodes()) ? svg.selectAll('.mg-main-line').nodes().length : 0;

      for (i = num_of_existing; i > num_of_new; i--) {
        svg.selectAll('.mg-main-line.mg-line' + i + '-color')
          .remove();
      }
    }
  }
}

function mg_raise_container_error(container, args) {
  if (container.empty()) {
    console.warn('The specified target element "' + args.target + '" could not be found in the page. The chart will not be rendered.');
    return;
  }
}

function categoricalInitialization(args, ns) {
  var which = ns === 'x' ? args.width : args.height;
  mg_categorical_count_number_of_groups(args, ns);
  mg_categorical_count_number_of_lanes(args, ns);
  mg_categorical_calculate_group_length(args, ns, which);
  if (which) mg_categorical_calculate_bar_thickness(args, ns);
}


function mg_categorical_count_number_of_groups(args, ns) {
  var accessor_string = ns + 'group_accessor';
  var accessor = args[accessor_string];
  args.categorical_groups = [];
  if (accessor) {
    var data = args.data[0];
    args.categorical_groups = d3.set(data.map(function(d) {
      return d[accessor] })).values();
  }
}

function mg_categorical_count_number_of_lanes(args, ns) {
  var accessor_string = ns + 'group_accessor';
  var groupAccessor = args[accessor_string];

  args.total_bars = args.data[0].length;
  if (groupAccessor) {
    var group_bars = count_array_elements(pluck(args.data[0], groupAccessor));
    group_bars = d3.max(Object.keys(group_bars).map(function(d) {
      return group_bars[d] }));
    args.bars_per_group = group_bars;
  } else {
    args.bars_per_group = args.data[0].length;
  }
}

function mg_categorical_calculate_group_length(args, ns, which) {
  var groupHeight = ns + 'group_height';
  if (which) {
    var gh = ns === 'y' ?
      (args.height - args.top - args.bottom - args.buffer * 2) / (args.categorical_groups.length || 1) :
      (args.width - args.left - args.right - args.buffer * 2) / (args.categorical_groups.length || 1);
    
    args[groupHeight] = gh;
  } else {
    var step = (1 + args[ns + '_padding_percentage']) * args.bar_thickness;
    args[groupHeight] = args.bars_per_group * step + args[ns + '_outer_padding_percentage'] * 2 * step; //args.bar_thickness + (((args.bars_per_group-1) * args.bar_thickness) * (args.bar_padding_percentage + args.bar_outer_padding_percentage*2));
  }
}

function mg_categorical_calculate_bar_thickness(args, ns) {
  // take one group height.
  var step = (args[ns + 'group_height']) / (args.bars_per_group + args[ns + '_outer_padding_percentage']);
  args.bar_thickness = step - (step * args[ns + '_padding_percentage']);
}

function mg_categorical_calculate_height(args, ns) {
  var groupContribution = (args[ns + 'group_height']) * (args.categorical_groups.length || 1);

  var marginContribution = ns === 'y'
    ? args.top + args.bottom + args.buffer * 2
    : args.left + args.right + args.buffer * 2;

  return groupContribution + marginContribution +
    (args.categorical_groups.length * args[ns + 'group_height'] * (args[ns + 'group_padding_percentage'] + args[ns + 'group_outer_padding_percentage']));
}

function mg_barchart_extrapolate_group_and_thickness_from_height(args) {
  // we need to set args.bar_thickness, group_height
}

function init(args) {
  'use strict';
  args = arguments[0];
  args = mg_merge_args_with_defaults(args);
  // If you pass in a dom element for args.target, the expectation
  // of a string elsewhere will break.
  var container = d3.select(args.target);
  mg_raise_container_error(container, args);

  var svg = container.selectAll('svg');

  // some things that will need to be calculated if we have a categorical axis.
  if (args.y_axis_type === 'categorical') { categoricalInitialization(args, 'y'); }
  if (args.x_axis_type === 'categorical') { categoricalInitialization(args, 'x'); }

  mg_is_time_series(args);
  mg_init_compute_width(args);
  mg_init_compute_height(args);

  mg_remove_svg_if_chart_type_has_changed(svg, args);
  svg = mg_add_svg_if_it_doesnt_exist(svg, args);

  mg_add_clip_path_for_plot_area(svg, args);
  mg_adjust_width_and_height_if_changed(svg, args);
  mg_set_viewbox_for_scaling(svg, args);
  mg_remove_missing_classes_and_text(svg);
  chart_title(args);
  mg_remove_outdated_lines(svg, args);

  return this;
}

MG.init = init;

function mg_return_label(d) {
  return d.label;
}

function mg_remove_existing_markers(svg) {
  svg.selectAll('.mg-markers').remove();
  svg.selectAll('.mg-baselines').remove();
}

function mg_in_range(args) {
  return function(d) {
    return (args.scales.X(d[args.x_accessor]) > mg_get_plot_left(args)) && (args.scales.X(d[args.x_accessor]) < mg_get_plot_right(args));
  };
}

function mg_x_position(args) {
  return function(d) {
    return args.scales.X(d[args.x_accessor]);
  };
}

function mg_x_position_fixed(args) {
  var _mg_x_pos = mg_x_position(args);
  return function(d) {
    return _mg_x_pos(d).toFixed(2);
  };
}

function mg_y_position_fixed(args) {
  var _mg_y_pos = args.scales.Y;
  return function(d) {
    return _mg_y_pos(d.value).toFixed(2);
  };
}

function mg_place_annotations(checker, class_name, args, svg, line_fcn, text_fcn) {
  var g;
  if (checker) {
    g = svg.append('g').attr('class', class_name);
    line_fcn(g, args);
    text_fcn(g, args);
  }
}

function mg_place_markers(args, svg) {
  mg_place_annotations(args.markers, 'mg-markers', args, svg, mg_place_marker_lines, mg_place_marker_text);
}

function mg_place_baselines(args, svg) {
  mg_place_annotations(args.baselines, 'mg-baselines', args, svg, mg_place_baseline_lines, mg_place_baseline_text);
}

function mg_place_marker_lines(gm, args) {
  var x_pos_fixed = mg_x_position_fixed(args);
  gm.selectAll('.mg-markers')
    .data(args.markers.filter(mg_in_range(args)))
    .enter()
    .append('line')
    .attr('x1', x_pos_fixed)
    .attr('x2', x_pos_fixed)
    .attr('y1', args.top)
    .attr('y2', mg_get_plot_bottom(args))
    .attr('class', function(d) {
      return d.lineclass;
    })
    .attr('stroke-dasharray', '3,1');
}

function mg_place_marker_text(gm, args) {
  gm.selectAll('.mg-markers')
    .data(args.markers.filter(mg_in_range(args)))
    .enter()
    .append('text')
      .attr('class', function(d) {
        return d.textclass || ''; })
      .classed('mg-marker-text', true)
      .attr('x', mg_x_position(args))
      .attr('y', args.x_axis_position === 'bottom' ? mg_get_top(args) * 0.95 : mg_get_bottom(args) + args.buffer)
      .attr('text-anchor', 'middle')
      .text(mg_return_label)
      .each(function(d) {
        if (d.click) {
          d3.select(this).style('cursor', 'pointer')
            .on('click', d.click);
        }
      });

  mg_prevent_horizontal_overlap(gm.selectAll('.mg-marker-text').nodes(), args);
}

function mg_place_baseline_lines(gb, args) {
  var y_pos = mg_y_position_fixed(args);
  gb.selectAll('.mg-baselines')
    .data(args.baselines)
    .enter().append('line')
    .attr('x1', mg_get_plot_left(args))
    .attr('x2', mg_get_plot_right(args))
    .attr('y1', y_pos)
    .attr('y2', y_pos);
}

function mg_place_baseline_text(gb, args) {
  var y_pos = mg_y_position_fixed(args);
  gb.selectAll('.mg-baselines')
    .data(args.baselines)
    .enter().append('text')
    .attr('x', mg_get_plot_right(args))
    .attr('y', y_pos)
    .attr('dy', -3)
    .attr('text-anchor', 'end')
    .text(mg_return_label);
}

function markers(args) {
  'use strict';

  var svg = mg_get_svg_child_of(args.target);
  mg_remove_existing_markers(svg);
  mg_place_markers(args, svg);
  mg_place_baselines(args, svg);
  return this;
}

MG.markers = markers;

function mg_clear_mouseover_container(svg) {
  svg.selectAll('.mg-active-datapoint-container').selectAll('*').remove();
}

function mg_setup_mouseover_container(svg, args) {
  svg.select('.mg-active-datapoint').remove();
  var text_anchor = args.mouseover_align === 'right'
    ? 'end'
    : (args.mouseover_align === 'left'
      ? 'start'
      : 'middle');

  var mouseover_x = (args.mouseover_align === 'right')
    ? mg_get_plot_right(args)
    : (args.mouseover_align === 'left'
      ? mg_get_plot_left(args)
      : (args.width - args.left - args.right) / 2 + args.left);

  var active_datapoint = svg.select('.mg-active-datapoint-container')
    .append('text')
    .attr('class', 'mg-active-datapoint')
    .attr('xml:space', 'preserve')
    .attr('text-anchor', text_anchor);

  // set the rollover text's position; if we have markers on two lines,
  // nudge up the rollover text a bit
  var active_datapoint_y_nudge = 0.75;

  var y_position = (args.x_axis_position === 'bottom')
    ? mg_get_top(args) * active_datapoint_y_nudge
    : mg_get_bottom(args) + args.buffer * 3;

  if (args.markers) {
    var yPos;
    svg.selectAll('.mg-marker-text')
      .each(function() {
        if (!yPos) {
          yPos = d3.select(this).attr('y');
        } else if (yPos !== d3.select(this).attr('y')) {
          active_datapoint_y_nudge = 0.56;
        }
      });
  }

  active_datapoint
    .attr('transform', 'translate(' + mouseover_x + ',' + (y_position) + ')');
}

function mg_mouseover_tspan(svg, text) {
  var tspan = '';
  var cl = null;
  if (arguments.length === 3) cl = arguments[2];
  tspan = svg.append('tspan').text(text);
  if (cl !== null) tspan.classed(cl, true);
  this.tspan = tspan;

  this.bold = function() {
    this.tspan.attr('font-weight', 'bold');
    return this;
  };

  this.font_size = function(pts) {
    this.tspan.attr('font-size', pts);
    return this;
  }

  this.x = function(x) {
    this.tspan.attr('x', x);
    return this;
  };
  this.y = function(y) {
    this.tspan.attr('y', y);
    return this;
  };
  this.elem = function() {
    return this.tspan;
  };
  return this;
}

function mg_reset_text_container(svg) {
  var textContainer = svg.select('.mg-active-datapoint');
  textContainer
    .selectAll('*')
    .remove();
  return textContainer;
}

function mg_mouseover_row(row_number, container, rargs) {
  var lineHeight = 1.1;
  this.rargs = rargs;

  var rrr = container.append('tspan')
    .attr('x', 0)
    .attr('y', (row_number * lineHeight) + 'em');

  this.text = function(text) {
    return mg_mouseover_tspan(rrr, text);
  }
  return this;
}

function mg_mouseover_text(args, rargs) {
  var lineHeight = 1.1;
  this.row_number = 0;
  this.rargs = rargs;
  mg_setup_mouseover_container(rargs.svg, args);

  this.text_container = mg_reset_text_container(rargs.svg);

  this.mouseover_row = function(rargs) {
    var that = this;
    var rrr = mg_mouseover_row(that.row_number, that.text_container, rargs);
    that.row_number += 1;
    return rrr;
  }

  return this;
}

function MG_WindowResizeTracker() {
  var targets = [];

  var Observer;
  if (typeof MutationObserver !== "undefined") {
    Observer = MutationObserver;
  } else if (typeof WebKitMutationObserver !== "undefined") {
    Observer = WebKitMutationObserver;
  }

  function window_listener() {
    targets.forEach(function(target) {
      var svg = d3.select(target).select('svg');

      if (!svg.empty()) {
        var aspect = svg.attr('width') !== 0 ? (svg.attr('height') / svg.attr('width')) : 0;

        var newWidth = get_width(target);

        svg.attr('width', newWidth);
        svg.attr('height', aspect * newWidth);
      }
    });
  }

  function remove_target(target) {
    var index = targets.indexOf(target);
    if (index !== -1) {
      targets.splice(index, 1);
    }

    if (targets.length === 0) {
      window.removeEventListener('resize', window_listener, true);
    }
  }

  return {
    add_target: function(target) {
      if (targets.length === 0) {
        window.addEventListener('resize', window_listener, true);
      }

      if (targets.indexOf(target) === -1) {
        targets.push(target);

        if (Observer) {
          var observer = new Observer(function(mutations) {
            var targetNode = d3.select(target).node();

            if (!targetNode || mutations.some(
                function(mutation) {
                  for (var i = 0; i < mutation.removedNodes.length; i++) {
                    if (mutation.removedNodes[i] === targetNode) {
                      return true;
                    }
                  }
                })) {
              observer.disconnect();
              remove_target(target);
            }
          });

          observer.observe(d3.select(target).node().parentNode, { childList: true });
        }
      }
    }
  };
}

var mg_window_resize_tracker = new MG_WindowResizeTracker();

function mg_window_listeners(args) {
  mg_if_aspect_ratio_resize_svg(args);
}

function mg_if_aspect_ratio_resize_svg(args) {
  // have we asked the svg to fill a div, if so resize with div
  if (args.full_width || args.full_height) {
    mg_window_resize_tracker.add_target(args.target);
  }
}

if (mg_jquery_exists()) {
    /*!
     * Bootstrap v3.3.1 (http://getbootstrap.com)
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */

    /*!
     * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=c3834cc5b59ef727da53)
     * Config saved to config.json and https://gist.github.com/c3834cc5b59ef727da53
     */

    /* ========================================================================
     * Bootstrap: dropdown.js v3.3.1
     * http://getbootstrap.com/javascript/#dropdowns
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */


    +function ($) {
      'use strict';

      if(typeof $().dropdown == 'function')
        return true;

      // DROPDOWN CLASS DEFINITION
      // =========================

      var backdrop = '.dropdown-backdrop';
      var toggle   = '[data-toggle="dropdown"]';
      var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle);
      };

      Dropdown.VERSION = '3.3.1';

      Dropdown.prototype.toggle = function (e) {
        var $this = $(this);

        if ($this.is('.disabled, :disabled')) return;

        var $parent  = getParent($this);
        var isActive = $parent.hasClass('open');

        clearMenus();

        if (!isActive) {
          if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
            // if mobile we use a backdrop because click events don't delegate
            $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus);
          }

          var relatedTarget = { relatedTarget: this };
          $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this
            .trigger('focus')
            .attr('aria-expanded', 'true');

          $parent
            .toggleClass('open')
            .trigger('shown.bs.dropdown', relatedTarget);
        }

        return false;
      };

      Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

        var $this = $(this);

        e.preventDefault();
        e.stopPropagation();

        if ($this.is('.disabled, :disabled')) return;

        var $parent  = getParent($this);
        var isActive = $parent.hasClass('open');

        if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
          if (e.which == 27) $parent.find(toggle).trigger('focus');
          return $this.trigger('click');
        }

        var desc = ' li:not(.divider):visible a';
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc);

        if (!$items.length) return;

        var index = $items.index(e.target);

        if (e.which == 38 && index > 0)                 index--;                        // up
        if (e.which == 40 && index < $items.length - 1) index++;                        // down
        if (!~index)                                      index = 0;

        $items.eq(index).trigger('focus');
      };

      function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function () {
          var $this         = $(this);
          var $parent       = getParent($this);
          var relatedTarget = { relatedTarget: this };

          if (!$parent.hasClass('open')) return;

          $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this.attr('aria-expanded', 'false');
          $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget);
        });
      }

      function getParent($this) {
        var selector = $this.attr('data-target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent();
      }


      // DROPDOWN PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data  = $this.data('bs.dropdown');

          if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)));
          if (typeof option == 'string') data[option].call($this);
        });
      }

      var old = $.fn.dropdown;

      $.fn.dropdown             = Plugin;
      $.fn.dropdown.Constructor = Dropdown;


      // DROPDOWN NO CONFLICT
      // ====================

      $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this;
      };


      // APPLY TO STANDARD DROPDOWN ELEMENTS
      // ===================================

      $(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation(); })
        .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown);

    }(jQuery);
}

MG.button_layout = function(target) {
  'use strict';
  this.target = target;
  this.feature_set = {};
  this.public_name = {};
  this.sorters = {};
  this.manual = [];
  this.manual_map = {};
  this.manual_callback = {};

  this._strip_punctuation = function(s) {
    var punctuationless = s.replace(/[^a-zA-Z0-9 _]+/g, '');
    var finalString = punctuationless.replace(/ +?/g, '');
    return finalString;
  };

  this.data = function(data) {
    this._data = data;
    return this;
  };

  this.manual_button = function(feature, feature_set, callback) {
    this.feature_set[feature] = feature_set;
    this.manual_map[this._strip_punctuation(feature)] = feature;
    this.manual_callback[feature] = callback; // the default is going to be the first feature.
    return this;
  };

  this.button = function(feature) {
    if (arguments.length > 1) {
      this.public_name[feature] = arguments[1];
    }

    if (arguments.length > 2) {
      this.sorters[feature] = arguments[2];
    }

    this.feature_set[feature] = [];
    return this;
  };

  this.callback = function(callback) {
    this._callback = callback;
    return this;
  };

  this.display = function() {
    var callback = this._callback;
    var manual_callback = this.manual_callback;
    var manual_map = this.manual_map;

    var d, f, features, feat;
    features = Object.keys(this.feature_set);

    var mapDtoF = function(f) {
      return d[f]; };

    var i;

    // build out this.feature_set with this.data
    for (i = 0; i < this._data.length; i++) {
      d = this._data[i];
      f = features.map(mapDtoF);
      for (var j = 0; j < features.length; j++) {
        feat = features[j];
        if (this.feature_set[feat].indexOf(f[j]) === -1) {
          this.feature_set[feat].push(f[j]);
        }
      }
    }

    for (feat in this.feature_set) {
      if (this.sorters.hasOwnProperty(feat)) {
        this.feature_set[feat].sort(this.sorters[feat]);
      }
    }

    $(this.target).empty();

    $(this.target).append("<div class='col-lg-12 segments text-center'></div>");

    var dropdownLiAClick = function() {
      var k = $(this).data('key');
      var feature = $(this).data('feature');
      var manual_feature;
      $('.' + feature + '-btns button.btn span.title').html(k);
      if (!manual_map.hasOwnProperty(feature)) {
        callback(feature, k);
      } else {
        manual_feature = manual_map[feature];
        manual_callback[manual_feature](k);
      }

      return false;
    };

    for (var feature in this.feature_set) {
      features = this.feature_set[feature];
      $(this.target + ' div.segments').append(
        '<div class="btn-group ' + this._strip_punctuation(feature) + '-btns text-left">' + // This never changes.
        '<button type="button" class="btn btn-default btn-lg dropdown-toggle" data-toggle="dropdown">' +
        "<span class='which-button'>" + (this.public_name.hasOwnProperty(feature) ? this.public_name[feature] : feature) + "</span>" +
        "<span class='title'>" + (this.manual_callback.hasOwnProperty(feature) ? this.feature_set[feature][0] : 'all') + "</span>" + // if a manual button, don't default to all in label.
        '<span class="caret"></span>' +
        '</button>' +
        '<ul class="dropdown-menu" role="menu">' +
        (!this.manual_callback.hasOwnProperty(feature) ? '<li><a href="#" data-feature="' + feature + '" data-key="all">All</a></li>' : "") +
        (!this.manual_callback.hasOwnProperty(feature) ? '<li class="divider"></li>' : "") +
        '</ul>' + '</div>');

      for (i = 0; i < features.length; i++) {
        if (features[i] !== 'all' && features[i] !== undefined) { // strange bug with undefined being added to manual buttons.
          $(this.target + ' div.' + this._strip_punctuation(feature) + '-btns ul.dropdown-menu').append(
            '<li><a href="#" data-feature="' + this._strip_punctuation(feature) + '" data-key="' + features[i] + '">' + features[i] + '</a></li>'
          );
        }
      }

      $('.' + this._strip_punctuation(feature) + '-btns .dropdown-menu li a').on('click', dropdownLiAClick);
    }

    return this;
  };

  return this;
};

(function() {
  'use strict';

  function mg_line_color_text(elem, d, args) {
    elem.classed('mg-hover-line' + d.line_id + '-color', args.colors === null)
      .attr('fill', args.colors === null ? '' : args.colors[d.line_id - 1]);
  }

  function mg_line_graph_generators(args, plot, svg) {
    mg_add_line_generator(args, plot);
    mg_add_area_generator(args, plot);
    mg_add_flat_line_generator(args, plot);
    mg_add_confidence_band_generator(args, plot, svg);
  }

  function mg_add_confidence_band_generator(args, plot, svg) {
    plot.existing_band = svg.selectAll('.mg-confidence-band').nodes();
    if (args.show_confidence_band) {
      plot.confidence_area = d3.area()
        .defined(plot.line.defined())
        .x(args.scalefns.xf)
        .y0(function(d) {
          var l = args.show_confidence_band[0];
          if (d[l] != undefined) {
            return args.scales.Y(d[l]);
          } else {
            return args.scales.Y(d[args.y_accessor]);
          }
        })
        .y1(function(d) {
          var u = args.show_confidence_band[1];
          if (d[u] != undefined) {
            return args.scales.Y(d[u]);
          } else {
            return args.scales.Y(d[args.y_accessor]);
          }
        })
        .curve(args.interpolate);
    }
  }

  function mg_add_area_generator(args, plot) {
    plot.area = d3.area()
      .defined(plot.line.defined())
      .x(args.scalefns.xf)
      .y0(args.scales.Y.range()[0])
      .y1(args.scalefns.yf)
      .curve(args.interpolate);
  }

  function mg_add_flat_line_generator(args, plot) {
    plot.flat_line = d3.line()
      .defined(function(d) {
        return (d['_missing'] === undefined || d['_missing'] !== true) && d[args.y_accessor] !== null;
      })
      .x(args.scalefns.xf)
      .y(function() {
        return args.scales.Y(plot.data_median); })
      .curve(args.interpolate);
  }

  function mg_add_line_generator(args, plot) {
    plot.line = d3.line()
      .x(args.scalefns.xf)
      .y(args.scalefns.yf)
      .curve(args.interpolate);

    // if missing_is_zero is not set, then hide data points that fall in missing
    // data ranges or that have been explicitly identified as missing in the
    // data source.
    if (!args.missing_is_zero) {
      // a line is defined if the _missing attrib is not set to true
      // and the y-accessor is not null
      plot.line = plot.line.defined(function(d) {
        return (d['_missing'] === undefined || d['_missing'] !== true) && d[args.y_accessor] !== null;
      });
    }
  }

  function mg_add_confidence_band(args, plot, svg, which_line) {
    if (args.show_confidence_band) {
      var confidenceBand;
      if (svg.select('.mg-confidence-band-' + which_line).empty()) {
        svg.append('path')
          .attr('class', 'mg-confidence-band mg-confidence-band-' + which_line)
      }

      // transition this line's confidence band
      confidenceBand = svg.select('.mg-confidence-band-' + which_line);

      confidenceBand
        .transition()
        .duration(function() {
          return (args.transition_on_update) ? 1000 : 0;
        })
        .attr('d', plot.confidence_area(args.data[which_line - 1]))
        .attr('clip-path', 'url(#mg-plot-window-' + mg_target_ref(args.target) + ')')
    }
  }

  function mg_add_area(args, plot, svg, which_line, line_id) {
    var areas = svg.selectAll('.mg-main-area.mg-area' + line_id);
    if (plot.display_area) {
      // if area already exists, transition it
      if (!areas.empty()) {
        svg.node().appendChild(areas.node());

        areas.transition()
          .duration(plot.update_transition_duration)
          .attr('d', plot.area(args.data[which_line]))
          .attr('clip-path', 'url(#mg-plot-window-' + mg_target_ref(args.target) + ')');
      } else { // otherwise, add the area
        svg.append('path')
          .classed('mg-main-area', true)
          .classed('mg-area' + line_id, true)
          .classed('mg-area' + line_id + '-color', args.colors === null)
          .attr('d', plot.area(args.data[which_line]))
          .attr('fill', args.colors === null ? '' : args.colors[line_id - 1])
          .attr('clip-path', 'url(#mg-plot-window-' + mg_target_ref(args.target) + ')');
      }
    } else if (!areas.empty()) {
      areas.remove();
    }
  }

  function mg_default_color_for_path(this_path, line_id) {
    this_path.classed('mg-line' + (line_id) + '-color', true);
  }

  function mg_color_line(args, this_path, which_line, line_id) {
    if (args.colors) {
      // for now, if args.colors is not an array, then keep moving as if nothing happened.
      // if args.colors is not long enough, default to the usual line_id color.
      if (args.colors.constructor === Array) {
        this_path.attr('stroke', args.colors[which_line]);
        if (args.colors.length < which_line + 1) {
          // Go with default coloring.
          // this_path.classed('mg-line' + (line_id) + '-color', true);
          mg_default_color_for_path(this_path, line_id);
        }
      } else {
        // this_path.classed('mg-line' + (line_id) + '-color', true);
        mg_default_color_for_path(this_path, line_id);
      }
    } else {
      // this is the typical workflow
      // this_path.classed('mg-line' + (line_id) + '-color', true);
      mg_default_color_for_path(this_path, line_id);
    }
  }

  function mg_add_line_element(args, plot, this_path, which_line) {
    if (args.animate_on_load) {
      plot.data_median = d3.median(args.data[which_line], function(d) {
        return d[args.y_accessor]; });
      this_path.attr('d', plot.flat_line(args.data[which_line]))
        .transition()
        .duration(1000)
        .attr('d', plot.line(args.data[which_line]))
        .attr('clip-path', 'url(#mg-plot-window-' + mg_target_ref(args.target) + ')');
    } else { // or just add the line
      this_path.attr('d', plot.line(args.data[which_line]))
        .attr('clip-path', 'url(#mg-plot-window-' + mg_target_ref(args.target) + ')');
    }
  }

  function mg_add_line(args, plot, svg, existing_line, which_line, line_id) {
    if (!existing_line.empty()) {
      svg.node().appendChild(existing_line.node());

      var lineTransition = existing_line.transition()
        .duration(plot.update_transition_duration);

      if (!plot.display_area && args.transition_on_update && !args.missing_is_hidden) {
        lineTransition.attrTween('d', path_tween(plot.line(args.data[which_line]), 4));
      } else {
        lineTransition.attr('d', plot.line(args.data[which_line]));
      }
    } else { // otherwise...
      // if we're animating on load, animate the line from its median value
      var this_path = svg.append('path')
        .attr('class', 'mg-main-line mg-line' + line_id);

      mg_color_line(args, this_path, which_line, line_id);
      mg_add_line_element(args, plot, this_path, which_line);
    }
  }

  function mg_add_legend_element(args, plot, which_line, line_id) {
    var this_legend;
    if (args.legend) {
      if (is_array(args.legend)) {
        this_legend = args.legend[which_line];
      } else if (is_function(args.legend)) {
        this_legend = args.legend(args.data[which_line]);
      }

      if (args.legend_target) {
        if (args.colors && args.colors.constructor === Array) {
          plot.legend_text = "<span style='color:" + args.colors[which_line] + "'>&mdash; " +
            this_legend + '&nbsp; </span>' + plot.legend_text;
        } else {
          plot.legend_text = "<span class='mg-line" + line_id + "-legend-color'>&mdash; " +
            this_legend + '&nbsp; </span>' + plot.legend_text;
        }
      } else {
        var anchor_point, anchor_orientation, dx;
        if (args.y_axis_position === 'left') {
          anchor_point = args.data[which_line][args.data[which_line].length - 1];
          anchor_orientation = 'start';
          dx = args.buffer;
        } else {
          anchor_point = args.data[which_line][0];
          anchor_orientation = 'end';
          dx = -args.buffer;
        }
        var legend_text = plot.legend_group.append('svg:text')
          .attr('x', args.scalefns.xf(anchor_point))
          .attr('dx', dx)
          .attr('y', args.scalefns.yf(anchor_point))
          .attr('dy', '.35em')
          .attr('font-size', 10)
          .attr('text-anchor', anchor_orientation)
          .attr('font-weight', '300')
          .text(this_legend);

        if (args.colors && args.colors.constructor === Array) {
          if (args.colors.length < which_line + 1) {
            legend_text.classed('mg-line' + (line_id) + '-legend-color', true);
          } else {
            legend_text.attr('fill', args.colors[which_line]);
          }
        } else {
          legend_text.classed('mg-line' + (line_id) + '-legend-color', true);
        }

        mg_prevent_vertical_overlap(plot.legend_group.selectAll('.mg-line-legend text').nodes(), args);
      }
    }
  }

  function mg_plot_legend_if_legend_target(target, legend) {
    if (target) {
      d3.select(target).html(legend);
    }
  }

  function mg_add_legend_group(args, plot, svg) {
    if (args.legend) plot.legend_group = mg_add_g(svg, 'mg-line-legend');
  }

  function mg_remove_existing_line_rollover_elements(svg) {
    // remove the old rollovers if they already exist
    mg_selectAll_and_remove(svg, '.mg-rollover-rect');
    mg_selectAll_and_remove(svg, '.mg-voronoi');

    // remove the old rollover text and circle if they already exist
    mg_selectAll_and_remove(svg, '.mg-active-datapoint');
    mg_selectAll_and_remove(svg, '.mg-line-rollover-circle');
    //mg_selectAll_and_remove(svg, '.mg-active-datapoint-container');
  }

  function mg_add_rollover_circle(args, svg) {
    // append circle
    var circle = svg.selectAll('.mg-line-rollover-circle')
      .data(args.data)
      .enter().append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 0);

    if (args.colors && args.colors.constructor === Array) {
      circle
        .attr('class', function(d) {
          return 'mg-line' + d.line_id;
        })
        .attr('fill', function(d, i) {
          return args.colors[i];
        })
        .attr('stroke', function(d, i) {
          return args.colors[i];
        });
    } else {
      circle.attr('class', function(d, i) {
        return [
          'mg-line' + d.line_id,
          'mg-line' + d.line_id + '-color',
          'mg-area' + d.line_id + '-color'
        ].join(' ');
      });
    }
    circle.classed('mg-line-rollover-circle', true);
  }

  function mg_set_unique_line_id_for_each_series(args) {
    // update our data by setting a unique line id for each series
    // increment from 1... unless we have a custom increment series
    var line_id = 1;
    for (var i = 0; i < args.data.length; i++) {
      for (var j = 0; j < args.data[i].length; j++) {
        // if custom line-color map is set, use that instead of line_id
        if (args.custom_line_color_map.length > 0) {
          args.data[i][j].line_id = args.custom_line_color_map[i];
        } else {
          args.data[i][j].line_id = line_id;
        }
      }
      line_id++;
    }
  }

  function mg_nest_data_for_voronoi(args) {
    return d3.merge(args.data);
  }

  function mg_line_class_string(args) {
    return function(d) {
      var class_string;

      if (args.linked) {
        var v = d[args.x_accessor];
        var formatter = MG.time_format(args.utc_time, args.linked_format);

        // only format when x-axis is date
        var id = (typeof v === 'number') ? (d.line_id - 1) : formatter(v);
        class_string = 'roll_' + id + ' mg-line' + d.line_id;

        if (args.color === null) {
          class_string += ' mg-line' + d.line_id + '-color';
        }
        return class_string;

      } else {
        class_string = 'mg-line' + d.line_id;
        if (args.color === null) class_string += ' mg-line' + d.line_id + '-color';
        return class_string;
      }
    };
  }

  function mg_add_voronoi_rollover(args, svg, rollover_on, rollover_off, rollover_move) {
    var voronoi = d3.voronoi()
      .x(function(d) {
        return args.scales.X(d[args.x_accessor]).toFixed(2); })
      .y(function(d) {
        return args.scales.Y(d[args.y_accessor]).toFixed(2); })
      .extent([
        [args.buffer, args.buffer + args.title_y_position],
        [args.width - args.buffer, args.height - args.buffer]
      ]);

    var g = mg_add_g(svg, 'mg-voronoi');
    g.selectAll('path')
      .data(voronoi.polygons(mg_nest_data_for_voronoi(args)))
      .enter()
      .append('path')
      .filter(function(d) {
        return d !== undefined && d.length > 0; })
      .attr('d', function(d) {
        return d == null ? null : 'M' + d.join('L') + 'Z'; })
      .datum(function(d) {
        return d == null ? null : d.data; }) // because of d3.voronoi, reassign d
      .attr('class', mg_line_class_string(args))
      .on('mouseover', rollover_on)
      .on('mouseout', rollover_off)
      .on('mousemove', rollover_move);

    mg_configure_voronoi_rollover(args, svg);
  }

  function nest_data_for_aggregate_rollover(args) {
    var data_nested = d3.nest()
      .key(function(d) {
        return d[args.x_accessor]; })
      .entries(d3.merge(args.data));
    data_nested.forEach(function(entry) {
      var datum = entry.values[0];
      entry.key = datum[args.x_accessor];
    });

    if (args.x_sort) {
      return data_nested.sort(function(a, b) {
        return new Date(a.key) - new Date(b.key); });
    } else {
      return data_nested;
    }
  }

  function mg_add_aggregate_rollover(args, svg, rollover_on, rollover_off, rollover_move) {
    // Undo the keys getting coerced to strings, by setting the keys from the values
    // This is necessary for when we have X axis keys that are things like
    var data_nested = nest_data_for_aggregate_rollover(args);

    var xf = data_nested.map(function(di) {
      return args.scales.X(di.key);
    });

    var g = svg.append('g')
      .attr('class', 'mg-rollover-rect');

    g.selectAll('.mg-rollover-rects')
      .data(data_nested).enter()
      .append('rect')
      .attr('x', function(d, i) {
        if (xf.length === 1) return mg_get_plot_left(args);
        else if (i === 0) return xf[i].toFixed(2);
        else return ((xf[i - 1] + xf[i]) / 2).toFixed(2);
      })
      .attr('y', args.top)
      .attr('width', function(d, i) {
        if (xf.length === 1) return mg_get_plot_right(args);
        else if (i === 0) return ((xf[i + 1] - xf[i]) / 2).toFixed(2);
        else if (i === xf.length - 1) return ((xf[i] - xf[i - 1]) / 2).toFixed(2);
        else return ((xf[i + 1] - xf[i - 1]) / 2).toFixed(2);
      })
      .attr('class', function(d) {
        var line_classes = d.values.map(function(datum) {
          var lc = mg_line_class(datum.line_id);
          if (args.colors === null) lc += ' ' + mg_line_color_class(datum.line_id);
          return lc;
        }).join(' ');
        if (args.linked && d.values.length > 0) {
          line_classes += ' ' + mg_rollover_id_class(mg_rollover_format_id(d.values[0], 0, args));
        }

        return line_classes;
      })
      .attr('height', args.height - args.bottom - args.top - args.buffer)
      .attr('opacity', 0)
      .on('mouseover', rollover_on)
      .on('mouseout', rollover_off)
      .on('mousemove', rollover_move);

    mg_configure_aggregate_rollover(args, svg);
  }

  function mg_configure_singleton_rollover(args, svg) {
    svg.select('.mg-rollover-rect rect')
      .on('mouseover')(args.data[0][0], 0);
  }

  function mg_configure_voronoi_rollover(args, svg) {
    for (var i = 0; i < args.data.length; i++) {
      var j = i + 1;

      if (args.custom_line_color_map.length > 0 &&
        args.custom_line_color_map[i] !== undefined) {
        j = args.custom_line_color_map[i];
      }

      if (args.data[i].length === 1 && !svg.selectAll('.mg-voronoi .mg-line' + j).empty()) {
        svg.selectAll('.mg-voronoi .mg-line' + j)
          .on('mouseover')(args.data[i][0], 0);

        svg.selectAll('.mg-voronoi .mg-line' + j)
          .on('mouseout')(args.data[i][0], 0);
      }
    }
  }

  function mg_line_class(line_id) {
    return 'mg-line' + line_id;
  }

  function mg_line_color_class(line_id) {
    return 'mg-line' + line_id + '-color';
  }

  function mg_rollover_id_class(id) {
    return 'roll_' + id;
  }

  function mg_rollover_format_id(d, i, args) {
    var v = d[args.x_accessor];
    var formatter = MG.time_format(args.utc_time, args.linked_format);
    // only format when x-axis is date
    var id = (typeof v === 'number') ? i : formatter(v);
    return id;
  }

  function mg_add_single_line_rollover(args, svg, rollover_on, rollover_off, rollover_move) {
    // set to 1 unless we have a custom increment series
    var line_id = 1;
    if (args.custom_line_color_map.length > 0) {
      line_id = args.custom_line_color_map[0];
    }

    var g = svg.append('g')
      .attr('class', 'mg-rollover-rect');

    var xf = args.data[0].map(args.scalefns.xf);

    g.selectAll('.mg-rollover-rects')
      .data(args.data[0]).enter()
      .append('rect')
      .attr('class', function(d, i) {
        var cl = mg_line_color_class(line_id) + ' ' + mg_line_class(d.line_id);
        if (args.linked) cl += cl + ' ' + mg_rollover_id_class(mg_rollover_format_id(d, i, args));
        return cl;
      })
      .attr('x', function(d, i) {
        // if data set is of length 1
        if (xf.length === 1) return mg_get_plot_left(args);
        else if (i === 0) return xf[i].toFixed(2);
        else return ((xf[i - 1] + xf[i]) / 2).toFixed(2);
      })
      .attr('y', function(d, i) {
        return (args.data.length > 1) ? args.scalefns.yf(d) - 6 // multi-line chart sensitivity
          : args.top;
      })
      .attr('width', function(d, i) {
        // if data set is of length 1
        if (xf.length === 1) return mg_get_plot_right(args);
        else if (i === 0) return ((xf[i + 1] - xf[i]) / 2).toFixed(2);
        else if (i === xf.length - 1) return ((xf[i] - xf[i - 1]) / 2).toFixed(2);
        else return ((xf[i + 1] - xf[i - 1]) / 2).toFixed(2);
      })
      .attr('height', function(d, i) {
        return (args.data.length > 1) ? 12 // multi-line chart sensitivity
          : args.height - args.bottom - args.top - args.buffer;
      })
      .attr('opacity', 0)
      .on('mouseover', rollover_on)
      .on('mouseout', rollover_off)
      .on('mousemove', rollover_move);

    if (mg_is_singleton(args)) {
      mg_configure_singleton_rollover(args, svg);
    }
  }

  function mg_configure_aggregate_rollover(args, svg) {
    var rect = svg.selectAll('.mg-rollover-rect rect');
    if (args.data.filter(function(d) {
        return d.length === 1; }).length > 0) {
      rect.on('mouseover')(rect[0][0].__data__, 0);
    }
  }

  function mg_is_standard_multiline(args) {
    return args.data.length > 1 && !args.aggregate_rollover;
  }

  function mg_is_aggregated_rollover(args) {
    return args.data.length > 1 && args.aggregate_rollover;
  }

  function mg_is_singleton(args) {
    return args.data.length === 1 && args.data[0].length === 1;
  }

  function mg_draw_all_line_elements(args, plot, svg) {
    mg_remove_dangling_bands(plot, svg);

    for (var i = args.data.length - 1; i >= 0; i--) {
      var this_data = args.data[i];

      // passing the data for the current line
      MG.call_hook('line.before_each_series', [this_data, args]);

      // override increment if we have a custom increment series
      var line_id = i + 1;
      if (args.custom_line_color_map.length > 0) {
        line_id = args.custom_line_color_map[i];
      }

      args.data[i].line_id = line_id;

      if (this_data.length === 0) {
        continue;
      }
      var existing_line = svg.select('path.mg-main-line.mg-line' + (line_id));

      mg_add_confidence_band(args, plot, svg, line_id);
      mg_add_area(args, plot, svg, i, line_id);
      mg_add_line(args, plot, svg, existing_line, i, line_id);
      mg_add_legend_element(args, plot, i, line_id);

      // passing the data for the current line
      MG.call_hook('line.after_each_series', [this_data, existing_line, args]);
    }
  }

  function mg_remove_dangling_bands(plot, svg) {
    if (plot.existing_band[0] && plot.existing_band[0].length > svg.selectAll('.mg-main-line').node().length) {
      svg.selectAll('.mg-confidence-band').remove();
    }
  }

  function mg_line_main_plot(args) {
    var plot = {};
    var svg = mg_get_svg_child_of(args.target);

    // remove any old legends if they exist
    mg_selectAll_and_remove(svg, '.mg-line-legend');
    mg_add_legend_group(args, plot, svg);

    plot.data_median = 0;
    plot.update_transition_duration = (args.transition_on_update) ? 1000 : 0;
    plot.display_area = args.area && !args.use_data_y_min && args.data.length <= 1 && args.aggregate_rollover === false;
    plot.legend_text = '';
    mg_line_graph_generators(args, plot, svg);
    plot.existing_band = svg.selectAll('.mg-confidence-band').nodes();

    // should we continue with the default line render? A `line.all_series` hook should return false to prevent the default.
    var continueWithDefault = MG.call_hook('line.before_all_series', [args]);
    if (continueWithDefault !== false) {
      mg_draw_all_line_elements(args, plot, svg);
    }

    mg_plot_legend_if_legend_target(args.legend_target, plot.legend_text);
  }

  function mg_line_rollover_setup(args, graph) {
    var svg = mg_get_svg_child_of(args.target);

    if (svg.selectAll('.mg-active-datapoint-container').nodes().length === 0) {
      mg_add_g(svg, 'mg-active-datapoint-container');
    }

    mg_remove_existing_line_rollover_elements(svg);
    mg_add_rollover_circle(args, svg);
    mg_set_unique_line_id_for_each_series(args);

    if (mg_is_standard_multiline(args)) {
      mg_add_voronoi_rollover(args, svg, graph.rolloverOn(args), graph.rolloverOff(args), graph.rolloverMove(args));
    } else if (mg_is_aggregated_rollover(args)) {
      mg_add_aggregate_rollover(args, svg, graph.rolloverOn(args), graph.rolloverOff(args), graph.rolloverMove(args));
    } else {
      mg_add_single_line_rollover(args, svg, graph.rolloverOn(args), graph.rolloverOff(args), graph.rolloverMove(args));
    }
  }

  function mg_update_rollover_circle(args, svg, d) {
    if (args.aggregate_rollover && args.data.length > 1) {
      // hide the circles in case a non-contiguous series is present
      svg.selectAll('circle.mg-line-rollover-circle')
        .style('opacity', 0);

      d.values.forEach(function(datum) {
        if (mg_data_in_plot_bounds(datum, args)) mg_update_aggregate_rollover_circle(args, svg, datum);
      });
    } else if ((args.missing_is_hidden && d['_missing']) || d[args.y_accessor] === null) {
      // disable rollovers for hidden parts of the line
      // recall that hidden parts are missing data ranges and possibly also
      // data points that have been explicitly identified as missing
      return;
    } else {
      // show circle on mouse-overed rect
      if (mg_data_in_plot_bounds(d, args)) {
        mg_update_generic_rollover_circle(args, svg, d);
      }
    }
  }

  function mg_update_aggregate_rollover_circle(args, svg, datum) {
    svg.select('circle.mg-line-rollover-circle.mg-line' + datum.line_id)
      .attr('cx', args.scales.X(datum[args.x_accessor]).toFixed(2))
      .attr('cy', args.scales.Y(datum[args.y_accessor]).toFixed(2))
      .attr('r', args.point_size)
      .style('opacity', 1);
  }

  function mg_update_generic_rollover_circle(args, svg, d) {
    svg.selectAll('circle.mg-line-rollover-circle.mg-line' + d.line_id)
      .classed('mg-line-rollover-circle', true)
      .attr('cx', function() {
        return args.scales.X(d[args.x_accessor]).toFixed(2);
      })
      .attr('cy', function() {
        return args.scales.Y(d[args.y_accessor]).toFixed(2);
      })
      .attr('r', args.point_size)
      .style('opacity', 1);
  }

  function mg_trigger_linked_mouseovers(args, d, i) {
    if (args.linked && !MG.globals.link) {
      MG.globals.link = true;
      if (!args.aggregate_rollover || d.value !== undefined || d.values.length > 0) {
        var datum = d.values ? d.values[0] : d;
        var id = mg_rollover_format_id(datum, i, args);
        // trigger mouseover on matching line in .linked charts
        d3.selectAll('.' + mg_line_class(datum.line_id) + '.' + mg_rollover_id_class(id))
          .each(function(d) {
            d3.select(this)
              .on('mouseover')(d, i);
          });
      }
    }
  }

  function mg_trigger_linked_mouseouts(args, d, i) {
    if (args.linked && MG.globals.link) {
      MG.globals.link = false;

      var formatter = MG.time_format(args.utc_time, args.linked_format);
      var datums = d.values ? d.values : [d];
      datums.forEach(function(datum) {
        var v = datum[args.x_accessor];
        var id = (typeof v === 'number') ? i : formatter(v);

        // trigger mouseout on matching line in .linked charts
        d3.selectAll('.roll_' + id)
          .each(function(d) {
            d3.select(this)
              .on('mouseout')(d);
          });
      });
    }
  }

  function mg_remove_active_data_points_for_aggregate_rollover(args, svg) {
    svg.selectAll('circle.mg-line-rollover-circle').filter(function(circle) {
        return circle.length > 1;
      })
      .style('opacity', 0);
  }

  function mg_remove_active_data_points_for_generic_rollover(args, svg, d) {
    svg.selectAll('circle.mg-line-rollover-circle.mg-line' + d.line_id)
      .style('opacity', function() {
        var id = d.line_id - 1;

        if (args.custom_line_color_map.length > 0 &&
          args.custom_line_color_map.indexOf(d.line_id) !== undefined
        ) {
          id = args.custom_line_color_map.indexOf(d.line_id);
        }

        if (args.data[id].length === 1) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  function mg_remove_active_text(svg) {
    svg.select('.mg-active-datapoint').text('');
  }

  function lineChart(args) {
    this.init = function(args) {
      this.args = args;

      if (!args.data || args.data.length === 0) {
        args.internal_error = 'No data was supplied';
        internal_error(args);
        return this;
      } else {
        args.internal_error = undefined;
      }

      raw_data_transformation(args);
      process_line(args);

      MG.call_hook('line.before_destroy', this);

      init(args);

      // TODO incorporate markers into calculation of x scales
      new MG.scale_factory(args)
        .namespace('x')
        .numericalDomainFromData()
        .numericalRange('bottom')

      var baselines = (args.baselines || []).map(function(d) {
        return d[args.y_accessor];
      });

      new MG.scale_factory(args)
        .namespace('y')
        .zeroBottom(true)
        .inflateDomain(true)
        .numericalDomainFromData(baselines)
        .numericalRange('left');

      var svg = mg_get_svg_child_of(args.target);

      if (args.x_axis) {
        new MG.axis_factory(args)
          .namespace('x')
          .type('numerical')
          .position(args.x_axis_position)
          .rug(x_rug(args))
          .label(mg_add_x_label)
          .draw();
      }

      if (args.y_axis) {
        new MG.axis_factory(args)
          .namespace('y')
          .type('numerical')
          .position(args.y_axis_position)
          .rug(y_rug(args))
          .label(mg_add_y_label)
          .draw();
      }

      this.markers();
      this.mainPlot();
      this.rollover();
      this.windowListeners();

      MG.call_hook('line.after_init', this);

      return this;
    };

    this.mainPlot = function() {
      mg_line_main_plot(args);
      return this;
    };

    this.markers = function() {
      markers(args);
      return this;
    };

    this.rollover = function() {
      var that = this;
      mg_line_rollover_setup(args, that);
      MG.call_hook('line.after_rollover', args);

      return this;
    };

    this.rolloverOn = function(args) {
      var svg = mg_get_svg_child_of(args.target);
      var fmt = mg_get_rollover_time_format(args);

      return function(d, i) {
        mg_update_rollover_circle(args, svg, d);
        mg_trigger_linked_mouseovers(args, d, i);

        svg.selectAll('text')
          .filter(function(g, j) {
            return d === g;
          })
          .attr('opacity', 0.3);

        // update rollover text except for missing data points
        if (args.show_rollover_text &&
            !((args.missing_is_hidden && d['_missing']) || d[args.y_accessor] === null)
          ) {
          var mouseover = mg_mouseover_text(args, { svg: svg });
          var row = mouseover.mouseover_row();
          if (args.aggregate_rollover) {
            row.text((args.aggregate_rollover && args.data.length > 1
              ? mg_format_x_aggregate_mouseover
              : mg_format_x_mouseover)(args, d));
          }

          var pts = args.aggregate_rollover && args.data.length > 1
            ? d.values
            : [d];

          pts.forEach(function(di) {
            if (args.aggregate_rollover) {
              row = mouseover.mouseover_row();
            }

            if (args.legend) {
              mg_line_color_text(row.text(args.legend[di.line_id - 1] + '  ').bold().elem(), di, args);
            }

            mg_line_color_text(row.text('\u2014  ').elem(), di, args);
            if (!args.aggregate_rollover) {
              row.text(mg_format_x_mouseover(args, di));
            }

            row.text(mg_format_y_mouseover(args, di, args.time_series === false));
          })
        }

        if (args.mouseover) {
          args.mouseover(d, i);
        }
      };
    };

    this.rolloverOff = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        mg_trigger_linked_mouseouts(args, d, i);
        if (args.aggregate_rollover) {
          mg_remove_active_data_points_for_aggregate_rollover(args, svg);
        } else {
          mg_remove_active_data_points_for_generic_rollover(args, svg, d);
        }

        if (args.data[0].length > 1) {
          mg_clear_mouseover_container(svg);
        }

        if (args.mouseout) {
          args.mouseout(d, i);
        }
      };
    };

    this.rolloverMove = function(args) {
      return function(d, i) {
        if (args.mousemove) {
          args.mousemove(d, i);
        }
      };
    };

    this.windowListeners = function() {
      mg_window_listeners(this.args);
      return this;
    };

    this.init(args);
  }

  MG.register('line', lineChart);
}).call(this);

(function() {
  'use strict';

  function histogram(args) {
    this.init = function(args) {
      this.args = args;

      raw_data_transformation(args);
      process_histogram(args);
      init(args);

      new MG.scale_factory(args)
        .namespace('x')
        .numericalDomainFromData()
        .numericalRange('bottom');

      var baselines = (args.baselines || []).map(function(d) {
        return d[args.y_accessor]
      });

      new MG.scale_factory(args)
        .namespace('y')
        .zeroBottom(true)
        .inflateDomain(true)
        .numericalDomainFromData(baselines)
        .numericalRange('left');

      x_axis(args);
      y_axis(args);

      this.mainPlot();
      this.markers();
      this.rollover();
      this.windowListeners();

      return this;
    };

    this.mainPlot = function() {
      var svg = mg_get_svg_child_of(args.target);

      //remove the old histogram, add new one
      svg.selectAll('.mg-histogram').remove();

      var g = svg.append('g')
        .attr('class', 'mg-histogram');

      var bar = g.selectAll('.mg-bar')
        .data(args.data[0])
        .enter().append('g')
        .attr('class', 'mg-bar')
        .attr('transform', function(d) {
          return "translate(" + args.scales.X(d[args.x_accessor]).toFixed(2) + "," + args.scales.Y(d[args.y_accessor]).toFixed(2) + ")";
        });

      //draw bars
      bar.append('rect')
        .attr('x', 1)
        .attr('width', function(d, i) {
          if (args.data[0].length === 1) {
            return (args.scalefns.xf(args.data[0][0]) - args.bar_margin).toFixed(0);
          } else if (i !== args.data[0].length - 1) {
            return (args.scalefns.xf(args.data[0][i + 1]) - args.scalefns.xf(d)).toFixed(0);
          } else {
            return (args.scalefns.xf(args.data[0][1]) - args.scalefns.xf(args.data[0][0])).toFixed(0);
          }
        })
        .attr('height', function(d) {
          if (d[args.y_accessor] === 0) {
            return 0;
          }

          return (args.height - args.bottom - args.buffer - args.scales.Y(d[args.y_accessor])).toFixed(2);
        });

      return this;
    };

    this.markers = function() {
      markers(args);
      return this;
    };

    this.rollover = function() {
      var svg = mg_get_svg_child_of(args.target);

      if (svg.selectAll('.mg-active-datapoint-container').nodes().length === 0) {
        mg_add_g(svg, 'mg-active-datapoint-container');
      }

      //remove the old rollovers if they already exist
      svg.selectAll('.mg-rollover-rect').remove();
      svg.selectAll('.mg-active-datapoint').remove();

      var g = svg.append('g')
        .attr('class', 'mg-rollover-rect');

      //draw rollover bars
      var bar = g.selectAll('.mg-bar')
        .data(args.data[0])
        .enter().append('g')
        .attr('class', function(d, i) {
          if (args.linked) {
            return 'mg-rollover-rects roll_' + i;
          } else {
            return 'mg-rollover-rects';
          }
        })
        .attr('transform', function(d) {
          return "translate(" + (args.scales.X(d[args.x_accessor])) + "," + 0 + ")";
        });

      bar.append('rect')
        .attr('x', 1)
        .attr('y', args.buffer + args.title_y_position)
        .attr('width', function(d, i) {
          //if data set is of length 1
          if (args.data[0].length === 1) {
            return (args.scalefns.xf(args.data[0][0]) - args.bar_margin).toFixed(0);
          } else if (i !== args.data[0].length - 1) {
            return (args.scalefns.xf(args.data[0][i + 1]) - args.scalefns.xf(d)).toFixed(0);
          } else {
            return (args.scalefns.xf(args.data[0][1]) - args.scalefns.xf(args.data[0][0])).toFixed(0);
          }
        })
        .attr('height', function(d) {
          return args.height;
        })
        .attr('opacity', 0)
        .on('mouseover', this.rolloverOn(args))
        .on('mouseout', this.rolloverOff(args))
        .on('mousemove', this.rolloverMove(args));

      return this;
    };

    this.rolloverOn = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        svg.selectAll('text')
          .filter(function(g, j) {
            return d === g;
          })
          .attr('opacity', 0.3);

        var fmt = args.processed.xax_format || MG.time_format(args.utc_time, '%b %e, %Y');
        var num = format_rollover_number(args);

        svg.selectAll('.mg-bar rect')
          .filter(function(d, j) {
            return j === i;
          })
          .classed('active', true);

        //trigger mouseover on all matching bars
        if (args.linked && !MG.globals.link) {
          MG.globals.link = true;

          //trigger mouseover on matching bars in .linked charts
          d3.selectAll('.mg-rollover-rects.roll_' + i + ' rect')
            .each(function(d) { //use existing i
              d3.select(this).on('mouseover')(d, i);
            });
        }

        //update rollover text
        if (args.show_rollover_text) {
          var mo = mg_mouseover_text(args, { svg: svg });
          var row = mo.mouseover_row();
          row.text('\u259F  ').elem()
            .classed('hist-symbol', true);

          row.text(mg_format_x_mouseover(args, d)); // x
          row.text(mg_format_y_mouseover(args, d, args.time_series === false));
        }

        if (args.mouseover) {
          mg_setup_mouseover_container(svg, args);
          args.mouseover(d, i);
        }
      };
    };

    this.rolloverOff = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        if (args.linked && MG.globals.link) {
          MG.globals.link = false;

          //trigger mouseout on matching bars in .linked charts
          d3.selectAll('.mg-rollover-rects.roll_' + i + ' rect')
            .each(function(d) { //use existing i
              d3.select(this).on('mouseout')(d, i);
            });
        }

        //reset active bar
        svg.selectAll('.mg-bar rect')
          .classed('active', false);

        //reset active data point text
        mg_clear_mouseover_container(svg);

        if (args.mouseout) {
          args.mouseout(d, i);
        }
      };
    };

    this.rolloverMove = function(args) {
      return function(d, i) {
        if (args.mousemove) {
          args.mousemove(d, i);
        }
      };
    };

    this.windowListeners = function() {
      mg_window_listeners(this.args);
      return this;
    };

    this.init(args);
  }

  var defaults = {
    binned: false,
    bins: null,
    processed_x_accessor: 'x',
    processed_y_accessor: 'y',
    processed_dx_accessor: 'dx',
    bar_margin: 1
  };

  MG.register('histogram', histogram, defaults);
}).call(this);

function point_mouseover(args, svg, d) {
  var mouseover = mg_mouseover_text(args, { svg: svg });
  var row = mouseover.mouseover_row();

  if (args.color_accessor !== null && args.color_type === 'category') {
    var label = d[args.color_accessor];
    row.text(label + '  ').bold().elem().attr('fill', args.scalefns.colorf(d));
  }

  mg_color_point_mouseover(args, row.text('\u25CF   ').elem(), d); // point shape

  row.text(mg_format_x_mouseover(args, d)); // x
  row.text(mg_format_y_mouseover(args, d, args.time_series === false));
}

function mg_color_point_mouseover(args, elem, d) {
  if (args.color_accessor !== null) {
    elem.attr('fill', args.scalefns.colorf(d));
    elem.attr('stroke', args.scalefns.colorf(d));
  } else {
    elem.classed('mg-points-mono', true);
  }
}


(function() {
  'use strict';

  function mg_filter_out_plot_bounds(data, args) {
    // max_x, min_x, max_y, min_y;
    var x = args.x_accessor;
    var y = args.y_accessor;
    var new_data = data.filter(function(d) {
      return (args.min_x === null || d[x] >= args.min_x) &&
        (args.max_x === null || d[x] <= args.max_x) &&
        (args.min_y === null || d[y] >= args.min_y) &&
        (args.max_y === null || d[y] <= args.max_y);
    })
    return new_data;
  }

  function pointChart(args) {
    this.init = function(args) {
      this.args = args;

      // infer y_axis and x_axis type;
      args.x_axis_type = mg_infer_type(args, 'x');
      args.y_axis_type = mg_infer_type(args, 'y');

      raw_data_transformation(args);

      process_point(args);
      init(args);

      var xMaker, yMaker;

      if (args.x_axis_type === 'categorical') {
        xMaker = MG.scale_factory(args)
          .namespace('x')
          .categoricalDomainFromData()
          .categoricalRangeBands([0, args.xgroup_height], args.xgroup_accessor === null);

        if (args.xgroup_accessor) {
          new MG.scale_factory(args)
            .namespace('xgroup')
            .categoricalDomainFromData()
            .categoricalRangeBands('bottom');

        } else {
          args.scales.XGROUP = function(d) {
            return mg_get_plot_left(args) };
          args.scalefns.xgroupf = function(d) {
            return mg_get_plot_left(args) };
        }

        args.scalefns.xoutf = function(d) {
          return args.scalefns.xf(d) + args.scalefns.xgroupf(d)
        };
      } else {
        xMaker = MG.scale_factory(args)
          .namespace('x')
          .inflateDomain(true)
          .zeroBottom(args.y_axis_type === 'categorical')
          .numericalDomainFromData((args.baselines || []).map(function(d) {
            return d[args.x_accessor] }))
          .numericalRange('bottom');

        args.scalefns.xoutf = args.scalefns.xf;
      }

      // y-scale generation. This needs to get simplified.
      if (args.y_axis_type === 'categorical') {
        yMaker = MG.scale_factory(args)
          .namespace('y')
          .zeroBottom(true)
          .categoricalDomainFromData()
          .categoricalRangeBands([0, args.ygroup_height], true);

        if (args.ygroup_accessor) {

          new MG.scale_factory(args)
            .namespace('ygroup')
            .categoricalDomainFromData()
            .categoricalRangeBands('left');

        } else {
          args.scales.YGROUP = function() {
            return mg_get_plot_top(args) };
          args.scalefns.ygroupf = function(d) {
            return mg_get_plot_top(args) };

        }
        args.scalefns.youtf = function(d) {
          return args.scalefns.yf(d) + args.scalefns.ygroupf(d) };

      } else {
        var baselines = (args.baselines || []).map(function(d) {
          return d[args.y_accessor] });
        yMaker = MG.scale_factory(args)
          .namespace('y')
          .inflateDomain(true)
          .zeroBottom(args.x_axis_type === 'categorical')
          .numericalDomainFromData(baselines)
          .numericalRange('left');

        args.scalefns.youtf = function(d) {
          return args.scalefns.yf(d) };
      }

      /////// COLOR accessor
      if (args.color_accessor !== null) {
        var colorScale = MG.scale_factory(args).namespace('color');
        if (args.color_type === 'number') {
          // do the color scale.
          // etiher get color range, or what.
          colorScale
            .numericalDomainFromData(mg_get_color_domain(args))
            .numericalRange(mg_get_color_range(args))
            .clamp(true);
        } else {
          if (args.color_domain) {
            colorScale
              .categoricalDomain(args.color_domain)
              .categoricalRange(args.color_range);
          } else {
            colorScale
              .categoricalDomainFromData()
              .categoricalColorRange();
          }
        }
      }

      if (args.size_accessor) {
        new MG.scale_factory(args).namespace('size')
          .numericalDomainFromData()
          .numericalRange(mg_get_size_range(args))
          .clamp(true);
      }

      new MG.axis_factory(args)
        .namespace('x')
        .type(args.x_axis_type)
        .zeroLine(args.y_axis_type === 'categorical')
        .position(args.x_axis_position)
        .rug(x_rug(args))
        .draw();

      new MG.axis_factory(args)
        .namespace('y')
        .type(args.y_axis_type)
        .zeroLine(args.x_axis_type === 'categorical')
        .position(args.y_axis_position)
        .rug(y_rug(args))
        .draw();

      this.mainPlot();
      this.markers();
      this.rollover();
      this.windowListeners();

      return this;
    };

    this.markers = function() {
      markers(args);
      if (args.least_squares) {
        add_ls(args);
      }

      return this;
    };

    this.mainPlot = function() {
      var svg = mg_get_svg_child_of(args.target);
      var g;

      var data = mg_filter_out_plot_bounds(args.data[0], args);
      //remove the old points, add new one
      svg.selectAll('.mg-points').remove();

      g = svg.append('g')
        .classed('mg-points', true);


      var pts = g.selectAll('circle')
        .data(data)
        .enter().append('circle')
        .attr('class', function(d, i) {
          return 'path-' + i;
        })
        .attr('cx', args.scalefns.xoutf)
        .attr('cy', function(d) {
          return args.scalefns.youtf(d);
        });

      //are we coloring our points, or just using the default color?
      if (args.color_accessor !== null) {
        pts.attr('fill', args.scalefns.colorf);
        pts.attr('stroke', args.scalefns.colorf);
      } else {
        pts.classed('mg-points-mono', true);
      }

      if (args.size_accessor !== null) {
        pts.attr('r', args.scalefns.sizef);
      } else {
        pts.attr('r', args.point_size);
      }

      return this;
    };

    this.rollover = function() {
      var svg = mg_get_svg_child_of(args.target);

      if (svg.selectAll('.mg-active-datapoint-container').nodes().length === 0) {
        mg_add_g(svg, 'mg-active-datapoint-container');
      }

      //remove the old rollovers if they already exist
      svg.selectAll('.mg-voronoi').remove();

      //add rollover paths
      var voronoi = d3.voronoi()
        .x(args.scalefns.xoutf)
        .y(args.scalefns.youtf)
        .extent([
          [args.buffer, args.buffer + args.title_y_position],
          [args.width - args.buffer, args.height - args.buffer]
        ]);

      var paths = svg.append('g')
        .attr('class', 'mg-voronoi');

      paths.selectAll('path')
        .data(voronoi.polygons(mg_filter_out_plot_bounds(args.data[0], args)))
        .enter().append('path')
        .attr('d', function(d) {
          return d == null ? null : 'M' + d.join(',') + 'Z'; })
        .attr('class', function(d, i) {
          return 'path-' + i;
        })
        .style('fill-opacity', 0)
        .on('mouseover', this.rolloverOn(args))
        .on('mouseout', this.rolloverOff(args))
        .on('mousemove', this.rolloverMove(args));

      if (args.data[0].length === 1) {
        point_mouseover(args, svg, args.data[0][0]);
      }

      return this;
    };

    this.rolloverOn = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        svg.selectAll('.mg-points circle')
          .classed('selected', false);

        //highlight active point
        var pts = svg.selectAll('.mg-points circle.path-' + i)
          .classed('selected', true);

        if (args.size_accessor) {
          pts.attr('r', function(di) {
            return args.scalefns.sizef(di) + args.active_point_size_increase;
          });
        } else {
          pts.attr('r', args.point_size + args.active_point_size_increase);
        }

        //trigger mouseover on all points for this class name in .linked charts
        if (args.linked && !MG.globals.link) {
          MG.globals.link = true;

          //trigger mouseover on matching point in .linked charts
          d3.selectAll('.mg-voronoi .path-' + i)
            .each(function() {
              d3.select(this).on('mouseover')(d, i);
            });
        }

        if (args.show_rollover_text) {
          point_mouseover(args, svg, d.data);
        }

        if (args.mouseover) {
          args.mouseover(d, i);
        }
      };
    };

    this.rolloverOff = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        if (args.linked && MG.globals.link) {
          MG.globals.link = false;

          d3.selectAll('.mg-voronoi .path-' + i)
            .each(function() {
              d3.select(this).on('mouseout')(d, i);
            });
        }

        //reset active point
        var pts = svg.selectAll('.mg-points circle')
          .classed('unselected', false)
          .classed('selected', false);

        if (args.size_accessor) {
          pts.attr('r', args.scalefns.sizef);
        } else {
          pts.attr('r', args.point_size);
        }

        //reset active data point text
        if (args.data[0].length > 1) mg_clear_mouseover_container(svg);

        if (args.mouseout) {
          args.mouseout(d, i);
        }
      };
    };

    this.rolloverMove = function(args) {
      return function(d, i) {
        if (args.mousemove) {
          args.mousemove(d, i);
        }
      };
    };

    this.update = function(args) {
      return this;
    };

    this.windowListeners = function() {
      mg_window_listeners(this.args);
      return this;
    };

    this.init(args);
  }

  var defaults = {
    y_padding_percentage: 0.05, // for categorical scales
    y_outer_padding_percentage: .2, // for categorical scales
    ygroup_padding_percentage: 0, // for categorical scales
    ygroup_outer_padding_percentage: 0, // for categorical scales
    x_padding_percentage: 0.05, // for categorical scales
    x_outer_padding_percentage: .2, // for categorical scales
    xgroup_padding_percentage: 0, // for categorical scales
    xgroup_outer_padding_percentage: 0, // for categorical scales
    y_categorical_show_guides: true,
    x_categorical_show_guides: true,
    buffer: 16,
    ls: false,
    lowess: false,
    point_size: 2.5,
    label_accessor: null,
    size_accessor: null,
    color_accessor: null,
    size_range: null, // when we set a size_accessor option, this array determines the size range, e.g. [1,5]
    color_range: null, // e.g. ['blue', 'red'] to color different groups of points
    size_domain: null,
    color_domain: null,
    active_point_size_increase: 1,
    color_type: 'number' // can be either 'number' - the color scale is quantitative - or 'category' - the color scale is qualitative.
  };

  MG.register('point', pointChart, defaults);
}).call(this);

(function() {
  'use strict';

  // TODO add styles to stylesheet instead
  function scaffold(args) {
    var svg = mg_get_svg_child_of(args.target);
    // main margins
    svg.append('line')
      .attr('x1', 0)
      .attr('x2', args.width)
      .attr('y1', args.top)
      .attr('y2', args.top)
      .attr('stroke', 'black');
    svg.append('line')
      .attr('x1', 0)
      .attr('x2', args.width)
      .attr('y1', args.height-args.bottom)
      .attr('y2', args.height-args.bottom)
      .attr('stroke', 'black');

    svg.append('line')
      .attr('x1', args.left)
      .attr('x2', args.left)
      .attr('y1', 0)
      .attr('y2', args.height)
      .attr('stroke', 'black');

    svg.append('line')
      .attr('x1', args.width-args.right)
      .attr('x2', args.width-args.right)
      .attr('y1', 0)
      .attr('y2', args.height)
      .attr('stroke', 'black');

    // plot area margins
    svg.append('line')
      .attr('x1', 0)
      .attr('x2', args.width)
      .attr('y1', args.height-args.bottom-args.buffer)
      .attr('y2', args.height-args.bottom-args.buffer)
      .attr('stroke', 'gray');

    svg.append('line')
      .attr('x1', 0)
      .attr('x2', args.width)
      .attr('y1', args.top+args.buffer)
      .attr('y2', args.top+args.buffer)
      .attr('stroke', 'gray');

    svg.append('line')
      .attr('x1', args.left + args.buffer)
      .attr('x2', args.left + args.buffer)
      .attr('y1', 0)
      .attr('y2', args.height)
      .attr('stroke', 'gray');
    svg.append('line')
      .attr('x1', args.width -args.right - args.buffer)
      .attr('x2', args.width -args.right - args.buffer)
      .attr('y1', 0)
      .attr('y2', args.height)
      .attr('stroke', 'gray');
  }

  // barchart re-write.
  function mg_targeted_legend(args) {
    var plot = '';
    if (args.legend_target) {

      var div = d3.select(args.legend_target).append('div').classed('mg-bar-target-legend', true);
      var labels = args.categorical_variables;
      labels.forEach(function(label) {
        var outer_span = div.append('span').classed('mg-bar-target-element', true);
        outer_span.append('span')
          .classed('mg-bar-target-legend-shape', true)
          .style('color', args.scales.colorf(label))
          .text('\u25FC ');
        outer_span.append('span')
          .classed('mg-bar-target-legend-text', true)
          .text(label)

      });
    }
  }

  function legend_on_graph(svg, args) {
    // draw each element at the top right
    // get labels
    var labels = args.scales.Y.domain();
    var lineCount = 0;
    var lineHeight = 1.1;
    var g = svg.append('g').classed("mg-bar-legend", true);
    var textContainer = g.append('text');
    textContainer
      .selectAll('*')
      .remove();
    textContainer
      .attr('width', args.right)
      .attr('height', 100)
      .attr('text-anchor', 'start');

    labels.forEach(function(label) {
      var sub_container = textContainer.append('tspan')
        .attr('x', mg_get_plot_right(args))
        .attr('y', args.height / 2)
        .attr('dy', (lineCount * lineHeight) + 'em');
      sub_container.append('tspan')
        .text('\u25a0 ')
        .attr('fill', args.scales.COLOR(label))
        .attr('font-size', 20)
      sub_container.append('tspan')
        .text(label)
        .attr('font-weight', 300)
        .attr('font-size', 10);
      lineCount++;

    })

    // d.values.forEach(function (datum) {
    //   formatted_y = mg_format_y_rollover(args, num, datum);

    //   if (args.y_rollover_format !== null) {
    //     formatted_y = number_rollover_format(args.y_rollover_format, datum, args.y_accessor);
    //   } else {
    //     formatted_y = args.yax_units + num(datum[args.y_accessor]);
    //   }

    //   sub_container = textContainer.append('tspan').attr('x', 0).attr('y', (lineCount * lineHeight) + 'em');
    //   formatted_y = mg_format_y_rollover(args, num, datum);
    //   mouseover_tspan(sub_container, '\u2014  ')
    //     .color(args, datum);
    //   mouseover_tspan(sub_container, formatted_x + ' ' + formatted_y);

    //   lineCount++;
    // });
  }

  function barChart(args) {
    this.args = args;

    this.init = function(args) {
      this.args = args;
      args.x_axis_type = mg_infer_type(args, 'x');
      args.y_axis_type = mg_infer_type(args, 'y');

      // this is specific to how rects work in svg, let's keep track of the bar orientation to
      // plot appropriately.
      if (args.x_axis_type == 'categorical') {
        args.orientation = 'vertical';
      } else if (args.y_axis_type == 'categorical') {
        args.orientation = 'horizontal';
      } else if (args.x_axis_type != 'categorical' && args.y_axis_type != 'categorical') {
        // histogram.
        args.orientation = 'vertical';
      }

      raw_data_transformation(args);

      process_point(args);
      init(args);

      var xMaker, yMaker;

      if (args.x_axis_type === 'categorical') {
        xMaker = MG.scale_factory(args)
          .namespace('x')
          .categoricalDomainFromData()
          .categoricalRangeBands([0, args.xgroup_height], args.xgroup_accessor === null);

        if (args.xgroup_accessor) {
          new MG.scale_factory(args)
            .namespace('xgroup')
            .categoricalDomainFromData()
            .categoricalRangeBands('bottom');

        } else {
          args.scales.XGROUP = function(d) {
            return mg_get_plot_left(args) };
          args.scalefns.xgroupf = function(d) {
            return mg_get_plot_left(args) };
        }

        args.scalefns.xoutf = function(d) {
          return args.scalefns.xf(d) + args.scalefns.xgroupf(d)
        };
      } else {
        xMaker = MG.scale_factory(args)
          .namespace('x')
          .inflateDomain(true)
          .zeroBottom(args.y_axis_type === 'categorical')
          .numericalDomainFromData((args.baselines || []).map(function(d) {
            return d[args.x_accessor] }))
          .numericalRange('bottom');

        args.scalefns.xoutf = args.scalefns.xf;
      }

      // y-scale generation. This needs to get simplified.
      if (args.y_axis_type === 'categorical') {
        yMaker = MG.scale_factory(args)
          .namespace('y')
          .zeroBottom(true)
          .categoricalDomainFromData()
          .categoricalRangeBands([0, args.ygroup_height], true);

        if (args.ygroup_accessor) {

          new MG.scale_factory(args)
            .namespace('ygroup')
            .categoricalDomainFromData()
            .categoricalRangeBands('left');

        } else {
          args.scales.YGROUP = function() {
            return mg_get_plot_top(args) };
          args.scalefns.ygroupf = function(d) {
            return mg_get_plot_top(args) };

        }
        args.scalefns.youtf = function(d) {
          return args.scalefns.yf(d) + args.scalefns.ygroupf(d) };

      } else {
        var baselines = (args.baselines || []).map(function(d) {
          return d[args.y_accessor] });

        yMaker = MG.scale_factory(args)
          .namespace('y')
          .inflateDomain(true)
          .zeroBottom(args.x_axis_type === 'categorical')
          .numericalDomainFromData(baselines)
          .numericalRange('left');

        args.scalefns.youtf = function(d) {
          return args.scalefns.yf(d) };
      }

      if (args.ygroup_accessor !== null) {
        args.ycolor_accessor = args.y_accessor;
        MG.scale_factory(args)
          .namespace('ycolor')
          .scaleName('color')
          .categoricalDomainFromData()
          .categoricalColorRange();
      }

      if (args.xgroup_accessor !== null) {
        args.xcolor_accessor = args.x_accessor;
        MG.scale_factory(args)
          .namespace('xcolor')
          .scaleName('color')
          .categoricalDomainFromData()
          .categoricalColorRange();
      }

      // if (args.ygroup_accessor !== null) {
      //   MG.scale_factory(args)
      //     .namespace('ygroup')
      //     .categoricalDomainFromData()
      //     .categoricalColorRange();
      // }

      new MG.axis_factory(args)
        .namespace('x')
        .type(args.x_axis_type)
        .zeroLine(args.y_axis_type === 'categorical')
        .position(args.x_axis_position)
        .draw();

      new MG.axis_factory(args)
        .namespace('y')
        .type(args.y_axis_type)
        .zeroLine(args.x_axis_type === 'categorical')
        .position(args.y_axis_position)
        .draw();

      //mg_categorical_group_color_scale(args);

      this.mainPlot();
      this.markers();
      this.rollover();
      this.windowListeners();
      //scaffold(args)

      return this;
    };

    this.mainPlot = function() {
      var svg = mg_get_svg_child_of(args.target);
      var data = args.data[0];
      var barplot = svg.select('g.mg-barplot');
      var fresh_render = barplot.empty();

      var bars;
      var predictor_bars;
      var pp, pp0;
      var baseline_marks;

      var perform_load_animation = fresh_render && args.animate_on_load;
      var should_transition = perform_load_animation || args.transition_on_update;
      var transition_duration = args.transition_duration || 1000;

      // draw the plot on first render
      if (fresh_render) {
        barplot = svg.append('g')
          .classed('mg-barplot', true);
      }

      bars = barplot.selectAll('.mg-bar')
        .data(data)
        .enter()
        .append('rect')
          .classed('mg-bar', true)
          .classed('default-bar', args.scales.hasOwnProperty('COLOR') ? false : true);

      // TODO - reimplement
      // if (args.predictor_accessor) {
      //   predictor_bars = barplot.selectAll('.mg-bar-prediction')
      //     .data(data.filter(function(d) {
      //       return d.hasOwnProperty(args.predictor_accessor) }));

      //   predictor_bars.exit().remove();

      //   predictor_bars.enter().append('rect')
      //     .classed('mg-bar-prediction', true);
      // }

      // if (args.baseline_accessor) {
      //   baseline_marks = barplot.selectAll('.mg-bar-baseline')
      //     .data(data.filter(function(d) {
      //       return d.hasOwnProperty(args.baseline_accessor) }));

      //   baseline_marks.exit().remove();

      //   baseline_marks.enter().append('line')
      //     .classed('mg-bar-baseline', true);
      // }

      var appropriate_size;

      // setup transitions
      // if (should_transition) {
      //   bars = bars.transition()
      //     .duration(transition_duration);

      //   if (predictor_bars) {
      //     predictor_bars = predictor_bars.transition()
      //       .duration(transition_duration);
      //   }

      //   if (baseline_marks) {
      //     baseline_marks = baseline_marks.transition()
      //       .duration(transition_duration);
      //   }
      // }

      //appropriate_size = args.scales.Y_ingroup.rangeBand()/1.5;
      var length, width, length_type, width_type, length_coord, width_coord,
          length_scalefn, width_scalefn, length_scale, width_scale,
          length_accessor, width_accessor, length_coord_map, width_coord_map,
          length_map, width_map;

      if (args.orientation == 'vertical') {
        length = 'height';
        width = 'width';
        length_type = args.y_axis_type;
        width_type = args.x_axis_type;
        length_coord = 'y';
        width_coord = 'x';
        length_scalefn = length_type == 'categorical' ? args.scalefns.youtf : args.scalefns.yf;
        width_scalefn  = width_type == 'categorical' ? args.scalefns.xoutf : args.scalefns.xf;
        length_scale   = args.scales.Y;
        width_scale     = args.scales.X;
        length_accessor = args.y_accessor;
        width_accessor = args.x_accessor;

        length_coord_map = function(d) {
          var l;
          l = length_scalefn(d);
          if (d[length_accessor] < 0) {
            l = length_scale(0);
          }
          return l;
        }

        length_map = function(d) {
          return Math.abs(length_scalefn(d) - length_scale(0));
        }
      }

      if (args.orientation == 'horizontal') {
        length = 'width';
        width = 'height';
        length_type = args.x_axis_type;
        width_type = args.y_axis_type;
        length_coord = 'x';
        width_coord = 'y';
        length_scalefn = length_type == 'categorical' ? args.scalefns.xoutf : args.scalefns.xf;
        width_scalefn = width_type == 'categorical' ? args.scalefns.youtf : args.scalefns.yf;
        length_scale = args.scales.X;
        width_scale = args.scales.Y;
        length_accessor = args.x_accessor;
        width_accessor = args.y_accessor;

        length_coord_map = function(d) {
          var l;
          l = length_scale(0);
          return l;
        }

        length_map = function(d) {
          return Math.abs(length_scalefn(d) - length_scale(0));
        }
      }

      // if (perform_load_animation) {
      //   bars.attr(length, 0);

      //   if (predictor_bars) {
      //     predictor_bars.attr(length, 0);
      //   }

      //   // if (baseline_marks) {
      //   //   baseline_marks.attr({
      //   //     x1: args.scales.X(0),
      //   //     x2: args.scales.X(0)
      //   //   });
      //   // }
      // }

      bars.attr(length_coord, length_coord_map);

      // bars.attr(length_coord, 40)
      //bars.attr(width_coord, 70)

      bars.attr(width_coord, function(d) {
        var w;
        if (width_type == 'categorical') {
          w = width_scalefn(d);
        } else {
          w = width_scale(0);
          if (d[width_accessor] < 0) {
            w = width_scalefn(d);
          }
        }
        w = w - args.bar_thickness/2;
        return w;
      });

      if (args.scales.COLOR) {
        bars.attr('fill', args.scalefns.colorf)
      }

      bars
        .attr(length, length_map)
        .attr(width, function(d) {
          return args.bar_thickness;
        });

        //bars.attr(width_coord, );
        // bars.attr('width', 50);
        // bars.attr('height', 50);
        // bars.attr('y', function(d){
        //   var y = args.scales.Y(0);
        //   if (d[args.y_accessor] < 0) {
        //     y = args.scalefns.yf(d);
        //   }
        //   return y;
        // });

        // bars.attr('x', function(d){
        //   return 40;
        // })

        // bars.attr('width', function(d){
        //   return 100;
        // });

        // bars.attr('height', 100);

        // bars.attr('fill', 'black');
        // bars.attr('x', function(d) {
        //   var x = args.scales.X(0);
        //   if (d[args.x_accessor] < 0) {
        //     x = args.scalefns.xf(d);
        //   }
        //   return x;
        // })
        // TODO - reimplement.
        // if (args.predictor_accessor) {
        //   predictor_bars
        //     .attr('x', args.scales.X(0))
        //     .attr('y', function(d) {
        //       return args.scalefns.ygroupf(d) + args.scalefns.yf(d) + args.scales.Y.rangeBand() * (7 / 16) // + pp0 * appropriate_size/(pp*2) + appropriate_size / 2;
        //     })
        //     .attr('height', args.scales.Y.rangeBand() / 8) //appropriate_size / pp)
        //     .attr('width', function(d) {
        //       return args.scales.X(d[args.predictor_accessor]) - args.scales.X(0);
        //     });
        // }

      // TODO - reimplement.
      //   if (args.baseline_accessor) {

      //     baseline_marks
      //       .attr('x1', function(d) {
      //         return args.scales.X(d[args.baseline_accessor]); })
      //       .attr('x2', function(d) {
      //         return args.scales.X(d[args.baseline_accessor]); })
      //       .attr('y1', function(d) {
      //         return args.scalefns.ygroupf(d) + args.scalefns.yf(d) + args.scales.Y.rangeBand() / 4
      //       })
      //       .attr('y2', function(d) {
      //         return args.scalefns.ygroupf(d) + args.scalefns.yf(d) + args.scales.Y.rangeBand() * 3 / 4
      //       });
      //   }

      if (args.legend && args.ygroup_accessor && args.color_accessor !== false && args.ygroup_accessor !== args.color_accessor) {
        if (!args.legend_target) legend_on_graph(svg, args);
        else mg_targeted_legend(args);
      }
      return this;
    };

    this.markers = function() {
      markers(args);
      return this;
    };

    this.rollover = function() {
      var svg = mg_get_svg_child_of(args.target);
      var g;

      if (svg.selectAll('.mg-active-datapoint-container').nodes().length === 0) {
        mg_add_g(svg, 'mg-active-datapoint-container');
      }

      //remove the old rollovers if they already exist
      svg.selectAll('.mg-rollover-rect').remove();
      svg.selectAll('.mg-active-datapoint').remove();

      // get orientation
      var length, width, length_type, width_type, length_coord, width_coord,
        length_scalefn, width_scalefn, length_scale, width_scale,
        length_accessor, width_accessor;

      var length_coord_map, width_coord_map, length_map, width_map;

      if (args.orientation == 'vertical') {
        length = 'height';
        width = 'width';
        length_type = args.y_axis_type;
        width_type = args.x_axis_type;
        length_coord = 'y';
        width_coord = 'x';
        length_scalefn = length_type == 'categorical' ? args.scalefns.youtf : args.scalefns.yf;
        width_scalefn  = width_type == 'categorical' ? args.scalefns.xoutf : args.scalefns.xf;
        length_scale   = args.scales.Y;
        width_scale     = args.scales.X;
        length_accessor = args.y_accessor;
        width_accessor = args.x_accessor;

        length_coord_map = function(d){
          return mg_get_plot_top(args);
        }

        length_map = function(d) {
          return args.height -args.top-args.bottom-args.buffer*2
        }
      }

      if (args.orientation == 'horizontal') {
        length = 'width';
        width = 'height';
        length_type = args.x_axis_type;
        width_type = args.y_axis_type;
        length_coord = 'x';
        width_coord = 'y';
        length_scalefn = length_type == 'categorical' ? args.scalefns.xoutf : args.scalefns.xf;
        width_scalefn = width_type == 'categorical' ? args.scalefns.youtf : args.scalefns.yf;
        length_scale = args.scales.X;
        width_scale = args.scales.Y;
        length_accessor = args.x_accessor;
        width_accessor = args.y_accessor;

        length_coord_map = function(d){
          var l;
          l = length_scale(0);
          return l;
        }

        length_map = function(d) {
          return args.width -args.left-args.right-args.buffer*2
        }
      }

      //rollover text
      var rollover_x, rollover_anchor;
      if (args.rollover_align === 'right') {
        rollover_x = args.width - args.right;
        rollover_anchor = 'end';
      } else if (args.rollover_align === 'left') {
        rollover_x = args.left;
        rollover_anchor = 'start';
      } else {
        rollover_x = (args.width - args.left - args.right) / 2 + args.left;
        rollover_anchor = 'middle';
      }

      svg.append('text')
        .attr('class', 'mg-active-datapoint')
        .attr('xml:space', 'preserve')
        .attr('x', rollover_x)
        .attr('y', args.top * 0.75)
        .attr('dy', '.35em')
        .attr('text-anchor', rollover_anchor);

      g = svg.append('g')
        .attr('class', 'mg-rollover-rect');

      //draw rollover bars
      var bars = g.selectAll(".mg-bar-rollover")
        .data(args.data[0]).enter()
        .append("rect")
        .attr('class', 'mg-bar-rollover');

      bars.attr('opacity', 0)
        .attr(length_coord, length_coord_map)
        .attr(width_coord, function(d) {
          var w;
          if (width_type == 'categorical') {
            w = width_scalefn(d);
          } else {
            w = width_scale(0);
            if (d[width_accessor] < 0) {
              w = width_scalefn(d);
            }
          }
          w = w - args.bar_thickness/2;
          return w;
        });

      bars.attr(length, length_map)
      bars.attr(width, function(d) {
        return args.bar_thickness;
      });

      bars
        .on('mouseover', this.rolloverOn(args))
        .on('mouseout', this.rolloverOff(args))
        .on('mousemove', this.rolloverMove(args));

      return this;
    };

    this.rolloverOn = function(args) {
      var svg = mg_get_svg_child_of(args.target);
      var label_accessor = this.is_vertical ? args.x_accessor : args.y_accessor;
      var data_accessor = this.is_vertical ? args.y_accessor : args.x_accessor;
      var label_units = this.is_vertical ? args.yax_units : args.xax_units;

      return function(d, i) {
        // svg.selectAll('text')
        //   .filter(function(g, j) {
        //     return d === g;
        //   })
        //   .attr('opacity', 0.3);

        var fmt = MG.time_format(args.utc_time, '%b %e, %Y');
        var num = format_rollover_number(args);

        //highlight active bar
        var bar = svg.selectAll('g.mg-barplot .mg-bar')
          .filter(function(d, j) {
            return j === i;
          }).classed('active', true);

        if (args.scales.hasOwnProperty('COLOR')) {
          bar.attr('fill', d3.rgb(args.scalefns.colorf(d)).darker());
        } else {
          bar.classed('default-active', true);
        }

        //update rollover text
        if (args.show_rollover_text) {
          var mouseover = mg_mouseover_text(args, { svg: svg });
          var row = mouseover.mouseover_row();

          if (args.ygroup_accessor) row.text(d[args.ygroup_accessor] + '   ').bold();

          row.text(mg_format_x_mouseover(args, d));
          row.text(args.y_accessor + ': ' + d[args.y_accessor]);
          if (args.predictor_accessor || args.baseline_accessor) {
            row = mouseover.mouseover_row();

            if (args.predictor_accessor) row.text(mg_format_data_for_mouseover(args, d, null, args.predictor_accessor, false))
            if (args.baseline_accessor) row.text(mg_format_data_for_mouseover(args, d, null, args.baseline_accessor, false))
          }
        }
        if (args.mouseover) {
          args.mouseover(d, i);
        }
      };
    };

    this.rolloverOff = function(args) {
      var svg = mg_get_svg_child_of(args.target);

      return function(d, i) {
        //reset active bar
        var bar = svg.selectAll('g.mg-barplot .mg-bar.active').classed('active', false);

        if (args.scales.hasOwnProperty('COLOR')) {
          bar.attr('fill', args.scalefns.colorf(d));
        } else {
          bar.classed('default-active', false);
        }

        //reset active data point text
        svg.select('.mg-active-datapoint')
          .text('');

        mg_clear_mouseover_container(svg);

        if (args.mouseout) {
          args.mouseout(d, i);
        }
      };
    };

    this.rolloverMove = function(args) {
      return function(d, i) {
        if (args.mousemove) {
          args.mousemove(d, i);
        }
      };
    };

    this.windowListeners = function() {
      mg_window_listeners(this.args);
      return this;
    };

    this.init(args);
  }

  var defaults = {
    y_padding_percentage: 0.05, // for categorical scales
    y_outer_padding_percentage: .2, // for categorical scales
    ygroup_padding_percentage: 0, // for categorical scales
    ygroup_outer_padding_percentage: 0, // for categorical scales
    x_padding_percentage: 0.05, // for categorical scales
    x_outer_padding_percentage: .2, // for categorical scales
    xgroup_padding_percentage: 0, // for categorical scales
    xgroup_outer_padding_percentage: 0, // for categorical scales
    buffer: 16,
    y_accessor: 'factor',
    x_accessor: 'value',
    secondary_label_accessor: null,
    color_accessor: null,
    color_type: 'category',
    color_domain: null,
    legend: true,
    legend_target: null,
    mouseover_align: 'right',
    baseline_accessor: null,
    predictor_accessor: null,
    predictor_proportion: 5,
    show_bar_zero: true,
    binned: true,
    truncate_x_labels: true,
    truncate_y_labels: true
  };

  MG.register('bar', barChart, defaults);

}).call(this);

/*
Data Tables

Along with histograms, bars, lines, and scatters, a simple data table can take you far.
We often just want to look at numbers, organized as a table, where columns are variables,
and rows are data points. Sometimes we want a cell to have a small graphic as the main
column element, in which case we want small multiples. sometimes we want to

var table = New data_table(data)
        .target('div#data-table')
        .title({accessor: 'point_name', align: 'left'})
        .description({accessor: 'description'})
        .number({accessor: ''})

*/

MG.data_table = function(args) {
  'use strict';
  this.args = args;
  this.args.standard_col = { width: 150, font_size: 12, font_weight: 'normal' };
  this.args.columns = [];
  this.formatting_options = [
    ['color', 'color'],
    ['font-weight', 'font_weight'],
    ['font-style', 'font_style'],
    ['font-size', 'font_size']
  ];

  this._strip_punctuation = function(s) {
    var punctuationless = s.replace(/[^a-zA-Z0-9 _]+/g, '');
    var finalString = punctuationless.replace(/ +?/g, '');
    return finalString;
  };

  this._format_element = function(element, value, args) {
    this.formatting_options.forEach(function(fo) {
      var attr = fo[0];
      var key = fo[1];
      if (args[key]) element.style(attr,
        typeof args[key] === 'string' ||
        typeof args[key] === 'number' ?
        args[key] : args[key](value));
    });
  };

  this._add_column = function(_args, arg_type) {
    var standard_column = this.args.standard_col;
    var args = merge_with_defaults(MG.clone(_args), MG.clone(standard_column));
    args.type = arg_type;
    this.args.columns.push(args);
  };

  this.target = function() {
    var target = arguments[0];
    this.args.target = target;
    return this;
  };

  this.title = function() {
    this._add_column(arguments[0], 'title');
    return this;
  };

  this.text = function() {
    this._add_column(arguments[0], 'text');
    return this;
  };

  this.bullet = function() {
    /*
    text label
    main value
    comparative measure
    any number of ranges

    additional args:
    no title
    xmin, xmax
    format: percentage
    xax_formatter
    */
    return this;
  };

  this.sparkline = function() {
    return this;
  };

  this.number = function() {
    this._add_column(arguments[0], 'number');
    return this;
  };

  this.display = function() {
    var args = this.args;

    chart_title(args);

    var target = args.target;
    var table = d3.select(target).append('table').classed('mg-data-table', true);
    var colgroup = table.append('colgroup');
    var thead = table.append('thead');
    var tbody = table.append('tbody');
    var this_column;
    var this_title;

    var tr, th, td_accessor, td_type, td_value, th_text, td_text, td;
    var col;
    var h;

    tr = thead.append('tr');

    for (h = 0; h < args.columns.length; h++) {
      var this_col = args.columns[h];
      td_type = this_col.type;
      th_text = this_col.label;
      th_text = th_text === undefined ? '' : th_text;
      th = tr.append('th')
        .style('width', this_col.width)
        .style('text-align', td_type === 'title' ? 'left' : 'right')
        .text(th_text);

      if (args.show_tooltips && this_col.description && mg_jquery_exists()) {
        th.append('i')
          .classed('fa', true)
          .classed('fa-question-circle', true)
          .classed('fa-inverse', true);

        $(th.node()).popover({
          html: true,
          animation: false,
          content: this_col.description,
          trigger: 'hover',
          placement: 'top',
          container: $(th.node())
        });
      }
    }

    for (h = 0; h < args.columns.length; h++) {
      col = colgroup.append('col');
      if (args.columns[h].type === 'number') {
        col.attr('align', 'char').attr('char', '.');
      }
    }

    for (var i = 0; i < args.data.length; i++) {
      tr = tbody.append('tr');
      for (var j = 0; j < args.columns.length; j++) {
        this_column = args.columns[j];
        td_accessor = this_column.accessor;
        td_value = td_text = args.data[i][td_accessor];
        td_type = this_column.type;

        if (td_type === 'number') {
          //td_text may need to be rounded
          if (this_column.hasOwnProperty('round') && !this_column.hasOwnProperty('format')) {
            // round according to the number value in this_column.round
            td_text = d3.format('0,.' + this_column.round + 'f')(td_text);
          }

          if (this_column.hasOwnProperty('value_formatter')) {
            // provide a function that formats the text according to the function this_column.format.
            td_text = this_column.value_formatter(td_text);
          }

          if (this_column.hasOwnProperty('format')) {
            // this is a shorthand for percentage formatting, and others if need be.
            // supported: 'percentage', 'count', 'temperature'

            if (this_column.round) {
              td_text = Math.round(td_text, this_column.round);
            }

            var this_format = this_column.format;
            var formatter;

            if (this_format === 'percentage') formatter = d3.format('.0%');
            if (this_format === 'count') formatter = d3.format(',.0f');
            if (this_format === 'temperature') formatter = function(t) {
              return t + '°'; };

            td_text = formatter(td_text);
          }

          if (this_column.hasOwnProperty('currency')) {
            // this is another shorthand for formatting according to a currency amount, which gets appended to front of number
            td_text = this_column.currency + td_text;
          }
        }

        td = tr.append('td')
          .classed('table-' + td_type, true)
          .classed('table-' + td_type + '-' + this._strip_punctuation(td_accessor), true)
          .attr('data-value', td_value)
          .style('width', this_column.width)
          .style('text-align', td_type === 'title' || td_type === 'text' ? 'left' : 'right');

        this._format_element(td, td_value, this_column);

        if (td_type === 'title') {
          this_title = td.append('div').text(td_text);
          this._format_element(this_title, td_text, this_column);

          if (args.columns[j].hasOwnProperty('secondary_accessor')) {
            td.append('div')
              .text(args.data[i][args.columns[j].secondary_accessor])
              .classed("secondary-title", true);
          }
        } else {
          td.text(td_text);
        }
      }
    }

    return this;
  };

  return this;
};

(function() {
  'use strict';

  function mg_missing_add_text(svg, args) {
    svg.selectAll('.mg-missing-text').data([args.missing_text])
      .enter().append('text')
      .attr('class', 'mg-missing-text')
      .attr('x', args.width / 2)
      .attr('y', args.height / 2)
      .attr('dy', '.50em')
      .attr('text-anchor', 'middle')
      .text(args.missing_text);
  }

  function mg_missing_x_scale(args) {
    args.scales.X = d3.scaleLinear()
      .domain([0, args.data.length])
      .range([mg_get_plot_left(args), mg_get_plot_right(args)]);
    args.scalefns.yf = function(di) {
      return args.scales.Y(di.y); };
  }

  function mg_missing_y_scale(args) {
    args.scales.Y = d3.scaleLinear()
      .domain([-2, 2])
      .range([args.height - args.bottom - args.buffer * 2, args.top]);
    args.scalefns.xf = function(di) {
      return args.scales.X(di.x); };
  }

  function mg_make_fake_data(args) {
    var data = [];
    for (var x = 1; x <= 50; x++) {
      data.push({ 'x': x, 'y': Math.random() - (x * 0.03) });
    }
    args.data = data;
  }

  function mg_add_missing_background_rect(g, args) {
    g.append('svg:rect')
      .classed('mg-missing-background', true)
      .attr('x', args.buffer)
      .attr('y', args.buffer)
      .attr('width', args.width - args.buffer * 2)
      .attr('height', args.height - args.buffer * 2)
      .attr('rx', 15)
      .attr('ry', 15);
  }

  function mg_missing_add_line(g, args) {
    var line = d3.line()
      .x(args.scalefns.xf)
      .y(args.scalefns.yf)
      .curve(args.interpolate);

    g.append('path')
      .attr('class', 'mg-main-line mg-line1-color')
      .attr('d', line(args.data));
  }

  function mg_missing_add_area(g, args) {
    var area = d3.area()
      .x(args.scalefns.xf)
      .y0(args.scales.Y.range()[0])
      .y1(args.scalefns.yf)
      .curve(args.interpolate);

    g.append('path')
      .attr('class', 'mg-main-area mg-area1-color')
      .attr('d', area(args.data));
  }

  function mg_remove_all_children(args) {
    d3.select(args.target).selectAll('svg *').remove();
  }

  function mg_missing_remove_legend(args) {
    if (args.legend_target) {
      d3.select(args.legend_target).html('');
    }
  }

  function missingData(args) {
    this.init = function(args) {
      this.args = args;

      mg_init_compute_width(args);
      mg_init_compute_height(args);

      chart_title(args);

      // create svg if one doesn't exist

      var container = d3.select(args.target);
      mg_raise_container_error(container, args);
      var svg = container.selectAll('svg');
      mg_remove_svg_if_chart_type_has_changed(svg, args);
      svg = mg_add_svg_if_it_doesnt_exist(svg, args);
      mg_adjust_width_and_height_if_changed(svg, args);
      mg_set_viewbox_for_scaling(svg, args);
      mg_remove_all_children(args);

      svg.classed('mg-missing', true);
      mg_missing_remove_legend(args);

      // are we adding a background placeholder
      if (args.show_missing_background) {
        mg_make_fake_data(args);
        mg_missing_x_scale(args);
        mg_missing_y_scale(args);
        var g = mg_add_g(svg, 'mg-missing-pane');

        mg_add_missing_background_rect(g, args);
        mg_missing_add_line(g, args);
        mg_missing_add_area(g, args);
      }

      mg_missing_add_text(svg, args);

      this.windowListeners();

      return this;
    };

    this.windowListeners = function() {
      mg_window_listeners(this.args);
      return this;
    };

    this.init(args);
  }

  var defaults = {
    top: 40, // the size of the top margin
    bottom: 30, // the size of the bottom margin
    right: 10, // size of the right margin
    left: 0, // size of the left margin
    buffer: 8, // the buffer between the actual chart area and the margins
    legend_target: '',
    width: 350,
    height: 220,
    missing_text: 'Data currently missing or unavailable',
    scalefns: {},
    scales: {},
    show_tooltips: true,
    show_missing_background: true
  };

  MG.register('missing-data', missingData, defaults);
}).call(this);

function mg_process_scale_ticks(args, axis) {
  var accessor;
  var scale_ticks;
  var max;

  if (axis === 'x') {
    accessor = args.x_accessor;
    scale_ticks = args.scales.X.ticks(args.xax_count);
    max = args.processed.max_x;
  } else if (axis === 'y') {
    accessor = args.y_accessor;
    scale_ticks = args.scales.Y.ticks(args.yax_count)
    max = args.processed.max_y;
  }

  function log10(val) {
    if (val === 1000) {
      return 3;
    }
    if (val === 1000000) {
      return 7;
    }
    return Math.log(val) / Math.LN10;
  }

  if ((axis === 'x' && args.x_scale_type === 'log') || (axis === 'y' && args.y_scale_type === 'log')) {
    // get out only whole logs
    scale_ticks = scale_ticks.filter(function(d) {
      return Math.abs(log10(d)) % 1 < 1e-6 || Math.abs(log10(d)) % 1 > 1 - 1e-6;
    });
  }

  // filter out fraction ticks if our data is ints and if xmax > number of generated ticks
  var number_of_ticks = scale_ticks.length;

  // is our data object all ints?
  var data_is_int = true;
  args.data.forEach(function(d, i) {
    d.forEach(function(d, i) {
      if (d[accessor] % 1 !== 0) {
        data_is_int = false;
        return false;
      }
    });
  });

  if (data_is_int && number_of_ticks > max && args.format === 'count') {
    // remove non-integer ticks
    scale_ticks = scale_ticks.filter(function(d) {
      return d % 1 === 0;
    });
  }

  if (axis === 'x') {
    args.processed.x_ticks = scale_ticks;
  } else if (axis === 'y') {
    args.processed.y_ticks = scale_ticks;
  }
}

function raw_data_transformation(args) {
  'use strict';

  // dupe our data so we can modify it without adverse effect
  args.data = MG.clone(args.data);

  // we need to account for a few data format cases:
  // #0 {bar1:___, bar2:___}                                    // single object (for, say, bar charts)
  // #1 [{key:__, value:__}, ...]                               // unnested obj-arrays
  // #2 [[{key:__, value:__}, ...], [{key:__, value:__}, ...]]  // nested obj-arrays
  // #3 [[4323, 2343],..]                                       // unnested 2d array
  // #4 [[[4323, 2343],..] , [[4323, 2343],..]]                 // nested 2d array
  args.single_object = false; // for bar charts.
  args.array_of_objects = false;
  args.array_of_arrays = false;
  args.nested_array_of_arrays = false;
  args.nested_array_of_objects = false;

  // is the data object a nested array?

  if (is_array_of_arrays(args.data)) {
    args.nested_array_of_objects = args.data.map(function(d) {
      return is_array_of_objects_or_empty(d);
    }); // Case #2
    args.nested_array_of_arrays = args.data.map(function(d) {
      return is_array_of_arrays(d);
    }); // Case #4
  } else {
    args.array_of_objects = is_array_of_objects(args.data); // Case #1
    args.array_of_arrays = is_array_of_arrays(args.data); // Case #3
  }

  if (args.chart_type === 'line') {
    if (args.array_of_objects || args.array_of_arrays) {
      args.data = [args.data];
    }
  } else {
    if (!(args.data[0] instanceof Array)) {
      args.data = [args.data];
    }
  }
  // if the y_accessor is an array, break it up and store the result in args.data
  mg_process_multiple_x_accessors(args);
  mg_process_multiple_y_accessors(args);

  // if user supplies keyword in args.color, change to arg.colors.
  // this is so that the API remains fairly sensible and legible.
  if (args.color !== undefined) {
    args.colors = args.color;
  }

  // if user has supplied args.colors, and that value is a string, turn it into an array.
  if (args.colors !== null && typeof args.colors === 'string') {
    args.colors = [args.colors];
  }

  // sort x-axis data
  if (args.chart_type === 'line' && args.x_sort === true) {
    for (var i = 0; i < args.data.length; i++) {
      args.data[i].sort(function(a, b) {
        return a[args.x_accessor] - b[args.x_accessor];
      });
    }
  }

  return this;
}

function mg_process_multiple_accessors(args, which_accessor) {
  // turns an array of accessors into ...
  if (args[which_accessor] instanceof Array) {
    args.data = args.data.map(function(_d) {
      return args[which_accessor].map(function(ya) {
        return _d.map(function(di) {
          di = MG.clone(di);

          if (di[ya] === undefined) {
            return undefined;
          }

          di['multiline_' + which_accessor] = di[ya];
          return di;
        }).filter(function(di) {
          return di !== undefined;
        });
      });
    })[0];
    args[which_accessor] = 'multiline_' + which_accessor;
  }
}

function mg_process_multiple_x_accessors(args) {
  mg_process_multiple_accessors(args, 'x_accessor');
}

function mg_process_multiple_y_accessors(args) {
  mg_process_multiple_accessors(args, 'y_accessor');
}

MG.raw_data_transformation = raw_data_transformation;

function process_line(args) {
  'use strict';

  var time_frame;

  // do we have a time-series?
  var is_time_series = d3.sum(args.data.map(function(series) {
    return series.length > 0 && series[0][args.x_accessor] instanceof Date;
  })) > 0;

  // are we replacing missing y values with zeros?
  if ((args.missing_is_zero || args.missing_is_hidden) && args.chart_type === 'line' && is_time_series) {
    for (var i = 0; i < args.data.length; i++) {
      // we need to have a dataset of length > 2, so if it's less than that, skip
      if (args.data[i].length <= 1) {
        continue;
      }

      var first = args.data[i][0];
      var last = args.data[i][args.data[i].length - 1];

      // initialize our new array for storing the processed data
      var processed_data = [];

      // we'll be starting from the day after our first date
      var start_date = MG.clone(first[args.x_accessor]).setDate(first[args.x_accessor].getDate() + 1);

      // if we've set a max_x, add data points up to there
      var from = (args.min_x) ? args.min_x : start_date;
      var upto = (args.max_x) ? args.max_x : last[args.x_accessor];

      time_frame = mg_get_time_frame((upto - from) / 1000);

      if (['four-days', 'many-days', 'many-months', 'years', 'default'].indexOf(time_frame) !== -1 && args.missing_is_hidden_accessor === null) {
        for (var d = new Date(from); d <= upto; d.setDate(d.getDate() + 1)) {
          var o = {};
          d.setHours(0, 0, 0, 0);

          // add the first date item, we'll be starting from the day after our first date
          if (Date.parse(d) === Date.parse(new Date(start_date))) {
            processed_data.push(MG.clone(args.data[i][0]));
          }

          // check to see if we already have this date in our data object
          var existing_o = null;
          args.data[i].forEach(function(val, i) {
            if (Date.parse(val[args.x_accessor]) === Date.parse(new Date(d))) {
              existing_o = val;

              return false;
            }
          });

          // if we don't have this date in our data object, add it and set it to zero
          if (!existing_o) {
            o[args.x_accessor] = new Date(d);
            o[args.y_accessor] = 0;
            o['_missing'] = true; //we want to distinguish between zero-value and missing observations
            processed_data.push(o);
          }

          // if the data point has, say, a 'missing' attribute set or if its
          // y-value is null identify it internally as missing
          else if (existing_o[args.missing_is_hidden_accessor] || existing_o[args.y_accessor] === null) {
            existing_o['_missing'] = true;
            processed_data.push(existing_o);
          }

          //otherwise, use the existing object for that date
          else {
            processed_data.push(existing_o);
          }
        }
      } else {
        for (var j = 0; j < args.data[i].length; j += 1) {
          var obj = MG.clone(args.data[i][j]);
          obj['_missing'] = args.data[i][j][args.missing_is_hidden_accessor];
          processed_data.push(obj);
        }
      }

      // update our date object
      args.data[i] = processed_data;
    }
  }

  return this;
}

MG.process_line = process_line;

function process_histogram(args) {
  'use strict';

  // if args.binned == false, then we need to bin the data appropriately.
  // if args.binned == true, then we need to make sure to compute the relevant computed data.
  // the outcome of either of these should be something in args.computed_data.
  // the histogram plotting function will be looking there for the data to plot.

  // we need to compute an array of objects.
  // each object has an x, y, and dx.

  // histogram data is always single dimension
  var our_data = args.data[0];

  var extracted_data;
  if (args.binned === false) {
    // use d3's built-in layout.histogram functionality to compute what you need.

    if (typeof(our_data[0]) === 'object') {
      // we are dealing with an array of objects. Extract the data value of interest.
      extracted_data = our_data
        .map(function(d) {
          return d[args.x_accessor];
        });
    } else if (typeof(our_data[0]) === 'number') {
      // we are dealing with a simple array of numbers. No extraction needed.
      extracted_data = our_data;
    } else {
      console.log('TypeError: expected an array of numbers, found ' + typeof(our_data[0]));
      return;
    }

    var hist = d3.histogram();
    if (args.bins) {
      hist.thresholds(args.bins);
    }

    var bins = hist(extracted_data);
    args.processed_data = bins.map(function(d) {
      return { 'x': d.x0, 'y': d.length };
    });
  } else {
    // here, we just need to reconstruct the array of objects
    // take the x accessor and y accessor.
    // pull the data as x and y. y is count.

    args.processed_data = our_data.map(function(d) {
      return { 'x': d[args.x_accessor], 'y': d[args.y_accessor] };
    });

    var this_pt;
    var next_pt;

    // we still need to compute the dx component for each data point
    for (var i = 0; i < args.processed_data.length; i++) {
      this_pt = args.processed_data[i];
      if (i === args.processed_data.length - 1) {
        this_pt.dx = args.processed_data[i - 1].dx;
      } else {
        next_pt = args.processed_data[i + 1];
        this_pt.dx = next_pt.x - this_pt.x;
      }
    }
  }

  // capture the original data and accessors before replacing args.data
  if (!args.processed) {
    args.processed = {};
  }
  args.processed.original_data = args.data;
  args.processed.original_x_accessor = args.x_accessor;
  args.processed.original_y_accessor = args.y_accessor;

  args.data = [args.processed_data];
  args.x_accessor = args.processed_x_accessor;
  args.y_accessor = args.processed_y_accessor;

  return this;
}

MG.process_histogram = process_histogram;

// for use with bar charts, etc.
function process_categorical_variables(args) {
  'use strict';

  var extracted_data, processed_data = {},
    pd = [];
  //var our_data = args.data[0];
  var label_accessor = args.bar_orientation === 'vertical' ? args.x_accessor : args.y_accessor;
  var data_accessor = args.bar_orientation === 'vertical' ? args.y_accessor : args.x_accessor;

  return this;
}

MG.process_categorical_variables = process_categorical_variables;

function process_point(args) {
  'use strict';

  var data = args.data[0];
  var x = data.map(function(d) {
    return d[args.x_accessor];
  });
  var y = data.map(function(d) {
    return d[args.y_accessor];
  });

  if (args.least_squares) {
    args.ls_line = least_squares(x, y);
  }

  return this;
}

MG.process_point = process_point;

function add_ls(args) {
  var svg = mg_get_svg_child_of(args.target);
  var data = args.data[0];
  var min_x = d3.min(data, function(d) {
    return d[args.x_accessor]; });
  var max_x = d3.max(data, function(d) {
    return d[args.x_accessor]; });

  d3.select(args.target).selectAll('.mg-least-squares-line').remove();

  svg.append('svg:line')
    .attr('x1', args.scales.X(min_x))
    .attr('x2', args.scales.X(max_x))
    .attr('y1', args.scales.Y(args.ls_line.fit(min_x)))
    .attr('y2', args.scales.Y(args.ls_line.fit(max_x)))
    .attr('class', 'mg-least-squares-line');
}

MG.add_ls = add_ls;

function add_lowess(args) {
  var svg = mg_get_svg_child_of(args.target);
  var lowess = args.lowess_line;

  var line = d3.svg.line()
    .x(function(d) {
      return args.scales.X(d.x); })
    .y(function(d) {
      return args.scales.Y(d.y); })
    .interpolate(args.interpolate);

  svg.append('path')
    .attr('d', line(lowess))
    .attr('class', 'mg-lowess-line');
}

MG.add_lowess = add_lowess;

function lowess_robust(x, y, alpha, inc) {
  // Used http://www.unc.edu/courses/2007spring/biol/145/001/docs/lectures/Oct27.html
  // for the clear explanation of robust lowess.

  // calculate the the first pass.
  var _l;
  var r = [];
  var yhat = d3.mean(y);
  var i;
  for (i = 0; i < x.length; i += 1) { r.push(1); }
  _l = _calculate_lowess_fit(x, y, alpha, inc, r);
  var x_proto = _l.x;
  var y_proto = _l.y;

  // Now, take the fit, recalculate the weights, and re-run LOWESS using r*w instead of w.

  for (i = 0; i < 100; i += 1) {
    r = d3.zip(y_proto, y).map(function(yi) {
      return Math.abs(yi[1] - yi[0]);
    });

    var q = d3.quantile(r.sort(), 0.5);

    r = r.map(function(ri) {
      return _bisquare_weight(ri / (6 * q));
    });

    _l = _calculate_lowess_fit(x, y, alpha, inc, r);
    x_proto = _l.x;
    y_proto = _l.y;
  }

  return d3.zip(x_proto, y_proto).map(function(d) {
    var p = {};
    p.x = d[0];
    p.y = d[1];
    return p;
  });
}

MG.lowess_robust = lowess_robust;

function lowess(x, y, alpha, inc) {
  var r = [];
  for (var i = 0; i < x.length; i += 1) { r.push(1); }
  var _l = _calculate_lowess_fit(x, y, alpha, inc, r);
}

MG.lowess = lowess;

function least_squares(x_, y_) {
  var x, y, xi, yi,
    _x = 0,
    _y = 0,
    _xy = 0,
    _xx = 0;

  var n = x_.length;
  if (x_[0] instanceof Date) {
    x = x_.map(function(d) {
      return d.getTime();
    });
  } else {
    x = x_;
  }

  if (y_[0] instanceof Date) {
    y = y_.map(function(d) {
      return d.getTime();
    });
  } else {
    y = y_;
  }

  var xhat = d3.mean(x);
  var yhat = d3.mean(y);
  var numerator = 0,
    denominator = 0;

  for (var i = 0; i < x.length; i++) {
    xi = x[i];
    yi = y[i];
    numerator += (xi - xhat) * (yi - yhat);
    denominator += (xi - xhat) * (xi - xhat);
  }

  var beta = numerator / denominator;
  var x0 = yhat - beta * xhat;

  return {
    x0: x0,
    beta: beta,
    fit: function(x) {
      return x0 + x * beta;
    }
  };
}

MG.least_squares = least_squares;

function _pow_weight(u, w) {
  if (u >= 0 && u <= 1) {
    return Math.pow(1 - Math.pow(u, w), w);
  } else {
    return 0;
  }
}

function _bisquare_weight(u) {
  return _pow_weight(u, 2);
}

function _tricube_weight(u) {
  return _pow_weight(u, 3);
}

function _neighborhood_width(x0, xis) {
  return Array.max(xis.map(function(xi) {
    return Math.abs(x0 - xi);
  }));
}

function _manhattan(x1, x2) {
  return Math.abs(x1 - x2);
}

function _weighted_means(wxy) {
  var wsum = d3.sum(wxy.map(function(wxyi) {
    return wxyi.w; }));

  return {
    xbar: d3.sum(wxy.map(function(wxyi) {
      return wxyi.w * wxyi.x;
    })) / wsum,
    ybar: d3.sum(wxy.map(function(wxyi) {
      return wxyi.w * wxyi.y;
    })) / wsum
  };
}

function _weighted_beta(wxy, xbar, ybar) {
  var num = d3.sum(wxy.map(function(wxyi) {
    return Math.pow(wxyi.w, 2) * (wxyi.x - xbar) * (wxyi.y - ybar);
  }));

  var denom = d3.sum(wxy.map(function(wxyi) {
    return Math.pow(wxyi.w, 2) * Math.pow(wxyi.x - xbar, 2);
  }));

  return num / denom;
}

function _weighted_least_squares(wxy) {
  var ybar, xbar, beta_i, x0;

  var _wm = _weighted_means(wxy);

  xbar = _wm.xbar;
  ybar = _wm.ybar;

  var beta = _weighted_beta(wxy, xbar, ybar);

  return {
    beta: beta,
    xbar: xbar,
    ybar: ybar,
    x0: ybar - beta * xbar

  };
}

function _calculate_lowess_fit(x, y, alpha, inc, residuals) {
  // alpha - smoothing factor. 0 < alpha < 1/
  //
  //
  var k = Math.floor(x.length * alpha);

  var sorted_x = x.slice();

  sorted_x.sort(function(a, b) {
    if (a < b) {
      return -1; } else if (a > b) {
      return 1; }

    return 0;
  });

  var x_max = d3.quantile(sorted_x, 0.98);
  var x_min = d3.quantile(sorted_x, 0.02);

  var xy = d3.zip(x, y, residuals).sort();

  var size = Math.abs(x_max - x_min) / inc;

  var smallest = x_min;
  var largest = x_max;
  var x_proto = d3.range(smallest, largest, size);

  var xi_neighbors;
  var x_i, beta_i, x0_i, delta_i, xbar, ybar;

  // for each prototype, find its fit.
  var y_proto = [];

  for (var i = 0; i < x_proto.length; i += 1) {
    x_i = x_proto[i];

    // get k closest neighbors.
    xi_neighbors = xy.map(function(xyi) {
      return [
        Math.abs(xyi[0] - x_i),
        xyi[0],
        xyi[1],
        xyi[2]
      ];
    }).sort().slice(0, k);

    // Get the largest distance in the neighbor set.
    delta_i = d3.max(xi_neighbors)[0];

    // Prepare the weights for mean calculation and WLS.

    xi_neighbors = xi_neighbors.map(function(wxy) {
      return {
        w: _tricube_weight(wxy[0] / delta_i) * wxy[3],
        x: wxy[1],
        y: wxy[2]
      };
    });

    // Find the weighted least squares, obviously.
    var _output = _weighted_least_squares(xi_neighbors);

    x0_i = _output.x0;
    beta_i = _output.beta;

    //
    y_proto.push(x0_i + beta_i * x_i);
  }

  return { x: x_proto, y: y_proto };
}

function format_rollover_number(args) {
  var num;
  if (args.format === 'count') {
    num = function(d) {
      var is_float = d % 1 !== 0;
      var pf;

      if (is_float) {
        pf = d3.format(',.' + args.decimals + 'f');
      } else {
        pf = d3.format(',.0f');
      }

      // are we adding units after the value or before?
      if (args.yax_units_append) {
        return pf(d) + args.yax_units;
      } else {
        return args.yax_units + pf(d);
      }
    };
  } else {
    num = function(d_) {
      var fmt_string = (args.decimals ? '.' + args.decimals : '') + '%';
      var pf = d3.format(fmt_string);
      return pf(d_);
    };
  }
  return num;
}

var time_rollover_format = function(f, d, accessor, utc) {
  var fd;
  if (typeof f === 'string') {
    fd = MG.time_format(utc, f)(d[accessor]);
  } else if (typeof f === 'function') {
    fd = f(d);
  } else {
    fd = d[accessor];
  }
  return fd;
}

// define our rollover format for numbers
var number_rollover_format = function(f, d, accessor) {
  var fd;
  if (typeof f === 'string') {
    fd = d3.format('s')(d[accessor]);
  } else if (typeof f === 'function') {
    fd = f(d);
  } else {
    fd = d[accessor];
  }
  return fd;
}

function mg_format_y_rollover(args, num, d) {
  var formatted_y;
  if (args.y_mouseover !== null) {
    if (args.aggregate_rollover) {
      formatted_y = number_rollover_format(args.y_mouseover, d, args.y_accessor);
    } else {
      formatted_y = number_rollover_format(args.y_mouseover, d, args.y_accessor);
    }
  } else {
    if (args.time_series) {
      if (args.aggregate_rollover) {
        formatted_y = num(d[args.y_accessor]);
      } else {
        formatted_y = args.yax_units + num(d[args.y_accessor]);
      }
    } else {
      formatted_y = args.y_accessor + ': ' + args.yax_units + num(d[args.y_accessor]);
    }
  }
  return formatted_y;
}

function mg_format_x_rollover(args, fmt, d) {
  var formatted_x;
  if (args.x_mouseover !== null) {
    if (args.time_series) {
      if (args.aggregate_rollover) {
        formatted_x = time_rollover_format(args.x_mouseover, d, 'key', args.utc);
      } else {
        formatted_x = time_rollover_format(args.x_mouseover, d, args.x_accessor, args.utc);
      }
    } else {
      formatted_x = number_rollover_format(args.x_mouseover, d, args.x_accessor);
    }
  } else {
    if (args.time_series) {
      var date;

      if (args.aggregate_rollover && args.data.length > 1) {
        date = new Date(d.key);
      } else {
        date = new Date(+d[args.x_accessor]);
        date.setDate(date.getDate());
      }

      formatted_x = fmt(date) + '  ';
    } else {
      formatted_x = args.x_accessor + ': ' + d[args.x_accessor] + '   ';
    }
  }
  return formatted_x;
}

function mg_format_data_for_mouseover(args, d, mouseover_fcn, accessor, check_time) {
  var formatted_data, formatter;
  var time_fmt = mg_get_rollover_time_format(args);
  if (typeof d[accessor] === 'string') {
    formatter = function(d) {
      return d;
    }
  } else {
    formatter = format_rollover_number(args);
  }

  if (mouseover_fcn !== null) {
    if (check_time) formatted_data = time_rollover_format(mouseover_fcn, d, accessor, args.utc);
    else formatted_data = number_rollover_format(mouseover_fcn, d, accessor);

  } else {
    if (check_time) formatted_data = time_fmt(new Date(+d[accessor])) + '  ';
    else formatted_data = (args.time_series ? '' : accessor + ': ') + formatter(d[accessor]) + '   ';
  }
  return formatted_data;
}

function mg_format_number_mouseover(args, d) {
  return mg_format_data_for_mouseover(args, d, args.x_mouseover, args.x_accessor, false);
}

function mg_format_x_mouseover(args, d) {
  return mg_format_data_for_mouseover(args, d, args.x_mouseover, args.x_accessor, args.time_series);
}

function mg_format_y_mouseover(args, d) {
  return mg_format_data_for_mouseover(args, d, args.y_mouseover, args.y_accessor, false);
}

function mg_format_x_aggregate_mouseover(args, d) {
  return mg_format_data_for_mouseover(args, d, args.x_mouseover, 'key', args.time_series)
}

MG.format_rollover_number = format_rollover_number;

// http://bl.ocks.org/mbostock/3916621
function path_tween(d1, precision) {
  return function() {
    var path0 = this,
      path1 = path0.cloneNode(),
      n0 = path0.getTotalLength() || 0,
      n1 = (path1.setAttribute("d", d1), path1).getTotalLength() || 0;

    // Uniform sampling of distance based on specified precision.
    var distances = [0],
      i = 0,
      dt = precision / Math.max(n0, n1);
    while ((i += dt) < 1) distances.push(i);
    distances.push(1);

    // Compute point-interpolators at each distance.
    var points = distances.map(function(t) {
      var p0 = path0.getPointAtLength(t * n0),
        p1 = path1.getPointAtLength(t * n1);
      return d3.interpolate([p0.x, p0.y], [p1.x, p1.y]);
    });

    return function(t) {
      return t < 1 ? "M" + points.map(function(p) {
        return p(t);
      }).join("L") : d1;
    };
  };
}

MG.path_tween = path_tween;

// call this to add a warning icon to a graph and log an error to the console
function error(args) {
  console.error('ERROR : ', args.target, ' : ', args.error);

  d3.select(args.target).select('.mg-chart-title')
    .append('tspan')
      .attr('class', 'fa fa-x fa-exclamation-circle mg-warning')
      .attr('dx', '0.3em')
      .text('\uf06a');
}

function internal_error(args) {
  console.error('INTERNAL ERROR : ', args.target, ' : ', args.internal_error);
}

MG.error = error;

return MG;
}));
