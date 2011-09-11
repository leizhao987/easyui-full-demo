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
    <div region="west" style="width: 160px;">
        <div class="easyui-navigation">
            <div title="菜单/导航" class="easyui-navigation-select" iconCls="icon-folder-page" href="${pageContext.request.contextPath}/page.module/system/menu.jsp"></div>   
            <div title="功能管理" iconCls="icon-folder-page" href="${pageContext.request.contextPath}/page.module/system/function.jsp"></div>
            <div title="成员管理" iconCls="icon-folder-page" href="${pageContext.request.contextPath}/page.module/system/config.jsp"></div>
            <div title="角色/权限" iconCls="icon-folder-page" href="${pageContext.request.contextPath}/page.module/system/config.jsp"></div>
            <div title="系统参数" iconCls="icon-folder-page" href="${pageContext.request.contextPath}/page.module/system/config.jsp"></div>
            <div title="系统日志" iconCls="icon-systemLog" href="${pageContext.request.contextPath}/page.module/system/log.jsp"></div>
        </div>
    </div>
            <div region="center" style="padding: 5px;" iconCls="icon-folder-page" title="菜单/导航" href="${pageContext.request.contextPath}/page.module/system/menu.jsp"> </div>
</div>
