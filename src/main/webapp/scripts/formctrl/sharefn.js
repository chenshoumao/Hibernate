var Namespace = new Object();              
Namespace.register = function(path){     
    var arr = path.split(".");     
    var ns = "";     
    for(var i=0;i<arr.length;i++){     
        if(i>0) ns += ".";     
        ns += arr[i];     
        eval("if(typeof(" + ns + ") == 'undefined') " + ns + " = new Object();");     
    }     
}

//注册命名空间
Namespace.register("smartforms.formctrl");
Namespace.register("smartforms.jsutils");   

smartforms.formctrl.UIBaseCtrl = Class.extend({
    init: function(ctrlId) {
        this.ctrlId=ctrlId;
    }
});

/**
 * 智能表单控件前端脚本公共函数
 */
smartforms.jsutils.CommonFn=function() {
    /**
     * 判断值是否在数组中，如果不是数组，则判断两者是否相等
     */
    this.isValMember=function(val, members) {
        var result=false;
        if ($.isArray(members)) {
            $.each(members, function(index,item) {
                if (item==val) {
                    result=true;
                    return false;
                }
            });
        } else {
            if (members==val) {
                result=true;
            }
        }
        return result;
    }
}


//格式化数字为千分位
smartforms.formctrl.CurrencyTag = function () {
	this.formatAmount = function(num){
      if(isNaN(num)){
          return "";
      }else{
          var source = String(num).split(".");//按小数点分成2部分
          source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)','ig'),"$1,");//只将整数部分进行都好分割
          return source.join(".");//再将小数部分合并进来
      }
    }
	
	//千分位恢复为数字
	this.recoverAmount = function (num){
		return num.replace(/,/g,'');
	}
}

