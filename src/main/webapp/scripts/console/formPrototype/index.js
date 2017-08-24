//分页加载表单原型数据
function datagrid(name) {
	$('#datagrid').datagrid(
			{
				height : '95%',
				fit : true,
				url : $("#basePath").val()
						+ '/console/form/prototype/findByPage.action',
				method : 'POST',
				queryParams : {
					"name" : name
				},
				striped : true,
				nowrap : true,
				pageSize : 17,
				pageNumber : 1,
				pageList : [ 17 ],
				showFooter : true,
				loadMsg : '数据加载中请稍候……',
				pagination : true,
				toolbar : "#toolbar",
				singleSelect : false,
				checkOnSelect : false,
				selectOnCheck : false,
				columns : [ [ {
					field : 'ck',
					checkbox : true
				}, {
					field : 'prototypeId',
					title : 'prototypeId',
					width : 100,
					align : 'center',
					hidden : true
				}, {
					field : 'code',
					title : '编码',
					width : 200,
					align : 'center'
				}, {
					field : 'name',
					title : '名称',
					width : 130,
					align : 'center'
				}, {
					field : 'title',
					title : '标题',
					width : 130,
					align : 'center'
				}, {
					field : 'creatorName',
					title : '创建者',
					width : 130,
					align : 'center'
				}, {
					field : 'createTime',
					title : '创建时间',
					width : 200,
					align : 'center',
					formatter : function(value, rec, index) {
						var s = new Date(value).pattern("yyyy-MM-dd hh:mm:ss");
						return s;
					}
				}, {
					field : 'updateByName',
					title : '更新者',
					width : 130,
					align : 'center'
				}, {
					field : 'updateTime',
					title : '更新时间',
					width : 200,
					align : 'center',
					formatter : function(value, rec, index) {
						var s = new Date(value).pattern("yyyy-MM-dd hh:mm:ss");
						return s;
					}
				} ] ],
				onSelect : function(rowData) {
					$('#datagrid').datagrid("unselectAll");
				},
				onDblClickRow : function(rowIndex, rowData) {
					update(rowData.prototypeId);
				}
			});
}

//查询
function searchByName() {
	datagrid($("#name").val());
}
//更新
function update(prototypeId){
	window.open($("#basePath").val()+ '/console/form/prototype/update.xsp?prototypeId='+prototypeId);                 
}
//新建
function newPrototype(){
	window.open($("#basePath").val()+ '/console/form/prototype/newPrototype.xsp');                 
}


function destroy() {
	var rows = $('#datagrid').datagrid('getChecked');
	if (rows.length > 0) {
		$.messager
				.confirm(
						'温馨提示',
						'你真的要删除么?',
						function(r) {
							if (r) {
								var jsonData = {
										prototypeId : []
								};
								for (var i = 0; i < rows.length; i++) {
									jsonData.prototypeId
											.push(rows[i].prototypeId);
								}
								$.ajax({
											url : $("#basePath").val()
													+ "/console/form/prototype/delete.action",
											type : "post",
											data : jsonData,
											dataType : "json",
											success : function(result) {
												if (result.state == true) {
													$('#datagrid').datagrid(
															'reload');
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
	}
}

$(function() {
	datagrid($("#activityMetaCfg").val());
});