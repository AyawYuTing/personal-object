import $Vm from '../../main'
import store from '../../store'
import { qiniuHost,errorPic,defaultEquipPic,defaultStorePic,conditionArray,defaultAvatar} from './config.js'
//个位数字前面补0
export const toDouble = function(str) {
	let num = parseInt(str);
	return num > 9 ? num : '0' + num;
}
export const getConditions = function(conditions){
	let newArray = []
	conditionArray.forEach(cdt_item=> {
		conditions.forEach(scdt_item=> {
			if(scdt_item==cdt_item.id){
				newArray.push(cdt_item.name);
			}
		})
	});
	return newArray;
}
//深拷贝
export const deepcopy = function (source) {
	if (!source) {
	 return source;
	}
	let sourceCopy = source instanceof Array ? [] : {};
	for (let item in source) {
	 sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
	}
	return sourceCopy;
};
//根据某个属性，排序数组
export const compare = function(propertyName) {
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];
		if (value2 < value1) {
			return 1;
		} else if (value2 > value1) {
			return -1;
		} else {
			return 0;
		}
	}
}
// date对象转字符串
export const dateToStr = function(date){
	let year = date.getFullYear();
	let month = toDouble(date.getMonth() + 1);
	let day = toDouble(date.getDate());
	return `${year}-${month}-${day}`;
}
// 字符串转date对象
export const strToDate = function(str){
	let date = new Date(dateToTimestamp(str))
	return date
}
// 日期转时间戳,避免IOS时间戳转换坑坑
function dateToTimestamp(date){
	var arr = date.split(/[- :\/]/);
	let nndate ;
	if(arr.length>3){
		// 有时分秒
		nndate = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
	}else{
		// 不含时分秒
		nndate = new Date(arr[0], arr[1] - 1, arr[2],23,59,59);
	}
	nndate=Date.parse(nndate)
	return nndate
}
export const toTimestamp=function(date){
	return dateToTimestamp(date)
}
//计算两个时间的天数，//startDate和endDate是2006-12-18格式 
export const dayCount=function(startDate, endDate) {     
	var dateSpan,iDays;
	startDate = dateToTimestamp(startDate);
	endDate = dateToTimestamp(endDate);
	dateSpan = endDate - startDate;
	dateSpan = Math.abs(dateSpan);
	iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
	return iDays+1;
}


// 计算两个时间的小时差
export const hoursCount = function(startDate, endDate){
	var dateSpan,iHours;
	startDate = dateToTimestamp(startDate);
	endDate = dateToTimestamp(endDate);
	dateSpan = endDate - startDate;
	dateSpan = Math.abs(dateSpan);
	iHours = Math.floor(dateSpan / (3600 * 1000));
	return iHours+1
}

//将unix时间戳转换为年月日  //yyyy-MM-dd  //yyyy-MM-dd HH:mm:ss 
export const time2Date = function(value, formatStr = 'YYYY-MM-DD') {
	var t = new Date(secs);
	var year = t.getFullYear();
	var month = t.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	var date = t.getDate();
	if (date < 10) {
		date = '0' + date;
	}
	var hour = t.getHours();
	if (hour < 10) {
		hour = '0' + hour;
	}
	var minute = t.getMinutes();
	if (minute < 10) {
		minute = '0' + minute;
	}
	var second = t.getSeconds();
	if (second < 10) {
		second = '0' + second;
	}
	if (formatStr == 'yyyy-MM-dd HH:mm:ss') {
		return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
	} else {
		return year + '-' + month + '-' + date;
	}
}

//获取当前日期(年月日)  y-m-d
export const getDate = function() {
	const date = new Date();
	let year = date.getFullYear();
	let month = toDouble(date.getMonth() + 1);
	let day = toDouble(date.getDate());
	return `${year}-${month}-${day}`;
}

//获取当前时间(时分)  h-m
export const getTime = function() {
	const date = new Date();
	let hour = toDouble(date.getHours());
	let minutes = toDouble(date.getMinutes());
	return `${hour}:${minutes}`;
}

//返回错误图片地址
export const errPic = (function() {
	let errPic = qiniuHost + errorPic;
	return `this.src="${errPic}"`;
})();

// 七牛裁切图片 默认宽度为400px，高度等比缩放，defaultPic默认为影棚设备之类的默认图，如果传store,为店铺默认图片
export const picExplode =function (arrayStr,defaultPic,size=400){
	if(arrayStr === null || arrayStr === undefined || arrayStr ==='' ||  Object.prototype.toString.call(arrayStr) !== '[object String]' ){
		if(defaultPic=='store'){
			return defaultStorePic;
		}
		return defaultEquipPic;
	}
	let array = arrayStr.split(',');
	let newArray = [];
	array.forEach(item=>{
		if(item.length>0){
			newArray.push(item);
		}
	})
	if(newArray.length>0){
		return newArray[0] + '?imageMogr2/auto-orient/thumbnail/'+size+'x'+size+'>/blur/1x0/quality/75|imageslim';
	} else {
		if(defaultPic=='store'){
			return defaultStorePic;
		}
		return defaultEquipPic;
	}
}



//获取当天是周几 
export const getWeek = function(str) {
	let date;
	if(str){
		date = date = new Date(dateToTimestamp(str));
	}else{
		date = new Date()
	}
	let day = date.getDay();
	let week = "";
	switch (day) {
		case 1:
			week = '周一';
			break;
		case 2:
			week = '周二';
			break;
		case 3:
			week = '周三';
			break;
		case 4:
			week = '周四';
			break;
		case 5:
			week = '周五';
			break;
		case 6:
			week = '周六';
			break;
		case 7:
			week = '周日';
			break;
		default:
			break;
	}
	return week;
}

//限制时间选择时间，startDate (60年前) 和endDate(20年后)
export const setDate=function(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}

//计算两个时间的时长  时间格式2019-07-20 14:25:20
export const calHours = function(startTime, endTime) {
	let hour =
		(new Date(endTime).getTime() -
		new Date(startTime).getTime()) /
		3600000;
	return Math.ceil(hour);
}
//同步设置storage  将数据存储在本地缓存中指定的 name 中
export const setStorage = function(name, data,validTime) {
	return new Promise((resolve, reject) => {
		try {
			uni.setStorageSync(name, data)
			let tmp = Date.parse( new Date() )/1000;
			if(validTime>0){
				uni.setStorageSync(name+'_valid_time', tmp+validTime)
			} else {
				//默认有效一小时
				uni.setStorageSync(name+'_valid_time', tmp+3600)
			}
			resolve(true);
		} catch (e) {
			console.log(e)
			resolve(false);
		}
	})
}

//同步获取storage
export const getStorage = function(name) {
	let data
	try {
		let validTime = uni.getStorageSync(name + '_valid_time');
		if(validTime){
			let tmp = Date.parse( new Date() )/1000;
			if(validTime-tmp>0){
				data = uni.getStorageSync(name);
			} else {
				uni.removeStorageSync(name)
				uni.removeStorageSync(name + '_valid_time')
			}
		}
	} catch (e) {
		console.log(e)
	}
	return data
}

// 从本地缓存中移除指定 key
export const delStorage = function(name) {
	try {
		uni.removeStorageSync(name);
	} catch (e) {
		console.log(e)
	}
}
export const avatarUtil = function (avatar) {
	if(avatar !== false && avatar !== undefined && avatar !== null && avatar.length !== 0){
		if(avatar.indexOf("http") != -1){
			return avatar;
		} else {
			if(avatar.indexOf(',')!= -1){
				let avatarArray = avatar.split(',');
				avatarArray.forEach(item=>{
					if(avatar !== false && avatar !== undefined && avatar !== null && avatar.length !== 0){
						return qiniuHost + item;
					}
				});
			}
			return qiniuHost + avatar;
		}
	} else {
		return qiniuHost + defaultAvatar;
	}
	
}
export const picExplode1 =function (arrayStr,defaultPic,size=400){
	if(arrayStr === null || arrayStr === undefined || arrayStr ==='' || Object.prototype.toString.call(arrayStr) !== '[object String]'){
	 return defaultPic;
	}
	let newArray = arrayStr.split(',').filter(item=>{return item});
	console.log('newArray-------',newArray,qiniuHost);
	if(newArray.length>0){
	 let test= qiniuHost+newArray[0] + '?imageMogr2/auto-orient/thumbnail/'+size+'x'+size+'>/blur/1x0/quality/75|imageslim';
	 console.log('test-----------',test);
	 return qiniuHost+newArray[0] + '?imageMogr2/auto-orient/thumbnail/'+size+'x'+size+'>/blur/1x0/quality/75|imageslim';
	} else {
	 return defaultPic;
	}
	
   }
export const shopAvatarUtil = function (avatar) {
	if(avatar !== false && avatar !== undefined && avatar !== null && avatar.length !== 0){
		if(avatar.indexOf("http") != -1){
			return avatar;
		} else {
			if(avatar.indexOf(',')!= -1){
				let avatarArray = avatar.split(',');
				avatarArray.forEach(item=>{
					if(avatar !== false && avatar !== undefined && avatar !== null && avatar.length !== 0){
						return qiniuHost + item;
					}
				});
			}
			return qiniuHost + avatar;
		}
	} else {
		return qiniuHost + defaultStorePic;
	}
}
// 查找未使用的优惠券
export const diffArr = function (arr1,arr2){
	let arr3 = [];
	// arr1.forEach(item => { 
	// 	let stra = item.coupon_type;
	// 	let count = 0;
	// 	for(let j=0;j<arr2.length;j++){
	// 		let strb = arr2[j].coupon_type;
	// 		if(stra==strb){
	// 			count++;
	// 		}
	// 	}
	// 	if(count===0){
	// 		arr3.push(item);
	// 	}
	// })
	arr2.forEach(item => { 
		let stra = item.coupon_type;
		let count = 0;
		for(let i=0;i<arr1.length;i++){
			let strb = arr1[i].coupon_type;
			if(stra==strb){
				count++;
			}
		}
		if(count===0){
			arr3.push(item);
		}
	})
	return arr3;
}
/**
     * offetHeight 滚动计算部分到顶部距离
     * scrollTop   滚动高度
     * height      每个模块的高度
     * colunm      列数
**/
export const countIndex = function (offetHight, scrollTop, height, colunm) {
	// 单例获取屏幕宽度比
	if (!countIndex.pix) {
		try {
		  let res = wx.getSystemInfoSync()
		  countIndex.pix = res.windowWidth / 375
		} catch (e) {
		  countIndex.pix = 1
		}
	}
	let scroll = scrollTop - offetHight * countIndex.pix
	let hei = height * countIndex.pix
	return scroll > 0 ? Math.floor(scroll / hei) * colunm : 0
}

// 监听消息发送
export const listenMsg = () => {
    uni.connectSocket({
        url: 'ws://192.168.0.2:9502/',
        protocols: [store.getters.user_data.token],
	});
	uni.onSocketError(function (res) {
		console.log('socket err---',res)
		console.log('WebSocket连接打开失败，请检查！');
	  });
    uni.onSocketOpen(function (res) {
        console.log('WebSocket连接已打开！');
    });
    uni.onSocketMessage(function (res) {
        console.log('收到服务器内容：' + res.data);
        let new_msg = JSON.parse(res.data);
        let msg = '';
        switch (new_msg.json.type) {
            case 22:
                msg = '商家已接收您的订单~'
            break;
            case 23:
                msg = '您有订单已上传核验单~'
            break;
            case 24:
                msg = '您有订单已开始~'
            break;
            case 25:
                msg = '您有订单待评价~'
            break;
            case 71:
                msg = '您的活动已开始~'
            break;
            default:
            break;
        }
        if(msg){
            uni.showToast({title:msg,icon:'none',duration:2000})
        }
    });
}
export const generateUUID = () => {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = (d + Math.random()*16)%16 | 0;
	  d = Math.floor(d/16);
	  return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});
	return uuid;
}
