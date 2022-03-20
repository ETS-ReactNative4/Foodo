"use strict";(self.webpackChunkFoodo=self.webpackChunkFoodo||[]).push([[4525],{4525:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return p}});var o=n(3431),r=n(9069),i=new WeakMap,a=function(e,t,n,o){void 0===o&&(o=0),i.has(e)!==n&&(n?c(e,t,o):l(e,t))},u=function(e){return e===e.getRootNode().activeElement},c=function(e,t,n){var o=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o.appendChild(r),i.set(e,r);var a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},s="input, textarea, [no-blur], [contenteditable]",d=function(e,t,n,o){var r=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,o-n)-i,l=u-r,s=Math.round(c<0?-c:l>0?-l:0),d=Math.min(s,r-a),f=Math.abs(d)/.3;return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(r-u)}},f=function(e,t,n,i,u){return(0,o.mG)(void 0,void 0,void 0,(function(){var c,l,s,f,v,m;return(0,o.Jh)(this,(function(p){switch(p.label){case 0:return n||i?(c=function(e,t,n){var o=e.closest("ion-item,[ion-item]")||e;return d(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)}(e,n||i,u),n&&Math.abs(c.scrollAmount)<4?(t.focus(),[2]):(a(e,t,!0,c.inputSafeY),t.focus(),(0,r.r)((function(){return e.click()})),"undefined"===typeof window?[3,3]:(s=function(){return(0,o.mG)(void 0,void 0,void 0,(function(){return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return void 0!==l&&clearTimeout(l),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",s),n?[4,n.scrollByPoint(0,c.scrollAmount,c.scrollDuration)]:[3,2];case 1:o.sent(),o.label=2;case 2:return a(e,t,!1,c.inputSafeY),t.focus(),[2]}}))}))},f=function(){window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",s)},n?[4,n.getScrollElement()]:[3,2]))):[2];case 1:if(v=p.sent(),m=v.scrollHeight-v.clientHeight,c.scrollAmount>m-v.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",s),l=setTimeout(s,1e3),[2];p.label=2;case 2:s(),p.label=3;case 3:return[2]}}))}))},v=function(e,t,n){if(t&&n){var o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},m=function(e,t){if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&(!e.parentElement||!e.parentElement.parentElement||"ION-SEARCHBAR"!==e.parentElement.parentElement.tagName)){var n=e.closest("ion-content");if(null!==n){var o=n.$ionPaddingTimer;o&&clearTimeout(o),t>0?n.style.setProperty("--keyboard-offset","".concat(t,"px")):n.$ionPaddingTimer=setTimeout((function(){n.style.setProperty("--keyboard-offset","0px")}),120)}}},p=function(e){var t=document,n=e.getNumber("keyboardHeight",290),i=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",!0),l=e.getBoolean("inputBlurring",!0),d=e.getBoolean("scrollPadding",!0),p=Array.from(t.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,w=new WeakMap,E=function(e){return(0,o.mG)(void 0,void 0,void 0,(function(){var t,l,s,d,m;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return[4,new Promise((function(t){return(0,r.c)(e,t)}))];case 1:return o.sent(),t=e.shadowRoot||e,l=t.querySelector("input")||t.querySelector("textarea"),s=e.closest("ion-content"),d=s?null:e.closest("ion-footer"),l?(s&&c&&!h.has(e)&&(m=function(e,t,n){if(!n||!t)return function(){};var o=function(n){u(t)&&a(e,t,n)},i=function(){return a(e,t,!1)},c=function(){return o(!0)},l=function(){return o(!1)};return(0,r.a)(n,"ionScrollStart",c),(0,r.a)(n,"ionScrollEnd",l),t.addEventListener("blur",i),function(){(0,r.b)(n,"ionScrollStart",c),(0,r.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",i)}}(e,l,s),h.set(e,m)),(s||d)&&i&&!w.has(e)&&(m=function(e,t,n,o,i){var a,c=function(e){a=(0,r.p)(e)},l=function(c){if(a){var l=(0,r.p)(c);v(6,a,l)||u(t)||(c.stopPropagation(),f(e,t,n,o,i))}};return e.addEventListener("touchstart",c,!0),e.addEventListener("touchend",l,!0),function(){e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",l,!0)}}(e,l,s,d,n),w.set(e,m)),[2]):[2]}}))}))};l&&function(){var e=!0,t=!1,n=document,o=function(){t=!0},i=function(){e=!0},a=function(o){if(t)t=!1;else{var r=n.activeElement;if(r&&!r.matches(s)){var i=o.target;i!==r&&(i.matches(s)||i.closest(s)||(e=!1,setTimeout((function(){e||r.blur()}),50)))}}};(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)}(),d&&function(e){var t=document,n=function(t){m(t.target,e)},o=function(e){m(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)}(n);for(var g=0,b=p;g<b.length;g++){var y=b[g];E(y)}t.addEventListener("ionInputDidLoad",(function(e){E(e.detail)})),t.addEventListener("ionInputDidUnload",(function(e){!function(e){var t;c&&((t=h.get(e))&&t(),h.delete(e)),i&&((t=w.get(e))&&t(),w.delete(e))}(e.detail)}))}}}]);
//# sourceMappingURL=4525.9c8754b3.chunk.js.map