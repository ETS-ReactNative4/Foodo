/*! For license information please see 13.d1fa9cbf.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkFoodo=self.webpackChunkFoodo||[]).push([[13,1325,9691,8855],{1325:function(t,e,r){r.r(e),r.d(e,{C:function(){return s},a:function(){return i},d:function(){return a}});var o=r(3431),n=r(9069),i=function(t,e,r,i,a,s){return(0,o.mG)(void 0,void 0,void 0,(function(){var d;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:if(t)return[2,t.attachViewToDom(e,r,a,i)];if(!s&&"string"!==typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return d="string"===typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(t){return d.classList.add(t)})),a&&Object.assign(d,a),e.appendChild(d),[4,new Promise((function(t){return(0,n.c)(d,t)}))];case 1:return o.sent(),[2,d]}}))}))},a=function(t,e){if(e){if(t){var r=e.parentElement;return t.removeViewFromDom(r,e)}e.remove()}return Promise.resolve()},s=function(){var t,e;return{attachViewToDom:function(r,i,a,s){return void 0===a&&(a={}),void 0===s&&(s=[]),(0,o.mG)(void 0,void 0,void 0,(function(){var d,c,l;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return t=r,i?(d="string"===typeof i?t.ownerDocument&&t.ownerDocument.createElement(i):i,s.forEach((function(t){return d.classList.add(t)})),Object.assign(d,a),t.appendChild(d),[4,new Promise((function(t){return(0,n.c)(d,t)}))]):[3,2];case 1:return o.sent(),[3,3];case 2:t.children.length>0&&(c=t.ownerDocument&&t.ownerDocument.createElement("div"),s.forEach((function(t){return c.classList.add(t)})),c.append.apply(c,t.children),t.appendChild(c)),o.label=3;case 3:return l=document.querySelector("ion-app")||document.body,e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),l.appendChild(t),[2,t]}}))}))},removeViewFromDom:function(){return t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve()}}}},13:function(t,e,r){r.r(e),r.d(e,{ion_modal:function(){return D}});var o=r(3431),n=r(5785),i=r(7923),a=r(1325),s=r(9069),d=r(9691),c=r(79),l=r(8855),p=r(6667),h=r(3562),u=r(5147),f=r(236),m=(r(1045),.93),b=function(t,e){return(0,s.k)(400,t/Math.abs(1.1*e),500)},g=function(t,e){var r=1/(1-e);return t*r+-e*r},v=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,o=void 0===r||r<e,n=o?"calc(var(--backdrop-opacity) * ".concat(e,")"):"0",i=(0,h.c)("backdropAnimation").fromTo("opacity",0,n);return o&&i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-100*e,"%)")}]),backdropAnimation:i}},w=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,o="calc(var(--backdrop-opacity) * ".concat(g(e,r),")"),n=[{offset:0,opacity:o},{offset:1,opacity:0}],i=[{offset:0,opacity:o},{offset:r,opacity:0},{offset:1,opacity:0}],a=(0,h.c)("backdropAnimation").keyframes(0!==r?i:n);return{wrapperAnimation:(0,h.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-100*e,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},y=function(t,e){var r=e.presentingEl,o=e.currentBreakpoint,n=(0,s.g)(t),i=void 0!==o?v(e):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")},a=i.wrapperAnimation,d=i.backdropAnimation;d.addElement(n.querySelector("ion-backdrop")),a.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var c=(0,h.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){var l=window.innerWidth<768,p="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,u=(0,s.g)(r),f=(0,h.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),b=document.body;if(l){var g=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",w=m,y="translateY(".concat(p?"-10px":g,") scale(").concat(w,")");f.afterStyles({transform:y}).beforeAddWrite((function(){return b.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:y,borderRadius:"10px 10px 0 0"}]),c.addAnimation(f)}else if(c.addAnimation(d),p){y="translateY(-10px) scale(".concat(w=p?m:1,")");f.afterStyles({transform:y}).addElement(u.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:y}]);var k=(0,h.c)().afterStyles({transform:y}).addElement(u.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:y}]);c.addAnimation([f,k])}else a.fromTo("opacity","0","1")}else c.addAnimation(d);return c},k=function(t,e,r){void 0===r&&(r=500);var o=e.presentingEl,n=e.currentBreakpoint,i=(0,s.g)(t),a=void 0!==n?w(e):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")},d=a.wrapperAnimation,c=a.backdropAnimation;c.addElement(i.querySelector("ion-backdrop")),d.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=(0,h.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(d);if(o){var p=window.innerWidth<768,u="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,f=(0,s.g)(o),b=(0,h.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(1===t){o.style.setProperty("overflow","");var e=Array.from(g.querySelectorAll("ion-modal")).filter((function(t){return void 0!==t.presentingElement})).length;e<=1&&g.style.setProperty("background-color","")}})),g=document.body;if(p){var v=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",y=m,k="translateY(".concat(u?"-10px":v,") scale(").concat(y,")");b.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:k,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(b)}else if(l.addAnimation(c),u){k="translateY(-10px) scale(".concat(y=u?m:1,")");b.addElement(f.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:k},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var x=(0,h.c)().addElement(f.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:k},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([b,x])}else d.fromTo("opacity","1","0")}else l.addAnimation(c);return l},x=function(t,e){var r=e.currentBreakpoint,o=(0,s.g)(t),n=void 0!==r?v(e):{backdropAnimation:(0,h.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])},i=n.wrapperAnimation,a=n.backdropAnimation;return a.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,i])},E=function(t,e){var r=e.currentBreakpoint,o=(0,s.g)(t),n=void 0!==r?w(e):{backdropAnimation:(0,h.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,h.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])},i=n.wrapperAnimation,a=n.backdropAnimation;return a.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,h.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,i])},D=function(){function t(t){var e=this;(0,n.r)(this,t),this.didPresent=(0,n.e)(this,"ionModalDidPresent",7),this.willPresent=(0,n.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,n.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,n.e)(this,"ionModalDidDismiss",7),this.didPresentShorthand=(0,n.e)(this,"didPresent",7),this.willPresentShorthand=(0,n.e)(this,"willPresent",7),this.willDismissShorthand=(0,n.e)(this,"willDismiss",7),this.didDismissShorthand=(0,n.e)(this,"didDismiss",7),this.modalIndex=S++,this.coreDelegate=(0,a.C)(),this.isSheetModal=!1,this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.configureTriggerInteraction=function(){var t=e,r=t.trigger,o=t.el,n=t.destroyTriggerInteraction;n&&n();var i=void 0!==r?document.getElementById(r):null;if(i){e.destroyTriggerInteraction=function(t,e){var r=function(){e.present()};return t.addEventListener("click",r),function(){t.removeEventListener("click",r)}}(i,o)}},this.onBackdropTap=function(){e.dismiss(void 0,c.B)},this.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),e.dismiss()},this.onLifecycle=function(t){var r=e.usersElement,o=A[t.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(n)}}}return t.prototype.onIsOpenChange=function(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()},t.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},t.prototype.swipeToCloseChanged=function(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()},t.prototype.connectedCallback=function(){(0,c.e)(this.el)},t.prototype.componentWillLoad=function(){var t=this.breakpoints,e=this.initialBreakpoint;this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-modal-".concat(this.modalIndex),this.isSheetModal=void 0!==t&&void 0!==e,void 0===t||void 0===e||t.includes(e)||console.warn("[Ionic Warning]: Your breakpoints array must include the initialBreakpoint value.")},t.prototype.componentDidLoad=function(){var t=this;!0===this.isOpen&&(0,s.r)((function(){return t.present()})),this.configureTriggerInteraction()},t.prototype.getDelegate=function(t){if(void 0===t&&(t=!1),this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};var e=this.el.parentNode,r=this.inline=null!==e&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}},t.prototype.present=function(){return(0,o.mG)(this,void 0,void 0,(function(){var t,e,r,i,l,h=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:o.sent(),o.label=2;case 2:return t=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e=this.getDelegate(!0),r=e.inline,i=e.delegate,l=this,[4,(0,a.a)(i,this.el,this.component,["ion-page"],t,r)];case 3:return l.usersElement=o.sent(),[4,(0,p.e)(this.usersElement)];case 4:return o.sent(),(0,n.c)((function(){return h.el.classList.add("show-modal")})),this.currentTransition=(0,c.d)(this,"modalEnter",y,x,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),[4,this.currentTransition];case 5:return o.sent(),this.isSheetModal?this.initSheetGesture():this.swipeToClose&&this.initSwipeToClose(),"undefined"!==typeof window&&(this.keyboardOpenCallback=function(){h.gesture&&(h.gesture.enable(!1),(0,s.r)((function(){h.gesture&&h.gesture.enable(!0)})))},window.addEventListener(d.KEYBOARD_DID_OPEN,this.keyboardOpenCallback)),this.currentTransition=void 0,[2]}}))}))},t.prototype.initSwipeToClose=function(){var t=this;if("ios"===(0,i.b)(this)){var e=this.leaveAnimation||i.c.get("modalLeave",k),r=this.animation=e(this.el,{presentingEl:this.presentingElement});this.gesture=function(t,e,r){var o=t.offsetHeight,n=!1,i=(0,f.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target;return null===e||!e.closest||null===e.closest("ion-content, ion-footer")},onStart:function(){e.progressStart(!0,n?1:0)},onMove:function(t){var r=(0,s.k)(1e-4,t.deltaY/o,.9999);e.progressStep(r)},onEnd:function(t){var a=t.velocityY,d=(0,s.k)(1e-4,t.deltaY/o,.9999),c=(t.deltaY+1e3*a)/o>=.5,l=c?-.001:.001;c?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=(0,u.g)([0,0],[.32,.72],[0,1],[1,1],d)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=(0,u.g)([0,0],[1,0],[.68,.28],[1,1],d)[0]);var p=b(c?d*o:(1-d)*o,a);n=c,i.enable(!1),e.onFinish((function(){c||i.enable(!0)})).progressEnd(c?1:0,l,p),c&&r()}});return i}(this.el,r,(function(){t.gestureAnimationDismissing=!0,t.animation.onFinish((function(){return(0,o.mG)(t,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}},t.prototype.initSheetGesture=function(){var t,e=this,r=this,n=r.wrapperEl,a=r.initialBreakpoint,d=r.backdropBreakpoint;if(n&&void 0!==a){var c=this.enterAnimation||i.c.get("modalEnter",y),l=this.animation=c(this.el,{presentingEl:this.presentingElement,currentBreakpoint:a,backdropBreakpoint:d});l.progressStart(!0,1);var p=(null===(t=this.breakpoints)||void 0===t?void 0:t.sort((function(t,e){return t-e})))||[];this.gesture=function(t,e,r,n,i,a,d,c,l){void 0===d&&(d=[]);var p={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},h=t.querySelector("ion-content"),u=r.clientHeight,m=n,b=0,v=a.childAnimations.find((function(t){return"wrapperAnimation"===t.id})),w=a.childAnimations.find((function(t){return"backdropAnimation"===t.id})),y=d[d.length-1],k=function(){t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},x=function(){t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};v&&w&&(v.keyframes((0,o.ev)([],p.WRAPPER_KEYFRAMES,!0)),w.keyframes((0,o.ev)([],p.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-m),m>i?k():x()),h&&m!==y&&(h.scrollY=!1);var E=(0,f.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target.closest("ion-content");return 1!==m||!e},onStart:function(){h&&(h.scrollY=!1),(0,s.r)((function(){t.focus()})),a.progressStart(!0,1-m)},onMove:function(t){var e=1-m;b=(0,s.k)(1e-4,e+t.deltaY/u,.9999),a.progressStep(b)},onEnd:function(t){var e=t.velocityY,r=(t.deltaY+100*e)/u,n=m-r,f=d.reduce((function(t,e){return Math.abs(e-n)<Math.abs(t-n)?e:t})),y=0!==f;m=0,v&&w&&(v.keyframes([{offset:0,transform:"translateY(".concat(100*b,"%)")},{offset:1,transform:"translateY(".concat(100*(1-f),"%)")}]),w.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(g(1-b,i),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(g(f,i),")")}]),a.progressStep(0)),E.enable(!1),a.onFinish((function(){y&&(v&&w?(0,s.r)((function(){v.keyframes((0,o.ev)([],p.WRAPPER_KEYFRAMES,!0)),w.keyframes((0,o.ev)([],p.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-f),l(m=f),h&&m===d[d.length-1]&&(h.scrollY=!0),m>i?k():x(),E.enable(!0)})):E.enable(!0))}),{oneTimeCallback:!0}).progressEnd(1,0,500),y||c()}});return E}(this.el,this.backdropEl,n,a,d,l,p,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((function(){return(0,o.mG)(e,void 0,void 0,(function(){return(0,o.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(void 0,"gesture")];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))}),(function(t){e.currentBreakpoint=t})),this.gesture.enable(!0)}},t.prototype.dismiss=function(t,e){return(0,o.mG)(this,void 0,void 0,(function(){var r,i,s,l=this;return(0,o.Jh)(this,(function(o){switch(o.label){case 0:return this.gestureAnimationDismissing&&"gesture"!==e?[2,!1]:("undefined"!==typeof window&&this.keyboardOpenCallback&&window.removeEventListener(d.KEYBOARD_DID_OPEN,this.keyboardOpenCallback),void 0===this.currentTransition?[3,2]:[4,this.currentTransition]);case 1:o.sent(),o.label=2;case 2:return r=c.h.get(this)||[],this.currentTransition=(0,c.f)(this,t,e,"modalLeave",k,E,{presentingEl:this.presentingElement,currentBreakpoint:this.currentBreakpoint||this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),[4,this.currentTransition];case 3:return(i=o.sent())?(s=this.getDelegate().delegate,[4,(0,a.d)(s,this.usersElement)]):[3,5];case 4:o.sent(),(0,n.c)((function(){return l.el.classList.remove("show-modal")})),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),r.forEach((function(t){return t.destroy()})),o.label=5;case 5:return this.currentTransition=void 0,this.animation=void 0,[2,i]}}))}))},t.prototype.onDidDismiss=function(){return(0,c.g)(this.el,"ionModalDidDismiss")},t.prototype.onWillDismiss=function(){return(0,c.g)(this.el,"ionModalWillDismiss")},t.prototype.render=function(){var t,e=this,r=this,o=r.handle,a=r.isSheetModal,s=r.presentingElement,d=r.htmlAttributes,c=!1!==o&&a,p=(0,i.b)(this),h=this.modalId,u=void 0!==s&&"ios"===p;return(0,n.h)(n.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},d,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},t[p]=!0,t["modal-default"]=!u&&!a,t["modal-card"]=u,t["modal-sheet"]=a,t["overlay-hidden"]=!0,t),(0,l.g)(this.cssClass)),id:h,onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,n.h)("ion-backdrop",{ref:function(t){return e.backdropEl=t},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===p&&(0,n.h)("div",{class:"modal-shadow"}),(0,n.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(t){return e.wrapperEl=t}},c&&(0,n.h)("div",{class:"modal-handle",part:"handle"}),(0,n.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,n.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}},enumerable:!1,configurable:!0}),t}(),A={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"},S=0;D.style={ios:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}",md:":host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);background:var(--ion-color-step-350, #c0c0be);z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}},9691:function(t,e,r){r.r(e),r.d(e,{KEYBOARD_DID_CLOSE:function(){return n},KEYBOARD_DID_OPEN:function(){return o},copyVisualViewport:function(){return w},keyboardDidClose:function(){return m},keyboardDidOpen:function(){return u},keyboardDidResize:function(){return f},resetKeyboardAssist:function(){return d},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return p},startKeyboardAssist:function(){return c},trackViewportChanges:function(){return v}});var o="ionKeyboardDidShow",n="ionKeyboardDidHide",i={},a={},s=!1,d=function(){i={},a={},s=!1},c=function(t){l(t),t.visualViewport&&(a=w(t.visualViewport),t.visualViewport.onresize=function(){v(t),u()||f(t)?p(t):m(t)&&h(t)})},l=function(t){t.addEventListener("keyboardDidShow",(function(e){return p(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},p=function(t,e){b(t,e),s=!0},h=function(t){g(t),s=!1},u=function(){var t=(i.height-a.height)*a.scale;return!s&&i.width===a.width&&t>150},f=function(t){return s&&!m(t)},m=function(t){return s&&a.height===t.innerHeight},b=function(t,e){var r=e?e.keyboardHeight:t.innerHeight-a.height,n=new CustomEvent(o,{detail:{keyboardHeight:r}});t.dispatchEvent(n)},g=function(t){var e=new CustomEvent(n);t.dispatchEvent(e)},v=function(t){i=Object.assign({},a),a=w(t.visualViewport)},w=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}},8855:function(t,e,r){r.r(e),r.d(e,{c:function(){return i},g:function(){return a},h:function(){return n},o:function(){return d}});var o=r(3431),n=function(t,e){return null!==e.closest(t)},i=function(t,e){var r;return"string"===typeof t&&t.length>0?Object.assign(((r={"ion-color":!0})["ion-color-".concat(t)]=!0,r),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,r,n){return(0,o.mG)(void 0,void 0,void 0,(function(){var i;return(0,o.Jh)(this,(function(o){return null!=t&&"#"!==t[0]&&!s.test(t)&&(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,i.push(t,r,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=13.d1fa9cbf.chunk.js.map