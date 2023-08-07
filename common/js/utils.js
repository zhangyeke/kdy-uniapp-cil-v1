// 工具类函数集

// #ifndef H5
// 支付
export function requestPayment(type, orderInfo) {
    //#ifdef MP-WEIXIN
    return new Promise((resolve, reject) => {
        wx.requestPayment({
            ...orderInfo,
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            }
        })
    })
    //#endif
    // #ifndef MP-WEIXIN
    return new Promise((resolve, reject) => {
        uni.requestPayment({
            provider: type,
            orderInfo,
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            }
        })
    })
    // #endif
}
// #endif


// 提示弹窗
export function toast(title, backFun, duration = 1500, mask = true) {
	uni.showToast({
		title,
		mask,
		icon: "none",
		duration: duration,
		success: () => {
			setTimeout(() => {
				typeof backFun == "function" && backFun()
			}, duration)
		}
	})
}

// 其他弹窗 默认为success
export function oToast(title, backFun, duration = 1500, icon = 'success') {
	uni.showToast({
		title,
		mask: true,
		icon,
		duration: duration,
		success: () => {
			setTimeout(() => {
				backFun()
			}, duration)
		}
	})
}

// 上传文件
export function uploadFile(url, filePath, onProgress, formData = {}) {
	return new Promise((resolve, reject) => {
		const uploadTask = uni.uploadFile({
			url,
			filePath,
			name: 'file',
			formData,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
		onProgress(uploadTask)
	})
}
