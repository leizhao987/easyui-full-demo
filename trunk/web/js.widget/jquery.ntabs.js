/* 
 *  Document   : jquery.ntabs 横向导航菜单
 *  Created on : 2011-8-29, 18:22:20
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : www.btboys.com 
 *  
 */


(function($){
    function init(target){
        $(target).addClass("ntabs");
        var lis = $(target).children("li");
        lis.each(function(){
            if($(this).text() != "|"){
                $(this).addClass("item").bind("click",function(){
                    if($(this).attr("class") == "item current") return;
                    $(target).find(".item").removeClass("current").removeClass("hover");
                    $(this).addClass("current");
                    if($(this).attr("url")){
                        $(this).closest(".easyui-layout").first().layout("panel","center").panel("refresh",__rootPath+$(this).attr("url")).panel("setTitle",$(this).text());
                    }
                }).hover(function(){
                    if($(this).text() == "|") return
                    $(this).addClass("hover");
                },function(){
                    if($(this).text() == "|") return;
                    $(this).removeClass("hover");
                });
                if($(this).attr("iconCls")){
                    $(this).prepend("<span class='"+$(this).attr("iconCls")+"'>&nbsp;</span>");
                }
            }
        });
        if(LY.config.globarNturl){
            $(target).children("li[url='"+LY.config.globarNturl+"']").click();
            LY.config.globarNturl = null;
        }else{
            lis.first().click();
        }
    }

    $.fn.ntabs = function(options,param){     
        if (typeof options == 'string'){
        //TODO方法
        }
        options = options || {};
        return this.each(function(){
            init(this); 
        });
    }  
    $.parser.plugins.push("ntabs");
})(jQuery);