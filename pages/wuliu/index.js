var wanzikun_0xdab7 = [ "RlmuB", "code", "showModal", "msg", "setData", "logisticsTraces", "reverse", "data", "orderId", "/order/detail", "request", "yIjJM", "globalData", "urls", "token" ];

(function(_0x55f726, _0x3fc002) {
    var _0x1ef925 = function _0x1ef925(_0x278a44) {
        while (--_0x278a44) {
            _0x55f726["push"](_0x55f726["shift"]());
        }
    };
    _0x1ef925(++_0x3fc002);
})(wanzikun_0xdab7, 412);

var wanzikun_0x1474 = function wanzikun_0x1474(_0x828f77, _0x5bd2c3) {
    _0x828f77 = _0x828f77 - 0;
    var _0x2b1cd3 = wanzikun_0xdab7[_0x828f77];
    return _0x2b1cd3;
};

var wanzikun_0xd6c3f8 = getApp();

Page({
    data: {},
    onLoad: function onLoad(_0x589084) {
        var _0x2ab8cd = _0x589084["id"];
        this[wanzikun_0x1474("0x0")][wanzikun_0x1474("0x1")] = _0x2ab8cd;
    },
    onShow: function onShow() {
        var _0x2ca421 = {
            RlmuB: function RlmuB(_0x20dc85, _0x104159) {
                return _0x20dc85 != _0x104159;
            },
            yIjJM: function yIjJM(_0x282e7e, _0x83da26) {
                return _0x282e7e + _0x83da26;
            },
            wqTld: wanzikun_0x1474("0x2")
        };
        var _0x4970c2 = this;
        wx[wanzikun_0x1474("0x3")]({
            url: _0x2ca421[wanzikun_0x1474("0x4")](wanzikun_0xd6c3f8[wanzikun_0x1474("0x5")][wanzikun_0x1474("0x6")], _0x2ca421["wqTld"]),
            data: {
                token: wanzikun_0xd6c3f8[wanzikun_0x1474("0x5")][wanzikun_0x1474("0x7")],
                id: _0x4970c2[wanzikun_0x1474("0x0")][wanzikun_0x1474("0x1")]
            },
            success: function success(_0x2bbc73) {
                wx["hideLoading"]();
                if (_0x2ca421[wanzikun_0x1474("0x8")](_0x2bbc73[wanzikun_0x1474("0x0")][wanzikun_0x1474("0x9")], 0)) {
                    wx[wanzikun_0x1474("0xa")]({
                        title: "错误",
                        content: _0x2bbc73[wanzikun_0x1474("0x0")][wanzikun_0x1474("0xb")],
                        showCancel: ![]
                    });
                    return;
                }
                _0x4970c2[wanzikun_0x1474("0xc")]({
                    orderDetail: _0x2bbc73[wanzikun_0x1474("0x0")][wanzikun_0x1474("0x0")],
                    logisticsTraces: _0x2bbc73[wanzikun_0x1474("0x0")]["data"][wanzikun_0x1474("0xd")][wanzikun_0x1474("0xe")]()
                });
            }
        });
    }
});