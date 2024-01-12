import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CodeIcon from '@mui/icons-material/Code';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState } from "react";


const Sidebar = React.memo(({ open, handleFun, handleAddBox, ...props }) => {

    const [menuEl, setMenuEl] = React.useState(null);

    const menuOpen = Boolean(menuEl);

    const handleClick = (event) => {
        setMenuEl(event.currentTarget);
        props.setSelectedBox(null)
    };
    const handleClose = () => {
        setMenuEl(null);
    };

    const [clickedDiv, setClickedDiv] = useState(null);

    const handleDivClick = (divId) => {
        setClickedDiv(divId);
    };


    return (
        <>

            <div className="topsider">

                <div className="mainSidebar">
                    <ul className="uistyle">
                        <li className={`listyle mt-3 ${clickedDiv === 'div0' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div0')}>

                            <div className="lifirstDiv" onClick={props.handleAddHeader}>
                                <div className="liIcon" >
                                    <DashboardIcon />
                                </div>
                            </div>
                        </li>
                        <li className={`listyle mt-3 ${clickedDiv === 'div1' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div1')}>

                            <div className="lifirstDiv" onClick={handleAddBox}>
                                <div className="liIcon" >
                                    <CodeIcon />
                                </div>
                            </div>
                        </li>

                        {/* Grid */}
                        <li className={`listyle mt-3 ${clickedDiv === 'div2' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div2')}
                        >
                            <div className="lifirstDiv" onClick={handleClick}>
                                <div className="liIcon" >
                                    <AppsOutlinedIcon />
                                </div>
                            </div>
                            <Menu
                                anchorEl={menuEl}
                                id="account-menu"
                                open={menuOpen}
                                onClose={handleClose}
                                onClick={handleClose}
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
                            >

                                <MenuItem onClick={() => props.handleAddGrid(2, 1)}>
                                    Column 2 and row 1
                                </MenuItem>
                                <MenuItem onClick={() => props.handleAddGrid(4, 1)}>
                                    Columns 4 and row 1
                                </MenuItem>
                                <MenuItem onClick={() => props.setSelectedGrid(["open", "open"])}>
                                    Custom your grid
                                </MenuItem>
                            </Menu>
                        </li>
                        <li className={`listyle mt-3 ${clickedDiv === 'div3' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div3')}>

                            <div className="lifirstDiv" onClick={props.handleAddDounghut}>
                                <div className="liIcon" >
                                    <DonutLargeIcon />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
})

export default Sidebar;