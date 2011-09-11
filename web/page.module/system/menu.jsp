<%-- 
    Document   : menu
    Created on : 2011-9-11, 16:54:52
    Author     : GodSon
    Email      : wmails@126.com
    Link       : www.btboys.com 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="easyui-layout" style="width: 700px;height: 400px;" fit="true">
    <div region="west" style="width: 250px;">
        <div class="easyui-panel" fit="true" title="菜单"  border="false">
            <div class="easyui-layout" fit="true">
                <div region="west" style="width: 28px;" class="westhbg" border="false">
                    <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-plus"  title="添加"></a>
                    <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-minus"  title="删除"></a>
                    <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-up" title="向上"></a>
                    <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-down"  title="向下"></a>
                </div>
                <div region="center" border="false">
                    <ul class="easyui-tree" id="functionListTree"></ul>
                </div>
            </div>
        </div>
    </div>
    <div region="center"  title="功能列表"> </div>
    <div region="east" style="width: 200px;" > 
        <div class="easyui-panel" fit="true" title="未使用工能" border="false"></div>
    </div>
</div>