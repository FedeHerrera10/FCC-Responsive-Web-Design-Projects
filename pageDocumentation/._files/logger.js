"use strict";var crowdin=crowdin||{};crowdin.log=new function(){return{error:function error(message,level){if(typeof Sentry!="undefined"){Sentry.captureMessage(message,level)}},setScope:function setScope(){if(typeof Sentry=="undefined"){return}Sentry.configureScope((function(scope){scope.setUser({id:(crowdin.editor.organization.domain||"crowdin")+"/"+crowdin.user.id,username:crowdin.user.login});scope.setTag("project.id",crowdin.editor.project.id);scope.setTag("project.identifier",crowdin.editor.project.identifier);scope.setTag("organization",crowdin.editor.organization.domain||"crowdin")}))}}};