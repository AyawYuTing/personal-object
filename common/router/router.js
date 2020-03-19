
import Vue from 'vue'
import Router from 'uni-simple-router'
export const router = new Router({
    routes: [
        // {
        //     path: '/pages/index/index',
        //     name: 'index',
		// 	meta:{
		// 		requireLogin:false
		// 	}
        // },
        /*activity */
        // {
        //     path: '/pages/activity/index',
        //     name: 'mainActivity',
		// 	meta:{
		// 		requireLogin:false
		// 	}
        // },
        {
            path: '/pages/activity/feiyan',
            name: 'feiyan',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/activity/banner5',
            name: 'banner5',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/activity/banner3',
            name: 'banner3',
			meta:{
				requireLogin:false
			}
        },
        /*tabbar */
        {
            path: '/pages/tabBar/my',
            name: 'me',
			meta:{
				requireLogin:true
			}
        },
		{
		    path: '/pages/my/loginApp',
		    name: 'loginApp',
			meta:{
				requireLogin:false
			}
		},  
		{
		    path: '/pages/my/loginMpAlipay',
		    name: 'loginMpAlipay',
			meta:{
				requireLogin:false
			}
		},
		//#ifndef APP-PLUS
		{
		    path: '/pages/my/login',
		    name: 'login',
			meta:{
				requireLogin:false
			}
		},
		//#endif
        {
            path: '/pages/tabBar/home',
            name: 'home',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/tabBar/category',
            name: 'category',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/tabBar/cart',
            name: 'cart',
			meta:{
				requireLogin:true
			}
        },

        /*home-category */
        {
            path: '/pages/home/category/studio/index',
            name: 'studioList',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/studio',
            name: 'studioList',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/equipment',
            name: 'equipmentList',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/activity',
            name: 'activityList',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/discount',
            name: 'discountList',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/model',
            name: 'model',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/service',
            name: 'service',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/studioDetail/studioDetail',
            name: 'studioDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/equipmentDetail/equipmentDetail',
            name: 'equipmentDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/activityDetail/activityDetail',
            name: 'activityDetail',
			meta:{
				requireLogin:false
			}
        },{
            path: '/pages/home/category/modelDetail/index',
            name: 'modelDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/serviceDetail/index',
            name: 'serviceDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/groupBooking/detail',
            name: 'groupBookingDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/activityDetail/questionDetail',
            name: 'questionDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/comQues/allComments',
            name: 'allComments',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/comQues/allQuestions',
            name: 'allQuestions',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/comQues/commentDetail',
            name: 'commentDetail',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/category/comQues/questionDetail',
            name: 'questionDetail',
			meta:{
				requireLogin:false
			}
        },

        /**location */
        {
            path: '/pages/home/select-city/select-city',
            name: 'selectCity',
			meta:{
				requireLogin:false
			}
        },

        /**message */
        {
            path: '/pages/my/message/message',
            name: 'message',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/message/detailList',
            name: 'detailList',
			meta:{
				requireLogin:true
			}
        },
        
        {
            path: '/pages/my/message/chat',
            name: 'chat',
			meta:{
				requireLogin:true
			}
        },

        /**my */
        {
            path: '/pages/my/myCollection/myCollection',
            name: 'myCollection',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/setting',
            name: 'setting',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/about',
            name: 'about',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/collectShop',
            name: 'collectShop',
			meta:{
				requireLogin:true
			}
        },

        {
            path: '/pages/my/collectProduce',
            name: 'collectProduce',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/activity',
            name: 'activity',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/address',
            name: 'address',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/editAddress',
            name: 'editAddress',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/bindPhone',
            name: 'bindPhone',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/my/bindRealname',
            name: 'bindRealname',
			meta:{
				requireLogin:true
			}
        },

        {
            path: '/pages/my/successStatus',
            name: 'successStatus',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/my/updatePsw',
            name: 'updatePsw',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/updatePhone',
            name: 'updatePhone',
			meta:{
				requireLogin:true
			}
        },

        /**mylist */
        {
            path: '/pages/my/myList/myActivity',
            name: 'myActivity',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myComments',
            name: 'myComments',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myChat',
            name: 'myChat',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/chatBox',
            name: 'chatBox',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/chatHistory',
            name: 'chatHistory',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/comments/editOrAdd',
            name: 'editOrAdd',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myDiscount',
            name: 'myDiscount',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myOfficial',
            name: 'myOfficial',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myCooperation',
            name: 'myCooperation',
			meta:{
				requireLogin:true
			}
        },{
            path: '/pages/my/myList/myAdvertise',
            name: 'myCooperation',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/my/myList/myShop',
            name: 'myShop',
			meta:{
				requireLogin:true
			}
        },
       
        

        /**order */
        {
            path: '/pages/order/orderList/orderList',
            name: 'orderList',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/orderList/evaluate/evaluate',
            name: 'evaluate',
            meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/orderPay',
            name: 'orderPay',
			meta:{
				requireLogin:true
			}
        },

        {
            path: '/pages/order/orderDetail',
            name: 'orderDetail',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/orderCheckDetail',
            name: 'orderCheckDetail',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/orderRefund',
            name: 'orderRefund',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/activity/bindPhone',
            name: 'actBindPhone',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/activity/comfirmOrder',
            name: 'actComfirmOrder',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/activity/orderStatus',
            name: 'actOrderStatus',
			meta:{
				requireLogin:true
			}
        },

        {
            path: '/pages/order/model/orderPay',
            name: 'modelOrderPay',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/service/orderPay',
            name: 'serviceOrderPay',
			meta:{
				requireLogin:true
			}
        },
        {
            path: '/pages/order/cart/cart',
            name: 'orderCart',
			meta:{
				requireLogin:true
			}
        },

        /**merchant */
        /**shop */
        {
            path: '/pages/merchant/shop/shop',
            name: 'shop',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/merchant/shop/shopList',
            name: 'shopList',
			meta:{
				requireLogin:false
			}
        },

         /**company */
         {
            path: '/pages/merchant/company/index',
            name: 'company',
			meta:{
				requireLogin:false
			}
        },
        /**personal */
        {
            path: '/pages/merchant/personal/index',
            name: 'personal',
			meta:{
				requireLogin:false
			}
        },

        /**search */
        {
            path: '/pages/home/search/search',
            name: 'search',
			meta:{
				requireLogin:false
			}
        },


        /**flow */
        {
            path: '/pages/home/flow/rentFlow',
            name: 'rentFlow',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/flow/pickFlow',
            name: 'pickFlow',
			meta:{
				requireLogin:false
			}
        },
        {
            path: '/pages/home/flow/feedback',
            name: 'feedback',
			meta:{
				requireLogin:false
			}
        },

        // 测试
        {
            path: '/pages/test/test',
            name: 'test',
			meta:{
				requireLogin:false
			}
        },
    ]
})