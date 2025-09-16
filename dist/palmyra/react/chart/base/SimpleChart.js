import { jsx as n } from "react/jsx-runtime";
import { useRef as i, useImperativeHandle as u, useEffect as h } from "react";
import { useChartQuery as f } from "../../hooks/useChartQuery.js";
import { AbstractChartJS as d } from "./AbstractChartJS.js";
import m from "../../ErrorBoundary.js";
const C = (t) => {
  const a = i(null), r = t.chartRef || i(null), o = (e) => {
    r.current != null && r.current.setData(e);
  }, { fetch: s, setFilter: c, setEndPointVars: l } = f(t, {
    onData: o
  });
  return u(a, () => ({
    setEndPointOptions(e) {
      l(e);
    },
    setFilter(e) {
      c(e);
    },
    resetFilter() {
    },
    toggleLegend() {
    },
    showDataset() {
    },
    hideDataset() {
    },
    onDataRefresh(e) {
    }
  }), []), h(() => {
    s();
  }, []), /* @__PURE__ */ n(m, { errorMessage: "Error while rendering " + t.type + " chart", children: /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n(
    d,
    {
      type: t.type,
      chartRef: r,
      styleOptions: t.styleOptions,
      accessorOptions: t.accessorOptions,
      dataPipeLine: t.dataPipeLine,
      chartOptions: t.chartOptions,
      plugins: t.plugins,
      onAreaSelect: t.onAreaSelect,
      onPointClick: t.onPointClick
    }
  ) }) });
};
export {
  C as SimpleChart
};
