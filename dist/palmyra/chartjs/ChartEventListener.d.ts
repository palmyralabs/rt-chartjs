import { Plugin, ChartType as ChartJsType, Chart, ChartType } from 'chart.js';
import { MouseEventHandler, MutableRefObject } from 'react';
import { DataPipeLine, IChartOptions } from './Types';

interface ListenerResult {
    onClick?: MouseEventHandler<any>;
    setData?: Function;
}
declare const useAreaSelectListener: (chartType: ChartType, chartOptions: IChartOptions, plugins: Plugin<ChartJsType>[], callback: any) => void;
declare const useClickListener: (chartType: string, props: IChartOptions, dataPipeLine: DataPipeLine, chartRef: MutableRefObject<Chart>) => ListenerResult;
export { useClickListener, useAreaSelectListener };
