var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var wanzikun_0x5a00 = [ "ecgNw", "tmtjL", "PHiBB", "xzcdW", "mhsMU", "XuUFN", "getSystemInfoSync", "windowWidth", "LqyAP", "WxGfM", "floor", "zoeTI", "QaWOl", "hideLoading", "getEleWidth", "delBtnWidth", "setData", "initEleWidth", "onShow", "margin-left:-", "margin-left:0px", "LzvNo", "nXYwS", "left:-", "shopCarInfo", "BBUpU", "getStorage", "rqvqZ", "yoGtC", "ISvDA", "data", "CcwOk", "rjEbp", "shopNum", "fdLPk", "wavqg", "SCgjP", "showTabBarRedDot", "dataset", "changedTouches", "WhDUu", "split", "LZGZK", "startX", "clientX", "EolRz", "MxoTu", "tZJyI", "iuABG", "Oqgxq", "nQxAf", "getSaveHide", "totalPrice", "allSelect", "noSelect", "goodsList", "list", "EPOpL", "hideTabBarRedDot", "QfSUh", "globalData", "urls", "/order/statistics", "token", "vqMlb", "code", "count_id_no_pay", "getStorageSync", "JHwrE", "shopList", "HjjJY", "WKxhU", "kZfuJ", "setGoodsList", "/pages/index/index", "dvXNw", "hWzua", "length", "wZFCo", "rJnXg", "wFnAr", "touches", "zKwtn", "VmfJD", "KeDxQ", "CwsZi", "hqfUy", "currentTarget", "LOAcw", "EUziv", "Mgdwd", "xuZwR", "vdVnz", "RxrUT", "wmlqW", "gKUmu", "CBIQq", "GyPyL", "QtmGv", "tOhmM", "active", "left", "cCwNF", "mUjNP", "oRoUe", "index", "mDEsx", "FiJFe", "dXrcb", "QMAuo", "orxDW", "WyXbp", "xuCqg", "IQUnP", "PvMaL", "Sdhut", "nrweE", "gluDP", "splice", "IZEjS", "EDWeT", "Hssmf", "eFwXB", "joydl", "WrOon", "hGPFh", "yqdfe", "CPzFR", "eWEHx", "wwFlH", "price", "wFDTN", "dvdvt", "number", "toFixed", "/pages/to-pay-order/index", "qaRDo", "bnLys", "HtMeu", "navigateTo", "bsIWp", "rYsCs", "uWjwI", "aexsA", "TbZtb", "xsZOt", "YgTqY", "aHpbk", "VjUXF", "iJMbO", "setStorage", "TNSmB", "ZgvBW", "cIUwF", "GXFEy", "xHcyX", "vEgZR", "xbBVl", "hhFNG", "HKXmJ", "IJVSY", "NjnyT", "hXknE", "IqHJE", "oYBJL", "ybsMV", "Rlzrl", "FdPXi", "ZnEVu", "XYdrg", "iWGKF", "KGGxP", "iqWec", "bCKAP", "saveHidden", "filter", "ekchF", "InrKt", " 商品已失效，请重新购买", "xeKIK", " 库存不足，请重新购买", "auAgL", "yDczA", "PWMRl", "CgAcd", "LaAhO", "Yyedn", "/shop/goods/price", "showLoading", "abamP", "DKQNI", "fEhJR", "TFapG", "skflS", "JIWaB", "LLYwC", "lbtjN", "PZXRr", "propertyChildIds", "Gltck", "odzzO", "hyRQe", "request", "faoNy", "/shop/goods/detail", "goodsId", "wOoUj", "ODyLn", "DrNeW", "OJWHq", "properties", "tsVXo", "sVUMM", "basicInfo", "name", "WRdsj", "TlgUq", "dQDzT", "JqMJm", "yUoAm", "tZaJk", "fFgcj", "stores", "amktV", "dddfs", "ZdkUW", "GYjQX", "showModal", "minPrice", " 价格有调整，请重新购买", "pMLVm", "navigateToPayOrder", "JiTzK", "PbhDP", "TrkZK", "VfXwm", "iDjXV", "gXTec", "SfyOg", "UaDIR", "oZJQn", "UkHfM", "pIVEX" ];

(function(_0x2d8f05, _0x4b81bb) {
    var _0x4d74cb = function _0x4d74cb(_0x32719f) {
        while (--_0x32719f) {
            _0x2d8f05["push"](_0x2d8f05["shift"]());
        }
    };
    _0x4d74cb(++_0x4b81bb);
})(wanzikun_0x5a00, 491);

var wanzikun_0x38af = function wanzikun_0x38af(_0xe444db, _0x1633c0) {
    _0xe444db = _0xe444db - 0;
    var _0x2b5be9 = wanzikun_0x5a00[_0xe444db];
    return _0x2b5be9;
};

var wanzikun_0x49c022 = getApp();

Page({
    data: {
        goodsList: {
            saveHidden: !![],
            totalPrice: 0,
            allSelect: !![],
            noSelect: ![],
            list: []
        },
        delBtnWidth: 120
    },
    getEleWidth: function getEleWidth(_0x3dc850) {
        var _0x16189c = {
            LqyAP: function LqyAP(_0x301ca2, _0x128fce) {
                return _0x301ca2 / _0x128fce;
            },
            WxGfM: function WxGfM(_0x26a0b1, _0x419a9a) {
                return _0x26a0b1 / _0x419a9a;
            },
            zoeTI: function zoeTI(_0x57c548, _0x1dcc55) {
                return _0x57c548 / _0x1dcc55;
            },
            dMaRt: function dMaRt(_0x739c6b, _0x28eaa7) {
                return _0x739c6b === _0x28eaa7;
            },
            QaWOl: wanzikun_0x38af("0x0")
        };
        var _0x38b9cd = 0;
        try {
            var _0x5c55d5 = wx[wanzikun_0x38af("0x1")]()[wanzikun_0x38af("0x2")];
            var _0x1d352f = _0x16189c[wanzikun_0x38af("0x3")](_0x16189c[wanzikun_0x38af("0x4")](750, 2), _0x16189c[wanzikun_0x38af("0x4")](_0x3dc850, 2));
            _0x38b9cd = Math[wanzikun_0x38af("0x5")](_0x16189c[wanzikun_0x38af("0x6")](_0x5c55d5, _0x1d352f));
            return _0x38b9cd;
        } catch (_0x4ba3f8) {
            if (_0x16189c["dMaRt"](_0x16189c[wanzikun_0x38af("0x7")], _0x16189c[wanzikun_0x38af("0x7")])) {
                return ![];
            } else {
                wx[wanzikun_0x38af("0x8")]();
                return;
            }
        }
    },
    initEleWidth: function initEleWidth() {
        var _0x9df575 = this[wanzikun_0x38af("0x9")](this["data"][wanzikun_0x38af("0xa")]);
        this[wanzikun_0x38af("0xb")]({
            delBtnWidth: _0x9df575
        });
    },
    onLoad: function onLoad() {
        this[wanzikun_0x38af("0xc")]();
        this[wanzikun_0x38af("0xd")]();
    },
    onShow: function onShow() {
        var _0x4fb8fc = {
            OKKNR: "1|0|3|2|5|4",
            YbZxz: function YbZxz(_0x1ef718, _0x1c688a) {
                return _0x1ef718 - _0x1c688a;
            },
            rqvqZ: function rqvqZ(_0x39d4e4, _0x288213) {
                return _0x39d4e4 + _0x288213;
            },
            yoGtC: wanzikun_0x38af("0xe"),
            qgBtw: wanzikun_0x38af("0xf"),
            ISvDA: function ISvDA(_0x1db7ca, _0x2dd1a9) {
                return _0x1db7ca(_0x2dd1a9);
            },
            CcwOk: wanzikun_0x38af("0x10"),
            rjEbp: function rjEbp(_0x2fd513, _0x4d59f7) {
                return _0x2fd513 > _0x4d59f7;
            },
            fdLPk: function fdLPk(_0x5cc051, _0x48ee4e) {
                return _0x5cc051 !== _0x48ee4e;
            },
            SCgjP: "lOgss",
            KpSjv: function KpSjv(_0x316041, _0x3cdd2d) {
                return _0x316041 === _0x3cdd2d;
            },
            EPOpL: wanzikun_0x38af("0x11"),
            vqMlb: function vqMlb(_0x4a104e, _0xf9a43d) {
                return _0x4a104e == _0xf9a43d;
            },
            HjjJY: function HjjJY(_0x3703f2, _0x44b2a1) {
                return _0x3703f2 + _0x44b2a1;
            },
            rENus: function rENus(_0x334d12, _0x49fc0b) {
                return _0x334d12 + _0x49fc0b;
            },
            WKxhU: function WKxhU(_0x4cdba5, _0x45dea8) {
                return _0x4cdba5 + _0x45dea8;
            },
            kZfuJ: wanzikun_0x38af("0x12"),
            QfSUh: function QfSUh(_0x59bfb4, _0x449eab) {
                return _0x59bfb4 + _0x449eab;
            },
            JHwrE: wanzikun_0x38af("0x13"),
            mQjWz: function mQjWz(_0x50aa82, _0x29db27) {
                return _0x50aa82 === _0x29db27;
            },
            NFYZk: wanzikun_0x38af("0x14")
        };
        wx[wanzikun_0x38af("0x15")]({
            key: wanzikun_0x38af("0x13"),
            success: function success(_0x40f9ed) {
                var _0x4921d3 = {
                    WhDUu: _0x4fb8fc["OKKNR"],
                    LZGZK: function LZGZK(_0x3390ac, _0x42034e) {
                        return _0x4fb8fc["YbZxz"](_0x3390ac, _0x42034e);
                    },
                    cjJSj: function cjJSj(_0x1b78c1, _0x2e005c) {
                        return _0x1b78c1 / _0x2e005c;
                    },
                    EolRz: function EolRz(_0x50a452, _0x15ecf3) {
                        return _0x4fb8fc[wanzikun_0x38af("0x16")](_0x50a452, _0x15ecf3);
                    },
                    MxoTu: _0x4fb8fc[wanzikun_0x38af("0x17")],
                    tZJyI: _0x4fb8fc["qgBtw"],
                    iuABG: function iuABG(_0x5bdbb6, _0x2e6d30) {
                        return _0x5bdbb6 !== _0x2e6d30;
                    },
                    Oqgxq: function Oqgxq(_0x55f2a3, _0x17f773) {
                        return _0x55f2a3 != _0x17f773;
                    },
                    nQxAf: function nQxAf(_0x268f57, _0x3a631b) {
                        return _0x4fb8fc[wanzikun_0x38af("0x18")](_0x268f57, _0x3a631b);
                    }
                };
                if (_0x40f9ed[wanzikun_0x38af("0x19")]) {
                    if (_0x4fb8fc[wanzikun_0x38af("0x1a")] === _0x4fb8fc[wanzikun_0x38af("0x1a")]) {
                        if (_0x4fb8fc[wanzikun_0x38af("0x1b")](_0x40f9ed[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x1c")], 0)) {
                            if (_0x4fb8fc[wanzikun_0x38af("0x1d")](wanzikun_0x38af("0x1e"), _0x4fb8fc[wanzikun_0x38af("0x1f")])) {
                                wx[wanzikun_0x38af("0x20")]({
                                    index: 2
                                });
                            } else {
                                var _0x2a9f72 = e["currentTarget"][wanzikun_0x38af("0x21")]["index"];
                                if (e[wanzikun_0x38af("0x22")]["length"] == 1) {
                                    var _0x4fe033 = _0x4921d3[wanzikun_0x38af("0x23")][wanzikun_0x38af("0x24")]("|"), _0x181807 = 0;
                                    while (!![]) {
                                        switch (_0x4fe033[_0x181807++]) {
                                          case "0":
                                            var _0x55bb24 = _0x4921d3[wanzikun_0x38af("0x25")](this["data"][wanzikun_0x38af("0x26")], _0x4bef2f);
                                            continue;

                                          case "1":
                                            var _0x4bef2f = e[wanzikun_0x38af("0x22")][0][wanzikun_0x38af("0x27")];
                                            continue;

                                          case "2":
                                            var _0x4c8897 = _0x55bb24 > _0x4921d3["cjJSj"](_0x5bbda7, 2) ? _0x4921d3[wanzikun_0x38af("0x28")](_0x4921d3["EolRz"](_0x4921d3[wanzikun_0x38af("0x29")], _0x5bbda7), "px") : _0x4921d3[wanzikun_0x38af("0x2a")];
                                            continue;

                                          case "3":
                                            var _0x5bbda7 = this[wanzikun_0x38af("0x19")]["delBtnWidth"];
                                            continue;

                                          case "4":
                                            if (_0x4921d3[wanzikun_0x38af("0x2b")](_0x2a9f72, "") && _0x4921d3[wanzikun_0x38af("0x2c")](_0x2a9f72, null)) {
                                                _0x22dd60[_0x4921d3[wanzikun_0x38af("0x2d")](parseInt, _0x2a9f72)]["left"] = _0x4c8897;
                                                this["setGoodsList"](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x22dd60);
                                            }
                                            continue;

                                          case "5":
                                            var _0x22dd60 = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                                            continue;
                                        }
                                        break;
                                    }
                                }
                            }
                        } else {
                            if (_0x4fb8fc["KpSjv"](_0x4fb8fc[wanzikun_0x38af("0x34")], _0x4fb8fc[wanzikun_0x38af("0x34")])) {
                                wx[wanzikun_0x38af("0x35")]({
                                    index: 2
                                });
                            } else {
                                return entity["active"];
                            }
                        }
                    } else {
                        allSelect = !![];
                    }
                } else {
                    wx[wanzikun_0x38af("0x35")]({
                        index: 2
                    });
                }
            }
        });
        wx["request"]({
            url: _0x4fb8fc[wanzikun_0x38af("0x36")](wanzikun_0x49c022[wanzikun_0x38af("0x37")][wanzikun_0x38af("0x38")], wanzikun_0x38af("0x39")),
            data: {
                token: wanzikun_0x49c022[wanzikun_0x38af("0x37")][wanzikun_0x38af("0x3a")]
            },
            success: function success(_0x53eb91) {
                if (_0x4fb8fc[wanzikun_0x38af("0x3b")](_0x53eb91["data"][wanzikun_0x38af("0x3c")], 0)) {
                    if (_0x4fb8fc[wanzikun_0x38af("0x1b")](_0x53eb91[wanzikun_0x38af("0x19")]["data"][wanzikun_0x38af("0x3d")], 0)) {
                        wx["showTabBarRedDot"]({
                            index: 3
                        });
                    } else {
                        wx[wanzikun_0x38af("0x35")]({
                            index: 3
                        });
                    }
                }
            }
        });
        var _0x3b4ed6 = [];
        var _0x496821 = wx[wanzikun_0x38af("0x3e")](_0x4fb8fc[wanzikun_0x38af("0x3f")]);
        if (_0x496821 && _0x496821[wanzikun_0x38af("0x40")]) {
            if (_0x4fb8fc["mQjWz"](_0x4fb8fc["NFYZk"], _0x4fb8fc["NFYZk"])) {
                _0x3b4ed6 = _0x496821[wanzikun_0x38af("0x40")];
            } else {
                left = _0x4fb8fc[wanzikun_0x38af("0x16")](_0x4fb8fc[wanzikun_0x38af("0x41")](_0x4fb8fc["yoGtC"], disX), "px");
                if (disX >= delBtnWidth) {
                    left = _0x4fb8fc["rENus"](_0x4fb8fc[wanzikun_0x38af("0x42")](_0x4fb8fc[wanzikun_0x38af("0x43")], delBtnWidth), "px");
                }
            }
        }
        this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")] = _0x3b4ed6;
        this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x3b4ed6);
    },
    toIndexPage: function toIndexPage() {
        var _0x424a23 = {
            VyyuO: wanzikun_0x38af("0x45")
        };
        wx["switchTab"]({
            url: _0x424a23["VyyuO"]
        });
    },
    touchS: function touchS(_0x336727) {
        var _0x1ddaf7 = {
            zKwtn: function zKwtn(_0x4bbe1e, _0x412cf1) {
                return _0x4bbe1e < _0x412cf1;
            },
            VmfJD: function VmfJD(_0x1296ef, _0x1af939) {
                return _0x1296ef(_0x1af939);
            },
            KeDxQ: function KeDxQ(_0x3ee99c, _0x28927e) {
                return _0x3ee99c(_0x28927e);
            },
            BFtqQ: function BFtqQ(_0x379d01, _0x4de9cb) {
                return _0x379d01 == _0x4de9cb;
            },
            wZFCo: function wZFCo(_0x2a63b8, _0x3e827c) {
                return _0x2a63b8 !== _0x3e827c;
            },
            rJnXg: wanzikun_0x38af("0x46"),
            wFnAr: wanzikun_0x38af("0x47")
        };
        if (_0x1ddaf7["BFtqQ"](_0x336727["touches"][wanzikun_0x38af("0x48")], 1)) {
            if (_0x1ddaf7[wanzikun_0x38af("0x49")](_0x1ddaf7[wanzikun_0x38af("0x4a")], _0x1ddaf7[wanzikun_0x38af("0x4b")])) {
                this[wanzikun_0x38af("0xb")]({
                    startX: _0x336727[wanzikun_0x38af("0x4c")][0][wanzikun_0x38af("0x27")]
                });
            } else {
                if (_0x1ddaf7[wanzikun_0x38af("0x4d")](list[_0x1ddaf7[wanzikun_0x38af("0x4e")](parseInt, index)]["number"], 10)) {
                    list[_0x1ddaf7[wanzikun_0x38af("0x4f")](parseInt, index)]["number"]++;
                    this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), list);
                }
            }
        }
    },
    touchM: function touchM(_0x605563) {
        var _0x3c5449 = {
            tOhmM: function tOhmM(_0x29434d, _0x3b021c) {
                return _0x29434d < _0x3b021c;
            },
            LOAcw: function LOAcw(_0x2ed193, _0x32a024) {
                return _0x2ed193 == _0x32a024;
            },
            EUziv: function EUziv(_0xfe3a87, _0x554c8e) {
                return _0xfe3a87 < _0x554c8e;
            },
            Mgdwd: wanzikun_0x38af("0xf"),
            xuZwR: wanzikun_0x38af("0x50"),
            vdVnz: function vdVnz(_0x1f35b1, _0x3055fa) {
                return _0x1f35b1 + _0x3055fa;
            },
            RxrUT: wanzikun_0x38af("0xe"),
            wmlqW: function wmlqW(_0x5164e8, _0x34d63d) {
                return _0x5164e8 >= _0x34d63d;
            },
            gKUmu: function gKUmu(_0x1e8ba0, _0x4ed8e7) {
                return _0x1e8ba0 !== _0x4ed8e7;
            },
            evFGu: wanzikun_0x38af("0x51"),
            DoPAj: wanzikun_0x38af("0x12"),
            GyPyL: function GyPyL(_0x58804c, _0xd7b38a) {
                return _0x58804c != _0xd7b38a;
            },
            yopdv: function yopdv(_0x160950, _0x2e9d31) {
                return _0x160950 != _0x2e9d31;
            },
            QtmGv: "QWVAc"
        };
        var _0x17e4df = _0x605563[wanzikun_0x38af("0x52")][wanzikun_0x38af("0x21")]["index"];
        if (_0x3c5449["LOAcw"](_0x605563[wanzikun_0x38af("0x4c")][wanzikun_0x38af("0x48")], 1)) {
            var _0x5c6ae1 = _0x605563[wanzikun_0x38af("0x4c")][0]["clientX"];
            var _0x4cdfd3 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x26")] - _0x5c6ae1;
            var _0x2edb03 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0xa")];
            var _0x59cfb0 = "";
            if (_0x3c5449[wanzikun_0x38af("0x53")](_0x4cdfd3, 0) || _0x3c5449[wanzikun_0x38af("0x54")](_0x4cdfd3, 0)) {
                _0x59cfb0 = _0x3c5449[wanzikun_0x38af("0x55")];
            } else if (_0x4cdfd3 > 0) {
                if (_0x3c5449[wanzikun_0x38af("0x56")] === _0x3c5449["xuZwR"]) {
                    _0x59cfb0 = _0x3c5449[wanzikun_0x38af("0x57")](_0x3c5449[wanzikun_0x38af("0x57")](_0x3c5449[wanzikun_0x38af("0x58")], _0x4cdfd3), "px");
                    if (_0x3c5449[wanzikun_0x38af("0x59")](_0x4cdfd3, _0x2edb03)) {
                        if (_0x3c5449[wanzikun_0x38af("0x5a")](wanzikun_0x38af("0x5b"), _0x3c5449["evFGu"])) {
                            _0x59cfb0 = _0x3c5449["DoPAj"] + _0x2edb03 + "px";
                        } else {
                            var _0x1c6d69 = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                            for (var _0xa2abd2 = 0; _0x3c5449["tOhmM"](_0xa2abd2, _0x1c6d69[wanzikun_0x38af("0x48")]); _0xa2abd2++) {
                                var _0x2756f0 = _0x1c6d69[_0xa2abd2];
                                _0x2756f0["active"] = ![];
                            }
                            this[wanzikun_0x38af("0x44")](!this[wanzikun_0x38af("0x2e")](), this["totalPrice"](), this[wanzikun_0x38af("0x30")](), this["noSelect"](), _0x1c6d69);
                        }
                    }
                } else {
                    wx["showTabBarRedDot"]({
                        index: 3
                    });
                }
            }
            var _0xeac46f = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
            if (_0x3c5449[wanzikun_0x38af("0x5c")](_0x17e4df, "") && _0x3c5449["yopdv"](_0x17e4df, null)) {
                if (_0x3c5449[wanzikun_0x38af("0x5d")] !== _0x3c5449["QtmGv"]) {
                    var _0x3ed760 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                    for (var _0xb74ebe = 0; _0x3c5449[wanzikun_0x38af("0x5e")](_0xb74ebe, _0x3ed760[wanzikun_0x38af("0x48")]); _0xb74ebe++) {
                        var _0x39f785 = _0x3ed760[_0xb74ebe];
                        _0x39f785[wanzikun_0x38af("0x5f")] = !![];
                    }
                    this[wanzikun_0x38af("0x44")](!this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x3ed760);
                } else {
                    _0xeac46f[parseInt(_0x17e4df)][wanzikun_0x38af("0x60")] = _0x59cfb0;
                    this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this["noSelect"](), _0xeac46f);
                }
            }
        }
    },
    touchE: function touchE(_0x1c3d32) {
        var _0x4a0735 = {
            PvMaL: function PvMaL(_0x50013c, _0x539b59) {
                return _0x50013c / _0x539b59;
            },
            Sdhut: function Sdhut(_0xc29a0f, _0x580d6e) {
                return _0xc29a0f / _0x580d6e;
            },
            nrweE: function nrweE(_0x17e3ed, _0x420901) {
                return _0x17e3ed / _0x420901;
            },
            GOHjt: function GOHjt(_0x3438ca, _0x4ce366) {
                return _0x3438ca == _0x4ce366;
            },
            ptSsa: wanzikun_0x38af("0x61"),
            mDEsx: wanzikun_0x38af("0x62"),
            FiJFe: function FiJFe(_0x5dea42, _0xed2e53) {
                return _0x5dea42 - _0xed2e53;
            },
            dXrcb: function dXrcb(_0x454342, _0x4defa2) {
                return _0x454342 > _0x4defa2;
            },
            QMAuo: function QMAuo(_0x47e36d, _0x686103) {
                return _0x47e36d + _0x686103;
            },
            orxDW: wanzikun_0x38af("0xe"),
            WyXbp: wanzikun_0x38af("0xf"),
            xuCqg: function xuCqg(_0xbdb714, _0x14f354) {
                return _0xbdb714 !== _0x14f354;
            },
            IQUnP: wanzikun_0x38af("0x63"),
            gluDP: function gluDP(_0x5bbeae, _0xd7fa19) {
                return _0x5bbeae(_0xd7fa19);
            }
        };
        var _0x3b6f8f = _0x1c3d32[wanzikun_0x38af("0x52")][wanzikun_0x38af("0x21")][wanzikun_0x38af("0x64")];
        if (_0x4a0735["GOHjt"](_0x1c3d32["changedTouches"][wanzikun_0x38af("0x48")], 1)) {
            if (_0x4a0735["ptSsa"] === _0x4a0735[wanzikun_0x38af("0x65")]) {
                var _0x38ecdf = _0x51ed14[i];
                _0x38ecdf["active"] = ![];
            } else {
                var _0x298f05 = _0x1c3d32[wanzikun_0x38af("0x22")][0][wanzikun_0x38af("0x27")];
                var _0x4478d1 = _0x4a0735[wanzikun_0x38af("0x66")](this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x26")], _0x298f05);
                var _0x5abb79 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0xa")];
                var _0x2a7ddb = _0x4a0735[wanzikun_0x38af("0x67")](_0x4478d1, _0x5abb79 / 2) ? _0x4a0735[wanzikun_0x38af("0x68")](_0x4a0735[wanzikun_0x38af("0x69")], _0x5abb79) + "px" : _0x4a0735[wanzikun_0x38af("0x6a")];
                var _0x51ed14 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                if (_0x4a0735[wanzikun_0x38af("0x6b")](_0x3b6f8f, "") && _0x3b6f8f != null) {
                    if (wanzikun_0x38af("0x63") !== _0x4a0735[wanzikun_0x38af("0x6c")]) {
                        var _0xacb7d1 = wx["getSystemInfoSync"]()[wanzikun_0x38af("0x2")];
                        var _0x386663 = _0x4a0735[wanzikun_0x38af("0x6d")](_0x4a0735[wanzikun_0x38af("0x6e")](750, 2), _0x4a0735[wanzikun_0x38af("0x6f")](w, 2));
                        real = Math[wanzikun_0x38af("0x5")](_0xacb7d1 / _0x386663);
                        return real;
                    } else {
                        _0x51ed14[_0x4a0735[wanzikun_0x38af("0x70")](parseInt, _0x3b6f8f)][wanzikun_0x38af("0x60")] = _0x2a7ddb;
                        this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this["noSelect"](), _0x51ed14);
                    }
                }
            }
        }
    },
    delItem: function delItem(_0x2d1359) {
        var _0x128623 = _0x2d1359[wanzikun_0x38af("0x52")]["dataset"][wanzikun_0x38af("0x64")];
        var _0x49fc19 = this["data"]["goodsList"][wanzikun_0x38af("0x33")];
        _0x49fc19[wanzikun_0x38af("0x71")](_0x128623, 1);
        this["setGoodsList"](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this["allSelect"](), this[wanzikun_0x38af("0x31")](), _0x49fc19);
    },
    selectTap: function selectTap(_0x44b147) {
        var _0x2a1fd7 = {
            IZEjS: function IZEjS(_0xa73a17, _0x4898e9) {
                return _0xa73a17 !== _0x4898e9;
            },
            EDWeT: function EDWeT(_0x25908b, _0x5e449e) {
                return _0x25908b != _0x5e449e;
            },
            Hssmf: function Hssmf(_0x25b1af, _0x22545d) {
                return _0x25b1af(_0x22545d);
            }
        };
        var _0x3a152c = _0x44b147[wanzikun_0x38af("0x52")]["dataset"][wanzikun_0x38af("0x64")];
        var _0x46cb27 = this[wanzikun_0x38af("0x19")]["goodsList"][wanzikun_0x38af("0x33")];
        if (_0x2a1fd7[wanzikun_0x38af("0x72")](_0x3a152c, "") && _0x2a1fd7[wanzikun_0x38af("0x73")](_0x3a152c, null)) {
            _0x46cb27[_0x2a1fd7[wanzikun_0x38af("0x74")](parseInt, _0x3a152c)][wanzikun_0x38af("0x5f")] = !_0x46cb27[_0x2a1fd7[wanzikun_0x38af("0x74")](parseInt, _0x3a152c)][wanzikun_0x38af("0x5f")];
            this["setGoodsList"](this["getSaveHide"](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x46cb27);
        }
    },
    totalPrice: function totalPrice() {
        var _0x360fd7 = {
            wFDTN: function wFDTN(_0x3e9268, _0x41ceaa) {
                return _0x3e9268 != _0x41ceaa;
            },
            dvdvt: function dvdvt(_0x4dcc7d, _0x37af23) {
                return _0x4dcc7d < _0x37af23;
            },
            wwFlH: function wwFlH(_0x530def, _0x46357d) {
                return _0x530def(_0x46357d);
            },
            hGPFh: function hGPFh(_0x38f705, _0x2f8c3b) {
                return _0x38f705 !== _0x2f8c3b;
            },
            yqdfe: wanzikun_0x38af("0x75"),
            CKyQG: wanzikun_0x38af("0x76"),
            CPzFR: function CPzFR(_0x2d516f, _0x2ef1a7) {
                return _0x2d516f === _0x2ef1a7;
            },
            eWEHx: wanzikun_0x38af("0x77")
        };
        var _0x4d3444 = this[wanzikun_0x38af("0x19")]["goodsList"][wanzikun_0x38af("0x33")];
        var _0x19f609 = 0;
        for (var _0x45708b = 0; _0x360fd7["dvdvt"](_0x45708b, _0x4d3444[wanzikun_0x38af("0x48")]); _0x45708b++) {
            if (_0x360fd7[wanzikun_0x38af("0x78")](_0x360fd7[wanzikun_0x38af("0x79")], _0x360fd7["CKyQG"])) {
                var _0x86e722 = _0x4d3444[_0x45708b];
                if (_0x86e722[wanzikun_0x38af("0x5f")]) {
                    if (_0x360fd7[wanzikun_0x38af("0x7a")](_0x360fd7[wanzikun_0x38af("0x7b")], wanzikun_0x38af("0x77"))) {
                        _0x19f609 += _0x360fd7[wanzikun_0x38af("0x7c")](parseFloat, _0x86e722[wanzikun_0x38af("0x7d")]) * _0x86e722["number"];
                    } else {
                        var _0x1cf820 = _0x4d3444[_0x45708b];
                        _0x1cf820[wanzikun_0x38af("0x5f")] = !![];
                    }
                }
            } else {
                var _0x4d37dc = e[wanzikun_0x38af("0x52")][wanzikun_0x38af("0x21")][wanzikun_0x38af("0x64")];
                var _0x2a889f = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                if (_0x4d37dc !== "" && _0x360fd7[wanzikun_0x38af("0x7e")](_0x4d37dc, null)) {
                    if (_0x360fd7[wanzikun_0x38af("0x7f")](_0x2a889f[_0x360fd7[wanzikun_0x38af("0x7c")](parseInt, _0x4d37dc)][wanzikun_0x38af("0x80")], 10)) {
                        _0x2a889f[_0x360fd7[wanzikun_0x38af("0x7c")](parseInt, _0x4d37dc)][wanzikun_0x38af("0x80")]++;
                        this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this["allSelect"](), this[wanzikun_0x38af("0x31")](), _0x2a889f);
                    }
                }
            }
        }
        _0x19f609 = parseFloat(_0x19f609[wanzikun_0x38af("0x81")](2));
        return _0x19f609;
    },
    allSelect: function allSelect() {
        var _0x543206 = {
            bsIWp: wanzikun_0x38af("0x82"),
            bnLys: function bnLys(_0x52adef, _0x17070c) {
                return _0x52adef === _0x17070c;
            },
            HtMeu: "ioLlN",
            rYsCs: wanzikun_0x38af("0x83")
        };
        var _0x1d9d5a = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        var _0x4a7b43 = ![];
        for (var _0xbc1cc7 = 0; _0xbc1cc7 < _0x1d9d5a[wanzikun_0x38af("0x48")]; _0xbc1cc7++) {
            var _0x10dad6 = _0x1d9d5a[_0xbc1cc7];
            if (_0x10dad6[wanzikun_0x38af("0x5f")]) {
                if (_0x543206[wanzikun_0x38af("0x84")](_0x543206[wanzikun_0x38af("0x85")], "Gkwyw")) {
                    wx[wanzikun_0x38af("0x8")]();
                    wx[wanzikun_0x38af("0x86")]({
                        url: _0x543206[wanzikun_0x38af("0x87")]
                    });
                } else {
                    _0x4a7b43 = !![];
                }
            } else {
                if (_0x543206[wanzikun_0x38af("0x84")](_0x543206[wanzikun_0x38af("0x88")], wanzikun_0x38af("0x83"))) {
                    _0x4a7b43 = ![];
                    break;
                } else {
                    left = wanzikun_0x38af("0xf");
                }
            }
        }
        return _0x4a7b43;
    },
    noSelect: function noSelect() {
        var _0x3a7d18 = {
            aexsA: function aexsA(_0x331846, _0x408aae) {
                return _0x331846 == _0x408aae;
            },
            TbZtb: "Whfjm",
            xsZOt: wanzikun_0x38af("0x89")
        };
        var _0x42797c = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        var _0x59f6c1 = 0;
        for (var _0x2e4711 = 0; _0x2e4711 < _0x42797c["length"]; _0x2e4711++) {
            var _0x3f48e4 = _0x42797c[_0x2e4711];
            if (!_0x3f48e4[wanzikun_0x38af("0x5f")]) {
                _0x59f6c1++;
            }
        }
        if (_0x3a7d18[wanzikun_0x38af("0x8a")](_0x59f6c1, _0x42797c["length"])) {
            return !![];
        } else {
            if (_0x3a7d18[wanzikun_0x38af("0x8b")] !== _0x3a7d18[wanzikun_0x38af("0x8c")]) {
                return ![];
            } else {
                if (res["data"][wanzikun_0x38af("0x1c")] > 0) {
                    wx[wanzikun_0x38af("0x20")]({
                        index: 2
                    });
                } else {
                    wx[wanzikun_0x38af("0x35")]({
                        index: 2
                    });
                }
            }
        }
    },
    setGoodsList: function setGoodsList(_0x2f3eea, _0x4ef757, _0x439b7a, _0x42e865, _0x1f1034) {
        var _0x986d4 = {
            YgTqY: function YgTqY(_0x4ff948, _0x4dd9f5) {
                return _0x4ff948 < _0x4dd9f5;
            },
            aHpbk: function aHpbk(_0x2ca50a, _0x958d41) {
                return _0x2ca50a === _0x958d41;
            },
            VjUXF: "lNXRn",
            iJMbO: function iJMbO(_0x1cb103, _0x26e1ea) {
                return _0x1cb103 + _0x26e1ea;
            }
        };
        this[wanzikun_0x38af("0xb")]({
            goodsList: {
                saveHidden: _0x2f3eea,
                totalPrice: _0x4ef757,
                allSelect: _0x439b7a,
                noSelect: _0x42e865,
                list: _0x1f1034
            }
        });
        var _0x46151f = {};
        var _0x574dc5 = 0;
        _0x46151f[wanzikun_0x38af("0x40")] = _0x1f1034;
        for (var _0x504707 = 0; _0x986d4[wanzikun_0x38af("0x8d")](_0x504707, _0x1f1034[wanzikun_0x38af("0x48")]); _0x504707++) {
            if (_0x986d4[wanzikun_0x38af("0x8e")](_0x986d4[wanzikun_0x38af("0x8f")], _0x986d4[wanzikun_0x38af("0x8f")])) {
                _0x574dc5 = _0x986d4[wanzikun_0x38af("0x90")](_0x574dc5, _0x1f1034[_0x504707][wanzikun_0x38af("0x80")]);
            } else {
                _0x1f1034[parseInt(index)][wanzikun_0x38af("0x60")] = left;
                this["setGoodsList"](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this["noSelect"](), _0x1f1034);
            }
        }
        _0x46151f[wanzikun_0x38af("0x1c")] = _0x574dc5;
        wx[wanzikun_0x38af("0x91")]({
            key: "shopCarInfo",
            data: _0x46151f
        });
    },
    bindAllSelect: function bindAllSelect() {
        var _0x3f0511 = {
            cIUwF: function cIUwF(_0x15fe2c, _0x4d7c01) {
                return _0x15fe2c < _0x4d7c01;
            },
            GXFEy: function GXFEy(_0x2e30ae, _0x686d63) {
                return _0x2e30ae !== _0x686d63;
            },
            xHcyX: wanzikun_0x38af("0x92"),
            vEgZR: function vEgZR(_0x5160d8, _0x229047) {
                return _0x5160d8 === _0x229047;
            },
            xbBVl: wanzikun_0x38af("0x93")
        };
        var _0x41b4fb = this[wanzikun_0x38af("0x19")]["goodsList"][wanzikun_0x38af("0x30")];
        var _0x1cdf53 = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        if (_0x41b4fb) {
            for (var _0x48a549 = 0; _0x3f0511[wanzikun_0x38af("0x94")](_0x48a549, _0x1cdf53[wanzikun_0x38af("0x48")]); _0x48a549++) {
                if (_0x3f0511[wanzikun_0x38af("0x95")](_0x3f0511[wanzikun_0x38af("0x96")], _0x3f0511["xHcyX"])) {
                    wx[wanzikun_0x38af("0x8")]();
                    return;
                } else {
                    var _0x52fb95 = _0x1cdf53[_0x48a549];
                    _0x52fb95[wanzikun_0x38af("0x5f")] = ![];
                }
            }
        } else {
            if (_0x3f0511[wanzikun_0x38af("0x97")](_0x3f0511["xbBVl"], _0x3f0511[wanzikun_0x38af("0x98")])) {
                for (var _0x48a549 = 0; _0x48a549 < _0x1cdf53[wanzikun_0x38af("0x48")]; _0x48a549++) {
                    var _0x52fb95 = _0x1cdf53[_0x48a549];
                    _0x52fb95[wanzikun_0x38af("0x5f")] = !![];
                }
            } else {
                var _0x4a7075 = _0x1cdf53[_0x48a549];
                _0x4a7075["active"] = !![];
            }
        }
        this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), !_0x41b4fb, this["noSelect"](), _0x1cdf53);
    },
    jiaBtnTap: function jiaBtnTap(_0x4249c9) {
        var _0x2dc44f = {
            NjnyT: function NjnyT(_0x494303, _0x5654ac) {
                return _0x494303 !== _0x5654ac;
            },
            hXknE: function hXknE(_0x1d99f3, _0xf9bdb4) {
                return _0x1d99f3 != _0xf9bdb4;
            },
            IqHJE: function IqHJE(_0x164a4a, _0x31cce6) {
                return _0x164a4a(_0x31cce6);
            },
            HKXmJ: function HKXmJ(_0x467659, _0x4e8680) {
                return _0x467659 !== _0x4e8680;
            },
            IJVSY: wanzikun_0x38af("0x99"),
            oYBJL: function oYBJL(_0x31ea4f, _0x538ea5) {
                return _0x31ea4f < _0x538ea5;
            },
            ybsMV: function ybsMV(_0x10f5a9, _0x402923) {
                return _0x10f5a9(_0x402923);
            },
            Rlzrl: function Rlzrl(_0x4ce41, _0x76662e) {
                return _0x4ce41(_0x76662e);
            }
        };
        var _0x442a67 = _0x4249c9[wanzikun_0x38af("0x52")][wanzikun_0x38af("0x21")][wanzikun_0x38af("0x64")];
        var _0x55785c = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        if (_0x2dc44f[wanzikun_0x38af("0x9a")](_0x442a67, "") && _0x442a67 != null) {
            if (_0x2dc44f[wanzikun_0x38af("0x9a")](_0x2dc44f["IJVSY"], _0x2dc44f[wanzikun_0x38af("0x9b")])) {
                var _0x569cad = _0x4249c9[wanzikun_0x38af("0x52")][wanzikun_0x38af("0x21")]["index"];
                var _0x3e1534 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                if (_0x2dc44f[wanzikun_0x38af("0x9c")](_0x569cad, "") && _0x2dc44f[wanzikun_0x38af("0x9d")](_0x569cad, null)) {
                    _0x3e1534[parseInt(_0x569cad)][wanzikun_0x38af("0x5f")] = !_0x3e1534[_0x2dc44f[wanzikun_0x38af("0x9e")](parseInt, _0x569cad)]["active"];
                    this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x3e1534);
                }
            } else {
                if (_0x2dc44f[wanzikun_0x38af("0x9f")](_0x55785c[_0x2dc44f[wanzikun_0x38af("0xa0")](parseInt, _0x442a67)]["number"], 10)) {
                    _0x55785c[_0x2dc44f[wanzikun_0x38af("0xa1")](parseInt, _0x442a67)][wanzikun_0x38af("0x80")]++;
                    this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this["allSelect"](), this[wanzikun_0x38af("0x31")](), _0x55785c);
                }
            }
        }
    },
    jianBtnTap: function jianBtnTap(_0x528d9c) {
        var _0x364158 = {
            cvyBr: function cvyBr(_0x5651fe, _0x141725) {
                return _0x5651fe == _0x141725;
            },
            VaVAS: function VaVAS(_0x3ab1d3, _0x29bc2e) {
                return _0x3ab1d3 !== _0x29bc2e;
            },
            ZnEVu: function ZnEVu(_0x148f6e, _0x2c2caf) {
                return _0x148f6e != _0x2c2caf;
            },
            JYtHD: function JYtHD(_0x1b8228, _0x2b7286) {
                return _0x1b8228 !== _0x2b7286;
            },
            HSfiT: wanzikun_0x38af("0xa2"),
            iWGKF: function iWGKF(_0x270747, _0x5ad56e) {
                return _0x270747 > _0x5ad56e;
            },
            KGGxP: function KGGxP(_0x24250d, _0x345621) {
                return _0x24250d(_0x345621);
            },
            iqWec: function iqWec(_0x466dc1, _0xe14a0) {
                return _0x466dc1(_0xe14a0);
            }
        };
        var _0xc1149e = _0x528d9c[wanzikun_0x38af("0x52")]["dataset"][wanzikun_0x38af("0x64")];
        var _0x44a5c6 = this["data"][wanzikun_0x38af("0x32")]["list"];
        if (_0x364158["VaVAS"](_0xc1149e, "") && _0x364158[wanzikun_0x38af("0xa3")](_0xc1149e, null)) {
            if (_0x364158["JYtHD"](_0x364158["HSfiT"], wanzikun_0x38af("0xa4"))) {
                if (_0x364158[wanzikun_0x38af("0xa5")](_0x44a5c6[_0x364158[wanzikun_0x38af("0xa6")](parseInt, _0xc1149e)]["number"], 1)) {
                    _0x44a5c6[_0x364158[wanzikun_0x38af("0xa7")](parseInt, _0xc1149e)]["number"]--;
                    this["setGoodsList"](this[wanzikun_0x38af("0x2e")](), this["totalPrice"](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x44a5c6);
                }
            } else {
                if (_0x364158["cvyBr"](_0x528d9c[wanzikun_0x38af("0x4c")][wanzikun_0x38af("0x48")], 1)) {
                    this[wanzikun_0x38af("0xb")]({
                        startX: _0x528d9c[wanzikun_0x38af("0x4c")][0]["clientX"]
                    });
                }
            }
        }
    },
    editTap: function editTap() {
        var _0x5bc4c8 = {
            bCKAP: function bCKAP(_0x554e76, _0x16a0a2) {
                return _0x554e76 < _0x16a0a2;
            }
        };
        var _0x4ad287 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        for (var _0x6a7451 = 0; _0x5bc4c8[wanzikun_0x38af("0xa8")](_0x6a7451, _0x4ad287[wanzikun_0x38af("0x48")]); _0x6a7451++) {
            var _0xcbe7d8 = _0x4ad287[_0x6a7451];
            _0xcbe7d8[wanzikun_0x38af("0x5f")] = ![];
        }
        this["setGoodsList"](!this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this["allSelect"](), this[wanzikun_0x38af("0x31")](), _0x4ad287);
    },
    saveTap: function saveTap() {
        var _0x559a9d = {
            wCNIw: function wCNIw(_0x169573, _0x506e5d) {
                return _0x169573 < _0x506e5d;
            }
        };
        var _0x2b030d = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")]["list"];
        for (var _0x40b25a = 0; _0x559a9d["wCNIw"](_0x40b25a, _0x2b030d[wanzikun_0x38af("0x48")]); _0x40b25a++) {
            var _0x5d153e = _0x2b030d[_0x40b25a];
            _0x5d153e[wanzikun_0x38af("0x5f")] = !![];
        }
        this[wanzikun_0x38af("0x44")](!this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), _0x2b030d);
    },
    getSaveHide: function getSaveHide() {
        var _0x2184f1 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0xa9")];
        return _0x2184f1;
    },
    deleteSelected: function deleteSelected() {
        var _0xc9e498 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
        _0xc9e498 = _0xc9e498[wanzikun_0x38af("0xaa")](function(_0x3777db) {
            return !_0x3777db[wanzikun_0x38af("0x5f")];
        });
        this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this["noSelect"](), _0xc9e498);
    },
    toPayOrder: function toPayOrder() {
        var _this = this;
        var _0x4ee4f7 = {
            DrNeW: function DrNeW(_0x3f5e26, _0x3eaa3d) {
                return _0x3f5e26 !== _0x3eaa3d;
            },
            DKQNI: wanzikun_0x38af("0xab"),
            LLYwC: function LLYwC(_0x17980a, _0x1b4fc2) {
                return _0x17980a / _0x1b4fc2;
            },
            TFapG: function TFapG(_0x1d26da, _0x422049) {
                return _0x1d26da < _0x422049;
            },
            ZdkUW: function ZdkUW(_0x23e67e, _0x1c2fd8) {
                return _0x23e67e * _0x1c2fd8;
            },
            GYjQX: function GYjQX(_0x2c98a4, _0x1440f6) {
                return _0x2c98a4(_0x1440f6);
            },
            wOoUj: function wOoUj(_0xe963ed, _0x2ad5b0) {
                return _0xe963ed - _0x2ad5b0;
            },
            lSgZi: function lSgZi(_0x575614, _0x211382) {
                return _0x575614 > _0x211382;
            },
            ODyLn: function ODyLn(_0x266806, _0x382152) {
                return _0x266806 + _0x382152;
            },
            lpQBE: "margin-left:0px",
            OJWHq: function OJWHq(_0x3b698b, _0x867a2) {
                return _0x3b698b != _0x867a2;
            },
            tsVXo: function tsVXo(_0x1f23ec, _0x4caa8c) {
                return _0x1f23ec === _0x4caa8c;
            },
            sVUMM: wanzikun_0x38af("0xac"),
            ZHrgp: wanzikun_0x38af("0xad"),
            amktV: wanzikun_0x38af("0xae"),
            dddfs: "kGBqV",
            UaDIR: wanzikun_0x38af("0xaf"),
            pMLVm: function pMLVm(_0x563430, _0x21575e) {
                return _0x563430 == _0x21575e;
            },
            lbtjN: function lbtjN(_0x4704d8, _0x3e9a52) {
                return _0x4704d8 !== _0x3e9a52;
            },
            VfXwm: wanzikun_0x38af("0xb0"),
            iDjXV: wanzikun_0x38af("0xb1"),
            gXTec: function gXTec(_0x13f4cb, _0x5e27c4) {
                return _0x13f4cb + _0x5e27c4;
            },
            SfyOg: function SfyOg(_0x3f7ee0, _0x395104) {
                return _0x3f7ee0 + _0x395104;
            },
            oZJQn: function oZJQn(_0x2a3236, _0x4b5313) {
                return _0x2a3236 != _0x4b5313;
            },
            UkHfM: "hsDBw",
            faoNy: function faoNy(_0x2f42ab, _0x34b0f9) {
                return _0x2f42ab + _0x34b0f9;
            },
            ecgNw: " 价格有调整，请重新购买",
            tmtjL: function tmtjL(_0x252262, _0x18eb59) {
                return _0x252262 == _0x18eb59;
            },
            PHiBB: function PHiBB(_0x2b628, _0x29fb79) {
                return _0x2b628 === _0x29fb79;
            },
            xzcdW: wanzikun_0x38af("0xb2"),
            mhsMU: "oTCKC",
            mFcDk: "shopCarInfo",
            fEhJR: function fEhJR(_0x436350, _0x591913) {
                return _0x436350 == _0x591913;
            },
            skflS: function skflS(_0x493c53, _0x5efeea) {
                return _0x493c53 === _0x5efeea;
            },
            PZXRr: wanzikun_0x38af("0xb3"),
            Gltck: function Gltck(_0x1686a4, _0x57cbc2) {
                return _0x1686a4 == _0x57cbc2;
            },
            odzzO: function odzzO(_0x31b545, _0x4c8934) {
                return _0x31b545 !== _0x4c8934;
            },
            hyRQe: wanzikun_0x38af("0xb4"),
            jtGjM: wanzikun_0x38af("0xb5"),
            JiTzK: wanzikun_0x38af("0xb6")
        };
        wx[wanzikun_0x38af("0xb7")]();
        var _0x2d4b97 = this;
        if (this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")]["noSelect"]) {
            wx[wanzikun_0x38af("0x8")]();
            return;
        }
        var _0x19ec2a = [];
        var _0x2ba078 = wx["getStorageSync"](_0x4ee4f7["mFcDk"]);
        if (_0x2ba078 && _0x2ba078[wanzikun_0x38af("0x40")]) {
            _0x19ec2a = _0x2ba078[wanzikun_0x38af("0x40")][wanzikun_0x38af("0xaa")](function(_0x2d19da) {
                if (_0x4ee4f7["DrNeW"](wanzikun_0x38af("0xb8"), _0x4ee4f7[wanzikun_0x38af("0xb9")])) {
                    return _0x2d19da[wanzikun_0x38af("0x5f")];
                } else {
                    var _0x4ff9c1 = e["currentTarget"][wanzikun_0x38af("0x21")]["index"];
                    var _0x18e43f = _this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                    _0x18e43f[wanzikun_0x38af("0x71")](_0x4ff9c1, 1);
                    _this["setGoodsList"](_this[wanzikun_0x38af("0x2e")](), _this[wanzikun_0x38af("0x2f")](), _this["allSelect"](), _this[wanzikun_0x38af("0x31")](), _0x18e43f);
                }
            });
        }
        if (_0x4ee4f7[wanzikun_0x38af("0xba")](_0x19ec2a["length"], 0)) {
            wx[wanzikun_0x38af("0x8")]();
            return;
        }
        var _0x1ea9ae = ![];
        var _0x56a5bd = 0;
        var _0x3cc3bd = _0x19ec2a[wanzikun_0x38af("0x48")];
        for (var _0x54c0f0 = 0; _0x4ee4f7[wanzikun_0x38af("0xbb")](_0x54c0f0, _0x19ec2a[wanzikun_0x38af("0x48")]); _0x54c0f0++) {
            if (_0x4ee4f7[wanzikun_0x38af("0xbc")](wanzikun_0x38af("0xbd"), "JuHYB")) {
                var _0x5e239c = 0;
                try {
                    var _0x50aded = wx["getSystemInfoSync"]()["windowWidth"];
                    var _0x3a47c6 = _0x4ee4f7[wanzikun_0x38af("0xbe")](_0x4ee4f7[wanzikun_0x38af("0xbe")](750, 2), w / 2);
                    _0x5e239c = Math[wanzikun_0x38af("0x5")](_0x50aded / _0x3a47c6);
                    return _0x5e239c;
                } catch (_0xabc5ff) {
                    return ![];
                }
            } else {
                var _0x3ac620;
                var _0x26c387;
                var _ret = function() {
                    if (_0x1ea9ae) {
                        if (_0x4ee4f7[wanzikun_0x38af("0xbf")](_0x4ee4f7["PZXRr"], _0x4ee4f7[wanzikun_0x38af("0xc0")])) {
                            for (_0x3ac620 = 0; _0x4ee4f7[wanzikun_0x38af("0xbb")](_0x3ac620, list[wanzikun_0x38af("0x48")]); _0x3ac620++) {
                                _0x26c387 = list[_0x3ac620];
                                _0x26c387["active"] = ![];
                            }
                        } else {
                            wx[wanzikun_0x38af("0x8")]();
                            return {
                                v: void 0
                            };
                        }
                    }
                    var _0x35f90e = _0x19ec2a[_0x54c0f0];
                    if (!_0x35f90e[wanzikun_0x38af("0xc1")] || _0x4ee4f7[wanzikun_0x38af("0xc2")](_0x35f90e[wanzikun_0x38af("0xc1")], "") || _0x4ee4f7[wanzikun_0x38af("0xc2")](_0x35f90e[wanzikun_0x38af("0xc1")], ":")) {
                        if (_0x4ee4f7[wanzikun_0x38af("0xc3")](_0x4ee4f7[wanzikun_0x38af("0xc4")], _0x4ee4f7["jtGjM"])) {
                            wx[wanzikun_0x38af("0xc5")]({
                                url: _0x4ee4f7[wanzikun_0x38af("0xc6")](wanzikun_0x49c022["globalData"][wanzikun_0x38af("0x38")], wanzikun_0x38af("0xc7")),
                                data: {
                                    id: _0x35f90e[wanzikun_0x38af("0xc8")]
                                },
                                success: function success(_0x41c77f) {
                                    var _0x26f092 = {
                                        WRdsj: function WRdsj(_0x57aac4, _0x224642) {
                                            return _0x4ee4f7[wanzikun_0x38af("0xc9")](_0x57aac4, _0x224642);
                                        },
                                        TlgUq: function TlgUq(_0x4f226b, _0x132212) {
                                            return _0x4ee4f7["lSgZi"](_0x4f226b, _0x132212);
                                        },
                                        dQDzT: function dQDzT(_0x25ae9b, _0x2c03a3) {
                                            return _0x4ee4f7[wanzikun_0x38af("0xca")](_0x25ae9b, _0x2c03a3);
                                        },
                                        JqMJm: _0x4ee4f7["lpQBE"],
                                        yUoAm: function yUoAm(_0x100a76, _0x515b23) {
                                            return _0x4ee4f7[wanzikun_0x38af("0xcb")](_0x100a76, _0x515b23);
                                        },
                                        tZaJk: function tZaJk(_0x41be66, _0x2cc270) {
                                            return _0x4ee4f7[wanzikun_0x38af("0xcc")](_0x41be66, _0x2cc270);
                                        },
                                        fFgcj: function fFgcj(_0x44d980, _0x10fd7f) {
                                            return _0x44d980(_0x10fd7f);
                                        }
                                    };
                                    _0x56a5bd++;
                                    if (_0x41c77f[wanzikun_0x38af("0x19")]["data"][wanzikun_0x38af("0xcd")]) {
                                        if (_0x4ee4f7[wanzikun_0x38af("0xce")](wanzikun_0x38af("0xac"), _0x4ee4f7[wanzikun_0x38af("0xcf")])) {
                                            wx["showModal"]({
                                                title: "提示",
                                                content: _0x41c77f[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")][wanzikun_0x38af("0xd0")][wanzikun_0x38af("0xd1")] + _0x4ee4f7["ZHrgp"],
                                                showCancel: ![]
                                            });
                                            _0x1ea9ae = !![];
                                            wx[wanzikun_0x38af("0x8")]();
                                            return;
                                        } else {
                                            var _0x310c27 = e["changedTouches"][0][wanzikun_0x38af("0x27")];
                                            var _0x13c3f2 = _0x26f092[wanzikun_0x38af("0xd2")](this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x26")], _0x310c27);
                                            var _0x1852b7 = this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0xa")];
                                            var _0x243175 = _0x26f092[wanzikun_0x38af("0xd3")](_0x13c3f2, _0x1852b7 / 2) ? _0x26f092[wanzikun_0x38af("0xd4")](_0x26f092[wanzikun_0x38af("0xd4")](wanzikun_0x38af("0xe"), _0x1852b7), "px") : _0x26f092[wanzikun_0x38af("0xd5")];
                                            var _0xa0c2e5 = this["data"][wanzikun_0x38af("0x32")][wanzikun_0x38af("0x33")];
                                            if (_0x26f092[wanzikun_0x38af("0xd6")](index, "") && _0x26f092[wanzikun_0x38af("0xd7")](index, null)) {
                                                _0xa0c2e5[_0x26f092[wanzikun_0x38af("0xd8")](parseInt, index)]["left"] = _0x243175;
                                                this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this["allSelect"](), this[wanzikun_0x38af("0x31")](), _0xa0c2e5);
                                            }
                                        }
                                    }
                                    if (_0x4ee4f7[wanzikun_0x38af("0xbb")](_0x41c77f[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")][wanzikun_0x38af("0xd0")][wanzikun_0x38af("0xd9")], _0x35f90e[wanzikun_0x38af("0x80")])) {
                                        if (_0x4ee4f7[wanzikun_0x38af("0xda")] === _0x4ee4f7[wanzikun_0x38af("0xdb")]) {
                                            total += _0x4ee4f7[wanzikun_0x38af("0xdc")](_0x4ee4f7[wanzikun_0x38af("0xdd")](parseFloat, curItem[wanzikun_0x38af("0x7d")]), curItem["number"]);
                                        } else {
                                            wx[wanzikun_0x38af("0xde")]({
                                                title: "提示",
                                                content: _0x4ee4f7[wanzikun_0x38af("0xca")](_0x41c77f[wanzikun_0x38af("0x19")]["data"]["basicInfo"][wanzikun_0x38af("0xd1")], _0x4ee4f7["UaDIR"]),
                                                showCancel: ![]
                                            });
                                            _0x1ea9ae = !![];
                                            wx[wanzikun_0x38af("0x8")]();
                                            return;
                                        }
                                    }
                                    if (_0x41c77f[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")][wanzikun_0x38af("0xd0")][wanzikun_0x38af("0xdf")] != _0x35f90e["price"]) {
                                        wx[wanzikun_0x38af("0xde")]({
                                            title: "提示",
                                            content: _0x4ee4f7[wanzikun_0x38af("0xca")](_0x41c77f["data"][wanzikun_0x38af("0x19")][wanzikun_0x38af("0xd0")][wanzikun_0x38af("0xd1")], wanzikun_0x38af("0xe0")),
                                            showCancel: ![]
                                        });
                                        _0x1ea9ae = !![];
                                        wx[wanzikun_0x38af("0x8")]();
                                        return;
                                    }
                                    if (_0x4ee4f7[wanzikun_0x38af("0xe1")](_0x3cc3bd, _0x56a5bd)) {
                                        _0x2d4b97[wanzikun_0x38af("0xe2")]();
                                    }
                                }
                            });
                        } else {
                            wx["hideTabBarRedDot"]({
                                index: 2
                            });
                        }
                    } else {
                        wx[wanzikun_0x38af("0xc5")]({
                            url: wanzikun_0x49c022["globalData"][wanzikun_0x38af("0x38")] + _0x4ee4f7[wanzikun_0x38af("0xe3")],
                            data: {
                                goodsId: _0x35f90e[wanzikun_0x38af("0xc8")],
                                propertyChildIds: _0x35f90e["propertyChildIds"]
                            },
                            success: function success(_0x59567b) {
                                if (_0x4ee4f7[wanzikun_0x38af("0xbf")](wanzikun_0x38af("0xe4"), wanzikun_0x38af("0xe5"))) {
                                    if (_0x4ee4f7[wanzikun_0x38af("0xcc")](_0x59567b[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x3c")], 0)) {
                                        if (_0x4ee4f7[wanzikun_0x38af("0xe6")] !== _0x4ee4f7[wanzikun_0x38af("0xe7")]) {
                                            wx[wanzikun_0x38af("0xde")]({
                                                title: "提示",
                                                content: _0x4ee4f7[wanzikun_0x38af("0xe8")](_0x59567b[wanzikun_0x38af("0x19")]["msg"], "请联系客服"),
                                                showCancel: ![]
                                            });
                                            wx[wanzikun_0x38af("0x8")]();
                                            return;
                                        } else {
                                            wx[wanzikun_0x38af("0x8")]();
                                            return;
                                        }
                                    }
                                    _0x56a5bd++;
                                    if (_0x4ee4f7[wanzikun_0x38af("0xbb")](_0x59567b[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")]["stores"], _0x35f90e[wanzikun_0x38af("0x80")])) {
                                        wx[wanzikun_0x38af("0xde")]({
                                            title: "提示",
                                            content: _0x4ee4f7[wanzikun_0x38af("0xe9")](_0x35f90e[wanzikun_0x38af("0xd1")], _0x4ee4f7[wanzikun_0x38af("0xea")]),
                                            showCancel: ![]
                                        });
                                        _0x1ea9ae = !![];
                                        wx[wanzikun_0x38af("0x8")]();
                                        return;
                                    }
                                    if (_0x4ee4f7[wanzikun_0x38af("0xeb")](_0x59567b[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")][wanzikun_0x38af("0x7d")], _0x35f90e[wanzikun_0x38af("0x7d")])) {
                                        if (_0x4ee4f7[wanzikun_0x38af("0xce")](_0x4ee4f7[wanzikun_0x38af("0xec")], wanzikun_0x38af("0xed"))) {
                                            if (_0x59567b[wanzikun_0x38af("0x19")][wanzikun_0x38af("0x19")][wanzikun_0x38af("0x3d")] > 0) {
                                                wx[wanzikun_0x38af("0x20")]({
                                                    index: 3
                                                });
                                            } else {
                                                wx[wanzikun_0x38af("0x35")]({
                                                    index: 3
                                                });
                                            }
                                        } else {
                                            wx[wanzikun_0x38af("0xde")]({
                                                title: "提示",
                                                content: _0x4ee4f7[wanzikun_0x38af("0xc6")](_0x35f90e[wanzikun_0x38af("0xd1")], _0x4ee4f7[wanzikun_0x38af("0xee")]),
                                                showCancel: ![]
                                            });
                                            _0x1ea9ae = !![];
                                            wx[wanzikun_0x38af("0x8")]();
                                            return;
                                        }
                                    }
                                    if (_0x4ee4f7[wanzikun_0x38af("0xef")](_0x3cc3bd, _0x56a5bd)) {
                                        if (_0x4ee4f7[wanzikun_0x38af("0xf0")](_0x4ee4f7[wanzikun_0x38af("0xf1")], _0x4ee4f7[wanzikun_0x38af("0xf2")])) {
                                            var _0x16bf00 = this["getEleWidth"](this[wanzikun_0x38af("0x19")][wanzikun_0x38af("0xa")]);
                                            this[wanzikun_0x38af("0xb")]({
                                                delBtnWidth: _0x16bf00
                                            });
                                        } else {
                                            _0x2d4b97[wanzikun_0x38af("0xe2")]();
                                        }
                                    }
                                } else {
                                    list[_0x4ee4f7[wanzikun_0x38af("0xdd")](parseInt, index)][wanzikun_0x38af("0x5f")] = !list[parseInt(index)][wanzikun_0x38af("0x5f")];
                                    this[wanzikun_0x38af("0x44")](this[wanzikun_0x38af("0x2e")](), this[wanzikun_0x38af("0x2f")](), this[wanzikun_0x38af("0x30")](), this[wanzikun_0x38af("0x31")](), list);
                                }
                            }
                        });
                    }
                }();
                if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
            }
        }
    },
    navigateToPayOrder: function navigateToPayOrder() {
        wx[wanzikun_0x38af("0x8")]();
        wx["navigateTo"]({
            url: wanzikun_0x38af("0x82")
        });
    }
});