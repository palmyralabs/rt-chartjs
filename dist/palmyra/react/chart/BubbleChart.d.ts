import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IBubbleChartOptions extends IRemoteDataChartOptions<'bubble'> {
    styleOptions?: never;
    accessorOptions?: never;
    style?: IDatasetStyleOptions;
    accessor?: {
        xKey?: AttributeAccessor;
        rKey?: AttributeAccessor;
        xKeyLabelMap?: Record<string, string>;
        yKey?: AttributeAccessor;
        xLabel?: String;
        yLabel?: String;
        sourceType?: RawDataType;
    };
}
declare const BubbleChart: (props: IBubbleChartOptions) => import("react/jsx-runtime").JSX.Element;
export { BubbleChart };
export type { IBubbleChartOptions };
