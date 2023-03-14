"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[8256],{78256:function(e,n,o){o.r(n),o.d(n,{default:function(){return g}});var t=o(73396);const a={id:"cesiumContainer"};function r(e,n,o,r,i,s){return(0,t.wg)(),(0,t.iD)("div",a)}var i=o(89262),s=o(9007),c=o(40985),l=o(40617),d=o(98482),u=o(86715),f=o(33350),C={mounted(){this.init()},methods:{init(){var e=new i.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const n=e.entities.add({position:l.Z.fromDegrees(108.4175,30.655,1e3),point:{}});e.zoomTo(n);const o="\n        float getDistance(sampler2D depthTexture, vec2 texCoords) \n        { \n            float depth = czm_unpackDepth(texture(depthTexture, texCoords)); \n            if (depth == 0.0) { \n                return czm_infinity; \n            } \n            vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth); \n            return -eyeCoordinate.z / eyeCoordinate.w; \n        } \n        float interpolateByDistance(vec4 nearFarScalar, float distance) \n        { \n            float startDistance = nearFarScalar.x; \n            float startValue = nearFarScalar.y; \n            float endDistance = nearFarScalar.z; \n            float endValue = nearFarScalar.w; \n            float t = clamp((distance - startDistance) / (endDistance - startDistance), 0.0, 1.0); \n            return mix(startValue, endValue, t); \n        } \n        vec4 alphaBlend(vec4 sourceColor, vec4 destinationColor) \n        { \n            return sourceColor * vec4(sourceColor.aaa, 1.0) + destinationColor * (1.0 - sourceColor.a); \n        } \n        uniform sampler2D colorTexture; \n        uniform sampler2D depthTexture; \n        uniform vec4 fogByDistance; \n        uniform vec4 fogColor; \n        in vec2 v_textureCoordinates; \n        out vec4 fragColor;\n        void main(void) \n        { \n            float distance = getDistance(depthTexture, v_textureCoordinates); \n            vec4 sceneColor = texture(colorTexture, v_textureCoordinates); \n            float blendAmount = interpolateByDistance(fogByDistance, distance); \n            vec4 finalFogColor = vec4(fogColor.rgb, fogColor.a * blendAmount); \n            fragColor = alphaBlend(finalFogColor, sceneColor); \n        }\n        ";e.scene.postProcessStages.add(new d.Z({fragmentShader:o,uniforms:{fogByDistance:new u.Z(10,0,4e3,1),fogColor:new f.Z(.8,.8,.8,1)}}))}}},p=o(40089);const v=(0,p.Z)(C,[["render",r],["__scopeId","data-v-34ee78ea"]]);var g=v}}]);
//# sourceMappingURL=8256.eb8b5201.js.map