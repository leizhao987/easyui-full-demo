<%-- 
    Document   : function
    Created on : 2011-9-11, 16:55:12
    Author     : GodSon
    Email      : wmails@126.com
    Link       : www.btboys.com 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="easyui-layout" fit="true">
    <div region="center" style="width: 100%;height: 100%;">

    </div>
    <div region="east" style="width: 200px;">
        <div class="easyui-layout" fit="true">
            <div region="east" style="width: 27px;" class="westhbg" border="false">
                <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-plus"  title="添加"></a>
                <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-minus"  title="删除"></a>
                <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-upload" title="导入"></a>
                <a href="javascript:void(0)" class="easyui-linkbutton" plain="true" iconCls="icon-packageDownload"  title="导出"></a>
            </div>
            <div region="center" border="false">
                <ul class="easyui-tree" id="functionListTree"></ul>
            </div>
        </div>

    </div>  

    <div region="center" border="false">
        <table id="funurlSet"></table>
    </div>        
</div>
<script type="text/javascript">
    $(function(){
	
        var config111={
            id:"funurlSet",
            url:'${pageContext.request.contextPath}/data/function.json',
            columns: [[{
                        checkbox:true
                    },{
                        field:"funName",
                        title:"所属功能",
                        align:"center",
                        sortable:true,
                        width:100
                    },{
                        field:"urlPath",
                        title:"URL",
                        width:230,
                        formatter:function(value){
                            return "<lable title='"+value+"'>"+value+"</lable>";
                        }
                    },{
                        field:"isAjax",
                        title:"Ajax",
                        width:50,
                        align:"center",
                        formatter:function(value){
                            if(value == "1"){
                                return "<font color='green'>Ajax请求</font>";
                            }
                            return "普通请求";
                        }
                    },{
                        field:"des",
                        title:"描述",
                        width:100,
                        formatter:function(value){
                            if(value != null){
                                return "<lable title='"+value+"'>"+value+"</lable>";
                            }
                        }
                    }]],
            toolbar:[{
                    iconCls:"icon-plus",
                    text:"添加",
                    handler:function(){}
                },{
                    iconCls:"icon-pencil",
                    text:"更新",
                    handler:function(){}
                },{
                    iconCls:"icon-minus",
                    text:"删除",
                    handler:function(){}
                }]
        };
        G.grid(config111);
    });



</script>
