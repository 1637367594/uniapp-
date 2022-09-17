/**
 * 全局混入
 **/
module.exports = {
	data() {
		return {
			/**
			 * page :页码
			 * size :页面展示多少条
			 */
			params: {
				page: 1,
				size: 10
			},
			list:[]
		}
	},
	methods: {
		/**
		 * 初始化页面方法
		 */
		async init() {
			await this.initParame()
			await this.getData()
		},
		/**
		 * 初始化params，担心后直接添加即可
		 */
		async initParame(){
			this.list = [];
			this.params.page = 1 ;
		},
		/**
		 * page++方法
		 */
		async pageAdd(){
			this.params.page++
			return await this.getData()
		},
		/**
		 * 获取数据方法，后续页面直接重写该代码即可
		 */
		async getData() {
			
		}
	},
	onLoad() {
		// 页面加载初始化数据
		this.init()
	},
	onPullDownRefresh() {
		// 上拉刷新
		this.init().then((res)=>{
			uni.stopPullDownRefresh()
		});
	},
	onReachBottom() {
		// 下拉加载
		this.pageAdd()
	}
}
