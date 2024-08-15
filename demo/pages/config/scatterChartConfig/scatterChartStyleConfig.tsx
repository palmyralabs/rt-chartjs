import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"


const arrayStyle = `const scatterChartStyle: IDatasetStyleOptions = {
    props: { radius: 7, hoverRadius: 10 },
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        hoverBackgroundColor: 'rgba(220,53,69,0.8)'
    }]
}
`;

const namedStyle = `

`;

const ArrayStyleConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={arrayStyle} />
        </div>
    )
}

const NamedStyleConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={namedStyle} />
        </div>
    )
}

export { ArrayStyleConfig, NamedStyleConfig }