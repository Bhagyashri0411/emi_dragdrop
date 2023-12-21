import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export default function TableByManually() {
    const [columns, setColumns] = useState('');
    const [rows, setRows] = useState('');
    const [columnInputFields, setColumnInputFields] = useState([]);
    const [rowInputFields, setRowInputFields] = useState([]);

    const handleColumnsChange = (e) => {
        setColumns(e.target.value);
    };
    //set targeted value

    const handleRowsChange = (e) => {
        setRows(e.target.value);
    };
    const handleColumnInputChange = (e, colIndex) => {
        const updatedColumnInputFields = [...columnInputFields];
        updatedColumnInputFields[colIndex].value = e.target.value;

        setColumnInputFields(updatedColumnInputFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prevent form from submittion

        const newColumnInputFields = Array.from({ length: columns }, (_, colIndex) => ({
            id: `col_${colIndex}`,
            label: `Column ${colIndex + 1}`,
            value: '',
        }));

        setColumnInputFields(newColumnInputFields);


        const newRowInputFields = Array.from({ length: rows }, (_, rowIndex) => ({
            id: `row_${rowIndex}`,
            label: `Row ${rowIndex + 1}`,
            value: '',
        }));
        setRowInputFields(newRowInputFields);
    };

    const handlePrintValues = () => {
        const columnValues = columnInputFields.map(col => ({ column: col.value }));
        console.log('Column values:', columnValues);
      }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <div className="blockflex">
                        <span>Columns:</span>
                        <input
                            type="number"
                            value={columns}
                            onChange={handleColumnsChange}
                            style={{ margin: '5px', padding: '5px' }}
                        />
                    </div>
                    <div className="blockflex">
                        <span>Rows:</span>
                        <input
                            type="number"
                            value={rows}
                            onChange={handleRowsChange}
                            style={{ margin: '5px', padding: '5px' }}
                        />
                    </div>

                    {columnInputFields.map((col, colIndex) => (
                        <div key={col.id} className="blockflex">
                            <span>{col.label}</span>
                            <input
                                type="text"
                                id={col.id}
                                style={{ margin: '5px', padding: '5px' }}
                                value={col.value}
                                onChange={(e) => handleColumnInputChange(e, colIndex)}
                            />
                        </div>
                    ))}

                    {rowInputFields.map((row) => (
                        <div key={row.id} className="blockflex">
                            <span>{row.label}</span>
                            <input
                                type="text"
                                id={row.id}
                                style={{ margin: '5px', padding: '5px' }}
                                value={row.value}
                            />
                        </div>
                    ))}

                    <div className="d-flex mt-4 justify-content-center">
                        <Button type="submit" style={{ margin: '10px' }}>
                            Submit
                        </Button>
                        <Button onClick={handlePrintValues} style={{ margin: '10px' }}>
                            Print Values
                        </Button>
                    </div>
                </div>
            </form>
        </>
    )
}
