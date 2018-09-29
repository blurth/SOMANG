var wanzikun_0x459e = [ "TdgDb", "value", "remark", "/pages/select-address/index", "wCGmB", "YBJNT", "mScMW", "GMiCL", "fXFcd", "navigateTo", "YzFxc", "oBykX", "YMTZr", "TdqzT", "QAKBJ", "pages/index/index", "您的订单已发货，请注意查收", "pages/order-details/index?id=", "DnImW", "ooFkJ", "请先设置您的收货地址", "ZsJoM", "bkwjp", "true", "/order/create", "application/x-www-form-urlencoded", "globalData", "token", "HCVmn", "detail", "BVxwn", "njjoV", "coupons", "money", "goodsJsonStr", "WgsmZ", "isNeedLogistics", "curAddressData", "xeyWK", "hideLoading", "showModal", "provinceId", "cityId", "districtId", "XrpFq", "XEopB", "address", "linkMan", "code", "curCoupon", "calculate", "ZfjMb", "request", "urls", "CnjRs", "JFKFI", "EnSAN", "cRGrB", "rDoql", "msg", "Gryhw", "removeStorageSync", "LLmzE", "UbQHQ", "amountLogistics", "getMyCoupons", "keyword1", "oMjww", "amountReal", "keyword3", "orderNumber", "#173177", "keyword4", "订单已关闭", "keyword5", "sendTempleMsg", "siteInfo", "closeorderkey", "formId", "stringify", "Binsg", "keyword2", "dateAdd", "deliveryorderkey", "InliL", "tjwqw", "/user/shipping-address/default", "ELCWa", "dnsEN", "BYcLr", "jFYvQ", "qYGCt", "filter", "mJomd", "allGoodsAndYunPrice", "LQBXD", "length", "processYunfei", "inviter_id_", '{"goodsId":', ',"number":', ',"propertyChildIds":"', '","logisticsType":0, "inviter_id":', "goodsList", "ICTSs", "logistics", "price", "Ixbvc", "IarMM", "FqkiN", "goodsId", "gJleS", "nyzGR", "upxbI", "OYPyg", "hPAul", "UpkZP", "tgDmL", "number", "kSmHl", "propertyChildIds", "UnuOw", "createOrder", "/pages/address-add/index", "hrtrv", "Ixose", "DKFPW", "oPRWv", "/discounts/my", "ylxUR", "ZAlOC", "DaUci", "moneyHreshold", "saqHd", "hhfta", "couponId", "Lulzo", "Fzarp", "buyNow", "ApfjH", "oQufj", "cQvSq", "shopCarInfo", "BLDiE", "gqHih", "data", "orderType", "getStorageSync", "buyNowInfo", "shopList", "KJLtJ", "RWCPy", "JDyzz", "PtpEY", "AwhAu", "FmpxI", "bDxPl", "EaXvs", "setData", "KoZeH" ];

(function(_0x2a0e01, _0x43620f) {
    var _0x34d73f = function _0x34d73f(_0x28074e) {
        while (--_0x28074e) {
            _0x2a0e01["push"](_0x2a0e01["shift"]());
        }
    };
    _0x34d73f(++_0x43620f);
})(wanzikun_0x459e, 298);

var wanzikun_0x5222 = function wanzikun_0x5222(_0x106765, _0x1277b7) {
    _0x106765 = _0x106765 - 0;
    var _0x19f13e = wanzikun_0x459e[_0x106765];
    return _0x19f13e;
};

var wanzikun_0x2ec3dd = getApp();

Page({
    data: {
        goodsList: [],
        isNeedLogistics: 0,
        allGoodsPrice: 0,
        yunPrice: 0,
        allGoodsAndYunPrice: 0,
        goodsJsonStr: "",
        orderType: "",
        hasNoCoupons: !![],
        coupons: [],
        youhuijine: 0,
        curCoupon: null
    },
    onShow: function onShow() {
        var _0x3a8f5d = {
            PtpEY: function PtpEY(_0x380e18, _0xd69488) {
                return _0x380e18 <= _0xd69488;
            },
            BLDiE: function BLDiE(_0x7ac65f, _0x3509f0) {
                return _0x7ac65f == _0x3509f0;
            },
            gqHih: wanzikun_0x5222("0x0"),
            KJLtJ: function KJLtJ(_0x24281d, _0x3fe336) {
                return _0x24281d !== _0x3fe336;
            },
            JDyzz: wanzikun_0x5222("0x1"),
            AwhAu: function AwhAu(_0x4400dd, _0x19d7df) {
                return _0x4400dd === _0x19d7df;
            },
            FmpxI: wanzikun_0x5222("0x2"),
            bDxPl: wanzikun_0x5222("0x3"),
            EaXvs: wanzikun_0x5222("0x4")
        };
        var _0x202cf8 = this;
        var _0x515eda = [];
        if (_0x3a8f5d[wanzikun_0x5222("0x5")](_0x3a8f5d[wanzikun_0x5222("0x6")], _0x202cf8[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x8")])) {
            var _0x8885bf = wx[wanzikun_0x5222("0x9")](wanzikun_0x5222("0xa"));
            if (_0x8885bf && _0x8885bf[wanzikun_0x5222("0xb")]) {
                if (_0x3a8f5d[wanzikun_0x5222("0xc")](wanzikun_0x5222("0xd"), _0x3a8f5d[wanzikun_0x5222("0xe")])) {
                    _0x515eda = _0x8885bf[wanzikun_0x5222("0xb")];
                } else {
                    return _0x3a8f5d[wanzikun_0x5222("0xf")](entity["moneyHreshold"], _0x202cf8[wanzikun_0x5222("0x7")]["allGoodsAndYunPrice"]);
                }
            }
        } else {
            if (_0x3a8f5d[wanzikun_0x5222("0x10")](_0x3a8f5d[wanzikun_0x5222("0x11")], _0x3a8f5d[wanzikun_0x5222("0x12")])) {
                return "";
            } else {
                var _0x12e02e = wx[wanzikun_0x5222("0x9")](_0x3a8f5d[wanzikun_0x5222("0x13")]);
                if (_0x12e02e && _0x12e02e[wanzikun_0x5222("0xb")]) {
                    _0x515eda = _0x12e02e["shopList"]["filter"](function(_0xa12ed7) {
                        return _0xa12ed7["active"];
                    });
                }
            }
        }
        _0x202cf8[wanzikun_0x5222("0x14")]({
            goodsList: _0x515eda
        });
        _0x202cf8["initShippingAddress"]();
    },
    onLoad: function onLoad(_0x159981) {
        var _0x148acd = {
            TdgDb: function TdgDb(_0x209d3a, _0x785e4d) {
                return _0x209d3a !== _0x785e4d;
            },
            uXqHf: wanzikun_0x5222("0x15")
        };
        var _0x4befd5 = "";
        if (_0x159981[wanzikun_0x5222("0x8")]) {
            if (_0x148acd[wanzikun_0x5222("0x16")](_0x148acd["uXqHf"], wanzikun_0x5222("0x15"))) {
                remark = _0x159981["detail"][wanzikun_0x5222("0x17")][wanzikun_0x5222("0x18")];
            } else {
                _0x4befd5 = _0x159981[wanzikun_0x5222("0x8")];
            }
        }
        var _0x4973cc = this;
        _0x4973cc[wanzikun_0x5222("0x14")]({
            isNeedLogistics: 1,
            orderType: _0x4befd5
        });
    },
    getDistrictId: function getDistrictId(_0xad6a34, _0x2729c4) {
        var _0x19bdc5 = {
            YzFxc: wanzikun_0x5222("0x19"),
            KyyDk: function KyyDk(_0x27a003, _0x5ea003) {
                return _0x27a003 === _0x5ea003;
            },
            GMiCL: wanzikun_0x5222("0x1a"),
            fXFcd: wanzikun_0x5222("0x1b"),
            oBykX: wanzikun_0x5222("0x1c")
        };
        if (!_0xad6a34) {
            if (_0x19bdc5["KyyDk"](_0x19bdc5[wanzikun_0x5222("0x1d")], _0x19bdc5[wanzikun_0x5222("0x1e")])) {
                wx[wanzikun_0x5222("0x1f")]({
                    url: _0x19bdc5[wanzikun_0x5222("0x20")]
                });
            } else {
                return "";
            }
        }
        if (!_0x2729c4) {
            if (_0x19bdc5[wanzikun_0x5222("0x21")] === wanzikun_0x5222("0x22")) {
                wx[wanzikun_0x5222("0x1f")]({
                    url: "/pages/address-add/index"
                });
            } else {
                return "";
            }
        }
        return _0x2729c4;
    },
    createOrder: function createOrder(_0x412986) {
        var _0x1ad556 = {
            BVxwn: function BVxwn(_0x2c27e0, _0x30ec89) {
                return _0x2c27e0 - _0x30ec89;
            },
            njjoV: function njjoV(_0x42e84a, _0x1725cd) {
                return _0x42e84a == _0x1725cd;
            },
            EnSAN: function EnSAN(_0x46c47e, _0x7ee89a) {
                return _0x46c47e === _0x7ee89a;
            },
            rDoql: "cRGrB",
            mIjdq: function mIjdq(_0x10bf83, _0x448f5f) {
                return _0x10bf83 != _0x448f5f;
            },
            Gryhw: wanzikun_0x5222("0x0"),
            XrpFq: function XrpFq(_0x2e2990, _0x3546a4) {
                return _0x2e2990 !== _0x3546a4;
            },
            LLmzE: wanzikun_0x5222("0x23"),
            UbQHQ: wanzikun_0x5222("0x24"),
            oMjww: "#173177",
            InliL: function InliL(_0x35edd9, _0xa7dc6c) {
                return _0x35edd9 + _0xa7dc6c;
            },
            YEtpW: wanzikun_0x5222("0x25"),
            Binsg: wanzikun_0x5222("0x26"),
            tjwqw: wanzikun_0x5222("0x27"),
            FXBdt: "/pages/order-list/index?currentType=0",
            HCVmn: wanzikun_0x5222("0x28"),
            WgsmZ: function WgsmZ(_0x2d9123, _0x262341) {
                return _0x2d9123 > _0x262341;
            },
            xeyWK: wanzikun_0x5222("0x29"),
            nLBzb: wanzikun_0x5222("0x2a"),
            XEopB: wanzikun_0x5222("0x2b"),
            rRSdx: wanzikun_0x5222("0x2c"),
            ZfjMb: wanzikun_0x5222("0x2d"),
            CnjRs: wanzikun_0x5222("0x2e"),
            JFKFI: "POST",
            oEVFY: wanzikun_0x5222("0x2f")
        };
        wx["showLoading"]();
        var _0x518dca = this;
        var _0x39b14d = wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")][wanzikun_0x5222("0x31")];
        var _0x99c1e1 = "";
        if (_0x412986) {
            if (_0x1ad556[wanzikun_0x5222("0x32")] === _0x1ad556[wanzikun_0x5222("0x32")]) {
                _0x99c1e1 = _0x412986[wanzikun_0x5222("0x33")][wanzikun_0x5222("0x17")][wanzikun_0x5222("0x18")];
            } else {
                var _0x4ae95d = _0x1ad556[wanzikun_0x5222("0x34")](_0x412986[wanzikun_0x5222("0x33")][wanzikun_0x5222("0x17")][0], 1);
                if (_0x1ad556[wanzikun_0x5222("0x35")](_0x4ae95d, -1)) {
                    this[wanzikun_0x5222("0x14")]({
                        youhuijine: 0,
                        curCoupon: null
                    });
                    return;
                }
                this[wanzikun_0x5222("0x14")]({
                    youhuijine: this[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x36")][_0x4ae95d][wanzikun_0x5222("0x37")],
                    curCoupon: this[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x36")][_0x4ae95d]
                });
            }
        }
        var _0x4e227b = {
            token: _0x39b14d,
            goodsJsonStr: _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x38")],
            remark: _0x99c1e1
        };
        if (_0x1ad556[wanzikun_0x5222("0x39")](_0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3a")], 0)) {
            if (!_0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")]) {
                if (_0x1ad556[wanzikun_0x5222("0x3c")] === _0x1ad556[wanzikun_0x5222("0x3c")]) {
                    wx[wanzikun_0x5222("0x3d")]();
                    wx[wanzikun_0x5222("0x3e")]({
                        title: "提示",
                        content: _0x1ad556["nLBzb"],
                        showCancel: ![]
                    });
                    return;
                } else {
                    _0x518dca[wanzikun_0x5222("0x14")]({
                        curAddressData: null
                    });
                }
            }
            _0x4e227b[wanzikun_0x5222("0x3f")] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x3f")];
            _0x4e227b[wanzikun_0x5222("0x40")] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x40")];
            if (_0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x41")]) {
                if (_0x1ad556[wanzikun_0x5222("0x42")](_0x1ad556[wanzikun_0x5222("0x43")], _0x1ad556["rRSdx"])) {
                    _0x4e227b[wanzikun_0x5222("0x41")] = _0x518dca["data"][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x41")];
                } else {
                    var _0xd19f4c = "";
                    if (_0x412986[wanzikun_0x5222("0x8")]) {
                        _0xd19f4c = _0x412986[wanzikun_0x5222("0x8")];
                    }
                    var _0xbe427c = this;
                    _0xbe427c[wanzikun_0x5222("0x14")]({
                        isNeedLogistics: 1,
                        orderType: _0xd19f4c
                    });
                }
            }
            _0x4e227b[wanzikun_0x5222("0x44")] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x44")];
            _0x4e227b[wanzikun_0x5222("0x45")] = _0x518dca["data"][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x45")];
            _0x4e227b["mobile"] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")]["mobile"];
            _0x4e227b[wanzikun_0x5222("0x46")] = _0x518dca[wanzikun_0x5222("0x7")]["curAddressData"][wanzikun_0x5222("0x46")];
        }
        if (_0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x47")]) {
            _0x4e227b["couponId"] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x47")]["id"];
        }
        if (!_0x412986) {
            _0x4e227b[wanzikun_0x5222("0x48")] = _0x1ad556[wanzikun_0x5222("0x49")];
        }
        wx[wanzikun_0x5222("0x4a")]({
            url: wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")][wanzikun_0x5222("0x4b")] + _0x1ad556[wanzikun_0x5222("0x4c")],
            method: _0x1ad556[wanzikun_0x5222("0x4d")],
            header: {
                "content-type": _0x1ad556["oEVFY"]
            },
            data: _0x4e227b,
            success: function success(_0x46d350) {
                wx[wanzikun_0x5222("0x3d")]();
                if (_0x46d350[wanzikun_0x5222("0x7")]["code"] != 0) {
                    if (_0x1ad556[wanzikun_0x5222("0x4e")](wanzikun_0x5222("0x4f"), _0x1ad556[wanzikun_0x5222("0x50")])) {
                        wx[wanzikun_0x5222("0x3e")]({
                            title: "错误",
                            content: _0x46d350["data"][wanzikun_0x5222("0x51")],
                            showCancel: ![]
                        });
                        return;
                    } else {
                        goodsJsonStrTmp = ",";
                    }
                }
                if (_0x412986 && _0x1ad556["mIjdq"](_0x1ad556[wanzikun_0x5222("0x52")], _0x518dca[wanzikun_0x5222("0x7")]["orderType"])) {
                    wx[wanzikun_0x5222("0x53")](wanzikun_0x5222("0x4"));
                }
                if (!_0x412986) {
                    if (_0x1ad556["XrpFq"](_0x1ad556[wanzikun_0x5222("0x54")], _0x1ad556[wanzikun_0x5222("0x55")])) {
                        _0x518dca[wanzikun_0x5222("0x14")]({
                            isNeedLogistics: _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3a")],
                            allGoodsPrice: _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")]["amountTotle"],
                            allGoodsAndYunPrice: _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x56")] + _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")]["amountTotle"],
                            yunPrice: _0x46d350["data"][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x56")]
                        });
                        _0x518dca[wanzikun_0x5222("0x57")]();
                        return;
                    } else {
                        _0x4e227b["districtId"] = _0x518dca[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x3b")][wanzikun_0x5222("0x41")];
                    }
                }
                var _0x3dc0b4 = {};
                _0x3dc0b4[wanzikun_0x5222("0x58")] = {
                    value: _0x46d350[wanzikun_0x5222("0x7")]["data"]["dateAdd"],
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                _0x3dc0b4["keyword2"] = {
                    value: _0x1ad556["InliL"](_0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x5a")], "元"),
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                _0x3dc0b4[wanzikun_0x5222("0x5b")] = {
                    value: _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x5c")],
                    color: wanzikun_0x5222("0x5d")
                };
                _0x3dc0b4[wanzikun_0x5222("0x5e")] = {
                    value: wanzikun_0x5222("0x5f"),
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                _0x3dc0b4[wanzikun_0x5222("0x60")] = {
                    value: "您可以重新下单，请在30分钟内完成支付",
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                wanzikun_0x2ec3dd[wanzikun_0x5222("0x61")](_0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")]["id"], -1, wanzikun_0x2ec3dd[wanzikun_0x5222("0x62")][wanzikun_0x5222("0x63")], _0x412986["detail"][wanzikun_0x5222("0x64")], _0x1ad556["YEtpW"], JSON[wanzikun_0x5222("0x65")](_0x3dc0b4));
                _0x3dc0b4 = {};
                _0x3dc0b4[wanzikun_0x5222("0x58")] = {
                    value: _0x1ad556[wanzikun_0x5222("0x66")],
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                _0x3dc0b4[wanzikun_0x5222("0x67")] = {
                    value: _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x5c")],
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                _0x3dc0b4[wanzikun_0x5222("0x5b")] = {
                    value: _0x46d350[wanzikun_0x5222("0x7")]["data"][wanzikun_0x5222("0x68")],
                    color: _0x1ad556[wanzikun_0x5222("0x59")]
                };
                wanzikun_0x2ec3dd[wanzikun_0x5222("0x61")](_0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")]["id"], 2, wanzikun_0x2ec3dd["siteInfo"][wanzikun_0x5222("0x69")], _0x412986[wanzikun_0x5222("0x33")][wanzikun_0x5222("0x64")], _0x1ad556[wanzikun_0x5222("0x6a")](_0x1ad556[wanzikun_0x5222("0x6b")], _0x46d350[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")]["id"]), JSON[wanzikun_0x5222("0x65")](_0x3dc0b4));
                wx["redirectTo"]({
                    url: _0x1ad556["FXBdt"]
                });
            }
        });
    },
    initShippingAddress: function initShippingAddress() {
        var _0x3be186 = {
            jFYvQ: function jFYvQ(_0x3f8688, _0x5ea4fc) {
                return _0x3f8688 == _0x5ea4fc;
            },
            BYcLr: function BYcLr(_0x2c1049, _0x59159f) {
                return _0x2c1049 > _0x59159f;
            },
            qYGCt: "pwrjB",
            ELCWa: function ELCWa(_0x86b367, _0x8ada3b) {
                return _0x86b367 + _0x8ada3b;
            },
            dnsEN: wanzikun_0x5222("0x6c")
        };
        var _0x3a39e5 = this;
        wx[wanzikun_0x5222("0x4a")]({
            url: _0x3be186[wanzikun_0x5222("0x6d")](wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")][wanzikun_0x5222("0x4b")], _0x3be186[wanzikun_0x5222("0x6e")]),
            data: {
                token: wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")][wanzikun_0x5222("0x31")]
            },
            success: function success(_0x17cba5) {
                var _0x2e841d = {
                    rUSEC: function rUSEC(_0x1cecd3, _0x5130e4) {
                        return _0x3be186["jFYvQ"](_0x1cecd3, _0x5130e4);
                    },
                    LQBXD: function LQBXD(_0x19861d, _0x39b1ae) {
                        return _0x3be186[wanzikun_0x5222("0x6f")](_0x19861d, _0x39b1ae);
                    }
                };
                if (_0x3be186[wanzikun_0x5222("0x70")](_0x17cba5[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x46")], 0)) {
                    if (_0x3be186["qYGCt"] === _0x3be186[wanzikun_0x5222("0x71")]) {
                        _0x3a39e5[wanzikun_0x5222("0x14")]({
                            curAddressData: _0x17cba5[wanzikun_0x5222("0x7")]["data"]
                        });
                    } else {
                        var _0x5cdabc = {
                            mJomd: function mJomd(_0x31f1ef, _0x1e67e0) {
                                return _0x31f1ef <= _0x1e67e0;
                            }
                        };
                        if (_0x2e841d["rUSEC"](_0x17cba5[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x46")], 0)) {
                            var _0x4153e8 = _0x17cba5["data"][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x72")](function(_0x3b32a5) {
                                return _0x5cdabc[wanzikun_0x5222("0x73")](_0x3b32a5["moneyHreshold"], _0x3a39e5[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x74")]);
                            });
                            if (_0x2e841d[wanzikun_0x5222("0x75")](_0x4153e8[wanzikun_0x5222("0x76")], 0)) {
                                _0x3a39e5[wanzikun_0x5222("0x14")]({
                                    hasNoCoupons: ![],
                                    coupons: _0x4153e8
                                });
                            }
                        }
                    }
                } else {
                    _0x3a39e5[wanzikun_0x5222("0x14")]({
                        curAddressData: null
                    });
                }
                _0x3a39e5[wanzikun_0x5222("0x77")]();
            }
        });
    },
    processYunfei: function processYunfei() {
        var _0x129b81 = {
            ICTSs: function ICTSs(_0x3e8f31, _0x41176c) {
                return _0x3e8f31 < _0x41176c;
            },
            TqhqF: function TqhqF(_0x21af22, _0x2de2b7) {
                return _0x21af22 * _0x2de2b7;
            },
            Ixbvc: function Ixbvc(_0xc7c585, _0x532a2b) {
                return _0xc7c585 > _0x532a2b;
            },
            IarMM: function IarMM(_0x2d22f2, _0x40ba0a) {
                return _0x2d22f2 + _0x40ba0a;
            },
            FqkiN: wanzikun_0x5222("0x78"),
            gJleS: function gJleS(_0x28ef31, _0x4678d2) {
                return _0x28ef31 + _0x4678d2;
            },
            nyzGR: function nyzGR(_0x53c18e, _0x164098) {
                return _0x53c18e + _0x164098;
            },
            upxbI: function upxbI(_0x9c9d2, _0x3975ae) {
                return _0x9c9d2 + _0x3975ae;
            },
            OYPyg: function OYPyg(_0x4233f6, _0x46021f) {
                return _0x4233f6 + _0x46021f;
            },
            hPAul: function hPAul(_0x1cfe24, _0x1a63d9) {
                return _0x1cfe24 + _0x1a63d9;
            },
            UpkZP: wanzikun_0x5222("0x79"),
            tgDmL: wanzikun_0x5222("0x7a"),
            kSmHl: wanzikun_0x5222("0x7b"),
            UnuOw: wanzikun_0x5222("0x7c")
        };
        var _0x22ac47 = this;
        var _0x448ce8 = this[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7d")];
        var _0x1a5d04 = "[";
        var _0x5ead02 = 0;
        var _0x31e009 = 0;
        for (var _0x5122c1 = 0; _0x129b81[wanzikun_0x5222("0x7e")](_0x5122c1, _0x448ce8[wanzikun_0x5222("0x76")]); _0x5122c1++) {
            var _0x50181b = _0x448ce8[_0x5122c1];
            if (_0x50181b[wanzikun_0x5222("0x7f")]) {
                _0x5ead02 = 1;
            }
            _0x31e009 += _0x129b81["TqhqF"](_0x50181b[wanzikun_0x5222("0x80")], _0x50181b["number"]);
            var _0x36de11 = "";
            if (_0x129b81[wanzikun_0x5222("0x81")](_0x5122c1, 0)) {
                _0x36de11 = ",";
            }
            var _0xcfe5d5 = 0;
            var _0x535725 = wx[wanzikun_0x5222("0x9")](_0x129b81[wanzikun_0x5222("0x82")](_0x129b81[wanzikun_0x5222("0x83")], _0x50181b[wanzikun_0x5222("0x84")]));
            if (_0x535725) {
                _0xcfe5d5 = _0x535725;
            }
            _0x36de11 += _0x129b81[wanzikun_0x5222("0x82")](_0x129b81[wanzikun_0x5222("0x85")](_0x129b81[wanzikun_0x5222("0x86")](_0x129b81[wanzikun_0x5222("0x87")](_0x129b81[wanzikun_0x5222("0x88")](_0x129b81[wanzikun_0x5222("0x88")](_0x129b81[wanzikun_0x5222("0x89")](_0x129b81[wanzikun_0x5222("0x8a")], _0x50181b[wanzikun_0x5222("0x84")]), _0x129b81[wanzikun_0x5222("0x8b")]), _0x50181b[wanzikun_0x5222("0x8c")]), _0x129b81[wanzikun_0x5222("0x8d")]), _0x50181b[wanzikun_0x5222("0x8e")]), _0x129b81[wanzikun_0x5222("0x8f")]) + _0xcfe5d5, "}");
            _0x1a5d04 += _0x36de11;
        }
        _0x1a5d04 += "]";
        _0x22ac47["setData"]({
            isNeedLogistics: _0x5ead02,
            goodsJsonStr: _0x1a5d04
        });
        _0x22ac47[wanzikun_0x5222("0x90")]();
    },
    addAddress: function addAddress() {
        var _0x490448 = {
            hrtrv: wanzikun_0x5222("0x91")
        };
        wx[wanzikun_0x5222("0x1f")]({
            url: _0x490448[wanzikun_0x5222("0x92")]
        });
    },
    selectAddress: function selectAddress() {
        var _0x5b2811 = {
            Ixose: wanzikun_0x5222("0x19")
        };
        wx[wanzikun_0x5222("0x1f")]({
            url: _0x5b2811[wanzikun_0x5222("0x93")]
        });
    },
    getMyCoupons: function getMyCoupons() {
        var _0x1d550a = {
            DaUci: function DaUci(_0x35b3ff, _0x7e152f) {
                return _0x35b3ff <= _0x7e152f;
            },
            ylxUR: function ylxUR(_0x14e45d, _0x593cd8) {
                return _0x14e45d !== _0x593cd8;
            },
            uCCqu: wanzikun_0x5222("0x94"),
            ZAlOC: function ZAlOC(_0x3966c8, _0x279150) {
                return _0x3966c8 == _0x279150;
            },
            saqHd: function saqHd(_0x331017, _0x24b8c9) {
                return _0x331017 > _0x24b8c9;
            },
            hhfta: function hhfta(_0x1ef7cb, _0x556b48) {
                return _0x1ef7cb === _0x556b48;
            },
            OwVxT: wanzikun_0x5222("0x95"),
            qJzDA: wanzikun_0x5222("0x96")
        };
        var _0x329f42 = this;
        wx[wanzikun_0x5222("0x4a")]({
            url: wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")]["urls"] + _0x1d550a["qJzDA"],
            data: {
                token: wanzikun_0x2ec3dd[wanzikun_0x5222("0x30")][wanzikun_0x5222("0x31")],
                status: 0
            },
            success: function success(_0x3dc440) {
                if (_0x1d550a[wanzikun_0x5222("0x97")](_0x1d550a["uCCqu"], "DKFPW")) {
                    orderType = e["orderType"];
                } else {
                    if (_0x1d550a[wanzikun_0x5222("0x98")](_0x3dc440[wanzikun_0x5222("0x7")]["code"], 0)) {
                        var _0x5006cd = _0x3dc440[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x7")][wanzikun_0x5222("0x72")](function(_0x13f172) {
                            return _0x1d550a[wanzikun_0x5222("0x99")](_0x13f172[wanzikun_0x5222("0x9a")], _0x329f42[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x74")]);
                        });
                        if (_0x1d550a[wanzikun_0x5222("0x9b")](_0x5006cd[wanzikun_0x5222("0x76")], 0)) {
                            if (_0x1d550a[wanzikun_0x5222("0x9c")](_0x1d550a["OwVxT"], "RAhqp")) {
                                postData[wanzikun_0x5222("0x9d")] = _0x329f42[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x47")]["id"];
                            } else {
                                _0x329f42[wanzikun_0x5222("0x14")]({
                                    hasNoCoupons: ![],
                                    coupons: _0x5006cd
                                });
                            }
                        }
                    }
                }
            }
        });
    },
    bindChangeCoupon: function bindChangeCoupon(_0xd000c2) {
        var _0x506415 = {
            Lulzo: function Lulzo(_0x3c8e4f, _0x3f90ad) {
                return _0x3c8e4f - _0x3f90ad;
            },
            Fzarp: function Fzarp(_0x458d8f, _0x38b06a) {
                return _0x458d8f == _0x38b06a;
            }
        };
        var _0x30cfa4 = _0x506415[wanzikun_0x5222("0x9e")](_0xd000c2[wanzikun_0x5222("0x33")]["value"][0], 1);
        if (_0x506415[wanzikun_0x5222("0x9f")](_0x30cfa4, -1)) {
            this[wanzikun_0x5222("0x14")]({
                youhuijine: 0,
                curCoupon: null
            });
            return;
        }
        this[wanzikun_0x5222("0x14")]({
            youhuijine: this["data"]["coupons"][_0x30cfa4][wanzikun_0x5222("0x37")],
            curCoupon: this[wanzikun_0x5222("0x7")][wanzikun_0x5222("0x36")][_0x30cfa4]
        });
    }
});