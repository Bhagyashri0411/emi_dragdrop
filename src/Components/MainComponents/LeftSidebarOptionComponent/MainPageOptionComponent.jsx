import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import SquareIcon from '@mui/icons-material/Square';

export default function MainPageOptionComponent(props) {
    const [selectPage, setSelectPage] = useState(null);
    const [openDiv, setOpenDiv] = useState(false);
    const [bgColor, setBgColor] = useState("#222233");

    useEffect(() => {
        // Set initial background color
        const property = {
            id: Date.now(),
            num: { margin: [10, 5], padding: [15, 2] },
            string: { bg: bgColor },
        }
        props.setPropertyPage(property);
    }, [bgColor, props]);

    const handleEditBack = (e, id, name) => {
        const updatePage = { ...props.propertyPage };
        if (name === "empty") {
            updatePage.string.bg = e;
            setOpenDiv(false);
            setBgColor(e);
        } else if (name === "fill") {
            setOpenDiv(true);
        } else if (name === "fillbg") {
            updatePage.string.bg = e.target.value;
            setBgColor(e.target.value);
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
                <h6>Background</h6>
                <div className='block'>
                    <div className={`boxbackground ${selectPage === 'div1' ? 'select' : ''}`}
                        onClick={() => handleEditBack('transparent', 'div1', 'empty')}
                    >
                        <DisabledByDefaultOutlinedIcon />
                    </div>
                    <div className={`boxbackground ${selectPage === 'div2' ? 'select' : ''}`}
                        onClick={() => handleEditBack("", 'div2', "fill")}
                    >
                        <SquareIcon />
                    </div>
                </div>
            </div>

            {openDiv &&
                <div className='blockflex'>
                    <span>Color</span>
                    <input type='color'
                        value={bgColor}
                        onChange={(e) => handleEditBack(e, '', 'fillbg')}
                    />
                </div>
            }
        </div>
    )
}
