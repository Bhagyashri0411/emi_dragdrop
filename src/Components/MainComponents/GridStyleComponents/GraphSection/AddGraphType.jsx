import React from 'react'
import { Button } from 'react-bootstrap';
import {
    MDBBtn,
    MDBCardBody,
    MDBInput,
} from "mdb-react-ui-kit";
import MakeDounghnutWithUrl from './MakeDounghnutWithUrl';
import RandomNumberGenerator from '../../../CommonComponents/RandomNumberGenerator';

export default function AddGraphType(props) {
    const [labelName, setLabelName] = React.useState('');
    const [labelValue, setLabelValue] = React.useState('');
    const [labelColor, setLabelColor] = React.useState('#000000');
    const [tasksList, setTasksList] = React.useState([]);

    const handleAddTask = () => {
        if (labelName.trim() !== '') {
            const newTask = {
                id: Date.now(),
                label: labelName,
                value: labelValue,
                color: labelColor,
                x: 0, y: 0
            };
            setTasksList([...tasksList, newTask]);
            setLabelColor('#000000');
            setLabelName('');
            setLabelValue('')
        }
    };

    const handleRemoveTask = (taskId) => {
        const updatedTasks = tasksList.filter((task) => task.id !== taskId);
        setTasksList(updatedTasks);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        var data = tasksList.flat();

        if (window.confirm("Are you sure to submit data")) {
            const updatedItems = props.gridsBlock.map((item) => {
                if (item.mainid === props.selectedGrid[1]) {
                    const selectedItemId = props.selectedGrid[0];
                    const updatedItems = item.items.map((innerItem) => {
                        if (innerItem.id === selectedItemId) {
                            const updatedAddedDoughnutData = innerItem.addedDoughnutsData
                                ? [...innerItem.addedDoughnutsData, data]
                                : data;
                            return { ...innerItem, addedDoughnutsData: updatedAddedDoughnutData };
                        }
                        return innerItem;
                    });
                    return { ...item, items: updatedItems };
                }
                return item;
            });

            props.setGridsBlock(updatedItems);

        }
    };

    const [openTable, setOpenTable] = React.useState("url");

    const handleOpenTable = (e) => {
        setOpenTable(e)
    }
    return (
        <div>
            <div className='px-3 mt-1'>

                <MDBBtn className={`button ${openTable === "manually" && ""}`}
                    color={`${openTable === "manually" && "info"}`} onClick={() => handleOpenTable("manually")}
                >Manually</MDBBtn>

                <MDBBtn className={`button ms-3 ${openTable === "url" && ""}`}
                    color={`${openTable === "url" && "info"}`} onClick={() => handleOpenTable("url")}
                >By url</MDBBtn>
            </div>
            <hr />
            {openTable === "manually" && (
                <>
                    <MDBCardBody className="px-3 mt-3">
                        <MDBInput
                            type="text"
                            label="New Label Name"
                            value={labelName}
                            onChange={(e) => setLabelName(e.target.value)}
                        />
                        <div className="d-flex justify-content-center align-items-center gap-2 mt-2">
                            <MDBInput
                                type="number"
                                label="Give label value"
                                value={labelValue} onChange={(e) => setLabelValue(e.target.value)}
                            />
                            <input type="color" value={labelColor} onChange={(e) => setLabelColor(e.target.value)} />

                            <div>
                                <MDBBtn color="info" className="px-3 text-center" onClick={handleAddTask}>
                                    Add
                                </MDBBtn>
                            </div>
                        </div>
                        <hr />
                        <div className='mt-3'>
                            {tasksList.map(task => (
                                <div key={task.id} className='blockgraph justify-content-between border p-2'>
                                    <div className='blockgraph'>
                                        <div className='iconround' style={{ backgroundColor: task.color }}></div>
                                        <span className='text-black'>{task.label} - {task.value}</span>

                                    </div>
                                    <MDBBtn type="submit" color="danger" className="px-3 p-2" onClick={() => handleRemoveTask(task.id)}>
                                        x
                                    </MDBBtn>
                                </div>
                            ))}
                        </div>
                        <div className="button-section mt-2">
                            <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
                        </div>

                        <div className='mt-3'>
                        <img src='https://static.infragistics.com/marketing/Website/products/wpf/control-images/charts/doughnut/wpf-doughnut-chart-main.png?v=201802210900' alt='broken' />
                            <img src='http://intellspot.com/wp-content/uploads/2017/12/line-chart-example.png' alt='broken' />
                            <img src='http://intellspot.com/wp-content/uploads/2017/12/bar-chart-example.png' alt="broken" />
                        <img src='http://intellspot.com/wp-content/uploads/2017/12/Pie-chart-example.png' alt='broken' />
                        </div>
                    </MDBCardBody>
                </>
            )}

            {openTable === "url" && <MakeDounghnutWithUrl {...props} />}
        </div>
    )
}
