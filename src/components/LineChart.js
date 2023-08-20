import React from 'react'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

const Chart = ({data = [], labels = [], title}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        resposive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: title ? true : false,
                text: title
            }
        }
    }
    
    // const last7Days = [
    //     new Date(today.setDate(today.getDate() - 6)),
    //     new Date(today.setDate(today.getDate() - 5)),
    //     new Date(today.setDate(today.getDate() - 4)),
    //     new Date(today.setDate(today.getDate() - 3)),
    //     new Date(today.setDate(today.getDate() - 2)),
    //     new Date(today.setDate(today.getDate() - 1)),
    //     new Date()
    // ]

    const computedData = {
        labels: labels,
        datasets: data
    }

    return (
        <>
            <Line data={computedData} options={options} />
        </>
    )
}

export default Chart