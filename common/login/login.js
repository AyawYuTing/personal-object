import store from '../../store'
import {router} from '../router/router'

export const weixin = () => {
	if(!store.getters.wx_open_id){
		uni.login({
			provider: 'weixin',
			success: (res) => {
				console.log('自动登录微信成功 code', res);
				store.dispatch("wxCodeLogin", res.code);
			}
		});
	}else{
		// 有openid，不用微信登陆
		console.log('有openid，不用微信登陆');
		store.dispatch("wxOpenidLogin", store.getters.wx_open_id);
	}
	
}


export const alipay = () =>{
	console.log('登陆支付宝小程序');
	uni.login({
		scopes: 'auth_user',
		success: (res) => {
			console.log('自动登录支付宝成功 code', res);
			store.dispatch("alipayCodeLogin", res.code);
		},
		fail:(err)=>{
			console.log('登陆失败',err);
		}
	});
}
export const promptBind = () => {
	console.log('是否已经显示绑定提示对话框:'+store.getters.isShowBindDialog);
	if(store.getters.isShowBindDialog){
		return;
	}
	store.commit('update_isShowBindDialog',1);
	uni.showModal({
		title: '提示',
		content: '账户尚未绑定手机，去绑定？',
		success: function(res1) {
			console.log('promptBind SUCC');
				
			if (res1.confirm) {
				console.log('########');
				store.commit('update_isShowBindDialog',0);
				router.push({
					name: 'bindPhone',
					params: {
						openId: store.getters.wx_open_id,
					},
					NAVTYPE: 'push'
				});
			} else if (res1.cancel) {
				store.commit('update_isShowBindDialog',0);
				console.log('用户点击取消');
			}
		}
	});
}
export const promptLogin = () => {
	if(store.getters.isShowBindDialog){
		return;
	}
	store.commit('update_isShowBindDialog',1);
	uni.showModal({
		title: '提示',
		content: '您尚未登录账号，去登录或注册？',
		success: function(res1) {
			if (res1.confirm) {
				store.commit('update_isShowBindDialog',0);
				// #ifdef H5
				console.log('H5登录');
				router.push({
					name: 'login',
					NAVTYPE: 'push'
				});
				// #endif
				// #ifdef APP-PLUS
				console.log('APP登录');
				router.push({
					name: 'loginApp',
					NAVTYPE: 'push'
				});
				// #endif
				// #ifdef MP-ALIPAY
				router.push({
					name: 'loginMpAlipay',
					NAVTYPE: 'push'
				});
				// #endif
			} else if (res1.cancel) {
				console.log('用户点击取消');
				store.commit('update_isShowBindDialog',0);
			}
		},
		complete: function(){
		}
	});
}