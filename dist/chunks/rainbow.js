function xt(t) {
  const r = (t == null ? void 0 : t.xKey) || "name", n = (t == null ? void 0 : t.yKey) || "value", i = n instanceof Array ? n : [n];
  return {
    xKey: j(r),
    yKeys: W(i)
  };
}
function kt(t) {
  const r = (t == null ? void 0 : t.xKey) || "name", n = (t == null ? void 0 : t.yKey) || "value", i = n instanceof Array ? n : [n], a = t.xKeyLabelMap ? (e) => t.xKeyLabelMap[e] || e : (e) => e;
  return {
    xKey: j(r),
    xLabelAccessor: a,
    yKeys: W(i)
  };
}
function W(t) {
  return t.map(j);
}
function j(t) {
  if (t instanceof Function || typeof t == "function")
    return { accessor: t };
  if (t instanceof Object && t.accessor)
    return t;
  if (typeof t == "string") {
    const r = t, n = et(r) ? (i) => X(r, i) : (i) => i[r];
    return {
      ref: r,
      accessor: n
    };
  }
  throw console.error("Invalid attribute accessor", t), Error("Invalid Attribute Accessor  ");
}
function Nt(t) {
  const r = (t == null ? void 0 : t.xLabel) || (t == null ? void 0 : t.xKey) || "name", n = (t == null ? void 0 : t.yLabel) || (t == null ? void 0 : t.yKey) || "value", i = n instanceof Array || typeof n == "object" ? n : [n];
  return {
    xLabel: r,
    yLabels: i
  };
}
const Mt = (t, r, n) => t instanceof Array ? t[n] || r : t[r] || r;
function H(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
function S(t, ...r) {
  if (!r.length) return t;
  const n = r.shift();
  if (H(t) && H(n))
    for (const i in n)
      H(n[i]) ? (t[i] || Object.assign(t, { [i]: {} }), S(t[i], n[i])) : Object.assign(t, { [i]: n[i] });
  return S(t, ...r);
}
const X = (t, r) => {
  if (!(r === void 0 || r == null)) {
    var n = t.indexOf(".");
    if (n < 0)
      return r[t];
    var i = t.substring(0, n), a = t.substring(n + 1);
    return X(a, r[i]);
  }
}, et = (t) => t.indexOf(".") >= 1;
function q(t, r, n) {
  t.prototype = r.prototype = n, n.constructor = t;
}
function L(t, r) {
  var n = Object.create(t.prototype);
  for (var i in r) n[i] = r[i];
  return n;
}
function w() {
}
var b = 0.7, m = 1 / b, p = "\\s*([+-]?\\d+)\\s*", $ = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", st = /^#([0-9a-f]{3,8})$/, ot = new RegExp(`^rgb\\(${p},${p},${p}\\)$`), lt = new RegExp(`^rgb\\(${c},${c},${c}\\)$`), ut = new RegExp(`^rgba\\(${p},${p},${p},${$}\\)$`), ht = new RegExp(`^rgba\\(${c},${c},${c},${$}\\)$`), ct = new RegExp(`^hsl\\(${$},${c},${c}\\)$`), gt = new RegExp(`^hsla\\(${$},${c},${c},${$}\\)$`), z = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
q(w, O, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: C,
  // Deprecated! Use color.formatHex.
  formatHex: C,
  formatHex8: ft,
  formatHsl: yt,
  formatRgb: F,
  toString: F
});
function C() {
  return this.rgb().formatHex();
}
function ft() {
  return this.rgb().formatHex8();
}
function yt() {
  return Z(this).formatHsl();
}
function F() {
  return this.rgb().formatRgb();
}
function O(t) {
  var r, n;
  return t = (t + "").trim().toLowerCase(), (r = st.exec(t)) ? (n = r[1].length, r = parseInt(r[1], 16), n === 6 ? B(r) : n === 3 ? new s(r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, (r & 15) << 4 | r & 15, 1) : n === 8 ? k(r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, (r & 255) / 255) : n === 4 ? k(r >> 12 & 15 | r >> 8 & 240, r >> 8 & 15 | r >> 4 & 240, r >> 4 & 15 | r & 240, ((r & 15) << 4 | r & 15) / 255) : null) : (r = ot.exec(t)) ? new s(r[1], r[2], r[3], 1) : (r = lt.exec(t)) ? new s(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, 1) : (r = ut.exec(t)) ? k(r[1], r[2], r[3], r[4]) : (r = ht.exec(t)) ? k(r[1] * 255 / 100, r[2] * 255 / 100, r[3] * 255 / 100, r[4]) : (r = ct.exec(t)) ? J(r[1], r[2] / 100, r[3] / 100, 1) : (r = gt.exec(t)) ? J(r[1], r[2] / 100, r[3] / 100, r[4]) : z.hasOwnProperty(t) ? B(z[t]) : t === "transparent" ? new s(NaN, NaN, NaN, 0) : null;
}
function B(t) {
  return new s(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function k(t, r, n, i) {
  return i <= 0 && (t = r = n = NaN), new s(t, r, n, i);
}
function Y(t) {
  return t instanceof w || (t = O(t)), t ? (t = t.rgb(), new s(t.r, t.g, t.b, t.opacity)) : new s();
}
function dt(t, r, n, i) {
  return arguments.length === 1 ? Y(t) : new s(t, r, n, i ?? 1);
}
function s(t, r, n, i) {
  this.r = +t, this.g = +r, this.b = +n, this.opacity = +i;
}
q(s, dt, L(w, {
  brighter(t) {
    return t = t == null ? m : Math.pow(m, t), new s(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? b : Math.pow(b, t), new s(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new s(y(this.r), y(this.g), y(this.b), A(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: D,
  // Deprecated! Use color.formatHex.
  formatHex: D,
  formatHex8: bt,
  formatRgb: G,
  toString: G
}));
function D() {
  return `#${f(this.r)}${f(this.g)}${f(this.b)}`;
}
function bt() {
  return `#${f(this.r)}${f(this.g)}${f(this.b)}${f((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function G() {
  const t = A(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${y(this.r)}, ${y(this.g)}, ${y(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function A(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function y(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function f(t) {
  return t = y(t), (t < 16 ? "0" : "") + t.toString(16);
}
function J(t, r, n, i) {
  return i <= 0 ? t = r = n = NaN : n <= 0 || n >= 1 ? t = r = NaN : r <= 0 && (t = NaN), new u(t, r, n, i);
}
function Z(t) {
  if (t instanceof u) return new u(t.h, t.s, t.l, t.opacity);
  if (t instanceof w || (t = O(t)), !t) return new u();
  if (t instanceof u) return t;
  t = t.rgb();
  var r = t.r / 255, n = t.g / 255, i = t.b / 255, a = Math.min(r, n, i), e = Math.max(r, n, i), o = NaN, l = e - a, h = (e + a) / 2;
  return l ? (r === e ? o = (n - i) / l + (n < i) * 6 : n === e ? o = (i - r) / l + 2 : o = (r - n) / l + 4, l /= h < 0.5 ? e + a : 2 - e - a, o *= 60) : l = h > 0 && h < 1 ? 0 : o, new u(o, l, h, t.opacity);
}
function pt(t, r, n, i) {
  return arguments.length === 1 ? Z(t) : new u(t, r, n, i ?? 1);
}
function u(t, r, n, i) {
  this.h = +t, this.s = +r, this.l = +n, this.opacity = +i;
}
q(u, pt, L(w, {
  brighter(t) {
    return t = t == null ? m : Math.pow(m, t), new u(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? b : Math.pow(b, t), new u(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, r = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * r, a = 2 * n - i;
    return new s(
      R(t >= 240 ? t - 240 : t + 120, a, i),
      R(t, a, i),
      R(t < 120 ? t + 240 : t - 120, a, i),
      this.opacity
    );
  },
  clamp() {
    return new u(Q(this.h), N(this.s), N(this.l), A(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = A(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Q(this.h)}, ${N(this.s) * 100}%, ${N(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Q(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function N(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function R(t, r, n) {
  return (t < 60 ? r + (n - r) * t / 60 : t < 180 ? n : t < 240 ? r + (n - r) * (240 - t) / 60 : r) * 255;
}
const mt = Math.PI / 180, wt = 180 / Math.PI;
var _ = -0.14861, I = 1.78277, P = -0.29227, E = -0.90649, v = 1.97294, T = v * E, U = v * I, V = I * P - E * _;
function $t(t) {
  if (t instanceof d) return new d(t.h, t.s, t.l, t.opacity);
  t instanceof s || (t = Y(t));
  var r = t.r / 255, n = t.g / 255, i = t.b / 255, a = (V * i + T * r - U * n) / (V + T - U), e = i - a, o = (v * (n - a) - P * e) / E, l = Math.sqrt(o * o + e * e) / (v * a * (1 - a)), h = l ? Math.atan2(o, e) * wt - 120 : NaN;
  return new d(h < 0 ? h + 360 : h, l, a, t.opacity);
}
function g(t, r, n, i) {
  return arguments.length === 1 ? $t(t) : new d(t, r, n, i ?? 1);
}
function d(t, r, n, i) {
  this.h = +t, this.s = +r, this.l = +n, this.opacity = +i;
}
q(d, g, L(w, {
  brighter(t) {
    return t = t == null ? m : Math.pow(m, t), new d(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? b : Math.pow(b, t), new d(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = isNaN(this.h) ? 0 : (this.h + 120) * mt, r = +this.l, n = isNaN(this.s) ? 0 : this.s * r * (1 - r), i = Math.cos(t), a = Math.sin(t);
    return new s(
      255 * (r + n * (_ * i + I * a)),
      255 * (r + n * (P * i + E * a)),
      255 * (r + n * (v * i)),
      this.opacity
    );
  }
}));
const tt = (t) => () => t;
function rt(t, r) {
  return function(n) {
    return t + n * r;
  };
}
function vt(t, r) {
  var n = r - t;
  return n ? rt(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : tt(isNaN(t) ? r : t);
}
function K(t, r) {
  var n = r - t;
  return n ? rt(t, n) : tt(isNaN(t) ? r : t);
}
function nt(t) {
  return function r(n) {
    n = +n;
    function i(a, e) {
      var o = t((a = g(a)).h, (e = g(e)).h), l = K(a.s, e.s), h = K(a.l, e.l), at = K(a.opacity, e.opacity);
      return function(x) {
        return a.h = o(x), a.s = l(x), a.l = h(Math.pow(x, n)), a.opacity = at(x), a + "";
      };
    }
    return i.gamma = r, i;
  }(1);
}
nt(vt);
var it = nt(K);
it(g(-100, 0.75, 0.35), g(80, 1.5, 0.8));
it(g(260, 0.75, 0.35), g(80, 1.5, 0.8));
var M = g();
function Kt(t) {
  (t < 0 || t > 1) && (t -= Math.floor(t));
  var r = Math.abs(t - 0.5);
  return M.h = 360 * t - 100, M.s = 1.5 - 1.5 * r, M.l = 0.8 - 0.9 * r, M + "";
}
export {
  Nt as A,
  j as a,
  Kt as b,
  Mt as g,
  xt as l,
  S as s,
  kt as x
};
