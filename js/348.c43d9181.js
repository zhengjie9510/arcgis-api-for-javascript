"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[348],{7348:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(3396);const i=e=>((0,a.dD)("data-v-757eedd5"),e=e(),(0,a.Cn)(),e),o={class:"container"},d=i((()=>(0,a._)("canvas",{id:"c"},null,-1))),c=[d];function r(e,t,n,i,d,r){return(0,a.wg)(),(0,a.iD)("div",o,c)}var s=n(1114),l={mounted(){this.init()},methods:{init(){const e=new s.dpR,t=document.querySelector("#c"),n=new s.xsS,a=new s.cPb(45,t.clientWidth/t.clientHeight,.1,1e3);a.position.z=2,n.add(a);const i=new s.CP7({canvas:t,antialias:!0});i.setSize(t.innerWidth,t.innerHeight),i.setPixelRatio(window.devicePixelRatio),i.setClearColor(0,1);const o=new s.xo$(.6,32,32),d=new s.xoR({map:e.load("./SampleData/earth/earthmap.jpg"),bumpMap:e.load("./SampleData/earth/earthbump.jpg"),specularMap:e.load("./SampleData/earth/specularmap.jpg"),bumpScale:.3}),c=new s.Kj0(o,d);n.add(c);const r=new s.Mig(16777215,.2);n.add(r);const l=new s.cek(16777215,.9);l.position.set(5,3,5),n.add(l);const p=new s.xo$(.63,32,32),u=new s.xoR({map:e.load("./SampleData/earth/earthCloud.png"),transparent:!0}),h=new s.Kj0(p,u);n.add(h);const w=new s.xo$(80,64,64),m=new s.vBJ({map:e.load("./SampleData/earth/galaxy.png"),side:s._Li}),g=new s.Kj0(w,m);function v(){if(x(i)){const e=i.domElement;a.aspect=e.clientWidth/e.clientHeight,a.updateProjectionMatrix()}c.rotation.y-=.0015,h.rotation.y+=.0015,g.rotation.y+=5e-4,i.render(n,a),requestAnimationFrame(v)}function x(e){const t=e.domElement,n=t.clientWidth,a=t.clientHeight,i=t.width!==n||t.height!==a;return i&&e.setSize(n,a,!1),i}n.add(g),v()}}},p=n(89);const u=(0,p.Z)(l,[["render",r],["__scopeId","data-v-757eedd5"]]);var h=u}}]);
//# sourceMappingURL=348.c43d9181.js.map