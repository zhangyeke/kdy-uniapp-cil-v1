import App from './App'
import Vue from 'vue'
App.mpType = 'app'
Vue.config.productionTip = false
import store from '@/store/index.js'
import uView from "@/plugin/uview-ui";
Vue.use(uView);
// #ifndef APP-NVUE
// nvue不支持main.js引入
import i18nConfig from "@/locale/i18n-config.js"
import VueI18n from "vue-i18n"
Vue.use(VueI18n)
const i18n = new VueI18n(i18nConfig)
// #endif

// 全局变量混入
import uMixin from '@/store/u-mixin.js'
Vue.mixin(uMixin)

// #ifdef MP-WEIXIN  
// 引入uView对小程序分享的mixin封装
let mpShare = require('@/plugin/uview-ui/libs/mixin/mpShare.js')
Vue.mixin(mpShare)
// #endif

// 公共函数引入
import k from "@/common/js/k.js"
Vue.use(k)

const app = new Vue({
    ...App,
	// #ifndef APP-NVUE
	i18n,
	// #endif
	store,
})
app.$mount()
