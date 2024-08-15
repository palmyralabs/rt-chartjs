import { AttributeAccessor, IDatasetStyleOptions, RawDataType } from '@palmyralabs/chartjs-utils';
import { IRemoteDataChartOptions } from './Types';

interface IScatterChartOptions extends IRemoteDataChartOptions<'scatter'> {
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
declare const ScatterChart: (props: IScatterChartOptions) => import("react/jsx-runtime").JSX.Element;
export { ScatterChart };
export type { IScatterChartOptions };
