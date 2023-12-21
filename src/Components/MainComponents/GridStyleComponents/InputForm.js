
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Radiovalue from './InputFields/Radiovalue';
// import './styles.css'

const InputForm = (props) => {

    // Define state variables to hold form values
    const [formValues, setFormValues] = useState({
        type: '',
        fromDate: '',
        toDate: '',
        status: '',
        name: '',
        label1: '',
        label2: '',
    });

    // Update form values based on user input
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (formValues.type === 'radio') {
            if (['label1', 'label2', 'name', 'status'].includes(name)) {
                setFormValues({ ...formValues, [name]: value });
            }
        } else {
            setFormValues({ ...formValues, [name]: value });
        }

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


    // let handleSubmit = (event) => {
    //     event.preventDefault();


    //     const mainText = {
    //         id: `radiotext${props.selectedGrid[0]}`,
    //         texts: formValues
    //     }

    //     const updatedItems = props.gridsBlock.map((item) => {
    //         if (item.mainid === props.selectedGrid[1]) {
    //             item.items.forEach((innerItem) => {
    //                 if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
    //                     if (!innerItem.addedInputText) {
    //                         innerItem.addedInputText = [];
    //                     }
    //                     innerItem.addedInputText.push(...formValues);
    //                 }
    //             });
    //         }
    //         return item;
    //     });
    // }

    const filterOfSubComponent = props.gridsBlock.find(x => x.mainid === props.selectedGrid[1]).items
        .find(item => item.id === props.selectedGrid[0]);

    console.log(filterOfSubComponent?.addedRadioText);
    return (
        // <form onSubmit={handleSubmit}>
        <>
            <div className="form-inline mt-2" >
                <label>Input Type</label>
                <select className='p-2' name='type' value={formValues?.type} onChange={(e) => handleChange(e)}>
                    <option hidden>Please select input field</option>
                    <option value="datetime-local">Datetime field</option>
                    <option value="radio">Radio field</option>
                    <option value="select">Dropdown</option>
                </select>
            </div>
            <hr />
            {formValues.type === "datetime-local" && (
                <>
                    <div className='form-inline mt-2'>
                        <label>From date</label>
                        <input type={formValues.type} name='value' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className='form-inline mt-2'>
                        <label>To date</label>
                        <input type={formValues.type} name='label' onChange={(e) => handleChange(e)} />
                    </div>
                </>
            )}
            {
                formValues.type === "radio" && filterOfSubComponent?.addedRadioText === undefined ?
                    <Radiovalue {...props} />
                    :
                    filterOfSubComponent?.addedRadioText !== undefined &&
                        <h6>This block alredy have radio value if you want to update radio select it</h6>
            }

        </>
    )
}

export default InputForm