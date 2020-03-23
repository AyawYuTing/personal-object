import {
	users
} from '@/common/api/api';
import {
	http
} from '@/common/utils/lush';
import Vue from 'vue'

const user = {
	state: {
		my_user: uni.getStorageSync('user') ? JSON.parse(uni.getStorageSync('user')) : false,
	},
	mutations: {
		update_user_data(state, data) {
			console.log('保存用户信息', data);
			try {
				uni.setStorageSync('user', JSON.stringify(data));
			} catch (e) {
				console.error('保存用户信息错误', e);
			}
			console.log('保存前', state);
			state.my_user = data;
			console.log('保存后', state);
		},
		remove_user_data(state) {
			console.log('清除user信息');
			uni.removeStorage({
				key: 'user',
			});
			state.my_user = false
		},

	},
	actions: {
		login({
			dispatch,
			commit
		}, form) {
			http.post(users.login, form).then(res => {
				console.log('登录', res);
				if (res) {
					commit('update_user_data', res);
				}
			}).catch(err => {
				console.error('login错误', err);
				// commit('remove_user_data')
			})
		},

	}
}
export default user;
