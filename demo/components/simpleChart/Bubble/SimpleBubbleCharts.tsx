import { PalmyraStoreFactory } from "@palmyralabs/palmyra-wire";
import { lineArrayChartStyle } from "../chartColors";
import { Dashboard } from "../../../../src/palmyra/react";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartToastify from "../ChartToastify";
import TabX from "../../../components/tab/TabX";
import { ArrayDataConfig, KeyedObjectDataConfig } from "../../../pages/config/bubbleChartConfig/BubbleChartDataConfig";
import { ArrayComponentSetup, KeyedObjectComponentSetup } from "../../../pages/config/bubbleChartConfig/BubbleChartConfig";
import { BubbleChart } from "../../../../src/palmyra/react/chart/BubbleChart";
import { ArrayStyleConfig } from "../../../pages/config/lineChartComponent/LineChartStyleConfig";


const chartOptions: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: "Bubble Chart",
            display: true
        },
        legend: {
            position: 'top'
        },
    }
};

const SimpleBubbleCharts = () => {
    const storeFactory = new PalmyraStoreFactory({ baseUrl: '/demo/testdata' })

    return (<div className="chart-container">
        <div className="h1-container"><span className="h1"># Simple Bubble Chart</span></div>
        <Dashboard storeFactory={storeFactory}>
            <div>
                <div className="h2-container"><span className="h2">Array</span></div>
                <BubbleChart
                    onPointClick={(d) => ChartToastify(d)}
                    endPoint={'/simple/chartData/bubbleChartData/arrayData.json'}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    plugins={[ChartDataLabels]}
                    accessor={{ xKey: 'average', yKey: 'value', xLabel: 'month', rKey: 'top', yLabel: 'Data Set', sourceType: "Array" }} />

                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[ArrayDataConfig, ArrayComponentSetup, ArrayStyleConfig]} />

                <div className="h2-container"><span className="h2">Keyed Object</span></div>
                <BubbleChart endPoint={'/simple/chartData/bubbleChartData/keyedObjectData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    style={lineArrayChartStyle}
                    chartOptions={chartOptions}
                    accessor={{ xKey: 'average', yKey: 'value', xLabel: 'month', rKey: 'top', yLabel: 'Data Set', sourceType: "Object" }} />
                <TabX labels={['Chart Data', 'Setup', 'Style Options']} Children={[KeyedObjectDataConfig, KeyedObjectComponentSetup, ArrayStyleConfig]} />


                {/* <div className="h2-container"><span className="h2">Keyless Object</span></div>
                <BubbleChart endPoint={'/simple/chartData/bubbleChartData/objectChartData.json'}
                    onPointClick={(d) => ChartToastify(d)}
                    chartOptions={chartOptions}
                    style={lineArrayChartStyle}
                    accessor={{ xKey: 'average', yKey: 'value', xLabel: 'month', rKey: 'top', yLabel: 'Data Set', sourceType: "Object" }} /> */}
            </div>
        </Dashboard>
    </div>
    )
}

export default SimpleBubbleCharts;