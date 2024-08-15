import CodeHighlighter from '../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "value": 5,
        "month": "January"
    },
    {
        "value": 8,
        "month": "February"
    },
    {
        "value": 2,
        "month": "March"
    },
    {
        "value": 4,
        "month": "April"
    }
]
`;

const keyValueChartData = `{
    "January": 2,
    "February": 1,
    "March": 7,
    "April": 6
}
`;

const keyedObjectChartData = `{
    "January": {
        "value": 8
    },
    "February": {
        "value": 4
    },
    "March": {
        "value": 3
    },
    "April": {
        "value": 7
    }
}
`;

const keylessObjectData = `{
    "one": {
        "value": 3,
        "month": "January"
    },
    "two": {
        "value": 13,
        "month": "February"
    },
    "three": {
        "value": 10,
        "month": "March"
    },
    "four": {
        "value": 4,
        "month": "April"
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

const KeyValueChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keyValueChartData} />
        </div>
    )
}

const KeyedObjectChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keyedObjectChartData} />
        </div>
    )
}

const KeylessObjectChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keylessObjectData} />
        </div>
    )
}

export { ArrayDataConfig, KeyValueChartDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig }