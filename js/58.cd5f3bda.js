"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[58],{50998:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(73396);const i={id:"cesiumContainer"};function o(e,t,r,o,a,s){return(0,n.wg)(),(0,n.iD)("div",i)}var a=r(42891),s=r(46149),l=r(91845),c=r(27038),m=r(66958),d=r(63822),u=r(68541),g=r(82730),p=r(78419),f=r(33511),Z=r(4977),_=r(65733),h={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer",{terrainProvider:s.Z()});l.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(c.Z());var t=e.scene,r=new m.Z({center:d.Z.fromDegrees(-74.02,40.69),radius:200,vertexFormat:u.Z.POSITION_AND_ST}),n=new g.Z({geometry:r});t.primitives.add(new p.Z({geometryInstances:n,appearance:new f.Z({material:new Z.Z({translucent:!1,fabric:{uniforms:{color:new _.Z(0,1,0),rotate:90,percent:.1},source:"\n                  uniform vec4 color;\n                  uniform float percent;\n                  \n                  float get_angle(vec2 base,vec2 dir)\n                  { \n                    base = normalize(base);\n                    dir = normalize(dir);\n                    float angle = degrees(acos(abs(dot(dir,base))));\n                    if (dir.s > 0.0 && dir.t > 0.0){angle = angle;}\n                    else if (dir.s < 0.0 && dir.t > 0.0){angle = 180.0 - angle;}\n                    else if (dir.s < 0.0 && dir.t < 0.0){angle = 180.0 + angle;}\n                    else{angle = 360.0 - angle;}\n                    return angle;\n                  }\n\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                    czm_material material = czm_getDefaultMaterial(materialInput);\n                    material.diffuse = czm_gammaCorrect(color.rgb); \n\n                    vec2 st = materialInput.st;\n                    vec2 base = vec2(0.5,0.0);\n                    vec2 dir = st-vec2(0.5,0.5);\n                    float len = length(dir);\n                    if(len > 0.49){\n                      material.alpha = 1.0;\n                      material.diffuse = vec3(1.0,1.0,0.0);\n                      material.emission=vec3(0.2);\n                    }\n                    else{\n                      float angle = get_angle(base,dir);\n                      material.alpha = (mod(angle + (-czm_frameNumber),360.0)-(1.0-percent)*360.0)/(360.0*percent);\n                      material.emission=vec3(0.5);\n                    } \n                    return material;\n                  }\n                  "}})})})),e.camera.flyToBoundingSphere(m.Z.createGeometry(r).boundingSphere)}}},v=r(40089);const w=(0,v.Z)(h,[["render",o],["__scopeId","data-v-3f994ffe"]]);var x=w},66958:function(e,t,r){var n=r(63822),i=r(55598),o=r(68798),a=r(56114),s=r(93599),l=r(9984),c=r(68541);function m(e){e=(0,o.Z)(e,o.Z.EMPTY_OBJECT);const t=e.radius;i.Z.typeOf.number("radius",t);const r={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s.Z(r),this._workerName="createCircleGeometry"}m.packedLength=s.Z.packedLength,m.pack=function(e,t,r){return i.Z.typeOf.object("value",e),s.Z.pack(e._ellipseGeometry,t,r)};const d=new s.Z({center:new n.Z,semiMajorAxis:1,semiMinorAxis:1}),u={center:new n.Z,radius:void 0,ellipsoid:l.Z.clone(l.Z.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new c.Z,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};m.unpack=function(e,t,r){const i=s.Z.unpack(e,t,d);return u.center=n.Z.clone(i._center,u.center),u.ellipsoid=l.Z.clone(i._ellipsoid,u.ellipsoid),u.height=i._height,u.extrudedHeight=i._extrudedHeight,u.granularity=i._granularity,u.vertexFormat=c.Z.clone(i._vertexFormat,u.vertexFormat),u.stRotation=i._stRotation,u.shadowVolume=i._shadowVolume,(0,a.Z)(r)?(u.semiMajorAxis=i._semiMajorAxis,u.semiMinorAxis=i._semiMinorAxis,r._ellipseGeometry=new s.Z(u),r):(u.radius=i._semiMajorAxis,new m(u))},m.createGeometry=function(e){return s.Z.createGeometry(e._ellipseGeometry)},m.createShadowVolume=function(e,t,r){const n=e._ellipseGeometry._granularity,i=e._ellipseGeometry._ellipsoid,o=t(n,i),a=r(n,i);return new m({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:i,stRotation:e._ellipseGeometry._stRotation,granularity:n,extrudedHeight:o,height:a,vertexFormat:c.Z.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(m.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),t["Z"]=m},27038:function(e,t,r){var n=r(65733),i=r(9559),o=r(68798),a=r(56114),s=r(81561),l=r(76377),c=r(92887);function m(e){e=(0,i.Z)(e,{url:s.Z.fromAssetId(96188)});const t=new l.Z(e);let r=e.style;if(!(0,a.Z)(r)){const t=(0,o.Z)(e.defaultColor,n.Z.WHITE).toCssColorString();r=new c.Z({color:`Boolean(\${feature['cesium#color']}) ? color(\${feature['cesium#color']}) : ${t}`})}return t.style=r,t}t["Z"]=m}}]);
//# sourceMappingURL=58.cd5f3bda.js.map