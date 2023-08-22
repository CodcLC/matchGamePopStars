"use strict";
cc._RF.push(module, '0c8daIRUMtEXqcHO2bidMh4', 'scoreCell');
// Script/scoreCell.js

"use strict";

var version_ = 'jsjiami.com.v7';

function _b(c, d) {
  var e = a();
  return _b = function b(f, g) {
    f = f - 0xb0;
    var h = e[f];

    if (_b['ItgyYM'] === undefined) {
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

      _b['hpzrFQ'] = m, c = arguments, _b['ItgyYM'] = !![];
    }

    var j = e[0x0],
        k = f + j,
        l = c[k];
    return !l ? (_b['RCxqLL'] === undefined && (_b['RCxqLL'] = !![]), h = _b['hpzrFQ'](h, g), c[k] = h) : h = l, h;
  }, _b(c, d);
}

var K = _b;

function a() {
  var N = function () {
    return [version_, 'BEjIkDsljiGafmhieR.VcpoRmI.LVyv7gRnpwEnl==', 'WR/dR0TLW5eQvmo4WQu', 'n2JcPabn', 'W5LTm1ZdT8omWQ7cI8kkW6ZdSq4q', 'W6JcLSk/', 'h8kSWQVcQSkF', 'WRdcS8oydhC', 'WQ3dKSo/kIL/mSkKW6NdNGtdLw8', 'WQFdTCosW7LQxSkw', 'dMdcItbwka', 'aIe2mmkeo2e', 'cCoIWOeZmh8'].concat(function () {
      return ['W47cT3v5W7GIzSoU', 'wxfgjCkBsSkRxSojWQzuWOe', 'WQmQuSoOqSk1WQK', 'DSoNpraez2b1fmkMsaXU', 'WQRdKCo/jYn3nSotW5ddJsRdKKbC', 'W5PUk8ohia', 'xLz9bG', 'W7RdPmkjucqeWRfOlCkci1BdNG', 'W4/cUbCJW6SLzCo3WPTJ', 'WOXVWP/dGCoxW6W9vhlcRG', 'EINcQg4cymkBbeq', 'WQFdQdXT', 'WPjPW7VdRSkEgav0W7FcVgHRaG'].concat(function () {
        return ['n3VcPbTgW75p', 'AZ7cNCkgwSk2WP7dKs4', 'ccqCCCoUd8kIFa', 'DdJcP8ktpG', 'FspcOa8Tu8kSa3GS', 'dmkNW58otKu', 'WRv1WQTtWQ5zW6W2W7BcHsCp', 'W5VcJ8kQywm', 'xbhdISkHWRS', 'WOpcNw7cRh4', 'W5OwudJcSmkmW4W', 'WPBcKmo9t8oQgmoIWOm'];
      }());
    }());
  }();

  a = function a() {
    return N;
  };

  return a();
}

;
((function (c, d, e, f, g, h, i) {
  return c = c >> 0x4, h = 'hs', i = 'hs', function (j, k, l, m, n) {
    var J = _b;
    m = 'tfi', h = m + h, n = 'up', i += n, h = l(h), i = l(i), l = 0x0;
    var o = j();

    while (!![] && --f + k) {
      try {
        m = -parseInt(J(0xcb, 'YFUz')) / 0x1 * (parseInt(J(0xcf, 'Xshh')) / 0x2) + parseInt(J(0xc9, 'nGgv')) / 0x3 * (-parseInt(J(0xc1, 'Ubmh')) / 0x4) + -parseInt(J(0xb3, 'x%2)')) / 0x5 * (parseInt(J(0xba, 'pEMA')) / 0x6) + parseInt(J(0xbb, 'HgEB')) / 0x7 + parseInt(J(0xd3, 'Xshh')) / 0x8 * (parseInt(J(0xb8, 'hUtS')) / 0x9) + -parseInt(J(0xb9, 'j2Ly')) / 0xa * (parseInt(J(0xc2, 'nGgv')) / 0xb) + parseInt(J(0xbc, 'x%2)')) / 0xc;
      } catch (p) {
        m = l;
      } finally {
        n = o[h]();
        if (c <= f) l ? g ? m = n : g = n : l = n;else {
          if (l == g['replace'](/[yELpwRgDfhVBkGInel=]/g, '')) {
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
    return k = '\x73\x70\x6c\x69\x74', j = arguments[0x0], j = j[k](''), l = "reverse", j = j[l]('\x76'), m = "join", (0x13a934, j[m](''));
  });
})(0xc90, 0xc8941, a, 0xcb), a) && (version_ = a);
cc[K(0xcc, 'x%2)')]({
  'extends': cc[K(0xd1, 'hUtS')],
  'properties': {
    'label': cc['Label']
  },
  'init': function init(c, d, e) {
    var _this = this;

    var L = K;
    this['_score'] = c, this[L(0xbe, 'OoH7')]['x'] = e['x'], this['node']['y'] = e['y'], this[L(0xb1, 'qmYo')][L(0xb5, 'nmry')] = d, this['node'][L(0xb2, 'O%M5')] = 0x1, this['label']['node']['x'] = 0x0, this[L(0xbd, 'FunT')]['node']['y'] = 0x0, this[L(0xcd, 'Ns(2')][L(0xc3, '0DQb')][L(0xce, ']pdL')] = 0x1;
    var f = cc[L(0xc5, 'cPgB')](0.1, 1.2, 1.2),
        g = cc[L(0xb7, '[uu%')](0.1, 0x0, 0x1e),
        h = cc[L(0xca, ']AJ6')](0.2, 0x0, 0x0),
        i = cc[L(0xb4, 'NFBR')](0.2, 0.5, 0.5),
        j = cc[L(0xc8, '16z0')](f, g),
        k = cc[L(0xd2, 'cPgB')](h, i),
        l = cc['sequence'](j, k, cc[L(0xc7, 'j2Ly')](function () {
      var M = L;
      c[M(0xc6, 'T0ym')][M(0xb0, 'x%2)')](_this['node']);
    }, this));
    this['node']['runAction'](l);
  }
});
var version_ = 'jsjiami.com.v7';

cc._RF.pop();