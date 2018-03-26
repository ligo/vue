<template>
    <div class="mod">
        <p class="pro-name">{{productCont.saleRouteName}}</p>
        <div class="dia-price">
            <span class="dpc dp1">{{productCont.diamondLevel | productItemStatus}}</span>
            <div class="dpc dp2">
                <img :src=" productCont.diamondLevel | productLevelStatus">
            </div>
            <!-- <span class="dpc dp3">￥</span> -->
            <div class="dpc dp4">
                <span class="sp1">￥</span><span class="sp2">{{productInfo.adultAdvicePrice}}</span> 起
            </div>
            <i class="dpc dp5" id="showPop"></i>
        </div>
        <div class="icon-title">
            <i class="i-date"></i>出团日期
        </div>
        <ul class="date-list clearfix">
            <li v-for="(v,i) in productCont.groups" :key="i" v-if='i<4'>
                <a href="" class="date-box">
                    <p class="dd">{{v.departureDate}}</p>
                    <p class="pp">¥ {{v.adultDefaultPrice}}起</p>
                </a>
            </li>
            <li class="lastOne">
                <a href="">
                    <img src="../../../static/images/icon-right.png" alt="" class="i-right">
                </a>
            </li>
        </ul>
        <div class="icon-title">
            <i class="i-cpjltj"></i>产品经理推荐
        </div>
        <div class="commend-content seeMore-content" id="seeMore_content" v-html="productCont.recommend" :class="{isshow:ishowClass}">
        </div>
        <div class="toggle-box" id="seeMore_box"  @click="showMore()">
            <span>查看全部</span><i class="seeMore"></i>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            ishowClass:false
        }
    },
    props: ["productCont","productInfo"],
    methods: {
        showMore(){
            this.ishowClass = !this.ishowClass;
            // console.log(ishowClass);
        }  
    },
    filters: {
        productLevelStatus(str) {
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
        productItemStatus(str) {
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
    computed: {
        
    },
    mounted () {
        
    }
}
</script>

<style scoped>
    .pro-name,.icon-title{
        text-align: left;
    }
    .date-list .pp {
        font-size: .22rem;
        font-weight: bold;
        line-height: .2rem;
    }
    .date-list p {
        text-align: center;
        color: #fff;
    }
    .date-list .dd {
        font-size: .2rem;
        line-height: .4rem;
    }
    .seeMore-content {
        height: .92rem;
        overflow-y: hidden;
        text-align: left;
    }
    .commend-content {
        margin-bottom: .2rem;
        font-size: .22rem;
    }
    .seeMore-content span{
        font-size: .22rem !important;
    }
    .isshow{
        overflow-y:visible;
        height: auto;
    }
</style>
