var wanzikun_0x1cf4 = [ "data", "showTabBarRedDot", "hideTabBarRedDot", "request", "ENNVc", "globalData", "urls", "token", "code", "count_id_no_pay", "EVRsR", "RnAZm", "pid", "push", "hlJje", "HnmUI", "/shop/goods/category/all", "SVmya", "wlJUA", "cOluD", "log", "dataset", "VnfkR", "/pages/menu-list/index?id=", "JUiOq", "length", "level", "setData", "getGoodsList", "UpBdE", "ytLhc", "dogBy", "gCCDp", "kUCwa", "fpepH", "UFjcG", "jZkNu", "shopNum", "currentTarget", "activeCategoryId", "navigateTo", "MERfl", "dwdTe", "zimnq", "shopCarInfo", "hlsYF", "CzkiC" ];

(function(_0x196852, _0x123683) {
    var _0x58e062 = function _0x58e062(_0x372319) {
        while (--_0x372319) {
            _0x196852["push"](_0x196852["shift"]());
        }
    };
    _0x58e062(++_0x123683);
})(wanzikun_0x1cf4, 183);

var wanzikun_0x14e7 = function wanzikun_0x14e7(_0x3c51fe, _0x4b4427) {
    _0x3c51fe = _0x3c51fe - 0;
    var _0x4e0539 = wanzikun_0x1cf4[_0x3c51fe];
    return _0x4e0539;
};

var wanzikun_0x53ddd2 = getApp();

Page({
    data: {},
    onShow: function onShow() {
        var _0x4f797b = {
            CzkiC: function CzkiC(_0x2f8bed, _0x2feb12) {
                return _0x2f8bed > _0x2feb12;
            },
            AhGrJ: function AhGrJ(_0x450c3c, _0x562afe) {
                return _0x450c3c == _0x562afe;
            },
            EVRsR: function EVRsR(_0x2047d8, _0x584766) {
                return _0x2047d8 !== _0x584766;
            },
            ArwXX: function ArwXX(_0x5b7e6a, _0x51c52d) {
                return _0x5b7e6a === _0x51c52d;
            },
            iuBri: wanzikun_0x14e7("0x0"),
            hlJje: wanzikun_0x14e7("0x1"),
            hlsYF: wanzikun_0x14e7("0x2"),
            ENNVc: function ENNVc(_0x6b6491, _0x5c12a7) {
                return _0x6b6491 + _0x5c12a7;
            }
        };
        wx["getStorage"]({
            key: _0x4f797b[wanzikun_0x14e7("0x3")],
            success: function success(_0x33248a) {
                if (_0x4f797b[wanzikun_0x14e7("0x4")](_0x33248a[wanzikun_0x14e7("0x5")]["shopNum"], 0)) {
                    wx[wanzikun_0x14e7("0x6")]({
                        index: 2
                    });
                } else {
                    wx[wanzikun_0x14e7("0x7")]({
                        index: 2
                    });
                }
            }
        });
        wx[wanzikun_0x14e7("0x8")]({
            url: _0x4f797b[wanzikun_0x14e7("0x9")](wanzikun_0x53ddd2[wanzikun_0x14e7("0xa")][wanzikun_0x14e7("0xb")], "/order/statistics"),
            data: {
                token: wanzikun_0x53ddd2[wanzikun_0x14e7("0xa")][wanzikun_0x14e7("0xc")]
            },
            success: function success(_0x1e43fb) {
                if (_0x1e43fb["data"][wanzikun_0x14e7("0xd")] == 0) {
                    if (_0x4f797b[wanzikun_0x14e7("0x4")](_0x1e43fb[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0xe")], 0)) {
                        if (_0x4f797b[wanzikun_0x14e7("0xf")](wanzikun_0x14e7("0x10"), "AbWTh")) {
                            wx[wanzikun_0x14e7("0x6")]({
                                index: 3
                            });
                        } else {
                            if (_0x4f797b["AhGrJ"](_0x1e43fb[wanzikun_0x14e7("0x5")]["data"][i][wanzikun_0x14e7("0x11")], categoryId)) {
                                categorieslist[wanzikun_0x14e7("0x12")](_0x1e43fb[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][i]);
                            }
                        }
                    } else {
                        if (_0x4f797b["ArwXX"](_0x4f797b["iuBri"], _0x4f797b[wanzikun_0x14e7("0x13")])) {
                            wx[wanzikun_0x14e7("0x6")]({
                                index: 3
                            });
                        } else {
                            wx[wanzikun_0x14e7("0x7")]({
                                index: 3
                            });
                        }
                    }
                }
            }
        });
    },
    onLoad: function onLoad() {
        var _0x21b714 = {
            RHdqh: function RHdqh(_0x239ad5, _0x5a4622) {
                return _0x239ad5 !== _0x5a4622;
            },
            cOluD: wanzikun_0x14e7("0x14"),
            JUiOq: function JUiOq(_0x3597c9, _0x285a21) {
                return _0x3597c9 == _0x285a21;
            },
            SVmya: function SVmya(_0x405634, _0x23de59) {
                return _0x405634 + _0x23de59;
            },
            wlJUA: wanzikun_0x14e7("0x15")
        };
        var _0x5064cf = this;
        wx[wanzikun_0x14e7("0x8")]({
            url: _0x21b714[wanzikun_0x14e7("0x16")](wanzikun_0x53ddd2[wanzikun_0x14e7("0xa")][wanzikun_0x14e7("0xb")], _0x21b714[wanzikun_0x14e7("0x17")]),
            success: function success(_0x425f7a) {
                var _0x2a897d = {
                    VnfkR: function VnfkR(_0x54ee76, _0x4ec67c) {
                        return _0x54ee76 + _0x4ec67c;
                    }
                };
                if (_0x21b714["RHdqh"]("HnmUI", _0x21b714[wanzikun_0x14e7("0x18")])) {
                    console[wanzikun_0x14e7("0x19")](e["currentTarget"][wanzikun_0x14e7("0x1a")]["id"]);
                    wx["navigateTo"]({
                        url: _0x2a897d[wanzikun_0x14e7("0x1b")](wanzikun_0x14e7("0x1c"), e["currentTarget"][wanzikun_0x14e7("0x1a")]["id"])
                    });
                } else {
                    var _0x48a10c = [];
                    if (_0x21b714[wanzikun_0x14e7("0x1d")](_0x425f7a[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0xd")], 0)) {
                        for (var _0x52b32b = 0; _0x52b32b < _0x425f7a[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x1e")]; _0x52b32b++) {
                            if (_0x425f7a["data"][wanzikun_0x14e7("0x5")][_0x52b32b][wanzikun_0x14e7("0x1f")] == 1) {
                                _0x48a10c[wanzikun_0x14e7("0x12")](_0x425f7a[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][_0x52b32b]);
                            }
                        }
                    }
                    _0x5064cf[wanzikun_0x14e7("0x20")]({
                        categories: _0x48a10c,
                        activeCategoryId: _0x48a10c[0]["id"]
                    });
                    _0x5064cf[wanzikun_0x14e7("0x21")](_0x48a10c[0]["id"]);
                }
            }
        });
    },
    getGoodsList: function getGoodsList(_0x19b48e) {
        var _0x4cc0d5 = {
            jZkNu: function jZkNu(_0x35c07e, _0x29762d) {
                return _0x35c07e > _0x29762d;
            },
            gCCDp: function gCCDp(_0x33d2da, _0x1fc94d) {
                return _0x33d2da == _0x1fc94d;
            },
            AqLrJ: function AqLrJ(_0x4e41ba, _0x3d8464) {
                return _0x4e41ba < _0x3d8464;
            },
            kUCwa: function kUCwa(_0x4ec301, _0x25d89d) {
                return _0x4ec301 != _0x25d89d;
            },
            UFjcG: wanzikun_0x14e7("0x22"),
            dwBpD: function dwBpD(_0x507ccc, _0x790db0) {
                return _0x507ccc == _0x790db0;
            },
            ytLhc: function ytLhc(_0x40c738, _0x142a29) {
                return _0x40c738 == _0x142a29;
            },
            dogBy: function dogBy(_0x385f4f, _0x30272d) {
                return _0x385f4f + _0x30272d;
            }
        };
        if (_0x4cc0d5[wanzikun_0x14e7("0x23")](_0x19b48e, 0)) {
            _0x19b48e = "";
        }
        var _0x300ab9 = this;
        wx["request"]({
            url: _0x4cc0d5[wanzikun_0x14e7("0x24")](wanzikun_0x53ddd2[wanzikun_0x14e7("0xa")][wanzikun_0x14e7("0xb")], wanzikun_0x14e7("0x15")),
            success: function success(_0x25de90) {
                var _0x2ee566 = {};
                var _0x2ff337 = [];
                if (_0x4cc0d5[wanzikun_0x14e7("0x25")](_0x25de90["data"][wanzikun_0x14e7("0xd")], 0)) {
                    for (var _0x518d20 = 0; _0x4cc0d5["AqLrJ"](_0x518d20, _0x25de90[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")]["length"]); _0x518d20++) {
                        if (_0x4cc0d5[wanzikun_0x14e7("0x26")](_0x19b48e, "")) {
                            if (wanzikun_0x14e7("0x27") === _0x4cc0d5[wanzikun_0x14e7("0x28")]) {
                                if (_0x4cc0d5[wanzikun_0x14e7("0x29")](_0x25de90["data"][wanzikun_0x14e7("0x2a")], 0)) {
                                    wx["showTabBarRedDot"]({
                                        index: 2
                                    });
                                } else {
                                    wx[wanzikun_0x14e7("0x7")]({
                                        index: 2
                                    });
                                }
                            } else {
                                if (_0x4cc0d5["dwBpD"](_0x25de90[wanzikun_0x14e7("0x5")]["data"][_0x518d20]["pid"], _0x19b48e)) {
                                    _0x2ff337[wanzikun_0x14e7("0x12")](_0x25de90[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][_0x518d20]);
                                }
                            }
                        } else {
                            if (_0x25de90[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][_0x518d20][wanzikun_0x14e7("0x11")] != 0) {
                                _0x2ff337["push"](_0x25de90[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x5")][_0x518d20]);
                            }
                        }
                    }
                }
                _0x2ee566[_0x19b48e] = _0x2ff337;
                _0x300ab9[wanzikun_0x14e7("0x20")]({
                    categorieslist: _0x2ff337,
                    categoriesdict: _0x2ee566
                });
            }
        });
    },
    tabClick: function tabClick(_0x1fd157) {
        this["setData"]({
            activeCategoryId: _0x1fd157[wanzikun_0x14e7("0x2b")]["id"]
        });
        this[wanzikun_0x14e7("0x21")](this[wanzikun_0x14e7("0x5")][wanzikun_0x14e7("0x2c")]);
    },
    levelClick: function levelClick(_0x4eee99) {
        var _0x13cdbf = {
            MERfl: function MERfl(_0x1fdb53, _0x1adb29) {
                return _0x1fdb53 + _0x1adb29;
            }
        };
        console["log"](_0x4eee99[wanzikun_0x14e7("0x2b")]["dataset"]["id"]);
        wx[wanzikun_0x14e7("0x2d")]({
            url: _0x13cdbf[wanzikun_0x14e7("0x2e")](wanzikun_0x14e7("0x1c"), _0x4eee99[wanzikun_0x14e7("0x2b")][wanzikun_0x14e7("0x1a")]["id"])
        });
    }
});