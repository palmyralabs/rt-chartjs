
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StaticChart } from '../../../../src/main';

const StaticBarChart = () => {

    return (
        <div>
            Static Bar Chart
            <StaticChart
                type="Bar"
                onPointClick={(d) => console.log(d)}
                chartOptions={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            // labels: {
                            //     usePointStyle: true,
                            //     boxHeight: 5
                            // }
                        },
                        datalabels: { // datalabels style
                            anchor: 'end',
                            align: 'end',
                            offset: -4
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }}
                plugins={[ChartDataLabels]}

                chartData={{
                    labels: ['January', 'February', 'March', 'April'], datasets: [{
                        data: [65, 59, 80, 81], label: 'Count',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)'
                        ],
                        borderWidth: 1

                    }]
                }}

            // accessorOptions={{ xKey: 'name', yKey: 'count' }} 
            />
        </div>
    )
}

export default StaticBarChart;