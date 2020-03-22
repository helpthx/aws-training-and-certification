/** Copyright 2020 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define([],function(){var a=function(b,c,d){this.xhr=b,this.textStatus=c,this.errorThrown=d,this.message=this.xhr?this.xhr.responseJSON:null,this.getDisplayErrorMessages=function(b){var c,d=[];return this.message&&this.message.ExceptionMessage?d.push(this.message.ExceptionMessage):this.hasStatusCode(400)?d.push(this.errorThrown):this.hasStatusCode(403)?(c=this.xhr.getResponseHeader("ErrorMessage"))&&d.push(c):this.hasStatusCode(404)&&d.push(b.getString("UI_Forbidden_ErrorMessage")),0===d.length&&a.errorThrown&&(d=a.errorThrown.split("/r/n")),d},this.hasNotFoundStatusCode=function(){return this.hasStatusCode(404)},this.hasNotForbiddenStatusCode=function(){return this.hasStatusCode(403)},this.hasStatusCode=function(a){return this.xhr&&Number(this.xhr.status)===Number(a)}};return a});