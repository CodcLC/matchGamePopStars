"use strict";
cc._RF.push(module, '72f7acBwR1I474pejqfLV0j', 'score');
// Script/score.js

"use strict";

var version_ = 'jsjiami.com.v7';
var C = _b;
((function (c, d, e, f, g, h, i) {
  return c = c >> 0x4, h = 'hs', i = 'hs', function (j, k, l, m, n) {
    var B = _b;
    m = 'tfi', h = m + h, n = 'up', i += n, h = l(h), i = l(i), l = 0x0;
    var o = j();

    while (!![] && --f + k) {
      try {
        m = parseInt(B(0x1a9, 'f%[*')) / 0x1 * (-parseInt(B(0x13d, '0nY%')) / 0x2) + parseInt(B(0x143, '$qjo')) / 0x3 * (-parseInt(B(0x145, 'mg]w')) / 0x4) + -parseInt(B(0x1dc, 'fdHd')) / 0x5 * (parseInt(B(0x256, 'aNJb')) / 0x6) + parseInt(B(0x1c4, '0nY%')) / 0x7 * (-parseInt(B(0x1f2, '$b4C')) / 0x8) + parseInt(B(0x142, ')TD!')) / 0x9 + -parseInt(B(0x29c, 'f%[*')) / 0xa * (-parseInt(B(0x271, 'ARf9')) / 0xb) + parseInt(B(0x24b, '1N^W')) / 0xc * (parseInt(B(0x24d, 'z$57')) / 0xd);
      } catch (p) {
        m = l;
      } finally {
        n = o[h]();
        if (c <= f) l ? g ? m = n : g = n : l = n;else {
          if (l == g['replace'](/[MFUKJfBuIQRtxAnLr=]/g, '')) {
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
    return k = '\x73\x70\x6c\x69\x74', j = arguments[0x0], j = j[k](''), l = "reverse", j = j[l]('\x76'), m = "join", (0x13a933, j[m](''));
  });
})(0xc20, 0x83e79, a, 0xc4), a) && (version_ = a);

function _b(c, d) {
  var e = a();
  return _b = function b(f, g) {
    f = f - 0x114;
    var h = e[f];

    if (_b['mDzWfw'] === undefined) {
      var i = function i(n) {
        var o = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        var p = '',
            q = '';

        for (var _r = 0x0, _s, _t, u = 0x0; _t = n['charAt'](u++); ~_t && (_s = _r % 0x4 ? _s * 0x40 + _t : _t, _r++ % 0x4) ? p += String['fromCharCode'](0xff & _s >> (-0x2 * _r & 0x6)) : 0x0) {
          _t = o['indexOf'](_t);
        }

        for (var v = 0x0, w = p['length']; v < w; v++) {
          q += '%' + ('00' + p['charCodeAt'](v)['toString'](0x10))['slice'](-0x2);
        }

        return decodeURIComponent(q);
      };

      var _m = function _m(n, o) {
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

      _b['WBpxrs'] = _m, c = arguments, _b['mDzWfw'] = !![];
    }

    var j = e[0x0],
        k = f + j,
        l = c[k];
    return !l ? (_b['ZzLjZw'] === undefined && (_b['ZzLjZw'] = !![]), h = _b['WBpxrs'](h, g), c[k] = h) : h = l, h;
  }, _b(c, d);
}

var A = require(C(0x210, 'z^m!'));

cc[C(0x18c, '#gKA')]({
  'extends': cc['Component'],
  'properties': {
    'scorePrefab': cc[C(0x2b0, '1N^W')],
    'scoreParticlePrefab': cc[C(0x12d, 'WqOg')],
    'mainScoreLabel': cc[C(0x15e, '$b4C')],
    'successDialog': require('successDialog'),
    'characterMgr': require(C(0x16f, 'SY5!')),
    'failDialog': cc['Node'],
    'multPropPrefab': cc['Prefab'],
    'chainSpriteFrameArr': [cc[C(0x122, 'af3j')]],
    'stepAniLabel': cc['Label'],
    'tipBox': require(C(0x23d, '6@gN'))
  },
  'init': function init(c) {
    var D = C,
        d = {
      'aycLn': function aycLn(e, f) {
        return e - f;
      },
      'CnoHn': D(0x2b4, '(p@X'),
      'vQCWk': D(0x30d, '0*Cd'),
      'rZSJV': function rZSJV(e, f) {
        return e - f;
      }
    };
    this[D(0x311, '$qjo')] = c, this[D(0x161, 'RuE%')] = c[D(0x1cc, 'CmqB')], this[D(0x293, 'fdHd')] = 0x0, this['leftStep'] = this[D(0x2ba, '7il@')][D(0x29a, 'm3fH')]['json'][D(0x262, 'RuE%')], this[D(0x302, 'm3fH')] = 0x1, this['level'] = 0x1, this[D(0x16b, 'aLUL')] = 0x0, this['closeMultLabel'](), this[D(0x191, '59as')] = c[D(0x18a, '@Acy')][D(0x2f4, 'Pw7%')][D(0x1ef, 'ui$g')]['levelData'], this[D(0x1ce, '0nY%')][D(0x319, 'BRmk')] = '农民', this[D(0x207, 'aNJb')][D(0x198, 'z^m!')](0x0, this['levelData'][this['level'] - 0x1], this[D(0x225, 'BRmk')]), this[D(0x126, 'aBQK')][D(0x249, 'WqOg')] = this[D(0x183, '$b4C')], this[D(0x284, 'aLUL')]['node'][D(0x322, '6j(s')](cc['hide']()), this[D(0x26b, '$qjo')] = [], this[D(0x12f, '6j(s')] = 0x0, this[D(0x2b1, 'aBQK')]['node'][D(0x248, 'BRmk')] = ![], this[D(0x2d0, 'UuuH')][D(0x140, 'jV1R')](this[D(0x14a, 'CmqB')]), this[D(0x227, '0*Cd')](), this[D(0x115, 'z$57')][D(0x158, 'ui$g')](this, 0x0);

    if (this[D(0x216, 'aPFP')][D(0x25e, 'b[o9')][D(0x1da, 'aPFP')][D(0x2fb, 'fdHd')]) {
      var e = this[D(0x28c, 'ui$g')][D(0x226, 'ARf9')][D(0x260, '$qjo')]();

      if (e) {
        if (d[D(0x2df, 'b[o9')] !== d['vQCWk']) this[D(0x2da, '6M%Z')](this[D(0x2a6, 'aLUL')][d[D(0x222, '%W@C')](+e, 0x1)][D(0x218, 'RuE%')]);else {
          this[D(0x2ff, '*cH#')] = c, this[D(0x193, '%W@C')] = h[D(0x2b6, 'U$oq')], this[D(0x18b, '59as')] = 0x0, this['leftStep'] = this['_controller'][D(0x2e8, '0o%0')]['json']['originStep'], this[D(0x24f, '#gKA')] = 0x1, this['level'] = 0x1, this[D(0x12c, '6@gN')] = 0x0, this[D(0x2b9, '0*Cd')](), this['levelData'] = i['_controller']['gameData'][D(0x21f, 'UuuH')]['levelData'], this[D(0x2fd, '1N^W')]['string'] = '农民', this[D(0x29d, '59as')][D(0x30a, 'f%[*')](0x0, this[D(0x199, 'af3j')][this[D(0x2ae, '4Uj&')] - 0x1], this[D(0x300, ')TD!')]), this[D(0x1bc, 'hE^]')]['string'] = this['leftStep'], this[D(0x11a, 'U$oq')][D(0x180, 'SY5!')][D(0x285, 'vebg')](j['hide']()), this['scoreTimer'] = [], this[D(0x16a, 'hE^]')] = 0x0, this['mainScoreLabel'][D(0x1a0, 'ARf9')][D(0x2d8, '7il@')] = ![], this[D(0x206, 'RuE%')]['showCharacter'](this[D(0x170, '1N^W')]), this[D(0x2f3, '#Axj')](), this[D(0x15b, '1N^W')]['init'](this, 0x0);

          if (this['_controller'][D(0x2ef, 'FxCP')][D(0x236, 'aNJb')][D(0x243, 'm3fH')]) {
            var _h = this[D(0x1c9, 'f%[*')][D(0x275, 'CmqB')][D(0x137, 'aBQK')]();

            _h && this[D(0x1ec, '4Uj&')](this['levelData'][d['aycLn'](+_h, 0x1)][D(0x1f1, '(p@X')]);
          }
        }
      }
    }
  },
  'start': function start() {
    var E = C;
    this[E(0x279, 'J96T')](), this[E(0x1a2, 'mg]w')]();
  },
  'generatePool': function generatePool() {
    var F = C,
        c = {
      'NtbIO': function NtbIO(d, e) {
        return d < e;
      },
      'kQqKf': function kQqKf(d, e) {
        return d !== e;
      },
      'RZeVs': function RZeVs(d, e) {
        return d === e;
      },
      'QKpJc': 'KprTJ',
      'zXeuR': 'kBXHD'
    };
    this['scorePool'] = new cc[F(0x1e4, 'ARf9')]();

    for (var d = 0x0; c[F(0x194, 'b[o9')](d, 0x14); d++) {
      if (c[F(0x16e, 'Pw7%')]('pewIT', 'kTaxH')) {
        var e = cc[F(0x132, 'M4Z8')](this['scorePrefab']);
        this[F(0x1c6, '0o%0')][F(0x27c, '4Uj&')](e);
      } else {
        g = h || 0x0;
        if (this[F(0x317, '#Axj')][F(0x281, 'FxCP')] != 0x3 && (d || this['reviveTime'] >= 0x3)) this[F(0x2c2, '6M%Z')]['gameOver'](), this[F(0x31b, '(p@X')](), this['_controller']['social'][F(0x203, '@Acy')][F(0x2e9, 'Pw7%')] && this['_controller'][F(0x123, ')TD!')][F(0x17f, 'BRmk')](this['level'], this[F(0x1bf, 'GFbI')]);else !j && this[F(0x2cc, '59as')][F(0x2c1, 'z$57')]();
      }
    }

    this['scoreParticlePool'] = new cc[F(0x288, 'fdHd')]();

    for (var _g = 0x0; c[F(0x190, '1N^W')](_g, 0x14); _g++) {
      if (c[F(0x184, 'mg]w')](c[F(0x261, '0*Cd')], c[F(0x14f, '1N^W')])) this[F(0x2fc, 'hE^]')][F(0x1da, 'aPFP')][F(0x1a8, '0nY%')] = ![];else {
        var _j = cc[F(0x118, 'BRmk')](this[F(0x1e0, '(p@X')]);

        this['scoreParticlePool'][F(0x23c, 'RuE%')](_j);
      }
    }

    this[F(0x13f, '(p@X')] = new cc[F(0x192, 'f%[*')]();

    for (var k = 0x0; c['NtbIO'](k, 0x3); k++) {
      var _l = cc[F(0x181, '59as')](this['multPropPrefab']);

      this[F(0x2d5, '0nY%')]['put'](_l);
    }
  },
  'instantiateScore': function instantiateScore(c, d, e) {
    var G = C,
        f = {
      'BqBKw': function BqBKw(i, j) {
        return i > j;
      },
      'rNyQH': G(0x2a1, '%W@C'),
      'cxZxJ': G(0x289, 'fdHd'),
      'yoAqj': G(0x28d, 'f%[*'),
      'CjadR': G(0x308, 'aNJb')
    };
    var g = null;
    c[G(0x12e, '6j(s')] && f[G(0x306, '(p@X')](c[G(0x17e, 'aPFP')][G(0x23f, '1N^W')](), 0x0) ? f[G(0x125, 'jV1R')] !== f[G(0x294, 'aPFP')] ? g = c[G(0x185, 'J96T')][G(0x301, '*cH#')]() : this[G(0x146, 'f%[*')] = !![] : g = cc[G(0x132, 'M4Z8')](c[G(0x2c7, 'fdHd')]);
    g[G(0x238, '6@gN')] = this[G(0x2a8, '4Uj&')], g['getComponent'](f['yoAqj'])[G(0x1ee, '*cH#')](c, d, e);
    var h = null;
    c['scoreParticlePool'] && c[G(0x17c, '$b4C')]['size']() > 0x0 ? h = c[G(0x2c5, 'm3fH')]['get']() : h = cc[G(0x31d, '6M%Z')](c['scoreParticlePrefab']), h['parent'] = this[G(0x2db, 'mg]w')], h[G(0x2c3, 'SY5!')](f[G(0x273, 'm3fH')])[G(0x2a5, 'b[o9')](c, e, this['_controller']['config']['json']['scoreParticleTime']);
  },
  'bindNode': function bindNode() {
    var H = C,
        c = {
      'nIVwx': 'leftStepNode',
      'RjLky': H(0x2f5, 'Pw7%'),
      'DxdlK': H(0x2a4, 'af3j'),
      'OWdyK': H(0x1d2, 'SY5!'),
      'OQQIP': H(0x242, 'b[o9'),
      'Dhjir': H(0x154, 'aNJb'),
      'zqAKV': H(0x2ac, 'BRmk'),
      'FNxki': 'highScore'
    };
    this[H(0x1fc, '2soB')] = this[H(0x1da, 'aPFP')][H(0x2e0, 'hE^]')]('UI')[H(0x114, 'GFbI')](c[H(0x1ae, 'b[o9')])['getChildByName'](H(0x219, 'J96T'))['getComponent'](cc[H(0x315, '*cH#')]), this[H(0x276, 'fdHd')] = this[H(0x27d, 'M4Z8')][H(0x1aa, 'SY5!')]('UI')[H(0x26d, '2soB')](c['RjLky'])['getChildByName'](c['DxdlK'])[H(0x177, '0o%0')]('progress'), this[H(0x149, '$b4C')] = this[H(0x320, 'b[o9')][H(0x30f, '(p@X')]('UI')[H(0x14e, 'aBQK')](H(0x304, 'CmqB')), this[H(0x213, 'SY5!')] = this['mainScoreLabel'][H(0x237, 'RuE%')][H(0x136, '#Axj')](c[H(0x2e6, '59as')])['getComponent'](cc['Label']), this[H(0x295, '$b4C')] = this[H(0x266, '6@gN')]['getChildByName']('UI')[H(0x30f, '(p@X')](H(0x11e, '0nY%'))['getChildByName'](c[H(0x1a3, '@Acy')])[H(0x1c5, '*cH#')](c[H(0x17a, 'z$57')])[H(0x31e, '7il@')](cc['Label']), this[H(0x2e7, '$b4C')] = this[H(0x1e7, 'mQf9')][H(0x1b6, '6M%Z')]('UI')[H(0x26d, '2soB')](H(0x11d, 'b[o9'))[H(0x1ad, 'J96T')](cc[H(0x152, '2soB')]), this['failScore'] = this[H(0x1ff, ')TD!')][H(0x2e1, '%W@C')]('info')[H(0x255, '7il@')](H(0x1b7, 'M4Z8'))[H(0x278, 'b[o9')](cc[H(0x1ac, '(p@X')]), this[H(0x27a, 'Pw7%')] = this[H(0x2bc, 'aPFP')]['getChildByName'](H(0x164, '$qjo'))['getChildByName']('level')[H(0x1c8, '#gKA')](cc[H(0x2f2, 'UuuH')]), this[H(0x2ea, '59as')] = this[H(0x1b8, 'ui$g')][H(0x13b, '@Acy')](H(0x162, '59as'))['getChildByName'](c[H(0x2cb, 'b[o9')])[H(0x1c1, '@Acy')](cc['Sprite']), this[H(0x19f, 'SY5!')] = this[H(0x1ff, ')TD!')]['getChildByName'](c[H(0x316, 'GFbI')])[H(0x174, 'J96T')](c['FNxki'])[H(0x2ad, 'GFbI')](cc[H(0x12b, 'aPFP')]);
  },
  'onStep': function onStep(c) {
    var _this = this;

    var I = C,
        d = {
      'zpPDv': 'Rtqky',
      'uYpMd': function uYpMd(e, f) {
        return e(f);
      },
      'fYDig': function fYDig(e, f) {
        return e > f;
      }
    };
    return this[I(0x2d7, '*cH#')] += c, new Promise(function (e, f) {
      var J = I;

      if (d[J(0x16c, '59as')] !== J(0x312, '#gKA')) {
        var _h2 = _this[J(0x197, 'Pw7%')]['social'][J(0x297, 'hE^]')]();

        _h2 && _this[J(0x2a7, 'Pw7%')](_this['levelData'][+_h2 - 0x1]['giftStep']);
      } else _this['leftStep'] < 0x0 ? (_this['leftStep'] = 0x0, _this[J(0x1d5, '%W@C')](), e(![])) : d['uYpMd'](e, !![]), _this[J(0x2e5, '*cH#')][J(0x25a, 'z$57')] = _this['leftStep'], d['fYDig'](c, 0x0) && _this['showStepAni'](c);
    });
  },
  'addScore': function addScore(c, d) {
    var _this2 = this;

    var K = C,
        e = {
      'yelSN': function yelSN(g, h) {
        return g * h;
      },
      'OcjgL': function OcjgL(g, h) {
        return g === h;
      },
      'inBtC': K(0x274, 'vebg'),
      'CoqxV': function CoqxV(g, h) {
        return g(h);
      },
      'yOrop': function yOrop(g, h, i) {
        return g(h, i);
      },
      'kZCRb': function kZCRb(g, h) {
        return g == h;
      },
      'YZDQp': function YZDQp(g, h) {
        return g + h;
      },
      'csnbE': function csnbE(g, h) {
        return g * h;
      },
      'LQiVc': function LQiVc(g, h) {
        return g > h;
      },
      'eoQCo': function eoQCo(g, h) {
        return g - h;
      }
    };
    d = d || this['_controller'][K(0x1f6, 'M4Z8')][K(0x310, '@Acy')][K(0x133, '0nY%')];
    this[K(0x17d, 'M4Z8')] && e['CoqxV'](clearTimeout, this[K(0x148, '@Acy')]);
    this[K(0x2ca, 'RuE%')](), this[K(0x270, '0o%0')] = e[K(0x124, 'aLUL')](setTimeout, function () {
      var L = K;
      e['OcjgL'](L(0x24c, '(p@X'), e['inBtC']) ? _this2[L(0x245, '6@gN')](_this2[L(0x223, '0*Cd')], {
        'x': -0x3c,
        'y': 0x163
      }, cc[L(0x280, 'M4Z8')](function () {
        var M = L;
        _this2[M(0x1f4, '0o%0')] += e[M(0x2f8, 'fdHd')](_this2['currentAddedScore'], _this2['multiple']), _this2[M(0x22e, '(p@X')](), _this2[M(0x22a, 'GFbI')] = 0x1, _this2[M(0x32a, 'aNJb')](), _this2[M(0x313, 'vebg')](), _this2['currentAddedScore'] = 0x0, _this2[M(0x1d1, '6@gN')][M(0x14d, 'Pw7%')][M(0x2bf, 'ui$g')] = ![];
      }, _this2)) : _this2[L(0x1e1, '6j(s')][L(0x1f7, '$b4C')]['onGameOver'](_this2[L(0x2b5, '$qjo')], _this2[L(0x1f8, 'FxCP')]);
    }, 0x1f4 / 0x1);
    var f = e['kZCRb'](d, this[K(0x127, '1N^W')]['config']['json'][K(0x204, 'vebg')]) ? e[K(0x244, 'af3j')](d, e[K(0x196, ')TD!')](e[K(0x323, '6@gN')](this['chain'], 0x10) ? 0x10 : e[K(0x257, 'mg]w')](this[K(0x22a, 'GFbI')], 0x1), 0xa)) : d;
    this[K(0x20a, 'vebg')] += f, this[K(0x20c, 'ui$g')][K(0x163, 'b[o9')] = this[K(0x253, 'mQf9')], this['instantiateScore'](this, f, c), this['chain']++, this[K(0x1ab, 'hE^]')]();
  },
  'checkChain': function checkChain() {
    var _this3 = this;

    var N = C,
        c = {
      'urFHI': function urFHI(d, e) {
        return d(e);
      },
      'tsyyU': function tsyyU(d, e) {
        return d !== e;
      },
      'zJQVf': N(0x116, '7il@'),
      'QXuDf': function QXuDf(d, e) {
        return d < e;
      },
      'gZYrS': N(0x23a, 'b[o9'),
      'LoqXO': N(0x22b, 'vebg'),
      'doUny': function doUny(d, e) {
        return d <= e;
      },
      'PmLoY': N(0x11c, '2soB'),
      'QNtNX': function QNtNX(d, e, f) {
        return d(e, f);
      }
    };
    this[N(0x241, '7il@')] && clearTimeout(this['checkChainTimer']), this[N(0x24a, 'aPFP')] = c[N(0x2cd, 'SY5!')](setTimeout, function () {
      var O = N,
          d = {
        'RdfTA': function RdfTA(e, f) {
          return c['urFHI'](e, f);
        }
      };

      if (c['tsyyU'](O(0x1d8, '4Uj&'), c[O(0x307, 'z$57')])) {
        var e = _this3['_controller']['config'][O(0x221, '*cH#')][O(0x1a1, 'FxCP')];

        for (var _f = 0x0; c['QXuDf'](_f, e[O(0x202, '#gKA')]); _f++) {
          if (c[O(0x212, 'mQf9')] === c[O(0x128, 'aLUL')]) _this3[O(0x27e, '$qjo')][O(0x195, '7il@')][O(0x171, '6j(s')](0x2), _this3['_controller']['pageMgr'][O(0x231, ')TD!')](0x3), _this3[O(0x1af, '0nY%')][O(0x2a3, 'f%[*')]['onWin'](), _this3[O(0x2a2, 'b[o9')][O(0x2d9, '7il@')](_this3, _this3[O(0x2b8, 'af3j')], _this3[O(0x2a6, 'aLUL')], _this3['score']), _this3[O(0x2bd, 'aLUL')][O(0x18d, 'mg]w')](), _this3[O(0x14c, 'Pw7%')]['onSuccessDialog'](_this3[O(0x2cf, 'mg]w')]), _this3[O(0x247, 'J96T')][O(0x14b, 'ui$g')] = 0x2, _this3[O(0x1e1, '6j(s')][O(0x20d, '0*Cd')][O(0x259, '%W@C')][O(0x30b, '0o%0')] && _this3['_controller'][O(0x2b7, '#gKA')][O(0x19d, 'f%[*')]();else {
            if (c['doUny'](_this3[O(0x291, '6@gN')], e[_f][O(0x1de, 'FxCP')]) && _this3[O(0x19b, 'fdHd')] >= e[_f][O(0x20b, 'mQf9')]) {
              if (c['PmLoY'] === c['PmLoY']) {
                _this3[O(0x2af, '0o%0')](_f);

                return;
              } else e = _f[O(0x263, 'aBQK')][O(0x264, '0o%0')]();
            }
          }
        }
      } else _this3['leftStep'] = 0x0, _this3[O(0x166, 'aNJb')](), d[O(0x24e, 'BRmk')](d, ![]);
    }, 0xc8);
  },
  'showChainSprite': function showChainSprite(c) {
    var P = C;
    this['chainSprite'][P(0x2eb, '59as')] = this[P(0x230, '(p@X')][c], this['chainSprite'][P(0x254, 'BRmk')][P(0x2f7, '0nY%')] = 0.5, this[P(0x329, 'vebg')]['node'][P(0x22d, 'UuuH')] = !![], this['chainSprite'][P(0x1b4, 'UuuH')]['runAction'](A[P(0x1bb, 'FxCP')](0.3));
  },
  'hideChainSprite': function hideChainSprite() {
    var Q = C;
    this[Q(0x2d2, '@Acy')][Q(0x1ea, 'z^m!')][Q(0x134, 'z^m!')] = ![];
  },
  'checkLevelUp': function checkLevelUp() {
    var R = C,
        c = {
      'KPKsw': function KPKsw(d, e) {
        return d < e;
      },
      'PUDzJ': function PUDzJ(d, e) {
        return d >= e;
      },
      'aMIjd': function aMIjd(d, e) {
        return d > e;
      },
      'LxAri': function LxAri(d, e) {
        return d - e;
      }
    };
    c[R(0x1fd, 'WqOg')](this['level'], this['levelData']['length']) && c[R(0x30c, '%W@C')](this['score'], this[R(0x1b5, 'ARf9')][this[R(0x1ca, 'FxCP')] - 0x1]['score']) && (this[R(0x1ca, 'FxCP')]++, c[R(0x31f, '#gKA')](this[R(0x300, ')TD!')], this[R(0x1b5, 'ARf9')][R(0x1bd, '0*Cd')] + 0x1) ? this[R(0x28a, '59as')]() : this[R(0x265, '6@gN')]()), this[R(0x1fe, 'GFbI')][R(0x30a, 'f%[*')](this[R(0x21e, 'z^m!')], this['levelData'][c['LxAri'](this[R(0x290, 'jV1R')], 0x1)], this[R(0x300, ')TD!')]);
  },
  'addMult': function addMult(c, d) {
    var S = C,
        e = {
      'YYrHT': function YYrHT(f, g) {
        return f + g;
      },
      'YNtpE': function YNtpE(f, g) {
        return f - g;
      },
      'tsNHH': function tsNHH(f, g) {
        return f < g;
      },
      'AMRqv': function AMRqv(f, g) {
        return f === g;
      },
      'HobvO': S(0x2c9, '#Axj')
    };
    e[S(0x1d4, '6M%Z')](this[S(0x28e, 'Pw7%')], this[S(0x1cc, 'CmqB')]['config'][S(0x1d7, '7il@')][S(0x144, 'af3j')]) && (e['AMRqv'](S(0x2dd, '#Axj'), e[S(0x30e, '1N^W')]) ? (this[S(0x2d6, 'z$57')][S(0x21d, '$qjo')] = e[S(0x2be, '@Acy')]('\x20', e[S(0x15a, 'jV1R')](this[S(0x130, 'RuE%')], '')), this[S(0x309, 'z$57')][S(0x2e3, 'U$oq')](this['level']), this['failName'][S(0x319, 'BRmk')] = this[S(0x21c, '(p@X')][e[S(0x13e, 'aPFP')](this[S(0x299, '#gKA')], 0x1)]['name']) : (this[S(0x153, 'aLUL')] *= 0x2, this[S(0x1df, '4Uj&')]()));
  },
  'closeMultLabel': function closeMultLabel() {
    var T = C;
    this[T(0x251, 'RuE%')] = 0x1, this[T(0x156, '0o%0')][T(0x13a, 'vebg')][T(0x243, 'm3fH')] = ![];
  },
  'showMultLabel': function showMultLabel() {
    var U = C;
    this['multLabel'][U(0x267, 'FxCP')][U(0x217, 'm3fH')] = 0.5, this[U(0x1f9, '%W@C')][U(0x1c3, 'aBQK')] = this[U(0x15f, 'UuuH')], this['multLabel']['node'][U(0x182, '2soB')] = !![], this[U(0x252, 'm3fH')][U(0x259, '%W@C')][U(0x233, 'CmqB')](A['popOut'](0.3));
  },
  'initCurrentScoreLabel': function initCurrentScoreLabel() {
    var V = C;
    this[V(0x1e6, 'af3j')][V(0x266, '6@gN')]['active'] = !![], this[V(0x1e2, '4Uj&')]['node']['x'] = 0x0, this['mainScoreLabel'][V(0x1f0, '$qjo')]['y'] = 0x0, this[V(0x165, 'Pw7%')]['node']['scale'] = 0x1;
  },
  'onCurrentScoreLabel': function onCurrentScoreLabel(c, d, e) {
    var W = C;
    this[W(0x173, 'b[o9')]['string'] = c;
    var f = cc[W(0x2bb, 'UuuH')](cc[W(0x172, 'J96T')](0.2, d['x'], d['y']), cc[W(0x268, 'CmqB')](0.2, 0.4))[W(0x27b, '59as')](cc['easeBackOut']()),
        g = cc[W(0x21a, 'mg]w')](f, e);
    this['mainScoreLabel'][W(0x2dc, '0nY%')][W(0x19a, '2soB')](g);
  },
  'onLevelUp': function onLevelUp() {
    var X = C,
        c = X(0x26a, '59as')[X(0x28f, 'ui$g')]('|');
    var d = 0x0;

    while (!![]) {
      switch (c[d++]) {
        case '0':
          this[X(0x1ed, '2soB')][X(0x2e4, '4Uj&')]();
          continue;

        case '1':
          this[X(0x129, 'WqOg')][X(0x175, 'GFbI')]['node']['active'] && this[X(0x1a6, 'jV1R')][X(0x1cd, '6j(s')][X(0x25f, 'UuuH')]();
          continue;

        case '2':
          this[X(0x1e3, 'fdHd')][X(0x286, '6j(s')] = 0x2;
          continue;

        case '3':
          this['successDialog']['init'](this, this[X(0x287, '0o%0')], this[X(0x17b, 'RuE%')], this['score']);
          continue;

        case '4':
          this[X(0x2b6, 'U$oq')][X(0x1eb, 'WqOg')][X(0x1b3, 'hE^]')]();
          continue;

        case '5':
          this[X(0x119, 'GFbI')]['pageMgr']['addPage'](0x3);
          continue;

        case '6':
          this[X(0x224, ')TD!')]['pageMgr'][X(0x1d0, 'm3fH')](0x2);
          continue;

        case '7':
          this[X(0x121, '0o%0')][X(0x155, 'GFbI')](this[X(0x2fa, 'z^m!')]);
          continue;
      }

      break;
    }
  },
  'levelLimit': function levelLimit() {
    this['hideNextLevelData']();
  },
  'onLevelUpButton': function onLevelUpButton(c) {
    var _this4 = this;

    var Y = C,
        d = {
      'ToKcA': function ToKcA(e, f) {
        return e !== f;
      },
      'hpMaZ': function hpMaZ(e, f) {
        return e !== f;
      },
      'dIJPg': function dIJPg(e, f) {
        return e * f;
      },
      'pBoNx': function pBoNx(e, f) {
        return e === f;
      },
      'IsQaH': Y(0x120, 'z$57'),
      'ecsMv': function ecsMv(e, f) {
        return e - f;
      },
      'woELF': function woELF(e, f) {
        return e !== f;
      },
      'Nvtji': Y(0x1e5, '@Acy'),
      'ZrQfw': 'yRoEZ',
      'PFXqY': function PFXqY(e, f, g) {
        return e(f, g);
      },
      'TSVDh': function TSVDh(e, f) {
        return e || f;
      },
      'KElmJ': function KElmJ(e, f, g) {
        return e(f, g);
      }
    };
    console[Y(0x1cb, 'WqOg')](c);

    if (this[Y(0x1a5, 'ARf9')]) {
      if (d['woELF'](d['Nvtji'], d[Y(0x214, '6j(s')])) d(!![]);else return;
    } else d[Y(0x1b0, 'vebg')] !== Y(0x2d3, 'ui$g') ? this[Y(0x159, 'RuE%')] = !![] : this[Y(0x2f9, '#Axj')]['social']['node']['active'] ? this['_controller'][Y(0x327, 'RuE%')][Y(0x23b, 'UuuH')](0x0) : this[Y(0x157, 'CmqB')](0x2);

    d['PFXqY'](setTimeout, function () {
      var Z = Y;
      d[Z(0x314, '$b4C')](Z(0x11b, 'M4Z8'), 'kybyj') ? (_this4[Z(0x25d, 'SY5!')][Z(0x27f, 'ARf9')](), _this4['updateFailPage'](), _this4[Z(0x161, 'RuE%')][Z(0x2c6, 'f%[*')]['node'][Z(0x135, 'mQf9')] && _this4[Z(0x119, 'GFbI')][Z(0x1f5, 'z^m!')]['onGameOver'](_this4[Z(0x2ee, 'U$oq')], _this4[Z(0x1d9, '#Axj')])) : _this4[Z(0x292, 'FxCP')] = ![];
    }, 0x1f4), c && c[Y(0x25c, 'af3j')] ? c = 0x1 : c = d[Y(0x325, 'b[o9')](c, 0x1), this['_controller']['pageMgr'][Y(0x2a0, 'b[o9')](0x1), this[Y(0x324, '0*Cd')](), this[Y(0x187, '0*Cd')]['string'] = d[Y(0x1b2, 'UuuH')](this[Y(0x2de, '0*Cd')][d['ecsMv'](this['level'], 0x2)][Y(0x2ed, '2soB')], c), this[Y(0x16d, 'vebg')][Y(0x201, 'mg]w')](this['level']), this[Y(0x1d6, 'aPFP')][Y(0x26f, 'fdHd')] = this[Y(0x176, 'f%[*')][this[Y(0x2ee, 'U$oq')] - 0x1][Y(0x1fa, 'af3j')], d[Y(0x117, 'b[o9')](setTimeout, function () {
      var a1 = Y,
          g = {
        'zllcb': function zllcb(h, i) {
          var a0 = _b;
          return d[a0(0x277, 'jV1R')](h, i);
        },
        'HJzzp': a1(0x2ec, 'm3fH'),
        'VPpph': function VPpph(h, i) {
          var a2 = a1;
          return d[a2(0x2e2, '#gKA')](h, i);
        },
        'HbCKv': function HbCKv(h, i) {
          return h - i;
        }
      };
      d[a1(0x2c0, '$qjo')](d['IsQaH'], a1(0x12a, 'aBQK')) ? _this4[a1(0x326, 'af3j')](_this4['levelData'][d['ecsMv'](_this4[a1(0x283, 'J96T')], 0x2)][a1(0x1be, 'mg]w')] * c, {
        'x': -0xf8,
        'y': 0x15e
      }, cc['callFunc'](function () {
        var a3 = a1;
        g[a3(0x178, 'aNJb')](g[a3(0x250, '2soB')], g['HJzzp']) ? f = g[a3(0x220, 'WqOg')](h['scorePrefab']) : (_this4[a3(0x29f, '0*Cd')](g[a3(0x240, 'BRmk')](_this4[a3(0x147, 'M4Z8')][g[a3(0x160, 'U$oq')](_this4['level'], 0x2)][a3(0x208, '4Uj&')], c))['then'](), _this4[a3(0x2ff, '*cH#')][a3(0x2c4, 'BRmk')] = 0x1, _this4['mainScoreLabel']['node'][a3(0x2f0, 'aLUL')] = ![]);
      })) : _this4[a1(0x151, 'm3fH')](0x2);
    }, 0x12c), this[Y(0x2d1, '#Axj')](), this[Y(0x150, '6@gN')]();
  },
  'showStepAni': function showStepAni(c) {
    var a4 = C,
        d = {
      'qQKtv': function qQKtv(f, g) {
        return f + g;
      }
    };
    this[a4(0x169, 'CmqB')]['string'] = d[a4(0x303, 'ARf9')]('+', d[a4(0x228, '2soB')](c, '')), this[a4(0x25b, '@Acy')][a4(0x282, 'aBQK')]['x'] = -0xf8, this['stepAniLabel']['node']['y'] = 0x190, this[a4(0x188, 'M4Z8')]['node'][a4(0x131, 'Pw7%')](cc[a4(0x1b9, 'GFbI')](cc[a4(0x2a9, 'aNJb')](), cc[a4(0x239, '2soB')](0.6, 0x0, 0x3c), cc['toggleVisibility']()));
    var e = cc['sequence'](cc[a4(0x2f1, '0o%0')](0.2, 0.8), A[a4(0x15d, 'J96T')](0.8));
    this[a4(0x20f, 'BRmk')]['node'][a4(0x1db, '@Acy')][a4(0x229, '1N^W')](e);
  },
  'onGameOver': function onGameOver(c) {
    var _this5 = this;

    var a5 = C,
        d = {
      'MhEYF': function MhEYF(e, f) {
        return e * f;
      },
      'MaAxM': function MaAxM(e, f) {
        return e || f;
      },
      'cafDh': function cafDh(e, f) {
        return e != f;
      },
      'vPmsY': function vPmsY(e, f) {
        return e >= f;
      },
      'SjaoB': a5(0x1f3, '6@gN'),
      'gHURj': function gHURj(e, f) {
        return e !== f;
      },
      'NfmTC': 'betjK'
    };
    c = d[a5(0x200, 'aPFP')](c, 0x0);

    if (d['cafDh'](this[a5(0x209, 'M4Z8')][a5(0x1e9, 'UuuH')], 0x3) && (c || d[a5(0x1dd, 'aBQK')](this[a5(0x2c8, '%W@C')], 0x3))) {
      if (d[a5(0x168, '#Axj')] === a5(0x272, 'GFbI')) this[a5(0x2f6, ')TD!')][a5(0x1a4, 'jV1R')](), this[a5(0x1c7, 'ARf9')](), this[a5(0x2d4, '6@gN')]['social'][a5(0x236, 'aNJb')][a5(0x22d, 'UuuH')] && (d[a5(0x167, 'aNJb')](a5(0x234, '4Uj&'), d[a5(0x2b2, 'aBQK')]) ? this[a5(0x138, 'f%[*')]() : this[a5(0x2d4, '6@gN')][a5(0x20e, 'BRmk')][a5(0x2aa, 'Pw7%')](this['level'], this[a5(0x31c, 'b[o9')]));else {
        var _g2 = this[a5(0x147, 'M4Z8')][this[a5(0x2ab, 'f%[*')]];
      }
    } else {
      if (!c) {
        if (a5(0x21b, 'ARf9') !== a5(0x23e, 'SY5!')) {
          var _h3 = {
            'GlFxQ': function GlFxQ(i, j) {
              return d['MhEYF'](i, j);
            },
            'hpaIC': function hpaIC(i, j) {
              return i - j;
            }
          };
          this[a5(0x13c, 'CmqB')](d[a5(0x246, 'WqOg')](this['levelData'][this[a5(0x296, 'aBQK')] - 0x2][a5(0x22c, '$qjo')], f), {
            'x': -0xf8,
            'y': 0x15e
          }, g['callFunc'](function () {
            var a6 = a5;
            _this5[a6(0x31a, 'WqOg')](_h3[a6(0x19c, 'SY5!')](_this5['levelData'][_h3['hpaIC'](_this5[a6(0x318, '6M%Z')], 0x2)]['step'], i))['then'](), _this5[a6(0x328, 'f%[*')][a6(0x298, 'z$57')] = 0x1, _this5['mainScoreLabel'][a6(0x139, '6j(s')][a6(0x2b3, '$b4C')] = ![];
          }));
        } else this['_game'][a5(0x1fb, 'f%[*')]();
      }
    }
  },
  'onDoubleStepBtn': function onDoubleStepBtn() {
    var a7 = C,
        c = {
      'ZCYVg': function ZCYVg(d, e) {
        return d === e;
      },
      'XLGLD': a7(0x321, 'M4Z8')
    };

    if (this['_controller']['social']['node'][a7(0x215, '6j(s')]) {
      if (c[a7(0x22f, '0*Cd')](c[a7(0x205, 'aNJb')], c[a7(0x2ce, 'SY5!')])) this[a7(0x1ba, 'af3j')]['social'][a7(0x18e, '6M%Z')](0x0);else {
        this['mainScoreLabel']['string'] = l;

        var e = m[a7(0x26e, '0*Cd')](n[a7(0x235, '@Acy')](0.2, o['x'], p['y']), q[a7(0x305, 'mg]w')](0.2, 0.4))[a7(0x189, 'hE^]')](r[a7(0x269, 'Pw7%')]()),
            _f2 = s[a7(0x2fe, 'z$57')](e, t);

        this[a7(0x11f, '%W@C')]['node'][a7(0x1c2, '4Uj&')](_f2);
      }
    } else this['onLevelUpButton'](0x2);
  },
  'onDoubleStep': function onDoubleStep() {
    var a8 = C;
    this[a8(0x19e, 'mg]w')](0x2);
  },
  'onRevive': function onRevive() {
    var a9 = C;
    this['reviveTime'] += 0x1, this['onStep'](0x5)[a9(0x258, '*cH#')]();
  },
  'showNextLevelData': function showNextLevelData() {
    var aa = C;
    var c = this[aa(0x21c, '(p@X')][this[aa(0x2ae, '4Uj&')]];
  },
  'hideNextLevelData': function hideNextLevelData() {},
  'updateFailPage': function updateFailPage() {
    var ab = C,
        c = {
      'jZYrH': function jZYrH(d, e) {
        return d + e;
      },
      'TSIUf': function TSIUf(d, e) {
        return d - e;
      }
    };
    this[ab(0x28b, 'Pw7%')][ab(0x26c, '6@gN')] = c['jZYrH']('\x20', this[ab(0x18f, '0*Cd')] + ''), this[ab(0x1c0, '$qjo')]['onFail'](this['level']), this['failName']['string'] = this[ab(0x141, 'm3fH')][c[ab(0x29b, 'UuuH')](this['level'], 0x1)][ab(0x1d3, 'z^m!')];
  }
});

function a() {
  var ac = function () {
    return [version_, 'xuKjIstxjnMiMaLmriU.QrFcLoABKmf.UvUU7RJF==', 'W4pcJmkSkCk5WRXllG', 'kge4WPVcPJu', 'WRScWR5wWOevjwFcHIHgzG', 'W53cImkjWQS', 'W7tdNmkkWR8', 'WRbve0m', 'WObUuSkOiHldLCoR', 'W4VcOLqWWO3dPCobkXics8oNW6W', 'W6JcLSo3E2m', 'zmodWPjKW7K', 'W5i4WPlcIW7cUW', 'W68iC3e7ha', 'WO7dUqvTW5RcUG', 'W67cOxaYW54', 'WRRdMGz2WRJcQ3y8WPa', 'WObRWR7cTa', 'vxzNomoNW6FdI8ozlq', 'WRqpWRLqWRmcnhlcUardCCkt', 'W6xcQCkum8kT', 'tCoHWQjfWRHmW7ddJCo5jCox', 'f2hdQ8k5W6lcM07dVSkYWPi', 'W7ddRYuqeq', 'imkClmkrWPZdQ3rNW6ddSSkFDq', 'cSkXaNzvW6K', 'W4a5o0m', 'pgWWWQKFACo1nNu', 'ysbbdf0', 'W54KW78+WP0ZyK4plKJdRq', 'sr5Pj2Sfkr3cNN7cOG', 'nhSoWP8', 'W5maFhO3', 'lhOTWQKFrCoGbhtdUKKeW58phmkxW4a', 'xw7dIq', 'W7pdJSkmWR/cUwRcHmkxCbdcHmo1yMe', 'WQqvEcLAWR4', 'WRNcT0hcVXzp', 'WQBcVutcOIrxW4KTWOiGzhhdMG', 'W4a0WOxcIWdcUq', 'W64QW4ZdS8k1W7rEW6lcVNldQmkyDG', 'v13dVKddJq', 'Fmoyp8ktymoUve7dRG', 'zSkzomojWPi', 'sCkmomokWO3cSW', 'W6ldRqSgkhBdR8okDu/dOa', 'CmogW6iyva', 'W5OLW7G4WQ8KC1S', 'W7elW6FcGce', 'pmkxeCkbWO/dOhTx', 'WQNcLCo5zaa', 'WOTIqSk5hsldKCoVpq', 'WQ1obu91fq', 'W5i0WP7cKaO', 'WRXQWPlcRG', 'W4FcL8kSnmk7WP9ynv5bW7a', 'W57cLCkpWRe', 'WQxdTtLiWQi', 'WRqpAtjEWRZdLqToAmkqW4vfCSkZWPKo', 'lMpdRCk7W5lcGeddVSkXWPbD', 'WQBcVvtcSXS', 'WRlcGSoVBHqy', 'WR8tFYv4WRRdGcnex8kfW5n/zCk5', 'WQK7WPrqWPy', 'WRqUWR3cU8k0WQtcPNdcJa', 'xSo7WQXlWQq', 'k0aoWQSZ', 'WQ1oeLy', 'WRD6WONcQCoWWQq', 'WOrVuCk/gIRdLCoTowFcICo6', 'WO05qHzC', 'WOrVvCk1hZxdGmoPnx/cUCommmkBq17dTLuV', 'egtdPSkfW4FcLuO', 'W7FdMCk+m0nhW4TSDmkjD3JdSq', 'sSozWPy1AmoXfqCU', 'jwOFWOxcIa', 'W4m5kupcNCkp', 'vWnIjq', 'W5mJW7OP', 'W5/cSSoSEgq1', 'WRufWQLbWQip', 'uxugB8oO', 'WRL3WQ/cPCoWWQGCW6BcPKVdRCkHB8k+', 'W405W6O', 'W5VcUSoUx2u5', 'ECovjSkewq', 'WRuYWQNcNW', 'WPZcIflcPH8', 'WOz+WRbtoYpcPcXWW5mxp0RcJ8kY', 'v2aKBq', 'ySogW7CDr8o7', 'WRDqWPFcGcO', 'W4dcVCoDAhGZW6zzymoqy2JcSCorW48MiJ59', 'W6pcKCkAgCkC', 'W6inW6tcIcG', 'WQVcU1BcVWfg', 'W53cJCkTkCk0WPy', 'W57dPGeln0FdQmohCetdHSoOW5xcJ8kN', 'W7DPW6pcOSk6WPZcJwNcPG', 'WPzHvCkwga', 'W4FcKCo7W5KhW6SRWQNdKsJdQCkHbq', 'WPJcVetcGJy', 'bCk8dxHp', 'WPaGWQvEWPa', 'W5a5W7i4WPuGEK4', 'BSoqW68aFCo/hHij', 'u3ldLuddUYSiWRBcO1yLlwfwoSoKoa', 'WQtcT0BcSW', 'WOjZWQfZoaNcOcLBW4qnn0RcJW', 'cfuXEcLzyINcIe/cKXRcQa', 'kSkDmCk3WOu', 'W4dcJSkfWRe', 'WRNdGa5N', 'WOxdNCk5WOHEWR4', 'W50IoLBcImkoW4uPWOpcHCkPwG', 'WO1/WQhcOZ/cGCkzW5xdGZLeWRVcVG', 'tSokmSkksq', 'sM4QyCoMkq', 'WRLPWPJcRSoeWQaeW63cGuZdMmkXDG', 'WRLFa25YfCo+jCozFqD2W4ldN0a', 'WOyXAWPy', 'W5i+W7CRWPu+rv8yeW', 'ruzwo2tcIdhdT8kF', 'CmofWOK', 'W4dcVCosEhWKW69Iza', 'W4hcVmo6Ea', 'W7pcRxSL', 's8opWPKyBSoreW', 'aa/cNgRdP8k3hCoLl8oRcq', 'ESoJFSopWPKEWPeun0ldNJ1zW6Hd', 'WQ1zgfr+jSo/lCopEW', 'W5ZcP8oSDgqM', 'WR8pWQTNWOGFpwBcTHXVDCksqa', 'WQqkEJDv', 'WQZdGmoNW7ldK0a', 'DmoiWPX/W7jnW6Lsb8kC', 'W7pdN8k9p0DdW4HgFmkHDwJdNG', 'ESowWQreWQm', 'qmopW6iqyW', 'pMK+WPet', 's8odWPSDASoP', 'WQ/dHSo6W7ZdJ0lcJSkuz0OG', 'W68IWRS/qW', 'xMq9s8oOkmoqWR3cJSoVWOSy', 'W5OpW6VcGd8YW5tcVSoUlSoJvW', 'aW/cHMpdQ8k3e8oR', 'kCo+omoAW4mf', 'n3OF', 'W6iiExi', 'WOfzgeHVamo5lmogBdK', 'WQBcJmoHyJOcWPX9', 'W68gCxSudSk3tq', 'W4lcSwSHW48Zyq', 'wePDla', 'W5epW7pcGce', 'WPryWRldQSkvFmoBvNRdNmopWRG', 'pxOXWPOzx8o9kN4', 'D8kComocWO/cO8k3', 'E8ofWOTZW7a', 'WPhdM8oXW77dRuJcKSkl', 'WRtdPmoNW4hdIW', 'imo6pCowW4eUW4SfBKO', 'aW/cHMpdTSk1eCo8bq', 'W4hdJmkkWR/cNNVcHmkjEtNcLW', 'r2zJgmoNW5ldH8odja', 'cbVcG3VdJmkMeSoR', 'W63dN8kjWRJcNG', 'W6S3WOa7Dq', 'W4ZcU8o/Dgq', 'W7tcSvmLW40JFSk2W4O', 'WQZdL8o6W6NdMa', 'W57dTJ4qfG', 'WPpdTWTHW7FcT8krlq4', 'wKbplg0', 'WRTcfCkfi2tcNHZdMtmJW7TlW6RdVW', 'WQNdMSk/WObeWQXH', 'cSkXgNrn', 'ymokW60swmo5', 'WOjkWRtcLCoG', 'btv/p8obW5xdRSo3'].concat(function () {
      return ['pmoTjmouW58hW5eBrv/cMW', 'uCoTwvjGW5fwW5RdSG', 'WRGusdrEWQi', 'vM8gEmoIk8oWWRpcH8oV', 'WO/dMYzQWRK', 'sNqQA8oInSotWPBcICoRWOKdW78', 'wxb/a8oHW5ZdHCoD', 'WP54WRZcTIJcISkEW7ldOcPr', 'ug8GFa', 'WOTjWQhdV8k4vSotBNO', 'cGdcVhVdGmkM', 'ngWeWP3cPGBcQIioW4dcHZdcQ8ow', 'tqnHj3ufdaFcR3BcSGlcTNeEca', 'cGdcQg7dImkZmCo4bCoS', 'wgb6d8oU', 'WQpcTKtcUq', 'wSo2WRLHWQveW7pdKCoviCollW', 'k2ODWORcRW', 'zmoiWPjHW59XW6fwdmk9z8oJzSoJWQq', 'WPyPWRBcNmk2WRi', 'w0rqj1lcUZhdQSkwWRJdTa4uWQG', 'Eenuhui', 'WPZdTrjTW43cSW', 'WOPHBmkXja', 'WRjFaun3', 'W6VdKI7dISkTqmkZW6iRmwy', 'fCk7d3HaW60', 'WOjVWQxcTdy', 'WRqwDdnEWP/dLczEqmkuW4nZFq', 'WRP1WRPEjblcOYf1W5GX', 'WQvPWPZcT8oO', 'W5VdRW0egg3dOCokDK0', 'WOreWRBdQmk1CCogF2NdS8onWQy', 'W7Cplw7cNq', 'W7/dJmkrWRJcNgW', 'WQ54ggHJ', 'WPFdMSkGWRnvWQ97WOVdHG', 'lKu1WQFdSa', 'DSoij8kKq8oIrKtdRaedzq', 'WPxcQ1BcTWnwW58', 'CmogW6Wgvmoohqurz8kosuewW7ithW', 'r2PVa8oJW70', 'WQZdL8o6W6NdMhFcJ8kcq0OW', 'WQxdIHXRWOlcR0aWWPhdTG', 'gfNdMSoCBG', 'W5qIW7C4WR8LzfKydvVdJmkfWRZdMsWjc24gba', 'FwKJyCo1', 'e8o4kSoEW4G', 'qmoJj8kPDa', 'sCoHfmkRAa', 'i8kxfSkrWOy', 'WRvXWPZcSSoNWQiEW6BcLNpdVSkN', 'euhdNSoCtwPWWOpcNdVdJmkcWQ59WQ3dLmkf', 'W40+pK/cP8kZW5WxWOVcK8kP', 'W7FdJmkxWQFcJG', 'W7dcSmoXC34ZW6XBEmoMCG', 'FMn2W4TTW4i/WQirx8kajW', 'WPddImkIWO1JWRP9WO/dHG', 'W5JcG8kgWQS3re3dSq', 'WOr1WQfzjGu', 'WOX4WRXe', 'hKWhWR7dSmkv', 'pmkrd8kgWO/dJxDCW6tdKCkcDCkaiq', 'FxL+W5O', 'kv7dSSo7va', 'WRSFBsvxWPBdGd5l', 'EM8MqmoP', 'WRTcfCkoiMRcMH3dQd4HW79qW6O', 'WRddIH5bWPZcO3G9WR7dQSkhjSkvW6G', 'aSkDjKfg', 'W5VdNWFdHCkWxG', 'kgeNWORcTsdcQrKk', 'W5JcG8kgWQS3re3dSCo8WPFcNmkBeq', 'a8oil8okW6y', 'WP7dVGDTW5xcHCkdoGS/Fq', 'DmopWPnWW7v+', 'ba3cM2BdK8kZ', 'kSo+iSoFW74sW5abC1S', 'p8oVoCoAW5KhW6qAzLpcJa', 'Cmo1W5esAa', 'WQSEWRPu', 'W5JdLdFdGCk1', 'W67cRxWPW5OQ', 'WOzpWQpdS8kIDW', 'zmodWPX6W7LnW68', 'WPP4WP/cPCoQ', 'cKddLCooqgDPWP7cVG3dISkvWQTnWQK', 'aG/cGMRdOCk3cSoV', 'fG3cGh3dGmkyeCoQbq', 'lMFdO8k4W4m', 'yhv7W5ny', 'WQBdKCo5W4JdSW', 'puRdNSofD31NWPVcVdVdIa', 'W40YWOFcHWm', 'WR7dL8oHW7ldI0i', 'WR9pamkKjfdcHGVdGZmk', 'WQG6WR7cN8kBWRhcRxRcJG', 'WOxdJmk6WPrvWRDXWPG', 'W6VcGCkbWRib', 'hwxdTmkWW4O', 'W5pcG8ku', 'ymonW6iDxW', 'WRdcVmohCWm', 's8opWPCgBSocdGC1W4e', 'pmkraCkyWO/dMNC', 'WQv2DSkxbG', 'WOZdO8kAWRDw', 'sG9PmNWWoXZcQhBcSWFcVW', 'WPxdGCkQWPnrWRPMWPJdKqtdV8kW', 'xwTLhG', 'DSodWOL/W6P8', 'WOFdUI54WR4', 'WPKJvqPm', 'WO40WRhcJmky', 'WObIqmkFgq/dNmo/hNlcKSoRl8kF', 'W4qLmeG', 'WOfDfKT+', 'nmkGhxPy', 'j2y7WR45q8o1lh7dJvWsW6uyfG', 'WQNdUs1NW7O', 'W7JcH8kcWROi', 'r8oIWOXPWPW', 'pu7dKmogzG', 'huCIWQ/dUq', 'WRNcRfdcVXLe', 'W4hcL8kmnmk/WOe', 'WPj3umk9bqpdTSo6nwFcJmoRjCkF', 'sMiMESoI', 'geWNWR7dTmkliflcIqJdMG', 'WOjZWQfZpW3cVcj3W5GTiG', 'b8kzjxTf', 'v24TBq', 'W7GkuNOB', 'wSkAiSoIWPJcOSkTWQm3', 'W6pcGSo3s2K', 'WR4uCJr4WQFdKZHpySkbW7j1FSkUWO4NFqDrWQy', 'BviFtmoV', 'WOfKWPdcPcJcNCkiW6/dLHHaWRhcUmopxCkSW4xcKCo0', 'W44JW70LWP08', 'A2jTb8oN', 'lgC+WRiuEmoKn3NdQKK', 'wGbPm3WTlWlcQfpcSqNcV3q', 'wSo2WRLHWQjaW6/dMSo5pCoRoIf0', 'WOldGmk7WQnFWQe', 'WOLdWOzQjq', 'CKqLzCon', 'WQpcTLhcOHznW5G0WQ81yW', 'ySoWWQjmWR5BW6ZdKSoxiCox', 'W4FdHstdLmkyxmk1W4iMnNfY', 'W6CEF244', 'WQOZWRbsWQe', 'wMKOyCoPfSoqWQdcICo+WOa', 'yhv1W41yW74/WRyK', 'WRRdJGnSWQFcQxSRWPNdN8kOjCkDW6e', 'WPVdISkVWPHu', 'DmoiWPXKW716W7rAemkJCmoJ', 'WR16WQhcUc7cISkRW7pdGYzg', 'aM/dOCk8W4FcNG', 'WP5JWQxdTCkK', 'W7uCWO8puq', 'wKbFpvlcRdVdQmk/WPxdTWKD', 'WPK4WRZcLmkJWQlcOhpcJSo6FG', 'WQTdWQBdGSkB', 'W7hcMSkWlSkUWOndmfnqW6C', 'w0zDmgu', 'W7hdRWynma', 'W53cTSoODhWKW5DEECoM', 'W77cI8k6jSk7WPm', 'w8kmi8orWP7cHSkRWQm1', 's8kApSorWP7cUmkWWO09WORdQur9l08UWRe', 'W44VW7e+WPK', 'fXVcGu7dHSkIf8oHdG', 'W6ujBMmZfCkTrXhcV0C', 'yhv1W41yW7iXWQeK', 'W4a0WOxcIXNcSG', 'uwtdK1VdQca', 'buZdHCoOA2zKWPpcKIFdTmkgWQ9C', 'uubnawJcVZBdVCkaWOddMqKhWQf2', 'xgXOd8omW7tdMSoBbmomW7PFqWFdQHmM', 'rSkakmog'].concat(function () {
        return ['iwa7WR4', 'W4KZk2xcOCkjW4abWQdcNSkcv8o4WRS', 'v8ocWRSbECo3gqy0W6iUtCkXWOVcUmowW5RcQSk+', 'k3PdW5jjW7uf', 'W6tdGbaygq', 'WOPYwmkOirtdN8oRdgtcS8oM', 'W7q6WPKPwJ/dP17cUSkdo8oOWP4', 'B8oaW7urxCoAhqme', 'stpcS8oMWPxdHXVdS8khWRLElCk7', 'W6KdqMvAiSosbCo6', 'WOnRWQVcNc/cG8kzW6JdKIDg', 'FSokvSomWO/dL217W5tdNG', 'xxzad8o0W7tdJSo6oa', 'W6acA3i+p8k4wHe', 'W40+pK/cP8k0W4uiWOFcLq', 'WO7dTqL2W57cLCkCjHyQCCoSW6xdTq', 'vmojWO4rzW', 'W4hdNmkrWRdcNNZcMa', 'bGBcJN3dHmk1cSoReSotgSk3', 'cWhcI2O', 'uubncMNcStldVmkXWO3dMW0CWQe', 'WRWdWRBcJ8kf', 'W4ZcU8o7FMenW6zbCCoVvxC', 'BmolW48rr8o7ecivtmkyuvaPW7m', 'WOSAWQ1nWPqt', 'WOPzWRVdRSk9ySoEFW', 'sHX0kw0f', 'uSo9WP5xWQLkW6BdJCoiamomoIb+WPq', 'ESovWPfIW5b4W6jAdG', 'v8ocWRqrFCoGed0WW7m4vSk3WOhcMG', 'W7FdGCkmWQu', 'W5q/W5iPWOO1EN4n', 'W54lWOqwtq', 'WRiYWQpcUmk4WQG', 'v8oKl3LjW4PuW40', 'W40fW7xcQJGN', 'WRhdTWrHW5C', 'WRTSWPhcTmoVWRegW6y', 'W7ZdKWldR8kV', 'W6iVW7eIWOGIEuCrbL0', 'jCoXlCoC', 'sNu7yCoPiG', 'WRDueuK', 'ca/cHMhdTSk1eCo8bCoshmkNqCkX', 'vGjbixqffrJcUw0', 'xIrteNm', 'mupdKmoeqq', 's8oyWP0esSoRfsqHW5mOtG', 'WR9se8k/l23cGJJdJImkW7PUW6ZdVbWs', 'WPvjWQhdS8kID8oMC3BdMW', 'nSoVg8o3W5S', 'lgC+WQKBsmoGigldK0Ss', 'dJ/cNKtdGW', 'CSofmSkvtCoSqK7dSa', 'WQO+WQxcN8k7', 'sCklkmoZWPRcSCkH', 'W5afW7pcGbK8', 'vgaGzSoujSopWQdcHCogWOqoW71v', 'W5OpW7hcPIu6W4ZcV8o8omocwSo+AW', 'tSo8WQ5lWQTf', 'wgb6d8oUW5xdG8oBkq', 'CmofWOLvW7n0W7bqdmklECoL', 'qWbQi3S', 'DJ1BWRFcRGNcHZO+', 'WRNdUmkAWQHG', 'W5ePW6GPWPauD18C', 'WO7dTqL2W57cHSksoHyIE8oUW6xdL8otgH8', 'W68pFh48l8kWqXxcUq', 'W47dRqSAovtdR8ojDq', 'WQxcTMxcTXPgW6mRWQSZ', 'F8ocn8kc', 'jCoXomohW4WmW5ybzKRcJa', 'WRKjWQTnWPyt', 'WPhdSWbWW6JcOSkwoa', 'hCkObCkIWPK', 'W44jW6RcLYGdW4/cTmos', 'W7VdOrxdRKCAWPqAWPOrrwxdHa', 'WROBCI5OWRhdJJHpqmkuW4nZFq', 'W78tEgCtfCkWyHhcQuFdGq', 'WRLgeSkKjgq', 'W7e1meJcVCksW4mjWO7cGSk+', 'p8o8jmobW4G', 'jCk4dwjs', 'imkClmkrWPZdQ3rNW6a', 'hKWgWQ/dO8kmiL7cQGNdI8oXtLK', 'WQqzDdjE', 'WOGVWRhcS8ky', 'imo6pCowW4eMW4mCzG', 'EMPOd8osW77dJCod', 'WOJdJavSWOdcUhS1WPddTSk7', 'D3uRqCoi', 'WPv3WRjvhqFcVG', 'eNpdRmk3W6m', 'oG3cGghdKCkKeCoIdmo7dW', 'W4G5WPJcLG', 'WOjVWQxcTdBcQ8kmW7xdGW', 'WQOFWRfLWOmcog3cMG', 'WRZdNmo0W7ldKW', 'vSobfCkFFq', 'w3vPbmoaW7ddJmoblCoBW41Ewq', 'imkClmkrWPZdQ3rNW6ddSSkEB8krpdK', 'D8omoSklzmoMuupdKqCcy8kh', 'WQ/cGSoOyG', 'W77cQN4PW5ufFCknW5ZcGmk9', 'lCkBdSkqWQtdOxXx', 'W6OUo0RcGG', 'W6aZWPS7vIhdO14', 'WQJcNSoayGmrWPvADa', 'W5GXWPKWBsxdQudcT8kfpq', 'W5qMWQzLeYtcGbu', 'CNvUW5zlW5u', 'dti5x8k2W7VdJSoEimoiW7W', 'DSoij8kKrmoMwK/dGb0JCmkppq', 'WR9pbmkUiudcNHJdGYK', 'WQTMvSk5hq', 'W5OpW7hcPIi+W5dcTmoqjmoItW', 'v0GFF8o/', 'thv1W5fjW4i/WR4TvCkD', 'fx0oWR0n', 'sbvHW7/cOCkpoeRcGb3dJW', 'WRjqWRFcKmoH', 'WRnjnSkKja', 'WRH2WPNcPq', 'WQ3cImo6yHKWWPH7zq', 'fKCGWONdVCkmof/cQGxdSCoKtfi', 'W78eCMu3', 'W7JdJSkmWR3cRMdcISkjEJS', 'tSo2WRXxWQ9hW6ddMW', 'WRfPWRZcVY7cNCkcW63dJI5r', 'W63cRw8pW44Y', 'WRbcb8k5gxFcKWNdPIynW7Tr', 'WRSFDsDpWRO', 'pmkgbCke', 'tSoWWQjqWQ8', 'WR1sfLr6eCoIjCoyrcXH', 'W4KZk2xcPSknW5WkWOZcGSkIqG', 'nxOfWQ7cOdhcRcmu', 'rvflig/cVW', 'jh13W7LxW5u8', 'W5pcG8kuWPWmwutdPCoYWO/cSmkFegu', 'zmodWPjKW7LjW69qdG', 'WRtcNCoOzGerWR9UBCkSDhZdUGm', 'aCkXgfjoW6XIW7ddJgpdSmou', 'A2zJbmo2W6pdJCodjmomW74', 'W7hcP2KLW5C', 'W4lcLSk4', 'z8opWPCAF8o3eWqSW5q/', 'w8kal8okWPRcUG', 'FxD3W5PXW5eYWRCT', 'WOxdNSowW6CbAv3dImo0WPG', 'ySobW6CKumo5gq', 'W4lcSSo3C1KIW6XfCCopywxcPSoy', 'Fmoyp8kt', 'W482WPZcHW', 'bveAWOldNq', 'WRJdGs1JWPNcR1SVWPNdOq', 'W5pdRWKnegxdOSodDq', 'WO9LWRPE', 'juaSWP/cLq', 'euRdNSozzG', 'W5pdOqan', 'W543lupcP8ku', 'W67cHmowW7pdLwZcU8k1', 'qhvuoLG', 'W7dcO2C', 'ngCeWPJcJJdcQtG2W4dcJdVcOG', 'WPrKw8kUfdBdKCoPkglcV8oMj8kQxf7dKuy/', 'D8kmi8onWO/cPmkRWQa1WOVdVG', 'kM4cWOhcKcBcQJ4FW63cJZZcQ8oi', 'WOddK8o0W7BdMa', 'WO/cGSoOyIuBWPzJ', 'W5OxjKFcGG', 'WOnRWRRcVWNcJmkcW7pdHWDcWRZcR8og', 'xMJdG1C', 'W5y/bmoKrLtcICoplMRcRCoPlW', 'WOLQWONcOCoYWRqz', 'W484WPxcHW'];
      }());
    }());
  }();

  a = function a() {
    return ac;
  };

  return a();
}

;
var version_ = 'jsjiami.com.v7';

cc._RF.pop();