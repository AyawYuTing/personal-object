import Request from './request'
import store from '../../../store'

const http = new Request()

http.setConfig((config) => { 
	// config.baseUrl = 'http://192.168.0.2/api'
	config.baseUrl = 'http://127.0.0.1:3000'
	//#ifdef H5
	config.baseUrl = 'http://127.0.0.1:3000'
	//#endif
	config.header = {
        'Content-Type':'application/x-www-form-urlencoded'
	}
	return config
})

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	
	config.header = {
		...config.header,
	}
	
	if(config.header.HOST != 'up-z2.qiniup.com'){
		if(store.getters.is_login_in){
			let token = '';
			config.header.Authorization = `token ${store.getters.user_data.token}`
		}
	}
	
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	
	if(response.statusCode == 200){
		// console.log('拦截器response = ',response);
		let paituReturnData = response.data;
		if(paituReturnData.status == -1){
			let errorMsg = '请求出错';
			if(paituReturnData.msg !== null){
				errorMsg = paituReturnData.msg;
			}
			uni.showModal({
				title: '提示',
				content: errorMsg,
				showCancel:false,
			});
			return Promise.reject(errorMsg);;

		} else {
			// console.log('返回 数据',paituReturnData.data);
			return paituReturnData.data;
		}
	}
	return Promise;
}, (error) => { // 请求错误做点什么
		console.log('拦截器错误error = ',error);
		if(error.statusCode == 500){
			uni.showModal({
				title: '提示',
				content: '服务器错误',
				showCancel:false,
			});
		} else if(error.statusCode == 401){
			// store.commit('remove_user_data') //token过期,清除用户信息
			// if(!store.getters.is_login_in){
			// 	// #ifdef H5 || APP-PLUS
			// 	promptLogin();
			// 	// #endif
			// 	// #ifdef MP-WEIXIN || MP-ALIPAY
			// 	promptBind()
			// 	// #endif
			// }
			
	    }else if(error.response == null || err.response === undefined){
			// uni.showModal({
			// 	title: '提示',
			// 	content: '您的网络好像存在问题,连接超时',
			// 	showCancel:false,
			// });
		}
	return error
})

export {
	http
}
