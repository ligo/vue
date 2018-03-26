<template>
    <div class="index-m-hotplace">
      <ul class="m-nav-title tabs-menu clearfix">
          <li v-for="(item,index) in hotTravel" :key="item.id" :class="{active:index == num,borderLF:index ==1}" @click="tab(index)">
              {{item.name}}
          </li>
      </ul>
      <div class="tabs-panel m-hotplace-item">
          <ul class="hotplace-list clearfix" v-for="(i,index) in hotTravel" :key="i.id" v-show="index == num">
            <li v-for="item in i.unChangedDest" :key="item.id">
                <router-link class="hotPlaceLink"  
                :to="{
                        path: '/SearchList',
                        query:{
                            keyWord:item,
                            type:travelList
                        }
                    }">
                    {{item}}
                </router-link>
            </li>
          </ul>
      </div>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num: 0,
            travelList:"travelList"
        }
    },
   
    props: [
        "hotTravel"
    ],
    methods:{
        tab(index){
            this.num = index
        }
    }
}
</script>
<style scoped >
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
    .index-m-hotplace{
        height: auto;
    }
    .index-m-hotplace .hotplace-list>li {
    margin-left: .15rem;
    }
</style>
