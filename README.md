# **kdy-uniapp-cil**

<div>
<img src="https://raster.shields.io/badge/uniapp-3.6+-2b9939?link=https://uniapp.dcloud.net.cn/">
<img src="https://raster.shields.io/badge/uview-1.8+-4aafff?link=https://v1.uviewui.com/">
<img src="https://raster.shields.io/badge/Vue-2.6+-4fc08d?logo=vue.js&link=https://v2.cn.vuejs.org/">
<img src="https://raster.shields.io/badge/Vuex-3.0+-4fc08d?logo=vue.js&link=https://v3.vuex.vuejs.org/zh/">
<img src="https://raster.shields.io/badge/VueI18n-8.2+-4fc08d?logo=vue.js&link=https://uniapp.dcloud.net.cn/tutorial/i18n.html#vue%E7%95%8C%E9%9D%A2%E5%92%8Cjs%E5%86%85%E5%AE%B9%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96">
<img src="https://raster.shields.io/badge/luchRequest-3.0.4-263137?link=https://www.quanzhan.co/luch-request/guide/3.x/">
<img src="https://raster.shields.io/badge/sass-8.0+-cc6699?logo=Sass&link=https://www.sass.hk/">
</div>

### 描述✨

本模板是uniapp项目的基础模板,集成了uview-ui和i18n国际化,并封装了众多全局方法和全局样式,适合开箱即用,推荐开发新项目使用。如果对你有帮助的话，给个好评和star吧!🤞🤞🤞

### 基本功能🛰

1. 集成了vue-i18n国际化，默认获取手机系统语言，并声明vuex_lang全局变量，通过修改vuex_lang值即可转换其他其他语言

2. 集成[uview-ui](https://v1.uviewui.com/)，采用下载安装方式，已配置好，无需npm

3. 集成了[luch-request](https://www.quanzhan.co/luch-request/)请求库,并配置了请求拦截和响应拦截以及一些相应的配置

4. [vuex和缓存实现全局变量]([全局变量的实现方式 | uView - 多平台快速开发的UI框架 - uni-app UI框架](https://v1.uviewui.com/guide/globalVariable.html))

5. 全局公共函数

6. [全局主题scss变量]([自定义主题 | uView - 多平台快速开发的UI框架 - uni-app UI框架](https://v1.uviewui.com/guide/theme.html))和全局css

### 项目目录📁

```
kdy-uni-cil-v1
├─ .hbuilderx
│  └─ launch.json
├─ api  //api模块化管理目录
├─ App.vue
├─ common //公共资源目录
│  ├─ css
│  │  ├─ global.scss  //全局css
│  │  └─ theme.scss   //主题scss变量 
│  ├─ enum-file    //存放枚举数据的文件
│  │  └─ tabbar-option.js
│  └─ js //全局方法
│     ├─ data-handle.js
│     ├─ date-handle.js
│     ├─ http.js //接口请求函数
│     ├─ k.js
│     ├─ page-handle.js
│     ├─ permissions-handle.js //判定app权限是否开启的方法
│     └─ utils.js
├─ components    //项目的组件库
│  └─ k-more-line-roll
│     └─ k-more-line-roll.vue
├─ config    //项目的配置文件
│  ├─ env.dev.js    //开发环境
│  ├─ env.prod.js   //生产环境 
│  └─ index.js
├─ index.html
├─ locale    //i18n的字典
│  ├─ en.json
│  ├─ i18n-config.js
│  ├─ zh-Hans.json
│  └─ zh-Hant.json
├─ main.js    //主入口
├─ manifest.json    
├─ pages    //页面
│  └─ index
│     ├─ index.vue
│     └─ my.vue
├─ pages.json    //页面配置文件
├─ plugin    //存放插件的目录
│  └─ luch-request
├─ README.md    
├─ static    //存储静态美术资源目录
│  └─ logo.png
├─ store    //vuex
│  ├─ index.js
│  ├─ modules
│  │  └─ lang.js
│  ├─ mutations.js
│  ├─ state.js
│  ├─ store.json
│  └─ u-mixin.js   
├─ uni.scss
└─ uview-ui    //uview-ui目录
```

### 克隆模板🦕

```
1.gitHub
git clone https://github.com/zhangyeke/kdy-uniapp-cil-v1.git
2.Gitee
git clone https://gitee.com/zhang-yeke/kdy-uni-cil-v1.git
```

### 鸣谢🌟

- [unaipp](https://github.com/dcloudio/uni-app)是一个使用 `Vue.js` 开发小程序、H5、App的统一前端框架。

- uview-ui(https://github.com/umicro/uView) 多平台快速开发的UI框架，uniapp生态最优秀的UI框架。

- [luch-request](https://github.com/lei-mu/luch-request)基于 Promise 对象实现更简单的 request 使用方式，支持请求和响应拦截
