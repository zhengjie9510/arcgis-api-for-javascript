"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[365],{14365:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var i=n(73396);const r=e=>((0,i.dD)("data-v-015ca138"),e=e(),(0,i.Cn)(),e),a={class:"container"},o=r((()=>(0,i._)("div",{id:"cesiumContainer"},null,-1))),s=r((()=>(0,i._)("canvas",{id:"threeContainer"},null,-1))),c=[o,s];function l(e,t,n,r,o,s){return(0,i.wg)(),(0,i.iD)("div",a,c)}n(57658);var d=n(52734),u=n(12062),m=n(40617),h=n(70805),w=n(33350),v=n(11114),f=n(51625),p=n(73237),g=n(72281);let x;function S(e){return(0,p.Z)("Cesium.requestAnimationFrame","Cesium.requestAnimationFrame was deprecated in CesiumJS 1.96 and will be removed in 1.99. Use the native requestAnimationFrame method instead."),x(e)}"undefined"!==typeof requestAnimationFrame&&(x=requestAnimationFrame),function(){if(!(0,f.Z)(x)&&"undefined"!==typeof window){const e=["webkit","moz","ms","o"];let t=0;const n=e.length;while(t<n&&!(0,f.Z)(x))x=window[`${e[t]}RequestAnimationFrame`],++t}if(!(0,f.Z)(x)){const e=1e3/60;let t=0;x=function(n){const i=(0,g.Z)(),r=Math.max(e-(i-t),0);return t=i+r,setTimeout((function(){n(t)}),r)}}}();var Z=S;const y={viewer:null},D={renderer:null,camera:null,scene:null};let R=[115.23,39.55],A=[116.23,41.55];const C=[];function M(){this.threeMesh=null,this.minWGS84=null,this.maxWGS84=null}var b={mounted(){this.init()},methods:{init(){this.initCesium(),this.initThreejs(),this.init3DObject(),this.startRenderLoop()},initCesium(){y.viewer=new d.Z("cesiumContainer",{useDefaultRenderLoop:!1,selectionIndicator:!1,infoBox:!1,navigationInstructionsInitiallyVisible:!1,fullscreenButton:!1,allowTextureFilterAnisotropic:!1,contextOptions:{webgl:{alpha:!1,antialias:!0,preserveDrawingBuffer:!0,failIfMajorPerformanceCaveat:!1,depth:!0,stencil:!1,anialias:!1}},targetFrameRate:60,resolutionScale:.1,orderIndependentTranslucency:!0,imageryProvider:void 0,baseLayerPicker:!1,automaticallyTrackDataSourceClocks:!1,dataSources:null,clock:null,terrainShadows:u.Z.DISABLED});const e=m.Z.fromDegrees((R[0]+A[0])/2,(R[1]+A[1])/2-1,2e5);y.viewer.camera.flyTo({destination:e,orientation:{heading:h.Z.toRadians(0),pitch:h.Z.toRadians(-60),roll:h.Z.toRadians(0)},duration:3})},initThreejs(){const e=document.querySelector("#threeContainer"),t=new v.CP7({canvas:e,alpha:!0,logarithmicDepthBuffer:!0,antialias:!0});var n=45,i=e.clientWidth,r=e.clientHeight,a=i/r,o=1,s=1e7;const c=new v.cPb(n,a,o,s),l=new v.xsS;D.renderer=t,D.scene=l,D.camera=c},init3DObject(){const e={name:"Polygon",polygon:{hierarchy:m.Z.fromDegreesArray([R[0],R[1],A[0],R[1],A[0],A[1],R[0],A[1]]),material:w.Z.RED.withAlpha(.2)}};y.viewer.entities.add(e);for(var t=new v.RSm({side:v.ehD}),n=10,i=[],r=0;r<n;r++)i.push(new v.FM8(Math.sin(.2*r)*n+5,2*(r-5)));var a=new v.p7y(i),o=new v.Kj0(a,t);o.scale.set(1500,1500,1500),o.position.z+=15e3,o.rotation.x=Math.PI/2;var s=new v.ZAu;s.add(o),D.scene.add(s);var c=new M;c.threeMesh=s,c.minWGS84=R,c.maxWGS84=A,C.push(c),a=new v.Kgo;var l=new v.Kj0(a,new v.RSm);l.scale.set(1e4,1e4,1e4),l.position.z+=1e4,l.rotation.x=Math.PI/2;var d=new v.ZAu;d.add(l),D.scene.add(d),c=new M,c.threeMesh=d,c.minWGS84=R,c.maxWGS84=A,C.push(c);for(const u in C){R=C[u].minWGS84,A=C[u].maxWGS84;const e=m.Z.fromDegrees((R[0]+A[0])/2,(R[1]+A[1])/2),t=m.Z.fromDegrees((R[0]+A[0])/2,(R[1]+A[1])/2,1);console.log(t),C[u].threeMesh.position.copy(e),C[u].threeMesh.lookAt(t.x,t.y,t.z)}},threeRender(){D.camera.matrixAutoUpdate=!1;const e=y.viewer.camera.viewMatrix,t=y.viewer.camera.inverseViewMatrix;D.camera.lookAt(0,0,0),D.camera.matrixWorld.set(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15]),D.camera.matrixWorldInverse.set(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15]);const n=D.renderer.domElement;D.renderer.setPixelRatio(window.devicePixelRatio);const i=n.clientWidth,r=n.clientHeight,a=n.width!==i||n.height!==r;a&&D.renderer.setSize(i,r,!1),D.camera.aspect=i/r,D.camera.fov=h.Z.toDegrees(y.viewer.camera.frustum.fovy),D.camera.updateProjectionMatrix(),D.renderer.render(D.scene,D.camera)},startRenderLoop(){Z(this.startRenderLoop),y.viewer.render(),this.threeRender()}}},W=n(40089);const k=(0,W.Z)(b,[["render",l],["__scopeId","data-v-015ca138"]]);var P=k}}]);
//# sourceMappingURL=365.d1f8bae8.js.map