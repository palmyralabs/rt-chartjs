import { Chart as ChartRef } from 'chart.js';

declare const AreaSelectDrag: {
    id: string;
    start: (chart: ChartRef, _args: any, options: any) => void;
    beforeUpdate: (chart: any, args: any, options: any) => void;
    afterDraw: (chart: any, args: any, options: any) => void;
    setSelection: (chart: any, range?: any[]) => void;
    clearSelection: (chart: any) => void;
};
export { AreaSelectDrag };
