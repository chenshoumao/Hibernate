<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link href="<%=basePath%>images/LOGO.ico" rel="shortcut icon"
	type="image/x-icon" />
<title>选择人员</title>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/styles/console/reset.css" />
<link
	href="${pageContext.request.contextPath}/styles/bootstrap/2.2.2/css/bootstrap.min.css"
	rel="stylesheet">
<link rel="stylesheet" type="text/css"
	href="${pageContext.request.contextPath }/styles/console/bpm/activitymeta/node.css" />
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/scripts/ztree/zTreeStyle/zTreeStyle.css"
	type="text/css">

<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/jquery/jquery-1.11.1.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/json2.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/layer/layer.js"></script>


<script type="text/javascript"
	src="${pageContext.request.contextPath}/styles/bootstrap/2.2.2/js/bootstrap.min.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/ztree/js/jquery.ztree.core-3.5.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/ztree/js/jquery.ztree.excheck-3.5.js"></script>
<script type="text/javascript"
	src="${pageContext.request.contextPath}/scripts/console/tag/role/index.js"></script>


<style type="text/css">
.persoNLf {
	width: 300px;
	float: left;
}
</style>
</head>
<body>
	<input type="hidden" id="basePath"
		value="${pageContext.request.contextPath}" />
			<input type="hidden" id="tableId"
		value="${id}" />
			<input type="hidden" id="singleSelect"
		value="${singleSelect}" />
	<div id="myTabContent" class="tab-content">
		<div id="selectBackLink">
			<div class="persoN">
				<input type="hidden" id="currentLink">
				<div class="persoNLf">
							<select class="bgG"
					style="width: 300px; height: 490px; font-size: 15px;" multiple=""
					 id="unSelectRole" size="8"
					ondblclick="getUnSelectRoleData();">
					${roles}
		           </select>
				</div>
				<div class="persoNMd" style="padding-top: 186px; margin-left: 2%;">
						<button class="topR RT" onclick="getUnSelectRoleData();">&gt;</button>
				<button class="topR RT" onclick="delSelectRoleData();">&lt;</button>
				</div>
				<div class="persoNRg" style="width: 400px; margin-left: -5%;">
					<div style="overflow: auto;">
					<select class="deptInfoDiv"
						style="float: right; height: 450px;width: 300px; font-size: 15px;" multiple=""
						 id="alreadSelectRole" size="8"
						ondblclick="delSelectRoleData();">
					</select>
					</div>

				</div>
			</div>
		</div>
		<p class="flri" style="margin-top: 15px; margin-right: 44%">
			<button onclick="saveAlreadSelectRoleData();">保存</button>
		</p>
	</div>
</body>

</html>