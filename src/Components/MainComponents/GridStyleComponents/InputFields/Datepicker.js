import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Datepicker(props) {

  const [formData, setFormData] = useState({
    id: `datepicker${props.selectedText[0]}`,
    heading: '',
    from_date: '',
    to_date: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const updatedItems = props.gridsBlock.map((item) => {
      item.items.forEach((innerItem) => {
        if (innerItem.id === formData.id.replace(/^\D+/g, '')) {
          if (!innerItem.addedDatePicker) {
            innerItem.addedDatePicker = {};
          }
          innerItem.addedDatePicker = formData;
        }
      });
      return item;
    });
    
    props.setGridsBlock([...updatedItems]);


    setFormData({
      heading: '',
      from_date: '',
      to_date: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6 className='px-3'>Input</h6>
      <div className='blockflex'>
        <Form.Control as="textarea" rows={2} name='heading' value={formData.heading} onChange={handleChange} />
      </div>
      <div className='form-inline mt-2'>
        <label>From date</label>
        <input type="datetime-local" name='from_date' value={formData.from_date} onChange={handleChange} />
      </div>
      <div className='form-inline mt-2'>
        <label>To date</label>
        <input type="datetime-local" name='to_date' value={formData.to_date} onChange={handleChange} />
      </div>

      <div className="button-section mt-2">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}
