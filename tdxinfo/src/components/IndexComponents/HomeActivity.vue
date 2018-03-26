<template>
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
                            <img :src="this.activityInfo.status | activityStatus">
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
</template>
<script>
    export default {
        name:"HomeActivity",
        data() {
            return {
                displayBlock:{
                    display:'block'
                }
            }
        },
        props:[
            "activityInfo",
            "activity"
        ],
        methods:{
            
        },
        filters: {
            activityStatus: function(str){
                // var str = this.activityInfo.status
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
        mounted () {
        }

    }
</script>
<style scoped >

</style>
