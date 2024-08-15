import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IPieChartOptions extends IRemoteDataChartOptions<'pie'> {
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


const PieChart = (props: IPieChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Pie'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { PieChart };
export type { IPieChartOptions }