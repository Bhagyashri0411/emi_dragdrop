import React from 'react'
import { Button } from 'react-bootstrap'

const ColumnAndRow = React.memo((props) =>{

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        const columns = document.getElementById('columns_no').value;
        const rows = document.getElementById('rows_no').value;

        props.handleAddGrid(columns, rows)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mt-4'>
                <div className='blockflex'>
                    <span>Columns</span>
                    <input type="number" id='columns_no' />

                </div>
                <div className='blockflex'>
                    <span>Row</span>
                    <input type="number" id='rows_no' />
                </div>

                <div className='d-flex mt-4 justify-content-center'>

                    <Button type='submit'>Contained</Button>
                </div>
            </div>
        </form>
    )
})

export default ColumnAndRow;
