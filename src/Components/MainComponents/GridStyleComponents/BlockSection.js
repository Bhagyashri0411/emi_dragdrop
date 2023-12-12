import React from 'react';
import Border from './Border';
import GradientIcon from '@mui/icons-material/Gradient';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';
import SquareIcon from '@mui/icons-material/Square';

const BlockSection = (props) => {
    const [showColor, setShowColor] = React.useState(false);


    const updatedGrids = [...props.gridsBlock];

    const handleEditMainChange = (e, id, property) => {
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

    // sub items
    const filterOfSubComponent = props.gridsBlock.find(x => x.mainid === props.selectedGrid[1]).items
        .find(item => item.id === props.selectedGrid[0]);

    const handleEditSubChanges = (e, property) => {
        if (property === "bg.0") {
            setShowColor("")
        }
        if (property.includes("bg")) {
            filterOfSubComponent.styles.bg[0] = 0;
            filterOfSubComponent.styles.bg[1] = property.includes("0") ? e : e.target.value;
            filterOfSubComponent.styles.bg[2] = property.includes("0") ? e : e.target.value;
        }
        else if (property === "de") {
            filterOfSubComponent.styles.bg[0] = parseInt(e.target.value);
        }
        else if (property.includes("color")) {
            filterOfSubComponent.styles.bg[parseInt(property.split('.')[1])] = e.target.value;
        }

        props.setGridsBlock(updatedGrids);
    }

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

    const margin = ["Top", "Left",  "Right", "Bottom"];



    return (
        <>
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
                        value={filterOfMainComponent?.styles.height[0] || ''}
                        onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], 'height.0')}
                    />
                    <select
                        value={filterOfMainComponent?.styles.height[1]}
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
                    value={filterOfMainComponent?.styles.gap}
                    onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], "gap")}
                />
                <input
                    className='border-0'
                    type="number"
                    value={filterOfMainComponent?.styles.gap}
                    disabled
                />

            </div>

            <hr />
            <h6 className='px-2'>Background</h6>
            <div className='blockflex'>
                <div className='block'>
                    <div className={`boxbackground`} onClick={(e) => handleEditSubChanges('transparent', 'bg.0')}>
                        <DisabledByDefaultOutlinedIcon />
                    </div>
                    <div className={`boxbackground`} onClick={() => setShowColor('div1')}>
                        <SquareIcon />
                    </div>
                    <div className={`boxbackground`} onClick={() => setShowColor('div2')}>
                        <GradientIcon />
                    </div>
                </div>
            </div>
            {showColor === "div1" ? (
                <div className='blockflex'>
                    <span >Color </span>
                    <input type='color'
                        value={filterOfSubComponent?.styles.bg[1]}
                        onChange={(e) => handleEditSubChanges(e, 'bg.1')}
                    />
                </div>
            ) : showColor === "div2" ?
                <div className='blockflex'>
                    <div className='block'>
                        <input type='color'
                            value={filterOfSubComponent?.styles.bg[1]}
                            onChange={(e) => handleEditSubChanges(e, 'color.1')} />
                        <input type='color'
                            value={filterOfSubComponent?.styles.bg[2]}
                            onChange={(e) => handleEditSubChanges(e, 'color.2')} />

                        <input type='number'
                            value={filterOfSubComponent?.styles.bg[0]}
                            onChange={(e) => handleEditSubChanges(e, 'de')} />
                    </div>
                </div>
                : ''
            }

            <hr />

            <h6 className='px-2' >Margin</h6>
            {margin.map((item, key) => (
                <div className='blockflex' key={key}>

                    <span>{item}</span>
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={filterOfMainComponent?.styles.margin[key]}
                        onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], `margin.${key}`)}
                    />
                    <input
                        type="number"
                        min={0}
                        max={100}
                        value={filterOfMainComponent?.styles.margin[key]}
                        onChange={(e) => handleEditMainChange(e, props.selectedGrid[1], `margin.${key}`)}
                    />
                </div>
            ))}

            <hr />
            <Border {...props} filterOfMainComponent={filterOfMainComponent} />
            <hr />


        </>
    )

}

export default React.memo(BlockSection);
