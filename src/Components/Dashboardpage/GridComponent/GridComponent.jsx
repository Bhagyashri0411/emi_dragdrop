import React from 'react';
import { BorderSection, MarginSection, BackgroundSection } from '../../../StyleSection/StyleSection';
import CardHeader, { CardHeaderDatePickerShow, CardHeaderRadioShow } from './Card/CardHeader';
import CardBody, { DoughnutChart, TableInCardBody } from './Card/CardBody';

function GridComponent(props) {

    return (
        <div>
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
                                        }}
                                    >
                                        <div className='card-header border-0'>
                                            {
                                                item.addedHeadText ? <CardHeader {...props} item={item} cardheader={item.addedHeadText[0]} gridBlock={gridBlock} />
                                                    :
                                                item.addedRadioText ? <CardHeaderRadioShow {...props} item={item} radio={item.addedRadioText[0]} gridBlock={gridBlock} />
                                                    :
                                                item.addedDatePicker ? <CardHeaderDatePickerShow {...props} item={item} gridBlock={gridBlock} datepicker={item.addedDatePicker} />
                                                    :
                                                <div className={`add-box ${props.selectedText[0] === item.id && props.selectedText[3] === "empty_header" && "selected"}`} 
                                                onClick={(e) => { e.stopPropagation(); props.setSelectedText([item.id, "", gridBlock.mainid, "empty_header"]) }} />
                                            }
                                        </div>

                                        <div className='card-body'>
                                            {
                                                item.addedBodyText ? <CardBody {...props} addedBodyText={item.addedBodyText} item={item} gridBlock={gridBlock} />
                                                    :
                                                    item.tableData ?
                                                        <TableInCardBody data={item.tableData} />
                                                        :
                                                        item.addedDoughnutsData ? <DoughnutChart />:
                                                        <div className={`add-box ${props.selectedText[0] === item.id && props.selectedText[3] === "empty_body" && "selected"}`} 
                                                        onClick={(e) => { e.stopPropagation(); props.setSelectedText([item.id, "", gridBlock.mainid, "empty_body"]) }} />

                                            }
                                        </div>
                                        <div className='card-footer border-0'></div>
                                    </div>
                                );
                            })
                        }

                    </div >
                )
            }
            )}
        </div >
    );
}

export default GridComponent;
