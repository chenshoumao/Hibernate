(function($){
        $.fn.serializeJson=function(){
            var serializeObj={};
            var array=this.serializeArray();
            var str=this.serialize();
            $(array).each(function(){
                if(serializeObj[this.name]){
                    if($.isArray(serializeObj[this.name])){
                        serializeObj[this.name].push(this.value);
                    }else{
                        serializeObj[this.name]=[serializeObj[this.name],this.value];
                    }
                }else{
                    serializeObj[this.name]=this.value;
                }
            });
            return serializeObj;
        };
    })(jQuery);

function defaultOwners(tableId, index) {
	var defaultOwnerType = $(
			"#" + tableId + " select[name='defaultOwnerType" + index + "']")
			.val();
	$("#owners" + index + "_people_lable").hide();
	$("#owners" + index + "_deptId_lable").hide();
	$("#owners" + index + "_peopleId_lable").hide();
	$("#owners" + index + "_roleName_lable").hide();

	$("#owners" + index + "_people_id").hide();
	$("#owners" + index + "_deptId_id").hide();
	$("#owners" + index + "_peopleId_id").hide();
	$("#owners" + index + "_roleName_id").hide();

	$("#owners" + index + "_deptIdRole_lable").hide();
	$("#owners" + index + "_deptIdRole_id").hide();
	$("#user_define" + index).hide();
	$("#user_define"+index+"_lable").hide();
	if (defaultOwnerType == 'A') {
		$("#owners" + index + "_people_lable").show();
		$("#owners" + index + "_people_id").show();
	} else if (defaultOwnerType == 'B') {
		$("#owners" + index + "_deptId_lable").show();
		$("#owners" + index + "_deptId_id").show();
		$("#owners" + index + "_deptIdRole_lable").show();
		$("#owners" + index + "_deptIdRole_id").show();
	} else if (defaultOwnerType == 'C') {
		$("#owners" + index + "_peopleId_lable").show();
		$("#owners" + index + "_peopleId_id").show();
	} else if (defaultOwnerType == 'D') {
		$("#owners" + index + "_roleName_lable").show();
		$("#owners" + index + "_roleName_id").show();
	} else if (defaultOwnerType == 'G') {
		$("#user_define" + index).show();
		$("#user_define"+index+"_lable").show();
	} else {
		
		
	}
}
/*初始化选中节点的数据*/
function initSelectedNode(index, data) {
	var jsonstr = "metaList" + index;
	if(data.length>0){
	var obj = data[index];
	var type = obj.defaultOwnerType;
	defaultOwners(jsonstr,index);
	/*
	 * console.log(obj); //是否允许退回 $("#"+jsonstr+"
	 * input[type='radio'][name='allowReject"+index+"'][value='"+obj.allowReject+"']").attr("checked",true);
	 * 
	 * //是否允许取回 $("#"+jsonstr+"
	 * input[type='radio'][name='allowRollback"+index+"'][value='"+obj.allowRollback+"']").attr("checked",true);
	 * 
	 * //是否允许转签 $("#"+jsonstr+"
	 * input[type='radio'][name='allowTransfer"+index+"'][value='"+obj.allowTransfer+"']").attr("checked",true);
	 * 
	 * //是否允许加签 $("#"+jsonstr+"
	 * input[type='radio'][name='allowOversign"+index+"'][value='"+obj.allowOversign+"']").attr("checked",true);
	 * 
	 * //是否允许传阅 $("#"+jsonstr+"
	 * input[type='radio'][name='allowPassby"+index+"'][value='"+obj.allowPassby+"']").attr("checked",true);
	 * 
	 * //是否允许删除附件 $("#"+jsonstr+"
	 * input[type='radio'][name='allowDelfile"+index+"'][value='"+obj.allowDelfile+"']").attr("checked",true);
	 * 
	 * //是否允许上传附件 $("#"+jsonstr+"
	 * input[type='radio'][name='allowUpload"+index+"'][value='"+obj.allowUpload+"']").attr("checked",true);
	 * 
	 * $("#"+jsonstr+"
	 * select[name='defaultOwnerType"+index+"']").val(obj.defaultOwnerType);
	 */
	var nextactivities = $(
			"#" + jsonstr + "  input[name='nextactivities" + index + "']")
			.val();
	var nextactivitiesName = "";
	if (nextactivities != "") {
		var nextactivitiesArray = nextactivities.split(",");
		for (var i = 0; i < nextactivitiesArray.length; i++) {
			var nextactivitie = nextactivitiesArray[i];
			for (var b = 0; b < data.length; b++) {
				var tmp = data[b];
				if (tmp.activityId == nextactivitie) {
					nextactivitiesName += tmp.activityName + ","
				}

			}
		}
	}
	$("#" + jsonstr + "  input[name='nextactivitiesName" + index + "']").val(
			nextactivitiesName);
	}else{
		alert("请先点击环节同步,无该快照的环节元数据");
	}
}

// 选中环节加载节点属性数据
function selectedNode(courentObj, data) {
	$(courentObj).addClass('select1').siblings('tr').removeClass('select1');
	var jsonstr = $(courentObj).find("td:last").text();
	$("#desktopListTabDiv  table").hide();
	$("#" + jsonstr).show();
	$("#" + jsonstr+"_sla").show();
	$("#" + jsonstr+"_bizPanel").show();
	var index = jsonstr.replace("metaList", "");
	initSelectedNode(index, data);
}

function saveActityMeta(datas) {
	for (var i = 0; i < datas.length; i++) {
		var tableId = "metaList" + i;
		datas[i].activityId = $(
				"#" + tableId + "  input[name='activityId" + i + "']").val();
		datas[i].formPath = $(
				"#" + tableId + "  input[name='formPath" + i + "']").val();
		datas[i].downloadFileLabel = $(
				"#" + tableId + "  input[name='downloadFileLabel" + i + "']")
				.val();
		datas[i].noteType = $(
				"#" + tableId + "  input[name='noteType" + i + "']").val();
		datas[i].submitManCount = $(
				"#" + tableId + "  input[name='submitManCount" + i + "']")
				.val();
		datas[i].uploadFileLabel = $(
				"#" + tableId + "  input[name='uploadFileLabel" + i + "']")
				.val();
		datas[i].defaultOwnerType = $(
				"#" + tableId + " select[name='defaultOwnerType" + i + "']")
				.val();
		datas[i].nextactivities = $(
				"#" + tableId + " select[name='nextactivities" + i + "']")
				.val();

		datas[i].allowReject = $(
				"#" + tableId + " input[name='allowReject" + i + "']:checked")
				.val();
		datas[i].allowCancel = $(
				"#" + tableId + " input[name='allowCancel_" + i + "']:checked")
				.val();
		datas[i].allowRollback = $(
				"#" + tableId + " input[name='allowRollback" + i + "']:checked")
				.val();
		datas[i].allowTransfer = $(
				"#" + tableId + " input[name='allowTransfer" + i + "']:checked")
				.val();
		datas[i].allowOversign = $(
				"#" + tableId + " input[name='allowOversign" + i + "']:checked")
				.val();
		datas[i].allowPassby = $(
				"#" + tableId + " input[name='allowPassby" + i + "']:checked")
				.val();
		datas[i].allowDelfile = $(
				"#" + tableId + " input[name='allowDelfile" + i + "']:checked")
				.val();
		datas[i].allowUpload = $(
				"#" + tableId + " input[name='allowUpload" + i + "']:checked")
				.val();
		datas[i].nextactivities = $(
				"#" + tableId + " input[name='nextactivities" + i + "']").val();
		
		datas[i].sortNum= $(
				"#" + tableId + " input[name='owners"+i+"_sortNum']").val();
		
		datas[i].stepId= $(
				"#" + tableId + " input[name='owners"+i+"_stepId']").val();
		
		datas[i].assignVarName= $(
				"#" + tableId + " select[name='assignVarName_"+i+"']").val();
		
		datas[i].handleSignType= $(
				"#" + tableId + " :radio[name='handleSignType_"+i+"']:checked").val();
		
		datas[i].emailNotification= $(
				"#" + tableId + " select[name='emailNotification_"+i+"']").val();
		
		datas[i].limitCandidate= $(
				"#" + tableId + " select[name='limitCandidate_"+i+"']").val();
		
		datas[i].defaultPassBy= $(
				"#" + tableId + " select[name='defaultPassBy_"+i+"']").val();
		
		
		datas[i].signCountVarName= $("#" + tableId + " select[name='signCountVarName_"+i+"']").val();
		
		datas[i].completeRate= $("#" + tableId + " input[name='completeRate"+i+"']").val();
		datas[i].activityGroupName=$.trim($("#" + tableId + "  input[name='activityGroupName_"+i+"']").val());
		
		
		datas[i].activityRuntime=$("#" + tableId + "_sla  input[name='activityRuntime"+i+"']").val();
		datas[i].activityRuntimeUnit=$("#" + tableId + "_sla  select[name='activityRuntimeUnit"+i+"']").val();
		datas[i].activityCostPrehour=$("#" + tableId + "_sla  input[name='activityCostPrehour"+i+"']").val();
		datas[i].overtimeNotifyIsLoop=$("#" + tableId + "_sla  select[name='overtimeNotifyIsLoop"+i+"']").val();
		datas[i].overtimeTemplateId=$("#" + tableId + "_sla  select[name='overtimeTemplateId"+i+"']").val();
		datas[i].overtimeNotifyPeople=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"']").val();
		datas[i].overtimeLoopTplId=$("#" + tableId + "_sla  select[name='overtimeLoopTplId"+i+"']").val();
		datas[i].overtimeLoopNotifyPeople=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"']").val();
		datas[i].loopStartTimeSpan=$("#" + tableId + "_sla  input[name='loopStartTimeSpan"+i+"']").val();
		datas[i].loopTimeSpan=$("#" + tableId + "_sla  input[name='loopTimeSpan"+i+"']").val();
		datas[i].loopStartTimeUnit=$("#" + tableId + "_sla  select[name='loopStartTimeUnit"+i+"']").val();
		datas[i].loopTimeUnit=$("#" + tableId + "_sla  select[name='loopTimeUnit"+i+"']").val();
		datas[i].overtimeNotifyEvent=$("#" + tableId + "_sla  input[name='overtimeNotifyEvent"+i+"']").val();
		datas[i].loopNotifyEvent=$("#" + tableId + "_sla  input[name='loopNotifyEvent"+i+"']").val();
		//alert($("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"P']").val());
		datas[i].overtimeNotifyPeopleMap.empName=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"P']").val();
		datas[i].overtimeNotifyPeopleMap.empId=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"PId']").val();
		datas[i].overtimeNotifyPeopleMap.roleName=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"R']").val();
		datas[i].overtimeNotifyPeopleMap.roleId=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"RId']").val();
		datas[i].overtimeNotifyPeopleMap.deptName=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"D']").val();
		datas[i].overtimeNotifyPeopleMap.deptId=$("#" + tableId + "_sla  input[name='overtimeNotifyPeople"+i+"DId']").val();
		
		datas[i].overtimeLoopNotifyPeopleMap.empName=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"P']").val();
		datas[i].overtimeLoopNotifyPeopleMap.empId=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"PId']").val();
		datas[i].overtimeLoopNotifyPeopleMap.roleName=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"R']").val();
		datas[i].overtimeLoopNotifyPeopleMap.roleId=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"RId']").val();
		datas[i].overtimeLoopNotifyPeopleMap.deptName=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"D']").val();
		datas[i].overtimeLoopNotifyPeopleMap.deptId=$("#" + tableId + "_sla  input[name='overtimeLoopNotifyPeople"+i+"DId']").val();
		
		datas[i].overTimeDeadlineEvent=$("#" + tableId + "_sla  select[name='overTimeDeadlineEvent"+i+"']").val();
		datas[i].overTimeDeadlineUnit=$("#" + tableId + "_sla  select[name='overTimeDeadlineUnit"+i+"']").val();
		datas[i].overTimeDeadline=$("#" + tableId + "_sla  input[name='overTimeDeadline"+i+"']").val();

		
		var type = $(
				"#" + tableId + " select[name='defaultOwnerType" + i + "']")
				.val();
		if (type == "A") {
			datas[i].defaultOwnersName = $(
					"#" + tableId + " input[name='owners" + i
							+ "_people_value_num']").val();
			//console.log(datas[i].defaultOwnersName);
		} else if (type == "B") {
			datas[i].defaultOwnersName = $(
					"#" + tableId + " input[name='owners" + i
							+ "_deptId_value']").val()
					+ "####"
					+ $(
							"#" + tableId + " input[name='owners" + i
									+ "_deptIdRole_value_num']").val();
		} else if (type == "C") {
			datas[i].defaultOwnersName = $(
					"#" + tableId + " input[name='owners" + i
							+ "_peopleId_value']").val();
		} else if (type == "D") {
			datas[i].defaultOwnersName = $(
					"#" + tableId + " input[name='owners" + i
							+ "_roleName_value_num']").val();
		} else if (type == "G") {
			datas[i].defaultOwnersName = $("#" + tableId + " input[name='user_define" + i
					+ "_value']").val();
		} else {
			datas[i].defaultOwnersName = null;
		}
	}
	
	var formSnapshotSlaCfg=$("#formSnapshotSlaCfg").serializeJson(); 
	//console.log(formSnapshotSlaCfg);
	var loadTip = layer.open({
		type : 3
	});
	
	//构建快照属性的字段JSON对象
	var formSnapshotCfg={};
	formSnapshotCfg.redoWithTransfer=$(":radio[name=redoWithTransfer]:checked").val();
	
	//构建快照事件属性的JSON对象
	var formEventCfg={};
	formEventCfg.overtimeNotifyEvent=$("#overtimeNotifyEvent").val();
	formEventCfg.loopNotifyEvent=$("#loopNotifyEvent").val();
	formEventCfg.instanceStartEvent=$("#instanceStartEvent").val();
	formEventCfg.instanceEndEvent=$("#instanceEndEvent").val();
	
	$.ajax({
		url : $("#basePath").val()
				+ "/console/bpm/activitymeta/createOrUpdate.action",
		type : "post",
		data : {
			"params" : JSON.stringify(datas),
			"formSnapshotSlaCfg":JSON.stringify(formSnapshotSlaCfg),
			"formSnapshotCfg":JSON.stringify(formSnapshotCfg),
			"processSnapshotId":$("#processSnapshotId").val(),
			"formEventCfg":JSON.stringify(formEventCfg)
		},
		dataType : "json",
		success : function(result) {
			layer.close(loadTip);
			if (result.state == false) {
				layer.alert("保存出错:" + result.msg, {
					closeBtn : 0,
					shift : 4
				// 动画类型
				});
			} else {
				layer.confirm('保存成功是否关闭当前窗口？', {
					btn : [ '是', '否' ]
				// 按钮
				}, function() {
					window.close();
				}, function() {

				});
			}
		},
		error : function() {
			layer.close(loadTip);
		}
	});

}

function selectBackLink(activityMetaId, currentLink) {
	$("#unSelectBackLink").html("");
	$("#alreadSelectBackLink").html("");
	var index = currentLink.replace("metaList", "");
	$("#currentLink").val(currentLink);
	for (var i = 0; i < datas.length; i++) {
		var tmp = datas[i];
		if (activityMetaId != tmp.activityId) {
			$("#unSelectBackLink").append(
					"<option value='" + tmp.activityId + "'>"
							+ tmp.activityName + "</option>");
		}
	}

	var nextactivities = $(
			"#" + currentLink + "  input[name='nextactivities" + index + "']")
			.val();
	var nextactivitiesName = "";
	if (nextactivities != "") {
		var nextactivitiesArray = nextactivities.split(",");
		for (var i = 0; i < nextactivitiesArray.length; i++) {
			var nextactivitie = nextactivitiesArray[i];
			for (var b = 0; b < datas.length; b++) {
				var tmp = datas[b];
				if (tmp.activityId == nextactivitie) {
					if (nextactivitiesArray[i] == tmp.activityId) {
						$("#alreadSelectBackLink").append(
								"<option value='" + tmp.activityId + "'>"
										+ tmp.activityName + "</option>");
					}
				}

			}
		}
	}

	var dlg = layer.open({
		title : '选择退回环节',
		type : 1,
		skin : 'layui-layer-rim', // 加上边框
		area : [ '750px', '600px' ], // 宽高
		content : $("#selectBackLink"),
		btn : [ '保存', '取消' ],
		yes : function(index, layero) {
			saveAlreadSelectBackLink();
			layer.close(dlg);
		},
		btn2 : function(index, layero) {
		}
	});
}

function getUnSelectBackLinkData() {
	var unSelect = document.getElementById("unSelectBackLink");
	var opts = "";
	for (var i = 0; i < unSelect.length; i++) {
		if (unSelect[i].selected == true) {
			opts += "<option value='" + unSelect[i].value + "'>"
					+ unSelect[i].text + "</option>";
		}
	}
	$("#unSelectBackLink").find("option:selected").remove();
	$("#alreadSelectBackLink").append(opts);
}

function delSelectBackLinkData() {
	var unSelect = document.getElementById("alreadSelectBackLink");
	var opts = "";
	/*
	 * for (var i = 0; i < unSelect.length; i++) { if (unSelect[i].selected ==
	 * true) { unSelect.options[i] = null; } }
	 */
	// $("#unSelectBackLink").appendTo();
	// console.log();
	// $("#unSelectBackLink").appendTo($("#alreadSelectBackLink").find("option:selected"));
	$("#alreadSelectBackLink").find("option:selected").remove();

}

function saveAlreadSelectBackLink() {
	var alreadSelectBackLink = document.getElementById("alreadSelectBackLink");
	var value = "";
	var name = "";
	for (var i = 0; i < alreadSelectBackLink.length; i++) {
		value += alreadSelectBackLink[i].value + ",";
		name += alreadSelectBackLink[i].text + ",";
	}
	var currentLink = $("#currentLink").val();
	var index = currentLink.replace("metaList", "");
	$("#" + currentLink + "  input[name='nextactivitiesName" + index + "']")
			.val(name);
	$("#" + currentLink + "  input[name='nextactivities" + index + "']").val(
			value);
	$("#currentLink").val("");
}



function _openUserDlg(index) {
	var id = "owners" + index + "_people_value";
	var url = $("#basePath").val() + "/console/tag/user/index.xsp?id=" + id
			+ "&documentId=&singleSelect=false";
	window.open(encodeURI(url));
}

function getUnSelectRoleData() {
	var unSelect = document.getElementById("unSelectRole");
	var alreadSelectRole = document.getElementById("alreadSelectRole");
	var opts = "";
	for (var i = 0; i < unSelect.length; i++) {
		var flag = true;
		if (unSelect[i].selected == true) {
			for (var b = 0; b < alreadSelectRole.length; b++) {
				if (unSelect[i].value == alreadSelectRole[b].value) {
					flag = false;
				}
			}
			if (flag) {
				opts += "<option value='" + unSelect[i].value + "'>"
						+ unSelect[i].text + "</option>";
			}
		}
	}
	$("#alreadSelectRole").append(opts);
}

function delSelectRoleData() {
	$("#alreadSelectRole").find("option:selected").remove();
}

function saveAlreadSelectRoleData() {
	var alreadSelectBackLink = document.getElementById("alreadSelectRole");
	var value = "";
	var name = "";
	for (var i = 0; i < alreadSelectBackLink.length; i++) {
		value += alreadSelectBackLink[i].text + "("
				+ alreadSelectBackLink[i].value + ");";
		name += alreadSelectBackLink[i].text + ";";
	}
	var currentLink = $("#roleCurrentLink").val();
	var id = $("#roleCurrentLink_id").val();
	$("#" + id).val(name);
	$("#" + id + "_num").val(value);
	$("#currentLink").val("");
	$("#roleCurrentLink_id").val("");
}

function opneRoleDlg(index, id) {
	$("#alreadSelectRole").html("");
	$("#roleCurrentLink").val(index);
	$("#roleCurrentLink_id").val(id);
	var roleDlg = layer.open({
		title : '选择角色',
		type : 1,
		skin : 'layui-layer-rim', // 加上边框
		area : [ '750px', '600px' ], // 宽高
		content : $("#roleDlg"),
		btn : [ '保存', '取消' ],
		yes : function(index, layero) {
			saveAlreadSelectRoleData();
			layer.close(roleDlg);
		},
		btn2 : function(index, layero) {
		}
	});
}

function clearNextactivities(index,tableId){
 $("#" + tableId + "  input[name='nextactivitiesName" + index + "']").val("");
  $("#" + tableId + "  input[name='nextactivities" + index+ "']").val("");
}

function emailNotification(activityId){
	var emailDlg = layer.open({
	      type: 2,
	      title: '环节配置邮件通知',
	      skin: 'layui-layer-rim', //加上边框
	      shadeClose: true,
	      //shade: true,
	      maxmin: true, //开启最大化最小化按钮
	      area: ['793px', '650px'],
	      content:  $("#basePath").val()
			+ "/console/bpm/email/notification/index.action?activityId="+activityId,
			btn : [ '保存', '取消' ],
			yes : function(index, layero) {
				// 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
				var iframeWin = top.window[layero.find('iframe')[0]['name']]; 
				// iframeWin.validate();
				iframeWin.submit();
			},
			btn2 : function(index, layero) {
			}
	    });
}

function notifyDlg(activityId){
	var url=$("#basePath").val()
	+ "/console/bpm/defaultPassBy/index.action?activityId="+activityId;
	window.open(encodeURI(url));
	/*var emailDlg = layer.open({
	      type: 2,
	      title: '',
	      skin: 'layui-layer-rim', //加上边框
	      shadeClose: true,
	      //shade: true,
	      maxmin: false, //开启最大化最小化按钮
	      area: ['600px', '500px'],
	      content:  url,
			btn : [ '保存', '取消' ],
			yes : function(index, layero) {
				// 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
				var iframeWin = top.window[layero.find('iframe')[0]['name']]; 
				// iframeWin.validate();
				iframeWin.submit();
			},
			btn2 : function(index, layero) {
			}
	    });*/
}

/**
 * 打开选人控件
 * @param id
 */
function _selectPerson(id){
	var basePath=$("#basePath").val()
	var url = basePath+"/console/tag/user/index.xsp?id=" + id
			+ "&documentId=&singleSelect=false&showcurrent=true";
	window.open(encodeURI(url));
}

/**
 * 打卡开选择组织的对话框
 * @param id
 */
function openOrganizerDlg(id){
	var org = layer.open({
		id:"organizerDlg",
		name:"organizerDlg",
	      type: 2,
	      title: '',
	      skin: 'layui-layer-rim', //加上边框
	      shadeClose: true,
	      //shade: true,
	      maxmin: false, //开启最大化最小化按钮
	      area: ['493px', '300px'],
	      content:  $("#basePath").val()
			+ "/console/user/organizer.action?id="+id,
			btn : [ '保存', '取消' ],
			success: function(layero, index){
				var iframeWin = top.window[layero.find('iframe')[0]['name']]; 
				iframeWin.$("#peopleRead").val($("#"+id+"P").val());
				iframeWin.$("#peopleRead_num").val($("#"+id+"PId").val());
				
				iframeWin.$("#roleName").val($("#"+id+"R").val());
				iframeWin.$("#roleNum").val($("#"+id+"RId").val());
				
				iframeWin.$("#deptRead").val($("#"+id+"D").val());
				iframeWin.$("#deptRead_num").val($("#"+id+"DId").val());
			},
			yes : function(index, layero) {
				// 得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
				var iframeWin = top.window[layero.find('iframe')[0]['name']]; 
				var peopleName=iframeWin.$("#peopleRead").val();
				var peopleValue=iframeWin.$("#peopleRead_num").val();
				
				var roleName=iframeWin.$("#roleName").val();
				var roleValue=iframeWin.$("#roleNum").val();
				
				var deptName=iframeWin.$("#deptRead").val();
				var deptValue=iframeWin.$("#deptRead_num").val();
				var tmp=peopleName+roleName+deptName;
				$("#"+id).val(tmp);
				
				$("#"+id+"P").val(peopleName);
				$("#"+id+"PId").val(peopleValue);
				
				$("#"+id+"R").val(roleName);
				$("#"+id+"RId").val(roleValue);
				
				$("#"+id+"D").val(deptName);
				$("#"+id+"DId").val(deptValue);
				// iframeWin.validate();
			//	iframeWin.submit();
				  layer.close(org);  
			},
			btn2 : function(index, layero) {
			}
	    });
	
	/**/
}

$(function() {
	initSelectedNode(0, datas);
	defaultOwners('metaList0', '0');
	// 点击保存节点数据的事件
	$("#saveProConfig").bind('click', function() {
		saveActityMeta(datas);
	});

	for (var i = 0; i < datas.length; i++) {
		var obj = datas[i];
		var type = obj.defaultOwnerType;
		var tableId = "metaList" + i;
		var defaultOwnersName = obj.defaultOwnersName;
		if (type != "" && defaultOwnersName != "") {
			if (type == "A") {
				$("#" + tableId + " input[name='owners" + i
								+ "_people_value_num']").val(defaultOwnersName);
				var dataArray = new Array(); // 定义一数组
				defaultOwnersNameArray = defaultOwnersName.split(");"); // 字符分割
				var tmp = "";
				for (b = 0; b < defaultOwnersNameArray.length; b++) {
					var defaultOwner = defaultOwnersNameArray[b];
					if (defaultOwner != "") {
						var objArray = defaultOwner.split("(");
						if (objArray.length == 2) {
							tmp += objArray[0] + ";";
						}
					}
				}
				$("#" + tableId + " input[name='owners" + i
								+ "_people_value']").val(tmp);
			}//end A
			
			if (type == "B") {
	            var defaults=defaultOwnersName.split("####");
	            if(defaults.length==2){
				$("#" + tableId + " input[name='owners" + i
				+ "_deptId_value']").val(defaults[0])
				var dataArray = new Array(); // 定义一数组
				defaultOwnersName=defaults[1];
				defaultOwnersNameArray = defaultOwnersName.split(");"); // 字符分割
				var tmp = "";
				for (b = 0; b < defaultOwnersNameArray.length; b++) {
					var defaultOwner = defaultOwnersNameArray[b];
					if (defaultOwner != "") {
						var objArray = defaultOwner.split("(");
						if (objArray.length == 2) {
							tmp += objArray[0] + ";";
						}
					}
				}
				 $("#" + tableId + " input[name='owners" + i
									+ "_deptIdRole_value_num']").val(defaultOwnersName);
				 $("#" + tableId + " input[name='owners" + i
							+ "_deptIdRole_value']").val(tmp);
	            }				
			}//end B
			
			if (type == "C") {
				 $("#" + tableId + " input[name='owners" + i
									+ "_peopleId_value']").val(defaultOwnersName);
			}//end C
			
			if (type == "D") {
				$("#" + tableId + " input[name='owners" + i
								+ "_roleName_value_num']").val(defaultOwnersName);
				var dataArray = new Array(); // 定义一数组
				defaultOwnersNameArray = defaultOwnersName.split(");"); // 字符分割
				var tmp = "";
				for (b = 0; b < defaultOwnersNameArray.length; b++) {
					var defaultOwner = defaultOwnersNameArray[b];
					if (defaultOwner != "") {
						var objArray = defaultOwner.split("(");
						if (objArray.length == 2) {
							tmp += objArray[0] + ";";
						}
					}
				}
				$("#" + tableId + " input[name='owners" + i
						+ "_roleName_value']").val(tmp);
			}//end D
			
			if (type == "G") {
				 $("#" + tableId + " input[name='user_define" + i
									+ "_value']").val(defaultOwnersName);
			}//end G
		}// end type

	}
	
	//流程缺省阅读者
	var processReader_num=$("#processReader_num").val();
	//流程管理者
	var processOwner_num=$("#processOwner_num").val();
	
	var processReader="";
	if(processReader_num!=""){
		var readerArray=processReader_num.split(");");
		for (index in readerArray){
			var reader=readerArray[index];
			var tmp=reader.split("(");
			if(tmp.length==2){
				processReader+=tmp[0]+";";
			}
		}
	}
	$("#processReader").val(processReader);
	
	var processOwner="";
	if(processOwner_num!=""){
		var ownerArray=processOwner_num.split(");");
		for (index in ownerArray){
			var owner=ownerArray[index];
			var tmp=owner.split("(");
			if(tmp.length==2){
				processOwner+=tmp[0]+";";
			}
		}
	}
	$("#processOwner").val(processOwner);
	
});