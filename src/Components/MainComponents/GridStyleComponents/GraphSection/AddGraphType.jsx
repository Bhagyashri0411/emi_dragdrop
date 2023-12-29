import React from 'react'
import DoughnutChart from './DoughnutChart';
import { Button, Form } from 'react-bootstrap';

export default function AddGraphType(props) {

    const initialLabelState = {
        id: `pie${String(Date.now()).slice(-3)}`,
        label: '',
        value:''
    };
    const [doughnuts, setDoughnuts] = React.useState([initialLabelState]);

    let addFormDoughnuts = () => {
        setDoughnuts([...doughnuts, initialLabelState])
    }

    // remove 
    let removeFormDoughnuts = (i) => {
        let newValues = [...doughnuts];
        newValues.splice(i, 1);
        setDoughnuts(newValues)
    }

    let handleChange = (i, e) => {
        const { name, value } = e.target;
        let newFormLabels = [...doughnuts];

        newFormLabels[i][name] = value;

        setDoughnuts(newFormLabels);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const heading = document.getElementById("heading").value;

        const mainText = {
            id: `Doughnut${props.selectedText[0]}`,
            heading: heading,
            data: [...doughnuts]
        }

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

        setDoughnuts([initialLabelState]);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h6 className='px-3'>Input</h6>
                <div className='blockflex'>
                    <Form.Control as="input" id='heading' />
                </div>
                <hr />
                {doughnuts.map((doughnut, index) => (
                    <div className="form-inline mt-1" key={index}>
                        <label>Label{index + 1}</label>
                        <Form.Control as="input" type="text" name={`label`} value={doughnut?.label} onChange={(e) => handleChange(index, e)} />
                        <Form.Control as="input" type="number" name={`value`} value={doughnut?.value} onChange={(e) => handleChange(index, e)} />

                        {
                            index ?
                                <button type="button" className="button remove ms-2" onClick={() => removeFormDoughnuts(index)}>X</button>
                                : null
                        }
                    </div>
                ))}
                <div className="button-section mt-2">
                    <Button onClick={addFormDoughnuts}>Add</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
            {/* <DoughnutChart /> */}
        </div>
    )
}
