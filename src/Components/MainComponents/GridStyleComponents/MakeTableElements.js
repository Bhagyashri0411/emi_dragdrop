import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TableByUrl from './TableFormat/TableByUrl';
import TableByManually from './TableFormat/TableByManually';

export default function MakeTableElements(props) {

    const [openTable, setOpenTable] = React.useState("url");

    const handleOpenTable = (e) => {
        setOpenTable(e)
    }
    return (
        <>
            <div className='blockflex'>
                <button className={`button ${openTable === "url" && "selectButton"}`} onClick={() => handleOpenTable("url")}>Table by Url</button>
                <button className={`button ${openTable === "manually" && "selectButton"}`} onClick={() => handleOpenTable("manually")}>Manually</button>
            </div>
            {openTable === "url" ?
                <TableByUrl {...props} /> : <TableByManually />
            }
        </>
    )
};