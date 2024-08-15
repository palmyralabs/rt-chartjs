import CodeHighlighter from '../../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "month": "January",
        "value": 10,
        "average": 43,
        "top": 11
    },
    {
        "month": "February",
        "value": 15,
        "average": 45,
        "top": 4
    },
    {
        "month": "March",
        "value": 20,
        "average": 20,
        "top": 20
    },
    {
        "month": "April",
        "value": 17,
        "average": 54,
        "top": 10
    }
]
`;

const KeyedObjectChartData = `{
    "January": {
        "value": 15,
        "average": 12,
        "top": 26
    },
    "February": {
        "value": 21,
        "average": 12,
        "top": 12
    },
    "March": {
        "value": 20,
        "average": 20,
        "top": 20
    },
    "April": {
        "value": 12,
        "average": 14,
        "top": 20
    }
}
`;

const ArrayDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={arrayChartData} />
        </div>
    )
}

const KeyedObjectDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={KeyedObjectChartData} />
        </div>
    )
}


export { ArrayDataConfig, KeyedObjectDataConfig }