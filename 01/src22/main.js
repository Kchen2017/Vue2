require("./index.less");
require("../../static/mui/dist/css/mui.css");

var cal = require("./cal.js");

var btn = document.querySelector("#btn");

btn.onclick = () => {
	var n1 = document.querySelector("#n1").value - 0;
	var n2 = document.querySelector("#n2").value - 0;

	document.querySelector("#res").value = cal.sum(n1, n2);
}