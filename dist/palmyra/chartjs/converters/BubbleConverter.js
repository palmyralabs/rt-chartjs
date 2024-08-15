const L = (y, l, a, e, b) => {
  const { x: t, y: u, r } = n(l);
  var d = {};
  return e.map((v) => {
    var { index: f, datasetIndex: g } = v, K = y.datasets[g], m = K.label, x = K.data[f];
    d[m] = {
      [t]: x.x,
      [u]: x.y,
      [r]: x.r
    };
  }), d;
};
function n(y) {
  const l = (y == null ? void 0 : y.xLabel) || "name", a = (y == null ? void 0 : y.xKey) || "x", e = (y == null ? void 0 : y.yKey) || "y", b = (y == null ? void 0 : y.rKey) || "r";
  return e instanceof Array && console.error("BubbleChart: yKey should be string only, not an array " + y.yKey), {
    x: a,
    y: e,
    r: b,
    label: l
  };
}
export {
  L as getBubblePointData
};
