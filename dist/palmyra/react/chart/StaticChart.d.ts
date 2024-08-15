import { ChartType } from 'chart.js';
import { IStaticChartOptions } from './Types';

declare const StaticChart: <T extends ChartType>(props: IStaticChartOptions<T>) => import("react/jsx-runtime").JSX.Element;
export { StaticChart };
