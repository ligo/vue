<template>
  <div class="common-header">
        <div class="icon-back" @click="goBack()">
            <a href="#"></a>
        </div>
        <div class="common-title">
            产品详情
        </div>
    </div>
</template>

<script>
export default {
  data () {
      return {
          
      }
  },
  methods: {
      goBack(){
            this.$router.go(-1)
        }
  }
}
</script>

<style scoped>

</style>

