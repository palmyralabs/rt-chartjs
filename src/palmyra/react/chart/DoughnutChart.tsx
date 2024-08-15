import { SimpleChart } from "./base/SimpleChart";
import { IRemoteDataChartOptions } from "./Types";
import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";


interface IDoughnutChartOptions extends IRemoteDataChartOptions<'doughnut'> {
    styleOptions?: never,
    accessorOptions?: never,
    style?: IDatasetStyleOptions,
    accessor?: {
        xKey?: AttributeAccessor,
        xKeyLabelMap?: Record<string, string>,
        yKey?: String | String[],
        xLabel?: String,
        yLabel?: String | String[],
        sourceType?: RawDataType
    }
}


const DoughnutChart = (props: IDoughnutChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Doughnut'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { DoughnutChart };
export type { IDoughnutChartOptions }