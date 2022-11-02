"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[456],{55456:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var i=n(73396);const r={id:"cesiumContainer"};function o(e,t,n,o,a,l){return(0,i.wg)(),(0,i.iD)("div",r)}var a=n(71496),l=n(4977),s=n(56114),c=n(89412),p=n(65733),d=n(78672),f=n(3676),m=n(42891),u=n(91845),v=n(63822);class h{constructor(e){this._definitionChanged=new a.Z,this._color=void 0,this._speed=void 0,this.color=e.color,this.speed=e.speed}get isConstant(){return!1}get definitionChanged(){return this._definitionChanged}getType(e){return l.Z.EllipsoidElectricMaterialType}getValue(e,t){return s.Z(t)||(t={}),t.color=c.Z.getValueOrDefault(this._color,e,p.Z.RED,t.color),t.speed=c.Z.getValueOrDefault(this._speed,e,10,t.speed),t}equals(e){return this===e||e instanceof h&&c.Z.equals(this._color,e._color)&&c.Z.equals(this._speed,e._speed)}}Object.defineProperties(h.prototype,{color:d.Z("color"),speed:d.Z("speed")}),f.EllipsoidElectricMaterialProperty=h,l.Z.EllipsoidElectricMaterialType="EllipsoidElectricMaterialType",l.Z.EllipsoidElectricMaterialSource="\n\tuniform vec4 color;\n\tuniform float speed;\n\t\n\t#define pi 3.1415926535\n\t#define PI2RAD 0.01745329252\n\t#define TWO_PI (2. * PI)\n\t\n\tfloat rands(float p){\n    return fract(sin(p) * 10000.0);\n\t}\n\t\n\tfloat noise(vec2 p){\n    float time = fract( czm_frameNumber * speed / 1000.0);\n    float t = time / 20000.0;\n    if(t > 1.0) t -= floor(t);\n    return rands(p.x * 14. + p.y * sin(t) * 0.5);\n\t}\n\t\n\tvec2 sw(vec2 p){\n    return vec2(floor(p.x), floor(p.y));\n\t}\n\t\n\tvec2 se(vec2 p){\n    return vec2(ceil(p.x), floor(p.y));\n\t}\n\t\n\tvec2 nw(vec2 p){\n\treturn vec2(floor(p.x), ceil(p.y));\n\t}\n\t\n\tvec2 ne(vec2 p){\n    return vec2(ceil(p.x), ceil(p.y));\n\t}\n\t\n\tfloat smoothNoise(vec2 p){\n    vec2 inter = smoothstep(0.0, 1.0, fract(p));\n    float s = mix(noise(sw(p)), noise(se(p)), inter.x);\n    float n = mix(noise(nw(p)), noise(ne(p)), inter.x);\n    return mix(s, n, inter.y);\n\t}\n\t\n\tfloat fbm(vec2 p){\n    float z = 2.0;\n    float rz = 0.0;\n    vec2 bp = p;\n    for(float i = 1.0; i < 6.0; i++){\n      rz += abs((smoothNoise(p) - 0.5)* 2.0) / z;\n      z *= 2.0;\n      p *= 2.0;\n    }\n    return rz;\n\t}\n\t\n\tczm_material czm_getMaterial(czm_materialInput materialInput){\n    czm_material material = czm_getDefaultMaterial(materialInput);\n    vec2 st = materialInput.st;\n    vec2 st2 = materialInput.st;\n    float time = fract( czm_frameNumber * speed / 1000.0);\n    if (st.t < 0.5) {\n      discard;\n    }\n    st *= 4.;\n    float rz = fbm(st);\n    st /= exp(mod( time * 2.0, pi));\n    rz *= pow(15., 0.9);\n    vec4 temp = vec4(0);\n    temp = mix( color / rz, vec4(color.rgb, 0.1), 0.2);\n    if (st2.s < 0.05) {\n      temp = mix(vec4(color.rgb, 0.1), temp, st2.s / 0.05);\n    }\n    if (st2.s > 0.95){\n      temp = mix(temp, vec4(color.rgb, 0.1), (st2.s - 0.95) / 0.05);\n    }\n    material.diffuse = temp.rgb;\n    material.alpha = temp.a * 2.0;\n    return material;\n\t}\n\t",l.Z._materialCache.addMaterial(l.Z.EllipsoidElectricMaterialType,{fabric:{type:l.Z.EllipsoidElectricMaterialType,uniforms:{color:new p.Z(1,1,0,1),speed:10},source:l.Z.EllipsoidElectricMaterialSource},translucent:function(e){return!0}});var Z={mounted(){this.init()},methods:{init(){var e=new m.Z("cesiumContainer");u.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;const t=e.entities.add({position:v.Z.fromDegrees(-122.4175,37.655),name:"电弧球体",ellipsoid:{radii:new v.Z(100,100,100),material:new f.EllipsoidElectricMaterialProperty({color:new p.Z(1,.5,0,1),speed:10})}});e.zoomTo(t)}}},g=n(40089);const _=(0,g.Z)(Z,[["render",o],["__scopeId","data-v-b362f3ac"]]);var E=_}}]);
//# sourceMappingURL=456.b08ef1de.js.map