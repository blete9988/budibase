"use strict";var snippets=(()=>{var a=Object.create;var r=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var C=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),y=(i,e)=>{for(var n in e)r(i,n,{get:e[n],enumerable:!0})},f=(i,e,n,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let p of h(e))!x.call(i,p)&&p!==n&&r(i,p,{get:()=>e[p],enumerable:!(t=c(e,p))||t.enumerable});return i};var W=(i,e,n)=>(n=i!=null?a(l(i)):{},f(e||!i||!i.__esModule?r(n,"default",{value:i,enumerable:!0}):n,i)),d=i=>f(r({},"__esModule",{value:!0}),i);var s=C((D,o)=>{o.exports.iifeWrapper=i=>`(function(){
${i}
})();`});var v={};y(v,{default:()=>g});var u=W(s()),g=new Proxy({},{get:function(i,e){if(!(e in snippetCache))snippetCache[e]=[eval][0]((0,u.iifeWrapper)(snippetDefinitions[e]));else return n=>n*2;return snippetCache[e]}});return d(v);})();
