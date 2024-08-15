import Grid from "../grid/Grid";
import { DatasetProperties } from "../grid/Types"
import { style } from "./BarChartDefn";
import { accessor, accessorDes } from "./Options";
import { StackedBarImportSetup } from "./import/Import";

const StackedBarChartDefn = () => {

    const data: DatasetProperties = [
        { property: 'endPoint *', type: 'string', description: 'The API url of the chart' },
        { property: 'storeFactory', type: 'ChartStoreFactory<any>', description: 'Define the store to fetch the server data.' },
        { property: 'onPointClick', type: 'Function', description: 'Click the point to get data' },
        {
            property: 'style', type: style({ type: "bar" }),
            description: 'This property is used to apply the style to the chart. If no style is assigned, random colors will be assigned.'
        },
        { property: 'chartOptions', type: 'Chart js Options', description: 'Chart Options are same as chart.js library options' },
        { property: 'plugins', type: '', description: '' },
        { property: 'accessor', type: accessor(), description: accessorDes() },
        { property: 'setEndPointOptions', type: 'Function', description: 'Set Endpoint variables.' },
        { property: 'setFilter', type: 'Function', description: 'Set Filter for chart.' },
        { property: 'resetFilter', type: 'Function', description: 'Reset the Filter.' },
        { property: 'toggleLegend', type: 'Function', description: 'Toggle Chart Legend.' },
        { property: 'showDataset', type: 'Function', description: 'Show Chart Data set.' },
        { property: 'hideDataset', type: 'Function', description: 'Hide Chart Data set.' },
        { property: 'onDataRefresh', type: 'Function', description: 'Refresh the Chart Data.' }

    ]

    return (
        <div className="chart-container">
            <Grid data={data} header="# Stacked Bar Chart Api" import={StackedBarImportSetup} />
        </div>
    )

}

export default StackedBarChartDefn;