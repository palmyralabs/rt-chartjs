import CodeHighlighter from "../components/syntextHighlighter/CodeHighlighter";
import TabX from "../components/tab/TabX";
import ChartToastify from "../components/simpleChart/ChartToastify";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { BarChart } from "../../src/main";

const chartOptions: any = {
  maintainAspectRatio: false,
  responsive: true,
  // indexAxis: 'y',
  plugins: {
    title: {
      text: "Bar Chart",
      display: true
    },
    legend: {
      position: 'top'
    },
    datalabels: { // datalabels style
      anchor: 'end',
      align: 'end',
      offset: -4
    },
  },
  scales: {
    x: {
      grid: {
        display: true
      }
    },
    y: {
      grid: {
        display: true
      }
    }
  },
  barThickness: 70
};


const ArrayComponent = `<BarChart
  storeFactory={storeFactory}
  endPoint={'/simple/chartData/arrayData.json'}
  onPointClick={(d) => console.log(d)}
  chartOptions={chartOptions}
  accessor={{
    xKey: 'month', yKey: 'value', yLabel: 'Data Set'
  }}
/>
`;

const ArrayComponentSetup = () => {
  return (
    <div className="config-container">
      <CodeHighlighter code={ArrayComponent} />
    </div>
  )
}

function HomePage() {

  const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

  return (
    <div className="chart-container">
      <div className="h1-container"><span className="h1">Palmyra Chart Demo</span></div>
      <div>Simple React UI Based Chart Library.</div>
      <div className="home-card-container">
        <div className="home-card">
          Abstract the Server/REST communication to fetch the server data.
        </div>
        <div className="home-card">
          Automated Data Conversion from REST data to ChartJS
        </div>
        <div className="home-card">
          Easy to use callbacks for User Interaction.
        </div>
      </div>
      <div className="home-chart">
        <BarChart
          storeFactory={storeFactory}
          onPointClick={(d) => ChartToastify(d)}
          endPoint={'/simple/chartData/arrayData.json'}
          chartOptions={chartOptions}
          accessor={{
            xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array"
          }} />
      </div>
      <TabX labels={['Setup']} Children={[ArrayComponentSetup]} />
    </div>
  )
}

export default HomePage
