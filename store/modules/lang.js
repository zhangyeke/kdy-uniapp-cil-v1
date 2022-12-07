import env from "@/config/index.js"
let vuex_storage = uni.getStorageSync(env.appName) || {}
const langStore = {
	state:{
		lang_value:vuex_storage.vuex_lang || "",
	},
	mutations:{
		changeLang(state,v){
			state.lang_value = v
			vuex_storage['vuex_lang'] = v
			uni.setLocale(v)
			uni.setStorageSync(env.appName,vuex_storage)
		}
	},
}


export default langStore