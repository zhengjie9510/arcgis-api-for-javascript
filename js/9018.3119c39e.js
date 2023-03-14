"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[9018],{39018:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var i=r(73396);const n={id:"cesiumContainer"};function o(e,t,r,o,a,s){return(0,i.wg)(),(0,i.iD)("div",n)}var a=r(89262),s=r(9007),l=r(40985),c=r(61216),m=r(69823),u=r(40617),d=r(90210),p=r(82104),f=r(16003),Z=r(38511),g=r(33350),_=r(77543),h={mounted(){this.init()},methods:{init(){var e=new a.Z("cesiumContainer",{terrainProvider:s.Z()});l.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(c.Z());const t="\n        uniform vec4 color;\n        uniform float percent;\n        uniform float offset;\n        czm_material czm_getMaterial(czm_materialInput materialInput)\n        {\n          czm_material material = czm_getDefaultMaterial(materialInput);\n          material.diffuse = czm_gammaCorrect(color.rgb); \n          vec2 st = materialInput.st;\n          float s = distance(st,vec2(0.5,0.5));\n          float a = s-mod(offset,0.5);\n          float l = 0.5*percent;\n          if(a < l && a > 0.0){\n              material.alpha = a/l;\n          }\n          else{\n              material.alpha = 0.0;\n          }\n          material.emission=vec3(0.5);\n          return material;\n        } \n      ";var r=new m.Z({center:u.Z.fromDegrees(-74.02,40.69),radius:200,vertexFormat:d.Z.POSITION_AND_ST}),i=new p.Z({geometry:r});const n=new f.Z({material:new Z.Z({translucent:!1,fabric:{uniforms:{color:new g.Z(0,1,0),percent:.05,offset:0},source:t}})});var o=e.scene.primitives.add(new _.Z({geometryInstances:i,appearance:n}));e.scene.preUpdate.addEventListener((function(){var e=o.appearance.material.uniforms.offset;e+=.005,o.appearance.material.uniforms.offset=e})),e.camera.flyToBoundingSphere(m.Z.createGeometry(r).boundingSphere)}}},v=r(40089);const w=(0,v.Z)(h,[["render",o],["__scopeId","data-v-07518f7d"]]);var x=w},69823:function(e,t,r){var i=r(40617),n=r(71299),o=r(49721),a=r(51625),s=r(19760),l=r(62385),c=r(90210);function m(e){e=(0,o.Z)(e,o.Z.EMPTY_OBJECT);const t=e.radius;n.Z.typeOf.number("radius",t);const r={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new s.Z(r),this._workerName="createCircleGeometry"}m.packedLength=s.Z.packedLength,m.pack=function(e,t,r){return n.Z.typeOf.object("value",e),s.Z.pack(e._ellipseGeometry,t,r)};const u=new s.Z({center:new i.Z,semiMajorAxis:1,semiMinorAxis:1}),d={center:new i.Z,radius:void 0,ellipsoid:l.Z.clone(l.Z.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new c.Z,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};m.unpack=function(e,t,r){const n=s.Z.unpack(e,t,u);return d.center=i.Z.clone(n._center,d.center),d.ellipsoid=l.Z.clone(n._ellipsoid,d.ellipsoid),d.height=n._height,d.extrudedHeight=n._extrudedHeight,d.granularity=n._granularity,d.vertexFormat=c.Z.clone(n._vertexFormat,d.vertexFormat),d.stRotation=n._stRotation,d.shadowVolume=n._shadowVolume,(0,a.Z)(r)?(d.semiMajorAxis=n._semiMajorAxis,d.semiMinorAxis=n._semiMinorAxis,r._ellipseGeometry=new s.Z(d),r):(d.radius=n._semiMajorAxis,new m(d))},m.createGeometry=function(e){return s.Z.createGeometry(e._ellipseGeometry)},m.createShadowVolume=function(e,t,r){const i=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,o=t(i,n),a=r(i,n);return new m({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:i,extrudedHeight:o,height:a,vertexFormat:c.Z.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(m.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),t["Z"]=m},61216:function(e,t,r){var i=r(33350),n=r(44366),o=r(49721),a=r(51625),s=r(9241),l=r(54506),c=r(24401);function m(e){e=(0,n.Z)(e,{url:s.Z.fromAssetId(96188)});const t=new l.Z(e);let r=e.style;if(!(0,a.Z)(r)){const t=(0,o.Z)(e.defaultColor,i.Z.WHITE).toCssColorString();r=new c.Z({color:`Boolean(\${feature['cesium#color']}) ? color(\${feature['cesium#color']}) : ${t}`})}return t.style=r,t}t["Z"]=m}}]);
//# sourceMappingURL=9018.3119c39e.js.map