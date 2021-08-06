"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_suggestions=function(_CrowdinComponent){_inherits(crowdin_suggestions,_CrowdinComponent);var _super=_createSuper(crowdin_suggestions);function crowdin_suggestions(){var _this;_classCallCheck(this,crowdin_suggestions);_this=_super.call(this);_this.show_other_languages=false;_this.show_suggestions=true;_this.show_external_suggestions=true;_this.show_tm_mt=true;_this.suggestions_select_mode=false;_this.default_provider={type:"default",name:"default",id:null};_this.auto_suggestion={translation_id:0,provider:{type:"",name:"",id:null},text:""};_this.suggestions_list={};_this.unsaved_suggestions=new storage({key:"unsaved_suggestions"});_this.uniqeWords=[];_this.unsaved_suggestions.remove_empty();_this.bind_events();return _this}_createClass(crowdin_suggestions,[{key:"get_suggestions",value:function get_suggestions(translation_id,plural_id){var suggestions=crowdin.models.phrases.getAppropriateSuggestions(translation_id?translation_id:crowdin.translation.translation_id,typeof plural_id!=="undefined"?plural_id:crowdin.translation.plural_id);var result=[];for(var i in suggestions){if(!suggestions[i].deleted){result.push(suggestions[i])}}return result}},{key:"get_suggestion",value:function get_suggestion(suggestion_id,suggestions){suggestions=suggestions||crowdin.models.phrases.suggestions(crowdin.translation.translation_id,crowdin.translation.plural_id);for(var i in suggestions){if(suggestions[i].id==suggestion_id){return suggestions[i]}}}},{key:"edit_suggestion",value:function edit_suggestion(suggestion_id,fields){return crowdin.models.phrases.edit_suggestion(crowdin.translation.translation_id,crowdin.translation.plural_id,suggestion_id,fields)}},{key:"refresh",value:function refresh(){var suggestions=crowdin.models.phrases.getAppropriateSuggestions(crowdin.translation.translation_id,crowdin.translation.plural_id);var externalSuggestions=crowdin.models.external_suggestions.suggestions(crowdin.translation.translation_id,crowdin.translation.plural_id);crowdin.editor.view.setState({suggestionsLoaded:true,tmAndMtSuggestionsLoaded:true,updatePhrases:false,suggestions:suggestions,tms:this.getTmSuggestions(),mts:this.getMtSuggestions(),externalSuggestions:externalSuggestions});this.updateOtherLanguagesComponent();if(crowdin.editor.modeTranslate()&&crowdin.editor.target_language){this.use_top_suggestion()}}},{key:"updateOtherLanguagesComponent",value:function updateOtherLanguagesComponent(){var other_languages=crowdin.models.other_languages.phrases(crowdin.translation.translation_id,crowdin.translation.plural_id);other_languages.updatePhrases=false;crowdin.editor.view.setState(other_languages)}},{key:"use_top_suggestion",value:function use_top_suggestion(){var key=crowdin.helpers.translation.get_storage_suggestions_key();var current_text=crowdin.translation.getValue();var user_text=this.unsaved_suggestions.get(key);if(user_text!==undefined){var user_text_masked=crowdin.phrases.markup_replacer().mask(user_text);user_text_masked!==current_text&&crowdin.translation.setValue(user_text_masked);return}var suggestions=this.get_suggestions();var text=suggestions[0]?crowdin.phrases.markup_replacer().mask(suggestions[0].text):"";crowdin.translation.setValue(text)}},{key:"refreshAutocomplete",value:function refreshAutocomplete(){if(!crowdin.editor.modeTranslate()||!crowdin.user.settings.enable_autocomplete||IS_MOBILE){return}var sourceString=null;var stringWords=null;this.uniqeWords=[];var suggestions=this.collectSuggestions();for(var provider in suggestions){var stringTags=[];sourceString=suggestions[provider];if(typeof sourceString.text==="string"){var match=null;var originalText=sourceString.text;$.each(crowdin.highlight.placeholders,(function(index,placeholder){if(match=$("<div/>").html(crowdin.translation.get_translation().text).text().match(new RegExp(htmlspecialchars_decode(placeholder),"g"))){$.each(match,(function(i,text){stringTags.push(text.trim())}))}if(match=sourceString.text.match(new RegExp(placeholder,"g"))){$.each(match,(function(i,text){stringTags.push(text.trim())}))}}));if(match=sourceString.text.match(/<[\!a-zA-Z0-9/#$%&](.|\n)*?>(]]>|)|\\[a-z][0-9]*/g)){$.each(match,(function(i,text){stringTags.push(text.trim())}))}$.each(stringTags,(function(index,tag){sourceString.text=sourceString.text.replace(tag," ")}));this.addUniqueWords(stringTags,originalText,sourceString.relevance);stringWords=sourceString.text.split(/[(){}\[\] ]+/);$.each(stringWords,(function(index,word){stringWords[index]=word.replace(/^[,+~\-.'`":*?>]+|[,+~.'"`:*!?<]+$/g,"")}));this.addUniqueWords(stringWords,originalText,sourceString.relevance)}}this.loadAutocompleteSuggestions()}},{key:"loadAutocompleteSuggestions",value:function loadAutocompleteSuggestions(){var self=this;var options=this.getAutocompleteOptions();if(!options||!options.length){return}crowdin.ajax.postData("/translation/autocomplete",{project_id:crowdin.editor.project.id,target_language_code:crowdin.editor.target_language.code,options:options},(function(response){if(!response.success){crowdin.log.error("[Autocomplete] bad response from server.");return}var autocompleteSuggestions=response.data.autocomplete_suggestions;for(var key in autocompleteSuggestions){if(!!autocompleteSuggestions[key].targetString){self.addUniqueWords([autocompleteSuggestions[key].targetString],crowdin.translation.getSourceText(),autocompleteSuggestions[key].score)}}}),null,false,true)}},{key:"getAutocompleteOptions",value:function getAutocompleteOptions(){var topTmSuggestion=this.getTopTmSuggestion();if(!topTmSuggestion){return null}return topTmSuggestion.common_substrings.filter((function(commonSubstring){return commonSubstring.split(" ").length>1})).map((function(commonSubstring){return{targetReference:topTmSuggestion.translation,sourceString:commonSubstring}}))}},{key:"getTopTmSuggestion",value:function getTopTmSuggestion(){var topSuggestion=null,mtSuggestions=crowdin.models.mt.phrases(crowdin.translation.translation_id,crowdin.translation.plural_id);for(var provider in mtSuggestions){if(Object.keys(crowdin.models.mt.tmSuggestionsTemplate).indexOf(provider)===-1){continue}for(var key in mtSuggestions[provider]){if(!topSuggestion||topSuggestion.relevant<mtSuggestions[provider][key].relevant){topSuggestion=mtSuggestions[provider][key]}}}return topSuggestion}},{key:"collectSuggestions",value:function collectSuggestions(){var suggestions=[];var userSuggestions=this.get_suggestions();for(var i in userSuggestions){suggestions.push({text:this.prepareText(userSuggestions[i].text),relevance:100})}var mt=crowdin.models.mt.phrases(crowdin.translation.translation_id,crowdin.translation.plural_id);for(var provider in mt){var _suggestions=mt[provider];if($.isArray(_suggestions)){for(var j in _suggestions){suggestions.push({text:this.prepareText(_suggestions[j].translation),relevance:parseInt(_suggestions[j].relevant.toPrecision(2))})}}else if($.isPlainObject(_suggestions)){for(var j in _suggestions){suggestions.push({text:this.prepareText(_suggestions[j].translation),relevance:90})}}else{suggestions.push({text:this.prepareText(_suggestions),relevance:90})}}var source_string_special_characters=$("<div/>").html(crowdin.translation.get_translation().text).text().match(/\\u[0-9]*|[&#][#0-9a-zA-Z]*[; ]/g);if(source_string_special_characters){suggestions.push({text:source_string_special_characters.join(" "),relevance:10})}return suggestions}},{key:"addUniqueWords",value:function addUniqueWords(words,string,relevance){for(var wordKey in words){if(words[wordKey].length<2){continue}var unique=true;for(var wordsKey in this.uniqeWords){if(this.uniqeWords[wordsKey].word===words[wordKey]){unique=false;break}}if(unique&&words[wordKey].length>0){this.uniqeWords.push({index:string.indexOf(words[wordKey]),relevance:relevance,word:words[wordKey]})}}}},{key:"bind_events",value:function bind_events(){var self=this;$(document).mousedown((function(e){if($(e.target).closest(".user-popover").length===0&&$(e.target).closest(".user-info").length===0){crowdin.helpers.users.closeUserPopover()}}));$(document).on("click",".report_abuse_action",(function(e){self.report_abuse($(this).closest(".suggestion").data("id"));e.preventDefault()}));$(document).on("click",".discuss_approval_action",(function(e){crowdin.panel.show();crowdin.panel.select_tab("#discussions_tab");crowdin.panel.activate_discussion_control();crowdin.panel.discussion_reply($(e.target).data("user"));e.preventDefault()}));$(document).on("click",".active-suggestion-plus-button, .active-suggestion-minus-button",(function(){var mark="minus";if($(this).is(".active-suggestion-plus-button")){mark="plus"}self.vote_for_suggestion($(this).closest(".suggestion, .proofread-string-translation").attr("data-id"),mark);return false}));$(document).on("click",".approve-action",(function(){var suggestion_id=$(this).closest(".suggestion, .proofread-string-translation").attr("data-id");if($(this).hasClass("active")){self.disapprove_suggestion(suggestion_id)}else{self.approve_suggestion(suggestion_id)}return false}));$(document).on("click",".active_suggestion_delete_button",(function(){self.delete_suggestion($(this).closest(".suggestion").data("id"));return false}));$(document).on("click",".suggestion-restore",(function(){self._restore_suggestion($(this).data("id"),$(this).data("activity-id"));return false}));$(document).on("click",".use-and-save-action",(function(){var $item=$(this).closest(".suggestion");self.use_suggestion($item[0]);crowdin.editor.modeTranslate()?crowdin.translation.save_suggestion():crowdin.phrases.save_suggestion($item.find(".suggestion-text").text());return false}));self.suggestions_list=new select({container:"#suggestions-wrapper",selector:".suggestion:visible",open_handler:IS_MOBILE?"click":"mousedown",open_fn:function open_fn(item){self.activate_suggestion(item)},select_fn:function select_fn(){},singleselect:true});var is_tab=false;$(document).on("mousedown keydown",(function(e){is_tab=e.type==="keydown"}));$("#suggestions-wrapper").focus((function(){if(is_tab){if($(".suggestion.checked:visible",this).length===0){self.suggestions_list.select(":first")}}})).keydown((function(e){if(e.which===27){self.suggestions_list.disselect_all();crowdin.editor.modeTranslate()&&crowdin.translation.focus()}}));$("#all-languages-toggler").click((function(){self.show_other_languages=!self.show_other_languages;crowdin.models.other_languages.refresh(crowdin.translation.translation_id);$("#suggestions-wrapper").focus();return false}));$("#suggestions-toggler").click((function(){self.show_suggestions=!self.show_suggestions;crowdin.editor.view.setState({updatePhrases:false});$("#suggestions-wrapper").focus();return false}));$("#external-suggestions-toggler").click((function(){self.show_external_suggestions=!self.show_external_suggestions;crowdin.editor.view.setState({updatePhrases:false});$("#suggestions-wrapper").focus();return false}));$("#tm-mt-toggler").click((function(){self.show_tm_mt=!self.show_tm_mt;crowdin.editor.view.setState({updatePhrases:false});$("#suggestions-wrapper").focus();return false}));IS_MOBILE&&this.bind_suggestion_options()}},{key:"activate_suggestion",value:function activate_suggestion(item){if(!IS_MOBILE){crowdin.editor.modeTranslate()&&crowdin.translation.focus();this.use_suggestion(item)}else{this.show_suggestion_options(item)}}},{key:"use_suggestion",value:function use_suggestion(suggestion){var $suggestion=$(suggestion);var $node=$suggestion.find(".suggestion_tm_translation");var provider={type:$suggestion.data("provider"),name:$suggestion.data("provider-name"),id:$suggestion.data("provider-id")};crowdin.trackEvent("Editor","Use MT Suggestion",provider.name);crowdin.trackEvent("Editor","Use MT Suggestion ("+crowdin.editor.target_language.code+")",provider.name);if(!$node.length){$node=suggestion.find(".suggestion-text")}crowdin.translation.setValue($node.text());this.save_suggestion_provider(provider,$node.text());if(!is_mobile_device.any()&&crowdin.editor.modeReviewProofread()){crowdin.translation.focus()}}},{key:"undoRepairedTmSuggestion",value:function undoRepairedTmSuggestion(suggestionUid){var suggestion=crowdin.models.mt.getTmSuggestionByUid(suggestionUid,crowdin.translation.translation_id,crowdin.translation.plural_id);if(!suggestion){return}var rawTmSuggestion=$.extend({},suggestion,{translation:suggestion.raw_translation,source_html:suggestion.raw_source_html,raw_translation:null,raw_source_html:null});crowdin.models.mt.updateTmSuggestion(rawTmSuggestion,crowdin.translation.translation_id,crowdin.translation.plural_id)}},{key:"repairTmSuggestion",value:function repairTmSuggestion(suggestionUid){var suggestion=crowdin.models.mt.getTmSuggestionByUid(suggestionUid,crowdin.translation.translation_id,crowdin.translation.plural_id);if(!suggestion){return}var options={sourceString:crowdin.translation.get_appropriate_source_text("raw_text"),sourceReference:suggestion.source,targetReference:suggestion.translation};crowdin.ajax.getData("/translation/repair_tm_suggestion",{options:options,project_id:crowdin.editor.project.id,source_language_code:crowdin.editor.source_language.generic_code,target_language_code:crowdin.editor.target_language.generic_code},(function(data){if(!data.repaired_suggestion){$.jGrowl(_l("editor.repairingError"),{theme:"jGrowl-notice"});return}var repairedTmSuggestion=$.extend({},suggestion,{translation:data.repaired_suggestion.targetString,source_html:data.repaired_suggestion.html_diff,raw_translation:suggestion.translation,raw_source_html:suggestion.source_html});crowdin.models.mt.updateTmSuggestion(repairedTmSuggestion,crowdin.translation.translation_id,crowdin.translation.plural_id)}),_l("generic.workingD"))}},{key:"report_abuse",value:function report_abuse(suggestion_id){var action=this._report_abuse(suggestion_id);var suggestion=this.get_suggestion(suggestion_id);if(action==="report"&&suggestion&&suggestion.votes[crowdin.user.id]!=="-1"){this.vote_for_suggestion(suggestion_id,"minus")}}},{key:"_report_abuse",value:function _report_abuse(suggestion_id){var suggestion=this.get_suggestion(suggestion_id);var abuses=suggestion.abuses;var old_abuses=abuses.slice(0);var user_index=abuses.indexOf(crowdin.user.id);var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;if(user_index===-1){abuses.push(crowdin.user.id)}else{abuses.splice(user_index,1)}this.edit_suggestion(suggestion_id,{abuses:abuses});var action=user_index===-1?"report":"not_abuse";crowdin.ajax.getData("/suggestions/report_abuse",{project_id:crowdin.editor.project.id,target_language_id:crowdin.editor.target_language.id,suggestion_id:suggestion_id,user_action:action},(function(data){if(!data.success){crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{abuses:old_abuses})}}),_l("generic.workingD"));return action}},{key:"vote_for_suggestion",value:function vote_for_suggestion(suggestion_id,mark){var params=["vote",crowdin.editor.project.id,crowdin.editor.target_language.id,suggestion_id];if(crowdin.ajax.isLocked(params)){return}var suggestion=this.get_suggestion(suggestion_id);var redo_fn=function redo_fn(){};if(suggestion){var old_rating=Number(suggestion.rating);var old_mark=Number(suggestion.votes[crowdin.user.id]||0);var new_mark=mark==="plus"?1:-1;var votes={};var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;if(old_mark===new_mark){new_mark=0}votes=suggestion.votes;votes[crowdin.user.id]=new_mark.toString();this.edit_suggestion(suggestion_id,{votes:votes,rating:old_rating+new_mark-old_mark});redo_fn=function redo_fn(){votes[crowdin.user.id]=old_mark.toString();crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{votes:votes,rating:old_rating})}}crowdin.ajax.getData("/suggestions/vote",{project_id:crowdin.editor.project.id,target_language_id:crowdin.editor.target_language.id,suggestion_id:suggestion_id,mark:mark,_lockKey:params,filter:crowdin.user.get_texts_sort_order()},(function(data){if(data.success){if(crowdin.editor.modeReviewProofread()){var ws_key=crowdin.models.phrases._get_ws_event_name(data.translation_id);!crowdin.websocket.subscribed(ws_key)&&crowdin.phrases.refresh_single_phrase(data.translation_id)}else{crowdin.phrases.update_translation_status(data.translation_id,data.top_suggestion,data.translation_status);$(document).trigger("update_translation",data)}AppEvent.dispatchTranslationVote(suggestion_id,data.translation_id,data.plural_id)}else{redo_fn()}}),_l("generic.workingD"))}},{key:"delete_suggestion",value:function delete_suggestion(suggestion_id){var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;var ws_key=crowdin.models.phrases._get_ws_event_name(translation_id);this.edit_suggestion(suggestion_id,{deleted:true});crowdin.editor.modeTranslate()&&crowdin.translation.highlight_save_btn();crowdin.ajax.getData("/suggestions/delete",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,translation_id:crowdin.translation.translation_id,plural_id:crowdin.translation.plural_id,suggestion_id:suggestion_id,filter:crowdin.user.get_texts_sort_order()},(function(response){if(response.success){crowdin.editor.modeTranslate()&&crowdin.phrases.update_translation_status(translation_id,response.top_suggestion,response.translation_status);crowdin.editor.modeTranslate()&&crowdin.phrases.update_qa_issues_info(translation_id,response.qa_issues);$(document).trigger("update_translation",response);crowdin.editor.modeReviewProofread()&&!crowdin.websocket.subscribed(ws_key)&&crowdin.phrases.refresh_single_phrase(translation_id);crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,response.suggestion_id?{delete_activity_id:response.activity_id}:null);AppEvent.dispatchSuggestionDeleted(suggestion_id,response.translation_id)}else{crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{deleted:false});crowdin.editor.modeTranslate()&&crowdin.translation.highlight_save_btn()}}))}},{key:"_restore_suggestion",value:function _restore_suggestion(suggestion_id,activity_id){var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;var ws_key=crowdin.models.phrases._get_ws_event_name(translation_id);var key=crowdin.helpers.translation.get_storage_suggestions_key(translation_id,plural_id);if(this.unsaved_suggestions.get(key)===""){this.unsaved_suggestions.remove(key)}this.edit_suggestion(suggestion_id,{deleted:false});crowdin.editor.modeTranslate()&&crowdin.translation.highlight_save_btn();crowdin.ajax.getData("/suggestions/restore",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,suggestion_id:suggestion_id,activity_id:activity_id,filter:crowdin.user.get_texts_sort_order()},(function(response){if(response.success){crowdin.editor.modeTranslate()&&crowdin.phrases.update_translation_status(translation_id,response.top_suggestion,response.translation_status);crowdin.editor.modeTranslate()&&crowdin.phrases.update_qa_issues_info(translation_id,response.qa_issues);$(document).trigger("update_translation",response);crowdin.editor.modeReviewProofread()&&!crowdin.websocket.subscribed(ws_key)&&crowdin.phrases.refresh_single_phrase(translation_id);AppEvent.dispatchSuggestionRestored(suggestion_id,response.translation_id,response.plural_id)}else{crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{deleted:true});crowdin.editor.modeTranslate()&&crowdin.translation.highlight_save_btn()}}))}},{key:"approve_suggestion",value:function approve_suggestion(suggestion_id){var self=this;var suggestion=this.get_suggestion(suggestion_id);var callback=function callback(response){};if(!crowdin.editor.approvingAvailable()){return}if(suggestion){var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;var old=null;var old_validations={};var current_validations={};var old_step_status=crowdin.models.phrases.get_translation(translation_id).step_status;var step_validation={approved:true,approved_by:crowdin.user.id,approved_date_iso:moment().toISOString(),approver:{id:crowdin.user.id,login:crowdin.user.login,avatar_url:crowdin.user.avatar_url,name:crowdin.user.name}};var suggestions=crowdin.models.phrases.getAppropriateSuggestions(translation_id,plural_id);for(var i in suggestions){if(suggestions[i].id===suggestion_id){current_validations=$.extend({},suggestions[i].validations);suggestions[i].validations=this.update_approved_status(suggestions[i].validations,step_validation)}else{if(self.is_approved(suggestions[i])){old=suggestions[i];old_validations=$.extend({},old.validations);old.validations=this.update_approved_status(old.validations,{approved:false})}}}crowdin.models.phrases.suggestions(crowdin.translation.translation_id,crowdin.translation.plural_id,suggestions);if(crowdin.editor.workflow_step.id){crowdin.models.phrases.edit_translation(translation_id,{step_status:STEP_DONE})}callback=function callback(response){if(!response.success){crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{validations:current_validations});if(old){crowdin.models.phrases.edit_suggestion(translation_id,plural_id,old.id,{validations:old_validations})}if(crowdin.editor.workflow_step.id){crowdin.models.phrases.edit_translation(translation_id,{step_status:old_step_status})}}}}this._approve_suggestion(suggestion_id,"approve",callback)}},{key:"disapprove_suggestion",value:function disapprove_suggestion(suggestion_id){var self=this;var suggestion=this.get_suggestion(suggestion_id);var callback=function callback(response){};if(!crowdin.editor.approvingAvailable()){return}if(suggestion){var translation_id=crowdin.translation.translation_id;var plural_id=crowdin.translation.plural_id;var current_validations=$.extend({},suggestion.validations);var validations=this.update_approved_status(suggestion.validations,{approved:false});self.edit_suggestion(suggestion_id,{validations:validations});callback=function callback(response){if(!response.success){crowdin.models.phrases.edit_suggestion(translation_id,plural_id,suggestion_id,{validations:current_validations})}}}this._approve_suggestion(suggestion_id,"disapprove",callback)}},{key:"_approve_suggestion",value:function _approve_suggestion(suggestion_id,action,callback){var message=_l("editor.disapprovingSuggesstionD");if(action==="approve"){message=crowdin.editor.modeReview()?_l("editor.approvingCorrectionD"):_l("editor.approvingTranslationD")}var params=["approve",crowdin.editor.project.id,crowdin.editor.target_language.id,suggestion_id];if(crowdin.ajax.isLocked(params)){return}crowdin.ajax.getData("/suggestions/approve",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,suggestion_id:suggestion_id,suggestion_action:action,_lockKey:params,filter:crowdin.user.get_texts_sort_order()},(function(response){if(callback){callback(response)}if(response.success){var dispatchApproveEvents=function dispatchApproveEvents(){if(action==="approve"){return AppEvent.dispatchApproveTranslation(suggestion_id,response.translation_id,response.plural_id)}return AppEvent.dispatchDisapproveTranslation(suggestion_id,response.translation_id,response.plural_id)};if(crowdin.editor.modeReviewProofread()){var ws_key=crowdin.models.phrases._get_ws_event_name(response.translation_id);!crowdin.websocket.subscribed(ws_key)&&crowdin.phrases.refresh_single_phrase(response.translation_id);dispatchApproveEvents()}else{if(response.translation_status){crowdin.phrases.update_translation_status(response.translation_id,response.top_suggestion,response.translation_status);crowdin.phrases.update_qa_issues_info(response.translation_id,response.qa_issues);crowdin.models.phrases.edit_translation(response.translation_id,{step_status:response.translation_status.step_status});$(document).trigger("update_translation",response)}dispatchApproveEvents();if(response.translation_id===crowdin.translation.translation_id){crowdin.translation.next(true)}}}}),message)}},{key:"approve_multiple",value:function approve_multiple(translation_ids){this._approve_multiple(translation_ids,"approve")}},{key:"disapprove_multiple",value:function disapprove_multiple(translation_ids){this._approve_multiple(translation_ids,"disapprove")}},{key:"_approve_multiple",value:function _approve_multiple(translation_ids,action){if(translation_ids.length===0){return false}var params=["approve_multiple",crowdin.editor.project.id,crowdin.editor.target_language.id,translation_ids];if(!crowdin.editor.approvingAvailable()||crowdin.ajax.isLocked(params)){return}var url="/suggestions/"+action+"_multiple",parameters={project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,"translation_id[]":translation_ids};if(translation_ids[0]==="all"){$.extend(parameters,{file_id:crowdin.editor.file.id,filter:crowdin.user.get_texts_sort_order(),custom_filter:JSON.stringify(crowdin.user.get_custom_filter()),query:crowdin.phrases.query,search_option:crowdin.phrases.search_option,_lockKey:params})}crowdin.ajax.postData(url,parameters,(function(response){if(response.success){translation_ids.length===1&&translation_ids[0]!=="all"?crowdin.models.phrases.refresh(translation_ids[0]):crowdin.phrases.refresh()}}),_l("generic.workingD"),true)}},{key:"save_suggestion_provider",value:function save_suggestion_provider(provider,text){if(provider&&provider.id){this.auto_suggestion.translation_id=crowdin.translation.translation_id;this.auto_suggestion.provider=provider;this.auto_suggestion.text=text||crowdin.translation.getValue()}else{this.auto_suggestion.translation_id=0;this.auto_suggestion.provider=this.default_provider;this.auto_suggestion.text=""}}},{key:"is_deletable",value:function is_deletable(suggestion){return crowdin.models.phrases.is_suggestion_deletable(suggestion)}},{key:"is_approved",value:function is_approved(suggestion){return crowdin.models.phrases._is_suggestion_approved(suggestion)}},{key:"update_approved_status",value:function update_approved_status(validations,step_validations,step_id){return crowdin.models.phrases._update_suggestion_approved_status(validations,step_validations,step_id)}},{key:"notify",value:function notify(message,suggestion_id){var sticky=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;message+="\n"+"<div class='jGrowl-default-buttons btn-toolbar text-center'>"+"<button class='btn btn-small' id='approve-confirmation-approve' data-suggestion-id='"+suggestion_id+"'>"+_l("editor.approve")+"</button>"+"<button class='btn btn-small' id='approve-confirmation-cancel'>"+_l("generic.cancel")+"</button>"+"</div>";crowdin.notify(message,{sticky:sticky,closeTemplate:false,afterOpen:function afterOpen(e){$("#approve-confirmation-approve").focus()}})}},{key:"notify_create_issue",value:function notify_create_issue(message,suggestion_id){message+="\n"+"<div class='jGrowl-default-buttons btn-toolbar text-center'>"+"<button class='btn btn-small' id='approve-confirmation-create-issue' data-suggestion-id='"+suggestion_id+"'>"+_l("editor.notifyProofreader")+"</button>"+"<button class='btn btn-small' id='approve-confirmation-not-notify'>"+_l("editor.skip")+"</button>"+"</div>";crowdin.notify(message,{sticky:true,closeTemplate:false,afterOpen:function afterOpen(e){$("#approve-confirmation-create-issue").focus()}})}},{key:"bind_suggestion_options",value:function bind_suggestion_options(){var self=this;$(document).on("click","a.mobile-suggestion-option",(function(e){crowdin.editor.layout.hideModalMenu();var id=$(this).closest(".modal-menu").data("id");var user=$(this).closest(".modal-menu").data("user");switch($(this).data("action")){case"approve":self.approve_suggestion(id);break;case"disapprove":self.disapprove_suggestion(id);break;case"voteplus":self.vote_for_suggestion(id,"plus");break;case"voteminus":self.vote_for_suggestion(id,"minus");break;case"delete":self.delete_suggestion(id);break;case"discuss":crowdin.panel.show();crowdin.panel.select_tab("#discussions_tab");crowdin.panel.activate_discussion_control();crowdin.panel.discussion_reply(user);break;case"abuse":self.report_abuse(id);break}e.preventDefault()}))}},{key:"show_suggestion_options",value:function show_suggestion_options(item){var self=this;var id=$(item).data("id");var human=!!id;var html="";$(document).off(".use_suggestion");if(crowdin.editor.modeTranslate()){$(document).on("click.use_suggestion",".mobile-suggestion-option[data-action=use]",(function(){crowdin.translation.area.focus();self.use_suggestion(item)}));$(document).on("click.use_suggestion",".mobile-suggestion-option[data-action=usesave]",(function(){self.use_suggestion(item);crowdin.translation.save_suggestion()}))}else if(crowdin.editor.modeReviewProofread()){$(document).on("click.use_suggestion",".mobile-suggestion-option[data-action=use]",(function(){crowdin.editor.layout.panes.right.hasClass("sliding")&&crowdin.editor.layout.toggle("right");self.use_suggestion(item)}));$(document).on("click.use_suggestion",".mobile-suggestion-option[data-action=usesave]",(function(){self.use_suggestion(item);crowdin.phrases.save_suggestion($(item).find(".suggestion-text").text())}))}var getItem=function getItem(text,action,disabled){return""+'<li class="'+(disabled?"disabled":"")+'">'+'<a href="javascript:void(0)" tabindex="-1" class="mobile-suggestion-option" data-action="'+action+'">'+'<span class="'+(action==="delete"?" text-danger-red":"")+'">'+text+"</span>"+"</a>"+"</li>"};html+=getItem(_l("editor.use"),"use");if(human){var s=this.get_suggestion(id);if(!s){return}var own=+s.user.id===+crowdin.user.id;var stepId=crowdin.editor.workflow_step.id||crowdin.user.get_workflow_proofread_step_id();var validation=s.validations[stepId]||{approved:false};html+='<li class="divider"></li>';if(crowdin.user.is_leader){html+=getItem(validation.approved?_l("editor.disapprove"):_l("editor.approve"),validation.approved?"disapprove":"approve")}else if(!own){html+=getItem(_l("editor.voteUp"),"voteplus",s.votes[crowdin.user.id]==="1");html+=getItem(_l("editor.voteDown"),"voteminus",s.votes[crowdin.user.id]==="-1")}if(!crowdin.user.is_leader&&!own){var was_reported=s.abuses.indexOf(crowdin.user.id)>-1;html+=getItem(was_reported?_l("editor.notAbuse"):_l("editor.reportAbuse"),"abuse")}if(validation.approved&&validation.approver.id!==crowdin.user.id){html+=getItem(_l("editor.discussApproval"),"discuss")}if(crowdin.user.is_leader||own){html+=getItem(_l("generic.delete"),"delete")}$("#suggestion_options").data({id:id,user:s.user.login}).html(html)}else{html+=getItem(_l("editor.useAndSave"),"usesave");$("#suggestion_options").html(html)}$(item).addClass("tap");crowdin.editor.layout.showModalMenu("#suggestion_options")}},{key:"prepareText",value:function prepareText(text,encoded){var translation=crowdin.translation.get_translation();if(crowdin.phrases&&!$.isEmptyObject(translation)){text=crowdin.phrases.markup_replacer().mask(text,encoded)}return text}},{key:"_sort_suggestions",value:function _sort_suggestions(suggestion1,suggestion2){return crowdin.models.phrases._sort_suggestions(suggestion1,suggestion2)}},{key:"_sort_tms",value:function _sort_tms(suggestion1,suggestion2){return parseFloat(suggestion2.relevant)-parseFloat(suggestion1.relevant)}},{key:"getTmSuggestions",value:function getTmSuggestions(){var mt=crowdin.models.mt.phrases(crowdin.translation.translation_id,crowdin.translation.plural_id);return mt.tm.concat(mt.global_tm,mt.external_tm).sort(this._sort_tms)}},{key:"getMtSuggestions",value:function getMtSuggestions(){var mt=crowdin.models.mt.phrases(crowdin.translation.translation_id,crowdin.translation.plural_id);return mt.mts}}]);return crowdin_suggestions}(CrowdinComponent);
