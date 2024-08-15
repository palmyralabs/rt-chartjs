import { jsx as u } from "react/jsx-runtime";
import { Chart as C, registerables as y, TimeScale as R } from "chart.js";
import { useRef as s, useImperativeHandle as L, useMemo as P } from "react";
import { Chart as S } from "react-chartjs-2";
import { useClickListener as A } from "../../../chartjs/ChartEventListener.js";
import { generateDataPipeLine as D } from "../../../chartjs/DataPipeLineGenerator.js";
C.register(...y, R);
const B = {
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
}, k = {
  responsive: !0,
  maintainAspectRatio: !1,
  plugins: {
    legend: {
      display: !1
    }
  }
};
function M(t) {
  const o = [], n = D(t), l = t.chartOptions || { ...k }, f = t.plugins || o, e = s(null), p = n(t.data), h = t.chartRef || s(null);
  L(h, () => ({
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
        const c = n(r);
        i && i(c), a.data = c, a.update();
      }
    }
  }), [e]);
  function m() {
    return t;
  }
  function d() {
    return "350px";
  }
  const { onClick: g, setData: i } = A(t.type, t, t.dataPipeLine, e), b = P(() => {
    const r = m();
    return /* @__PURE__ */ u(
      S,
      {
        type: B[r.type],
        ref: e,
        options: l,
        plugins: f,
        onClick: g,
        data: p,
        height: d()
      }
    );
  }, []);
  return /* @__PURE__ */ u("div", { className: "palmyra-chart-container-wrapper", children: b });
}
export {
  M as AbstractChartJS
};
