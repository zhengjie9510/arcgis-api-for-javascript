"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[5820],{85820:function(e,i,o){o.r(i),o.d(i,{default:function(){return w}});var t=o(73396);const n={id:"cesiumContainer"};function r(e,i,o,r,s,c){return(0,t.wg)(),(0,t.iD)("div",n)}var s=o(2574),c=o(40985),l=o(24406),a=o(24401),d=o(33350),u=o(28807),p=o(51625),g=o(69530),h={data(){return{path:"/webgis-demo/"}},mounted(){this.init()},methods:{init(){var e=new s.Z("cesiumContainer");c.Z.supportsImageRenderingPixelated()&&(e.resolutionScale=window.devicePixelRatio),e.scene.postProcessStages.fxaa.enabled=!0,e.scene.debugShowFramesPerSecond=!0;const i=e.scene.primitives.add(new l.Z({url:this.path+"SampleData/Cesium3DTiles/Tilesets/Tileset/tileset.json"}));i.style=new a.Z({color:{conditions:[["${Height} >= 83","color('purple')"],["${Height} >= 80","color('red')"],["${Height} >= 70","color('orange')"],["${Height} >= 12","color('yellow')"],["${Height} >= 7","color('lime')"],["${Height} >= 1","color('DARKORANGE')"],["true","color('blue')"]]}}),e.zoomTo(i),console.log(this.path);const o={primitive:void 0,originalColor:new d.Z},t=new u.Z(e.scene.canvas);t.setInputAction((i=>{const t=e.scene.pick(i.position);o.primitive&&(o.primitive.color=o.originColor,o.primitive=void 0,o.originColor=void 0),p.Z(t)&&(o.primitive=t,o.originColor=d.Z.clone(t.color),t.color=d.Z.CYAN)}),g.Z.LEFT_CLICK)}}},m=o(40089);const v=(0,m.Z)(h,[["render",r],["__scopeId","data-v-21f4c32c"]]);var w=v}}]);
//# sourceMappingURL=5820.ddaae719.js.map