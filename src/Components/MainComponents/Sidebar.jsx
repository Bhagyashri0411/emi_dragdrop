import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import CodeIcon from '@mui/icons-material/Code';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState } from "react";


const Sidebar = React.memo(({ open, handleFun, handleAddBox, ...props }) => {

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
                    </ul>
                </div>
            </div>

        </>
    )
})

export default Sidebar;