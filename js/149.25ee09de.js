"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[149],{59149:function(e,n,i){i.r(n),i.d(n,{default:function(){return m}});var t=i(73396);const o=e=>((0,t.dD)("data-v-1b7a02f0"),e=e(),(0,t.Cn)(),e),a={class:"container"},c=o((()=>(0,t._)("canvas",{id:"c"},null,-1))),r=[c];function l(e,n,i,o,c,l){return(0,t.wg)(),(0,t.iD)("div",a,r)}var s=i(11114),d={mounted(){this.init()},methods:{init(){const e=new s.xsS,n=document.querySelector("#c"),i=new s.CP7({canvas:n});i.setSize(n.innerWidth,n.innerHeight),i.setPixelRatio(window.devicePixelRatio);const t=new s.cPb(60,n.clientWidth/n.clientHeight,1,1e3);t.position.z=4;const o="\n        out vec2 st;\n        void main() {\n          st =uv;\n          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n        }\n        ",a="\n        #define SPARKS 30\n        #define FIREWORKS 8.\n        #define BASE_PAUSE FIREWORKS / 30.\n        #define PI 3.14\n        #define PI2 6.28\n        uniform vec2 iResolution;\n        uniform float iTime;\n\n        float n21(vec2 n) {\n            return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n        }\n\n        vec2 randomSpark(float noise) {\n            vec2 v0 = vec2((noise - .5) * 13., (fract(noise * 123.) - .5) * 15.);\n            return v0;\n        }\n\n        vec2 circularSpark(float i, float noiseId, float noiseSpark) {\n            noiseId = fract(noiseId * 7897654.45);\n            float a = (PI2 / float(SPARKS)) * i;\n            float speed = 10.*clamp(noiseId, .7, 1.);\n            float x = sin(a + iTime*((noiseId-.5)*3.));\n            float y = cos(a + iTime*(fract(noiseId*4567.332) - .5)*2.);\n            vec2 v0 = vec2(x, y) * speed;\n            return v0;\n        }\n\n\n        vec2 rocket(vec2 start, float t) {\n            float y = t;\n            float x = sin(y*10.+cos(t*3.))*.1;\n            vec2 p = start + vec2(x, y * 8.);\n            return p;\n        }\n\n        vec3 firework(vec2 uv, float index, float pauseTime) {\n            vec3 col = vec3(0.);\n\n\n            float timeScale = 1.;\n            vec2 gravity = vec2(0., -9.8);\n\n            float explodeTime = .9;\n            float rocketTime = 1.1;\n            float episodeTime = rocketTime + explodeTime + pauseTime;\n\n            float ratio = iResolution.x / iResolution.y;\n\n            float timeScaled = (iTime - pauseTime) / timeScale;\n\n            float id = floor(timeScaled / episodeTime);\n            float et = mod(timeScaled, episodeTime);\n\n            float noiseId = n21(vec2(id+1., index+1.));\n\n            float scale = clamp(fract(noiseId*567.53)*30., 10., 30.);\n            uv *= scale;\n\n            rocketTime -= (fract(noiseId*1234.543) * .5);\n\n            vec2 pRocket = rocket(vec2(0. + ((noiseId - .5)*scale*ratio), 0. - scale/2.), clamp(et, 0., rocketTime));\n\n            if (et < rocketTime) {\n                float rd = length(uv - pRocket);\n                col += pow(.05/rd , 1.9) * vec3(0.9, .3, .0);\n            }\n\n\n            if (et > rocketTime && et < (rocketTime + explodeTime)) {\n                float burst = sign(fract(noiseId*44432.22) - .6);\n                for(int i = 0 ; i < SPARKS ; i++) {\n                        vec2 center = pRocket;\n                        float fi = float(i);\n                        float noiseSpark = fract(n21(vec2(id*10.+index*20., float(i+1))) * 332.44);\n                        float t = et - rocketTime;\n                        vec2 v0;\n\n                        if (fract(noiseId*3532.33) > .5) {\n                            v0 = randomSpark(noiseSpark);\n                            t -= noiseSpark * (fract(noiseId*543.) * .2);\n                        } else {\n                            v0 = circularSpark(fi, noiseId, noiseSpark);\n\n                            if ( (fract(noiseId*973.22) - .5) > 0.) {\n                                float re = mod(fi, 4. + 10. * noiseId);\n                                t -= floor(re/2.) * burst * .1;\n                            } else {\n                                t -= mod(fi, 2.) == 0. ? 0. : burst * .5*clamp(noiseId, .3, 1.);\n                            }\n                        }\n\n                        vec2 s = v0*t + (gravity * t * t) / 2.;\n\n                        vec2 p = center + s;\n\n                        float d = length(uv - p);\n\n                        if (t > 0.) {\n                            float fade = clamp((1. - t/explodeTime), 0., 1.);\n                            vec3 sparkColor = vec3(noiseId*.9, .5*fract(noiseId *456.33), .5*fract(noiseId *1456.33));\n                            vec3 c = (.05 / d) * sparkColor;\n                            col += c * fade;\n                        }\n                    }\n            }\n\n            return col;\n        }\n\n        void main() {\n          vec4 fragCoords = gl_FragCoord;\n\n          vec2 uv = fragCoords.xy / iResolution.xy;\n          uv -= .5;\n          uv.x *= iResolution.x / iResolution.y;\n\n          vec3 col = vec3(0.);\n\n          for (float i = 0. ; i < FIREWORKS ; i += 1.) {\n              col += firework(uv, i + 1., (i * BASE_PAUSE));\n          }\n\n          gl_FragColor = vec4(col, 1.);\n        }\n        ",c=new s._12(1,1),r=new s.jyz({uniforms:{iResolution:{value:new s.FM8(n.clientWidth,n.clientHeight)},iTime:{value:0}},vertexShader:o,fragmentShader:a});let l=new s.Kj0(c,r);function d(){if(f(i)){const e=i.domElement;t.aspect=e.clientWidth/e.clientHeight,t.updateProjectionMatrix()}let o=requestAnimationFrame(d);l.scale.set(4.61*n.clientWidth/n.clientHeight,4.61,1),l.material.uniforms.iTime={value:o/100},l.material.uniforms.iResolution={value:new s.FM8(n.clientWidth,n.clientHeight)},i.render(e,t)}function f(e){const n=e.domElement,i=n.clientWidth,t=n.clientHeight,o=n.width!==i||n.height!==t;return o&&e.setSize(i,t,!1),o}e.add(l),d()}}},f=i(40089);const v=(0,f.Z)(d,[["render",l],["__scopeId","data-v-1b7a02f0"]]);var m=v}}]);
//# sourceMappingURL=149.25ee09de.js.map