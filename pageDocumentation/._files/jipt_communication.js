"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var jipt_communication=function(_CrowdinComponent){_inherits(jipt_communication,_CrowdinComponent);var _super=_createSuper(jipt_communication);function jipt_communication(){var _this;_classCallCheck(this,jipt_communication);_this=_super.call(this);_this.validation_enabled=false;_this.jipt_validation={request_id:0,translation_id:0,callback:null};_this.init();_this.bind_events();return _this}_createClass(jipt_communication,[{key:"init",value:function init(){this.sendMessage({msg_type:"success"})}},{key:"bind_events",value:function bind_events(){var self=this;$(document).bind("update_translation",(function(e,data){self.sendUpdateTranslationMessage(data)}));$(document).bind("update_phrase",(function(e,data){self.sendUpdatePhraseMessage(data)}));$(document).bind("next_translation",(function(){self.sendNextTranslationMessage()}));$(document).bind("prev_translation",(function(){self.sendPrevTranslationMessage()}));$(document).on("mousedown",(function(e){self.sendFocusMessage()}));$(document).on("keydown",(function(e){if(e.keyCode===27&&!$("#jGrowl").find("button").length){self.sendCloseEditorMessage()}}));window.onmessage=function(event){self.handleMessage(event)}}},{key:"sendEditTranslationMessage",value:function sendEditTranslationMessage(){if(crowdin.translation){var plural_num=crowdin.editor.source_language.plural_ids.indexOf(crowdin.translation.plural_id);var message={msg_type:"edit_translation",translation_id:crowdin.translation.translation_id.toString(),value:crowdin.translation.get_suggest_text(),plural_id:crowdin.translation.plural_id,plural_num:plural_num};this.sendMessage(message)}}},{key:"sendUpdateTranslationMessage",value:function sendUpdateTranslationMessage(data){if(data.plural_id){data.plural_num=crowdin.editor.source_language.plural_ids.indexOf(data.plural_id)}var message=$.extend({msg_type:"update_translation"},data);this.sendMessage(message)}},{key:"sendUpdatePhraseMessage",value:function sendUpdatePhraseMessage(data){var message=$.extend({msg_type:"update_phrase"},data);this.sendMessage(message)}},{key:"sendNextTranslationMessage",value:function sendNextTranslationMessage(){this.sendMessage({msg_type:"next_translation"})}},{key:"sendPrevTranslationMessage",value:function sendPrevTranslationMessage(){this.sendMessage({msg_type:"prev_translation"})}},{key:"sendFocusMessage",value:function sendFocusMessage(){this.sendMessage({msg_type:"focus"})}},{key:"sendCloseEditorMessage",value:function sendCloseEditorMessage(){this.sendMessage({msg_type:"close_editor"})}},{key:"sendValidationRequest",value:function sendValidationRequest(data,callback){this.jipt_validation.request_id=this.jipt_validation.request_id+1;this.jipt_validation.translation_id=crowdin.translation.translation_id;this.jipt_validation.callback=callback;this.sendMessage({msg_type:"before_commit",request_id:this.jipt_validation.request_id,data:data})}},{key:"handleBeforeCommitResult",value:function handleBeforeCommitResult(request_id,result){if(request_id!==this.jipt_validation.request_id){console.error("JIPT validation error (1)");return}if(this.jipt_validation.translation_id!==crowdin.translation.translation_id){console.error("JIPT validation error (2)");return}this.jipt_validation.callback(result)}},{key:"handleMessage",value:function handleMessage(event){event=event||window.event;if(event.origin===crowdin.editor.jipt_origin){var message=_typeof(event.data)==="object"?event.data:JSON.parse(event.data);switch(message.msg_type){case"set_draft_suggestion":crowdin.suggestions.unsaved_suggestions._stack_limit=500;crowdin.helpers.translation.update_unsaved_suggestions_storage(message.text,message.translation_id);if(crowdin.translation.translation_id==message.translation_id){crowdin.translation.refresh()}break;case"save_suggestions":this.saveSuggestions(message.suggestions,message.force_saving,message.callback);break;case"show_string":crowdin.helpers.users.closeUserPopover();crowdin.translation.set_translation_id(message.id).refresh();crowdin.models.phrases.preload(message.preload_ids);break;case"refresh_suggestions":crowdin.suggestions.refresh();break;case"before_commit_result":this.handleBeforeCommitResult(message.request_id,message.result);break;case"setup_jipt_validation":this.validation_enabled=message.validation_enabled;break;case"track_event":crowdin.trackEvent(message.event);break;case"editor_settings":crowdin.plugins.crowdin_editor_settings.run();crowdin.plugins.crowdin_editor_hotkeys.close();break;case"hotkeys_settings":crowdin.plugins.crowdin_editor_hotkeys.run();crowdin.plugins.crowdin_editor_settings.close();break;default:return}}}},{key:"saveSuggestions",value:function saveSuggestions(suggestions,force_saving,callback){var self=this;var result=[];for(var i in suggestions){var text=suggestions[i]["text"];var translation_id=suggestions[i]["translation_id"];var plural_id=typeof suggestions[i]["plural_id"]!="undefined"?suggestions[i]["plural_id"]:-1;var request_data={project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,translation_id:translation_id,plural_id:plural_id,text:text,provider:crowdin.suggestions.default_provider,relevant:100,filter:crowdin.user.get_texts_sort_order()};if(force_saving){request_data.force_saving=1}crowdin.ajax.postData("/translation/suggest",request_data,(function(data){if(data.success){crowdin.phrases.update_translation_status(data.translation_id,data.top_suggestion,data.translation_status);$(document).trigger("update_translation",data);AppEvent.dispatchSuggestTranslation(data.suggestion)}result.push(data)}))}var save_suggestions_interval=setInterval((function(){if(suggestions.length===result.length){var message={msg_type:"save_suggestions",data:result};self.sendMessage(message);clearInterval(save_suggestions_interval)}}),200);crowdin.trackEvent("Editor","Mass Commit translations")}},{key:"sendMessage",value:function sendMessage(message){message=JSON.stringify(message);parent.postMessage(message,crowdin.editor.jipt_origin)}}]);return jipt_communication}(CrowdinComponent);
