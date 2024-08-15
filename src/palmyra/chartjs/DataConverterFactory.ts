import { getBubblePointData } from "./converters/BubbleConverter";
import { getScalePointData } from "./converters/ScaleConverter";
import { IgetPointData } from "./Types";

var PointConverterMap: Record<string, IgetPointData> = {
    "Line": getScalePointData,
    "MultiLine": getScalePointData,
    "Bar": getScalePointData,
    "Pie": getScalePointData,
    "Doughnut": getScalePointData,
    "PolarArea": getScalePointData,
    "Radar": getScalePointData,
    "Bubble": getBubblePointData,
    "GroupedBar": getBubblePointData,
    "StackedBar": getBubblePointData,
    "Scatter": getBubblePointData,
}

const getPointConverter = (chartType: string): IgetPointData => {
    var converter: IgetPointData = PointConverterMap[chartType];
    return converter ? converter : (d) => { return d };
}

export { getPointConverter };