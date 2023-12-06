import React from 'react'

export default function TextSection(props) {

  const handleEditChange = (e, id, property) => {
    const updatedBoxes = [...props.boxes];
    const index = updatedBoxes.findIndex((box) => box.id === id);
    if (index !== -1) {
      if (property.includes('textstyle')) {
        updatedBoxes[index].textstyle[property.split('.')[1]] = e.target.value;
      }
      props.setBoxes(updatedBoxes);
    }
  };

  return (
    <div>
      {props.selectedBox !== null && (
        <>

          <div className='blockdisplay'>
            <h6>Edit Text</h6>
            <textarea value={props.boxes.find((box) => box.id === props.selectedBox).textstyle.text} onChange={(e) => handleEditChange(e, props.selectedBox, 'textstyle.text')} />
          </div>

          <div className='blockflex'>
            <div className='block'>
              <span>FS</span>
              <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).textstyle.fontSize} onChange={(e) => handleEditChange(e, props.selectedBox, 'textstyle.fontSize')} />
            </div>
            <div className='block'>
              <span>FW</span>
              <select onChange={(e) => handleEditChange(e, props.selectedBox, 'textstyle.fontWeight')}
                value={props.boxes.find((box) => box.id === props.selectedBox).textstyle.fontWeight}>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
              </select>
            </div>

          </div>

          <hr />
          <h6>Color format</h6>
          <div className='blockflex mt-2'>

            <span>Color =</span>
            <input
              type='color'
              value={props.boxes.find((box) => box.id === props.selectedBox).textstyle.tcolor}
              onChange={(e) => handleEditChange(e, props.selectedBox, 'textstyle.tcolor')}
            />
          </div>
        </>

      )}
    </div>
  )
}
