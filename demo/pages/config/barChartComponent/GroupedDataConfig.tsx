import CodeHighlighter from '../../../components/syntextHighlighter/CodeHighlighter';

const arrayChartData = `[
    {
        "value": 79,
        "month": "January",
        "location": "Tenkasi"
    },
    {
        "value": 95,
        "month": "February",
        "location": "Tenkasi"
    },
    {
        "value": 46,
        "month": "March",
        "location": "Tenkasi"
    },
    {
        "value": 140,
        "month": "April",
        "location": "Tenkasi"
    },
    {
        "value": 67,
        "month": "January",
        "location": "Tirunelveli"
    },
    {
        "value": 54,
        "month": "February",
        "location": "Tirunelveli"
    },
    {
        "value": 37,
        "month": "March",
        "location": "Tirunelveli"
    },
    {
        "value": 134,
        "month": "April",
        "location": "Tirunelveli"
    },
    {
        "value": 61,
        "month": "January",
        "location": "Madurai"
    },
    {
        "value": 24,
        "month": "February",
        "location": "Madurai"
    },
    {
        "value": 36,
        "month": "March",
        "location": "Madurai"
    },
    {
        "value": 112,
        "month": "April",
        "location": "Madurai"
    }
]
`;

const keylessObjectData = `{
    "one": {
         "value": 79,
         "month": "January",
         "location": "Tenkasi"
     },
     "two": {
         "value": 44,
         "month": "February",
         "location": "Tenkasi"
     },
     "three":{
         "value": 30,
         "month": "March",
         "location": "Tenkasi"
     },
     "four":{
         "value": 20,
         "month": "April",
         "location": "Tenkasi"
     },
     "five":{
         "value": 67,
         "month": "January",
         "location": "Tirunelveli"
     },
     "six":{
         "value": 24,
         "month": "February",
         "location": "Tirunelveli"
     },
     "seven":{
         "value": 17,
         "month": "March",
         "location": "Tirunelveli"
     },
     "eight":{
         "value": 54,
         "month": "April",
         "location": "Tirunelveli"
     },
     "nine":{
         "value": 61,
         "month": "January",
         "location": "Madurai"
     },
     "ten":{
         "value": 19,
         "month": "February",
         "location": "Madurai"
     },
     "eleven":{
         "value": 40,
         "month": "March",
         "location": "Madurai"
     },
     "twelve":{
         "value": 34,
         "month": "April",
         "location": "Madurai"
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

const KeylessObjectChartDataConfig = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={keylessObjectData} />
        </div>
    )
}

export { ArrayDataConfig, KeylessObjectChartDataConfig }