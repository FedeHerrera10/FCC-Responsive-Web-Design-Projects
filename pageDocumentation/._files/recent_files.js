"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var RecentFiles=function(_React$Component){_inherits(RecentFiles,_React$Component);var _super=_createSuper(RecentFiles);function RecentFiles(props){var _this;_classCallCheck(this,RecentFiles);_this=_super.call(this,props);_this.availableItems=[];return _this}_createClass(RecentFiles,[{key:"renderRecentsHtml",value:function renderRecentsHtml(startAfterIndex,selectedIndex){var _this$props=this.props,itemOnHover=_this$props.itemOnHover,availableItems=_this$props.availableItems,handleCloseMenu=_this$props.handleCloseMenu,onRecentFilesAppear=_this$props.onRecentFilesAppear;var html=[];var availableIndexes=[];var itemIndex=startAfterIndex;var recentFilesData=crowdin.plugins.open_file.recent_files.get_all().reverse();var length=0;if(!crowdin.editor.file){return}var filteredItems=recentFilesData.filter((function(file){var fileExist=crowdin.plugins.open_file.files.getNode(file.id);!fileExist.id&&crowdin.plugins.open_file.recent_files.remove(+file.id);return fileExist&&+file.id!==+crowdin.editor.file.id}));filteredItems.length>0&&filteredItems.forEach((function(file,index){var recentItemIndex=startAfterIndex+index+1;var className=recentItemIndex===availableItems[selectedIndex]?"selected":"";if(length++===5){return}var fileType=+file.node_type===crowdin.editor.file_nodes.file?"file_"+file.type:"file_folder";if(+file.node_type===crowdin.editor.file_nodes.branch){fileType+=" file_branch"}html.push(["li.recent-files item category-recent-files ".concat(className," ").concat(recentItemIndex),{key:itemIndex++},["a.text-overflow",{href:"#",tabindex:-1,"data-id":file.id,onMouseEnter:function onMouseEnter(e){var selectedId=availableItems.indexOf(recentItemIndex)!==-1?availableItems.indexOf(recentItemIndex):null;itemOnHover(e,selectedId)},onMouseLeave:function onMouseLeave(e){return itemOnHover(e)},onClick:function onClick(e){e.preventDefault();crowdin.plugins.open_file.changeFile(file.id);handleCloseMenu()}},["span.file_type ".concat(fileType)],htmlspecialchars(file.name)]]);availableIndexes.push(recentItemIndex)}));html.length&&onRecentFilesAppear(true,availableIndexes);return html}},{key:"render",value:function render(){var _this$props2=this.props,startAfterIndex=_this$props2.startAfterIndex,selectedIndex=_this$props2.selectedIndex;if(crowdin.editor.task.id||IS_STRINGS_BASED_PROJECT||IS_EXTERNAL_PROJECT||!crowdin.plugins.open_file||!crowdin.plugins.open_file.files||crowdin.plugins.open_file.files.data&&!crowdin.plugins.open_file.files.data.length){return null}else{var html=this.renderRecentsHtml(startAfterIndex,selectedIndex);return ReactCompile(["ul.nav nav-list",{key:"recent-files"},html.length?["li.divider"]:null,html.length?["li.recent-files",["span.menu-group-title",_l("editor.recentlyOpened")]]:null,html])}}}]);return RecentFiles}(React.Component);
