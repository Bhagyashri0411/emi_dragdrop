import React, { useState, useRef } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import './graphs.css';

export default function PieChartComponent(props) {

    const [isDragging, setIsDragging] = useState(false);
    const [draggedTextId, setDraggedTextId] = useState(null);
    const [dragOffset, setDragOffset] = useState({ offsetX: 0, offsetY: 0 });


    const data = props.data.map((item) => ({
        ...item,
        value: parseFloat(item.value),
    }));

    const total = data.reduce((acc, item) => acc + item.value, 0);


    const handleDragStart = (e, id) => {
        setIsDragging(true);
        setDraggedTextId(id);

        const index = props.data.findIndex((text) => text.id === id);
        const text = props.data[index];

        const textElement = document.getElementById(`graph-${id}`);
        const textWidth = textElement.offsetWidth;
        const textHeight = textElement.offsetHeight;

        setDragOffset({
            offsetX: e.clientX - text.x,
            offsetY: e.clientY - text.y,
            textWidth,
            textHeight,
        });
    };

    const handleDrag = (e) => {
        if (!isDragging || draggedTextId === null) return;

        const updatedX = e.clientX - dragOffset.offsetX;
        const updatedY = e.clientY - dragOffset.offsetY;

        const parentRect = e.currentTarget.getBoundingClientRect();
        const maxX = parentRect.width - dragOffset.textWidth;
        const maxY = parentRect.height - dragOffset.textHeight;

        const newX = Math.max(0, Math.min(updatedX, maxX));
        const newY = Math.max(0, Math.min(updatedY, maxY));

        const updateGraph = props.gridsBlock.map((grid) => {
            if (grid.mainid === props.selectedText[0]) {
                const updatedItems = grid.items.map((item) => {
                    if (item.id === props.selectedText[1]) {
                        const updatedAddedDoug = item.addedDoughnutsData.map((text) =>
                            text.id === props.selectedText[2] ? { ...text, x: newX, y: newY } : text
                        );
                        return { ...item, addedDoughnutsData: updatedAddedDoug };
                    }
                    return item;
                });
                return { ...grid, items: updatedItems };
            }
            return grid;
        });

        props.setGridsBlock(updateGraph);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setDraggedTextId(null);
    };
    return (
        <div className={`box-container ${isDragging && 'selectedbox'}`} onMouseMove={handleDrag} onMouseUp={handleDragEnd}>
            <div className="box">
                <div className='mainGraph'>
                    <div style={{ position: 'relative' }}
                    >
                        <PieChart
                            series={[
                                {
                                    data,
                                    label: false,
                                    innerRadius: 40,
                                    outerRadius: 60,
                                },
                            ]}
                            width={250}
                            height={150}
                        />
                        <div className='mainGraphText'>

                            <h3>{total}%</h3>
                        </div>
                    </div>
                    <div>
                        {data.map((item) => (
                            <div className='blockgraph' id={`graph-${item.id}`} key={item.id}
                                style={{
                                    top: `${item.y}px`, left: `${item.x}px`,
                                    position: "absolute"
                                }}
                                onMouseDown={(e) => {
                                    handleDragStart(e, item.id);
                                    props.setSelectedText([props.gridBlock.mainid, props.item.id, item.id, ''])

                                }}
                            >
                                <div className='iconround' style={{ backgroundColor: item.color }}></div>
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
