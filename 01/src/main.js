import Vue from "vue";

import App from "./app.vue";

new Vue({
	el: "#root",
	render: function(creater){
		return creater(App);
	}
})