"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_alignment_helper=function(_CrowdinComponent){_inherits(crowdin_alignment_helper,_CrowdinComponent);var _super=_createSuper(crowdin_alignment_helper);function crowdin_alignment_helper(){var _this;_classCallCheck(this,crowdin_alignment_helper);_this=_super.call(this);_this.storage=new storage;_this.masked_alignments={};_this.maskBuilder={hash:getRandomHash(7),leftPart:function leftPart(){return";t_".concat(this.hash,"_a;")},rightPart:function rightPart(){return";a_".concat(this.hash,"_t;")},getMask:function getMask(stringHash){return"".concat(this.leftPart()).concat(stringHash).concat(this.rightPart())}};return _this}_createClass(crowdin_alignment_helper,[{key:"bind",value:function bind(){$(document).on("hover",".term_item .align_item[title]",(function(e){var $this=$(this);if(e.type==="mouseenter"){var title=$this.attr("title");$this.data("title",title);$this.attr("title","");$("body > .ui-tooltip > .ui-tooltip-content").append('<div class="appended-alignment s-margin-top">'+title+"</div>")}else{$this.attr("title",$this.data("title"));$("body > .ui-tooltip .appended-alignment").remove()}}))}},{key:"get",value:function get(translationId){return this.storage.get(translationId)}},{key:"set",value:function set(translationId,alignment){return this.storage.set(translationId,alignment)}},{key:"mask_alignment",value:function mask_alignment(text){var _this2=this;var re=/<span\sclass="align_item"(?:\s+[\w-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^"'>\s]+))?)*>.+?<\/span>/g;return text.replace(re,(function(match){var mask=_this2.generateMask();_this2.masked_alignments[mask]=match;return mask}))}},{key:"unmask_alignment",value:function unmask_alignment(text){for(var mask in this.masked_alignments){text=str_replace(mask,this.masked_alignments[mask],text)}return text}},{key:"generateMask",value:function generateMask(){return this.maskBuilder.getMask(getRandomHash(7))}},{key:"parseAlignments",value:function parseAlignments(text,alignments){this.masked_alignments=[];var lights={};var words=Object.keys(alignments).sort((function(a,b){return b.length-a.length}));for(var i=0;i<words.length;i++){var wordAlignments=$.extend([],alignments[words[i]]);wordAlignments.sort((function(a,b){return b.source_word.length-a.source_word.length}));var alignmentPairs=[];for(var j=0;j<wordAlignments.length;j++){alignmentPairs.push(htmlspecialchars(wordAlignments[j].source_word+" → "+wordAlignments[j].target_word)+" <span class='badge'>"+wordAlignments[j].match+"</span>")}var mask=this.generateMask();lights[mask]=sprintf('<span class="align_item" selector="#crowdin-editor-wrapper" title="%s">%s</span>',"<div>"+_l("editor.previouslyTranslatedAs2D")+"</div>"+"<div>"+alignmentPairs.join("</div><div>")+"</div>",words[i]);var startAt=0,wordLength=words[i].length;while((startAt=text.indexOf(words[i],startAt))!==-1){if(crowdin.helpers.translation.is_whole_word(text,startAt,wordLength)){text=text.substr(0,startAt)+mask+text.substr(startAt+wordLength,text.length);startAt+=mask.length}else{startAt+=wordLength}}}for(var _mask in lights){text=text.replace(new RegExp(_mask,"g"),lights[_mask])}return text}},{key:"parseAlignmentsOnMaskedTerms",value:function parseAlignmentsOnMaskedTerms(alignments){if(!crowdin.glossary||$.isEmptyObject(crowdin.glossary.masked_terms)){return}for(var mask in crowdin.glossary.masked_terms){var termContent=crowdin.glossary.getMaskedTermContent(crowdin.glossary.masked_terms[mask]);crowdin.glossary.masked_terms[mask]=crowdin.glossary.replaceMaskedTermContent(crowdin.glossary.masked_terms[mask],this.parseAlignments(termContent,alignments))}}},{key:"load",value:function load(){var _this3=this;var translationIds=crowdin.editor.modeTranslate()?[crowdin.translation.translation_id]:crowdin.phrases.get_translation_ids();if(IS_MOBILE){return}if(translationIds.length===0){return}return crowdin.ajax.getData("/translation/alignments",{project_id:crowdin.editor.project.id,target_language_id:crowdin.editor.target_language.id,translation_ids:translationIds},(function(data){if(data.alignments){for(var translationId in data.alignments){_this3.set(translationId,data.alignments[translationId])}}}))}}]);return crowdin_alignment_helper}(CrowdinComponent);