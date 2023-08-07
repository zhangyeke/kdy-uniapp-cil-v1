<template>
	<view class="page">
		<view class="page_body">
			<scroll-view class="page_body_left" :scroll-y="true">
				<k-sidebar-menu v-model="defaultActive" @change="handleChange" >
					<k-sidebar-menu-item v-for="(item,index) in sort_list" :key="item.id" :index="index"
						:children="item.children || []"  :text="item.name" childrenTitleClass="menu_item">
						<template #title="{title}">
							<view class="menu_item">
								{{title}}
							</view>
						</template>
					</k-sidebar-menu-item>
				</k-sidebar-menu>
			</scroll-view>
			<view class="page_body_right" >

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultActive: '0-0',
				sort_list: [{
						id: 1,
						name: "导航一",
						children: [{
								id: 11,
								name: "导航十一",
							},
							{
								id: 12,
								name: "导航十二",
								children: [
									{
										id: 111,
										name: "导航十一1",
									},
									{
										id: 121,
										name: "导航十二1",
									},
									{
										id: 131,
										name: "导航十三1",
									}
								]
							},
							{
								id: 13,
								name: "导航十三",
							}
						]
					},
					{
						id: 2,
						name: "导航二",
					},
					{
						id: 3,
						name: "导航三",
						children: [
							{
								id: 111,
								name: "导航十一1",
							},
							{
								id: 121,
								name: "导航十二1",
							},
							{
								id: 131,
								name: "导航十三1",
								children: [
									{
										id: 111,
										name: "导航十一1",
									},
									{
										id: 121,
										name: "导航十二1",
										children: [
											{
												id: 111,
												name: "导航十一1",
											},
											{
												id: 121,
												name: "导航十二1",
											},
											{
												id: 131,
												name: "导航十三1",
											}
										]
									},
									{
										id: 131,
										name: "导航十三1",
									}
								]
							}
						]
					},
					{
						id: 4,
						name: "导航四",
					},
				],
				cur_sort: 0,
				cur_article_index: -1,
			}
		},
		computed: {

		},
		onLoad() {
			
		},
		methods: {
			handleChange(index){
				console.log(index,"kkk",this.defaultActive);
			},

		}
	}
</script>

<style scoped lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		height: 100vh;

		&_body {
			display: flex;
			flex: 1;
			background-color: #fff;
			&_left {
				width: 240rpx;
				::v-deep .menu_item {
					padding: 20rpx 30rpx;
					border-bottom: 1px solid #ccc;
				}
			}

			&_right {
				display: flex;
				justify-content: space-between;
				align-content: flex-start;
				flex-wrap: wrap;
				padding: 20rpx 30rpx 0;
				flex: 1;

				.article {
					width: 200rpx;
					height: 64rpx;
					text-align: center;
					line-height: 64rpx;
					border: 1px solid #808080;
					border-radius: 32rpx;
					margin-top: 40rpx;
					color: #999999;
					font-size: 24rpx;
					padding: 0 20rpx;

					&.active {
						background: linear-gradient(101.17deg, #DE95B1 0%, #A495D8 66.92%, #8795EB 100%);
						border-color: transparent;
						color: #fff;
					}
				}
			}
		}
	}
</style>