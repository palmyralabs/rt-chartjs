import { ChartStoreFactory } from '@palmyralabs/palmyra-wire';
import { MutableRefObject } from 'react';

interface refreshOptions {
    interval: number;
    needDataRefresh: () => void;
}
interface IDashboardOptions {
    children?: any;
    refreshOptions?: refreshOptions;
    storeFactory?: ChartStoreFactory<any>;
    dashboardRef?: MutableRefObject<IDashBoard>;
}
interface IDashBoard {
    setRefreshOptions: (refresh: any) => void;
}
export type { IDashBoard, IDashboardOptions, refreshOptions };
