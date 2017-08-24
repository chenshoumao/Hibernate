<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>平台更新日志</title>
<style type="text/css">
h3 {font-size:14px; font-weight:bold; margin:5px 0px}
#basecontainer {
	width:1000px; 
	margin: 0px auto; 
	background:url('${pageContext.request.contextPath}/images/book01.png') no-repeat fixed 200px top;
	min-height: 700px;
}
ul {margin:0px; margin-bottom:20px}
</style>
</head>
<body>
	<div id="basecontainer">
		<h3>2017-05-22</h3>
		<ul>
			<li>添加阅读权限和审批权限的查看功能。</li>
			<li>添加流程状态图查看环节处理信息的功能。</li>
			<li>添加保存流程图信息的实体。</li>
			<li>增加转签重做缺省处理人属性和环节分组名称属性。</li>
			<li>在退回的时候判断是否分组退回。</li>
		</ul>
		<h3>2017-05-19</h3>
		<ul>
			<li>开发TableView控件。</li>
			<li>修复问题：重新路由实例中，查找实例时，无法通过documentId查找。</li>
			<li>在会签环节时打开表单，隐藏加签按钮。</li>
		</ul>
		<h3>2017-05-17</h3>
		<ul>
			<ul>
				<li>修复调度任务将有权限查看表单的人写入读者域时报错。</li>
				<li>修复区块查看权限授权时，选人控件回显出错。</li>
				<li>修复问题：会签环节最后一个人转签后，bpmNextTaskOwner列表只剩下最后的转签人。</li>
				<li>添加bpm 邮件通知记录实体。</li>
				<li>完善bpm邮件提醒记录信息。</li>
				<li>取消BpmEmailRecord实体以及相关Service类。</li>
				<li>取消BpmEmailRecord 业务处理类。</li>
				<li>完善SLA配置信息。</li>
				<li>IE9浏览器网关环节对应的路由条件配置页面显示有问题。</li>
				<li>路由条件增加分组属性。</li>
				<li>修复问题：并行会签环节待办取消后，申请单返回申请环节，但是并行会签的待办任务未关闭，还在列表中。</li>
			</ul>
		</ul>
		<h3>2017-05-13</h3>
		<ul>
			<li>添加数值自动转千分位控件。</li>
			<li>修复问题：会签环节退回后，重新提交到会签环节的时候，任务处理人变成一个群组。</li>
			<li>将JS脚本放到模板中，变成公共JS。</li>
			<li>添加调度任务，用于将有查看权限的人加进读者域。</li>
			<li>添加获取表单部署后上下文地址的方法。</li>
		</ul>
		<h3>2017-05-12</h3>
		<ul>
			<li>修复在IE7文档模式下业务字段授权显示报错。</li>
			<li>添加获取部门ID所属的人员（主部门，兼职部门）。</li>
			<li>添加通过员工编号获取其所属部门ID(包括主部门，和兼职部门)。</li>
			<li>修改显示流程实例状态图的脚本代码，去掉错误提示，优化加载速度。</li>
			<li>退回功能支持会签环节。</li>
			<li>优化附件上传读取问题。</li>
			<li>取回审批任务后，同时要关闭会签环节的下一处理人列表。</li>
		</ul>
		<h3>2017-05-11</h3>
		<ul>
			<li>解决动态表格V2部分行数据不更新的问题。</li>
			<li>修复动态表格V2控件的自动ID不会自动递增。</li>
			<li>重新路由支持会签环节。</li>
		</ul>
		<h3>2017-05-10</h3>
		<ul>
			<li>将graphJS流程状态图集成到项目中。</li>
			<li>完善自定义SLA规则功能。</li>
			<li>添加流程实例结束事件属性和流程实例结束后事件。</li>
		</ul>
		
		<h3>2017-05-09</h3>
		<ul>
			<li>流程操作日志增加记录IP地址，包括提交、退回、转签、加签、取回、取消、重新路由、暂停实例、恢复实例、停止实例等。</li>
			<li>没有网关的流程快照，隐藏网关配置链接。</li>
			<li>修复获取可退回环节报异常的问题。</li>
		</ul>
		<h3>2017-05-08</h3>
		<ul>
			<li>自定义SLA规则功能。</li>
			<li>添加获取部门ID所属的人员（主部门，兼职部门）。</li>
			<li>添加通过员工编号获取其所属部门ID(包括主部门，和兼职部门)。</li>
			<li>修复会签环节已办打开当前处理人为空的问题。</li>
			<li>修改BpmServiceUtils类，currentUser字段支持TWRole类型。</li>
		</ul>
		
		<h3>2017-05-05</h3>
		<ul>
			<li>表单渲染时，判断区块是否显示对于部门规则的判断。</li>
			<li>添加获取部门ID所属的人员（主部门，兼职部门）。</li>
			<li>添加通过员工编号获取其所属部门ID(包括主部门，和兼职部门)。</li>
			<li>修复高级授权在停止授权时调用转签接口报错的问题。</li>
		</ul>
		<h3>2017-05-04</h3>
		<ul>
			<li>修改完成单时规则推送。</li>
			<li>添加根据表单名称获取其所有完成单的方法。</li>
			<li>完善流程表单映射。</li>
		</ul>
		<h3>2017-05-03</h3>
		<ul>
			<li>将有权限查看区块的人加进读者域。</li>
			<li>当查看授权发生变更时，删除读者域中无权限查看的信息。</li>
			<li>当表单结束时，推送并加表单加进读者域。</li>
			<li>提交任务读取路由条件配置。</li>
			<li>流程控制按钮调整。</li>
			<li>完成对完成单的授权回收。</li>
			<li>完成对业务区块的授权。</li>
			<li>修复获取BPM模型失败时会报错的问题。</li>
			<li>退出时把当前域的所有COOKIE清除。</li>
			<li>任务提交后删除当前用户的写入权限。</li>
			<li>已授权的系统元素据管理页面。</li>
		</ul>
		<h3>2017-04-28</h3>
		<ul>
			<li>添加流程完成后加入读者域的方法。</li>
			<li>添加获取部门下所有人的方法。</li>
			<li>修改路由条件配置，以支持并行环节。</li>
			<li>可绑定数据的下拉控件</li>
			<li>路由条件配置界面完成并行环节的条件配置功能。</li>
			<li>新增资源实体管理，修改导出工具类</li>
		</ul>
		<h3>2017-04-27</h3>
		<ul>
			<li>启动流程时读取路由条件配置。</li>
			<li>修改流程接口检查机制，防止启动流程失败。</li>
			<li>添加元数据资源实体。</li>
		</ul>
		<h3>2017-04-26</h3>
		<ul>
			<li>添加区块是否显示判断接口。</li>
			<li>添加环节控件数据源绑定页面。</li>
			<li>表单多读者域改造。</li>
			<li>完成对区块授权只读状态下显示与否的判断接口</li>
			<li>删除sotDataSource环节控件数据源配置相关代码。</li>
		</ul>
		<h3>2017-04-25</h3>
		<ul>
			<li>完成网关路由条件配置界面和功能。</li>
			<li>增加sot控件配置页面。</li>
			<li>更改编译环境，新增异步上传，更改导出、导入格式，添加注释，去除系统元数据管理权限。</li>
			<li>修改校检区块是否拥有显示权限。</li>
			<li>业务数据输出控件。</li>
			<li>修改系统操作日志的创建方法，解决日志文本过长的问题。</li>
			<li>控件权限可配置。</li>
		</ul>
		<h3>2017-04-24</h3>
		<ul>
			<li>添加删除授权记录。</li>
			<li>整合查询可授权字段方法。</li>
			<li>添加校检方法，用于校检表单是否有权限渲染。</li>
			<li>表单中数据控件注册配置界面和数据库</li>
			<li>开发网关路由条件配置。</li>
			<li>修改系统元数据实体，增加属性。</li>
			<li>修改代码，避开在保存文档时jvm包检查异常的问题（这个问题只在Websphere中发生）。</li>
			<li>修改元数据管理页面布局，新增已授权数据列表。</li>
		</ul>
		<h3>2017-04-20</h3>
		<ul>
			<li>数据区域控制流程环节配置。</li>
			<li>修复字段授权的一些BUG。</li>
			<li>修改实体属性，增加规则条件优先级序号。</li>
			<li>修改表单定义页面。</li>
			<li>新增功能：系统元数据，系统元数据分类，系统元数据授权。</li>
		</ul>
		<h3>2017-04-19</h3>
		<ul>
			<li>增加系统元数据管理者实体。</li>
			<li>为了应对BPM消息推送顺序的不确定性和不稳定性，又添加了一些校验代码。</li>
			<li>升级spring到4.3.7.RELEASE。</li>
			<li>升级hibernate 到4.3.11.Final。</li>
		</ul>
		<h3>2017-04-18</h3>
		<ul>
			<li>更改树形表单的获取方式。</li>
			<li>更新字段显示授权。</li>
			<li>修改了提交审批任务的时候，若发生错误，显示错误信息不正确的问题。</li>
			<li>在接收PushMsg的时候，判断第一个任务是否已关闭，若未则关闭之。</li>
		</ul>
		<h3>2017-04-17</h3>
		<ul>
			<li>数据区域控制流程环节配置。</li>
			<li>添加系统元数据实体。</li>
			<li>修改流程实例查询功能，改为用数据库查询，不使用BPM查询。</li>
			<li>强制更新任务状态。</li>
		</ul>
		<h3>2017-04-13</h3>
		<ul>
			<li>标表单字段添加字段管理者。</li>
			<li>完善表单字段添加字段管理者</li>
		</ul>
		<h3>2017-04-12</h3>
		<ul>
			<li>添加“表单字段业务控制条件”实体。</li>
			<li>完善高级授权界面的显示问题</li>
		</ul>
		<h3>2017-04-11</h3>
		<ul>
			<li>新建业务权限配置界面。</li>
			<li>添加获取当前登陆人所能授权的所有字段。</li>
			<li>附件下载：删除附件添加回调函数事件。</li>
			<li>添加业务字段管理者实体。</li>
			<li>动态表格添加后台删除表格数据接口。</li>
		</ul>
		<h3>2017-04-10</h3>
		<ul>
			<li>修改表单字段定义实体，并修改表单字段定义页面。</li>
			<li>添加业务字段管理者实体。</li>
			<li>高级授权规则。</li>
			<li>表单字段定义页面添加属性。</li>
			<li>流程工具栏控件的函数名称采用随机名称。</li>
			<li>修复传阅在选人后会报JS错误的问题。</li>
		</ul>
		<h3>2017-04-07</h3>
		<ul>
			<li>在流程结束后，关闭BpmTaskInfo的流程实例状态。</li>
			<li>流程暂停和流程恢复增加操作原因和操作记录。</li>
			<li>停止流程实例增加操作原因、操作记录和关闭相关状态。</li>
		</ul>
		<h3>2017-04-06</h3>
		<ul>
			<li>SOT动态表格V2控件添加排序功能。</li>
		</ul>
		<h3>2017-04-01</h3>
		<ul>
			<li>流程结束后更改流程实例在数据库中的状态。</li>
			<li>完成会签环节的取消审批单功能。</li>
			<li>修复“取消”操作获取第一个任务有错误的问题。</li>
		</ul>
		<h3>2017-03-31</h3>
		<ul>
			<li>解决在出现大量同时提交的审批任务时导致BPM待办任务丢失的问题。</li>
			<li>修复退回后待办任务不会关闭的缺陷。</li>
			<li>高级授权表单与流程绑定映射的维护功能</li>
		</ul>
		<h3>2017-03-30</h3>
		<ul>
			<li>修改消息接收Controller，改为异步读取数据库来获取BPM推送消息的机制。</li>
			<li>BPM消息推送侦听器优化，使用静态变量，优化代码等。</li>
			<li>内容模板管理页面处理IE8兼容性问题。</li>
		</ul>
		<h3>2017-03-29</h3>
		<ul>
			<li>BPM BO对象增加tag属性，并且在流程启动的时候赋值。</li>
			<li>组织库的人员信息添加兼职部门属性。</li>
			<li>表单编辑器以新窗口方式打开。</li>
		</ul>
		<h3>2017-03-27</h3>
		<ul>
			<li>修复表单多个选人控件回调函数触发异常的问题。</li>
			<li>环节配置未同步时增加提醒同步提醒。</li>
			<li>修复加签返回时加签的状态没有关闭的问题。</li>
		</ul>
		<h3>2017-03-24</h3>
		<ul>
			<li>移除表单平台上API接口，将这些接口移到新的API接口项目中。</li>
			<li>BPM工具类增加方法支持API接口的调用方式。</li>
			<li>添加部门成员实体。</li>
			<li>环节配置添加SLA配置项。</li>
		</ul>
		<h3>2017-03-23</h3>
		<ul>
			<li>修复多次加签后处理人员不正确的问题。</li>
			<li>修复BPM路由控件渲染出错的问题。</li>
			<li>增加流程API测试页面。</li>
			<li>表单页面Request对象加入URL参数。</li>
			<li>解决并行流程在会签环节计算会签次数的错误。</li>
			<li>修改内容模板管理页面和代码问题。</li>
		</ul>
		<h3>2017-03-22</h3>
		<ul>
			<li>修复查询框无法选中-1.新建部门界面；2.人员管理查询界面；3.已授权审批列表；4.代理授权规则；5.流程快照管理；6.规则自定义。</li>
			<li>完善应用库授权界面。</li>
			<li>增加表单功能的帮助说明。</li>
			<li>BPM身份验证和注销API接口功能开发。</li>
			<li>增加获取当前登录BPM用户的API接口。</li>
			<li>修复加签返回后不能提交的问题。</li>
		</ul>
		<h3>2017-03-21</h3>
		<ul>
			<li>流程快照配置和流程环节配置增加配置属性。</li>
			<li>审批意见列表增加自定义模板功能。</li>
			<li>修复流程路由控件下一环节的排序问题。</li>
			<li>完善选人控件，修改界面的操作方式。</li>
		</ul>
		<h3>2017-03-20</h3>
		<ul>
			<li>流程快照绑定[初稿].</li>
			<li>立即授权功能[修复启用后不生效的bug].</li>
			<li>修改Maven Build的方式。</li>
			<li>用户催办对话框显示当前处理人。</li>
		</ul>
		<h3>2017-03-18</h3>
		<ul>
			<li>添加了BPM流程开发中的技术限制说明。</li>
			<li>修复流程工具栏模板报错的问题。</li>
			<li>开发流程启动REST API接口。</li>
			<li>开发流程REST API接口测试器。</li>
			<li>添加MIME类型管理模块。</li>
			<li>SOT下载控件增加打开附件链接。</li>
		</ul>
		<h3>2017-03-17</h3>
		<ul>
			<li>立即授权功能[完善调用转签的方法].</li>
			<li>共享子表单[修复子表单的导入功能].</li>
			<li>添加内容模板管理模块。</li>
			<li>添加占位符管理模块。</li>
			<li>流程工具栏控件增加申请人催办功能。</li>
			<li>内容模板管理模块的代码规范优化。</li>
			<li>增加会签环节开发的帮助说明页面。</li>
		</ul>
		<h3>2017-03-16</h3>
		<ul>
			<li>流程转签后更新BpmTaskInfo.</li>
			<li>用户待办信息[完善转签更新待办任务信息].</li>
			<li>BpmTaskInfo实体类增加Hibernate过滤器.</li>
			<li>增加统一待办中心，让测试人员能够测试待办。</li>
			<li>修复转签功能的bug.</li>
			<li>修改立即授权的方法。</li>
		</ul>
		<h3>2017-03-15</h3>
		<ul>
			<li>知会功能[修改成提交流程后发送邮件知会].</li>
			<li>环节配置同步保留数据[初稿].</li>
			<li>添加内容模板占位符实体。</li>
			<li>上传控件在打开时增加判断当前浏览器是否已经安装flash插件。</li>
			<li>修复JSP模板的报错。</li>
			<li>环节配置的取消功能默认值改为不允许。</li>
			<li>可退回环节列表窗口的处理人列增加中文名显示。</li>
		</ul>
		<h3>2017-03-14</h3>
		<ul>
			<li>立即授权功能[完善用户转签调用的方法].</li>
			<li>立即授权功能[遍历调用转签方法加入异常捕获].</li>
			<li>开发用户主动催办功能.</li>
			<li>修复获取第一个任务的问题。</li>
		</ul>
		<h3>2017-03-13</h3>
		<ul>
			<li>更新任务的待办分配。</li>
			<li>发布SOT共享子表单控件。</li>
		</ul>
		<h3>2017-03-12</h3>
		<ul>
			<li>完成取消审批任务的功能和“是否允许取消”的环节配置选项。</li>
		</ul>
		<h3>2017-03-09</h3>
		<ul>
			<li>BPM路由Service层代码优化，控制事务回滚。</li>
			<li>完成并行会签环节的转签操作.</li>
			<li>修复转签前的JS人员选择判断函数的bug。</li>
			<li>增加一个授权转签的方法，是给立即授权和立即收回功能使用的。</li>
			<li>环节配置增加取消功能的配置项。</li>
		</ul>
		<h3>2017-03-08</h3>
		<ul>
			<li>立即授权功能[初稿].</li>
			<li>授权功能:收回授权[初稿].</li>
		</ul>
		<h3>2017-03-07</h3>
		<ul>
			<li>增加保存后表单事件类.</li>
			<li>SOT动态表格V2控件在addRow和insertRow方法中增加传递自定义数据的属性。</li>
		</ul>
		<h3>2017-03-05</h3>
		<ul>
			<li>修改了任务转签功能，现在支持在非会签环节转签给多人。</li>
			<li>实现了顺序会签的转签功能。</li>
		</ul>
		<h3>2017-03-03</h3>
		<ul>
			<li>SOT流程路由控件的下一步骤选择人按钮添加点击事件。</li>
			<li>修复SOT流程路由控件反射类问题。</li>
			<li>选人控件查询不区分大小写.</li>
			<li>修复合并token的时候转换taskId报错的问题。</li>
		</ul>
		<h3>2017-03-02</h3>
		<ul>
			<li>修复了链接流程退回出错的问题。</li>
			<li>修正BPM异常信息输出。</li>
			<li>任务节点在链接流程中，退出环节选择列表要过滤掉链接流程外的环节。</li>
		</ul>
		<h3>2017-03-01</h3>
		<ul>
			<li>完善知会功能.</li>
			<li>修改了环节默认办理人范围的规则DEMO程序。</li>
			<li>完成了在会签环节退回到非会签环节的功能。</li>
		</ul>
		<h3>2017-02-27</h3>
		<ul>
			<li>保存前数据修改，添加能够传入文档字段参数的反射类接口。</li>
			<li>修复链接流程结束节点显示问题.</li>
			<li>启用限制选人范围，下一处理人置为空值.</li>
			<li>修改环节办理范围自定义规则的Demo代码。</li>
		</ul>
		<h3>2017-02-25</h3>
		<ul>
			<li>环节配置增加了会签相关的配置项。</li>
			<li>修复了顺序会签和并行会签在提交的时候计算会签次数的问题。</li>
		</ul>
		<h3>2017-02-23</h3>
		<ul>
			<li>流程在启动后自动判断下一环节是否会签环节，并且对顺序会签和并行会签都做了处理。</li>
			<li>完成顺序会签和并行会签的功能。</li>
		</ul>
		<h3>2017-02-22</h3>
		<ul>
			<li>在提交的时候，记录下一处理人，并且判断下一环节是否会签环节。</li>
			<li>SOT动态表格V2控件增加设置行数据功能.</li>
		</ul>
		<h3>2017-02-21</h3>
		<ul>
			<li>下拉框的staticvalue属性支持EL表达式</li>
			<li>提交、退回Service方法重构，并修复BPM控件问题。</li>
			<li>SOT上传控件的上传路径设定改为数据库保存方式，不再使用配置文件配置上传目录。</li>
		</ul>
		<h3>2017-02-18</h3>
		<ul>
			<li>BPM工具栏控件添加自定义面板功能。</li>
			<li>转签、加签代码重构。</li>
			<li>SOT流程路由控件的下一步骤专用网关下拉框显示。</li>
		</ul>
		<h3>2017-02-17</h3>
		<ul>
			<li>角色成员增加部门ID属性.</li>
			<li>修复动态表格在加载时候的bug。</li>
			<li>动态表格增加自动递增ID功能。</li>
			<li>修复了动态表格V2控件在多次保存的时候数据丢失的问题。</li>
			<li>修改了表单控件页面，增加了动态表格V2控件的使用说明。</li>
			<li>SOT流程路由控件的下一步骤处理人选择添加范围限定参数。</li>
		</ul>
		<h3>2017-02-15</h3>
		<ul>
			<li>SOT动态表格V2控件发布。</li>
			<li>部门实体增加部门编号的属性。</li>
			<li>环节同步和环节配置增加会签属性。</li>
			<li>在项目中引入Drools规则引擎。</li>
		</ul>
		<h3>2017-02-07</h3>
		<ul>
			<li>修复SOT流程路由控件的下一步骤的排序问题。</li>
			<li>修复流程快照管理缺省快照的bug.</li>
			<li>添加了绑定变量creatorId，修复重新路由的时候无法传递给creatorId的问题。</li>
			<li>添加了创建TW群组的接口方法。</li>
		</ul>
		<h3>2017-02-06</h3>
		<ul>
			<li>修改pom.xml，加载本地jar。</li>
			<li>mavean build 语法编译兼容  使用eclipse语法编译替代mavean 语法检查.</li>
			<li>修复合并Token时连接超时导致任务无法提交的问题。</li>
		</ul>
		<h3>2017-01-20</h3>
		<ul>
			<li>待办同步高并发情况下，增加代码同步锁。</li>
			<li>把取回操作、流程实例管理等错误信息写入到数据库中。</li>
			<li>在退回、取回、停止实例、重新路由这些操作完成后，将加签记录重置为OFF。</li>
			<li>修改流程路由失败后的错误信息输出方式。</li>
			<li>在打开流程文档时匹配文档ID和实例ID，若不匹配，抛出异常。</li>
		</ul>
		<h3>2017-01-19</h3>
		<ul>
			<li>完成在提交时候的处理人的授权审批计算。</li>
			<li>修复在退回后的文档权限问题。</li>
			<li>记录数据文档历史版本数据。</li>
			<li>修复退回后计算环节处理人错误的问题。</li>
			<li>修复取回后的文档权限问题。</li>
			<li>表单体数据修改版本恢复。</li>
		</ul>
		<h3>2017-01-18</h3>
		<ul>
			<li>解决授权审批配置界面兼容性问题。</li>
			<li>代理授权记录添加流程实例id、任务id、环节bpdid.</li>
			<li>修复选人控件分页问题。</li>
			<li>流程下一步骤选择人  可配置显示和不显示。</li>
		</ul>
		<h3>2017-01-17</h3>
		<ul>
			<li>修复在取回后处理人不正确的问题。</li>
			<li>增加审批授权功能，在提交的时候判断是否有授权。</li>
			<li>查看文档结构权限，传阅添加邮件提醒.</li>
			<li>传阅邮件通知.</li>
			<li>流程元数据前缀，下一步步骤排序.</li>
			<li>quartz集群环境单实例运行.</li>
		</ul>
		<h3>2017-01-12</h3>
		<ul>
			<li>流程实例管理模块增加实例重新路由功能。</li>
			<li>修复传阅的时候一直在提交的问题。</li>
			<li>登录时清空之前的bpm登录session.</li>
			<li>完善转签 、加签的读写权限</li>
			<li>修复环节配置中的取回设定无效的问题。</li>s
		</ul>
		<h3>2017-01-10</h3>
		<ul>
			<li>修复菜单项排序号相同的时候随机排序的问题。</li>
			<li>调试保存文档功能，输出调试信息。</li>
			<li>修改打开文档获取URL参数的方法，解决Websphere兼容性问题。</li>
			<li>流程实例管理批量管理实例功能。</li>
			<li>同步流程实例状态到数据库。</li>
		</ul>
		<h3>2017-01-09</h3>
		<ul>
			<li>增加环节缺省阅读范围实体。</li>
			<li>解决动态表格在IE浏览器上自动生成submitName属性的兼容性问题。</li>
			<li>想做待办邮件通知，发现无法做，只能在消息推送那里做。</li>
			<li>增加获取BPM当前登录用户信息的方法。</li>
			<li>在BpmRoutingService中增加调试信息输出。</li>
		</ul>
		<h3>2017-01-05</h3>
		<ul>
			<li>完善流程起草权限.</li>
			<li>完善环节邮件发送功能.</li>
		</ul>
		<h3>2017-01-05</h3>
		<ul>
			<li>流程实例管理添加实例调度和查找实例功能。</li>
			<li>添加提交、退回、转签、加签、取回，传阅人的读写权限。</li>
		</ul>
		<h3>2017-01-03</h3>
		<ul>
			<li>完善环节路由系统节点；选择人员控件帮助文档；新建快照的时候，要判断是否有且只有一个空的snapshotId.</li>
			<li>提交流程发送邮件通知的接口开发完成。</li>
			<li>修复BpmClient截取端口时的问题。</li>
			<li>添加BPM连接请求超时功能。</li>
		</ul>
		<h3>2016-12-30</h3>
		<ul>
			<li>流程起草权限配置界面以及相关功能。</li>
			<li>解决线上token的问题，将多个token进行合并。</li>
			<li>加签选人的时候，要判断选中的人是否已经在加签列表中，如果是，则不能选择这个人。</li>
			<li>提交后在审批文档中添加下一处理人的写入、读取权限。</li>
			<li>退回、转签、加签增加遮罩效果，放置用户多次点击。</li>
		</ul>
		<h3>2016-12-28</h3>
		<ul>
			<li>修复BPM开启缓存出现计算流程按钮状态的bug.</li>
			<li>增加一个查找流程快照列表的方法。</li>
			<li>完成加签返回的提交功能。</li>
			<li>修改加签状态下的退回、转签、取回三个按钮的状态控制。</li>
			<li>加上加签和转签不能转出给自己的限制。</li>
		</ul>
		<h3>2016-12-27</h3>
		<ul>
			<li>国际化开放key能编辑，待办推送只新增不更新，角色添加类型和编码.</li>
			<li>添加查看角色用在了哪些应用库中的查看功能.</li>
			<li>环节邮件通知是否重复发送判断.</li>
			<li>获取任务详细信息和实例详细信息的时候增加了缓存机制，性能提升了5倍。</li>
			<li>修改取回功能，在没有taskId的情况下进行取回。取回成功后，更新任务状态。</li>
			<li>合并token的rest api设置为无需登录验证。</li>
			<li>发现BPM运行时控件的数据有误，进行了修正。</li>
			<li>审批意见添加流转记录字段，在加签和转签的时候，意见列表会显示加/转签目标用户信息。</li>
			<li>在审批任务提交时，增加异常信息控制和输出。</li>
		</ul>
		<h3>2016-12-26</h3>
		<ul>
			<li>GET, POST, PUT等HTTP方法增加了多种参数形式。</li>
			<li>增加了设置实例BO数据的方法。</li>
			<li>修改了获取流程实例中所有token的方法。</li>
			<li>修改了合并流程实例token的接口，给BPM调用。</li>
			<li>完成了普通退回和并行退回的功能开发。</li>
			<li>关闭待办任务的方式改为在提交、退回等操作后主动触发。</li>
		</ul>
		<h3>2016-12-23</h3>
		<ul>
			<li>完善数据文档权限控制.</li>
		</ul>
		<h3>2016-12-19</h3>
		<ul>
			<li>环节配置增加两个属性：环节分配变量和办理类型（独签/会签）.</li>
			<li>环节配置添加了邮件通知功能。</li>
			<li>审批环节到达后邮件推送。</li>
		</ul>
		<h3>2016-12-16</h3>
		<ul>
			<li>整理代码，将TaskInfoService中获取人员信息的方法移植到OrgEmployeeService中.</li>
			<li>将BPM用户主键固定为ldapUid和empName两种方式。</li>
			<li>修改了错误信息页面，对BPM路由报错异常进行了捕获.</li>
			<li>修改了BPM退回操作的时候人员选择的问题。</li>
			<li>修复BO对象的创建人ID会变的bug。</li>
		</ul>
		<h3>2016-12-15</h3>
		<ul>
			<li>修复BPM流程工具栏按钮状态的bug，之前在新建保存的时候显示按钮有问题。</li>
			<li>环节配置加上stepId.</li>
			<li>修改BPM的查询实例运行时状态的Service.</li>
			<li>修改流程实例操作列表的排序，改为按创建时间排序。</li>
		</ul>
		<h3>2016-12-13</h3>
		<ul>
			<li>根据流程实例上下文状态计算流程按钮显示状态。</li>
			<li>转签、加签、传阅的选人对话框加上显示当前部门的参数.</li>
		</ul>
		<h3>2016-12-12</h3>
		<ul>
			<li>完善待办消息的解析及登录跳转和选择人控件IE浏览器优化。</li>
			<li>修复了审批意见列表的日期格式问题。</li>
			<li>在创建和更新文档的时候，添加创建人和更新人。</li>
			<li>获取环节配置，控制流程工具栏按钮显示状态。</li>
			<li>BPM运行时控件补充缺少的字段信息。</li>
			<li>修改更新待办任务信息的方法。</li>
			<li>修复在Websphere上打开文档的时候会丢参数的问题。</li>
		</ul>
		<h3>2016-12-09</h3>
		<ul>
			<li>SOT动态表格添加自动编辑属性。</li>
			<li>表单SOT控件添加了html扩展属性。</li>
			<li>路由控件选人对话框没有添加showCurrent参数。</li>
			<li>修复当前环节链接有结束流程读取不到的bug。</li>
			<li>修复选择人员控件小窗口模式下的样式错位。</li>
			<li>优化人员选择控件在IE浏览器下加载数据的速度。</li>
		</ul>
		<h3>2016-12-08</h3>
		<ul>
			<li>文本框和多行文本框添加只读模式下的编码输出属性。</li>
			<li>SOT控件在只读模式下也输出id和name属性。</li>
			<li>修复转签、取回的bug。</li>
			<li>环节配置添加下一环节自定义控制规则。</li>
			<li>修复转签、传阅、取回JS脚本报错的问题。</li>
		</ul>
		<h3>2016-12-07</h3>
		<ul>
			<li>BPM流程工具栏增加了加签、传阅功能。</li>
			<li>登录后的页面跳转到之前访问的页面。</li>
			<li>创建 BPM Service 工具类，添加查询流程实例运行时信息的方法。</li>
			<li>修复启动BPM启动服务接口报错的问题。</li>
			<li>在项目中添加了my97datepicker控件。</li>
			<li>完善下载控件，修复缺陷。</li>
			<li>修复环节配置读取的bug。</li>
		</ul>
		<h3>2016-12-05</h3>
		<ul>
			<li>保存文档后，默认的跳转路径会自动加上URL参数。</li>
		</ul>
		<h3>2016-11-02</h3>
		<ul>
			<li>动态表格的添加行和插入行事件增加了事件参数。</li>
			<li>动态表格增加自动序号功能。</li>
		</ul>
		<h3>2016-09-07</h3>
		<ul>
			<li>动态表格增加自动渲染数据属性。</li>
			<li>动态表格增加渲染事件。</li>
			<li>修复上传控件在上传没有后缀名文件报错的问题。</li>
			<li>修复下拉控件报错的问题。</li>
		</ul>
		<h3>2016-09-02</h3>
		<ul>
			<li>修复子表单页面打开乱码的bug。</li>
			<li>修复上传控件页面布局错乱的bug。</li>
		</ul>
		<h3>2016-08-31</h3>
		<ul>
			<li>修复文本框隐藏属性的bug。</li>
			<li>添加子表单控件。</li>
		</ul>
		<h3>2016-08-23</h3>
		<ul>
			<li>添加任务调度功能。</li>
			<li>表单字段类型的数字类型分为整数和浮点数。</li>
			<li>查询视图控件添加了列数据格式化功能。</li>
		</ul>
		<h3>2016-08-18</h3>
		<ul>
			<li>动态表格添加optrcolumn和optrtoolbar两个属性，分别用来控制操作列和操作工具栏的状态，详情请查看自定义控件帮助文档。</li>
			<li>添加数据列视图控件。</li>
		</ul>
	</div>
</body>
</html>