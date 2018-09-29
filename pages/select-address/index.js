var wanzikun_0x2693 = [ "globalData", "urls", "ukeDK", "hIptO", "TcTch", "AwNKW", "navigateBack", "/pages/address-add/index", "navigateTo", "WgRRp", "/pages/address-add/index?id=", "kRoyi", "initShippingAddress", "/user/shipping-address/list", "code", "jnLnW", "tSVVD", "setData", "data", "/user/shipping-address/update", "OlwGl", "currentTarget", "dataset", "request" ];

(function(_0x55e9d9, _0x437fe1) {
    var _0x751f4 = function _0x751f4(_0x12c6c7) {
        while (--_0x12c6c7) {
            _0x55e9d9["push"](_0x55e9d9["shift"]());
        }
    };
    _0x751f4(++_0x437fe1);
})(wanzikun_0x2693, 283);

var wanzikun_0x2b75 = function wanzikun_0x2b75(_0x3e33e8, _0x464c5d) {
    _0x3e33e8 = _0x3e33e8 - 0;
    var _0x5bc99a = wanzikun_0x2693[_0x3e33e8];
    return _0x5bc99a;
};

var wanzikun_0x5b6e24 = getApp();

Page({
    data: {
        addressList: []
    },
    selectTap: function selectTap(_0x3ee62a) {
        var _0x42bb29 = {
            ukeDK: wanzikun_0x2b75("0x0"),
            hIptO: "true",
            TcTch: function TcTch(_0x3a5a9d, _0x280083) {
                return _0x3a5a9d === _0x280083;
            },
            AwNKW: wanzikun_0x2b75("0x1")
        };
        var _0x5bdb36 = _0x3ee62a[wanzikun_0x2b75("0x2")][wanzikun_0x2b75("0x3")]["id"];
        wx[wanzikun_0x2b75("0x4")]({
            url: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")][wanzikun_0x2b75("0x6")] + _0x42bb29[wanzikun_0x2b75("0x7")],
            data: {
                token: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")]["token"],
                id: _0x5bdb36,
                isDefault: _0x42bb29[wanzikun_0x2b75("0x8")]
            },
            success: function success(_0x3d1a14) {
                if (_0x42bb29[wanzikun_0x2b75("0x9")](_0x42bb29[wanzikun_0x2b75("0xa")], _0x42bb29["AwNKW"])) {
                    wx[wanzikun_0x2b75("0xb")]({});
                } else {
                    var _0x581054 = _0x3ee62a[wanzikun_0x2b75("0x2")]["dataset"]["id"];
                    wx[wanzikun_0x2b75("0x4")]({
                        url: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")]["urls"] + _0x42bb29[wanzikun_0x2b75("0x7")],
                        data: {
                            token: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")]["token"],
                            id: _0x581054,
                            isDefault: _0x42bb29[wanzikun_0x2b75("0x8")]
                        },
                        success: function success(_0x59732d) {
                            wx[wanzikun_0x2b75("0xb")]({});
                        }
                    });
                }
            }
        });
    },
    addAddess: function addAddess() {
        var _0x467daa = {
            WgRRp: wanzikun_0x2b75("0xc")
        };
        wx[wanzikun_0x2b75("0xd")]({
            url: _0x467daa[wanzikun_0x2b75("0xe")]
        });
    },
    editAddess: function editAddess(_0x33b851) {
        var _0x229766 = {
            hpGcQ: function hpGcQ(_0x2eda3b, _0x1cb31c) {
                return _0x2eda3b + _0x1cb31c;
            },
            kRoyi: wanzikun_0x2b75("0xf")
        };
        wx[wanzikun_0x2b75("0xd")]({
            url: _0x229766["hpGcQ"](_0x229766[wanzikun_0x2b75("0x10")], _0x33b851[wanzikun_0x2b75("0x2")][wanzikun_0x2b75("0x3")]["id"])
        });
    },
    onLoad: function onLoad() {},
    onShow: function onShow() {
        this[wanzikun_0x2b75("0x11")]();
    },
    initShippingAddress: function initShippingAddress() {
        var _0x3b01be = {
            jnLnW: function jnLnW(_0x4ee2d8, _0x192e63) {
                return _0x4ee2d8 === _0x192e63;
            },
            bpCpY: wanzikun_0x2b75("0x12")
        };
        var _0x5c352d = this;
        wx[wanzikun_0x2b75("0x4")]({
            url: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")][wanzikun_0x2b75("0x6")] + _0x3b01be["bpCpY"],
            data: {
                token: wanzikun_0x5b6e24[wanzikun_0x2b75("0x5")]["token"]
            },
            success: function success(_0x3aecef) {
                if (_0x3aecef["data"][wanzikun_0x2b75("0x13")] == 0) {
                    if (_0x3b01be[wanzikun_0x2b75("0x14")](wanzikun_0x2b75("0x15"), wanzikun_0x2b75("0x15"))) {
                        _0x5c352d[wanzikun_0x2b75("0x16")]({
                            addressList: _0x3aecef[wanzikun_0x2b75("0x17")][wanzikun_0x2b75("0x17")]
                        });
                    } else {
                        _0x5c352d[wanzikun_0x2b75("0x16")]({
                            addressList: null
                        });
                    }
                } else if (_0x3aecef[wanzikun_0x2b75("0x17")][wanzikun_0x2b75("0x13")] == 700) {
                    _0x5c352d[wanzikun_0x2b75("0x16")]({
                        addressList: null
                    });
                }
            }
        });
    }
});