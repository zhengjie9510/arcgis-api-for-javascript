"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[1802],{21802:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var i=n(73396);const s=t=>((0,i.dD)("data-v-6967ab52"),t=t(),(0,i.Cn)(),t),o={id:"cesiumContainer"},c=s((()=>(0,i._)("div",{id:"slider"},null,-1))),r=[c];function a(t,e,n,s,c,a){return(0,i.wg)(),(0,i.iD)("div",o,r)}var u=n(52734),d=n(40985),f=n(40617),l=n(121),p=n(72915),m=n(16315),I=n(28807),Z=n(69530),g={mounted(){this.init()},methods:{init(){const t=new u.Z("cesiumContainer");d.Z.supportsImageRenderingPixelated()&&(t.resolutionScale=window.devicePixelRatio),t.scene.postProcessStages.fxaa.enabled=!0,this.split(t);const e=f.Z.fromDegrees(116.38,39.9);t.camera.lookAt(e,new f.Z(0,-1e3,3e3)),t.camera.lookAtTransform(l.Z.IDENTITY)},split:function(t){const e=t.imageryLayers.addImageryProvider(new p.Z({url:"https://a.tile.openstreetmap.org/"}));e.splitDirection=m.Z.RIGHT;const n=document.getElementById("slider");t.scene.splitPosition=n.offsetLeft/n.parentElement.offsetWidth;const i=new I.Z(n);let s=!1;function o(e){if(!s)return;const i=e.endPosition.x,o=(n.offsetLeft+i)/n.parentElement.offsetWidth;n.style.left=100*o+"%",t.scene.splitPosition=o}i.setInputAction((function(){s=!0}),Z.Z.LEFT_DOWN),i.setInputAction((function(){s=!0}),Z.Z.PINCH_START),i.setInputAction(o,Z.Z.MOUSE_MOVE),i.setInputAction(o,Z.Z.PINCH_MOVE),i.setInputAction((function(){s=!1}),Z.Z.LEFT_UP),i.setInputAction((function(){s=!1}),Z.Z.PINCH_END)}}},w=n(40089);const P=(0,w.Z)(g,[["render",a],["__scopeId","data-v-6967ab52"]]);var E=P}}]);
//# sourceMappingURL=1802.48b60fee.js.map