import { arrayChartStyle, namedChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import { RadarChart } from "../../../../src/palmyra/react/chart/RadarChart";
import TabX from "../../../components/tab/TabX";
import { KeyValueChartDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig } from "../../../pages/config/ChartDataConfig";
import { ArrayStyleConfig, NamedStyleConfig } from "../../../pages/config/ChartStyleConfig";
import { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup } from "../../../pages/config/radarChartConfig/RadarChartConfig";
import { ArrayDataConfig } from "../../../pages/config/lineChartComponent/MultiLineChartDataConfig";
import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Radar Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleRadarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Radar Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>

                <div className="h2-container"><span className="h2">Array</span></div>
                <RadarChart
                    endPoint={'/simple/multiLineChartData/arrayData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={arrayChartStyle} chartOptions={chartOptions} plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'month', yKey: ['value', 'min'], yLabel: ['Data Set 1', 'Data Set 2'], sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <RadarChart
                    endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "KeyValue" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyValueChartDataConfig, KeyValueComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <RadarChart
                    endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={namedChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ yKey: 'value', yLabel: 'Data Set', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectChartDataConfig, KeyedObjectComponentSetup, NamedStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <RadarChart
                    endPoint={'/simple/chartData/objectChartData.json'}
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

export default SimpleRadarCharts;