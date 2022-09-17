/**
 * 全局混入
 **/
module.exports = {
	data() {
		return {
			/**
			 * currentPageTitle :用于页面title
			 */
			currentPageTitle: ''
		}
	},
	methods: {
		/**
		 * 获取Title
		 * @param src
		 * @returns {string|*}
		 */
		getTitle() {
			// console.log(getCurrentPages);
			let pages = getCurrentPages();
			let page = pages[pages.length - 1];//当前页面实例
			this.currentPageTitle = page.$holder.navigationBarTitleText;//当前页面标题
		}
	},
	onLoad() {
		this.getTitle()
	}
}