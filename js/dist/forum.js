module.exports=function(t){var r={};function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(o,i,function(r){return t[r]}.bind(null,i));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=8)}([function(t,r,e){"use strict";function o(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r}e.d(r,"a",function(){return o})},function(t,r){t.exports=flarum.core.compat["helpers/icon"]},,function(t,r){t.exports=flarum.core.compat.extend},function(t,r){t.exports=flarum.core.compat["components/TextEditor"]},function(t,r){t.exports=flarum.core.compat.Component},function(t,r){t.exports=flarum.core.compat["components/LoadingIndicator"]},,function(t,r,e){"use strict";e.r(r);var o=e(3),i=e(4),a=e.n(i),n=e(0),s=e(5),u=e.n(s),c=e(1),p=e.n(c),l=e(6),d=e.n(l),f=function(t){function r(){return t.apply(this,arguments)||this}Object(n.a)(r,t);var e=r.prototype;return e.init=function(){this.isLoading=!1,this.isSuccess=!1,this.isError=!1,document.addEventListener("paste",this.paste.bind(this))},e.view=function(){var t,r=this,e={className:"Button hasIcon imgur-upload-button",title:app.translator.trans("imgur-upload.forum.upload"),config:function(t){r.domElement=t,$(t).tooltip()}};t=this.isLoading?d.a.component({className:"Button-icon"}):this.isSuccess?p()("fas fa-check green",{className:"Button-icon"}):this.isError?p()("fas fa-times red",{className:"Button-icon"}):p()("far fa-image",{className:"Button-icon"});var o="";return this.isLoading?o=app.translator.trans("imgur-upload.forum.loading"):this.isSuccess?o=app.translator.trans("imgur-upload.forum.done"):this.isError&&(o=app.translator.trans("imgur-upload.forum.error")),""==o&&(e.className+=" Button--icon"),m("div",e,[t,m("span",{className:"Button-label"},o),m("form#imgur-upload-form",[m("input",{type:"file",accept:"image/*",onchange:this.formUpload.bind(this),disabled:this.isLoading||this.isSuccess||this.isError})])])},e.paste=function(t){if(!this.isLoading&&t.clipboardData&&t.clipboardData.items){var r=t.clipboardData.items[0];if(!r.type.startsWith("image"))return;var e=r.getAsFile();this.upload(e)}},e.formUpload=function(t){var r=$(t.target)[0].files[0];this.upload(r)},e.upload=function(t){$(this.domElement).tooltip("hide"),this.isLoading=!0,m.redraw();var r=new FormData;r.append("image",t),$.ajax({url:app.forum.attribute("imgur-upload.API-URL"),headers:{Authorization:"Client-ID "+app.forum.attribute("imgur-upload.client-id")},type:"POST",data:r,cache:!1,contentType:!1,processData:!1,success:this.success.bind(this),error:this.error.bind(this)})},e.success=function(t){var r=this;$("#imgur-upload-form input").val(""),this.isLoading=!1,this.isSuccess=!0,m.redraw();var e=t.data.link,o=e;if(t.data.width>1024){var i=o.lastIndexOf(".");o=o.slice(0,i)+"h"+o.slice(i)}var a=e.replace("https://i.imgur.com",app.forum.attribute("imgur-upload.image-URL")),n=(o.replace("https://i.imgur.com",app.forum.attribute("imgur-upload.image-URL")),"[IMG]"+a+"[/IMG]\n");this.props.textArea.insertAtCursor(n),setTimeout(function(){r.isSuccess=!1,m.redraw()},2e3)},e.error=function(t){var r=this;$("#imgur-upload-form").val(""),this.isLoading=!1,this.isError=!0,m.redraw(),console.error(t),setTimeout(function(){r.isError=!1,m.redraw()},2e3)},r}(u.a);app.initializers.add("imgur-upload",function(){Object(o.extend)(a.a.prototype,"controlItems",function(t){t.add("imgur-upload",m(f,{textArea:this}))})})}]);
//# sourceMappingURL=forum.js.map