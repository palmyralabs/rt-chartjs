import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { lineArrayChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';

import TabX from "../../tab/TabX";
import { LineChart } from "../../../../src/palmyra/react/chart/LineChart";
import { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup } from "../../../pages/config/lineChartComponent/LineChartConfig";
import { ArrayStyleConfig } from "../../../pages/config/lineChartComponent/LineChartStyleConfig";
import { KeyValueChartDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig, ArrayDataConfig } from "../../../pages/config/ChartDataConfig";
import ChartToastify from "../ChartToastify";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    tension: 0.2,
    plugins: {
        title: {
            display: true,
            text: 'Line Chart'
        },
        legend: {
            position: 'top'
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            offset: -4
        }
    },
    scales: {
        x: {
            // type: 'time',
            // time: {
            //     unit: 'day',
            //     tooltipFormat: 'dd/MM/yyyy HH:mm:ss',
            //     displayFormats: {
            //         // 'default': 'MM/DD/YYYY',
            //         hyphen: 'YYYY-MM-DD',
            //         // month: 'MMM D, YYYY',
            //         // iso: 'YYYY-MM-DDTHH:mm:ss',
            //     },
            // },
            title: {
                display: true,
                text: 'Month'
            },
            // suggestedMin: 1,
            // suggestedMax: 4
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Value'
            },

            // suggestedMin: 1,
            // suggestedMax: 4
        }
    }
};

const SimpleLineCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })


    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Line Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <LineChart
                    endPoint={'/simple/chartData/arrayData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{
                        xKey: 'month', xLabel: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "Array",
                        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
                    }}
                />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Key Value</span></div>
                <LineChart endPoint={'/simple/chartData/keyValueData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "KeyValue" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyValueChartDataConfig, KeyValueComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <LineChart endPoint={'/simple/chartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ yKey: 'value', yLabel: 'Data Set', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectChartDataConfig, KeyedObjectComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <LineChart endPoint={'/simple/chartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    chartOptions={chartOptions}
                    style={lineArrayChartStyle}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'month', yKey: 'value', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeylessObjectChartDataConfig, KeylessObjectComponentSetup, ArrayStyleConfig]} />
            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleLineCharts;