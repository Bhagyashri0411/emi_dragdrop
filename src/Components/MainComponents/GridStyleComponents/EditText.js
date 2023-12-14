import React from 'react';
import Form from 'react-bootstrap/Form';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FontFamiliesList from '../../../StyleSection/FontFamiliesList';

export default function EditText(props) {


    const updatedGrid = [...props.gridsBlock];

    // get text array
    const filterOfTextArray = props.gridsBlock.find(x => x.mainid === props.selectedText[2]).items
        .find(item => item.id === props.selectedText[1]).addedText.find(text => text.id === props.selectedText[0]);


    const handleFontStyles = (buttonName) => {
        const isSelected = filterOfTextArray.styles.fontstyle.includes(buttonName);
        if (isSelected) {
            const updatedButtons = filterOfTextArray.styles.fontstyle.filter((btn) => btn !== buttonName);
            filterOfTextArray.styles.fontstyle = updatedButtons;
        } else {
            filterOfTextArray.styles.fontstyle = ([...filterOfTextArray.styles.fontstyle, buttonName]);
        }
        props.setGridsBlock(updatedGrid)
    };

    const editHeading = (e, property) => {

        if (property.includes("styles")) {
            filterOfTextArray.styles[property.split('.')[1]] = e.target.value;
        }
        else if (property === "align") {
            filterOfTextArray.styles.align = e;
        }
        else {
            filterOfTextArray[property] = e.target.value;
        }
        props.setGridsBlock(updatedGrid);
    };


    const headings = [];

    for (let i = 1; i <= 6; i++) {
        headings.push(
            <option value={`h${i}`} key={i}>Heading {i}</option>
        )
    };
    return (
        <>
            <div className='mt-4'>
                <div className='blockflex'>
                    <span>Elements</span>
                    <Form.Select id='element' value={filterOfTextArray.type} onChange={(e) => editHeading(e, "type")}>
                        {headings}
                        <option value={`p`}>Paragraph </option>
                        <option value={`span`}>Span</option>
                    </Form.Select>
                </div>


                <h6 className='px-3'>Input</h6>
                <div className='blockflex'>
                    <Form.Control as="textarea" rows={3} id='inputtext' value={filterOfTextArray.text} onChange={(e) => editHeading(e, 'text')} />
                </div>

            </div>
            <hr />
            <div className='blockflex'>
                <span>FontFamily</span>
                <Form.Select id='font-family' value={filterOfTextArray.styles.fontFamily} onChange={(e) => editHeading(e, "styles.fontFamily")}>
                    <FontFamiliesList />
                </Form.Select>
            </div>
            <div className='blockflex'>
                <div className='block' style={{ flex: 1 }}>
                    <span>FS</span>
                    <input type="number" value={filterOfTextArray.styles.fontSize} onChange={(e) => editHeading(e, "styles.fontSize")} />
                </div>
                <div className='block'>
                    <span>FW</span>
                    <Form.Select value={filterOfTextArray.styles.fontWeight} onChange={(e) => editHeading(e, "styles.fontWeight")}>
                        <option value="300" style={{ fontWeight: 300 }} >300 Light</option>
                        <option value="400" style={{ fontWeight: 400 }}>400 Regular</option>
                        <option value="500" style={{ fontWeight: 500 }}>500 Medium</option>
                        <option value="600" style={{ fontWeight: 600 }}>600 Semi-Bold</option>
                        <option value="700" style={{ fontWeight: 700 }}>700 Bold</option>
                        <option value="800" style={{ fontWeight: 800 }}>800 Extra-Bold</option>
                    </Form.Select>
                </div>

            </div>
            <hr />


            <div className='blockflex'>
                <div className='block'>
                    <div
                        className={`boxbackground ${filterOfTextArray.styles.fontstyle.includes('bold') ? 'select' : ''}`}
                        onClick={() => handleFontStyles('bold')}
                    >
                        <FormatBoldIcon />
                    </div>
                    <div
                        className={`boxbackground ${filterOfTextArray.styles.fontstyle.includes('italic') ? 'select' : ''}`}
                        onClick={() => handleFontStyles('italic')}
                    >
                        <FormatItalicIcon />
                    </div>
                    <div
                        className={`boxbackground ${filterOfTextArray.styles.fontstyle.includes('underlined') ? 'select' : ''}`}
                        onClick={() => handleFontStyles('underlined')}
                    >
                        <FormatUnderlinedIcon />
                    </div>
                </div>
                <div className={`boxbackground text-end`} >
                    <input type='color' value={filterOfTextArray.styles.color} onChange={(e) => editHeading(e, 'styles.color')} />
                </div>
            </div>


            <div className='blockflex'>
                <div className={`boxbackground ${filterOfTextArray.styles.align === 'left' ? 'select' : ''}`}
                    onClick={() => editHeading('left', 'align')}>
                    <FormatAlignLeftIcon />
                </div>
                <div className={`boxbackground ${filterOfTextArray.styles.align === 'center' ? 'select' : ''}`}
                    onClick={() => editHeading('center', 'align')}>
                    <FormatAlignCenterIcon />
                </div>
                <div className={`boxbackground ${filterOfTextArray.styles.align === 'right' ? 'select' : ''}`}
                    onClick={() => editHeading('right', 'align')}  >
                    <FormatAlignRightIcon />
                </div>
                <div className={`boxbackground ${filterOfTextArray.styles.align === 'justify' ? 'select' : ''}`}
                    onClick={() => editHeading('justify', 'align')}  >
                    <FormatAlignJustifyIcon />
                </div>
            </div>
        </>
    );
};


