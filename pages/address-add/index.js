var wanzikun_0x3976 = [ "SAnIs", "cYEGA", "wRrVl", "WJkux", "code", "provinceStr", "cityStr", "areaStr", "setDBSaveAddressId", "wtTJJ", "cityList", "selCityIndex", "selDistrict", "sbmeq", "UBhVM", "cityData", "selProvinceIndex", "districtList", "selDistrictIndex", "pqWcO", "ObZeY", "name", "setData", "PbdoF", "xsHDp", "wlvpq", "rENLR", "VpIys", "districtId", "request", "JvmQg", "globalData", "gsKIJ", "token", "UIEKt", "ntaPy", "owhav", "Rfvro", "xqrds", "hideLoading", "bindPickerChange", "initCityData", "pGUJQ", "rRepM", "AQOuR", "cHlaH", "dqaYu", "length", "push", "zfnoi", "bhgNC", "DhRvE", "TXZqs", "WSrld", "sPqwG", "CWACA", "uYUJX", "showLoading", "knySe", "urls", "/user/shipping-address/detail", "kcPjg", "ydzGz", "zNvKS", "uoirT", "YfSBf", "pEOyE", "provinceId", "qZGvi", "cityId", "btRBg", "vRDJe", "JBhDB", "FiWOj", "ZhdNk", "hbeke", "jSLNR", "bqRYH", "/user/shipping-address/delete", "rsFjS", "用户点击取消", "确定要删除该收货地址吗？", "currentTarget", "dataset", "avQwF", "SbCue", "AtgUS", "confirm", "DcmGm", "qsaQe", "CLupg", "qGroL", "bindPickerCityChange", "CZDWj", "cancel", "fCJOT", "BqrRo", "log", "HnoqC", "XTPZg", "odHAr", "hhABU", "Hadvi", "YoxQP", "TXvGV", "mzXKm", "provinceName", "cityName", "iVluI", "ILxcx", "kWmNk", "bindPickerProvinceChange", "azYpS", "fkNhf", "Dhixj", "OHWUA", "umRiq", "../../utils/city.js", "请选择", "navigateBack", "无法获取快递地址数据", "Yfxms", "PZMWl", "请填写联系人姓名", "请填写手机号码", "KkgyB", "XYWTF", "请填写详细地址", "请填写邮编", "add", "update", "jDcIB", "/user/shipping-address/", "true", "detail", "value", "linkMan", "address", "mobile", "Bgdvx", "showModal", "EAEei", "IAxBe", "data", "selProvince", "hJrza", "MuNrb", "selCity" ];

(function(_0x529094, _0x545a3f) {
    var _0x19880c = function _0x19880c(_0x4f67c4) {
        while (--_0x4f67c4) {
            _0x529094["push"](_0x529094["shift"]());
        }
    };
    _0x19880c(++_0x545a3f);
})(wanzikun_0x3976, 117);

var wanzikun_0x9c5f = function wanzikun_0x9c5f(_0x5a2255, _0x2b9de7) {
    _0x5a2255 = _0x5a2255 - 0;
    var _0x3e8f0b = wanzikun_0x3976[_0x5a2255];
    return _0x3e8f0b;
};

var wanzikun_0x261d09 = require(wanzikun_0x9c5f("0x0"));

var wanzikun_0x112844 = getApp();

Page({
    data: {
        provinces: [],
        citys: [],
        districts: [],
        selProvince: wanzikun_0x9c5f("0x1"),
        selCity: wanzikun_0x9c5f("0x1"),
        selDistrict: wanzikun_0x9c5f("0x1"),
        selProvinceIndex: 0,
        selCityIndex: 0,
        selDistrictIndex: 0
    },
    bindCancel: function bindCancel() {
        wx[wanzikun_0x9c5f("0x2")]({});
    },
    bindSave: function bindSave(_0x4795d5) {
        var _0x101c8f = {
            WJkux: function WJkux(_0x192b40, _0x195d97) {
                return _0x192b40 == _0x195d97;
            },
            wtTJJ: wanzikun_0x9c5f("0x3"),
            Bgdvx: function Bgdvx(_0x4978e8, _0x1ff776) {
                return _0x4978e8 == _0x1ff776;
            },
            SAnIs: wanzikun_0x9c5f("0x1"),
            ntaPy: function ntaPy(_0x560018, _0x170fe4) {
                return _0x560018 !== _0x170fe4;
            },
            owhav: wanzikun_0x9c5f("0x4"),
            Rfvro: function Rfvro(_0x339c41, _0x532097) {
                return _0x339c41 != _0x532097;
            },
            KucBz: function KucBz(_0x28ddcf, _0x52a093) {
                return _0x28ddcf === _0x52a093;
            },
            xqrds: wanzikun_0x9c5f("0x5"),
            EAEei: wanzikun_0x9c5f("0x6"),
            IAxBe: wanzikun_0x9c5f("0x7"),
            hJrza: "请选择地区",
            MuNrb: function MuNrb(_0x48a3d4, _0x1bfc96) {
                return _0x48a3d4 == _0x1bfc96;
            },
            SVWpL: function SVWpL(_0x4db1b0, _0x46d77c) {
                return _0x4db1b0 !== _0x46d77c;
            },
            cYEGA: wanzikun_0x9c5f("0x8"),
            wRrVl: wanzikun_0x9c5f("0x9"),
            UbgAz: function UbgAz(_0x140c4c, _0x566859) {
                return _0x140c4c === _0x566859;
            },
            UBhVM: "sbmeq",
            pqWcO: wanzikun_0x9c5f("0xa"),
            bFdMv: "mKGWp",
            PbdoF: wanzikun_0x9c5f("0xb"),
            xsHDp: wanzikun_0x9c5f("0xc"),
            wlvpq: wanzikun_0x9c5f("0xd"),
            rENLR: "NXNmX",
            VpIys: wanzikun_0x9c5f("0xe"),
            JvmQg: function JvmQg(_0x41007b, _0x34184a) {
                return _0x41007b + _0x34184a;
            },
            gsKIJ: wanzikun_0x9c5f("0xf"),
            UIEKt: wanzikun_0x9c5f("0x10")
        };
        var _0x1e4b50 = this;
        var _0xddf36e = _0x4795d5[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")][wanzikun_0x9c5f("0x13")];
        var _0xb59dd7 = _0x4795d5["detail"]["value"][wanzikun_0x9c5f("0x14")];
        var _0x22d5e3 = _0x4795d5["detail"]["value"][wanzikun_0x9c5f("0x15")];
        var _0x300c32 = _0x4795d5[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")]["code"];
        if (_0x101c8f[wanzikun_0x9c5f("0x16")](_0xddf36e, "")) {
            wx[wanzikun_0x9c5f("0x17")]({
                title: "提示",
                content: _0x101c8f[wanzikun_0x9c5f("0x18")],
                showCancel: ![]
            });
            return;
        }
        if (_0x101c8f[wanzikun_0x9c5f("0x16")](_0x22d5e3, "")) {
            wx[wanzikun_0x9c5f("0x17")]({
                title: "提示",
                content: _0x101c8f[wanzikun_0x9c5f("0x19")],
                showCancel: ![]
            });
            return;
        }
        if (_0x101c8f[wanzikun_0x9c5f("0x16")](this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1b")], "请选择")) {
            wx[wanzikun_0x9c5f("0x17")]({
                title: "提示",
                content: _0x101c8f[wanzikun_0x9c5f("0x1c")],
                showCancel: ![]
            });
            return;
        }
        if (_0x101c8f[wanzikun_0x9c5f("0x1d")](this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1e")], _0x101c8f[wanzikun_0x9c5f("0x1f")])) {
            if (_0x101c8f["SVWpL"](_0x101c8f[wanzikun_0x9c5f("0x20")], _0x101c8f[wanzikun_0x9c5f("0x21")])) {
                wx[wanzikun_0x9c5f("0x17")]({
                    title: "提示",
                    content: _0x101c8f[wanzikun_0x9c5f("0x1c")],
                    showCancel: ![]
                });
                return;
            } else {
                wx["hideLoading"]();
                if (_0x101c8f[wanzikun_0x9c5f("0x22")](res[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x23")], 0)) {
                    _0x1e4b50["setData"]({
                        id: id,
                        addressData: res[wanzikun_0x9c5f("0x1a")]["data"],
                        selProvince: res[wanzikun_0x9c5f("0x1a")]["data"][wanzikun_0x9c5f("0x24")],
                        selCity: res[wanzikun_0x9c5f("0x1a")]["data"][wanzikun_0x9c5f("0x25")],
                        selDistrict: res[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x26")]
                    });
                    _0x1e4b50[wanzikun_0x9c5f("0x27")](res[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1a")]);
                    return;
                } else {
                    wx[wanzikun_0x9c5f("0x17")]({
                        title: "提示",
                        content: _0x101c8f[wanzikun_0x9c5f("0x28")],
                        showCancel: ![]
                    });
                }
            }
        }
        var _0x87859e = wanzikun_0x261d09["cityData"][this["data"]["selProvinceIndex"]][wanzikun_0x9c5f("0x29")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2a")]]["id"];
        var _0x44073e;
        if (_0x101c8f[wanzikun_0x9c5f("0x1d")](this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2b")], wanzikun_0x9c5f("0x1")) || !this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2b")]) {
            _0x44073e = "";
        } else {
            if (_0x101c8f["UbgAz"](wanzikun_0x9c5f("0x2c"), _0x101c8f[wanzikun_0x9c5f("0x2d")])) {
                _0x44073e = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")]][wanzikun_0x9c5f("0x29")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2a")]][wanzikun_0x9c5f("0x30")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x31")]]["id"];
            } else {
                wx[wanzikun_0x9c5f("0x2")]({});
            }
        }
        if (_0x101c8f[wanzikun_0x9c5f("0x1d")](_0xb59dd7, "")) {
            wx[wanzikun_0x9c5f("0x17")]({
                title: "提示",
                content: _0x101c8f[wanzikun_0x9c5f("0x32")],
                showCancel: ![]
            });
            return;
        }
        if (_0x101c8f[wanzikun_0x9c5f("0x1d")](_0x300c32, "")) {
            if (_0x101c8f["bFdMv"] === wanzikun_0x9c5f("0x33")) {
                var _0x5efb29 = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")]][wanzikun_0x9c5f("0x29")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2a")]]["districtList"][event[wanzikun_0x9c5f("0x11")]["value"]];
                if (_0x5efb29 && _0x5efb29[wanzikun_0x9c5f("0x34")] && event[wanzikun_0x9c5f("0x11")]["value"]) {
                    this[wanzikun_0x9c5f("0x35")]({
                        selDistrict: _0x5efb29[wanzikun_0x9c5f("0x34")],
                        selDistrictIndex: event[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")]
                    });
                }
            } else {
                wx[wanzikun_0x9c5f("0x17")]({
                    title: "提示",
                    content: _0x101c8f[wanzikun_0x9c5f("0x36")],
                    showCancel: ![]
                });
                return;
            }
        }
        var _0x46e5a6 = _0x101c8f[wanzikun_0x9c5f("0x37")];
        var _0x242ee2 = _0x1e4b50["data"]["id"];
        if (_0x242ee2) {
            _0x46e5a6 = _0x101c8f[wanzikun_0x9c5f("0x38")];
        } else {
            if (_0x101c8f["SVWpL"](_0x101c8f[wanzikun_0x9c5f("0x39")], _0x101c8f[wanzikun_0x9c5f("0x3a")])) {
                _0x242ee2 = 0;
            } else {
                if (_0x101c8f[wanzikun_0x9c5f("0x16")](data[wanzikun_0x9c5f("0x3b")], wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][i][wanzikun_0x9c5f("0x29")][j][wanzikun_0x9c5f("0x30")][k]["id"])) {
                    this["data"][wanzikun_0x9c5f("0x31")] = k;
                }
            }
        }
        wx[wanzikun_0x9c5f("0x3c")]({
            url: _0x101c8f["JvmQg"](_0x101c8f[wanzikun_0x9c5f("0x3d")](wanzikun_0x112844[wanzikun_0x9c5f("0x3e")]["urls"], _0x101c8f[wanzikun_0x9c5f("0x3f")]), _0x46e5a6),
            data: {
                token: wanzikun_0x112844[wanzikun_0x9c5f("0x3e")][wanzikun_0x9c5f("0x40")],
                id: _0x242ee2,
                provinceId: wanzikun_0x261d09["cityData"][this[wanzikun_0x9c5f("0x1a")]["selProvinceIndex"]]["id"],
                cityId: _0x87859e,
                districtId: _0x44073e,
                linkMan: _0xddf36e,
                address: _0xb59dd7,
                mobile: _0x22d5e3,
                code: _0x300c32,
                isDefault: _0x101c8f[wanzikun_0x9c5f("0x41")]
            },
            success: function success(_0x30adfe) {
                if (_0x101c8f[wanzikun_0x9c5f("0x42")]("iVmMD", _0x101c8f[wanzikun_0x9c5f("0x43")])) {
                    if (_0x101c8f[wanzikun_0x9c5f("0x44")](_0x30adfe[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x23")], 0)) {
                        if (_0x101c8f["KucBz"](_0x101c8f["xqrds"], _0x101c8f[wanzikun_0x9c5f("0x45")])) {
                            wx[wanzikun_0x9c5f("0x46")]();
                            wx[wanzikun_0x9c5f("0x17")]({
                                title: "失败",
                                content: _0x30adfe[wanzikun_0x9c5f("0x1a")]["msg"],
                                showCancel: ![]
                            });
                            return;
                        } else {
                            eventJ = {
                                detail: {
                                    value: k
                                }
                            };
                            _0x1e4b50[wanzikun_0x9c5f("0x47")](eventJ);
                        }
                    }
                    wx["navigateBack"]({});
                } else {
                    var _0x9dd7c9 = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")]][wanzikun_0x9c5f("0x29")][event["detail"][wanzikun_0x9c5f("0x12")]];
                    this[wanzikun_0x9c5f("0x35")]({
                        selCity: _0x9dd7c9[wanzikun_0x9c5f("0x34")],
                        selCityIndex: event["detail"][wanzikun_0x9c5f("0x12")],
                        selDistrict: _0x101c8f[wanzikun_0x9c5f("0x1f")],
                        selDistrictIndex: 0
                    });
                    this[wanzikun_0x9c5f("0x48")](3, _0x9dd7c9);
                }
            }
        });
    },
    initCityData: function initCityData(_0x333907, _0x52ff53) {
        var _0x2d9a26 = {
            cHlaH: function cHlaH(_0x356cc2, _0x2a93be) {
                return _0x356cc2 == _0x2a93be;
            },
            PXUkM: wanzikun_0x9c5f("0x49"),
            dqaYu: "yeeMT",
            zfnoi: wanzikun_0x9c5f("0x4a"),
            bhgNC: function bhgNC(_0x566a74, _0x1072ec) {
                return _0x566a74 < _0x1072ec;
            },
            fNYdz: function fNYdz(_0xfa6c6d, _0x5ce8af) {
                return _0xfa6c6d == _0x5ce8af;
            },
            DhRvE: wanzikun_0x9c5f("0x4b")
        };
        if (_0x2d9a26[wanzikun_0x9c5f("0x4c")](_0x333907, 1)) {
            if (_0x2d9a26["PXUkM"] !== _0x2d9a26[wanzikun_0x9c5f("0x4d")]) {
                var _0x1a6130 = [];
                for (var _0xdc9518 = 0; _0xdc9518 < wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][wanzikun_0x9c5f("0x4e")]; _0xdc9518++) {
                    _0x1a6130[wanzikun_0x9c5f("0x4f")](wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0xdc9518]["name"]);
                }
                this[wanzikun_0x9c5f("0x35")]({
                    provinces: _0x1a6130
                });
            } else {
                _0x1a6130[wanzikun_0x9c5f("0x4f")](_0x1ff3f6[_0xdc9518][wanzikun_0x9c5f("0x34")]);
            }
        } else if (_0x333907 == 2) {
            if (_0x2d9a26[wanzikun_0x9c5f("0x50")] === _0x2d9a26[wanzikun_0x9c5f("0x50")]) {
                var _0x1a6130 = [];
                var _0x1ff3f6 = _0x52ff53[wanzikun_0x9c5f("0x29")];
                for (var _0xdc9518 = 0; _0x2d9a26[wanzikun_0x9c5f("0x51")](_0xdc9518, _0x1ff3f6[wanzikun_0x9c5f("0x4e")]); _0xdc9518++) {
                    _0x1a6130[wanzikun_0x9c5f("0x4f")](_0x1ff3f6[_0xdc9518][wanzikun_0x9c5f("0x34")]);
                }
                this[wanzikun_0x9c5f("0x35")]({
                    citys: _0x1a6130
                });
            } else {
                this["data"][wanzikun_0x9c5f("0x31")] = k;
            }
        } else if (_0x2d9a26["fNYdz"](_0x333907, 3)) {
            var _0x1a6130 = [];
            var _0x1ff3f6 = _0x52ff53[wanzikun_0x9c5f("0x30")];
            for (var _0xdc9518 = 0; _0x2d9a26[wanzikun_0x9c5f("0x51")](_0xdc9518, _0x1ff3f6[wanzikun_0x9c5f("0x4e")]); _0xdc9518++) {
                if (_0x2d9a26[wanzikun_0x9c5f("0x52")] !== _0x2d9a26[wanzikun_0x9c5f("0x52")]) {
                    this["setData"]({
                        selDistrict: selIterm["name"],
                        selDistrictIndex: event[wanzikun_0x9c5f("0x11")]["value"]
                    });
                } else {
                    _0x1a6130[wanzikun_0x9c5f("0x4f")](_0x1ff3f6[_0xdc9518][wanzikun_0x9c5f("0x34")]);
                }
            }
            this["setData"]({
                districts: _0x1a6130
            });
        }
    },
    bindPickerProvinceChange: function bindPickerProvinceChange(_0x386a8c) {
        var _0xa6e825 = {
            TXZqs: wanzikun_0x9c5f("0x1")
        };
        var _0x6c497d = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x386a8c[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")]];
        this[wanzikun_0x9c5f("0x35")]({
            selProvince: _0x6c497d[wanzikun_0x9c5f("0x34")],
            selProvinceIndex: _0x386a8c[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")],
            selCity: _0xa6e825[wanzikun_0x9c5f("0x53")],
            selCityIndex: 0,
            selDistrict: "请选择",
            selDistrictIndex: 0
        });
        this[wanzikun_0x9c5f("0x48")](2, _0x6c497d);
    },
    bindPickerCityChange: function bindPickerCityChange(_0x40bb46) {
        var _0xd159b4 = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this["data"]["selProvinceIndex"]][wanzikun_0x9c5f("0x29")][_0x40bb46["detail"][wanzikun_0x9c5f("0x12")]];
        this[wanzikun_0x9c5f("0x35")]({
            selCity: _0xd159b4["name"],
            selCityIndex: _0x40bb46[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")],
            selDistrict: wanzikun_0x9c5f("0x1"),
            selDistrictIndex: 0
        });
        this[wanzikun_0x9c5f("0x48")](3, _0xd159b4);
    },
    bindPickerChange: function bindPickerChange(_0x5e1e94) {
        var _0x57161c = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")]]["cityList"][this["data"][wanzikun_0x9c5f("0x2a")]]["districtList"][_0x5e1e94[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")]];
        if (_0x57161c && _0x57161c[wanzikun_0x9c5f("0x34")] && _0x5e1e94[wanzikun_0x9c5f("0x11")][wanzikun_0x9c5f("0x12")]) {
            this[wanzikun_0x9c5f("0x35")]({
                selDistrict: _0x57161c[wanzikun_0x9c5f("0x34")],
                selDistrictIndex: _0x5e1e94["detail"]["value"]
            });
        }
    },
    onLoad: function onLoad(_0x1afd86) {
        var _0x5485aa = {
            UqApT: function UqApT(_0x468002, _0x5607d2) {
                return _0x468002 == _0x5607d2;
            },
            kcPjg: wanzikun_0x9c5f("0x3"),
            sPqwG: function sPqwG(_0xea3be1, _0xa1bfef) {
                return _0xea3be1 === _0xa1bfef;
            },
            CWACA: wanzikun_0x9c5f("0x54"),
            uYUJX: "JEkiu",
            knySe: function knySe(_0x46b072, _0x13ded8) {
                return _0x46b072 + _0x13ded8;
            }
        };
        var _0x31ba1c = this;
        this[wanzikun_0x9c5f("0x48")](1);
        var _0x5de069 = _0x1afd86["id"];
        if (_0x5de069) {
            if (_0x5485aa[wanzikun_0x9c5f("0x55")](_0x5485aa[wanzikun_0x9c5f("0x56")], _0x5485aa[wanzikun_0x9c5f("0x57")])) {
                districtId = "";
            } else {
                wx[wanzikun_0x9c5f("0x58")]();
                wx[wanzikun_0x9c5f("0x3c")]({
                    url: _0x5485aa[wanzikun_0x9c5f("0x59")](wanzikun_0x112844[wanzikun_0x9c5f("0x3e")][wanzikun_0x9c5f("0x5a")], wanzikun_0x9c5f("0x5b")),
                    data: {
                        token: wanzikun_0x112844[wanzikun_0x9c5f("0x3e")][wanzikun_0x9c5f("0x40")],
                        id: _0x5de069
                    },
                    success: function success(_0x7078af) {
                        wx[wanzikun_0x9c5f("0x46")]();
                        if (_0x5485aa["UqApT"](_0x7078af[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x23")], 0)) {
                            _0x31ba1c[wanzikun_0x9c5f("0x35")]({
                                id: _0x5de069,
                                addressData: _0x7078af[wanzikun_0x9c5f("0x1a")]["data"],
                                selProvince: _0x7078af[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x24")],
                                selCity: _0x7078af["data"][wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x25")],
                                selDistrict: _0x7078af["data"][wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x26")]
                            });
                            _0x31ba1c[wanzikun_0x9c5f("0x27")](_0x7078af[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x1a")]);
                            return;
                        } else {
                            wx[wanzikun_0x9c5f("0x17")]({
                                title: "提示",
                                content: _0x5485aa[wanzikun_0x9c5f("0x5c")],
                                showCancel: ![]
                            });
                        }
                    }
                });
            }
        }
    },
    setDBSaveAddressId: function setDBSaveAddressId(_0x296a24) {
        var _0x5714df = {
            JBhDB: wanzikun_0x9c5f("0x7"),
            YfSBf: function YfSBf(_0xa09704, _0x294ec9) {
                return _0xa09704 < _0x294ec9;
            },
            pEOyE: function pEOyE(_0x1045a7, _0x4d96eb) {
                return _0x1045a7 == _0x4d96eb;
            },
            qZGvi: function qZGvi(_0x2a615c, _0x19fcc6) {
                return _0x2a615c < _0x19fcc6;
            },
            btRBg: wanzikun_0x9c5f("0x5d"),
            FiWOj: function FiWOj(_0x3d099f, _0x476445) {
                return _0x3d099f == _0x476445;
            },
            ZhdNk: function ZhdNk(_0x3c214a, _0x4199fe) {
                return _0x3c214a !== _0x4199fe;
            },
            hbeke: wanzikun_0x9c5f("0x5e"),
            jSLNR: wanzikun_0x9c5f("0x5f")
        };
        var _0x46a763 = 0;
        for (var _0x536f5a = 0; _0x5714df[wanzikun_0x9c5f("0x60")](_0x536f5a, wanzikun_0x261d09["cityData"][wanzikun_0x9c5f("0x4e")]); _0x536f5a++) {
            if (_0x5714df[wanzikun_0x9c5f("0x61")](_0x296a24[wanzikun_0x9c5f("0x62")], wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x536f5a]["id"])) {
                this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")] = _0x536f5a;
                for (var _0xb4bbed = 0; _0x5714df[wanzikun_0x9c5f("0x63")](_0xb4bbed, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x536f5a][wanzikun_0x9c5f("0x29")][wanzikun_0x9c5f("0x4e")]); _0xb4bbed++) {
                    if (_0x296a24[wanzikun_0x9c5f("0x64")] == wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x536f5a][wanzikun_0x9c5f("0x29")][_0xb4bbed]["id"]) {
                        if (_0x5714df[wanzikun_0x9c5f("0x65")] !== _0x5714df[wanzikun_0x9c5f("0x65")]) {
                            wx[wanzikun_0x9c5f("0x17")]({
                                title: "提示",
                                content: wanzikun_0x9c5f("0xa"),
                                showCancel: ![]
                            });
                            return;
                        } else {
                            this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2a")] = _0xb4bbed;
                            for (var _0x1ca4bb = 0; _0x1ca4bb < wanzikun_0x261d09["cityData"][_0x536f5a][wanzikun_0x9c5f("0x29")][_0xb4bbed]["districtList"][wanzikun_0x9c5f("0x4e")]; _0x1ca4bb++) {
                                if (wanzikun_0x9c5f("0x66") === "BIwwn") {
                                    wx["showModal"]({
                                        title: "提示",
                                        content: _0x5714df[wanzikun_0x9c5f("0x67")],
                                        showCancel: ![]
                                    });
                                    return;
                                } else {
                                    if (_0x5714df[wanzikun_0x9c5f("0x68")](_0x296a24[wanzikun_0x9c5f("0x3b")], wanzikun_0x261d09["cityData"][_0x536f5a][wanzikun_0x9c5f("0x29")][_0xb4bbed][wanzikun_0x9c5f("0x30")][_0x1ca4bb]["id"])) {
                                        if (_0x5714df[wanzikun_0x9c5f("0x69")](_0x5714df[wanzikun_0x9c5f("0x6a")], _0x5714df[wanzikun_0x9c5f("0x6b")])) {
                                            this["data"][wanzikun_0x9c5f("0x31")] = _0x1ca4bb;
                                        } else {
                                            pinkArray[wanzikun_0x9c5f("0x4f")](dataArray[_0x536f5a][wanzikun_0x9c5f("0x34")]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    selectCity: function selectCity() {},
    deleteAddress: function deleteAddress(_0x5de9ce) {
        var _0x474a41 = {
            koIbM: function koIbM(_0x5cad6e, _0x3ed130) {
                return _0x5cad6e < _0x3ed130;
            },
            fCJOT: function fCJOT(_0x418698, _0x4f212b) {
                return _0x418698 === _0x4f212b;
            },
            SbCue: wanzikun_0x9c5f("0x6c"),
            AtgUS: wanzikun_0x9c5f("0x3"),
            DcmGm: wanzikun_0x9c5f("0x6d"),
            BqrRo: wanzikun_0x9c5f("0x6e"),
            HnoqC: wanzikun_0x9c5f("0x6f"),
            avQwF: wanzikun_0x9c5f("0x70")
        };
        var _0x26d8c5 = this;
        var _0x39983a = _0x5de9ce[wanzikun_0x9c5f("0x71")][wanzikun_0x9c5f("0x72")]["id"];
        wx[wanzikun_0x9c5f("0x17")]({
            title: "提示",
            content: _0x474a41[wanzikun_0x9c5f("0x73")],
            success: function success(_0x1161f9) {
                var _0xa76e52 = {
                    qsaQe: function qsaQe(_0x2eaaa5, _0x2aeee4) {
                        return _0x474a41["koIbM"](_0x2eaaa5, _0x2aeee4);
                    },
                    CLupg: function CLupg(_0x454dda, _0x47368b) {
                        return _0x474a41["fCJOT"](_0x454dda, _0x47368b);
                    },
                    qGroL: _0x474a41[wanzikun_0x9c5f("0x74")],
                    XTPZg: _0x474a41[wanzikun_0x9c5f("0x75")]
                };
                if (_0x1161f9[wanzikun_0x9c5f("0x76")]) {
                    wx["request"]({
                        url: wanzikun_0x112844[wanzikun_0x9c5f("0x3e")][wanzikun_0x9c5f("0x5a")] + _0x474a41[wanzikun_0x9c5f("0x77")],
                        data: {
                            token: wanzikun_0x112844[wanzikun_0x9c5f("0x3e")][wanzikun_0x9c5f("0x40")],
                            id: _0x39983a
                        },
                        success: function success(_0x1161f9) {
                            var _0x5afdef = {
                                CZDWj: function CZDWj(_0x5123af, _0x50966c) {
                                    return _0xa76e52[wanzikun_0x9c5f("0x78")](_0x5123af, _0x50966c);
                                },
                                aUkTT: function aUkTT(_0x15d29b, _0x3c9e5a) {
                                    return _0x15d29b == _0x3c9e5a;
                                }
                            };
                            if (_0xa76e52[wanzikun_0x9c5f("0x79")]("yfcRB", _0xa76e52[wanzikun_0x9c5f("0x7a")])) {
                                eventJ = {
                                    detail: {
                                        value: j
                                    }
                                };
                                _0x26d8c5[wanzikun_0x9c5f("0x7b")](eventJ);
                                for (var _0x34025f = 0; _0x5afdef[wanzikun_0x9c5f("0x7c")](_0x34025f, wanzikun_0x261d09["cityData"][i][wanzikun_0x9c5f("0x29")][j][wanzikun_0x9c5f("0x30")][wanzikun_0x9c5f("0x4e")]); _0x34025f++) {
                                    if (_0x5afdef["aUkTT"](diatrictName, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][i][wanzikun_0x9c5f("0x29")][j][wanzikun_0x9c5f("0x30")][_0x34025f][wanzikun_0x9c5f("0x34")])) {
                                        eventJ = {
                                            detail: {
                                                value: _0x34025f
                                            }
                                        };
                                        _0x26d8c5[wanzikun_0x9c5f("0x47")](eventJ);
                                    }
                                }
                            } else {
                                wx[wanzikun_0x9c5f("0x2")]({});
                            }
                        }
                    });
                } else if (_0x1161f9[wanzikun_0x9c5f("0x7d")]) {
                    if (_0x474a41[wanzikun_0x9c5f("0x7e")](wanzikun_0x9c5f("0x6e"), _0x474a41[wanzikun_0x9c5f("0x7f")])) {
                        console[wanzikun_0x9c5f("0x80")](_0x474a41[wanzikun_0x9c5f("0x81")]);
                    } else {
                        wx[wanzikun_0x9c5f("0x17")]({
                            title: "提示",
                            content: _0xa76e52[wanzikun_0x9c5f("0x82")],
                            showCancel: ![]
                        });
                    }
                }
            }
        });
    },
    readFromWx: function readFromWx() {
        var _0xb182ba = {
            azYpS: function azYpS(_0xf71ee2, _0x5f35c7) {
                return _0xf71ee2 == _0x5f35c7;
            },
            Dhixj: function Dhixj(_0x47f599, _0x14e56c) {
                return _0x47f599 < _0x14e56c;
            },
            iVluI: function iVluI(_0x2e229a, _0xb7caf4) {
                return _0x2e229a < _0xb7caf4;
            },
            ILxcx: function ILxcx(_0x1fe7b0, _0x3e1a11) {
                return _0x1fe7b0 !== _0x3e1a11;
            },
            kWmNk: wanzikun_0x9c5f("0x83"),
            LiBUt: wanzikun_0x9c5f("0x84"),
            GrgRy: function GrgRy(_0x2fffd2, _0x56af28) {
                return _0x2fffd2 === _0x56af28;
            },
            fkNhf: wanzikun_0x9c5f("0x85"),
            EJtxB: wanzikun_0x9c5f("0x86"),
            OHWUA: wanzikun_0x9c5f("0x87"),
            umRiq: wanzikun_0x9c5f("0x88")
        };
        var _0x51850c = this;
        wx["chooseAddress"]({
            success: function success(_0x27e1df) {
                console[wanzikun_0x9c5f("0x80")](_0x27e1df);
                var _0xd88986 = _0x27e1df[wanzikun_0x9c5f("0x89")];
                var _0x58e908 = _0x27e1df[wanzikun_0x9c5f("0x8a")];
                var _0xdb1721 = _0x27e1df["countyName"];
                var _0x59c848 = 0;
                for (var _0x399524 = 0; _0xb182ba[wanzikun_0x9c5f("0x8b")](_0x399524, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][wanzikun_0x9c5f("0x4e")]); _0x399524++) {
                    if (_0xd88986 == wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x34")]) {
                        if (_0xb182ba[wanzikun_0x9c5f("0x8c")](_0xb182ba[wanzikun_0x9c5f("0x8d")], _0xb182ba["LiBUt"])) {
                            var _0x4af7da = {
                                detail: {
                                    value: _0x399524
                                }
                            };
                            _0x51850c[wanzikun_0x9c5f("0x8e")](_0x4af7da);
                            _0x51850c[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2f")] = _0x399524;
                            for (var _0x3fe3ce = 0; _0xb182ba["iVluI"](_0x3fe3ce, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524]["cityList"]["length"]); _0x3fe3ce++) {
                                if (_0xb182ba[wanzikun_0x9c5f("0x8f")](_0x58e908, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce][wanzikun_0x9c5f("0x34")])) {
                                    _0x4af7da = {
                                        detail: {
                                            value: _0x3fe3ce
                                        }
                                    };
                                    _0x51850c[wanzikun_0x9c5f("0x7b")](_0x4af7da);
                                    for (var _0x4ddbb5 = 0; _0x4ddbb5 < wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce][wanzikun_0x9c5f("0x30")][wanzikun_0x9c5f("0x4e")]; _0x4ddbb5++) {
                                        if (_0xb182ba["GrgRy"](_0xb182ba[wanzikun_0x9c5f("0x90")], _0xb182ba["EJtxB"])) {
                                            if (_0xb182ba[wanzikun_0x9c5f("0x8f")](data[wanzikun_0x9c5f("0x64")], wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce]["id"])) {
                                                this[wanzikun_0x9c5f("0x1a")]["selCityIndex"] = _0x3fe3ce;
                                                for (var _0x59c9be = 0; _0xb182ba[wanzikun_0x9c5f("0x91")](_0x59c9be, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce][wanzikun_0x9c5f("0x30")][wanzikun_0x9c5f("0x4e")]); _0x59c9be++) {
                                                    if (_0xb182ba["azYpS"](data[wanzikun_0x9c5f("0x3b")], wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce]["districtList"][_0x59c9be]["id"])) {
                                                        this["data"][wanzikun_0x9c5f("0x31")] = _0x59c9be;
                                                    }
                                                }
                                            }
                                        } else {
                                            if (_0xb182ba["azYpS"](_0xdb1721, wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][_0x399524][wanzikun_0x9c5f("0x29")][_0x3fe3ce][wanzikun_0x9c5f("0x30")][_0x4ddbb5][wanzikun_0x9c5f("0x34")])) {
                                                if (_0xb182ba[wanzikun_0x9c5f("0x92")] !== _0xb182ba[wanzikun_0x9c5f("0x93")]) {
                                                    _0x4af7da = {
                                                        detail: {
                                                            value: _0x4ddbb5
                                                        }
                                                    };
                                                    _0x51850c[wanzikun_0x9c5f("0x47")](_0x4af7da);
                                                } else {
                                                    var _0x3a2d3a = [];
                                                    var _0x2d6267 = obj[wanzikun_0x9c5f("0x30")];
                                                    for (var _0x16f880 = 0; _0xb182ba[wanzikun_0x9c5f("0x8b")](_0x16f880, _0x2d6267[wanzikun_0x9c5f("0x4e")]); _0x16f880++) {
                                                        _0x3a2d3a[wanzikun_0x9c5f("0x4f")](_0x2d6267[_0x16f880][wanzikun_0x9c5f("0x34")]);
                                                    }
                                                    this["setData"]({
                                                        districts: _0x3a2d3a
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            districtId = wanzikun_0x261d09[wanzikun_0x9c5f("0x2e")][this[wanzikun_0x9c5f("0x1a")]["selProvinceIndex"]][wanzikun_0x9c5f("0x29")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x2a")]][wanzikun_0x9c5f("0x30")][this[wanzikun_0x9c5f("0x1a")][wanzikun_0x9c5f("0x31")]]["id"];
                        }
                    }
                }
                _0x51850c[wanzikun_0x9c5f("0x35")]({
                    wxaddress: _0x27e1df
                });
            }
        });
    }
});