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
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<jsp:include page="../../resources.jsp"></jsp:include>
</head>
<input type="hidden" id="basePath" value="${pageContext.request.contextPath}">
<body class="easyui-layout">
	<div data-options="region:'west',split:true,title:'  '  "  class="west">
		<jsp:include page="./dept.jsp" />
	</div>
		<div data-options="region:'center'" class="center">
		<div id="tabs" class="easyui-tabs" fit="true" border="false">
			<iframe id="userIframeId" src="${pageContext.request.contextPath}/console/orgDept/member/deptEmpView.xsp?deptId=0" 
		   allowTransparency="true" scrolling="auto" width="100%" height="98%"
				frameBorder="0" name=""></iframe>
		</div>
	</div>


</body>

</html>