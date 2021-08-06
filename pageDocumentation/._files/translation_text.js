"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var TranslationTextView=function(_React$Component){_inherits(TranslationTextView,_React$Component);var _super=_createSuper(TranslationTextView);function TranslationTextView(props){var _this;_classCallCheck(this,TranslationTextView);_this=_super.call(this,props);_this.state={showLoader:false};return _this}_createClass(TranslationTextView,[{key:"componentDidMount",value:function componentDidMount(){var self=this;crowdin.models.phrases.on("load.start",(function(id){if(crowdin.translation.translation_id===id){self.setState({showLoader:true})}}));crowdin.models.phrases.on("load",(function(id){if(crowdin.translation.translation_id===id){self.setState({showLoader:false})}}));crowdin.models.phrases.on("changed.translation",this.phrasesChanged)}},{key:"componentWillUnmount",value:function componentWillUnmount(){crowdin.models.phrases.off("changed.translation",this.phrasesChanged)}},{key:"componentDidUpdate",value:function componentDidUpdate(){if(!$.isEmptyObject(crowdin.plugins)){this.rebindPlugins()}crowdin.editor.layout.resizeSuggestions()}},{key:"phrasesChanged",value:function phrasesChanged(id){if(crowdin.translation.translation_id===id){crowdin.editor.view.setState({translation:crowdin.translation.get_translation()})}}},{key:"render",value:function render(){return ReactCompile(["div",{id:"translation_text_container",style:{direction:crowdin.editor.source_language.text_direction}},this.translationHeaderTpl(),["div.editor-current-translation-source",["div.selectable editor-source-container",this.props.translation.text===""?this.emptyStringMsg():null,this.singularSourcePhrase(),this.pluralsSourcePhrase()],["div.context_separator",["a#action_extended_info.toggle",{href:"javascript:void(0)",tabIndex:"-1"},_l("editor.context")],this.editContextBtn()],this.props.translation.id&&crowdin.editor.target_language?this.contextTpl():null]])}},{key:"hasContext",value:function hasContext(){return this.props.translation.context||crowdin.editor.isAllFilesSelected()||crowdin.editor.file.node_type!=crowdin.editor.file_nodes["file"]||this.props.translation.screenshots&&this.props.translation.screenshots.length>0}},{key:"translationHeaderTpl",value:function translationHeaderTpl(){return["div.clearfix editor-buttons-simple",["div.btn-toolbar no-margin pull-right",this.translationMarkersTpl(),[CircularLoader,{id:"string-loader",className:"string-loader ".concat(this.state.showLoader?"":"hidden"," pull-left"),maskHeight:33,maskWidth:33,iconHeight:24,iconWidth:24,onDark:crowdin.user.settings.editor_color_theme==="dark"}],!IS_MOBILE?["button.btn btn-icon",{id:"prev_translation",tabIndex:-1},["i.static-icon-back"]]:null,!IS_MOBILE?["button.btn btn-icon",{id:"next_translation",tabIndex:-1},["i.static-icon-next"]]:null,crowdin.editor.jipt_mode?["button.btn btn-icon pane-toggler pane-toggler-right",{tabIndex:"-1"},["i.static-icon-pane-opened-right"]]:null,["div.btn-group pull-right",["button#string-options-link.btn btn-icon dropdown-toggle",{"data-toggle":"dropdown",tabIndex:"-1"},["i.static-icon-dots-v"]],this.props.translation.id&&!IS_MOBILE?[StringMenuView,{translation:this.props.translation}]:null]],["div.suggestions_separator pull-left",{style:{paddingLeft:0}},_l("editor.textForTranslations")]]}},{key:"translationMarkersTpl",value:function translationMarkersTpl(){var statusTexts={};statusTexts[STEP_TODO]=_l("editor.toDo");statusTexts[STEP_DONE]=_l("editor.done");var stepStatus=this.props.translation.step_status;var hiddenLabel=this.props.translation.hidden?["span.label label-info",{style:{verticalAlign:"middle"}},_l("generic.hidden")]:null;var statusLabel=stepStatus&&!this.props.translation.hidden?["span.label "+(stepStatus===STEP_DONE?"label-success":"label-info"),{style:{verticalAlign:"middle"}},statusTexts[stepStatus]]:null;var commentsLabel=crowdin.editor.jipt_mode&&this.props.messages_count?["span.label label-info",{style:{verticalAlign:"middle"}},_l("generic.commentsCount",{commentsCount:this.props.messages_count})]:null;var duplicateLabel=+this.props.translation.duplicate_of?["span.label label-info",{style:{verticalAlign:"middle"},title:_l("generic.duplicateLabelTitle")},_l("generic.duplicate")]:null;return["div.pull-left",{style:{margin:"6px 10px"}},hiddenLabel,statusLabel,duplicateLabel,commentsLabel]}},{key:"contextTpl",value:function contextTpl(){var isContextVisible=crowdin.user.settings.translation_context_visibility;var showFileInfo=(crowdin.editor.isAllFilesSelected()||crowdin.editor.file.node_type!=crowdin.editor.file_nodes["file"])&&!IS_STRINGS_BASED_PROJECT;return["div.context "+(isContextVisible?"":"hide"),["div.selectable text-hide"," "],["div#source_context_wrapper.selectable",["div#source_context_container",this.phraseContext(),this.screenshotsThumbnail()],showFileInfo?this.currentFileLink():null,this.phraseLabels()]]}},{key:"editContextBtn",value:function editContextBtn(){if(!crowdin.user.settings.translation_context_visibility){return null}var attributes={style:{marginLeft:"30px"},href:"javascript:void(0)",tabIndex:"-1"};if(crowdin.user.can_edit_context){return["a#action_edit_context",attributes,_l("generic.edit")]}else{return["a#action_request_context",attributes,_l("editor.contextRequest")]}}},{key:"currentFileLink",value:function currentFileLink(){var attributes={"data-id":this.props.translation.file_id,href:crowdin.helpers.translation.getFileUrl(),target:crowdin.editor.jipt_mode?"_blank":"",title:_l("editor.translateFile2D",{file:this.props.translation.file_path})};return["div.current-file-name",_l("generic.file2D")+" ",["a.link-muted",attributes,this.props.translation.file_name]]}},{key:"emptyStringMsg",value:function emptyStringMsg(){return["div#source_empty_container",["span.empty-translation",_l("editor.emptyStringS")]]}},{key:"singularSourcePhrase",value:function singularSourcePhrase(){var singular_label=null,translation=this.props.translation,text=crowdin.helpers.translation.prepareText(translation,false);if(translation.has_plurals&&crowdin.editor.source_language.plurals>1){singular_label=["small.source-singular-form-name",crowdin.editor.source_language.plural_names[1]]}return["div#source_phrase_container",{lang:crowdin.editor.source_language.generic_code},singular_label,["div.singular",{innerHTML:text}]]}},{key:"pluralsSourcePhrase",value:function pluralsSourcePhrase(){if(this.props.translation.has_plurals&&crowdin.editor.source_language.plurals>1){var items=[],translation=this.props.translation,labels=crowdin.editor.source_language.plural_names;for(var i in translation.plurals){var plural_text=translation.plurals[i];var translationObj=_objectSpread({},this.props.translation);translationObj.text=plural_text;var plural_html=crowdin.helpers.translation.prepareText(translationObj,true);items.push(["small.source-plural-form-name",{key:"lbl"+i},labels[i]?labels[i]:""]);items.push(["div.plurals",{"data-plural-id":i,key:"plr"+i,innerHTML:plural_html}])}return["div#source_plural_container",{lang:crowdin.editor.source_language.generic_code},items]}}},{key:"phraseContext",value:function phraseContext(){if(this.props.translation.context){return["div",{title:_l("editor.doNotTranslateThisText"),innerHTML:crowdin.helpers.translation.prepareContext(this.props.translation.context)}]}else{return["div",_l("editor.emptyContextMessage")]}}},{key:"screenshotsThumbnail",value:function screenshotsThumbnail(){if(this.props.translation.screenshots&&this.props.translation.screenshots.length>0){var self=this;var dpx=window.devicePixelRatio||1;return["div.context-screenshots",this.props.translation.screenshots.map((function(item){return["img.string-screenshot",{src:dpx==1?item.url:item.url2x,alt:item.name,key:"ss"+item.id,id:"string-screenshot-"+item.id,onClick:self.showScreenshot}]}))]}}},{key:"phraseLabels",value:function phraseLabels(){if(this.props.translation.labels&&this.props.translation.labels.length>0){var labels=["div.context-labels"];this.props.translation.labels.map((function(label){labels.push(["span.label label-disabled",{style:{verticalAlign:"middle"}},label.title])}));return labels}}},{key:"showScreenshot",value:function showScreenshot(event){crowdin.translation.show_screenshot(event.target);event.preventDefault()}},{key:"rebindPlugins",value:function rebindPlugins(){crowdin.plugins.crowdins_context.rebind_action_button();crowdin.plugins.crowdins_context_editor.rebind_action_button();crowdin.plugins.crowdins_context_request.rebind_action_button()}}]);return TranslationTextView}(React.Component);