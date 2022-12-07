import Request from "@/plugin/luch-request/index.js";
import env from "@/config/index.js"
const http = new Request();
/**
 * @description 修改全局默认配置 https://www.quanzhan.co/luch-request/guide/3.x/#%E5%8F%AF%E9%85%8D%E7%BD%AE%E9%A1%B9
 * @param {Function}   
 */

http.setConfig((config) => {
	/* config 为默认全局配置*/
	config.baseURL = env.baseUrl
	// 全局的请求头
	config.header = {

	}
	// 自定义params 处理函数
	config.paramsSerializer = (v) => {

	}
	// 超时时间
	config.timeout = 3000

	// 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
	validateStatus: (statusCode) => { // statusCode 必存在。此处示例为全局默认配置
		return statusCode >= 200 && statusCode < 300
	}
	return config
})

// 请求拦截
http.interceptors.request.use((config) => { // 可使用async await 做异步操作
	config.header = {
		...config.header,
		a: 1 // 演示拦截器header加参
	}
	return config
}, config => { // 可使用async await 做异步操作
	console.log("错误了",config);
	return  Promise.reject(config)
})

// 响应拦截
http.interceptors.response.use((response) => {
	/* 对响应成功做点什么 可使用async await 做异步操作*/
	console.log(response, "响应成功")
	return response
}, (response) => {
	/*  对响应错误做点什么 （statusCode !== 200）*/
	console.log(response)
	return Promise.reject(response)
})


export default http
