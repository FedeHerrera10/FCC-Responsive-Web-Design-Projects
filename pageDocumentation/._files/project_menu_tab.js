"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var ProjectMenuTab=function(_React$Component){_inherits(ProjectMenuTab,_React$Component);var _super=_createSuper(ProjectMenuTab);function ProjectMenuTab(props){var _this;_classCallCheck(this,ProjectMenuTab);_this=_super.call(this,props);_this.availableItems=[];return _this}_createClass(ProjectMenuTab,[{key:"componentDidMount",value:function componentDidMount(){this.list.tabIndex=0;this.list.focus()}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(!prevProps.inFocus&&this.props.inFocus){this.list.tabIndex=0;this.list.focus()}}},{key:"renderItem",value:function renderItem(item,index,selected){var _this2=this;var classNames="item "+(selected?" selected ":"")+(item.className?" "+item.className+" ":"")+(item.disabled?" disabled":"");return!item.divider?["li",{onMouseEnter:function onMouseEnter(e){var selectedInd=_this2.availableItems.indexOf(index)>=0?_this2.availableItems.indexOf(index):null;_this2.props.itemOnHover(e,selectedInd)},onMouseLeave:function onMouseLeave(e){return _this2.props.itemOnHover(e)},key:index,className:classNames},item.children]:["li.divider",{key:index}]}},{key:"render",value:function render(){var _this3=this;var result=[];var openInNew=["i.static-icon-small-open-in-new",{style:{margin:"1px 1px 1px 5px"}}];var targetLanguageName=crowdin.editor.target_language?crowdin.editor.target_language.name:"";var menuItems=[{item_available:true,children:["a.text-overflow",{href:crowdin.editor.project.url,target:"_blank",tabIndex:-1,onClick:this.props.handleCloseMenu},_l("editor.projectHome"),openInNew]},{item_available:!IS_STRINGS_BASED_PROJECT&&!crowdin.editor.modeReview(),children:["a.text-overflow",{href:this.props.projectLanguageUrl,id:"language-translations-btn",target:"_blank",onClick:this.props.handleCloseMenu},_l("editorMenu.languageTranslations",{language:targetLanguageName}),openInNew]},{item_available:!crowdin.editor.modeReview(),children:["a.text-overflow",{href:this.props.languageActivityURL,id:"language-activity-btn",target:"_blank",onClick:this.props.handleCloseMenu},_l("editorMenu.languageActivity",{language:targetLanguageName}),openInNew]},{item_available:crowdin.user.hasManagerAccessToProject(),children:["a.text-overflow",{href:crowdin.editor.project.url+"/settings",tabIndex:-1,target:"_blank",onClick:this.props.handleCloseMenu},_l("generic.settings"),openInNew]},{item_available:true,divider:true},{item_available:true,disabled:!INIT_MANAGERS.length,className:"contact-manager",children:["a.text-overflow",{id:"editor_open_contact_manager",href:"#",tabIndex:-1,onClick:function onClick(e){e.preventDefault();crowdin.plugins.contact_manager.run();_this3.props.handleCloseMenu()}},_l("editor.contactManager")]}];this.availableItems=[];var filteredItems=menuItems.filter((function(item){return item.item_available}));filteredItems.length>0&&filteredItems.forEach((function(item,index){!item.disabled&&item.item_available&&!item.divider&&_this3.availableItems.push(index)}));filteredItems.length>0&&filteredItems.forEach((function(item,index){var selected=_this3.availableItems[_this3.props.selectedAvailableIndex]===index;result.push(_this3.renderItem(item,index,selected))}));return ReactCompile(["div.content",{ref:function ref(el){return _this3.list=el},onKeyDown:function onKeyDown(e){return _this3.props.subMenuHandleKey(e,filteredItems,_this3)}},["div.tab-header",["h3.text-overflow",crowdin.editor.project.name]],["ul.nav nav-list",result]])}}]);return ProjectMenuTab}(React.Component);
