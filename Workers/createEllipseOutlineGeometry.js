/* This file is automatically rebuilt by the Cesium build process. */
define(['./Matrix2-92b7fb9d', './when-8166c7dd', './EllipseOutlineGeometry-5a16619f', './RuntimeError-4fdc4459', './ComponentDatatype-9ed50558', './WebGLConstants-0664004c', './GeometryOffsetAttribute-e8e698d7', './Transforms-62a339c3', './combine-a5c4cc47', './EllipseGeometryLibrary-64f7a7c9', './GeometryAttribute-6f4c3b93', './GeometryAttributes-50becc99', './IndexDatatype-797210ca'], (function (Matrix2, when, EllipseOutlineGeometry, RuntimeError, ComponentDatatype, WebGLConstants, GeometryOffsetAttribute, Transforms, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, IndexDatatype) { 'use strict';

  function createEllipseOutlineGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseOutlineGeometry.EllipseOutlineGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseOutlineGeometry.EllipseOutlineGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseOutlineGeometry;

}));
