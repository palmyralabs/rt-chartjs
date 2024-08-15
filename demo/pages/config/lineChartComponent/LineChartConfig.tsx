import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<LineChart
    endPoint={'/simple/chartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'month', xLabel: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
    }}
/>
`;

const KeyValueComponent = `<LineChart
    endPoint={'/simple/chartData/keyValueData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', yKey: 'value', yLabel: "Data Set", sourceType: "KeyValue" }}
/>
`;

const KeyedObjectComponent = `<LineChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={lineArrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: 'value', yLabel: 'Data Set', sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<LineChart
    endPoint={'/simple/chartData/objectChartData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    style={lineArrayChartStyle}
    plugins={[ChartDataLabels]}
    accessor={{ xKey: 'month', yKey: 'value', sourceType: "Object" }} 
/>
`;

const ArrayComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={ArrayComponent} />
        </div>
    )
}

const KeyValueComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyValueComponent} />
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

const KeylessObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeylessObjectComponent} />
        </div>
    )
}


export { ArrayComponentSetup, KeyValueComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup }