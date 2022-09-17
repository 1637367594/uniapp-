<template>
	<!-- back-text="返回" -->
	<!-- is-back="false" -->
	<!-- :immersive="immersive" -->
	<!-- :border-bottom="false" -->
	<u-navbar :title="title" :titleStyle="{'color': textColor}" :bgColor="backgroundColor">
		<view class="myIsBack" @click="goback" :style="{'margin-left': margin + 'rpx'}">
			<image src="../../static/images/common/Vector.png" mode=""></image>
		</view>
		<view class="right" slot="right" :style="{'margin-right': margin + 'rpx','color': textColor}">
			<slot></slot>
		</view>
	</u-navbar>
</template>

<script>
	export default {
		name: 'NavBar',
		props: {
			//标题名
			title: {
				type: String,
				default: () => ""
			},
			//
			immersive: {
				type: Boolean,
				default: () => true
			},
			//跳转的页面
			url: {
				type: String,
				default: () => ""
			},
			//跳转的方式
			type: {
				type: String,
				default: () => "redirectTo"
			},
			//导航栏文本颜色
			textColor: {
				type: String,
				default: () => "#fff"
			},
			//导航背景颜色
			backgroundColor: {
				type: String,
				default: () => "#000"
			}
		},
		data() {
			return {
				margin: 35
			}
		},
		methods: {
			goback() {
				const canNavBack = getCurrentPages()
				if (canNavBack && canNavBack.length > 1) {
					if (this.type === "self") {
						this.$emit("go")
						return
					}
					if (this.url) {
						uni[this.type]({
							url: this.url,
							success: function(e) {
								console.log("e")
							},
							fail: function(e) {
								console.log("err", e)
							}
						})
					} else {
						uni.navigateBack({
							delta: 1
						});
					}
				} else {
					history.back()
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.myIsBack {
		width: 60rpx;
		height: 60rpx;
		background: rgba(216, 216, 216, 0.1);
		border-radius: 50%;
		backdrop-filter: blur(20px);
		box-shadow: inset 0px -10px 10px 0px rgba(10, 8, 9, 0.15), inset 0px 10px 10px 0px rgba(24, 57, 48, 0.15);
		text-align: center;
		line-height: 60rpx;
		position: relative;

		image {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			height: 30rpx;
			width: 16rpx;
		}
	}
	
	.u-navbar {
		.u-navbar-inner {
			.u-title {
				color: #fff !important;
			}
		}
	}
</style>
