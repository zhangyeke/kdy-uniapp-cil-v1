// 日期处理函数集

/*
	日期格式化 可使用uview的格式化函数 /uview-ui/libs/function/timeFormat.js || timeFrom.js
	timeFormat(dateTime = null, fmt = 'yyyy-mm-dd')
	timeFrom(dateTime = null, format = 'yyyy-mm-dd')
	使用实例：this.$u.timeFormat
*/ 

// 获取今日的日期
export function getNowDate(obj) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()
    month = month < 10 ? `0${month}` : month
    day = day < 10 ? `0${day}` : day
    let currentDate = {
        year,
        month,
        day
    };

    return currentDate
}

// 获取本周的日期
export function getWeekDate() {
	//按周日为一周的最后一天计算  
	let date = new Date();
	let this_day = date.getDay(); //今天是这周的第几天  
	let step_s = -this_day + 1; //上周日距离今天的天数（负数表示）  
	if (this_day == 0) {
		step_s = -7; // 如果今天是周日  
	}
	let step_m = 7 - this_day; // 周日距离今天的天数（负数表示）  
	let thisTime = date.getTime();
	let monday = new Date(thisTime + step_s * 24 * 3600 * 1000);
	let sunday = new Date(thisTime + step_m * 24 * 3600 * 1000);
	//默认统计一周的时间  
	let startDate = getNowDate(monday); //本周一的日期 （起始日期）  
	let endDate = getNowDate(sunday); //本周日的日期 （结束日期）  
	return {
		startDate,
		endDate
	}
}

// 返回00-24小时时间 step间隔
export function backTime(step = 30) {
    let date = new Date()
    date.setHours(0) // 时分秒设置从零点开始
    date.setSeconds(0)
    date.setUTCMinutes(0)
    let arr = [
        [],
        []
    ]
    let timeArr = []
    let slotNum = 24 * 60 / step // 算出多少个间隔

    for (let f = 0; f < slotNum; f++) { //  stepM * f = 24H*60M
        // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
        let time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)) // 获取：零点的时间 + 每次递增的时间
        let hour = '',
            sec = '';
        time.getHours() < 10 ? hour = '0' + time.getHours() : hour = time.getHours() // 获取小时
        time.getMinutes() < 10 ? sec = '0' + time.getMinutes() : sec = time.getMinutes() // 获取分钟
        timeArr.push(hour + ':' + sec)
    }

    timeArr = timeArr.map(item => {
        return {
            value: item,
            label: item
        }
    })
    let reverse = JSON.stringify(timeArr)
    arr[0] = timeArr
    arr[1] = JSON.parse(reverse).reverse()
    return arr
}
