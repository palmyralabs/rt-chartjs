import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IPolarChartOptions extends IRemoteDataChartOptions<'polarArea'> {    
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


const PolarAreaChart = (props: IPolarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'PolarArea'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { PolarAreaChart };
export type { IPolarChartOptions }