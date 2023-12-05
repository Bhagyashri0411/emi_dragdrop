import React, { useEffect } from "react";
import IconButton from '@mui/material/IconButton';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

import routes from "../../routes";
import { useState } from "react";


const Sidebar = ({ open, handleFun, handleAddBox }) => {

    const [clickedDiv, setClickedDiv] = useState(null);

    const handleDivClick = (divId) => {
        setClickedDiv(divId);
    };

    // declare const values
    const [opendrop, setOpendrop] = React.useState({});




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
                        {routes.map((item, key) => (<>

                            {

                                <li className={`listyle mt-3 ${clickedDiv === item.div ? 'checked' : ''}`}
                                    onClick={() => handleDivClick(item.div)} key={key}
                                >

                                    <div className="lifirstDiv" onClick={handleAddBox}>
                                        <div className="liIcon" >
                                            {item.icon}
                                        </div>
                                        <div className={`litext ${open ? "d-flex" : "d-none"}`}>
                                            <h6 className="h6">
                                                {item.name}
                                            </h6>
                                            {item.collapse && (opendrop === key ? <ArrowDropUpOutlinedIcon /> : <ArrowDropDownOutlinedIcon />)}
                                        </div>
                                    </div>
                                </li>
                            }

                        </>
                        ))}
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
            </div>

        </>
    )
}

export default Sidebar;