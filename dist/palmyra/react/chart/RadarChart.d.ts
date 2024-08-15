import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IRadarChartOptions extends IRemoteDataChartOptions<'radar'> {
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: AttributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: String | String[];
        xLabel?: String;
        yLabel?: String | String[];
        sourceType?: RawDataType;
    };
}
declare const RadarChart: (props: IRadarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { RadarChart };
export type { IRadarChartOptions };
