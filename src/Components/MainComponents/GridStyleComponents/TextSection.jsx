import React from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FontFamiliesList from '../../../StyleSection/FontFamiliesList';
import InputForm from './InputForm';

const TextSection = (props) => {

    const [openText, setOpenText] = React.useState();
    const handleOpenText = (e) => {
        setOpenText(e)
    }
    return (
        <>
            <div className='blockflex'>
                <Button onClick={() => handleOpenText("text")}>Add Text</Button>
                {props.selectPart[1] === "header" && <Button onClick={() => handleOpenText("radio")}>Add Redio</Button>}
            </div>
            {openText === "text" && (
                <Text {...props} />
            )}

            {openText === "radio" && (
                <InputForm {...props} />
            )}
        </>
    );
};

export const Text = (props) => {
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


    const [texts, setText] = React.useState([]);

    const addHeading = () => {
        const type = document.getElementById('element').value;
        const text = document.getElementById('mainheading').value;
        const fontSize = document.getElementById('fontsizetext').value;
        const fontWeight = document.getElementById("fontweighttext").value;
        const fontFamily = document.getElementById("font-family").value;

        const objText = {
            id: Date.now(),
            text: text,
            type: type,
            styles: {
                fontSize, fontWeight, fontstyle: [...selectedButtons],
                color, align: alignMent, fontFamily,
            }
        };
        const mainText = {
            id: `text${props.selectPart[0]}`,
            texts: objText
        }

        setText([...texts, mainText]);

        const updatedItems = props.gridsBlock.map((item) => {
            // if (item.mainid === props.selectPart[0]) {
            item.items.forEach((innerItem) => {
                if (innerItem.id === mainText.id.replace(/^\D+/g, '')) {
                    if (!innerItem.addedText) {
                        innerItem.addedText = [];
                    }
                    innerItem.addedText.push(mainText.texts);
                }
            });
            // }
            return item;
        })

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

    const headings = [];

    for (let i = 1; i <= 6; i++) {
        headings.push(
            <option value={`h${i}`} key={i}>Heading {i}</option>
        )
    }
    return (
        <div className='mt-3' >
            <div className='blockflex'>
                <span>Elements</span>
                <Form.Select id='element'>
                    {headings}
                    <option value={`p`}>Paragraph </option>
                    <option value={`span`}>Span</option>
                </Form.Select>
            </div>
            <h6 className='px-3'>Main Heading</h6>
            <div className='blockflex'>
                <Form.Control as="textarea" rows={2} id='mainheading' />
            </div>
            {props.selectPart[1] === "header" &&
                <>
                    <h6 className='px-3'>Sub Heading</h6>
                    <div className='blockflex'>
                        <Form.Control as="input" rows={2} id='subheading' />
                    </div>
                </>}
            <hr />
            <div className='blockflex'>
                <span>FontFamily</span>
                <Form.Select id='font-family'>
                    <FontFamiliesList />
                </Form.Select>
            </div>
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
            <div className='d-flex mt-1 justify-content-center'>
                <Button type='submit'
                    onClick={() => addHeading(props.selectPart[0])}>Add Text</Button>
            </div>
        </div>
    )
}

export default TextSection;
