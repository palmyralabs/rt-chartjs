import { jsx as s } from "react/jsx-runtime";
import { SimpleChart as c } from "./base/SimpleChart.js";
const o = (t) => {
  const e = {};
  return t.style && (e.styleOptions = t.style), t.accessor && (e.accessorOptions = t.accessor), /* @__PURE__ */ s(c, { type: "StackedBar", ...t, accessorOptions: t.accessor, ...e });
};
export {
  o as StackedBarChart
};
