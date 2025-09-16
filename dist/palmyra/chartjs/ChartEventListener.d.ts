import { Chart, ChartType as ChartJsType, Plugin } from 'chart.js';
import { MouseEventHandler, RefObject } from 'react';
import { DataPipeLine, IChartOptions } from './Types';
interface ListenerResult {
    onClick?: MouseEventHandler<any>;
    setData?: Function;
}
declare const useAreaSelectListener: (chartType: string, chartOptions: IChartOptions, plugins: Plugin<ChartJsType>[], callback: any) => void;
declare const useClickListener: (chartType: string, props: IChartOptions, dataPipeLine: DataPipeLine, chartRef: RefObject<Chart>) => ListenerResult;
export { useAreaSelectListener, useClickListener };
