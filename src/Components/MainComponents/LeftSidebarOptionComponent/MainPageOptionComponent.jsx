import React, { useState } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ImageIcon from '@mui/icons-material/Image';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import SquareIcon from '@mui/icons-material/Square';
import { MenuItem } from '@mui/material';

export default function MainPageOptionComponent(props) {

    const [selectPage, setSelectPage] = useState(null);
    const [openDiv, setOpenDiv] = useState(null);

    React.useEffect(() => {
        // main page
        const property = {
            id: Date.now(),
            num: { margin: [10, 5], padding: [15, 2] },
            string: { bg: "#222233" },
        }
        props.setPropertyPage(property);
    }, [])

    const handleEditBack = (e, id, name) => {
        const updatePage = { ...props.propertyPage }; // Create a copy of the state object
        if (name === "empty") {
            updatePage.string = { ...updatePage.string, bg: e };
            setOpenDiv(false)
        }
        else if (name === "fillbg") {
            updatePage.string = { ...updatePage.string, bg: e.target.value };
        }
        else{
            setOpenDiv(true);
        }

        props.setPropertyPage(updatePage);

        setSelectPage(id);
    }

    return (
        <div className='stylecomponet'>

            <div className="subheading">
                <div className='icon' onClick={props.handleFun}>
                    {props.open ?
                        <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
                    }
                </div>


            </div>
            <div className='blockflex'>
                <h6 >Background</h6>

                <div className='block'>
                    <div className={`boxbackground ${selectPage === 'div1' ? 'select' : ''}`}
                        onClick={() => handleEditBack('transparent', 'div1', 'empty')}
                    >
                        <DisabledByDefaultOutlinedIcon />
                    </div>
                    <div className={`boxbackground ${selectPage === 'div2' ? 'select' : ''}`}
                        onClick={() => handleEditBack("", 'div2', "fill")}>
                        <SquareIcon />
                    </div>
                </div>

            </div>
            {openDiv &&
                <>
                    {/* border width and color */}
                    <div className='blockflex'>
                        <span >Color </span>
                        <input type='color'
                            value={props.propertyPage.string.bg}
                            onChange={(e) => handleEditBack(e, '', 'fillbg')}
                        />


                    </div>

                </>

            }

        </div>
    )
}
