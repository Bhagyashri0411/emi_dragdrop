import React from 'react';
import "./Card.css";

export default function CardHeader(props) {

    return (
        <>
            <div className={`text ${props.selectedText[3] === "header" && props.selectedText[1] === props.cardheader.textid && 'selected'}`}
                style={{
                    fontStyle: props.cardheader?.styles.fontstyle.includes('italic') ? 'italic' : 'normal',
                    textDecoration: props.cardheader?.styles.fontstyle.includes('underlined') ? 'underline' : 'none',
                    color: props.cardheader?.styles.color,
                    textAlign: props.cardheader?.styles.align,
                    fontFamily: props.cardheader?.styles.fontFamily,

                }}
                onClick={(e) => {
                    e.stopPropagation();
                    props.setSelectedText([props.item.id, props.cardheader.textid, props.gridBlock.mainid, "header"]);
                }}
            >

                <props.cardheader.type
                    style={{
                        fontSize: `${props.cardheader?.styles.fontSize}px`,
                        fontWeight: props.cardheader?.styles.fontstyle.includes('bold') ? 'bold' : props.cardheader?.styles.fontWeight,
                        margin: 0
                    }}
                > {props.cardheader?.toptext} </props.cardheader.type>
                <p className='cardsubheading'>{props.cardheader?.subText}</p>
            </div>
        </>
    )
}


export const CardHeaderRadioShow = (props) => {

    return (
        <div className={`cardheaderbox ${props.selectedText[3] === "header" && props.selectedText[1] === props.radio.id && "selected"}`}
            onClick={(e) => {
                e.stopPropagation();
                props.setSelectedText([props.item.id, props.radio.id, props.gridBlock.mainid, "header"]);
            }}
        >
            <h5>{props.radio.heading}</h5>
            <div className='cardheaderbox'>
                {props.radio.texts.map((input, key) => (
                    <div className='radio' key={key}>
                        <input type="radio" name={props.radio.id} checked={input?.status} />
                        <span>
                            {input?.name}
                        </span>
                    </div>
                )
                )}
            </div>
        </div>
    )
}


export const CardHeaderDatePickerShow = (props) => {

    const updatedGrid = [...props.gridsBlock];

    var filterOfDatePickerArray;

    if (props.selectedText[0] !== "") {
        filterOfDatePickerArray = props.gridsBlock.find(x => x.mainid === props.selectedText[2])
            .items.find(item => item.id === props.selectedText[0]).addedDatePicker;
    }
    const handleDateChange = (e, fieldName) => {
        filterOfDatePickerArray[fieldName] = e.target.value;
        props.setGridsBlock(updatedGrid); 
    };

    return (

        <div className={`cardheaderbox ${props.selectedText[3] === "header" && props.selectedText[1] === props.datepicker.id && "selected"}`}
            onClick={(e) => {
                e.stopPropagation();
                props.setSelectedText([props.item.id, props.datepicker.id, props.gridBlock.mainid, "header"]);
            }}
        >
            <h5>{props.datepicker.heading}</h5>
            <div className='cardheaderbox'>
                <input
                    type="datetime-local"
                    className='datefromto'
                    value={props.datepicker.from_date}
                    onChange={(e) => handleDateChange(e, 'from_date')}
                />
                <input
                    type="datetime-local"
                    className='datefromto'
                    value={props.datepicker.to_date}
                    onChange={(e) => handleDateChange(e, 'to_date')}
                />
            </div>

        </div>
    )
}