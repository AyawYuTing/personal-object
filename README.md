# uniapp
# Yuting

## 学习项目>>>
# uniapp
### 1、目录结构：
#### components组件库
- uni-icon
  uni自带的图标，官网没有预览图，要一个个看，这里只用到了星星评分
- uni-load-more
  加载更多
- uni-rate
  星星评分，连接到uni-icon



#### pages页面
- tabBar
  下面的tabBar，这里在pages.json配置
- home
 
### 坑：
 1. 页面跳转不要用router-link标签H5没问题，小程序不识别，用uni.navigateTo，[https://uniapp.dcloud.io/api/README?id=%e8%b7%af%e7%94%b1](https://uniapp.dcloud.io/api/README?id=%e8%b7%af%e7%94%b1) 总的来说，uni有封装的就用uni的就没错了
 2. 小程序是不支持background-image：url()引入本地文件路径的，可以引入图片的网址。具体表现就是小程序不显示图片H5显示。Image标签就可以引入本地文件
 3. 小程序大小有限制，本地需要用的图片最好去tinypng压缩一下
 4. css的单位最好统一rpx，不要用px, 不然适配有问题
 5. 如果需要用到下拉刷新，参考home主页的一些设置
 6. //ifdef //endif识别不同平台运行不同代码
 7. font-size 基本是24rpx 26rpx 28rpx 30rpx 32rpx，在750的设计稿里面，2rpx=1px。具体用哪个可以在小程序里面跑一跑比较一下
 8. 如需要获取元素距离顶部的高度，可以参考home->select-city，小程序不支持ref,所以不能通过ref获取
 9. 有一些css属性比如fixed在H5和小程序会出现效果不一样的问题，具体表现是会和导航条/选项卡位置发生互相遮挡，如遇到这种情况，css可以写成这样bottom:var(--window-bottom)，具体遇到了看文档就行

### 支付宝小程序：
 10. 支付宝小程序的span标签会转换成label，label添加事件不会生效，所以不要在span标签添加绑定事件，label默认行高是1.8，这里我直接全局line-height:inherit 了
 11. input标签会有默认白色背景，padding等默认样式
 12. picker内只能套一个view


# components
- uni-ui是官网上所有ui组件，以后用不上的可以删掉
- discount-coupon优惠券样式
- mx-datepicker插件市场上的插件基础上，修改添加了占用日程隐藏及不可选
-

# common
- api接口路由
- utils
    request.js和index.js是https://www.yuque.com/docs/share/79ba2a9c-fb1f-41d5-a1dc-18a6e2d9eda4里的网络请求封装
    platform.js判断小程序运行的平台
    formatDate.js时间戳转换格式
    
# store
- user.js登录..

- 小程序启动时就调用一次小程序的login方法，将用户数据存进state，然后通过路由拦截，在有要求用户绑定过手机才能进的页面判断user里的has_reg，若未绑定则提示用户跳转到手机号绑定页面~
 