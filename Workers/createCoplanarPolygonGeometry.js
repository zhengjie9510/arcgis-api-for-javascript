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
define(["./arrayRemoveDuplicates-d35f503f","./BoundingRectangle-9f46b506","./Transforms-3ea76111","./Matrix2-7a2bab7e","./Matrix3-edb29a7e","./ComponentDatatype-e86a9f87","./CoplanarPolygonGeometryLibrary-342b5292","./defaultValue-135942ca","./GeometryAttribute-dacddb3f","./GeometryAttributes-899f8bd0","./GeometryInstance-1aacc2fb","./GeometryPipeline-7cd8f832","./IndexDatatype-3a8ea78f","./Math-a304e2d6","./PolygonGeometryLibrary-20986fdf","./PolygonPipeline-92a50571","./VertexFormat-7d5b4d7e","./combine-462d91dd","./RuntimeError-f0dada00","./WebGLConstants-fcb70ee3","./OrientedBoundingBox-3ab8a09c","./EllipsoidTangentPlane-46a19c1a","./AxisAlignedBoundingBox-5f8053d3","./IntersectionTests-f3382f21","./Plane-5bea24eb","./AttributeCompression-5b18be52","./EncodedCartesian3-bf4e5ec3","./ArcType-89067bf8","./EllipsoidRhumbLine-5519960c"],(function(e,t,n,o,a,r,i,s,l,c,y,p,d,u,m,g,b,f,C,h,x,P,A,L,w,G,F,v,E){"use strict";const _=new a.Cartesian3,T=new t.BoundingRectangle,k=new o.Cartesian2,D=new o.Cartesian2,V=new a.Cartesian3,R=new a.Cartesian3,H=new a.Cartesian3,I=new a.Cartesian3,M=new a.Cartesian3,B=new a.Cartesian3,O=new n.Quaternion,z=new a.Matrix3,S=new a.Matrix3,N=new a.Cartesian3;function Q(e,t,i,y,p,m,b,f,C){const h=e.positions;let x=g.PolygonPipeline.triangulate(e.positions2D,e.holes);x.length<3&&(x=[0,1,2]);const P=d.IndexDatatype.createTypedArray(h.length,x.length);P.set(x);let A=z;if(0!==y){let e=n.Quaternion.fromAxisAngle(b,y,O);if(A=a.Matrix3.fromQuaternion(e,A),t.tangent||t.bitangent){e=n.Quaternion.fromAxisAngle(b,-y,O);const o=a.Matrix3.fromQuaternion(e,S);f=a.Cartesian3.normalize(a.Matrix3.multiplyByVector(o,f,f),f),t.bitangent&&(C=a.Cartesian3.normalize(a.Cartesian3.cross(b,f,C),C))}}else A=a.Matrix3.clone(a.Matrix3.IDENTITY,A);const L=D;t.st&&(L.x=i.x,L.y=i.y);const w=h.length,G=3*w,F=new Float64Array(G),v=t.normal?new Float32Array(G):void 0,E=t.tangent?new Float32Array(G):void 0,T=t.bitangent?new Float32Array(G):void 0,V=t.st?new Float32Array(2*w):void 0;let R=0,H=0,I=0,M=0,B=0;for(let n=0;n<w;n++){const e=h[n];if(F[R++]=e.x,F[R++]=e.y,F[R++]=e.z,t.st)if(s.defined(p)&&p.positions.length===w)V[B++]=p.positions[n].x,V[B++]=p.positions[n].y;else{const t=m(a.Matrix3.multiplyByVector(A,e,_),k);o.Cartesian2.subtract(t,L,t);const n=u.CesiumMath.clamp(t.x/i.width,0,1),r=u.CesiumMath.clamp(t.y/i.height,0,1);V[B++]=n,V[B++]=r}t.normal&&(v[H++]=b.x,v[H++]=b.y,v[H++]=b.z),t.tangent&&(E[M++]=f.x,E[M++]=f.y,E[M++]=f.z),t.bitangent&&(T[I++]=C.x,T[I++]=C.y,T[I++]=C.z)}const N=new c.GeometryAttributes;return t.position&&(N.position=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F})),t.normal&&(N.normal=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:v})),t.tangent&&(N.tangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),t.bitangent&&(N.bitangent=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:T})),t.st&&(N.st=new l.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:V})),new l.Geometry({attributes:N,indices:P,primitiveType:l.PrimitiveType.TRIANGLES})}function j(e){const t=(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).polygonHierarchy,n=e.textureCoordinates,r=s.defaultValue(e.vertexFormat,b.VertexFormat.DEFAULT);this._vertexFormat=b.VertexFormat.clone(r),this._polygonHierarchy=t,this._stRotation=s.defaultValue(e.stRotation,0),this._ellipsoid=a.Ellipsoid.clone(s.defaultValue(e.ellipsoid,a.Ellipsoid.WGS84)),this._workerName="createCoplanarPolygonGeometry",this._textureCoordinates=n,this.packedLength=m.PolygonGeometryLibrary.computeHierarchyPackedLength(t,a.Cartesian3)+b.VertexFormat.packedLength+a.Ellipsoid.packedLength+(s.defined(n)?m.PolygonGeometryLibrary.computeHierarchyPackedLength(n,o.Cartesian2):1)+2}j.fromPositions=function(e){return new j({polygonHierarchy:{positions:(e=s.defaultValue(e,s.defaultValue.EMPTY_OBJECT)).positions},vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,textureCoordinates:e.textureCoordinates})},j.pack=function(e,t,n){return n=s.defaultValue(n,0),n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n,a.Cartesian3),a.Ellipsoid.pack(e._ellipsoid,t,n),n+=a.Ellipsoid.packedLength,b.VertexFormat.pack(e._vertexFormat,t,n),n+=b.VertexFormat.packedLength,t[n++]=e._stRotation,s.defined(e._textureCoordinates)?n=m.PolygonGeometryLibrary.packPolygonHierarchy(e._textureCoordinates,t,n,o.Cartesian2):t[n++]=-1,t[n++]=e.packedLength,t};const U=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),Y=new b.VertexFormat,q={polygonHierarchy:{}};return j.unpack=function(e,t,n){t=s.defaultValue(t,0);const r=m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,a.Cartesian3);t=r.startingIndex,delete r.startingIndex;const i=a.Ellipsoid.unpack(e,t,U);t+=a.Ellipsoid.packedLength;const l=b.VertexFormat.unpack(e,t,Y);t+=b.VertexFormat.packedLength;const c=e[t++],y=-1===e[t]?void 0:m.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,o.Cartesian2);s.defined(y)?(t=y.startingIndex,delete y.startingIndex):t++;const p=e[t++];return s.defined(n)||(n=new j(q)),n._polygonHierarchy=r,n._ellipsoid=a.Ellipsoid.clone(i,n._ellipsoid),n._vertexFormat=b.VertexFormat.clone(l,n._vertexFormat),n._stRotation=c,n._textureCoordinates=y,n.packedLength=p,n},j.createGeometry=function(t){const o=t._vertexFormat,r=t._polygonHierarchy,c=t._stRotation,g=t._textureCoordinates,b=s.defined(g);let f=r.positions;if(f=e.arrayRemoveDuplicates(f,a.Cartesian3.equalsEpsilon,!0),f.length<3)return;let C=V,h=R,x=H,P=M;const A=B;if(!i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(f,I,P,A))return;if(C=a.Cartesian3.cross(P,A,C),C=a.Cartesian3.normalize(C,C),!a.Cartesian3.equalsEpsilon(I,a.Cartesian3.ZERO,u.CesiumMath.EPSILON6)){const e=t._ellipsoid.geodeticSurfaceNormal(I,N);a.Cartesian3.dot(C,e)<0&&(C=a.Cartesian3.negate(C,C),P=a.Cartesian3.negate(P,P))}const L=i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(I,P,A),w=i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(I,P,A);o.tangent&&(h=a.Cartesian3.clone(P,h)),o.bitangent&&(x=a.Cartesian3.clone(A,x));const G=m.PolygonGeometryLibrary.polygonsFromHierarchy(r,b,L,!1),F=G.hierarchy,v=G.polygons,E=b?m.PolygonGeometryLibrary.polygonsFromHierarchy(g,!0,(function(e){return e}),!1).polygons:void 0;if(0===F.length)return;f=F[0].outerRing;const _=n.BoundingSphere.fromPoints(f),k=m.PolygonGeometryLibrary.computeBoundingRectangle(C,w,f,c,T),D=[];for(let e=0;e<v.length;e++){const t=new y.GeometryInstance({geometry:Q(v[e],o,k,c,b?E[e]:void 0,w,C,h,x)});D.push(t)}const O=p.GeometryPipeline.combineInstances(D)[0];O.attributes.position.values=new Float64Array(O.attributes.position.values),O.indices=d.IndexDatatype.createTypedArray(O.attributes.position.values.length/3,O.indices);const z=O.attributes;return o.position||delete z.position,new l.Geometry({attributes:z,indices:O.indices,primitiveType:O.primitiveType,boundingSphere:_})},function(e,t){return s.defined(t)&&(e=j.unpack(e,t)),j.createGeometry(e)}}));