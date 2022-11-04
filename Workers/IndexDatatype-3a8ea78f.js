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
define(["exports","./defaultValue-135942ca","./Math-a304e2d6","./WebGLConstants-fcb70ee3"],(function(e,n,r,t){"use strict";const N={UNSIGNED_BYTE:t.WebGLConstants.UNSIGNED_BYTE,UNSIGNED_SHORT:t.WebGLConstants.UNSIGNED_SHORT,UNSIGNED_INT:t.WebGLConstants.UNSIGNED_INT,getSizeInBytes:function(e){switch(e){case N.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case N.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case N.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT}},fromSizeInBytes:function(e){switch(e){case 2:return N.UNSIGNED_SHORT;case 4:return N.UNSIGNED_INT;case 1:return N.UNSIGNED_BYTE}},validate:function(e){return n.defined(e)&&(e===N.UNSIGNED_BYTE||e===N.UNSIGNED_SHORT||e===N.UNSIGNED_INT)},createTypedArray:function(e,n){return e>=r.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(n):new Uint16Array(n)},createTypedArrayFromArrayBuffer:function(e,n,t,N){return e>=r.CesiumMath.SIXTY_FOUR_KILOBYTES?new Uint32Array(n,t,N):new Uint16Array(n,t,N)},fromTypedArray:function(e){return e instanceof Uint8Array?N.UNSIGNED_BYTE:e instanceof Uint16Array?N.UNSIGNED_SHORT:e instanceof Uint32Array?N.UNSIGNED_INT:void 0}};var a=Object.freeze(N);e.IndexDatatype=a}));