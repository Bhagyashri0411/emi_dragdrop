import React from 'react'

export default function TextSection(props) {

  const handleEditChange = (e, id, property) => {
    const updatedBoxes = [...props.boxes];
    const index = updatedBoxes.findIndex((box) => box.id === id);
    if (index !== -1) {
      if (property.includes('text')) {
        updatedBoxes[index].text = e.target.value;
      }
      props.setBoxes(updatedBoxes);
    }
  };

  return (
    <div>
      {props.selectedBox !== null && (
        <div className='blockdisplay'>
          <h6>Edit</h6>
          <textarea value={props.boxes.find((box) => box.id === props.selectedBox).text} onChange={(e) => handleEditChange(e, props.selectedBox, 'text')} />
        </div>
      )}
    </div>
  )
}
