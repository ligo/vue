<template>
    <div class="index-m-worldviews">
        <div class="no-scrollBar" >
            <div class="title-wrapper">
                <ul class="m-nav-title clearfix">
                    <li v-for="(v,i) in homeArray" :key="v.id" @click="checkIndex(i)" >
                        <span :class="{active:i==num}">{{v.title}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <home-products-list :home= "home"></home-products-list>
    </div>
</template>
<script>
import HomeProductsList from './HomeProductsList'
export default {
    data() {
        return {
            num: 0
        }
    },
    components:{
        HomeProductsList
    },
    props:[
        "homeArray",
        "home"
    ],
    methods:{
        checkIndex(i){
            this.$emit('update:home', this.homeArray[i])
            this.num = i
        }
    }
}
</script>
<style scoped >
.index-m-worldviews .m-nav-title>li span.active {
    display: inline-block;
    color: #ff6565;
    border-bottom: 2px solid #ff6565;
}
.index-m-worldviews .m-nav-title>li span{
    padding-bottom: .15rem;
    display: block;
    font-size: .3rem;
    color: #333;
}
    
</style>
