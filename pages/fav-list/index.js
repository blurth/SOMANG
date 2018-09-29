var wanzikun_0x2f5a = [ "urls", "uqNav", "token", "RQhGh", "SiDQN", "Yfvrz", "data", "code", "setData", "Gabbb", "/pages/goods-details/index?id=", "navigateTo", "Npdbt", "qMjyO", "currentTarget", "dataset", "bhtyu", "/shop/goods/fav/list", "request", "globalData" ];

(function(_0x3de40f, _0x3e6dbc) {
    var _0x22ac07 = function _0x22ac07(_0x258e06) {
        while (--_0x258e06) {
            _0x3de40f["push"](_0x3de40f["shift"]());
        }
    };
    _0x22ac07(++_0x3e6dbc);
})(wanzikun_0x2f5a, 210);

var wanzikun_0xc580 = function wanzikun_0xc580(_0xbe123f, _0xfd207e) {
    _0xbe123f = _0xbe123f - 0;
    var _0x475ffa = wanzikun_0x2f5a[_0xbe123f];
    return _0x475ffa;
};

var wanzikun_0x2b980c = getApp();

Page({
    data: {},
    toDetailsTap: function toDetailsTap(_0xbb56f2) {
        var _0x946f26 = {
            Npdbt: function Npdbt(_0x440f18, _0x229924) {
                return _0x440f18 + _0x229924;
            },
            qMjyO: wanzikun_0xc580("0x0")
        };
        wx[wanzikun_0xc580("0x1")]({
            url: _0x946f26[wanzikun_0xc580("0x2")](_0x946f26[wanzikun_0xc580("0x3")], _0xbb56f2[wanzikun_0xc580("0x4")][wanzikun_0xc580("0x5")]["id"])
        });
    },
    onShow: function onShow() {
        var _0x5ab958 = {
            zcMiu: function zcMiu(_0x151398, _0x22997b) {
                return _0x151398 == _0x22997b;
            },
            RQhGh: function RQhGh(_0x31294f, _0x32f4d4) {
                return _0x31294f !== _0x32f4d4;
            },
            SiDQN: "RhZFR",
            Yfvrz: wanzikun_0xc580("0x6"),
            ZXFEz: function ZXFEz(_0x2e4afa, _0x4b04b7) {
                return _0x2e4afa == _0x4b04b7;
            },
            bANtT: function bANtT(_0x17d39e, _0x350c38) {
                return _0x17d39e + _0x350c38;
            },
            uqNav: wanzikun_0xc580("0x7")
        };
        var _0x3ee547 = this;
        wx[wanzikun_0xc580("0x8")]({
            url: _0x5ab958["bANtT"](wanzikun_0x2b980c[wanzikun_0xc580("0x9")][wanzikun_0xc580("0xa")], _0x5ab958[wanzikun_0xc580("0xb")]),
            data: {
                token: wanzikun_0x2b980c[wanzikun_0xc580("0x9")][wanzikun_0xc580("0xc")]
            },
            success: function success(_0x250e1c) {
                var _0x1a2f30 = {
                    Gabbb: function Gabbb(_0x589cd2, _0x168e6e) {
                        return _0x5ab958["zcMiu"](_0x589cd2, _0x168e6e);
                    }
                };
                if (_0x5ab958[wanzikun_0xc580("0xd")](_0x5ab958[wanzikun_0xc580("0xe")], _0x5ab958[wanzikun_0xc580("0xf")])) {
                    if (_0x5ab958["ZXFEz"](_0x250e1c[wanzikun_0xc580("0x10")][wanzikun_0xc580("0x11")], 0)) {
                        _0x3ee547["setData"]({
                            favList: _0x250e1c[wanzikun_0xc580("0x10")][wanzikun_0xc580("0x10")],
                            loadingMoreHidden: !![]
                        });
                    } else if (_0x250e1c[wanzikun_0xc580("0x10")][wanzikun_0xc580("0x11")] == 404) {
                        _0x3ee547[wanzikun_0xc580("0x12")]({
                            favList: null,
                            loadingMoreHidden: ![]
                        });
                    }
                } else {
                    if (_0x1a2f30[wanzikun_0xc580("0x13")](_0x250e1c[wanzikun_0xc580("0x10")]["code"], 0)) {
                        _0x3ee547[wanzikun_0xc580("0x12")]({
                            favList: _0x250e1c[wanzikun_0xc580("0x10")][wanzikun_0xc580("0x10")],
                            loadingMoreHidden: !![]
                        });
                    } else if (_0x250e1c[wanzikun_0xc580("0x10")][wanzikun_0xc580("0x11")] == 404) {
                        _0x3ee547[wanzikun_0xc580("0x12")]({
                            favList: null,
                            loadingMoreHidden: ![]
                        });
                    }
                }
            }
        });
    }
});