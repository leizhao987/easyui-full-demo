<%-- 
    Document   : upload
    Created on : 2011-6-14, 18:14:02
    Author     : GodSon
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="easyui-layout" border="false" fit="true">
    <div region="center" border="false">
        <form>
            <div id="uploader">
                <p>您的浏览器不能播放Flash，Silverlight， Gears，BrowserPlus或HTML5的支持。</p>
            </div>
        </form>
    </div>
    <div region="south" style="height: 32px;padding: 3px; text-align: right;">
        <a href="javascript:void(0)" class="easyui-linkbutton" id="widget_uplaod_btn_start">开始上传</a>
        <a href="javascript:void(0)" class="easyui-linkbutton" id="widget_uplaod_btn_stop" disabled="true">中断上传</a>
        <a href="javascript:void(0)" class="easyui-linkbutton" id="widget_uplaod_btn_close" disabled="true">关闭</a>
    </div>
</div>
