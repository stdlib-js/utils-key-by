// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=Math.floor;var t=function(r){return e(r)===r},n=t;var i=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&n(r.length)&&r.length>=0&&r.length<=9007199254740991},a=/./,o="function"==typeof Object.defineProperty?Object.defineProperty:null;var u=function(){try{return o({},"x",{}),!0}catch(r){return!1}},c=Object.defineProperty,s=Object.prototype,f=s.toString,l=s.__defineGetter__,p=s.__defineSetter__,v=s.__lookupGetter__,g=s.__lookupSetter__;var d=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===f.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===f.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(v.call(r,e)||g.call(r,e)?(n=r.__proto__,r.__proto__=s,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&l&&l.call(r,e,t.get),o&&p&&p.call(r,e,t.set),r},h=c,m=d,b=u()?h:m;var w=function(r,e,t){b(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},y=w;var E=function(r){return"boolean"==typeof r};var j=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var P=function(){return j&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,T=_;var O=function(r){return T.call(r)},V=Object.prototype.hasOwnProperty;var x=function(r,e){return null!=r&&V.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",k=x,I=S,A=_;var F=O,R=function(r){var e,t,n;if(null==r)return A.call(r);t=r[I],e=k(r,I);try{r[I]=void 0}catch(e){return A.call(r)}return n=A.call(r),e?r[I]=t:delete r[I],n},$=P()?R:F,M=Boolean.prototype.toString;var C=$,N=function(r){try{return M.call(r),!0}catch(r){return!1}},B=P();var G=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?N(r):"[object Boolean]"===C(r)))},L=E,Z=G;var W=y,X=function(r){return L(r)||Z(r)},z=G;W(X,"isPrimitive",E),W(X,"isObject",z);var U="object"==typeof self?self:null,Y="object"==typeof window?window:null,D=X.isPrimitive,q=function(){return new Function("return this;")()},H=U,J=Y,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=a,ir=er,ar=tr;var or=function(){return"function"==typeof nr||"object"==typeof ar||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;y(cr,"REGEXP",ur());var sr=cr,fr=$;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===fr(r)};var pr=function(r){return null!==r&&"object"==typeof r};y(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=$,dr=sr.REGEXP,hr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var mr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return hr(r)?"Buffer":t},br=mr;var wr=mr;var yr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},jr=or()?Er:yr;var Pr=function(r){return"function"===jr(r)};var _r=function(r){return"string"==typeof r},Tr=String.prototype.valueOf;var Or=$,Vr=function(r){try{return Tr.call(r),!0}catch(r){return!1}},xr=P();var Sr=function(r){return"object"==typeof r&&(r instanceof String||(xr?Vr(r):"[object String]"===Or(r)))},kr=_r,Ir=Sr;var Ar=y,Fr=function(r){return kr(r)||Ir(r)},Rr=Sr;Ar(Fr,"isPrimitive",_r),Ar(Fr,"isObject",Rr);var $r=Fr;var Mr=function(r){return"number"==typeof r},Cr=Number,Nr=Cr.prototype.toString;var Br=$,Gr=Cr,Lr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Zr=P();var Wr=function(r){return"object"==typeof r&&(r instanceof Gr||(Zr?Lr(r):"[object Number]"===Br(r)))},Xr=Mr,zr=Wr;var Ur=y,Yr=function(r){return Xr(r)||zr(r)},Dr=Wr;Ur(Yr,"isPrimitive",Mr),Ur(Yr,"isObject",Dr);var qr=Yr,Hr=Number.POSITIVE_INFINITY,Jr=Cr.NEGATIVE_INFINITY,Kr=Hr,Qr=Jr,re=t;var ee=function(r){return r<Kr&&r>Qr&&re(r)},te=qr.isPrimitive,ne=ee;var ie=function(r){return te(r)&&ne(r)},ae=qr.isObject,oe=ee;var ue=function(r){return ae(r)&&oe(r.valueOf())},ce=ie,se=ue;var fe=y,le=function(r){return ce(r)||se(r)},pe=ue;fe(le,"isPrimitive",ie),fe(le,"isObject",pe);var ve=le;var ge=function(r){return r!=r},de=qr.isPrimitive,he=ge;var me=function(r){return de(r)&&he(r)},be=qr.isObject,we=ge;var ye=function(r){return be(r)&&we(r.valueOf())},Ee=me,je=ye;var Pe=y,_e=function(r){return Ee(r)||je(r)},Te=ye;Pe(_e,"isPrimitive",me),Pe(_e,"isObject",Te);var Oe=i,Ve=ve.isPrimitive,xe=$r.isPrimitive,Se=_e.isPrimitive;var ke=function(r,e,t){var n,i,a;if(!Oe(r)&&!xe(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ve(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(xe(r)){if(!xe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Se(e)){for(a=i;a<n;a++)if(Se(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Ie=$r.isPrimitive;var Ae=function(r){if(!Ie(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Fe=$r.isPrimitive;var Re=function(r){if(!Fe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},$e=Ae,Me=Re,Ce=$r.isPrimitive;var Ne=function(r){return Ce(r)&&r===Me(r)&&r!==$e(r)},Be=Hr,Ge=Jr;var Le=function(r){return r==r&&r>Ge&&r<Be},Ze=ve.isPrimitive;var We=function(r){return Ze(r)&&r>=0},Xe=ve.isObject;var ze=function(r){return Xe(r)&&r.valueOf()>=0},Ue=We,Ye=ze;var De=y,qe=function(r){return Ue(r)||Ye(r)},He=ze;De(qe,"isPrimitive",We),De(qe,"isObject",He);var Je=qe.isPrimitive,Ke=$r.isPrimitive;var Qe=function(r,e){var t,n;if(!Ke(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Je(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},rt=ve.isPrimitive,et=$r.isPrimitive;var tt=Qe,nt=function(r,e,t){var n,i;if(!et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!et(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!rt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var it=function(r,e,t){var n=!1,i=e-r.length;return i<0||(nt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+tt("0",i):tt("0",i)+r,n&&(r="-"+r)),r},at=Ne,ot=Re,ut=Ae,ct=Le,st=qr.isPrimitive,ft=it;var lt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!ct(n)){if(!st(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=ft(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=ft(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=at(r.specifier)?ot(t):ut(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},pt=$r.isPrimitive,vt=/[-\/\\^$*+?.()|[\]{}]/g;var gt=function(r){var e,t;if(!pt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(vt,"\\$&"):(e=(e=r.substring(1,t)).replace(vt,"\\$&"),r=r[0]+e+r.substring(t))},dt=RegExp.prototype.exec;var ht=$,mt=function(r){try{return dt.call(r),!0}catch(r){return!1}},bt=P();var wt=gt,yt=Pr,Et=$r.isPrimitive,jt=function(r){return"object"==typeof r&&(r instanceof RegExp||(bt?mt(r):"[object RegExp]"===ht(r)))};var Pt=Ne,_t=Re,Tt=Ae,Ot=function(r,e,t){if(!Et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Et(e))e=wt(e),e=new RegExp(e,"g");else if(!jt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Et(t)&&!yt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Vt=Le,xt=qr.isPrimitive,St=function(r){return Math.abs(r)},kt=/e\+(\d)$/,It=/e-(\d)$/,At=/^(\d+)$/,Ft=/^(\d+)e/,Rt=/\.0$/,$t=/\.0*e/,Mt=/(\..*[^0])0*e/;var Ct=function(r){var e,t,n=parseFloat(r.arg);if(!Vt(n)){if(!xt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":St(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ot(t,Mt,"$1e"),t=Ot(t,$t,"e"),t=Ot(t,Rt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ot(t,kt,"e+0$1"),t=Ot(t,It,"e-0$1"),r.alternate&&(t=Ot(t,At,"$1."),t=Ot(t,Ft,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Pt(r.specifier)?_t(t):Tt(t)},Nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Bt=Qe;var Gt=$r.isPrimitive,Lt=ke,Zt=ge,Wt=lt,Xt=Ct,zt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Nt.exec(r);a;)(t=r.slice(e,Nt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Nt.lastIndex,a=Nt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ut=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Bt(" ",n):Bt(" ",n)+r},Yt=it,Dt=String.fromCharCode;var qt=i,Ht=Pr,Jt=function(r){var e,t,n,i,a,o,u,c,s;if(!Gt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=zt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Gt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Lt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Zt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Zt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Wt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Zt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Zt(a)?String(n.arg):Dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Xt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Yt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ut(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Kt=function(r,e,t){var n,i,a;if(!qt(r))throw new TypeError(Jt("invalid argument. First argument must be a collection. Value: `%s`.",r));if(!Ht(e))throw new TypeError(Jt("invalid argument. Second argument must be a function. Value: `%s`.",e));for(i=r.length,n={},a=0;a<i;a++)n[e.call(t,r[a],a)]=r[a];return n};export{Kt as default};
//# sourceMappingURL=mod.js.map
