<%-- 
    Document   : search
    Created on : 2011-7-5, 17:27:13
    Author     : GodSon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div style="margin: 5px;">
<div class="search_Condition_List">
    <select class="easyui-combobox search_Filed" style="width:100px;" editable="false"></select><select class="easyui-combobox search_Condition" editable="false" style="width:90px;">
        <option value="eq">等于</option>
        <option>不等于</option>
        <option>小于</option>
        <option>小于或等于</option>
        <option>大于</option>
        <option>大于或等于</option>
        <option>包含</option>
        <option>不包含</option>
        <option>开始以</option>
        <option>结束以</option>
        <option>空值</option>
        <option>介于</option>
        <option>非介于</option>
    </select>
    <input style="width: 130px;height: 18px;"/>
</div>
</div>
<script type="text/javascript" defer>
    $(function(){
        G.importMD('search');
    });
</script>