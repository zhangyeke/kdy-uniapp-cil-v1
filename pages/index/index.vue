<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area px_10 m_10 font_600 text_20 opacity_5 underline_5">
			<text>{{$t('hello')}}!</text>
		</view>

	</view>
</template>

<script>

	export default {
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.title {
		font-size: 36rpx;

	}
</style>
