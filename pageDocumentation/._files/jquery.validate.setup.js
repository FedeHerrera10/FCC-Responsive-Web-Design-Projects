"use strict";(function($){if($.validator){$.validator.addMethod("checkRegex",(function(value,element,params){return this.optional(element)||params.test(value)}),$.validator.messages.checkRegex);$.validator.addMethod("isSelected",(function(value,element){return this.optional(element)||value.length>0&&parseInt(value,10)!==0}),$.validator.messages.required);$.validator.addMethod("targetLanguageChecked",(function(value,element){return $(element).siblings("#target_languages").find("#target_languages_result").find("li").length>0}),_l("jqueryValidateSetup.selectAtLeastOneTargetLang"));$.validator.addMethod("alphanumerical",(function(value,element){return this.optional(element)||/^[a-zA-Z0-9-_]+$/.test(value)}),_l("editProject.pleaseUseOnlyLettersAZAndSigns",{signs:"&laquo;"+["-","_"].join("&raquo; &laquo;")+"&raquo;"}));$.validator.addMethod("notEmpty",(function(value,element){var result=value.trim();return this.optional(element)||result.length>0}),$.validator.messages.required);$.validator.addMethod("emailChecker",(function(value,element){var emailReg=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;var valid=true;var email_suggestion="";if($(element).mailcheck){$(element).mailcheck({suggested:function suggested(element,suggestion){if(suggestion.full.match(emailReg)){email_suggestion=_l("jqueryValidateSetup.didYouMeanSuggestionQ",{suggestion:'<a class="suggested-email" href="#">'+suggestion.full+"</a>"})}}})}if(!value.match(emailReg)){valid=false;$.validator.messages.emailChecker=_l("jqueryValidateSetup.invalidEmailAddress")+" "+email_suggestion}return this.optional(element)||valid}),_l("jqueryValidateSetup.invalidEmailAddress"));$.validator.addMethod("taskFiles",(function(value,element){return $(element).siblings("#task-files").find("input:checked").length>0}),_l("jqueryValidateSetup.selectAtLeastOneFile"));$.validator.addMethod("taskLanguages",(function(value,element){if(!$("#languages-block").is(":visible")){return true}var checked=$(element).siblings("#task-languages").find(".items-js-content input:checked");var words=0;checked.each((function(){words+=parseInt($(this).closest("tr").find(".tasks-lng-words span").text())}));return checked.length>0&&words>0}),_l("jqueryValidateSetup.selectLangsContainingUntranslated"));$.validator.addMethod("taskLanguageAssignees",(function(value,element){return $(element).siblings("#task-languages").find(".has-errors").length===0}),_l("jqueryValidateSetup.checkTheAssignedWords"));$.validator.addMethod("taskAssignees",(function(value,element){if(!$("#assignees-block").is(":visible")){return true}return $(element).siblings("#task-assignees").find(".has-errors").length===0}),_l("jqueryValidateSetup.checkTheAssignedWords"));var getRemoteRule=function getRemoteRule(url,data){var remoteRules={url:url,type:"post",dataFilter:function dataFilter(responseString){var response=JSON.parse(responseString),result=false;if(response.data.success){result=true}else if(response.data.msg){result=response.data.msg}return JSON.stringify(result)}};data?remoteRules.data=data:null;return remoteRules};var formRules=function formRules(rules){var formedRules={};for(var key in rules){var rule=rules[key];formedRules[rule.name]={required:true,notEmpty:true};if(rule.taskAssignees){$.extend(formedRules[rule.name],{taskAssignees:true})}if(rule.taskLanguageAssignees){$.extend(formedRules[rule.name],{taskLanguageAssignees:true})}if(rule.taskLanguages){$.extend(formedRules[rule.name],{taskLanguages:true})}if(rule.taskFiles){$.extend(formedRules[rule.name],{taskFiles:true})}if(rule.emailChecker){$.extend(formedRules[rule.name],{emailChecker:true})}if(rule.alphanumerical){$.extend(formedRules[rule.name],{alphanumerical:true})}if(rule.equalTo){$.extend(formedRules[rule.name],{equalTo:rule.equalTo})}if(rule.url){$.extend(formedRules[rule.name],{url:true})}if(rule.notEmpty){$.extend(formedRules[rule.name],{notEmpty:true})}if(rule.minlength){$.extend(formedRules[rule.name],{minlength:rule.minlength})}if(rule.maxlength){$.extend(formedRules[rule.name],{maxlength:rule.maxlength})}if(rule.checkRegex){$.extend(formedRules[rule.name],{checkRegex:rule.checkRegex})}if(rule.rangelength){$.extend(formedRules[rule.name],{rangelength:rule.rangelength})}if(rule.isSelected){$.extend(formedRules[rule.name],{isSelected:true})}if(rule.targLangChecked){$.extend(formedRules[rule.name],{targetLanguageChecked:true})}if(rule.require_from_group){$.extend(formedRules[rule.name],{require_from_group:rule.require_from_group})}if(!rule.required&&rule.required===false){formedRules[rule.name].required=false}if(rule.required){formedRules[rule.name].required=rule.required}if(!rule.notEmpty&&rule.notEmpty===false){delete formedRules[rule.name].notEmpty}if(rule.remote){formedRules[rule.name].remote=getRemoteRule(rule.remote,rule.data)}}return formedRules};$.fn.extend({crowdinValidator:function crowdinValidator(options){return this.each((function(){var rules={},general={},additional_options={};for(var key in options){switch(key){case"rules":rules=formRules(options.rules);break;default:additional_options[key]=options[key];break}}$.extend(general,{rules:rules,onkeyup:false,highlight:function highlight(element,errorClass){$(element).closest(".control-group, .form-group").addClass("error has-error")},unhighlight:function unhighlight(element,errorClass){$(element).closest(".control-group, .form-group").removeClass("error has-error").find("label.error").hide()}},additional_options);if(general.onkeyup&&general.onkeyup===true){delete general.onkeyup}$(this).validate(general)}))}})}})(jQuery);