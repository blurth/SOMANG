var wanzikun_0x403d = [ "sUGvI", "data", "code", "IIZJM", "setData", "bfuQj", "length", "ROIhc", "xvZNX", "switchTab", "fDuQq", "getMyCoupons", "wCTPM", "YnyjL", "request", "JekYa", "globalData", "urls", "token" ];

(function(_0x16a0df, _0x1b20e3) {
    var _0x40e633 = function _0x40e633(_0x3e8221) {
        while (--_0x3e8221) {
            _0x16a0df["push"](_0x16a0df["shift"]());
        }
    };
    _0x40e633(++_0x1b20e3);
})(wanzikun_0x403d, 353);

var wanzikun_0x1af6 = function wanzikun_0x1af6(_0x55f950, _0x3109ee) {
    _0x55f950 = _0x55f950 - 0;
    var _0x2bd0fb = wanzikun_0x403d[_0x55f950];
    return _0x2bd0fb;
};

var wanzikun_0x1a7804 = getApp();

Page({
    data: {
        coupons: []
    },
    onLoad: function onLoad() {},
    onShow: function onShow() {
        this[wanzikun_0x1af6("0x0")]();
    },
    getMyCoupons: function getMyCoupons() {
        var _0x5c6c2c = {
            sUGvI: function sUGvI(_0x3c1d43, _0x33f9a0) {
                return _0x3c1d43 == _0x33f9a0;
            },
            IIZJM: wanzikun_0x1af6("0x1"),
            bfuQj: function bfuQj(_0x19140e, _0x20bb67) {
                return _0x19140e > _0x20bb67;
            },
            ROIhc: function ROIhc(_0x1a5f5d, _0x3b59e7) {
                return _0x1a5f5d !== _0x3b59e7;
            },
            xvZNX: wanzikun_0x1af6("0x2"),
            JekYa: function JekYa(_0x5bd6cb, _0x3d1726) {
                return _0x5bd6cb + _0x3d1726;
            },
            ffyxo: "/discounts/my"
        };
        var _0x545cf7 = this;
        wx[wanzikun_0x1af6("0x3")]({
            url: _0x5c6c2c[wanzikun_0x1af6("0x4")](wanzikun_0x1a7804[wanzikun_0x1af6("0x5")][wanzikun_0x1af6("0x6")], _0x5c6c2c["ffyxo"]),
            data: {
                token: wanzikun_0x1a7804["globalData"][wanzikun_0x1af6("0x7")],
                status: 0
            },
            success: function success(_0x6d3744) {
                if (_0x5c6c2c[wanzikun_0x1af6("0x8")](_0x6d3744[wanzikun_0x1af6("0x9")][wanzikun_0x1af6("0xa")], 0)) {
                    if (_0x5c6c2c[wanzikun_0x1af6("0xb")] !== "wCTPM") {
                        _0x545cf7[wanzikun_0x1af6("0xc")]({
                            coupons: _0x2cecf2,
                            loadingMoreHidden: !![]
                        });
                    } else {
                        var _0x2cecf2 = _0x6d3744["data"][wanzikun_0x1af6("0x9")];
                        if (_0x5c6c2c[wanzikun_0x1af6("0xd")](_0x2cecf2[wanzikun_0x1af6("0xe")], 0)) {
                            if (_0x5c6c2c[wanzikun_0x1af6("0xf")](_0x5c6c2c[wanzikun_0x1af6("0x10")], _0x5c6c2c[wanzikun_0x1af6("0x10")])) {
                                _0x545cf7[wanzikun_0x1af6("0xc")]({
                                    loadingMoreHidden: ![]
                                });
                            } else {
                                _0x545cf7[wanzikun_0x1af6("0xc")]({
                                    coupons: _0x2cecf2,
                                    loadingMoreHidden: !![]
                                });
                            }
                        }
                    }
                } else {
                    _0x545cf7[wanzikun_0x1af6("0xc")]({
                        loadingMoreHidden: ![]
                    });
                }
            }
        });
    },
    gohome: function gohome() {
        var _0x5712e8 = {
            fDuQq: "/pages/index/index"
        };
        wx[wanzikun_0x1af6("0x11")]({
            url: _0x5712e8[wanzikun_0x1af6("0x12")]
        });
    }
});