import React, { useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { MDBBtn } from 'mdb-react-ui-kit';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DonutApp = () => {
    const [openEdit, setOpenEdit] = useState(false);
    const [labels, setLabels] = useState([
        { name: "Gas", y: 15, color:"#bd4f4d" },
        { name: "Liquid", y: 31.52, color:"#4f81bc" }
    ]);

    const handleInputLabelChange = (index, value, name) => {
        const updatedLabels = [...labels];
        updatedLabels[index][name] = value;
        setLabels(updatedLabels);
    };


    const handleLabelDelete = (index) => {
        const updatedLabels = labels.filter((_, i) => i !== index);
        setLabels(updatedLabels);
    };

    const handleAddLabel = () => {
        const newLabel = `Label ${labels.length + 1}`;
        const newLabelObject = {
            name: newLabel,
            y: 0
        };
        setLabels([...labels, newLabelObject]);
    };

    const renderLabels = () => {
        return labels.map((label, index) => (
            <div key={index}>
                <input type='text' value={label.name} onChange={(e) => handleInputLabelChange(index, e.target.value, "name")} />
                <input type="number" value={label.y} onChange={(e) => handleInputLabelChange(index, e.target.value, "y")} />
                <input type="color" value={label.color} onChange={(e) => handleInputLabelChange(index, e.target.value, "color")} />
                <button onClick={() => handleLabelDelete(index)}>Delete</button>
            </div>
        ));
    };

    const total = labels.reduce((acc, item) => acc + parseFloat(item.y), 0).toFixed(2);

    const options = {
        backgroundColor: "transparent",
        subtitles: [{
            text: `${total}%`,
            verticalAlign: "center",
            fontSize: 16,
            dockInsidePlotArea: true,
            fontColor: '#fff'
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{y}",
            indexLabelFontColor: "#fff",
            yValueFormatString: "#,###'%'",
            dataPoints: labels
        }],
        legend: {
            horizontalAlign: "right",
            verticalAlign: "center",
            fontSize: 14,
            fontColor: "#fff",

        },
        toolTip: {
            enabled: false
        }
    };

    const handleOpenAndClose = () => {
        setOpenEdit(!openEdit);
    }

    return (
        <div>
            <div className=' donut'>
                <CanvasJSChart options={options} style={{ height: "100px !important" }} />
            </div>
            <MDBBtn onClick={handleOpenAndClose}>
            {openEdit ? "Close":"Edit"}
            </MDBBtn>
            {openEdit &&
                <div className='mt-3'>
                    {renderLabels()}
                    <div className='mt-1'>
                        <MDBBtn onClick={handleAddLabel}>Add</MDBBtn>
                    </div>
                </div>
            }
        </div>
    );
};

export default DonutApp;
