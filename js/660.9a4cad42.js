"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[660],{6660:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var n=r(3396);const i={id:"cesiumContainer"};function a(e,t,r,a,o,s){return(0,n.wg)(),(0,n.iD)("div",i)}var o=r(2517),s=r(1845),l=r(6958),c=r(3822),m=r(8541),d=r(2730),u=r(5116),g=r(3511),p=r(4977),_=r(5733),f={mounted(){this.init()},methods:{init(){var e=new o.Z("cesiumContainer");s.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0;var t=e.scene,r=new l.Z({center:c.Z.fromDegrees(114,33),radius:250,vertexFormat:m.Z.POSITION_AND_ST}),n=new d.Z({geometry:r}),i=t.primitives.add(new u.Z({geometryInstances:n,appearance:new g.Z({material:new p.Z({translucent:!1,fabric:{uniforms:{color:new _.Z(0,1,0),rotate:90,percent:.1},source:"\n                  float get_angle(vec2 base,vec2 dir)\n                  { \n                    base = normalize(base);\n                    dir = normalize(dir);\n                    float angle = degrees(acos(abs(dot(dir,base))));\n                    if (dir.s > 0.0 && dir.t > 0.0){angle = angle;}\n                    else if (dir.s < 0.0 && dir.t > 0.0){angle = 180.0 - angle;}\n                    else if (dir.s < 0.0 && dir.t < 0.0){angle = 180.0 + angle;}\n                    else{angle = 360.0 - angle;}\n                    return angle;\n                  }\n\n                  uniform vec4 color;\n                  uniform float rotate;\n                  uniform float percent;\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                  czm_material material = czm_getDefaultMaterial(materialInput);\n                  material.diffuse = czm_gammaCorrect(color.rgb); \n\n                  vec2 st = materialInput.st;\n                  vec2 base = vec2(0.5,0.0);\n                  vec2 dir = st-vec2(0.5,0.5);\n                  float len = length(dir);\n                  if(len > 0.49){\n                    material.alpha = (len - 0.49)/0.01;\n                  }\n                  else{\n                    float angle = get_angle(base,dir);\n                    material.alpha = (mod(angle+rotate,360.0)-(1.0-percent)*360.0)/(360.0*percent);\n                  } \n                  material.emission=vec3(0.5);\n                  return material;\n                }"}})})}));e.camera.flyToBoundingSphere(l.Z.createGeometry(r).boundingSphere),e.scene.preUpdate.addEventListener((function(){var e=i.appearance.material.uniforms.rotate;e-=1,i.appearance.material.uniforms.rotate=e}))}}},h=r(89);const v=(0,h.Z)(f,[["render",a],["__scopeId","data-v-83277918"]]);var Z=v},6958:function(e,t,r){var n=r(3822),i=r(5598),a=r(8798),o=r(6114),s=r(3599),l=r(9984),c=r(8541);function m(e){e=(0,a.Z)(e,a.Z.EMPTY_OBJECT);const t=e.radius;i.Z.typeOf.number("radius",t);const r={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s.Z(r),this._workerName="createCircleGeometry"}m.packedLength=s.Z.packedLength,m.pack=function(e,t,r){return i.Z.typeOf.object("value",e),s.Z.pack(e._ellipseGeometry,t,r)};const d=new s.Z({center:new n.Z,semiMajorAxis:1,semiMinorAxis:1}),u={center:new n.Z,radius:void 0,ellipsoid:l.Z.clone(l.Z.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new c.Z,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};m.unpack=function(e,t,r){const i=s.Z.unpack(e,t,d);return u.center=n.Z.clone(i._center,u.center),u.ellipsoid=l.Z.clone(i._ellipsoid,u.ellipsoid),u.height=i._height,u.extrudedHeight=i._extrudedHeight,u.granularity=i._granularity,u.vertexFormat=c.Z.clone(i._vertexFormat,u.vertexFormat),u.stRotation=i._stRotation,u.shadowVolume=i._shadowVolume,(0,o.Z)(r)?(u.semiMajorAxis=i._semiMajorAxis,u.semiMinorAxis=i._semiMinorAxis,r._ellipseGeometry=new s.Z(u),r):(u.radius=i._semiMajorAxis,new m(u))},m.createGeometry=function(e){return s.Z.createGeometry(e._ellipseGeometry)},m.createShadowVolume=function(e,t,r){const n=e._ellipseGeometry._granularity,i=e._ellipseGeometry._ellipsoid,a=t(n,i),o=r(n,i);return new m({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:i,stRotation:e._ellipseGeometry._stRotation,granularity:n,extrudedHeight:a,height:o,vertexFormat:c.Z.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(m.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),t["Z"]=m}}]);
//# sourceMappingURL=660.9a4cad42.js.map