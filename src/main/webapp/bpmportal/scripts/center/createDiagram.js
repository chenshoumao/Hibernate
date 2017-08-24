
 
function getFileText(filename) {
    var xhrObj = new XMLHttpRequest();
    xhrObj.open('GET', filename, false);
    xhrObj.send('');
    return xhrObj.responseText;
}

window.onload = function() {
	var ctxpath=$("#ctxPath").val();
	ctxpath=ctxpath.endWith("/") ? ctxpath : ctxpath+"/";
    var design;
    
    //! 创建flowchart
    //! 参数1 - 画布Div（对div无特殊要求）。允许以下两种值
    //!     #1 Div的id
    //!     #2 document.getElementById(id)(jquery格式$("#[id]")[0])的DOM节点
    //! 参数2 - 允许以下两种值
    //!     #1 IBM的BPM输出的json（string或json对象）
    //!     #2 MyFlowchart.exportModelData输出的json（string或json对象）
    
    // process.json的格式是IBM产品导出的json格式
    //var myFlowchart = new MyFlowchart("graphContainer", getFileText("process.json"));
    
    // modify.json的格式是MyFlowchart.exportModelData输出的格式
    //var myFlowchart = new MyFlowchart("graphContainer", getFileText("modify.json"));
    
    // 演示设计器 >>>
    // 设置画布大小
    design = true;
    $("#graphContainer").css({ width: 1000, height: 800, overflow: "auto" });
    var myFlowchart = new MyFlowchart({
        canvasDiv: "graphContainer",
        toolbar: {
            element: "toolbarDiv",
            btns: {
                // btn btn-primary 是 bootstrap 自带的 button 风格
                start: {
                    text: "开始",
                    class: "btn btn-primary",
                    // button 图标
                    img: ctxpath+"images/layout.png",
                    attr: {
                        // button title
                        title: "增加开始节点",
                    }
                },
                end: {
                    text: "结束",
                    class: "btn btn-primary",
                },
                gateway: {
                    text: "判断",
                    class: "btn btn-primary",
                },
                gateway_or: {
                    text: "合并",
                    class: "btn btn-primary",
                },
                gateway_and: {
                    text: "并行",
                    class: "btn btn-primary",
                },
                process: {
                    text: "处理",
                    class: "btn btn-primary",
                },
                process_link: {
                    text: "连接处理",
                    class: "btn btn-primary",
                },
                process_sub: {
                    text: "子处理",
                    class: "btn btn-primary",
                },
                process_sys: {
                    text: "系统处理",
                    class: "btn btn-primary",
                },
                process_HQ_seq: {
                    text: "串行会签",
                    class: "btn btn-primary",
                },
                process_HQ_par: {
                    text: "并行会签",
                    class: "btn btn-primary",
                },
            }
        }
    });
    // <<<


    $("#nodeinfo").click(function() {
        //!
        //! myFlowchart.currentSelected是当前flowchart里选中的单元（只读。修改它不会有任何影响）。无选中==null
        //! 单元对象属性包括 - 
        //! # id - string, 对应IBM的json里对象的id
        //! # label - object, 单元的标题属性。该属性是对象，它的text属性存放单元的标题名称
        //! # state - object, 单元状态。如果未使用updateCell设置该单元的状态，无该属性=undefaulted
        //!     state - 对象包含两个string型属性
        //!         state.type - string, 可用值列表[ [空], running, waiting, completed, error ]之一
        //!         state.message - string, 状态描述
        //! # type - string, 单元的类型。可用值列表[ process, gateway ]
        //! # subtype - string, 单元的子类型，与type组合使用。可用值列表
        //!     type = process时，[ [undefaulted], sub, link, sys, HQ_seq, HQ_par ] => [ 普通节点, 子流程, 连接流程, 系统流程, 串行会签, 并行会签 ]
        //!     type = gateway时，[ switch, or, and ] => [ 判断, 并行, 等待合并 ]
        //! # ref - 该属性是对IBM的json里对应对象引用，可在这里找到原始的值
        //!
        var selected = myFlowchart.currentSelected;
        
        if (!selected) {
            alert("请选择节点");
            return;
        }
        
        $('#label').text(selected.label.text);
        var state = "", statemessage = "";
        if (selected.state) {
            state = selected.state.type;
            statemessage = selected.state.message;
        }
        $('#state').val(state);
        $('#statemessage').val(statemessage);
        
        $('#info').modal('show');
    });

    $("#setup").click(function() {
        // 修改flowchart里指定单元的信息
        myFlowchart.updateCell(myFlowchart.currentSelected.id, {state: $('#state').val(), statemessage: $('#statemessage').val()});
        
        $('#info').modal('hide');
    });

    //点击保存流程图
    $("#modeldata").click(function() {
    	var diagramAltName = $("[name='diagramAltName']").val();
    	var diagramId = $("[name='diagramId']").val();
    	if ($.trim(diagramAltName)=="") {
    		alert("请填写别名");
    	}else{
	        // 导出当前flowchart数据对象
	        var data = myFlowchart.exportModelData();
	    	$.ajax({
	    		url: ctxpath+"console/diagram/saveCreatedDiagram.xsp",
	    		data :{
	    			diagramData:JSON.stringify(data),
	    			diagramId:diagramId,
	    			diagramAltName:diagramAltName
	    			},
	    		type : "post",
	    		dataType : "json",
	    		success : function(result) {
	    			if(result.msg=="error"){
						alert(result.error);
					}else{
						$("[name='diagramId']").val(result.diagramId);
						alert("保存成功");
					}
	    		},
	    		error :function(result){
					alert(JSON.stringify(result));
	    		}
	    	})
    	}
    	
    });
    
    $("#bpmndata").click(function() {
        $('#message').text(myFlowchart.exportBPMNString({
            name            : "test1",
            targetNamespace : "http://test/test1",
        }));
    });
    
    var subgraph;
    
    // 当flowchart的UI选中某单元时触发该方法
    // cell参数 - 选中的单元对象（只读。修改它不会有任何影响），该对象属性见上描述
    myFlowchart.onSelected = function(cell) {
        //console.log(cell);
        $('#message').text("Select node=" + cell.label.text);
        
        if (!design && cell.type === "process" && cell.subtype === "link") {
            // 因为用div实现子流程显示，而flowchart内部俘获键盘事件。
            // 如果不对主流程图setEnabled(false)的话，主流程图依然会俘获和处理键盘事件。
            // 这样对于Delete这样的按键就无法正确传递到正在显示操作的子流程上
            myFlowchart.setEnabled(false);
            
            // 只是演示如何加载子流程
            subgraph = new MyFlowchart(document.getElementById("graphContainer2"), getFileText("subform.json"));
            
            $('#sub').modal('show');
        }
    };

    $("#sub").on("hidden.bs.modal", function () {
        // 因为subgraph被重复使用，所以在关闭是要destroy
        subgraph.destroy();
        // 恢复主流程图
        myFlowchart.setEnabled(true);
    });
    
    //渲染指定的流程图
    var diagramData=$("#diagramData").text();
    if(""!=diagramData){
	    myFlowchart = new MyFlowchart("graphContainer", diagramData);
    }
//!
//! 以上未演示的方法：
//! #1 getVersion() - 获取版本号
//! #2 getCellById(id) - 该方法入参是单元的id(string)，返回单元对象（只读。修改它不会有任何影响），该对象属性见上描述，如果不存在返回undefaulted
//!

}
