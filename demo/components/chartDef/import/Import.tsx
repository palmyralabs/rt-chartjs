import CodeHighlighter from "../../../components/syntextHighlighter/CodeHighlighter"

const lineImport = `import { LineChart } from "palmyra/LineChart"`

const barImport = `import { BarChart } from "palmyra/BarChart"`

const multiLineImport = `import { MultiLineChart } from "palmyra/MultiLineChart"`

const doughnutImport = `import { DoughnutChart } from "palmyra/DoughnutChart"`

const pieImport = `import { PieChart } from "palmyra/PieChart"`

const polarAreaImport = `import { PolarAreaChart } from "palmyra/PolarAreaChart"`

const radarImport = `import { RadarChart } from "palmyra/RadarChart"`

const groupedBarImport = `import { GroupedBarChart } from "palmyra/GroupedBarChart"`

const stackedBarImport = `import { StackedBarChart } from "palmyra/StackedBarChart"`

const scatterImport = `import { ScatterChart } from "palmyra/ScatterChart"`

const bubbleImport = `import { BubbleChart } from "palmyra/BubbleChart"`


const LineImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={lineImport} />
        </div>
    )
}

const BarImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={barImport} />
        </div>
    )
}

const MultiLineImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={multiLineImport} />
        </div>
    )
}

const DoughnutImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={doughnutImport} />
        </div>
    )
}

const PieImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={pieImport} />
        </div>
    )
}

const PolarAreaImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={polarAreaImport} />
        </div>
    )
}

const RadarImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={radarImport} />
        </div>
    )
}

const GroupedBarImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={groupedBarImport} />
        </div>
    )
}

const StackedBarImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={stackedBarImport} />
        </div>
    )
}

const ScatterImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={scatterImport} />
        </div>
    )
}

const BubbleImportSetup = () => {
    return (
        <div className="config-container">
            <CodeHighlighter code={bubbleImport} />
        </div>
    )
}

export {
    LineImportSetup, BarImportSetup, GroupedBarImportSetup, MultiLineImportSetup,
    RadarImportSetup, PolarAreaImportSetup, PieImportSetup, DoughnutImportSetup,
    StackedBarImportSetup, ScatterImportSetup, BubbleImportSetup
}