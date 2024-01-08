import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutApp = () => {
    const options = {
        backgroundColor: "transparent",
        subtitles: [{
            text: "71%",
            verticalAlign: "center",
            fontSize: 18,
            dockInsidePlotArea: true,
            fontColor: "#fff"
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{y}",
            indexLabelFontColor: "#fff",
            yValueFormatString: "#,###'%'",
            dataPoints: [
                { name: "Gas", y: 15, backgroundColor: "#FF5733" }, // Change background color for each data point
                { name: "Liquid", y: 31.52, backgroundColor: "#FFC300" }
            ]
        }],
        toolTip: {
            enabled: false
        }
    };

    return (
        <div className='col-md-3'>
            <CanvasJSChart options={options} style={{ height: '100px' }} />

        </div>
    );
};

export default DonutApp;
