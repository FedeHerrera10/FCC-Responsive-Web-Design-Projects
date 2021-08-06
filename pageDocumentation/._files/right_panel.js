"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_right_panel=function(_CrowdinComponent){_inherits(crowdin_right_panel,_CrowdinComponent);var _super=_createSuper(crowdin_right_panel);function crowdin_right_panel(){var _this;_classCallCheck(this,crowdin_right_panel);_this=_super.call(this);_this.panel_id="#right_panel";_this.hotkey_label="toggle_right_panel_key";_this.hotkey="";_this.render_discussions_to="#discussions_messages";_this.unsaved_discussions=new storage({key:"unsaved_discussions"});_this.edit_discussion_tpl='<div class="edit_discussion_block">'+'<textarea class="edit_discussion input-block-level"></textarea>'+'<div class="btn-toolbar text-right no-margin-bottom">'+'<button disabled class="btn btn-small btn-primary save_comment">'+_l("generic.save")+"</button>"+'<button class="btn btn-small restore_comment">'+_l("generic.cancel")+"</button>"+"</div>"+"</div>";var self=_assertThisInitialized(_this);crowdin.models.phrases.on("load",(function(id){if(id===crowdin.translation.translation_id){self.show_discussions();self.restore_unsaved_discussion()}}));_this.update_comments_filter_lang();_this.setup_panel();_this.check_hash_action();return _this}_createClass(crowdin_right_panel,[{key:"get_discussions",value:function get_discussions(translation_id){if(!translation_id){translation_id=crowdin.translation.translation_id}var result={};var discussions=crowdin.models.phrases.discussions(translation_id);for(var id in discussions){if(!discussions[id].deleted){result[id]=discussions[id]}}return result}},{key:"get_discussion",value:function get_discussion(message_id){return crowdin.models.phrases.discussions(crowdin.translation.translation_id)[message_id]||{}}},{key:"check_hash_action",value:function check_hash_action(){var hash_parts=crowdin.helpers.url.getHashParams().substr(1).split(":");if(hash_parts.length>2){switch(hash_parts[1]){case"dd":this.auto_discussion_remove(hash_parts[2]);break;case"dr":this.auto_discussion_resolve(hash_parts[2]);break;case"drl":this.auto_discussion_reply(hash_parts[2],hash_parts[3]);break;case"ac":this.auto_add_context(hash_parts[2]);break}}}},{key:"update_comments_filter_lang",value:function update_comments_filter_lang(){if(crowdin.editor.target_language){$("#target-language a").text(crowdin.editor.target_language.name)}}},{key:"setup_panel",value:function setup_panel(){$(".nav-tabs a",this.panel_id).first().tab("show")}},{key:"force_fit",value:function force_fit(){var control_height=$("#discussions_control").is(":visible")?$("#discussions_control").height():53;$("#discussions_messages").css("bottom",control_height)}},{key:"check_comment_language",value:function check_comment_language(message){var self=this;crowdin.ajax.postData("/translation_discussions/check_comment_language",{project_id:crowdin.editor.project.id,message:message,source_language_generic_code:crowdin.editor.source_language.generic_code},(function(response){if(response.success){var action=response.languages_equal||!$("#discussions_control textarea").val()?"addClass":"removeClass";$("#discussion_language_identify_notification")[action]("hidden")}self.force_fit()}),null,false,true)}},{key:"activate_discussion_control",value:function activate_discussion_control(){var self=this;var block=$("#discussions_control");block.addClass("active");self.force_fit()}},{key:"deactivate_discussion_control",value:function deactivate_discussion_control(clear_text){var self=this;var block=$("#discussions_control");var $textarea=$("textarea",block);var $checkbox=$("#discussion_create_issue");if(($textarea.val().length||$checkbox.prop("checked"))&&!clear_text){return}if(clear_text){self.clear_discussion_control()}else if(!$textarea.val().length){$textarea.removeData("notification-id")}block.removeClass("active");self.force_fit()}},{key:"clear_discussion_control",value:function clear_discussion_control(){$("#discussion_language_identify_notification").addClass("hidden");$("textarea","#discussions_control").val("").removeData("notification-id");$("#discussion_issue_type").parent().hide();$("#discussion_issue_type").find("option").get(0).selected=true;$("#discussion_create_issue").prop("checked",false);this.force_fit()}},{key:"select_tab",value:function select_tab(tab_id){$('a[href="'+tab_id+'"]',this.panel_id).tab("show")}},{key:"toggle_panel",value:function toggle_panel(){crowdin.editor.layout.toggle("right")}},{key:"show",value:function show(){!crowdin.editor.layout.isOpened("right")&&this.toggle_panel()}},{key:"hide",value:function hide(){crowdin.editor.layout.isOpened("right")&&this.toggle_panel()}},{key:"mask",value:function mask(){$(this.panel_id).mask()}},{key:"unmask",value:function unmask(){$(this.panel_id).unmask()}},{key:"discussion_post",value:function discussion_post(callback){var message="",$texarea=$("#discussions_control textarea"),translation_id=crowdin.translation.translation_id,notification_id=$texarea.data("notification-id");message=$.trim($texarea.val());if(!message||!crowdin.models.phrases.storage.get(translation_id)){$texarea.focus();return false}var create_issue=$("#discussion_create_issue").prop("checked")?1:0;var issue_type=$("#discussion_issue_type").val();this.clear_discussion_control();crowdin.models.phrases.edit_discussion(translation_id,-1,this._get_dummy_message(message,!!create_issue));$(this.render_discussions_to).stop().scrollTo("#discussion-1",200);crowdin.ajax.postData("/translation_discussions/post",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,translation_id:translation_id,target_language_id:crowdin.editor.target_language.id,create_issue:create_issue,issue_type:issue_type,message:message,notification_id:notification_id},(function(response){crowdin.models.phrases.edit_discussion(translation_id,-1,null);if(response.message_id&&response.message){crowdin.models.phrases.edit_discussion(translation_id,response.message_id,response.message);crowdin.helpers.translation.remove_unsaved_discussions_storage(crowdin.translation.translation_id);$("#discussion_language_identify_notification").addClass("hidden")}if(!response.success&&response.msg){crowdin.notify(response.msg,{type:"error"})}if(response.send_email_error){crowdin.notify(_l("editor.notificationEmailSendingError"),{type:"error"})}if(callback){callback()}}),null,false,true);crowdin.trackEvent("Editor","Comments","Add comment")}},{key:"refresh",value:function refresh(){var discussions=crowdin.models.phrases.discussions(crowdin.translation.translation_id);var messages=[];for(var i in discussions){if(!discussions[i].id){discussions[i].id=i}messages.push(discussions[i])}crowdin.editor.view.setState({messages:messages,updatePhrases:false,suggestionsLoaded:true,tmMtSuggestionsLoaded:true})}},{key:"show_discussion_edit_control",value:function show_discussion_edit_control(message_id){var self=this;var comment=$("#discussion"+message_id);var discussion=this.get_discussion(message_id);var raw_text=htmlEntitiesDecode(strip_tags(discussion.text));comment.find(".message_footer, .message_body").hide();var textarea=comment.find(".message_content").append(self.edit_discussion_tpl).find("textarea").val(raw_text).focus().autosize();textarea.on("input propertychange",(function(){if(!$(this).val().trim()||$(this).val()===raw_text){comment.find(".save_comment").attr("disabled","disabled")}else{comment.find(".save_comment").removeAttr("disabled")}}));comment.find(".restore_comment").click((function(){self.hide_discussion_edit_control(message_id);return false}));comment.find(".save_comment").click((function(){self.discussion_edit(message_id,textarea.val())}));hotkeys(crowdin.hotkeys.get(crowdin.hotkeys.SAVE_COMMENT_KEY),{element:textarea,scope:crowdin.hotkeys.scopes.DOCUMENT},(function(event){if(document.activeElement===textarea[0]){event.preventDefault();self.discussion_edit(message_id,textarea.val())}}));comment.on("keydown",(function(e){if(e.keyCode===27){self.hide_discussion_edit_control(message_id)}}))}},{key:"hide_discussion_edit_control",value:function hide_discussion_edit_control(message_id){var comment=$("#discussion"+message_id);comment.find(".edit_discussion_block").remove();comment.find(".message_footer, .message_body").show()}},{key:"discussion_edit",value:function discussion_edit(message_id,message){var translation_id=crowdin.translation.translation_id;if(!message.trim()){return false}var old=crowdin.models.phrases.edit_discussion(translation_id,message_id,{text:nl2br(htmlspecialchars(message))});this.hide_discussion_edit_control(message_id);crowdin.ajax.postData("/translation_discussions/edit",{project_id:crowdin.editor.project.id,message_id:message_id,workflow_step_id:crowdin.editor.workflow_step.id,message:message},(function(response){crowdin.trackEvent("Editor","Comments","Edit comment");if(!response.success){crowdin.models.phrases.edit_discussion(translation_id,message_id,{text:old.text});var message=response.note||_l("error.internalError");crowdin.notify(message,{type:"error"})}}),null,false,true)}},{key:"auto_discussion_remove",value:function auto_discussion_remove(message_id){var self=this;setTimeout((function(){self.discussion_remove(message_id);var discussion=self.get_discussion(message_id);crowdin.notify(discussion.issue?_l("editor.issueDeletedSuccessfully"):_l("editor.commentHasBeenDeleted"));var hash_parts=crowdin.helpers.url.getHashParams().substr(1).split(":");window.location.hash=hash_parts[0]}),1500)}},{key:"discussion_remove",value:function discussion_remove(message_id){var translation_id=crowdin.translation.translation_id;crowdin.models.phrases.edit_discussion(translation_id,message_id,{deleted:true});crowdin.ajax.getData("/translation_discussions/remove",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,message_id:message_id},(function(response){crowdin.trackEvent("Editor","Comments","Delete comment");if(response.success){crowdin.models.phrases.edit_discussion(translation_id,message_id,response.message_id?{activity_id:response.activity_id}:null)}else{crowdin.models.phrases.edit_discussion(translation_id,message_id,{deleted:false});if(response.msg){crowdin.notify(response.msg,{type:"error"})}}}),null,false,true)}},{key:"discussion_restore",value:function discussion_restore(message_id,activity_id){var translation_id=crowdin.translation.translation_id;crowdin.models.phrases.edit_discussion(translation_id,message_id,{deleted:false});crowdin.ajax.getData("/translation_discussions/restore",{project_id:crowdin.editor.project.id,message_id:message_id,activity_id:activity_id},(function(response){crowdin.trackEvent("Editor","Comments","Restore comment");if(!response.success){crowdin.models.phrases.edit_discussion(translation_id,message_id,{deleted:true});var message=response.note||_l("error.internalError");crowdin.notify(message,{type:"error"})}}),null,false,true)}},{key:"discussion_reply",value:function discussion_reply(user,notification_id){var text="@"+user+" ";var value=$("#discussions_control textarea").val();if(value.indexOf(text)===-1){insert_in_textarea("#discussions_control textarea",text)}if(typeof notification_id!=="undefined"&&notification_id){$("#discussions_control textarea").data("notification-id",notification_id)}}},{key:"abuse_discussion",value:function abuse_discussion(message_id){confirm_action(_l("editor.reportCommentAsAbuseQ"),[{title:_l("editor.reportAbuse")}],(function(confirmed){if(confirmed){var translation_id=crowdin.translation.translation_id;crowdin.models.phrases.edit_discussion(translation_id,message_id,{abuse:true});crowdin.ajax.getData("/translation_discussions/report_abuse",{project_id:crowdin.editor.project.id,message_id:message_id,target_language_id:crowdin.editor.target_language.id},(function(response){crowdin.trackEvent("Editor","Comments","Report Abuse");if(!response.success){crowdin.models.phrases.edit_discussion(translation_id,message_id,{abuse:false});var message=response.note||_l("error.internalError");crowdin.notify(message,{type:"error"})}}))}}))}},{key:"auto_discussion_reply",value:function auto_discussion_reply(message_id,user){var self=this;setTimeout((function(){var scroll_to_elem=$("#discussion"+message_id);self.discussion_reply(user);scroll_to_elem.length&&$("#discussions_messages").animate({scrollTop:scroll_to_elem.offset().top},"slow");var hash_parts=crowdin.helpers.url.getHashParams().substr(1).split(":");window.location.hash=hash_parts[0]}),1e3)}},{key:"auto_discussion_resolve",value:function auto_discussion_resolve(message_id){var self=this;setTimeout((function(){self.discussion_resolve(message_id);var hash_parts=crowdin.helpers.url.getHashParams().substr(1).split(":");window.location.hash=hash_parts[0]}),1e3)}},{key:"discussion_resolve",value:function discussion_resolve(message_id){var translation_id=crowdin.translation.translation_id;var old=crowdin.models.phrases.edit_discussion(translation_id,message_id,{issue_resolved:true});crowdin.ajax.getData("/translation_discussions/resolve",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,issue_id:message_id},(function(response){if(response.success){response.send_email_error&&crowdin.notify(response.send_email_error,{type:"error"})}else{crowdin.models.phrases.edit_discussion(translation_id,message_id,{issue_resolved:old.issue_resolved});response.note&&crowdin.notify(response.note,{type:"error"})}crowdin.trackEvent("Editor","Comments","Resolve issue")}),null,false,true)}},{key:"show_discussions",value:function show_discussions(){this.deactivate_discussion_control(true);$(this.render_discussions_to).stop().scrollTo(0,200);this.refresh()}},{key:"auto_add_context",value:function auto_add_context(issue_id){var self=this;setTimeout((function(){self.discussion_get_context(issue_id)}),1e3)}},{key:"discussion_get_context",value:function discussion_get_context(issue_id){var self=this;crowdin.ajax.getData("/translation_discussions/get_context",{project_id:crowdin.editor.project.id,id:issue_id},(function(data){if(data.success){if(data.resolved){var hash_parts=crowdin.helpers.url.getHashParams().substr(1).split(":");window.location.hash=hash_parts[0];crowdin.notify(_l("editor.issueAlreadyResolved"),{type:"success"})}else{self.show_context_dialog(data.context)}}else{crowdin.notify(_l("editor.issueDeletedSuccessfully"),{type:"success"})}}),null,false,true)}},{key:"show_context_dialog",value:function show_context_dialog(context){$("#context-editor-context").text(context);$("#context-editor").addClass("context_issue first_load");$("#context-editor").dialog("open");$("#context-editor-context").focus()}},{key:"update_discussions_icon",value:function update_discussions_icon(translation_id){var messages=this.get_discussions(translation_id);var has_unresolved_issues=false;var has_messages=false;for(var i in messages){has_messages=true;if(messages[i].issue&&!messages[i].issue_resolved){has_unresolved_issues=true;break}}if(crowdin.phrases){if(has_messages){crowdin.phrases.mark_as_discussed(translation_id,has_unresolved_issues)}else{crowdin.phrases.mark_as_not_discussed(translation_id)}}}},{key:"_get_dummy_message",value:function _get_dummy_message(text,issue){var message={};message.created_iso=moment().toISOString();message.issue=issue;message.issue_resolved=false;message.lang_title=crowdin.editor.target_language.name;message.link_flag=crowdin.editor.target_language.flag;message.text=nl2br(htmlspecialchars(text));message.lang_id=crowdin.editor.target_language.id;message.user={id:crowdin.user.id,login:crowdin.user.login,name:htmlspecialchars(crowdin.user.name),avatar_url:crowdin.user.avatar_url};return message}},{key:"show_comment_options",value:function show_comment_options(id){if(!id){return}var m=this.get_discussion(id);var own=+m.user.id===+crowdin.user.id;var html="";var getItem=function getItem(text,action){return""+"<li>"+'<a href="javascript:void(0)" tabindex="-1" class="mobile-comment-option" data-action="'+action+'">'+text+"</a>"+"</li>"};var abuse_btn=m.abuse?getItem('<span class="muted">'+_l("editor.reportAbuse")+"</span>",""):getItem(_l("editor.reportAbuse"),"abuse");own&&(html+=getItem(_l("generic.edit"),"edit"));!own&&(html+=getItem(_l("generic.reply"),"reply"));m.issue&&!m.issue_resolved&&(crowdin.user.is_leader||own)&&(html+=getItem(_l("generic.resolve"),"resolve"));(own||crowdin.user.hasManagerAccessToProject())&&(html+=getItem('<span class="text-danger-red">'+_l("generic.delete")+"</span>","delete"));!crowdin.user.is_manager&&!own&&(html+=abuse_btn);$("#comment_options").data({id:id,user:m.user.login}).html(html);crowdin.editor.layout.showModalMenu("#comment_options")}},{key:"get_discussion_object",value:function get_discussion_object(){return{text:$("#discussions_control textarea").val(),is_issue:$("#discussion_create_issue").prop("checked"),issue_type:$("#discussion_issue_type").val()}}},{key:"restore_unsaved_discussion",value:function restore_unsaved_discussion(){if(!crowdin.translation.translation_id){return}var key=crowdin.helpers.translation.get_storage_discussions_key(),discussion=this.unsaved_discussions.get(key)!==undefined?JSON.parse(this.unsaved_discussions.get(key)):{};if(!discussion.text&&!discussion.is_issue){return}$("#discussions_control textarea").val(discussion.text);if(discussion.is_issue){$("#discussion_create_issue").prop("checked",true);$("#discussion_issue_type").val(discussion.issue_type).parent().show()}crowdin.panel.activate_discussion_control()}}]);return crowdin_right_panel}(CrowdinComponent);
