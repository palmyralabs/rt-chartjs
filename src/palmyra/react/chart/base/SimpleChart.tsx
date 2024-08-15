import { useEffect, useImperativeHandle, useRef } from "react";
import { useChartQuery } from "../../hooks/useChartQuery";
import { AbstractChartJS } from "./AbstractChartJS";
import ErrorBoundary from "../../ErrorBoundary";
import { IChartJS, ISimpleChart, ISimpleChartOptions } from "../Types";
import { ChartType } from "chart.js";


const SimpleChart = <T extends ChartType>(props: ISimpleChartOptions<T>) => {
    const currentRef = useRef<ISimpleChart<T>>();

    const chartRef = props.chartRef || useRef<IChartJS>(null);

    const onData = (d: any) => {
        if (null != chartRef.current) {
            chartRef.current.setData(d);
        }
    }

    const { fetch, setFilter, setEndPointVars } = useChartQuery(props, {
        onData
    });

    useImperativeHandle(currentRef, () => {
        return {
            setEndPointOptions(d: any) {
                setEndPointVars(d)
            },
            setFilter(filter: any) {
                setFilter(filter);
            },
            resetFilter() {

            },
            toggleLegend() {

            },
            showDataset() {

            },
            hideDataset() {

            },
            onDataRefresh(rawData) {
                
            },
        }
    }, [])

    useEffect(() => {
        fetch()
    }, []);

    return (
        <ErrorBoundary errorMessage={"Error while rendering " + props.type + " chart"}>
            <div>
                <AbstractChartJS type={props.type} chartRef={chartRef}
                    styleOptions={props.styleOptions} accessorOptions={props.accessorOptions}
                    dataPipeLine={props.dataPipeLine} 
                    chartOptions={props.chartOptions} plugins={props.plugins}
                    onAreaSelect={props.onAreaSelect} onPointClick={props.onPointClick}
                ></AbstractChartJS>
            </div>
        </ErrorBoundary>
    )

}

export { SimpleChart };