/*
 * @Author: your name
 * @Date: 2021-09-10 16:16:01
 * @LastEditTime: 2021-09-10 18:04:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-cil\src\store\uMixin.js
 */
import {
    mapState
} from 'vuex'
import store from "@/store/index.js"
const storeJson = require('./store.json')

// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
let $uStoreKey = [];
try {
    Object.keys(store.state).map(key => {
        // 将需要混入到全局的变量到vuex
        if (storeJson[key].meta.is_mixin) {
            $uStoreKey.push(key)
        }
    })

} catch (e) {

}
module.exports = {
    created() {
        // 将vuex方法挂在到$u中
        // 使用方法为：如果要修改vuex的state中的user.name变量为"史诗" => this.$u.vuex('user.name', '史诗')
        // 如果要修改vuex的state的version变量为1.0.1 => this.$u.vuex('version', '1.0.1')
        this.$u.vuex = (name, value) => {
            this.$store.commit('$uStore', {
                name,
                value
            })
        }
    },
    computed: {
        // 将vuex的state中的所有变量，解构到全局混入的mixin中
        ...mapState($uStoreKey),
		vuex_lang:{
			get(){
				return store.state.lang.lang_value
			},
			set(v){
				store.commit('changeLang',v)
				this.$i18n.locale = v
			}
		}
    }
}