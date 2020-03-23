
function isValidUser(userData){
	// console.log('判断用户数据合法 用户数据:',userData);
	let arr = Object.keys(userData);
	if(arr.length == 0){
		return false;
	}
	if(userData.token !== undefined && userData._id !== undefined){
		return true;	
	}
	return false;
}
const getters = {
  user_data: state => state.user.my_user,
  is_login_in: state => isValidUser(state.user.my_user)
}
export default getters
