import { StyleOptions } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IMultiLineChartOptions extends IRemoteDataChartOptions<'line'> {    
    styleOptions?: never,
    accessorOptions?: never,
    style?: StyleOptions,
    accessor?: {
        xKey?: String,
        yKey?: String[],
        xLabel?: String,
        yLabel?: String[],
        sourceType?: 'Array' | 'Object';
    }
}


const MultiLineChart = (props: IMultiLineChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = props.style;
    if (props.accessor)
        derivedOptions.accessorOptions = props.accessor;

    return (
        <SimpleChart type={'MultiLine'} {...props} {...derivedOptions} />
    )
}

export { MultiLineChart };
export type { IMultiLineChartOptions }