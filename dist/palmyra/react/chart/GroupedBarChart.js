import { jsx as r } from "react/jsx-runtime";
import { SimpleChart as o } from "./base/SimpleChart.js";
const c = (t) => {
  const e = {};
  return t.style && (e.styleOptions = t.style), t.accessor && (e.accessorOptions = t.accessor), /* @__PURE__ */ r(o, { type: "GroupedBar", ...t, ...e });
};
export {
  c as GroupedBarChart
};
