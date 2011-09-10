/* 
 *  Document   : core
 *  Created on : 2011-5-27, 12:28:49
 *  Author     : GodSon
 *  Email      : wmails@126.com
 *  Link       : http://www.btboys.com
 *  Vsersion   : 0.1 
 */

/**
 * 公共核心包 G 
 * G.Class      创建类调用 G.Class({initialize:function(){}});
 * G.nameSpace  创建命名空间。param：name
 * G.loadJs     加载javascript。param：url
 * G.loadCSS    加载样式。param：url
 * G.importMD   导入模块。param：name模块名
 * G.logout     调试信息输出。param：mgs需输出的内容
 * G.window     创建弹出窗口。param：option
 * G.getNs      获取命名空间。param：name
 * G.util       工具包。G.util.&LT;isIE | getUUID | random | json2str >
 * G.config     全局配置
 * G.module     模块
 */
var G = (function(){
    return {
        Class: function(obj, supr) { 
            var sb = obj.initialize, sp;  
            delete obj.initialize;  
            if (!supr || typeof supr === 'object') {  
                sb.prototype = obj;  
            } else {  
                sp = function() {};  
                sp.prototype = supr.prototype;  
                sb.prototype = new sp();  
                sb.supr = sp.prototype;  
                jQuery.extend(sb.prototype, obj);  
            }  
            sb.prototype.constructor = sb;  
            return sb;  
        }, 
        nameSpace:function(ns,cb){      
            ns = G.config.baseNs+"."+ns;
            var nsArr = ns.split('.'), o;  
            o = window[nsArr[0]] = window[nsArr[0]] || {};  
            jQuery.each(nsArr.slice(1), function(i, n) {  
                o = o[n] = o[n] || {};  
            });  
            G.module[nsArr.slice(-1)].ns = eval(ns);  
            if (cb && typeof cb === 'function') cb.call(o);  
        },
        loadJs:function(url,callback){
            if(G.config.dev){
                var done = false;
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.language = 'javascript';
                script.charset = 'UTF-8';
                script.src = __rootPath+"/"+url;
                script.onload = script.onreadystatechange = function(){
                    if (!done && (!script.readyState || script.readyState == 'loaded' || script.readyState == 'complete')){
                        done = true;
                        script.onload = script.onreadystatechange = null;
                        if (callback){
                            callback.call();
                        }
                    }
                }
                document.getElementsByTagName("head")[0].appendChild(script);
            }else{
                $.getScript(__rootPath+"/"+url, function(){
                    if (callback){
                        callback.call();
                    }
                });
            }
        },
        loadCSS:function(url){
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.media = 'screen';
            link.href =__rootPath+"/"+ url;
            document.getElementsByTagName('head')[0].appendChild(link);
        },
        importMD: function(name, callback) {
            if (G.module[name].ns && G.config.dev) { 
                callback.call(G.module[name].ns);  
                return;
            }
            var mm = [];
            if (typeof name == 'string'){
                add(name);
            } else {
                for(var i=0; i<name.length; i++){
                    add(name[i]);
                }
            }
            function add(name){
                if (!G.module[name]) return;
                var d = G.module[name]['dependencies'];
                if (d){
                    for(var i=0; i<d.length; i++){
                        add(d[i]);
                    }
                }
                mm.push(name);
            }
                
            function loadMm(){
                if (mm.length){
                    var m = mm[0]; 
                    if (!G.module[m].ns){
                        loadSingle(m, function(){
                            mm.shift();
                            loadMm();
                        });
                    } else{
                        mm.shift();
                        loadMm();
                    }
                } else {
                    if (callback){
                        callback.call(G.module[name].ns);
                    }
                }
            }
            loadMm();
            
            function loadSingle(name, callback){
                var module = G.module[name];
                if (module['css']){
                    var url = module['css'];
                    G.loadCSS(url);
                }
                G.loadJs(module['js'], function(){
                    if (callback){
                        callback.call();
                    }
                });
            }
        },
        logout:function(msg){
            if (window.console && window.console.log) {
                window.console.log(msg);
            }else if (window.opera && window.opera.postError) {
                window.opera.postError(msg);
            }else{
                throw new Error(msg);
            }
        },
        $:function(cls){
            return $(cls,G.config.container);
        },
        window:function(option){
            if(!option.target){
                option["target"] = G.config.container.parent();
            }
            jQuery.createWin(option);
        },
        alert:function(content,icon){
            switch (icon) {
                case "e":
                    $.messager.alert("系统提示",content,'error');
                    break;
                case "q":
                    $.messager.alert("系统提示",content,'question');
                    break;
                case "w":
                    $.messager.alert("系统提示",content,'warning');
                    break;
                default:
                    $.messager.alert("系统提示",content);
                    break;
            }
        },
        confirm:function(content,cb){
            $.messager.confirm("系统提示",content,function(r){
                if(typeof cb == "function"){
                    cb.call(this,r);
                }else{
                    G.alert("缺少回调函数！");
                }
            });
        },
        msg:function(content,icon){
             $.remind({msg:content,icon:icon||"success",title:"系统提示"});
        },
        grid:function(config){
            //默认配置
            var defaultConfig = {
                loadMsg: "加载中,请稍后……",
                fit: true,
                search:true,
                nowrap: true,
                striped: false,
                remoteSort: true,
                fitColumns: true,
                pagination: true,
                pageList:[15,30,50],
                rownumbers:true,
                rowStyler: function(){
                    return "cursor: default;";
                }
            };
            
            config = $.extend({}, defaultConfig, config || {});
            var target;
           
            if(config.id){
                target = $('#'+config.id);
            }else{
                target = $('.'+config.cls,G.config.container);
            }
            
            if(config.search){
                config.toolbar.push("-");
                config.toolbar.push({
                    text : "检索",
                    iconCls : "icon-search",
                    handler : function() {
                        G.window({
                            url:__rootPath+"/widget/jsp/search.jsp",
                            title:"检索",
                            minimizable: false,
                            collapsible: true,
                            noState:true,
                            iconCls : "icon-search",
                            target:target.parent(),
                            align:"tright",
                            buttons:[{
                                text:"开始检索",
                                iconCls : "icon-search",
                                handler:function(){
                                            
                                }
                            }],
                            onComplete:function(){
                                var cbv=[];
                                var fields = target.datagrid('getColumnFields');
                                $.each(fields,function(i,v){
                                    if(v){
                                        var opt = target.datagrid('getColumnOption',v);
                                        if(opt.title && !opt.noSearch){
                                            cbv.push({
                                                "value":v,
                                                "text":opt.title
                                            });
                                        }
                                    }
                                });
                                $("div.search_Condition_List select.search_Filed").combobox("loadData",cbv);
                            }
                        });
                    }
                });
                config.toolbar.push({
                    text:"清除检索条件",
                    iconCls:"icon-clear",
                    handler:function(){
                        target.datagrid("myreload",{});
                    }
                });
            }
            
            if(config.unselect){
                config.onSelect = function(rowIndex){
                    $(this).datagrid("unselectRow",rowIndex);
                };
            }
            //初始化datagrid
            target.datagrid(config);
        },
        treeGrid:function(config){
            //默认配置
            var defaultConfig = {
                loadMsg: "加载中,请稍后……",
                fit: true,
                search:true,
                nowrap: true,
                striped: false,
                remoteSort: true,
                fitColumns: true,
                rowStyler: function(){
                    return "cursor: default;";
                }
            };
            config = $.extend({}, defaultConfig, config || {});
            var target;
           
            if(config.id){
                target = $('#'+config.id);
            }else{
                target = $('.'+config.cls,G.config.container);
            }
            
            if(config.search){
                config.toolbar.push("-");
                config.toolbar.push({
                    text : "检索",
                    iconCls : "icon-search",
                    handler : function() {
                        G.window({
                            url:__rootPath+"/widget/jsp/search.jsp",
                            title:"检索",
                            minimizable: false,
                            collapsible: true,
                            noState:true,
                            iconCls : "icon-search",
                            target:target.parent(),
                            align:"tright",
                            buttons:[{
                                text:"开始检索",
                                iconCls : "icon-search",
                                handler:function(){
                                            
                                }
                            }],
                            onComplete:function(){
                                var cbv=[];
                                var fields = target.datagrid('getColumnFields');
                                $.each(fields,function(i,v){
                                    if(v){
                                        var opt = target.datagrid('getColumnOption',v);
                                        if(opt.title){
                                            cbv.push({
                                                "value":v,
                                                "text":opt.title
                                            });
                                        }
                                    }
                                });
                                $("div.search_Condition_List select.search_Filed").combobox("loadData",cbv);
                            }
                        });
                    }
                });
                config.toolbar.push({
                    text:"清除检索条件",
                    iconCls:"icon-clear",
                    handler:function(){
                        target.treegrid("myreload",{});
                    }
                });
            }
            //初始化datagrid
            target.treegrid(config);
        },
        getNs:function(ns){
            return G.module[ns].ns;
        },
        util: { // 工具集    
            isIE: function() {  
                return jQuery.browser.msie;  
            },
            getUUID:function() {  
                return "UUID-"+(G.util.random()+G.util.random()+"-"+G.util.random()+"-"+
                    G.util.random()+"-"+G.util.random()+"-"+G.util.random()+G.util.random()+G.util.random());  
            },
            random:function(){
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            },
            json2str:function(json){
                var arr = [];
                var fmt = function(s) {
                    if (typeof s == 'object' && s != null) return json2str(s);
                    return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
                }
                for (var i in json) arr.push("'" + i + "':" + fmt(json[i]));
                return '{' + arr.join(',') + '}';
            }
        },
        config:{ //全局配置
            baseNs:"EasyUI",
            dev:false,
            gridView:{},
            globarNturl:null,
            mainCenterPanelID:'Main_content_layout'
        },
        module: {} // 注册模块及其路径
    }
})();
