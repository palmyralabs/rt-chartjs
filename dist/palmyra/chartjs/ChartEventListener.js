import { useRef as m } from "react";
import { getDatasetAtEvent as g, getElementsAtEvent as p, getElementAtEvent as C } from "react-chartjs-2";
import { AreaSelectDrag as v } from "./plugins/AreaSelectDrag.js";
import { getPointConverter as A } from "./DataConverterFactory.js";
function E(n) {
  return n.length > 0;
}
const L = (n, r, i, o) => {
  o != null && (i.push(v), r.plugins.selectdrag = {
    enabled: !0,
    onSelectComplete: (s) => {
      o(s);
    }
  });
}, R = (n, r, i, o) => {
  if (!r.onPointClick)
    return {};
  const { accessorOptions: s, onPointClick: u } = r, l = m(null), f = (t, e, c) => {
    if (t.length) {
      var a = A(n);
      return a(l.current, s, i, e, c);
    }
  };
  return { onClick: (t) => {
    const { current: e } = o;
    if (!e)
      return;
    const c = g(e, t);
    if (E(c)) {
      var a = f(
        c,
        C(e, t),
        p(e, t)
      );
      u(a);
    }
  }, setData: (t) => {
    l.current = t;
  } };
};
export {
  L as useAreaSelectListener,
  R as useClickListener
};
