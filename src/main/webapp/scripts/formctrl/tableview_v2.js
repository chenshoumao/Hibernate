//数据表格视图V2控件脚本
smartforms.formctrl.TableViewV2=Class.extend({
	/**
     * @constructor
     * 初始化数据表格
     */
    init: function(tableViewId, data) {
    	this.id=tableViewId;
        this.data = data;
    },
    
    /**
     * 渲染数据视图
     */
    render: function() {
    	$("#"+this.id+" tbody").empty();
    	var template = $.templates("#"+this.id+"_tv2tpl");
    	var viewData=this.data.viewData;
    	if (viewData.length>0) {
    		var htmlout = template.render(viewData);
    		$("#"+this.id+" tbody").html(htmlout);
    	}
    }
});