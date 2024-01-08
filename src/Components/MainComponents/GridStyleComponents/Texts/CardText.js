import React from "react";
import Form from 'react-bootstrap/Form';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import { Button } from "react-bootstrap";
import FontFamiliesList from "../../../CommonComponents/StyleSection/FontFamiliesList";

export const CardText = (props) => {
    const [textAdded, setTextAdded] = React.useState(false);

    const [selectedButtons, setSelectedButtons] = React.useState([]);
    const [color, setColor] = React.useState();
    const [alignMent, setAlignMent] = React.useState('left');

    const handleFontStyles = (buttonName) => {
        const isSelected = selectedButtons.includes(buttonName);
        if (isSelected) {
            const updatedButtons = selectedButtons.filter((btn) => btn !== buttonName);
            setSelectedButtons(updatedButtons);
        } else {
            setSelectedButtons([...selectedButtons, buttonName]);
        }
    };


    // card body
    const addCardBodyText = () => {
        // Extracting values from elements
        const type = document.getElementById('element').value;
        const mainheading = document.getElementById('mainheading').value;
        const fontSize = document.getElementById('fontsizetext').value;
        const fontWeight = document.getElementById("fontweighttext").value;
        const fontFamily = document.getElementById("font-family").value;

        // Creating objText object
        const objText = {
            id: `text${Date.now()}`,
            toptext: mainheading,
            type: type,
            styles: {
                fontSize,
                fontWeight,
                fontstyle: [...selectedButtons],
                color,
                align: alignMent,
                fontFamily,
            }
        };

        // Creating mainText object
        const mainText = {
            id: `text${props.selectedText[0]}`,
            texts: objText
        };


        // Update gridsBlock items
        const updatedItems = props.gridsBlock.map((item) => {
            item.items.forEach((innerItem) => {
                if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
                    if (!innerItem.addedBodyText) {
                        innerItem.addedBodyText = [];
                    }
                    innerItem.addedBodyText.push(mainText.texts);
                }
            });
            return item;
        });

        props.setGridsBlock([...updatedItems]);
    };

    const fontWeightOptions = [];
    for (let i = 300; i <= 800; i += 100) {
        fontWeightOptions.push(
            <option key={i} value={i} style={{ fontWeight: i }}>
                {i}
            </option>
        );
    }



    if (!textAdded) {
        return (
            <div className='mt-3' >

                <hr />
                <div className='blockflex'>
                    <div className='block' style={{ flex: 1 }}>
                        <span>FS</span>
                        <input type="number" id='fontsizetext' />
                    </div>
                    <div className='block'>
                        <span>FW</span>
                        <Form.Select id='fontweighttext'>
                            <option value="300" style={{ fontWeight: 300 }}>300 Light</option>
                            <option value="400" style={{ fontWeight: 400 }}>400 Regular</option>
                            <option value="500" style={{ fontWeight: 500 }}>500 Medium</option>
                            <option value="600" style={{ fontWeight: 600 }}>600 Semi-Bold</option>
                            <option value="700" style={{ fontWeight: 700 }}>700 Bold</option>
                            <option value="800" style={{ fontWeight: 800 }}>800 Extra-Bold</option>
                        </Form.Select>
                    </div>

                </div>
                <div className='blockflex'>
                    <div className='block'>
                        <div
                            className={`boxbackground ${selectedButtons.includes('bold') ? 'select' : ''}`}
                            onClick={() => handleFontStyles('bold')}
                        >
                            <FormatBoldIcon />
                        </div>
                        <div
                            className={`boxbackground ${selectedButtons.includes('italic') ? 'select' : ''}`}
                            onClick={() => handleFontStyles('italic')}
                        >
                            <FormatItalicIcon />
                        </div>
                        <div
                            className={`boxbackground ${selectedButtons.includes('underlined') ? 'select' : ''}`}
                            onClick={() => handleFontStyles('underlined')}
                        >
                            <FormatUnderlinedIcon />
                        </div>
                    </div>
                    <div className={`boxbackground text-end`} >
                        <input type='color' onChange={(e) => setColor(e.target.value)} />
                    </div>
                </div>

                <div className='blockflex'>
                    <div className={`boxbackground ${alignMent === 'left' ? 'select' : ''}`}
                        onClick={() => setAlignMent('left')}>
                        <FormatAlignLeftIcon />
                    </div>
                    <div className={`boxbackground ${alignMent === 'center' ? 'select' : ''}`}
                        onClick={() => setAlignMent('center')}>
                        <FormatAlignCenterIcon />
                    </div>
                    <div className={`boxbackground ${alignMent === 'right' ? 'select' : ''}`}
                        onClick={() => setAlignMent('right')}  >
                        <FormatAlignRightIcon />
                    </div>
                    <div className={`boxbackground ${alignMent === 'justify' ? 'select' : ''}`}
                        onClick={() => setAlignMent('justify')}  >
                        <FormatAlignJustifyIcon />
                    </div>
                </div>

                <div className='d-flex mt-3 justify-content-center'>
                    <Button type='submit' onClick={addCardBodyText}>Edit Text</Button>
                </div>
            </div>
        )
    }
}