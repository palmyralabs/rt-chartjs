
import { MutableRefObject } from "react";
import { SimpleChart } from "./base/SimpleChart";
import { IChartJS, IRemoteDataChartOptions } from "./Types";
import { IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";


interface ILineChartOptions extends IRemoteDataChartOptions<'line'> {
    chartRef?: MutableRefObject<IChartJS>
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: String,
        xKeyLabelMap?: Record<string, string>,
        yKey?: String,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const LineChart = (props: ILineChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Line'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { LineChart };
export type { ILineChartOptions }