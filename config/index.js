
/* 配置管理 */
let env_var = null

if (process.env.NODE_ENV === 'development') {
    env_var = require('./env.dev.js').default
} else {
    env_var = require('./env.prod.js').default
}

export default {
    appName: 'kdy',//项目的名称 也是 Storage 保存名
    baseUrl: env_var.baseUrl, // 基准域名
    uploadUrl: env_var.uploadUrl, // OSS或上传媒体资源 路径
}