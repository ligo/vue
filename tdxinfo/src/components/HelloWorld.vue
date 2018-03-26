<template>
  <div class="hello">
    <p v-on:click="normalData()">网络请求demo</p>
  </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    postData () {
      this.$http({
        method: 'get',
        url: 'https://cnodejs.org/api/v1/topics',
        data: {},
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json, text/plain'
        }
      })
        .then((data) => {
          alert(JSON.stringify(data))
        })
        .catch(function (error) {
          alert(JSON.stringify(error))
        });
    },

    normalData () {
      var test =  md5("123");
      alert(test);
      var timeout = this.utilApi.norTimeStamp();
      alert(this.utilApi.randowData());
      alert(timeout);
      this.utilHttp.httpGetRequest("https://cnodejs.org/api/v1/topics", {}).then((res) => {
        if(res.data.success){
          alert("success");
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
