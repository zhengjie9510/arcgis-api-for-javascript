/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.99
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
define(["exports","./Transforms-3ea76111","./ComponentDatatype-e86a9f87","./defaultValue-135942ca","./Matrix3-edb29a7e","./GeometryAttribute-dacddb3f","./GeometryAttributes-899f8bd0","./GeometryPipeline-7cd8f832","./IndexDatatype-3a8ea78f","./Matrix2-7a2bab7e","./WebMercatorProjection-76d90916"],(function(e,t,n,r,o,i,s,c,a,d,p){"use strict";function u(e,t,n){e=r.defaultValue(e,0),t=r.defaultValue(t,0),n=r.defaultValue(n,0),this.value=new Float32Array([e,t,n])}function f(e,t){const r=e.attributes,o=r.position,s=o.values.length/o.componentsPerAttribute;r.batchId=new i.GeometryAttribute({componentDatatype:n.ComponentDatatype.FLOAT,componentsPerAttribute:1,values:new Float32Array(s)});const c=r.batchId.values;for(let n=0;n<s;++n)c[n]=t}function l(e){const o=e.instances,i=e.projection,s=e.elementIndexUintSupported,a=e.scene3DOnly,p=e.vertexCacheOptimize,u=e.compressVertices,l=e.modelMatrix;let m,h,g=o.length;for(m=0;m<g;++m)if(r.defined(o[m].geometry)){o[m].geometry.primitiveType;break}if(function(e,t,n){let o=!n;const i=e.length;let s;if(!o&&i>1){const t=e[0].modelMatrix;for(s=1;s<i;++s)if(!d.Matrix4.equals(t,e[s].modelMatrix)){o=!0;break}}if(o)for(s=0;s<i;++s)r.defined(e[s].geometry)&&c.GeometryPipeline.transformToWorldCoordinates(e[s]);else d.Matrix4.multiplyTransformation(t,e[0].modelMatrix,t)}(o,l,a),!a)for(m=0;m<g;++m)r.defined(o[m].geometry)&&c.GeometryPipeline.splitLongitude(o[m]);if(function(e){const t=e.length;for(let n=0;n<t;++n){const t=e[n];r.defined(t.geometry)?f(t.geometry,n):r.defined(t.westHemisphereGeometry)&&r.defined(t.eastHemisphereGeometry)&&(f(t.westHemisphereGeometry,n),f(t.eastHemisphereGeometry,n))}}(o),p)for(m=0;m<g;++m){const e=o[m];r.defined(e.geometry)?(c.GeometryPipeline.reorderForPostVertexCache(e.geometry),c.GeometryPipeline.reorderForPreVertexCache(e.geometry)):r.defined(e.westHemisphereGeometry)&&r.defined(e.eastHemisphereGeometry)&&(c.GeometryPipeline.reorderForPostVertexCache(e.westHemisphereGeometry),c.GeometryPipeline.reorderForPreVertexCache(e.westHemisphereGeometry),c.GeometryPipeline.reorderForPostVertexCache(e.eastHemisphereGeometry),c.GeometryPipeline.reorderForPreVertexCache(e.eastHemisphereGeometry))}let y=c.GeometryPipeline.combineInstances(o);for(g=y.length,m=0;m<g;++m){h=y[m];const e=h.attributes;if(a)for(const t in e)e.hasOwnProperty(t)&&e[t].componentDatatype===n.ComponentDatatype.DOUBLE&&c.GeometryPipeline.encodeAttribute(h,t,`${t}3DHigh`,`${t}3DLow`);else for(const o in e)if(e.hasOwnProperty(o)&&e[o].componentDatatype===n.ComponentDatatype.DOUBLE){const e=`${o}3D`,n=`${o}2D`;c.GeometryPipeline.projectTo2D(h,o,e,n,i),r.defined(h.boundingSphere)&&"position"===o&&(h.boundingSphereCV=t.BoundingSphere.fromVertices(h.attributes.position2D.values)),c.GeometryPipeline.encodeAttribute(h,e,`${e}High`,`${e}Low`),c.GeometryPipeline.encodeAttribute(h,n,`${n}High`,`${n}Low`)}u&&c.GeometryPipeline.compressVertices(h)}if(!s){let e=[];for(g=y.length,m=0;m<g;++m)h=y[m],e=e.concat(c.GeometryPipeline.fitToUnsignedShortIndices(h));y=e}return y}function m(e,t,n,o){let i,s,c;const a=o.length-1;if(a>=0){const e=o[a];i=e.offset+e.count,c=e.index,s=n[c].indices.length}else i=0,c=0,s=n[c].indices.length;const d=e.length;for(let p=0;p<d;++p){const a=e[p][t];if(!r.defined(a))continue;const d=a.indices.length;i+d>s&&(i=0,s=n[++c].indices.length),o.push({index:c,offset:i,count:d}),i+=d}}Object.defineProperties(u.prototype,{componentDatatype:{get:function(){return n.ComponentDatatype.FLOAT}},componentsPerAttribute:{get:function(){return 3}},normalize:{get:function(){return!1}}}),u.fromCartesian3=function(e){return new u(e.x,e.y,e.z)},u.toValue=function(e,t){return r.defined(t)||(t=new Float32Array([e.x,e.y,e.z])),t[0]=e.x,t[1]=e.y,t[2]=e.z,t};const h={};function g(e,t){const n=e.attributes;for(const o in n)if(n.hasOwnProperty(o)){const e=n[o];r.defined(e)&&r.defined(e.values)&&t.push(e.values.buffer)}r.defined(e.indices)&&t.push(e.indices.buffer)}function y(e,t){const n=e.length,o=new Float64Array(1+19*n);let i=0;o[i++]=n;for(let s=0;s<n;s++){const t=e[s];if(d.Matrix4.pack(t.modelMatrix,o,i),i+=d.Matrix4.packedLength,r.defined(t.attributes)&&r.defined(t.attributes.offset)){const e=t.attributes.offset.value;o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2]}i+=3}return t.push(o.buffer),o}function b(e){const n=e.length,o=1+(t.BoundingSphere.packedLength+1)*n,i=new Float32Array(o);let s=0;i[s++]=n;for(let c=0;c<n;++c){const n=e[c];r.defined(n)?(i[s++]=1,t.BoundingSphere.pack(e[c],i,s)):i[s++]=0,s+=t.BoundingSphere.packedLength}return i}function x(e){const n=new Array(e[0]);let r=0,o=1;for(;o<e.length;)1===e[o++]&&(n[r]=t.BoundingSphere.unpack(e,o)),++r,o+=t.BoundingSphere.packedLength;return n}h.combineGeometry=function(e){let n,o;const i=e.instances,s=i.length;let a,d,p=!1;s>0&&(n=l(e),n.length>0&&(o=c.GeometryPipeline.createAttributeLocations(n[0]),e.createPickOffsets&&(a=function(e,t){const n=[];return m(e,"geometry",t,n),m(e,"westHemisphereGeometry",t,n),m(e,"eastHemisphereGeometry",t,n),n}(i,n))),r.defined(i[0].attributes)&&r.defined(i[0].attributes.offset)&&(d=new Array(s),p=!0));const u=new Array(s),f=new Array(s);for(let c=0;c<s;++c){const e=i[c],n=e.geometry;r.defined(n)&&(u[c]=n.boundingSphere,f[c]=n.boundingSphereCV,p&&(d[c]=e.geometry.offsetAttribute));const o=e.eastHemisphereGeometry,s=e.westHemisphereGeometry;r.defined(o)&&r.defined(s)&&(r.defined(o.boundingSphere)&&r.defined(s.boundingSphere)&&(u[c]=t.BoundingSphere.union(o.boundingSphere,s.boundingSphere)),r.defined(o.boundingSphereCV)&&r.defined(s.boundingSphereCV)&&(f[c]=t.BoundingSphere.union(o.boundingSphereCV,s.boundingSphereCV)))}return{geometries:n,modelMatrix:e.modelMatrix,attributeLocations:o,pickOffsets:a,offsetInstanceExtend:d,boundingSpheres:u,boundingSpheresCV:f}},h.packCreateGeometryResults=function(e,n){const o=new Float64Array(function(e){let n=1;const o=e.length;for(let i=0;i<o;i++){const o=e[i];if(++n,!r.defined(o))continue;const s=o.attributes;n+=7+2*t.BoundingSphere.packedLength+(r.defined(o.indices)?o.indices.length:0);for(const e in s)s.hasOwnProperty(e)&&r.defined(s[e])&&(n+=5+s[e].values.length)}return n}(e)),i=[],s={},c=e.length;let a=0;o[a++]=c;for(let d=0;d<c;d++){const n=e[d],c=r.defined(n);if(o[a++]=c?1:0,!c)continue;o[a++]=n.primitiveType,o[a++]=n.geometryType,o[a++]=r.defaultValue(n.offsetAttribute,-1);const p=r.defined(n.boundingSphere)?1:0;o[a++]=p,p&&t.BoundingSphere.pack(n.boundingSphere,o,a),a+=t.BoundingSphere.packedLength;const u=r.defined(n.boundingSphereCV)?1:0;o[a++]=u,u&&t.BoundingSphere.pack(n.boundingSphereCV,o,a),a+=t.BoundingSphere.packedLength;const f=n.attributes,l=[];for(const e in f)f.hasOwnProperty(e)&&r.defined(f[e])&&(l.push(e),r.defined(s[e])||(s[e]=i.length,i.push(e)));o[a++]=l.length;for(let e=0;e<l.length;e++){const t=l[e],n=f[t];o[a++]=s[t],o[a++]=n.componentDatatype,o[a++]=n.componentsPerAttribute,o[a++]=n.normalize?1:0,o[a++]=n.values.length,o.set(n.values,a),a+=n.values.length}const m=r.defined(n.indices)?n.indices.length:0;o[a++]=m,m>0&&(o.set(n.indices,a),a+=m)}return n.push(o.buffer),{stringTable:i,packedData:o}},h.unpackCreateGeometryResults=function(e){const r=e.stringTable,o=e.packedData;let c;const d=new Array(o[0]);let p=0,u=1;for(;u<o.length;){if(1!==o[u++]){d[p++]=void 0;continue}const e=o[u++],f=o[u++];let l,m,h,g,y,b=o[u++];-1===b&&(b=void 0),1===o[u++]&&(l=t.BoundingSphere.unpack(o,u)),u+=t.BoundingSphere.packedLength,1===o[u++]&&(m=t.BoundingSphere.unpack(o,u)),u+=t.BoundingSphere.packedLength;const x=new s.GeometryAttributes,G=o[u++];for(c=0;c<G;c++){const e=r[o[u++]],t=o[u++];y=o[u++];const s=0!==o[u++];h=o[u++],g=n.ComponentDatatype.createTypedArray(t,h);for(let n=0;n<h;n++)g[n]=o[u++];x[e]=new i.GeometryAttribute({componentDatatype:t,componentsPerAttribute:y,normalize:s,values:g})}let S;if(h=o[u++],h>0){const e=g.length/y;for(S=a.IndexDatatype.createTypedArray(e,h),c=0;c<h;c++)S[c]=o[u++]}d[p++]=new i.Geometry({primitiveType:e,geometryType:f,boundingSphere:l,boundingSphereCV:m,indices:S,attributes:x,offsetAttribute:b})}return d},h.packCombineGeometryParameters=function(e,n){const r=e.createGeometryResults,o=r.length;for(let t=0;t<o;t++)n.push(r[t].packedData.buffer);return{createGeometryResults:e.createGeometryResults,packedInstances:y(e.instances,n),ellipsoid:e.ellipsoid,isGeographic:e.projection instanceof t.GeographicProjection,elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:e.modelMatrix,createPickOffsets:e.createPickOffsets}},h.unpackCombineGeometryParameters=function(e){const n=function(e){const t=e,n=new Array(t[0]);let o=0,i=1;for(;i<t.length;){const e=d.Matrix4.unpack(t,i);let s;i+=d.Matrix4.packedLength,r.defined(t[i])&&(s={offset:new u(t[i],t[i+1],t[i+2])}),i+=3,n[o++]={modelMatrix:e,attributes:s}}return n}(e.packedInstances),i=e.createGeometryResults,s=i.length;let c=0;for(let t=0;t<s;t++){const e=h.unpackCreateGeometryResults(i[t]),r=e.length;for(let t=0;t<r;t++){const r=e[t];n[c].geometry=r,++c}}const a=o.Ellipsoid.clone(e.ellipsoid);return{instances:n,ellipsoid:a,projection:e.isGeographic?new t.GeographicProjection(a):new p.WebMercatorProjection(a),elementIndexUintSupported:e.elementIndexUintSupported,scene3DOnly:e.scene3DOnly,vertexCacheOptimize:e.vertexCacheOptimize,compressVertices:e.compressVertices,modelMatrix:d.Matrix4.clone(e.modelMatrix),createPickOffsets:e.createPickOffsets}},h.packCombineGeometryResults=function(e,t){r.defined(e.geometries)&&function(e,t){const n=e.length;for(let r=0;r<n;++r)g(e[r],t)}(e.geometries,t);const n=b(e.boundingSpheres),o=b(e.boundingSpheresCV);return t.push(n.buffer,o.buffer),{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:n,boundingSpheresCV:o}},h.unpackCombineGeometryResults=function(e){return{geometries:e.geometries,attributeLocations:e.attributeLocations,modelMatrix:e.modelMatrix,pickOffsets:e.pickOffsets,offsetInstanceExtend:e.offsetInstanceExtend,boundingSpheres:x(e.boundingSpheres),boundingSpheresCV:x(e.boundingSpheresCV)}};var G=h;e.PrimitivePipeline=G}));