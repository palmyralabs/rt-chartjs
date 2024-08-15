import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IBubbleChartOptions extends IRemoteDataChartOptions<'bubble'> {    
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: AttributeAccessor,
        rKey?: AttributeAccessor,
        xKeyLabelMap?: Record<string, string>,
        yKey?: AttributeAccessor,
        xLabel?: String,
        yLabel?: String,
        sourceType?: RawDataType
    }
}


const BubbleChart = (props: IBubbleChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Bubble'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { BubbleChart };
export type { IBubbleChartOptions }