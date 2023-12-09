import React from 'react';
import HorizontalRuleSharpIcon from '@mui/icons-material/HorizontalRuleSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DragHandleSharpIcon from '@mui/icons-material/DragHandleSharp';
import Box from '@mui/material/Box';

export default function Border(props) {
    const [menuEl, setMenuEl] = React.useState(null);

    // const for bordersection box
    const [borderApply, setBorderApply] = React.useState(false);
    const updatedBoxes = [...props.boxes];

    const open = Boolean(menuEl);
    const handleClick = (event) => {
        setMenuEl(event.currentTarget);
    };
    const handleClose = () => {
        setMenuEl(null);
    };

    // function for applying border section




    //this is handler but logic is remaining here
    const handleEditBorderNone = (e, id, property) => {
        const index = updatedBoxes.findIndex((box) => box.id === id);
        if (index !== -1) {
            updatedBoxes[index].dimensions.border[parseInt(property.split('.')[1])] = e;
            props.setBoxes(updatedBoxes);
        }
        setBorderApply(false)
    }

    const handleOpenBorderSection = () => {
        setBorderApply(true);
    }

    // add border and width
    const handleEditBorderApply = (e, id, property) => {
        const index = updatedBoxes.findIndex((box) => box.id === id);
        if (index !== -1) {
            updatedBoxes[index].dimensions.border[parseInt(property.split('.')[1])] = e.target.value;
            props.setBoxes(updatedBoxes);
        }
    }



    return (
        <div>
            <div className='blockflex mt-2'>
                <span>Border</span>
                <div className='block'>
                    <button value={0} className='emptybox' onClick={(e) => handleEditBorderApply(e, props.selectedBox, "border.0")} />
                    <div className='blankbox' onClick={handleOpenBorderSection} />
                    {/* <MoreHorizIcon onClick={handleClick} className='cursor'/> */}
                </div>
            </div>
            {borderApply && (
                <>

                    {/* border width and color */}
                    <div className='blockflex mt-3'>
                        <span >Color </span>
                        <input type='color'
                            value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.border[2]}
                            onChange={(e) => handleEditBorderApply(e, props.selectedBox, 'border.2')}
                        />


                    </div>
                    <div className='blockflex mt-2'>
                        <span>Width</span>
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.border[0]}
                            onChange={(e) => handleEditBorderApply(e, props.selectedBox, 'border.0')}
                        />
                        <input type='text'
                            min={0}
                            max={100}
                            value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.border[0]}
                            onChange={(e) => handleEditBorderApply(e, props.selectedBox, 'border.0')} />
                    </div>

                    <h6 className='p-3 pb-0'>Width format</h6>
                    <div className='blockflex '>
                        <MenuItem onClick={() => handleEditBorderNone("solid", props.selectedBox, "border.1")}>
                            <HorizontalRuleSharpIcon />
                        </MenuItem>
                        <MenuItem onClick={() => handleEditBorderNone("double", props.selectedBox, "border.1")}>
                            <DragHandleSharpIcon />
                        </MenuItem>
                        <MenuItem onClick={() => handleEditBorderNone("dashed", props.selectedBox, "border.1")}>
                            D
                        </MenuItem>
                    </div>
                </>

            )
            }

            {/* <Menu
                anchorEl={menuEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
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

                    <Box className="top" sx={{ ...commonStyles, borderTop: 2 }} onClick={() => handleAddBorder("-top", props.selectedBox, "border.3")} />
                    <Box className="left" sx={{ ...commonStyles, borderLeft: 2 }} onClick={() => handleAddBorder("-left", props.selectedBox, "border.3")} />
                    <Box className="bottom" sx={{ ...commonStyles, borderBottom: 2 }}
                        onClick={() => handleAddBorder("-bottom", props.selectedBox, "border.3")} />
                    <Box className="right" sx={{ ...commonStyles, borderRight: 2 }}
                        onClick={() => handleAddBorder("-right", props.selectedBox, "border.3")}
                    />
                </Box>
                <div className='line' style={{ display: 'flex' }}>
                    <MenuItem >
                        <HorizontalRuleSharpIcon />
                    </MenuItem>
                    <MenuItem >
                        <DragHandleSharpIcon />
                    </MenuItem>
                    <MenuItem >
                        D
                    </MenuItem>
                    <MenuItem >
                        E
                    </MenuItem>
                </div>
            </Menu> */}
        </div>
    )
}
