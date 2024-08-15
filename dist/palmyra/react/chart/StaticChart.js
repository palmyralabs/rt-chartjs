import { jsx as e } from "react/jsx-runtime";
import { useRef as r, useImperativeHandle as i } from "react";
import o from "../ErrorBoundary.js";
import { AbstractChartJS as c } from "./base/AbstractChartJS.js";
const u = (t) => {
  const a = r(null), n = r();
  return i(a, () => ({
    toggleLegend() {
    },
    showDataset() {
    },
    hideDataset() {
    },
    setData(l) {
    }
  }), []), /* @__PURE__ */ e(o, { errorMessage: "Error while rendering " + t.type + " chart", children: /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(
    c,
    {
      type: t.type,
      chartRef: n,
      chartOptions: t.chartOptions,
      plugins: t.plugins,
      onAreaSelect: t.onAreaSelect,
      onPointClick: t.onPointClick,
      data: t.chartData
    }
  ) }) });
};
export {
  u as StaticChart
};
