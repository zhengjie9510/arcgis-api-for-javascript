"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[989],{9989:function(e,a,n){n.r(a),n.d(a,{default:function(){return h}});var t=n(3396);const r={id:"cesiumContainer"};function i(e,a,n,i,o,s){return(0,t.wg)(),(0,t.iD)("div",r)}var o=n(8136),s=n(4313),c=n(1845),m=n(9979),l=n(6958),f=n(3822),u=n(8541),d=n(2730),p=n(3511),v=n(4977),g=n(5733),w=n(8419),Z={mounted(){this.init()},methods:{init(){var e=new o.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(m.Z());const a="\n        uniform vec4 color;\n        uniform float percent;\n        uniform float offset;\n        czm_material czm_getMaterial(czm_materialInput materialInput)\n        {\n          czm_material material = czm_getDefaultMaterial(materialInput);\n          material.diffuse = czm_gammaCorrect(color.rgb); \n          vec2 st = materialInput.st;\n          float s = distance(st,vec2(0.5,0.5));\n          float a = s-mod(offset,0.5);\n          float l = 0.5*percent;\n          if(a < l && a > 0.0){\n              material.alpha = a/l;\n          }\n          else{\n              material.alpha = 0.0;\n          }\n          material.emission=vec3(0.5);\n          return material;\n        } \n      ";var n=new l.Z({center:f.Z.fromDegrees(-74.02,40.69),radius:200,vertexFormat:u.Z.POSITION_AND_ST}),t=new d.Z({geometry:n});const r=new p.Z({material:new v.Z({translucent:!1,fabric:{uniforms:{color:new g.Z(0,1,0),percent:.05,offset:0},source:a}})});var i=e.scene.primitives.add(new w.Z({geometryInstances:t,appearance:r}));e.scene.preUpdate.addEventListener((function(){var e=i.appearance.material.uniforms.offset;e+=.005,i.appearance.material.uniforms.offset=e})),e.camera.flyToBoundingSphere(l.Z.createGeometry(n).boundingSphere)}}},_=n(89);const b=(0,_.Z)(Z,[["render",i],["__scopeId","data-v-13357b44"]]);var h=b}}]);
//# sourceMappingURL=989.6f4d2579.js.map