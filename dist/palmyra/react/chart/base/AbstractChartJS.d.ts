import { ChartType } from 'chart.js';
import { IAbstractChartOptions } from '../Types';

declare function AbstractChartJS<T extends ChartType>(props: IAbstractChartOptions<T>): import("react/jsx-runtime").JSX.Element;
export { AbstractChartJS };
