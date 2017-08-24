$(function() {
	var ctxpath=$("#ctxPath").val();
	ctxpath=ctxpath.endWith("/") ? ctxpath : ctxpath+"/";
	var diagramData=$("#diagramData").text();
	var nodeStatus = $("#nodeStatus").text();
	if(nodeStatus!=""&&nodeStatus!=undefined){
		nodeStatus = JSON.parse($("#nodeStatus").text());
	}else{
		nodeStatus = {}
	}

	var nodeInfo = "";
	//! 创建flowchart
    //! 参数1 - 画布Div（对div无特殊要求）。允许以下两种值
    //!     #1 Div的id
    //!     #2 document.getElementById(id)(jquery格式$("#[id]")[0])的DOM节点
    //! 参数2 - 允许以下两种值
    //!     #1 IBM的BPM输出的json（string或json对象）
    //!     #2 MyFlowchart.exportModelData输出的json（string或json对象）
    var myFlowchart = new MyFlowchart("graphContainer", diagramData);
    // modify.json的格式是MyFlowchart.exportModelData输出的格式
    //var myFlowchart = new MyFlowchart("graphContainer", getFileText("modify.json"));

    
    $("#readonly").click(function() {
        // 反转设置flowchart只读
    	var aa = !myFlowchart.getSelectOnly();
        myFlowchart.setSelectOnly(!myFlowchart.getSelectOnly());
        
        $(this).html(myFlowchart.getSelectOnly() ? "可写" : "只读");
    });

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
        selected.label.text = "123456";
        
        //判断是任务节点还是系统节点
        if (!selected||selected.type=="gateway") {
            alert("请选择流程节点");
            return;
        }
        
        //如果为任务节点则查询其处理人信息
        $.ajax({
			type : 'post',
			url : ctxpath+'console/diagram/getNodeInFoById.xsp',
			data : {
					nodeId :selected.id,
					instanceId: $("#instanceId").val()
					},
			dataType : 'json',
			success : function(result) {
				$("#nodeInfodg").datagrid('loadData',result);
			}
		});
        
        $('#label').text(selected.label.text);
        var state = "", statemessage = "";
        if (selected.state) {
            state = selected.state.type;
            statemessage = selected.state.message;
        }
        $('#state').val(state);
        $('#statemessage').val(statemessage);
        $('#info').dialog('open');  
        //$('#info').modal('show');
    });
    

    //保存修改后的流程图
    $("#saveDiagram").click(function() {
        // 导出当前flowchart数据对象
        var data = myFlowchart.exportModelData();
        
    	//保存修改后的流程图信息
        $.ajax({
			type : 'post',
			url : ctxpath+'console/diagram/saveOrUpdateDiagram.xsp',
			data : {
					bpdId : $("#bpdId").val(), 
					processAppId : $("#procAppId").val(), 
					snapshotId : $("#snapshotId").val(), 
					diagramData :JSON.stringify(data),
					},
			dataType : 'json',
			success : function(result) {
				if(result.msg=="error"){
					alert(result.error);
				}else{
					alert("保存成功");
				}
			}
		});
    });
    

    $("#modeldata").click(function() {
        // 导出当前flowchart数据对象
        var data = myFlowchart.exportModelData();
        console.log(data);
        $('#message').text(JSON.stringify(data));
        
    });
    
    var subgraph;
    
    // 当flowchart的UI选中某单元时触发该方法
    // cell参数 - 选中的单元对象（只读。修改它不会有任何影响），该对象属性见上描述
    myFlowchart.onSelected = function(cell) {
        //console.log(cell);
        
        if (cell.type === "process" && cell.subtype === "link") {
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
    
//!
//! 以上未演示的方法：
//! #1 getVersion() - 获取版本号
//! #2 getCellById(id) - 该方法入参是单元的id(string)，返回单元对象（只读。修改它不会有任何影响），该对象属性见上描述，如果不存在返回undefaulted
//!

    $("#bpmndata").click(function() {
        console.log(myFlowchart.exportBPMNString({
            name            : "SUGE",
            targetNamespace : "http://GESU/SSS",
        }));
    });
});
