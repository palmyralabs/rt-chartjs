import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<BubbleChart
    endPoint={'/simple/chartData/bubbleChartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'average', yKey: 'value', xLabel: 'month',
        rKey: 'top', yLabel: 'Data Set', sourceType: "Array"
    }}
/>
`;

const KeyedObjectComponent = `<BubbleChart
    endPoint={'/simple/chartData/bubbleChartData/keyedObjectData.json'}
    onPointClick={(d) => console.log(d)}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    accessor={{
        xKey: 'average', yKey: 'value', xLabel: 'month',
        rKey: 'top', yLabel: 'Data Set', sourceType: "Object"
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

const KeyedObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyedObjectComponent} />
        </div>
    )
}

export { ArrayComponentSetup, KeyedObjectComponentSetup }