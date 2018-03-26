<template>
    <div class="header">
        <swiper :options="swiperOption"  ref="mySwiper">  
            <!-- 这部分放你要渲染的那些内容 -->  
            <swiper-slide v-for="(v,i) in productCont.carouseImages" :key="i"> 
                <img :src="v.imageUrl">
            </swiper-slide>  
            <!-- 这是轮播的小圆点 -->  
            <div class="swiper-pagination" slot="pagination"></div>  
        </swiper>  
        
        <div class="proId clearfix">
            <span class="number">
                编号 ：{{productInfo.routeId}}
            </span>
            <ul class="types clearfix">
                <li>
                    <img :src="productCont.routeForm | imgItemStatus">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,  
        swiperSlide  
    },
    data () {
        return {
            swiperOption: {  
                // pagination: '.swiper-pagination',  
                // slidesPerView: 'auto',  
                // centeredSlides: true,  
                // paginationClickable: true,
                // autoplay:false,
                // delay:3000,
                // onSlideChangeEnd: swiper => {  
                //     //这个位置放swiper的回调方法  
                //     this.page = swiper.realIndex+1;  
                //     this.index = swiper.realIndex;  
                // },  
                autoplay:true,
            }, 
        }
    },
    props: [
        "productInfo",
        "productCont"
    ],
    computed: {
        swiper() {  
              return this.$refs.mySwiper.swiper;  
            } 
    },
    mounted() {
        
    },
    filters:{
        imgItemStatus:function(str){
            if (str == "HALFSELFHELP") {
                return "../../../static/images/product-type.jpg"
            } else if (str == "FOLLOWTOUR") {
                return "../../../static/images/pro-type1.png"
            } else if (str == "LOCAL") {
                return "../../../static/images/pro-type3.png"
            } else if (str == "FREETRAVEL") {
                return "../../../static/images/pro-type4.png"
            } else {
                return "../../../static/images/product-type.jpg"
            }
        },
    }
}
</script>

<style scoped>
    .header{
        position: relative;
    }
    .swiper-container {
        height: 4.2rem;
    }
    .swiper-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
</style>
