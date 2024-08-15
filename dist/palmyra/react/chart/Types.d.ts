import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { IChartOptions } from '../../chartjs/Types';
import { MutableRefObject } from 'react';
import { ChartStoreFactory, IEndPoint, IEndPointOptions } from '@palmyralabs/palmyra-wire';
import { ChartJsType } from '@palmyralabs/chartjs-utils';

interface IAbstractChart {
    toggleLegend: () => void;
    showDataset: () => void;
    hideDataset: () => void;
}
interface IChartJS {
    clear: () => void;
    resize: (width?: number, height?: number) => void;
    reset: () => void;
    setData: (d: any) => void;
}
interface storeBacked {
    storeOptions?: {
        endPoint?: IEndPoint;
        endPointOptions?: IEndPointOptions;
    };
}
interface IAbstractChartOptions<T extends ChartType> extends IChartOptions {
    chartRef?: MutableRefObject<IChartJS>;
    chartOptions?: ChartOptions<T>;
    data?: any;
}
interface RemoteQueryOptions {
    storeFactory?: ChartStoreFactory<any>;
    endPoint: IEndPoint;
    endPointVars?: IEndPointOptions;
    filter?: any;
}
interface ISimpleChart<T extends ChartType> extends IAbstractChart {
    setEndPointOptions: (d: IEndPointOptions) => void;
    setFilter: (filter: any) => void;
    resetFilter: () => void;
    onDataRefresh?: (rawData: any) => void;
}
interface IRemoteDataChartOptions<T extends ChartType> extends IAbstractChartOptions<T>, RemoteQueryOptions {
}
interface ISimpleChartOptions<T extends ChartType> extends IRemoteDataChartOptions<T> {
}
interface IStaticChartOptions<T extends ChartType> extends IAbstractChartOptions<T> {
    type: ChartJsType;
    chartRef?: MutableRefObject<IStaticChart<T>>;
    chartData: ChartData;
}
interface IStaticChart<T extends ChartType> extends IChartJS {
    setData: (data: any) => void;
}
export type { IAbstractChartOptions, IAbstractChart, IChartJS, storeBacked, RemoteQueryOptions };
export type { ISimpleChart, ISimpleChartOptions, IRemoteDataChartOptions };
export type { IStaticChartOptions, IStaticChart };
