var app = getApp();

function wxpay(app, money, orderId, redirectUrl) {
    var remark = "在线充值";
    var nextAction = {};
    if (orderId != 0) {
        remark = "支付订单 ：" + orderId;
        nextAction = {
            type: 0,
            id: orderId
        };
    }
    wx.request({
        url: app.globalData.urls + "/pay/wxapp/get-pay-data",
        data: {
            token: app.globalData.token,
            money: money,
            remark: remark,
            payName: "在线支付",
            nextAction: nextAction
        },
        //method:'POST',
        success: function success(res) {
            if (res.data.code == 0) {
                // 发起支付
                wx.requestPayment({
                    timeStamp: res.data.data.timeStamp,
                    nonceStr: res.data.data.nonceStr,
                    package: "prepay_id=" + res.data.data.prepayId,
                    signType: "MD5",
                    paySign: res.data.data.sign,
                    fail: function fail(aaa) {
                        wx.showToast({
                            title: "支付失败:" + aaa
                        });
                    },
                    success: function success() {
                        wx.showToast({
                            title: "支付成功"
                        });
                        wx.redirectTo({
                            url: redirectUrl
                        });
                    }
                });
            } else {
                //wx.showToast({ title: '服务器忙' + res.data.code + res.data.msg})
                wx.showToast({
                    title: "演示商城，请勿支付",
                    icon: "none"
                });
            }
        }
    });
}

module.exports = {
    wxpay: wxpay
};