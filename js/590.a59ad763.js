"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[590],{7590:function(e,n,a){a.r(n),a.d(n,{default:function(){return h}});var r=a(3396);const t={id:"cesiumContainer"};function i(e,n,a,i,l,s){return(0,r.wg)(),(0,r.iD)("div",t)}var l=a(8136),s=a(4313),c=a(1845),o=a(9979),m=a(6958),d=a(3822),g=a(8541),u=a(2730),f=a(8419),p=a(3511),v=a(4977),b=a(5733),w={mounted(){this.init()},methods:{init(){var e=new l.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(o.Z());var n=e.scene,a=new m.Z({center:d.Z.fromDegrees(-74.02,40.69),radius:200,vertexFormat:g.Z.POSITION_AND_ST}),r=new u.Z({geometry:a});n.primitives.add(new f.Z({geometryInstances:r,appearance:new p.Z({material:new v.Z({translucent:!1,fabric:{uniforms:{color:new b.Z(0,1,0),rotate:90,percent:.1},source:"\n                  uniform vec4 color;\n                  uniform float percent;\n                  \n                  float get_angle(vec2 base,vec2 dir)\n                  { \n                    base = normalize(base);\n                    dir = normalize(dir);\n                    float angle = degrees(acos(abs(dot(dir,base))));\n                    if (dir.s > 0.0 && dir.t > 0.0){angle = angle;}\n                    else if (dir.s < 0.0 && dir.t > 0.0){angle = 180.0 - angle;}\n                    else if (dir.s < 0.0 && dir.t < 0.0){angle = 180.0 + angle;}\n                    else{angle = 360.0 - angle;}\n                    return angle;\n                  }\n\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                    czm_material material = czm_getDefaultMaterial(materialInput);\n                    material.diffuse = czm_gammaCorrect(color.rgb); \n\n                    vec2 st = materialInput.st;\n                    vec2 base = vec2(0.5,0.0);\n                    vec2 dir = st-vec2(0.5,0.5);\n                    float len = length(dir);\n                    if(len > 0.49){\n                      material.alpha = 1.0;\n                      material.diffuse = vec3(1.0,1.0,0.0);\n                      material.emission=vec3(0.2);\n                    }\n                    else{\n                      float angle = get_angle(base,dir);\n                      material.alpha = (mod(angle + (-czm_frameNumber),360.0)-(1.0-percent)*360.0)/(360.0*percent);\n                      material.emission=vec3(0.5);\n                    } \n                    return material;\n                  }\n                  "}})})})),e.camera.flyToBoundingSphere(m.Z.createGeometry(a).boundingSphere)}}},Z=a(89);const _=(0,Z.Z)(w,[["render",i],["__scopeId","data-v-11cb8776"]]);var h=_}}]);
//# sourceMappingURL=590.a59ad763.js.map