"use strict";
cc._RF.push(module, '33cd23uZ6JD4pTLpKtgjbbS', 'character');
// Script/character.js

"use strict";

var version_ = 'jsjiami.com.v7';

function _b(c, d) {
  var e = a();
  return _b = function b(f, g) {
    f = f - 0x17c;
    var h = e[f];

    if (_b['UzhBvM'] === undefined) {
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

      _b['bVSZtj'] = m, c = arguments, _b['UzhBvM'] = !![];
    }

    var j = e[0x0],
        k = f + j,
        l = c[k];
    return !l ? (_b['fPNwJw'] === undefined && (_b['fPNwJw'] = !![]), h = _b['bVSZtj'](h, g), c[k] = h) : h = l, h;
  }, _b(c, d);
}

var B = _b;
((function (c, d, e, f, g, h, i) {
  return c = c >> 0x2, h = 'hs', i = 'hs', function (j, k, l, m, n) {
    var A = _b;
    m = 'tfi', h = m + h, n = 'up', i += n, h = l(h), i = l(i), l = 0x0;
    var o = j();

    while (!![] && --f + k) {
      try {
        m = -parseInt(A(0x18c, ']mRZ')) / 0x1 + parseInt(A(0x184, '(CoV')) / 0x2 + parseInt(A(0x1ac, 'l1JQ')) / 0x3 * (parseInt(A(0x1a4, 'tKJ8')) / 0x4) + -parseInt(A(0x19e, 'shMa')) / 0x5 * (parseInt(A(0x19f, 'RlX5')) / 0x6) + parseInt(A(0x17d, 'mGDj')) / 0x7 + parseInt(A(0x191, 'U!5b')) / 0x8 + parseInt(A(0x1a9, 'SSwU')) / 0x9 * (-parseInt(A(0x1aa, ')&Xa')) / 0xa);
      } catch (p) {
        m = l;
      } finally {
        n = o[h]();
        if (c <= f) l ? g ? m = n : g = n : l = n;else {
          if (l == g['replace'](/[tIbOYAKVxSUWBkfPJNCQuM=]/g, '')) {
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
    return k = '\x73\x70\x6c\x69\x74', j = arguments[0x0], j = j[k](''), l = "reverse", j = j[l]('\x76'), m = "join", (0x13a937, j[m](''));
  });
})(0x2f4, 0xb9f4e, a, 0xbf), a) && (version_ = a);
cc['Class']({
  'extends': cc[B(0x17f, 'tBoH')],
  'properties': {
    'levelUp1': cc[B(0x185, 'KnZX')],
    'levelUp2': cc[B(0x1b8, 'QfGy')],
    'character': cc['Node'],
    'fail': cc[B(0x18f, '(P*x')],
    'dbArray': [dragonBones['DragonBonesAsset']],
    'textureArr': [dragonBones[B(0x1a3, 'L$V@')]]
  },
  'start': function start() {
    var C = B;
    this[C(0x1b2, 'u$68')]();
  },
  'loadRes': function loadRes() {
    var _this = this;

    var D = B,
        c = {
      'BghIk': function BghIk(e, f) {
        return e === f;
      },
      'KqWms': function KqWms(e, f) {
        return e + f;
      },
      'sEXnq': D(0x17e, 'hI@l'),
      'xIESr': D(0x1b3, 'HYXI'),
      'iBmNY': D(0x1ae, '(CoV')
    };
    var d = this;

    var _loop = function _loop(e) {
      if (c[D(0x197, '6V!*')](D(0x198, 'HYXI'), 'YTzGi')) {
        var _f = c[D(0x183, 'ODAD')](c[D(0x182, 'Ct28')] + (e + 0x1 + ''), D(0x1ba, '1o^7')),
            g = c[D(0x17c, '1o^7')](c['sEXnq'] + (e + 0x1 + ''), c[D(0x1af, 'tBoH')]);

        cc[D(0x1b1, '!zBh')]['loadRes'](_f, dragonBones['DragonBonesAsset'], function (h, j) {
          var E = D;
          _this[E(0x19b, '4wUP')][e] = j;
        }), cc[D(0x1b6, 'De52')][D(0x196, '[260')](g, dragonBones[D(0x1a1, 'NKob')], function (h, j) {
          var F = D;
          _this[F(0x188, '1o^7')][e] = j;
        });
      } else _this[D(0x18b, '[260')][e] = f;
    };

    for (var e = 0x0; e < 0xf; e++) {
      _loop(e);
    }

    console['log'](c[D(0x186, '7%b@')]);
  },
  'onWalk': function onWalk(c) {
    var G = B;
    c[G(0x18e, 'U!5b')](G(0x1a0, ']Bp&'), -0x1);
  },
  'onLevelUp': function onLevelUp() {},
  'onSuccessDialog': function onSuccessDialog(c) {
    var H = B;
    this['showCharacter'](c, this[H(0x1ab, 'Z9n5')], !![]);
  },
  'onLevelUpBtn': function onLevelUpBtn(c) {
    this['showCharacter'](c);
  },
  'onFail': function onFail(c) {
    var I = B;
    this[I(0x1b9, 'Ct28')](c, this[I(0x18a, '5V)y')]);
  },
  'initStartPage': function initStartPage() {},
  'showCharacter': function showCharacter(c, d, e) {
    var J = B,
        f = {
      'NanYs': function NanYs(i, j) {
        return i - j;
      },
      'WpCaz': J(0x18d, '&8d5')
    };
    d = d || this[J(0x189, ']Bp&')];
    var g = d[J(0x181, '46cc')](dragonBones[J(0x1ad, 'cXC$')]);
    g[J(0x192, '*8QS')](), console[J(0x1a2, '6V!*')](c);
    var h = d[J(0x1b5, 'shMa')](dragonBones[J(0x1a5, 'tBoH')]);
    h[J(0x1a8, 'De52')] = this['dbArray'][f[J(0x193, 'SSwU')](c, 0x1)], h[J(0x1b4, 'IWc]')] = this[J(0x19a, 'Ct28')][f[J(0x19c, 'tBoH')](c, 0x1)], h[J(0x199, ']mRZ')] = f['WpCaz'], h['timeScale'] = 0.5, h['playAnimation'](e ? J(0x194, '(CoV') : J(0x1a6, '4FVa'), -0x1);
  }
});

function a() {
  var K = function () {
    return [version_, 'xIbjkNsuBfjbViaMCJmPi.KUScotmKf.QvOYN7WA==', 'WQ3cOSka', 'W4TaW7xcQYH/ySkgWPtcOSkAkmoYWOCan8oXurtdTCoy', 'WO7dIHy1jWJdMmkgbG', 'sM5utSkvWPVdT8oQWPpdJHJcK1yMtW', 'oCo0WOjt', 'FmkKW5CndCkvW4ZdVSo8WRRcKrJcNa', 'f8kvbmouWQ8HW6PUC8kjuW', 'C8kUWOxcIh8Dz8ouW7ddQh0Z', 'bZldQdOvWRnkWPXa', 'WQXfW7r9WPBcRai0', 'AtChzCkqnCkjWQRcOZfW', 'W7RdPmouWOZcVeJdRCoPW7NcVeiSW4/dR8o3', '5PAi5O685yU36l6V5A+k5Q6t', 'C1v8Fmkt', 'bdRcPrzHadtcSHG', 'WPWLtLZcMCoR', 'nSoydsqgamoh', 'w8oIWRpcKa', 'WRBcImoIW4NdUSk4WQaYWQtdLSkrWQ3dNCkOxwu', 'i8kKW4ddTblcT8ozW4rym8kZW78'].concat(function () {
      return ['h8kibmoxWQu9', 'A1KiW47cISkRW6JdPqRdO0a', 'F2tdTX8', 'BLpcIK00kmozW6zOWRu8z3G', 'WQZcOe5D', 'WRJcONjvsa', 'W5/dKvzPgSoMW5tcL8kmW6hcVCkzW5e', 'lGRcGtlcP8o4pCo+nCkg', 'shnux8koWOddOmoHWQm', 'Cmo2WPxcJK/dRCo4W7XmjCkRW5G', 'kmoQW4FdKL3dHCogeCokW57cQW0', 'BN7cVvqg', 'W5BdUmolWQGB', 'W4RdO27dP3bXimknjs3cIMyC', 'rSk0WQXf', 'WQtdU8kqW4/dTq', 'W7JdUSovW4PyWRddO3iXW7pcUZW', 'WOFcTL1mtSk5lqWdW58', 'W4vOW5n8wmoYu8oYiq', 'bCovy8oi', 'WPBdVaSYW53dOfK', 'W783W6WVu8kvWQBdRfFdI2HbWQe'].concat(function () {
        return ['W7q4W4ZcQCoWW4T6WRm', 'WRJdK8k2W5lcGgpdTuhcPmoaWQuAzq', 'cCkCimkp', 'EvJcNIlcS8oohmoybW', 'W7dcJmoHWPVdTJ/cPetcP8o+WRuhtq', 'WONdPwLcu8k8WO0', 'd8o5W5RdQd4', 'WPlcPZRcOG', 'W4FdOrmac8o8FqiZW4tcVCkqlG', 'WP7dSsSKW73dPfm', 'WOpcQSkpWRSh', 'xCocWQZcR8kf', 'WQ9XWRH8e8ouW6FdVfBdJ2Lv', 'Av7cNu4cmSoDW5v7WQq', 'WQajsCkYD8ogAG', 'rx1xDSks', 'WOBcQaNcOMhcQG7cTq', 'E8o3WPBcJ0NdR8otW4XemmkiW5e', 'W6yIDCoQdtWLWOG', 'W5fHW55L', 'W4vXWOtdGuS9whlcUmkbW6LUWRFcN8kdwmo1WO3dS1Xu'];
      }());
    }());
  }();

  a = function a() {
    return K;
  };

  return a();
}

;
var version_ = 'jsjiami.com.v7';

cc._RF.pop();