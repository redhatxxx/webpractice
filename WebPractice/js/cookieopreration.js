function login(){
	var username = document.getElementById("username").value;
	addcookie("username",username,0);
	alert(username);
	//window.open("http://127.0.0.1:8020/WebPractice/index.html");
}
function logout(){
	delCookie("username");
}
//添加cookie
function addcookie(paraname,paravalue,parahour){
	var str = paraname+"="+escape(paravalue);
	if(parahour>0){
		var date = new Date();
		var ms = parahour*3600*1000;
		date.setTime(date.getTime()+ms);
		str+=";expires="+date.toGMTString();
	}
	document.cookie=str;
	alert("Cookie 添加成功！");
}
//获取cookie
function getCookie(paraname){
	var arrStr = document.cookie.split(";");
	for(var i=0;i<arrStr.length;i++){
		var tmp =arrStr[i].split("=");
		if(tmp[0]==paraname)
			return unescape(tmp[1]);
	}
	return "null";
}
//删除cookie;将指定名称的cookie的过期时间设置为已过去的时间，使其过期
function delCookie(paraname){
	var datetime = new Date;
	datetime.setTime(datetime.getTime()-1000);
	document.cookie=paraname+"=a;expires="+datetime.toGMTString();
}

function js2(){
	alert("js2");
}