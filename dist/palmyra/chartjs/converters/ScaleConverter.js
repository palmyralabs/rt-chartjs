import { K as p } from "../../../chunks/rainbow.js";
const b = (e) => (a) => a, k = (e, a, y, r, K) => {
  var { xKey: u } = p(a);
  const t = r[0].index, n = e.keys?.[t] || e.labels[t];
  if (a?.sourceType == "KeyValue") {
    var { index: v, datasetIndex: x } = r[0], i = e.datasets[x], l = i.data[v];
    return { [n]: l };
  }
  var s = { [u.ref]: n };
  return r.map((o) => {
    var d = e.datasets[o.datasetIndex], c = d.key;
    s[c] = d.data[o.index];
  }), s;
};
export {
  b as NoopConverter,
  k as getScalePointData
};
