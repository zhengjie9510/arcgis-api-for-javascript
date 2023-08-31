"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[337],{50337:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var r=o(73396);const t={id:"cesiumContainer"};function s(e,n,o,s,a,i){return(0,r.wg)(),(0,r.iD)("div",t)}var a=o(93725),i=o(57554),u=o(40985),c=o(40617),l=o(98482),v={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer",{terrainProvider:i.Z()});u.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const n=e.entities.add({position:c.Z.fromDegrees(86.57,27.7,15e3),point:{}});e.zoomTo(n);const o="\n        uniform sampler2D colorTexture;\n        in vec2 v_textureCoordinates;\n        uniform float snowSpeed;\n        uniform float snowSize;\n        out vec4 fragColor;\n        float snow(vec2 uv,float scale)\n        {\n            float time=czm_frameNumber/snowSpeed;\n            float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;\n            uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;\n            uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;\n            p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);\n            k=smoothstep(0.,k,sin(f.x+f.y)*snowSize);\n            return k*w;\n        }\n        void main(){\n            vec2 resolution=czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 finalColor=vec3(0);\n            // float c=smoothstep(1.,0.3,clamp(uv.y*.3+.8,0.,.75));\n            float c=0.;\n            c+=snow(uv,30.)*.0;\n            c+=snow(uv,20.)*.0;\n            c+=snow(uv,15.)*.0;\n            c+=snow(uv,10.);\n            c+=snow(uv,8.);\n            c+=snow(uv,6.);\n            c+=snow(uv,5.);\n            finalColor=(vec3(c));\n            fragColor=mix(texture(colorTexture,v_textureCoordinates),vec4(finalColor,1),.5);\n        }\n      ";e.scene.postProcessStages.add(new l.Z({fragmentShader:o,uniforms:{snowSize:.02,snowSpeed:60}}))}}},d=o(40089);const f=(0,d.Z)(v,[["render",s],["__scopeId","data-v-1eb12515"]]);var m=f},57554:function(e,n,o){var r=o(57103),t=o(49721),s=o(73237),a=o(9241);function i(e){(0,s.Z)("createWorldTerrain","createWorldTerrain was deprecated in CesiumJS 1.104.  It will be in CesiumJS 1.107.  Use createWorldTerrainAsync instead."),e=(0,t.Z)(e,t.Z.EMPTY_OBJECT);const n=new r.Z({requestVertexNormals:(0,t.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,t.Z)(e.requestWaterMask,!1)});return n._readyPromise=r.Z._initializeReadyPromise({url:a.Z.fromAssetId(1),requestVertexNormals:(0,t.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,t.Z)(e.requestWaterMask,!1)},n),n}n["Z"]=i}}]);
//# sourceMappingURL=337.2c350a3c.js.map