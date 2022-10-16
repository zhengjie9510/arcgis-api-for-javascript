"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[707],{707:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var i=o(3396);const t={id:"cesiumContainer"};function r(e,n,o,r,a,s){return(0,i.wg)(),(0,i.iD)("div",t)}var a=o(8136),s=o(4313),c=o(1845),l=o(3822),u=o(374),v={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const n=e.entities.add({position:l.Z.fromDegrees(108.4175,30.655,1e3),point:{}});e.zoomTo(n);const o="\n        uniform sampler2D colorTexture;\n        varying vec2 v_textureCoordinates;\n        uniform float tiltAngle;\n        uniform float rainSize;\n        uniform float rainSpeed;\n        float hash(float x) {\n            return fract(sin(x * 133.3) * 13.13);\n        }\n        void main(void) {\n            float time = czm_frameNumber / rainSpeed;\n            vec2 resolution = czm_viewport.zw;\n            vec2 uv = (gl_FragCoord.xy * 2. - resolution.xy) / min(resolution.x, resolution.y);\n            vec3 c = vec3(.6, .7, .8);\n            float a = tiltAngle;\n            float si = sin(a), co = cos(a);\n            uv *= mat2(co, -si, si, co);\n            uv *= length(uv + vec2(0, 4.9)) * rainSize + 1.;\n            float v = 1. - sin(hash(floor(uv.x * 100.)) * 2.);\n            float b = clamp(abs(sin(20. * time * v + uv.y * (5. / (2. + v)))) - .95, 0., 1.) * 20.;\n            c *= v * b;\n            gl_FragColor = mix(texture2D(colorTexture, v_textureCoordinates), vec4(c, 1), .5);\n        }\n        ";e.scene.postProcessStages.add(new u.Z({fragmentShader:o,uniforms:{tiltAngle:-.3,rainSize:.5,rainSpeed:120}}))}}},f=o(89);const d=(0,f.Z)(v,[["render",r],["__scopeId","data-v-96ff2fd4"]]);var m=d}}]);
//# sourceMappingURL=707.55d7cd75.js.map