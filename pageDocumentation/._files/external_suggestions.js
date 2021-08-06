"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_external_suggestions_model=function(_CrowdinComponent){_inherits(crowdin_external_suggestions_model,_CrowdinComponent);var _super=_createSuper(crowdin_external_suggestions_model);function crowdin_external_suggestions_model(){var _this;_classCallCheck(this,crowdin_external_suggestions_model);_this=_super.call(this);_this.storage=new storage;var self=_assertThisInitialized(_this);crowdin.models.phrases.on("load",(function(id){self.refresh(id)}));crowdin.editor.on("clearModels",(function(render){self.storage.clear();if(render){self.invoke("load",crowdin.translation.translation_id)}}));return _this}_createClass(crowdin_external_suggestions_model,[{key:"refresh",value:function refresh(id){var self=this;this.invoke("load.start",parseInt(id));var params={target_language_id:crowdin.editor.target_language.id,project_id:crowdin.editor.project.id,translation_id:id};if(crowdin.editor.project.use_external_suggestions){crowdin.ajax.postData("/translation/external_suggestions",params,(function(response){if(response){for(var i in response){self.extendSuggestions(id,i,response[i])}}}))}}},{key:"extendSuggestions",value:function extendSuggestions(id,pluralId,fields){var phrases=this.getSuggestions(id,pluralId);$.extend(phrases,fields);this.setSuggestions(id,pluralId,phrases)}},{key:"getSuggestions",value:function getSuggestions(id,plural_id){var data=this.storage.get(id);var phrases=data&&data[plural_id]?data[plural_id]:{};return $.extend([],phrases)}},{key:"setSuggestions",value:function setSuggestions(id,pluralId,phrases){var data=this.storage.get(id);if(!data){data={}}data[pluralId]=phrases;this.storage.set(id,data);this.invoke("load",parseInt(id))}},{key:"suggestions",value:function suggestions(id,target_plural_id){var plural_id=target_plural_id;if(target_plural_id!=-1){plural_id=crowdin.editor.target_language.plurals_mapping[target_plural_id]}return this.getSuggestions(id,plural_id)}}]);return crowdin_external_suggestions_model}(CrowdinComponent);