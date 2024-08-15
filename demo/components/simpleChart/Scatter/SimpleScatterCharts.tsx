
import { scatterChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { ScatterChart } from "../../../../src/palmyra/react/chart/ScatterChart";
import { ArrayDataConfig } from "../../../pages/config/lineChartComponent/MultiLineChartDataConfig";
import TabX from "../../../components/tab/TabX";
import { ArrayComponentSetup } from "../../../pages/config/scatterChartConfig/ScatterChartConfig";
import { ArrayStyleConfig } from "../../../pages/config/scatterChartConfig/scatterChartStyleConfig";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Scatter Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    },
    scales: {
        x: {
            type: 'linear',
        }
    }
};

const SimpleScatterCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Scatter Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <ScatterChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    style={scatterChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'value', yKey: 'min', xLabel: 'month', yLabel: 'Data Set', sourceType: "Array" }}
                />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleScatterCharts;