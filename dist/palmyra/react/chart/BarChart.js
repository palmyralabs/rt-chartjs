import { jsx as r } from "react/jsx-runtime";
import { SimpleChart as s } from "./base/SimpleChart.js";
const a = (t) => {
  const e = {};
  return t.style && (e.styleOptions = [t.style]), /* @__PURE__ */ r(s, { type: "Bar", ...t, accessorOptions: t.accessor, ...e });
};
export {
  a as BarChart
};
