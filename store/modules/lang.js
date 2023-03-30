/*
 * @Author: zyk 997610780@qq.com
 * @Date: 2023-03-30 18:33:13
 * @LastEditors: zyk 997610780@qq.com
 * @LastEditTime: 2023-03-30 18:38:21
 * @FilePath: \kdy-uni-cil-v1\store\modules\lang.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import env from "@/config/index.js"
let vuex_storage = uni.getStorageSync(env.appName) || {}
const langStore = {
	state:{
		lang_value:vuex_storage.vuex_lang || uni.getLocale(),
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