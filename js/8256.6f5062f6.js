"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[8256],{78256:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(73396);const a={id:"cesiumContainer"};function o(e,n,r,o,s,i){return(0,t.wg)(),(0,t.iD)("div",a)}var s=r(93725),i=r(57554),c=r(40985),l=r(40617),d=r(98482),u=r(86715),f=r(33350),m={mounted(){this.init()},methods:{init(){var e=new s.Z("cesiumContainer",{terrainProvider:i.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const n=e.entities.add({position:l.Z.fromDegrees(108.4175,30.655,1e3),point:{}});e.zoomTo(n);const r="\n        float getDistance(sampler2D depthTexture, vec2 texCoords) \n        { \n            float depth = czm_unpackDepth(texture(depthTexture, texCoords)); \n            if (depth == 0.0) { \n                return czm_infinity; \n            } \n            vec4 eyeCoordinate = czm_windowToEyeCoordinates(gl_FragCoord.xy, depth); \n            return -eyeCoordinate.z / eyeCoordinate.w; \n        } \n        float interpolateByDistance(vec4 nearFarScalar, float distance) \n        { \n            float startDistance = nearFarScalar.x; \n            float startValue = nearFarScalar.y; \n            float endDistance = nearFarScalar.z; \n            float endValue = nearFarScalar.w; \n            float t = clamp((distance - startDistance) / (endDistance - startDistance), 0.0, 1.0); \n            return mix(startValue, endValue, t); \n        } \n        vec4 alphaBlend(vec4 sourceColor, vec4 destinationColor) \n        { \n            return sourceColor * vec4(sourceColor.aaa, 1.0) + destinationColor * (1.0 - sourceColor.a); \n        } \n        uniform sampler2D colorTexture; \n        uniform sampler2D depthTexture; \n        uniform vec4 fogByDistance; \n        uniform vec4 fogColor; \n        in vec2 v_textureCoordinates; \n        out vec4 fragColor;\n        void main(void) \n        { \n            float distance = getDistance(depthTexture, v_textureCoordinates); \n            vec4 sceneColor = texture(colorTexture, v_textureCoordinates); \n            float blendAmount = interpolateByDistance(fogByDistance, distance); \n            vec4 finalFogColor = vec4(fogColor.rgb, fogColor.a * blendAmount); \n            fragColor = alphaBlend(finalFogColor, sceneColor); \n        }\n        ";e.scene.postProcessStages.add(new d.Z({fragmentShader:r,uniforms:{fogByDistance:new u.Z(10,0,4e3,1),fogColor:new f.Z(.8,.8,.8,1)}}))}}},C=r(40089);const p=(0,C.Z)(m,[["render",o],["__scopeId","data-v-34ee78ea"]]);var v=p},57554:function(e,n,r){var t=r(57103),a=r(49721),o=r(73237),s=r(9241);function i(e){(0,o.Z)("createWorldTerrain","createWorldTerrain was deprecated in CesiumJS 1.104.  It will be in CesiumJS 1.107.  Use createWorldTerrainAsync instead."),e=(0,a.Z)(e,a.Z.EMPTY_OBJECT);const n=new t.Z({requestVertexNormals:(0,a.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,a.Z)(e.requestWaterMask,!1)});return n._readyPromise=t.Z._initializeReadyPromise({url:s.Z.fromAssetId(1),requestVertexNormals:(0,a.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,a.Z)(e.requestWaterMask,!1)},n),n}n["Z"]=i}}]);
//# sourceMappingURL=8256.6f5062f6.js.map