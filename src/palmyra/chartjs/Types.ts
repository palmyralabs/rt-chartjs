import { ChartJsType, ConverterOptions, StyleOptions } from "@palmyralabs/chartjs-utils";
import { InteractionItem } from "chart.js";

type converter = (d: any) => any;
type IgetPointData = (data: any, options: ConverterOptions, dataPipeLine: DataPipeLine,
    element: InteractionItem[], elements: InteractionItem[]) => Record<string, any>;

type PostProcessor<T> = (data: T) => T;
type DataTransformer<T> = (d: any) => T;

interface DataPipeLine {
    preProcess?: converter,
    convertData?: converter,
    applyStyle?: converter,
    postProcess?: converter,
    xScaleConverter?: converter
}

interface DataPipeLineOptions {
    styleOptions?: StyleOptions,
    accessorOptions?: ConverterOptions
}

interface IChartOptions extends DataPipeLineOptions {
    type?: ChartJsType
    dataPipeLine?: DataPipeLine,
    plugins?: any,
    onPointClick?: (data: any) => void,
    onAreaSelect?: (data: any) => void
}

export type { converter, DataPipeLine, IChartOptions, IgetPointData , PostProcessor, DataTransformer}