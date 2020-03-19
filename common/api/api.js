//登陆
export const userLogin = {
	// applogin:'/user/ajaxLogin',
	applogin:'/user/ajaxLoginOwnCaptcha',
	appGetCaptcha:'/user/ajaxGetCaptcha',
	wxOpenidLogin:'/user/ajaxWxAppLogin',
	wxCodeLogin:'/user/ajaxWxAppCode2OpenId',
	alipayCodeLogin:'/user/ajaxMpAliPayGetTokenByCode',
	h5login:'/user/ajaxH5Login',
	getGeetGt:'/user/ajaxGeetGt',
	getCode:'/user/ajaxWxGetSmsCode',//获取手机验证码
	loginByCode:'/user/ajaxLoginByCode',//验证码登录--h5
	resetPsw:'/user/ajaxForgot',//忘记密码/修改密码/设置密码
	getCodeByCaptcha:'/user/ajaxGetSmsCodeWithCaptcha',//根据图片验证码发短信验证码
	alipayMiniAppLogin:'/user/ajaxLoginAlipayMiniApp',//支付宝小程序登陆
}

//轮播图
export const picture = {
	banner: '/banner/ajaxGetAll',//轮播图
}

// 影棚模块
export const studio = {
	getList: '/studio/ajaxGetStudioList',//获取影棚列表
	getStudioDetail: '/studio/ajaxGetStudioDetail',//获取影棚详情
};

// 器材模块
export const equipment = {
	getList: '/equip/ajaxGetEquipList',//获取设备列表
	getCategory: '/equip/ajaxGetAllFinalCategory',//获取品牌分类
	getBrand: '/equip/ajaxGetBrandByCategory',//根据分类id获取品牌
	getEquipmentDetail: '/equip/ajaxGetEquipDetail',//获取设备详情
};

// 活动模块
export const activity = {
	getList: '/activity/ajaxGet',//获取活动列表
	getDetail: '/activity/ajaxGetDetail',//获取活动详情
	applyOrder: '/activity/userApply',//用户报名活动
	orderPay: '/activity/userPay', //用户支付
	getOrder: '/activity/userGetOrder' ,//获取活动订单
	cancelOrder:'/activity/userCancelOrder',//用户取消订单
	deleteOrder:'/activity/userDeleteOrder',//用户删除订单
}

// 订单
export const order = {
	appoitment: '/order/userRentOrder',//创建预约订单
	getOrders: '/order/userGetList', //用户订单查询
	cancelOrder: '/order/userCancelOrder',//用户取消未支付订单
	getOrderDetail: '/order/userGetDetail', //获取订单详情
	editRentOrder: '/order/userEditRentOrder', //修改预约订单
	getOrderCart: '/order/userGetOrderCart',//获取是否有未支付订单
	clearCart: '/order/userDelUserOrder',//清空购物车
	addOrderAddress:'/order/userOrderAddress',//用户修改订单地址
	editDelivery:'/order/userEditOrderDoor',//修改预约订单外送类型
	refund:'/orderRefund/userRefundPay',//用户发起退款

	// 核验单
	getCheck:'/order/getCheck',//用户查询核验单
	optCheck:'/order/userOptCheck',//用户更改核验单状态
}

// 问题
export const question = {
	getList: '/question/ajaxGetQuestionList', //获取列表
	addQuestion: '/question/userAdd',//用户发布问题
	reply:'/question/userReply',//用户回复
	getCommon:'/questionAnswers/ajaxUserGet',//获取常见问题
}
//评论
export const comment = {
	getList: '/comment/ajaxGetCommentList', //获取评论列表
	userAddComment:'/comment/userAddCommon',//用户订单评价
	delComment:'/comment/userDel',//用户删除订单评价
	editComment:'/comment/userUpdate',//用户修改订单评价
	addComment:'/comment/userUpdateReply',//用户更新追评
	
}
//用户
export const user = {
	getShopDetail: '/user/ajaxGetUserShop',//用户获取商家信息
	updateAvatar: '/user/userUpdateAvatar',//用户修改头像
	getNewMobileCode: "/user/userEditMobileTwoCode",
	userEditMobile: '/user/userEditMobileThreeFinish', //修改手机
	getMobilCode: "/user/ajaxGetCode",//获取验证码
	VaildCode: "/user/userVaildMobile", // 验证手机号和验证码是否匹配
	updateSetting: '/user/userUpdateSetting',//用户信息修改
	authUserTrue:'/user/authUserTrue', // 实名信息
	getEmailCode:'/user/getEmailCode',// 邮箱验证码
	eidtEmail:'/user/editEmail',// 邮箱修改

	getStores:'/user/ajaxGetStore',// 获取商店列表
	
}

// 收藏关注模块
export const collectOrFollow = {
	isCollectOrFollow: '/start/userIsObj',//用户获取是否关注或收藏
	userCollectOrFollow: '/start/userFollowOrCollect',//用户关注或收藏
	userUnCollectOrFollow: '/start/userUnFollowOrUnCollect',//用户取消收藏或关注
	getCollectOrFollowList: '/start/userGetList',//用户获取收藏/关注列表
	unCollectOrFollowBatch: '/start/userUnFollowOrBatch',//批量取消收藏或关注
	getCount:'/start/userGetTotalCount',//用户获取收藏数量
	getShopCount:'/start/stroeGetCount',//获取店铺收藏数量
}

//用户地址模块
export const address = {
	getList: '/address/userAddressGetList', //获取地址列表
	addAddress: '/address/userAddressAdd',//添加地址
	editAddress: '/address/userAddressEdit',//修改地址
	delAddress: '/address/userAddressDel',//删除地址
	getDefault: '/address/userAddressGetDetail',//获取默认地址/单个地址
	setDefault: '/address/userAddressDefault',//设置默认地址
}

// 优惠券模块
export const coupon={
	getList: '/coupon/couponGetList',//用户商家获取优惠券列表
	getListNoLogin:'/coupon/ajaxGetList',//不用登录获取优惠券列表
	getCoupon: '/coupon/userAdd',//用户领取优惠券
	getMyList:'/coupon/userGet',//用户获取自己的优惠券
	couponUse:'/coupon/couponUse',//用户使用优惠券
	orderCoupon:'/coupon/couponOrder',//订单使用过的优惠券
	cancelUse:'/coupon/couponCancel'//取消使用的优惠券
}
// 用户获取消息/通知
export const message = {
	getList:'/notice/userGetList',//获取通知/消息列表
	getMsgNum:'/notice/userNoticeNum',//获取消息数量
	getAllFirst:'/notice/userGetAllNotice',//获取所有消息分组数量及第一条
	getNotises:'/notice/ajaxGetSysNoticeList',//根据类型获取公告/通知 数量级最新第一条数据
	toRead:'/notice/userEditnoticRead',//批量已读
	getSysList:'/notice/ajaxGetSysNoticeList',//根据类型获取公告/通知 数量级最新第一条数据
	getAllSysList:'/notice/ajaxGetSysTypeNoticeList',//获取公告类型列表
}

// 成为租赁商
export const toBeMerchant = {
	apply:'/apply/userApply',//申请成为商家
}

// 意见反馈
export const feedback = {
	sent:'/feedback/ajaxAddFeedback',//用户反馈问题
}

// 广告
export const advertise = {
	getList:'/adv/ajaxGet',//获取广告：影棚设备活动店铺
}

// h5自定义分享
export const jweixinShare = {
	get:'/wx/ajaxGetJsApiTicket',//获取config
}

// 获取app版本
export const appVersion = {
	get:'/user/ajaxGetAndroidAppVersion'
}

//城市相关接口
export const city = {
	getByAdminCode: '/city/ajaxGetByAdminCode'
}

export const model = {
	getModel:'/model/ajaxviewGet', //获取模特列表
	getCalendar:'/orderModel/ajaxCalendar',//获取模特档期

	appoit:'/orderModel/userAdd',//创建模特预约订单
	pay:'/orderModel/userPay',

	getOrderList:'/orderModel/get',//模特订单列表
	cancelOrder:'/orderModel/cancleOrder',//取消模特订单
	delOrder:'/orderModel/editdel',//删除订单
}

export const service = {
	getList:'/service/ajaxGet',//获取服务列表
	getDetail:'/service/ajaxGetDetail',//获取服务详情
	getCategory:'/service/ajaxGetServeCategory',//获取服务分类
	appoit:'/service/userAddOrder',//用户下单
	pay:'/service/userPay',//用户支付
	getOrders:'/service/userGetOrder',//获取订单列表
	getOrderDetail:'/service/userGetOrderDetail',//获取订单详情
	cancelOrder:'/service/cancleOrder',//取消服务订单
}
export const groupBook = {
	getList:'/team/ajaxGetGoods',//获取拼团列表
	appoit:'/team/orderAdd',//拼拍用户下单
	getOrder:'/team/teamOrderGet',//拼拍订单
	cancelOrder:'/team/cancleOrder',//取消拼拍订单
}
export const company = {
	get:'/user/ajaxGetUserMsg',
}