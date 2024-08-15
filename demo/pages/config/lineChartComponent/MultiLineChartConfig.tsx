import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'month', xLabel: 'month', yKey: ['value', 'min'],
        yLabel: ["Value", "Minimum"], sourceType: "Array"
    }}
/>
`;

const KeyedObjectComponent = ` <MultiLineChart
    endPoint={'/simple/multiLineChartData/keyedObjectData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={MultiLineArrayChartStyles}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{ yKey: ['value', 'min'], yLabel: ["Value", "Minimum"], sourceType: "Object" }}
/>
`;

const KeylessObjectComponent = `<MultiLineChart
    endPoint={'/simple/multiLineChartData/objectChartData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    chartOptions={chartOptions}
    style={MultiLineArrayChartStyles}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'month', xLabel: 'month', yKey: ['value', 'min'],
        yLabel: ["Value", "Minimum"], sourceType: "Object"
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

const KeylessObjectComponentSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeylessObjectComponent} />
        </div>
    )
}


export { ArrayComponentSetup, KeyedObjectComponentSetup, KeylessObjectComponentSetup }