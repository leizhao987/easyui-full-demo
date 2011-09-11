<%-- 
    Document   : desktop
    Created on : 2011-9-10, 23:10:46
    Author     : GodSon
    Email      : wmails@126.com
    Link       : www.btboys.com 
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div id="portal" style="position:relative">
    <div style="width: 30%">
        <div title="信息" style="height: 300px"></div>
    </div>
    <div  style="width: 30%">
        <div  title="信息" style="height: 300px"></div>
    </div>
     <div style="width: 30%">
        <div  title="信息" style="height: 300px"></div>
    </div>
</div>
<script>
    G.importMD('portal',function(){
        $('#portal').portal({
            border:false,
            fit:true
        });
    });
</script>