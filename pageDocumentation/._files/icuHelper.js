"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var IcuHelper=function(_CrowdinComponent){_inherits(IcuHelper,_CrowdinComponent);var _super=_createSuper(IcuHelper);function IcuHelper(sourceString){var _this;_classCallCheck(this,IcuHelper);_this=_super.call(this);_this.pluralForms=[];_this.fixedSuggestion=null;_this.icu=null;_this.formDelimiter=" ";_this.defaultFormValue=null;_this.sourceString=sourceString;_this.initICU();_this.buildCorrectSuggestion();return _this}_createClass(IcuHelper,[{key:"initICU",value:function initICU(){this.icu=new MessageFormatLight(crowdin.editor.target_language.code)}},{key:"hasPlurals",value:function hasPlurals(){var parsed=this.icu.parse(this.sourceString);var icuElements=this.icu.getIcuElements(parsed);return icuElements.pluralFormatPattern}},{key:"buildCorrectSuggestion",value:function buildCorrectSuggestion(){if(!this.hasPlurals()){return}var sourcePlurals=this.getSourceStringPlurals();var targetPlurals=this.getTargetLanguagePluralForms();var self=this;targetPlurals.map((function(targetPlural,i){if(sourcePlurals.indexOf(targetPlural)===-1){self.addPluralForm(targetPlural,targetPlurals[i-1])}}));sourcePlurals.map((function(sourcePlural){if(targetPlurals.indexOf(sourcePlural)===-1){self.deletePluralForm(sourcePlural)}}))}},{key:"addPluralForm",value:function addPluralForm(form,after){var regex=RegExp("\\bplural,(\\s*(?:\\S+)\\s*{(?:[^}]*)})*","g");var match={};var pluralIndex=null;var hasForm=false;while(match=regex.exec(this.sourceString)){if(match[0]){match[0]=this.getPluralFormBlock(match);pluralIndex=match.index;hasForm=this.hasForm(match[0],form);if(!after){if(!hasForm){this.addFirstPluralForm(pluralIndex,form)}return}var formRegex=this.getFormRegex(after);var formMatch=formRegex.exec(match[0]);if(!formMatch){continue}this.setFormDelimiter(formMatch.input);this.setDefaultFormValue(this.getOtherFormValue(match));var insertionPos=this.getPluralEndPosition(pluralIndex+formMatch.index,this.sourceString);if(!hasForm){this.insertForm(insertionPos,form)}}}}},{key:"addFirstPluralForm",value:function addFirstPluralForm(pluralIndex,form){this.insertForm(pluralIndex+7,form)}},{key:"deletePluralForm",value:function deletePluralForm(form){var formRegex,match,pluralEndPosition,deletedPluralForm,deletedPluralPattern;while(true){formRegex=this.getFormRegex(form);match=formRegex.exec(this.sourceString);if(!match||!isNaN(form)){return}this.setFormDelimiter(match.input);pluralEndPosition=this.getPluralEndPosition(match.index,this.sourceString);deletedPluralForm=this.sourceString.substring(match.index,pluralEndPosition);deletedPluralPattern=new RegExp(this.getFormDelimiter()+"?"+escapeRegExp(deletedPluralForm));this.sourceString=this.sourceString.replace(deletedPluralPattern,"")}}},{key:"getPluralFormBlock",value:function getPluralFormBlock(match){var pluralMatchEndPosition=this.getPluralEndPosition(match.index,this.sourceString,1);return this.sourceString.substring(match.index,pluralMatchEndPosition)}},{key:"getSourceStringPlurals",value:function getSourceStringPlurals(){var parsed=this.icu.parse(this.sourceString);var icuElements=this.icu.getIcuElements(parsed);var forms=icuElements.pluralFormatPattern[Object.keys(icuElements.pluralFormatPattern)[0]];return array_unique(forms)}},{key:"insertForm",value:function insertForm(position,form){this.sourceString=this.sourceString.slice(0,position)+this.getFormDelimiter()+this.getNewPluralForm(form)+this.sourceString.slice(position)}},{key:"hasForm",value:function hasForm(pluralMatch,form){var formRegex=this.getFormRegex(form);var match=formRegex.exec(pluralMatch);return match!==null}},{key:"getPluralEndPosition",value:function getPluralEndPosition(startPosition,text,offset){var nestedLevel=0;if(!offset){offset=0}for(var p=startPosition;p<text.length;p++){if(text[p]==="{"){nestedLevel++}if(text[p]==="}"){nestedLevel--;if(nestedLevel+offset===0){return p+1}}}return startPosition}},{key:"getFormRegex",value:function getFormRegex(form){return RegExp("(?:"+form+")\\s*\\{([^}\\n]+)*\\}","g")}},{key:"getNewPluralForm",value:function getNewPluralForm(form){return form+" {"+(this.defaultFormValue?this.defaultFormValue:"")+"}"}},{key:"getFormDelimiter",value:function getFormDelimiter(){return this.formDelimiter}},{key:"getOtherFormValue",value:function getOtherFormValue(pluralMatch){var formMatch=this.getFormRegex("other").exec(pluralMatch[0]);if(formMatch){var formEndPosition=this.getPluralEndPosition(pluralMatch.index+formMatch.index,this.sourceString);var form=this.sourceString.substring(pluralMatch.index+formMatch.index,formEndPosition);return form.substring(form.indexOf("{")+1,this.getPluralEndPosition(0,form)-1)}return null}},{key:"setFormDelimiter",value:function setFormDelimiter(formsMatch){var regex=new RegExp("(?:plural,[^]*?)(\\s*)(?:zero|one|two|few|many|other|=)","g");var match=regex.exec(formsMatch);this.formDelimiter=match[1]?match[1]:" "}},{key:"setDefaultFormValue",value:function setDefaultFormValue(value){this.defaultFormValue=value}},{key:"getModifiedString",value:function getModifiedString(){return this.sourceString}},{key:"getTargetLanguagePluralForms",value:function getTargetLanguagePluralForms(){return crowdin.editor.target_language.plural_category_names}},{key:"getSkeleton",value:function getSkeleton(){return this.icu.getSkeleton(this.icu.parse(this.sourceString))}}]);return IcuHelper}(CrowdinComponent);