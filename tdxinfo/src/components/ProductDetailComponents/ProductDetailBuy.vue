<template>
  <div class="proDetail-bottom">
            <span @click="login">
                立即预定
            </span>
    </div>

</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
      return{
          
      }
  },
  computed: {
      ...mapState(["v_islogin"])
  },
  methods:{
      login(){
          if(this.v_islogin == 0){
                this.$router.push("/login")
          }else{
                this.$router.push("/Calendar")
          }
      }
  }
  

}
</script>

<style scoped>

</style>
