import { ConverterOptions, dataConverter, getKeys } from "@palmyralabs/chartjs-utils";
import { InteractionItem } from "chart.js";
import { DataPipeLine, IgetPointData } from "../Types";


const NoopConverter = (options: ConverterOptions): dataConverter<any> => {
    return (data) => { return data };
}

const getScalePointData: IgetPointData = (data: any, options: ConverterOptions,
     dataPipeLine: DataPipeLine, element: InteractionItem[], elements: InteractionItem[]) => {

    var { xKey } = getKeys(options);
    const xKeyIndex = element[0].index;
    const xValue = data.keys?.[xKeyIndex] || data.labels[xKeyIndex];

    if (options?.sourceType == 'KeyValue') {
        var { index, datasetIndex } = element[0];
        var dataSet = data.datasets[datasetIndex];
        var value = dataSet.data[index];
        return { [xValue]: value };
    }

    var result = { [xKey.ref]: xValue };
    element.map((e) => {
        var dataSet = data.datasets[e.datasetIndex];
        var label = dataSet.key;
        result[label] = dataSet.data[e.index];
    });

    return result;
}


export { NoopConverter, getScalePointData };