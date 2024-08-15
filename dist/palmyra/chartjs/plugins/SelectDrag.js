const w = /* @__PURE__ */ new WeakMap(), m = (e) => w.get(e) || null, u = (e, o) => {
  const d = m(e);
  return w.set(e, Object.assign({}, d, o)), o;
}, b = {
  colors: {
    selection: "#e8eff6",
    selectedElements: "#1f77b4",
    unselectedElements: "#cccccc"
  }
}, y = {
  id: "selectdrag",
  start: (e, o, d) => {
    var l, i, x, c;
    if (!((c = (x = (i = (l = e == null ? void 0 : e.config) == null ? void 0 : l.options) == null ? void 0 : i.plugins) == null ? void 0 : x.selectdrag) != null && c.enabled))
      return;
    const n = e.canvas;
    n.addEventListener("mousedown", (t) => {
      if (e.getElementsAtEventForMode(t, "index", { intersect: !1 }).length === 0)
        return;
      const a = e.getElementsAtEventForMode(t, "index", { intersect: !1 })[0].index, f = e.data.labels[a];
      u(e, {
        selectionXY: {
          drawing: !0,
          start: { axisValue: f, axisIndex: a, x: t.offsetX, y: t.offsetY },
          end: {}
        }
      });
    }), window.addEventListener("mouseup", (t) => {
      var X, Y, p, E, v;
      const s = m(e);
      if (!s || ((X = s == null ? void 0 : s.selectionXY) == null ? void 0 : X.drawing) === !1)
        return;
      const a = e.getElementsAtEventForMode(t, "index", { intersect: !1 }), f = a.length > 0 ? a[0].index : e.data.labels.length - 1, r = e.data.labels[f];
      s.selectionXY.start.axisValue > r ? (s.selectionXY.end = JSON.parse(JSON.stringify(s.selectionXY.start)), s.selectionXY.start = { axisValue: r, axisIndex: f, x: t.offsetX, y: t.offsetY }) : s.selectionXY.end = { axisValue: r, axisIndex: f, x: t.offsetX, y: t.offsetY }, s.selectionXY.drawing = !1, u(e, s), e.update();
      const g = (v = (E = (p = (Y = e == null ? void 0 : e.config) == null ? void 0 : Y.options) == null ? void 0 : p.plugins) == null ? void 0 : E.selectdrag) == null ? void 0 : v.onSelectComplete;
      g && g({
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
        ]
      });
    }), n.addEventListener("mousemove", (t) => {
      var a;
      const s = m(e);
      !s || ((a = s == null ? void 0 : s.selectionXY) == null ? void 0 : a.drawing) === !1 || (s.selectionXY.end = { x: t.offsetX, y: t.offsetY }, e.render(), u(e, s));
    });
  },
  beforeUpdate: (e, o, d) => {
    var l, i, x, c;
    if (!((c = (x = (i = (l = e == null ? void 0 : e.config) == null ? void 0 : l.options) == null ? void 0 : i.plugins) == null ? void 0 : x.selectdrag) != null && c.enabled))
      return;
    const n = m(e);
    e.data.datasets = e.data.datasets.map((t) => (t.backgroundColor = e.data.labels.map((s, a) => {
      var f, r, g, X, Y, p;
      return !n || !((r = (f = n == null ? void 0 : n.selectionXY) == null ? void 0 : f.start) != null && r.x) || !((X = (g = n == null ? void 0 : n.selectionXY) == null ? void 0 : g.end) != null && X.x) || a >= ((Y = n.selectionXY.start) == null ? void 0 : Y.axisIndex) && a <= ((p = n.selectionXY.end) == null ? void 0 : p.axisIndex) ? b.colors.selectedElements : b.colors.unselectedElements;
    }), t));
  },
  afterDraw: (e, o, d) => {
    var i, x, c, t, s;
    const n = m(e);
    if (!n || ((i = n == null ? void 0 : n.selectionXY) == null ? void 0 : i.drawing) === !1 && !((x = n.selectionXY.end) != null && x.x))
      return;
    const { ctx: l } = e;
    l.save(), l.globalCompositeOperation = "destination-over", l.fillStyle = b.colors.selection, l.fillRect(
      ((c = n.selectionXY.start) == null ? void 0 : c.x) || 0,
      e.chartArea.top,
      (((t = n.selectionXY.end) == null ? void 0 : t.x) || 0) - (((s = n.selectionXY.start) == null ? void 0 : s.x) || 0),
      e.chartArea.height
    ), l.restore();
  },
  setSelection: (e, o = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    o.length === 0 && (u(e, null), e.update());
    const d = {
      selectionXY: {
        drawing: !1,
        start: {},
        end: {}
      }
    }, n = e.data.labels.findIndex((i) => i === o[0]);
    d.selectionXY.start = {
      axisValue: o[0],
      axisIndex: n,
      x: e.scales.x.getPixelForValue(e.data.labels[n]),
      y: 0
    };
    const l = e.data.labels.findIndex((i) => i === o[1]);
    d.selectionXY.end = {
      axisValue: o[0],
      axisIndex: l,
      x: e.scales.x.getPixelForValue(e.data.labels[l]),
      y: e.chartArea.height
    }, u(e, d), e.update();
  },
  clearSelection: (e) => {
    u(e, null), e.update();
  }
};
export {
  y as SelectDrag
};
