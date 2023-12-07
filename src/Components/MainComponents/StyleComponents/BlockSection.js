import React from 'react';
import Border from './Border';

const BlockSection = React.memo((props) =>{



    const handleEditChange = (e, id, property) => {
        const updatedBoxes = [...props.boxes];
        const index = updatedBoxes.findIndex((box) => box.id === id);
        if (index !== -1) {
            if (property.includes('dimensions')) {
                updatedBoxes[index].dimensions[property.split('.')[1]] = e.target.value;
            } else if (property.includes('position')) {
                updatedBoxes[index].position[property.split('.')[1]] = parseInt(e.target.value) || 0;
            }
            else if (property.includes('units')) {
                updatedBoxes[index].unit[property.split('.')[1]] = e.target.value;
            }
            props.setBoxes(updatedBoxes);
        }
    };

    return (
        <div>
            {props.selectedBox !== null && (
                <>
                    <div className='blockflex'>
                        <div className='block'>
                            <span>W</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.width} onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.width')} />
                            <select onChange={(e) => handleEditChange(e, props.selectedBox, "units.width")}>
                                <option value={"px"}>px</option>
                                <option value={"%"}>%</option>
                            </select>
                        </div>
                        <div className='block'>
                            <span>H</span>
                            <input type="number" value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.height} onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.height')} />
                            <select onChange={(e) => handleEditChange(e, props.selectedBox, "units.height")}>
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
                                value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.border_radius}
                                onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.border_radius')}
                            />
                            <input
                                type='number'
                                value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.border_radius}
                                onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.border_radius')}
                            />
                        </div>
                    </div>
                    <hr />
                    <h6>Color format</h6>
                    <div className='blockflex mt-2'>
                        <span>Background-color =</span>
                        <input
                            type='color'
                            value={props.boxes.find((box) => box.id === props.selectedBox).dimensions.bg}
                            onChange={(e) => handleEditChange(e, props.selectedBox, 'dimensions.bg')}
                        />
                    </div>
                    <hr />
                   <Border/>

                </>
            )
            }
        </div>
    )
})

export default BlockSection
