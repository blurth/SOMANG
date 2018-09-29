var wanzikun_0x1d26 = [ "gPiid", "YxaAj", "BvsoC", "QdXja", "/order/list", "AKLIT", "KTQrl", "CEDnj", "qvqAq", "待发货", "待收货", "待评价", "已完成", "nYbVF", "WgBCk", "currentType", "ISFNe", "HHsqn", "setData", "currentTarget", "dataset", "index", "vnTOi", "NiNXb", "ccikd", "MlUvp", "data", "navigateTo", "BxvAG", "/pages/order-details/index?id=", "jeQsl", "确定要取消该订单吗？", "showModal", "QYEWE", "qYsmc", "iiBKM", "idtpE", "qhjag", "AgnKt", "bJvMf", "EjZEu", "balance", "iDyzj", "request", "kQjzp", "FnKWj", "application/x-www-form-urlencoded", "globalData", "token", "reLaunch", "/pages/my/index", "showLoading", "YSfjw", "AKXdU", "code", "HSdtP", "5|2|1|0|3|4", "XXQGe", "/order/pay", "POST", "money", "urls", "/user/amount", "kQmHo", "HzRAd", "hDXBB", "UQwNg", "XfeBM", "hideLoading", "goodsMap", "JLBSn", "sreMu", "srYMZ", "tiEki", "gxlJR", "wFvpX", "BNNdq", "JvjwB", "split", "status", "getOrderStatistics", "whiAf", "aUXzj", "BBtav", "orderList", "logisticsMap", "无法获取用户资金信息", "statusTap", "csJSe", "EMljy", "PRXoB", "uoGHv", "/order/statistics", "tnYuH", "HsMOZ", "CeBku", "cRnvh", "count_id_no_transfer", "EoOzF", "MYSOu", "KmSSM", "confirm", "HcFBd", "Azxpl", "JQUsX", "red-dot" ];

(function(_0x22b5fb, _0x116a41) {
    var _0x43fb75 = function _0x43fb75(_0x47f957) {
        while (--_0x47f957) {
            _0x22b5fb["push"](_0x22b5fb["shift"]());
        }
    };
    _0x43fb75(++_0x116a41);
})(wanzikun_0x1d26, 221);

var wanzikun_0x4f99 = function wanzikun_0x4f99(_0x491cfd, _0x2c41f3) {
    _0x491cfd = _0x491cfd - 0;
    var _0x141e3b = wanzikun_0x1d26[_0x491cfd];
    return _0x141e3b;
};

var wanzikun_0x3aacdc = require("../../utils/pay.js");

var wanzikun_0x5177be = getApp();

Page({
    data: {
        statusType: [ "待付款", wanzikun_0x4f99("0x0"), wanzikun_0x4f99("0x1"), wanzikun_0x4f99("0x2"), wanzikun_0x4f99("0x3") ],
        currentType: 0,
        tabClass: [ "", "", "", "", "" ]
    },
    statusTap: function statusTap(_0x5c871f) {
        var _0x1bf56f = {
            ISFNe: function ISFNe(_0x315ded, _0x19ad9c) {
                return _0x315ded !== _0x19ad9c;
            },
            HHsqn: "mloVu",
            vnTOi: function vnTOi(_0x130022, _0x739408) {
                return _0x130022 == _0x739408;
            },
            NiNXb: wanzikun_0x4f99("0x4"),
            ccikd: function ccikd(_0x32e21e, _0x5c645c) {
                return _0x32e21e === _0x5c645c;
            },
            MlUvp: wanzikun_0x4f99("0x5")
        };
        if (_0x5c871f[wanzikun_0x4f99("0x6")]) {
            var _0x4ef5fa = _0x5c871f[wanzikun_0x4f99("0x6")];
        } else {
            if (_0x1bf56f[wanzikun_0x4f99("0x7")](_0x1bf56f[wanzikun_0x4f99("0x8")], _0x1bf56f[wanzikun_0x4f99("0x8")])) {
                this[wanzikun_0x4f99("0x9")]({
                    orderList: null,
                    logisticsMap: {},
                    goodsMap: {}
                });
            } else {
                var _0x4ef5fa = _0x5c871f[wanzikun_0x4f99("0xa")][wanzikun_0x4f99("0xb")][wanzikun_0x4f99("0xc")];
            }
        }
        var _0x3d160f = _0x5c871f;
        var _0x2d7919 = 0;
        for (var _0x4ae7e1 in _0x3d160f) {
            _0x2d7919++;
        }
        if (_0x1bf56f[wanzikun_0x4f99("0xd")](_0x2d7919, 0)) {
            if (_0x1bf56f[wanzikun_0x4f99("0xe")] === _0x1bf56f[wanzikun_0x4f99("0xe")]) {
                var _0x129419 = 0;
            } else {
                tabClass[3] = "";
            }
        } else {
            if (_0x1bf56f[wanzikun_0x4f99("0xf")](_0x1bf56f[wanzikun_0x4f99("0x10")], wanzikun_0x4f99("0x5"))) {
                var _0x129419 = _0x4ef5fa;
            } else {
                var _0x40eafd = _0x5c871f[wanzikun_0x4f99("0x6")];
            }
        }
        this[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x6")] = _0x129419;
        this[wanzikun_0x4f99("0x9")]({
            currentType: _0x129419
        });
        this["onShow"]();
    },
    orderDetail: function orderDetail(_0xf8c8fb) {
        var _0x5c323f = {
            BxvAG: function BxvAG(_0x877240, _0x2af763) {
                return _0x877240 + _0x2af763;
            }
        };
        var _0x399f56 = _0xf8c8fb[wanzikun_0x4f99("0xa")]["dataset"]["id"];
        wx[wanzikun_0x4f99("0x12")]({
            url: _0x5c323f[wanzikun_0x4f99("0x13")](wanzikun_0x4f99("0x14"), _0x399f56)
        });
    },
    cancelOrderTap: function cancelOrderTap(_0x247114) {
        var _0x29a4ee = {
            qYsmc: function qYsmc(_0x1e810f, _0x4f746a) {
                return _0x1e810f - _0x4f746a;
            },
            iiBKM: function iiBKM(_0x4afad2, _0x4531c3) {
                return _0x4afad2 <= _0x4531c3;
            },
            idtpE: function idtpE(_0x3ddb15, _0x2c48fc) {
                return _0x3ddb15 + _0x2c48fc;
            },
            qhjag: "POST",
            AgnKt: function AgnKt(_0x1b00db, _0x582ff3) {
                return _0x1b00db == _0x582ff3;
            },
            bJvMf: function bJvMf(_0x53267d, _0x4db051) {
                return _0x53267d !== _0x4db051;
            },
            EjZEu: wanzikun_0x4f99("0x15"),
            YSfjw: function YSfjw(_0x551c9a, _0x2b5067) {
                return _0x551c9a + _0x2b5067;
            },
            GqNTN: "/order/close",
            QYEWE: wanzikun_0x4f99("0x16")
        };
        var _0xaa6797 = this;
        var _0x46c483 = _0x247114["currentTarget"][wanzikun_0x4f99("0xb")]["id"];
        wx[wanzikun_0x4f99("0x17")]({
            title: _0x29a4ee[wanzikun_0x4f99("0x18")],
            content: "",
            success: function success(_0x290739) {
                var _0x31cdee = {
                    eyfjL: function eyfjL(_0x51f8ec, _0xa97eb3) {
                        return _0x29a4ee[wanzikun_0x4f99("0x19")](_0x51f8ec, _0xa97eb3);
                    },
                    iDyzj: function iDyzj(_0x649712, _0x2f307b) {
                        return _0x29a4ee[wanzikun_0x4f99("0x1a")](_0x649712, _0x2f307b);
                    },
                    LsSbI: function LsSbI(_0x190963, _0x37a465) {
                        return _0x29a4ee[wanzikun_0x4f99("0x1b")](_0x190963, _0x37a465);
                    },
                    kQjzp: "/order/pay",
                    FnKWj: _0x29a4ee[wanzikun_0x4f99("0x1c")],
                    AKXdU: function AKXdU(_0x3073b9, _0x576758) {
                        return _0x29a4ee[wanzikun_0x4f99("0x1d")](_0x3073b9, _0x576758);
                    }
                };
                if (_0x29a4ee[wanzikun_0x4f99("0x1e")](_0x29a4ee[wanzikun_0x4f99("0x1f")], _0x29a4ee[wanzikun_0x4f99("0x1f")])) {
                    money = _0x31cdee["eyfjL"](money, _0x290739[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x20")]);
                    if (_0x31cdee[wanzikun_0x4f99("0x21")](money, 0)) {
                        wx[wanzikun_0x4f99("0x22")]({
                            url: _0x31cdee["LsSbI"](wanzikun_0x5177be["globalData"]["urls"], _0x31cdee[wanzikun_0x4f99("0x23")]),
                            method: _0x31cdee[wanzikun_0x4f99("0x24")],
                            header: {
                                "content-type": wanzikun_0x4f99("0x25")
                            },
                            data: {
                                token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")],
                                orderId: _0x46c483
                            },
                            success: function success(_0x51f3b3) {
                                wx[wanzikun_0x4f99("0x28")]({
                                    url: "/pages/my/index"
                                });
                            }
                        });
                    } else {
                        wanzikun_0x3aacdc["wxpay"](wanzikun_0x5177be, money, _0x46c483, wanzikun_0x4f99("0x29"));
                    }
                } else {
                    if (_0x290739["confirm"]) {
                        wx[wanzikun_0x4f99("0x2a")]();
                        wx[wanzikun_0x4f99("0x22")]({
                            url: _0x29a4ee[wanzikun_0x4f99("0x2b")](wanzikun_0x5177be["globalData"]["urls"], _0x29a4ee["GqNTN"]),
                            data: {
                                token: wanzikun_0x5177be["globalData"][wanzikun_0x4f99("0x27")],
                                orderId: _0x46c483
                            },
                            success: function success(_0x290739) {
                                wx["hideLoading"]();
                                if (_0x31cdee[wanzikun_0x4f99("0x2c")](_0x290739["data"][wanzikun_0x4f99("0x2d")], 0)) {
                                    _0xaa6797["onShow"]();
                                }
                            }
                        });
                    }
                }
            }
        });
    },
    toPayTap: function toPayTap(_0x539439) {
        var _0x449736 = {
            hDXBB: function hDXBB(_0x1dae57, _0x3b7730) {
                return _0x1dae57 == _0x3b7730;
            },
            gxlJR: function gxlJR(_0x1d1ed7, _0x3a1374) {
                return _0x1d1ed7 === _0x3a1374;
            },
            wFvpX: wanzikun_0x4f99("0x2e"),
            BNNdq: wanzikun_0x4f99("0x29"),
            kQmHo: wanzikun_0x4f99("0x2f"),
            HzRAd: "/order/list",
            UQwNg: function UQwNg(_0xf82428, _0x5a5809) {
                return _0xf82428 - _0x5a5809;
            },
            nTeJT: function nTeJT(_0x1be68d, _0x5aed7e) {
                return _0x1be68d <= _0x5aed7e;
            },
            XfeBM: function XfeBM(_0x4e2e57, _0x289978) {
                return _0x4e2e57 !== _0x289978;
            },
            eFZVc: wanzikun_0x4f99("0x30"),
            JLBSn: function JLBSn(_0x258c3e, _0x19871f) {
                return _0x258c3e + _0x19871f;
            },
            sreMu: wanzikun_0x4f99("0x31"),
            srYMZ: wanzikun_0x4f99("0x32"),
            tiEki: wanzikun_0x4f99("0x25")
        };
        var _0x1b9e6e = this;
        var _0x13c669 = _0x539439[wanzikun_0x4f99("0xa")][wanzikun_0x4f99("0xb")]["id"];
        var _0x2b380d = _0x539439[wanzikun_0x4f99("0xa")][wanzikun_0x4f99("0xb")][wanzikun_0x4f99("0x33")];
        wx["request"]({
            url: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x34")] + wanzikun_0x4f99("0x35"),
            data: {
                token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")]
            },
            success: function success(_0x4742ee) {
                var _0x4ababd = {
                    XVbAX: function XVbAX(_0xcaf2c5, _0x41d28e) {
                        return _0x449736["hDXBB"](_0xcaf2c5, _0x41d28e);
                    },
                    JvjwB: _0x449736[wanzikun_0x4f99("0x36")],
                    whiAf: function whiAf(_0x4df80f, _0x26dd78) {
                        return _0x4df80f + _0x26dd78;
                    },
                    aUXzj: _0x449736[wanzikun_0x4f99("0x37")]
                };
                if (_0x449736[wanzikun_0x4f99("0x38")](_0x4742ee[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x2d")], 0)) {
                    _0x2b380d = _0x449736[wanzikun_0x4f99("0x39")](_0x2b380d, _0x4742ee[wanzikun_0x4f99("0x11")]["data"]["balance"]);
                    if (_0x449736["nTeJT"](_0x2b380d, 0)) {
                        if (_0x449736[wanzikun_0x4f99("0x3a")](_0x449736["eFZVc"], wanzikun_0x4f99("0x30"))) {
                            wx[wanzikun_0x4f99("0x3b")]();
                            if (_0x4ababd["XVbAX"](_0x4742ee[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x2d")], 0)) {
                                _0x1b9e6e[wanzikun_0x4f99("0x9")]({
                                    orderList: _0x4742ee["data"][wanzikun_0x4f99("0x11")]["orderList"],
                                    logisticsMap: _0x4742ee[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x11")]["logisticsMap"],
                                    goodsMap: _0x4742ee["data"]["data"][wanzikun_0x4f99("0x3c")]
                                });
                            } else {
                                this[wanzikun_0x4f99("0x9")]({
                                    orderList: null,
                                    logisticsMap: {},
                                    goodsMap: {}
                                });
                            }
                        } else {
                            wx[wanzikun_0x4f99("0x22")]({
                                url: _0x449736[wanzikun_0x4f99("0x3d")](wanzikun_0x5177be[wanzikun_0x4f99("0x26")]["urls"], _0x449736[wanzikun_0x4f99("0x3e")]),
                                method: _0x449736[wanzikun_0x4f99("0x3f")],
                                header: {
                                    "content-type": _0x449736[wanzikun_0x4f99("0x40")]
                                },
                                data: {
                                    token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")],
                                    orderId: _0x13c669
                                },
                                success: function success(_0x25929d) {
                                    var _this = this;
                                    var _0xd76f91 = {
                                        BBtav: function BBtav(_0xa532b6, _0x8013db) {
                                            return _0x449736[wanzikun_0x4f99("0x38")](_0xa532b6, _0x8013db);
                                        }
                                    };
                                    if (_0x449736[wanzikun_0x4f99("0x41")](_0x449736[wanzikun_0x4f99("0x42")], _0x449736[wanzikun_0x4f99("0x42")])) {
                                        wx[wanzikun_0x4f99("0x28")]({
                                            url: _0x449736[wanzikun_0x4f99("0x43")]
                                        });
                                    } else {
                                        var _0x18c4c8 = _0x4ababd[wanzikun_0x4f99("0x44")][wanzikun_0x4f99("0x45")]("|"), _0x5eb10e = 0;
                                        while (!![]) {
                                            switch (_0x18c4c8[_0x5eb10e++]) {
                                              case "0":
                                                _0x494406[wanzikun_0x4f99("0x46")] = _0x22900e[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x6")];
                                                continue;

                                              case "1":
                                                var _0x494406 = {
                                                    token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")]
                                                };
                                                continue;

                                              case "2":
                                                var _0x22900e = this;
                                                continue;

                                              case "3":
                                                this[wanzikun_0x4f99("0x47")]();
                                                continue;

                                              case "4":
                                                wx["request"]({
                                                    url: _0x4ababd[wanzikun_0x4f99("0x48")](wanzikun_0x5177be[wanzikun_0x4f99("0x26")]["urls"], _0x4ababd[wanzikun_0x4f99("0x49")]),
                                                    data: _0x494406,
                                                    success: function success(_0x157080) {
                                                        wx[wanzikun_0x4f99("0x3b")]();
                                                        if (_0xd76f91[wanzikun_0x4f99("0x4a")](_0x157080[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x2d")], 0)) {
                                                            _0x22900e[wanzikun_0x4f99("0x9")]({
                                                                orderList: _0x157080[wanzikun_0x4f99("0x11")]["data"][wanzikun_0x4f99("0x4b")],
                                                                logisticsMap: _0x157080["data"][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x4c")],
                                                                goodsMap: _0x157080["data"]["data"][wanzikun_0x4f99("0x3c")]
                                                            });
                                                        } else {
                                                            _this[wanzikun_0x4f99("0x9")]({
                                                                orderList: null,
                                                                logisticsMap: {},
                                                                goodsMap: {}
                                                            });
                                                        }
                                                    }
                                                });
                                                continue;

                                              case "5":
                                                wx[wanzikun_0x4f99("0x2a")]();
                                                continue;
                                            }
                                            break;
                                        }
                                    }
                                }
                            });
                        }
                    } else {
                        wanzikun_0x3aacdc["wxpay"](wanzikun_0x5177be, _0x2b380d, _0x13c669, _0x449736[wanzikun_0x4f99("0x43")]);
                    }
                } else {
                    wx[wanzikun_0x4f99("0x17")]({
                        title: "错误",
                        content: wanzikun_0x4f99("0x4d"),
                        showCancel: ![]
                    });
                }
            }
        });
    },
    onLoad: function onLoad(_0x39435a) {
        var _0x1fae68 = _0x39435a["currentType"];
        this[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x6")] = _0x1fae68;
        this["setData"]({
            currentType: _0x1fae68
        });
        this[wanzikun_0x4f99("0x4e")](_0x39435a);
    },
    onReady: function onReady() {},
    getOrderStatistics: function getOrderStatistics() {
        var _0x320362 = {
            YxaAj: wanzikun_0x4f99("0x4d"),
            fermB: wanzikun_0x4f99("0x4f"),
            CeBku: function CeBku(_0x3548c0, _0x431dbf) {
                return _0x3548c0 > _0x431dbf;
            },
            cRnvh: "red-dot",
            EoOzF: function EoOzF(_0x1dc54e, _0x54ffa1) {
                return _0x1dc54e !== _0x54ffa1;
            },
            MYSOu: wanzikun_0x4f99("0x50"),
            KmSSM: wanzikun_0x4f99("0x51"),
            JQUsX: "SNgji",
            hOqsn: wanzikun_0x4f99("0x52"),
            gPiid: function gPiid(_0x2d461a, _0x321354) {
                return _0x2d461a > _0x321354;
            },
            tnYuH: function tnYuH(_0x30f26b, _0x3d8521) {
                return _0x30f26b + _0x3d8521;
            },
            HsMOZ: wanzikun_0x4f99("0x53")
        };
        var _0x4bfac9 = this;
        wx[wanzikun_0x4f99("0x22")]({
            url: _0x320362[wanzikun_0x4f99("0x54")](wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x34")], _0x320362[wanzikun_0x4f99("0x55")]),
            data: {
                token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")]
            },
            success: function success(_0x57761c) {
                var _0x1fb859 = {
                    HcFBd: function HcFBd(_0x1a0282, _0x197b03) {
                        return _0x1a0282 + _0x197b03;
                    }
                };
                wx[wanzikun_0x4f99("0x3b")]();
                if (_0x57761c[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x2d")] == 0) {
                    if ("csJSe" === _0x320362["fermB"]) {
                        var _0x1ae05c = _0x4bfac9[wanzikun_0x4f99("0x11")]["tabClass"];
                        if (_0x320362[wanzikun_0x4f99("0x56")](_0x57761c["data"][wanzikun_0x4f99("0x11")]["count_id_no_pay"], 0)) {
                            _0x1ae05c[0] = _0x320362[wanzikun_0x4f99("0x57")];
                        } else {
                            _0x1ae05c[0] = "";
                        }
                        if (_0x320362["CeBku"](_0x57761c[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x58")], 0)) {
                            _0x1ae05c[1] = _0x320362[wanzikun_0x4f99("0x57")];
                        } else {
                            if (_0x320362[wanzikun_0x4f99("0x59")](_0x320362[wanzikun_0x4f99("0x5a")], _0x320362[wanzikun_0x4f99("0x5b")])) {
                                _0x1ae05c[1] = "";
                            } else {
                                var _0x49502b = {
                                    Azxpl: function Azxpl(_0x2d6e98, _0x1103f8) {
                                        return _0x2d6e98 == _0x1103f8;
                                    }
                                };
                                if (_0x57761c[wanzikun_0x4f99("0x5c")]) {
                                    wx[wanzikun_0x4f99("0x2a")]();
                                    wx[wanzikun_0x4f99("0x22")]({
                                        url: _0x1fb859[wanzikun_0x4f99("0x5d")](wanzikun_0x5177be["globalData"][wanzikun_0x4f99("0x34")], "/order/close"),
                                        data: {
                                            token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")],
                                            orderId: orderId
                                        },
                                        success: function success(_0x71ac6a) {
                                            wx[wanzikun_0x4f99("0x3b")]();
                                            if (_0x49502b[wanzikun_0x4f99("0x5e")](_0x71ac6a["data"]["code"], 0)) {
                                                _0x4bfac9["onShow"]();
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        if (_0x320362[wanzikun_0x4f99("0x56")](_0x57761c[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x11")]["count_id_no_confirm"], 0)) {
                            _0x1ae05c[2] = _0x320362["cRnvh"];
                        } else {
                            if (_0x320362[wanzikun_0x4f99("0x5f")] !== _0x320362["hOqsn"]) {
                                _0x1ae05c[2] = "";
                            } else {
                                _0x1ae05c[2] = "";
                            }
                        }
                        if (_0x320362[wanzikun_0x4f99("0x56")](_0x57761c[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x11")]["count_id_no_reputation"], 0)) {
                            _0x1ae05c[3] = wanzikun_0x4f99("0x60");
                        } else {
                            _0x1ae05c[3] = "";
                        }
                        if (_0x320362[wanzikun_0x4f99("0x61")](_0x57761c[wanzikun_0x4f99("0x11")]["data"]["count_id_success"], 0)) {} else {}
                        _0x4bfac9[wanzikun_0x4f99("0x9")]({
                            tabClass: _0x1ae05c
                        });
                    } else {
                        wx[wanzikun_0x4f99("0x17")]({
                            title: "错误",
                            content: _0x320362[wanzikun_0x4f99("0x62")],
                            showCancel: ![]
                        });
                    }
                }
            }
        });
    },
    onShow: function onShow(_0x30b642) {
        var _this2 = this;
        var _0x3da460 = {
            AKLIT: function AKLIT(_0x5b3b6c, _0x1cfa32) {
                return _0x5b3b6c !== _0x1cfa32;
            },
            KTQrl: wanzikun_0x4f99("0x63"),
            CEDnj: "WbVcZ",
            vICdd: function vICdd(_0xc9902a, _0x1ea8aa) {
                return _0xc9902a == _0x1ea8aa;
            },
            qvqAq: wanzikun_0x4f99("0x64"),
            bnkvX: wanzikun_0x4f99("0x65")
        };
        wx[wanzikun_0x4f99("0x2a")]();
        var _0x4d81cc = this;
        var _0x465c70 = {
            token: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x27")]
        };
        _0x465c70[wanzikun_0x4f99("0x46")] = _0x4d81cc[wanzikun_0x4f99("0x11")]["currentType"];
        this["getOrderStatistics"]();
        wx[wanzikun_0x4f99("0x22")]({
            url: wanzikun_0x5177be[wanzikun_0x4f99("0x26")][wanzikun_0x4f99("0x34")] + _0x3da460["bnkvX"],
            data: _0x465c70,
            success: function success(_0x248a92) {
                if (_0x3da460[wanzikun_0x4f99("0x66")](_0x3da460[wanzikun_0x4f99("0x67")], _0x3da460[wanzikun_0x4f99("0x68")])) {
                    wx[wanzikun_0x4f99("0x3b")]();
                    if (_0x3da460["vICdd"](_0x248a92[wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x2d")], 0)) {
                        _0x4d81cc[wanzikun_0x4f99("0x9")]({
                            orderList: _0x248a92["data"][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x4b")],
                            logisticsMap: _0x248a92[wanzikun_0x4f99("0x11")]["data"][wanzikun_0x4f99("0x4c")],
                            goodsMap: _0x248a92["data"][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x3c")]
                        });
                    } else {
                        if (_0x3da460[wanzikun_0x4f99("0x69")] !== _0x3da460["qvqAq"]) {
                            var _0x43e972 = _0x30b642[wanzikun_0x4f99("0x6")];
                            _this2["data"]["currentType"] = _0x43e972;
                            _this2["setData"]({
                                currentType: _0x43e972
                            });
                            _this2[wanzikun_0x4f99("0x4e")](_0x30b642);
                        } else {
                            _this2[wanzikun_0x4f99("0x9")]({
                                orderList: null,
                                logisticsMap: {},
                                goodsMap: {}
                            });
                        }
                    }
                } else {
                    _0x4d81cc[wanzikun_0x4f99("0x9")]({
                        orderList: _0x248a92["data"]["data"][wanzikun_0x4f99("0x4b")],
                        logisticsMap: _0x248a92["data"][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x4c")],
                        goodsMap: _0x248a92["data"][wanzikun_0x4f99("0x11")][wanzikun_0x4f99("0x3c")]
                    });
                }
            }
        });
    },
    onHide: function onHide() {},
    onUnload: function onUnload() {},
    onPullDownRefresh: function onPullDownRefresh() {},
    onReachBottom: function onReachBottom() {}
});