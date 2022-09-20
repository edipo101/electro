<template>
	<header-home v-if="$route.name == 'home-page'"></header-home>
	<header-layout v-else></header-layout>
	<router-view></router-view>
	<footer-layout></footer-layout>
</template>

<script>
	import HeaderHome from '@/components/HeaderHome'
	import HeaderLayout from '@/components/HeaderLayout'
	import FooterLayout from '@/components/FooterLayout'

	export default {
		name: 'App',
		components: {
            HeaderHome,
            HeaderLayout,
            FooterLayout,
            // BrandsCarousel
        }
	}
</script>

<style></style>
