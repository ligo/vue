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
    <!-- 旅游目的地 -->
    <div class="index-m-hotplace">
      <ul class="m-nav-title tabs-menu clearfix">
          <li v-for="(item,index) in hotTravel" :key="item.id" :class="{active:index == num,borderLF:index ==1}" @click="tab(index)">
              {{item.name}}
          </li>
      </ul>
      <div class="tabs-panel m-hotplace-item">
          <ul class="hotplace-list clearfix" v-for="(i,index) in hotTravel" :key="i.id" v-show="index == num">
            <li v-for="item in i.unChangedDest" :key="item.id"><router-link class="hotPlaceLink" to="">{{item}}</router-link></li>
          </ul>
      </div>
    </div>
    <!-- 活动专区 -->
    <div class="activity-block">
        <div class="activity-title clearfix">
            <div class="activity-tl"><i></i>活动专区</div>
            <div class="activity-tr"><router-link to="">更多></router-link></div>
        </div>
        <router-link to="" :style="displayBlock">
            <div class="activity-main">
                <div class="activity-t">
                    <img :src="activityInfo.url">
                    <p class="activity-t-t"><i class="activity-type"><img :src="this.utilApi.imgLink()+activity.minTitle"></i>
                        <i class="activity-status">
                            <img :src="this.activityStatus()">
                        </i>
                        {{activityInfo.productName}}
                    </p>
                </div>
                <div class="activity-b">
                    <div class="activity-price">活动价 ¥<span>{{activityInfo.promotionPrice}}</span></div>
                    <div class="activity-time">
                        <span class="act-timeout"></span>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
    <!-- 旅游列表 -->
    <div class="index-m-worldviews">
      <div class="no-scrollBar" >
        <div class="title-wrapper">
            <ul class="m-nav-title clearfix">
                <li v-for="(v,i) in homeArray" :key="v.id" @click="checkIndex(i)">
                    {{v.title}}
                </li>
            </ul>
        </div>
      </div>
      <home-products-list :home= "home"></home-products-list>
    </div>

    <router-view/>
  </div>
</template>

<script>
import HomeProductsList from '@/components/homeProductsList' 
export default {
  name: 'Index',
  components:{
    HomeProductsList
  },
  data () {
    return {
      hotTravel: [],
      activity: {},
      activityInfo: {},
      homeArray:[],
      home:[],
      num : 0,
      displayBlock:{
        display:'block'
      }
    }
  },
  // 首页旅游列表
  methods: {
    travellerHomePageRequest(){
      var routeDetail = {};
          routeDetail.customerkey = this.utilApi.defaultLoginrespon().userKey;
          routeDetail.title = "appJourney";
          console.log(routeDetail)

      var dataRequest = {};
          dataRequest.requestMetaInfo = this.utilApi.requestData();
          dataRequest.GetRecommendColumnsRequest = routeDetail;

      var url = this.utilApi.travelLink();

      this.utilHttp.httpPostRequest(url, dataRequest).then((res) => {
        if (res.data.responseMetaInfo.resultCode == 0) {
            this.homeArray = res.data.GetRecommendColumnsResponse.jOARecRoutes;
            this.home=this.homeArray[0];
            console.log("首页")
            console.log(that.homeArray)
            console.log(that.home)
            
        }
      })
    },
    // 热门导航请求
    travelGetHotDestAndCarouselImages(){
      var routeDetail = {};
          routeDetail.isGetCarouselImages = "true";
          routeDetail.isGetHotDest = "true";
          routeDetail.type = "travel";

      var dataRequest = {};
          dataRequest.requestMetaInfo = this.utilApi.requestData();
          dataRequest.AppGetHotDestAndCarouselImagesRequest = routeDetail;

      var url = this.utilApi.travelLink();

      this.utilHttp.httpPostRequest(url, dataRequest).then((res) => {
        if (res.data.responseMetaInfo.resultCode == 0) {
          this.hotTravel = res.data.AppGetHotDestAndCarouselImagesResponse.getHotDestResponse.jOAHotDests[0].areas;
          console.log("热门")
          console.log(this.hotTravel)
        }
      })
    },
    // 活动专区请求
    travelGetActivityProductRequest(){
      var routeDetail = {};
      var dataRequest = {};
      dataRequest.requestMetaInfo = this.utilApi.requestData();
      dataRequest.SearchOneImportantProductRequest = routeDetail;
      var url = this.utilApi.activityLink();
      this.utilHttp.httpPostRequest(url,dataRequest).then((res)=>{
        if (res.data.responseMetaInfo.resultCode == 0) {
          this.activity = res.data.SearchOneImportantProductResponse.products
          this.activityInfo = this.activity.products[0]
          console.log("活动专区")
          console.log(this.activity)
          console.log(this.activityInfo)
        }

      })
    },
    tab(index){
      this.num = index
    },
    checkIndex(i){
      alert(i)
      this.home=this.homeArray[i];
      console.log( this.homeArray[i])
    },
    activityStatus(str){
      var str = this.activityInfo.status
      if (str == "runing") {
          return "../../../static/images/hdz.png";
      } else if (str == "ready") {
          return "../../../static/images/hdz.png";
      } else if (str == "end") {
          return "../../../static/images/hdz.png";
      } else {
          return "../../../static/images/hdz.png";
      }
    }
  },
  created () {
    this.travelGetHotDestAndCarouselImages(),
    this.travelGetActivityProductRequest(),
    this.travellerHomePageRequest()
  },
  mounted () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active{
    color: #333
  }
  .m-nav-title{
    color:#999
  }
  .hotPlaceLink{
    text-decoration: none
  }
  .borderLF{
    border-left: .04rem solid #999;
    border-right: .04rem solid #999;
  }
</style>
