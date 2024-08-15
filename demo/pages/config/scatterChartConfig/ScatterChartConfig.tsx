import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter";

const ArrayComponent = `<ScatterChart
    endPoint={'/simple/multiLineChartData/arrayData.json'}
    storeFactory={storeFactory}
    onPointClick={(d) => console.log(d)}
    style={scatterChartStyle}
    chartOptions={chartOptions}
    plugins={[ChartDataLabels]}
    accessor={{
        xKey: 'value', yKey: 'min', xLabel: 'month',
        yLabel: 'Data Set', sourceType: "Array"
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


export { ArrayComponentSetup }