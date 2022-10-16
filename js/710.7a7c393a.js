"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[710],{7137:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(3396);const r={id:"cesiumContainer"};function i(e,t,a,i,s,o){return(0,n.wg)(),(0,n.iD)("div",r)}a(7658);var s=a(8136),o=a(8002),f=a(1845),l=a(2451),c=a(3822),m=a(2730),p=a(5116),u=a(7491),d=a(4977),g=a(5733),w={mounted(){this.init()},methods:{twoBezier(e,t,a,n){const[r,i,s]=t,[o,f,l]=a,[c,m,p]=n;let u=(1-e)*(1-e)*r+2*e*(1-e)*o+e*e*c,d=(1-e)*(1-e)*i+2*e*(1-e)*f+e*e*m,g=(1-e)*(1-e)*s+2*e*(1-e)*l+e*e*p;return[u,d,g]},ceratBezierLine(e,t){const a=1e6,[n,r]=e,[i,s]=t,o=[(n+i)/2,(r+s)/2,a],f=[];for(let l=0;l<=1;l+=.01){let a=this.twoBezier(l,[e,0].flat(),o,[t,0].flat());f.push(a)}return f.flat()},init(){var e=new s.Z("cesiumContainer",{imageryProvider:new o.Z({url:"https://a.tile.openstreetmap.org/"})});f.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const t={start:{"四川":[104.06,30.67]},end:{"甘肃":[103.73,36.03],"青海":[101.74,36.56],"河北":[114.48,38.03],"云南":[102.73,25.04],"贵州":[106.71,26.57],"湖北":[114.31,30.52],"河南":[113.65,34.76],"山东":[117,36.65],"江苏":[118.78,32.04],"安徽":[117.27,31.86],"浙江":[120.19,30.26],"江西":[115.89,28.68],"福建":[119.3,26.08],"广东":[113.23,23.16],"湖南":[113,28.21],"海南":[110.35,20.02],"辽宁":[123.38,41.8],"吉林":[125.35,43.88],"黑龙江":[126.63,45.75],"山西":[112.53,37.87],"陕西":[108.95,34.27],"台湾":[121.3,25.03],"北京":[116.46,39.92],"上海":[121.48,31.22],"重庆":[106.54,29.59],"天津":[117.2,39.13],"内蒙古":[111.65,40.82],"广西":[108.33,22.84],"西藏":[91.11,29.97],"宁夏":[106.27,38.47],"新疆":[87.68,43.77],"香港":[114.17,22.28],"澳门":[113.54,22.19]}};let a=[],n=t["start"][Object.keys(t["start"])[0]];for(let i in t["end"]){let e=t["end"][i],r=new l.Z({positions:c.Z.fromDegreesArrayHeights(this.ceratBezierLine(n,e)),width:2}),s=new m.Z({geometry:r});a.push(s)}let r=e.scene.primitives.add(new p.Z({geometryInstances:a,appearance:new u.Z({material:new d.Z({fabric:{uniforms:{color:new g.Z(1,.5,0,1),percentage:.5,offset:0},source:"\n                    uniform vec4 color;\n                    uniform float percentage;\n                    uniform float offset;\n                    czm_material czm_getMaterial(czm_materialInput materialInput)\n                    {\n                        czm_material material = czm_getDefaultMaterial(materialInput);\n                        float s = materialInput.s;\n                        float offset = mod(offset,1.0);\n                        material.diffuse = color.rgb;\n                        if((percentage + offset)<=1.0){\n                            if(s > percentage + offset || s < offset){\n                                material.alpha = 0.0;\n                            }\n                            else{\n                                material.alpha = (s-offset)/percentage;\n                            }\n                        }\n                        else{\n                            if(s>offset){\n                                material.alpha = (s-offset)/percentage;\n                            }\n                            else if(s <= percentage + offset - 1.0){\n                                material.alpha = (1.0+s-offset)/percentage;\n                            }\n                            else{\n                                material.alpha = 0.0;\n                            }\n                        }\n                        return material;\n                    }"}})})}));e.camera.flyTo({destination:c.Z.fromDegrees(n[0],n[1],1e7)}),e.scene.preUpdate.addEventListener((function(){var e=r.appearance.material.uniforms.offset;e+=.005,e>1&&(e=0),r.appearance.material.uniforms.offset=e}))}}},h=a(89);const v=(0,h.Z)(w,[["render",i],["__scopeId","data-v-5f1f5f46"]]);var Z=v}}]);
//# sourceMappingURL=710.7a7c393a.js.map