import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import state from "./state.js"
import mutations from "./mutations.js"
import lang from "./modules/lang.js"
const store = new Vuex.Store({
	state,
	mutations,
	modules:{
		lang
	},
})

export default store