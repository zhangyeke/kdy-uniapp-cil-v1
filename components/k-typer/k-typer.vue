<template>
	<view>
		<template v-if="isDye" v-for="(item,index) in contents">
			<text :key="index" v-show="cur_index>=index"
				:style="[dye_text_indexs.includes(index) ? dyeTextStyle : {},{color:getTextColor(index)}]">
				{{item}}</text>
		</template>
		<template v-if="!isDye">
			<text :style="{color:getTextColor()}">{{cur_text}}</text>
		</template>
	</view>
</template>
<!-- 文字打字机效果 -->
<script>
	export default {
		name: "k-typer",
		props: {
			// 文本内容
			content: {
				type: String,
				required: true
			},
			// 文字是否彩色
			isDye: {
				type: Boolean,
				default: false
			},
			// 需要染色的文本 需要搭配isDye
			dyeText: {
				type: [String, Array],
				default: "",
			},
			// 自定义染色文本样式
			dyeTextStyle: {
				type: Object,
				default: _ => {}
			},
			// 文本颜色
			color: {
				type: String,
				default: "#333",
			},
			// 染色文本的颜色
			activeColor: {
				type: String,
				default: "#e22814",
			},
			// 打字的速度
			speed: {
				type: Number,
				default: 100
			},
			// 默认从哪个索引开始
			startIndex: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {
				cur_index: -1,
				is_pause: false,
				contents: [],
				// 需要染色的索引列表
				dye_text_indexs: [],
				timer: null,
			};
		},
		computed: {
			cur_text() {
				let str = ""
				if (!this.isDye) {
					str = this.content.substring(0, this.cur_index)
				}
				return str
			},
		},
		watch:{
			content(v){
				v && this.reset()
			}
		},
		created() {
			this.start()
		},
		methods: {
			findDyeTextIndex() {
				if (Array.isArray(this.dyeText)) {
					if (!this.dyeText.every(item => typeof item == "string")) {
						console.error("请传入Arrar<string>类型的数组");
						return
					}
					this.dyeText.forEach((text) => {
						let index = this.content.indexOf(text)
						if (index >= 0) this.dye_text_indexs.push(...this.getDyeTextIndex(index, text))
						while (index !== -1) {
							index = this.content.indexOf(text, index + 1);
							if (index >= 0) this.dye_text_indexs.push(...this.getDyeTextIndex(index, text))
						}
					})
				} else {
					let index = this.content.indexOf(this.dyeText);
					if (index >= 0) this.dye_text_indexs.push(...this.getDyeTextIndex(index, this.dyeText))
					while (index !== -1) {
						index = this.content.indexOf(this.dyeText, index + 1)
						if (index >= 0) this.dye_text_indexs.push(...this.getDyeTextIndex(index, this.dyeText))
					}
				}
			},
			// 获取染色文本的索引
			getDyeTextIndex(index, text) {
				let list = []
				for (let i = 0; i < text.length; i++) {
					list.push(index++)
				}
				return list
			},
			getTextColor(index) {
				if (this.isDye) {
					return this.dye_text_indexs.includes(index) ? this.activeColor : this.color
				} else {
					return this.color
				}
			},
			getContents() {
				let list = []
				for (let i = 0; i < this.content.length; i++) {
					list.push(this.content[i])
				}
				return list
			},
			getCurrentText() {
				let text = ""
				if (this.isDye) {
					for (let i = 0; i <= this.cur_index; i++) {
						text+=this.contents[i]
					}
				} else {
					
				}
				return text
			},
			continue(){
				this.is_pause = false
				this.writeText()
			},
			pause() {
				this.is_pause = true
				clearTimeout(this.timer)
				this.$emit('pause',this.getCurrentText())
			},
			start(){
				this.cur_index = this.startIndex - 1
				if (this.isDye) {
					this.contents = this.getContents()
					this.dye_text_indexs.length = 0
					this.findDyeTextIndex()
				}
				
				this.writeText()
			},
			reset(){
				clearTimeout(this.timer)
				this.is_pause = false
				this.start()
			},
			writeText() {
				this.cur_index++
				if (this.cur_index > this.content.length) {
					this.is_pause = true
					this.$emit('finish')
				}

				if (!this.is_pause) {
					this.timer = setTimeout(this.writeText, this.speed)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>