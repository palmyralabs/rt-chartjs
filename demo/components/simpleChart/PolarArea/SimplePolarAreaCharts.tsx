import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { arrayChartStyle, namedChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { PolarAreaChart } from "../../../../src/palmyra/react/chart/PolarAreaChart";
import TabX from "../../../components/tab/TabX";
import {
    ArrayDataConfig, KeyValueChartDataConfig,
    KeyedObjectChartDataConfig, KeylessObjectChartDataConfig
} from "../../../pages/config/ChartDataConfig";
import { ArrayStyleConfig, NamedStyleConfig } from "../../../pages/config/ChartStyleConfig";
import {
    ArrayComponentSetup, KeyValueComponentSetup,
    KeyedObjectComponentSetup, KeylessObjectComponentSetup
} from "../../../pages/config/polarAreaChartConfig/PolarAreaChartConfig";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Polar Area Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimplePolarAreaCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Polar Area Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <PolarAreaChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/arrayData.json'}
                    style={arrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <PolarAreaChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ xKey: 'month', yKey: 'value', xLabel: 'month', yLabel: 'value', sourceType: "KeyValue" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyValueChartDataConfig, KeyValueComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <PolarAreaChart endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ yKey: 'value', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectChartDataConfig, KeyedObjectComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <PolarAreaChart endPoint={'/simple/chartData/objectChartData.json'}
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

export default SimplePolarAreaCharts;