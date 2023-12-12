import React from 'react';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box } from '@mui/material';

export default function Border(props) {
    const [menuEl, setMenuEl] = React.useState(null);
    // const for bordersection box
    const [borderApply, setBorderApply] = React.useState(false);
    // State to manage the selection of boxes
    const [selectedBoxes, setSelectedBoxes] = React.useState([false, false, false, false]);

    const open = Boolean(menuEl);
    const handleClick = (event) => {
        setMenuEl(event.currentTarget);
    };
    const handleClose = () => {
        setMenuEl(null);
    };

    const commonStyles = {
        m: 1,
        borderColor: 'grey',
        width: '1.5rem',
        height: '1.5rem',
    };

    const updatedGrid = [...props.gridsBlock];



    const handleOpenBorderSection = () => {
        setBorderApply(true);
    }

    // add border and width
    const filterOfSubComponent = props.gridsBlock.find(x => x.mainid === props.selectedGrid[1]).items
        .find(item => item.id === props.selectedGrid[0]);


    const handleEditBorderApply = (e, property) => {
        if (property === "width" || property === "noborder") {
            filterOfSubComponent.styles.border[0] = e.target.value;
            filterOfSubComponent.styles.border[1] = e.target.value;
            filterOfSubComponent.styles.border[2] = e.target.value;
            filterOfSubComponent.styles.border[3] = e.target.value;
        }
        else if (property === "radius") {
            filterOfSubComponent.styles[property] = e.target.value;
        }
        else {
            filterOfSubComponent.styles.border[parseInt(property.split('.')[1])] =
                property.includes("5") ? e.target.value : e;
        }

        props.setGridsBlock(updatedGrid);
        console.log(updatedGrid);
    }


    // Function to handle box click
    const handleBoxClick = (index) => {
        const updatedSelection = [...selectedBoxes];

        updatedSelection[index] = !updatedSelection[index];
        setSelectedBoxes(updatedSelection);
        handleEditBorderApply()
    };

    return (
        <>
            <div className='blockflex mt-2'>
                <span>Border</span>
                <div className='block'>
                    <button value={0} className='emptybox'
                        onClick={(e) => handleEditBorderApply(e, "noborder")} />
                    <div className='blankbox' onClick={handleOpenBorderSection} />
                    <MoreHorizIcon onClick={handleClick} />
                </div>
            </div>
            {borderApply && (
                <>
                    {/* border width and color */}
                    <div className='blockflex mt-2'>
                        <span >Color </span>
                        <input type='color'
                            value={filterOfSubComponent?.styles.border[5]}
                            onChange={(e) => handleEditBorderApply(e, 'border.5')}
                        />
                    </div>
                    <div className='blockflex'>
                        <span>Width</span>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={filterOfSubComponent?.styles.border[0]}
                            onChange={(e) => handleEditBorderApply(e, "width")}
                        />
                        <input type='number'
                            min={0}
                            max={100}
                            value={filterOfSubComponent?.styles.border[0]}
                            onChange={(e) => handleEditBorderApply(e, "width")} />
                    </div>
                </>

            )
            }

            <Menu
                anchorEl={menuEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 8,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={selectedBoxes[0] ? 'select' : ''} onClick={() => handleBoxClick(0)}>
                        <Box className="top" sx={{ ...commonStyles, borderTop: 2 }} />
                    </div>
                    <div className={selectedBoxes[1] ? 'select' : ''} onClick={() => handleBoxClick(1)}>
                        <Box className="left" sx={{ ...commonStyles, borderLeft: 2 }} />
                    </div>
                    <div className={selectedBoxes[2] ? 'select' : ''} onClick={() => handleBoxClick(2)}>
                        <Box className="bottom" sx={{ ...commonStyles, borderBottom: 2 }} />
                    </div>
                    <div className={selectedBoxes[3] ? 'select' : ''} onClick={() => handleBoxClick(3)}>
                        <Box className="right" sx={{ ...commonStyles, borderRight: 2 }} />
                    </div>
                </Box>
                <div className='blockflex'>
                    <MenuItem onClick={() => handleEditBorderApply("solid", "border.4")}>
                        <HorizontalRuleSharpIcon />
                    </MenuItem>
                    <MenuItem onClick={() => handleEditBorderApply("double", "border.4")}>
                        <DragHandleSharpIcon />
                    </MenuItem>
                    <MenuItem onClick={() => handleEditBorderApply("dashed", "border.4")}>
                        D
                    </MenuItem>
                </div>
            </Menu>

            <div className='blockflex mt-2'>
                <span>Radius</span>
            </div>
            <div className='blockflex'>
                <div className='block'>
                    <PanoramaFishEyeIcon className='me-2' />
                    <input type='range' className='rangeblock'
                        min={0}
                        max={100}
                        value={filterOfSubComponent?.styles.radius}
                        onChange={(e) => handleEditBorderApply(e, "radius")} />

                    <input type='number'
                        min={0}
                        max={100}
                        value={filterOfSubComponent?.styles.radius}
                        onChange={(e) => handleEditBorderApply(e, "radius")} />
                </div>
            </div>
        </>
    )
}
