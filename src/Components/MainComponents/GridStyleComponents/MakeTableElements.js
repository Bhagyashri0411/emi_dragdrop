import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TableByUrl from './TableFormat/TableByUrl';
import TableByManually from './TableFormat/TableByManually';

export default function MakeTableElements(props) {

    const [openTable, setOpenTable] = React.useState();

    const handleOpenTable = (e) => {
        setOpenTable(e)
    }
    return (
        <>
            <div className='blockflex'>
                <Button onClick={() => handleOpenTable("url")}>Table by Url</Button>
                <Button onClick={() => handleOpenTable("manually")}>Manually</Button>
            </div>
            {openTable === "url"?
            <TableByUrl {...props} />:<TableByManually/>
            }
        </>
    )
};