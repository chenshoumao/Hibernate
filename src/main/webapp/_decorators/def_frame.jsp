<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%-- 		 <link href="<%=basePath %>resource/images/LOGO.ico" rel="shortcut icon" type="image/x-icon" /> --%>
			<link rel="stylesheet" type="text/css" href="<%=basePath%>styles/portal/reset.css"/>
			<link rel="stylesheet" type="text/css" href="<%=basePath%>styles/portal/public.css"/>
<%-- 			<script type="text/javascript" src="<%=basePath%>resource/js/jquery-1.9.1.min.js"></script> --%>
		
	<meta http-equiv="Content-Type" content="text/html; UTF-8">
	    <meta charset="utf-8">
        <!--[if IE 6]>
      <meta http-equiv="X-UA-ompatible" content="IE=EmulateIE8" /> 
    <![endif]-->
    <!--[if IE 7]>
       <meta http-equiv="X-UA-ompatible" content="IE=EmulateIE8" /> 
    <![endif]-->
     <!--[if IE 9]>
       <meta http-equiv="X-UA-ompatible" content="IE=EmulateIE8" /> 
    <![endif]-->
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
 <decorator:head></decorator:head>
    <title>合同管理</title>
</head>
<body>   
    <page:applyDecorator name="toptoolbar"></page:applyDecorator>
    <div class="contain">
    <div class="site-content clearfix">
    <page:applyDecorator name="leftmenupanel"></page:applyDecorator>
    <div class="content-right">
		<div class="content-right-top">
			<ul>
				<li class="sp1"><a href="#" style="cursor:default">位置:</a></li>
				<li><a href="#" style="cursor:default"><span id="topTipTopName">首页</span> </a></li>
                   <li><img src="<%=basePath%>images/portal/icon1s.png" style=" margin-top:11px; background-color:#f5f6f8; background-image:#f5f6f8;"></li>
				<li><a href="#" style="cursor:default"><span id="topTipDetail">合同分类</span></a></li>
				<li class="threeMenu" style="display:none"><img src="<%=basePath%>images/portal/icon1s.png" style=" margin-top:11px; background-color:#f5f6f8; background-image:#f5f6f8;"></li>
				<li class="threeMenu" style="display:none"><a href="#" style="cursor:default"><span id="topChildName">合同分类</span></a></li>
			</ul>
		</div>
			<div class="content-right-center">
			  <iframe id="de_freme_iframe" scrolling="auto" frameborder="0"  src="" style="width:100%;min-height:590px;">
			  </iframe>
			</div>
	</div>
     
    		</div>
     		<br clear="both"> 
    	</div>
	</body>
</html>