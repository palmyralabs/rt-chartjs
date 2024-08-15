import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IBarChartOptions extends IRemoteDataChartOptions<'bar'> {    
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: AttributeAccessor,
        xKeyLabelMap?: Record<string, string>,
        yKey?: AttributeAccessor,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const BarChart = (props: IBarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Bar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { BarChart };
export type { IBarChartOptions }