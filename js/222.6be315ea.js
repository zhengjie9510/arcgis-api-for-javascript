"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[222],{56222:function(e,a,n){n.r(a),n.d(a,{default:function(){return b}});var r=n(73396);const t={id:"cesiumContainer"};function i(e,a,n,i,o,s){return(0,r.wg)(),(0,r.iD)("div",t)}n(57658);var o=n(42891),s=n(91845),c=n(64680),m=n(81807),u=n(30226),f=n(63822),l=n(68541),p=n(99528),d=n(65116),g=n(82730),v=n(33511),w=n(4977),Z=n(65733),h={mounted(){this.init()},methods:{init(){var e=new o.Z("cesiumContainer");s.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var a=e.scene;function n(e){for(var a=[],n=0;n<360;n++){var r=c.Z.toRadians(n);a.push(new m.Z(e*Math.cos(r),e*Math.sin(r)))}return a}var r=new u.Z({polylinePositions:f.Z.fromDegreesArray([-85,32,-85,36,-89,36]),vertexFormat:l.Z.POSITION_NORMAL_AND_ST,shapePositions:n(6e3),cornerType:p.Z.MITERED}),t=a.primitives.add(new d.Z({geometryInstances:new g.Z({geometry:r}),appearance:new v.Z({material:new w.Z({fabric:{uniforms:{color:new Z.Z(1,0,0,1),percentage:.1,offset:0},source:"\n                  uniform vec4 color;\n                  uniform float percentage;\n                  uniform float offset;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                      czm_material material = czm_getDefaultMaterial(materialInput);\n                      vec2 st = materialInput.st;\n                      material.diffuse = color.rgb;\n                      material.alpha = 1.0-mod(st.s+offset,percentage)*(1.0/percentage);\n                      return material;\n                  }"}})})}));e.camera.flyToBoundingSphere(u.Z.createGeometry(r).boundingSphere),e.scene.preUpdate.addEventListener((function(){var e=t.appearance.material.uniforms.offset;e+=.001,e>1&&(e=0),t.appearance.material.uniforms.offset=e}))}}},I=n(40089);const _=(0,I.Z)(h,[["render",i],["__scopeId","data-v-48086c32"]]);var b=_}}]);
//# sourceMappingURL=222.6be315ea.js.map