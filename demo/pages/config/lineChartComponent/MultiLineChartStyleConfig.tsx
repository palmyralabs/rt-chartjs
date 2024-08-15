import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"


const arrayStyle = `const MultiLineArrayChartStyles: StyleOptions = [{
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)'
    },
    {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)'
    }]
}]
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