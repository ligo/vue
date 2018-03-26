<template>
    <div>
        <header id="indexheader">
            <div class="search-login">
                <div class="index-search">
                    <router-link to="/login"></router-link>
                </div>
                <div id="temp-login">
                <div class="login-box" id="index-login-action">
                    <div>
                        <div class="icon-login"></div>
                        <router-link class="sp" to="/login">登录</router-link>
                    </div>
                </div>
                </div>
            </div>
            <!--轮播图-->
            <div class="carousel-box" id="temp-carousel">
                <div class="swiper-container swiper-container-horizontal">
                    <div class="swiper-wrapper">
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets"></div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
data() {
return {
}
},
computed: {
},
watch: {
},
methods: {
},
mixins: [],
filters: {
},
directives: {
},
created() {
},
mounted() {
},
updated() {
},
activated() {
},
destroyed() {
},
}
</script>
<style scoped >
</style>
