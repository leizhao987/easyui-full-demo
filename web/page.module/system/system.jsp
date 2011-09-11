<%-- 
    Document   : system
    Created on : 2011-9-11, 14:04:57
    Author     : GodSon
    Email      : wmails@126.com
    Link       : www.btboys.com 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="easyui-layout" fit="true"  border="false">
    <div region="west" style="width: 160px; border-bottom: none;border-left: none;border-top: none;">
        <div class="easyui-navigation">
            <div title="菜单/导航" iconCls="icon-folder-page" href="/s_setting/menu/menu_index.do"></div>
            <div title="系统日志" iconCls="icon-systemLog" href="/s_setting/log/log.do"></div>
            <div title="单位管理" iconCls="icon-enterprise" href="/s_setting/enterprise/detail.do"></div>
            <div title="系统参数" iconCls="icon-folder-page" href="/s_setting/config/config.do"></div>
            <div title="功能管理" iconCls="icon-folder-page" href="/s_setting/function/function.do"></div>
        </div>
    </div>
    <div region="center"  border="false" title="菜单/导航" href="${pageContext.request.contextPath}/s_setting/menu/menu_index.do"> </div>
</div>
