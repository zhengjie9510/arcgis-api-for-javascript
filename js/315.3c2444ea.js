"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[315],{90315:function(e,r,a){a.r(r),a.d(r,{default:function(){return C}});var o=a(73396);const n={id:"cesiumContainer"};function t(e,r,a,t,i,l){return(0,o.wg)(),(0,o.iD)("div",n)}var i=a(2574),l=a(12588),c=a(40985),s=a(31710),m=a(40617),g=a(82104),w=a(92119),u=a(44248),f=a(38511),d=a(33350);const p=a(56177);var b={mounted(){this.init()},methods:{init(){var e=new i.Z("cesiumContainer",{imageryProvider:new l.Z({url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",subdomains:["a","b","c","d"]})});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;for(const r of p.features){const a=r.geometry.coordinates;let o=new s.Z({positions:m.Z.fromDegreesArray(a.flat(2)),width:10});const n=new g.Z({geometry:o}),t=new w.Z({geometryInstances:n,appearance:new u.Z({material:new f.Z({fabric:{type:"MyBorderColor",uniforms:{color:new d.Z(.8,.2,.5,1),glowPower:.25,taperPower:1},source:"\n                  uniform vec4 color;\n                  uniform float glowPower;\n                  uniform float taperPower;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                    czm_material material = czm_getDefaultMaterial(materialInput);\n                    vec2 st = materialInput.st;\n                    float glow = glowPower / abs(st.t - 0.5) - (glowPower / 0.5);\n\n                    if (taperPower <= 0.99999) {\n                        glow *= min(1.0, taperPower / (0.5 - st.s * 0.5) - (taperPower / 0.5));\n                    }\n\n                    vec4 fragColor;\n                    fragColor.rgb = max(vec3(glow - 1.0 + color.rgb), color.rgb);\n                    fragColor.a = clamp(0.0, 1.0, glow) * color.a;\n                    fragColor = czm_gammaCorrect(fragColor);\n\n                    material.emission = fragColor.rgb;\n                    material.alpha = fragColor.a;\n\n                    return material;\n                  }\n                "}})}),allowPicking:!1});e.scene.primitives.add(t),o=s.Z.createGeometry(o),e.camera.flyToBoundingSphere(o.boundingSphere,{duration:0})}}}},v=a(40089);const P=(0,v.Z)(b,[["render",t],["__scopeId","data-v-1ec4d86c"]]);var C=P}}]);
//# sourceMappingURL=315.3c2444ea.js.map