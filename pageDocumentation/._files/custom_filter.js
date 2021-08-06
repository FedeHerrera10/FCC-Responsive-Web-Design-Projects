"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i]}return arr2}function _iterableToArrayLimit(arr,i){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(arr)))return;var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"]!=null)_i["return"]()}finally{if(_d)throw _e}}return _arr}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_custom_filter=function(_crowdin_plugin){_inherits(crowdin_custom_filter,_crowdin_plugin);var _super=_createSuper(crowdin_custom_filter);function crowdin_custom_filter(){_classCallCheck(this,crowdin_custom_filter);return _super.call(this,{buttonId:"#custom_filter_button"})}_createClass(crowdin_custom_filter,[{key:"getDialogHtml",value:function getDialogHtml(){var divider="<hr>";var dividerWithMargin='<hr class="s-margin-top">';return'\n      <form id="custom_filter_form" class="form-inline no-margin">\n        '.concat(this.stringsAddedDateTimeFilter(),"\n        ").concat(this.stringsUpdatedDateTimeFilter(),"\n        ").concat(this.translationsUpdatedDateTimeFilter(),"\n        ").concat(divider,"\n        ").concat(this.stringsLabelsFilter(),"\n        ").concat(this.translationsSelectFilter(),"\n        ").concat(this.tmMtSelectFilter(),"\n        ").concat(this.approvalsSelectFilter(),"\n        ").concat(this.getApprovedByStepFilters(),"\n        ").concat(this.commentsSelectFilter(),"\n        ").concat(this.screenshotsSelectFilter(),"\n        ").concat(this.visibilitySelectFilter(),"\n        ").concat(this.qaIssuesSelectFilter(),"\n        ").concat(this.stringTypeSelectFilter(),"\n        ").concat(this.votesSelectFilter(),"\n        ").concat(!crowdin.editor.modeReview()?dividerWithMargin:"","\n        ").concat(this.getFilterTranslatedByUser(),"\n        ").concat(this.getFilterApprovedByUser(),"\n        ").concat(divider,"\n        ").concat(this.getSortFilterSection(),'\n        <input type="submit" style="display: none;">\n      </form>\n    ')}},{key:"setDialogValues",value:function setDialogValues(){var custom_filter=crowdin.user.get_custom_filter();var $conflict_elements=$(".filter-conflict","#custom_filter_form");var not_translated=!!custom_filter.not_translated;$.each(["filter_added_from","filter_added_to","filter_updated_from","filter_updated_to","filter_changed_from","filter_changed_to"],(function(index,filter){var filter_name=filter.replace("filter_","");$("#"+filter).val("");if(custom_filter[filter_name]&&isNaN(custom_filter[filter_name])){$("#"+filter).datetimepicker("setDate",new Date(custom_filter[filter_name]))}}));$("#filter_approved_by").prop("checked",custom_filter.approved_by);$("#translations_select_filter").val(custom_filter.translations).trigger("change");$("#tm_mt_select_filter").val(custom_filter.tm_and_mt).trigger("change");$("#approvals_select_filter").val(custom_filter.approvals).trigger("change");$("#comments_select_filter").val(custom_filter.comments).trigger("change");$("#screenshots_select_filter").val(custom_filter.screenshots).trigger("change");$("#visibility_select_filter").val(custom_filter.visibility).trigger("change");$("#qa_issues_select_filter").val(custom_filter.qa_issues).trigger("change");$("#string_type_select_filter").val(custom_filter.string_type).trigger("change");$("#votes_select_filter").val(custom_filter.votes).trigger("change");$("#votes_count").val(custom_filter.votes_count).trigger("change");$("#string_labels_filter").val(custom_filter.labels).trigger("chosen:updated");$("#filter_translated_by_user").val(custom_filter.translated_by_user||custom_filter.not_translated_by_user);$("#filter_approved_by_user").val(custom_filter.approved_by_user||custom_filter.not_approved_by_user);$("#filter_approved_step").val(custom_filter.approved_step);$conflict_elements.prop("disabled",not_translated);$conflict_elements.parent()[not_translated?"addClass":"removeClass"]("disabled");$("#filter_sort_method").val(custom_filter.sort_method);$("#filter_sort_ascending").val(custom_filter.sort_ascending)}},{key:"getDialogValues",value:function getDialogValues(){var custom_filter=crowdin.user.get_custom_filter();$.each(["filter_added_from","filter_added_to","filter_updated_from","filter_updated_to","filter_changed_from","filter_changed_to"],(function(index,filter){var filter_name=filter.replace("filter_","");var filter_type=filter_name.split("_")[1];var date;custom_filter[filter_name]="";var filterSelector=$("#"+filter);if(filterSelector.val()&&filterSelector.val().trim()){date=filterSelector.datetimepicker("getDate");if(date){custom_filter[filter_name]=date.format(filter_type==="to"?"yyyy-mm-dd HH:MM:59":"yyyy-mm-dd HH:MM:ss")}else{filterSelector.val("")}}}));var selectorValue=function selectorValue(selector){var elem=$(selector);return!elem.is(":disabled")?elem.val():""};custom_filter.translations=selectorValue("#translations_select_filter");custom_filter.tm_and_mt=selectorValue("#tm_mt_select_filter");custom_filter.approvals=selectorValue("#approvals_select_filter");custom_filter.comments=selectorValue("#comments_select_filter");custom_filter.screenshots=selectorValue("#screenshots_select_filter");custom_filter.visibility=selectorValue("#visibility_select_filter");custom_filter.qa_issues=selectorValue("#qa_issues_select_filter");custom_filter.labels=selectorValue("#string_labels_filter");custom_filter.string_type=selectorValue("#string_type_select_filter");custom_filter.votes=selectorValue("#votes_select_filter");custom_filter.votes_count=selectorValue("#votes_count");custom_filter.translated_by_user="";custom_filter.not_translated_by_user="";var translationsByUserKey=selectorValue("#translations_by_user");if(translationsByUserKey){custom_filter[translationsByUserKey]=selectorValue("#filter_translated_by_user")}custom_filter.approved_by_user="";custom_filter.not_approved_by_user="";var approvalsByUserKey=selectorValue("#approvals_by_user");if(approvalsByUserKey){custom_filter[approvalsByUserKey]=selectorValue("#filter_approved_by_user")}custom_filter.approved_step=selectorValue("#filter_approved_step");custom_filter.sort_method=parseInt($("#filter_sort_method").val());custom_filter.sort_ascending=parseInt($("#filter_sort_ascending").val());crowdin.user.set_custom_filter(custom_filter)}},{key:"bindFilterEvents",value:function bindFilterEvents(){var self=this;var $conflictApprovedbyElements=$(".filter-approved-by-conflict");var $approverByInputs=$("#filter_translated_by_user, #filter_approved_by_user");$("#custom_filter_form").submit((function(){self.filter();return false}));$.each([["#filter_added_from","#filter_added_to"],["#filter_updated_from","#filter_updated_to"],["#filter_changed_from","#filter_changed_to"]],(function(index,selectors){var selectorFrom,selectorTo;var _selectors=_slicedToArray(selectors,2);selectorFrom=_selectors[0];selectorTo=_selectors[1];self.bindStringsTimePickerFilter(selectorFrom,selectorTo)}));$approverByInputs.autocomplete({position:{my:"left ".concat(IS_MOBILE?"bottom":"top"),at:"left ".concat(IS_MOBILE?"top":"bottom"),collision:IS_MOBILE?"none":"flip"},delay:0,autoFocus:true,appendTo:IS_MOBILE?$("#custom_filter_form"):null,source:function source(request,response){var users=crowdin.translators.translators;response(self.filterUsers(request.term,users))},create:function create(){var type=$(this).attr("id");$(this).data("ui-autocomplete")._renderItem=function(ul,user){ul.addClass("crowdin-user-autocomplete crowdin-user-autocomplete--".concat(type));return $("<li/>",{"data-value":user.value}).append($("<a/>",{href:"#",class:"clearfix"}).append($("<img />",{src:user.img,class:"avatar"}).after($("<div>",{class:"info"}).append($("<div>",{class:"text-overflow"}).html(user.login).after($("<small>",{class:"text-overflow"}).html(user.name)))))).appendTo(ul)}}});$approverByInputs.on("input propertychange",(function(){$(this).closest("div").parent().find("label > input").prop("checked",this.value.length?true:false)}));$conflictApprovedbyElements.click((function(){if(this.type==="checkbox"){var checked=$(this).prop("checked");$conflictApprovedbyElements.prop("checked",false);$(this).prop("checked",checked);if($(this).prop("id")==="filter_approved_by_user"){$(this).closest("div").find("label > input").prop("checked",this.value.length?true:false)}}}));$("#filter_approved_step").on("change",(function(){$conflictApprovedbyElements.prop("checked",false);$(this).closest("div").parent().find("label > input").prop("checked",true)}));$("#translations_select_filter").on("change",(function(){var optionValue=$(this).val();var conflictElements=["#tm_mt_select_filter","#approvals_select_filter","#qa_issues_select_filter","#approvals_by_user","#filter_approved_by_user","#translations_by_user","#filter_translated_by_user","#filter_translated_by","#votes_select_filter","#votes_count","#filter_approved_step"];var conflictElementsMapping={"-1":[],untranslated:["#tm_mt_select_filter","#approvals_select_filter","#qa_issues_select_filter","#approvals_by_user","#filter_approved_by_user","#translations_by_user","#filter_approved_by","#filter_translated_by_user","#filter_translated_by","#votes_select_filter","#votes_count","#filter_approved_step"],partially_translated:["#approvals_select_filter"],translated:[]};self.handleConflictElements(optionValue,conflictElements,conflictElementsMapping,"translations_select_filter")}));$("#votes_select_filter").on("change",(function(){var optionValue=$(this).val();$("#votes_count").prop("disabled",!optionValue)}));$("#approvals_select_filter").on("change",(function(){var optionValue=$(this).val();var conflictElements=["#qa_issues_select_filter","#filter_approved_by_user","#filter_approved_by","#approvals_by_user","#filter_approved_step"];var conflictElementsMapping={"-1":[],translated_not_approved:["#filter_approved_by_user","#filter_approved_by","#approvals_by_user","#filter_approved_step"],partially_approved:[],approved:["#qa_issues_select_filter"],have_translations_after_approval:["#qa_issues_select_filter"]};self.handleConflictElements(optionValue,conflictElements,conflictElementsMapping,"approvals_select_filter")}))}},{key:"highlightWord",value:function highlightWord(string,query){string=htmlspecialchars(string);query=htmlspecialchars(query);var index=string.toLowerCase().indexOf(query.toLowerCase());if(index>=0){string=string.substring(0,index)+'<span class="match">'+string.substring(index,index+query.length)+"</span>"+string.substring(index+query.length)}return string}},{key:"filterUsers",value:function filterUsers(query,users){var _this=this;return users.filter((function(user){return user.hasOwnProperty("name")&&user.name.toLowerCase().indexOf(query.toLowerCase())!==-1||user.hasOwnProperty("login")&&user.login.toLowerCase().indexOf(query.toLowerCase())!==-1})).map((function(item){return{value:item.login,login:_this.highlightWord(item.login,query),name:_this.highlightWord(item.name,query),img:item.avatar_url}}))}},{key:"handleConflictElements",value:function handleConflictElements(optionValue,conflictElements,conflictElementsMapping,selectorScope){if(optionValue==""){optionValue=-1}conflictElements.map((function(elem){var scope=$(elem).data("blocked-by-scope");var blockedByAnotherScope=scope&&scope!==selectorScope;var isDisabledSelect=$(elem).prop("disabled");var disabledPropValue=in_array(elem,conflictElementsMapping[optionValue]);if(disabledPropValue===true&&!blockedByAnotherScope){$(elem).data("blocked-by-scope",selectorScope)}if(disabledPropValue===false&&!blockedByAnotherScope){$(elem).data("blocked-by-scope","")}if(blockedByAnotherScope&&isDisabledSelect){disabledPropValue=true}$(elem).prop("disabled",disabledPropValue)}))}},{key:"bindStringsTimePickerFilter",value:function bindStringsTimePickerFilter(selectorFrom,selectorTo){$(selectorFrom).datetimepicker({dateFormat:"M dd, yy",duration:0,beforeShow:function beforeShow(){$(this).datepicker("option","maxDate",$(selectorTo).val())}});$(selectorTo).datetimepicker({dateFormat:"M dd, yy",duration:0,hour:23,minute:59,beforeShow:function beforeShow(){$(this).datepicker("option","minDate",$(selectorFrom).val());$(this).datepicker("option","maxDate",0);if($(selectorFrom).val()==="")$(this).datepicker("option","minDate",0)}})}},{key:"run",value:function run(){$("#custom_filter_dialog").dialog("open")}},{key:"setup",value:function setup(){var self=this;if($("#custom_filter_dialog").length==0){$("body").append('<div id="custom_filter_dialog" style="display:none;"></div>')}$("#custom_filter_dialog").html(this.getDialogHtml());$("#custom_filter_dialog").attr("title",_l("editor.advancedFilter"));$("#custom_filter_dialog").dialog({autoOpen:false,width:610,resizable:false,draggable:!IS_MOBILE,modal:false,buttons:[{text:_l("generic.close"),click:function click(){self.close()}},{id:"reset-advanced-filter",text:_l("editor.resetFilter"),click:function click(){self.reset()}},{text:_l("editor.filter"),click:function click(){self.filter()}}],open:function open(e,ui){$("#string_labels_filter").chosen();crowdin.editor.fit_dialog($(this))},close:function close(){$("#filter_added_from,"+"#filter_added_to,"+"#filter_updated_from,"+"#filter_updated_to,"+"#filter_changed_from,"+"#filter_changed_to").datetimepicker("hide")}});this.bindFilterEvents();this.setDialogValues()}},{key:"close",value:function close(){$("#custom_filter_dialog").dialog("close")}},{key:"reset",value:function reset(){crowdin.user.reset_custom_filter();this.setDialogValues();crowdin.strings_url_filter.setResetAdvancedFilter(true);crowdin.phrases.sort_order($("#custom_filter_button").attr("filter"))}},{key:"filter",value:function filter(){this.getDialogValues();var filter=crowdin.user.get_custom_filter();var msg=_l("editor.startAndEndDatesRequired");if(filter.added_from&&!filter.added_to){crowdin.notify(msg);$("#filter_added_to").focus();return}if(!filter.added_from&&filter.added_to){crowdin.notify(msg);$("#filter_added_from").focus();return}if(filter.changed_from&&!filter.changed_to){crowdin.notify(msg);$("#filter_changed_to").focus();return}if(!filter.changed_from&&filter.changed_to){crowdin.notify(msg);$("#filter_changed_from").focus();return}if(filter.updated_from&&!filter.updated_to){crowdin.notify(msg);$("#filter_updated_to").focus();return}if(!filter.updated_from&&filter.updated_to){crowdin.notify(msg);$("#filter_updated_from").focus();return}if(isNaN(parseInt(filter.votes_count))&&filter.votes){crowdin.notify(_l("editor.advancedFilter.votes.votedCountRequired"));$("#votes_count").focus();return}crowdin.phrases.sort_order($("#custom_filter_button").attr("filter"));crowdin.trackEvent("Editor","Custom Filter","Filter");if(IS_MOBILE){this.close()}}},{key:"stringsAddedDateTimeFilter",value:function stringsAddedDateTimeFilter(){return'\n      <div class="clearfix control-group">\n        <label class="pull-left custom-filter-label text-overflow" for="filter_added_from" title="'.concat(_l("editor.showStringsImportedByDate",{siteName:branding.getName()}),'">\n          ').concat(_l("editor.stringsAdded2D"),'\n        </label>\n        <div class="controls pull-left" style="white-space:nowrap">\n          <input type="text" id="filter_added_from" style="width: 125px;" />\n          <label class="disabled">&nbsp;&ndash;&nbsp;</label>\n          <input type="text" id="filter_added_to" style="width: 125px;" />\n        </div>\n      </div>\n    ')}},{key:"stringsUpdatedDateTimeFilter",value:function stringsUpdatedDateTimeFilter(){return'\n      <div class="clearfix control-group">\n        <label class="pull-left custom-filter-label text-overflow" for="filter_updated_from" title="'.concat(_l("editor.showStringsChangedByDate"),'">\n          ').concat(_l("editor.stringsChanged2D"),'\n        </label>\n        <div class="controls pull-left" style="white-space:nowrap">\n          <input type="text" id="filter_updated_from" style="width: 125px;" />\n          <label class="disabled">&nbsp;&ndash;&nbsp;</label>\n          <input type="text" id="filter_updated_to" style="width: 125px;" />\n        </div>\n      </div>\n    ')}},{key:"translationsUpdatedDateTimeFilter",value:function translationsUpdatedDateTimeFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left custom-filter-label text-overflow" for="filter_changed_from" title="'.concat(_l("editor.showStringsWithModifiedTranslationsByDate"),'">\n          ').concat(_l("editor.translationsChanged2D"),'\n        </label>\n        <div class="controls pull-left" style="white-space:nowrap">\n          <input type="text" id="filter_changed_from" style="width: 125px;" />\n          <label class="disabled">&nbsp;&ndash;&nbsp;</label>\n          <input type="text" id="filter_changed_to" style="width: 125px;" />\n        </div>\n      </div>\n    ')}},{key:"translationsSelectFilter",value:function translationsSelectFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="translations_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.translations"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="translations_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="untranslated">').concat(_l("editor.advancedFilter.translations.untranslated"),'</option>\n            <option value="partially_translated">').concat(_l("editor.advancedFilter.translations.partiallyTranslated"),'</option>\n            <option value="translated">').concat(_l("editor.advancedFilter.translations.translated"),'</option>\n            <option value="duplicate_source_string">').concat(_l("editor.advancedFilter.translations.duplicateSourceString"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"tmMtSelectFilter",value:function tmMtSelectFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="tm_mt_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.tmAndMt"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="tm_mt_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="by_mt">').concat(_l("editor.advancedFilter.tmAndMt.translatedByMT"),'</option>\n            <option value="by_tm">').concat(_l("editor.advancedFilter.tmAndMt.translatedByTM"),'</option>\n            <option value="by_mt_or_tm">').concat(_l("editor.advancedFilter.tmAndMt.translatedByTMorMT"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"approvalsSelectFilter",value:function approvalsSelectFilter(){if(crowdin.editor.stepTypeTranslate()||crowdin.editor.stepTypeTranslateByVendor()||crowdin.editor.stepTypeCrowdsource()||crowdin.editor.isOutOfWorkflowEditorMode()){return""}if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="approvals_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.approvals"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="approvals_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="translated_not_approved">').concat(_l("editor.advancedFilter.approvals.translatedNotApproved"),'</option>\n            <option value="partially_approved">').concat(_l("editor.advancedFilter.approvals.partiallyApproved"),'</option>\n            <option value="approved">').concat(_l("editor.advancedFilter.approvals.approved"),'</option>\n            <option value="have_translations_after_approval">').concat(_l("editor.advancedFilter.approvals.haveTranslationsAfterApproval"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"commentsSelectFilter",value:function commentsSelectFilter(){return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="comments_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.comments"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="comments_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="have_comments">').concat(_l("editor.advancedFilter.comments.haveComments"),'</option>\n            <option value="have_unresolved_issues">').concat(_l("editor.advancedFilter.comments.haveUnresolvedIssues"),'</option>\n            <option value="do_not_have_comments">').concat(_l("editor.advancedFilter.comments.doNotHaveComments"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"screenshotsSelectFilter",value:function screenshotsSelectFilter(){if(IS_EXTERNAL_PROJECT){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="screenshots_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.screenshots"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="screenshots_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="without_screenshots">').concat(_l("editor.advancedFilter.screenshots.withoutScreenshots"),'</option>\n            <option value="with_screenshots">').concat(_l("editor.advancedFilter.screenshots.withScreenshots"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"visibilitySelectFilter",value:function visibilitySelectFilter(){if(!crowdin.user.has_access_to_hidden_strings){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="visibility_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.visibility"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="visibility_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="visible">').concat(_l("editor.advancedFilter.visibility.visible"),'</option>\n            <option value="hidden">').concat(_l("editor.advancedFilter.visibility.hidden"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"qaIssuesSelectFilter",value:function qaIssuesSelectFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="qa_issues_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.qaIssues"),'\n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="qa_issues_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),"</option>\n            ").concat(this.getQaAvailableOptions(),"\n          </select>\n        </div>\n      </div>\n    ")}},{key:"votesSelectFilter",value:function votesSelectFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="votes_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.votes.label"),' \n        </label>\n        <div class="pull-left" style="white-space:nowrap;width:300px;">\n          <select id="votes_select_filter" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:150px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="votes_greater_than">').concat(_l("editor.advancedFilter.votes.greaterThan"),'</option>\n            <option value="votes_less_than">').concat(_l("editor.advancedFilter.votes.lessThan"),'</option>\n          </select>\n          <input type="number" id="votes_count" placeholder="" style="margin-left: 9px; width: 120px" pattern="d+"/>\n        </div>\n      </div>\n    ')}},{key:"stringTypeSelectFilter",value:function stringTypeSelectFilter(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="string_type_select_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.stringType.label"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n          <select id="string_type_select_filter" style="width:300px;">\n            <option value="" selected>').concat(_l("editor.advancedFilter.select"),'</option>\n            <option value="string_type_simple">').concat(_l("editor.advancedFilter.stringType.simpleString"),'</option>\n            <option value="string_type_plurals">').concat(_l("editor.advancedFilter.stringType.plurals"),'</option>\n            <option value="string_type_icu">').concat(_l("editor.advancedFilter.stringType.icu"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"stringsLabelsFilter",value:function stringsLabelsFilter(){if(!crowdin.editor.project||!crowdin.editor.project.labels||!crowdin.editor.project.labels.length){return""}return'\n      <div class="clearfix control-group">\n        <label class="pull-left advanced-filter" for="string_labels_filter" style="margin: 7px 10px 7px 0;">\n          '.concat(_l("editor.advancedFilter.labels"),'  \n        </label>\n        <div class="pull-left" style="white-space:nowrap;">\n            <select class="input-block-level"\n                    id="string_labels_filter"\n                    data-placeholder="').concat(_l("editor.advancedFilter.select"),'"\n                    multiple="multiple"\n                    style="width:300px;"\n            >').concat(this.getProjectLabelsOptions(),"</select>\n        </div>\n      </div>\n    ")}},{key:"getFilterTranslatedByUser",value:function getFilterTranslatedByUser(){if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="checkbox pull-left advanced-filter-translated-approved-by '.concat(IS_MOBILE?"s-margin-bottom":"",'" title="').concat(_l("editor.showStringsWithTranslationsByUser"),'" for="filter_translated_by">\n          <select id="translations_by_user" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:165px">\n            <option value="translated_by_user">').concat(_l("editor.advancedFilter.translatedBy"),'</option>\n            <option value="not_translated_by_user">').concat(_l("editor.advancedFilter.notTranslatedBy"),'</option>\n          </select>\n        </label>\n        <div class="pull-left">\n          <input type="text" id="filter_translated_by_user" maxlength="255" placeholder="" class="filter-conflict" />\n        </div>\n      </div>\n    ')}},{key:"getFilterApprovedByUser",value:function getFilterApprovedByUser(){if(crowdin.editor.stepTypeTranslate()||crowdin.editor.stepTypeTranslateByVendor()||crowdin.editor.stepTypeCrowdsource()||crowdin.editor.isOutOfWorkflowEditorMode()){return""}if(!crowdin.editor.modeTranslateProofread()){return""}return'\n      <div class="clearfix control-group">\n        <label class="checkbox pull-left advanced-filter-translated-approved-by '.concat(IS_MOBILE?"s-margin-bottom":"",'">\n          <select id="approvals_by_user" placeholder="').concat(_l("editor.advancedFilter.select"),'" style="width:165px;">\n            <option value="approved_by_user">').concat(_l("editor.advancedFilter.approvedBy"),'</option>\n            <option value="not_approved_by_user">').concat(_l("editor.advancedFilter.notApprovedBy"),'</option>\n          </select>\n        </label>\n        <div class="pull-left">\n          <input type="text" id="filter_approved_by_user" maxlength="255" placeholder="" class="filter-conflict filter-approved-by-conflict"/>\n        </div>\n      </div>\n    ')}},{key:"getApprovedByStepFilters",value:function getApprovedByStepFilters(){if(!crowdin.editor.project.has_basic_workflow){return""}var proofreadSteps="";crowdin.editor.workflow_proofread_steps.forEach((function(step){proofreadSteps+='<option value="'.concat(step.id,'">').concat(htmlspecialchars(step.name),"</option>")}));return'\n      <div class="control-group clearfix">\n        <label class="checkbox pull-left custom-filter-label" style="margin: 7px 10px 7px 0;" title="'.concat(_l("editor.showStringsWithApprovedStep"),'" for="filter_approved_step">\n          ').concat(_l("editor.approvedInStep"),'\n        </label>\n        <div class="pull-left">\n          <select id="filter_approved_step" style="width:300px" class="filter-conflict filter-approved-by-conflict">\n            <option value="0">').concat(_l("editor.advancedFilter.select"),"</option>\n            ").concat(proofreadSteps,"\n          </select>\n        </div>\n      </div>\n      </label>\n    ")}},{key:"getSortFilterSection",value:function getSortFilterSection(){var votesOption='<option value="6">'.concat(_l("editor.votes"),"</option>");var translationsUpdatedOption='<option value="2">'.concat(_l("advancedFilter.sortOrder.translationsUpdated"),"</option>");return'\n      <div class="clearfix control-group">\n        <label class="pull-left" for="filter_sort_method" style="margin: 7px 10px 7px 0;">'.concat(_l("editor.sortBy"),'</label>\n        <div class="pull-left" style="white-space:nowrap">\n          <select id="filter_sort_method" style="margin-right: 10px; width: 180px;">\n            <option value="0">').concat(_l("editor.originalSortOrder"),'</option>\n            <option value="1">').concat(_l("advancedFilter.sortOrder.stringsAdded"),"</option>\n            ").concat(!crowdin.editor.modeReview()&&translationsUpdatedOption,'\n            <option value="3">').concat(_l("editor.lastCommentAdded"),'</option>\n            <option value="4">').concat(_l("editor.alphabet"),'</option>\n            <option value="5">').concat(_l("editor.length"),"</option>\n            ").concat(!crowdin.editor.modeReview()&&votesOption,'\n          </select>\n          <select id="filter_sort_ascending" style="width: 120px;">\n            <option value="1">').concat(_l("editor.ascending"),'</option>\n            <option value="0">').concat(_l("editor.descending"),"</option>\n          </select>\n        </div>\n      </div>\n    ")}},{key:"getQaAvailableOptions",value:function getQaAvailableOptions(){var options=crowdin.helpers.filter.getFilterOptionsDataBySubCategory(crowdin.helpers.filter.WITH_QA_ISSUES);var html="";for(var optionKey in options){var option=options[optionKey];if(option.isAllowed){html+='<option value="'.concat(option.option,'">').concat(option.categoryLabel,"</option>")}}return html}},{key:"getProjectLabelsOptions",value:function getProjectLabelsOptions(){var labels=crowdin.editor.project.labels;var html="";labels.map((function(label){html+='<option value="'.concat(label.id,'">').concat(htmlspecialchars(label.title),"</option>")}));return html}}]);return crowdin_custom_filter}(crowdin_plugin);
