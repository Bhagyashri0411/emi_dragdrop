import { Equal, PanelRightOpen } from "lucide-react";
import React from "react";
import { useState } from "react";


const Sidebar = (props) => {

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

                            <div className="lifirstDiv border" onClick={props.handleAddHeader}>
                                <div className="liIcon text-white" >
                                    <Equal />
                                </div>
                            </div>
                        </li>
                        <li className={`listyle mt-3 ${clickedDiv === 'div1' ? 'checked' : ''}`}
                            onClick={() => handleDivClick('div1')}>
                            <div className="lifirstDiv border" onClick={props.handleAddSidebar}>
                                <div className="liIcon text-white" >
                                    <PanelRightOpen />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar;