<template>
	<view class="x-more-line-roll" :style="[cmpStyle]">
		<view class="x-more-line-roll-list" :style="{transform: `translateY(-${top}rpx)`}">
			<view class="x-more-line-roll-item" v-for="(item,index) in forList" :key="`roll-${index}`"
				:style="[itemStyle]">
				<slot :item="item" :index="index"></slot>
			</view>
		</view>
		<view class="x-more-line-roll-mask">

		</view>
	</view>
</template>
<!-- 内容Y轴无缝滚动组件 -->
<script>
	export default {
		name: "x-more-line-roll",
		props: {
			// 列表
			list: {
				type: Array,
				required: true
			},
			// 子元素的高度
			itemHeight: {
				type: Number,
				default: 50
			},
			// 滚动的间隔事件
			interval: {
				type: Number,
				default: 20
			},
			// 滚动的速度 值越小越快
			speed: {
				type: Number,
				default: 500
			},
			// 子元素底部外边距
			marginBottom: {
				type: Number,
				default: 10
			},
			// 可视区要展示的数量
			showNumber: {
				type: Number,
				default: 2
			},
			// 延时
			delay: {
				type: Number,
				default: 0
			},
			//停顿感 
			sensePause: {
				type: Boolean,
				default: false
			},
		},
		data() {
			return {
				timer: null, //定时器实例
				top: 0, //Y轴移动的值
			};
		},
		created() {
			if (this.delay) {
				setTimeout(() => {
					this.start()
				}, this.delay)
			} else {
				this.start()
			}
		},
		computed: {
			// 子项的整体高度  自身高度+底部外边距
			itemHeightCount() {
				return this.itemHeight + this.marginBottom
			},
			// 实际要展示的数量 为了防止用户输入大于数组的长度
			showLine() {
				return this.showNumber < this.list.length ? this.showNumber : this.list.length
			},
			// 组件的样式
			cmpStyle() {
				return {
					height: this.$u.addUnit(this.showLine * this.itemHeightCount)
				}
			},
			// 子元素的样式
			itemStyle() {
				return {
					height: this.$u.addUnit(this.itemHeight),
					marginBottom: this.$u.addUnit(this.marginBottom)
				}
			},
			// 循环列表
			forList() {
				let list = this.list.filter((item, index) => index < this.showLine)
				return this.list.concat(list)
			},
		},

		methods: {
			start() {
				this.timer = setInterval(this.roll, this.interval)
			},
			//停止滚动
			stop() {
				clearInterval(this.timer)
			},
			// 滚动
			roll() {
				// 如果滚动的值大于列表的高度重新滚动
				if (this.top >= this.list.length * this.itemHeightCount) {
					this.top = 0
				}
				let step_speed = this.speed / this.itemHeightCount
				let step = 0

				if (this.sensePause) {
					let timer = setInterval(() => {
						this.top = this.top + 1
						step++;
						if (step >= this.itemHeightCount) {
							clearInterval(timer);
						}
					}, step_speed)
				} else {
					let timer = setTimeout(() => {
						this.top = this.top + 1
						step++;
						// 	if (step >= this.itemHeightCount) {
						// 		clearInterval(timer);
						// 	}

					}, step_speed)
				}

			},
		}
	}
</script>

<style lang="scss" scoped>
	.x-more-line-roll {
		position: relative;
		overflow: hidden;
		width: 100%;

		&-mask {
			position: absolute;
			left: 0;
			bottom: -5rpx;
			width: 100%;
			height: 70rpx;
			background: linear-gradient(90deg, #f9f8fe, hsla(0, 0%, 100%, 0));
			// background-color: rgba(249,248,254,0.8);
			// filter: blur(30rpx);
			z-index: 99;
		}
	}
</style>
