import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { arrayChartStyle, namedChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { PieChart } from "../../../../src/palmyra/react/chart/PieChart";
import {
    KeyValueChartDataConfig, KeyedObjectChartDataConfig,
    KeylessObjectChartDataConfig, ArrayDataConfig
} from "../../../pages/config/ChartDataConfig";
import { ArrayStyleConfig, NamedStyleConfig } from "../../../pages/config/ChartStyleConfig";
import TabX from "../../../components/tab/TabX";
import {
    ArrayComponentSetup, KeyValueComponentSetup,
    KeyedObjectComponentSetup, KeylessObjectComponentSetup
} from "../../../pages/config/pieChartConfig/PieChartConfig";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    // indexAxis: 'y',
    plugins: {
        title: {
            text: "Pie Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimplePieCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Pie Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <PieChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    style={arrayChartStyle} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <PieChart
                    endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ xKey: 'month', yKey: 'value', xLabel: 'month', yLabel: 'value', sourceType: "KeyValue" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyValueChartDataConfig, KeyValueComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <PieChart
                    endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ yKey: 'value', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectChartDataConfig, KeyedObjectComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <PieChart endPoint={'/simple/chartData/objectChartData.json'}
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

export default SimplePieCharts;