<script>
	import env from '@/config/index.js'
	export default {
		onLaunch: function() {
			let vuex_storage = uni.getStorageSync(env.appName)
			if(!Object.keys(vuex_storage).length && !vuex_storage.vuex_lang){
				this.$store.commit('changeLang',uni.getLocale())
			}
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	@import "@/common/css/global.scss"
</style>
