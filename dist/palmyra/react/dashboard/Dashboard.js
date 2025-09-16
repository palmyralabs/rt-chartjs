import { jsx as t } from "react/jsx-runtime";
import { useRef as s, useImperativeHandle as a } from "react";
import { ChartStoreFactoryContext as n } from "../ChartLayoutContext.js";
const h = (r) => {
  const e = r.dashboardRef || s(null), o = r.storeFactory;
  return a(e, () => ({
    setRefreshOptions(c) {
      console.log("Dashboard refresh called");
    }
  }), []), /* @__PURE__ */ t(n.Provider, { value: o, children: r.children });
};
export {
  h as Dashboard
};
