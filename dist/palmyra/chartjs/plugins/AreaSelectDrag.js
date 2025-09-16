const p = /* @__PURE__ */ new WeakMap(), X = (e) => p.get(e) || null, f = (e, n) => {
  const l = X(e);
  return p.set(e, Object.assign({}, l, n)), n;
}, v = {
  colors: {
    selection: "#e8eff6"
  }
}, y = (e, n) => {
  var l = e.chartArea.top, o = e.chartArea.bottom, a = e.scales.y.min, s = e.scales.y.max, t = -1, i = 0;
  n.offsetY <= o && n.offsetY >= l && (t = Math.abs((n.offsetY - l) / (o - l)), t = (t - 1) * -1, t = t * Math.abs(s - a) + a, i = 1);
  var c = e.chartArea.left, d = e.chartArea.right, r = e.scales.x.min, u = e.scales.x.max, x = -1;
  return n.offsetX <= d && n.offsetX >= c && i == 1 && (x = Math.abs((n.offsetX - c) / (d - c)), x = x * Math.abs(u - r) + r), { x, y: t };
}, V = {
  id: "areaSelectdrag",
  start: (e, n, l) => {
    if (!e?.config?.options?.plugins?.selectdrag?.enabled)
      return;
    const o = e.canvas;
    o.addEventListener("mousedown", (s) => {
      const t = a(s);
      if (!t || t.length === 0) {
        f(e, {
          selectionXY: {
            state: "mousedown"
          }
        });
        return;
      }
      const i = e.getElementsAtEventForMode(s, "nearest", { intersect: !1 }, !1)[0].index, c = e.data.labels[i], d = y(e, s);
      f(e, {
        selectionXY: {
          state: "drag",
          start: {
            axisValue: c,
            axisIndex: i,
            x: s.offsetX,
            y: s.offsetY,
            xValue: d.x,
            yValue: d.y
          }
        }
      });
    });
    const a = (s) => {
      try {
        return e.getElementsAtEventForMode(s, "index", { intersect: !1 }, !1);
      } catch {
      }
    };
    window.addEventListener("mouseup", (s) => {
      const t = X(e);
      if (!t || t?.selectionXY?.state == "none")
        return;
      const i = a(s);
      if (i == null)
        return;
      const c = i.length > 0 ? i[0].index : e.data.labels.length - 1, d = e.data.labels[c];
      t.selectionXY.start.axisValue > d ? (t.selectionXY.end = JSON.parse(JSON.stringify(t.selectionXY.start)), t.selectionXY.start = { axisValue: d, axisIndex: c, x: s.offsetX, y: s.offsetY }) : t.selectionXY.end = { axisValue: d, axisIndex: c, x: s.offsetX, y: s.offsetY }, t.selectionXY.state = "none", f(e, t);
      const r = y(e, s);
      t.selectionXY.end.xValue = r.x, t.selectionXY.end.yValue = r.y, e.update();
      const u = e?.config?.options?.plugins?.selectdrag?.onSelectComplete;
      if (u) {
        const { start: x, end: Y } = t.selectionXY, m = Math.abs(x.x - Y.x), b = Math.abs(x.y - Y.y), g = e?.config?.options?.plugins?.selectdrag?.threshold || 10;
        if (m < g || b < g)
          return;
        u({
          range: [
            t.selectionXY.start.axisValue,
            t.selectionXY.end.axisValue
          ],
          boundingBox: [
            t.selectionXY.start,
            [
              t.selectionXY.end.x,
              t.selectionXY.start.y
            ],
            t.selectionXY.end,
            [
              t.selectionXY.start.x,
              t.selectionXY.end.y
            ]
          ],
          coordinates: {
            start: {
              x: t.selectionXY.start.xValue,
              y: t.selectionXY.start.yValue
            },
            end: {
              x: t.selectionXY.end.xValue,
              y: t.selectionXY.end.yValue
            }
          }
        });
      }
    }), o.addEventListener("mousemove", (s) => {
      const t = X(e);
      !t || t?.selectionXY?.state == "none" || e.canvas == null || (t.selectionXY.state == "mousedown" && a(s) != null && (t.selectionXY.state = "drag"), t.selectionXY.end = { x: s.offsetX, y: s.offsetY }, e.render(), f(e, t));
    });
  },
  beforeUpdate: (e, n, l) => {
    e?.config?.options?.plugins?.selectdrag?.enabled;
  },
  afterDraw: (e, n, l) => {
    const o = X(e);
    if (!o || o?.selectionXY?.state == "none" && !o.selectionXY.end?.x)
      return;
    const { ctx: a } = e;
    a.save(), a.globalCompositeOperation = "destination-over", a.fillStyle = v.colors.selection, a.fillRect(
      o.selectionXY.start?.x || 0,
      o.selectionXY.start?.y || e.chartArea.top,
      (o.selectionXY.end?.x || 0) - (o.selectionXY.start?.x || 0),
      o.selectionXY.end?.y - o.selectionXY.start?.y || 0
    ), a.restore();
  },
  setSelection: (e, n = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    n.length === 0 && (f(e, null), e.update());
    const l = {
      selectionXY: {
        state: "none"
      }
    }, o = e.data.labels.findIndex((s) => s === n[0]);
    l.selectionXY.start = {
      axisValue: n[0],
      axisIndex: o,
      x: e.scales.x.getPixelForValue(e.data.labels[o]),
      y: 0
    };
    const a = e.data.labels.findIndex((s) => s === n[1]);
    l.selectionXY.end = {
      axisValue: n[0],
      axisIndex: a,
      x: e.scales.x.getPixelForValue(e.data.labels[a]),
      y: e.chartArea.height
    }, f(e, l), e.update();
  },
  clearSelection: (e) => {
    f(e, null), e.update();
  }
};
export {
  V as AreaSelectDrag
};
