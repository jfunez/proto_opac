var isOldIE=$("html").is(".lt-ie9"),Portal={MenuOpened:!1,Init:function(){$(".showTooltip").tooltip({container:"body"}),$(".mainNav .menu").on("click",function(e){e.preventDefault();var t=$(this),a=t.data("rel");a=$(a,".mainNav"),a.is(":visible")?(t.removeClass("opened"),a.slideUp("fast",function(){Portal.MenuOpened=!1})):(t.addClass("opened"),a.slideDown("fast",function(){Portal.MenuOpened=!0}))}),$(".shareFacebook,.shareTwitter,.shareDelicious,.shareGooglePlus,.shareLinkedIn,.shareReddit,.shareStambleUpon,.shareCiteULike,.shareMendeley").on("click",function(e){e.preventDefault();var t=escape(this.href),a={facebook:"https://www.facebook.com/sharer/sharer.php?u=",twitter:"https://twitter.com/intent/tweet?text=",delicious:"https://delicious.com/save?url=",googleplus:"https://plus.google.com/share?url=",linkedin:"http://www.linkedin.com/shareArticle?mini=true&url=",reddit:"http://www.reddit.com/submit?url=",stambleupon:"http://www.stumbleupon.com/submit?url=",citeulike:"http://www.citeulike.org/posturl?url=",mendeley:"http://www.mendeley.com/import/?url="},i="";$(this).is(".shareFacebook")?i=a.facebook+t:$(this).is(".shareTwitter")?i=a.twitter+t:$(this).is(".shareDelicious")?i=a.delicious+t:$(this).is(".shareGooglePlus")?i=a.googleplus+t:$(this).is(".shareLinkedIn")?i=a.linkedin+t:$(this).is(".shareReddit")?i=a.reddit+t:$(this).is(".shareStambleUpon")?i=a.stambleupon+t:$(this).is(".shareCiteULike")?i=a.citeulike+t:$(this).is(".shareMendeley")&&(i=a.mendeley+t),window.open(i,"share")}),$(".sendViaMail").on("click",function(e){e.preventDefault(),$("#SendViaEmail").modal("show")}),$(".showBlock").on("click",function(){var e=$(this),t=e.data("rel"),a=e.data("hide");$(t).find("input:text,textarea").val(""),$(t).slideDown("fast"),$(a).hide()}),$(".showFloatInfo").on("click",function(){var e=$(this).data("rel");e=e.split(";"),$("a",e[0]).removeClass("selected"),$(e[2]).hide(),"null"!=e[1]&&($(this).addClass("selected"),$(e[1]).fadeIn("fast"))}),$(".slider").each(function(){var e=$(this);itens=e.find(".slide-item"),wrapper=e.find(".slide-wrapper"),prev=e.find(".slide-back"),next=e.find(".slide-next"),itemProps={w:itens.eq(0).outerWidth(),h:itens.eq(0).outerHeight()},wrapperWidth=itens.length*itemProps.w+100,containerWidth=e.find(".slide-container").outerWidth(),wrapper.width(wrapperWidth),e.find(".slide-container").height(itemProps.h),prev.css("top",itemProps.h/2+"px"),next.css("top",itemProps.h/2+"px"),prev.hide(),wrapper.width()<=e.width()&&next.hide(),prev.on("click",function(e){e.preventDefault();var t="auto"==wrapper.css("left")?0:parseInt(wrapper.css("left"));wrapper.animate({left:"+="+itemProps.w},300,function(){var e="auto"==wrapper.css("left")?0:parseInt(wrapper.css("left"));0==e&&prev.hide()}),next.show()}),next.on("click",function(e){e.preventDefault();var t="auto"==wrapper.css("left")?0:parseInt(wrapper.css("left"));wrapper.animate({left:"-="+itemProps.w},300,function(){var e="auto"==wrapper.css("left")?0:parseInt(wrapper.css("left"));e<=-(wrapperWidth-containerWidth-100)&&next.hide()}),prev.show()})}),$(".alternativeHeader").each(function(){var e=$(".mainMenu nav ul").html();$(this).find("nav ul").html(e)});var e=$("header").outerHeight();$(window).on("scroll",function(){var t=window.scrollY>0?window.scrollY:window.pageYOffset>0?window.pageYOffset:document.documentElement.scrollTop;t>e?$(".alternativeHeader").stop(!0,!1).animate({top:"0"},200,function(){$("#mainMenu").is(":visible")&&$(".menu:eq(0)").trigger("click")}):$(".alternativeHeader").stop(!0,!1).animate({top:"-60px"},200,function(){$(this).find(".mainMenu").is(":visible")&&$(this).find(".menu").trigger("click")})}).on("keydown",function(e){27==e.keyCode&&$("a.menu").is(".opened")&&$("a.menu").trigger("click")}),$("body").on("click",function(e){var t=e.target;if(!$(t).is(".menu")&&1==Portal.MenuOpened){var a=$("a.menu"),i=".mainMenu";a.removeClass("opened"),$(i).slideUp("fast",function(){Portal.MenuOpened=!1})}}),$(".expandCollapseContent").on("click",function(e){e.preventDefault();var t=$("#issueIndex"),a=$("#issueData"),i=this;t.css("float","right"),a.is(":visible")?a.fadeOut("fast",function(){t.animate({width:"100%"},300),$(i).find(".glyphBtn").removeClass("opened").addClass("closed")}):t.animate({width:"75%"},300,function(){a.fadeIn("fast"),$(i).find(".glyphBtn").removeClass("closed").addClass("opened")}),$(i).tooltip("hide")}),$(".collapse-title").on("click",function(){var e=$(this),t=e.next(".collapse-content");t.is(":visible")?(t.slideUp("fast"),e.addClass("closed")):(t.slideDown("fast"),e.removeClass("closed"))}),$(".goto").on("click",function(e){e.preventDefault();var t=$(this).attr("href");t=t.replace("#","");var a=$("a[name="+t+"]").offset();$("html,body").animate({scrollTop:a.top-60},500)}),$(".trigger").on("click",function(e){e.preventDefault();var t=$(this).data("rel");$(t).click()}),$("input[name='link-share']").focus(function(){$(this).select(),window.clipboardData&&clipboardData.setData&&clipboardData.setData("text",$(this).text())}).mouseup(function(e){e.preventDefault()}),$(".levelMenu .dropdown-container").on("mouseenter mouseleave",function(e){var t=$(this).find(".dropdown-menu"),a=$(this).find(".dropdown-toggle");"mouseenter"==e.type?(t.show(),a.addClass("hover")):(t.hide(),a.removeClass("hover"))}),$(".nav-tabs a").click(function(e){e.preventDefault(),$(this).tab("show")}),"undefined"!=typeof ZeroClipboard&&(client=new ZeroClipboard($("input[name='link-share'], a.copyLink")))}},SearchForm={SearchHistory:"",Init:function(){var p="form.searchForm";if(SearchForm.SearchHistory=Cookie.Get("searchHistory"),$("input.trigger").off("click").on("click",function(){var cmd=$(this).data("rel");eval(cmd)}),$(p).on("submit",function(e){for(var t=$("input[name='q[]']",p),a=$("select[name='bool[]']",p),i=$("select[name='index[]']",p),o="",n=0,l=t.length;l>n;n++){var s=$(t[n]).val();if(""!=s){var r=$("option:selected",i[n]).val();if(n>=1){var c=$("option:selected",a[n-1]).val();o+=" "+c+" "}o+=""!=r?"("+r+":("+s+"))":2==l?s:"("+s+")"}}return!0}),$("textarea.form-control:visible",p).on("keyup",SearchForm.TextareaAutoHeight).trigger("keyup"),$("a.clearIptText",p).on("click",SearchForm.ClearPrevInput),$(".searchActions",p).length&&(window.searchActionsStart=$(".searchActions",p).offset().top),$(".newSearchField",p).on("click",function(e){e.preventDefault(),SearchForm.InsertNewFieldRow(this,"#searchRow-matriz .searchRow",".searchForm .searchRow-container")}),$("select.setMinValue").on("change",function(){var e=$(this).val(),t=$(this).data("rel"),a=$(t).val();e=parseInt(e),a=parseInt(a),e>a&&$(t).val("0"),$("option",t).each(function(){var t=parseInt($(this).text());e>=t?$(this).prop("disabled",!0):$(this).prop("disabled",!1)})}),$("a.action",p+" .collapseBlock .title").on("click",function(){var e=$(this),t=e.parent().next(".content");t.is(":visible")?(t.slideUp("fast"),e.addClass("closed").removeClass("opened"),e.parent().addClass("closed")):(t.slideDown("fast"),e.addClass("opened").removeClass("closed"),e.parent().removeClass("closed"))}),$(".collapseBlock .filterCollapsedList",p).each(function(){var e=$(this),t=e.find(".filterItem"),a=$(".showAll",e);t.length>5&&a.show()}),$(".collapseBlock .showAll",p).on("click",function(){var e=$(this),t=e.parent(),a=e.data("texttoggle"),i=e.text();t.outerHeight()>200?t.removeClass("opened"):t.addClass("opened"),e.text(a).data("texttoggle",i)}),$(".articleAction, .searchHistoryItem, .colActions .searchHistoryIcon",p).tooltip(),$(".selectAll",p).on("click",function(){var e=$(this),t=$(".results .item input.checkbox",p),a=$("#selectedCount",p),i=parseInt(a.text());e.is(":checked")?(t.each(function(){$(this).prop("checked",!0)}),e.data("all","1")):(t.each(function(){$(this).prop("checked",!1)}),e.data("all","0")),SearchForm.CountCheckedResults("#selectedCount",".results .item input.checkbox:checked")}),$(".clusterSelectAll").on("click",function(){var e=$(this),t=$("#selectClusterItens .filterBody input.checkbox");e.is(":checked")?(t.each(function(){$(this).prop("checked",!0)}),e.data("all","1")):(t.each(function(){$(this).prop("checked",!1)}),e.data("all","0"))}),$(".results .item input.checkbox",p).on("change",function(){var e=$(this),t=$(".selectAll",p),a=$("#selectedCount",p),i=parseInt(a.text());if(!e.is(":checked")){var o=t.data("all");"1"==o&&t.prop("checked",!1).data("all","0")}SearchForm.CountCheckedResults("#selectedCount",".results .item input.checkbox:checked")}),$("a.orderBy",p).on("click",function(){var e=$(this),t=e.data("field"),a=$(e.data("rel")),i=[];$(".filterItem",a).each(function(){var e=$(this),a=e.data(t),o=[];isNaN(parseInt(a))||(a=parseInt(a)),o.push(a),o.push(e),i.push(o),e.remove()}),"number"==typeof i[0][0]?i.sort(function(e,t){return t[0]-e[0]}):i.sort();for(var o=0;o<i.length;o++)a.append(i[o][1])}),$(".openNewWindow").on("click",function(e){e.preventDefault(),window.open(this.href,"print","width=760,height=550")}),$(".openStatistics",p).on("click",function(e){e.preventDefault();var t=$(this),a=t.data("cluster"),i=t.data("type"),o=t.data("csv"),n=t.data("chartsource");$("#Statistics").data({title:a,charttype:i,csvlink:o,chartsource:n}).modal({show:!0})}),$(".openSelectItens",p).on("click",function(e){e.preventDefault();var t=$(this),a=t.data("rel"),i=$("#selectClusterItens"),o=$(".filterBody",i),n=$(".modal-title",i);n.html(t.text()),o.empty();var l=$(".filterItem",a).clone();o.append(l),o.find(".checkbox").each(function(){var e=$(this).attr("id"),t=e+"cf";$(this).attr("id",t),o.find("label[for='"+e+"']").attr("for",t)}),i.modal("show")}),$("#selectClusterItens").on("shown.bs.modal",function(){var e=this;$(".filterBody input.checkbox",e).on("click",function(){var t=$(this),a=$(".clusterSelectAll",e),i=$(".itensCount",e);if(!t.is(":checked")){var o=a.data("all");"1"==o&&a.prop("checked",!1).data("all","0")}})}),$("#Statistics").on("shown.bs.modal",function(){var e=$(this),t=$(".chartBlock",this),a=e.data("title"),i=e.data("charttype"),o=e.data("csvlink"),n=e.data("chartsource");e.find(".modal-title .cluster").text(a),e.find(".link a").attr("href",o),t.html('<canvas id="chart" width="550" height="400"></canvas>');var l=$("#chart").get(0);isOldIE&&(l=G_vmlCanvasManager.initElement(l));var s=l.getContext("2d");s.clearRect(0,0,550,400),$.ajax({url:n,type:"POST",dataType:"json",beforeSend:function(){t.addClass("loading")}}).done(function(e){switch(t.removeClass("loading"),i){case"doughnut":window.graph=new Chart(s).Doughnut(e,{scaleGridLineWidth:1});break;case"bar":window.graph=new Chart(s).Bar(e,{scaleGridLineWidth:1});break;case"line":window.graph=new Chart(s).Line(e,{scaleGridLineWidth:1});break;case"pie":window.graph=new Chart(s).Pie(e,{scaleGridLineWidth:1});break;default:window.graph=new Chart(s).Pie(e,{scaleGridLineWidth:1})}})}).on("hidden.bs.modal",function(){window.graph.clear().destroy(),$(".chartBlock canvas",this).remove()}),$("#SendViaEmail,#Export").on("shown.bs.modal",function(){var e=$(this),t=parseInt($("#selectedCount").text());e.find("input:eq(0)").focus(),t>0?(e.find(".selection").show(),e.find(".selection strong").text(t)):e.find(".selection").hide()}),$("form.validate").on("submit",function(){var e=!0;return $("input.valid",this).each(function(){var t=$(this);t.is(".multipleMail")?Validator.MultipleEmails(t.val(),";")===!1?(t.parent().addClass("has-error"),e=!1):t.parent().removeClass("has-error"):""===t.val()?(t.parent().addClass("has-error"),e=!1):t.parent().removeClass("has-error")}),e}),$(".searchHistoryIcon.add",p).on("click",function(){$("html, body").animate({scrollTop:0},"fast"),SearchForm.InsertSearchHistoryItem(this)}),$(".searchHistoryIcon.search",p).on("click",function(){$("#iptQuery").empty(),SearchForm.InsertSearchHistoryItem(this),$("#searchHistoryForm").submit()}),$(".searchHistoryIcon.erase",p).on("click",function(e){e.preventDefault();var t=$(this).data("item");$("#confirmEraseItem span.item").text(t),$("#confirmEraseItem input.item").val(t),$("#confirmEraseItem").modal("show")}),$(".searchHistoryIcon.eraseAll",p).on("click",function(e){e.preventDefault(),$("#confirmEraseAll").modal("show")}),$("#iptQuery").on("keypress",function(e){13==e.keyCode&&$("#searchHistoryForm").submit()}),$("#searchHistoryForm").on("submit",function(){var e=$.trim($("#iptQuery").text()),t=$("#query");return t.val(e),!0}),$(".showTooltip").tooltip({container:"body"}),$("input[data-show!=''],input[data-hide!='']").on("click",function(){var e=$(this).data("show"),t=$(this).data("hide");"undefined"!=typeof e&&$(e).slideDown("fast").find("input[type='radio']:eq(0)").trigger("click"),"undefined"!=typeof t&&$(t).slideUp("fast")}),$(".searchModal").on("click",function(){var e=$(this).data("modal"),t=$(this).data("expr");$(".searchExpression",e).text(t),$("#clipboardSearchExpression").val(t),$(e).modal("show")}),$(".editQuery").on("click",function(){var e=$(this).data("modal"),t=$(this).data("expr"),a=$("#iptQuery");a.append(t).focus(),$(this).effect("transfer",{to:a},1e3),SearchForm.PlaceCaretToEnd(document.getElementById("iptQuery"))}),"undefined"!=typeof ZeroClipboard){var client=new ZeroClipboard(document.getElementById("CopyToClipboard"));client.on("ready",function(e){client.on("aftercopy",function(e){$("#CopyToClipboard").addClass("success");var t=setTimeout(function(){$("#CopyToClipboard").removeClass("success")},2e3)})})}$(".openCitationModal").on("click",function(){var e=$("#CitationModal"),t=$(this).data("title");if(citationContainer=$("#CitationModal-Citations"),downloadContainer=$("#CitationModal-Downloads"),citation=$(this).data("citation"),citationCtt="",download=$(this).data("download"),downloadCtt="","undefined"!=typeof citation&&"undefined"!=typeof download){citation=citation.split(";;");for(var a=0,i=citation.length;i>a;a++)citation[a]=citation[a].split("::"),citation[a][1]=citation[a][1].replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\[b\]/g,"<strong>").replace(/\[\/b\]/g,"</strong>"),citationCtt+='<div class="modal-body searchExpression">',citationCtt+="	<label>"+citation[a][0]+"</label>",citationCtt+="	<div>"+citation[a][1]+"</div>",citationCtt+="</div>";download=download.split(";;");for(var a=0,i=download.length;i>a;a++)download[a]=download[a].split("::"),downloadCtt+='<a href="'+download[a][1]+'" target="_blank" class="download">'+download[a][0]+"</a> ";citationContainer.html(citationCtt),downloadContainer.html(downloadCtt),e.find(".modal-title strong").html(t),e.modal("show")}}),$("input.onlyNumbers").on("keydown",function(e){-1!==$.inArray(e.keyCode,[46,8,9,27,13,110])||65==e.keyCode&&e.ctrlKey===!0||86==e.keyCode&&e.ctrlKey===!0||82==e.keyCode&&e.ctrlKey===!0||e.keyCode>=35&&e.keyCode<=39||!e.shiftKey&&e.keyCode>=48&&e.keyCode<=57||e.preventDefault()}).on("blur",function(){var e=$(this).val();e=e.replace(/[A-Za-z$-.\/\\\[\]=_@!#^<>;"]/g,""),$(this).val(e)}),$(window).scroll(function(){$(window).scrollTop()>window.searchActionsStart?$(".searchForm .searchActions").addClass("fixed"):$(".searchForm .searchActions").removeClass("fixed")})},InsertSearchHistoryItem:function(e){var t=$(e).data("item"),a=$(e).parent().parent().find(".colSearch").text(),i=$("#iptQuery"),o='&#160;<div class="searchHistoryItem" contenteditable="false"  data-toggle="tooltip" data-placement="top" title="'+a+'">#'+t+"</div> AND&#160;";i.append(o).focus(),i.find(".searchHistoryItem").tooltip(),$(e).effect("transfer",{to:i.find(".searchHistoryItem:last-child")},1e3),SearchForm.PlaceCaretToEnd(document.getElementById("iptQuery"))},InsertNewFieldRow:function(e,t,a){e=$(e),t=$(t).clone(),a=$(a);var i=e.data("count");t.attr("id","searchRow-"+i),t.find(".eraseSearchField").data("rel",i),t.find(".eraseSearchField").on("click",function(e){e.preventDefault(),SearchForm.EraseFieldRow(this)}),""!=SearchForm.SearchHistory&&t.find("input[name='q[]']").on("focus",function(){SearchForm.SearchHistoryFocusIn(this)}).on("blur",function(){SearchForm.SearchHistoryFocusOut(this)}),t.appendTo(a).slideDown("fast"),t.find("textarea.form-control:visible").on("keyup",SearchForm.TextareaAutoHeight).trigger("keyup"),t.find("a.clearIptText").on("click",SearchForm.ClearPrevInput),t.find(".showTooltip").tooltip({container:"body"}),i=parseInt(i),i++,e.data("count",i)},TextareaAutoHeight:function(){$(this).css("height","auto"),$(this).height(this.scrollHeight),""!=this.value?$(this).next("a").fadeIn("fast"):$(this).next("a").fadeOut("fast")},ClearPrevInput:function(){$(this).prev("input,textarea").val("").trigger("keyup")},EraseFieldRow:function(e){e=$(e);var t=e.data("rel");$("#searchRow-"+t).slideUp("fast",function(){$(this).remove()})},CountCheckedResults:function(e,t){e=$(e);var a=parseInt(e.data("preselected")),i=parseInt($(t+":checked").length),o=a+i;e.text(o),o>0?e.addClass("highlighted"):e.removeClass("highlighted")},SearchHistoryFocusIn:function(e){if(""!=SearchForm.SearchHistory){var t=$(e).offset();$("#searchHistory").data("rel",e).css({top:t.top+50+"px",left:t.left+"px"}).slideDown("fast")}},SearchHistoryFocusOut:function(e){""!=SearchForm.SearchHistory&&setTimeout(function(){$("#searchHistory").slideUp("fast")},100)},SearchHistoryClick:function(e,t){var e=$(e).text();e=e.substr(e.indexOf(": ")+2,e.length),$(t).val(e).focus()},PlaceCaretToEnd:function(e){if(e.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var a=window.getSelection();a.removeAllRanges(),a.addRange(t)}else if("undefined"!=typeof document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}},SubmitForm:function(e){var t=$(".searchForm").attr("action");$(".searchForm").attr("action",t+"?filter="+e).submit()}},Article={TopBinder:[],Init:function(){for(var e=$("#articleText"),t=e.offset(),a=$(".articleMenu").width(),i=$(".paragraph",e),o=0,n=i.length;n>o;o++){var l=$("p",i[o]).outerHeight(),s=$(".refList",i[o]),r=s.outerHeight();r>l&&s.addClass("outer").css("height",l)}$("sup",i).on("mouseenter mouseleave",function(e){var t=this.className;t=t.replace("xref ","");var a=$("li."+t),i=a.parent("ul");t.indexOf(" ")>=0&&(t=t.split(" "),t="li."+t.join(",li."),a=$(t),i=a.parent("ul")),"mouseenter"===e.type?(i.addClass("full"),a.addClass("highlight").find(".opened").fadeIn("fast")):(i.removeClass("full"),a.removeClass("highlight").find(".opened").hide())}),$(".refList li",i).on("mouseenter mouseleave",function(e){var t=$(this).parent("ul");"mouseenter"===e.type?(t.addClass("full"),$(this).addClass("highlight").find(".opened").fadeIn("fast")):(t.removeClass("full"),$(this).removeClass("highlight").find(".opened").hide())}),$(".thumb").on("mouseenter mouseleave click",function(e){var t=$(this).parent().parent().find(".preview");"mouseenter"==e.type?t.fadeIn("fast"):"mouseleave"==e.type?t.fadeOut("fast"):"click"==e.type&&window.open(t.find("img").attr("src"))}),$(".collapseTitle").on("click",function(){var e=$(this).next(),t=$(this).find(".collapseIcon");e.is(":visible")?(e.slideUp("fast"),t.removeClass("opened")):(e.slideDown("fast"),t.addClass("opened"))}),$(".expandReduceText").on("click",function(e){e.preventDefault();var t=$("#articleText .ref"),a=$("#articleText .text"),i=$(this).data("expandreducetext"),o=$(this).data("defaultwidth");"undefined"==typeof o&&$(this).data("defaultwidth",a.outerWidth()),1==i?(t.hide(),a.outerWidth("100%"),$(this).data("expandreducetext",!1)):(a.width(o),t.show(),$(this).data("expandreducetext",!0));var n=$(window).scrollTop();setTimeout(function(){Article.ArticleStructureBuilder(),Article.ArticleStructureSelect(n)},100)}),$(".articleTxt sup.xref:not(.big)").on("click",function(){var e=$(this).text(),t=$(".ref-list");-1==e.indexOf(",")?(parseInt(e),e--):(e=e.split(","),e=e[0],parseInt(e),e--);var a=$("li:eq("+e+")",t).offset();$("html,body").animate({scrollTop:a.top-60},500)}),t.top=t.top-25,$(window).scroll(function(){var e=$(window).scrollTop();e>t.top?$(".articleMenu").addClass("fixed").width(a):$(".articleMenu").removeClass("fixed"),Article.ArticleStructureSelect(e)});var c=$(".downloadOptions li.group"),d=100/c.length;c.css("width",d+"%"),Article.ArticleStructureBuilder()},ArticleStructureBuilder:function(){var e=$(".articleMenu"),t=$("#articleText .articleSection"),a=0,i="";Article.TopBinder=[],t.each(function(){var e=$(this).data("anchor"),t=$(this).find("h1"),o=$(this).offset();if(Article.TopBinder.push(0==a?0:o.top),"undefined"==typeof e)return!0;if(i+="<li "+(0==a?'class="selected"':"")+">",i+='	<a href="#articleSection'+a+'">'+e+"</a>",t.length>1){var n=0;i+="<ul>",t.each(function(){var e=$(this).offset();Article.TopBinder.push(e.top),i+="<li>",i+='	<a href="#as'+a+"-heading"+n+'">'+$(this).text()+"</a>",i+="</li>",n++}),i+="</ul>"}i+="</li>",a++}),e.html(i),$("a",e).on("click",function(e){e.preventDefault();var t=$(this).attr("href");t=t.replace("#","");var a=$("a[name="+t+"]").offset();$("html,body").animate({scrollTop:a.top-60},500)})},ArticleStructureSelect:function(e){for(var t=$(".articleMenu"),a=0,i=0,o=Article.TopBinder.length;o>i;i++)if(e<=Article.TopBinder[i]-100){t.find("li").removeClass("selected"),t.find("li:eq("+(i-1)+")").addClass("selected");break}}},Collection={Init:function(){var e=$(".collectionListStart");e.each(function(){var e=$(this),t=e.data("method"),a=e.data("perpage"),i=e.data("labels"),o=$(".collectionSearch",e),n=$(".collectionListDownloadXLS,.collectionListDownloadCSV",e),l=$(".collectionListLoading",e),s=!1,r="";if(window.timer,"undefined"!=typeof e.data("action")){if(i=i.split(";"),o.val(""),$(".collectionCurrentPage",e).val("1"),"alphabetic"==t)r="method=alphabetic&rp="+a,s=!0;else if("theme"==t)var r="method=theme";else if("publisher"==t)var r="method=publisher";Collection.JournalListFinder(r,l,e,i,!0,s)}o.on("keyup change",function(){var o=$(this),n="method="+t+"&rp="+a,s=!0;clearTimeout(window.timer),window.timer=setTimeout(function(){var t=o.val();n+="&query="+t,$(".collectionCurrentPage",e).val("1"),Collection.JournalListFinder(n,l,e,i,!0,!0),s=!1},300)}),n.on("click",function(t){t.preventDefault();var a=$(this).is(".collectionListDownloadXLS")?"xls":"csv",i=e.data("action"),n="?method=alphabetic&output="+a+(""!=o.val()?"&query="+o.val():"");window.open(i+n)})})},JournalListFinder:function(param,loading,container,labels,empty,scroll,callback,htmlFill){var currentPage=$(".collectionCurrentPage",container),totalPages=$(".collectionTotalPages",container),totalInfo=$(".collectionListTotalInfo",container),action=$(container).data("action");"undefined"!=typeof htmlFill&&(loading=htmlFill.next(".collectionListLoading")),"undefined"==typeof empty&&(empty=!1),param+="&page="+currentPage.val(),$.ajax({url:action,type:"POST",data:param,dataType:"json",beforeSend:function(){loading.show()}}).done(function(data){if(loading.hide(),"undefined"!=typeof data.journalList){-1==param.indexOf("&theme=")&&-1==param.indexOf("&publisher=")&&(totalInfo.html(labels[11].replace("{total}",data.total)),totalPages.val(data.totalPages));var ctt=Collection.JournalListFill(data,labels);"undefined"!=typeof htmlFill?(empty&&$(htmlFill).find("tbody").empty(),$(htmlFill).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})):(empty&&$(container).find("tbody").empty(),$(container).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})),scroll&&Collection.ScrollEvents(container,loading,labels)}if("undefined"!=typeof data.themeList){totalInfo.html(labels[11].replace("{total}",data.total).replace("{totalTheme}",data.totalThemes));var ctt=Collection.ThemeListFill(data,labels,container.attr("id"));"undefined"!=typeof htmlFill?(empty&&$(htmlFill).find("tbody").empty(),$(htmlFill).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})):(empty&&$(container).find("tbody").empty(),$(container).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})),Collection.CollapseEvents(container,labels)}if("undefined"!=typeof data.publisherList){totalInfo.html(labels[11].replace("{total}",data.total).replace("{totalPublisher}",data.totalPublisher));var ctt=Collection.PublisherListFill(data,labels,container.attr("id"));"undefined"!=typeof htmlFill?(empty&&$(htmlFill).find("tbody").empty(),$(htmlFill).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})):(empty&&$(container).find("tbody").empty(),$(container).find("tbody").append(ctt).find(".showTooltip").tooltip({container:"body"})),Collection.CollapseEvents(container,labels)}"undefined"!=typeof callback&&eval(callback)}).error(function(e){loading.hide(),console.warn("Error #001: Error found on loading journal list")})},JournalListFill:function(e,t){for(var a="",i=0,o=e.journalList.length;o>i;i++){var n=e.journalList[i];n.Last=n.Last.split(";"),n.Publisher=n.Publisher.split(";"),a+='						<tr>							<td class="actions">								<a href="'+n.Links[0]+'" class="showTooltip" title="'+t[5]+'"><span class="glyphBtn home"></span></a> 								<a href="'+n.Links[1]+'" class="showTooltip" title="'+t[6]+'"><span class="glyphBtn submission"></span></a> 								<a href="'+n.Links[2]+'" class="showTooltip" title="'+t[7]+'"><span class="glyphBtn authorInstructions"></span></a> 								<a href="'+n.Links[3]+'" class="showTooltip" title="'+t[8]+'"><span class="glyphBtn about"></span></a> 								<a href="'+n.Links[4]+'" class="showTooltip" title="'+t[9]+'"><span class="glyphBtn contact"></span></a> 							</td>							<td>								<a href="'+n.Links[0]+'" class="collectionLink '+(0==n.Active?"disabled":"")+'">									<strong class="journalTitle">'+n.Journal+'</strong>,									<strong class="journalIssues">'+n.Issues+" "+t[0]+"</strong>,									"+t[1]+"									"+(""!=n.Last[0]?'<span class="journalLastVolume"><em>'+t[2]+"</em> "+n.Last[0]+"</span>":"")+"									"+(""!=n.Last[1]?'<span class="journalLastNumber"><em>'+t[3]+"</em> "+n.Last[1]+"</span>":"")+"									"+(""!=n.Last[2]?'<span class="journalLastSuppl"><em>'+t[4]+"</em> "+n.Last[2]+"</span>":"")+"									- 									"+(""!=n.Last[3]?'<span class="journalLastPubDate">'+n.Last[3]+"</span>":"")+" 									"+(0==n.Active?t[10]:"")+" 								</a>							</td>						</tr>"}return a},ThemeListFill:function(e,t,a){for(var i='	<tr>							<td class="collapseContainer">',o=0,n=e.themeList.length;n>o;o++){i+='		<div class="themeItem">									<a href="javascript:;" id="'+a+"-collapseTitle-"+o+'" 									class="collapseTitleBlock '+("undefined"==typeof e.themeList[o].journalList?"closed":"")+'" data-id="'+e.themeList[o].id+'">										<strong>'+e.themeList[o].Area+"</strong>										("+e.themeList[o].Total+')									</a> 									<div class="collapseContent" id="'+a+"-collapseContent-"+o+'" '+("undefined"==typeof e.themeList[o].journalList?'style="display: none;"':"")+">";for(var l=0,s=e.themeList[o].SubAreas.length;s>l;l++)i+='			<a href="javascript:;" id="'+a+"-collapseTitle-"+o+"-sub-"+l+'" 											class="collapseTitle '+("undefined"==typeof e.themeList[o].SubAreas[l].journalList?"closed":"")+'" data-id="'+e.themeList[o].SubAreas[l].id+'">											<strong>'+e.themeList[o].SubAreas[l].Area+"</strong>												("+e.themeList[o].SubAreas[l].Total+')										</a>										<div class="collapseContent" id="'+a+"-collapseContent-"+o+"-sub-"+l+'" '+("undefined"==typeof e.themeList[o].SubAreas[l].journalList?'style="display: none;"':"")+'>											<table> 												<thead> 													<tr> 														<th class="actions"></th> 														<th>'+t[12]+"</th> 													</tr> 												</thead> 												<tbody>","undefined"!=typeof e.themeList[o].SubAreas[l].journalList&&(i+=Collection.JournalListFill(e.themeList[o].SubAreas[l],t)),i+='						</tbody>											</table> 										</div> 										<div class="collapseContent collectionListLoading" style="display: none;"></div>										';i+="			</div>"}return i+="		</td>						</tr>"},PublisherListFill:function(e,t,a){for(var i='	<tr>							<td class="collapseContainer">',o=0,n=e.publisherList.length;n>o;o++)i+='		<div class="themeItem">									<a href="javascript:;" id="'+a+"-collapseTitle-"+o+'" class="collapseTitle '+("undefined"==typeof e.publisherList[o].journalList?"closed":"")+'"><strong>'+e.publisherList[o].Publisher+"</strong> ("+e.publisherList[o].Total+')</a> 									<div class="collapseContent" id="'+a+"-collapseContent-"+o+'" '+("undefined"==typeof e.publisherList[o].journalList?'style="display: none;"':"")+'> 										<table> 											<thead> 												<tr> 													<th class="actions"></th> 													<th>'+t[12]+"</th> 												</tr> 											</thead> 											<tbody>","undefined"!=typeof e.publisherList[o].journalList&&(i+=Collection.JournalListFill(e.publisherList[o],t)),i+='					</tbody> 										</table> 									</div> 									<div class="collapseContent collectionListLoading" style="display: none;"></div>								</div>';return i+="		</td>						</tr>"},ScrollEvents:function(e,t,a){var i=$(".collectionCurrentPage",e),o=$(".collectionTotalPages",e),n=$(".collectionSearch",e),l=$(e).data("perpage"),s=$(e).data("method"),r="method=alphabetic&rp="+l+(""!=n.val()?"&query="+n.val():"");$(window).off("scroll").on("scroll",function(){if(i.val()<o.val()){if($("footer").hide(),$(window).scrollTop()+$(window).height()==$(document).height()){var n=parseInt(i.val());n++,i.val(n),r+="&page="+n,Collection.JournalListFinder(r,t,e,a,!1,!1)}}else $("footer").show()})},CollapseEvents:function(e,t){var a=$(e).data("method"),i=$(".collectionSearch",e),o="method=alphabetic"+(""!=i.val()?"&query="+i.val():""),n=$(".collapseTitle,.collapseTitleBlock",e);n.on("click",function(){var i=$(this),n=i.parent(),l=n.find(".collectionListLoading"),s=i.next(".collapseContent"),r=s.find("table tbody tr").length;if(s.is(":visible"))s.slideUp("fast"),$(this).addClass("closed");else if(i.is(".collapseTitleBlock"))s.slideDown("fast"),l.hide(),$(this).removeClass("closed");else if(0==r){var c="undefined"!=typeof i.data("id")?i.data("id"):$("strong",this).text();o+="&"+a+"="+c,Collection.JournalListFinder(o,l,e,t,!0,!1,"Collection.CollapseOpen('#"+s.attr("id")+"','#"+i.attr("id")+"')",s)}else s.slideDown("fast"),l.hide(),$(this).removeClass("closed")})},CollapseOpen:function(e,t){$(e).slideDown("fast"),$(t).removeClass("closed")}},Validator={MultipleEmails:function(e,t){for(var t=t||";",a=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,i=!0,o=e.split(t),n=0;n<o.length;n++)o[n]=o[n].trim(),(""==o[n]||0==a.test(o[n]))&&(i=!1);return i}},Cookie={Get:function(e,t){return"undefined"==typeof t?t="":t+="/",e=t+e,document.cookie.length>0&&(c_start=document.cookie.indexOf(e+"="),-1!=c_start)?(c_start=c_start+e.length+1,c_end=document.cookie.indexOf(";",c_start),-1==c_end&&(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):""},Set:function(e,t,a,i){var o;if("undefined"!=typeof a){var n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),o="; expires="+n.toGMTString()}else o="";"undefined"==typeof i?i="":i+="/",""!=Cookie.Get(e)&&(document.cookie=i+e+"="+t+"expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"),document.cookie=i+e+"="+t+o+"; path=/"}};$(function(){Portal.Init(),$("form.searchForm").length&&SearchForm.Init(),$("#articleText").length&&Article.Init(),$("body.collection").length&&Collection.Init()});