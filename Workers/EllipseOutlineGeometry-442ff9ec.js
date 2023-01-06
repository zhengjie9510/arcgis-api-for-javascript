define(["exports","./Transforms-713aa3a8","./Matrix3-b6f074fa","./ComponentDatatype-77274976","./defaultValue-0a909f67","./EllipseGeometryLibrary-b1d2dfaa","./GeometryAttribute-0b8b7b82","./GeometryAttributes-f06a2792","./GeometryOffsetAttribute-04332ce7","./IndexDatatype-2149f06c","./Math-e97915da"],(function(e,t,i,r,n,a,o,s,l,u,d){"use strict";const c=new i.Cartesian3;let f=new i.Cartesian3;const p=new t.BoundingSphere,m=new t.BoundingSphere;function h(e){const t=(e=n.defaultValue(e,n.defaultValue.EMPTY_OBJECT)).center,r=n.defaultValue(e.ellipsoid,i.Ellipsoid.WGS84),a=e.semiMajorAxis,o=e.semiMinorAxis,s=n.defaultValue(e.granularity,d.CesiumMath.RADIANS_PER_DEGREE),l=n.defaultValue(e.height,0),u=n.defaultValue(e.extrudedHeight,l);this._center=i.Cartesian3.clone(t),this._semiMajorAxis=a,this._semiMinorAxis=o,this._ellipsoid=i.Ellipsoid.clone(r),this._rotation=n.defaultValue(e.rotation,0),this._height=Math.max(u,l),this._granularity=s,this._extrudedHeight=Math.min(u,l),this._numberOfVerticalLines=Math.max(n.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}h.packedLength=i.Cartesian3.packedLength+i.Ellipsoid.packedLength+8,h.pack=function(e,t,r){return r=n.defaultValue(r,0),i.Cartesian3.pack(e._center,t,r),r+=i.Cartesian3.packedLength,i.Ellipsoid.pack(e._ellipsoid,t,r),r+=i.Ellipsoid.packedLength,t[r++]=e._semiMajorAxis,t[r++]=e._semiMinorAxis,t[r++]=e._rotation,t[r++]=e._height,t[r++]=e._granularity,t[r++]=e._extrudedHeight,t[r++]=e._numberOfVerticalLines,t[r]=n.defaultValue(e._offsetAttribute,-1),t};const y=new i.Cartesian3,b=new i.Ellipsoid,A={center:y,ellipsoid:b,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};h.unpack=function(e,t,r){t=n.defaultValue(t,0);const a=i.Cartesian3.unpack(e,t,y);t+=i.Cartesian3.packedLength;const o=i.Ellipsoid.unpack(e,t,b);t+=i.Ellipsoid.packedLength;const s=e[t++],l=e[t++],u=e[t++],d=e[t++],c=e[t++],f=e[t++],p=e[t++],m=e[t];return n.defined(r)?(r._center=i.Cartesian3.clone(a,r._center),r._ellipsoid=i.Ellipsoid.clone(o,r._ellipsoid),r._semiMajorAxis=s,r._semiMinorAxis=l,r._rotation=u,r._height=d,r._granularity=c,r._extrudedHeight=f,r._numberOfVerticalLines=p,r._offsetAttribute=-1===m?void 0:m,r):(A.height=d,A.extrudedHeight=f,A.granularity=c,A.rotation=u,A.semiMajorAxis=s,A.semiMinorAxis=l,A.numberOfVerticalLines=p,A.offsetAttribute=-1===m?void 0:m,new h(A))},h.createGeometry=function(e){if(e._semiMajorAxis<=0||e._semiMinorAxis<=0)return;const h=e._height,y=e._extrudedHeight,b=!d.CesiumMath.equalsEpsilon(h,y,0,d.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);const A={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:h,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};let _;if(b)A.extrudedHeight=y,A.offsetAttribute=e._offsetAttribute,_=function(e){const f=e.center,h=e.ellipsoid,y=e.semiMajorAxis;let b=i.Cartesian3.multiplyByScalar(h.geodeticSurfaceNormal(f,c),e.height,c);p.center=i.Cartesian3.add(f,b,p.center),p.radius=y,b=i.Cartesian3.multiplyByScalar(h.geodeticSurfaceNormal(f,b),e.extrudedHeight,b),m.center=i.Cartesian3.add(f,b,m.center),m.radius=y;let A=a.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions;const _=new s.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a.EllipseGeometryLibrary.raisePositionsToHeight(A,e,!0)})});A=_.position.values;const g=t.BoundingSphere.union(p,m);let x=A.length/3;if(n.defined(e.offsetAttribute)){let t=new Uint8Array(x);if(e.offsetAttribute===l.GeometryOffsetAttribute.TOP)t=t.fill(1,0,x/2);else{const i=e.offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1;t=t.fill(i)}_.applyOffset=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t})}let E=n.defaultValue(e.numberOfVerticalLines,16);E=d.CesiumMath.clamp(E,0,x/2);const M=u.IndexDatatype.createTypedArray(x,2*x+2*E);x/=2;let C,G,L=0;for(C=0;C<x;++C)M[L++]=C,M[L++]=(C+1)%x,M[L++]=C+x,M[L++]=(C+1)%x+x;if(E>0){const e=Math.min(E,x);G=Math.round(x/e);const t=Math.min(G*E,x);for(C=0;C<t;C+=G)M[L++]=C,M[L++]=C+x}return{boundingSphere:g,attributes:_,indices:M}}(A);else if(_=function(e){const n=e.center;f=i.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(n,f),e.height,f),f=i.Cartesian3.add(n,f,f);const l=new t.BoundingSphere(f,e.semiMajorAxis),d=a.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,c=new s.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:a.EllipseGeometryLibrary.raisePositionsToHeight(d,e,!1)})}),p=d.length/3,m=u.IndexDatatype.createTypedArray(p,2*p);let h=0;for(let t=0;t<p;++t)m[h++]=t,m[h++]=(t+1)%p;return{boundingSphere:l,attributes:c,indices:m}}(A),n.defined(e._offsetAttribute)){const t=_.attributes.position.values.length,i=e._offsetAttribute===l.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(t/3).fill(i);_.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new o.Geometry({attributes:_.attributes,indices:_.indices,primitiveType:o.PrimitiveType.LINES,boundingSphere:_.boundingSphere,offsetAttribute:e._offsetAttribute})},e.EllipseOutlineGeometry=h}));