<%-- 
    Document   : index
    Created on : 2011-8-28, 1:15:00
    Author     : GodSon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JQuery Easyui(1.2.4)的完整demo for java</title>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyuiCore/themes/gray/easyui.css" />
        <script type="text/javascript" src="${pageContext.request.contextPath}/js/dynamic.jsp"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyuiCore/jquery-1.6.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyuiCore/jquery.easyui.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyuiCore/easyui-lang-zh_CN.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyuiCore/easyui.validatorMessasge.js" charset="UTF-8"></script>
    </head>
    <body class="easyui-layout" oncontextmenu="return false">
        <div region="north" border="false" style="height:60px;background:#B3DFDA;"><h1>JQuery Easyui(1.2.4)的完整demo for java</h1></div>
	<div region="west" split="true" title="West" style="width:150px;padding:10px;">west content</div>
	<div region="east" split="true" title="East" style="width:100px;padding:10px;">east region</div>
        <div region="south" border="false" style="height:30px;background:#A9FACD;line-height: 30px; text-align: center;"><a href="http://www.btboys.com" target="_blank">GodSon | 时光记录生活</a></div>
	<div region="center" title="Main Title">
	</div>
    </body>
</html>
