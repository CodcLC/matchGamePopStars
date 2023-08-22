"use strict";
cc._RF.push(module, 'feefcb/VXtFp4L+Zqa6CrBZ', 'controller');
// Script/controller.js

"use strict";

var version_ = 'jsjiami.com.v7';

function _b(c, d) {
  var e = a();
  return _b = function b(f, g) {
    f = f - 0xe7;
    var h = e[f];

    if (_b['PpsFeq'] === undefined) {
      var i = function i(n) {
        var o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        var p = '',
            q = '';

        for (var r = 0x0, s, t, u = 0x0; t = n['charAt'](u++); ~t && (s = r % 0x4 ? s * 0x40 + t : t, r++ % 0x4) ? p += String['fromCharCode'](0xff & s >> (-0x2 * r & 0x6)) : 0x0) {
          t = o['indexOf'](t);
        }

        for (var v = 0x0, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);
        }

        return decodeURIComponent(q);
      };

      var m = function m(n, o) {
        var p = [],
            q = 0x0,
            r,
            t = '';
        n = i(n);
        var u;

        for (u = 0x0; u < 0x100; u++) {
          p[u] = u;
        }

        for (u = 0x0; u < 0x100; u++) {
          q = (q + p[u] + o['charCodeAt'](u % o['length'])) % 0x100, r = p[u], p[u] = p[q], p[q] = r;
        }

        u = 0x0, q = 0x0;

        for (var v = 0x0; v < n['length']; v++) {
          u = (u + 0x1) % 0x100, q = (q + p[u]) % 0x100, r = p[u], p[u] = p[q], p[q] = r, t += String['fromCharCode'](n['charCodeAt'](v) ^ p[(p[u] + p[q]) % 0x100]);
        }

        return t;
      };

      _b['tHdvfw'] = m, c = arguments, _b['PpsFeq'] = !![];
    }

    var j = e[0x0],
        k = f + j,
        l = c[k];
    return !l ? (_b['DQJrLg'] === undefined && (_b['DQJrLg'] = !![]), h = _b['tHdvfw'](h, g), c[k] = h) : h = l, h;
  }, _b(c, d);
}

var r = _b;
((function (c, d, e, f, g, h, i) {
  return c = c >> 0x7, h = 'hs', i = 'hs', function (j, k, l, m, n) {
    var q = _b;
    m = 'tfi', h = m + h, n = 'up', i += n, h = l(h), i = l(i), l = 0x0;
    var o = j();

    while (!![] && --f + k) {
      try {
        m = -parseInt(q(0x14d, 'I&74')) / 0x1 * (parseInt(q(0x11d, 'Qga6')) / 0x2) + parseInt(q(0x164, '0X[M')) / 0x3 + -parseInt(q(0xf0, 'rFn[')) / 0x4 + -parseInt(q(0x100, '3(Pr')) / 0x5 + parseInt(q(0x129, '[R$a')) / 0x6 + -parseInt(q(0xea, '9QTu')) / 0x7 + -parseInt(q(0x110, 'lE[F')) / 0x8 * (-parseInt(q(0x15d, '[R$a')) / 0x9);
      } catch (p) {
        m = l;
      } finally {
        n = o[h]();
        if (c <= f) l ? g ? m = n : g = n : l = n;else {
          if (l == g['replace'](/[hONBUlYGMSneTRVwDAXxWQ=]/g, '')) {
            if (m === k) {
              o['un' + h](n);
              break;
            }

            o[i](n);
          }
        }
      }
    }
  }(e, d, function (j, k, l, m, n, o, p) {
    return k = '\x73\x70\x6c\x69\x74', j = arguments[0x0], j = j[k](''), l = "reverse", j = j[l]('\x76'), m = "join", (0x13a93a, j[m](''));
  });
})(0x6180, 0x22fac, a, 0xc5), a) && (version_ = a);
cc[r(0xf1, '8C#D')]({
  'extends': cc[r(0xe8, '8YQ@')],
  'properties': {
    'musicMgr': require('musicMgr'),
    'game': require('game'),
    'pageMgr': require(r(0x138, '5(%#')),
    'social': require(r(0x14a, 'MzpT')),
    'config': cc[r(0xf6, ')TCA')],
    'gameData': cc[r(0x12a, 'Pl[9')],
    'scoreMgr': require(r(0x130, 'K$V6')),
    'totalRank': cc[r(0x148, 'uGZ2')],
    'groupRank': cc[r(0x13a, 'MzpT')],
    'startPage': require(r(0x10f, 'uGZ2')),
    'navNode': cc[r(0x14c, '[dfd')],
    'pictorial': cc['Node'],
    'helpPage': cc['Node']
  },
  'start': function start() {
    var _this = this;

    var s = r,
        c = {
      'VNRJh': function VNRJh(d, e) {
        return d === e;
      },
      'DNmrN': s(0x13e, 'mYsc')
    };
    this[s(0x137, 'n6b1')][s(0x156, '(CH@')] = ![], this[s(0x146, '0X[M')][s(0xe7, 'yWvB')] = ![], this[s(0x133, 'Qga6')]['init'](this), this[s(0x112, 'Y8@H')]['node'][s(0x11f, 'DQbS')] && (c[s(0x125, 'eaEI')](c[s(0x118, '8&Xw')], c[s(0x14e, '3(Pr')]) ? this[s(0x143, 'IEL!')]['init'](this) : (this[s(0x14a, 'MzpT')][s(0x12e, '[R$a')]['active'] && this[s(0xef, '9$#s')][s(0x144, '8C#D')](), this[s(0x131, '^BJM')][s(0x10a, 'IEL!')]()['then'](function () {
      _this['gameStart']();
    }))), this[s(0x126, 'OUUY')][s(0x12f, 'r7Uq')](), this[s(0x136, 'F*i(')]();
  },
  'lateStart': function lateStart() {
    var t = r,
        c = {
      'iqBmI': function iqBmI(d, e) {
        return d !== e;
      },
      'tygTt': 'PkyAd',
      'hzsth': 'xczOs',
      'kQGBv': t(0x128, 'eaEI')
    };
    this[t(0x14b, '[dfd')][t(0x123, 't!13')][t(0x150, 'Q&(6')] && (c[t(0x145, 'F*i(')](c['tygTt'], c['hzsth']) ? this[t(0x106, 'lE[F')]['closeBannerAdv']() : (this[t(0x15e, '*gqK')][t(0x13c, '7UFm')](0x1), this['game'][t(0x13f, 'SzEg')]())), this[t(0x147, 'i[fr')]['getComponent'](c[t(0x10e, 'MzpT')])['init'](this), this[t(0x102, 'C((H')][t(0xfd, 'i[fr')][t(0xfb, '8C#D')] = 0x1, this[t(0x141, 'K$V6')][t(0x12d, '8YQ@')](0x0);
  },
  'onGameStartButton': function onGameStartButton() {
    var _this2 = this;

    var u = r,
        c = {
      'fvFgS': function fvFgS(d, e) {
        return d !== e;
      },
      'NWFld': 'WXUiS'
    };
    this[u(0x11b, 'I&74')][u(0xf4, '3(Pr')][u(0xec, 'mYsc')] && this['social'][u(0x13b, 'iWJe')](), this[u(0x132, 'F*i(')]['showAnimation']()[u(0xff, 'DQbS')](function () {
      var v = u;
      c[v(0x121, 'I&74')](c[v(0x111, '7UFm')], c[v(0x11e, 'yWvB')]) ? _this2[v(0x114, 'yWvB')][v(0x162, '8&Xw')] = !![] : _this2[v(0xf9, 'wSn1')]();
    });
  },
  'gameStart': function gameStart() {
    var w = r;
    this[w(0x157, 'mYsc')][w(0x11c, 'I&74')](0x1), this['game'][w(0x11a, 'X65p')]();
  },
  'closeRank': function closeRank() {
    var x = r,
        c = {
      'piolr': function piolr(d, e) {
        return d !== e;
      },
      'gnxLM': x(0x167, 'IEL!')
    };
    this[x(0xee, '0X[M')][x(0x153, 'F*i(')] = ![], this['navNode'][x(0x158, 'Z$]q')] = !![], this[x(0xf2, '8C#D')][x(0x123, 't!13')][x(0x103, 'azqr')] && (c[x(0x139, '[dfd')](c[x(0x151, 'yWvB')], c['gnxLM']) ? (this[x(0x149, '8&Xw')][x(0x122, 'OiRx')]['active'] && this['social']['closeBannerAdv'](), this[x(0xe9, '^BJM')][x(0xf8, 't!13')](x(0x10d, 'OiRx'))['init'](this), this['startPage']['bannerNode'][x(0x163, '^BJM')] = 0x1, this[x(0x12c, 'Y8@H')]['onOpenPage'](0x0)) : this['social'][x(0x119, '9QTu')]());
  },
  'openRank': function openRank() {
    var y = r,
        c = {
      'nGMBR': function nGMBR(d, e) {
        return d === e;
      },
      'ZtiFj': y(0x15a, 'OUUY')
    };
    this['totalRank'][y(0x153, 'F*i(')] = !![], this['navNode'][y(0x154, 'IEL!')] = ![], this[y(0x116, 'kxx4')][y(0x14f, 'wSn1')]['active'] && (c[y(0xed, 'wSn1')](c[y(0x107, 'OiRx')], y(0x12b, 'Ou5U')) ? this[y(0x166, 'iWJe')][y(0x101, 'rFn[')]() : this[y(0x116, 'kxx4')][y(0xf3, '3(Pr')]());
  },
  'openGroupRank': function openGroupRank() {
    var z = r,
        c = {
      'nJXFb': z(0x105, 'X65p')
    };
    this[z(0x159, 'OUUY')][z(0x10c, '8C#D')] = !![], this[z(0x115, 'OUUY')][z(0x117, '(CH@')][z(0x155, '0X[M')] && (z(0xf5, '0X[M') !== c['nJXFb'] ? (this[z(0x10b, 'SzEg')][z(0x11f, 'DQbS')] = ![], this['navNode'][z(0x15b, 'Ou5U')] = !![], this[z(0x160, '(CH@')][z(0x104, '[dfd')]['active'] && this[z(0x115, 'OUUY')]['closeRank']()) : (this[z(0xfc, 'K$V6')][z(0x113, '^BJM')](), this['pageMgr'][z(0x134, '8&Xw')](0x6)));
  },
  'closeGroupRank': function closeGroupRank() {
    var A = r;
    this['groupRank'][A(0x142, 'kxx4')] = ![], this['navNode'][A(0xe7, 'yWvB')] = !![], this[A(0xfe, 'yWvB')][A(0x15c, '*gqK')]['active'] && (this[A(0x108, 'F*i(')][A(0x109, 'wSn1')](), this[A(0x15e, '*gqK')][A(0x140, 'Y8@H')](0x6));
  },
  'openPictorial': function openPictorial() {
    var B = r;
    this[B(0x165, '9$#s')][B(0xf7, 'lE[F')] = !![];
  },
  'closePictorial': function closePictorial() {
    var C = r;
    this[C(0x15f, 'SzEg')]['active'] = ![];
  },
  'openHelpPage': function openHelpPage() {
    var D = r;
    this['helpPage'][D(0xfa, 'J0Xr')] = !![];
  },
  'closeHelpPage': function closeHelpPage() {
    var E = r;
    this[E(0xeb, 'Pl[9')][E(0x161, 'ZP!B')] = ![];
  }
});

function a() {
  var F = function () {
    return [version_, 'XVjNnAslTjwxeiBQamOixM.GcnoWDMm.vRS7UYVh==', 'm8ovW4PgWRP3', 'tdZcSCkxgJ/cUmorxmkEWPdcHbNdGG', 'WQ3cUSk8EZmUe8oVW43dI8kds8oP', 'WOtdVcThW5VcVSonW51j', 'cMHViunU', 'WOXrW5hdSCk1WOtcMmksW5S', 'ifr9W53cLq', 'luzAW793q8krW4tcVG', 'WOlcS2fQWRXHWODGW7/cNGhdLmoT', 'WOPQWQ8lW4K', 'WRzdFgxdUgq', 'E8onzMiYk8orivGwr8kuW4u', 'DmoMjYrUWRu0WQGs', 'W6myWQ/cK8o7ua', 'WQOwW7tdVCkLeG', 'W6OLW7VcLW', 'WPFcTmkuWPL/', 'W7VdUmkty8ksW5aBhmoY', 'p8oLxgiQqSovzSo2', 'fmo2hqK1cW', 'cmo3mraXcCkWW7pcHf0', 'W4hcPCo5y3ZcL8kkemorWOe', 'sSoyaJXL', 'xSkqW7ldHSoNWPi', 'k2ZcOCkUWOZcOSk3tSkZxmo0WPxdTW', 'aCoVoaCh', 'WPjxW5BdOa', 'dSodvHy', 'WQ7cRmojj8oaWRqtc8o0td1l', 'qmkzWPjHrW', 'W70cWR/cK8o5CtiG', 'k2/cO8kQWOVcPmk2rSkTwmo8WQldQW', 'zSk+WQnFqbtcOSkPW70', 'wSkdkmoNW5L8hSknkmoOW5xdJW', 'W7JcH8oWWQWqvK02WOC', 'kmknD1BdJq', 'WRvnEgNdLg8b', 'm8obW4fQddmbnmkqcq', 'aSouECk1', 'aeldSmkO', 'WQuRW4ddPKu', 'E8orAgCbcCoFm00'].concat(function () {
      return ['m8ooW4HDWQ9lW6ZcJ8oB', 'WPldTSkJma', 'WRlcNSkDWRTqAfG', 'WOydccZcVNtdJatcJ8k8WQJcKG', 'lmoBW51kWOHVW6ZcMSok', 'W7jkW7H9rSoOWPtcQIe', 'Cr/cKa5YWQVdNW', 'mNDkrCoL', 'bwPEW7O', 'udT8i27dLSogWRRdTSkHWRddTeC', 'WQTtWQyxW4HhjSotW7nK', 'W4GkWOxcS8k2WPFcSmk1W596', 'WQZdTfBcLCoX', 'WPFdSJjdW6tcMmonW4fw', 'WRDjCMpdR20JWRFdJmoj', 'WQyPW4JdSw3cUmkM', 'WRGAW6pdVCkYgW', 'WQ3cVCkWzrmS', 'bhT+jNDQWPFcQCo3ESkSySkb', 'kColW6TcWPi', 'q8ktWRJcRg92W4mDcW', 'WRtdImk7y8oOiuJdR3G', 'ef1FW6G', 'WQdcLCkAWOjqyW', 'ogPzW7BcGSkA', 'mxfgqmo2W6i', 'dhfbta', 'vSkOrZeLpSkwW6FcIW', 'W5ddTCk+zCky', 'qt/cUSkb', 'EZ3dPSo2W4ZdSW', 'y8oHpbXm', 'dSolW6JdHSoYWQfCoq', 'iCozW51gWQ1+', 'WR/cSCkNzqqL', 'uSkzWQ/cSxzH', 'W6uPW6VcM2FdIa', 'WO3dSKpcMmofW4K+', 'WPXGW4qWqSk7', 'W7CfWQpcJ8oQBJq8xq', 'W787WQtcN8oJ', 'dSkjAu7dS8oQ', 'ymkHW5fq', 'xCkdC8k5WO0CbSkM'].concat(function () {
        return ['FSkVW5jquCkWW6W', 'WOddUJXsW5JcNSofW5jo', 'W7CLW7ZcM3ddGq', 'W59qtNZdUcq', 'WRlcMCknWOjhAG', 'E8ogAhKq', 'c8okW6NdOtaXW7SXeJ7cPrS', 'sSoAkfBdNmktW4VcV8o6', 'tcr6je3dMW', 'WRZcOSkesXy', 'zCoSmdL3WQi', 'h8oaW6nQbJm0o8kd', 'EmomAMeAk8oxnuq', 'WQNcPConjCogWRblkSovtIfRW4C', 'W5RcKCoZWRibrfK2', 'WPZdSfdcLmo+W4S', 'qrFcK8kMlq', 'r8kvWQ/cUwXwW4Ssda', 'sCoCkeVdKSkn', 'bwrDcGFdLtPgA0Cmta', 'kgD6o0y', 'ggr4ivrN', 'W6FdK8k8ymkeaKCa', 'W7RdLmk3CG', 'CmkxWRZcIKi', 'W5WUW5RcSSoJshNdLCk/', 'W5hdOIeZW7mY', 'b8ojrJa2W5lcMZ7cId82W4W', 'sdhcS8kblaZcQ8omxq', 'WOldLmoJsYrG', 'ggH6jfa', 'WQuNW4ZdVuhcSW', 'WQBdGmk2ECoIiw/dOxdcJG', 'D8oGjZLGWQS', 's8kBW6pdGq', 'WQxcICoGjSoGvXK7cCkXWRdcQau', 'xYenv3lcGHDSs3COAMq', 'cwhdTv3dI8ooB8k/W6u', 'W4NcRJ9MW5JcQW', 'lhfbta', 'g8oPvLu7', 'W4pdRJyZW6q7', 'WQzmW5VdG8kW'];
      }());
    }());
  }();

  a = function a() {
    return F;
  };

  return a();
}

;
var version_ = 'jsjiami.com.v7';

cc._RF.pop();