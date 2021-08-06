"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}));keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach((function(key){_defineProperty(target,key,source[key])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var translateFirstSlideDesc=function translateFirstSlideDesc(){return["div.onboarding-description-content-asset",["p",_l("onbording.translate.stringsRequiredTranslationDesc")],["ul.editor-statuses list-group no-margin",["li.status list-group-item clearfix",["i.translation-status untranslated_phrase pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.untranslated"))}]],["li.status list-group-item clearfix",["i.translation-status partially_translated_phrase pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.partiallyTranslated")," (").concat(_l("editor.notAllPluralAreTranslated"),")")}]],["li.status list-group-item clearfix",["i.translation-status translated_phrase pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.translated"))}]],["li.status list-group-item clearfix",["icon.translation-status partially_approved_phrase pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.partiallyApproved")," (").concat(_l("editor.notAllPluralAreApproved"),")")}]],["li.status list-group-item clearfix",["icon.translation-status crowdin_phrase_approved pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.approved"))}]],["li.status list-group-item clearfix",["i.translation-status hidden_phrase pull-left"],["p.no-margin",{innerHTML:" &ndash; ".concat(_l("generic.hidden"))}]]]]};var steps={proofread:[{title:_l("onboarding.proofread.reviewOrTranslateTitle"),description:_l("onboarding.proofread.reviewOrTranslateDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/6approve@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/6approve@2x.png")]},{title:_l("onboarding.proofread.approveMultipleTranslationsAtOnceTitle"),description:_l("onboarding.proofread.approveMultipleTranslationsAtOnceDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/9-proofread@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/9-proofread@2x.png")]},{title:_l("onboarding.proofread.switchToComfortableViewTitle"),description:_l("onboarding.proofread.switchToComfortableViewDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/3proofreading_mode@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/3proofreading_mode@2x.png")]},{title:_l("onbording.translate.friendsTitle"),description:_l("onbording.translate.friendsDesc",{kbUrl:"https://support.crowdin.com/online-editor/#proofreadingvoting-mode",chatUrl:"https://crowdin.com/contacts"})}],translate:[{title:_l("onbording.translate.stringsRequiredTranslationTitle"),description:translateFirstSlideDesc,images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/1translation_status@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/1translation_status@2x.png")]},{title:_l("onbording.translate.collaborateOnTranslationsTitle"),description:_l("onbording.translate.collaborateOnTranslationsDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/2translation_suggestions@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/2translation_suggestions@2x.png")]},{title:_l("onbording.translate.useContextTitle"),description:_l("onbording.translate.useContextDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/4context-screenshots@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/4context-screenshots@2x.png")]},{title:_l("onbording.translate.previewFilesTitle"),description:_l("onbording.translate.previewFilesDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/5preview@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/5preview@2x.png")]},{title:_l("onbording.translate.fromAnyDeviceTitle"),description:_l("onbording.translate.fromAnyDeviceDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/7device@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/7device@2x.png")]},{title:_l("onbording.translate.switchToSideBySideViewTitle"),description:_l("onbording.translate.switchToSideBySideViewDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/3proofreading_mode@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/3proofreading_mode@2x.png")]},{title:_l("onbording.translate.friendsTitle"),description:_l("onbording.translate.friendsDesc",{kbUrl:"https://support.crowdin.com/online-editor/",chatUrl:"https://crowdin.com/contacts"})}],review:[{title:_l("onboarding.review.reviewSourceTextsTitle"),description:_l("onboarding.review.reviewSourceTextsDesc"),images:["".concat(CDN,"/crowdin-editor/public/assets/onboarding/8-text-review@1x.png"),"".concat(CDN,"/crowdin-editor/public/assets/onboarding/8-text-review@2x.png")]}]};var OnBoarding=function(_React$Component){_inherits(OnBoarding,_React$Component);var _super=_createSuper(OnBoarding);function OnBoarding(props){var _this;_classCallCheck(this,OnBoarding);_this=_super.call(this,props);_this.state={additionalStyle:"",currentStepIndex:0,maxModalHeight:800,stepsLength:_this.getStepsLength(props.mode),imageLoaded:_this.initEmptyObject(),imageHasError:_this.initEmptyObject()};_this.maxModalHeaderHeight=48;_this.maxModalFooterHeight=74;_this.mainTitle=_l("onbording.howToGetStarted");_this.closeModal=_this.closeModal.bind(_assertThisInitialized(_this));_this.handleOnError=_this.handleOnError.bind(_assertThisInitialized(_this));_this.handleImageLoaded=_this.handleImageLoaded.bind(_assertThisInitialized(_this));return _this}_createClass(OnBoarding,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;this.adjustHeight();window.addEventListener("resize",(function(){_this2.adjustHeight()}))}},{key:"initEmptyObject",value:function initEmptyObject(){var tempObject={};steps[this.props.mode].forEach((function(item,index){tempObject[index]=false}));return tempObject}},{key:"getStepsLength",value:function getStepsLength(mode){return steps.hasOwnProperty(mode)&&steps[mode].length||0}},{key:"closeModal",value:function closeModal(){this.props.onCloseModal()}},{key:"setCurrentStepIndex",value:function setCurrentStepIndex(step){this.setState({currentStepIndex:step})}},{key:"handleOnError",value:function handleOnError(index){this.setState((function(prevState){return{imageHasError:_objectSpread(_objectSpread({},prevState.imageHasError),{},_defineProperty({},index,true))}}))}},{key:"isImageOk",value:function isImageOk(img){if(!img)return false;if(!img.complete){return false}if(typeof img.naturalWidth!=="undefined"&&img.naturalWidth===0){return false}return true}},{key:"handleImageLoaded",value:function handleImageLoaded(event,index){if(!this.state.imageLoaded[index]){var isLoaded=this.isImageOk(event.target);this.setState((function(prevState){return{imageLoaded:_objectSpread(_objectSpread({},prevState.imageLoaded),{},_defineProperty({},index,isLoaded))}}))}}},{key:"renderImagesContainer",value:function renderImagesContainer(images,index){var _this3=this;var _this$state=this.state,imageLoaded=_this$state.imageLoaded,imageHasError=_this$state.imageHasError;return["figure.onboarding-step ".concat(!imageLoaded[index]?"is-loading":""),["img",{src:images[0],srcset:this.makeSrcSetString(images),onLoad:function onLoad(event){return _this3.handleImageLoaded(event,index)},onError:function onError(){return _this3.handleOnError(index)}}],!imageLoaded[index]&&!imageHasError[index]?["span.loading",_l("generic.loadingD")]:null,imageHasError[index]?["span.error",_l("editor.errorLoadingData")]:null]}},{key:"renderStepDescription",value:function renderStepDescription(description){var desc;if(isString(description)){desc=Object.assign({},{innerHTML:description})}else if(isFunction(description)){desc=description()}return["div.onboarding-description",["div.onboarding-description-content",desc]]}},{key:"renderHeader",value:function renderHeader(title){return["div.onboarding-header",["div.onboarding-header-title clearfix",["div",["i.static-icon-lamp"],["span",title]],["i.static-icon-close",{onClick:this.closeModal}]]]}},{key:"renderFooter",value:function renderFooter(currentStepIndex,stepsLength){var _this4=this;var isLastStep=currentStepIndex+1===stepsLength;var onButtonHover=function onButtonHover(btnRef,action){btnRef&&action?btnRef.classList.add("ui-state-hover"):btnRef.classList.remove("ui-state-hover")};return["div.onboarding-footer clearfix",["div.onboarding-footer-counter pull-left",["span",currentStepIndex+1],["span","/"],["span",stepsLength]],["div.onboarding-footer-buttons pull-right",["button.ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only ".concat(currentStepIndex===0?" ui-button-disabled ui-state-disabled":""),{disabled:currentStepIndex===0,ref:function ref(el){return _this4.prev=el},onClick:function onClick(){return _this4.setCurrentStepIndex(currentStepIndex-1)},onMouseEnter:function onMouseEnter(){return onButtonHover(_this4.prev,true)},onMouseLeave:function onMouseLeave(){return onButtonHover(_this4.prev,false)}},_l("onboarding.prev")],["button.ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only",{ref:function ref(el){return _this4.next=el},onClick:function onClick(e){e.preventDefault();isLastStep?_this4.closeModal():_this4.setCurrentStepIndex(currentStepIndex+1)},onMouseEnter:function onMouseEnter(){return onButtonHover(_this4.next,true)},onMouseLeave:function onMouseLeave(){return onButtonHover(_this4.next,false)}},isLastStep?_l("generic.close"):_l("onboarding.next")]]]}},{key:"adjustHeight",value:function adjustHeight(){var maxModalHeight=this.state.maxModalHeight;var displayHeight=window.innerHeight;if(displayHeight<maxModalHeight-maxModalHeight*.1){this.setState({additionalStyle:"onboarding-modal--small-height",maxModalHeight:displayHeight-displayHeight*.1})}else{this.setState({additionalStyle:"",maxModalHeight:800})}}},{key:"makeSrcSetString",value:function makeSrcSetString(images){return images.map((function(item,index){return"".concat(item," ").concat(index+1,"x")})).join(", ")}},{key:"renderContent",value:function renderContent(step,index){var images=step.images,title=step.title,description=step.description;return["div.onboarding-content ".concat(this.state.currentStepIndex===index?"":"hidden"),{key:index,style:{maxHeight:this.state.maxModalHeight-this.maxModalHeaderHeight-this.maxModalFooterHeight}},this.renderStepDescription(description),images&&images.length?this.renderImagesContainer(images,index):null]}},{key:"renderContentWrapper",value:function renderContentWrapper(steps){var _this5=this;var menuItems=[];steps.forEach((function(step,index){menuItems.push(_this5.renderContent(step,index))}));return menuItems}},{key:"render",value:function render(){var _this$state2=this.state,stepsLength=_this$state2.stepsLength,additionalStyle=_this$state2.additionalStyle,maxModalHeight=_this$state2.maxModalHeight,currentStepIndex=_this$state2.currentStepIndex;var mode=this.props.mode;var menuSteps=steps[mode];var currentTitle=menuSteps[currentStepIndex].title;var resultTemplate=ReactCompile(["div.onboarding-overlay",["div.onboarding-modal ".concat(additionalStyle),{style:{maxHeight:maxModalHeight}},this.renderHeader(currentTitle),this.renderContentWrapper(menuSteps),this.renderFooter(currentStepIndex,stepsLength)]]);return ReactDOM.createPortal(resultTemplate,document.getElementById("portal"))}}]);return OnBoarding}(React.Component);
