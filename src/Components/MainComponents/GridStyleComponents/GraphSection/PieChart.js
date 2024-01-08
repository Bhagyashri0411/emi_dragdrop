import React from 'react';
import { AgChartsReact } from 'ag-charts-react';

export default function PieChart() {
    const options = {
        data: [
            { label: 'Category 1', value: 25 },
            { label: 'Category 2', value: 35 },
            { label: 'Category 3', value: 20 },
        ],

        series: [
            {
                type: 'pie',
                calloutLabelKey: 'label',
                angleKey: 'value',
                innerRadiusRatio: 0.7,
                innerLabels: [
                    {
                        text: '99',
                        fontWeight: 'bold',
                    },
                ]
            },
        ],
    };
    return (
        <div style={{ width: '100%', height: '300px' }}>
            <h6>PieChart</h6>
            <AgChartsReact options={options} />
        </div>
    );


}
