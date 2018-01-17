
var cal = require("./cal.js");

var btn = document.querySelector("#btn");

btn.onclick = function(){
	var n1 = document.querySelector("#n1").value;
	var n2 = document.querySelector("#n2").value;

	document.querySelector("#res").value = cal(n1, n2);
}