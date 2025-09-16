import { RefObject } from 'react';
import { IChartJS, IRemoteDataChartOptions } from './Types';
import { IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
interface ILineChartOptions extends IRemoteDataChartOptions<'line'> {
    chartRef?: RefObject<IChartJS>;
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: String;
        xKeyLabelMap?: Record<string, string>;
        yKey?: String;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const LineChart: (props: ILineChartOptions) => import("react/jsx-runtime").JSX.Element;
export { LineChart };
export type { ILineChartOptions };
