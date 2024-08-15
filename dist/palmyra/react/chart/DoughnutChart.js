import { jsx as o } from "react/jsx-runtime";
import { SimpleChart as s } from "./base/SimpleChart.js";
const n = (t) => {
  const e = {};
  return t.style && (e.styleOptions = [t.style]), /* @__PURE__ */ o(s, { type: "Doughnut", ...t, accessorOptions: t.accessor, ...e });
};
export {
  n as DoughnutChart
};
