import TabX from "../components/tab/TabX";
import CodeHighlighter from "../components/syntextHighlighter/CodeHighlighter"


const ChartStoreInterface = `interface ChartStore<T> {
  query(request: QueryRequest): Promise<T[]>;
}`;


const chartStoreFactoryInterface = `class AppStoreFactory implements ChartStoreFactory<any> {
  getChartStore(request: Record<string, string>, endPoint:IEndPoint): ChartStore<any> {
      return new MyChartStore(request, endPoint);
  }
}`;


const CustomChartStore = `
import { AxiosRequestConfig } from "axios";
import { ChartStore, PalmyraAbstractStore, QueryRequest, IEndPoint, QueryParams } from "palmyra-wire";

class MyChartStore extends PalmyraAbstractStore implements ChartStore<any>{
        
    constructor(request: Record<string, string>, endPoint: IEndPoint) {
        super(request, endPoint);        
    }

    query(request: QueryRequest): Promise<any> {
        var urlFormat = this.target + this.queryUrl();
        var url: any = this.formatUrl(urlFormat, request);
        const urlSortParams = (this.convertQueryParams(request));
        const params = { params: urlSortParams };
        return this.getClient().get(url, params)
            .then(response => { return response.data?.result })
            .catch(error => {this.handleError(error, request)});
    }

    convertQueryParams(queryParams: QueryParams):AxiosRequestConfig<any> {
        // Write your own logic to convert Query Params to AxiosRequestConfig
        return {}
    }
}

export { MyChartStore };
`;

// const ArrayComponent = ` <BarChart
//     endPoint={'/api/expense/byVendor'}
//     onPointClick={(d) => OpenDetails(d)}
//     style={arrayChartStyle}  storeFactory={storeFactory}
//     chartOptions={chartOptions}
//     plugins={[ChartDataLabels]}
//     accessor={{
//         xKey: 'name', yKey: 'count', yLabel: 'Data Set', sourceType: "Array"}
//      }} />
// `;

const npmInstallCommand = `npm install palmyra76/palmyra-wire  --save
npm install palmyra76/palmyra-react-chart --save`;

const chartStoreChild = () => <div className="config-container">
  <CodeHighlighter code={ChartStoreInterface} />
</div>;
const exampleImplChild = () => <><div className="config-container">
  <CodeHighlighter code={CustomChartStore} />
</div></>;

const dependency = () => <><div className="config-container">
  <CodeHighlighter code={npmInstallCommand} />
</div></>;

const chartStore = () => <><div className="config-container">
  <CodeHighlighter code={chartStoreFactoryInterface} />
</div></>;

function InitialSetup() {

  return (<div className="chart-container">
    <div className="h1-container"><span className="h1">Add the dependency</span></div>
    <h3># Default installation</h3>
    {/* <div className="config-container">
      <CodeHighlighter code={npmInstallCommand} />
    </div> */}
    <div className="defn-import">
      <TabX labels={['Install']} Children={[dependency]} />
    </div>
    <div>
      <div className="chart-doc-para">1. Define the store to fetch the server data by implementing the interface ChartStore. <br />
        An example implementation using axios and available abstract store is available for reference.</div>
      <div className="config-container">
        <TabX labels={['ChartStore', 'Example Implementation']} Children={[chartStoreChild, exampleImplChild]} />
      </div>
      <div className="chart-doc-para">2. Create a storeFactory with the defined store</div>
      {/* <div className="config-container">
        <CodeHighlighter code={chartStoreFactoryInterface} />
      </div> */}
      <div className="defn-import">
        <TabX labels={['Chart Store']} Children={[chartStore]} />
      </div>
      <div className="chart-doc-para">3. Start using the Charts --- Checkout Examples / APIs</div>
    </div>
  </div>
  )
}

export { InitialSetup }
