const f = (e, t, y, a, n) => {
  const { x: b, y: d, r: K } = s(t);
  var l = {};
  return a.map((o) => {
    var { index: u, datasetIndex: v } = o, x = e.datasets[v], i = x.label, r = x.data[u];
    l[i] = {
      [b]: r.x,
      [d]: r.y,
      [K]: r.r
    };
  }), l;
};
function s(e) {
  const t = e?.xLabel || "name", y = e?.xKey || "x", a = e?.yKey || "y", n = e?.rKey || "r";
  return a instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + e.yKey), {
    x: y,
    y: a,
    r: n,
    label: t
  };
}
export {
  f as getBubblePointData
};
