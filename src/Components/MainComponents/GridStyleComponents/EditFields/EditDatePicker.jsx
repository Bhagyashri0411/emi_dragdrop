import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function EditDatePicker(props) {

    const updatedGrid = [...props.gridsBlock];

    const filterOfDatePickerArray = props.gridsBlock.find(x => x.mainid === props.selectedText[2])
        .items.find(item => item.id === props.selectedText[0]).addedDatePicker;

    const editText = (e) => {
        filterOfDatePickerArray.heading = e.target.value;
        props.setGridsBlock(updatedGrid);
    }
    // delete data
    const deleteData = () => {
        
        const updatedData = props.gridsBlock.map(block => {
            if (block.mainid === props.selectedText[2]) {
                const selectedItem = block.items.find(item => item.id === props.selectedText[0]);
                if (selectedItem && selectedItem.addedDatePicker) {
                    delete selectedItem.addedDatePicker;
                }
            }
            return block;
        });


        props.setGridsBlock(updatedData);
        props.setSelectedText(["", "", "", null]);
    }
    return (
        <>


            <button className='button mb-2' onClick={deleteData} >Delete Data</button>
            <form >
                <h6 className='px-3 mb-0'>Edit Datepicker Data</h6>
                <div className='blockflex'>
                    <Form.Control as="textarea" rows={2} value={filterOfDatePickerArray?.heading} onChange={(e) => editText(e)}
                    />
                </div>
                <hr />

                <div className="button-section mt-2">
                    <Button>Add</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </>
    )
}
