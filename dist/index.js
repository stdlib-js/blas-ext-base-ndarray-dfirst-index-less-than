"use strict";var v=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=v(function(c,u){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),a=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),q=require('@stdlib/blas-ext-base-dfirst-index-less-than/dist').ndarray;function f(t){var r=t[0],e=t[1];return q(d(r,0),s(r),i(r,0),a(r),s(e),i(e,0),a(e))}u.exports=f
});var o=n();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
