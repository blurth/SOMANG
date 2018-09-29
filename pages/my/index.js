var wanzikun_0x1834 = [ "index", "navigateTo", "count_id_success", "getStorage", "shopCarInfo", "kwXhW", "shopNum", "hideTabBarRedDot", "TqwUZ", "FkPde", "ovQbM", "/notice/detail", "zRgTB", "KqtNU", "html", "tvmZf", "GzJvD", "../../wxParse/wxParse.js", "/notice/list", "about", "request", "globalData", "urls", "PPkUm", "code", "setData", "data", "dataList", "article", "/pages/order-list/index?currentType=", "fKIEx", "red-dot", "qVgdE", "uwIPs", "NGKdy", "/order/statistics", "tGyPh", "token", "hideLoading", "hoAfH", "iYGhk", "currentTarget", "dataset", "kZiqL", "wxParse", "gOfEQ", "tabClass", "count_id_no_pay", "BFzer", "showTabBarRedDot", "bNzkU", "count_id_no_transfer", "fUsay", "ADOgU", "ucoET", "JzFyJ", "tvxNZ", "count_id_no_reputation", "CdycT", "SCHFK" ];

(function(_0x31c48e, _0x179e9c) {
    var _0x486b41 = function _0x486b41(_0x55e57e) {
        while (--_0x55e57e) {
            _0x31c48e["push"](_0x31c48e["shift"]());
        }
    };
    _0x486b41(++_0x179e9c);
})(wanzikun_0x1834, 257);

var wanzikun_0x2f82 = function wanzikun_0x2f82(_0x5a6a7f, _0x43c37d) {
    _0x5a6a7f = _0x5a6a7f - 0;
    var _0x44a3f5 = wanzikun_0x1834[_0x5a6a7f];
    return _0x44a3f5;
};

var wanzikun_0x3ae5cc = getApp();

var wanzikun_0x2e6dac = require(wanzikun_0x2f82("0x0"));

Page({
    data: {
        aboutShow: !![],
        tabClass: [ "", "", "", "", "" ]
    },
    onLoad: function onLoad() {
        var _0x6574e8 = {
            NccJx: function NccJx(_0x596df9, _0x557719) {
                return _0x596df9 == _0x557719;
            },
            eAzSi: wanzikun_0x2f82("0x1"),
            PPkUm: wanzikun_0x2f82("0x2")
        };
        var _0x5b371c = this;
        wx[wanzikun_0x2f82("0x3")]({
            url: wanzikun_0x3ae5cc[wanzikun_0x2f82("0x4")][wanzikun_0x2f82("0x5")] + _0x6574e8["eAzSi"],
            data: {
                type: _0x6574e8[wanzikun_0x2f82("0x6")]
            },
            success: function success(_0x3f1e8a) {
                if (_0x6574e8["NccJx"](_0x3f1e8a["data"][wanzikun_0x2f82("0x7")], 0)) {
                    _0x5b371c[wanzikun_0x2f82("0x8")]({
                        about: _0x3f1e8a[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0xa")][0]
                    });
                }
            }
        });
    },
    onShow: function onShow() {
        var _this = this;
        var _0x5434a7 = {
            mgYEV: function mgYEV(_0x481ec5, _0x5086ab) {
                return _0x481ec5 == _0x5086ab;
            },
            MeSxM: wanzikun_0x2f82("0xb"),
            iYGhk: function iYGhk(_0xf9dd95, _0x17aa47) {
                return _0xf9dd95 + _0x17aa47;
            },
            bVXyB: "/notice/detail",
            sYjgG: wanzikun_0x2f82("0xc"),
            zzVHw: function zzVHw(_0x79d6e1, _0x1457df) {
                return _0x79d6e1 == _0x1457df;
            },
            SoBZi: wanzikun_0x2f82("0xd"),
            bNzkU: function bNzkU(_0x55d4c7, _0x2e332a) {
                return _0x55d4c7 > _0x2e332a;
            },
            BFzer: wanzikun_0x2f82("0xe"),
            fUsay: function fUsay(_0x50ea56, _0x1e5207) {
                return _0x50ea56 > _0x1e5207;
            },
            ADOgU: function ADOgU(_0x219f10, _0x4c2764) {
                return _0x219f10 !== _0x4c2764;
            },
            JzFyJ: wanzikun_0x2f82("0xf"),
            eqblN: wanzikun_0x2f82("0x10"),
            LpDvv: wanzikun_0x2f82("0x11"),
            CdycT: function CdycT(_0x3d43f7, _0x509ec2) {
                return _0x3d43f7 === _0x509ec2;
            },
            SCHFK: "obRyV",
            kwXhW: function kwXhW(_0x4beb7f, _0x10c96a) {
                return _0x4beb7f > _0x10c96a;
            },
            tGyPh: wanzikun_0x2f82("0x12")
        };
        var _0x2d32ce = this;
        wx[wanzikun_0x2f82("0x3")]({
            url: wanzikun_0x3ae5cc[wanzikun_0x2f82("0x4")][wanzikun_0x2f82("0x5")] + _0x5434a7[wanzikun_0x2f82("0x13")],
            data: {
                token: wanzikun_0x3ae5cc[wanzikun_0x2f82("0x4")][wanzikun_0x2f82("0x14")]
            },
            success: function success(_0x3e85a0) {
                var _0x364aa7 = {
                    tvxNZ: function tvxNZ(_0x3219fd, _0x1003cf) {
                        return _0x5434a7["zzVHw"](_0x3219fd, _0x1003cf);
                    }
                };
                wx[wanzikun_0x2f82("0x15")]();
                if (_0x3e85a0["data"][wanzikun_0x2f82("0x7")] == 0) {
                    if (wanzikun_0x2f82("0x16") === _0x5434a7["SoBZi"]) {
                        var _0x3f72e7 = {
                            kZiqL: function kZiqL(_0x3e2ad0, _0x366286) {
                                return _0x5434a7["mgYEV"](_0x3e2ad0, _0x366286);
                            },
                            XdSRg: _0x5434a7["MeSxM"],
                            gOfEQ: "html"
                        };
                        var _0x1172d2 = _this;
                        wx["request"]({
                            url: _0x5434a7[wanzikun_0x2f82("0x17")](wanzikun_0x3ae5cc["globalData"]["urls"], _0x5434a7["bVXyB"]),
                            data: {
                                id: e[wanzikun_0x2f82("0x18")][wanzikun_0x2f82("0x19")]["id"]
                            },
                            success: function success(_0x93af32) {
                                if (_0x3f72e7[wanzikun_0x2f82("0x1a")](_0x93af32[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x7")], 0)) {
                                    _0x1172d2[wanzikun_0x2f82("0x8")]({
                                        aboutShow: ![],
                                        aboutCon: _0x93af32[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")]
                                    });
                                    wanzikun_0x2e6dac[wanzikun_0x2f82("0x1b")](_0x3f72e7["XdSRg"], _0x3f72e7[wanzikun_0x2f82("0x1c")], _0x93af32[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")]["content"], _0x1172d2, 5);
                                }
                            }
                        });
                    } else {
                        var _0x28a231 = _0x2d32ce[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x1d")];
                        if (_0x5434a7["bNzkU"](_0x3e85a0[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x1e")], 0)) {
                            _0x28a231[0] = _0x5434a7[wanzikun_0x2f82("0x1f")], wx[wanzikun_0x2f82("0x20")]({
                                index: 3
                            });
                        } else {
                            _0x28a231[0] = "", wx["hideTabBarRedDot"]({
                                index: 3
                            });
                        }
                        if (_0x5434a7[wanzikun_0x2f82("0x21")](_0x3e85a0[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x22")], 0)) {
                            _0x28a231[1] = _0x5434a7[wanzikun_0x2f82("0x1f")];
                        } else {
                            _0x28a231[1] = "";
                        }
                        if (_0x5434a7[wanzikun_0x2f82("0x23")](_0x3e85a0[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")]["count_id_no_confirm"], 0)) {
                            _0x28a231[2] = _0x5434a7[wanzikun_0x2f82("0x1f")];
                        } else {
                            if (_0x5434a7[wanzikun_0x2f82("0x24")](wanzikun_0x2f82("0x25"), _0x5434a7[wanzikun_0x2f82("0x26")])) {
                                _0x28a231[2] = "";
                            } else {
                                if (_0x364aa7[wanzikun_0x2f82("0x27")](_0x3e85a0["data"]["code"], 0)) {
                                    _0x2d32ce[wanzikun_0x2f82("0x8")]({
                                        about: _0x3e85a0[wanzikun_0x2f82("0x9")]["data"][wanzikun_0x2f82("0xa")][0]
                                    });
                                }
                            }
                        }
                        if (_0x3e85a0[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x28")] > 0) {
                            if (_0x5434a7["ADOgU"](_0x5434a7["eqblN"], _0x5434a7["LpDvv"])) {
                                _0x28a231[3] = _0x5434a7[wanzikun_0x2f82("0x1f")];
                            } else {
                                var _0xab7d87 = _this;
                                _0xab7d87[wanzikun_0x2f82("0x8")]({
                                    aboutShow: !![]
                                });
                            }
                        } else {
                            if (_0x5434a7[wanzikun_0x2f82("0x29")](_0x5434a7[wanzikun_0x2f82("0x2a")], _0x5434a7[wanzikun_0x2f82("0x2a")])) {
                                _0x28a231[3] = "";
                            } else {
                                var _0x8808fa = e[wanzikun_0x2f82("0x18")][wanzikun_0x2f82("0x19")][wanzikun_0x2f82("0x2b")];
                                wx[wanzikun_0x2f82("0x2c")]({
                                    url: _0x5434a7[wanzikun_0x2f82("0x17")](_0x5434a7["sYjgG"], _0x8808fa)
                                });
                            }
                        }
                        if (_0x3e85a0["data"][wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x2d")] > 0) {} else {}
                        _0x2d32ce[wanzikun_0x2f82("0x8")]({
                            tabClass: _0x28a231
                        });
                    }
                }
            }
        });
        wx[wanzikun_0x2f82("0x2e")]({
            key: wanzikun_0x2f82("0x2f"),
            success: function success(_0x33b885) {
                if (_0x5434a7[wanzikun_0x2f82("0x30")](_0x33b885[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x31")], 0)) {
                    wx[wanzikun_0x2f82("0x20")]({
                        index: 2
                    });
                } else {
                    wx[wanzikun_0x2f82("0x32")]({
                        index: 2
                    });
                }
            }
        });
    },
    getAbout: function getAbout(_0x364950) {
        var _0x967d0c = {
            zRgTB: wanzikun_0x2f82("0x33"),
            vKNfa: wanzikun_0x2f82("0x34"),
            ovQbM: function ovQbM(_0x178b38, _0x2fe546) {
                return _0x178b38 + _0x2fe546;
            }
        };
        var _0x67e1fb = this;
        wx["request"]({
            url: _0x967d0c[wanzikun_0x2f82("0x35")](wanzikun_0x3ae5cc["globalData"][wanzikun_0x2f82("0x5")], wanzikun_0x2f82("0x36")),
            data: {
                id: _0x364950[wanzikun_0x2f82("0x18")][wanzikun_0x2f82("0x19")]["id"]
            },
            success: function success(_0x84a8bd) {
                var _0x5a5ed6 = {
                    KqtNU: wanzikun_0x2f82("0xe")
                };
                if (_0x967d0c[wanzikun_0x2f82("0x37")] === _0x967d0c["vKNfa"]) {
                    tabClass[1] = _0x5a5ed6[wanzikun_0x2f82("0x38")];
                } else {
                    if (_0x84a8bd[wanzikun_0x2f82("0x9")]["code"] == 0) {
                        _0x67e1fb[wanzikun_0x2f82("0x8")]({
                            aboutShow: ![],
                            aboutCon: _0x84a8bd[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")]
                        });
                        wanzikun_0x2e6dac[wanzikun_0x2f82("0x1b")](wanzikun_0x2f82("0xb"), wanzikun_0x2f82("0x39"), _0x84a8bd[wanzikun_0x2f82("0x9")][wanzikun_0x2f82("0x9")]["content"], _0x67e1fb, 5);
                    }
                }
            }
        });
    },
    close: function close() {
        var _0xe0a489 = this;
        _0xe0a489["setData"]({
            aboutShow: !![]
        });
    },
    goorderlist: function goorderlist(_0x2a6676) {
        var _0xfc258 = {
            tvmZf: function tvmZf(_0x34cb0a, _0x1d0d77) {
                return _0x34cb0a + _0x1d0d77;
            },
            GzJvD: wanzikun_0x2f82("0xc")
        };
        var _0xcd4857 = _0x2a6676[wanzikun_0x2f82("0x18")][wanzikun_0x2f82("0x19")][wanzikun_0x2f82("0x2b")];
        wx["navigateTo"]({
            url: _0xfc258[wanzikun_0x2f82("0x3a")](_0xfc258[wanzikun_0x2f82("0x3b")], _0xcd4857)
        });
    }
});