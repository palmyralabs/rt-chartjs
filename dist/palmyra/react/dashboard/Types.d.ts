import { ChartStoreFactory } from '@palmyralabs/palmyra-wire';
import { RefObject } from 'react';
interface refreshOptions {
    interval: number;
    needDataRefresh: () => void;
}
interface IDashboardOptions {
    children?: any;
    refreshOptions?: refreshOptions;
    storeFactory?: ChartStoreFactory<any, any>;
    dashboardRef?: RefObject<IDashBoard>;
}
interface IDashBoard {
    setRefreshOptions: (refresh: any) => void;
}
export type { IDashBoard, IDashboardOptions, refreshOptions };
