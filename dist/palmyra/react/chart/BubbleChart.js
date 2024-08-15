import { jsx as s } from "react/jsx-runtime";
import { SimpleChart as o } from "./base/SimpleChart.js";
const c = (t) => {
  const e = {};
  return t.style && (e.styleOptions = [t.style]), /* @__PURE__ */ s(o, { type: "Bubble", ...t, accessorOptions: t.accessor, ...e });
};
export {
  c as BubbleChart
};
