$(function() {
	
	
	
    var ctxPath=$("#ctxPath").val();
	var nspath=ctxPath+"/console/detform";  //命名空间路径
    var datAppId=$("#datAppId").val();

    $("#grid1").datagrid({
		url:nspath+"/getforms/"+datAppId+".action?r1="+Math.random(),
        //queryParams: {
        //    datappid: datAppId
        //},
		toolbar:"#toolbar",
		pagination:"true",
		pageSize:"50",
		rownumbers:"true",
		method:"get",
		fitColumns:"true",
		fit:"true",
		onDblClickRow: function (rowIndex, rowData) {
			var appid=$("#datAppId").val();
		/*	$("#iframe1").attr("src", nspath+"/modify/"+appid+"/"+rowData.formId+".xsp?r1="+Math.random());
			$("#dlgFormDef").window("open").window("setTitle", "编辑表单"); */
			window.open( nspath+"/modify/"+appid+"/"+rowData.formId+".xsp?r1="+Math.random());    
		}
	});

    //新建表单
	$("#btnnew").click(function(evt) {
		var appid=$("#datAppId").val();
		//$("#iframe1").attr("src", nspath+"/create/"+appid+".xsp?r1="+Math.random());
    	//$("#dlgFormDef").window("open").window("setTitle", "新建表单"); 
		window.open(nspath+"/create/"+appid+".xsp?r1="+Math.random());    
    });

	
	$("#btnnewTmp").click(function(evt) {
		var appid=$("#datAppId").val();
		$("#iframe1").attr("src", nspath+"/template/create/"+appid+".xsp?r1="+Math.random());
    	$("#dlgFormDef").window("open").window("setTitle", "新建表单"); 
    });
	
	//从已有表单创建表单
	$("#btncopy").click(function(evt) {
		var selRows = $('#grid1').datagrid('getChecked');  
		if (selRows.length==1) {
			$('#form_copy_dlg').dialog('open').dialog('setTitle', ' ');
			$('#copyFm').form('clear');
			$("#sourceFormName").html(selRows[0].formName);
			$("#sourceTitle").html(selRows[0].formTitle);
			$("#sourceFormId").val(selRows[0].formId);
		}else{
			$.messager.show({    // show error message
		         title: '温馨提示',
		         msg: '请选择一个表单进行拷贝'
		         });
		}
    });
	
	
	
	
	//导入表单原型信息
	$("#importPrototypeBtn").click(function(evt) {
		var appid=$("#datAppId").val();
		$("#iframeProtype").attr("src", $("#ctxPath").val()+"/console/form/prototype/openPrototype/"+appid+".xsp?r1="+Math.random());
    	$("#dlgFormProtype").window("open").window("setTitle", "导入原型表单"); 
		//window.open(url)  
    });

	//表单导出zip包数据
	$("#btnFormExport").click(function(evt) {
	   var selRows = $('#grid1').datagrid('getChecked');  
		if (selRows.length>0) {
			 var formIds=[];
			  $(selRows).each(function(index, item) {
				 formIds[index]=item.formId;
			 });
			  var form=$("<form>");//定义一个form表单
			  form.attr("style","display:none");
			  form.attr("target","");
			  form.attr("method","post");
			  form.attr("action",nspath+"/export.action");
			  var input1=$("<input>");
			  input1.attr("type","hidden");
			  input1.attr("name","formId");
			  input1.attr("value",JSON.stringify(formIds));
			  $("body").append(form);//将表单放置在web中
			  form.append(input1);
			  form.submit();//表单提交 
		}else{
			 $.messager.show({
                 title: '温馨提示',
                 msg: '请选择要导出的表单'
             });
		}
		});
	
	
	
   //打开拷贝表单对话框
	$("#copyForm").click(function(evt) {
		var selRows = $('#grid1').datagrid('getChecked');  
		if (selRows.length==1) {
			$('#form_copy_dlg').dialog('open').dialog('setTitle', ' ');
			$('#copyFm').form('clear');
			$("#sourceFormName").html(selRows[0].formName);
			$("#sourceTitle").html(selRows[0].formTitle);
			$("#sourceFormId").val(selRows[0].formId);
		}else{
			$.messager.show({    // show error message
		         title: '温馨提示',
		         msg: '请选择一个表单进行拷贝'
		         });
		}
	});
	
	//保存拷贝的表单
	$("#form_copy_dlg_saveBtn").click(function(evt) {
		var values = $("#copyFm").serialize();
		if ($("#copyFm").form('validate')) {
			$.ajax({
				url : nspath+"/copyForm.action",
				type : "post",
				data : values,
				dataType : "json",
				success : function(result) {
					if (result.state == true) {
						var appid=$("#datAppId").val();
						$('#form_copy_dlg').dialog('close');   
						$("#grid1").datagrid("load",{r2:Math.random(), datappid:appid});
					} else {
						$.messager.show({ 
							title : '温馨提示',
							msg : result.msg
						});
					}
				}
			});
		}
	});
	
	//删除表单
	$("#btndel").click(function(evt) {
		var appid=$("#datAppId").val();
		var selRows = $('#grid1').datagrid('getChecked');  
		if (selRows.length>0) {
			var formIds=[];
			$(selRows).each(function(index, item) {
				formIds[index]=item.formId;
			});
			$.messager.confirm('提示', "若为独立表单相应的表及数据都会删除，是否继续执行删除 "+selRows.length+" 个表单？", function(r){
				if (r){
					$.post(nspath+"/deleteform/"+appid+".action", {formIds:formIds}, function(data) {
						if (data.success) {
							alert("删除表单成功！");
							$("#grid1").datagrid("load",{r2:Math.random(), datappid:datAppId});
						} else {
							alert("删除表单失败！");
						}
					});
				}
			});
		}
	});
});

//“打开”列格式转换
function gridOpenLinkFmt(val,row) {
	var ctxPath=$("#ctxPath").val();
	var nspath=ctxPath+"/console/detform";  //命名空间路径
	var datapp=row.datApplication;
	if (datapp) {
		return "<a href='"+nspath+"/open/"+datapp.appId+"/"+row.formId+".xsp' target='_blank'>打开</a>";
	} else {
		return "";
	}
	
}



