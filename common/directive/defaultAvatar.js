export default {
	// 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
	bind: function(el) {
		// console.log("el", el)
	},
	// 当被绑定的元素插入到 DOM 中时……
	inserted: function(el, binding, vnode) {
		console.log(el);
		var img = el.getElementsByTagName("img")[0];
		var div = el.getElementsByTagName("div")[0];
		//如果值为空或为null时
		if(!binding.value){
			// img.src = require("@/static/images/common/defaultAvatar.png");
			div.style.backgroundImage = "url("+require("@/static/images/common/defaultAvatar.png")+")";
		} else {
			// img.src = binding.value;
			div.style.backgroundImage = "url("+binding.value+")";
		}
	}
}
