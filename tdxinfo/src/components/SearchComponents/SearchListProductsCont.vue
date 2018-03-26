<template>
    <div id="wrapper">
        <ul>
            <li class="product-box" v-for="(v,i) in searchRouteVo" :key="i">
                <router-link :to="{
                    path: '/ProductDetail',
                    query:{
                        routeId: v.routeId,
                        adultAdvicePrice: v.adultAdvicePrice,
                        adultDefaultPrice: v.adultDefaultPrice
                    }
                }">
                    <div class="pic-box">
                        <img :src="v.defaultPicUrl">
                        <div class="zuanji">
                            <img :src="v.diamondLevel | diamondLevel">
                        </div>
                        <!-- <div class="is-hot">
                            <img>
                        </div> -->
                    </div>
                    <div class="product-details">
                        <p class="title">{{v.saleRouteName}}</p>
                        <div class="place-date">{{v.sourcePlace}} | {{v.groupDateStr}}</div>
                        <div class="type-old clearfix">
                            <div class="pic-type">
                                <img :src="v.routeForm | imgItemStatus">
                            </div>
                            <div class="pic-type" v-if="v.isAllIroncladGroup">
                                <img src="../../../static/images/pro-type2.png" alt="">
                            </div>
                        </div>
                        <div class="clearfix">
                            <div class="jd">{{v.diamondLevel | productItemStatus}}</div>
                            <div class="index-price">
                                会员：<span class="price">￥<span class="number">{{v.adultAdvicePrice}}</span></span>起
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"SearchListProductsCont",
        data () {
            return {
                // src: this.diamondLevel()
            }
        },
        props: [
            "searchRouteVo"
        ],
        methods: {

        },
        filters: {
            diamondLevel:function(str){
                if (str == "TWO_DIAMOND") {
                    return "../../../static/images/zuanji2.png";
                } else if (str == "THREE_DIAMOND") {
                    return "../../../static/images/zuanji3.png";
                } else if (str == "FOUR_DIAMOND") {
                    return "../../../static/images/zuanji4.png";
                } else if (str == "FIVE_DIAMOND") {
                    return "../../../static/images/zuanji5.png";
                } else if (str == "SIX_DIAMOND") {
                    return "../../../static/images/zuanji6.png";
                } else {
                    return "";
                }
            },
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
            productItemStatus:function(str){
                if (str == "TWO_DIAMOND") {
                    return "【甩尾】";
                } else if (str == "THREE_DIAMOND") {
                    return "【促销】";
                } else if (str == "FOUR_DIAMOND") {
                    return "【经济】";
                } else if (str == "FIVE_DIAMOND") {
                    return "【经典】";
                } else if (str == "SIX_DIAMOND") {
                    return "【品质】";
                } else {
                    return "【其他】";
                }
            }
        },
        created () {
            // alert(1)
        },
        mounted () {
            // alert(2)
        }
    }
</script>

<style scoped>
    .searchList-main {
        position: absolute;
        top: 1.64rem;
        left: 0;
        right: 0;
        bottom: 1.08rem;
        text-align: left !important;
        
    }
    #wrapper{
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 85%;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    #wrapper::-webkit-scrollbar {
        display: none;
    }

    .searchList-main .product-box {
        margin: .2rem;
    }

    .grysfw {
        margin-top: .2rem;
        margin-bottom: .3rem;
    }

    .u-filter .priceMin,
    .u-filter .priceMax {
        width: 2rem;
        text-align: center;
        height: .6rem;
        font-size: .26rem;
    }

    .u-filter .ljf {
        padding: 0 .2rem;
    }
    .product-box .pic-box .zuanji{
        text-align: left;
    }
    .product-details{
        text-align: left;
    }
</style>
