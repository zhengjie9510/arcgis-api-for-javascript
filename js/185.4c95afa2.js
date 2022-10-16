"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[185],{185:function(t,e,o){o.r(e),o.d(e,{default:function(){return je}});var n=o(3396);const r={id:"cesiumContainer"};function i(t,e,o,i,s,a){return(0,n.wg)(),(0,n.iD)("div",r)}o(7658);var s=o(8136),a=o(1845),l=o(8408),c=o(3822),u=o(5733),p=o(4142),f=o(8278),h=o(8798),Z=o(6114),g=o(938),d=o(1496),m=o(3261);function y(t){if(!(0,Z.Z)(t))throw new g.Z("uri is required.");const e=new m(t);e.normalize();let o=e.path();const n=o.lastIndexOf("/");return-1!==n&&(o=o.substr(n+1)),o}var w=y,_=o(6282),b=o(6214),v=o(4730);function T(){this._cache={}}T.prototype.fromColor=function(t,e){if(!(0,Z.Z)(t))throw new g.Z("color is required");if(!(0,Z.Z)(e))throw new g.Z("size is required");return x(void 0,void 0,t,e,this._cache)},T.prototype.fromUrl=function(t,e,o){if(!(0,Z.Z)(t))throw new g.Z("url is required");if(!(0,Z.Z)(e))throw new g.Z("color is required");if(!(0,Z.Z)(o))throw new g.Z("size is required");return x(t,void 0,e,o,this._cache)},T.prototype.fromMakiIconId=function(t,e,o){if(!(0,Z.Z)(t))throw new g.Z("id is required");if(!(0,Z.Z)(e))throw new g.Z("color is required");if(!(0,Z.Z)(o))throw new g.Z("size is required");return x((0,_.Z)(`Assets/Textures/maki/${encodeURIComponent(t)}.png`),void 0,e,o,this._cache)},T.prototype.fromText=function(t,e,o){if(!(0,Z.Z)(t))throw new g.Z("text is required");if(!(0,Z.Z)(e))throw new g.Z("color is required");if(!(0,Z.Z)(o))throw new g.Z("size is required");return x(void 0,t,e,o,this._cache)};const P=new u.Z;function C(t,e,o){t.save(),t.scale(o/24,o/24),t.fillStyle=e.toCssColorString(),t.strokeStyle=e.brighten(.6,P).toCssColorString(),t.lineWidth=.846,t.beginPath(),t.moveTo(6.72,.422),t.lineTo(17.28,.422),t.bezierCurveTo(18.553,.422,19.577,1.758,19.577,3.415),t.lineTo(19.577,10.973),t.bezierCurveTo(19.577,12.63,18.553,13.966,17.282,13.966),t.lineTo(14.386,14.008),t.lineTo(11.826,23.578),t.lineTo(9.614,14.008),t.lineTo(6.719,13.965),t.bezierCurveTo(5.446,13.983,4.422,12.629,4.422,10.972),t.lineTo(4.422,3.416),t.bezierCurveTo(4.423,1.76,5.447,.423,6.718,.423),t.closePath(),t.fill(),t.stroke(),t.restore()}function I(t,e,o){const n=o/2.5;let r=n,i=n;e.width>e.height?i=n*(e.height/e.width):e.width<e.height&&(r=n*(e.width/e.height));const s=Math.round((o-r)/2),a=Math.round(7/24*o-i/2);t.globalCompositeOperation="destination-out",t.drawImage(e,s-1,a,r,i),t.drawImage(e,s,a-1,r,i),t.drawImage(e,s+1,a,r,i),t.drawImage(e,s,a+1,r,i),t.globalCompositeOperation="destination-over",t.fillStyle=u.Z.BLACK.toCssColorString(),t.fillRect(s-1,a-1,r+2,i+2),t.globalCompositeOperation="destination-out",t.drawImage(e,s,a,r,i),t.globalCompositeOperation="destination-over",t.fillStyle=u.Z.WHITE.toCssColorString(),t.fillRect(s-1,a-2,r+2,i+2)}const k=new Array(4);function x(t,e,o,n,r){k[0]=t,k[1]=e,k[2]=o,k[3]=n;const i=JSON.stringify(k),s=r[i];if((0,Z.Z)(s))return s;const a=document.createElement("canvas");a.width=n,a.height=n;const l=a.getContext("2d");if(C(l,o,n),(0,Z.Z)(t)){const e=b.Z.createIfNeeded(t),o=e.fetchImage().then((function(t){return I(l,t,n),r[i]=a,a}));return r[i]=o,o}if((0,Z.Z)(e)){const t=(0,v.Z)(e,{font:`bold ${n}px sans-serif`});I(l,t,n)}return r[i]=a,a}var O=T,E=o(7730),A=o(6446),H=o(1104),S=o(4109);function L(t,e){var o,n=t.length,r=n-e;while(r<--n)o=t[r],t[r++]=t[n],t[n]=o}function N(t){return t}function R(t){if(null==t)return N;var e,o,n=t.scale[0],r=t.scale[1],i=t.translate[0],s=t.translate[1];return function(t,a){a||(e=o=0);var l=2,c=t.length,u=new Array(c);u[0]=(e+=t[0])*n+i,u[1]=(o+=t[1])*r+s;while(l<c)u[l]=t[l],++l;return u}}function G(t,e){return"string"===typeof e&&(e=t.objects[e]),"GeometryCollection"===e.type?{type:"FeatureCollection",features:e.geometries.map((function(e){return D(t,e)}))}:D(t,e)}function D(t,e){var o=e.id,n=e.bbox,r=null==e.properties?{}:e.properties,i=F(t,e);return null==o&&null==n?{type:"Feature",properties:r,geometry:i}:null==n?{type:"Feature",id:o,properties:r,geometry:i}:{type:"Feature",id:o,bbox:n,properties:r,geometry:i}}function F(t,e){var o=R(t.transform),n=t.arcs;function r(t,e){e.length&&e.pop();for(var r=n[t<0?~t:t],i=0,s=r.length;i<s;++i)e.push(o(r[i],i));t<0&&L(e,s)}function i(t){return o(t)}function s(t){for(var e=[],o=0,n=t.length;o<n;++o)r(t[o],e);return e.length<2&&e.push(e[0]),e}function a(t){var e=s(t);while(e.length<4)e.push(e[0]);return e}function l(t){return t.map(a)}function c(t){var e,o=t.type;switch(o){case"GeometryCollection":return{type:o,geometries:t.geometries.map(c)};case"Point":e=i(t.coordinates);break;case"MultiPoint":e=t.coordinates.map(i);break;case"LineString":e=s(t.arcs);break;case"MultiLineString":e=t.arcs.map(s);break;case"Polygon":e=l(t.arcs);break;case"MultiPolygon":e=t.arcs.map(l);break;default:return null}return{type:o,coordinates:e}}return c(e)}o(541);var M=o(160),z=o(9632),B=o(893),U=o(8718),V=o(2139),j=o(2194),W=o(723),q=o(7471),Y=o(9707),$=o(611);function J(t){return c.Z.fromDegrees(t[0],t[1],t[2])}const K={"urn:ogc:def:crs:OGC:1.3:CRS84":J,"EPSG:4326":J,"urn:ogc:def:crs:EPSG::4326":J},Q={},X={};let tt,et=48,ot=u.Z.ROYALBLUE,nt=u.Z.YELLOW,rt=2,it=u.Z.fromBytes(255,255,0,100),st=!1;const at={small:24,medium:48,large:64},lt=["title","description","marker-size","marker-symbol","marker-color","stroke","stroke-opacity","stroke-width","fill","fill-opacity"];function ct(t,e){let o="";for(const n in t)if(t.hasOwnProperty(n)){if(n===e||-1!==lt.indexOf(n))continue;const r=t[n];(0,Z.Z)(r)&&(o+="object"===typeof r?`<tr><th>${n}</th><td>${ct(r)}</td></tr>`:`<tr><th>${n}</th><td>${r}</td></tr>`)}return o.length>0&&(o=`<table class="cesium-infoBox-defaultTable"><tbody>${o}</tbody></table>`),o}function ut(t,e,o){let n;return function(r,i){return(0,Z.Z)(n)||(n=t(e,o)),n}}function pt(t,e){return new z.Z(ut(ct,t,e),!0)}function ft(t,e,o){let n=t.id;if((0,Z.Z)(n)&&"Feature"===t.type){let t=2,o=n;while((0,Z.Z)(e.getById(o)))o=`${n}_${t}`,t++;n=o}else n=(0,p.Z)();const r=e.getOrCreateEntity(n),i=t.properties;if((0,Z.Z)(i)){let t;r.properties=i;const e=i.title;if((0,Z.Z)(e))r.name=e,t="title";else{let e=Number.MAX_VALUE;for(const o in i)if(i.hasOwnProperty(o)&&i[o]){const n=o.toLowerCase();if(e>1&&"title"===n){e=1,t=o;break}e>2&&"name"===n?(e=2,t=o):e>3&&/title/i.test(o)?(e=3,t=o):e>4&&/name/i.test(o)&&(e=4,t=o)}(0,Z.Z)(t)&&(r.name=i[t])}const n=i.description;null!==n&&(r.description=(0,Z.Z)(n)?new V.Z(n):o(i,t))}return r}function ht(t,e){const o=new Array(t.length);for(let n=0;n<t.length;n++)o[n]=e(t[n]);return o}const Zt={Feature:dt,FeatureCollection:mt,GeometryCollection:yt,LineString:Tt,MultiLineString:Pt,MultiPoint:bt,MultiPolygon:kt,Point:_t,Polygon:It,Topology:xt},gt={GeometryCollection:yt,LineString:Tt,MultiLineString:Pt,MultiPoint:bt,MultiPolygon:kt,Point:_t,Polygon:It,Topology:xt};function dt(t,e,o,n,r){if(null===e.geometry)return void ft(e,t._entityCollection,r.describe);if(!(0,Z.Z)(e.geometry))throw new A.Z("feature.geometry is required.");const i=e.geometry.type,s=gt[i];if(!(0,Z.Z)(s))throw new A.Z(`Unknown geometry type: ${i}`);s(t,e,e.geometry,n,r)}function mt(t,e,o,n,r){const i=e.features;for(let s=0,a=i.length;s<a;s++)dt(t,i[s],void 0,n,r)}function yt(t,e,o,n,r){const i=o.geometries;for(let s=0,a=i.length;s<a;s++){const o=i[s],a=o.type,l=gt[a];if(!(0,Z.Z)(l))throw new A.Z(`Unknown geometry type: ${a}`);l(t,e,o,n,r)}}function wt(t,e,o,n,r){let i=r.markerSymbol,s=r.markerColor,a=r.markerSize;const l=e.properties;if((0,Z.Z)(l)){const t=l["marker-color"];(0,Z.Z)(t)&&(s=u.Z.fromCssColorString(t)),a=(0,h.Z)(at[l["marker-size"]],a);const e=l["marker-symbol"];(0,Z.Z)(e)&&(i=e)}let c;c=(0,Z.Z)(i)?1===i.length?t._pinBuilder.fromText(i.toUpperCase(),s,a):t._pinBuilder.fromMakiIconId(i,s,a):t._pinBuilder.fromColor(s,a);const p=new M.Z;p.verticalOrigin=new V.Z(S.Z.BOTTOM),2===n.length&&r.clampToGround&&(p.heightReference=H.Z.CLAMP_TO_GROUND);const f=ft(e,t._entityCollection,r.describe);f.billboard=p,f.position=new U.Z(o(n));const g=Promise.resolve(c).then((function(t){p.image=new V.Z(t)})).catch((function(){p.image=new V.Z(t._pinBuilder.fromColor(s,a))}));t._promises.push(g)}function _t(t,e,o,n,r){wt(t,e,n,o.coordinates,r)}function bt(t,e,o,n,r){const i=o.coordinates;for(let s=0;s<i.length;s++)wt(t,e,n,i[s],r)}function vt(t,e,o,n,r){let i=r.strokeMaterialProperty,s=r.strokeWidthProperty;const a=e.properties;if((0,Z.Z)(a)){const t=a["stroke-width"];let e;(0,Z.Z)(t)&&(s=new V.Z(t));const o=a.stroke;(0,Z.Z)(o)&&(e=u.Z.fromCssColorString(o));const n=a["stroke-opacity"];(0,Z.Z)(n)&&1!==n&&((0,Z.Z)(e)||(e=i.color.getValue().clone()),e.alpha=n),(0,Z.Z)(e)&&(i=new B.Z(e))}const c=ft(e,t._entityCollection,r.describe),p=new $.Z;c.polyline=p,p.clampToGround=r.clampToGround,p.material=i,p.width=s,p.positions=new V.Z(ht(n,o)),p.arcType=l.Z.RHUMB}function Tt(t,e,o,n,r){vt(t,e,n,o.coordinates,r)}function Pt(t,e,o,n,r){const i=o.coordinates;for(let s=0;s<i.length;s++)vt(t,e,n,i[s],r)}function Ct(t,e,o,n,r){if(0===n.length||0===n[0].length)return;let i=r.strokeMaterialProperty.color,s=r.fillMaterialProperty,a=r.strokeWidthProperty;const c=e.properties;if((0,Z.Z)(c)){const t=c["stroke-width"];let e;(0,Z.Z)(t)&&(a=new V.Z(t));const o=c.stroke;(0,Z.Z)(o)&&(e=u.Z.fromCssColorString(o));let n,r=c["stroke-opacity"];(0,Z.Z)(r)&&1!==r&&((0,Z.Z)(e)||(e=i.getValue().clone()),e.alpha=r),(0,Z.Z)(e)&&(i=new V.Z(e));const l=c.fill,p=s.color.getValue();(0,Z.Z)(l)&&(n=u.Z.fromCssColorString(l),n.alpha=p.alpha),r=c["fill-opacity"],(0,Z.Z)(r)&&r!==p.alpha&&((0,Z.Z)(n)||(n=p.clone()),n.alpha=r),(0,Z.Z)(n)&&(s=new B.Z(n))}const p=new Y.Z;p.outline=new V.Z(!0),p.outlineColor=i,p.outlineWidth=a,p.material=s,p.arcType=l.Z.RHUMB;const f=[];for(let l=1,u=n.length;l<u;l++)f.push(new E.Z(ht(n[l],o)));const h=n[0];p.hierarchy=new V.Z(new E.Z(ht(h,o),f)),h[0].length>2?p.perPositionHeight=new V.Z(!0):r.clampToGround||(p.height=0);const g=ft(e,t._entityCollection,r.describe);g.polygon=p}function It(t,e,o,n,r){Ct(t,e,n,o.coordinates,r)}function kt(t,e,o,n,r){const i=o.coordinates;for(let s=0;s<i.length;s++)Ct(t,e,n,i[s],r)}function xt(t,e,o,n,r){for(const i in o.objects)if(o.objects.hasOwnProperty(i)){const e=G(o,o.objects[i]),s=Zt[e.type];s(t,e,e,n,r)}}function Ot(t){this._name=t,this._changed=new d.Z,this._error=new d.Z,this._isLoading=!1,this._loading=new d.Z,this._entityCollection=new q.Z(this),this._promises=[],this._pinBuilder=new O,this._entityCluster=new W.Z,this._credit=void 0,this._resourceCredits=[]}function Et(t,e,o,n){if(!(0,Z.Z)(e))throw new g.Z("data is required.");j.Z.setLoading(t,!0),o=(0,h.Z)(o,h.Z.EMPTY_OBJECT);let r=o.credit;"string"===typeof r&&(r=new f.Z(r)),t._credit=r;let i=e,s=o.sourceUri;if("string"===typeof e||e instanceof b.Z){e=b.Z.createIfNeeded(e),i=e.fetchJson(),s=(0,h.Z)(s,e.getUrlComponent());const o=t._resourceCredits,n=e.credits;if((0,Z.Z)(n)){const t=n.length;for(let e=0;e<t;e++)o.push(n[e])}}return o={describe:(0,h.Z)(o.describe,pt),markerSize:(0,h.Z)(o.markerSize,et),markerSymbol:(0,h.Z)(o.markerSymbol,tt),markerColor:(0,h.Z)(o.markerColor,ot),strokeWidthProperty:new V.Z((0,h.Z)(o.strokeWidth,rt)),strokeMaterialProperty:new B.Z((0,h.Z)(o.stroke,nt)),fillMaterialProperty:new B.Z((0,h.Z)(o.fill,it)),clampToGround:(0,h.Z)(o.clampToGround,st)},Promise.resolve(i).then((function(e){return At(t,e,o,s,n)})).catch((function(e){throw j.Z.setLoading(t,!1),t._error.raiseEvent(t,e),e}))}function At(t,e,o,n,r){let i;(0,Z.Z)(n)&&(i=w(n)),(0,Z.Z)(i)&&t._name!==i&&(t._name=i,t._changed.raiseEvent(t));const s=Zt[e.type];if(!(0,Z.Z)(s))throw new A.Z(`Unsupported GeoJSON object type: ${e.type}`);const a=e.crs;let l=null!==a?J:null;if((0,Z.Z)(a)){if(!(0,Z.Z)(a.properties))throw new A.Z("crs.properties is undefined.");const t=a.properties;if("name"===a.type){if(l=K[t.name],!(0,Z.Z)(l))throw new A.Z(`Unknown crs name: ${t.name}`)}else if("link"===a.type){let e=Q[t.href];if((0,Z.Z)(e)||(e=X[t.type]),!(0,Z.Z)(e))throw new A.Z(`Unable to resolve crs link: ${JSON.stringify(t)}`);l=e(t)}else{if("EPSG"!==a.type)throw new A.Z(`Unknown crs type: ${a.type}`);if(l=K[`EPSG:${t.code}`],!(0,Z.Z)(l))throw new A.Z(`Unknown crs EPSG code: ${t.code}`)}}return Promise.resolve(l).then((function(n){return r&&t._entityCollection.removeAll(),null!==n&&s(t,e,e,n,o),Promise.all(t._promises).then((function(){return t._promises.length=0,j.Z.setLoading(t,!1),t}))}))}Ot.load=function(t,e){return(new Ot).load(t,e)},Object.defineProperties(Ot,{markerSize:{get:function(){return et},set:function(t){et=t}},markerSymbol:{get:function(){return tt},set:function(t){tt=t}},markerColor:{get:function(){return ot},set:function(t){ot=t}},stroke:{get:function(){return nt},set:function(t){nt=t}},strokeWidth:{get:function(){return rt},set:function(t){rt=t}},fill:{get:function(){return it},set:function(t){it=t}},clampToGround:{get:function(){return st},set:function(t){st=t}},crsNames:{get:function(){return K}},crsLinkHrefs:{get:function(){return Q}},crsLinkTypes:{get:function(){return X}}}),Object.defineProperties(Ot.prototype,{name:{get:function(){return this._name},set:function(t){this._name!==t&&(this._name=t,this._changed.raiseEvent(this))}},clock:{value:void 0,writable:!1},entities:{get:function(){return this._entityCollection}},isLoading:{get:function(){return this._isLoading}},changedEvent:{get:function(){return this._changed}},errorEvent:{get:function(){return this._error}},loadingEvent:{get:function(){return this._loading}},show:{get:function(){return this._entityCollection.show},set:function(t){this._entityCollection.show=t}},clustering:{get:function(){return this._entityCluster},set:function(t){if(!(0,Z.Z)(t))throw new g.Z("value must be defined.");this._entityCluster=t}},credit:{get:function(){return this._credit}}}),Ot.prototype.load=function(t,e){return Et(this,t,e,!0)},Ot.prototype.process=function(t,e){return Et(this,t,e,!1)},Ot.prototype.update=function(t){return!0};var Ht=Ot,St=o(2730),Lt=o(5116),Nt=o(3511),Rt=o(4977),Gt=o(4081),Dt=(o(3408),o(4590),o(9043)),Ft=o(448),Mt=o(1807),zt=o(9904),Bt=o(8701),Ut=o(4680),Vt=o(6265),jt=o(1579),Wt=o(9003),qt=o(1734),Yt=o(6855),$t=o(3272),Jt=o(6253),Kt=o(6474),Qt=o(597),Xt=o(7351),te=o(5598),ee=o(8541),oe=o(9984),ne=o(7861),re=o(9853),ie=o(6188);const se=new Dt.Z,ae=new Dt.Z;function le(t,e,o,n){const r=n.cartesianToCartographic(t,se),i=r.height,s=n.cartesianToCartographic(e,ae);s.height=i,n.cartographicToCartesian(s,e);const a=n.cartesianToCartographic(o,ae);a.height=i-100,n.cartographicToCartesian(a,o)}const ce=new Ft.Z,ue=new c.Z,pe=new c.Z,fe=new c.Z,he=new c.Z,Ze=new c.Z,ge=new c.Z;let de=new c.Z,me=new c.Z,ye=new c.Z;const we=new Mt.Z,_e=new Mt.Z,be=new c.Z,ve=new zt.Z,Te=new Bt.Z,Pe=new Bt.Z;function Ce(t){const e=t.vertexFormat,o=t.geometry,n=t.shadowVolume,r=o.attributes.position.values,i=(0,Z.Z)(o.attributes.st)?o.attributes.st.values:void 0;let s=r.length;const a=t.wall,l=t.top||a,u=t.bottom||a;if(e.st||e.normal||e.tangent||e.bitangent||n){const p=t.boundingRectangle,f=t.tangentPlane,h=t.ellipsoid,g=t.stRotation,d=t.perPositionHeight,m=we;m.x=p.x,m.y=p.y;const y=e.st?new Float32Array(s/3*2):void 0;let w;e.normal&&(w=d&&l&&!a?o.attributes.normal.values:new Float32Array(s));const _=e.tangent?new Float32Array(s):void 0,b=e.bitangent?new Float32Array(s):void 0,v=n?new Float32Array(s):void 0;let T=0,P=0,C=pe,I=fe,k=he,x=!0,O=Te,E=Pe;if(0!==g){let t=zt.Z.fromAxisAngle(f._plane.normal,g,ve);O=Bt.Z.fromQuaternion(t,O),t=zt.Z.fromAxisAngle(f._plane.normal,-g,ve),E=Bt.Z.fromQuaternion(t,E)}else O=Bt.Z.clone(Bt.Z.IDENTITY,O),E=Bt.Z.clone(Bt.Z.IDENTITY,E);let A=0,H=0;l&&u&&(A=s/2,H=s/3,s/=2);for(let o=0;o<s;o+=3){const p=c.Z.fromArray(r,o,be);if(e.st&&!(0,Z.Z)(i)){let t=Bt.Z.multiplyByVector(O,p,ue);t=h.scaleToGeodeticSurface(t,t);const e=f.projectPointOntoPlane(t,_e);Mt.Z.subtract(e,m,e),u&&(y[T+H]=0,y[T+1+H]=0),l&&(y[T]=0,y[T+1]=1),T+=2}if(e.normal||e.tangent||e.bitangent||n){const i=P+1,f=P+2;if(a){if(o+3<s){const t=c.Z.fromArray(r,o+3,Ze);if(x){const e=c.Z.fromArray(r,o+s,ge);d&&le(p,t,e,h),c.Z.subtract(t,p,t),c.Z.subtract(e,p,e),C=c.Z.normalize(c.Z.cross(e,t,C),C),x=!1}c.Z.equalsEpsilon(t,p,Ut.Z.EPSILON10)&&(x=!0)}(e.tangent||e.bitangent)&&(k=h.geodeticSurfaceNormal(p,k),e.tangent&&(I=c.Z.normalize(c.Z.cross(k,C,I),I)))}else C=h.geodeticSurfaceNormal(p,C),(e.tangent||e.bitangent)&&(d&&(de=c.Z.fromArray(w,P,de),me=c.Z.cross(c.Z.UNIT_Z,de,me),me=c.Z.normalize(Bt.Z.multiplyByVector(E,me,me),me),e.bitangent&&(ye=c.Z.normalize(c.Z.cross(de,me,ye),ye))),I=c.Z.cross(c.Z.UNIT_Z,C,I),I=c.Z.normalize(Bt.Z.multiplyByVector(E,I,I),I),e.bitangent&&(k=c.Z.normalize(c.Z.cross(C,I,k),k)));e.normal&&(t.wall?(w[P+A]=C.x,w[i+A]=C.y,w[f+A]=C.z):u&&(w[P+A]=-C.x,w[i+A]=-C.y,w[f+A]=-C.z),(l&&!d||a)&&(w[P]=C.x,w[i]=C.y,w[f]=C.z)),n&&(a&&(C=h.geodeticSurfaceNormal(p,C)),v[P+A]=-C.x,v[i+A]=-C.y,v[f+A]=-C.z),e.tangent&&(t.wall?(_[P+A]=I.x,_[i+A]=I.y,_[f+A]=I.z):u&&(_[P+A]=-I.x,_[i+A]=-I.y,_[f+A]=-I.z),l&&(d?(_[P]=me.x,_[i]=me.y,_[f]=me.z):(_[P]=I.x,_[i]=I.y,_[f]=I.z))),e.bitangent&&(u&&(b[P+A]=k.x,b[i+A]=k.y,b[f+A]=k.z),l&&(d?(b[P]=ye.x,b[i]=ye.y,b[f]=ye.z):(b[P]=k.x,b[i]=k.y,b[f]=k.z))),P+=3}}e.st&&!(0,Z.Z)(i)&&(o.attributes.st=new Vt.Z({componentDatatype:jt.Z.FLOAT,componentsPerAttribute:2,values:y})),e.normal&&(o.attributes.normal=new Vt.Z({componentDatatype:jt.Z.FLOAT,componentsPerAttribute:3,values:w})),e.tangent&&(o.attributes.tangent=new Vt.Z({componentDatatype:jt.Z.FLOAT,componentsPerAttribute:3,values:_})),e.bitangent&&(o.attributes.bitangent=new Vt.Z({componentDatatype:jt.Z.FLOAT,componentsPerAttribute:3,values:b})),n&&(o.attributes.extrudeDirection=new Vt.Z({componentDatatype:jt.Z.FLOAT,componentsPerAttribute:3,values:v}))}if(t.extrude&&(0,Z.Z)(t.offsetAttribute)){const e=r.length/3;let n=new Uint8Array(e);if(t.offsetAttribute===Wt.Z.TOP)l&&u||a?n=n.fill(1,0,e/2):l&&(n=n.fill(1));else{const e=t.offsetAttribute===Wt.Z.NONE?0:1;n=n.fill(e)}o.attributes.applyOffset=new Vt.Z({componentDatatype:jt.Z.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return o}const Ie=new Dt.Z,ke=new Dt.Z,xe={westOverIDL:0,eastOverIDL:0};let Oe=new qt.Z;function Ee(t,e,o,n,r){if(r=(0,h.Z)(r,new Yt.Z),!(0,Z.Z)(t)||t.length<3)return r.west=0,r.north=0,r.south=0,r.east=0,r;if(o===l.Z.RHUMB)return Yt.Z.fromCartesianArray(t,e,r);Oe.ellipsoid.equals(e)||(Oe=new qt.Z(void 0,void 0,e)),r.west=Number.POSITIVE_INFINITY,r.east=Number.NEGATIVE_INFINITY,r.south=Number.POSITIVE_INFINITY,r.north=Number.NEGATIVE_INFINITY,xe.westOverIDL=Number.POSITIVE_INFINITY,xe.eastOverIDL=Number.NEGATIVE_INFINITY;const i=1/Ut.Z.chordLength(n,e.maximumRadius),s=t.length;let a,c=e.cartesianToCartographic(t[0],ke),u=Ie;for(let l=1;l<s;l++)a=u,u=c,c=e.cartesianToCartographic(t[l],a),Oe.setEndPoints(u,c),He(Oe,i,r,xe);return a=u,u=c,c=e.cartesianToCartographic(t[0],a),Oe.setEndPoints(u,c),He(Oe,i,r,xe),r.east-r.west>xe.eastOverIDL-xe.westOverIDL&&(r.west=xe.westOverIDL,r.east=xe.eastOverIDL,r.east>Ut.Z.PI&&(r.east=r.east-Ut.Z.TWO_PI),r.west>Ut.Z.PI&&(r.west=r.west-Ut.Z.TWO_PI)),r}const Ae=new Dt.Z;function He(t,e,o,n){const r=t.surfaceDistance,i=Math.ceil(r*e),s=i>0?r/(i-1):Number.POSITIVE_INFINITY;let a=0;for(let l=0;l<i;l++){const e=t.interpolateUsingSurfaceDistance(a,Ae);a+=s;const r=e.longitude,i=e.latitude;o.west=Math.min(o.west,r),o.east=Math.max(o.east,r),o.south=Math.min(o.south,i),o.north=Math.max(o.north,i);const l=r>=0?r:r+Ut.Z.TWO_PI;n.westOverIDL=Math.min(n.westOverIDL,l),n.eastOverIDL=Math.max(n.eastOverIDL,l)}}const Se=[];function Le(t,e,o,n,r,i,s,a,l,c){const u={walls:[]};let p;if(s||a){const r=$t.Z.createGeometryFromPositions(t,e,o,n,i,l,c),f=r.attributes.position.values,h=r.indices;let g,d;if(s&&a){const t=f.concat(f);g=t.length/3,d=Jt.Z.createTypedArray(g,2*h.length),d.set(h);const e=h.length,n=g/2;for(p=0;p<e;p+=3){const t=d[p]+n,o=d[p+1]+n,r=d[p+2]+n;d[p+e]=r,d[p+1+e]=o,d[p+2+e]=t}if(r.attributes.position.values=t,i&&l.normal){const e=r.attributes.normal.values;r.attributes.normal.values=new Float32Array(t.length),r.attributes.normal.values.set(e)}if(l.st&&(0,Z.Z)(o)){const t=r.attributes.st.values;r.attributes.st.values=new Float32Array(2*g),r.attributes.st.values=t.concat(t)}r.indices=d}else if(a){for(g=f.length/3,d=Jt.Z.createTypedArray(g,h.length),p=0;p<h.length;p+=3)d[p]=h[p+2],d[p+1]=h[p+1],d[p+2]=h[p];r.indices=d}u.topAndBottom=new St.Z({geometry:r})}let f=r.outerRing,h=Kt.Z.fromPoints(f,t),g=h.projectPointsOntoPlane(f,Se),d=Qt.Z.computeWindingOrder2D(g);d===Xt.Z.CLOCKWISE&&(f=f.slice().reverse());let m=$t.Z.computeWallGeometry(f,o,t,n,i,c);u.walls.push(new St.Z({geometry:m}));const y=r.holes;for(p=0;p<y.length;p++){let e=y[p];h=Kt.Z.fromPoints(e,t),g=h.projectPointsOntoPlane(e,Se),d=Qt.Z.computeWindingOrder2D(g),d===Xt.Z.COUNTER_CLOCKWISE&&(e=e.slice().reverse()),m=$t.Z.computeWallGeometry(e,o,t,n,i,c),u.walls.push(new St.Z({geometry:m}))}return u}function Ne(t){if(te.Z.typeOf.object("options",t),te.Z.typeOf.object("options.polygonHierarchy",t.polygonHierarchy),(0,Z.Z)(t.perPositionHeight)&&t.perPositionHeight&&(0,Z.Z)(t.height))throw new g.Z("Cannot use both options.perPositionHeight and options.height");if((0,Z.Z)(t.arcType)&&t.arcType!==l.Z.GEODESIC&&t.arcType!==l.Z.RHUMB)throw new g.Z("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");const e=t.polygonHierarchy,o=(0,h.Z)(t.vertexFormat,ee.Z.DEFAULT),n=(0,h.Z)(t.ellipsoid,oe.Z.WGS84),r=(0,h.Z)(t.granularity,Ut.Z.RADIANS_PER_DEGREE),i=(0,h.Z)(t.stRotation,0),s=t.textureCoordinates,a=(0,h.Z)(t.perPositionHeight,!1),u=a&&(0,Z.Z)(t.extrudedHeight);let p=(0,h.Z)(t.height,0),f=(0,h.Z)(t.extrudedHeight,p);if(!u){const t=Math.max(p,f);f=Math.min(p,f),p=t}this._vertexFormat=ee.Z.clone(o),this._ellipsoid=oe.Z.clone(n),this._granularity=r,this._stRotation=i,this._height=p,this._extrudedHeight=f,this._closeTop=(0,h.Z)(t.closeTop,!0),this._closeBottom=(0,h.Z)(t.closeBottom,!0),this._polygonHierarchy=e,this._perPositionHeight=a,this._perPositionHeightExtrude=u,this._shadowVolume=(0,h.Z)(t.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=t.offsetAttribute,this._arcType=(0,h.Z)(t.arcType,l.Z.GEODESIC),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._textureCoordinates=s,this.packedLength=$t.Z.computeHierarchyPackedLength(e,c.Z)+oe.Z.packedLength+ee.Z.packedLength+(s?$t.Z.computeHierarchyPackedLength(s,Mt.Z):1)+12}Ne.fromPositions=function(t){t=(0,h.Z)(t,h.Z.EMPTY_OBJECT),te.Z.defined("options.positions",t.positions);const e={polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,vertexFormat:t.vertexFormat,stRotation:t.stRotation,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,closeTop:t.closeTop,closeBottom:t.closeBottom,offsetAttribute:t.offsetAttribute,arcType:t.arcType,textureCoordinates:t.textureCoordinates};return new Ne(e)},Ne.pack=function(t,e,o){return te.Z.typeOf.object("value",t),te.Z.defined("array",e),o=(0,h.Z)(o,0),o=$t.Z.packPolygonHierarchy(t._polygonHierarchy,e,o,c.Z),oe.Z.pack(t._ellipsoid,e,o),o+=oe.Z.packedLength,ee.Z.pack(t._vertexFormat,e,o),o+=ee.Z.packedLength,e[o++]=t._height,e[o++]=t._extrudedHeight,e[o++]=t._granularity,e[o++]=t._stRotation,e[o++]=t._perPositionHeightExtrude?1:0,e[o++]=t._perPositionHeight?1:0,e[o++]=t._closeTop?1:0,e[o++]=t._closeBottom?1:0,e[o++]=t._shadowVolume?1:0,e[o++]=(0,h.Z)(t._offsetAttribute,-1),e[o++]=t._arcType,(0,Z.Z)(t._textureCoordinates)?o=$t.Z.packPolygonHierarchy(t._textureCoordinates,e,o,Mt.Z):e[o++]=-1,e[o++]=t.packedLength,e};const Re=oe.Z.clone(oe.Z.UNIT_SPHERE),Ge=new ee.Z,De={polygonHierarchy:{}};function Fe(t){const e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];const o=t._ellipsoid,n=t._polygonHierarchy.positions,r=t.rectangle;return ie.Z._textureCoordinateRotationPoints(n,e,o,r)}Ne.unpack=function(t,e,o){te.Z.defined("array",t),e=(0,h.Z)(e,0);const n=$t.Z.unpackPolygonHierarchy(t,e,c.Z);e=n.startingIndex,delete n.startingIndex;const r=oe.Z.unpack(t,e,Re);e+=oe.Z.packedLength;const i=ee.Z.unpack(t,e,Ge);e+=ee.Z.packedLength;const s=t[e++],a=t[e++],l=t[e++],u=t[e++],p=1===t[e++],f=1===t[e++],g=1===t[e++],d=1===t[e++],m=1===t[e++],y=t[e++],w=t[e++],_=-1===t[e]?void 0:$t.Z.unpackPolygonHierarchy(t,e,Mt.Z);(0,Z.Z)(_)?(e=_.startingIndex,delete _.startingIndex):e++;const b=t[e++];return(0,Z.Z)(o)||(o=new Ne(De)),o._polygonHierarchy=n,o._ellipsoid=oe.Z.clone(r,o._ellipsoid),o._vertexFormat=ee.Z.clone(i,o._vertexFormat),o._height=s,o._extrudedHeight=a,o._granularity=l,o._stRotation=u,o._perPositionHeightExtrude=p,o._perPositionHeight=f,o._closeTop=g,o._closeBottom=d,o._shadowVolume=m,o._offsetAttribute=-1===y?void 0:y,o._arcType=w,o._textureCoordinates=_,o.packedLength=b,o},Ne.computeRectangle=function(t,e){te.Z.typeOf.object("options",t),te.Z.typeOf.object("options.polygonHierarchy",t.polygonHierarchy);const o=(0,h.Z)(t.granularity,Ut.Z.RADIANS_PER_DEGREE),n=(0,h.Z)(t.arcType,l.Z.GEODESIC);if(n!==l.Z.GEODESIC&&n!==l.Z.RHUMB)throw new g.Z("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");const r=t.polygonHierarchy,i=(0,h.Z)(t.ellipsoid,oe.Z.WGS84);return Ee(r.positions,i,n,o,e)},Ne.createGeometry=function(t){const e=t._vertexFormat,o=t._ellipsoid,n=t._granularity,r=t._stRotation,i=t._polygonHierarchy,s=t._perPositionHeight,a=t._closeTop,l=t._closeBottom,c=t._arcType,u=t._textureCoordinates,p=(0,Z.Z)(u);let f=i.positions;if(f.length<3)return;const h=Kt.Z.fromPoints(f,o),g=$t.Z.polygonsFromHierarchy(i,p,h.projectPointsOntoPlane.bind(h),!s,o),d=g.hierarchy,m=g.polygons,y=function(t){return t},w=p?$t.Z.polygonsFromHierarchy(u,!0,y,!1).polygons:void 0;if(0===d.length)return;f=d[0].outerRing;const _=$t.Z.computeBoundingRectangle(h.plane.normal,h.projectPointOntoPlane.bind(h),f,r,ce),b=[],v=t._height,T=t._extrudedHeight,P=t._perPositionHeightExtrude||!Ut.Z.equalsEpsilon(v,T,0,Ut.Z.EPSILON2),C={perPositionHeight:s,vertexFormat:e,geometry:void 0,tangentPlane:h,boundingRectangle:_,ellipsoid:o,stRotation:r,textureCoordinates:void 0,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:c};let I;if(P)for(C.extrude=!0,C.top=a,C.bottom=l,C.shadowVolume=t._shadowVolume,C.offsetAttribute=t._offsetAttribute,I=0;I<m.length;I++){const t=Le(o,m[I],p?w[I]:void 0,n,d[I],s,a,l,e,c);let r;a&&l?(r=t.topAndBottom,C.geometry=$t.Z.scaleToGeodeticHeightExtruded(r.geometry,v,T,o,s)):a?(r=t.topAndBottom,r.geometry.attributes.position.values=Qt.Z.scaleToGeodeticHeight(r.geometry.attributes.position.values,v,o,!s),C.geometry=r.geometry):l&&(r=t.topAndBottom,r.geometry.attributes.position.values=Qt.Z.scaleToGeodeticHeight(r.geometry.attributes.position.values,T,o,!0),C.geometry=r.geometry),(a||l)&&(C.wall=!1,r.geometry=Ce(C),b.push(r));const i=t.walls;C.wall=!0;for(let e=0;e<i.length;e++){const t=i[e];C.geometry=$t.Z.scaleToGeodeticHeightExtruded(t.geometry,v,T,o,s),t.geometry=Ce(C),b.push(t)}}else for(I=0;I<m.length;I++){const r=new St.Z({geometry:$t.Z.createGeometryFromPositions(o,m[I],p?w[I]:void 0,n,s,e,c)});if(r.geometry.attributes.position.values=Qt.Z.scaleToGeodeticHeight(r.geometry.attributes.position.values,v,o,!s),C.geometry=r.geometry,r.geometry=Ce(C),(0,Z.Z)(t._offsetAttribute)){const e=r.geometry.attributes.position.values.length,o=t._offsetAttribute===Wt.Z.NONE?0:1,n=new Uint8Array(e/3).fill(o);r.geometry.attributes.applyOffset=new Vt.Z({componentDatatype:jt.Z.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}b.push(r)}const k=ne.Z.combineInstances(b)[0];k.attributes.position.values=new Float64Array(k.attributes.position.values),k.indices=Jt.Z.createTypedArray(k.attributes.position.values.length/3,k.indices);const x=k.attributes,O=re.Z.fromVertices(x.position.values);return e.position||delete x.position,new ie.Z({attributes:x,indices:k.indices,primitiveType:k.primitiveType,boundingSphere:O,offsetAttribute:t._offsetAttribute})},Ne.createShadowVolume=function(t,e,o){const n=t._granularity,r=t._ellipsoid,i=e(n,r),s=o(n,r);return new Ne({polygonHierarchy:t._polygonHierarchy,ellipsoid:r,stRotation:t._stRotation,granularity:n,perPositionHeight:!1,extrudedHeight:i,height:s,vertexFormat:ee.Z.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})},Object.defineProperties(Ne.prototype,{rectangle:{get:function(){if(!(0,Z.Z)(this._rectangle)){const t=this._polygonHierarchy.positions;this._rectangle=Ee(t,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return(0,Z.Z)(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=Fe(this)),this._textureCoordinateRotationPoints}}});var Me=Ne;const ze="../../SampleData/building.json";var Be={mounted(){this.init()},methods:{init(){var t=new s.Z("cesiumContainer");a.Z.supportsImageRenderingPixelated()&&(t.resolutionScale=window.devicePixelRatio),t.scene.postProcessStages.fxaa.enabled=!0;const e=t.scene,o="\n        uniform float offset2;\n        uniform float offset1;\n        uniform vec4 color;\n        const float pi = 3.1415926;\n        czm_material czm_getMaterial(czm_materialInput materialInput)\n        {\n          czm_material material = czm_getDefaultMaterial(materialInput);\n          vec2 st = materialInput.st;\n\n          material.diffuse = czm_gammaCorrect(color.rgb); \n          // material.diffuse = vec3(st.t,st.t,st.t);\n          float a = abs(cos(st.t * pi * 3.0));\n          if(a<=0.2){\n            material.diffuse = vec3(189.0/255.0,196.0/255.0,210.0/255.0);\n          }\n          if(st.t> offset1-offset2 && st.t< offset1+offset2)\n          {\n            material.emission=vec3(0.7);\n          }\n          material.alpha = 1.0; \n          return material;\n        }\n        ";Ht.load(ze).then((n=>{const r=n.entities.values,i=[];for(const t of r){const e=new Me({polygonHierarchy:t.polygon.hierarchy.getValue(),extrudedHeight:40*Math.random()+10}),o=Me.createGeometry(e),n=new St.Z({geometry:o});i.push(n)}const s=e.primitives.add(new Lt.Z({asynchronous:!1,geometryInstances:i,appearance:new Nt.Z({material:new Rt.Z({translucent:!1,fabric:{uniforms:{color:new u.Z(87/255,122/255,150/255),offset1:.02,offset2:.02},source:o}})})}));t.scene.preUpdate.addEventListener((function(){var t=s.appearance.material.uniforms.offset1;t+=.01,t>.98&&(t=.02),s.appearance.material.uniforms.offset1=t}));const a=c.Z.fromDegrees(104.06,30.66);t.camera.lookAt(a,new c.Z(0,-4790,3930)),t.camera.lookAtTransform(Gt.Z.IDENTITY)}))}}},Ue=o(89);const Ve=(0,Ue.Z)(Be,[["render",i],["__scopeId","data-v-53cc5236"]]);var je=Ve}}]);
//# sourceMappingURL=185.4c95afa2.js.map