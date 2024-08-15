import { StyleOptions } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IMultiLineChartOptions extends IRemoteDataChartOptions<'line'> {
    styleOptions?: never;
    accessorOptions?: never;
    style?: StyleOptions;
    accessor?: {
        xKey?: String;
        yKey?: String[];
        xLabel?: String;
        yLabel?: String[];
        sourceType?: 'Array' | 'Object';
    };
}
declare const MultiLineChart: (props: IMultiLineChartOptions) => import("react/jsx-runtime").JSX.Element;
export { MultiLineChart };
export type { IMultiLineChartOptions };
