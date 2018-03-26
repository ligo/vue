import md5 from 'js-md5';

let logginRespon = {};
/* 是否是op3 */
let isOp3 = 0;
/* 是否登陆成功 */
let loginSuccess = 0;

export default {
    //获取时间戳
    norTimeStamp() {
        var timestamp = Date.parse(new Date()) / 1000;
        return timestamp;
    },

    //获取16位随机函数
    randowData() {
        var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        var n = 16,
            s = "";
        for (var i = 0; i < n; i++) {
            var rand = Math.floor(Math.random() * str.length);
            s += str.charAt(rand);
        }
        return s;
    },

    //公众号旅游店铺用户信息
    defaultLoginrespon() {
        //判断是否保存了用户的登陆信息
        if (isOp3 == 1) {
            logginRespon.userName = "niming";
            logginRespon.apiSignCode = "5f573098";
            logginRespon.apiUserName = "552734bfe4b020e21058e697"
            logginRespon.userKey = "552734bfe4b020e21058e698";
            logginRespon.contactMobile = ""
            logginRespon.contactUserName = ""
        } else {
            logginRespon.userName = "guest";
            logginRespon.apiSignCode = "dcb3fc92";
            logginRespon.apiUserName = "55507e8245ce310395d63a40"
            logginRespon.userKey = "55507e8245ce310395d63a41";
            logginRespon.contactMobile = ""
            logginRespon.contactUserName = ""
        }
        return logginRespon;
    },

    appType() {
        return "tdx";
    },

    requestMataInfo() {
        var strCode = "tzOpenapisignCode";
        strCode = strCode + this.defaultLoginrespon().apiSignCode;
        strCode = strCode + "timeStamp";
        strCode = strCode + this.norTimeStamp();
        strCode = strCode + "userName";
        strCode = strCode + this.defaultLoginrespon().apiUserName;
        strCode = strCode + "tzOpenapi";
        return strCode;
    },

    /* 请求data实体类封装 */
    requestDataHtml() {
        var data = {};
        data.userName = this.defaultLoginrespon().apiUserName;
        var strTemp = this.requestMataInfo()
        data.signCode = md5(strTemp);
        data.timeStamp = this.norTimeStamp();
        data.requestID = this.norTimeStamp() + "ld_bycapp_byH5";
        data.appType = this.appType();
        data.operatorKey = this.defaultLoginrespon().userKey;
        data.responseDataType = "JSON";
        return data;
    },

    /* 请求data实体类封装 */
    requestData() {
        var data = {};
        data.userName = this.defaultLoginrespon().apiUserName;
        var strTemp = this.requestMataInfo()
        data.signCode = md5(strTemp);
        data.timeStamp = this.norTimeStamp();
        data.requestID = this.norTimeStamp() + "ld_bycapp_byH5";
        data.appType = this.appType();
        data.operatorKey = this.defaultLoginrespon().userKey;
        data.responseDataType = "JSON";
        return data;
    },

    //获取图片link
    imgLink() {
        if (isOp3 == 1) {
            return "http://media.op3.tdxinfo.com/tops-mediaserver/imageservice?mediaImageId=";
        } else {
            return "http://media.travelzen.com/tops-mediaserver/imageservice?mediaImageId=";
        }
    },

    travelLink() {
        if (isOp3 == 1) {
            return "http://192.168.161.137:8480/service/flight/travel";
        } else {
            return "https://app.travelzen.com/tops-openapi-for-customers/service/flight/travel";
        }
    },

    activityLink() {
        if (isOp3 == 1) {
            return "http://192.168.161.137:8480/service/flight/hotproduct";
        } else {
            return "https://app.travelzen.com/tops-openapi-for-customers/service/flight/hotproduct";
        }
    },

    normalInfoLink() {
        if (isOp3 == 1) {
            return "http://192.168.161.137:8480/service";
        } else {
            return "https://app.travelzen.com/tops-openapi-for-customers/service";
        }
    }


}