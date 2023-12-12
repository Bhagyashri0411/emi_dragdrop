import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ArcElement, Chart } from "chart.js";


Chart.register(ArcElement);


export default function DoughnutGraph() {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 5
        }]
    };

    return <Doughnut data={data}  />
}