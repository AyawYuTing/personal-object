<template>
	<view class="content">
        <button @click="gotoLogin">去登陆》</button>
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

		},
		methods: {
			gotoLogin(){
				uni.navigateTo({
					url: "/pages/login/index"
				});
			}
		}
	}
</script>

<style>

</style>
