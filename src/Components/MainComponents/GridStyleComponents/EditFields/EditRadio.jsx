import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function EditRadio(props) {
  const initialLabelState = {
    id: `radio${String(Date.now()).slice(-3)}`,
    name: '', status: false
  };

  const updatedGrid = [...props.gridsBlock];


  const filterOfRadioArray = props.gridsBlock.find(x => x.mainid === props.selectedText[2]).items.find(item => item.id === props.selectedText[0]).addedRadioText.find(rad => rad.id === props.selectedText[1]);

  const [labels, setLabels] = React.useState(filterOfRadioArray?.texts);


  let addFormLabels = () => {
    setLabels(prevLabels => [
      ...prevLabels,
      initialLabelState
    ]);
  }

  const deleteData = () => {
    const updatedGrid = props.gridsBlock.map(block => {
      if (block.mainid === props.selectedText[2]) {
        const selectedItem = block.items.find(item => item.id === props.selectedText[0]);
        selectedItem.addedRadioText = selectedItem.addedRadioText.filter(rad => rad.id !== props.selectedText[1]);
      }
      return block;
    });

    const newData = updatedGrid.map(item => {
      if (item.items) {
        
        const updatedItems = item.items.map(item => {
          const newItem = { ...item };
          if (newItem.hasOwnProperty('addedRadioText')) {
            delete newItem.addedRadioText;
          }
          return newItem;
        });
        return { ...item, items: updatedItems };
      }
      return item;
    });

    props.setGridsBlock(newData);
    props.setSelectedText(["", "", "", null]);
  }

  // remove 
  let removeFormLabels = (i) => {
    let newLabelsValues = [...labels];
    newLabelsValues.splice(i, 1);
    setLabels(newLabelsValues);

    filterOfRadioArray.texts = newLabelsValues.map(label => ({ ...label }));
    props.setGridsBlock(updatedGrid)
  }

  const editText = (e) => {
    filterOfRadioArray.heading = e.target.value;
    props.setGridsBlock(updatedGrid);
  }
  // edit Radio
  const editRadioText = (e, index) => {
    const { name, value } = e.target;
    let newFormLabels = [...labels];

    newFormLabels[index][name] = name === 'status' ? value === 'true' : value;

    if (name === 'status' && value === 'true') {
      newFormLabels = newFormLabels.map((label, index) => ({
        ...label,
        status: index === index ? true : false,
      }));
    }

    setLabels(newFormLabels);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    filterOfRadioArray.texts = labels.map(label => ({ ...label }));

    props.setGridsBlock(updatedGrid);
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <button className='button' onClick={deleteData}>Delete Data</button>
        <h6 className='px-3'>Edit Heading</h6>
        <div className='blockflex'>
          <Form.Control as="textarea" rows={2} value={filterOfRadioArray?.heading} onChange={(e) => editText(e)} />
        </div>
        <hr />
        {labels.map((label, index) => (

          <div className="form-inline mt-1" key={index}>
            <label>Label{index + 1}</label>
            <input type="text" name={`name`} value={label?.name} onChange={(e) => editRadioText(e, index)} />
            <select className='status ms-2' name='status'
              onChange={(e) => editRadioText(e, index)}
              value={label?.status}
              disabled={label?.status}>
              <option hidden>status</option>
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>

            <button type="button" className="button remove ms-2" onClick={() => removeFormLabels(index)}>X</button>
          </div>
        ))}
        <div className="button-section mt-2">
          <Button onClick={addFormLabels}>Add</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  )
}
