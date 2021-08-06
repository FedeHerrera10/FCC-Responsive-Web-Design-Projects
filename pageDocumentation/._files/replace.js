"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_replace_in_translations=function(_crowdin_plugin){_inherits(crowdin_replace_in_translations,_crowdin_plugin);var _super=_createSuper(crowdin_replace_in_translations);function crowdin_replace_in_translations(){_classCallCheck(this,crowdin_replace_in_translations);return _super.call(this,{hotkey:"replace_key"})}_createClass(crowdin_replace_in_translations,[{key:"run",value:function run(){if(!this.active){return}var self=this;var $dialog=$("div#replace-in-suggestions");$dialog.dialog({title:crowdin.editor.modeReview()?_l("editor.replaceInCorrections"):_l("editor.replaceInSuggestions"),autoOpen:false,dialogClass:"",width:650,minWidth:500,minHeight:250,maxHeight:800,resizable:IS_MOBILE||crowdin.editor.jipt_mode?false:true,draggable:!IS_MOBILE,zIndex:1e5,modal:true,buttons:self._getButtons(),open:function open(e,ui){if(crowdin.editor.jipt_mode){$("div#replace-in-suggestions").siblings(".ui-dialog-titlebar").css({"background-color":"#ffffff"}).find(".ui-dialog-titlebar-close").hide()}crowdin.editor.fit_dialog($dialog)},beforeClose:function beforeClose(){$("#jGrowl").find(".undo-alert").detach()}});if($dialog){this.previewMode=false;$('input[name="ris-scope"][value="file"]',$dialog).prop("disabled",crowdin.editor.isAllFilesSelected()).parent()[crowdin.editor.isAllFilesSelected()?"addClass":"removeClass"]("disabled");var replaceScope="file";if(crowdin.editor.isAllFilesSelected()||this.lastUsedScope==="project"){replaceScope="project"}$("#replace-in-suggestions").closest(".control-group, .form-group").removeClass("error has-error");$("#ris-search-results").hide();$("#ris-find, #ris-replace").val("");$('input[name="ris-scope"]',$dialog).filter('[value="'+replaceScope+'"]').prop("checked",true);$dialog.parent().find(".replace-in-suggestions-action span").text(_l("generic.replace"));$("#replace-in-suggestions").find(".help-block")[crowdin.user.is_leader?"addClass":"removeClass"]("hidden");$dialog.dialog("open");$dialog.dialog("option","position","center");if(!is_mobile_device.any()){setTimeout((function(){$("#ris-find").focus()}))}}}},{key:"bindEvents",value:function bindEvents(){var self=this;var $dialog=$("#replace-in-suggestions");var hl_timeout=null;$("form",$dialog).submit((function(){return false}));$dialog.on("click",".result:not(.muted)",(function(e){if($(e.target).is("input, a")){return}var checkbox=$(this).children("input");checkbox.prop("checked",!checkbox.is(":checked"));self.updateSelectAll()}));$dialog.on("click",".ris-toggle-source",(function(){$(this).closest(".result").find(".ris-suggestion-source").toggleClass("hidden");return false}));$dialog.on("click",".ris-select",(function(){self.updateSelectAll()}));$("#ris-find, #ris-scope-file, #ris-scope-project").on("input propertychange change",(function(e){var actual_preview=self.isActualPreview();if($(e.target).attr("name")==="ris-scope"){self.lastUsedScope=this.value}if(self.previewMode){$dialog.parent().find(".replace-in-suggestions-action").prop("disabled",!actual_preview)[!actual_preview?"addClass":"removeClass"]("ui-state-disabled")}}));$("#ris-find, #ris-replace").keydown((function(e){var btn_replace=this.id==="ris-replace";var classname=btn_replace?".replace-in-suggestions-action":".preview-suggestions-action";var action=btn_replace?self.replaceAction:self.preparePreview;if(e.which===13){var btn=$dialog.parent().find(classname).addClass("ui-state-active");action(self);clearTimeout(hl_timeout);hl_timeout=setTimeout((function(){btn.removeClass("ui-state-active")}),150)}}));$("#ris-select-all").click((function(){self.updateCheckboxes()}));$(document).on("click","#replace-undo",(function(){self.undoReplace($(this).data("times"));$(this).closest(".undo-alert").detach();return false}));$dialog.scroll((function(){var scrolled_to_bottom=this.scrollHeight-this.clientHeight;$(this).parent()[this.scrollTop===scrolled_to_bottom?"removeClass":"addClass"]("has-scroll")}))}},{key:"setup",value:function setup(){this.search="";this.scope=null;this.previewMode=false;this.lastUsedScope=null;this.active=!!$("#replace-in-suggestions").length;this.bindEvents()}},{key:"performReplace",value:function performReplace(){if(this.previewMode){var replaceItems=$("#ris-search-results-suggestions .result input");var items=[];for(var i=0;i<replaceItems.length;i++){if(replaceItems[i].checked){items.push(parseInt(replaceItems[i].value))}}if(items.length===0){crowdin.notify(_l("editor.nothingToDo"));return}this.requestReplace(1,items)}else{this.requestReplace(0,[])}}},{key:"requestReplace",value:function requestReplace(previewMode,items){var self=this;var searchText=$("#ris-find").val(),replaceText=$("#ris-replace").val();var replace=function replace(confirmed){if(confirmed){var $dialog=$("#replace-in-suggestions").parent();$dialog.mask("");crowdin.ajax.postData("/suggestions/replace",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,items:items.join(":"),preview:previewMode,text:searchText,replace:replaceText,scope:$("input[name='ris-scope']:checked","#replace-in-suggestions").val(),file_id:crowdin.editor.file.id,task:crowdin.editor.getTaskHash()},(function(data){var message,notifyOptions;$dialog.unmask();if(data.success){$("#ris-find").val(replaceText);$("#ris-replace").val("");self.preparePreview(self);if(!is_mobile_device.any()){$("#ris-find").focus()}notifyOptions={type:"success"};if(data.replaced){message=_l("generic.nMatchesReplacedSuccessfully",{count:data.replaced});if(data.timestamps){message+=". "+sprintf('<a href="#" id="replace-undo" data-times="%s">%s</a>',data.timestamps,_l("activity.undo"));notifyOptions.sticky=true;notifyOptions.beforeOpen=function(e){$("#jGrowl").find(".undo-alert").detach();e.addClass("undo-alert")}}if(data.has_blocking_errors){message+="<br>"+_l("editor.someMatchesNotReplaced")}crowdin.translation.refresh()}else{if(data.has_blocking_errors){message=_l("editor.nothingWasReplaced")}else{message=_l("editor.noMatchesInSuggestions")}}}else{notifyOptions={type:"error"};message=data.msg}crowdin.notify(message,notifyOptions)}),_l("generic.loadingD"));crowdin.trackEvent("Editor","Replace","Replace")}else{$("#ris-replace").focus()}};if(replaceText.length===0){confirm_action(_l("editProject.replaceTextWithEmptyTextQ",{text:searchText}),[{title:_l("generic.replace"),class_name:""}],replace);return}replace(true)}},{key:"undoReplace",value:function undoReplace(timestamps){var self=this;crowdin.ajax.getData("/suggestions/replace_undo",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,timestamps:timestamps},(function(data){if(data.success){crowdin.translation.refresh();return}else if(data.msg){crowdin.notify(data.msg,{type:"error"})}}),_l("generic.cancelingD"));crowdin.trackEvent("Editor","Replace","Undo Replace")}},{key:"isActualPreview",value:function isActualPreview(){var input_find=$("#ris-find").val();var input_scope=$("input[name='ris-scope']:checked","#replace-in-suggestions").val();return input_find===this.search&&input_scope===this.scope}},{key:"_getButtons",value:function _getButtons(){var self=this;return[{text:_l("generic.close"),click:function click(){$("#replace-in-suggestions").dialog("close")}},{text:_l("editor.preview"),class:"preview-suggestions-action",click:function click(){self.preparePreview(self)}},{text:_l("generic.replace"),class:"replace-in-suggestions-action",click:function click(){self.replaceAction(self)}}]}},{key:"replaceAction",value:function replaceAction(self){var $find_field=$("#ris-find"),searchText=$find_field.val(),dialog_ui=$("#replace-in-suggestions").parents("div");$find_field.closest(".control-group, .form-group").removeClass("error has-error");$find_field.focus();if(searchText.length&&(!self.previewMode||self.isActualPreview())){self.performReplace(dialog_ui)}}},{key:"preparePreview",value:function preparePreview(self){var $find_field=$("#ris-find"),searchText=$find_field.val();$find_field.closest(".control-group, .form-group").removeClass("error has-error");$find_field.focus();if(!searchText.length){$find_field.closest(".control-group, .form-group").addClass("error has-error");return}var $dialog=$("#replace-in-suggestions").parent();var scope=$("input[name='ris-scope']:checked",$dialog).val();$dialog.mask("");self.search=searchText;self.scope=scope;crowdin.ajax.getData("/suggestions/replace_search",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,text:searchText,scope:scope,file_id:crowdin.editor.file.id,task:crowdin.editor.getTaskHash()},(function(data){$dialog.unmask();if(data.success){$("#ris-search-results").show();if(data.matches_count>data.data.length){$(".alert-danger").remove();$("#ris-search-results").prepend('<div class="alert alert-danger" role="alert">'+_l("editor.replaceInSuggestionWarning",{count:data.data.length,total:data.matches_count})+"</div>")}$("#ris-search-results-suggestions").html(self._getPreviewHtml(data.data));if(data.data.length===0){$dialog.find(".replace-in-suggestions-action").prop("disabled",true).addClass("ui-state-disabled");$("#ris-select-all").prop("disabled",true)}else{$dialog.find(".replace-in-suggestions-action").prop("disabled",false).removeClass("ui-state-disabled").find("span").text(_l("editor.replaceSelected"));$("#ris-select-all").prop("disabled",false);self.previewMode=true}self.updateSelectAll()}else{crowdin.notify(data.msg,{type:"error"})}}));crowdin.trackEvent("Editor","Replace","Preview")}},{key:"updateSelectAll",value:function updateSelectAll(){var checkboxes=$("#ris-search-results-suggestions .ris-select:not(:disabled)");var elementsCount=checkboxes.length;var selectedCount=checkboxes.filter(":checked").length;$("#ris-select-all").prop("indeterminate",selectedCount<elementsCount&&selectedCount).prop("checked",selectedCount)}},{key:"updateCheckboxes",value:function updateCheckboxes(){var checkboxes=$("#ris-search-results-suggestions .ris-select:not(:disabled)");checkboxes.prop("checked",$("#ris-select-all").prop("checked"))}},{key:"_getPreviewHtml",value:function _getPreviewHtml(data){var html="";for(var i in data){var isApproved=parseInt(data[i].is_approved);html+='<li class="clearfix result '+(!crowdin.user.is_leader&&isApproved?"muted":"")+'">'+'<input type="checkbox" '+(!crowdin.user.is_leader&&isApproved?"disabled":"checked")+' class="ris-select" id="ris-replace-in-'+data[i].id+'" value="'+data[i].id+'" />'+'<div class="pull-right" style="margin: 0 0 0 15px">'+'<a href="#" class="ajax-link ris-toggle-source">'+_l("editor.sourceStringBtn")+"</a>"+"</div>"+'<div class="ris-suggestion-container">'+'<div title="'+data[i].title+'">'+data[i].text+"</div>"+'<div title="'+_l("editor.sourceString")+'" class="ris-suggestion-source hidden">'+data[i].source_text+"</div>"+"</div>"+"</li>"}if(data.length===0){html='<li class="center muted" style="padding: 30px;">'+_l("editor.noMathingTranslationFound")+"</li>"}return html}}]);return crowdin_replace_in_translations}(crowdin_plugin);