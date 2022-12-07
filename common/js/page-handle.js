// 页面处理的函数集
import TABBAR from "@/common/enum-file/tabbar-option.js"

// 页面跳转兼容跳转tabbar  
// 窗口动画 https://uniapp.dcloud.net.cn/api/router.html#animation
export function to(_page, animationType = "pop-out") {
	let tabs = TABBAR.TABBARPATH
	_page = _page.startsWith('pages/') ? _page : 'pages/' + _page
	if (tabs.includes(_page)) {
		uni.switchTab({
			url: '/' + _page,
		})
		return
	} else {
		uni.navigateTo({
			url: '/' + _page,
			animationType,
			animationDuration: 300
		})
		return
	}
}

// 关闭当前页跳转
export function toRedi(_page) {
	_page = _page.startsWith('pages/') ? _page : 'pages/' + _page
	uni.redirectTo({
		url: '/' + _page,
	})
}

// 关闭所有页面跳转
export function toRela(_page) {
	_page = _page.startsWith('pages/') ? _page : 'pages/' + _page
	uni.redirectTo({
		url: '/' + _page,
	})
}

// tabbar跳转
export function toTab(_page) {
	_page = _page.startsWith('pages/') ? _page : 'pages/' + _page
	uni.switchTab({
		url: '/' + _page
	})
}

// 页面返回
export function toBack(delta = 1, animationType = 'pop-out') {
	uni.navigateBack({
		delta,
		animationType,
	});
}

// 获取当前页面路径
export function getCurPage() {
    let routers = getCurrentPages()
    let page = routers[routers.length - 1].route
    return page
}
