"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var phrasesView=function(_React$Component){_inherits(phrasesView,_React$Component);var _super=_createSuper(phrasesView);function phrasesView(props){var _this;_classCallCheck(this,phrasesView);_this=_super.call(this,props);_this.currentIframeUrl=null;return _this}_createClass(phrasesView,[{key:"componentDidUpdate",value:function componentDidUpdate(){if(this.getVersionView()==="html"){this.updateIframeSrc()}}},{key:"getVersionView",value:function getVersionView(){return this.props.data&&this.props.data.version?this.props.data.version:crowdin.editor.getFileView(crowdin.editor.file)}},{key:"render",value:function render(){var self=this;var result=["div"];var version=self.getVersionView();if(!self.props.data&&version!=="html"){return null}if(version==="html"){result.push(["div.content_block texts-to-translate-list-wrapper html-view",crowdin.editor.file&&crowdin.editor.target_language&&self.renderIframe()])}else{var phrases=self.props.data.phrases;var query=self.props.data.query;var search_with_phrases=["div"];if(query&&query.length){if(isNaN(query)){search_with_phrases.push(self.renderSearchOption())}else{crowdin.phrases.search_option=0}}phrases&&search_with_phrases.push(phrases.length?self.renderBasic():self.renderEmptyList());result.push(["div.content_block texts-to-translate-list-wrapper",search_with_phrases]);if(phrases){result.push([PagingView])}}return ReactCompile(result)}},{key:"renderBasic",value:function renderBasic(){var self=this;var result=[];for(var i=0;i<self.props.data.phrases.length;i++){var phrase=self.props.data.phrases[i];result.push(["li",{id:"phrase_"+phrase.id,key:phrase.id},self.renderString(phrase)])}var attributes={id:"texts_list",lang:crowdin.editor.source_language.code,dir:crowdin.editor.source_language.text_direction};return["ul.texts-to-translate-list unstyled"+(crowdin.user.settings.action_phrase_completely?"":" list-overflow"),attributes,result]}},{key:"renderString",value:function renderString(phrase){var classes="";var attributes={};if(phrase.text.length){classes=crowdin.phrases.get_phrase_status_classname(phrase.translation_status)+(phrase.text.match(/^ +$/g)===null?"":" string-spaces")+(phrase.hidden?" hidden_phrase":"")+(phrase.commented?" commented":"");attributes={href:"#"+phrase.id,tabIndex:"-1"};if(phrase.title!==""){attributes.title=phrase.title}}else{classes="empty"+phrase.hidden?" hidden_phrase":""+phrase.commented?" commented":"";attributes={href:"#",title:_l("editor.thisStringIsEmpty"),tabIndex:"-1"}}var text=phrase.text.length?phrase.text.replace(/^[\s]+$/g,_l("editor.spaceCharacterS")):_l("editor.emptyStringS");var replacer=this.props.data.markup_replacer(phrase.id);text=replacer.mask(text,true);if(phrase.commented){var icon_class=".static-icon"+(phrase.with_unresolved_issues?" phrase-with-issue":" phrase-with-comment");var icon_title=phrase.with_unresolved_issues?_l("editor.unresolvedIssues"):_l("editor.comments")}return["a."+classes,attributes,phrase.commented?["i"+icon_class,{title:icon_title}]:null,htmlspecialchars_decode(text)]}},{key:"renderIframe",value:function renderIframe(){var self=this;var queryParams={project_id:crowdin.editor.project.id,target_language_id:crowdin.editor.target_language.id,file_id:crowdin.editor.file.id};if(crowdin.editor.workflow_step.id){queryParams.workflow_step_id=crowdin.editor.workflow_step.id}var url=crowdin.helpers.url.build(window.location.origin+"/backend/phrases/phrases_as_html",queryParams);this.currentIframeUrl=url;var attributes={id:"html_frame",tabIndex:"-1",scrolling:"auto",className:"frame-type-"+crowdin.editor.getBaseFileType(),onLoad:function onLoad(){self.updateIframeSrc(true);self.addIframeToHotkeyListener()},style:{position:"absolute",left:0,top:0,overflow:"hidden",visibility:"hidden",height:"100%",width:"100%",borderWidth:0},"data-src":url};var iframe=this.getIframe();if(!iframe||iframe.getAttribute("data-src")!==url){crowdin.ajax.start(_l("generic.loadingD"))}return["iframe",attributes]}},{key:"renderEmptyList",value:function renderEmptyList(){return["div.no_suggestions_yet muted",{style:{padding:"40px 15px"}},["p",["span",_l("editor.noStringsToDisplay")],["br"],["span",_l("editor.tryToChangeFilter")]],!crowdin.editor.isAllFilesSelected()&&!IS_STRINGS_BASED_PROJECT?["p",["a.open_file_dialog",{href:"/project/"+crowdin.editor.project.identifier+"/"+crowdin.editor.target_language.code},_l("editor.selectAnotherFile")]]:""]}},{key:"renderSearchOption",value:function renderSearchOption(){var filter_message="";if(this.props.data.filter_index&&this.props.filter_index!==0&&this.props.data.filter_index!==3){var $filter=$("#phrases-sort-order-options a[filter="+this.props.data.filter_index+"]");var filter_name=this.props.data.filter_index===12?$filter.text().trim().split(" ")[0]:$filter.text().trim();var parent_filter=$filter.closest(".dropdown-submenu").children("a").text();if(parent_filter.length){filter_name=parent_filter+filter_name}if(filter_name.length){filter_message=["div.muted s-margin-top",_l("editor.filterIsEnabled",{filter:ucfirst(filter_name.trim().toLowerCase())}),["a.ajax-link",{id:"disable-filter",href:"#"},_l("editor.disable")]]}}var strings=["td"+(this.props.data.search_option===1?".active":""),["a.text-overflow",{"data-option":"1",tabIndex:"-1",href:"javascript:void(0)"},_l("generic.strings")]];var context=["td"+(this.props.data.search_option===2?".active":""),["a.text-overflow",{"data-option":"2",tabIndex:"-1",href:"javascript:void(0)"},_l("editor.context")]];var suggestions=["td"+(this.props.data.search_option===3?".active":""),["a.text-overflow",{"data-option":"3",tabIndex:"-1",href:"javascript:void(0)"},_l("generic.translations")]];var anything=["td"+(this.props.data.search_option===0?".active":""),["a.text-overflow",{"data-option":"0",tabIndex:"-1",href:"javascript:void(0)"},_l("editor.everything")]];var row_s_and_c=["tr",strings,context];var row_s_and_a=["tr",suggestions,anything];var table=["table.table table-bordered phrases-search-options no-margin",["tbody",row_s_and_c,row_s_and_a]];var result=["div.phrases-search-options-wrapper one-line",table,filter_message];return["div",{id:"search_phrases_options"},result]}},{key:"getIframe",value:function getIframe(){return $(crowdin.phrases.render_frame).get(0)}},{key:"updateIframeSrc",value:function updateIframeSrc(iframeLoaded){var iframe=this.getIframe();if(iframe.contentWindow.location.href!==this.currentIframeUrl){iframe.contentWindow.location.replace(this.currentIframeUrl)}else{if(iframeLoaded){crowdin.ajax.complete(_l("generic.loadingD"));crowdin.phrases.source_file_loaded()}}}},{key:"addIframeToHotkeyListener",value:function addIframeToHotkeyListener(){var iframeDocument=document.getElementById("html_frame").contentWindow.document;hotkeys("*",{element:iframeDocument},(function(){}))}}]);return phrasesView}(React.Component);
