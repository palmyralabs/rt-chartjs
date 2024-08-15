import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={arrayChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'month', yKey: 'value', yLabel: 'Data Set', sourceType: "Array",
        xKeyLabelMap: { "jan": "January", "feb": "February", "mar": "March", "apr": "April" }
    }}
/>
`;

const KeyValueComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/keyValueData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{
        xKey: 'month', yKey: 'value', xLabel: 'month',
        yLabel: 'value', sourceType: "KeyValue"
    }}
/>
`;

const KeyedObjectComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/keyedObjectData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={namedChartStyle}
    chartOptions={chartOptions}
    accessor={{ yKey: 'value', sourceType: "Object"}}
/>
`;

const KeylessObjectComponent = `<PolarAreaChart
    endPoint={'/simple/chartData/objectChartData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    style={arrayChartStyle}
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