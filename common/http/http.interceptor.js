// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
const install = (Vue, vm) => {
	// Vue.prototype.$u.http.request.baseUrl = "";
	Vue.prototype.$u.http.request()
	// console.log(Vue.prototype.$u.http);
	// Vue.prototype.$u.http.setConfig({
	// 	baseUrl: process.uniEnv.baseUrl,
	// 	// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
	// 	// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
	// 	// originalData: true, 
	// });
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptors.request.use((config) => { // 可使用async await 做异步操作
		const token = uni.getStorageSync('token');
		config.header.Authorization = token;
		return config
	}, config => { // 可使用async await 做异步操作
		return Promise.reject(config)
	})
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptors.response.use((response) => {
		if (res.code == 200) {
			return res.data;
		} else {
			if ([10002, 10003, 10004, 1001,1002,1004].includes(res.code)) {
				vm.$u.toast('用户信息过期,请重新登录')
				console.log('用户信息过期,请重新登录');
				setTimeout(() => {
					/* uni.reLaunch({
						url: '/pages/login/login'
					}) */
				}, 1500)
				return false
			} else {
				console.log('报错信息', res.message)
				vm.$u.toast(res.message)
				return false;
			}
		}
		return response
	}, (response) => {
		/*  对响应错误做点什么 （statusCode !== 200）*/
		console.log(response)
		return Promise.reject(response)
	})
	
}
export default {
	install
}
