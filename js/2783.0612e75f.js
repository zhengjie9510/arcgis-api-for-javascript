"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[2783],{62783:function(e,o,n){n.r(o),n.d(o,{default:function(){return k}});var r=n(73396);const t={id:"cesiumContainer"};function i(e,o,n,i,a,s){return(0,r.wg)(),(0,r.iD)("div",t)}n(57658);var a=n(89262),s=n(9007),c=n(40985),d=n(30172),u=n(20362),f=n(84505),l=n(90888),m=n(40617),g=n(33350),Z=n(37706),h=n(29251),w=n(121),p=n(13226),v={mounted(){this.init()},methods:{init(){const e=new a.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.debugShowFramesPerSecond=!0;const o=(0,p.dtN)(500,{bbox:[100,25,102,27]}),n=[];for(let a of o.features){const e=a.geometry.coordinates,o=d.Z.fromDegrees(e[0],e[1]);n.push(o)}const r=new u.Z,t=new f.Z,i=e.terrainProvider,v=l.Z(i,n);Promise.resolve(v).then((function(o){for(let e of o)t.add({position:m.Z.fromRadians(e.longitude,e.latitude,e.height),image:r.fromColor(g.Z.fromRandom({alpha:1}),20).toDataURL(),verticalOrigin:Z.Z.BOTTOM,horizontalOrigin:h.Z.CENTER});e.scene.primitives.add(t)}));const b=m.Z.fromDegrees(101,26);e.camera.lookAt(b,new m.Z(0,-1e4,3930)),e.camera.lookAtTransform(w.Z.IDENTITY)}}},b=n(40089);const P=(0,b.Z)(v,[["render",i],["__scopeId","data-v-50c99a8b"]]);var k=P}}]);
//# sourceMappingURL=2783.0612e75f.js.map