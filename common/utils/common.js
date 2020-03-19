import {http} from './lush'
import { studio,equipment,activity,jweixinShare } from '../api/api'

//--------------------影棚模块---------------------

//获取影棚列表
export const getStudioList = (params) => {
	return new Promise((resolve, reject) => {
		http.get(studio.getList,params).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}

//获取影棚详情
export const getStudioDetail = (studioId) => {
	let params={studio_id:studioId};
	return new Promise((resolve, reject) => {
		http.get(studio.getStudioDetail,params).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}


//--------------------器材模块--------------------

//获取设备器材列表
export const getEquipList = (params) => {
	return new Promise((resolve, reject) => {
		http.get(equipment.getList,params).then(res => {
			resolve(res);
		}).catch(err => {
			reject(err);
		});
	})
}

//获取设备器材详情
export const getEquipmentDetail = (equipId) => {
	let params={equip_id:equipId};
	return new Promise((resolve, reject) => {
		http.get(equipment.getEquipmentDetail,params).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}


//获取器材分类列表
export const getEquipTypes = () => {
	return new Promise((resolve, reject) => {
		http.get(equipment.getCategory).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}

//--------------------活动模块--------------------

//获取活动列表
export const getActivityList = (params) => {
	return new Promise((resolve, reject) => {
		http.get(activity.getList,params).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}

// 获取分享签名
export const getJweixin = () => {
	return new Promise((resolve, reject) => {
		let url = window.location.href;
		http.post(jweixinShare.get,{url:url}).then(res => {
			resolve(res);
		}).catch(err => {});
	})
}

export const getServerTime = () => {
	return new Promise((resolve, reject) => {
		http.get('/help/ajaxGetTime').then(res => {
			resolve(res)
		}).catch(err => {
		});
	})
}