// 英文
import en from "./en.json"
// 简体中文
import zhHans from "./zh-Hans.json"
// 繁体中文
import zhHant from "./zh-Hant.json"
import store from "@/store/index.js"
const messages = {
	en,
	'zh-Hans': zhHans,
	'zh-Hant': zhHant
}
export default {
	locale: store.state.lang.lang_value,
	messages
}
