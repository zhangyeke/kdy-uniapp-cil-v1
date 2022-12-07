/*
 * @Author: your name
 * @Date: 2021-09-02 15:06:26
 * @LastEditTime: 2021-09-10 16:10:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uniapp-cil\src\store\mutations.js
 */
import env from '@/config/index.js'

const storeJson = require('./store.json')
    // 保存变量到本地存储中
const saveData = (key, value) => {
    // 判断变量名是否在需要存储的数组中
    if (storeJson.hasOwnProperty(key) && storeJson[key].meta.is_storage) {
        // 获取本地存储的vuex_storage对象，将变量添加到对象中
        let tmp = uni.getStorageSync(env.appName);
        // 第一次打开APP，不存在vuex_storage变量，故放一个{}空对象
        tmp = tmp ? tmp : {};
        tmp[key] = value;
        // 执行这一步后，所有需要存储的变量，都挂载在本地的 vuex_storage 对象中
        uni.setStorageSync(env.appName, tmp);
    }
}


const mutations = {
    $uStore(state, payload) {
        // 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
        let nameArr = payload.name.split('.');
        let saveKey = '';
        let len = nameArr.length;
        if (nameArr.length >= 2) {
            let obj = state[nameArr[0]];
            for (let i = 1; i < len - 1; i++) {
                obj = obj[nameArr[i]];
            }
            obj[nameArr[len - 1]] = payload.value;
            saveKey = nameArr[0];
        } else {
            // 单层级变量，在state就是一个普通变量的情况
            state[payload.name] = payload.value;
            saveKey = payload.name;
        }
        // 保存变量到本地，见顶部函数定义
        saveData(saveKey, state[saveKey])
    }
}

export default mutations