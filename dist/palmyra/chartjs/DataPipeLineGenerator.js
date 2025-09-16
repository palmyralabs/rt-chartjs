import { b as L, l as E, x as V, y as S, g as R } from "../../chunks/rainbow.js";
const x = (a) => {
  const r = L(a), o = r.xKey, t = r.yKeys, e = r.xLabelAccessor, { yLabels: s } = E(a);
  return (c) => {
    var l = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (c == null)
      return l;
    var u = {};
    return t.map((n, y) => {
      const p = n.ref, d = V(s, p, y);
      var b = { key: p, label: d, data: [] };
      u[y] = b, l.datasets[y] = b;
    }), c.map((n, y) => {
      var p = o.accessor(n);
      const d = e(p);
      l.labels.push(d), l.keys.push(p), t.map((b, h) => {
        var O = u[h];
        O.data[y] = b.accessor(n);
      });
    }), l;
  };
}, $ = (a) => {
  const { xKey: r, xLabelAccessor: o } = L(a), { xLabel: t, yLabels: e } = E(a);
  return (s) => {
    var c = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (s == null)
      return c;
    const l = e[0] || "value";
    var u = { key: r.ref || t || "name", label: l, data: [] };
    c.datasets[0] = u;
    for (var n in s) {
      c.keys.push(n);
      const y = o(n);
      c.labels.push(y), u.data.push(s[n]);
    }
    return c;
  };
}, m = (a) => (r) => r, g = (a) => {
  const { xKey: r, yKeys: o, xLabelAccessor: t } = L(a), { yLabels: e } = E(a);
  return (s) => {
    var c = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (s == null)
      return c;
    o.map((p, d) => {
      const b = p.ref, h = V(e, b, d);
      var O = { key: b, label: h, data: [] };
      c.datasets[d] = O;
    });
    const l = a.xKey ? (p, d) => r.accessor(p) : (p, d) => d;
    for (var u in s) {
      var n = s[u], y = l(n, u);
      const p = t(y);
      c.labels.push(p), c.keys.push(y), o.map((d, b) => {
        c.datasets[b].data.push(d.accessor(n));
      });
    }
    return c;
  };
}, C = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
}, J = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
};
function M(a) {
  const r = a?.xLabel || "name", o = a?.xKey || "x", t = a?.yKey || "y", e = a?.group;
  return {
    x: S(o),
    y: S(t),
    group: S(e),
    label: r
  };
}
function G(a, r, o) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, a[r] = t, t);
}
const Q = (a) => {
  const { x: r, y: o, group: t, label: e } = M(a);
  return (s) => {
    var c = {
      datasets: []
    };
    if (s == null)
      return c;
    var l = {};
    const u = t ? (n) => t.accessor(n) : () => e;
    return s.map((n, y) => {
      const p = u(n);
      var d = G(l, p);
      d.data.push({
        x: r.accessor(n),
        y: o.accessor(n)
      });
    }), Object.values(l).map((n) => {
      c.datasets.push(n);
    }), c;
  };
}, U = (a) => {
  const { x: r, y: o, group: t, label: e } = M(a);
  return (s) => {
    var c = {
      datasets: []
    };
    if (s == null)
      return c;
    var l = {};
    const u = t ? (n) => t.accessor(n) : () => e;
    return Object.values(s).map((n, y) => {
      const p = u(n);
      var d = G(l, p);
      d.data.push({
        x: r.accessor(n),
        y: o.accessor(n)
      });
    }), Object.values(l).map((n) => {
      c.datasets.push(n);
    }), c;
  };
}, P = {
  Array: Q,
  Object: U,
  noop: m
};
function W(a) {
  const r = a?.xLabel || "name", o = a?.xKey || "x", t = a?.yKey || "y";
  return t instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: o,
    y: t,
    label: r
  };
}
const X = (a) => {
  const { x: r, y: o, label: t } = W(a);
  return (e) => {
    var s = {
      datasets: []
    };
    if (e == null)
      return s;
    var c = {};
    const l = a.metadata, u = l ? (n, y) => {
      l.map((p) => {
        n[p] = y[p];
      });
    } : (n, y) => {
    };
    return e.map((n, y) => {
      var p = Z(c, n[t]);
      const d = {
        x: n[r],
        y: n[o]
      };
      u(d, n), p.data.push(d);
    }), Object.values(c).map((n) => {
      s.datasets.push(n);
    }), s;
  };
}, Y = {
  Array: X,
  noop: m
};
function Z(a, r, o) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, a[r] = t, t);
}
function _(a) {
  const r = a?.xLabel || "name", o = a?.xKey || "x", t = a?.yKey || "y";
  return t instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: o,
    y: t,
    label: r
  };
}
const aa = (a) => {
  const { x: r, y: o } = _(a);
  return (t) => {
    var e = {
      datasets: []
    }, s = {};
    const c = S(a.group), l = a.metadata, u = l ? (n, y) => {
      l.map((p) => {
        n[p] = y[p];
      });
    } : (n, y) => {
    };
    return t.map((n, y) => {
      const p = c.accessor(n);
      var d = ta(s, p);
      const b = {
        x: n[r],
        y: n[o]
      };
      u(b, n), d.data.push(b);
    }), Object.values(s).map((n) => {
      e.datasets.push(n);
    }), e;
  };
}, ra = {
  Array: aa,
  noop: m
};
function ta(a, r, o) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, a[r] = t, t);
}
function na(a, r, o) {
  var { colorStart: t, colorEnd: e, useEndAsStart: s } = o;
  return s ? e - a * r : t + a * r;
}
function j(a, r) {
  return Math.random() * (r - a) + a;
}
function ea(a) {
  var r = j(0, 0.9), o = j(r, 1), t = {
    colorStart: r,
    colorEnd: o,
    useEndAsStart: !1
  }, e = R, { colorStart: s, colorEnd: c } = t, l = c - s, u = l / a, n, y, p = [];
  for (n = 0; n < a; n++)
    y = na(n, u, t), p.push(e(y));
  return p;
}
function oa(a, r, o) {
  var t = Math.round(j(2, 10)), e = ea(t);
  o.backgroundColor = e[0], o.borderColor = e[t - 1];
}
function T(a, r, o) {
  var t = a[r];
  return t || (t = {
    key: r,
    label: r,
    data: []
  }, oa(o, r, t), a[r] = t, t);
}
function q(a) {
  const r = a?.xLabel || "name", o = a?.xKey || "x", t = a?.yKey || "y", e = a?.rKey || "r";
  return t instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + a.yKey), {
    x: o,
    y: t,
    r: e,
    label: r
  };
}
const sa = (a) => {
  const { x: r, y: o, r: t, label: e } = q(a);
  return (s) => {
    var c = {
      labels: [],
      datasets: []
    };
    if (s == null)
      return c;
    var l = {};
    return s.map((u, n) => {
      var y = T(l, u[e], a);
      y.data.push({
        x: u[r],
        y: u[o],
        r: u[t]
      });
    }), Object.values(l).map((u) => {
      c.datasets.push(u);
    }), c;
  };
}, ca = (a) => {
  const { x: r, y: o, r: t } = q(a);
  return (e) => {
    var s = {
      labels: [],
      datasets: []
    }, c = {};
    for (var l in e) {
      var u = T(c, l, a), n = e[l];
      u.data.push({
        x: n[r],
        y: n[o],
        r: n[t]
      });
    }
    return Object.values(c).map((y) => {
      s.datasets.push(y);
    }), s;
  };
}, la = {
  Array: sa,
  Object: ca,
  noop: m
}, ua = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
}, ya = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
}, pa = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
}, da = {
  Array: x,
  Object: g,
  KeyValue: $,
  noop: m
}, ba = {
  Line: C,
  MultiLine: C,
  AreaChart: C,
  Bar: J,
  StackedBar: P,
  GroupedBar: P,
  Scatter: Y,
  GroupedScatter: ra,
  Bubble: la,
  Radar: ua,
  PolarArea: ya,
  Pie: pa,
  Doughnut: da
};
function ia(a, r, o) {
  var t = o || "Array", e = ba[a]?.[t];
  return e ? e(r) : (console.info("Data Converter not found " + a + ":" + t), m);
}
function w(a, r, o) {
  var { colorStart: t, colorEnd: e, useEndAsStart: s } = o;
  return s ? e - a * r : t + a * r;
}
function k(a, r) {
  return Math.random() * (r - a) + a;
}
function A(a) {
  var r = k(0, 0.9), o = k(r, 1), t = {
    colorStart: r,
    colorEnd: o,
    useEndAsStart: !1
  }, e = R, { colorStart: s, colorEnd: c } = t, l = c - s, u = l / a, n, y, p = [];
  for (n = 0; n < a; n++)
    y = w(n, u, t), p.push(e(y));
  return p;
}
function z() {
  var a = k(0, 0.9), r = k(a, 1), o = {
    colorStart: a,
    colorEnd: r,
    useEndAsStart: !1
  }, t = R, { colorStart: e, colorEnd: s } = o, c = s - e, l = c / 1, u;
  return u = w(0, l, o), t(u);
}
const v = (a) => (r, o) => (r == null || r == null || r.datasets?.map((t) => {
  t.backgroundColor = A(1), t.borderColor = A(1);
}), r), f = () => (a) => a, ma = (a, r) => {
  a.backgroundColor = r?.backgroundColor || A(1)[0], a.borderColor = r?.borderColor || A(1)[0];
};
function F(a) {
  const r = {}, o = [];
  return a.map((t) => {
    Object.keys(t).map((e) => {
      r[e] || (o.push(e), r[e] = !0);
    });
  }), o;
}
function H(a) {
  const r = {}, o = [];
  return Object.values(a).map((t) => {
    Object.keys(t).map((e) => {
      r[e] || (o.push(e), r[e] = !0);
    });
  }), o;
}
function I(a, r, o) {
  if (a instanceof Array) {
    const t = r % a.length;
    return a[t];
  } else
    return a[o];
}
const i = (a, r) => {
  function o(s, c, l) {
    const u = l.length, n = F(l);
    n.map((y) => {
      s[y] = [];
    }), s.data && s.data.map((y, p) => {
      const d = p % u, b = l[d];
      n.map((h) => {
        s[h].push(b?.[h]);
      });
    });
  }
  function t(s, c, l) {
    const u = H(l);
    u.map((n) => {
      s[n] = [];
    }), s.data && s.data.map((n, y) => {
      const p = c.labels[y], d = l[p];
      u.map((b) => {
        d?.[b] != null ? s[b][y] = d?.[b] : b.includes("Color") && (s[b][y] = z());
      });
    });
  }
  function e(s, c) {
    Object.keys(c).map((l) => {
      s[l] = c[l];
    });
  }
  return (s, c) => {
    if (a == null || s == null || s == null)
      return s;
    if (s)
      return s.datasets && s.datasets.map((l, u) => {
        const n = I(a, u, s.labels?.[u]), y = n.style;
        y instanceof Array ? o(l, s, y) : t(l, s, y), n.props && e(l, n.props);
      }), s;
  };
}, N = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, fa = (a) => (r, o) => (r == null || r == null || r.datasets?.map((t) => {
  t.backgroundColor = A(r.labels.length), t.borderColor = A(r.labels.length);
}), r), va = {
  Array: i,
  Named: i,
  Random: fa,
  Noop: f
}, B = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, ha = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, Aa = (a, r) => {
  function o(e, s, c) {
    const l = c.length, u = F(c);
    u.map((n) => {
      e[n] = [];
    }), e.data && e.data.map((n, y) => {
      const p = y % l, d = c[p];
      u.map((b) => {
        e[b].push(d?.[b]);
      });
    });
  }
  function t(e, s, c) {
    const l = H(c);
    l.map((u) => {
      e[u] = [];
    }), e.data && e.data.map((u, n) => {
      const y = s.labels[n], p = c[y];
      l.map((d) => {
        p?.[d] != null ? e[d][n] = p?.[d] : d.includes("Color") && (e[d][n] = z());
      });
    });
  }
  return (e, s) => {
    if (a == null || e == null || e == null)
      return e;
    if (e)
      return e.datasets && e.datasets.map((c, l) => {
        const u = I(a, l, e.labels?.[l]).style;
        u instanceof Array ? o(c, e, u) : t(c, e, u);
      }), e;
  };
}, xa = (a, r) => (o, t) => (o == null || o == null || o.datasets.map((e, s) => {
  const c = a[e.key] || a[s];
  ma(e, c);
}), o), $a = {
  Array: Aa,
  Named: xa,
  Random: v,
  Noop: f
}, ga = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, Ka = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, Sa = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
}, D = {
  Array: i,
  Named: i,
  Random: v,
  Noop: f
};
var ka = {
  Line: N,
  MultiLine: N,
  AreaChart: N,
  Bar: va,
  StackedBar: B,
  Scatter: ha,
  GroupedScatter: $a,
  Bubble: ga,
  Radar: Ka,
  PolarArea: Sa,
  Pie: D,
  Doughnut: D,
  GroupedBar: B
};
const Oa = (a) => {
  if (!a)
    return "Random";
  if (a instanceof Array) {
    if (a.length > 0)
      return "Array";
  } else if (Object.keys(a).length > 0)
    return "Named";
  return "Noop";
}, Ca = (a, r, o) => {
  const t = Oa(r);
  var e = ka[a]?.[t] || f;
  return e(r, o);
}, K = (a) => a;
function Na(a) {
  const r = a.accessorOptions || {};
  return Ca(a.type, a.styleOptions, r);
}
function ja(a) {
  const r = a.accessorOptions || {};
  return ia(a.type, r, r.sourceType);
}
const Ea = (a) => {
  const r = a.dataPipeLine || {}, o = r.preProcess || K, t = r.postProcess || K, e = r.applyStyle || Na(a) || K, s = r.convertData || ja(a) || K;
  return (c) => {
    const l = o(c), u = s(l), n = e(u);
    return t(n);
  };
};
export {
  Ea as generateDataPipeLine
};
