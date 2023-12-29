
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Radiovalue from './InputFields/Radiovalue';
import Datepicker from './InputFields/Datepicker';
// import './styles.css'

const InputForm = (props) => {

    // Define state variables to hold form values
    const [formValues, setFormValues] = useState(null);

    // Update form values based on user input
    const handleChange = (e) => {
        setFormValues(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValues.type === 'radio') {
            const { label1, label2, name, status, type } = formValues;
            const radioFormData = { label1, label2, name, status, type };
            console.log('Radio form data:', radioFormData);
        } else {
            console.log('Form values:', formValues);
        }
    };


    const filterOfSubComponent = props.gridsBlock.find(x => x.mainid === props.selectedText[2]).items
        .find(item => item.id === props.selectedText[0]);

    return (
        // <form onSubmit={handleSubmit}>
        <>
            <div className="form-inline mt-2" >
                <label>Input Type</label>
                <select className='p-2' name='type' value={formValues} onChange={(e) => handleChange(e)}>
                    <option hidden>Please select input field</option>
                    <option value="datetime-local">Datetime field</option>
                    <option value="radio">Radio field</option>
                    <option value="select">Dropdown</option>
                </select>
            </div>
            <hr />
            {formValues === "datetime-local" && filterOfSubComponent?.addedDatePicker === undefined ? <Datepicker {...props} />
                :
                formValues === "radio" && filterOfSubComponent?.addedRadioText === undefined ? <Radiovalue {...props} />
                    :
                    <h6>This block alredy have radio value if you want to update radio select it</h6>
            }

        </>
    )
}

export default InputForm