const u = /* @__PURE__ */ new WeakMap(), c = (e) => u.get(e) || null, a = (e, l) => {
  const o = c(e);
  return u.set(e, Object.assign({}, o, l)), l;
}, r = {
  colors: {
    selection: "#e8eff6",
    selectedElements: "#1f77b4",
    unselectedElements: "#cccccc"
  }
}, g = {
  id: "selectdrag",
  start: (e, l, o) => {
    if (!e?.config?.options?.plugins?.selectdrag?.enabled)
      return;
    const n = e.canvas;
    n.addEventListener("mousedown", (s) => {
      if (e.getElementsAtEventForMode(s, "index", { intersect: !1 }).length === 0)
        return;
      const i = e.getElementsAtEventForMode(s, "index", { intersect: !1 })[0].index, d = e.data.labels[i];
      a(e, {
        selectionXY: {
          drawing: !0,
          start: { axisValue: d, axisIndex: i, x: s.offsetX, y: s.offsetY },
          end: {}
        }
      });
    }), window.addEventListener("mouseup", (s) => {
      const t = c(e);
      if (!t || t?.selectionXY?.drawing === !1)
        return;
      const i = e.getElementsAtEventForMode(s, "index", { intersect: !1 }), d = i.length > 0 ? i[0].index : e.data.labels.length - 1, x = e.data.labels[d];
      t.selectionXY.start.axisValue > x ? (t.selectionXY.end = JSON.parse(JSON.stringify(t.selectionXY.start)), t.selectionXY.start = { axisValue: x, axisIndex: d, x: s.offsetX, y: s.offsetY }) : t.selectionXY.end = { axisValue: x, axisIndex: d, x: s.offsetX, y: s.offsetY }, t.selectionXY.drawing = !1, a(e, t), e.update();
      const f = e?.config?.options?.plugins?.selectdrag?.onSelectComplete;
      f && f({
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
        ]
      });
    }), n.addEventListener("mousemove", (s) => {
      const t = c(e);
      !t || t?.selectionXY?.drawing === !1 || (t.selectionXY.end = { x: s.offsetX, y: s.offsetY }, e.render(), a(e, t));
    });
  },
  beforeUpdate: (e, l, o) => {
    if (!e?.config?.options?.plugins?.selectdrag?.enabled)
      return;
    const n = c(e);
    e.data.datasets = e.data.datasets.map((s) => (s.backgroundColor = e.data.labels.map((t, i) => !n || !n?.selectionXY?.start?.x || !n?.selectionXY?.end?.x || i >= n.selectionXY.start?.axisIndex && i <= n.selectionXY.end?.axisIndex ? r.colors.selectedElements : r.colors.unselectedElements), s));
  },
  afterDraw: (e, l, o) => {
    const n = c(e);
    if (!n || n?.selectionXY?.drawing === !1 && !n.selectionXY.end?.x)
      return;
    const { ctx: s } = e;
    s.save(), s.globalCompositeOperation = "destination-over", s.fillStyle = r.colors.selection, s.fillRect(
      n.selectionXY.start?.x || 0,
      e.chartArea.top,
      (n.selectionXY.end?.x || 0) - (n.selectionXY.start?.x || 0),
      e.chartArea.height
    ), s.restore();
  },
  setSelection: (e, l = []) => {
    if (e.data.labels.length === 0 || e.data.datasets.length === 0)
      return;
    l.length === 0 && (a(e, null), e.update());
    const o = {
      selectionXY: {
        drawing: !1,
        start: {},
        end: {}
      }
    }, n = e.data.labels.findIndex((t) => t === l[0]);
    o.selectionXY.start = {
      axisValue: l[0],
      axisIndex: n,
      x: e.scales.x.getPixelForValue(e.data.labels[n]),
      y: 0
    };
    const s = e.data.labels.findIndex((t) => t === l[1]);
    o.selectionXY.end = {
      axisValue: l[0],
      axisIndex: s,
      x: e.scales.x.getPixelForValue(e.data.labels[s]),
      y: e.chartArea.height
    }, a(e, o), e.update();
  },
  clearSelection: (e) => {
    a(e, null), e.update();
  }
};
export {
  g as SelectDrag
};
