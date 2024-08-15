import CodeHighlighter from '../../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "value": 8,
        "min": 4,
        "month": "January"
    },
    {
        "value": 4,
        "min": 6,
        "month": "February"
    },
    {
        "value": 6,
        "min": 9,
        "month": "March"
    },
    {
        "value": 3,
        "min": 9,
        "month": "April"
    }
]
`;


const keyedObjectChartData = `{
    "January": {
        "value": 7,
        "min": 5
    },
    "February": {
        "value": 5,
        "min": 7
    },
    "March": {
        "value": 8,
        "min": 3
    },
    "April": {
        "value": 4,
        "min": 2
    }
}
`;

const keylessObjectData = `{
    "one": {
        "value": 5,
        "min": 4,
        "month": "January"
    },
    "two": {
        "value": 10,
        "min": 8,
        "month": "February"
    },
    "three": {
        "value": 8,
        "min": 6,
        "month": "March"
    },
    "four": {
        "value": 4,
        "min": 5,
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

export { ArrayDataConfig, KeyedObjectChartDataConfig, KeylessObjectChartDataConfig }