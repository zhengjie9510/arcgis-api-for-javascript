"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[203],{203:function(e,n,o){o.r(n),o.d(n,{default:function(){return m}});var t=o(3396);const s={id:"cesiumContainer"};function i(e,n,o,i,r,a){return(0,t.wg)(),(0,t.iD)("div",s)}var r=o(8136),a=o(4313),c=o(1845),u=o(3822),l=o(374),v={mounted(){this.init()},methods:{init(){var e=new r.Z("cesiumContainer",{terrainProvider:a.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const n=e.entities.add({position:u.Z.fromDegrees(86.57,27.7,15e3),point:{}});e.zoomTo(n);const o="\n        uniform sampler2D colorTexture;\n        varying vec2 v_textureCoordinates;\n        uniform float snowSpeed;\n        uniform float snowSize;\n        float snow(vec2 uv,float scale)\n        {\n            float time=czm_frameNumber/snowSpeed;\n            float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;\n            uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;\n            uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;\n            p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);\n            k=smoothstep(0.,k,sin(f.x+f.y)*snowSize);\n            return k*w;\n        }\n        void main(){\n            vec2 resolution=czm_viewport.zw;\n            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);\n            vec3 finalColor=vec3(0);\n            // float c=smoothstep(1.,0.3,clamp(uv.y*.3+.8,0.,.75));\n            float c=0.;\n            c+=snow(uv,30.)*.0;\n            c+=snow(uv,20.)*.0;\n            c+=snow(uv,15.)*.0;\n            c+=snow(uv,10.);\n            c+=snow(uv,8.);\n            c+=snow(uv,6.);\n            c+=snow(uv,5.);\n            finalColor=(vec3(c));\n            gl_FragColor=mix(texture2D(colorTexture,v_textureCoordinates),vec4(finalColor,1),.5);\n        }\n      ";e.scene.postProcessStages.add(new l.Z({fragmentShader:o,uniforms:{snowSize:.02,snowSpeed:60}}))}}},f=o(89);const d=(0,f.Z)(v,[["render",i],["__scopeId","data-v-334ba479"]]);var m=d}}]);
//# sourceMappingURL=203.4d4cbe7e.js.map