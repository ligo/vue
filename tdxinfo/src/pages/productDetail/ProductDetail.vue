<template>
  <div>
      <product-detail-title></product-detail-title>
      <div class="proDetail-container" id="temp-content">
        <product-detail-head :productInfo="productInfo" :productCont="productCont"></product-detail-head>
        <product-detail-date :productInfo="productInfo" :productCont="productCont"></product-detail-date>
        <product-detail-info></product-detail-info>
      </div>
      <product-detail-buy></product-detail-buy>
  </div>
</template>

<script>
import ProductDetailTitle from "../../components/ProductDetailComponents/ProductDetailTitle"
import ProductDetailHead from "../../components/ProductDetailComponents/ProductDetailHead"
import ProductDetailDate from "../../components/ProductDetailComponents/ProductDetailDate"
import ProductDetailInfo from "../../components/ProductDetailComponents/ProductDetailInfo"
import ProductDetailBuy from "../../components/ProductDetailComponents/ProductDetailBuy"
export default {
    components: {
        ProductDetailTitle,
        ProductDetailHead,
        ProductDetailDate,
        ProductDetailInfo,
        ProductDetailBuy
    },
    data () {
        return {
            productCont:{}
        }
    },
    methods: {
         routeDetailResponse(){
            var routeDetail = {};
            routeDetail.customerKey = this.utilApi.defaultLoginrespon().apiUserName;
            routeDetail.routeId = this.productInfo.routeId;

            var dataRequest = {};
            dataRequest.requestMetaInfo = this.utilApi.requestData();
            dataRequest.GetRouteDetailRequest = routeDetail;

            var url = this.utilApi.travelLink();

            this.utilHttp.httpPostRequest(url,dataRequest).then((res)=>{
                if (res.data.responseMetaInfo.resultCode == 0) {
                    this.productCont = res.data.GetRouteDetailResponse
                    console.log(this.productCont);
                }
            })

         }
    },
    computed: {
        productInfo(){
                return this.$route.query
        },
    },
    mounted () {
        this.routeDetailResponse();
    },
}
</script>

<style scoped>

</style>

