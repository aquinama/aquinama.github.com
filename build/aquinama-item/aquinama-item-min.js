YUI.add("aquinama-item",function(C){C.namespace("AquiNaMa");var B="contentBox",A=C.Base.create("aquinama-item",C.Widget,[C.WidgetChild],{CONTENT_TEMPLATE:'<li class="yui3-aquinama-item">'+'<div class="yui3-aquinama-item-title">'+'<div class="yui3-aquinama-item-control">'+'<img src="assets/images/interested.png" title="Me Interesa" class="yui3-aquinama-item-interested"/>'+'<img src="assets/images/no_interested.png" title="No Me Interesa" class="yui3-aquinama-item-no-interested"/>'+'<span class="yui3-aquinama-item-date"></span>'+'<div class="yui3-aquinama-clear"></div>'+"</div>"+'<div class="yui3-aquinama-item-data">'+'<span class="yui3-aquinama-item-price"><span></span> cuc</span>'+'<span class="yui3-aquinama-item-desc"></span>'+'<div class="yui3-aquinama-clear"></div>'+"</div>"+"</div>"+'<div class="yui3-aquinama-item-container">'+'<div class="yui3-aquinama-item-container-a">'+'<img class="yui3-aquinama-item-load" src="assets/images/ajax-loader-orange.gif"/>'+'<img class="yui3-aquinama-item-close yui3-aquinama-hidden" src="assets/images/close_item.png" title="Cerrar Descripci&oacute;n"/>'+'<p class="yui3-aquinama-item-date-desc"></p>'+'<p class="yui3-aquinama-item-description"></p>'+'<div class="yui3-aquinama-item-link"></br><a href="#" target="_blank">'+"Ir a</a></div>"+'<div class="yui3-aquinama-item-contact"></div>'+'<div class="yui3-aquinama-clear"></div>'+"</div>"+"</div>"+"</li>",initializer:function(){var D=this;D._publishEvents();},renderUI:function(){var D=this,E=D.get(B);},bindUI:function(){var D=this,F=D.get("emodel"),E=D.get(B);D.after("emodelChange",D.syncUI);E.one(".yui3-aquinama-item-title").on("click",D._handlerClickEvent,D);E.on("dblclick",D._handlerCloseEvent,D);E.one(".yui3-aquinama-item-close").on("click",D._handlerCloseEvent,D);E.one("img.yui3-aquinama-item-interested").on("click",D._handlerInterestEvent,D);E.one("img.yui3-aquinama-item-no-interested").on("click",D._handlerNoInterestEvent,D);},syncUI:function(){var D=this,E=D.get(B),G=D.get("boundingBox"),F=D.get("emodel");if(F.get("tittle")){D._syncTitle();G.removeClass("yui3-aquinama-hidden");if(F.get("load")){D._syncContent();if(F.get("open")){D._showContent();}else{D._hideContent();}}else{D._synnClearContent();D._syncClearTitle();}}else{G.addClass("yui3-aquinama-hidden");}},_publishEvents:function(){var D=this;D.publish("interest",{emitFacade:true,broadcast:1});D.publish("no-interest",{emitFacade:true,broadcast:1});},_handlerInterestEvent:function(G){var D=this,E=D.get(B),F=D.get("emodel");D.fire("aquinama-item:interest",{model:F});G.stopPropagation();E.one(".yui3-aquinama-item-interested").addClass("yui3-aquinama-hidden");E.one(".yui3-aquinama-item-no-interested").removeClass("yui3-aquinama-hidden");F.set("interest",true);D._loadContent();},_handlerNoInterestEvent:function(G){var D=this,E=D.get(B),F=D.get("emodel");D.fire("aquinama-item:no-interest",{model:F});G.stopPropagation();if(D.get("parent").get("emodellist").get("name")==="interest"){E.setStyle("overflow","hidden");E.transition({easing:"ease-out",duration:0.25,height:0,on:{end:function(){D.get("parent").remove(D.get("index"));}}});}E.one(".yui3-aquinama-item-no-interested").addClass("yui3-aquinama-hidden");E.one(".yui3-aquinama-item-interested").removeClass("yui3-aquinama-hidden");F.set("interest",false);D.set("model",F);},_handlerClickEvent:function(D){this._loadContent();},_handlerCloseEvent:function(G){var D=this,E=D.get(B),F=D.get("emodel");F.set("open",false);D._hideContent();D.set("model",F);},_handlerLoadContent:function(){var D=this;D._syncContent();D.get("emodel").detach("loadChange");D._showContent();},_syncTitle:function(H){var D=this,G=D.get("emodel"),E=D.get(B),F=C.DataType.Date.convert(G.get("date"));E.one(".yui3-aquinama-item-price span").set("innerHTML",G.get("price"));E.one(".yui3-aquinama-item-desc").set("innerHTML",G.get("highlight"));E.one(".yui3-aquinama-item-date").set("innerHTML",F);if(G.get("interest")){E.one(".yui3-aquinama-item-interested").addClass("yui3-aquinama-hidden");E.one(".yui3-aquinama-item-no-interested").removeClass("yui3-aquinama-hidden");}else{E.one(".yui3-aquinama-item-interested").removeClass("yui3-aquinama-hidden");E.one(".yui3-aquinama-item-no-interested").addClass("yui3-aquinama-hidden");}},_syncContent:function(){var F=this,G=F.get(B),E=G.one(".yui3-aquinama-item-container-a"),I=F.get("emodel");E.one(".yui3-aquinama-item-load").setStyle("display","none");E.one(".yui3-aquinama-item-date-desc").set("innerHTML",I.get("dateDesc"));E.one(".yui3-aquinama-item-description").set("innerHTML",I.get("desc"));E.one(".yui3-aquinama-item-link a").setAttribute("href",I.get("href"));if(I.get("contact")){var H=G.one(".yui3-aquinama-item-contact"),D=I.get("contact");H.empty();if(D.name&&D.name!="-"){H.appendChild("<p><b>Nombre: </b>"+D.name+"</p>");}if(D.phone&&D.phone!="-"){H.appendChild("<p><b>Tel&eacute;fono: </b>"+D.phone+"</p>");}if(D.email&&D.email!="-"){H.appendChild("<p><b>Correo: </b>"+D.email+"</p>");}if(D.cell&&D.cell!="-"){H.appendChild("<p><b>Celular: </b>"+D.cell+"</p>");}if(D.site&&D.site!="-"){H.appendChild("<p><b>Sitio Web: </b>"+D.site+"</p>");}if(D.address&&D.address!="-"){H.appendChild("<p><b>Direcci&oacute;n: </b>"+D.address+"</p>");}}},_syncClearTitle:function(F){var D=this,E=D.get(B);E.one(".yui3-aquinama-item-desc").removeClass("yui3-aquinama-item-bold");E.one(".yui3-aquinama-item-close").addClass("yui3-aquinama-hidden");},_synnClearContent:function(){var E=this,F=E.get(B),D=F.one(".yui3-aquinama-item-container-a"),G=F.one(".yui3-aquinama-item-contact"),H=E.get("emodel");D.one(".yui3-aquinama-item-load").setStyle("display","block");D.one(".yui3-aquinama-item-date-desc").set("innerHTML","");D.one(".yui3-aquinama-item-description").set("innerHTML","");G.empty();E._hideContent();},_loadContent:function(){var D=this,E=D.get("emodel");E.loadContent();E.set("open",true);D._showContent();E.after("loadChange",D._handlerLoadContent,D);D.set("model",E);},_hideContent:function(G){var E=this,F=E.get(B),D=F.one(".yui3-aquinama-item-container");
D.setStyle("height",0);F.one(".yui3-aquinama-item-close").addClass("yui3-aquinama-hidden");},_showContent:function(H){var F=this,G=F.get(B),E=G.one(".yui3-aquinama-item-container"),D=E.one(".yui3-aquinama-item-container-a").get("offsetHeight");E.setStyle("height",D);G.one(".yui3-aquinama-item-close").removeClass("yui3-aquinama-hidden");G.one(".yui3-aquinama-item-desc").addClass("yui3-aquinama-item-bold");}},{ATTRS:{emodel:{value:new C.Model()}}});C.AquiNaMa.Item=A;C.DataType.Date.convert=function(E){var D,G,F;D=new Date();F=D-E;F/=86400000;if(F<=1){return"Hoy";}else{if(F<=2){return"Ayer";}else{E=C.DataType.Date.format(E,{format:"%a %d %b"});return E;}}};},"@VERSION@",{skinnable:true,requires:["widget","widget-child","substitute","datatype-date","transition"]});