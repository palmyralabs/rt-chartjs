import { ConverterOptions } from "@palmyralabs/chartjs-utils";
import { DataPipeLine, IgetPointData } from "../Types";
import { InteractionItem } from "chart.js";

const getBubblePointData: IgetPointData = (data: any, accessorOptions: ConverterOptions,
    dataPipeLine: DataPipeLine, element: InteractionItem[], elements: InteractionItem[]) => {
    const { x, y, r } = getKeys(accessorOptions);
    var result = {};

    element.map((e) => {
        var { index, datasetIndex } = e;
        var dataSet = data.datasets[datasetIndex];
        var label = dataSet.label;
        var d = dataSet.data[index];

        result[label] = {
            [x]: d.x,
            [y]: d.y,
            [r]: d.r
        }
    });

    return result;
}



function getKeys(accessorOptions: ConverterOptions): { x: string, y: string, r: string, label: string } {
    const xLabel: any = accessorOptions?.xLabel || 'name';
    const xKey: any = accessorOptions?.xKey || 'x';
    const yKey: any = accessorOptions?.yKey || 'y';
    const rKey: any = accessorOptions?.rKey || 'r';

    if (yKey instanceof Array) {
        console.error("BubbleChart: yKey should be string only, not an array " + accessorOptions.yKey);
    }

    return {
        x: xKey,
        y: yKey,
        r: rKey,
        label: xLabel
    }
}


export { getBubblePointData }