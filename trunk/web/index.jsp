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
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyui/themes/gray/easyui.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/easyui/themes/icon.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/style/css/main.css" />
        <script type="text/javascript" src="${pageContext.request.contextPath}/js.module/dynamic.jsp"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery-1.6.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/jquery.easyui.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/easyui-lang-zh_CN.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/easyui/easyui.validatorMessasge.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js.module/Core.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${pageContext.request.contextPath}/js.module/G.module.js" charset="UTF-8"></script>
        <script>
            function closes(){
                $("#Loading").fadeOut("normal",function(){
                    $(this).remove();
                });
            }
            var pc;
            $.parser.onComplete = function(){
                if(pc) clearTimeout(pc);
                pc = setTimeout(closes, 1000);
            }
            $(function(){                
                G.importMD('main',function(){
                    this.init();
                });
            });
        </script>
    </head>
    <body class="easyui-layout" oncontextmenu="return false">

        <div id='Loading' style="position:absolute;z-index:1000;top:0px;left:0px;width:100%;height:100%;background:#DDDDDB url('style/images/bodybg.jpg');text-align:center;padding-top: 20%;"><h1><image src='style/images/loading.gif'/><font color="#15428B">加载中···</font></h1></div>

        <div region="north" border="false"  split="true" style="height:60px;overflow: hidden;"><h1>JQuery Easyui(1.2.4)的完整demo for java</h1></div>
        <div region="west" split="true" style="width:40px;padding:5px 0px;overflow: hidden;" class="westhbg">
            <a href="javascript:void(0)" iconCls="icon-application-view-detail" tip="快速导航" plain ="true"  class="easyui-linkbutton tipTrigger"></a>
            <hr/>
            <a href="javascript:void(0)" module="mail" iconCls="icon-mail_send" tip="发送邮件" plain ="true"  class="easyui-linkbutton addBtn tipTrigger"></a>
            <a href="javascript:void(0)" module="message" iconCls="icon-message_send" tip="发送消息" plain ="true"  class="easyui-linkbutton addBtn tipTrigger"></a>
            <hr></hr>
            <a href="javascript:void(0)" iconCls="icon-newspaper" tip="新闻" plain ="true" nav="信息" url="/i_news/news.do"  class="easyui-linkbutton fastBtn tipTrigger"></a>
            <a href="javascript:void(0)" iconCls="icon-schedule_manage" tip="日程管理" nav="事务" url="/a_schedule/index.do"  plain ="true"  class="easyui-linkbutton fastBtn tipTrigger"></a>
            <a href="javascript:void(0)" iconCls="icon-myTools" tip="百宝箱" plain ="true" nav="资源" url="/r_mytools/mytools_list.do"    class="easyui-linkbutton fastBtn tipTrigger"></a>
            <a href="javascript:void(0)" iconCls="icon-notice_manage" tip="公告管理" plain ="true" nav="管理" url="/i_notice/notice_manage.do"    class="easyui-linkbutton fastBtn tipTrigger"></a>
            <a href="javascript:void(0)" iconCls="icon-department_manage" tip="部门管理" plain ="true" nav="管理" url="/m_org/department/department_manage.do"    class="easyui-linkbutton fastBtn tipTrigger"></a>
        </div>
        <div region="south"  split="true" border="false" class="northbg" style="height:35px;line-height: 25px; text-align: center;padding: 2px;overflow: hidden;">
            <div style="float: left;">
                <a href="javascript:void(0)" id="btn_p_setting" iconCls="icon-user-group" plain ="true" class="easyui-linkbutton">个人设置</a>
                |
                <a href="javascript:void(0)" id="btn_s_setting"  iconCls="icon-user-group" plain ="true" class="easyui-linkbutton">系统设置</a>
            </div>
            <a href="http://www.btboys.com" target="_blank">GodSon | 时光记录生活</a>
            <div style="float: right;">
                <a href="javascript:void(0)" id="btn_extand" iconCls="layout-button-up" plain ="true"  class="easyui-linkbutton">收缩</a>
                <select id="sele_change_theme" class="easyui-combobox" style="width: 80px;" panelHeight="85" editable="flase">
                    <option value="">切换皮肤</option>  
                    <option value="defalut">蓝色</option>  
                    <option value="gray">灰色</option>  
                </select>
            </div>
        </div>
        <div region="center">
            <div class="easyui-layout" fit="true" id="Main_content_layout">
                <div region="north" style="height:35px;padding: 2px 0;overflow: hidden;" border="false">
                    <input class="easyui-searchbox"  prompt="请输入关键字" menu="#s_menu" style="width:200px"/>
                    <div id="s_menu" style="width:120px">
                        <div name="all">全局</div>
                        <div name="sports">信息</div>
                    </div>
                    | <a href="javascript:void(0)" style="margin-top: 2px;" iconCls="icon-monitor" plain ="true" class="easyui-linkbutton">首页</a>
                    <ul class="navit" id="main_navit">
                        <li class="item current" url="/navigate.do?module=info">系统设置</li>
                    </ul>
                </div>
                <div region="center" border="false" title="首页" iconCls="icon-monitor" href="desktop.jsp" style="padding: 5px;"></div>
            </div>
        </div>
    </body>
</html>
