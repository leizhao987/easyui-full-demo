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
        InitNavit();
        BindEvt();
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
            if($(this).text() == "|") return;
            if($(this).attr("class") == "item current hover") return;
        
            $("#main_navit .item").removeClass("current").removeClass("hover");
            $(this).addClass("current");
            MainCenterChange(__rootPath+$(this).attr("url"),$(this).text(),$(this).attr("iconCls"));
        });
    }
    
    function BindEvt(){
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
        
        $("#btn_s_setting").click(function(){
            MainCenterChange(__rootPath+'page.module/system/system.jsp','系统设置');
        });
    }
    
    function MainCenterChange(href,title,iconCls){
        //G.config.mainCenterPanelID 定义在core.js。
        var p = $("#"+G.config.mainCenterPanelID).layout("panel","center");
        var head = p.panel("header");
        p.panel("refresh",href);
        p.panel("setTitle",title);
        head.find('.panel-icon').removeClass().addClass("panel-icon "+iconCls);

    }
    this.MC = MainCenterChange;

});
