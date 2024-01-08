import React from 'react'
import { Button } from 'react-bootstrap';
import {
    MDBCardBody,
    MDBInput,
} from "mdb-react-ui-kit";
export default function MakeDounghnutWithUrl(props) {

    const [url, setUrl] = React.useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(url);
            const res = await response.json();

            const mainText = {
                id: `Doughnut${props.selectedText[0]}`,
                data: res
            }

            if (window.confirm("Are you sure to submit data")) {
                const updatedItems = props.gridsBlock.map((item) => {
                    item.items.forEach((innerItem) => {
                        if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
                            if (!innerItem.addedDoughnutsData) {
                                innerItem.addedDoughnutsData = [];
                            }
                            innerItem.addedDoughnutsData.push(mainText);
                        }
                    });
                    return item;
                });
                props.setGridsBlock([...updatedItems]);
            }
            // props.setGridsBlock([...updatedItems]);

        } catch (error) {
            console.log(error);
        };


    };
    return (
        <form onSubmit={handleSubmit}>
            <MDBCardBody className="px-3 mt-3">
                <MDBInput
                    type="text"
                    label="Enter You Valid url"
                    onChange={(e) => setUrl(e.target.value)}
                />

                <hr />
                {/* <div className='mt-3'>
                    {tasksList.map(task => (
                        <div key={task.id} className='blockgraph justify-content-between border p-2'>
                            <div className='blockgraph'>
                                <div className='iconround' style={{ backgroundColor: task.color }}></div>
                                <span className='text-black'>{task.label} - {task.value}</span>
                            </div>
                        </div>
                    ))}
                </div> */}
            </MDBCardBody>
            <div className="button-section mt-2">
                <Button type="submit" onClick={(e) => handleSubmit(e)}>Submit</Button>
            </div>
        </form>
    )
}
