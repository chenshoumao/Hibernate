function datagrid() {
	var ctxpath=$("#ctxPath").val();
	ctxpath=ctxpath.endWith("/") ? ctxpath : ctxpath+"/";
	$('#datagrid')
			.datagrid(
					{
						height : '100%',
						fit : true,
						url : ctxpath+'console/diagram/listCreatedDiagram.xsp',
						method : 'POST',
						striped : true,
						rownumbers:true,
						nowrap : true,
						pageSize : 20,
						pageNumber : 1,
						pageList : [ 20,50,100,200,500],
						showFooter : true,
						loadMsg : '数据加载中请稍候……',
						pagination : true,
						toolbar : "#toolbar",
						singleSelect : false,
						checkOnSelect : false,
						selectOnCheck : false,
						columns : [ [
						 {
							field : 'ck',
							checkbox : true
						},
								{
									field : 'diagramId',
									title : '主键ID',
									width : 100,
									align : 'center',
									hidden : true
								},
								{
									field : 'diagramAltName',
									title : '流程图别名',
									width : 150,
									align : 'center',
									sortable:true,
									formatter : function (value, row, index) { 
										  var url = ctxpath+"console/diagram/createDiagram.xsp?diagramId="+row.diagramId;
										  return "<a style='color:blue' target='_blank' href='"+url+"'>"+value+"</a>";
									}
								},{
									field : 'snapshotId',
									title : '流程快照ID',
									width : 200,
									align : 'center',
									sortable:true,
									hidden : true
								},{
									field : 'bpdId',
									title : '流程图ID',
									width : 200,
									align : 'center',
									sortable:true,
									hidden : true
								},{
									field : 'processAppId',
									title : '流程应用库ID',
									width : 200,
									align : 'center',
									sortable:true,
									hidden : true
								},{
									field : 'createTime',
									title : '创建时间',
									width : 200,
									align : 'center',
									sortable:true,
									formatter : function(value, rec, index) {
										var s = new Date(value)
												.format("yyyy-MM-dd hh:mm:ss");
										return s;
									}
								},{
									field : 'updateTime',
									title : '更新时间',
									width : 200,
									align : 'center',
									sortable:true,
									formatter : function(value, rec, index) {
										var s = new Date(value)
												.format("yyyy-MM-dd hh:mm:ss");
										return s;
									}
								}
								
								] ],
						onSelect : function(rowData) {
							$('#datagrid').datagrid("unselectAll");
						},
						onLoadSuccess:function(){
							//$(this).datagrid("fixRownumber");
						}
					});
}

$(function(){
	datagrid();
});

