import React from 'react'

export default function BoxComponent(props) {


    const handleMouseDown = (e, id) => {
        e.preventDefault();
        props.setSelectedBox(id);
        props.setDragging(true);
        const selected = props.boxes.find((box) => box.id === id);
        props.setOffset({
            x: e.pageX - selected.position.x,
            y: e.pageY - selected.position.y,
        });
    };

    return (
        <>
            {props.boxes.map((box, key) => (
                <>
                    <div
                        key={key}
                        className={`boxcard ${props.selectedBox === box.id ? 'selected' : ''}`}
                        style={{
                            top: box.position.y,
                            left: box.position.x,
                        }}
                        onClick={() => props.setSelectedBox(box.id)}
                        onMouseDown={(e) => handleMouseDown(e, box.id)}
                    >
                        <div
                            style={{
                                outline: props.selectedBox === box.id ? '2px dotted' : '',
                                border: `${box.dimensions.border[0]}px ${box.dimensions.border[1]} ${box.dimensions.border[2]}`,
                                borderRadius: `${box.dimensions.border_radius}px`,
                                backgroundColor: box.dimensions.bg,
                                padding: `${box.dimensions.padding}px`,
                                width: `${box.dimensions.width}${box.unit.width}`,
                                height: `${box.dimensions.height}${box.unit.height}`,
                            }}
                        >
                            <p style={{
                                fontSize: `${box.textstyle.fontSize}px`,
                                fontWeight: box.textstyle.fontWeight,
                                color: box.textstyle.tcolor
                            }}>
                                {box.textstyle.text} {key}
                            </p>
                        </div>
                    </div >

                </>
            ))
            }
        </>
    )
}
