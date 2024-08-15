import { mergeDeep } from "@palmyralabs/chartjs-utils";
import { IEndPoint, IEndPointOptions, PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { useEffect } from "react";
import { DataTransformer } from "../../chartjs/Types";
import { storeBacked } from "../chart/Types";

interface IDataManagerInput extends storeBacked {
  filter?: any
  storeOptions: {
    endPoint: IEndPoint
    endPointOptions?: IEndPointOptions
    hasLayout?: boolean
  }
  onData: (data: any) => void,
  onError?: (error?: any) => void
  transformData?: DataTransformer<any>
}


const useChartDataManager = (props: IDataManagerInput) => {
  const storeFactory = new PalmyraStoreFactory({ baseUrl: "/api/palmyra" });

  var storeRequest: any = {};
  mergeDeep(storeRequest, props.storeOptions);

  const store = storeFactory.getChartStore(storeRequest, props.storeOptions.endPoint);

  useEffect(() => {
    fetchData(props.filter);
  }, [props.filter]);

  const transform = (d: any) => {
    if (props.transformData) {
      const r = props.transformData(d);
      return r;
    }
    return d;
  }

  const onFetch = (d: any) => {
    props.onData(transform(d));
  }

  const onFetchError = (e: any) => {
    if (props.onError) {
      props.onError(e);
      return;
    }
    props.onData(null);
  }

  const fetchData = (filter?: any) => {
    store.query({ filter: filter, limit: 2000 })
      .then(d => onFetch(d))
      .catch((e) => onFetchError(e));
  }

  return { fetchData, transform };
}


export { useChartDataManager }