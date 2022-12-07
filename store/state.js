
import storeJson from './store.json';
// 以配置文件的项目名称来作为缓存的字段
import env from '@/config/index.js'

let vuex_storage = {};
try {
    // 尝试获取本地缓存，第一次启动APP时是不存在的
    vuex_storage = uni.getStorageSync(env.appName);
} catch (e) {

}

let states = {}

// vuex 变量，以 vuex_ 为前缀，防止变量名冲突，也让人一目了然
// is_storage 为 false 时，不做持久化
Object.keys(storeJson).forEach((key) => {
    if (storeJson[key].meta.is_storage) {
        //判断传过来的key 是否在store.json文件定义
        states[key] = vuex_storage?.hasOwnProperty(key) ? vuex_storage[key] : storeJson[key].value
    } else {
        states[key] = storeJson[key].value
    }
})


const state = {
    ...states
}

export default state