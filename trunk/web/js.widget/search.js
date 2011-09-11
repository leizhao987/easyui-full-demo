/* 
 *  Document   : search
 *  Created on : 2011-7-6, 11:21:11
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : http://www.btboys.com
 *  Vsersion   : 0.1 
 */
   
G.nameSpace("search",function(){
    this.add =  ConditionAdd;
    this.del =  ConditionDel;
    
    function ConditionAdd(){
        var c = $("div.search_Condition_List").last();
        if(c.find("select.search_Filed").combobox("getData").length == $("div.search_Condition_List").length) return;
        
        var ConditionList = $('<div class="search_Condition_List"></div>');
        var Filed = $('<select class="easyui-combobox search_Filed" style="width:100px;" editable="false"></select>');
        var Condition = $(' <select class="easyui-combobox search_Condition" style="width:90px;" editable="false"></select>');
        ConditionList.append(Filed);
        ConditionList.append(Condition);
        ConditionList.append(' <input style="width: 130px;height: 18px;padding-left:2px;"/>');
        var delBtn = $('<a class="easyui-linkbutton" href="javascript:void(0)" iconCls="icon-minus" plain ="true"></a>');
        ConditionList.append(delBtn);
        delBtn.linkbutton();
        Filed.combobox({
            data:c.find("select.search_Filed").combobox("getData")
        });
        Condition.combobox({
            data:c.find("select.search_Condition").combobox("getData")
        });
        c.after(ConditionList);
        
        delBtn.click(function(){
            $(this).parent().remove();
            resize();
        });
        resize();
    }
    function ConditionDel(){
        if($("div.search_Condition_List").length > 1){
            $("div.search_Condition_List").last().remove();
            resize();
        }
    }
    
    function resize(){
        if($("div.search_Condition_List").length > 3){
            var h = ($("div.search_Condition_List").length-3)*30;
            var w = $("div.search_Condition_List").closest('.window-body');
            var opt = w.dialog("options");
            w.dialog("resize",{
                height:opt.height+h
            });
        }
    }
});
   
