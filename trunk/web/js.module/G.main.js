/* 
 *  Document   : G.init
 *  Created on : 2011-9-10, 23:41:44
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : www.btboys.com 
 *  
 */


G.nameSpace('main',function(){
    this.init = function(){
        $('body').layout("panel","north").parent().unbind();
        $('body').layout("panel","south").parent().unbind();
        $('body').layout("panel","west").parent().unbind();
        
        G.importMD('powerFloat',function(){
            $(".tipTrigger").powerFloat({
                offsets: {
                    x: -2,
                    y: 22
                },
                hoverHold: false,
                targetMode: "tip",
                targetAttr: "tip",
                position: "2-1"
            }); 
        });
        
        InitNavit();
    }
    
    //导航
    function InitNavit(){
        $("#main_navit .item").hover(function(){
            if($(this).text() == "|") return
            $(this).addClass("hover");
        },function(){
            if($(this).text() == "|") return;
            $(this).removeClass("hover");
        }).click(function(){
            NavitSelect(this);
        });
    }
    
    function NavitSelect(obj){
        if(typeof obj == "string"){
            obj = $("#main_navit li:contains("+obj+")").first();
        }
        if($(obj).text() == "|") return;
        if($(obj).attr("class") == "item current hover") return;
        
        $("#main_navit .item").removeClass("current").removeClass("hover");
        $(obj).addClass("current");
        //G.config.mainCenterPanelID 定义在core.js。
        $("#"+G.config.mainCenterPanelID).layout("panel","center").panel("refresh",__rootPath+$(obj).attr("url"));
    }
});
