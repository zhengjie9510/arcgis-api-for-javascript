"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[8524],{58524:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var i=n(73396);const c=e=>((0,i.dD)("data-v-36c0275e"),e=e(),(0,i.Cn)(),e),a={class:"container"},o=c((()=>(0,i._)("canvas",{id:"c"},null,-1))),s=[o];function d(e,t,n,c,o,d){return(0,i.wg)(),(0,i.iD)("div",a,s)}var r=n(11114),l=n(84543),u={mounted(){this.init()},methods:{init(){const e=document.querySelector("#c"),t=new r.xsS,n=new r.cPb(45,e.clientWidth/e.clientHeight,.1,1e3);n.position.z=200,t.add(n);const i=new r.CP7({canvas:e,antialias:!0});i.setSize(e.innerWidth,e.innerHeight),i.setPixelRatio(window.devicePixelRatio);const c=new l.z(n,i.domElement),a=(new r.cBK).setPath("./SampleData/skybox/").load(["right.jpg","left.jpg","top.jpg","bottom.jpg","front.jpg","back.jpg"]);t.background=a;const o=new r.FE5(10,3,100,16);a.mapping=r.vxC;const s=new r.vBJ({envMap:a}),d=new r.Kj0(o,s);function u(){if(p(i)){const e=i.domElement;n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}d.rotateY(.01),c.update(),i.render(t,n),requestAnimationFrame(u)}function p(e){const t=e.domElement,n=t.clientWidth,i=t.clientHeight,c=t.width!==n||t.height!==i;return c&&e.setSize(n,i,!1),c}t.add(d),u()}}},p=n(40089);const h=(0,p.Z)(u,[["render",d],["__scopeId","data-v-36c0275e"]]);var g=h}}]);
//# sourceMappingURL=8524.e9e9db6e.js.map