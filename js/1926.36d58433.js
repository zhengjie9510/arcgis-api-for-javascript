"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[1926],{31926:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(73396);const o=e=>((0,n.dD)("data-v-1beabe6c"),e=e(),(0,n.Cn)(),e),i={class:"container"},s=o((()=>(0,n._)("canvas",{id:"c"},null,-1))),a=[s];function u(e,t,r,o,s,u){return(0,n.wg)(),(0,n.iD)("div",i,a)}r(57658),r(63408),r(14590);var l=r(11114),c=r(84543);function f(e,t=!1){const r=null!==e[0].index,n=new Set(Object.keys(e[0].attributes)),o=new Set(Object.keys(e[0].morphAttributes)),i={},s={},a=e[0].morphTargetsRelative,u=new l.u9r;let c=0;for(let l=0;l<e.length;++l){const f=e[l];let m=0;if(r!==(null!==f.index))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const e in f.attributes){if(!n.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===i[e]&&(i[e]=[]),i[e].push(f.attributes[e]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const e in f.morphAttributes){if(!o.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===s[e]&&(s[e]=[]),s[e].push(f.morphAttributes[e])}if(u.userData.mergedUserData=u.userData.mergedUserData||[],u.userData.mergedUserData.push(f.userData),t){let e;if(r)e=f.index.count;else{if(void 0===f.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;e=f.attributes.position.count}u.addGroup(c,e,l),c+=e}}if(r){let t=0;const r=[];for(let n=0;n<e.length;++n){const o=e[n].index;for(let e=0;e<o.count;++e)r.push(o.getX(e)+t);t+=e[n].attributes.position.count}u.setIndex(r)}for(const l in i){const e=m(i[l]);if(!e)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" attribute."),null;u.setAttribute(l,e)}for(const l in s){const e=s[l][0].length;if(0===e)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[l]=[];for(let t=0;t<e;++t){const e=[];for(let n=0;n<s[l].length;++n)e.push(s[l][n][t]);const r=m(e);if(!r)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" morphAttribute."),null;u.morphAttributes[l].push(r)}}return u}function m(e){let t,r,n,o=0;for(let a=0;a<e.length;++a){const i=e[a];if(i.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(void 0===t&&(t=i.array.constructor),t!==i.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===r&&(r=i.itemSize),r!==i.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===n&&(n=i.normalized),n!==i.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;o+=i.array.length}const i=new t(o);let s=0;for(let a=0;a<e.length;++a)i.set(e[a].array,s),s+=e[a].array.length;return new l.TlE(i,r,n)}var d={mounted(){this.init()},methods:{init(){const e=document.querySelector("#c"),t=new l.CP7({canvas:e,antialias:!0}),r=60,n=2,o=.1,i=10,s=new l.cPb(r,n,o,i);s.position.z=2.5;const a=new c.z(s,e);a.enableDamping=!0,a.enablePan=!1,a.minDistance=1.2,a.maxDistance=4,a.update();const u=new l.xsS;u.background=new l.Ilk("black");{const e=new l.dpR,t=e.load("https://threejsfundamentals.org/threejs/resources/images/world.jpg",p),r=new l.xo$(1,64,32),n=new l.vBJ({map:t});u.add(new l.Kj0(r,n))}async function m(e){const t=await fetch(e);return t.text()}function d(e){const t=[],r={data:t};let n,o;return e.split("\n").forEach((e=>{const i=e.trim().split(/\s+/);if(2===i.length)r[i[0]]=parseFloat(i[1]);else if(i.length>2){const e=i.map((e=>{const t=parseFloat(e);if(t!==r.NODATA_value)return n=Math.max(void 0===n?t:n,t),o=Math.min(void 0===o?t:o,t),t}));t.push(e)}})),Object.assign(r,{min:o,max:n})}function h(e){const{min:t,max:r,data:n}=e,o=r-t,i=new l.Tme;u.add(i);const s=new l.Tme;i.add(s);const a=new l.Tme;a.position.z=1,s.add(a);const c=new l.Tme;c.position.z=.5,a.add(c);const m=new l.Ilk,d=.5*Math.PI,h=-.135*Math.PI,g=[];n.forEach(((r,n)=>{r.forEach(((r,u)=>{if(void 0===r)return;const f=(r-t)/o,b=1,p=1,w=1,y=new l.DvJ(b,p,w);i.rotation.y=l.M8C.degToRad(u+e.xllcorner)+d,s.rotation.x=l.M8C.degToRad(n+e.yllcorner)+h,a.scale.set(.005,.005,l.M8C.lerp(.01,.5,f)),c.updateWorldMatrix(!0,!1),y.applyMatrix4(c.matrixWorld);const v=l.M8C.lerp(.7,.3,f),E=1,B=l.M8C.lerp(.4,1,f);m.setHSL(v,E,B);const x=m.toArray().map((e=>255*e)),A=y.getAttribute("position").count,T=3,G=new Uint8Array(T*A);G.forEach(((e,t)=>{G[t]=x[t%3]}));const R=!0,U=new l.TlE(G,T,R);y.setAttribute("color",U),g.push(y)}))}));const b=f(g,!1),p=new l.vBJ({vertexColors:!0}),w=new l.Kj0(b,p);u.add(w)}function g(e){const t=e.domElement,r=t.clientWidth,n=t.clientHeight,o=t.width!==r||t.height!==n;return o&&e.setSize(r,n,!1),o}m("https://threejsfundamentals.org/threejs/resources/data/gpw/gpw_v4_basic_demographic_characteristics_rev10_a000_014mt_2010_cntm_1_deg.asc").then(d).then(h).then(p);let b=!1;function p(){if(b=void 0,g(t)){const e=t.domElement;s.aspect=e.clientWidth/e.clientHeight,s.updateProjectionMatrix()}a.update(),t.render(u,s)}function w(){b||(b=!0,requestAnimationFrame(p))}p(),a.addEventListener("change",w),window.addEventListener("resize",w)}}},h=r(40089);const g=(0,h.Z)(d,[["render",u],["__scopeId","data-v-1beabe6c"]]);var b=g}}]);
//# sourceMappingURL=1926.36d58433.js.map