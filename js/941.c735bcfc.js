"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[941],{34941:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var s=t(73396);const n={id:"cesiumContainer"};function a(e,i,t,a,o,c){return(0,s.wg)(),(0,s.iD)("div",n)}t(57658);var o=t(51119),c=t(28807),h=t(51625),r=t(74683),d=t(69530),p=t(31724),l=t(52734),u=t(12588),v=t(40985);class P{constructor(e){this.layer=new o.Z("MyLines"),this.activeShapePoints=[],this.activeShape=void 0,this.handler=void 0}bindAction(e){this.handler||(this.handler=new c.Z(e.scene.canvas)),this.handler.setInputAction((i=>{const t=this.getPosition(e,i.position);if(h.Z(t)){if(0===this.activeShapePoints.length){this.activeShapePoints.push(t);const e=new r.Z((()=>this.activeShapePoints),!1);this.activeShape=this.drawLine(e)}this.activeShapePoints.push(t)}}),d.Z.LEFT_CLICK),this.handler.setInputAction((i=>{if(this.activeShapePoints.length>=2){const t=this.getPosition(e,i.endPosition);h.Z(t)&&(this.activeShapePoints.pop(),this.activeShapePoints.push(t))}}),d.Z.MOUSE_MOVE),this.handler.setInputAction((e=>{this.activeShapePoints.pop(),this.drawLine(this.activeShapePoints),this.layer.entities.remove(this.activeShape),this.activeShapePoints=[]}),d.Z.RIGHT_CLICK)}getPosition(e,i){let t;if(e.terrainProvider instanceof p.Z)t=e.scene.camera.pickEllipsoid(i);else{const s=e.camera.getPickRay(i);t=e.scene.globe.pick(s,e.scene)}return t}drawLine(e){return this.layer.entities.add({polyline:{positions:e,clampToGround:!0,width:3}})}addToMap(e){e.dataSources.add(this.layer)}}var S={mounted(){this.init()},methods:{init(){const e=new l.Z("cesiumContainer",{imageryProvider:new u.Z({url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]})});v.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.debugShowFramesPerSecond=!0;const i=new P;i.bindAction(e),i.addToMap(e)}}},w=t(40089);const g=(0,w.Z)(S,[["render",a],["__scopeId","data-v-3ea5542a"]]);var m=g}}]);
//# sourceMappingURL=941.c735bcfc.js.map