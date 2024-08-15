import { ISimpleChartOptions } from '../Types';
import { ChartType } from 'chart.js';

declare const SimpleChart: <T extends ChartType>(props: ISimpleChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export { SimpleChart };
