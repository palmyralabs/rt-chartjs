import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IPolarChartOptions extends IRemoteDataChartOptions<'polarArea'> {
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
declare const PolarAreaChart: (props: IPolarChartOptions) => import("react/jsx-runtime").JSX.Element;
export { PolarAreaChart };
export type { IPolarChartOptions };
