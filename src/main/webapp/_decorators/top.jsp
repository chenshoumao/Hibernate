<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%-- <%@ taglib prefix="permission" uri="http://vanfon.p2p.cn/" %> --%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
    String roleId =  (String)session.getAttribute("USER_GROUP_ID");
    
    roleId = "g-9";
%>
	<script src="<%=basePath%>scripts/portal/common/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>scripts/logout.js"></script>

<%
java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat("yyyy年MM月dd日");
java.util.Date currentTime = new java.util.Date();//得到当前系统时间
String str_date1 = formatter.format(currentTime); //将日期时间格式化
%>

<!-- 头部 -->
<div class="header">
	<div class="site-nav">
		<div class="logo">
			<h1>
				<a href="#">| 合同管理</a>
			</h1>
		</div>
		<div class="nav">
			<ul>
				<li class="NavSelect Nav1"><a href="javascript:" onclick="getMenuItem('cf3dd8d0-1b81-4f82-9d42-123e7e4fcf5b','首页','<%=roleId%>',this,null)"><br>首页</a></li>
				<li style="background-position: 0px -88px;" class="Nav2"><a href="javascript:" onclick="getMenuItem('521e526c-1eaa-40fc-94b6-21d69822fb21','合同概况','<%=roleId%>',this,null)"><br>合同概况</a></li>
				<li style="background-position: 0px -88px;" class="Nav3"><a href="javascript:" onclick="getMenuItem('e69ed66f-1630-44f2-afbf-52c0c3477224','合同管理','<%=roleId%>',this,null)"><br>合同管理</a></li>
				<li style="background-position: 0px -88px;" class="Nav4"><a href="javascript:" onclick="getMenuItem('d594702f-e677-4642-b89f-ed414ed49e88','合同查询','<%=roleId%>',this,null)"><br>合同查询</a></li> 
				<li style="background-position: 0px -88px;" class="Nav5"><a href="javascript:" onclick="getMenuItem('09c2cd89-808d-446f-97d3-8d73ccf313f2','系统配置','<%=roleId%>',this,null)"><br>系统配置</a></li>
				<li style="background-position: 0px -88px;"class="Nav6"><a href="javascript:" onclick="getMenuItem('e156b0a3-e8a3-4387-8c89-a6b70c17776b','模板管理','<%=roleId%>',this,null)"><br>模板管理</a></li>
			</ul>
		</div>
		<div class="loginbar">
			<span>${_currUserName}，欢迎你 | </span><span><a href="<%=basePath%>console/user/logout.action">注销</a></span><br>
			<p class="decency"><img src="<%=basePath%>/images/portal/loginbar.png">系统管理</p>
		</div>
	</div>
</div>

	<script type="text/javascript">
		$(".nav ul li").click(function(event) {
			/* Act on the event */
			
			$(this).addClass('NavSelect').siblings().removeClass('NavSelect');
			$(this).css("background-position","0px 0px").siblings().css("background-position","0px -88px");
		});
	</script>
