import { getBubblePointData as t } from "./converters/BubbleConverter.js";
import { getScalePointData as r } from "./converters/ScaleConverter.js";
var n = {
  Line: r,
  MultiLine: r,
  Bar: r,
  Pie: r,
  Doughnut: r,
  PolarArea: r,
  Radar: r,
  Bubble: t,
  GroupedBar: t,
  StackedBar: t,
  Scatter: t
};
const P = (a) => {
  var e = n[a];
  return e || ((o) => o);
};
export {
  P as getPointConverter
};
