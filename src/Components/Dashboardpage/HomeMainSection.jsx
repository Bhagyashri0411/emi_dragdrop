import React, { useState } from "react";
import './Home.css';
import Header from "./Header";

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
        props.setSelectedHeader(null);
    };

    const data = props.propertyPage;
    return (
        <div className='containerbox' id='code' onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="col-md-12">
                <div className="homecard"
                    style={{
                        backgroundColor: data?.string.bg,
                    }}
                >
                    {Object.keys(props.headerInfo).length !== 0 &&
                        <Header {...props} />
                    }

                </div>
            </div>
        </div>
    )
})

export default HomeMainSection;