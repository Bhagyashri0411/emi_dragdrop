import React from "react";
import IconButton from '@mui/material/IconButton';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CodeIcon from '@mui/icons-material/Code';

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


                    {/* <div className="sidebarheader img mt-4" >
                        <img
                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                            alt=""
                            style={{ width: '40px', height: '40px' }}
                            className="rounded-circle"
                        />
                        <span className={`text ${open ? "d-inline ms-3" : "d-none"}`}>Chet Faker</span>
                    </div>

                    <hr className="" style={{ borderColor: 'white' }} /> */}
                    <ul className="uistyle">
                        <li className={`listyle mt-3 ${clickedDiv === 'div1' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div1')}>

                            <div className="lifirstDiv" onClick={handleAddBox}>
                                <div className="liIcon" >
                                    <CodeIcon />
                                </div>
                                <div className={`litext ${open ? "d-flex" : "d-none"}`}>
                                    <h6 className="h6">
                                        Cards
                                    </h6>
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
                                <div className={`litext ${open ? "d-flex" : "d-none"}`}>
                                    <h6 className="h6">
                                        Grids
                                    </h6>
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

                                <MenuItem onClick={() => props.handleAddGrid(3, 2)}>
                                    Column 3 and row 2
                                </MenuItem>
                                <MenuItem onClick={() => props.handleAddGrid(4, 1)}>
                                    Columns 4 and row 1
                                </MenuItem>
                                <MenuItem onClick={() => props.setOpenGridSection(true)}>
                                    Custom your grid
                                </MenuItem>
                            </Menu>
                        </li>
                    </ul>
                </div>
                <div className="firstDive">
                    <div className="subheading">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleFun}
                            edge="start"
                        >
                            {open ?
                                <ArrowBackIosNewIcon /> : <ArrowForwardIosOutlinedIcon />
                            }
                        </IconButton>
                    </div>
                </div>
            </div >

        </>
    )
})

export default Sidebar;