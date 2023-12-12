import React from 'react';
import { BorderSection, MarginSection, BackgroundSection } from '../../../StyleSection/StyleSection';

function GridComponent(props) {

    return (
        <>
            {props.gridsBlock.map((gridBlock, key) => {
                return (
                    <div
                        key={key}
                        className="grid-container"
                        style={{
                            gridTemplateColumns: gridBlock.styles.gridColumn.join(' '),
                            gap: gridBlock.styles.gap,
                            height: `${gridBlock.styles.height[0]}${gridBlock.styles.height[1]}`,
                            ...MarginSection({ marginValues: gridBlock.styles.margin }),
                        }}
                    >
                        {
                            gridBlock.items.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        id={`grid${item.id}`}
                                        className={`grid-item ${props.selectedGrid[0] === item.id ? 'selected' : ''}`}
                                        style={{
                                            padding: `${item.styles.padding[0]}px ${item.styles.padding[1]}px`,
                                            ...BackgroundSection({ value: item.styles.bg }),
                                            ...BorderSection({ borderValues: item.styles.border }),
                                            borderRadius: `${item.styles.radius}px`,
                                        }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            props.setSelectedGrid([item.id, gridBlock.mainid]);
                                            props.setSelectedText(["", item.id, gridBlock.mainid])
                                        }}
                                    >
                                        {item.addedText &&
                                            item.addedText.map((text, key) => {

                                                const textStyle = {
                                                    fontSize: `${text.styles.fontSize}px`,
                                                    fontStyle: text.styles.fontstyle.includes('italic') ? 'italic' : 'normal',
                                                    textDecoration: text.styles.fontstyle.includes('underlined') ? 'underline' : 'none',
                                                    fontWeight: text.styles.fontstyle.includes('bold') ? 'bold' : text.styles.fontWeight,
                                                    color: text.styles.color,
                                                    textAlign: text.styles.align,
                                                    fontFamily:text.styles.fontFamily
                                                };
                                                return (
                                                    <text.type className={`text ${props.selectedText[0] === text.id ? 'selected' : ''}`}
                                                        key={key}
                                                        style={textStyle}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            props.setSelectedText([text.id, item.id, gridBlock.mainid]);
                                                        }}
                                                    >
                                                        {text.text}
                                                    </text.type>
                                                )

                                            })
                                        }
                                    </div>
                                );
                            })
                        }

                    </div>
                )
            }
            )}
        </>
    );
}

export default GridComponent;
