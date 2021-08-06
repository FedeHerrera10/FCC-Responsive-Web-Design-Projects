"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var crowdin_phrases=function(_CrowdinComponent){_inherits(crowdin_phrases,_CrowdinComponent);var _super=_createSuper(crowdin_phrases);function crowdin_phrases(){var _this;_classCallCheck(this,crowdin_phrases);_this=_super.call(this);_this.version="basic";_this.render_list="#texts_list";_this.render_frame="#html_frame";_this.phrases=[];_this.source_doc="";_this.query="";_this.lastSearchViewVersion=null;_this.lastPreviewFileId=null;_this.markup_replacers=new storage;_this.search_result=[];_this.filter_index=0;_this.filter_disabled=false;_this.workflow_step_status=null;_this.request=0;_this.search_option=0;_this.last_file_id=0;_this.zoom_enabled=false;_this.save_filter=1;_this.update_version_editor();if(crowdin.editor.jipt_mode){return _possibleConstructorReturn(_this)}if(_this.is_version_basic()){_this.query=crowdin.helpers.url.getQueryFromUrl()}if(crowdin.editor.file&&crowdin.editor.target_language){setHistory({file_id:crowdin.editor.file.id,target_language_id:crowdin.editor.target_language.id,workflow_step_id:crowdin.editor.workflow_step.id,task_hash:crowdin.editor.task.hash,query:_this.query},"","replace")}return _this}_createClass(crowdin_phrases,[{key:"update_version_editor",value:function update_version_editor(version){this.version=version||(crowdin.editor.file&&crowdin.editor.file.html_preview?"html":"basic");crowdin.editor.layout&&crowdin.editor.layout.reloadLeftPanel()}},{key:"is_version_basic",value:function is_version_basic(){return this.version==="basic"}},{key:"refresh",value:function refresh(use_definitions){var self=this;if(!crowdin.editor.target_language){setTimeout((function(){crowdin.helpers.main_menu.showMenu(crowdin.helpers.main_menu.LANGUAGE_MENU)}),0);return}if(!crowdin.editor.file){setTimeout((function(){crowdin.plugins.open_file.run()}),0);return}if(!crowdin.editor.isValidWorkflowStep()){setTimeout((function(){crowdin.helpers.main_menu.showMenu(crowdin.helpers.main_menu.WORKFLOW_MENU)}),0);return}crowdin.strings_url_filter.apply(crowdin.user.get_texts_sort_order());if(self.is_version_basic()){var file_id=crowdin.editor.file.id;var file_was_changed=self.last_file_id!==file_id;crowdin.ajax.postData("/phrases",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,workflow_step_status:crowdin.user.get_step_status_filter(),target_language_id:crowdin.editor.target_language.id,file_id:file_id,page:crowdin.user.get_texts_page(),filter:crowdin.user.get_texts_sort_order(),custom_filter:JSON.stringify(crowdin.user.get_custom_filter()),query:self.query,request:++self.request,search_option:self.search_option,task:crowdin.editor.getTaskHash(),save_filter:self.save_filter},(function(data){if(!data.phrases){crowdin.plugins.open_file.selected_file_exist=false;crowdin.plugins.open_file.files_outdated=true;crowdin.plugins.open_file.hideClosingDialogButtons();crowdin.plugins.open_file.run();return}if(!data.phrases.length&&data.found>0){self.go_page(data.pages);return}data.page=data.page>data.pages?data.pages:data.page;if(data.page!==crowdin.user.get_texts_page()||data.request!==self.request){return}self.last_file_id=file_id;self.phrases=data.phrases;self.filter_index=data.filter;self.filter_disabled=data.filter_disabled;self.workflow_step_status=data.workflow_step_status;crowdin.user.set_texts_page(data.page);crowdin.user.set_texts_pages(data.pages);crowdin.user.set_texts_found(data.found);crowdin.user.set_texts_per_page(data.per_page);if(!data.phrases.length){jGrowl_close_all();if(file_was_changed){crowdin.translation.set_translation_id(0);crowdin.editor.invoke("clearModels",true);crowdin.translation.clear_translation()}self.render();if(data.filter_disabled&&!data.found){crowdin.notify(_l("editor.doNotExistOrDelete"))}else if(!crowdin.editor.layout.isOpened("left")){crowdin.notify(self.query?_l("editor.noMathingTranslationFound"):_l("editor.nothingToTranslateChangeOptions"))}return}crowdin.user.set_texts_index(0);if(use_definitions==="select_last"){crowdin.user.set_texts_index(data.phrases.length-1)}else if(crowdin.user.get_saved_translation()){var index=self.get_phrase_index(crowdin.user.get_saved_translation());crowdin.user.set_texts_index(index>-1?index:0)}self.render();if(crowdin.plugins.open_file){crowdin.plugins.open_file.saveOpenedNow()}}),_l("generic.loadingD"))}else{self.render(use_definitions)}}},{key:"render",value:function render(use_definitions){crowdin.editor.view.setState({data:crowdin.phrases});this.check_search_option();if(this.is_version_basic()){this.phrases.length&&this.invoke("load")}else{use_definitions==="upload_translations"?$(this.render_frame)[0].contentWindow.location.reload(true):null}$(".texts-to-translate-header, .texts-to-translate-list-wrapper",crowdin.editor.layout.panes.left)[this.is_version_basic()?"removeClass":"addClass"]("html-view")}},{key:"edit_phrase",value:function edit_phrase(translation_id,phrase){for(var i in this.phrases){if(this.phrases[i].id==translation_id){if(!phrase){this.phrases.splice(i,1)}else{$.extend(this.phrases[i],phrase)}break}}crowdin.editor.view.setState({data:crowdin.phrases})}},{key:"load_view",value:function load_view(version_mode){var is_html=version_mode==="html";this.source_doc="";this.phrases=[];this.update_version_editor(version_mode);!is_html&&crowdin.user.clear_saved_translation();this.refresh()}},{key:"get_phrases_ids",value:function get_phrases_ids(){var phrases_ids=[];var phrases_ids_next=[];var phrases_ids_prev=[];var is_basic=this.is_version_basic();if(is_basic){var all_phrases=[];var index=-1;for(var i=0;i<this.phrases.length;i++){if(+this.phrases[i].id===crowdin.translation.translation_id){index=i}all_phrases.push(+this.phrases[i].id)}if(index===-1){return[]}}else{var all_phrases=$(this.source_doc).find(".crowdin_phrase");var current_phrase=$(this.source_doc).find(".crowdin_phrase.status_select");var index=all_phrases.index(current_phrase)}for(var i in all_phrases){var closeness=i-index;if(closeness===0){continue}if(closeness<0&&Math.abs(closeness)<=crowdin.editor.preload_limit[0]||closeness>0&&closeness<=crowdin.editor.preload_limit[1]){var ids_array=index<i?phrases_ids_next:phrases_ids_prev;ids_array.push(is_basic?all_phrases[i]:all_phrases[i].id.replace("crowdin_phrase_",""));if(phrases_ids_next.length+phrases_ids_prev.length===crowdin.editor.preload_limit[0]+crowdin.editor.preload_limit[1]){break}}}phrases_ids_prev.reverse();var ids_length=phrases_ids_next.length+phrases_ids_prev.length;for(var i=0;i<ids_length;i++){phrases_ids_next[i]&&phrases_ids.push(phrases_ids_next[i]);phrases_ids_prev[i]&&phrases_ids.push(phrases_ids_prev[i])}return phrases_ids}},{key:"get_phrase_index",value:function get_phrase_index(id){for(var i=0;i<this.phrases.length;i++){if(+this.phrases[i].id===+id){return i}}return-1}},{key:"prev_translation",value:function prev_translation(){if(this.is_version_basic()){var $prev_translation_element=null;crowdin.user.prev_texts_index();if(crowdin.user.get_texts_index()<1){crowdin.user.set_texts_index(1);this.prev_page("select_last");return false}else if(crowdin.user.get_texts_index()<this.phrases.length){$prev_translation_element=$(this.render_list+" li").eq(crowdin.user.get_texts_index()-1).get(0);this.select_phrase($prev_translation_element);return $prev_translation_element.id.replace("phrase_","")}}else{var prev_index=1;if(crowdin.user.get_texts_index()>1){prev_index=crowdin.user.get_texts_index()-1}var $phrase_element=$(this.source_doc).find(".crowdin_phrase").eq(prev_index-1);if($phrase_element.length){this.select_phrase($phrase_element.get(0))}}}},{key:"next_translation",value:function next_translation(){if(this.is_version_basic()){var $next_translation_element=null;crowdin.user.next_texts_index();$next_translation_element=$("#texts_list"+" li").eq(crowdin.user.get_texts_index()-1).get(0);if(!$next_translation_element&&crowdin.user.get_texts_page()==crowdin.user.get_texts_pages()){crowdin.user.prev_texts_index();jGrowl_close_all();if(crowdin.plugins.open_file){var next_file=crowdin.plugins.open_file.getNextFile();var msg=crowdin.plugins.open_file.getNextFileMsg(next_file);crowdin.helpers.translation.inform(msg)}return false}$next_translation_element?this.select_phrase($next_translation_element):this.next_page();return $next_translation_element?$next_translation_element.id.replace("phrase_",""):false}else{var next_index,$phrase_element,msg;next_index=crowdin.user.get_texts_index()+1;$phrase_element=$(this.source_doc).find(".crowdin_phrase").eq(next_index-1);if($phrase_element.length){this.select_phrase($phrase_element.get(0))}else{jGrowl_close_all();if(crowdin.plugins.open_file){var next_file=crowdin.plugins.open_file.getNextFile();var msg=crowdin.plugins.open_file.getNextFileMsg(next_file);crowdin.helpers.translation.inform(msg)}}}}},{key:"select_phrase",value:function select_phrase(phrase_element){if(this.is_version_basic()){$("#texts_list"+" li").removeClass("status_select");$(phrase_element).addClass("status_select")}else{this.before_select_phrase();$(this.source_doc).find(".crowdin_phrase").removeClass("status_select");$(phrase_element).addClass("status_select");crowdin.user.set_texts_index($(this.source_doc).find(".crowdin_phrase").index(phrase_element)+1);this.show_selected_translation(phrase_element)}jGrowl_close_all(true);this.scroll_to_selected_translation()}},{key:"scroll_to_selected_translation",value:function scroll_to_selected_translation(selector){if(this.is_version_basic()){var offset=30;var $container=$(".texts-to-translate-list-wrapper","#phrases_content");var $elem=$("li.status_select",$container);var docViewTop=$container.scrollTop();var docViewBottom=docViewTop+$container.height();var scroll_val=0;var elemTop=$elem.position().top+docViewTop;var elemBottom=elemTop+$elem.height();if(elemBottom>docViewBottom||elemTop<docViewTop){scroll_val=elemTop<docViewTop?elemBottom+offset-$container.height():elemTop-offset;$container.stop().animate({scrollTop:scroll_val},{easing:"easeInOutCubic",duration:400})}}else{if(typeof selector==="undefined"){selector=".status_select"}var $scrollContainer=$(this.source_doc);var $renderToContainer=$(this.render_frame);var _offset=$(this.source_doc).find(selector).offset();var height=$renderToContainer.height();var width=$renderToContainer.width();var scrollTop=$scrollContainer.scrollTop();var scrollLeft=$scrollContainer.scrollLeft();if(!_offset){return}if(_offset.top-scrollTop<0||_offset.top-scrollTop>height-50||_offset.left-scrollLeft<0||_offset.left-scrollLeft>width-70){$scrollContainer.scrollTo(selector,500,{axis:"xy",offset:-80})}}}},{key:"search",value:function search(query){var self=this;if(query&&this.query===query&&!this.is_version_basic()&&this.lastSearchViewVersion===this.version&&+this.lastPreviewFileId===+crowdin.editor.file.id){this.show_search_result(true);return}this.query=query;this.lastSearchViewVersion=this.version;this.lastPreviewFileId=crowdin.editor.file.id;if(crowdin.editor.file&&crowdin.editor.target_language){setHistory({file_id:crowdin.editor.file.id,target_language_id:crowdin.editor.target_language.id,workflow_step_id:crowdin.editor.workflow_step.id,task_hash:crowdin.editor.task.hash,query:this.query},this.query.length?"#q="+urlencode(this.query):crowdin.helpers.url.buildEditorPath({options:{preserve_hash:false}}),"push")}if(self.is_version_basic()){crowdin.user.clear_saved_translation("search");crowdin.user.set_texts_page(crowdin.user.get_saved_translation_page());self.refresh()}else if(this.query.length){crowdin.ajax.getData("/phrases/search",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,file_id:crowdin.editor.file.id,query:self.query},(function(data){self.search_result=[];if(data.length){$(self.source_doc).find(".crowdin_phrase").each((function(){var identifier=this.id.replace("crowdin_phrase_","");if($.inArray(identifier,data)!==-1){self.search_result.push(identifier)}}))}self.show_search_result()}),_l("editor.searchingD"))}}},{key:"check_search_option",value:function check_search_option($element){if(!$element){$element=$("#search_phrases_options").find("a[data-option="+this.search_option+"]")}$element.closest("table").find("td").removeClass("active");$element.parent().addClass("active")}},{key:"show_search_result",value:function show_search_result(next){if(this.search_result.length==0){crowdin.notify(_l("editor.noMathingTranslationFound"));return false}var selected_id=parseInt($(this.source_doc).find(".status_select").attr("id").replace("crowdin_phrase_",""));var $next_phrase=$(this.source_doc).find("#crowdin_phrase_"+this.search_result[0]);for(var i=0;i<this.search_result.length-1;i++){if(selected_id==this.search_result[i]){$next_phrase=$(this.source_doc).find("#crowdin_phrase_"+this.search_result[next===true?i+1:i]);break}}this.select_phrase($next_phrase.get(0))}},{key:"bind_live_search",value:function bind_live_search(){var self=this;var search_timeout;$("#close-search-box").click((function(){$("#editor_search_bar").val("").focus().parent().removeClass("has-text");self.search("");return false}));$("#editor_search_bar").on("input keydown",(function(e){var value=this.value,delay=value?600:0;if(e.type==="keydown"){if(e.which===13){delay=0}else if(e.which===27){e.target.blur()}else{return}}$("#editor_search_bar").parent()[value?"addClass":"removeClass"]("has-text");clearTimeout(search_timeout);search_timeout=setTimeout((function(){self.search(value)}),delay)}))}},{key:"select_language",value:function select_language(){if(this.is_version_basic()){crowdin.user.set_texts_page(1)}this.refresh()}},{key:"mark_as_discussed",value:function mark_as_discussed(phrase_id,issue){this.edit_phrase(phrase_id,{commented:true,with_unresolved_issues:issue})}},{key:"mark_as_not_discussed",value:function mark_as_not_discussed(phrase_id){this.edit_phrase(phrase_id,{commented:false,with_unresolved_issues:false})}},{key:"mark_as_hidden",value:function mark_as_hidden(phrase_id,hidden){if(this.is_version_basic()){this.edit_phrase(phrase_id,{hidden:hidden})}else{$("#crowdin_phrase_"+phrase_id,this.source_doc)[hidden?"addClass":"removeClass"]("crowdin_phrase_hidden")}}},{key:"get_phrase_status_classname",value:function get_phrase_status_classname(status){var stepId=crowdin.editor.workflow_step.id||crowdin.user.get_workflow_proofread_step_id();var classname=this.is_version_basic()?"untranslated_phrase":"crowdin_phrase_untranslated";if(!status){return""}status.translated&&(classname=this.is_version_basic()?"translated_phrase":"crowdin_phrase_translated");status.approved[stepId]&&(classname=this.is_version_basic()?"approved_phrase":"crowdin_phrase_approved");if(this.is_version_basic()){status.partially_approved[stepId]&&(classname="partially_approved_phrase");status.partially_translated&&(classname="partially_translated_phrase")}return classname}},{key:"update_qa_issues_info",value:function update_qa_issues_info(translation_id,qa_issues){this.edit_phrase(translation_id,{qa_issues:qa_issues||{}})}},{key:"update_translation_status",value:function update_translation_status(translation_id,top_suggestion,translation_status){var self=this;if(self.is_version_basic()){this.edit_phrase(translation_id,{translation_status:translation_status})}else{this.edit_phrase(translation_id,{translation_status:translation_status,translation:top_suggestion});var classes_to_remove=["crowdin_phrase_translated","crowdin_phrase_approved","crowdin_phrase_untranslated"];var class_name=this.get_phrase_status_classname(translation_status);if(crowdin.user.settings.html_strings_highlight){$(self.source_doc).find("#crowdin_phrase_"+translation_id).removeClass(classes_to_remove.join(" ")).addClass(class_name)}if(crowdin.user.settings.html_editor_preview){self.realtime_html_preview(true,translation_id)}}}},{key:"next_page",value:function next_page(){if(crowdin.user.get_texts_page()==crowdin.user.get_texts_pages()){return false}crowdin.user.set_texts_page(crowdin.user.get_texts_page()+1);this.refresh();return true}},{key:"prev_page",value:function prev_page(use_definitions){if(crowdin.user.get_texts_page()==1){return false}crowdin.user.set_texts_page(crowdin.user.get_texts_page()-1);this.refresh(use_definitions);return true}},{key:"go_page",value:function go_page(page){page=parseInt(page);var pages=crowdin.user.get_texts_pages();if(isNaN(page)){return false}else if(page<1){page=1}else if(page>pages){page=pages}crowdin.user.set_texts_page(page);this.refresh();return true}},{key:"sort_order",value:function sort_order(value){crowdin.user.set_texts_sort_order(+value);crowdin.user.set_texts_page(1);crowdin.strings_url_filter.setFilterInitialization(false);this.refresh()}},{key:"source_file_loaded",value:function source_file_loaded(){var self=this;var $doc_body=$(self.source_doc).find("body");var text_direction=crowdin.editor.source_language.text_direction;self.source_doc=$(self.render_frame).contents().get(0);self.add_editor_css();self.add_editor_js();self.clear_source_doc();$(self.source_doc).find("html").attr("dir",text_direction);$doc_body.attr("lang",crowdin.editor.source_language.generic_code).attr("data-target-lang",crowdin.editor.target_language.generic_code);if(crowdin.editor.getBaseFileType()==="webxml"){$doc_body.addClass(text_direction+"-web-xml")}crowdin.user.set_texts_page(1);crowdin.user.set_texts_pages(1);crowdin.user.set_texts_index(0);self.load_phrases((function(data){if(!data.length){$(self.render_frame).parent().unmask();crowdin.translation.set_translation_id(0);crowdin.editor.invoke("clearModels",true);crowdin.translation.clear_translation();crowdin.plugins.open_file.selected_file_exist=false;crowdin.plugins.open_file.files_outdated=true;crowdin.plugins.open_file.run();self.render_empty_list_in_iframe();jGrowl_close_all();return false}self.render_phrases();self.render();self.after_load()}))}},{key:"add_editor_css",value:function add_editor_css(){var disableCacheArg=CDN?"":"?"+(new Date).getTime().toString();var $dom_head=$(this.source_doc).find("head"),$dom_body=$(this.source_doc).find("body");$dom_body.addClass(crowdin.editor.getBaseFileType());crowdin.editor.setColorTheme(crowdin.user.settings.editor_color_theme);$dom_head.append('<link rel="stylesheet" type="text/css" href="'+CDN+"/crowdin-editor/css/html-editor.css"+disableCacheArg+'">')}},{key:"add_script",value:function add_script(path){var disableCacheArg=CDN?"":"?"+(new Date).getTime().toString();var js=this.source_doc.createElement("script");js.setAttribute("src",CDN+path+disableCacheArg);this.source_doc.head.appendChild(js)}},{key:"add_editor_js",value:function add_editor_js(){var fileExtention=crowdin.editor.file.name.split(".").pop().toLowerCase();switch(crowdin.editor.getBaseFileType(crowdin.editor.file.type)){case"mediawiki":this.add_script("/crowdin-editor/src/lib/mediawiki/livepreview.js");this.add_script("/crowdin-editor/src/lib/mediawiki/mediawiki_preview.js");break;case"html":this.add_script("/crowdin-editor/src/lib/html/preview.js");break;case"docx":if(fileExtention=="xlsx"){this.add_script("/crowdin-editor/src/lib/xlsx/preview.js")}else{this.add_script("/crowdin-editor/src/lib/docx/preview.js")}break}}},{key:"after_load",value:function after_load(){this.disable_strings();this.bind_iframe_events();this.invoke("load");this.search(crowdin.helpers.url.getQueryFromUrl());if(crowdin.user.settings.html_strings_highlight){this.toggle_html_strings_highlight()}if(crowdin.user.settings.html_editor_preview){this.toggle_html_preview(false)}var iframe=$(this.render_frame);if(window.requestAnimationFrame){iframe.height(iframe.height()+1);window.requestAnimationFrame((function(){iframe.height("100%")}))}iframe.css("visibility","visible");if(crowdin.plugins.open_file){crowdin.plugins.open_file.saveOpenedNow()}}},{key:"clear_source_doc",value:function clear_source_doc(){$(this.source_doc).find("*[title]").each((function(){if($(this).hasClass("keep_title")===false){$(this).attr("title","")}}));$(this.source_doc).find("*[alt]").each((function(){$(this).attr("alt","")}));$(this.source_doc).find("*[placeholder]").each((function(){$(this).attr("placeholder","")}));$(this.source_doc).find("*[value]").each((function(){$(this).attr("value","")}))}},{key:"markup_replacer",value:function markup_replacer(id){id=id===undefined?crowdin.translation.translation_id:id;if(this.markup_replacers.get(id)){return this.markup_replacers.get(id)}var needEscape=false;var translation=crowdin.translation.get_translation(id);if(Object.keys(translation).length===0){needEscape=!this.is_version_basic();translation=this.phrases.find((function(translation){return+translation.id===+id}))}if(!translation){return new HtmlMarkupReplacer("")}if(crowdin.editor.check_show_placeholders(id)===false){this.markup_replacers.set(id,new HtmlMarkupReplacer(""),translation);return this.markup_replacers.get(id)}if(this.is_version_basic()){var textList=[translation.text];if(translation.plurals){for(var form in translation.plurals){var plural=translation.plurals[form];textList.push(plural)}}this.markup_replacers.set(id,new HtmlMarkupReplacer(textList.join("\n"),translation))}else{this.markup_replacers.set(id,new HtmlMarkupReplacer(needEscape?htmlspecialchars(translation.text):translation.text,translation))}return this.markup_replacers.get(id)}},{key:"show_selected_translation",value:function show_selected_translation(phrase_element){var selected_phrase_id=phrase_element.id.replace("crowdin_phrase_","");crowdin.translation.set_translation_id(selected_phrase_id).refresh()}},{key:"highlight_mw_template",value:function highlight_mw_template(selector,parent){var element=$(this.source_doc).find(selector);if(parent===true){element=element.parent()}element.addClass("highlight");setTimeout((function(){element.removeClass("highlight")}),1250)}},{key:"before_select_phrase",value:function before_select_phrase(){if(crowdin.user.settings.html_editor_preview){this.realtime_html_preview(false)}}},{key:"load_phrases",value:function load_phrases(callback,message){var self=this;var msg=message?message:_l("generic.loadingD");crowdin.ajax.getData("/phrases/load_preview",{project_id:crowdin.editor.project.id,workflow_step_id:crowdin.editor.workflow_step.id,target_language_id:crowdin.editor.target_language.id,file_id:crowdin.editor.file.id,task:crowdin.editor.getTaskHash()},(function(data){self.phrases=data;if(callback){callback(data)}}),msg)}},{key:"disable_strings",value:function disable_strings(){for(var i in this.phrases){var $phraseElement=$(this.source_doc).find("#crowdin_phrase_"+this.phrases[i].id);this.reset_string_status($phraseElement);this.disable_not_available_on_preview(this.phrases[i],$phraseElement);this.disable_external_project_string(this.phrases[i],$phraseElement);this.disable_hidden_string(this.phrases[i],$phraseElement)}}},{key:"reset_string_status",value:function reset_string_status($phraseElement){var classes_to_remove=["crowdin_phrase_translated","crowdin_phrase_approved","crowdin_phrase_untranslated","crowdin_phrase","status_select"];$phraseElement.removeClass(classes_to_remove.join(" "))}},{key:"disable_hidden_string",value:function disable_hidden_string(phrase,$phraseElement){if(parseInt(phrase.hidden)){$phraseElement.addClass("crowdin_phrase_hidden");if(phrase.hidden!=""){$phraseElement.attr("title",phrase.phrase_title)}if(!crowdin.user.has_access_to_hidden_strings){$phraseElement.removeClass("crowdin_phrase")}}}},{key:"disable_not_available_on_preview",value:function disable_not_available_on_preview(phrase,$phraseElement){$phraseElement[phrase.preview_available?"removeClass":"addClass"]("crowdin_phrase_hidden");$phraseElement[phrase.preview_available?"addClass":"removeClass"]("crowdin_phrase");var title=phrase.phrase_title;if(phrase.preview_available===false){title=crowdin.editor.task.id?_l("editor.stringNotInTask"):_l("editor.stringNotAvailableOnStep")}$phraseElement.attr("title",title)}},{key:"disable_external_project_string",value:function disable_external_project_string(phrase,$phraseElement){if(!IS_EXTERNAL_PROJECT){return false}if(!phrase.is_from_origin){$phraseElement=$(this.source_doc).find("#crowdin_phrase_"+phrase.origin_translation_id);$phraseElement.attr("id","crowdin_phrase_"+phrase.id)}else{$phraseElement.removeClass("crowdin_phrase");$phraseElement.addClass("crowdin_phrase_hidden crowdin_master_phrase")}}},{key:"render_phrases",value:function render_phrases(){if("html"!==crowdin.editor.getBaseFileType()){return}for(var i=0;i<this.phrases.length;i++){this.replace_source_string(this.phrases[i].id,this.phrases[i].text)}}},{key:"toggle_html_preview",value:function toggle_html_preview(with_phrases_load){var self=this;var preview_enabled=crowdin.user.settings.html_editor_preview;var direction=preview_enabled?crowdin.editor.target_language.text_direction:crowdin.editor.source_language.text_direction;var enable_preview=function enable_preview(data){for(var i=0;i<data.length;i++){if(data[i].translation){self.replace_source_string(data[i].id,data[i].translation)}}};var disable_preview=function disable_preview(data){for(var i=0;i<data.length;i++){self.replace_source_string(data[i].id,data[i].text)}};$(this.source_doc).find("html").attr("dir",direction);if(crowdin.editor.getBaseFileType(crowdin.editor.file.type)==="webxml"){$(this.source_doc).find("body").removeClass("rtl-web-xml ltr-web-xml").addClass(direction+"-web-xml")}if(preview_enabled){if(with_phrases_load){this.load_phrases((function(data){enable_preview(data)}),_l("editor.loadingPreview"))}else{enable_preview(this.phrases)}}else{disable_preview(this.phrases)}}},{key:"toggle_html_strings_highlight",value:function toggle_html_strings_highlight(){var self=this;var iframe=$(self.source_doc);for(var i=0;i<self.phrases.length;i++){if(!this.is_preview_available(this.phrases[i])){continue}var string_element=$("#crowdin_phrase_"+self.phrases[i].id,iframe);if(crowdin.user.settings.html_strings_highlight){string_element.addClass(self.get_phrase_status_classname(self.phrases[i].translation_status))}else{string_element.removeClass("crowdin_phrase_translated crowdin_phrase_approved crowdin_phrase_untranslated")}}}},{key:"is_preview_available",value:function is_preview_available(phrase){if(phrase.preview_available===false){return false}if(IS_EXTERNAL_PROJECT&&phrase.is_from_origin){return false}return true}},{key:"replace_source_string",value:function replace_source_string(id,text){var currentFileType=crowdin.editor.getBaseFileType();var $current_phrase=$("#crowdin_phrase_"+id,this.source_doc);if(currentFileType==="txt"){$current_phrase.text(text);return}if(currentFileType==="docx"){text=text.replace(/<x\s+id="[0-9]+"\s*\/>/gi,"\n");text=text.replace(/<\/?[gx][^>]*>/gi,"");var $nodeWithText=$current_phrase;var $children;var iterations=0;while(true){if(iterations>100){break}$children=$nodeWithText.contents();if($children.length!==1||$children[0].nodeType===3){break}$nodeWithText=$($children[0]);iterations++}$nodeWithText.text(text);return}text=sanitizer.tags(text,["meta","base","iframe","object","embed","script","style","isindex","applet","form"]);text=sanitizer.attributes(text);if(this.needs_additional_escape()){var new_html=text;if($current_phrase.children().length){var old_html=$current_phrase.html();if(old_html.match(/^<(b|i|s|em|small|strong|var|del|ins)>[^<\/\1>]+<\/\1>$/i)){new_html=old_html.replace(/^(<([a-z]+)>).+(?:[\s\S]+)?(<\/\2>)$/i,(function($match,$1,$2,$3){return $1+text+$3}))}}if($current_phrase.children().length===1&&$current_phrase.children()[0].tagName==="IMG"&&$current_phrase.children()[0].className.indexOf("crowdin-html-preview-img")!==-1){$($current_phrase.children()[0]).attr("src",new_html);return}$current_phrase.html(new_html)}else{if(currentFileType==="dita"){text=text.replace(/<\/?[gx][^>]*>/gi,"")}$current_phrase.text(text)}}},{key:"realtime_html_preview",value:function realtime_html_preview(input_suggestion,translation_id){var self=this,source_string="",suggestion="",top_suggestion="",current_suggestion="";if(!translation_id){translation_id=crowdin.translation.translation_id}if(input_suggestion&&translation_id===crowdin.translation.translation_id){current_suggestion=this.markup_replacer().unmask(crowdin.translation.getValue())}for(var i=0;i<self.phrases.length;i++){if(self.phrases[i].id==translation_id){source_string=self.phrases[i].text;top_suggestion=self.phrases[i].translation;break}}suggestion=input_suggestion&&current_suggestion?current_suggestion:top_suggestion;self.replace_source_string(translation_id,suggestion?suggestion:source_string)}},{key:"render_empty_list_in_iframe",value:function render_empty_list_in_iframe(){$(this.render_frame).contents().find("body").html("<div style=\"text-align: center; margin-top: 40%; position: relative; font-family: 'Open Sans', sans-serif; font-size: 13px; line-height: 18px\">"+"<p>"+_l("editor.noStringsToDisplayChangeFilter")+"</p>"+(!crowdin.editor.isAllFilesSelected()&&!IS_STRINGS_BASED_PROJECT?"<p>"+'<a class="open_file_dialog" target="_top" href="/project/'+crowdin.editor.project.identifier+"/"+crowdin.editor.target_language.code+'">'+_l("editor.selectAnotherFile")+"</a>"+"</p>":""),"</div>")}},{key:"bind_events",value:function bind_events(){var self=this;self.bind_live_search();$(document).on(IS_MOBILE?"click":"mousedown",self.render_list+" li",(function(e){crowdin.helpers.users.closeUserPopover();e.preventDefault();self.select_phrase(this);crowdin.user.set_texts_index($(self.render_list+" li").index(this)+1);crowdin.translation.set_translation_id(this.id.replace("phrase_","")).refresh();if(crowdin.editor.layout.panes.left.hasClass("visible sliding")){crowdin.editor.layout.toggle("left")}}));$(document).on("click",self.render_list+" li a",(function(event){event.preventDefault()}));$(document).on("click",".open_file_dialog",(function(event){if(crowdin.plugins.open_file){event.preventDefault();crowdin.plugins.open_file.run()}}));$(document).on("click","#disable-filter",(function(event){crowdin.user.set_texts_sort_order(0);self.refresh();event.preventDefault()}));$("#left_panel").on(IS_MOBILE?"click":"mousedown","#search_phrases_options a[data-option]",(function(e){if(!$(this).parent().hasClass("active")){self.check_search_option($(this));self.search_option=parseInt($(this).data("option"));self.search(self.query)}e.preventDefault()}))}},{key:"bind_iframe_events",value:function bind_iframe_events(){var self=this;var iframe=$(self.source_doc);iframe.off("click");iframe.on("click",(function(){$("#editor-menu > li").removeClass("open")}));iframe.on("click",".open_file_dialog",(function(e){if(crowdin.plugins.open_file){e.preventDefault();crowdin.plugins.open_file.run()}}));iframe.on("click",".crowdin_phrase",(function(){self.select_phrase(this);$("#editor-menu > li").removeClass("open");if(crowdin.editor.layout.panes.left.hasClass("visible sliding")){crowdin.editor.layout.toggle("left")}return false}));iframe.on("click","a",(function(){if($(this).parents(".crowdin_phrase").length===0){$("#editor-menu > li").removeClass("open");return false}}));iframe.on("click","*[type=submit]",(function(){$("#editor-menu > li").removeClass("open");return false}));iframe.on("click","span.mw_template",(function(){var selector="#"+$(this).attr("id")+"_parameters";self.highlight_mw_template(selector,true);self.scroll_to_selected_translation(selector);return false}));iframe.on("click","span.mw_template_parameters",(function(){var selector="#"+$(this).attr("id").replace("_parameters","");self.highlight_mw_template(selector,false);self.scroll_to_selected_translation(selector);return false}));iframe.on("click",".hidden_phrases_toggler",(function(){$(this).toggleClass("shown");$(this).closest(".hidden_texts_block").find(".hidden_phrases_content").toggle();return false}))}},{key:"needs_additional_escape",value:function needs_additional_escape(message){return $.inArray(crowdin.editor.getBaseFileType(),crowdin.editor.needs_additional_escape_filetypes)!==-1}},{key:"addMisspelledWord",value:function addMisspelledWord(word,suggestion_id){crowdin.ajax.postData("/dictionary/add",{project_id:crowdin.editor.project.id,suggestion_id:suggestion_id,target_language_id:crowdin.editor.target_language.id,word:word},(function(){crowdin.models.phrases.refresh(crowdin.translation.translation_id,null,true)}))}},{key:"getQaIssues",value:function getQaIssues(){var phraseIndex=this.get_phrase_index(+crowdin.translation.translation_id);if(!this.phrases[phraseIndex]||!this.phrases[phraseIndex].qa_issues){return{}}var qaIssues=this.phrases[phraseIndex].qa_issues[crowdin.translation.plural_id];return qaIssues||{}}}]);return crowdin_phrases}(CrowdinComponent);