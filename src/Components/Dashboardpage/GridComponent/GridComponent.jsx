import React from 'react';
import { BorderSection, MarginSection, BackgroundSection } from '../../CommonComponents/StyleSection/StyleSection';
import PieChartComponent from '../../CommonComponents/Charts/PieChartComponent';
import CardBody, { TableInCardBody } from './CardBody';
import BarAndLineChart from '../../CommonComponents/Charts/BarAndLineChart';
import DonutApp from '../../CommonComponents/Charts/DonutApp';


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
                            // height: `${gridBlock.styles.height[0]}${gridBlock.styles.height[1]}`,
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
                                        {
                                            item.addedHeadText && <CardBody data={item.addedHeadText} item={item} gridBlock={gridBlock} {...props} />
                                        }

                                        {
                                            item.tableData && <TableInCardBody data={item.tableData} />
                                        }
                                        {item.addedDoughnutsData && <PieChartComponent {...props} item={item} gridBlock={gridBlock} data={item.addedDoughnutsData} />}
                                        {item.addGraphdoughnut && <DonutApp />}
                                        {item.addGraphbarline && <BarAndLineChart />}
                                    </div>
                                );
                            })
                        }

                    </div>
                )
            }
            )}
        </div>
    );
}

export default GridComponent;
