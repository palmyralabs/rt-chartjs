import CodeHighlighter from "../../components/syntextHighlighter/CodeHighlighter"


// const chartOptions = `const chartOptions: any = {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//         title: {
//             text: "Bar Chart",
//             display: true
//         },
//         legend: {
//             position: 'top'
//         },
//         datalabels: { // datalabels style
//             anchor: 'end',
//             align: 'end',
//             offset: -4
//         },
//     },
//     scales: {
//         x: {
//             grid: {
//                 display: true
//             }
//         },
//         y: {
//             grid: {
//                 display: true
//             }
//         }
//     },
//     barThickness: 70
// };`;

const arrayStyle = `const arrayChartStyle: IDatasetStyleOptions = {
    props: {
        borderWidth: 2
    },
    style: [{
        backgroundColor: 'rgba(220,53,69,0.5)',
        borderColor: 'rgba(220,53,69,1)',
        hoverBackgroundColor: 'rgba(220,53,69,0.3)',
    }, {
        backgroundColor: 'rgba(255,193,7,0.5)',
        borderColor: 'rgba(255,193,7,0.7)',
        hoverBackgroundColor: 'rgba(255,193,7,0.3)'
    }, {
        backgroundColor: 'rgba(0,123,255,0.5)',
        borderColor: 'rgba(0,123,255,0.7)',
        hoverBackgroundColor: 'rgba(0,123,255,0.3)'
    }, {
        backgroundColor: 'rgba(40,167,69,0.5)',
        borderColor: 'rgba(40,167,69,1)',
        hoverBackgroundColor: 'rgba(40,167,69,0.3)'
    }
  ]
}
`

const namedStyle = `const chartStyle: StyleOptions = [{
    props: {
        borderWidth: 2,
        borderThickness: 20
    },
    style: {
        'January': {
            backgroundColor: 'rgba(220,53,69,0.5)',
            borderColor: 'rgba(220,53,69,1)'
        }, 'February': {
            backgroundColor: 'rgba(40,167,69,0.5)',
            borderColor: 'rgba(40,167,69,1)'
        }, 'March': {
            backgroundColor: 'rgba(0,123,255,0.5)',
            borderColor: 'rgba(0,123,255,0.7)',
        }, 'April': {
            backgroundColor: 'rgba(255,193,7,0.5)',
            borderColor: 'rgba(255,193,7,0.7)'
        }
    }
}]
`

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