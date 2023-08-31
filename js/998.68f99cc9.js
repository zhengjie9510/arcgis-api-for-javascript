"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[998],{50998:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var i=r(73396);const n={id:"cesiumContainer"};function a(e,t,r,a,o,s){return(0,i.wg)(),(0,i.iD)("div",n)}var o=r(93725),s=r(57554),l=r(40985),c=r(61216),m=r(69823),u=r(40617),d=r(90210),g=r(82104),Z=r(77543),p=r(16003),f=r(38511),_=r(33350),v={mounted(){this.init()},methods:{init(){var e=new o.Z("cesiumContainer",{terrainProvider:s.Z()});l.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(c.Z());var t=e.scene,r=new m.Z({center:u.Z.fromDegrees(-74.02,40.69),radius:200,vertexFormat:d.Z.POSITION_AND_ST}),i=new g.Z({geometry:r});t.primitives.add(new Z.Z({geometryInstances:i,appearance:new p.Z({material:new f.Z({translucent:!1,fabric:{uniforms:{color:new _.Z(0,1,0),rotate:90,percent:.1},source:"\n                  uniform vec4 color;\n                  uniform float percent;\n                  \n                  float get_angle(vec2 base,vec2 dir)\n                  { \n                    base = normalize(base);\n                    dir = normalize(dir);\n                    float angle = degrees(acos(abs(dot(dir,base))));\n                    if (dir.s > 0.0 && dir.t > 0.0){angle = angle;}\n                    else if (dir.s < 0.0 && dir.t > 0.0){angle = 180.0 - angle;}\n                    else if (dir.s < 0.0 && dir.t < 0.0){angle = 180.0 + angle;}\n                    else{angle = 360.0 - angle;}\n                    return angle;\n                  }\n\n                  czm_material czm_getMaterial(czm_materialInput materialInput)\n                  {\n                    czm_material material = czm_getDefaultMaterial(materialInput);\n                    material.diffuse = czm_gammaCorrect(color.rgb); \n\n                    vec2 st = materialInput.st;\n                    vec2 base = vec2(0.5,0.0);\n                    vec2 dir = st-vec2(0.5,0.5);\n                    float len = length(dir);\n                    if(len > 0.49){\n                      material.alpha = 1.0;\n                      material.diffuse = vec3(1.0,1.0,0.0);\n                      material.emission=vec3(0.2);\n                    }\n                    else{\n                      float angle = get_angle(base,dir);\n                      material.alpha = (mod(angle + (-czm_frameNumber),360.0)-(1.0-percent)*360.0)/(360.0*percent);\n                      material.emission=vec3(0.5);\n                    } \n                    return material;\n                  }\n                  "}})})})),e.camera.flyToBoundingSphere(m.Z.createGeometry(r).boundingSphere)}}},h=r(40089);const w=(0,h.Z)(v,[["render",a],["__scopeId","data-v-3f994ffe"]]);var x=w},69823:function(e,t,r){var i=r(40617),n=r(71299),a=r(49721),o=r(51625),s=r(19760),l=r(62385),c=r(90210);function m(e){e=(0,a.Z)(e,a.Z.EMPTY_OBJECT);const t=e.radius;n.Z.typeOf.number("radius",t);const r={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s.Z(r),this._workerName="createCircleGeometry"}m.packedLength=s.Z.packedLength,m.pack=function(e,t,r){return n.Z.typeOf.object("value",e),s.Z.pack(e._ellipseGeometry,t,r)};const u=new s.Z({center:new i.Z,semiMajorAxis:1,semiMinorAxis:1}),d={center:new i.Z,radius:void 0,ellipsoid:l.Z.clone(l.Z.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new c.Z,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};m.unpack=function(e,t,r){const n=s.Z.unpack(e,t,u);return d.center=i.Z.clone(n._center,d.center),d.ellipsoid=l.Z.clone(n._ellipsoid,d.ellipsoid),d.height=n._height,d.extrudedHeight=n._extrudedHeight,d.granularity=n._granularity,d.vertexFormat=c.Z.clone(n._vertexFormat,d.vertexFormat),d.stRotation=n._stRotation,d.shadowVolume=n._shadowVolume,(0,o.Z)(r)?(d.semiMajorAxis=n._semiMajorAxis,d.semiMinorAxis=n._semiMinorAxis,r._ellipseGeometry=new s.Z(d),r):(d.radius=n._semiMajorAxis,new m(d))},m.createGeometry=function(e){return s.Z.createGeometry(e._ellipseGeometry)},m.createShadowVolume=function(e,t,r){const i=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,a=t(i,n),o=r(i,n);return new m({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:i,extrudedHeight:a,height:o,vertexFormat:c.Z.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(m.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),t["Z"]=m},57554:function(e,t,r){var i=r(57103),n=r(49721),a=r(73237),o=r(9241);function s(e){(0,a.Z)("createWorldTerrain","createWorldTerrain was deprecated in CesiumJS 1.104.  It will be in CesiumJS 1.107.  Use createWorldTerrainAsync instead."),e=(0,n.Z)(e,n.Z.EMPTY_OBJECT);const t=new i.Z({requestVertexNormals:(0,n.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,n.Z)(e.requestWaterMask,!1)});return t._readyPromise=i.Z._initializeReadyPromise({url:o.Z.fromAssetId(1),requestVertexNormals:(0,n.Z)(e.requestVertexNormals,!1),requestWaterMask:(0,n.Z)(e.requestWaterMask,!1)},t),t}t["Z"]=s},61216:function(e,t,r){var i=r(33350),n=r(44366),a=r(49721),o=r(51625),s=r(73237),l=r(9241),c=r(24406),m=r(24401);function u(e){(0,s.Z)("createOsmBuildings","createOsmBuildings was deprecated in CesiumJS 1.104.  It will be in CesiumJS 1.107.  Use createOsmBuildingsAsync instead."),e=(0,n.Z)(e,{url:l.Z.fromAssetId(96188)});const t=new c.Z(e);let r=e.style;if(!(0,o.Z)(r)){const t=(0,a.Z)(e.defaultColor,i.Z.WHITE).toCssColorString();r=new m.Z({color:`Boolean(\${feature['cesium#color']}) ? color(\${feature['cesium#color']}) : ${t}`})}return t.style=r,t}t["Z"]=u}}]);
//# sourceMappingURL=998.68f99cc9.js.map