import { jsx as i } from "react/jsx-runtime";
import { SimpleChart as s } from "./base/SimpleChart.js";
const n = (t) => {
  const e = {};
  return t.style && (e.styleOptions = [t.style]), /* @__PURE__ */ i(s, { type: "Line", ...t, accessorOptions: t.accessor, ...e });
};
export {
  n as LineChart
};
