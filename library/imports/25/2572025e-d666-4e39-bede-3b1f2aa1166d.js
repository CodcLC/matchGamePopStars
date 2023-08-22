"use strict";
cc._RF.push(module, '25720Je1mZOOb7eOx8qoRZt', 'tipBox');
// Script/tipBox.js

"use strict";

var version_ = 'jsjiami.com.v7';

function _b(c, d) {
  var e = a();
  return _b = function b(f, g) {
    f = f - 0xee;
    var h = e[f];

    if (_b['IKheoT'] === undefined) {
      var i = function i(n) {
        var o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        var p = '',
            q = '';

        for (var _r = 0x0, s, t, u = 0x0; t = n['charAt'](u++); ~t && (s = _r % 0x4 ? s * 0x40 + t : t, _r++ % 0x4) ? p += String['fromCharCode'](0xff & s >> (-0x2 * _r & 0x6)) : 0x0) {
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

      _b['FQJavX'] = m, c = arguments, _b['IKheoT'] = !![];
    }

    var j = e[0x0],
        k = f + j,
        l = c[k];
    return !l ? (_b['CJBwFg'] === undefined && (_b['CJBwFg'] = !![]), h = _b['FQJavX'](h, g), c[k] = h) : h = l, h;
  }, _b(c, d);
}

function a() {
  var B = function () {
    return [version_, 'GVpjfsHhjJeiCawffmi.kcoUmRE.AvQUO7HuXFPD==', 'smk+aGbU', 'WQddPhxcMmo6', 'haOwW4VcHa', 'WQiJkthcTehdM8ko', 'xCk/WPXazmo8tG', '5lQY6zsf5PEe6zIM5lIm6z6z5OIm776U5lQH54Ik5lYb5B6355sz5lM+5OMf', 'BMNdL8opW5BdMNGGqSoaW5WG', '5zk/5A6H5z2c6iYx6i2u77+h5Bgi5lIy6zEE5OMx5OI/', 'W4FdKmoKWPeEfmoIFfi', '5y6X5BQR5lIf6kwT5OUu5BAa5QkT776m6lEk5B2/6z2b5QEy6jw45BMa5zkT', 'AeRcV8oqia', 'WRGdhCo3jttcUW', 'WOVdJuFdHSkrWQZcGCk7', 'WPNdL8kmmG', 'lCk2WQHgta', 'm1v+A8kpwsa', 'hCknfmkKDmoT', 'WOGyWQtcTGVcG8keW7lcOx88W6SL', 'WOhdN8otteeiWPpcPrjgW7tdHhG', 'WRPuF13cPW', 'gCkZWPbvCSoP', 'W6NcTCkWfmk8', '5lIR5lUK5ysP5zQ95l+15B6Q5lQ077+75BcY5B6P5l+X5PAF5P2s5A+a5RAz', 'WPxcVNBdJCowoq', '56UD5yI154IF5zsZ5yAh6lQB77+z6lYn5yIN5ywN5REw5AE15lMN', 'WQLqWRlcSSkD', 'lr3cJq/dUa', 'W4JcKutcUCk+WOFcG1q', 'lZdcKG', 'dmkXWQPJzq', 'mHuDjSoDpNTwdvm2W4i2', 'WPBdIb1fbCkiiSoNW5GuvG', 'WQFcQ0qtW7WxlCo0WQbgmrWV', 'WPtdOCklfdi', '6BQg5RgN55Ij5OUt56M56ywz55E677+t5lU956ku5QAT5yAm57MP5lU86l2V'].concat(function () {
      return ['W44yWR/cGttdQdtcGa', 'WPGyc8k/pG', 'WPhdGbzodCo5DCkAW4uSsbLpbq', 'wWddJmoXWPj+C0G', 'WRfuBwZcOSoiW745', 'WPSVW4JdSSkxWRNcTxPXWRpdKW', 'W4tcGmoxlqZdGdDeja', '5AEx6BQq5lIf5Pwb5zk06Akq6lw8776m5OUE5PkV55UN5lQU5lQH5lI/6ywS', 'AK7cLCo9pry', 'WOBcKYXuWO0', '6koZ5yIf5Rke56Qn5Asc77+i5z6i552a5lMT6ls35PAb', '5yYI5lQT5PEt5z6Y5PE65RkC5Rwy6zQY5zgh', 'WPNcReRdLmoDma', 'W6PBW6hdRLK', 'W6pcH8kNiSkYxLBcMc0', 'WOtdKmkv', 'WRiNncJcL1RdLSki', 'WPDfWPv2W6W', 'WPWIWQpcHmoPWRhcTg0', 'krNdT8kNWPq', 'W5TNWR/dHCkM', 'WPbMWPDAW5pcPmoICq', '55Iq5BIu5lMX6yww5PYL772S5lUu5PAo6zQ45ys85PMv', 'gmoZaSkaAb3cUCkM', 'WRGAdCobcW', 'zr0nW47cSuev', 'W4XqW4hcJ2pcQSk7lG', 'WQGme8oOjttcVqzJW4m', '55EH5ysk5l2i5lI15BUT5zkr6zcY772h5PA55yYy5ysr5BkX5lQm5y2l5Bwh', 'WPvKW6iPWORdPSkTDLNcJmoZtmkf', 'WOtdUCkTW6xdGa', '6yog5PYy6B+G5Bs35lIV54kC54g+77YX5lM+5Ro+5Rwf5RcP5P6n5lQS5RcP', 'BYVdUSoJWR0', 'W5PaW77dSvFdPmoAW7RcLLG', 'W51gW6ZdOcu', 'erldPSkMWRa', 'W73dVX5dWR9k'].concat(function () {
        return ['W4RcNKat', 'W5BdICoLWQmynmoIFLNdKG', 'WP3dOmkOW6tdQmoIBre', 'WQ7cUhP2ga', 'Cej/wmkG', 'WOtdKSoser1HW7NcGHW', '6iU/5yUP5zQB5A2S55AY5Q+k5lQe772A5Bkm5zIC56E956Aj6yk26lsm5lIp', '57IB5lIj5BYN5P6m57Q66kES5REK77YX57QJ55+i5Q2w5lQw6kwJ6lIT6kkE', 'v1/cJCo4oa', 'rdyIWP8XkCoIW7aLbmoq', '5AA16zMO5y6O5zo56Akt5zk86zQ577++6zcK6AUp5ysO5Rky5ywx5Qc25P6U', 'fgmdWR89a8oLW4K', 'WP1HWOBcQCkdWOW', 'W57cHmkehW', 'WOqXkX7cVq', 'W79UW4ddIvS', 'uSk1cmkBW47dHqG5ya', 'WPxdGge1xmk7pSoT', '5lQX55En6iAj5y6x6lcC5PA05Q+6776055wY5yYE5lI35B+s54Eu5RoB6z+K', 'WQGbemo3bHxcUGG', '54cQ5B2D6ygg5ysn5y2h5lQg5Rsz6zQg5yAN5BgW5zkH6iMN5PEm5z6Q', 'ycq6WPer', 'W5NcMmkVcHnx', 'smoKW7JcGKHcumoG', 'WPldJmkmacW', 'WPpdLHZdRmo8W6hdNgZcI3WnjYe', 'WOpdMSkekGldJaa', '6zEp6AcL56ou5Rsq5l2S5PYW5Pwx77+y55QS5OYb5lIF5BQ65RwU5Rga5Rw0', '5lIb55sM6iMY5yY25AEm5yMp6ks977Yy5lYq5lM756s16AoB5OoI55sv5OIi', 'mbWaW4ZcRw0wnmk4ESkH', 'W7iE6ykG5yEa5yYE5lUv57YU5yk+5lI+5QY65Rsq6zQ455UO5yI55PEw', 'W6Paqmoeqq', 'WQtcQ0iCW7mql8kpWRbucrutlG', 'fCoWu8oRWP/cGI4YACkDW41k', '5AA755w75OIe5PYQ5B2T5P2Q55A577+U5y6m6yEU5PEo5BcO6l6T5AEW5PYm', 'uJqWWPywhmoU'];
      }());
    }());
  }();

  a = function a() {
    return B;
  };

  return a();
}

;
var r = _b;
((function (c, d, e, f, g, h, i) {
  return c = c >> 0x8, h = 'hs', i = 'hs', function (j, k, l, m, n) {
    var q = _b;
    m = 'tfi', h = m + h, n = 'up', i += n, h = l(h), i = l(i), l = 0x0;
    var o = j();

    while (!![] && --f + k) {
      try {
        m = parseInt(q(0x147, 'WLCw')) / 0x1 * (parseInt(q(0x111, 'G!sl')) / 0x2) + parseInt(q(0x152, 'v5UJ')) / 0x3 + parseInt(q(0x122, 'd])l')) / 0x4 * (parseInt(q(0xfd, '^O(W')) / 0x5) + -parseInt(q(0x115, '0Yb@')) / 0x6 * (-parseInt(q(0x150, '9pm8')) / 0x7) + -parseInt(q(0x153, 'd])l')) / 0x8 * (-parseInt(q(0x10a, '^O(W')) / 0x9) + -parseInt(q(0xf5, 'XAE!')) / 0xa * (-parseInt(q(0x12e, 'Eey@')) / 0xb) + -parseInt(q(0x13d, 'XAE!')) / 0xc;
      } catch (p) {
        m = l;
      } finally {
        n = o[h]();
        if (c <= f) l ? g ? m = n : g = n : l = n;else {
          if (l == g['replace'](/[CRUJDfVQhOAkuGPepEHXFw=]/g, '')) {
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
    return k = '\x73\x70\x6c\x69\x74', j = arguments[0x0], j = j[k](''), l = "reverse", j = j[l]('\x76'), m = "join", (0x13a935, j[m](''));
  });
})(0xca00, 0xd4ca3, a, 0xcc), a) && (version_ = a);
cc[r(0x141, '6f7k')]({
  'extends': cc['Component'],
  'properties': {
    'label': cc[r(0x11b, 'jS(@')]
  },
  'start': function start() {
    var s = r,
        c = {
      'vhUZN': '一次性大量消除可获得道具!',
      'LDdLt': s(0x13b, 'ew(7'),
      'vmmdZ': s(0x131, 'tYas'),
      'GNGgJ': s(0x103, 'EDFG'),
      'WQIYJ': s(0x138, 'd])l'),
      'gcTRx': s(0xf7, 'nHgn'),
      'CuabU': s(0x124, 'dwI%'),
      'tjsdH': s(0x148, 'Eey@'),
      'szqZK': s(0x159, 'ew(7'),
      'VmlOp': s(0x10e, 'tX8V'),
      'xvNWX': s(0x139, 'RDQ0'),
      'lKexi': s(0x102, '!^(X'),
      'dXnRU': s(0x13f, 'tYas'),
      'FBQKi': s(0xff, 'N7AO'),
      'kBWtl': s(0x157, 'ONge'),
      'qpXDs': '但使龙城飞将在，不教胡马度阴山',
      'MAYHc': s(0x14a, 'N7AO'),
      'xGywm': '沧海月明珠有泪，蓝田日暖玉生烟',
      'QYJPs': s(0x146, 'Eey@'),
      'UwsZl': s(0x123, '44aq'),
      'KhPHQ': s(0x127, '9QaO'),
      'Bocqe': s(0x12f, '6f7k')
    };
    this[s(0xf1, 'WLCw')] = [c[s(0x120, 'ykbU')], c['LDdLt'], c[s(0x116, 'ZA2^')], c[s(0x118, 't3q2')], '捡到宝箱！加两步！', '仙女棒可以消除所有单个方块'], this[s(0xf0, '[31)')] = [c['WQIYJ'], c[s(0xf2, 'ppnB')], c['CuabU'], c[s(0x10b, 'jS(@')], c[s(0x110, 'tX8V')], c['VmlOp'], c[s(0x13c, 'x^%f')], c['lKexi'], c[s(0xf6, '^H@C')], c[s(0x12c, 'v5UJ')], s(0x117, 'dwI%'), c[s(0xee, 'NG2E')], c[s(0x14b, 'jWW)')], c['MAYHc'], c[s(0x156, 'ONge')], c['QYJPs'], s(0x114, 'iRK6'), c[s(0x12b, '(xI8')], c['KhPHQ'], c[s(0x142, 'NrFm')]];
  },
  'init': function init(c, d) {
    var _this = this;

    var t = r,
        e = {
      'oCPgM': function oCPgM(f, g) {
        return f > g;
      },
      'fUzYk': function fUzYk(f, g) {
        return f !== g;
      },
      'OzytL': t(0x125, 'jWW)'),
      'CXpbA': t(0x105, 'v5UJ'),
      'bQBLd': function bQBLd(f, g) {
        return f * g;
      },
      'FdVwQ': function FdVwQ(f, g, h) {
        return f(g, h);
      }
    };
    this['_score'] = c, e['oCPgM'](d, 0x0) ? e['fUzYk'](e[t(0x143, 'G!sl')], e[t(0xef, 'tzFf')]) ? this[t(0x154, 'iRK6')][t(0x100, 'jWW)')] = this[t(0x107, '^H@C')][d] : d(this[t(0x119, 'v5UJ')]) : this[t(0x109, 'ip4w')]['string'] = this[t(0x10f, 'EDFG')][Math['floor'](e['bQBLd'](Math[t(0x155, 'ppnB')](), this[t(0x11f, 'ZA2^')][t(0x11c, 'XAE!')]))], this['openTipBox'](), this[t(0xf8, '9QaO')] && clearInterval(this[t(0x134, 'k*B6')]), this[t(0xfc, 'iRK6')] = e[t(0x14f, 'ppnB')](setInterval, function () {
      var u = t;

      _this[u(0x14e, '^H@C')](_this[u(0x151, 'nHgn')], -0x1);
    }, 0x1388);
  },
  'openTipBox': function openTipBox() {
    var _this2 = this;

    var v = r,
        c = {
      'qKLrW': function qKLrW(d, e) {
        return d !== e;
      },
      'buiFK': v(0x11a, '81b!'),
      'VWbCN': 'IhAvF',
      'Askkb': function Askkb(d, e) {
        return d(e);
      }
    };

    if (!this['isOpen']) {
      var d = cc[v(0x137, '^H@C')](0.3, 0x1)[v(0x158, 'N7AO')](cc[v(0x126, 'uRyw')](0x2)),
          e = cc[v(0x144, '(xI8')](d, cc[v(0x130, 'tX8V')](function () {
        var w = v;
        _this2[w(0x104, 'N7AO')] = !![];
      }));
      this['node'][v(0x106, 'ONge')](e);
    }

    this[v(0x11e, 'bUUk')] && c[v(0x132, 'uRyw')](clearTimeout, this['closeTimer']), this[v(0x113, 'tX8V')] = setTimeout(function () {
      var x = v;
      c[x(0x10c, 'ew(7')](c[x(0x135, '^H@C')], c['VWbCN']) ? _this2[x(0x13a, 'G!sl')]() : _this2['init'](_this2[x(0x129, 'NG2E')], -0x1);
    }, 0xfa0);
  },
  'closeTioBox': function closeTioBox() {
    var _this3 = this;

    var y = r,
        c = {
      'nPGwN': function nPGwN(f, g) {
        return f !== g;
      },
      'tfVIJ': y(0x101, '94b!')
    };
    var d = cc[y(0x140, 'uRyw')](0.3, 0x0),
        e = cc[y(0xfb, 't3q2')](d, cc[y(0x14d, 'ykrt')](function () {
      var z = y;

      if (c[z(0xf9, 'ufu7')](c['tfVIJ'], c[z(0x121, '9pm8')])) {
        var g = f[z(0x14c, 'tX8V')](0.3, 0x0),
            h = g[z(0x112, '!^(X')](g, h[z(0x108, '(xI8')](function () {
          var A = z;
          _this3[A(0x133, 'd])l')] = ![];
        }));

        _this3[z(0x12a, 'd])l')][z(0x149, 'bUUk')](h);
      } else _this3[z(0x104, 'N7AO')] = ![];
    }));
    this[y(0x11d, 'Eey@')][y(0x12d, '44aq')](e);
  }
});
var version_ = 'jsjiami.com.v7';

cc._RF.pop();