<template>
  <div>
    <div class="common-header">
        <div class="icon-back" @click="goBack()">
            <a href="#"></a>
        </div>
        <div class="common-title">
            登录
        </div>
    </div>
    <div class="registerModule">
        <div class="logo">
            <a href="javascript:void(0);"></a>
        </div>
        <ul class="registerList clearfix">
            <li class="" id="normal-login" @click="normal()" :class="{current:isShow == true}">
                <a href="javascript:void(0);">普通登录</a>
            </li>
            <li id="number-login" @click="phoneNum()" :class="{current:isShow == false}">
                <a href="javascript:void(0);">手机动态密码登录</a>
            </li>
        </ul>
        <div class="registerContent">
            <div class="registerChange" v-if="isShow">
                <ul class="writeInfo">
                    <li>
                        <span class="commonIcon userIcon"></span>
                        <input type="text" placeholder="用户名/手机" id="writeInfo-useName" ref="normalUsername"/>
                    </li>
                    <li>
                        <span class="commonIcon psIcon"></span>
                        <input type="password" placeholder="密码" id="writeInfo-passWord" ref="normalPassword"/>
                        <a href="forget-password.html" class="forgetPw" id="login-forget-password">忘记密码？</a>
                    </li>
                </ul>
            </div>
            <div class="registerChange" v-else>
                <ul class="writeInfo">
                    <li>
                        <span class="commonIcon userIcon"></span>
                        <input type="text" placeholder="请输入绑定手机号" id="writeInfo-phone"/>
                        <a href="javascript:void(0);" class="gainPw" id="showPop">获取动态密码</a>
                    </li>
                    <li>
                        <span class="commonIcon psIcon"></span>
                        <input type="password" placeholder="请输入动态密码" id="writeInfo-code"/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bigRegisterBtn">
            <a href="javascript:void(0);" class="bigRedBg" @click="normalloginEvent()">登 录</a>
            <a href="" class="bigRedBorder">注 册</a>
        </div>
    </div>

    <div class="pop-wrapper">
        <div class="popContent">
            <h5>请填写图形验证码</h5>
            <div class="popMargin">
                <div class="popVerificationCode">
                    <input type="text" name="" id="popVerificationCode-text">
                    <img src="images/verificationCode.jpg" alt="" id="verificationCode-image" />
                </div>
                <div class="popBtn clearfix">
                    <a href="javascript:void(0);" class="grayBtn">取 消</a>
                    <a href="javascript:void(0);" class="redBtn" id="img-code-sure">确 定</a>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default{
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    phoneNum(){
      this.isShow = false
    },
    normal(){
      this.isShow = true
    },
    goBack(){
      this.$router.go(-1)
    },
    // 普通登录请求
    normalloginEvent() {

      var userName = this.$refs.normalUsername.value;

      var passWord = this.$refs.normalPassword.value;

      if (userName.length <= 0)
      {
          alert('请输入用户名称');
          console.log(userName);
          return;
      }

      if(passWord.length < 6 || passWord.length > 18)
      {
          alert('请输入6~18位有效的密码');
          return;
      }

      //登陆请求
      var routeDetail = {};
      routeDetail.password = passWord;
      routeDetail.username = userName;
      routeDetail.responseDataType = "JSON";

    //   var url = "http://192.168.161.137:8480/login";
      var url = "https://app.travelzen.com/tops-openapi-for-customers/login";
      
      this.utilHttp.httpPostRequest(url,routeDetail).then((res)=>{
        console.log(res);
        if (res.data.hasOwnProperty("userName")){
            console.log("yes");
            // 登陆成功返回上一级
            // this.$router.push("/Calendar")
            this.$router.go(-1)
            
            // 改变登录状态
            this.v_changeLogin();
            console.log(this.v_islogin);
          }
          else
          {
              alert("1");
          }
      })
    },
    // 获取验证码
    ...mapMutations(["v_changeLogin"])
  },
  computed:{
      ...mapState(["v_islogin"])
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .writeInfo{
    text-align: left;
  }
  .writeInfo input{
    height: 35px;
    line-height: 21px;
  }
</style>
