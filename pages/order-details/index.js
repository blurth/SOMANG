var wanzikun_0x1ee7 = [ "keyword1", "orderDetail", "KzBhL", "zLHag", "order_reputation_score", "aygNq", "cDfXb", "sendTempleMsgImmediately", "siteInfo", "assessorderkey", "/pages/order-details/index?id=", "stringify", "感谢您的评价，期待您的再次光临！", "积分奖励已发放至您的账户。", "jBLCG", "goodReputation", "goodReputationRemark", "value", "Jhodf", "Wbyxb", "oslLs", "VmjSK", "zWfhw", "hAiyK", "reputation", "remark", "push", "reputations", "UImdA", "orderInfo", "orderNumber", "sxsTE", "Xieei", "HoxaH", "UqJRV", "successorderkey", "MViiQ", "keyword2", "UOter", "DPOOP", "0.00", "data", "orderId", "setData", "4|7|3|6|2|1|5|0", "/order/detail", "iNAvJ", "split", "goodsList", "request", "AefGR", "globalData", "token", "hideLoading", "TTyFM", "code", "showModal", "SoHeD", "length", "LBYWU", "DLlZE", "price", "number", "yunPrice", "currentTarget", "navigateTo", "/pages/wuliu/index?id=", "rvJWH", "#173177", "立即好评，系统赠送您", "积分奖励。", "RMknj", "/order/delivery", "确认您已收到商品？", "detail", "formId", "pLQad", "cVpBx", "lvRTk", "jWILb", "kiRkM", "WrGui", "confirm", "HHRtF", "rSzee", "MfRNN", "khlHP", "showLoading", "Fnoun", "urls", "okkxW", "JRbWo", "MkFMp", "onShow" ];

(function(_0x4b95f7, _0x5a7458) {
    var _0x2f85ce = function _0x2f85ce(_0x7d1e28) {
        while (--_0x7d1e28) {
            _0x4b95f7["push"](_0x4b95f7["shift"]());
        }
    };
    _0x2f85ce(++_0x5a7458);
})(wanzikun_0x1ee7, 416);

var wanzikun_0x54b0 = function wanzikun_0x54b0(_0x1ffa87, _0x339864) {
    _0x1ffa87 = _0x1ffa87 - 0;
    var _0x23be09 = wanzikun_0x1ee7[_0x1ffa87];
    return _0x23be09;
};

var wanzikun_0x3e2171 = getApp();

Page({
    data: {
        orderId: 0,
        goodsList: [],
        yunPrice: wanzikun_0x54b0("0x0")
    },
    onLoad: function onLoad(_0x354856) {
        var _0x54a7b0 = _0x354856["id"];
        this[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x2")] = _0x54a7b0;
        this[wanzikun_0x54b0("0x3")]({
            orderId: _0x54a7b0
        });
    },
    onShow: function onShow() {
        var _0x1d0854 = {
            iNAvJ: wanzikun_0x54b0("0x4"),
            AefGR: function AefGR(_0x1e254e, _0xb5766e) {
                return _0x1e254e + _0xb5766e;
            },
            pLZNg: wanzikun_0x54b0("0x5"),
            SoHeD: function SoHeD(_0x3d6519, _0x33398f) {
                return _0x3d6519 < _0x33398f;
            },
            LBYWU: function LBYWU(_0x4ebe8c, _0x3a195e) {
                return _0x4ebe8c * _0x3a195e;
            },
            DLlZE: function DLlZE(_0x4d6104, _0xf87b8b) {
                return _0x4d6104(_0xf87b8b);
            }
        };
        var _0x1653a2 = _0x1d0854[wanzikun_0x54b0("0x6")][wanzikun_0x54b0("0x7")]("|"), _0x15fca3 = 0;
        while (!![]) {
            switch (_0x1653a2[_0x15fca3++]) {
              case "0":
                this[wanzikun_0x54b0("0x3")]({
                    allGoodsPrice: _0x70b831,
                    yunPrice: _0x2bf259
                });
                continue;

              case "1":
                var _0x240ea4 = this[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x8")];
                continue;

              case "2":
                var _0x70b831 = 0;
                continue;

              case "3":
                wx[wanzikun_0x54b0("0x9")]({
                    url: _0x1d0854[wanzikun_0x54b0("0xa")](wanzikun_0x3e2171[wanzikun_0x54b0("0xb")]["urls"], _0x1d0854["pLZNg"]),
                    data: {
                        token: wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0xc")],
                        id: _0x148329[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x2")]
                    },
                    success: function success(_0x2d22bb) {
                        wx[wanzikun_0x54b0("0xd")]();
                        if (_0xf85e8b[wanzikun_0x54b0("0xe")](_0x2d22bb[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0xf")], 0)) {
                            wx[wanzikun_0x54b0("0x10")]({
                                title: "错误",
                                content: _0x2d22bb[wanzikun_0x54b0("0x1")]["msg"],
                                showCancel: ![]
                            });
                            return;
                        }
                        _0x148329[wanzikun_0x54b0("0x3")]({
                            orderDetail: _0x2d22bb[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x1")]
                        });
                    }
                });
                continue;

              case "4":
                var _0xf85e8b = {
                    TTyFM: function TTyFM(_0x19da02, _0x1c1128) {
                        return _0x19da02 != _0x1c1128;
                    }
                };
                continue;

              case "5":
                for (var _0x492459 = 0; _0x1d0854[wanzikun_0x54b0("0x11")](_0x492459, _0x240ea4[wanzikun_0x54b0("0x12")]); _0x492459++) {
                    _0x70b831 += _0x1d0854[wanzikun_0x54b0("0x13")](_0x1d0854[wanzikun_0x54b0("0x14")](parseFloat, _0x240ea4[0][wanzikun_0x54b0("0x15")]), _0x240ea4[0][wanzikun_0x54b0("0x16")]);
                }
                continue;

              case "6":
                var _0x2bf259 = _0x1d0854[wanzikun_0x54b0("0x14")](parseFloat, this["data"][wanzikun_0x54b0("0x17")]);
                continue;

              case "7":
                var _0x148329 = this;
                continue;
            }
            break;
        }
    },
    wuliuDetailsTap: function wuliuDetailsTap(_0x1a62dc) {
        var _0x19655b = {
            ofOVb: function ofOVb(_0x503ab5, _0x1cf950) {
                return _0x503ab5 + _0x1cf950;
            }
        };
        var _0x17327f = _0x1a62dc[wanzikun_0x54b0("0x18")]["dataset"]["id"];
        wx[wanzikun_0x54b0("0x19")]({
            url: _0x19655b["ofOVb"](wanzikun_0x54b0("0x1a"), _0x17327f)
        });
    },
    confirmBtnTap: function confirmBtnTap(_0x24d7dc) {
        var _0x45779d = {
            khlHP: function khlHP(_0x5eb057, _0x25f5eb) {
                return _0x5eb057 != _0x25f5eb;
            },
            cVpBx: wanzikun_0x54b0("0x1b"),
            lvRTk: function lvRTk(_0x105a54, _0xc5fec0) {
                return _0x105a54 == _0xc5fec0;
            },
            jWILb: wanzikun_0x54b0("0x1c"),
            IDELa: "您已确认收货，期待您的再次光临！",
            AorIQ: function AorIQ(_0x5aca90, _0x5cf5e3) {
                return _0x5aca90 + _0x5cf5e3;
            },
            kiRkM: wanzikun_0x54b0("0x1d"),
            WrGui: wanzikun_0x54b0("0x1e"),
            HHRtF: function HHRtF(_0x4cef52, _0x283004) {
                return _0x4cef52 === _0x283004;
            },
            rSzee: wanzikun_0x54b0("0x1f"),
            MfRNN: "WWRWb",
            Fnoun: function Fnoun(_0x4676c2, _0x4091cc) {
                return _0x4676c2 + _0x4091cc;
            },
            okkxW: wanzikun_0x54b0("0x20"),
            pLQad: wanzikun_0x54b0("0x21")
        };
        var _0x22d5e4 = this;
        var _0x2abd43 = this[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x2")];
        var _0x391958 = _0x24d7dc[wanzikun_0x54b0("0x22")][wanzikun_0x54b0("0x23")];
        wx[wanzikun_0x54b0("0x10")]({
            title: _0x45779d[wanzikun_0x54b0("0x24")],
            content: "",
            success: function success(_0x1e8631) {
                var _this = this;
                var _0x237ecb = {
                    JRbWo: function JRbWo(_0x1fe05f, _0x59ab0f) {
                        return _0x1fe05f !== _0x59ab0f;
                    },
                    MkFMp: _0x45779d[wanzikun_0x54b0("0x25")],
                    jQmWH: function jQmWH(_0x160d59, _0x3e23cc) {
                        return _0x45779d[wanzikun_0x54b0("0x26")](_0x160d59, _0x3e23cc);
                    },
                    KzBhL: _0x45779d[wanzikun_0x54b0("0x27")],
                    zLHag: _0x45779d["IDELa"],
                    aygNq: function aygNq(_0x13ee28, _0x4088c0) {
                        return _0x45779d["AorIQ"](_0x13ee28, _0x4088c0);
                    },
                    YVvHk: _0x45779d[wanzikun_0x54b0("0x28")],
                    cDfXb: _0x45779d[wanzikun_0x54b0("0x29")]
                };
                if (_0x1e8631[wanzikun_0x54b0("0x2a")]) {
                    if (_0x45779d[wanzikun_0x54b0("0x2b")](_0x45779d[wanzikun_0x54b0("0x2c")], _0x45779d[wanzikun_0x54b0("0x2d")])) {
                        wx["hideLoading"]();
                        if (_0x45779d[wanzikun_0x54b0("0x2e")](_0x1e8631["data"][wanzikun_0x54b0("0xf")], 0)) {
                            wx[wanzikun_0x54b0("0x10")]({
                                title: "错误",
                                content: _0x1e8631[wanzikun_0x54b0("0x1")]["msg"],
                                showCancel: ![]
                            });
                            return;
                        }
                        _0x22d5e4[wanzikun_0x54b0("0x3")]({
                            orderDetail: _0x1e8631[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x1")]
                        });
                    } else {
                        wx[wanzikun_0x54b0("0x2f")]();
                        wx[wanzikun_0x54b0("0x9")]({
                            url: _0x45779d[wanzikun_0x54b0("0x30")](wanzikun_0x3e2171["globalData"][wanzikun_0x54b0("0x31")], _0x45779d[wanzikun_0x54b0("0x32")]),
                            data: {
                                token: wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0xc")],
                                orderId: _0x2abd43
                            },
                            success: function success(_0x1e8631) {
                                if (_0x237ecb[wanzikun_0x54b0("0x33")](wanzikun_0x54b0("0x1b"), _0x237ecb[wanzikun_0x54b0("0x34")])) {
                                    var _0x18aafc = _0x24d7dc["id"];
                                    _this[wanzikun_0x54b0("0x1")]["orderId"] = _0x18aafc;
                                    _this["setData"]({
                                        orderId: _0x18aafc
                                    });
                                } else {
                                    if (_0x237ecb["jQmWH"](_0x1e8631["data"][wanzikun_0x54b0("0xf")], 0)) {
                                        _0x22d5e4[wanzikun_0x54b0("0x35")]();
                                        var _0x8e9dfa = {};
                                        _0x8e9dfa[wanzikun_0x54b0("0x36")] = {
                                            value: _0x22d5e4[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x37")]["orderInfo"]["orderNumber"],
                                            color: _0x237ecb[wanzikun_0x54b0("0x38")]
                                        };
                                        var _0x180b4d = _0x237ecb[wanzikun_0x54b0("0x39")];
                                        if (wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x3a")]) {
                                            _0x180b4d += _0x237ecb[wanzikun_0x54b0("0x3b")](_0x237ecb[wanzikun_0x54b0("0x3b")](_0x237ecb["YVvHk"], wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x3a")]), _0x237ecb[wanzikun_0x54b0("0x3c")]);
                                        }
                                        _0x8e9dfa["keyword2"] = {
                                            value: _0x180b4d,
                                            color: _0x237ecb[wanzikun_0x54b0("0x38")]
                                        };
                                        wanzikun_0x3e2171[wanzikun_0x54b0("0x3d")](wanzikun_0x3e2171[wanzikun_0x54b0("0x3e")][wanzikun_0x54b0("0x3f")], _0x391958, _0x237ecb[wanzikun_0x54b0("0x3b")](wanzikun_0x54b0("0x40"), _0x2abd43), JSON[wanzikun_0x54b0("0x41")](_0x8e9dfa));
                                    }
                                }
                            }
                        });
                    }
                }
            }
        });
    },
    submitReputation: function submitReputation(_0x310f0a) {
        var _0x48fb69 = {
            Xieei: wanzikun_0x54b0("0x1c"),
            HoxaH: wanzikun_0x54b0("0x42"),
            ekOSy: function ekOSy(_0x4ba298, _0x4972b1) {
                return _0x4ba298 + _0x4972b1;
            },
            UqJRV: wanzikun_0x54b0("0x43"),
            MViiQ: function MViiQ(_0x11d3c0, _0x48d571) {
                return _0x11d3c0 + _0x48d571;
            },
            mFbAa: function mFbAa(_0x31b6b2, _0x3e232b) {
                return _0x31b6b2 == _0x3e232b;
            },
            sxsTE: wanzikun_0x54b0("0x44"),
            UOter: function UOter(_0x5da491, _0x3f01ba) {
                return _0x5da491 + _0x3f01ba;
            },
            DPOOP: wanzikun_0x54b0("0x40"),
            Jhodf: function Jhodf(_0x4f910c, _0x39969c) {
                return _0x4f910c + _0x39969c;
            },
            oslLs: "orderGoodsId",
            Wbyxb: function Wbyxb(_0x130b2b, _0x43e6df) {
                return _0x130b2b + _0x43e6df;
            },
            VmjSK: function VmjSK(_0x4b4c6b, _0x1b948e) {
                return _0x4b4c6b + _0x1b948e;
            },
            zWfhw: wanzikun_0x54b0("0x45"),
            HvKmu: function HvKmu(_0x4a73f3, _0x48ada2) {
                return _0x4a73f3 + _0x48ada2;
            },
            hAiyK: wanzikun_0x54b0("0x46"),
            PPXfz: function PPXfz(_0x55030d, _0x45fdb2) {
                return _0x55030d + _0x45fdb2;
            },
            UImdA: "/order/reputation"
        };
        var _0x3e11e1 = this;
        var _0x37b36c = _0x310f0a[wanzikun_0x54b0("0x22")]["formId"];
        var _0x4bb0e6 = {};
        _0x4bb0e6["token"] = wanzikun_0x3e2171["globalData"][wanzikun_0x54b0("0xc")];
        _0x4bb0e6[wanzikun_0x54b0("0x2")] = this[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x2")];
        var _0x11c8e3 = [];
        var _0x370f49 = 0;
        while (_0x310f0a[wanzikun_0x54b0("0x22")][wanzikun_0x54b0("0x47")][_0x48fb69[wanzikun_0x54b0("0x48")](_0x48fb69["oslLs"], _0x370f49)]) {
            var _0x4a78d0 = _0x310f0a["detail"][wanzikun_0x54b0("0x47")][_0x48fb69[wanzikun_0x54b0("0x49")](_0x48fb69[wanzikun_0x54b0("0x4a")], _0x370f49)];
            var _0x5c2d5b = _0x310f0a[wanzikun_0x54b0("0x22")][wanzikun_0x54b0("0x47")][_0x48fb69[wanzikun_0x54b0("0x4b")](_0x48fb69[wanzikun_0x54b0("0x4c")], _0x370f49)];
            var _0x44f688 = _0x310f0a[wanzikun_0x54b0("0x22")]["value"][_0x48fb69["HvKmu"](_0x48fb69[wanzikun_0x54b0("0x4d")], _0x370f49)];
            var _0xb61a5b = {};
            _0xb61a5b["id"] = _0x4a78d0;
            _0xb61a5b[wanzikun_0x54b0("0x4e")] = _0x5c2d5b;
            _0xb61a5b[wanzikun_0x54b0("0x4f")] = _0x44f688;
            _0x11c8e3[wanzikun_0x54b0("0x50")](_0xb61a5b);
            _0x370f49++;
        }
        _0x4bb0e6[wanzikun_0x54b0("0x51")] = _0x11c8e3;
        wx[wanzikun_0x54b0("0x2f")]();
        wx[wanzikun_0x54b0("0x9")]({
            url: _0x48fb69["PPXfz"](wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x31")], _0x48fb69[wanzikun_0x54b0("0x52")]),
            data: {
                postJsonString: _0x4bb0e6
            },
            success: function success(_0xa7fe08) {
                wx[wanzikun_0x54b0("0xd")]();
                if (_0x48fb69["mFbAa"](_0xa7fe08[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0xf")], 0)) {
                    _0x3e11e1[wanzikun_0x54b0("0x35")]();
                    var _0x4bb0e = {};
                    _0x4bb0e["keyword1"] = {
                        value: _0x3e11e1[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x37")][wanzikun_0x54b0("0x53")][wanzikun_0x54b0("0x54")],
                        color: _0x48fb69["Xieei"]
                    };
                    var _0x2ff4c5 = "感谢您的评价，期待您的再次光临！";
                    if (wanzikun_0x3e2171["globalData"][wanzikun_0x54b0("0x3a")]) {
                        if (_0x48fb69[wanzikun_0x54b0("0x55")] === wanzikun_0x54b0("0x44")) {
                            _0x2ff4c5 += _0x48fb69["MViiQ"](wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x3a")], wanzikun_0x54b0("0x43"));
                        } else {
                            _0x3e11e1["onShow"]();
                            var _0x5d742e = {};
                            _0x5d742e[wanzikun_0x54b0("0x36")] = {
                                value: _0x3e11e1[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x37")][wanzikun_0x54b0("0x53")][wanzikun_0x54b0("0x54")],
                                color: _0x48fb69[wanzikun_0x54b0("0x56")]
                            };
                            var _0x2c4aae = _0x48fb69[wanzikun_0x54b0("0x57")];
                            if (wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x3a")]) {
                                _0x2c4aae += _0x48fb69["ekOSy"](wanzikun_0x3e2171[wanzikun_0x54b0("0xb")][wanzikun_0x54b0("0x3a")], _0x48fb69[wanzikun_0x54b0("0x58")]);
                            }
                            _0x5d742e["keyword2"] = {
                                value: _0x2c4aae,
                                color: _0x48fb69[wanzikun_0x54b0("0x56")]
                            };
                            wanzikun_0x3e2171[wanzikun_0x54b0("0x3d")](wanzikun_0x3e2171["siteInfo"][wanzikun_0x54b0("0x59")], _0x37b36c, _0x48fb69[wanzikun_0x54b0("0x5a")](wanzikun_0x54b0("0x40"), _0x3e11e1[wanzikun_0x54b0("0x1")][wanzikun_0x54b0("0x2")]), JSON[wanzikun_0x54b0("0x41")](_0x5d742e));
                        }
                    }
                    _0x4bb0e[wanzikun_0x54b0("0x5b")] = {
                        value: _0x2ff4c5,
                        color: wanzikun_0x54b0("0x1c")
                    };
                    wanzikun_0x3e2171[wanzikun_0x54b0("0x3d")](wanzikun_0x3e2171[wanzikun_0x54b0("0x3e")][wanzikun_0x54b0("0x59")], _0x37b36c, _0x48fb69[wanzikun_0x54b0("0x5c")](_0x48fb69[wanzikun_0x54b0("0x5d")], _0x3e11e1["data"][wanzikun_0x54b0("0x2")]), JSON[wanzikun_0x54b0("0x41")](_0x4bb0e));
                }
            }
        });
    }
});