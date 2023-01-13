"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[6240],{19853:function(e,t,r){r.d(t,{zL:function(){return s}});r(57658);function o(e,t){var r,o=e.length,n=o-t;while(n<--o)r=e[n],e[n++]=e[o],e[o]=r}function n(e){return e}function i(e){if(null==e)return n;var t,r,o=e.scale[0],i=e.scale[1],s=e.translate[0],a=e.translate[1];return function(e,n){n||(t=r=0);var u=2,l=e.length,c=new Array(l);c[0]=(t+=e[0])*o+s,c[1]=(r+=e[1])*i+a;while(u<l)c[u]=e[u],++u;return c}}function s(e,t){return"string"===typeof t&&(t=e.objects[t]),"GeometryCollection"===t.type?{type:"FeatureCollection",features:t.geometries.map((function(t){return a(e,t)}))}:a(e,t)}function a(e,t){var r=t.id,o=t.bbox,n=null==t.properties?{}:t.properties,i=u(e,t);return null==r&&null==o?{type:"Feature",properties:n,geometry:i}:null==o?{type:"Feature",id:r,properties:n,geometry:i}:{type:"Feature",id:r,bbox:o,properties:n,geometry:i}}function u(e,t){var r=i(e.transform),n=e.arcs;function s(e,t){t.length&&t.pop();for(var i=n[e<0?~e:e],s=0,a=i.length;s<a;++s)t.push(r(i[s],s));e<0&&o(t,a)}function a(e){return r(e)}function u(e){for(var t=[],r=0,o=e.length;r<o;++r)s(e[r],t);return t.length<2&&t.push(t[0]),t}function l(e){var t=u(e);while(t.length<4)t.push(t[0]);return t}function c(e){return e.map(l)}function f(e){var t,r=e.type;switch(r){case"GeometryCollection":return{type:r,geometries:e.geometries.map(f)};case"Point":t=a(e.coordinates);break;case"MultiPoint":t=e.coordinates.map(a);break;case"LineString":t=u(e.arcs);break;case"MultiLineString":t=e.arcs.map(u);break;case"Polygon":t=c(e.arcs);break;case"MultiPolygon":t=e.arcs.map(c);break;default:return null}return{type:r,coordinates:t}}return f(t)}r(30541)},20362:function(e,t,r){var o=r(46019),n=r(33350),i=r(51625),s=r(46816),a=r(23802),u=r(83870);function l(){this._cache={}}l.prototype.fromColor=function(e,t){if(!(0,i.Z)(e))throw new s.Z("color is required");if(!(0,i.Z)(t))throw new s.Z("size is required");return d(void 0,void 0,e,t,this._cache)},l.prototype.fromUrl=function(e,t,r){if(!(0,i.Z)(e))throw new s.Z("url is required");if(!(0,i.Z)(t))throw new s.Z("color is required");if(!(0,i.Z)(r))throw new s.Z("size is required");return d(e,void 0,t,r,this._cache)},l.prototype.fromMakiIconId=function(e,t,r){if(!(0,i.Z)(e))throw new s.Z("id is required");if(!(0,i.Z)(t))throw new s.Z("color is required");if(!(0,i.Z)(r))throw new s.Z("size is required");return d((0,o.Z)(`Assets/Textures/maki/${encodeURIComponent(e)}.png`),void 0,t,r,this._cache)},l.prototype.fromText=function(e,t,r){if(!(0,i.Z)(e))throw new s.Z("text is required");if(!(0,i.Z)(t))throw new s.Z("color is required");if(!(0,i.Z)(r))throw new s.Z("size is required");return d(void 0,e,t,r,this._cache)};const c=new n.Z;function f(e,t,r){e.save(),e.scale(r/24,r/24),e.fillStyle=t.toCssColorString(),e.strokeStyle=t.brighten(.6,c).toCssColorString(),e.lineWidth=.846,e.beginPath(),e.moveTo(6.72,.422),e.lineTo(17.28,.422),e.bezierCurveTo(18.553,.422,19.577,1.758,19.577,3.415),e.lineTo(19.577,10.973),e.bezierCurveTo(19.577,12.63,18.553,13.966,17.282,13.966),e.lineTo(14.386,14.008),e.lineTo(11.826,23.578),e.lineTo(9.614,14.008),e.lineTo(6.719,13.965),e.bezierCurveTo(5.446,13.983,4.422,12.629,4.422,10.972),e.lineTo(4.422,3.416),e.bezierCurveTo(4.423,1.76,5.447,.423,6.718,.423),e.closePath(),e.fill(),e.stroke(),e.restore()}function h(e,t,r){const o=r/2.5;let i=o,s=o;t.width>t.height?s=o*(t.height/t.width):t.width<t.height&&(i=o*(t.width/t.height));const a=Math.round((r-i)/2),u=Math.round(7/24*r-s/2);e.globalCompositeOperation="destination-out",e.drawImage(t,a-1,u,i,s),e.drawImage(t,a,u-1,i,s),e.drawImage(t,a+1,u,i,s),e.drawImage(t,a,u+1,i,s),e.globalCompositeOperation="destination-over",e.fillStyle=n.Z.BLACK.toCssColorString(),e.fillRect(a-1,u-1,i+2,s+2),e.globalCompositeOperation="destination-out",e.drawImage(t,a,u,i,s),e.globalCompositeOperation="destination-over",e.fillStyle=n.Z.WHITE.toCssColorString(),e.fillRect(a-1,u-2,i+2,s+2)}const p=new Array(4);function d(e,t,r,o,n){p[0]=e,p[1]=t,p[2]=r,p[3]=o;const s=JSON.stringify(p),l=n[s];if((0,i.Z)(l))return l;const c=document.createElement("canvas");c.width=o,c.height=o;const d=c.getContext("2d");if(f(d,r,o),(0,i.Z)(e)){const t=a.Z.createIfNeeded(e),r=t.fetchImage().then((function(e){return h(d,e,o),n[s]=c,c}));return n[s]=r,r}if((0,i.Z)(t)){const e=(0,u.Z)(t,{font:`bold ${o}px sans-serif`});h(d,e,o)}return n[s]=c,c}t["Z"]=l}}]);
//# sourceMappingURL=6240.6eac47b3.js.map