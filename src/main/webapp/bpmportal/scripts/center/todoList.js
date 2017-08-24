$(function() {
	var ctxPath=$("#ctxPath").val();
	var nspath=ctxPath+"/bpmportal/center";  //命名空间路径

    $("#grid1").datagrid({
		url:nspath+"/gettodolist.action?r1="+Math.random(),
		pagination:"true",
		pageSize:"50",
		rownumbers:"true",
		method:"get",
		fitColumns:"true",
		fit:"true"
	});
});

//“标题”列格式转换
function gridOpenLinkFmt(val,row) {
	var docTitle=val;
	if ($.trim(docTitle)=="") {
		docTitle="无标题("+row.documentId+")";
	}
	var titleHtml="";
	var ctxPath=$("#ctxPath").val();
	var nspath=ctxPath+"/console/template/engine/opendocument/"; 
	//var datapp=row.datApplication;
	if (row.appId!=null && $.trim(row.appId)!="" 
			&& row.documentId!=null && $.trim(row.documentId)!="") {
		titleHtml="<a href='"+nspath+row.appId+"/"+row.documentId+
			".xsp?mode=edit&taskId="+row.taskId+"' target='_blank'>"+docTitle+"</a>";
	} else {
		titleHtml=docTitle;
	}
	return titleHtml;
}
