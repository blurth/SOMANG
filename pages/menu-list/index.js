var wanzikun_0x1e30 = [ "setData", "XfhGK", "LZNAI", "LPVsD", "OzXAX", "push", "/pages/goods-details/index?id=", "navigateTo", "ThihP", "currentTarget", "dataset", "MZnxx", "kMdON", "/shop/goods/category/all", "/shop/goods/list", "request", "gzVzs", "globalData", "urls", "kkfgm", "data", "code", "IhlPd", "SpEku" ];

(function(_0x614a1, _0x1f6e9e) {
    var _0x5c0486 = function _0x5c0486(_0x5b84ad) {
        while (--_0x5b84ad) {
            _0x614a1["push"](_0x614a1["shift"]());
        }
    };
    _0x5c0486(++_0x1f6e9e);
})(wanzikun_0x1e30, 150);

var wanzikun_0x1887 = function wanzikun_0x1887(_0x3df459, _0x2c293f) {
    _0x3df459 = _0x3df459 - 0;
    var _0x4bdc5b = wanzikun_0x1e30[_0x3df459];
    return _0x4bdc5b;
};

var wanzikun_0xaebd4f = getApp();

Page({
    data: {},
    toDetailsTap: function toDetailsTap(_0x26f2d6) {
        var _0x399ae9 = {
            ThihP: wanzikun_0x1887("0x0")
        };
        wx[wanzikun_0x1887("0x1")]({
            url: _0x399ae9[wanzikun_0x1887("0x2")] + _0x26f2d6[wanzikun_0x1887("0x3")][wanzikun_0x1887("0x4")]["id"]
        });
    },
    onLoad: function onLoad(_0x27d963) {
        var _0x891b71 = {
            LZNAI: function LZNAI(_0x2302b0, _0x1d64f9) {
                return _0x2302b0 < _0x1d64f9;
            },
            IhlPd: function IhlPd(_0x2120a6, _0x5e21a2) {
                return _0x2120a6 !== _0x5e21a2;
            },
            VzRDu: wanzikun_0x1887("0x5"),
            LPVsD: wanzikun_0x1887("0x6"),
            gzVzs: function gzVzs(_0x521674, _0x54d188) {
                return _0x521674 + _0x54d188;
            },
            kkfgm: wanzikun_0x1887("0x7"),
            rboOZ: wanzikun_0x1887("0x8")
        };
        var _0x15a925 = this;
        wx[wanzikun_0x1887("0x9")]({
            url: _0x891b71[wanzikun_0x1887("0xa")](wanzikun_0xaebd4f[wanzikun_0x1887("0xb")][wanzikun_0x1887("0xc")], _0x891b71[wanzikun_0x1887("0xd")]),
            success: function success(_0x3acce2) {
                var _0x41e78d = {
                    XfhGK: function XfhGK(_0x593684, _0x4ea112) {
                        return _0x593684 == _0x4ea112;
                    }
                };
                if (_0x3acce2[wanzikun_0x1887("0xe")][wanzikun_0x1887("0xf")] == 0) {
                    for (var _0x3fb8d6 = 0; _0x891b71["LZNAI"](_0x3fb8d6, _0x3acce2[wanzikun_0x1887("0xe")]["data"]["length"]); _0x3fb8d6++) {
                        if (_0x3acce2[wanzikun_0x1887("0xe")]["data"][_0x3fb8d6]["id"] == _0x27d963["id"]) {
                            if (_0x891b71[wanzikun_0x1887("0x10")](_0x891b71["VzRDu"], wanzikun_0x1887("0x11"))) {
                                _0x15a925[wanzikun_0x1887("0x12")]({
                                    categorie: _0x3acce2["data"][wanzikun_0x1887("0xe")][_0x3fb8d6]
                                });
                            } else {
                                if (_0x41e78d[wanzikun_0x1887("0x13")](_0x3acce2[wanzikun_0x1887("0xe")][wanzikun_0x1887("0xe")][_0x3fb8d6]["id"], _0x27d963["id"])) {
                                    _0x15a925[wanzikun_0x1887("0x12")]({
                                        categorie: _0x3acce2["data"][wanzikun_0x1887("0xe")][_0x3fb8d6]
                                    });
                                }
                            }
                        }
                    }
                }
            }
        });
        wx["request"]({
            url: _0x891b71[wanzikun_0x1887("0xa")](wanzikun_0xaebd4f[wanzikun_0x1887("0xb")]["urls"], _0x891b71["rboOZ"]),
            data: {
                categoryId: _0x27d963["id"]
            },
            success: function success(_0x5ebd82) {
                var _0x5e1c2d = [];
                for (var _0x581f5d = 0; _0x891b71[wanzikun_0x1887("0x14")](_0x581f5d, _0x5ebd82[wanzikun_0x1887("0xe")][wanzikun_0x1887("0xe")]["length"]); _0x581f5d++) {
                    if (_0x891b71[wanzikun_0x1887("0x10")](_0x891b71[wanzikun_0x1887("0x15")], wanzikun_0x1887("0x16"))) {
                        _0x5e1c2d[wanzikun_0x1887("0x17")](_0x5ebd82[wanzikun_0x1887("0xe")][wanzikun_0x1887("0xe")][_0x581f5d]);
                    } else {
                        _0x15a925[wanzikun_0x1887("0x12")]({
                            categorie: _0x5ebd82[wanzikun_0x1887("0xe")][wanzikun_0x1887("0xe")][_0x581f5d]
                        });
                    }
                }
                _0x15a925["setData"]({
                    goods: _0x5e1c2d
                });
            }
        });
    }
});