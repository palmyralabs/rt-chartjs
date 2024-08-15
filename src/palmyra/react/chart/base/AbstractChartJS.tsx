
import { ChartJsType } from '@palmyralabs/chartjs-utils';
import { Chart as ChartRef, ChartType, ChartOptions, registerables, TimeScale } from 'chart.js';
import { MutableRefObject, useImperativeHandle, useMemo, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import { useClickListener } from '../../../chartjs/ChartEventListener';
import { generateDataPipeLine } from '../../../chartjs/DataPipeLineGenerator';
import { IAbstractChartOptions, IChartJS } from '../Types';


ChartRef.register(...registerables, TimeScale);

const ChartJSTypeRegistry: Partial<Record<ChartJsType, ChartType>> = {
    Line: 'line',
    MultiLine: 'line',
    AreaChart: 'line',
    Bar: 'bar',
    GroupedBar: 'bar',
    StackedBar: 'bar',
    Bubble: 'bubble',
    Doughnut: 'doughnut',
    Pie: 'pie',
    PolarArea: 'polarArea',
    Radar: 'radar',
    Scatter: 'scatter',
    GroupedScatter: 'scatter'
}

const defaultOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        }
    },
};

function AbstractChartJS<T extends ChartType,>(props: IAbstractChartOptions<T>) {
    const defaultPlugins = [];
    const pipeLine = generateDataPipeLine(props);
    const options: any = props.chartOptions || { ...defaultOptions };
    const plugins = props.plugins || defaultPlugins;
    const chartRef = useRef<any>(null);

    const data = pipeLine(props.data);

    const currentRef: MutableRefObject<IChartJS> = props.chartRef || useRef<IChartJS>(null);

    useImperativeHandle(currentRef, () => {
        return {
            clear: () => {
                if (!chartRef.current)
                    return;
                chartRef.current.clear();
            },
            resize: (width?: number, height?: number) => {
                if (!chartRef.current)
                    return;
                chartRef.current.resize(width, height);
            },
            reset: () => {
                if (!chartRef.current)
                    return;
                chartRef.current.reset();
            },
            setData: (d: any) => {
                if (!chartRef.current)
                    return;
                const chart = chartRef.current;
                if (d) {
                    const chartData = pipeLine(d);
                    if (setData) {
                        setData(chartData);
                    }
                    chart.data = chartData;
                    chart.update();
                }
            }
        }
    }, [chartRef]);

    function getProps() {
        return props;
    }

    function getHeight() {
        return '350px';
    }


    const { onClick, setData } = useClickListener(props.type, props, props.dataPipeLine, chartRef);

    const chart = useMemo(() => {
        const props = getProps();
        return <Chart type={ChartJSTypeRegistry[props.type]} ref={chartRef}
            options={options} plugins={plugins} onClick={onClick}
            data={data} height={getHeight()} />
    }, []);

    return (
        <div className="palmyra-chart-container-wrapper">
            {chart}
        </div>
    );
};

export { AbstractChartJS }