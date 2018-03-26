<template>
  <div class="tabs-panel worldView">
        <ul class="index-product">
            <li class="product-box" v-for="(v,index) in home.labels" :key="index">
                <a href=""  class="proList-link">
                    <div class="pic-box">
                        <img :src="v.routes[0].defaultPicUrl">
                        <div class="zuanji">
                            <img>
                        </div>
                    </div>
                    <div class="product-details">
                        <p class="title"></p>
                        <div class="place-date"></div>
                        <div class="type-old clearfix">
                            <div class="pic-type">
                                <img>
                            </div>
                            <div class="pic-type">
                                <img src="images/pro-type2.png" alt="">
                            </div>
                            <span class="old-price">￥{{v.routes[0].marketPrice}}</span>
                        </div>
                        <div class="clearfix">
                            <div class="jd"></div>
                            <div class="index-price">
                                会员：<span class="price">￥ {{v.routes[0].price}}<span class="number"></span></span>起
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="more-link">
            <a href=""></a>
        </div>
    </div>

</template>

<script>
export default{
    data(){
        return{

        }
    },
    props:[
        "home"
    ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
