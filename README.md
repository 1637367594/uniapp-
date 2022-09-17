1. 全局navBar的使用

```vue
//1.在template标签中引入NavBar标签，NavBar标签的高度为90rpx
<template>
	<view class="content" url="/" type="redirectTo">
		<NavBar title="关于我们"></NavBar>
		<view class="content">
			Hello 恒派系统
		</view>
	</view>
</template>
//2.我们可以在NavBar标签中设置属性，
    2.1 title：设置标题的属性，
    2.2 url：设置返回按钮跳转的路径，如果不设置将返回上一级，但是前提需要跳转过来的页面要保留
    所以在我们跳转后需要返回上一个页面那么跳转方式需要采用uni.navigateTo而不是uni.redirectTo（默认返回上一级）
	2.3 type：跳转的方式（默认返回上一级）
	2.4 textColor：导航栏文本颜色（默认白色）
	2.5 backgroundColor：导航背景颜色（默认黑色）
//3.在NavBar里可以设置右边显示的元素，使用插槽进行添加元素
```

2. 默认头像的使用

```vue
//处理后端返回的头像图片地址为null或为空，使用v-defaultAvatar属性，值为后端返回的头像图片地址 注：只能使用非本地图片
<img v-defaultAvatar="img" alt="">
```



2. 环境配置

```javascript
//开发环境位置 /common/environment/env.dev.js
//生产环境位置 /common/environment/env.prod.js
//获取环境中配置的值：process.uniEnv.[配置的值的key]
```

4. 调用接口

```js
//位置 /common/http/http.api.js
//添加接口 安装实例添加
//使用接口 在/pages/tabbar/home/index.vue 文件中有对应例子
```

5. 注意

```js
// /static/images/common/ 文件夹中的图片请勿删除修改
```

