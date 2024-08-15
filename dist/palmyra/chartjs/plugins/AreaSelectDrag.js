const O = /* @__PURE__ */ new WeakMap(), Y = (e) => O.get(e) || null, r = (e, o) => {
  const f = Y(e);
  return O.set(e, Object.assign({}, f, o)), o;
}, N = {
  colors: {
    selection: "#e8eff6",
    selectedElements: "#1f77b4",
    unselectedElements: "#cccccc"
  }
}, D = (e, o) => {
  var f = e.chartArea.top, n = e.chartArea.bottom, l = e.scales.y.min, a = e.scales.y.max, i = -1, u = 0;
  o.offsetY <= n && o.offsetY >= f && (i = Math.abs((o.offsetY - f) / (n - f)), i = (i - 1) * -1, i = i * Math.abs(a - l) + l, u = 1);
  var c = e.chartArea.left, t = e.chartArea.right, s = e.scales.x.min, d = e.scales.x.max, x = -1;
  return o.offsetX <= t && o.offsetX >= c && u == 1 && (x = Math.abs((o.offsetX - c) / (t - c)), x = x * Math.abs(d - s) + s), { x, y: i };
}, P = {
  id: "areaSelectdrag",
  start: (e, o, f) => {
    var a, i, u, c;
    if (!((c = (u = (i = (a = e == null ? void 0 : e.config) == null ? void 0 : a.options) == null ? void 0 : i.plugins) == null ? void 0 : u.selectdrag) != null && c.enabled))
      return;
    const n = e.canvas;
    n.addEventListener("mousedown", (t) => {
      const s = l(t);
      if (!s || s.length === 0) {
        r(e, {
          selectionXY: {
            state: "mousedown"
          }
        });
        return;
      }
      const d = e.getElementsAtEventForMode(t, "nearest", { intersect: !1 }, !1)[0].index, x = e.data.labels[d], X = D(e, t);
      r(e, {
        selectionXY: {
          state: "drag",
          start: {
            axisValue: x,
            axisIndex: d,
            x: t.offsetX,
            y: t.offsetY,
            xValue: X.x,
            yValue: X.y
          }
        }
      });
    });
    const l = (t) => {
      try {
        return e.getElementsAtEventForMode(t, "index", { intersect: !1 }, !1);
      } catch {
      }
    };
    window.addEventListener("mouseup", (t) => {
      var p, m, b, v, V, E, A, w, I;
      const s = Y(e);
      if (!s || ((p = s == null ? void 0 : s.selectionXY) == null ? void 0 : p.state) == "none")
        return;
      const d = l(t);
      if (d == null)
        return;
      const x = d.length > 0 ? d[0].index : e.data.labels.length - 1, X = e.data.labels[x];
      s.selectionXY.start.axisValue > X ? (s.selectionXY.end = JSON.parse(JSON.stringify(s.selectionXY.start)), s.selectionXY.start = { axisValue: X, axisIndex: x, x: t.offsetX, y: t.offsetY }) : s.selectionXY.end = { axisValue: X, axisIndex: x, x: t.offsetX, y: t.offsetY }, s.selectionXY.state = "none", r(e, s);
      const g = D(e, t);
      s.selectionXY.end.xValue = g.x, s.selectionXY.end.yValue = g.y, e.update();
      const y = (V = (v = (b = (m = e == null ? void 0 : e.config) == null ? void 0 : m.options) == null ? void 0 : b.plugins) == null ? void 0 : v.selectdrag) == null ? void 0 : V.onSelectComplete;
      if (y) {
        const { start: M, end: S } = s.selectionXY, C = Math.abs(M.x - S.x), L = Math.abs(M.y - S.y), F = ((I = (w = (A = (E = e == null ? void 0 : e.config) == null ? void 0 : E.options) == null ? void 0 : A.plugins) == null ? void 0 : w.selectdrag) == null ? void 0 : I.threshold) || 10;
        if (C < F || L < F)
          return;
        y({
          range: [
            s.selectionXY.start.axisValue,
            s.selectionXY.end.axisValue
          ],
          boundingBox: [
            s.selectionXY.start,
            [
              s.selectionXY.end.x,
              s.selectionXY.start.y
            ],
            s.selectionXY.end,
            [
              s.selectionXY.start.x,
              s.selectionXY.end.y
            ]
          ],
          coordinates: {
            start: {
              x: s.selectionXY.start.xValue,
              y: s.selectionXY.start.yValue
            },
            end: {
              x: s.selectionXY.end.xValue,
              y: s.selectionXY.end.yValue
            }
          }
        });
      }
    }), n.addEventListener("mousemove", (t) => {
      var d;
      const s = Y(e);
      !s || ((d = s == null ? void 0 : s.selectionXY) == null ? void 0 : d.state) == "none" || e.canvas == null || (s.selectionXY.state == "mousedown" && l(t) != null && (s.selectionXY.state = "drag"), s.selectionXY.end = { x: t.offsetX, y: t.offsetY }, e.render(), r(e, s));
    });
  },
  beforeUpdate: (e, o, f) => {
    var n, l, a, i;
    (i = (a = (l = (n = e == null ? void 0 : e.config) == null ? void 0 : n.options) == null ? void 0 : l.plugins) == null ? void 0 : a.selectdrag) != null && i.enabled;
  },
  afterDraw: (e, o, f) => {
    var a, i, u, c, t, s, d, x;
    const n = Y(e);
    if (!n || ((a = n == null ? void 0 : n.selectionXY) == null ? void 0 : a.state) == "none" && !((i = n.selectionXY.end) != null && i.x))
      return;
    const { ctx: l } = e;
    l.save(), l.globalCompositeOperation = "destination-over", l.fillStyle = N.colors.selection, l.fillRect(
      ((u = n.selectionXY.start) == null ? void 0 : u.x) || 0,
      ((c = n.selectionXY.start) == null ? void 0 : c.y) || e.chartArea.top,
      (((t = n.selectionXY.end) == null ? void 0 : t.x) || 0) - (((s = n.selectionXY.start) == null ? void 0 : s.x) || 0),
      ((d = n.selectionXY.end) == null ? void 0 : d.y) - ((x = n.selectionXY.start) == null ? void 0 : x.y) || 0
    ), l.restore();
  },
  setSelection: (e, o = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    o.length === 0 && (r(e, null), e.update());
    const f = {
      selectionXY: {
        state: "none"
      }
    }, n = e.data.labels.findIndex((a) => a === o[0]);
    f.selectionXY.start = {
      axisValue: o[0],
      axisIndex: n,
      x: e.scales.x.getPixelForValue(e.data.labels[n]),
      y: 0
    };
    const l = e.data.labels.findIndex((a) => a === o[1]);
    f.selectionXY.end = {
      axisValue: o[0],
      axisIndex: l,
      x: e.scales.x.getPixelForValue(e.data.labels[l]),
      y: e.chartArea.height
    }, r(e, f), e.update();
  },
  clearSelection: (e) => {
    r(e, null), e.update();
  }
};
export {
  P as AreaSelectDrag
};
