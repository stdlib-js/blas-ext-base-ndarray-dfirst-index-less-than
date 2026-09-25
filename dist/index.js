"use strict";var l=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var c=l(function(h,q){
var m=require('@stdlib/ndarray-base-numel-dimension/dist'),f=require('@stdlib/ndarray-base-stride/dist'),x=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),g=require('@stdlib/blas-ext-base-dfirst-index-less-than/dist').ndarray,y=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function p(a){var r,e,u,d,s,n,i,t,v;if(t=a[0],v=a[1],i=m(t,0),r=y(a[2]),r<0)r+=i,r<0&&(r=0);else if(r>=i)return-1;return i-=r,s=f(t,0),n=f(v,0),u=x(t)+s*r,d=x(v)+n*r,e=g(i,o(t),s,u,o(v),n,d),e>=0&&(e+=r),e}q.exports=p
});var D=c();module.exports=D;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
