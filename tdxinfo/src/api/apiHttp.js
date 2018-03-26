/**
 * Created by chenliang on 2018/3/8.
 */
import axios from 'axios'

axios.interceptors.request.use(config => {
    // loading
    // alert("loding")
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

export default {
    httpGetRequest(url, param) {
        return new Promise(function(resolve, reject) {
            axios({
                    method: 'get',
                    url: url,
                    data: JSON.stringify(param),
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': 'application/json, text/plain'
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch(function(error) {
                    reject(error)
                })
        })
    },
    httpPostRequest(url, param) {
        return new Promise(function(resolve, reject) {
            axios({
                    method: 'post',
                    url: url,
                    data: JSON.stringify(param),
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json;utf-8',
                        'Accept': 'application/json, text/plain'
                    }
                })
                .then((data) => {
                    resolve(data)
                })
                .catch(function(error) {
                    reject(error)
                })
        })
    },
    // httpGet(url,params){
    //   return new Promise((resolve, reject) => {
    //     axios.get(url,params)
    //       .then(function(respon){
    //       resolve(respon);
    //     }).catch(function (err) {
    //       reject(err);
    //     })
    //   })
    // }
}