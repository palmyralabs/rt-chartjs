import { jsx as i } from "react/jsx-runtime";
import { SimpleChart as s } from "./base/SimpleChart.js";
const c = (t) => {
  const e = {};
  return t.style && (e.styleOptions = t.style), t.accessor && (e.accessorOptions = t.accessor), /* @__PURE__ */ i(s, { type: "MultiLine", ...t, ...e });
};
export {
  c as MultiLineChart
};
