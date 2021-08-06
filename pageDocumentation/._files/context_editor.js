"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdins_context_editor=function(_crowdin_plugin){_inherits(crowdins_context_editor,_crowdin_plugin);var _super=_createSuper(crowdins_context_editor);function crowdins_context_editor(){_classCallCheck(this,crowdins_context_editor);return _super.call(this,{buttonId:"#action_edit_context",hotkey:"edit_context_key"})}_createClass(crowdins_context_editor,[{key:"run",value:function run(){var $addStringMaxLength=$("#add-string-max-length");var $contextEditorContext=$("#context-editor-context");if(this.active){if(crowdin.editor.modeReviewProofread()){if(crowdin.phrases_list.get_selected_items().length!==1){return}}else{if(!crowdin.translation.translation_id){return}}var translation=crowdin.translation.get_translation();if($.isEmptyObject(translation)){return}$addStringMaxLength.attr("disabled",translation.translation_type==="2");$contextEditorContext.val(htmlspecialchars_decode(translation.context));$addStringMaxLength.val(translation.max_length);$("#context-editor").dialog("open");var evt=document.createEvent("Event");evt.initEvent("autosize:update",true,false);$contextEditorContext.get(0).dispatchEvent(evt);$contextEditorContext.focus().autosize()}}},{key:"setup",value:function setup(){var $contextEditorDialog=$("#context-editor");this.active=crowdin.user.can_edit_context;$contextEditorDialog.dialog({autoOpen:false,width:500,resizable:false,draggable:!IS_MOBILE,modal:true,open:function open(){if(crowdin.editor.jipt_mode){$("#context-editor").siblings(".ui-dialog-titlebar").css({"background-color":"#ffffff"}).find(".ui-dialog-titlebar-close").hide()}crowdin.editor.fit_dialog($(this));$("#context-editor form").submit((function(){return false}))},buttons:this._getButtons()});if(crowdin.user.hasManagerAccessToProject()&&!crowdin.editor.modeAssets()){var screenshotUrl=IS_ENTERPRISE?crowdin.editor.project.url+"/screenshots":crowdin.editor.project.url+"/settings#screenshots";$contextEditorDialog.parent().find(".ui-dialog-buttonpane").append('<a class="btn" target="_blank" href="'+screenshotUrl+'">'+_l("generic.screenshots")+"</a>")}$contextEditorDialog.on("dialogopen",(function(){hotkeys.setScope(crowdin.hotkeys.scopes.CONTEXT_DIALOG)}));$contextEditorDialog.on("dialogclose",(function(){hotkeys.setScope(crowdin.hotkeys.scopes.DOCUMENT)}));this.bindEvents()}},{key:"_getButtons",value:function _getButtons(){var $addStringMaxLength=$("#add-string-max-length");var _crowdin$hotkeys=crowdin.hotkeys,getLabel=_crowdin$hotkeys.getLabel,SAVE_CONTEXT_KEY=_crowdin$hotkeys.SAVE_CONTEXT_KEY;var saveContextHotkeyLabel=getLabel(SAVE_CONTEXT_KEY);return[{text:_l("generic.cancel"),click:function click(){$("#context-editor").dialog("close");$("#context-editor").removeClass("first_load")}},{text:_l("generic.save"),title:_l("editor.saveContextHotkey",{hotkey:saveContextHotkeyLabel}),id:"context-editor-save",click:function click(){var id=crowdin.translation.translation_id;var context=$("#context-editor-context").val();var oldFields={context:crowdin.translation.get_translation().context};var newFields={context:htmlspecialchars(context)};var params={project_id:crowdin.editor.project.id,translation_id:id,target_language_id:crowdin.editor.target_language.id,new_context:context};if(!crowdin.editor.modeAssets()){oldFields.max_length=crowdin.translation.get_translation().max_length;newFields.max_length=$addStringMaxLength.val();if(newFields.max_length>=0){params.new_max_length=newFields.max_length}else{params.new_max_length=0;$addStringMaxLength.val("0")}}crowdin.models.phrases.edit_translation(id,newFields);$("#context-editor").dialog("close");crowdin.ajax.postData("/translation/context",params,(function(data){if(data.success){var hashParts=crowdin.helpers.url.getHashParams().substr(1).split(":");if($("#context-editor").hasClass("context_issue")){crowdin.panel.discussion_resolve(hashParts[2])}window.location.hash=hashParts[0];$("#context-editor").removeClass("first_load");if(crowdin.editor.modeReviewProofread()){crowdin.phrases.refresh_single_phrase(id)}}else{crowdin.models.phrases.edit_translation(id,oldFields);crowdin.notify(data.msg,{type:"error"})}}));crowdin.translation.show_length_ratio&&crowdin.translation.show_length_ratio();crowdin.trackEvent("Editor","Context","Update context")}}]}},{key:"bindEvents",value:function bindEvents(){var hlTimeout=null;var $contextEditorSaveBtn=$("#context-editor-save");var onInputHotkey=function onInputHotkey(){$contextEditorSaveBtn.addClass("ui-state-active");clearTimeout(hlTimeout);hlTimeout=setTimeout((function(){$contextEditorSaveBtn.removeClass("ui-state-active");$contextEditorSaveBtn.click()}),150)};var hotkeysSaveBtnString=[crowdin.hotkeys.get(crowdin.hotkeys.SAVE_COMMENT_KEY)].join(",");hotkeys(hotkeysSaveBtnString,{scope:crowdin.hotkeys.scopes.CONTEXT_DIALOG},onInputHotkey)}}]);return crowdins_context_editor}(crowdin_plugin);