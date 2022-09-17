export default {
	bind: function(el) { // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
		// console.log("el", el)
	},
	inserted: function(el, binding, vnode) {
		// 聚焦元素
		binding.addClass = () => {
			const { top } = el.getBoundingClientRect()
			const h = document.documentElement.clientHeight || document.body.clientHeight
			if (top < h) {
				let direction;
				if (binding.modifiers.top) {
					direction = 'animation-top';
				} else if (binding.modifiers.left) {
					direction = 'animation-left';
				} else if (binding.modifiers.right) {
					direction = 'animation-right';
				} else if (binding.modifiers.bottom) {
					direction = 'animation-bottom';
				} else {
					direction = 'animation-opacity';
				}
				if (el.className.indexOf(direction) == -1) {
					// 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
					el.className = direction + ' ' + el.className
				}
				if (binding.addClass) {
					window.removeEventListener('scroll', binding.addClass)
				}
			}
		}
		window.addEventListener('scroll', binding.addClass, true)
		binding.addClass()
	},
	unbind: function(el, binding) {
		if (binding.addClass) {
			window.removeEventListener('scroll', binding.addClass)
		}
	}
}
