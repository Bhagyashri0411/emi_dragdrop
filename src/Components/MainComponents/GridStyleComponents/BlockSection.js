import React from 'react';

const BlockSection = (props) => {

    const handleEditMainChange = (e, id, property) => {
        const updatedGrids = [...props.gridsBlock];
        const index = updatedGrids.findIndex((x) => x.mainid === id);

        if (index !== -1) {
            if (property === 'gap') {
                updatedGrids[index].styles.gap = parseInt(e.target.value);
            }
            else {
                updatedGrids[index].styles[property.split('.')[0]][property.split('.')[1]] = e.target.value;
            }
            props.setGridsBlock(updatedGrids);
        }
    };

    const findItemIndexById = (data, selectedItemId) => {
        for (let i = 0; i < data.length; i++) {
            const itemIndex = data[i].items.findIndex(item => item.id === selectedItemId);
            if (itemIndex !== -1) {
                return { itemIndex };
            }
        }
        return { itemIndex: -1 };
    };

    const { itemIndex } = findItemIndexById(props.gridsBlock, props.selectedGrid[0]);

    const filterOfMainComponent = props.gridsBlock.find(x => x.mainid === props.selectedGrid[1]);

    const margin = ["Top", "Left", "Bottom", "right"];

    return (
        <>
            {
                props.selectedGrid[0] !== '' && (
                    <div>

                        <div className='blockflex'>
                            <div className='block'>
                                <span>W</span>
                                <select
                                    value={filterOfMainComponent?.styles.gridColumn[itemIndex] || ''}
                                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], `gridColumn.${itemIndex}`)}
                                >
                                    <option value={"0fr"}>0fr</option>
                                    <option value={"1fr"}>1fr</option>
                                    <option value={"2fr"}>2fr</option>
                                    <option value={"3fr"}>3fr</option>

                                </select>
                            </div>

                            <div className='block'>
                                <span>H</span>
                                <input
                                    type="number"
                                    value={filterOfMainComponent.styles.height[0] || ''}
                                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], 'height.0')}
                                />
                                <select
                                    value={filterOfMainComponent.styles.height[1]}
                                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], 'height.1')}
                                >
                                    <option value={"px"}>px</option>
                                    <option value={"%"}>%</option>
                                </select>
                            </div>
                        </div>

                        <hr />
                        <h6 className='px-2'>Spacing Between Cells</h6>
                        <div className='blockflex '>
                            <span>W</span>
                            <input
                                type="range"
                                min={0}
                                max={100}
                                value={filterOfMainComponent.styles.gap}
                                onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], "gap")}
                            />
                            <input
                                className='border-0'
                                type="number"
                                value={filterOfMainComponent.styles.gap}
                                disabled
                            />

                        </div>

                        <hr />

                        <h6 className='px-2' >Margin</h6>
                        {margin.map((item, key) => (
                            <div className='blockflex' key={key}>

                                <span>{item}</span>
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={filterOfMainComponent.styles.margin[key]}
                                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], `margin.${key}`)}
                                />
                                <input
                                    type="number"
                                    min={0}
                                    max={100}
                                    value={filterOfMainComponent.styles.margin[key]}
                                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], `margin.${key}`)}
                                />
                            </div>
                        ))}
                    </div>
                )
            }

        </>

    )

}

export default React.memo(BlockSection);
