import { IRemoteDataChartOptions } from './Types';
import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';

interface IDoughnutChartOptions extends IRemoteDataChartOptions<'doughnut'> {
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
declare const DoughnutChart: (props: IDoughnutChartOptions) => import("react/jsx-runtime").JSX.Element;
export { DoughnutChart };
export type { IDoughnutChartOptions };
