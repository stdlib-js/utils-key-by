// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Math.floor;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(t=r.length,e(t)===t)&&r.length>=0&&r.length<=9007199254740991;var t}var t=/./,i="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function a(e){return"number"==typeof e}function o(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+o(n):o(n)+e,i&&(e="-"+e)),e}var s=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function p(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!a(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===l.call(e.specifier)?l.call(t):s.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function u(e){return"string"==typeof e}var f=Math.abs,g=String.prototype.toLowerCase,d=String.prototype.toUpperCase,h=String.prototype.replace,w=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,E=/\.0*e/,x=/(\..*[^0])0*e/;function k(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":f(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=h.call(t,x,"$1e"),t=h.call(t,E,"e"),t=h.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=h.call(t,w,"e+0$1"),t=h.call(t,b,"e-0$1"),e.alternate&&(t=h.call(t,y,"$1."),t=h.call(t,v,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):g.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var i=r-e.length;return i<0?e:e=t?e+S(i):S(i)+e}var j=String.fromCharCode,V=isNaN,T=Array.isArray;function A(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function $(e){var r,t,i,n,a,o,s,l,f;if(!T(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,l=0;l<e.length;l++)if(u(i=e[l]))o+=i;else{if(r=void 0!==i.precision,!(i=A(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,V(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,V(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=p(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!V(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=V(a)?String(i.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=k(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=c(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_(i.arg,i.width,i.padRight)),o+=i.arg||"",s+=1}return o}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function C(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(I(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function R(e){return"string"==typeof e}function O(e){var r,t;if(!R(e))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[C(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return $.apply(null,r)}var Z,L=Object.prototype,P=L.toString,W=L.__defineGetter__,B=L.__defineSetter__,G=L.__lookupGetter__,M=L.__lookupSetter__;Z=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===P.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===P.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(G.call(e,r)||M.call(e,r)?(i=e.__proto__,e.__proto__=L,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(e,r,t.get),o&&B&&B.call(e,r,t.set),e};var N=Z;function U(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function X(e){return"boolean"==typeof e}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(e){var r,t,i,n,a;if(null==e)return D.call(e);t=e[K],a=K,r=null!=(n=e)&&H.call(n,a);try{e[K]=void 0}catch(r){return D.call(e)}return i=D.call(e),r?e[K]=t:delete e[K],i}:function(e){return D.call(e)},Y=Boolean,ee=Boolean.prototype.toString;var re=q();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ie(e){return X(e)||te(e)}function ne(){return new Function("return this;")()}U(ie,"isPrimitive",X),U(ie,"isObject",te);var ae="object"==typeof self?self:null,oe="object"==typeof window?window:null,ce="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},se="object"==typeof ce?ce:null,le="object"==typeof globalThis?globalThis:null;var pe=function(e){if(arguments.length){if(!X(e))throw new TypeError(O("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(le)return le;if(ae)return ae;if(oe)return oe;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),ue=pe.document&&pe.document.childNodes,fe=Int8Array;function ge(){return/^\s*function\s*([^(]*)/i}var de=/^\s*function\s*([^(]*)/i;U(ge,"REGEXP",de);var he=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function we(e){return null!==e&&"object"==typeof e}function be(e){var r,t,i,n;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=de.exec(i.toString()))return r[1]}return we(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}U(we,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(O("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!he(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(we));var ye="function"==typeof t||"object"==typeof fe||"function"==typeof ue?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?be(e).toLowerCase():r};function ve(e){return"number"==typeof e}function me(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var i=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+me(n):me(n)+e,i&&(e="-"+e)),e}var xe=String.prototype.toLowerCase,ke=String.prototype.toUpperCase;function Se(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ve(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ke.call(e.specifier)?ke.call(t):xe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function _e(e){return"string"==typeof e}var je=Math.abs,Ve=String.prototype.toLowerCase,Te=String.prototype.toUpperCase,Ae=String.prototype.replace,$e=/e\+(\d)$/,Fe=/e-(\d)$/,Ie=/^(\d+)$/,Ce=/^(\d+)e/,Re=/\.0$/,Oe=/\.0*e/,Ze=/(\..*[^0])0*e/;function Le(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ve(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":je(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ae.call(t,Ze,"$1e"),t=Ae.call(t,Oe,"e"),t=Ae.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ae.call(t,$e,"e+0$1"),t=Ae.call(t,Fe,"e-0$1"),e.alternate&&(t=Ae.call(t,Ie,"$1."),t=Ae.call(t,Ce,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Te.call(e.specifier)?Te.call(t):Ve.call(t)}function Pe(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function We(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Pe(i):Pe(i)+e}var Be=String.fromCharCode,Ge=isNaN,Me=Array.isArray;function Ne(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ue(e){var r,t,i,n,a,o,c,s,l;if(!Me(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(_e(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ne(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Ge(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Ge(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Se(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Ge(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Ge(a)?String(i.arg):Be(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Le(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Ee(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=We(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Xe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ze(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function qe(e){var r,t,i,n;for(t=[],n=0,i=Xe.exec(e);i;)(r=e.slice(n,Xe.lastIndex-i[0].length)).length&&t.push(r),t.push(ze(i)),n=Xe.lastIndex,i=Xe.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function De(e){return"string"==typeof e}function He(e){var r,t,i;if(!De(e))throw new TypeError(He("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=qe(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return Ue.apply(null,t)}function Je(e,t,i){var n,a,o;if(!r(e))throw new TypeError(He("invalid argument. First argument must be a collection. Value: `%s`.",e));if("function"!==ye(t))throw new TypeError(He("invalid argument. Second argument must be a function. Value: `%s`.",t));for(a=e.length,n={},o=0;o<a;o++)n[t.call(i,e[o],o)]=e[o];return n}export{Je as default};
//# sourceMappingURL=mod.js.map
