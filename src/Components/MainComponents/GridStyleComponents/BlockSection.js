import React from 'react';

const BlockSection = (props) => {

    // Function to handle changes in width, height, and unit properties
    const handleEditChange = (e, selectedItemId, property) => {
        const newValue = e.target.value; // New value from the input

        const selectedItemIndex = props.gridsBlock[0].items.findIndex(item => item.id === selectedItemId);

        if (selectedItemIndex !== -1) {

            const updatedItems = [...props.gridsBlock[0].items];

            if (property === 'width') {
                const unit = updatedItems[selectedItemIndex].styles[property][1]; // Get the existing unit
                updatedItems[selectedItemIndex].styles[property] = [parseInt(newValue), unit]; // Update value

            } else if (property === 'unit') {
                updatedItems[selectedItemIndex].styles.width[1] = newValue;
                updatedItems[selectedItemIndex].styles.height[1] = newValue;
            }
            // Update the gridsBlock with the modified items
            const updatedGridsBlock = [{
                ...props.gridsBlock[0],
                items: updatedItems,
            }];

            props.setGridsBlock(updatedGridsBlock);
        }
    };

    const handlMainGridChange = (e, property) => {
        const updatedItems = [...props.gridsBlock];

        if (property === "gap") {
            updatedItems[0].styles.gap = parseInt(e.target.value);
        }
        else if (property === 'height') {
            const unit = updatedItems[0].styles[property][1]; // Get the existing unit
            updatedItems[0].styles[property] = [parseInt(e.target.value), unit]; // Update value

        } else if (property === 'unit') {
            updatedItems[0].styles.height[1] = e.target.value;
        }

        props.setGridsBlock(updatedItems)

    }

    return (
        <>
            {
                props.selectedGrid !== null && (
                    <div>

                        <div className='blockflex'>
                            <div className='block'>
                                <span>W</span>
                                <input
                                    type="number"
                                    value={props.gridsBlock[0].items.find(item => item.id === props.selectedGrid)?.styles.width[0] || ''}
                                    onChange={(e) => handleEditChange(e, props.selectedGrid, 'width')}
                                />
                                <select
                                    value={props.gridsBlock[0].items.find(item => item.id === props.selectedGrid)?.styles.width[1] || ''}
                                    onChange={(e) => handleEditChange(e, props.selectedGrid, 'unit')}
                                >
                                    <option value={"px"}>px</option>
                                    <option value={"%"}>%</option>
                                </select>
                            </div>
                            <div className='block'>
                                <span>H</span>
                                <input
                                    type="number"
                                    value={props.gridsBlock[0].styles.height[0] || ''}
                                    onChange={(e) => handlMainGridChange(e, 'height')}
                                />
                                <select
                                    value={props.gridsBlock[0].styles.height[1] || ''}
                                    onChange={(e) => handlMainGridChange(e, 'unit')}
                                >
                                    <option value={"px"}>px</option>
                                    <option value={"%"}>%</option>
                                </select>
                            </div>
                        </div>

                        <hr />
                        <h6>Spacing Between Cells</h6>
                        <div className='blockflex '>
                            <span>W</span>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={props.gridsBlock[0].styles.gap}
                                onChange={(e) => handlMainGridChange(e, "gap")}
                            />
                            <input
                                className='border-0'
                                type="number"
                                value={props.gridsBlock[0].styles.gap}
                                disabled
                            />

                        </div>

                    </div>
                )
            }

        </>

    )

}

export default React.memo(BlockSection);
