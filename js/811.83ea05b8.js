"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[811],{8811:function(e,a,t){t.r(a),t.d(a,{default:function(){return _}});var r=t(3396);const n={id:"cesiumContainer"};function i(e,a,t,i,m,o){return(0,r.wg)(),(0,r.iD)("div",n)}var m=t(2588),o=t(1845),s=t(2730),l=t(8497),f=t(3822),c=t(8541),u=t(1254),p=t(5733),Z=t(5116),g=t(3511),v=t(4977),d={mounted(){this.init()},methods:{init(){var e=new m.Z("cesiumContainer");o.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var a=e.scene,t=new s.Z({geometry:l.Z.fromConstantHeights({positions:f.Z.fromDegreesArray([-115,44,-90,44]),maximumHeight:2e5,minimumHeight:1e5,vertexFormat:c.Z.POSITION_AND_ST}),attributes:{color:u.Z.fromColor(p.Z.RED)}}),r=a.primitives.add(new Z.Z({geometryInstances:t,appearance:new g.Z({material:new v.Z({fabric:{uniforms:{color:new p.Z(1,0,0),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})})),n=new s.Z({geometry:l.Z.fromConstantHeights({positions:f.Z.fromDegreesArray([-107,43,-97,43,-97,40,-107,40,-107,43]),maximumHeight:1e5,vertexFormat:c.Z.POSITION_AND_ST}),attributes:{color:u.Z.fromColor(p.Z.GREEN)}}),i=a.primitives.add(new Z.Z({geometryInstances:n,appearance:new g.Z({material:new v.Z({fabric:{uniforms:{color:new p.Z(0,1,0),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})})),d=f.Z.fromDegreesArray([-115,50,-112.5,50,-110,50,-107.5,50,-105,50,-102.5,50,-100,50,-97.5,50,-95,50,-92.5,50,-90,50]),w=[1e5,2e5,1e5,2e5,1e5,2e5,1e5,2e5,1e5,2e5,1e5],I=[0,1e5,0,1e5,0,1e5,0,1e5,0,1e5,0],_=new s.Z({geometry:new l.Z({positions:d,maximumHeights:w,minimumHeights:I,vertexFormat:c.Z.POSITION_AND_ST}),attributes:{color:u.Z.fromColor(p.Z.BLUE)}}),h=a.primitives.add(new Z.Z({geometryInstances:_,appearance:new g.Z({material:new v.Z({fabric:{uniforms:{color:new p.Z(0,0,1),offset:0},source:"\n                                    uniform vec4 color;\n                                    uniform float offset;\n                                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                                    {\n                                        czm_material material = czm_getDefaultMaterial(materialInput);\n                                        vec2 st = materialInput.st;\n                                        material.diffuse = color.rgb;\n                                        material.alpha = fract(1.0 - st.t + offset);\n                                        material.emission=vec3(0.5);\n                                        return material;\n                                    }"}})})}));e.scene.preUpdate.addEventListener((function(){var e=r.appearance.material.uniforms.offset;e+=.01,e>1&&(e=0),r.appearance.material.uniforms.offset=e;var a=i.appearance.material.uniforms.offset;a+=.01,a>1&&(a=0),i.appearance.material.uniforms.offset=a;var t=h.appearance.material.uniforms.offset;t+=.01,t>1&&(t=0),h.appearance.material.uniforms.offset=t}))}}},w=t(89);const I=(0,w.Z)(d,[["render",i],["__scopeId","data-v-c3220e00"]]);var _=I}}]);
//# sourceMappingURL=811.83ea05b8.js.map