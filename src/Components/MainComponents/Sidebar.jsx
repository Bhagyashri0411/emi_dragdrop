import React, { useEffect } from "react";
import IconButton from '@mui/material/IconButton';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CodeIcon from '@mui/icons-material/Code';

import { useState } from "react";


const Sidebar = ({ open, handleFun, handleAddBox, ...props }) => {

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
}

export default Sidebar;