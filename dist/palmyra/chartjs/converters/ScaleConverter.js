import { l as i } from "../../../chunks/rainbow.js";
const m = (a) => (e) => e, p = (a, e, K, r, b) => {
  var d;
  var { xKey: v } = i(e);
  const t = r[0].index, n = ((d = a.keys) == null ? void 0 : d[t]) || a.labels[t];
  if ((e == null ? void 0 : e.sourceType) == "KeyValue") {
    var { index: x, datasetIndex: c } = r[0], y = a.datasets[c], o = y.data[x];
    return { [n]: o };
  }
  var s = { [v.ref]: n };
  return r.map((l) => {
    var u = a.datasets[l.datasetIndex], f = u.key;
    s[f] = u.data[l.index];
  }), s;
};
export {
  m as NoopConverter,
  p as getScalePointData
};
