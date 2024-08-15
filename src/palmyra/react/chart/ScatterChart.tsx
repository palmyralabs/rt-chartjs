import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IScatterChartOptions extends IRemoteDataChartOptions<'scatter'> {
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


const ScatterChart = (props: IScatterChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Scatter'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { ScatterChart };
export type { IScatterChartOptions }