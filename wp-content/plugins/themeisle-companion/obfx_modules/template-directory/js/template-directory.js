!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(n,c,function(t){return e[t]}.bind(null,c));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=c.apply(null,n);i&&e.push(i)}}else if("object"===r)if(n.toString===Object.prototype.toString)for(var l in n)a.call(n,l)&&n[l]&&e.push(l);else e.push(n.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a(1),i=a(3),l=a.n(i);var s=()=>{const{assets:e,neveData:t,tpcData:a,strings:i,tpcAdminURL:s}=template_directory,{themeNotInstalled:o,themeNotActive:u,tpcNotInstalled:m,tpcNotActive:p}=i,[d,b]=Object(n.useState)(!1),[v,g]=Object(n.useState)(!1),[j,O]=Object(n.useState)(t.cta),[f,y]=Object(n.useState)(!1),[h,_]=Object(n.useState)(!1),[E,S]=Object(n.useState)(a.cta),w={activating:b,installing:g,currentState:O},N={activating:y,installing:_,currentState:S},[x,A]=Object(n.useState)(!1),[P,T]=Object(n.useState)(!1);let C=o;"activate"===t.cta&&(C=u);let k=m;"activate"===a.cta&&(k=p);const I={install:{static:Object(r.__)("Install and Activate","neve"),progress:Object(r.__)("Installing","neve")},activate:{static:Object(r.__)("Activate","neve"),progress:Object(r.__)("Activating","neve")}},M=(e,t,a,i,l,s,o)=>{const u={install:Object(n.createElement)(c.Button,{disabled:e,isPrimary:!e,isSecondary:e,className:e&&"is-loading",icon:e&&"update",onClick:()=>B(i,l,s,o)},e?I.install.progress+"...":I.install.static),activate:Object(n.createElement)(c.Button,{disabled:t,isPrimary:!t,isSecondary:t,className:t&&"is-loading",icon:t&&"update",onClick:()=>L(i,o)},t?I.activate.progress+"...":I.activate.static),deactivate:Object(n.createElement)(c.Button,{disabled:!0,isSecondary:!0,className:"is-loading"},Object(r.__)("Activated"))};return Object(n.createElement)(n.Fragment,null,u[a])},B=(e,t,a,n)=>{e.installing(!0),wp.updates.ajax("install-"+t,{slug:a,success:()=>{L(e,n)},error:t=>{"folder_exists"===t.errorCode?L(e,n):(A(t.errorMessage?t.errorMessage:Object(r.__)("Something went wrong. Please try again.","themeisle-companion")),e.installing(!1),setTimeout(()=>A(!1),3e3))}})},L=(e,t)=>{e.installing(!1),e.activating(!0),e.currentState("activate"),(async e=>{const t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","x-wp-nonce":template_directory.nonce}};return await fetch(e,t).then(e=>e)})(t).then(t=>{t.ok?(e.activating(!1),e.currentState("deactivate"),T(!0)):(A(Object(r.__)("Something went wrong. Please try again.","themeisle-companion")),e.activating(!1),setTimeout(()=>A(!1),3e3))})},D="deactivate"!==a.cta,F="deactivate"!==t.cta;"deactivate"===E&&"deactivate"===j&&(window.location.href=s);const G=!D||!F;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"ss-background",style:{backgroundImage:`url(${e}/img/starter.jpg)`}}),Object(n.createElement)("div",{className:"unavailable-starter-sites"},Object(n.createElement)("div",{className:l()(["slider",{"move-right":P&&!G},{single:G}])},D&&Object(n.createElement)("div",{className:"content-wrap"},Object(n.createElement)("img",{src:e+"/img/tpc.svg",alt:Object(r.__)("Templates Cloud Logo","themeisle-companion")}),Object(n.createElement)("h1",null,I[a.cta].static+" Templates Cloud"),Object(n.createElement)("p",{className:"error"},k),M(h,f,E,N,"plugin","templates-patterns-collection",a.activate)),F&&Object(n.createElement)("div",{className:"content-wrap"},Object(n.createElement)("img",{src:e+"/img/neve.svg",alt:Object(r.__)("Neve Theme Logo","themeisle-companion")}),Object(n.createElement)("h1",null,I[t.cta].static+" Neve"),Object(n.createElement)("p",{className:"error"},C),M(v,d,j,w,"theme","neve",t.activate))),"deactivate"!==t.cta&&"deactivate"!==a.cta&&Object(n.createElement)("div",{className:"stepper"},Object(n.createElement)("button",{className:l()(["dot",{current:!P}]),onClick:()=>T(!P)}),Object(n.createElement)("button",{className:l()(["dot",{current:P}]),onClick:()=>T(!P)})),x&&Object(n.createElement)("div",{className:"error"}," ",x," ")))},o=()=>Object(n.createElement)("div",null,Object(n.createElement)(s,null));Object(n.render)(Object(n.createElement)(()=>Object(n.createElement)(o,null),null),document.getElementById("obfx-template-directory"))}]);