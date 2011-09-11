/* 
 *  Document   : jquery.navigation导航插件
 *  Created on : 2011-8-29, 18:20:19
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : www.btboys.com 
 *  
 */


(function($){
    function init(target){
        if($(target).attr("class") == "navigation-sep"){
            $(target).html("&nbsp;"); 
            return;
        }        
        var opts = $.data(target, 'navigation').options;
        $(target).addClass("easyui-navigation-item").unbind().hover(function(){
            $(this).addClass("easyui-navigation-over");
        },function(){
            $(this).removeClass("easyui-navigation-over");
        });

        $(target).bind("click",function(){
            if(!opts.parent){
                var title = $(this).attr("title");
                var p =  $(target).closest("div.easyui-navigation");
                p.find(".easyui-navigation-select").removeClass("easyui-navigation-select");
                $(this).addClass("easyui-navigation-select");
                if(opts.onClick) {
                    opts.onClick.call(this,$(this).attr("title"));
                }else{
                    if($(this).attr("href")){
                        var pcenter = $(this).closest(".easyui-layout").first().layout("panel","center");
                        var head = pcenter.panel("header");       
                        pcenter.panel("refresh",$(this).attr("href")).panel("setTitle",title);
                        head.find('.panel-icon').removeClass().addClass("panel-icon "+$(this).attr("iconCls"));
                    }
                }
            }else{
                var lef = $(target).children().eq(0);
                if(lef.text() == "+"){
                    lef.text("-");
                    $("div[parentTarget="+opts.parent+"]").slideDown();
                }else{
                    lef.text("+");
                    $("div[parentTarget="+opts.parent+"]").slideUp();
                }
            }
        });
        
        var span = $('<span class="l-btn-text"></span>').html(opts.title);
        if(opts.iconCls) span.addClass(opts.iconCls).css("padding","0 0 2px 20px");
        
        $(target).html(span);
        if(opts.parent){
            var children = $("<div/>").attr("parentTarget", opts.parent).css("display",!opts.open ? "none" : "block").css("padding-left","5px");
            $(target).prepend("<span>"+(!opts.open ? "+" : "-")+"</span>").after(children);
        }   
        if(opts.ptarget)   $(target).appendTo($("div[parentTarget="+opts.ptarget+"]")).prepend("<span>&nbsp;&nbsp;</span>");
    }
    
    function parseOptions(target){
        var t = $(target);
        return {
            iconCls: (t.attr('iconCls') || undefined),
            href: (t.attr('href') || undefined),
            title:(t.attr('title') || "标题"),
            parent:(t.attr('parent') || false),
            ptarget:(t.attr('ptarget') || false),
            open:(t.attr('expand') || false)
        };
    }
        
    $.fn.navigation = function(options,param){     
        if (typeof options == 'string'){
        //TODO方法
        }
        options = options || {};
        return this.each(function(){
            $(this).panel({
                fit:true,
                border:false,
                bodyCls:"easyui-navigation"
            });
            var items = $(this).children();
            items.each(function(){
                var state = $.data(this, 'navigation');
                if (state){
                    $.extend(state.options, options);
                } else {
                    state = $.data(this, 'navigation', {
                        options: $.extend({}, $.fn.navigation.defaults, parseOptions(this), options)
                    });
                }
                init(this); 
            });
            if($.fn.navigation.defaults.globarNturl){
                var g = $(this).find("div[href='"+$.fn.navigation.defaults.globarNturl+"']");
                if(g.attr("ptarget")){
                    if(!g.parent().prev().attr("expand")){
                        g.parent().prev().click();
                    }
                    g.click();
                }else{
                    g.click();
                }
                $.fn.navigation.defaults.globarNturl = null;
            }else{
                var first =items.first();
                if(first.attr("parent")){
                    if(!first.attr("expand")){
                        first.click();
                    }
                    $("div[parentTarget="+first.attr("parent")+"]").children().first().click();
                }else if($(this).parents(".easyui-layout").length == 1){
                    first.click();
                }
            }
        });
    }
    $.fn.navigation.defaults = {
        globarNturl:null
    };
    
    $.parser.plugins.push("navigation");
})(jQuery);