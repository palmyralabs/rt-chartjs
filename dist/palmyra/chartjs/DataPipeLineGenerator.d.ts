import { IChartOptions } from './Types';

declare const generateDataPipeLine: (props: IChartOptions) => (d: any) => any;
export { generateDataPipeLine };
