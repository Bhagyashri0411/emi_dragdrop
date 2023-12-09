import React, { useState } from 'react';
import AddGridInGrid from './AddGridInGrid';
import { Button } from 'react-bootstrap';
import Menu from '@mui/material/Menu';

function GridComponent(props) {


    const [menuEl, setMenuEl] = React.useState(false);
    const [nestedGridBlock, setNestedGridBlock] = useState([]);

    const menuOpen = Boolean(menuEl);


    const handleAddNestedGrid = (e, id) => {
        e.preventDefault();

        const columns = parseInt(document.getElementById(`columns_nested_no_${id}`).value);
        const rows = parseInt(document.getElementById(`rows_nested_no_${id}`).value);

        // Calculate total number of cells
        const totalCells = columns * rows;

        // Create an array of items for the grid
        const gridItems = Array.from({ length: totalCells }, (_, index) => ({
            id: `nested ${index + 1}`,
            text: `Nestesd Item ${index + 1}`,
        }));

        const newGrid = {
            mainid: id,
            items: gridItems,
            ncolumns: columns,
            nrows: rows
        };

        setNestedGridBlock([...nestedGridBlock, newGrid]);
        setMenuEl(null);

    }

    return (
        <>
            {props.gridsBlock.map((gridBlock, key) => {
                return (
                    <div
                        className="grid-container"
                        style={{
                            gridTemplateColumns: gridBlock.styles.gridColumn.join(' '),
                            gap: gridBlock.styles.gap,
                            height: `${gridBlock.styles.height[0]}${gridBlock.styles.height[1]}`,
                            margin: `${gridBlock.styles.margin[0]}px ${gridBlock.styles.margin[1]}px ${gridBlock.styles.margin[2]}px ${gridBlock.styles.margin[3]}px`
                        }}
                        key={key}
                    >
                        {
                            gridBlock.items.map((item) =>
                                <div
                                    key={item.id}
                                    className={`grid-item ${props.selectedGrid[0] === item.id ? 'selected' : ''}`}
                                    style={{
                                        border: props.selectedGrid[0] === item.id ? '2px solid red' : '1px solid black',
                                        padding: `${item.styles.padding[0]}px ${item.styles.padding[1]}px`,
                                    }}
                                    onClick={(e) => {
                                        props.setSelectedGrid([item.id, gridBlock.mainid])
                                    }}
                                >

                                    {nestedGridBlock.length !== 0 ?
                                        <AddGridInGrid nestedGridBlock={nestedGridBlock} item={item.id} /> :
                                        <>
                                            {item.text}
                                            {/* <Button onClick={(e) => setMenuEl(e.currentTarget)} >Add</Button>
                                            <Menu
                                                anchorEl={menuEl}
                                                id="account-menu"
                                                open={menuOpen}
                                                PaperProps={{
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',

                                                        '&:before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 8,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateX(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                }}
                                                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                key={item.id}
                                            >

                                                <form onSubmit={(e) => handleAddNestedGrid(e, item.id)}>
                                                    <div className='mt-4'>
                                                        <div className='blockflex'>
                                                            <span>Columns</span>
                                                            <input type="number" id={`columns_nested_no_${item.id}`} min={2} />

                                                            <span>Row</span>
                                                            <input type="number" id={`rows_nested_no_${item.id}`} />
                                                        </div>

                                                        <div className='d-flex mt-4 justify-content-center'>
                                                            <Button type='submit'>Add</Button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </Menu> */}
                                        </>

                                    }

                                </div>
                            )
                        }
                    </div>
                )
            }
            )}
        </>
    );
}

export default GridComponent;
