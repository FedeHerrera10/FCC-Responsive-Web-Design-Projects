"use strict";var crowdin=crowdin||{};(function loadEditor(){bindErrors();var minified=".min";if(ENVIRONMENT==="dev"){require.config({urlArgs:(new Date).getTime().toString()});minified=""}requirejs.config({baseUrl:CDN+"/crowdin-editor/src",waitSeconds:0,paths:{react:"lib/reactjs/react"+minified,"react-dom":"lib/reactjs/react-dom.min","react-dom-server":"lib/reactjs/react-dom-server.min","create-react-class":"lib/reactjs/create-react-class"+minified,jipt:"//cdn.crowdin.com/jipt/jipt"},shim:{"lib/bootstrap":{deps:["lib/jquery"]},"lib/common_functions":{deps:["lib/jquery"]},"lib/jquery-ui-timepicker-addon-locales":{deps:["lib/jquery-ui-timepicker-addon"]},"editor/plugins/context_editor":{deps:["editor/plugins/plugins"]},"editor/plugins/context_request":{deps:["editor/plugins/plugins"]},"editor/plugins/editor_settings":{deps:["editor/plugins/plugins"]},"editor/plugins/editor_hotkeys":{deps:["editor/plugins/plugins"]},"editor/models/other_languages":{deps:["editor/models/mt"]},"lib/jquery-validation/jquery.validate.setup":{deps:["lib/jquery-validation/jquery.validate.min"]},"lib/jquery-validation/jquery.validate.i18n":{deps:["lib/jquery-validation/jquery.validate.min"]},"lib/jquery-validation/additional-methods.min":{deps:["lib/jquery-validation/jquery.validate.min"]}}});var basicScripts=["lib/crowdin_component","lib/core","lib/browser","lib/logger","lib/crowdin-localizer","lib/icu/messageformatLight","lib/icu/Intl.complete.min","lib/jquery","lib/bootstrap","lib/common_functions","editor/helpers/url"];var libsGeneral=["lib/select","lib/sanitizer","lib/jquery-validation/jquery.validate.min","lib/jquery-validation/jquery.validate.i18n","lib/jquery-validation/jquery.validate.setup","lib/jquery-validation/additional-methods.min","lib/ui/jquery-ui.min","lib/ui/jquery-ui-i18n","lib/autosize","lib/jquery.jgrowl","lib/jquery.loadmask","lib/jquery.chosen","lib/fileuploader","lib/hotkeys.min","lib/jquery.momentlive","lib/json2","lib/moment.min","lib/undo","lib/jquery.atwho","lib/textarea-helper","lib/ajax","lib/md5","lib/websocket","lib/storage","lib/files","lib/unicode_substring","lib/checklist-single","lib/dragscrollable","lib/polyfill/polyfill","lib/polyfill/date-time-format-timezone-complete-min","lib/utils/lodash.min","lib/highlight/textarea/highlight","lib/highlight/textarea/highlightWithinTextarea"];var reactScripts=["react","react-dom","react-dom-server","create-react-class","lib/reactjs/reactcompile"];var srcGeneral=["apps/panel","apps/apps","apps/event","controls/user","controls/language","controls/application","front/mention","editor","editor/layout","editor/hotkeys","editor/controls/right_panel","editor/controls/translators","editor/controls/jipt_communication","editor/views/components/circular_loader","editor/views/components/header","editor/views/components/progress","editor/views/components/mobile_menus","editor/views/components/user_sudo_warning","editor/views/dialogs/context_dialog","editor/views/dialogs/contact_manager_dialog","editor/views/components/discussions","editor/views/components/right_panel","editor/views/components/paging","editor/views/components/search_toolbar","editor/views/components/main_menu","editor/views/components/menu_tabs/file_menu_tab","editor/views/components/menu_tabs/language_menu_tab","editor/views/components/menu_tabs/project_menu_tab","editor/views/components/menu_tabs/workflow_menu_tab","editor/views/components/menu_tabs/view_menu_tab","editor/views/components/menu_tabs/help_menu_tab","editor/views/components/recent_files","editor/views/components/string_menu","editor/models/phrases","editor/helpers/alignment","editor/helpers/translation","editor/helpers/users","editor/helpers/main_menu_helper","editor/helpers/file_preview_helper","editor/helpers/strings_url_filter","editor/plugins/plugins","editor/plugins/context_editor","editor/plugins/context_request","editor/plugins/editor_settings","editor/plugins/editor_hotkeys","terms_consent"];var libsTranslate=["lib/jquery-ui-timepicker-addon","lib/jquery-ui-timepicker-addon-locales","lib/jquery.scrollTo","lib/jquery.ui.touch-punch","lib/autofix","lib/clipboard","lib/area","lib/highlight/HtmlMarkupReplacer","lib/highlight/highlight"];var libsProofread=["lib/jquery-ui-timepicker-addon","lib/jquery-ui-timepicker-addon-locales","lib/jquery.scrollTo","lib/autofix","lib/clipboard","lib/area","lib/highlight/highlight","lib/highlight/HtmlMarkupReplacer"];var libsAssets=["lib/jquery.scrollTo"];var srcTranslate=["front/tag_screenshot","front/file_download","front/file_upload","editor/actions","editor/init_hotkey_titles","editor/controls/phrases","editor/controls/glossary","editor/controls/translation","editor/controls/suggestions","editor/controls/iframe_communication","editor/views/dialogs/replace_dialog","editor/views/dialogs/edit_term_dialog","editor/views/components/issues_submenu","editor/views/components/machine_translation_submenu","editor/views/components/filter_options","editor/views/components/step_options","editor/views/components/phrases","editor/views/components/translation_text","editor/views/components/letters_counter","editor/views/components/icu_preview","editor/views/components/textarea","editor/views/components/qa_issues","editor/views/components/qa_submenu","editor/views/components/translation","editor/views/components/suggestions","editor/views/components/other_languages","editor/views/components/onboarding","editor/helpers/filter","editor/helpers/icuHelper","editor/views/components/glossary","editor/views/components/left_panel","editor/views/translate","editor/models/external_suggestions","editor/models/mt","editor/models/other_languages","editor/plugins/search","editor/plugins/replace","editor/plugins/custom_filter"];var srcProofread=["front/file_upload","front/file_download","front/tag_screenshot","proofread_editor/actions","proofread_editor/init_hotkey_titles","editor/controls/glossary","proofread_editor/controls/phrases","proofread_editor/controls/translation","editor/controls/suggestions","editor/controls/iframe_communication","editor/views/dialogs/replace_dialog","editor/views/dialogs/edit_term_dialog","editor/views/components/filter_options","editor/views/components/step_options","proofread_editor/views/phrases","proofread_editor/views/components/translation","proofread_editor/views/components/suggestion","editor/views/components/qa_submenu","editor/views/components/issues_submenu","editor/views/components/machine_translation_submenu","editor/views/components/more_actions_menu","editor/views/components/letters_counter","editor/views/components/icu_preview","editor/views/components/suggestions","editor/views/components/other_languages","editor/views/components/glossary","editor/views/components/onboarding","editor/views/proofread","editor/helpers/filter","editor/helpers/icuHelper","editor/models/external_suggestions","editor/models/mt","editor/models/other_languages","editor/plugins/search","editor/plugins/replace","editor/plugins/custom_filter"];var srcReview=["front/file_upload","front/file_download","front/tag_screenshot","review_editor/actions","review_editor/init_hotkey_titles","editor/controls/glossary","proofread_editor/controls/phrases","proofread_editor/controls/translation","editor/controls/suggestions","editor/controls/iframe_communication","editor/views/dialogs/replace_dialog","editor/views/dialogs/edit_term_dialog","editor/views/components/filter_options","editor/views/components/issues_submenu","editor/views/components/machine_translation_submenu","editor/views/components/more_actions_menu","editor/views/components/step_options","review_editor/views/phrases","review_editor/views/components/translation","review_editor/views/components/suggestion","editor/views/components/letters_counter","editor/views/components/icu_preview","editor/views/components/suggestions","editor/views/components/other_languages","editor/views/components/glossary","editor/views/components/onboarding","editor/views/review","editor/helpers/filter","editor/helpers/icuHelper","editor/models/external_suggestions","editor/models/mt","editor/models/other_languages","editor/plugins/search","editor/plugins/replace","editor/plugins/custom_filter"];var srcAssets=["assets_editor/actions","assets_editor/init_hotkey_titles","assets_editor/controls/translation","assets_editor/controls/suggestions","assets_editor/views/translation","editor/views/components/suggestions","editor/views/asset"];var loaderTimeout=null;showMasterLoader();require(basicScripts,(function(){updateMasterLoader(30);crowdin.helpers={};crowdin.helpers.url=new crowdin_url_helper;var editorInfo=crowdin.helpers.url.getEditorInfo();var searchParamsObj=crowdin.helpers.url.getSearchParamsObj();var stepChosen=crowdin.helpers.url.getSearchParams().indexOf("step_chosen")!==-1;var params={editor_mode:editorInfo.mode,project_identifier:editorInfo.projectIdentifier,file_id:editorInfo.fileId,languages:crowdin.helpers.url.getEditorInfo().language.toString(),workflow_step_id:editorInfo.workflowStepId||undefined,jipt:searchParamsObj.jipt||undefined,task:searchParamsObj.task||undefined,original_url:window.location.href||undefined,access_token:searchParamsObj.access_token||undefined,step_chosen:stepChosen||undefined};$((function(){$.get("/editor/init",params,(function(response){if(!response||!response.data){messageMasterLoader();return null}if(response.data.redirect_uri){window.location=response.data.redirect_uri;return null}var locale=response.data.locale||"en_US";var authLocale=response.data.auth_locale||"en";var localizationJsonSrc=["../public/l10n_cache/cache.editor.%locale%".replace("%locale%",locale)];if(!response.success){var profileUrl=+response.data.is_enterprise?"/u/":"/profile";var profileSettingsUrl=+response.data.is_enterprise?"/u/user_settings":"/settings#password";var messagesUrl=+response.data.is_enterprise?"/u/messages/create":"/messages/create";var authQuery=$.param({domain:response.data.auth&&response.data.auth.domain||"",cname:response.data.auth&&response.data.auth.cname||"",continue:window.location.pathname+window.location.search+window.location.hash,locale:authLocale});var loginUrl=AUTH_HOST+"/auth/token?"+authQuery;if(response.data.acl_error){if(!inIframe()){window.location=loginUrl;return null}}require(localizationJsonSrc,(function(){CrowdinLocalizer.setLocale(locale);var profileTitle=+response.data.is_enterprise?_l("editor.workspace"):_l("editor.goToProfile");var commonErrors=[{type:"acl_error",messageText:_l("editor.notLoggedIn"),btnPrimary:{btnText:_l("editor.login"),redirect:loginUrl,onClick:"$(this).remove(); $('.login-message-retry').removeClass('hidden').focus()",newTab:true},btnSecondary:{btnClass:"login-message-retry hidden",btnText:_l("generic.retry"),redirect:window.location.href,newTab:false}},{type:"show_project_not_found",messageText:_l("editor.project404Message"),btnPrimary:{btnText:profileTitle,redirect:profileUrl},btnSecondary:null},{type:"show_forbidden",messageText:_l("editor.forbiddenMessage"),btnPrimary:{btnText:profileTitle,redirect:profileUrl},btnSecondary:null},{type:"show_mfa_denied",messageText:_l("editor.multiFactorAccessDenyMessage"),btnPrimary:{btnText:_l("editor.goToProfileSettings"),redirect:profileSettingsUrl},btnSecondary:null},{type:"project_suspended",messageText:_l("generic.projectYouTryingToTranslateIsSuspended"),btnPrimary:{btn:profileTitle,redirect:profileUrl},btnSecondary:response.data.owner_id?{btnText:_l("editor.contactOwner"),btnClass:"",redirect:messagesUrl+"/"+response.data.owner_id}:null},{type:"show_task_not_found",messageText:_l("editor.taskAccessDenyMessage"),btnPrimary:{btnText:_l("tasks.allTasks"),redirect:response.data.project?response.data.project.url+"/tasks":""},btnSecondary:response.data.owner_id?{btnText:_l("editor.contactOwner"),btnClass:"",redirect:messagesUrl+"/"+response.data.owner_id}:null},{type:"",messageText:_l("error.internalError"),msgClass:"text-error",btnPrimary:{btnText:_l("generic.retry"),redirect:window.location.href},btnSecondary:{btnText:_l("editor.reportIssue"),btnClass:"",redirect:"//"+branding.getDomain()+"/contacts"}}];var data={};for(var i=0;i<commonErrors.length;i++){if(!commonErrors[i].type||response.data[commonErrors[i].type]){data={msgText:commonErrors[i].messageText,msgClass:commonErrors[i].msgClass,btnPrimary:commonErrors[i].btnPrimary,btnSecondary:commonErrors[i].btnSecondary};messageMasterLoader(data);break}}}));return null}if(crowdin.helpers.url.getSearchParams().indexOf("step_chosen")!==-1){setHistory(history.state,crowdin.helpers.url.deleteSearchParam("step_chosen",crowdin.helpers.url.getEditorInfo().toUrl()),"replace")}updateMasterLoader(65);window.CROWDIN_VERSION=response.version;window.INIT_EDITOR=response.data.init_editor;window.INIT_USER=response.data.init_user;window.INIT_USER_HOTKEYS=response.data.init_user_hotkeys;window.INIT_USER_SETTINGS=response.data.init_user_settings;window.INIT_ONBOARDING=!window.INIT_USER.is_sudo&&window.INIT_USER_SETTINGS.editor_onboarding[window.INIT_EDITOR.mode].show;window.INIT_USER_ENV=response.data.init_user_env;window.INIT_MANAGERS=response.data.init_managers;window.IS_ENTERPRISE=+response.data.is_enterprise;window.IS_EXTERNAL_PROJECT=+response.data.is_external_project;window.IS_STRINGS_BASED_PROJECT=response.data.project.is_strings_based;window.CROWDIN_LANGUAGES=response.data.crowdin_languages;window.CROWDIN_DOMAIN_NAME=response.data.init_editor.domain_name_with_cname;window.CROWDIN_DOMAIN_NAME_WITHOUT_CNAME=response.data.init_editor.domain_name;window.CROWDIN_SERVICE_NAME=response.data.init_editor.name;window.FILESIZE_LIMITS=response.data.filesize_limits;window.TIME_AM_PM=response.data.time_am_pm;window.IS_MOBILE=response.data.is_mobile;window.STEP_TODO="TODO";window.STEP_PENDING="PENDING";window.STEP_DONE="DONE";window.KB_URL=INIT_EDITOR.branding.kb_url;window.REMOVED_USER_LOGIN="REMOVED_USER";window.USER_TYPE_DEFAULT="DEFAULT";window.USER_TYPE_INTERNAL="INTERNAL";window.USER_TYPE_EXTERNAL="EXTERNAL";window.USER_TYPE_TECHNICAL="TECHNICAL";window.AUTH_LOCALE=authLocale;window.APPLICATION_MODULES=response.data.modules||[];if(INIT_EDITOR.mode!=="assets"){window.ALL_FILES_EXTENSIONS=response.data.project.source_files_extensions;window.IS_MT_ALLOWED=!!response.data.project.is_mt_allowed;window.BING_TRANSLATE_ENABLED=response.data.project.owner.bing_translate_enabled;window.GOOGLE_TRANSLATE_ENABLED=response.data.project.owner.google_translate_enabled;window.GOOGLE_AUTOML_TRANSLATE_ENABLED=response.data.project.owner.google_automl_translate_enabled;window.DEEPL_TRANSLATE_ENABLED=response.data.project.owner.deepl_translate_enabled;window.WATSON_TRANSLATOR_ENABLED=response.data.project.owner.watson_translate_enabled;window.AMAZON_TRANSLATE_ENABLED=response.data.project.owner.amazon_translate_enabled;window.YANDEX_TRANSLATE_ENABLED=response.data.project.owner.yandex_translate_enabled;window.CROWDIN_TRANSLATE_ENABLED=response.data.project.owner.crowdin_translate_enabled;window.HIGHLIGHT=response.data.highlight;window.POS_MAPPING=response.data.pos_mapping}addGoogleAnalytics(INIT_USER.id);if(locale==="zu_ZA"||locale==="xh_ZA"){var jiptProject=response.data.locale==="xh_ZA"?"demo":"crowdin";window._jipt=[];_jipt.push(["project",jiptProject]);_jipt.push(["escape",function(){window.location.href="//crowdin.com"}]);libsGeneral.push("jipt")}require(reactScripts.concat(localizationJsonSrc),(function(){updateMasterLoader(80);for(var i in arguments){if(arguments[i]){if(typeof arguments[i]==="function"){var fnName=arguments[i].name||getFnName(arguments[i]);if(fnName==="createClass"){window.createReactClass=arguments[i]}}if(arguments[i].findDOMNode){window.ReactDOM=arguments[i]}if(arguments[i].createElement){window.React=arguments[i]}if(arguments[i].renderToStaticMarkup){window.ReactDOMServer=arguments[i]}}}CrowdinLocalizer.setLocale(locale);require(libsGeneral,(function(){require(srcGeneral,(function(){updateMasterLoader(90);updateJGrowlTexts();var autosize=require.s.contexts._.defined["lib/autosize"];$.fn.autosize=function(){return autosize(this)};switch(INIT_EDITOR.mode){case"review":require(libsProofread,(function(){updateMasterLoader(100);require(srcReview,(function(){initEditor()}))}));break;case"translate":require(libsTranslate,(function(){updateMasterLoader(100);require(srcTranslate,(function(){initEditor()}))}));break;case"proofread":require(libsProofread,(function(){updateMasterLoader(100);require(srcProofread,(function(){initEditor()}))}));break;case"assets":require(libsAssets,(function(){updateMasterLoader(100);require(srcAssets,(function(){initEditor()}))}));break;default:console.error("Editor mode is not set")}}))}))}))}))}))}));function initEditor(){removeMasterLoader();if(!$("#crowdin-editor-wrapper").length){$("body").append('<div id="crowdin-editor-wrapper"></div>');$("body").append('<div id="portal"></div>')}if(!$("#preview-background").length){$("body").append('<div id="preview-background" class="preview-background hidden" tabindex="-1">'+'<div class="preview-toolbar">'+'<a class="btn btn-icon file-preview-close"><i class="static-icon static-icon-clear"></a>'+'<div class="file-preview-title"></div>'+"</div>"+'<div class="preview-content"></div>'+"</div>")}if(is_mobile_device.iOS()){$("body").addClass("ios")}crowdin.apps=new Apps(APPLICATION_MODULES);crowdin.plugins={};crowdin.hotkeys=new crowdin_hotkeys;crowdin.notify=crowdin_application.notify;crowdin.ajax=new crowdin_ajax;crowdin.websocket=new crowdin_websocket;crowdin.user=new crowdin_user;crowdin.editor=new crowdin_editor;crowdin.language=new crowdin_language;crowdin.models={};crowdin.models.phrases=new crowdin_phrases_model;crowdin.helpers.translation=new crowdin_translation_helper;crowdin.helpers.main_menu=new main_menu_helper;crowdin.helpers.file_preview=new file_preview_helper;crowdin.helpers.alignment=new crowdin_alignment_helper;crowdin.helpers.users=new crowdin_users_helper;if(!crowdin.editor.modeAssets()){crowdin.strings_url_filter=new StringsUrlFilter;crowdin.phrases=new crowdin_phrases;crowdin.models.external_suggestions=new crowdin_external_suggestions_model;crowdin.models.mt=new crowdin_mt_model;crowdin.models.other_languages=new crowdin_other_languages_model;crowdin.helpers.filter=new filter_helper}crowdin.editor.initWsUser();crowdin.editor.initEditorView();crowdin.panel=new crowdin_right_panel;crowdin.translation=new crowdin_translation;crowdin.suggestions=new crowdin_suggestions;if(!crowdin.editor.modeAssets()){crowdin.glossary=new crowdin_glossary;crowdin.highlight=new crowdin_highlight}crowdin.translators=new crowdin_translators;if(crowdin.editor.jipt_mode){crowdin.jipt=new jipt_communication}else if(typeof iframe_communication!=="undefined"){crowdin.iframe_communication=new iframe_communication}crowdin.websocket.subscribe("onopen",(function(){crowdin.editor.target_language&&crowdin.editor.subscribe(crowdin.editor.target_language.id);crowdin.editor.subscribeNotifications()}));crowdin.editor.updateTitle();crowdin.editor.bindProgress();crowdin.editor.getProgress();setup_user_actions();bind_events();crowdin.hotkeys.bindHotkeys();crowdin.log.setScope();if(!crowdin.user.is_sudo){var termsConsent=new TermsConsent(crowdin.user.terms_accepted);termsConsent.check()}}function bind_events(){window.onpopstate=function(e){if(e.state&&(e.state.file_id||e.state.target_language_id)){if(crowdin.phrases&&typeof e.state.query!=="undefined"&&e.state.query!==crowdin.phrases.query){$("#editor_search_bar").val(e.state.query).trigger("input")}if(e.state.file_id&&e.state.file_id!=crowdin.editor.file.id&&crowdin.plugins.open_file){crowdin.plugins.open_file.changeFile(e.state.file_id,false);if(crowdin.editor.modeTranslate()){crowdin.translation.hideSourcePhrasePopup()}}if(e.state.target_language_id!=crowdin.editor.target_language.id){crowdin.editor.updateLanguage(e.state.target_language_id,false)}if(e.state.workflow_step_id!=crowdin.editor.workflow_step.id){crowdin.editor.changeWorkflowStep(e.state.workflow_step_id,false)}if(e.state.task_hash!=crowdin.editor.task.hash){crowdin.editor.openTask(e.state.task_hash)}}if(IS_MOBILE){crowdin.editor.layout.hideModalMenu()}};$(document).on("click","#login_button",(function(){if(crowdin.editor.jipt_mode){crowdin.jipt.sendMessage({msg_type:"logged_out"})}else{if(IS_ENTERPRISE){var params={domain:crowdin.editor.organization.domain||null,cname:crowdin.editor.organization.cname.domain,locale:AUTH_LOCALE,continue:crowdin.helpers.url.buildEditorPath()};Object.keys(params).forEach((function(key){if(!params[key]){delete params[key]}}));window.location.href=AUTH_HOST+"/login?"+$.param(params)}else{window.location.href="/login"}}}));$(document).on("click",".user-info",(function(e){crowdin.helpers.users.showUserInfo(this);e.preventDefault()}))}function getFnName(fn){var f=typeof fn=="function";var s=f&&(fn.name&&["",fn.name]||fn.toString().match(/function ([^\(]+)/));return!f&&"not a function"||s&&s[1]||"anonymous"}function inIframe(){try{return window.self!==window.top}catch(e){return true}}function updateJGrowlTexts(){$.jGrowl.defaults.closerTemplate="<div><span>"+_l("jqueryJgrowl.closeAll")+"</span></div>"}function showMasterLoader(){document.write(""+'<div id="master-loader-mask">'+'<div id="master-loader">'+'<div class="master-loader-logo">'+'<img src="'+CDN+'/crowdin-editor/public/assets/crowdin-logo-icon-black.svg" style="height: 50px">'+"</div>"+'<div class="progress hidden no-margin">'+'<div id="master-loader-progress" class="bar" style="width: 10%;"></div>'+"</div>"+'<div class="margin-top hidden text-center" id="master-loader-message"></div>'+"</div>"+"</div>");loaderTimeout=setTimeout((function(){var mlProgress=document.querySelectorAll("#master-loader .progress")[0];if(mlProgress){mlProgress.classList.remove("hidden")}}),2e3)}function updateMasterLoader(percentage){document.getElementById("master-loader-progress").style.width=percentage+"%"}function messageMasterLoader(inputData){var loader=document.getElementById("master-loader-mask");if(!loader){return}var defaultData={msgText:"Error loading data",msgClass:"",btnPrimary:{btnText:"Retry",btnClass:"default-action",redirect:window.location.href,newTab:false},btnSecondary:{btnText:"Report Issue",btnClass:"",redirect:"//crowdin.com/contacts",newTab:inIframe()}};var data={msgText:inputData.msgText||defaultData.msgText,msgClass:inputData.msgClass||defaultData.msgClass};data.btnPrimary=Object.assign(defaultData.btnPrimary,inputData.btnPrimary);data.btnSecondary=inputData.btnSecondary?Object.assign(defaultData.btnSecondary,inputData.btnSecondary):null;function getButton(btn){if(!btn){return""}var onclick=btn.onClick||"";var target=btn.redirect;var blank="";if(btn.newTab){blank='target="_blank"'}if(btn.redirect===window.location.href){onclick="window.location.reload(true);";target="javascript:void(0)";blank=""}return'<a onclick="'.concat(onclick,'" class="btn ').concat(btn.btnClass,'" href="').concat(target,'" ').concat(blank,">").concat(btn.btnText,"</a>")}var mlProgress=document.querySelectorAll("#master-loader .progress")[0];var mlMessage=document.getElementById("master-loader-message");clearTimeout(loaderTimeout);mlProgress.classList.add("hidden");mlMessage.classList.remove("hidden");if(data.msgClass){mlMessage.classList.add(data.msgClass)}mlMessage.innerHTML=""+"<p>"+data.msgText+"</p>"+'<div class="btn-toolbar margin-top">'+getButton(data.btnPrimary)+getButton(data.btnSecondary)+"</div>";var mlDefaultButton=document.querySelectorAll("#master-loader-message .default-action")[0];mlDefaultButton&&mlDefaultButton.focus()}function removeMasterLoader(){var child=document.getElementById("master-loader-mask");document.body.removeChild(child)}function addGoogleAnalytics(userId){try{if(ENVIRONMENT==="production"){(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date;a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");ga("create","UA-8379793-1",{cookieDomain:"crowdin.com",userId:userId});ga("send","pageview");(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src="https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f)})(window,document,"script","dataLayer","GTM-W87XVT8");dataLayer.push({userId:userId});if(!window.IS_ENTERPRISE){trackUserByFacebookPixel("user.logIn","Log in");trackUserByFacebookPixel("user.signUp","Sign up")}trackUserByGoogle("user.logIn","logIn");trackUserByGoogle("user.signUp","signUp");trackUserByGoogle("user.logOut","logOut")}}catch(error){console.warn("Google Analytics error")}}function trackUserByFacebookPixel(cookieName,eventName){var cookie=getCookie(cookieName);if(cookie){crowdin.trackFacebookPixel&&crowdin.trackFacebookPixel("trackCustom",eventName)}}function trackUserByGoogle(cookieName,eventName){var cookie=getCookie(cookieName);if(cookie){window.dataLayer&&window.dataLayer.push({event:eventName,method:cookie});setCookie(cookieName,null,-1)}}function bindErrors(){var debug=typeof DEBUG_MODE==="undefined"||DEBUG_MODE;window.onerror=function(msg,url,line,col,error_obj){return!debug};requirejs.onError=function(err){messageMasterLoader({msgText:"Error loading resources. Please try again.",msgClass:"text-error"});if(debug){throw err}}}})();
