import { jsx as o } from "react/jsx-runtime";
import { Chart as S, registerables as y, TimeScale as A } from "chart.js";
import { useRef as l, useImperativeHandle as C, useMemo as L } from "react";
import { Chart as R } from "react-chartjs-2";
import { useClickListener as P, useAreaSelectListener as D } from "../../../chartjs/ChartEventListener.js";
import { generateDataPipeLine as B } from "../../../chartjs/DataPipeLineGenerator.js";
S.register(...y, A);
const k = {
  Line: "line",
  MultiLine: "line",
  AreaChart: "line",
  Bar: "bar",
  GroupedBar: "bar",
  StackedBar: "bar",
  Bubble: "bubble",
  Doughnut: "doughnut",
  Pie: "pie",
  PolarArea: "polarArea",
  Radar: "radar",
  Scatter: "scatter",
  GroupedScatter: "scatter"
}, v = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
function O(t) {
  const f = [], n = B(t), i = t.chartOptions || { ...v }, c = t.plugins || f, e = l(null), p = n(t.data), h = t.chartRef || l(null);
  C(h, () => ({
    clear: () => {
      e.current && e.current.clear();
    },
    resize: (r, a) => {
      e.current && e.current.resize(r, a);
    },
    reset: () => {
      e.current && e.current.reset();
    },
    setData: (r) => {
      if (!e.current)
        return;
      const a = e.current;
      if (r) {
        const u = n(r);
        s && s(u), a.data = u, a.update();
      }
    }
  }), [e]);
  function m() {
    return t;
  }
  function d() {
    return "350px";
  }
  const { onClick: g, setData: s } = P(t.type, t, t.dataPipeLine, e), b = L(() => {
    const r = m();
    return r.onAreaSelect && D(r.type, i, c, r.onAreaSelect), /* @__PURE__ */ o(
      R,
      {
        type: k[r.type],
        ref: e,
        options: i,
        plugins: c,
        onClick: g,
        data: p,
        height: d()
      }
    );
  }, []);
  return /* @__PURE__ */ o("div", { className: "palmyra-chart-container-wrapper", children: b });
}
export {
  O as AbstractChartJS
};
