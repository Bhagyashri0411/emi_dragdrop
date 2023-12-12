import React, { useState } from "react";
import './Home.css';
import GridComponent from "./GridComponent/GridComponent";
import BoxComponent from "./BoxComponent/BoxComponent";

const HomeMainSection = React.memo((props) => {

    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    const handleMouseMove = (e) => {
        if (dragging && props.selectedBox !== null) {
            const updatedBoxes = [...props.boxes];
            const index = updatedBoxes.findIndex((box) => box.id === props.selectedBox);
            updatedBoxes[index].position = {
                x: e.pageX - offset.x,
                y: e.pageY - offset.y,
            };
            props.setBoxes(updatedBoxes);
        }
    };

    const handleMouseUp = () => {
        setDragging(false);
        props.setSelectedBox(null);
        props.setSelectedGrid(["", ""])
        props.setSelectedText(["", "", ""]);
    };

    const data = props.propertyPage;

    return (
        <div className='containerbox' id='code' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="col-md-12">
                <div className="homecard py-1"
                    style={{
                        backgroundColor: data?.string.bg,
                    }}
                >
                    {props.setBoxes.length !== 0 &&
                        <BoxComponent {...props} setOffset={setOffset} setDragging={setDragging} />
                    }

                    {props.gridsBlock.length !== 0 &&
                        <GridComponent {...props} setOffset={setOffset} setDragging={setDragging} />
                    }
                </div>
            </div>
        </div>
    )
})

export default HomeMainSection;