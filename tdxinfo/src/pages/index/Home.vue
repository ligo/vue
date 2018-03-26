
<template>
  <div>
    
      <home-head></home-head>
      <keep-alive><home-hot-place :hotTravel="hotTravel" ></home-hot-place></keep-alive>
      <keep-alive><home-activity :activity="activity" :activityInfo="activityInfo"></home-activity></keep-alive>
     <keep-alive> <home-products :homeArray="homeArray" :home.sync="home"  ></home-products></keep-alive>
  </div>
</template>
<script>
import HomeHead from '../../components/IndexComponents/HomeHead'
import HomeHotPlace from '../../components/IndexComponents/HomeHotPlace'
import HomeActivity from '../../components/IndexComponents/HomeActivity'
import HomeProducts from '../../components/IndexComponents/HomeProducts'
export default {
  name:"Home",
  components: {
    HomeHead,
    HomeHotPlace,
    HomeActivity,
    HomeProducts
  },
  data () {
    return {
      hotTravel: [],
      activity: {},
      activityInfo: {},
      homeArray:[],
      home:{},
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
            console.log(this.homeArray[0])
            console.log(this.home)
            
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
    }
  },
  created () {
    
  },
  mounted () {
    this.travelGetHotDestAndCarouselImages(),
    this.travelGetActivityProductRequest(),
    this.travellerHomePageRequest()
  },
  watch:{
    
  }
}
</script>
<style scoped >

</style>
