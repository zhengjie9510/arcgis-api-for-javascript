"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[997],{6997:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var o=t(3396);const i={id:"cesiumContainer"};function r(e,n,t,r,a,c){return(0,o.wg)(),(0,o.iD)("div",i)}t(3408),t(4590);var a=t(8136),c=t(1845),s=t(3587),l=t(6265),d=t(1579),u=t(9853),m=t(3822),p=t(6188),v=t(8650),Z=t(4081),w=t(9993),g=t(2730),b=t(7563),y=t(7277),h=t(5116),f=t(4680),_={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer");c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var n=e.scene,t=new Float32Array([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,-1]),o=new Float32Array([.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,.4,.4,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1,1,1,1,1,1,1,1,1,1,1,.4,1,1,.4,1,1,.4,1,1,.4,1,1]),i=new s.Z({position:new l.Z({componentDatatype:d.Z.DOUBLE,componentsPerAttribute:3,values:t}),color:new l.Z({componentDatatype:d.Z.FLOAT,componentsPerAttribute:3,values:o})}),r=new Uint8Array([0,1,2,0,2,3,4,5,6,4,6,7,8,9,10,8,10,11,12,13,14,12,14,15,16,17,18,16,18,19,20,21,22,20,22,23]),_=new u.Z(new m.Z(0,0,0),2),P=new p.Z({attributes:i,indices:r,primitiveType:v.Z.TRIANGLES,boundingSphere:_}),D=Z.Z.multiplyByUniformScale(Z.Z.multiplyByTranslation(w.Z.eastNorthUpToFixedFrame(m.Z.fromDegrees(116.23,39.54)),new m.Z(0,0,25),new Z.Z),25,new Z.Z),S=new g.Z({geometry:P,modelMatrix:D});function A(){return"\n          attribute vec3 position3DHigh;\n          attribute vec3 position3DLow;\n          attribute float batchId;\n          attribute vec4 color;\n          varying vec4 v_color;\n          void main() {\n              vec4 position = czm_modelViewProjectionRelativeToEye *czm_computePosition();\n              v_color = color;\n              gl_Position = position;\n          }"}function T(){return"\n          varying vec4 v_color;\n          void main() {\n              vec4 color = czm_gammaCorrect(v_color);\n              gl_FragColor = color;\n          }"}let L=new b.Z({translucent:!1,closed:!0,renderState:{blending:y.Z.PRE_MULTIPLIED_ALPHA_BLEND,depthTest:{enabled:!0},depthMask:!0},fragmentShaderSource:T(),vertexShaderSource:A()});n.primitives.add(new h.Z({geometryInstances:S,appearance:L,asynchronous:!1})),e.camera.flyTo({destination:m.Z.fromDegrees(116.23,39.54,500),orientation:{heading:f.Z.toRadians(0),pitch:f.Z.toRadians(-90),roll:0}})}}},P=t(89);const D=(0,P.Z)(_,[["render",r],["__scopeId","data-v-72b81056"]]);var S=D}}]);
//# sourceMappingURL=997.8e59d67e.js.map