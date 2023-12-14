
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
// import './styles.css'

const InputForm = () => {

    const [formValues, setFormValues] = useState([{ type: "", value: "", label: "" }])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { type: "", value: "", label: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    }

    const inputTypes = [
        'button', 'checkbox', 'datetime-local', 'email', 'file',
        'number', 'password', 'radio',
        'text'
    ];

    return (
        <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
                <div key={index}>

                    <div className="form-inline mt-2" >
                        <label>Input Type</label>
                        <select className='p-2' name='type' onChange={(e) => handleChange(index, e)}>
                            {inputTypes.map(item => (
                                <option value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-inline mt-2'>
                        <label>Input Value</label>
                        <input type="text" name='value' onChange={(e) => handleChange(index, e)} />
                    </div>
                    <div className='form-inline mt-2'>
                        <label>Input Label</label>
                        <input type="text" name='label' onChange={(e) => handleChange(index, e)} />
                    </div>
                    {
                        index ?
                            <button type="button" className="button remove" onClick={() => removeFormFields(index)}>X</button>
                            : null
                    }
                </div>
            ))}
            <div className="button-section mt-2">
                <Button type="button" onClick={() => addFormFields()}>Add</Button>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    )
}

export default InputForm