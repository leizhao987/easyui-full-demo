<%-- 
    Document   : login
    Created on : 2011-8-29, 18:33:28
    Author     : GodSon
    Email      : wmails@126.com
    Link       : www.btboys.com 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>欢迎登陆JQuery Easyui(1.2.4)的完整demo for java</title>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyui/themes/gray/easyui.css" />
        <script type="text/javascript" src="${pageContext.request.contextPath}/js.module/dynamic.jsp"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery-1.6.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery.easyui.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/easyui-lang-zh_CN.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/easyui.validatorMessasge.js" charset="UTF-8"></script>
        <style>
            body {
                color: black;
                font: 12px/1.5 "sans serif",tahoma,verdana,helvetica;
            }
        </style>
        <script>
            function LogonIn(){
                
            }
            function Reset(){
                $('form')[0].reset();
            }
        </script>
    </head>
    <body class="easyui-layout">
        <div region="center" style="background: #DEDEE0 url(images/bodybg.jpg);">
            <div class="easyui-dialog" title="欢迎登陆" style="width:400px;height:300px;padding-top:18%;text-align: center;"
			 buttons="#dlg-buttons" resizable="false" draggable="false" closable="false">
                <form>
                     <div style="padding:10px;">账号：<input name="name" class="easyui-validatebox" required="true"/></div>
                     <div style="padding:10px;">密码：<input type="password" name="pwd" class="easyui-validatebox" required="true"/></div>
                </form>
            </div>
            <div id="dlg-buttons">
		<a href="#" class="easyui-linkbutton" onclick="LogonIn()">登陆</a>
		<a href="#" class="easyui-linkbutton" onclick="Reset()">重置</a>
            </div>
        </div>
    </body>
</html>
