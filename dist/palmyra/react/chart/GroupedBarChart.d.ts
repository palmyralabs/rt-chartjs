import { RawDataType, StyleOptions } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IGroupedBarChartOptions extends IRemoteDataChartOptions<'bar'> {
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
declare const GroupedBarChart: (props: IGroupedBarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { GroupedBarChart };
export type { IGroupedBarChartOptions };
