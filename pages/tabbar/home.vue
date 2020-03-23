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
			this.get()
		},
		methods: {
			get(){
				this.$http.get('/users/get').then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
