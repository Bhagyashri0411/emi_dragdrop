import React from 'react';

function GridComponent(props) {

    return (
        <div>
            {props.gridsBlock.map((gridBlock, key) => {
                return (
                    <div
                        key={key}
                        style={{
                            // cursor: 'pointer',
                            // margin: `${gridBlock.styles.margin[0]}px ${gridBlock.styles.margin[1]}px`,
                            // padding: `${gridBlock.styles.padding[0]}px ${gridBlock.styles.padding[1]}px`,
                            // border: props.selectedMainGrid === gridBlock.id ? '2px solid red' : '1px solid black',
                        }}
                        onClick={() => props.handleMouseClickGrid(gridBlock.id, "main")}
                    >
                        <div
                            className="grid-container"
                            style={{
                                gridTemplateColumns: `repeat(${gridBlock.columns}, 1fr)`,
                                gap: gridBlock.styles.gap,
                                height: `${gridBlock.styles.height[0]}${gridBlock.styles.height[1]}`
                            }}
                        >
                            {gridBlock.items.map((item, key) => (
                                <div
                                    key={key}
                                    className={`grid-item ${props.selectedGrid === item.id ? 'selected' : ''}`}
                                    style={{
                                        border: props.selectedGrid === item.id ? '2px solid red' : '1px solid black',
                                        padding: '10px',
                                        width: `${item.styles.width[0]}${item.styles.width[1]}`,
                                    }}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        props.handleMouseClickGrid(item.id, "")
                                    }}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
            )}
        </div>
    );
}

export default GridComponent;
