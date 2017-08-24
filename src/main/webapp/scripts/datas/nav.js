var navs="";
			$(function(){ 
			  var ur=path1+"/validation/menu/caidan.action";
			   $.ajax({
			          url : ur,
			          type : "post",
			          dataType:"json",
			          async:false, 
			         success : function(s) { 
			        	 navs = s;
			          },
			          error : function() {

			          }
				 });

			});


/*var navs = [{
	"title": "客商管理",
	"icon": "fa-cubes",
	"spread": true,
	"children": [{
		"title": "供应商管理",
		"icon": "&#xe63c;",
		"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:2c2babdb-8ab6-4544-922d-a5d93485f493.xsp"
	}, {
		"title": "船公司管理",
		"icon": "&#xe63c;",
		"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:b5310c0c-20d3-40f7-9542-c415bb921442.xsp"
	}, {
		"title": "船舶管理",
		"icon": "&#xe63c;",
		"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:81fc42cb-0367-4652-8740-dcb1a92410e9.xsp"
	}]
	}, {
		"title": "基础数据管理",
		"icon": "fa-cogs",
		"spread": false,
		"children": [{
			"title": "资料类别管理",
			"icon": "&#xe63c",
			"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:08952c35-0969-46bc-8b5e-26dd6264947a.xsp"
		}]
	}, {
		"title": "海图中心",
		"icon": "&#x1002;",
		"spread": false,
		"children": [{
			"title": "资料定义",
			"icon": "&#xe63c",
			"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:a989cffe-b9c4-4791-a0fd-28a167f40359.xsp"
		}]
	}, {
		"title": "电子海图",
		"icon": "&#xe62c;",
		"spread": false,
		"children": [{
			"title": "订单管理",
			"icon": "&#xe63c",
			"href": basePath1+"console/template/engine/openform/appid:5c2246ee-12d3-4965-840f-a4cbb46af94a/formid:d0b3b0f2-8308-4f36-827b-296827e960b5.xsp"
		},{
			"title": "船舶库存管理",
			"icon": "&#xe63c",
			"href": basePath1+"console/template/engine/openform/appid:78c72b53-d104-4ebd-8fb5-64c1ad45002e/formid:4a448584-2c16-4706-bb9c-7a503288d486.xsp"
		}]
}];*/


/*var navs = [{
	"title": "基本元素",
	"icon": "fa-cubes",
	"spread": true,
	"children": [{
		"title": "按钮",
		"icon": "&#xe641;",
		"href": "button.html"
	}, {
		"title": "表单",
		"icon": "&#xe63c;",
		"href": "form.html"
	}, {
		"title": "表格",
		"icon": "&#xe63c;",
		"href": "table.html"
	}, {
		"title": "导航",
		"icon": "&#xe609;",
		"href": "nav.html"
	}, {
		"title": "辅助性元素",
		"icon": "&#xe60c;",
		"href": "auxiliar.html"
	}]
}, {
	"title": "组件",
	"icon": "fa-cogs",
	"spread": false,
	"children": [{
		"title": "BTable",
		"icon": "fa-table",
		"href": "btable.html"
	}, {
		"title": "Navbar组件",
		"icon": "fa-navicon",
		"href": "navbar.html"
	}, {
		"title": "Tab组件",
		"icon": "&#xe62a;",
		"href": "tab.html"
	}, {
		"title": "Laytpl+Laypage",
		"icon": "&#xe628;",
		"href": "paging.html"
	}]
}, {
	"title": "第三方组件",
	"icon": "&#x1002;",
	"spread": false,
	"children": [{
		"title": "iCheck组件",
		"icon": "fa-check-square-o",
		"href": "icheck.html"
	}]
}, {
	"title": "地址本",
	"icon": "fa-address-book",
	"href": "",
	"spread": false,
	"children": [{
		"title": "Github",
		"icon": "fa-github",
		"href": "https://www.github.com/"
	}, {
		"title": "QQ",
		"icon": "fa-qq",
		"href": "http://www.qq.com/"
	}, {
		"title": "Fly社区",
		"icon": "&#xe609;",
		"href": "http://fly.layui.com/"
	}, {
		"title": "新浪微博",
		"icon": "fa-weibo",
		"href": "http://weibo.com/"
	}]
}, {
	"title": "这是一级导航",
	"icon": "fa-stop-circle",
	"href": "https://www.baidu.com",
	"spread": false
}, {
	"title": "其他",
	"icon": "fa-stop-circle",
	"href": "#",
	"spread": false,
	"children": [{
		"title": "子窗体中打开选项卡",
		"icon": "fa-github",
		"href": "cop.html"
	}]
}];*/