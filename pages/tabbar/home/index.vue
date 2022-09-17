<template>
	<view class="content">
        首页
		<!-- <NavBar title="关于我们"></NavBar> -->
		<!-- <view class="content-son" v-showView.bottom>
			Hello 恒派系统
			<image v-defaultAvatar="img" mode="aspectFit"></image>
		</view> -->
	<!-- 	<u-steps current="0">
			<u-steps-item title="已下单" desc="10:30">
			</u-steps-item>
			<u-steps-item title="已出库" desc="10:35"></u-steps-item>
			<u-steps-item title="运输中" desc="11:40"></u-steps-item>
		</u-steps> -->
	</view>
</template>

<script>
	import Mixin from "@/common/mixin/mixin.js"
	export default {
		mixins: [Mixin],
		data() {
			return {
			}
		},
		methods: {

		},
		onShow(options) {
			// this.$u.api.getTestData().then(res => {
			// 	console.log(res);
			// });
		},
		onLoad() {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		// overflow: hidden;
	}

	.content-son {
		padding-top: 300rpx;
		text-align: center;
		font-size: 50rpx;
		// margin: 300rpx 0;

		img {
			width: 100rpx;
			margin: 50rpx auto;
			display: block;
		}
	}
</style>
