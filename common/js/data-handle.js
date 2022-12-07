// 数据切割处理的函数集

// souece 原字符串 start 要截取的位置 newStr 要插入的字符
export function insertStr(source, start, newStr) {
	return source.slice(0, start) + newStr + source.slice(start)
}

// 分割省市区
export function splitLocation(str) {

	let reg = /.+?(省|市|自治区|自治州|行政区|盟|旗|县|区)/g // 省市区的正则
	const area = str.match(reg)
	let len = 0
	for (let i = 0; i < area.length; i++) { // 获取省市区的长度
		len += area[i].length
	}
	area.push(str.substring(len)) // 获取省市区之后的字符串
	let obj = {
		province: "",
		city: "",
		district: "",
		street: "",
	}
	Object.keys(obj).map((key, index) => {
		obj[key] = area[index]
	})
	return obj
}

// 将对象数组某个字段分离出来并返回新的数组
export function pointsField(arr, field) {
	let newArr = []
	arr.map((item, index) => {
		if (item instanceof Object) {
			let c = item[field]
			newArr.push(c)
		} else {
			newArr.push(item)
		}
	})
	return newArr
}

// 截取后缀名
export function getSuffix(value) {
	let newValue
	if (value && typeof value != 'string') {
		value = value.toString()
		console.error('请传入正确的格式啊!')
		return
	}

	if (value && value.lastIndexOf('.') != -1) {
		newValue = value.slice(value.lastIndexOf('.'))
	} else {
		console.error('请传入正确的格式!');
		return
	}
	return newValue
}

// 切割地址栏url?后面的参数
export function getUrlParameter(url, equal = '=', and = '&', question = '?') {
	let parameters = url.indexOf(question) != -1 ? url.split(question)[1] : url
	let strs = parameters.split(and)
	let obj = {}
	strs.map(item => {
		obj[item.split(equal)[0]] = item.split(equal)[1]
		return item
	})
	return obj
}

// 对象转str
export function obj2str(obj, separator = "&") {
	if (Object.keys(obj).length) {
		let str = "";
		for (let [key, value] of Object.entries(obj)) {
			if (Array.isArray(value)) {
				value = value.map(item => {
					item.val = encodeURIComponent(item.val)
					return item
				})
				str += `${key}=${JSON.stringify(value)}${separator}`
			} else {
				str += `${key}=${value}${separator}`
			}
		}
		str = str.substring(0, str.length - 1)
		return str
	}
	return ""
}

// 等块分割数组
export function blockSlice(arr, block = 2) {
	let list = []
	arr.forEach((item, index) => {
		if (index % block == 0) {
			list.push(arr.slice(index, index + block))
		}
	})

	return list
}

/**
 * 特殊字符转义 防止XSS攻击 用于特殊字符正常显示
 * @param text
 * @constructor
 */
export function StringFilter(str) {
	var s = "";
	if (str.length === 0) {
		return "";
	}
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/ /g, "&nbsp;");
	s = s.replace(/\'/g, "&#39;");
	s = s.replace(/\"/g, "&quot;");
	return s;
}

/**
 *  转义字符还原成html字符
 * @param str
 * @returns {string}
 * @constructor
 */
export function StringValFilter(str) {
	var s = "";
	if (str.length === 0) {
		return "";
	}
	s = str.replace(/&amp;/g, "&");
	s = s.replace(/&lt;/g, "<");
	s = s.replace(/&gt;/g, ">");
	s = s.replace(/&nbsp;/g, " ");
	s = s.replace(/&#39;/g, "\'");
	s = s.replace(/&quot;/g, "\"");
	return s;
}

// 获取26个字母
export function getLetter(type = 'small') {
	let small = []
	let big = []
	if (type == 'small' || type == 'all') {
		for (var i = 0; i < 26; i++) {
			small.push(String.fromCharCode(65 + i))
		}
	}

	if (type == 'big' || type == 'all') {
		for (var i = 0; i < 26; i++) {
			big.push(String.fromCharCode(65 + i))
		}
	}
	let all = {
		small,
		big
	}
	return type == 'small' ? small : type == 'big' ? big : all
}
