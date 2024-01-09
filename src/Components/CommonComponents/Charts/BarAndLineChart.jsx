import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { MDBBtn } from 'mdb-react-ui-kit';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarAndLineChart = () => {
    const [openEdit, setOpenEdit] = React.useState(false);
    const [options, setOptions] = React.useState({
        backgroundColor: "transparent",
        data: [{
            type: "column",
            name: "Actual Sales",
            showInLegend: false,
            yValueFormatString: "$#,##0",
            axisYType: "primary",
            dataPoints: [
                { x: 1, y: 275 },
                { x: 2, y: 290 },
                { x: 3, y: 220 },
                { x: 4, y: 265 },
                { x: 5, y: 550 },
                { x: 6, y: 380 },
                { x: 7, y: 390 },
                { x: 8, y: 350 },
                { x: 9, y: 370 },
            ],
        }, {
            type: "spline",
            name: "Expected Sales",
            showInLegend: false,
            yValueFormatString: "$#,##0",
            axisYType: "secondary",
            markerType: "none",
            dataPoints: [
                { x: 1, y: 380 },
                { x: 2, y: 390 },
                { x: 3, y: 350 },
                { x: 4, y: 370 },
                { x: 5, y: 420 },
                { x: 6, y: 380 },
                { x: 7, y: 390 },
                { x: 8, y: 350 },
                { x: 9, y: 370 },
            ]
        }],
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top"
        },
        axisX: {
            title: "Primary Y-Axis Label",
            labelFontColor: "#d9d9d9", titleFontColor: "#d9d9d9", titleFontSize: 15,
        },
        axisY: {
            title: "Primary Y-Axis Label",
            titleFontColor: "#d9d9d9",
            gridColor: "transparent", titleFontSize: 15,
            labelFontColor: "#d9d9d9"
        },
        axisY2: {
            title: "Y-Axis Label",
            titleFontColor: "#d9d9d9",
            titleFontSize: 15,
            labelFontColor: "#d9d9d9"
        },
    });



    const handleModifyDataPoint = (index, newValue, rank) => {
        const updatedData = [...options.data];
        updatedData[rank].dataPoints[index].y = parseFloat(newValue);
        setOptions({ ...options, data: updatedData });
    };


    const handleDeleteDataPoint = (seriesIndex, dataPointIndex) => {
        const updatedData = [...options.data];
        updatedData[seriesIndex].dataPoints.splice(dataPointIndex, 1);
        setOptions({ ...options, data: updatedData });
    };

    const handleOpenAndClose = () => {
        setOpenEdit(!openEdit);
    }
    return (
        <div>
            <CanvasJSChart options={options} />
            <MDBBtn onClick={handleOpenAndClose}>
                {openEdit ? "Close" : "Edit"}
            </MDBBtn>
            {openEdit &&
                <div className='d-flex gap-3 mt-2'>
                    <div>
                        <h6 className='text-center text-white'>Column data</h6>
                        {options.data[0].dataPoints.map((dataPoint, index) => (
                            <div key={index}>
                                <span className='text-white me-3'>{dataPoint.x}</span>
                                <input type="number" value={dataPoint.y} onChange={(e) => handleModifyDataPoint(index, e.target.value, 0)} />
                                <button onClick={() => handleDeleteDataPoint(0, index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div>
                            <h6 className='text-center text-white'>Line Data</h6>
                        {options.data[1].dataPoints.map((dataPoint, index) => (
                            <div key={index}>
                                <span className='text-white me-3'>{dataPoint.x}</span>
                                <input type="number" value={dataPoint.y} onChange={(e) => handleModifyDataPoint(index, e.target.value, 1)} />
                                <button onClick={() => handleDeleteDataPoint(1, index)}>Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
};

export default BarAndLineChart;
