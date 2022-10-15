"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[583],{8583:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(3396);const o={id:"cesiumContainer"};function a(e,t,n,a,i,s){return(0,r.wg)(),(0,r.iD)("div",o)}var i=n(677),s=n(4313),c=n(1845),l=n(5116),m=n(2730),u=n(9545),p=n(6855),v=n(8541),d=n(8798),g=n(6114),_="varying vec3 v_positionMC;\nvarying vec3 v_positionEC;\nvarying vec2 v_st;\n\nvoid main()\n{\n    czm_materialInput materialInput;\n\n    vec3 normalEC = normalize(czm_normal3D * czm_geodeticSurfaceNormal(v_positionMC, vec3(0.0), vec3(1.0)));\n#ifdef FACE_FORWARD\n    normalEC = faceforward(normalEC, vec3(0.0, 0.0, 1.0), -normalEC);\n#endif\n\n    materialInput.s = v_st.s;\n    materialInput.st = v_st;\n    materialInput.str = vec3(v_st, 0.0);\n\n    // Convert tangent space material normal to eye space\n    materialInput.normalEC = normalEC;\n    materialInput.tangentToEyeMatrix = czm_eastNorthUpToEyeCoordinates(v_positionMC, materialInput.normalEC);\n\n    // Convert view vector to world space\n    vec3 positionToEyeEC = -v_positionEC;\n    materialInput.positionToEyeEC = positionToEyeEC;\n\n    czm_material material = czm_getMaterial(materialInput);\n\n#ifdef FLAT\n    gl_FragColor = vec4(material.diffuse + material.emission, material.alpha);\n#else\n    gl_FragColor = czm_phong(normalize(positionToEyeEC), material, czm_lightDirectionEC);\n#endif\n}\n",f="attribute vec3 position3DHigh;\nattribute vec3 position3DLow;\nattribute vec2 st;\nattribute float batchId;\n\nvarying vec3 v_positionMC;\nvarying vec3 v_positionEC;\nvarying vec2 v_st;\n\nvoid main()\n{\n    vec4 p = czm_computePosition();\n\n    v_positionMC = position3DHigh + position3DLow;           // position in model coordinates\n    v_positionEC = (czm_modelViewRelativeToEye * p).xyz;     // position in eye coordinates\n    v_st = st;\n\n    gl_Position = czm_modelViewProjectionRelativeToEye * p;\n}\n",h=n(7563),C=n(4977);function E(e){e=(0,d.Z)(e,d.Z.EMPTY_OBJECT);const t=(0,d.Z)(e.translucent,!0),n=(0,d.Z)(e.aboveGround,!1);this.material=(0,g.Z)(e.material)?e.material:C.Z.fromType(C.Z.ColorType),this.translucent=(0,d.Z)(e.translucent,!0),this._vertexShaderSource=(0,d.Z)(e.vertexShaderSource,f),this._fragmentShaderSource=(0,d.Z)(e.fragmentShaderSource,_),this._renderState=h.Z.getDefaultRenderState(t,!n,e.renderState),this._closed=!1,this._flat=(0,d.Z)(e.flat,!1),this._faceForward=(0,d.Z)(e.faceForward,n),this._aboveGround=n}Object.defineProperties(E.prototype,{vertexShaderSource:{get:function(){return this._vertexShaderSource}},fragmentShaderSource:{get:function(){return this._fragmentShaderSource}},renderState:{get:function(){return this._renderState}},closed:{get:function(){return this._closed}},vertexFormat:{get:function(){return E.VERTEX_FORMAT}},flat:{get:function(){return this._flat}},faceForward:{get:function(){return this._faceForward}},aboveGround:{get:function(){return this._aboveGround}}}),E.VERTEX_FORMAT=v.Z.POSITION_AND_ST,E.prototype.getFragmentShaderSource=h.Z.prototype.getFragmentShaderSource,E.prototype.isTranslucent=h.Z.prototype.isTranslucent,E.prototype.getRenderState=h.Z.prototype.getRenderState;var S=E,Z=n(5733),y=n(6282),w=n(3822),T=n(4081),I={mounted(){this.init()},methods:{init(){var e=new i.Z("cesiumContainer",{terrainProvider:s.Z()});c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.primitives.add(new l.Z({geometryInstances:new m.Z({geometry:new u.Z({rectangle:p.Z.fromDegrees(103.3,29.25,103.45,29.35),height:530,vertexFormat:v.Z.DEFAULT})}),appearance:new S({material:new C.Z({fabric:{type:"Water",uniforms:{baseWaterColor:new Z.Z(64/255,157/255,200/255,.5),normalMap:y.Z("Assets/Textures/waterNormals.jpg"),frequency:1e3,animationSpeed:.1,amplitude:10,specularIntensity:10}}})})}));const t=w.Z.fromDegrees(103.37,29.15);e.camera.lookAt(t,new w.Z(0,-47900,39300)),e.camera.lookAtTransform(T.Z.IDENTITY)}}},b=n(89);const F=(0,b.Z)(I,[["render",a],["__scopeId","data-v-064781c6"]]);var z=F}}]);
//# sourceMappingURL=583.2c96a0e7.js.map