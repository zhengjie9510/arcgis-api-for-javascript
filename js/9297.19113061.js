"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[9297],{89297:function(e,t,o){o.r(t),o.d(t,{default:function(){return pe}});var i=o(73396),n=o(87139);const s=e=>((0,i.dD)("data-v-85d53ce2"),e=e(),(0,i.Cn)(),e),r=s((()=>(0,i._)("div",{id:"cesiumContainer"},null,-1))),a={class:"skybox"};function c(e,t,o,s,c,p){const u=(0,i.up)("el-button");return(0,i.wg)(),(0,i.iD)(i.HY,null,[r,(0,i._)("div",a,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(c.skyBoxConfig,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{type:"primary",size:"small",key:t,onClick:e=>p.toggleSkybox(t)},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t),1)])),_:2},1032,["onClick"])))),128))])],64)}var p=o(67474),u=o(40985),v=o(30172),d=o(59823),g=o(40617),h=o(49721),m=o(51625),y=o(88002),x=o(46816),b=o(59468),f=o(547),_=o(121),l=o(67584),k=o(90210),w=o(12815),Z=o(91185),M=o(67090),C=o(12697),S=o(53127),X=o(87133),Y=o(36284),j=o(4849),D=o(5099),P=o(3541);const A=d.Z,L=g.Z,z=h.Z,I=m.Z,T=y.Z,B=x.Z,H=b.Z,N=f.Z,R=_.Z,q=l.Z,F=k.Z,G=w.Z,E=Z.Z,U=M.Z,O=C.Z,W=S.Z,K=X.Z,J=Y.Z,Q=j.Z,V=D.Z,$=P.Z,ee="#version 300 es\nprecision mediump float;\n\nuniform samplerCube u_cubeMap;\nin vec3 v_texCoord;\nout vec4 fragColor;\n\nvoid main()\n{\n    vec4 color = texture(u_cubeMap, normalize(v_texCoord));\n    fragColor = vec4(czm_gammaCorrect(color).rgb, czm_morphTime);\n}\n",te="#version 300 es\nin vec3 position;\nout vec3 v_texCoord;\n\nuniform mat3 u_rotateMatrix;\n\nvoid main()\n{\n    vec3 p = czm_viewRotation * u_rotateMatrix * (czm_temeToPseudoFixed * (czm_entireFrustum.y * position));\n    gl_Position = czm_projection * vec4(p, 1.0);\n    v_texCoord = position.xyz;\n}\n";function oe(e){this.sources=e.sources,this._sources=void 0,this.nearGround=e.nearGround,this.show=z(e.show,!0),this._command=new U({modelMatrix:R.clone(R.IDENTITY),owner:this}),this._cubeMap=void 0,this._attributeLocations=void 0,this._useHdr=void 0}oe.prototype.update=function(e,t){const o=this;if(!this.show)return;if(e.mode!==Q.SCENE3D&&e.mode!==Q.MORPHING)return;if(!e.passes.render)return;const i=e.context;if(this._sources!==this.sources){this._sources=this.sources;const e=this.sources;if(!I(e.positiveX)||!I(e.negativeX)||!I(e.positiveY)||!I(e.negativeY)||!I(e.positiveZ)||!I(e.negativeZ))throw new B("this.sources is required and must have positiveX, negativeX, positiveY, negativeY, positiveZ, and negativeZ properties.");if(typeof e.positiveX!==typeof e.negativeX||typeof e.positiveX!==typeof e.positiveY||typeof e.positiveX!==typeof e.negativeY||typeof e.positiveX!==typeof e.positiveZ||typeof e.positiveX!==typeof e.negativeZ)throw new B("this.sources properties must all be the same type.");"string"===typeof e.positiveX?O(i,this._sources).then((function(e){o._cubeMap=o._cubeMap&&o._cubeMap.destroy(),o._cubeMap=e})):(this._cubeMap=this._cubeMap&&this._cubeMap.destroy(),this._cubeMap=new E({context:i,source:e}))}const n=this._command;if(!I(n.vertexArray)){n.uniformMap={u_cubeMap:function(){return o._cubeMap},u_rotateMatrix:function(){return o.nearGround?(n.modelMatrix=q.eastNorthUpToFixedFrame(e.camera._positionWC),R.getMatrix3(n.modelMatrix,new N)):N.IDENTITY}};const t=A.createGeometry(A.fromDimensions({dimensions:new L(2,2,2),vertexFormat:F.POSITION_ONLY})),s=this._attributeLocations=H.createAttributeLocations(t);n.vertexArray=K.fromGeometry({context:i,geometry:t,attributeLocations:s,bufferUsage:G.STATIC_DRAW}),n.renderState=W.fromCache({blending:J.ALPHA_BLEND})}if(!I(n.shaderProgram)||this._useHdr!==t){const e=new $({defines:[t?"HDR":""],sources:[ee]});n.shaderProgram=V.fromCache({context:i,vertexShaderSource:te,fragmentShaderSource:e,attributeLocations:this._attributeLocations}),this._useHdr=t}return I(this._cubeMap)?n:void 0},oe.prototype.isDestroyed=function(){return!1},oe.prototype.destroy=function(){const e=this._command;return e.vertexArray=e.vertexArray&&e.vertexArray.destroy(),e.shaderProgram=e.shaderProgram&&e.shaderProgram.destroy(),this._cubeMap=this._cubeMap&&this._cubeMap.destroy(),T(this)};var ie=oe;let ne,se;var re={data(){return{skyBoxConfig:{"默认":void 0,"蓝天":{positiveX:"./skybox/lantian/Right.jpg",negativeX:"./skybox/lantian/Left.jpg",positiveY:"./skybox/lantian/Front.jpg",negativeY:".//skybox/lantian/Back.jpg",positiveZ:".//skybox/lantian/Up.jpg",negativeZ:".//skybox/lantian/Down.jpg"},"晚霞":{positiveX:".//skybox/wanxia/SunSetRight.png",negativeX:".//skybox/wanxia/SunSetLeft.png",positiveY:".//skybox/wanxia/SunSetFront.png",negativeY:".//skybox/wanxia/SunSetBack.png",positiveZ:".//skybox/wanxia/SunSetUp.png",negativeZ:".//skybox/wanxia/SunSetDown.png"},"晴天":{positiveX:".//skybox/qingtian/rightav9.jpg",negativeX:".//skybox/qingtian/leftav9.jpg",positiveY:".//skybox/qingtian/frontav9.jpg",negativeY:".//skybox/qingtian/backav9.jpg",positiveZ:".//skybox/qingtian/topav9.jpg",negativeZ:".//skybox/qingtian/bottomav9.jpg"}}}},mounted(){this.init()},methods:{init(){const e=new p.Z("cesiumContainer");u.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,ne=e.scene.skyBox,e.scene.preUpdate.addEventListener((()=>{let t=e.scene.camera.position,o=v.Z.fromCartesian(t).height;o<24e4?(e.scene.skyBox=ne,e.scene.skyAtmosphere.show=ne===se):(e.scene.skyBox=se,e.scene.skyAtmosphere.show=!0)})),ne=se,this.viewer=e},toggleSkybox(e){this.viewer&&(ne="默认"===e?se:new ie({sources:this.skyBoxConfig[e],nearGround:!0}))}}},ae=o(40089);const ce=(0,ae.Z)(re,[["render",c],["__scopeId","data-v-85d53ce2"]]);var pe=ce}}]);
//# sourceMappingURL=9297.19113061.js.map