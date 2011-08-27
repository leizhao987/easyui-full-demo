/* 
 *  Document   : remind
 *  Created on : 2011-7-7, 15:34:20
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : http://www.btboys.com
 *  Vsersion   : 0.1 
 */
   
(function($){
    function BeforeOpen(el){
        var win = $(el).window("window");
        win.slideDown();
        tout = setTimeout(function () {
            win.slideUp(function(){
                $(el).window("destroy");
                clearTimeout(tout);
            });
        }, 2000);
        
        win.hover(function () {
            if (tout) {
                clearTimeout(tout);
            }
        }, function () {
            tout = setTimeout(function () {
                win.slideUp(function(){
                    $(el).window("destroy");
                    clearTimeout(tout);
                });
            }, 1000);
        });
    }
    
    $.remind = function(opt){
        var options = $.extend({
            width : 220,
            height : 110,
            msg : "",
            icon:"success",
            title : ""
        }, opt || {});
        var win = $('<div class="messager-body" style="padding:10px 5px;"><div class="messager-icon messager-'+options.icon+'"></div><div  style="line-height:18px;font-weight: bolder;padding:3px;">'+options.msg+'</div></div>').appendTo("body");
        win.window({
            title : options.title,
            width : options.width,
            height : options.height,
            collapsible : false,
            minimizable : false,
            maximizable : false,
            closable:false,
            shadow : false,
            draggable : false,
            resizable : false,
            closed : true,
            onBeforeOpen : function () {
                BeforeOpen(this);
                return false;
            }
        });
        var wd = options.width;
        if (isNaN(wd)) {
            wd = win.outerWidth();
        }
        var left = ($(window).width() - wd) / 2 + $(document).scrollLeft();
        win.window("window").css({
            left : left,
            top : 0,
            zIndex : $.fn.window.defaults.zIndex++
        });
        win.window("open");
    };
})(jQuery);