import { RawDataType, StyleOptions } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IStackedBarChartOptions extends IRemoteDataChartOptions<'bar'> {    
    styleOptions?: never,
    accessorOptions?: never,
    style?: StyleOptions,
    accessor?: {
        xKey?: String,
        yKey?: String,
        group: String,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const StackedBarChart = (props: IStackedBarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = props.style;
    if (props.accessor)
        derivedOptions.accessorOptions = props.accessor;

    return (
        <SimpleChart type={'StackedBar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { StackedBarChart };
export type { IStackedBarChartOptions }