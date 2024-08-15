import { jsx as i } from "react/jsx-runtime";
import { SimpleChart as s } from "./base/SimpleChart.js";
const c = (t) => {
  const e = {};
  return t.style && (e.styleOptions = [t.style]), /* @__PURE__ */ i(s, { type: "Pie", ...t, accessorOptions: t.accessor, ...e });
};
export {
  c as PieChart
};
