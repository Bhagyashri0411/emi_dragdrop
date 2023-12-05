import React from 'react';
import { useState } from 'react';

export default function BlockSection(props) {
    const [borderRadius, setBorderRadius] = useState(0);


    const handleEditChange = (e, id, property) => {
        const updatedBoxes = [...props.boxes];
        const index = updatedBoxes.findIndex((box) => box.id === id);
        if (index !== -1) {
            if (property.includes('dimensions')) {
                updatedBoxes[index].dimensions[property.split('.')[1]] = parseInt(e.target.value) || 0;
            } else if (property.includes('position')) {
                updatedBoxes[index].position[property.split('.')[1]] = parseInt(e.target.value) || 0;
            }
            else if (property.includes('style')) {
                updatedBoxes[index].style[property.split('.')[1]] = parseInt(e.target.value) || 0;
            }
            props.setBoxes(updatedBoxes);
        }
    };

    // Function to handle changes in the range input
    const handleBorderRadiusChange = (e) => {
        const value = e.target.value;
        setBorderRadius(value);
    };

    return (
        <div>
            {props.selectedBox !== null && (
                <>
                    <div className='blockflex'>
                        <div className='block'>
                            <span>W</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.width} onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.width')} />
                            <select onChange={(e) => handleEditChange(e, props.selectedBox, "unit.width")}>
                                <option value={"px"}>px</option>
                                <option value={"%"}>%</option>
                            </select>
                        </div>
                        <div className='block'>
                            <span>H</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.height} onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.height')} />
                            <select onChange={(e) => handleEditChange(e, props.selectedBox, "unit.height")}>
                                <option value={"px"}>px</option>
                                <option value={"%"}>%</option>
                            </select>
                        </div>
                    </div>
                    <hr />

                    <div className='blockflex'>
                        <div className='block'>
                            <span>Left</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).position.x} onChange={(e) => handleEditChange(e, props.selectedBox, 'position.x')} />
                        </div>
                        <div className='block'>
                            <span>Right</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).position.y} onChange={(e) => handleEditChange(e, props.selectedBox, 'position.y')} />
                        </div>
                    </div>
                    <hr />
                    <div className='blockflex'>
                        <div className='block'>
                            <span>Padding</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.padding}
                                onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.padding')} />
                            <select>
                                <option value={"px"}>px</option>
                                <option value={"%"}>%</option>
                            </select>
                        </div>
                    </div>
                    <div className='blockflex mt-2'>
                        <div className='block'>
                            <span>Border Radius</span>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={props.boxes.find((box) => box.id === props.selectedBox).style.border_radius} // Set the value of the range input from the state
                                onChange={(e) => handleEditChange(e, props.selectedBox, 'style.border_radius')} // Handle changes in the range input
                            />
                            <input
                                type='number'
                                value={props.boxes.find((box) => box.id === props.selectedBox).style.border_radius} // Bind the text input value to the state for the dynamic display
                                onChange={(e) => handleEditChange(e, props.selectedBox, 'style.border_radius')} // This input is read-only and controlled by the range input
                            />
                        </div>
                    </div>
                </>
            )
            }
        </div>
    )
}
