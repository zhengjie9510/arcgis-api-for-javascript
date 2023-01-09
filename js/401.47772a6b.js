"use strict";(self["webpackChunkwebgis"]=self["webpackChunkwebgis"]||[]).push([[401],{24401:function(t,i,n){n.d(i,{Z:function(){return p}});n(57658);var e=n(58232),o=n(49721),s=n(51625),r=n(46816),l=n(23802),h=n(54899);function a(t,i){this._conditionsExpression=(0,e.Z)(t,!0),this._conditions=t.conditions,this._runtimeConditions=void 0,u(this,i)}function c(t,i){this.condition=t,this.expression=i}function u(t,i){const n=[],e=t._conditions;if(!(0,s.Z)(e))return;const o=e.length;for(let s=0;s<o;++s){const t=e[s],o=String(t[0]),r=String(t[1]);n.push(new c(new h.Z(o,i),new h.Z(r,i)))}t._runtimeConditions=n}Object.defineProperties(a.prototype,{conditionsExpression:{get:function(){return this._conditionsExpression}}}),a.prototype.evaluate=function(t,i){const n=this._runtimeConditions;if(!(0,s.Z)(n))return;const e=n.length;for(let o=0;o<e;++o){const e=n[o];if(e.condition.evaluate(t))return e.expression.evaluate(t,i)}},a.prototype.evaluateColor=function(t,i){const n=this._runtimeConditions;if(!(0,s.Z)(n))return;const e=n.length;for(let o=0;o<e;++o){const e=n[o];if(e.condition.evaluate(t))return e.expression.evaluateColor(t,i)}},a.prototype.getShaderFunction=function(t,i,n,e){const o=this._runtimeConditions;if(!(0,s.Z)(o)||0===o.length)return;let r="";const l=o.length;for(let s=0;s<l;++s){const t=o[s],e=t.condition.getShaderExpression(i,n),l=t.expression.getShaderExpression(i,n);r+=`    ${0===s?"if":"else if"} (${e})\n    {\n        return ${l};\n    }\n`}return r=`${e} ${t}\n{\n${r}    return ${e}(1.0);\n}\n`,r},a.prototype.getVariables=function(){let t=[];const i=this._runtimeConditions;if(!(0,s.Z)(i)||0===i.length)return t;const n=i.length;for(let e=0;e<n;++e){const n=i[e];t.push.apply(t,n.condition.getVariables()),t.push.apply(t,n.expression.getVariables())}return t=t.filter((function(t,i,n){return n.indexOf(t)===i})),t};var d=a;function _(t){this._style={},this._ready=!1,this._show=void 0,this._color=void 0,this._pointSize=void 0,this._pointOutlineColor=void 0,this._pointOutlineWidth=void 0,this._labelColor=void 0,this._labelOutlineColor=void 0,this._labelOutlineWidth=void 0,this._font=void 0,this._labelStyle=void 0,this._labelText=void 0,this._backgroundColor=void 0,this._backgroundPadding=void 0,this._backgroundEnabled=void 0,this._scaleByDistance=void 0,this._translucencyByDistance=void 0,this._distanceDisplayCondition=void 0,this._heightOffset=void 0,this._anchorLineEnabled=void 0,this._anchorLineColor=void 0,this._image=void 0,this._disableDepthTestDistance=void 0,this._horizontalOrigin=void 0,this._verticalOrigin=void 0,this._labelHorizontalOrigin=void 0,this._labelVerticalOrigin=void 0,this._meta=void 0,this._colorShaderFunction=void 0,this._showShaderFunction=void 0,this._pointSizeShaderFunction=void 0,this._colorShaderFunctionReady=!1,this._showShaderFunctionReady=!1,this._pointSizeShaderFunctionReady=!1,this._colorShaderTranslucent=!1,g(this,t)}function g(t,i){i=(0,o.Z)((0,e.Z)(i,!0),t._style),t._style=i,t.show=i.show,t.color=i.color,t.pointSize=i.pointSize,t.pointOutlineColor=i.pointOutlineColor,t.pointOutlineWidth=i.pointOutlineWidth,t.labelColor=i.labelColor,t.labelOutlineColor=i.labelOutlineColor,t.labelOutlineWidth=i.labelOutlineWidth,t.labelStyle=i.labelStyle,t.font=i.font,t.labelText=i.labelText,t.backgroundColor=i.backgroundColor,t.backgroundPadding=i.backgroundPadding,t.backgroundEnabled=i.backgroundEnabled,t.scaleByDistance=i.scaleByDistance,t.translucencyByDistance=i.translucencyByDistance,t.distanceDisplayCondition=i.distanceDisplayCondition,t.heightOffset=i.heightOffset,t.anchorLineEnabled=i.anchorLineEnabled,t.anchorLineColor=i.anchorLineColor,t.image=i.image,t.disableDepthTestDistance=i.disableDepthTestDistance,t.horizontalOrigin=i.horizontalOrigin,t.verticalOrigin=i.verticalOrigin,t.labelHorizontalOrigin=i.labelHorizontalOrigin,t.labelVerticalOrigin=i.labelVerticalOrigin;const n={};if((0,s.Z)(i.meta)){const t=i.defines,e=(0,o.Z)(i.meta,o.Z.EMPTY_OBJECT);for(const i in e)e.hasOwnProperty(i)&&(n[i]=new h.Z(e[i],t))}t._meta=n,t._ready=!0}function f(t,i){const n=(0,o.Z)(t._style,o.Z.EMPTY_OBJECT).defines;if((0,s.Z)(i))return"boolean"===typeof i||"number"===typeof i?new h.Z(String(i)):"string"===typeof i?new h.Z(i,n):(0,s.Z)(i.conditions)?new d(i,n):i}function b(t){if((0,s.Z)(t))return(0,s.Z)(t.expression)?t.expression:(0,s.Z)(t.conditionsExpression)?(0,e.Z)(t.conditionsExpression,!0):t}Object.defineProperties(_.prototype,{style:{get:function(){return this._style}},show:{get:function(){return this._show},set:function(t){this._show=f(this,t),this._style.show=b(this._show),this._showShaderFunctionReady=!1}},color:{get:function(){return this._color},set:function(t){this._color=f(this,t),this._style.color=b(this._color),this._colorShaderFunctionReady=!1}},pointSize:{get:function(){return this._pointSize},set:function(t){this._pointSize=f(this,t),this._style.pointSize=b(this._pointSize),this._pointSizeShaderFunctionReady=!1}},pointOutlineColor:{get:function(){return this._pointOutlineColor},set:function(t){this._pointOutlineColor=f(this,t),this._style.pointOutlineColor=b(this._pointOutlineColor)}},pointOutlineWidth:{get:function(){return this._pointOutlineWidth},set:function(t){this._pointOutlineWidth=f(this,t),this._style.pointOutlineWidth=b(this._pointOutlineWidth)}},labelColor:{get:function(){return this._labelColor},set:function(t){this._labelColor=f(this,t),this._style.labelColor=b(this._labelColor)}},labelOutlineColor:{get:function(){return this._labelOutlineColor},set:function(t){this._labelOutlineColor=f(this,t),this._style.labelOutlineColor=b(this._labelOutlineColor)}},labelOutlineWidth:{get:function(){return this._labelOutlineWidth},set:function(t){this._labelOutlineWidth=f(this,t),this._style.labelOutlineWidth=b(this._labelOutlineWidth)}},font:{get:function(){return this._font},set:function(t){this._font=f(this,t),this._style.font=b(this._font)}},labelStyle:{get:function(){return this._labelStyle},set:function(t){this._labelStyle=f(this,t),this._style.labelStyle=b(this._labelStyle)}},labelText:{get:function(){return this._labelText},set:function(t){this._labelText=f(this,t),this._style.labelText=b(this._labelText)}},backgroundColor:{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=f(this,t),this._style.backgroundColor=b(this._backgroundColor)}},backgroundPadding:{get:function(){return this._backgroundPadding},set:function(t){this._backgroundPadding=f(this,t),this._style.backgroundPadding=b(this._backgroundPadding)}},backgroundEnabled:{get:function(){return this._backgroundEnabled},set:function(t){this._backgroundEnabled=f(this,t),this._style.backgroundEnabled=b(this._backgroundEnabled)}},scaleByDistance:{get:function(){return this._scaleByDistance},set:function(t){this._scaleByDistance=f(this,t),this._style.scaleByDistance=b(this._scaleByDistance)}},translucencyByDistance:{get:function(){return this._translucencyByDistance},set:function(t){this._translucencyByDistance=f(this,t),this._style.translucencyByDistance=b(this._translucencyByDistance)}},distanceDisplayCondition:{get:function(){return this._distanceDisplayCondition},set:function(t){this._distanceDisplayCondition=f(this,t),this._style.distanceDisplayCondition=b(this._distanceDisplayCondition)}},heightOffset:{get:function(){return this._heightOffset},set:function(t){this._heightOffset=f(this,t),this._style.heightOffset=b(this._heightOffset)}},anchorLineEnabled:{get:function(){return this._anchorLineEnabled},set:function(t){this._anchorLineEnabled=f(this,t),this._style.anchorLineEnabled=b(this._anchorLineEnabled)}},anchorLineColor:{get:function(){return this._anchorLineColor},set:function(t){this._anchorLineColor=f(this,t),this._style.anchorLineColor=b(this._anchorLineColor)}},image:{get:function(){return this._image},set:function(t){this._image=f(this,t),this._style.image=b(this._image)}},disableDepthTestDistance:{get:function(){return this._disableDepthTestDistance},set:function(t){this._disableDepthTestDistance=f(this,t),this._style.disableDepthTestDistance=b(this._disableDepthTestDistance)}},horizontalOrigin:{get:function(){return this._horizontalOrigin},set:function(t){this._horizontalOrigin=f(this,t),this._style.horizontalOrigin=b(this._horizontalOrigin)}},verticalOrigin:{get:function(){return this._verticalOrigin},set:function(t){this._verticalOrigin=f(this,t),this._style.verticalOrigin=b(this._verticalOrigin)}},labelHorizontalOrigin:{get:function(){return this._labelHorizontalOrigin},set:function(t){this._labelHorizontalOrigin=f(this,t),this._style.labelHorizontalOrigin=b(this._labelHorizontalOrigin)}},labelVerticalOrigin:{get:function(){return this._labelVerticalOrigin},set:function(t){this._labelVerticalOrigin=f(this,t),this._style.labelVerticalOrigin=b(this._labelVerticalOrigin)}},meta:{get:function(){return this._meta},set:function(t){this._meta=t}}}),_.fromUrl=function(t){if(!(0,s.Z)(t))throw new r.Z("url is required");const i=l.Z.createIfNeeded(t);return i.fetchJson(t).then((function(t){return new _(t)}))},_.prototype.getColorShaderFunction=function(t,i,n){return this._colorShaderFunctionReady?(n.translucent=this._colorShaderTranslucent,this._colorShaderFunction):(this._colorShaderFunctionReady=!0,(0,s.Z)(this.color)&&(0,s.Z)(this.color.getShaderFunction)?this._colorShaderFunction=this.color.getShaderFunction(t,i,n,"vec4"):this._colorShaderFunction=void 0,this._colorShaderTranslucent=n.translucent,this._colorShaderFunction)},_.prototype.getShowShaderFunction=function(t,i,n){return this._showShaderFunctionReady||(this._showShaderFunctionReady=!0,(0,s.Z)(this.show)&&(0,s.Z)(this.show.getShaderFunction)?this._showShaderFunction=this.show.getShaderFunction(t,i,n,"bool"):this._showShaderFunction=void 0),this._showShaderFunction},_.prototype.getPointSizeShaderFunction=function(t,i,n){return this._pointSizeShaderFunctionReady||(this._pointSizeShaderFunctionReady=!0,(0,s.Z)(this.pointSize)&&(0,s.Z)(this.pointSize.getShaderFunction)?this._pointSizeShaderFunction=this.pointSize.getShaderFunction(t,i,n,"float"):this._pointSizeShaderFunction=void 0),this._pointSizeShaderFunction},_.prototype.getVariables=function(){let t=[];return(0,s.Z)(this.color)&&(0,s.Z)(this.color.getVariables)&&t.push.apply(t,this.color.getVariables()),(0,s.Z)(this.show)&&(0,s.Z)(this.show.getVariables)&&t.push.apply(t,this.show.getVariables()),(0,s.Z)(this.pointSize)&&(0,s.Z)(this.pointSize.getVariables)&&t.push.apply(t,this.pointSize.getVariables()),t=t.filter((function(t,i,n){return n.indexOf(t)===i})),t};var p=_}}]);
//# sourceMappingURL=401.47772a6b.js.map