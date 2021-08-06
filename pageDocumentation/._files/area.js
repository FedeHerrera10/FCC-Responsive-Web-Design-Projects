"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var area=function(_CrowdinComponent){_inherits(area,_CrowdinComponent);var _super=_createSuper(area);function area(selector){var _this;_classCallCheck(this,area);_this=_super.call(this);_this.undoBuffer=null;_this.activeElement=null;_this.isFirefox=navigator.userAgent.indexOf("Firefox")!==-1;_this.selector=selector;_this.$container=$(_this.selector);_this.container=_this.$container.get(0);return _this}_createClass(area,[{key:"focus",value:function focus(){var value=this.$container.val();this.$container.focus();if(this.container.setSelectionRange){this.container.setSelectionRange(value.length,value.length)}}},{key:"clear",value:function clear(){if(this.container.value.length){this.$container.val("").trigger("input")}}},{key:"updateHeight",value:function updateHeight(){var event=document.createEvent("Event");event.initEvent("autosize:update",true,false);this.container.dispatchEvent(event)}},{key:"setValue",value:function setValue(value,option){this.activeElement=document.activeElement;option=option?option:{};try{!this.isMobile()&&this.$container.focus();this.checkBrowser();if(document.activeElement!==this.container){throw new Error("Unable to focus on container")}document.execCommand("selectAll");var commandSuccess=document.execCommand("insertHTML",false,htmlspecialchars(value));if(!commandSuccess){throw new Error("execCommand Error")}}catch(e){this.$container.val(value);this.$container.trigger("input",option)}this.updateHeight();$(this.activeElement).focus()}},{key:"getValue",value:function getValue(){return this.$container.val()}},{key:"insertValue",value:function insertValue(value){this.activeElement=document.activeElement;$(this.selector).focus();try{var commandSuccess=document.execCommand("insertHTML",false,htmlspecialchars(value));if(!commandSuccess){throw new Error("execCommand Error")}}catch(e){insert_in_textarea(this.selector,value);this.$container.trigger("input")}this.updateHeight();$(this.activeElement).focus()}},{key:"isMobile",value:function isMobile(){return navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|Windows Phone/i)}},{key:"checkBrowser",value:function checkBrowser(){var browserName=crowdin.browser.detect().name;if(browserName==="Safari"||browserName==="Edge"||browserName==="Firefox"){throw new Error("Not working properly in "+browserName)}}},{key:"transformSelection",value:function transformSelection(method){var selectionStart=this.container.selectionStart;var selectionEnd=this.container.selectionEnd;var oldString=this.container.value.slice(0);var textPieceToTransform=null;if(oldString&&selectionStart!==selectionEnd){if(method==="uppercase"){textPieceToTransform=oldString.slice(selectionStart,selectionEnd).toUpperCase()}else if(method==="lowercase"){textPieceToTransform=oldString.slice(selectionStart,selectionEnd).toLowerCase()}this.setValue(replaceAt(oldString,selectionStart,selectionEnd,textPieceToTransform))}}}]);return area}(CrowdinComponent);