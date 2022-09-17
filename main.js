import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

//引入公共navBar
// import NavBar from "@/components/navBar/index.vue"
// Vue.component(NavBar.name, NavBar)

//引用并设置环境变量
import '@/common/environment/env.js'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 此处为演示vuex使用，非uView的功能部分
import store from '@/store';

//
import importDirective from '@/common/directive/index.js'

// 引入uView提供的对vuex的简写法文件
let vuexStore = require('@/common/store/$u.mixin.js');
Vue.mixin(vuexStore);

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
importDirective(Vue)

const app = new Vue({ store, ...App });

// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http/http.interceptor.js';
Vue.use(httpInterceptor, app);

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http/http.api.js';
Vue.use(httpApi, app);

//Mixin
import Mixin from "@/common/mixin/index.js"
Vue.mixin(Mixin);

Vue.use(app);

app.$mount();
