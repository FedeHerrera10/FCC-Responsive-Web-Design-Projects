"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var FileMenuTab=function(_React$Component){_inherits(FileMenuTab,_React$Component);var _super=_createSuper(FileMenuTab);function FileMenuTab(props){var _this;_classCallCheck(this,FileMenuTab);_this=_super.call(this,props);_this.availableItems=[];_this.openFilePreview=_this.openFilePreview.bind(_assertThisInitialized(_this));_this.state={recentFilesIndexes:[]};_this.onRecentFilesAppear=_this.onRecentFilesAppear.bind(_assertThisInitialized(_this));return _this}_createClass(FileMenuTab,[{key:"componentDidMount",value:function componentDidMount(){this.list.tabIndex=0;this.list.focus()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!prevProps.inFocus&&this.props.inFocus){this.list.tabIndex=0;this.list.focus()}}},{key:"onRecentFilesAppear",value:function onRecentFilesAppear(status,recentFilesIndexes){if(!_.isEqual(_.sortBy(recentFilesIndexes),_.sortBy(this.state.recentFilesIndexes))){this.setState({recentFilesIndexes:recentFilesIndexes})}}},{key:"openFilePreview",value:function openFilePreview(e,isSourceFile){e.preventDefault();crowdin.helpers.file_preview.openFilePreview(isSourceFile);e&&this.props.handleCloseMenu()}},{key:"getFileTpl",value:function getFileTpl(){var file_type="";var file_name="";var node_type="";if(crowdin.editor.file){if(crowdin.editor.file.node_type!==""){node_type=+crowdin.editor.file.node_type}switch(node_type){case crowdin.editor.file_nodes.file:file_type="file_"+crowdin.editor.file.type;break;case crowdin.editor.file_nodes.branch:file_type="file_folder file_branch";break;case crowdin.editor.file_nodes.directory:file_type="file_folder";break}file_name=crowdin.editor.isAllFilesSelected()?_l("editor.allStrings"):crowdin.editor.file.name}return["div.text-overflow",{key:"crowdin-editor-file",style:{padding:"7px 5px",fontWeight:"500"}},crowdin.editor.isAllFilesSelected()?null:["span.file_type "+file_type],["span.file-name",file_name]]}},{key:"renderHotkeyLabel",value:function renderHotkeyLabel(key){var getHotkeyLabel=crowdin.hotkeys.getLabel;return!IS_MOBILE&&key?["span.hotkey pull-right",getHotkeyLabel(key)]:null}},{key:"renderEditorDownloadBtn",value:function renderEditorDownloadBtn(){var _this2=this;var DOWNLOAD_KEY=crowdin.hotkeys.DOWNLOAD_KEY;var disabledTitle=crowdin.editor.isAllFilesSelected()?_l("editorMenu.thisOptionIsNotAvailable"):_l("editorMenu.notAllowedForThisFile");var downloadTitle="";if(crowdin.user.may_download){if(!(crowdin.editor.file&&crowdin.editor.file.export_ready)){downloadTitle+=disabledTitle}}else{downloadTitle+=_l("editor.askManagerToEnableDownloads")}return["a",{id:"editor_download_button",href:"#",title:downloadTitle,tabIndex:-1,onClick:function onClick(e){e.preventDefault();if(!(crowdin.user.may_download&&crowdin.editor.file&&crowdin.editor.file.export_ready)){return}var _title_placeholders={language:crowdin.editor.target_language.name,file:crowdin.editor.file.name},_title=crowdin.editor.file.upload_ready?_l("editorMenu.getLanguageVersionOfFileOffline",_title_placeholders):_l("editorMenu.getLanguageVersionOfFile",_title_placeholders);prepare_download_file_dialog(_title);_this2.props.handleCloseMenu()}},["span",_l("generic.download")],this.renderHotkeyLabel(DOWNLOAD_KEY)]}},{key:"renderEditorDownloadXliffBtn",value:function renderEditorDownloadXliffBtn(){var _this3=this;var DOWNLOAD_XLIFF_KEY=crowdin.hotkeys.DOWNLOAD_XLIFF_KEY;var downloadXliffTitle="";if(!crowdin.user.may_download){downloadXliffTitle+=_l("editor.askManagerToEnableDownloads")}return["a",{id:"editor_download_in_xliff_button",href:"#",title:downloadXliffTitle,tabIndex:-1,onClick:function onClick(e){e.preventDefault();if(!crowdin.user.may_download){return}var _title_placeholders={language:crowdin.editor.target_language.name,file:crowdin.editor.file.name?crowdin.editor.file.name:_l("editorMenu.allFilesL")},_title=crowdin.editor.file.upload_ready?_l("editorMenu.getLanguageXliffVersionOfFileOffline",_title_placeholders):_l("editorMenu.getLanguageXliffVersionOfFile",_title_placeholders);prepare_download_file_dialog(_title,true);_this3.props.handleCloseMenu()}},["span",_l("projectFiles.downloadInXLIFF")],this.renderHotkeyLabel(DOWNLOAD_XLIFF_KEY)]}},{key:"renderEditorDownloadFilteredXliffBtn",value:function renderEditorDownloadFilteredXliffBtn(){var _this4=this;return["a",{id:"editor_download_in_xliff_button_active_filter",href:"#",title:_l("projectFiles.downloadFilteredInXLIFF"),tabIndex:-1,onClick:function onClick(e){e.preventDefault();if(!crowdin.user.may_download){return}var _title_placeholders={language:crowdin.editor.target_language.name,file:crowdin.editor.file.name?crowdin.editor.file.name:_l("editorMenu.allFilesL")},_title=crowdin.editor.file.upload_ready?_l("editorMenu.getLanguageXliffVersionOfFileOffline",_title_placeholders):_l("editorMenu.getLanguageXliffVersionOfFile",_title_placeholders);var filter={filter:crowdin.user.get_texts_sort_order(),custom_filter:JSON.stringify(crowdin.user.get_custom_filter()),query:crowdin.phrases.query,search_option:crowdin.phrases.search_option,workflow_step_id:crowdin.editor.workflow_step.id,workflow_step_status:crowdin.user.get_step_status_filter(),mode:crowdin.editor.mode};prepare_download_file_dialog(_title,true,filter);_this4.props.handleCloseMenu()}},_l("projectFiles.downloadFilteredInXLIFF")]}},{key:"renderUploadBtn",value:function renderUploadBtn(){var _this5=this;var UPLOAD_KEY=crowdin.hotkeys.UPLOAD_KEY;var disabledTitle=crowdin.editor.isAllFilesSelected()?_l("editorMenu.thisOptionIsNotAvailable"):_l("editorMenu.notAllowedForThisFile");var uploadTitle="";if(crowdin.user.may_download){if(!(crowdin.editor.file&&crowdin.editor.file.upload_ready)||!crowdin.editor.file.export_xliff_ready){uploadTitle+=disabledTitle}}else{uploadTitle+=_l("editor.askManagerToEnableDownloads")}return["a",{id:"editor_upload_button",href:"#",title:uploadTitle,tabIndex:-1,onClick:function onClick(e){e.preventDefault();if(!crowdin.editor.isUploadTranslationsAvailable()){return}var _action_url=sprintf("/project/%s/%s/%s/upload",crowdin.editor.project.identifier,crowdin.editor.target_language.internal_code,crowdin.editor.file.id);var _type=crowdin.editor.file.type;var _upload_all=crowdin.editor.file.id=="all";var _file_title=crowdin.editor.file.name?crowdin.editor.file.name:null;if(_upload_all||[crowdin.editor.file_nodes.directory,crowdin.editor.file_nodes.branch].indexOf(+crowdin.editor.file.node_type)!=-1||!crowdin.editor.file.upload_ready){_action_url+="?as_xliff=1";_type="xliff"}show_upload_translations_dialog(_type,_file_title,crowdin.editor.file.extension,_action_url,crowdin.editor.file.note);_this5.props.handleCloseMenu()}},["span",{innerHTML:_l("editor.uploadTranslationsD")}],this.renderHotkeyLabel(UPLOAD_KEY)]}},{key:"renderLoadStringsInProjectBtn",value:function renderLoadStringsInProjectBtn(){var _this6=this;var buttonTitle=_l("editor.showAllFileStrings");var buttonName=_l("editor.fileStrings");if(crowdin.editor.file&&crowdin.editor.file.id==="all"){buttonTitle=_l("editor.showAllProjectStrings");buttonName=_l("editor.projectStrings")}return["a",{id:"load_strings_in_project_btn",href:"#",title:buttonTitle,tabIndex:-1,onClick:function onClick(e){e.preventDefault();crowdin.editor.openTask();_this6.props.handleCloseMenu()}},buttonName]}},{key:"renderTaskHeader",value:function renderTaskHeader(){var deadline=null;var taskAssignee=null;var taskHeader=[];taskHeader.push(["div",{key:"crowdin-editor-mode-title"},["h3",_l("generic.task")]]);taskHeader.push(["div",{key:"crowdin-editor-task-title"},["ul.nav nav-list",["li.item",["a",{href:crowdin.helpers.url.getTaskDetailUrl(crowdin.editor.task.id),target:"_blank",tabIndex:-1,onClick:this.props.handleCloseMenu},["span.muted","#"+crowdin.editor.task.id+" "],["strong",crowdin.editor.task.title],["i.static-icon-small-open-in-new",{style:{margin:"1px 1px 1px 5px"}}]]]]]);if(crowdin.editor.task.assignee){taskAssignee=["p",_l("task.assignee2D")+" "+crowdin.editor.task.assignee.name]}if(crowdin.editor.task.deadline){var deadlineMoment=moment(crowdin.editor.task.deadline);deadline=["p",{key:"crowdin-editor-task-deadline"},["span",_l("task.dueDate2D")+" "],["span",deadlineMoment.isBefore(moment.now())&&{style:{color:"#A94442"}},deadlineMoment.format("MMM DD, YYYY")]]}taskHeader.push(["div",{key:"crowdin-editor-task-info",style:{padding:"10px 5px 5px"}},deadline,["p",{key:"crowdin-editor-task-language"},_l("generic.language2D")+" "+crowdin.editor.task.to_language],["p",{key:"crowdin-editor-task-type"},_l("task.type2D")+" "+getTaskType(crowdin.editor.task.type)],taskAssignee]);return taskHeader}},{key:"renderItem",value:function renderItem(item,index,selected){var _this7=this;var classNames=" item "+(item.category?"category-"+item.category+" ":"")+(selected?" selected ":"")+(item.className?" "+item.className+" ":"")+(item.disabled?" disabled":"");return!item.divider?["li",{onMouseEnter:function onMouseEnter(e){var selectedIndex=_this7.availableItems.indexOf(index)!==-1?_this7.availableItems.indexOf(index):null;_this7.props.itemOnHover(e,selectedIndex)},onMouseLeave:function onMouseLeave(e){return _this7.props.itemOnHover(e)},key:index,className:classNames},item.children]:["li.divider",{key:index}]}},{key:"initSectionDivider",value:function initSectionDivider(isDivider){return{item_available:isDivider,divider:isDivider}}},{key:"render",value:function render(){var _this8=this;var result=[];var header=[];var _crowdin$hotkeys=crowdin.hotkeys,REPLACE_KEY=_crowdin$hotkeys.REPLACE_KEY,OPEN_FILE_KEY=_crowdin$hotkeys.OPEN_FILE_KEY,ALL_STRINGS_KEY=_crowdin$hotkeys.ALL_STRINGS_KEY,SOURCE_FILE_PREVIEW_KEY=_crowdin$hotkeys.SOURCE_FILE_PREVIEW_KEY,TRANSLATED_FILE_PREVIEW_KEY=_crowdin$hotkeys.TRANSLATED_FILE_PREVIEW_KEY;var menuItems=[this.initSectionDivider(crowdin.editor.file&&!crowdin.editor.isAllFilesSelected()&&!crowdin.editor.modeAssets()&&!IS_STRINGS_BASED_PROJECT&&+crowdin.editor.file_nodes.file===+crowdin.editor.file.node_type),{item_available:crowdin.editor.file&&!crowdin.editor.isAllFilesSelected()&&!crowdin.editor.modeAssets()&&!IS_STRINGS_BASED_PROJECT&&+crowdin.editor.file_nodes.file===+crowdin.editor.file.node_type&&crowdin.user.hasManagerAccessToProject(),children:["a.file-preview-btn",{href:"#",onClick:function onClick(e){return _this8.openFilePreview(e,1)},id:"source-file-preview",title:crowdin.user.may_download?crowdin.editor.file&&crowdin.editor.file.name||"":_l("editor.askManagerToEnableDownloads")},["span",_l("editor.sourceFilePreview")],this.renderHotkeyLabel(SOURCE_FILE_PREVIEW_KEY)],disabled:!crowdin.user.may_download,category:"preview"},{item_available:crowdin.editor.file&&!crowdin.editor.isAllFilesSelected()&&!crowdin.editor.modeAssets()&&!IS_STRINGS_BASED_PROJECT&&+crowdin.editor.file_nodes.file===+crowdin.editor.file.node_type&&!crowdin.editor.modeReview(),children:["a.file-preview-btn",{href:"#",onClick:function onClick(e){return _this8.openFilePreview(e,0)},id:"translated-file-preview",title:crowdin.user.may_download?crowdin.editor.file&&crowdin.editor.file.name||"":_l("editor.askManagerToEnableDownloads")},["span",_l("editor.translatedFilePreview")],this.renderHotkeyLabel(TRANSLATED_FILE_PREVIEW_KEY)],disabled:!crowdin.user.may_download,category:"preview"},this.initSectionDivider(!crowdin.editor.modeAssets()&&!!crowdin.editor.file),{item_available:crowdin.editor.file&&!crowdin.editor.modeAssets()&&!crowdin.editor.task.id&&!IS_STRINGS_BASED_PROJECT,children:this.renderEditorDownloadBtn(),disabled:!(crowdin.user.may_download&&crowdin.editor.file&&crowdin.editor.file.export_ready),category:"download"},{item_available:crowdin.editor.file&&!crowdin.editor.modeAssets()&&!crowdin.editor.modeReview()&&crowdin.editor.file.export_xliff_ready,children:this.renderEditorDownloadXliffBtn(),disabled:!crowdin.user.may_download,category:"download"},{item_available:crowdin.editor.file&&!crowdin.editor.modeAssets()&&!crowdin.editor.modeReview(),children:this.renderEditorDownloadFilteredXliffBtn(),disabled:!crowdin.user.may_download,category:"download"},{item_available:crowdin.editor.file&&!crowdin.editor.modeAssets()&&!crowdin.editor.modeReview(),children:this.renderUploadBtn(),disabled:!crowdin.editor.isUploadTranslationsAvailable(),category:"download"},this.initSectionDivider(!IS_STRINGS_BASED_PROJECT),{item_available:!IS_STRINGS_BASED_PROJECT||IS_EXTERNAL_PROJECT,children:["a",{id:"load_all_strings_btn",href:"#",title:_l("editor.showAllSourceStrings"),tabIndex:-1,onClick:function onClick(e){crowdin.plugins.open_file&&crowdin.plugins.open_file.changeFile("all");_this8.props.handleCloseMenu();e.preventDefault()}},["span",_l("editor.allStrings")],this.renderHotkeyLabel(ALL_STRINGS_KEY)],className:crowdin.editor.file&&crowdin.editor.file.id==="all"?"checked":"",category:"open-strings"},{item_available:!IS_STRINGS_BASED_PROJECT||IS_EXTERNAL_PROJECT,children:["a",{title:_l("editor.openFileTitle"),tabIndex:-1,onClick:function onClick(e){setTimeout((function(){crowdin.plugins.open_file&&crowdin.plugins.open_file.run()}),0);_this8.props.handleCloseMenu();e.preventDefault()}},["span",{innerHTML:_l("editor.openD")}],this.renderHotkeyLabel(OPEN_FILE_KEY)],category:"open-strings"},this.initSectionDivider(!!crowdin.editor.task.id),{item_available:crowdin.editor.task.id,children:this.renderLoadStringsInProjectBtn(),category:"project-strings"},this.initSectionDivider(!crowdin.editor.modeAssets()),{item_available:!crowdin.editor.modeAssets(),children:["a",{id:"find-replace-action",href:"#",onClick:function onClick(e){e.preventDefault();crowdin.plugins.crowdin_replace_in_translations&&crowdin.plugins.crowdin_replace_in_translations.run();_this8.props.handleCloseMenu()},title:crowdin.editor.modeReview()?_l("editor.replaceInCorrections"):_l("editor.replaceInSuggestions"),tabIndex:-1},["span",{innerHTML:crowdin.editor.modeReview()?_l("editor.replaceInCorrectionsD"):_l("editor.replaceInSuggestionsD")}],this.renderHotkeyLabel(REPLACE_KEY)],category:"replace"}];if(crowdin.editor.task.id){var taskHeaderItems=this.renderTaskHeader();taskHeaderItems.forEach((function(item){header.push(item)}))}else{header.push(["div",{key:"crowdin-editor-mode-title"},["h3",_l("generic.file")]])}if(!crowdin.editor.task.id||crowdin.editor.task.id&&!crowdin.editor.isAllFilesSelected()){header.push(this.getFileTpl())}this.availableItems=[];var filteredItems=menuItems.filter((function(item){return item.item_available}));filteredItems.length>0&&filteredItems.forEach((function(item,index){!item.disabled&&item.item_available&&!item.divider&&_this8.availableItems.push(index)}));var lastOfFileItemsIndex=this.availableItems[this.availableItems.length-1];if((this.state.recentFilesIndexes||[]).length){this.availableItems=this.availableItems.concat(this.state.recentFilesIndexes);this.availableItems=this.availableItems.filter((function(item,pos){return _this8.availableItems.indexOf(item)===pos}))}filteredItems.length>0&&filteredItems.forEach((function(item,index){var selected=_this8.availableItems[_this8.props.selectedAvailableIndex]===index;result.push(_this8.renderItem(item,index,selected))}));return ReactCompile(["div.content",{ref:function ref(el){return _this8.list=el},onKeyDown:function onKeyDown(e){return _this8.props.subMenuHandleKey(e,filteredItems,_this8)}},["div.tab-header",header],["ul.nav nav-list",result],[RecentFiles,{startAfterIndex:+lastOfFileItemsIndex,selectedIndex:this.props.selectedAvailableIndex,onRecentFilesAppear:this.onRecentFilesAppear,itemOnHover:this.props.itemOnHover,availableItems:this.availableItems,handleCloseMenu:this.props.handleCloseMenu}]])}}]);return FileMenuTab}(React.Component);
