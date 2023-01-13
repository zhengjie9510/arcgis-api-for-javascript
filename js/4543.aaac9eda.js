"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[4543],{84543:function(e,t,n){n.d(t,{z:function(){return r}});n(57658);var o=n(11114);const a={type:"change"},i={type:"start"},s={type:"end"};class r extends o.pBf{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.touches={ONE:o.QmN.ROTATE,TWO:o.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return m.phi},this.getAzimuthalAngle=function(){return m.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",se),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=r.NONE},this.update=function(){const t=new o.Pa4,i=(new o._fP).setFromUnitVectors(e.up,new o.Pa4(0,1,0)),s=i.clone().invert(),b=new o.Pa4,f=new o._fP,E=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),m.setFromVector3(t),n.autoRotate&&c===r.NONE&&M(v()),n.enableDamping?(m.theta+=p.theta*n.dampingFactor,m.phi+=p.phi*n.dampingFactor):(m.theta+=p.theta,m.phi+=p.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=E:o>Math.PI&&(o-=E),g<-Math.PI?g+=E:g>Math.PI&&(g-=E),m.theta=o<=g?Math.max(o,Math.min(g,m.theta)):m.theta>(o+g)/2?Math.max(o,m.theta):Math.min(g,m.theta)),m.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,m.phi)),m.makeSafe(),m.radius*=u,m.radius=Math.max(n.minDistance,Math.min(n.maxDistance,m.radius)),!0===n.enableDamping?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),t.setFromSpherical(m),t.applyQuaternion(s),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),d.set(0,0,0)),u=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),f.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",le),n.domElement.removeEventListener("pointerdown",J),n.domElement.removeEventListener("pointercancel",ne),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",te),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",se)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=r.NONE;const l=1e-6,m=new o.$V,p=new o.$V;let u=1;const d=new o.Pa4;let h=!1;const b=new o.FM8,f=new o.FM8,E=new o.FM8,g=new o.FM8,P=new o.FM8,y=new o.FM8,O=new o.FM8,T=new o.FM8,A=new o.FM8,w=[],N={};function v(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function M(e){p.theta-=e}function j(e){p.phi-=e}const R=function(){const e=new o.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),k=function(){const e=new o.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),Y=function(){const e=new o.Pa4;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),R(2*t*s/a.clientHeight,n.object.matrix),k(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function x(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function D(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(e){b.set(e.clientX,e.clientY)}function C(e){O.set(e.clientX,e.clientY)}function S(e){g.set(e.clientX,e.clientY)}function F(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*E.x/t.clientHeight),j(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}function _(e){T.set(e.clientX,e.clientY),A.subVectors(T,O),A.y>0?x(L()):A.y<0&&D(L()),O.copy(T),n.update()}function H(e){P.set(e.clientX,e.clientY),y.subVectors(P,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(P),n.update()}function z(e){e.deltaY<0?D(L()):e.deltaY>0&&x(L()),n.update()}function X(e){let t=!1;switch(e.code){case n.keys.UP:Y(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:Y(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:Y(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:Y(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function Z(){if(1===w.length)b.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);b.set(e,t)}}function U(){if(1===w.length)g.set(w[0].pageX,w[0].pageY);else{const e=.5*(w[0].pageX+w[1].pageX),t=.5*(w[0].pageY+w[1].pageY);g.set(e,t)}}function K(){const e=w[0].pageX-w[1].pageX,t=w[0].pageY-w[1].pageY,n=Math.sqrt(e*e+t*t);O.set(0,n)}function V(){n.enableZoom&&K(),n.enablePan&&U()}function Q(){n.enableZoom&&K(),n.enableRotate&&Z()}function B(e){if(1==w.length)f.set(e.pageX,e.pageY);else{const t=de(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;M(2*Math.PI*E.x/t.clientHeight),j(2*Math.PI*E.y/t.clientHeight),b.copy(f)}function G(e){if(1===w.length)P.set(e.pageX,e.pageY);else{const t=de(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}y.subVectors(P,g).multiplyScalar(n.panSpeed),Y(y.x,y.y),g.copy(P)}function W(e){const t=de(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);T.set(0,i),A.set(0,Math.pow(T.y/O.y,n.zoomSpeed)),x(A.y),O.copy(T)}function q(e){n.enableZoom&&W(e),n.enablePan&&G(e)}function $(e){n.enableZoom&&W(e),n.enableRotate&&B(e)}function J(e){!1!==n.enabled&&(0===w.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",te)),me(e),"touch"===e.pointerType?re(e):oe(e))}function ee(e){!1!==n.enabled&&("touch"===e.pointerType?ce(e):ae(e))}function te(e){pe(e),0===w.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",te)),n.dispatchEvent(s),c=r.NONE}function ne(e){pe(e)}function oe(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.RsA.DOLLY:if(!1===n.enableZoom)return;C(e),c=r.DOLLY;break;case o.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;S(e),c=r.PAN}else{if(!1===n.enableRotate)return;I(e),c=r.ROTATE}break;case o.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;I(e),c=r.ROTATE}else{if(!1===n.enablePan)return;S(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}function ae(e){if(!1!==n.enabled)switch(c){case r.ROTATE:if(!1===n.enableRotate)return;F(e);break;case r.DOLLY:if(!1===n.enableZoom)return;_(e);break;case r.PAN:if(!1===n.enablePan)return;H(e);break}}function ie(e){!1!==n.enabled&&!1!==n.enableZoom&&c===r.NONE&&(e.preventDefault(),n.dispatchEvent(i),z(e),n.dispatchEvent(s))}function se(e){!1!==n.enabled&&!1!==n.enablePan&&X(e)}function re(e){switch(ue(e),w.length){case 1:switch(n.touches.ONE){case o.QmN.ROTATE:if(!1===n.enableRotate)return;Z(),c=r.TOUCH_ROTATE;break;case o.QmN.PAN:if(!1===n.enablePan)return;U(),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case o.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;V(),c=r.TOUCH_DOLLY_PAN;break;case o.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;Q(),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}function ce(e){switch(ue(e),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;B(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;G(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;q(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;$(e),n.update();break;default:c=r.NONE}}function le(e){!1!==n.enabled&&e.preventDefault()}function me(e){w.push(e)}function pe(e){delete N[e.pointerId];for(let t=0;t<w.length;t++)if(w[t].pointerId==e.pointerId)return void w.splice(t,1)}function ue(e){let t=N[e.pointerId];void 0===t&&(t=new o.FM8,N[e.pointerId]=t),t.set(e.pageX,e.pageY)}function de(e){const t=e.pointerId===w[0].pointerId?w[1]:w[0];return N[t.pointerId]}n.domElement.addEventListener("contextmenu",le),n.domElement.addEventListener("pointerdown",J),n.domElement.addEventListener("pointercancel",ne),n.domElement.addEventListener("wheel",ie,{passive:!1}),this.update()}}}}]);
//# sourceMappingURL=4543.aaac9eda.js.map