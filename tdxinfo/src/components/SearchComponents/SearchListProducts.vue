<template>
  <div>
    <div class="searchList-nav" id="temp-searchNav">
      <span class="nav-item" v-for="(v,i) in searchRouteTitle" :key="i" @click="changeCode(v,i)" :class="{active:i == num}">{{v.name}}</span> 
    </div>
    <div class="searchList-main">
        <search-list-products-cont :searchRouteVo="searchRouteVo"></search-list-products-cont>
    </div>
    <div id="temp-bottomSel">
      <search-list-bottom></search-list-bottom>
    </div>
    <div v-if="isShow" id="loading">
      <div class="lodingGif"></div>
    </div>
  </div>
</template>

<script>
import SearchListProductsCont from '../../components/SearchComponents/SearchListProductsCont'
import SearchListBottom from '../../components/SearchComponents/SearchListBottom'
    export default {
      components: {
        SearchListProductsCont,
        SearchListBottom
      },
      data () {
        return {
          searchRoute:{},
          searchRouteTitle:[],
          searchRouteVo:[],
          num:0,
          isShow: false
        }
      },
      props: [
        "title"
      ],
      methods: {
        drawSearchList() {
          this.loding();
          var linkPlace = this.title; //目的地列表传入的目的地名
          var routeDetail = {};
          var dataRequest = {};
          var url = this.utilApi.travelLink();
          routeDetail.page = "1";
          routeDetail.pageSize = "20";
          routeDetail.customerKey = this.utilApi.defaultLoginrespon().apiUserName;
          routeDetail.searchWord = linkPlace;
          routeDetail.routeForm = "";
          dataRequest.requestMetaInfo = this.utilApi.requestData();
          dataRequest.SearchRouteBySearchwordRequest = routeDetail;

          this.utilHttp.httpPostRequest(url, dataRequest).then((res) =>{
            if (res.data.responseMetaInfo.resultCode == 0) {
              console.log(res.data)
              this.searchRoute = res.data.SearchRouteBySearchwordResponse;
              this.searchRouteTitle = this.searchRoute.routeFormCounts
              this.searchRouteVo = res.data.SearchRouteBySearchwordResponse.routeVo
              // console.log(this.searchRoute)              
              console.log(this.searchRouteVo)
            }
          })
        },
        changeCode(v,i){
          this.num = i
          console.log(v.code);
          if(v.code == "ALL"){
            this.drawSearchList()
          }else{
            var linkPlace = this.title; //目的地列表传入的目的地名
            var routeDetail = {};
            var dataRequest = {};
            var url = this.utilApi.travelLink();
            routeDetail.page = "1";
            routeDetail.pageSize = "20";
            routeDetail.customerKey = this.utilApi.defaultLoginrespon().apiUserName;
            routeDetail.searchWord = linkPlace;
            routeDetail.routeForm = v.code;
            dataRequest.requestMetaInfo = this.utilApi.requestData();
            dataRequest.SearchRouteBySearchwordRequest = routeDetail;

            this.loding()

            this.utilHttp.httpPostRequest(url, dataRequest).then((res) =>{
              if (res.data.responseMetaInfo.resultCode == 0) {
                this.searchRouteVo = res.data.SearchRouteBySearchwordResponse.routeVo
                console.log(this.searchRouteVo)
              }
            })
          }
        },
        loding(){
          this.$http.interceptors.request.use(config => {
            // loading
            this.isShow = true
            return config
          }, error => {
            return Promise.reject(error)
          })

          this.$http.interceptors.response.use(response => {
            this.isShow = false
            return response
          }, error => {
            return Promise.resolve(error.response)
          })
        }
      },
      created () {
        
      },
      mounted () {
        this.drawSearchList()
      }
    }
</script>

<style scoped>
  .searchList-nav {
      display: table;
      width: 100%;
      border-bottom: 1px solid #f2f2f2;
  }

  .searchList-nav span {
      display: table-cell;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      color: #999;
      font-size: .3rem;
  }

  .searchList-nav span.active {
      border-bottom: 2px solid #fe6664;
  }
  #loading{
    
    background-color:#fff ;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  #loading .lodingGif{
    background: url(../../../static/images/loading.gif);
    background-size: contain;
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -.5rem;
    margin-left: -.5rem;
    z-index: 99;
  }
</style>
