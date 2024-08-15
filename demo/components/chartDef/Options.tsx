
const style = (props: any) => {
    const link = "https://www.chartjs.org/docs/latest/charts/" + `${props.type}` + ".html#dataset-properties"

    return (
        <ul>
            <li>props: DataSetProperties
                <ul>
                    <li>borderWidth: number</li>
                    <li>radius: number</li>
                    <li>hoverRadius: number</li>
                    <li>hidden: boolean ... <a href={link}>more</a></li>
                </ul>
            </li>
            <li> style: {<ul>
                <li>backgroundColor: string</li>
                <li>borderColor: string</li>
                <li>hoverBackgroundColor: string</li>
                <li>hoverBorderColor: string</li></ul>}</li>
        </ul>
    )
}

const accessor = () => {
    return (
        <ul>
            <li>xKey: string | number | Date</li>
            <li>yKey: string | number | Date</li>
            <li>xLabel: String</li>
            <li>yLabel: String</li>
            <li>xKeyLabelMap: Record&lt;string, string&gt;</li>
            <li>sourceType: 'Array' | 'Object' | 'KeyValue' | 'noop'</li>
        </ul>
    )
}

const accessorDes = () => {
    return (<>
        <ul>
            <li> x Axis for chart</li>
            <li> y Axis for chart</li>
            <li> Name of the x Axis</li>
            <li> Name of the y Axis</li>
            <li> Label Name Changing</li>
            <li> Type of chart data</li>
        </ul>
    </>
    )
}

const multiLineAccessor = () => {
    return (
        <ul>
            <li>xKey: string </li>
            <li>yKey: string[]</li>
            <li>xLabel: String</li>
            <li>yLabel: String[]</li>
            <li>xKeyLabelMap: Record&lt;string, string&gt;</li>
            <li>sourceType: 'Array' | 'Object'</li>
        </ul>
    )
}


const multiLineAccessorDes = () => {
    return (<>
        <div>Define xAxis, yAxis</div>
        <ul>
            <li> x Axis for chart</li>
            <li> y Axis for chart(string of array)</li>
            <li> Name of the x Axis</li>
            <li> Name of the y Axis(string of array)</li>
            <li> Label Name Changing</li>
            <li> Type of chart data</li>
        </ul>
    </>
    )
}

const radarAccessor = () => {
    return (
        <ul>
            <li>xKey: string </li>
            <li>yKey: string[] | string</li>
            <li>xLabel: String</li>
            <li>yLabel: string[] | string</li>
            <li>xKeyLabelMap: Record&lt;string, string&gt;</li>
            <li>sourceType: 'Array' | 'Object'</li>
        </ul>
    )
}



export { style, accessor, accessorDes, multiLineAccessor, multiLineAccessorDes, radarAccessor }