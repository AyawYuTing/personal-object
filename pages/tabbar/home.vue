<template>
	<view class="content">
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			// this.addUser()
			this.register()
		},
		methods: {
			register(){
				this.$http.post('/users/register',{name:'Ayaw',tel:17363478582,psw:'123456'}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
