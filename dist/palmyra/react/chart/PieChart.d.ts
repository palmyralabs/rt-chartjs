import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IPieChartOptions extends IRemoteDataChartOptions<'pie'> {
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: AttributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: AttributeAccessor;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const PieChart: (props: IPieChartOptions) => import("react/jsx-runtime").JSX.Element;
export { PieChart };
export type { IPieChartOptions };
