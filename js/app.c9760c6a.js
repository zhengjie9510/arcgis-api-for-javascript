(function(){var e={6814:function(e,t,i){"use strict";var n=i(9242),r=i(3396);function c(e,t,i,n,c,o){const a=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(a)}var o={monted(){},methods:{}},a=i(89);const u=(0,a.Z)(o,[["render",c]]);var f=u,s=i(2483);i(7658);const l={cesium:[{name:"rain_effect",title:"雨天效果"},{name:"snow_effect",title:"雪天效果"},{name:"fog_effect",title:"雾天效果"},{name:"dynamic_water",title:"动态水面"},{name:"3dTiles_shader",title:"建筑纹理与光环(3dTiles)"},{name:"dynamic_building",title:"建筑纹理与光环(GeoJSON)"},{name:"migration_line",title:"迁徙线效果"},{name:"vertical_trail_line",title:"竖直尾迹线"},{name:"trail_line",title:"道路穿梭线"},{name:"dynamic_polyline_volume",title:"流动管线"},{name:"ellipsoid_electric",title:"电弧圆"},{name:"corrugated_circle",title:"扩散圆"},{name:"radar_scan",title:"雷达扫描"},{name:"radar_effect",title:"雷达效果"},{name:"dynamic_wall",title:"动态墙"},{name:"custom_geometry",title:"自定义几何体"},{name:"select_hightlight",title:"点击高亮"}],three:[{name:"fireworks_effect",title:"烟花效果"},{name:"rain_cloud",title:"降雨效果"},{name:"real_earth",title:"3D地球"},{name:"sky_box",title:"天空盒"},{name:"realistic_material",title:"基于物理的纹理"},{name:"environment_mapping",title:"环境映射(反射)"},{name:"environment_mapping_refraction",title:"环境映射(折射)"}],public:[{name:"tianditu_map",title:"天地图"},{name:"layers_split",title:"卷帘分屏"},{name:"cesium_threejs",title:"Cesium集成Threejs"},{name:"optimizing_lots_of_objects",title:"Threejs加载大量几何体"}]};function m(e){const t=[];for(let n in e){let r=e[n];for(let e of r){let r=e["name"],c=e["title"];t.push({name:r,path:"/"+r,img:i(8599)("./"+n+"/"+r+".gif"),component:()=>i(3457)("./"+n+"/"+r+".vue"),meta:{title:c}})}}return t}const d=m(l);var p=i(7139);const g=e=>((0,r.dD)("data-v-c088d766"),e=e(),(0,r.Cn)(),e),_={class:"container"},v=g((()=>(0,r._)("span",null,"WebGIS基础实例",-1))),b={class:"title"};function h(e,t,i,n,c,o){const a=(0,r.up)("el-avatar"),u=(0,r.up)("el-header"),f=(0,r.up)("el-image"),s=(0,r.up)("el-card"),l=(0,r.up)("el-col"),m=(0,r.up)("el-row"),d=(0,r.up)("el-main");return(0,r.wg)(),(0,r.iD)("div",_,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[v,(0,r._)("div",null,[(0,r.Wm)(a,{size:35,src:"favicon.ico"})])])),_:1}),(0,r.Wm)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.gallery_demos,(e=>((0,r.wg)(),(0,r.j4)(l,{key:e,xs:24,sm:12,md:8},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{onClick:t=>o.jumpTo(e.name),"body-style":{padding:"5px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{src:e.img,lazy:"",class:"image"},null,8,["src"]),(0,r._)("div",b,[(0,r._)("span",null,(0,p.zw)(e.meta.title),1)])])),_:2},1032,["onClick"])])),_:2},1024)))),128))])),_:1})])),_:1})])}var y={data(){return{gallery_demos:d}},methods:{jumpTo(e){const t=this.$router.resolve({path:e});window.open(t.href)}}};const w=(0,a.Z)(y,[["render",h],["__scopeId","data-v-c088d766"]]);var x=w;const O=[{path:"/",name:"Home",component:x,meta:{title:"主页"}}].concat(d),j=(0,s.p7)({history:(0,s.r5)(),routes:O});j.beforeEach(((e,t,i)=>{e.meta.title&&(document.title=e.meta.title),i()}));var k=j,T=i(65),C=(0,T.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),E=i(2918),N=(i(4415),i(9454));N.Z.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjYmYwMDRlZS1iMDZiLTQ3NTktYTgyYi03M2JhMTIwZmJlOTciLCJpZCI6MzU2NDAsImlhdCI6MTY1ODI5NDYzMH0.Bi7SRpVgLbym0c0SXQhpM1a57mQtRV-waLb14PUkei8",(0,n.ri)(f).use(C).use(k).use(E.Z).mount("#app")},3457:function(e,t,i){var n={"./cesium/3dTiles_shader.vue":[2567,161,488],"./cesium/corrugated_circle.vue":[9018,161,887,18],"./cesium/custom_geometry.vue":[897,161,897],"./cesium/dynamic_building.vue":[283,161,228,283],"./cesium/dynamic_polyline_volume.vue":[6222,161,222],"./cesium/dynamic_wall.vue":[8811,161,811],"./cesium/dynamic_water.vue":[8583,161,583],"./cesium/ellipsoid_electric.vue":[5456,161,676,456],"./cesium/fog_effect.vue":[8042,161,42],"./cesium/migration_line.vue":[9226,161,226],"./cesium/radar_effect.vue":[1954,161,954],"./cesium/radar_scan.vue":[998,161,887,58],"./cesium/rain_effect.vue":[2136,161,136],"./cesium/select_hightlight.vue":[4533,161,887,820],"./cesium/snow_effect.vue":[5893,161,893],"./cesium/trail_line.vue":[6299,161,676,228,299],"./cesium/vertical_trail_line.vue":[4458,161,458],"./public/cesium_threejs.vue":[9980,161,114,980],"./public/layers_split.vue":[1802,161,802],"./public/optimizing_lots_of_objects.vue":[1926,114,543,926],"./public/tianditu_map.vue":[3780,161,780],"./three/environment_mapping.vue":[2183,114,543,183],"./three/environment_mapping_refraction.vue":[8524,114,543,524],"./three/fireworks_effect.vue":[9149,114,149],"./three/rain_cloud.vue":[5920,114,920],"./three/real_earth.vue":[7348,114,348],"./three/realistic_material.vue":[9127,114,543,127],"./three/sky_box.vue":[3563,114,543,563]};function r(e){if(!i.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(i.e)).then((function(){return i(r)}))}r.keys=function(){return Object.keys(n)},r.id=3457,e.exports=r},8599:function(e,t,i){var n={"./cesium/3dTiles_shader.gif":9605,"./cesium/corrugated_circle.gif":8887,"./cesium/custom_geometry.gif":6561,"./cesium/dynamic_building.gif":9286,"./cesium/dynamic_polyline_volume.gif":8755,"./cesium/dynamic_wall.gif":2830,"./cesium/dynamic_water.gif":5254,"./cesium/ellipsoid_electric.gif":8411,"./cesium/fog_effect.gif":9284,"./cesium/migration_line.gif":7781,"./cesium/radar_effect.gif":9771,"./cesium/radar_scan.gif":4228,"./cesium/rain_effect.gif":919,"./cesium/select_hightlight.gif":4556,"./cesium/snow_effect.gif":6739,"./cesium/trail_line.gif":587,"./cesium/vertical_trail_line.gif":3671,"./public/cesium_threejs.gif":1787,"./public/layers_split.gif":7580,"./public/optimizing_lots_of_objects.gif":3961,"./public/tianditu_map.gif":9180,"./three/environment_mapping.gif":5141,"./three/environment_mapping_refraction.gif":8385,"./three/fireworks_effect.gif":2795,"./three/rain_cloud.gif":4101,"./three/real_earth.gif":6594,"./three/realistic_material.gif":9020,"./three/sky_box.gif":9789};function r(e){var t=c(e);return i(t)}function c(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=8599},9605:function(e,t,i){"use strict";e.exports=i.p+"img/3dTiles_shader.a056e04e.gif"},8887:function(e,t,i){"use strict";e.exports=i.p+"img/corrugated_circle.e5509e6a.gif"},6561:function(e,t,i){"use strict";e.exports=i.p+"img/custom_geometry.95d81149.gif"},9286:function(e,t,i){"use strict";e.exports=i.p+"img/dynamic_building.b8d912f7.gif"},8755:function(e,t,i){"use strict";e.exports=i.p+"img/dynamic_polyline_volume.ef475640.gif"},2830:function(e,t,i){"use strict";e.exports=i.p+"img/dynamic_wall.b18b2531.gif"},5254:function(e,t,i){"use strict";e.exports=i.p+"img/dynamic_water.3378fa88.gif"},8411:function(e,t,i){"use strict";e.exports=i.p+"img/ellipsoid_electric.d1085f69.gif"},9284:function(e,t,i){"use strict";e.exports=i.p+"img/fog_effect.5dae1e9a.gif"},7781:function(e,t,i){"use strict";e.exports=i.p+"img/migration_line.b1a888ca.gif"},9771:function(e,t,i){"use strict";e.exports=i.p+"img/radar_effect.24ea23fd.gif"},4228:function(e,t,i){"use strict";e.exports=i.p+"img/radar_scan.c2793e8a.gif"},919:function(e,t,i){"use strict";e.exports=i.p+"img/rain_effect.71a1afc6.gif"},4556:function(e,t,i){"use strict";e.exports=i.p+"img/select_hightlight.ab2d5d1c.gif"},6739:function(e,t,i){"use strict";e.exports=i.p+"img/snow_effect.5dc7f566.gif"},587:function(e,t,i){"use strict";e.exports=i.p+"img/trail_line.84845dfe.gif"},3671:function(e,t,i){"use strict";e.exports=i.p+"img/vertical_trail_line.0e51710d.gif"},1787:function(e,t,i){"use strict";e.exports=i.p+"img/cesium_threejs.061a89c2.gif"},7580:function(e,t,i){"use strict";e.exports=i.p+"img/layers_split.5b116712.gif"},3961:function(e,t,i){"use strict";e.exports=i.p+"img/optimizing_lots_of_objects.5b4dda2d.gif"},9180:function(e,t,i){"use strict";e.exports=i.p+"img/tianditu_map.749878e8.gif"},5141:function(e,t,i){"use strict";e.exports=i.p+"img/environment_mapping.847681b0.gif"},8385:function(e,t,i){"use strict";e.exports=i.p+"img/environment_mapping_refraction.9e7de9a1.gif"},2795:function(e,t,i){"use strict";e.exports=i.p+"img/fireworks_effect.0063f231.gif"},4101:function(e,t,i){"use strict";e.exports=i.p+"img/rain_cloud.b07876ed.gif"},6594:function(e,t,i){"use strict";e.exports=i.p+"img/real_earth.942f2f49.gif"},9020:function(e,t,i){"use strict";e.exports=i.p+"img/realistic_material.ca55e403.gif"},9789:function(e,t,i){"use strict";e.exports=i.p+"img/sky_box.ee1df40b.gif"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(c.exports,c,c.exports,i),c.loaded=!0,c.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,c){if(!n){var o=1/0;for(s=0;s<e.length;s++){n=e[s][0],r=e[s][1],c=e[s][2];for(var a=!0,u=0;u<n.length;u++)(!1&c||o>=c)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(a=!1,c<o&&(o=c));if(a){e.splice(s--,1);var f=r();void 0!==f&&(t=f)}}return t}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[n,r,c]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var c=Object.create(null);i.r(c);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){o[e]=function(){return n[e]}}));return o["default"]=function(){return n},i.d(c,o),c}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{18:"e6ff7919",42:"e2ca2973",58:"55cb9b04",114:"5a818a08",127:"70b01992",136:"b5a04e6b",137:"357ccd78",149:"4f37959f",161:"bab7d631",183:"419afe11",222:"c886b766",226:"ec9e1086",228:"aecc0851",283:"b171c467",299:"ee823496",348:"c97a262a",456:"a150d1fd",458:"94c4c950",488:"d688e88e",524:"dc4e9395",543:"ab31d748",563:"ef7611e9",578:"0ccc75b7",583:"fb8528d6",676:"13df1ea5",769:"6997c7a1",780:"a8e431de",802:"f3f972ba",811:"83ea05b8",820:"4249ac0a",861:"826cd756",887:"7f9a78ba",893:"1433100a",897:"b367ab10",920:"028ce657",926:"a53acbbf",954:"98c02f98",980:"242ba276"}[e]+".js"}}(),function(){i.miniCssF=function(e){return"css/"+e+"."+{18:"3aaa7e24",42:"d89d85e5",58:"13681460",127:"cd85aa93",136:"bfae94fc",149:"fb4cbb31",161:"1c0ba32f",183:"c55bb49f",222:"1701332f",226:"f89cb83d",283:"558a9005",299:"52d92f88",348:"50ed4d87",456:"ca56856d",458:"60334994",488:"c4c53240",524:"76af4906",563:"9c7cff92",583:"2585e2de",780:"295bb0c8",802:"36248141",811:"568cd734",820:"fc33e785",893:"d1bd3661",897:"1b0b6d7f",920:"06d2f547",926:"8d209f04",954:"aaf195a7",980:"ddd5460e"}[e]+".css"}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="webgis:";i.l=function(n,r,c,o){if(e[n])e[n].push(r);else{var a,u;if(void 0!==c)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+c){a=l;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",t+c),a.src=n),e[n]=[r];var m=function(t,i){a.onerror=a.onload=null,clearTimeout(d);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(i)})),t)return t(i)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=m.bind(null,a.onerror),a.onload=m.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){i.p="/webgis-demo/"}(),function(){var e=function(e,t,i,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var c=function(c){if(r.onerror=r.onload=null,"load"===c.type)i();else{var o=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=o,u.request=a,r.parentNode.removeChild(r),n(u)}};return r.onerror=r.onload=c,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var i=document.getElementsByTagName("link"),n=0;n<i.length;n++){var r=i[n],c=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(c===e||c===t))return r}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){r=o[n],c=r.getAttribute("data-href");if(c===e||c===t)return r}},n=function(n){return new Promise((function(r,c){var o=i.miniCssF(n),a=i.p+o;if(t(o,a))return r();e(n,a,r,c)}))},r={143:0};i.f.miniCss=function(e,t){var i={18:1,42:1,58:1,127:1,136:1,149:1,161:1,183:1,222:1,226:1,283:1,299:1,348:1,456:1,458:1,488:1,524:1,563:1,583:1,780:1,802:1,811:1,820:1,893:1,897:1,920:1,926:1,954:1,980:1};r[e]?t.push(r[e]):0!==r[e]&&i[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(i,n){r=e[t]=[i,n]}));n.push(r[2]=c);var o=i.p+i.u(t),a=new Error,u=function(n){if(i.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var c=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",a.name="ChunkLoadError",a.type=c,a.request=o,r[1](a)}};i.l(o,u,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,c,o=n[0],a=n[1],u=n[2],f=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var s=u(i)}for(t&&t(n);f<o.length;f++)c=o[f],i.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return i.O(s)},n=self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6814)}));n=i.O(n)})();
//# sourceMappingURL=app.c9760c6a.js.map