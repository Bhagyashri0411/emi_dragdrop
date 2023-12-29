import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Radiovalue(props) {
    const initialLabelState = {
        id: `radio${String(Date.now()).slice(-3)}`,
        name: '', status: false
    };
    const [labels, setLabels] = useState([initialLabelState]);


    let handleChange = (i, e) => {
        const { name, value } = e.target;
        let newFormLabels = [...labels];

        newFormLabels[i][name] = name === 'status' ? value === 'true' : value;

        if (name === 'status' && value === 'true') {
            newFormLabels = newFormLabels.map((label, index) => ({
                ...label,
                status: index === i ? true : false,
            }));
        }

        setLabels(newFormLabels);
    }

    let addFormLabels = () => {
        setLabels([...labels, initialLabelState])
    }

    // remove 
    let removeFormLabels = (i) => {
        let newLabelsValues = [...labels];
        newLabelsValues.splice(i, 1);
        setLabels(newLabelsValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const heading = document.getElementById("heading").value;

        const mainText = {
            id: `radio${props.selectedText[0]}`,
            heading: heading,
            texts: [...labels]
        }

        const updatedItems = props.gridsBlock.map((item) => {
            item.items.forEach((innerItem) => {
                if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
                    if (!innerItem.addedRadioText) {
                        innerItem.addedRadioText = [];
                    }
                    innerItem.addedRadioText.push(mainText);
                }
            });
            return item;
        });
        props.setGridsBlock([...updatedItems]);

        setLabels([initialLabelState]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h6 className='px-3'>Input</h6>
            <div className='blockflex'>
                <Form.Control as="textarea" rows={2} id='heading' />
            </div>
            <hr />
            {labels.map((label, index) => (
                <div className="form-inline mt-1" key={index}>
                    <label>Label{index + 1}</label>
                    <input type="text" name={`name`} value={label?.name} onChange={(e) => handleChange(index, e)} />
                    <select className='status ms-2' name='status' onChange={(e) => handleChange(index, e)}
                        value={label?.status}
                        disabled={label.status}>
                        <option hidden>status</option>
                        <option value={true}>true</option>
                        <option value={false}>false</option>
                    </select>
                    {
                        index ?
                            <button type="button" className="button remove ms-2" onClick={() => removeFormLabels(index)}>X</button>
                            : null
                    }
                </div>
            ))}
            <div className="button-section mt-2">
                <Button onClick={addFormLabels}>Add</Button>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}