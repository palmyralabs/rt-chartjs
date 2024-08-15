import { RawDataType, StyleOptions } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IGroupedBarChartOptions extends IRemoteDataChartOptions<'bar'> {    
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


const GroupedBarChart = (props: IGroupedBarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = props.style;
    if (props.accessor)
        derivedOptions.accessorOptions = props.accessor;

    return (
        <SimpleChart type={'GroupedBar'} {...props} {...derivedOptions} />
    )
}

export { GroupedBarChart };
export type { IGroupedBarChartOptions }