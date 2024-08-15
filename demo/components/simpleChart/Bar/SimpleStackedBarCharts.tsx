import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { groupedArrayStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StackedBarChart } from "../../../../src/palmyra/react/chart/StackedBarChart";
import ChartToastify from "../ChartToastify";
import TabX from "../../../components/tab/TabX";
import { ArrayDataConfig, KeylessObjectChartDataConfig } from "../../../pages/config/barChartComponent/GroupedDataConfig";
import { ArrayComponentSetup, KeylessObjectComponentSetup } from "../../../pages/config/barChartComponent/StackedChartConfig";
import { ArrayStyleConfig } from "../../../pages/config/barChartComponent/GroupedChartStyleConfig";

const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Bar Chart"
        },
        legend: {
            position: 'bottom'
        },
        datalabels: { // datalabels style
            anchor: 'end',
            align: 'end',
            offset: -4
        }
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false
            }
        },
        y: {
            stacked: true,
            grid: {
                display: false
            }
        }
    },
    barThickness: 100
};

const SimpleStackedBarCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Grouped Bar Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <StackedBarChart endPoint={'/simple/chartData/groupChartData/GroupArrayChartData.json'}
                    style={groupedArrayStyle}
                    onPointClick={(d) => ChartToastify(d)}
                    plugins={[ChartDataLabels]} chartOptions={chartOptions}
                    accessor={{
                        xKey: 'location',
                        group: 'month',
                        yKey: 'value',
                        yLabel: 'Month',
                        sourceType: "Array"
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <StackedBarChart endPoint={'/simple/chartData/groupChartData/GroupObjectChartData.json'}
                    style={groupedArrayStyle}
                    onPointClick={(d) => ChartToastify(d)}
                    chartOptions={chartOptions}
                    accessor={{
                        xKey: 'location',
                        group: 'month',
                        yKey: 'value',
                        yLabel: 'Month',
                        sourceType: "Object"
                    }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeylessObjectChartDataConfig, KeylessObjectComponentSetup, ArrayStyleConfig]} />

            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleStackedBarCharts;