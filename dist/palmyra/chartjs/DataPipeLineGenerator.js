import { x as N, A as E, g as M, a as k, b as R } from "../../chunks/rainbow.js";
const A = (a) => {
  const t = N(a), s = t.xKey, n = t.yKeys, e = t.xLabelAccessor, { yLabels: o } = E(a);
  return (l) => {
    var u = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (l == null)
      return u;
    var c = {};
    return n.map((r, p) => {
      const d = r.ref, y = M(o, d, p);
      var i = { key: d, label: y, data: [] };
      c[p] = i, u.datasets[p] = i;
    }), l.map((r, p) => {
      var d = s.accessor(r);
      const y = e(d);
      u.labels.push(y), u.keys.push(d), n.map((i, h) => {
        var O = c[h];
        O.data[p] = i.accessor(r);
      });
    }), u;
  };
}, $ = (a) => {
  const { xKey: t, xLabelAccessor: s } = N(a), { xLabel: n, yLabels: e } = E(a);
  return (o) => {
    var l = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (o == null)
      return l;
    const u = e[0] || "value";
    var c = { key: t.ref || n || "name", label: u, data: [] };
    l.datasets[0] = c;
    for (var r in o) {
      l.keys.push(r);
      const p = s(r);
      l.labels.push(p), c.data.push(o[r]);
    }
    return l;
  };
}, b = (a) => (t) => t, g = (a) => {
  const { xKey: t, yKeys: s, xLabelAccessor: n } = N(a), { yLabels: e } = E(a);
  return (o) => {
    var l = {
      labels: [],
      keys: [],
      datasets: []
    };
    if (o == null)
      return l;
    s.map((d, y) => {
      const i = d.ref, h = M(e, i, y);
      var O = { key: i, label: h, data: [] };
      l.datasets[y] = O;
    });
    const u = a.xKey ? (d, y) => t.accessor(d) : (d, y) => y;
    for (var c in o) {
      var r = o[c], p = u(r, c);
      const d = n(p);
      l.labels.push(d), l.keys.push(p), s.map((y, i) => {
        l.datasets[i].data.push(y.accessor(r));
      });
    }
    return l;
  };
}, C = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
}, J = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
};
function V(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", s = (a == null ? void 0 : a.xKey) || "x", n = (a == null ? void 0 : a.yKey) || "y", e = a == null ? void 0 : a.group;
  return {
    x: k(s),
    y: k(n),
    group: k(e),
    label: t
  };
}
function G(a, t, s) {
  var n = a[t];
  return n || (n = {
    key: t,
    label: t,
    data: []
  }, a[t] = n, n);
}
const Q = (a) => {
  const { x: t, y: s, group: n, label: e } = V(a);
  return (o) => {
    var l = {
      datasets: []
    };
    if (o == null)
      return l;
    var u = {};
    const c = n ? (r) => n.accessor(r) : () => e;
    return o.map((r, p) => {
      const d = c(r);
      var y = G(u, d);
      y.data.push({
        x: t.accessor(r),
        y: s.accessor(r)
      });
    }), Object.values(u).map((r) => {
      l.datasets.push(r);
    }), l;
  };
}, U = (a) => {
  const { x: t, y: s, group: n, label: e } = V(a);
  return (o) => {
    var l = {
      datasets: []
    };
    if (o == null)
      return l;
    var u = {};
    const c = n ? (r) => n.accessor(r) : () => e;
    return Object.values(o).map((r, p) => {
      const d = c(r);
      var y = G(u, d);
      y.data.push({
        x: t.accessor(r),
        y: s.accessor(r)
      });
    }), Object.values(u).map((r) => {
      l.datasets.push(r);
    }), l;
  };
}, B = {
  Array: Q,
  Object: U,
  noop: b
};
function W(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", s = (a == null ? void 0 : a.xKey) || "x", n = (a == null ? void 0 : a.yKey) || "y";
  return n instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: s,
    y: n,
    label: t
  };
}
const X = (a) => {
  const { x: t, y: s, label: n } = W(a);
  return (e) => {
    var o = {
      datasets: []
    };
    if (e == null)
      return o;
    var l = {};
    const u = a.metadata, c = u ? (r, p) => {
      u.map((d) => {
        r[d] = p[d];
      });
    } : (r, p) => {
    };
    return e.map((r, p) => {
      var d = Z(l, r[n]);
      const y = {
        x: r[t],
        y: r[s]
      };
      c(y, r), d.data.push(y);
    }), Object.values(l).map((r) => {
      o.datasets.push(r);
    }), o;
  };
}, Y = {
  Array: X,
  noop: b
};
function Z(a, t, s) {
  var n = a[t];
  return n || (n = {
    key: t,
    label: t,
    data: []
  }, a[t] = n, n);
}
function _(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", s = (a == null ? void 0 : a.xKey) || "x", n = (a == null ? void 0 : a.yKey) || "y";
  return n instanceof Array && console.error("ScatterChart: yKey should be string only, not an array " + a.yKey), {
    x: s,
    y: n,
    label: t
  };
}
const aa = (a) => {
  const { x: t, y: s } = _(a);
  return (n) => {
    var e = {
      datasets: []
    }, o = {};
    const l = k(a.group), u = a.metadata, c = u ? (r, p) => {
      u.map((d) => {
        r[d] = p[d];
      });
    } : (r, p) => {
    };
    return n.map((r, p) => {
      const d = l.accessor(r);
      var y = na(o, d);
      const i = {
        x: r[t],
        y: r[s]
      };
      c(i, r), y.data.push(i);
    }), Object.values(o).map((r) => {
      e.datasets.push(r);
    }), e;
  };
}, ta = {
  Array: aa,
  noop: b
};
function na(a, t, s) {
  var n = a[t];
  return n || (n = {
    key: t,
    label: t,
    data: []
  }, a[t] = n, n);
}
function ea(a, t, s) {
  var { colorStart: n, colorEnd: e, useEndAsStart: o } = s;
  return o ? e - a * t : n + a * t;
}
function L(a, t) {
  return Math.random() * (t - a) + a;
}
function ra(a) {
  var t = L(0, 0.9), s = L(t, 1), n = {
    colorStart: t,
    colorEnd: s,
    useEndAsStart: !1
  }, e = R, { colorStart: o, colorEnd: l } = n, u = l - o, c = u / a, r, p, d = [];
  for (r = 0; r < a; r++)
    p = ea(r, c, n), d.push(e(p));
  return d;
}
function oa(a, t, s) {
  var n = Math.round(L(2, 10)), e = ra(n);
  s.backgroundColor = e[0], s.borderColor = e[n - 1];
}
function T(a, t, s) {
  var n = a[t];
  return n || (n = {
    key: t,
    label: t,
    data: []
  }, oa(s, t, n), a[t] = n, n);
}
function q(a) {
  const t = (a == null ? void 0 : a.xLabel) || "name", s = (a == null ? void 0 : a.xKey) || "x", n = (a == null ? void 0 : a.yKey) || "y", e = (a == null ? void 0 : a.rKey) || "r";
  return n instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + a.yKey), {
    x: s,
    y: n,
    r: e,
    label: t
  };
}
const sa = (a) => {
  const { x: t, y: s, r: n, label: e } = q(a);
  return (o) => {
    var l = {
      labels: [],
      datasets: []
    };
    if (o == null)
      return l;
    var u = {};
    return o.map((c, r) => {
      var p = T(u, c[e], a);
      p.data.push({
        x: c[t],
        y: c[s],
        r: c[n]
      });
    }), Object.values(u).map((c) => {
      l.datasets.push(c);
    }), l;
  };
}, la = (a) => {
  const { x: t, y: s, r: n } = q(a);
  return (e) => {
    var o = {
      labels: [],
      datasets: []
    }, l = {};
    for (var u in e) {
      var c = T(l, u, a), r = e[u];
      c.data.push({
        x: r[t],
        y: r[s],
        r: r[n]
      });
    }
    return Object.values(l).map((p) => {
      o.datasets.push(p);
    }), o;
  };
}, ua = {
  Array: sa,
  Object: la,
  noop: b
}, ca = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
}, da = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
}, pa = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
}, ya = {
  Array: A,
  Object: g,
  KeyValue: $,
  noop: b
}, ia = {
  Line: C,
  MultiLine: C,
  AreaChart: C,
  Bar: J,
  StackedBar: B,
  GroupedBar: B,
  Scatter: Y,
  GroupedScatter: ta,
  Bubble: ua,
  Radar: ca,
  PolarArea: da,
  Pie: pa,
  Doughnut: ya
};
function va(a, t, s) {
  var n, e = s || "Array", o = (n = ia[a]) == null ? void 0 : n[e];
  return o ? o(t) : (console.info("Data Converter not found " + a + ":" + e), b);
}
function w(a, t, s) {
  var { colorStart: n, colorEnd: e, useEndAsStart: o } = s;
  return o ? e - a * t : n + a * t;
}
function S(a, t) {
  return Math.random() * (t - a) + a;
}
function x(a) {
  var t = S(0, 0.9), s = S(t, 1), n = {
    colorStart: t,
    colorEnd: s,
    useEndAsStart: !1
  }, e = R, { colorStart: o, colorEnd: l } = n, u = l - o, c = u / a, r, p, d = [];
  for (r = 0; r < a; r++)
    p = w(r, c, n), d.push(e(p));
  return d;
}
function z() {
  var a = S(0, 0.9), t = S(a, 1), s = {
    colorStart: a,
    colorEnd: t,
    useEndAsStart: !1
  }, n = R, { colorStart: e, colorEnd: o } = s, l = o - e, u = l / 1, c;
  return c = w(0, u, s), n(c);
}
const f = (a) => (t, s) => {
  var n;
  return t == null || t == null || (n = t.datasets) == null || n.map((e) => {
    e.backgroundColor = x(1), e.borderColor = x(1);
  }), t;
}, m = () => (a) => a, ba = (a, t) => {
  a.backgroundColor = (t == null ? void 0 : t.backgroundColor) || x(1)[0], a.borderColor = (t == null ? void 0 : t.borderColor) || x(1)[0];
};
function F(a) {
  const t = {}, s = [];
  return a.map((n) => {
    Object.keys(n).map((e) => {
      t[e] || (s.push(e), t[e] = !0);
    });
  }), s;
}
function H(a) {
  const t = {}, s = [];
  return Object.values(a).map((n) => {
    Object.keys(n).map((e) => {
      t[e] || (s.push(e), t[e] = !0);
    });
  }), s;
}
function I(a, t, s) {
  if (a instanceof Array) {
    const n = t % a.length;
    return a[n];
  } else
    return a[s];
}
const v = (a, t) => {
  function s(o, l, u) {
    const c = u.length, r = F(u);
    r.map((p) => {
      o[p] = [];
    }), o.data && o.data.map((p, d) => {
      const y = d % c, i = u[y];
      r.map((h) => {
        o[h].push(i == null ? void 0 : i[h]);
      });
    });
  }
  function n(o, l, u) {
    const c = H(u);
    c.map((r) => {
      o[r] = [];
    }), o.data && o.data.map((r, p) => {
      const d = l.labels[p], y = u[d];
      c.map((i) => {
        (y == null ? void 0 : y[i]) != null ? o[i][p] = y == null ? void 0 : y[i] : i.includes("Color") && (o[i][p] = z());
      });
    });
  }
  function e(o, l) {
    Object.keys(l).map((u) => {
      o[u] = l[u];
    });
  }
  return (o, l) => {
    if (a == null || o == null || o == null)
      return o;
    if (o)
      return o.datasets && o.datasets.map((u, c) => {
        var r;
        const p = I(a, c, (r = o.labels) == null ? void 0 : r[c]), d = p.style;
        d instanceof Array ? s(u, o, d) : n(u, o, d), p.props && e(u, p.props);
      }), o;
  };
}, j = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, ma = (a) => (t, s) => {
  var n;
  return t == null || t == null || (n = t.datasets) == null || n.map((e) => {
    e.backgroundColor = x(t.labels.length), e.borderColor = x(t.labels.length);
  }), t;
}, fa = {
  Array: v,
  Named: v,
  Random: ma,
  Noop: m
}, P = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, ha = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, xa = (a, t) => {
  function s(e, o, l) {
    const u = l.length, c = F(l);
    c.map((r) => {
      e[r] = [];
    }), e.data && e.data.map((r, p) => {
      const d = p % u, y = l[d];
      c.map((i) => {
        e[i].push(y == null ? void 0 : y[i]);
      });
    });
  }
  function n(e, o, l) {
    const u = H(l);
    u.map((c) => {
      e[c] = [];
    }), e.data && e.data.map((c, r) => {
      const p = o.labels[r], d = l[p];
      u.map((y) => {
        (d == null ? void 0 : d[y]) != null ? e[y][r] = d == null ? void 0 : d[y] : y.includes("Color") && (e[y][r] = z());
      });
    });
  }
  return (e, o) => {
    if (a == null || e == null || e == null)
      return e;
    if (e)
      return e.datasets && e.datasets.map((l, u) => {
        var c;
        const r = I(a, u, (c = e.labels) == null ? void 0 : c[u]).style;
        r instanceof Array ? s(l, e, r) : n(l, e, r);
      }), e;
  };
}, Aa = (a, t) => (s, n) => (s == null || s == null || s.datasets.map((e, o) => {
  const l = a[e.key] || a[o];
  ba(e, l);
}), s), $a = {
  Array: xa,
  Named: Aa,
  Random: f,
  Noop: m
}, ga = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, Ka = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, ka = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
}, D = {
  Array: v,
  Named: v,
  Random: f,
  Noop: m
};
var Sa = {
  Line: j,
  MultiLine: j,
  AreaChart: j,
  Bar: fa,
  StackedBar: P,
  Scatter: ha,
  GroupedScatter: $a,
  Bubble: ga,
  Radar: Ka,
  PolarArea: ka,
  Pie: D,
  Doughnut: D,
  GroupedBar: P
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
}, Ca = (a, t, s) => {
  var n;
  const e = Oa(t);
  var o = ((n = Sa[a]) == null ? void 0 : n[e]) || m;
  return o(t, s);
}, K = (a) => a;
function ja(a) {
  const t = a.accessorOptions || {};
  return Ca(a.type, a.styleOptions, t);
}
function La(a) {
  const t = a.accessorOptions || {};
  return va(a.type, t, t.sourceType);
}
const Ea = (a) => {
  const t = a.dataPipeLine || {}, s = t.preProcess || K, n = t.postProcess || K, e = t.applyStyle || ja(a) || K, o = t.convertData || La(a) || K;
  return (l) => {
    const u = s(l), c = o(u), r = e(c);
    return n(r);
  };
};
export {
  Ea as generateDataPipeLine
};
