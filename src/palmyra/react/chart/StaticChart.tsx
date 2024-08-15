import { useImperativeHandle, useRef } from "react";
import ErrorBoundary from "../ErrorBoundary";
import { ChartType } from "chart.js";
import { AbstractChartJS } from "./base/AbstractChartJS";
import { IAbstractChart, IStaticChartOptions } from "./Types";


const StaticChart = <T extends ChartType>(props: IStaticChartOptions<T>) => {

    const currentRef = useRef<IAbstractChart>(null);
    const chartRef = useRef<any>();    

    useImperativeHandle(currentRef, () => {
        return {
            toggleLegend() {

            },
            showDataset() {

            },
            hideDataset() {

            },
            setData(d: any) {

            }
        }
    }, [])

    return (
        <ErrorBoundary errorMessage={"Error while rendering " + props.type + " chart"}>
        <div>
            <AbstractChartJS type={props.type} chartRef={chartRef}
                chartOptions={props.chartOptions}
                plugins={props.plugins} onAreaSelect={props.onAreaSelect}
                onPointClick={props.onPointClick} data={props.chartData}
            ></AbstractChartJS>
        </div>
        </ErrorBoundary>
    )

}

export { StaticChart };