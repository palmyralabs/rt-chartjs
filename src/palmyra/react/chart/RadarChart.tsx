import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from "@palmyralabs/chartjs-utils";
import { IRemoteDataChartOptions } from "./Types";
import { SimpleChart } from "./base/SimpleChart";

interface IRadarChartOptions extends IRemoteDataChartOptions<'radar'> {
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


const RadarChart = (props: IRadarChartOptions) => {
    const derivedOptions: any = {};
    if (props.style)
        derivedOptions.styleOptions = [props.style];

    return (
        <SimpleChart type={'Radar'} {...props} accessorOptions={props.accessor} {...derivedOptions} />
    )
}

export { RadarChart };
export type { IRadarChartOptions }