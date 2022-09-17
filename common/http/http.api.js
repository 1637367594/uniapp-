// 此处第二个参数vm，就是我们在页面使用的this，你可以通过vm获取vuex等操作，更多内容详见uView对拦截器的介绍部分：
// https://uviewui.com/js/http.html#%E4%BD%95%E8%B0%93%E8%AF%B7%E6%B1%82%E6%8B%A6%E6%88%AA%EF%BC%9F
const install = (Vue, vm) => {

	// post 请求
	let post = (url = '', params = {}) => {
		return vm.$u.http.post(url, params)
	}
	// get 请求
	let get = (url = '', params = {}) => {
		return vm.$u.http.get(url, params)
	}
	// put 请求
	let put = (url = '', params = {}) => {
		return vm.$u.http.put(url, params)
	}
	// delete 请求
	let dele = (url = '', params = {}) => {
		return vm.$u.http.delete(url, params)
	}
	
	/* 自定义接口 */
		
	// 获取测试数据,仅供学习
	const getTestData = (params = {}) => {
		return new Promise((resolve, reject) => {
			get('/api/index/banner', params).then(res => {
				resolve(res);
			}).catch(err => {
				reject(err);
			})
		})
	}

	
	// 将各个定义的接口名称，统一放进对象挂载到vm.$u.api(因为vm就是this，也即this.$u.api)下
	vm.$u.api = {
		getTestData
	};
}

export default {
	install
}
