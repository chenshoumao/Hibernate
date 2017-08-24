/**
 * 系统自动登出js
 */
var isout="";
var times=getlogout();
//setInterval("logouts()", 1000*60*(getlogout()+1));
//setInterval("logouts()", 1000*60*1);
function logouts(){
	var location = (window.location+'').split('/'); 
	var basePath = location[0]+'//'+location[2]+'/'+location[3]; 
	$.ajax({
		url:basePath+'/safeMsg/start.action',    
		type:'post',  
		data:{},  
		success:function(data)    
		{   
			if(data.isfale){
				//alert(data.isfale);
				$.ajax({
					url:basePath+'/safeMsg/login.action',    
					type:'get'
				});
			}else{
				
			}
		}   
	});
}
function getlogout(){
	var time1=5;
	var location = (window.location+'').split('/'); 
	var basePath = location[0]+'//'+location[2]+'/'+location[3]; 
	$.ajax({
		url:basePath+'/safeMsg/getlogout.action',    
		type:'post',  
		data:{},  
		success:function(data)    
		{   
			//var json=data.data[0];
			isout=data.TEST1;
			time1=parseInt(data.TEST2)+1;
		}   
	});
	return time1;
}