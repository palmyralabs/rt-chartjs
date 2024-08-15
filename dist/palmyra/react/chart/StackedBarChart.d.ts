import { RawDataType, StyleOptions } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IStackedBarChartOptions extends IRemoteDataChartOptions<'bar'> {
    styleOptions?: never;
    accessorOptions?: never;
    style?: StyleOptions;
    accessor?: {
        xKey?: String;
        yKey?: String;
        group: String;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const StackedBarChart: (props: IStackedBarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { StackedBarChart };
export type { IStackedBarChartOptions };
