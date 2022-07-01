// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function e(e,o,i){var n,d,m;if(!r(e))throw new TypeError(s("0kNBO",e));if(!t(o))throw new TypeError(s("0kN2S",o));for(d=e.length,n={},m=0;m<d;m++)n[o.call(i,e[m],m)]=e[m];return n}export{e as default};
//# sourceMappingURL=index.mjs.map
