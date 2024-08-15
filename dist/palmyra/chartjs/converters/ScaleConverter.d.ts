import { ConverterOptions, dataConverter } from '@palmyralabs/chartjs-utils';
import { IgetPointData } from '../Types';

declare const NoopConverter: (options: ConverterOptions) => dataConverter<any>;
declare const getScalePointData: IgetPointData;
export { NoopConverter, getScalePointData };
