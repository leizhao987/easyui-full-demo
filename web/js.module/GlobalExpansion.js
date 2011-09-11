/* 
 *  Document   : GlobalExpansion全局扩展
 *  Created on : 2011-8-29, 18:25:41
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : www.btboys.com 
 *  
 */

/*
 *设置分页组件默认隐藏pagelist
 * */
$.fn.pagination.defaults.showPageList = false;

/**
 * 为grid添加自己重新加载方法
 */
$.extend($.fn.datagrid.methods, {
    myreload: function(jq, newposition){
        return jq.each(function(){
            //显示第一页数据   
            $(this).datagrid("options").pageNumber = 1;   
            //分页栏上跳转到第一页   
            $(this).datagrid('getPager').pagination({
                pageNumber: 1
            }); 
            $(this).datagrid("reload",newposition);
        });
    }
});

/**
 *扩展Date类型的时间格式化
 *为datagrid时间格式化准备
 */
Date.prototype.format = function(format){
    /*
     * eg:format="yyyy-MM-dd hh:mm:ss";
     */
    if(!format){
        format = "yyyy-MM-dd hh:mm:ss";
    }

    var o = {
        "M+": this.getMonth() + 1, // month
        "d+": this.getDate(), // day
        "h+": this.getHours(), // hour
        "m+": this.getMinutes(), // minute
        "s+": this.getSeconds(), // second
        "q+": Math.floor((this.getMonth() + 3) / 3), // quarter
        "S": this.getMilliseconds()
    // millisecond
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) { 
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};