var status;// 查看状态 ：客户预购清单 custom, 还是 所有海图清单 all
var dialogOpts1, dialogOpts2;
var period = 0;
var selectType = 'AVCS';
var ordernum;
var chartlist;
var iroute;

/**
 * 航线选海图时触发
 */
function onSelectSeachart(route, list) {
	$("table tr:eq(0)").siblings().remove();

	if (route == undefined)
		route = iroute;
	else
		iroute = route;
	if (list == undefined)
		list = chartlist;
	else
		chartlist = list;

	if (selectType == 'ARCS') {
		$('#head_number').show();
	} else {
		$('#head_number').hide();
	}
	var table = "";

	if (status == 'custom') {
		$.ajax({
			url : 'getMap/getCustom.action',
			dataType : 'json',
			type : 'post',
			async : false,
			data : {
				'ordernum' : ordernum
			},

			success : function(dataList) {
				//console.log(list);
				list = dataList;
			}
		})
	}

	// 查看route
	console.log(j2s(route));
	var index = 1;
	$
			.each(
					list,
					function(i, c) {// console.log(c.chartType);
						if (selectType == c.chartType) {
							table += "<tr>";
							table += "<td style='text-align: center;'>"
									+ index++ + "</td>";
							table += "<td style='text-align: center;' class='"
									+ c.chartType + "'>" + c.chartType
									+ "</td>";
							table += "<td id='" + c.chartNumber + "'>"
									+ c.chartNumber + "</td>";
							table += "<td>" + c.chartTitle + "</td>";
							table += "<td>" + c.chartScale + "</td>";

							if (status != 'drawLine') {
								var count = c.period;
								if(count == undefined)
									count = 1;
								table += "<td>" + count + "</td>";

								if (selectType == 'ARCS') {
									table += "<td>" + count + "</td>";
								}

							}

							else {
								table += "<td style='text-align: center;'><select name='period' id='period' style='width:60px;'>"
								for (var i = 1; i <= 12; i++) {
									if (i - 1 == period) {
										table += '<option value="' + i
												+ '" selected="selected">' + i
												+ '</option>';
									} else {
										table += '<option value="' + i + '">'
												+ i + '</option>';
									}
								}
								table += "</select></td>";

								if (selectType == 'ARCS') {
									table += "<td style='text-align: center;'><select name='period' id='period' style='width:60px;'>"
									for (i = 1; i <= 12; i++) {
										if (i - 1 == period) {
											table += '<option value="' + i
													+ '" selected="selected">'
													+ i + '</option>';
										} else {
											table += '<option value="' + i
													+ '">' + i + '</option>';
										}
									}
									table += "</select></td>";

								}
							}

							table += "<td style='text-align: center;width:200px;'><input type='checkbox' name='checkbox' value='"
									+ c.chartNumber
									+ "' onclick='highlightChart(\""
									+ c.chartType
									+ "\", \""
									+ c.chartNumber
									+ "\", $(this).prop(\"checked\"))'></a></td>";
							table += "</tr>";
						}
					});

	$("#charts").show();
	$("#charts").append(table);
	if (dialogOpts1 == undefined) {
		dialogOpts1 = {
			title : "航线所经海图",
			resizable : true,
			width : 750,
			id : "route",
			buttons : {
				'查看所有海图' : function() {
					changeAll();
				},
				"取消" : function() {
					$("#dialog").dialog('close');
					$("#charts").hive();
				}
			}
		};
	}
	$("#dialog").dialog(dialogOpts1);
	dialogOpts1 = undefined;

	$('#charts').fixedHeaderTable({
		footer : false,
		altClass : 'odd',
	});
}
function changeAll() {
	status = 'all';
	dialogOpts1 = {
		title : "航线所经海图",
		resizable : true,
		width : 750,
		id : "route",
		buttons : {
			'查看预购海图' : function() {
				changeCustom();
			},
			"取消" : function() {
				$("#dialog").dialog('close');
				$("#charts").hive();
			}
		}
	};
	onSelectSeachart();
}

function changePeriod(a) {
	var length = $("tr").length;
	period = $(a).val() - 1;
	for (var i = 1; i < length; i++) {
		//var oo = $("tr").eq(i).find("select").find("option:selected").text();
		// console.log(oo);
		//$('#gg option:eq(3)').attr('selected','selected');
		var temp = $("tr").eq(i).children().find('select').eq(0).find(
				'option:eq(' + period + ')');
		temp.attr('selected', 'selected');
		temp.siblings().attr('selected', false);
		//$("#content").children().eq(i).children().find("td").find("select").find("option[text='"+text+"']").attr("selected",true);
	}
}

function changeCustom() {
	status = 'custom';
	dialogOpts1 = {
		title : "航线所经海图",
		resizable : true,
		width : 750,
		id : "route",
		buttons : {
			'查看所有海图' : function() {
				changeAll();
			},
			"取消" : function() {
				$("#dialog").dialog('close');
				$("#charts").hive();
			}
		}
	};
	onSelectSeachart();
}

function displayMap(tmp, ordernumber) {
	$('.period').hide();
	ordernum = ordernumber;
	console.log(tmp);
	var list = JSON.parse(tmp);
	var obj = list[0];
	var coords = obj.coords;
	selectType = obj.type;
	var obj2 = JSON.parse(coords);
	status = 'custom';
	displayRoute(obj2['id'], obj2['coords'], obj.linename);
}

function drawLine() {

	$('.period').show();

	status = 'drawLine';
	var type = $("tr").eq(0).children().eq(1);
	var select = '<select name="type" id="type" onchange="changeType()"><option value="AVCS">AVCS</option><option value="ARCS">ARCS</option></select>';
	type.append(select);

	dialogOpts1 = {
		title : "航线所经海图",
		resizable : true,
		width : 750,
		id : "route",
		buttons : {
			'下单' : function() {
				openAsk();
			},
			"取消" : function() {
				$("#dialog").dialog('close');
			}
		}
	};
}

function changeType() {
	selectType = $("#type").val();
 
	dialogOpts1 = {
		title : "航线所经海图",
		resizable : true,
		width : 750,
		id : "route",
		buttons : {
			'下单' : function() {

				openAsk();
			},
			"取消" : function() {
				$("#dialog").dialog('close');
			}
		}
	};
	onSelectSeachart();
}

function openAsk() {
	$("#dialog").dialog('close');
	$("#ask").empty();
	var info = '<div><label>请输入航线名：<input id="linename"></label></div>';
	var dialogOpts = {
		title : "信息完善",
		buttons : {
			"确定" : function() {
				confirmToBuy($('#linename').val())
			},
			"取消" : function() {
				$("#ask").dialog('close');
			}
		}
	};
	$("#ask").append(info);
	$("#ask").dialog(dialogOpts);
}

function confirmToBuy(linename) {
	var data = '[';
	var length = $("tr").length;

	for (var i = 1; i < length; i++) {
		var period = $('tr').eq(i).children().eq(5).find('select').val();
		var number = $('tr').eq(i).children().eq(6).find('select').val();
		if (number == undefined)
			number = 1;
		var type = $('tr').eq(i).children().eq(1).html();
		var chartNumber = $('tr').eq(i).children().eq(2).html();
		var title = $('tr').eq(i).children().eq(3).html();
		var bili = $('tr').eq(i).children().eq(4).html();
		data += '{"type":"' + type + '","chartNumber":"' + chartNumber
				+ '","title":"' + title + '","period":' + period + ',"number":'
				+ number + ',"bili":"' + bili + '"},';
	}
	console.log(data);

	$.ajax({
		url : 'getMap/commitData.action',
		dataType : 'json',
		data : {
			'data' : data,
			'linename' : linename
		},
		type : 'post',
		success : function(result) {
			if (result['state']) {
				alert('提交成功！');
				$("#ask").dialog('close');
			}
		}
	})
}
