import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { arrayChartStyle, namedChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { DoughnutChart } from "../../../../src/palmyra/react/chart/DoughnutChart";
import TabX from "../../../components/tab/TabX";
import { KeyValueChartDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig} from "../../../pages/config/ChartDataConfig";
import { ArrayStyleConfig, NamedStyleConfig } from "../../../pages/config/ChartStyleConfig";
import { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup } from "../../../pages/config/doughnutChartConfig/DoughnutChartConfig";
import { ArrayDataConfig } from "../../../pages/config/lineChartComponent/MultiLineChartDataConfig";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Doughnut Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleDoughnutCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Doughnut Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <DoughnutChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    style={arrayChartStyle}
                    plugins={[ChartDataLabels]}
                    chartOptions={chartOptions}
                    accessor={{
                        xKey: 'month', yKey: ['value', 'min'], sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <DoughnutChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ xKey: 'month', yKey: 'value', xLabel: 'month', yLabel: 'value', sourceType: "KeyValue" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyValueChartDataConfig, KeyValueComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <DoughnutChart
                    endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ yKey: 'value', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectChartDataConfig, KeyedObjectComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <DoughnutChart endPoint={'/simple/chartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    chartOptions={chartOptions}
                    style={arrayChartStyle}
                    accessor={{ xKey: 'month', yKey: 'value', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeylessObjectChartDataConfig, KeylessObjectComponentSetup, ArrayStyleConfig]} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleDoughnutCharts;