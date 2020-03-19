import store from '../../store'
import {router} from './router'
import {
	promptBind,promptLogin,weixin
} from '../login/login'
import platform from '../utils/platform'
//全局导航钩子
console.log('注册钩子');
router.beforeEach((to, from, next) => {
	if (to.meta.requireLogin) {
		console.log('钩子抓住了' + to.name + ' '+ from.name);
		// #ifdef MP-WEIXIN
		//如果是微信
		console.log('微信小程序先判断wx是否登录');
		if (!store.getters.is_login_wx) { 
			uni.showModal({
				title: '提示',
				content: '系统发现您未登录微信,原因可能是您长时间打开小程序,数据被后台自动清理,请关闭重新打开',
				showCancel:false,
				success: function(res1) {
					weixin();
				}
			});
			 
		} else {
			//微信已经登录 派图没登录----去提示绑定手机
			console.log('----store.getters.is_login_in---',store.getters.is_login_in)
			if (!store.getters.is_login_in) {
				promptBind();
			} 
		}
		// #endif

		// #ifdef H5 || APP-PLUS
			if (!store.getters.is_login_in) {
				store.commit('update_url', to.name);
				console.log('to.name = '+to.name);
				console.log('钩子抓住了' + to.name + ' '+ from.name);
				promptLogin();
			} 
		// #endif
		next();
	} else {
		next();
	}
})
