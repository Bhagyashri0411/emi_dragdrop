import React, { useState } from 'react';
import FontChanges from './FontChanges';
import PieChartComponent from '../../CommonComponents/Charts/PieChartComponent';

const CardBody = (props) => {

  const [isDragging, setIsDragging] = useState(false);
  const [draggedTextId, setDraggedTextId] = useState(null);
  const [dragOffset, setDragOffset] = useState({ offsetX: 0, offsetY: 0 });

  const handleDragStart = (e, id) => {
    setIsDragging(true);
    setDraggedTextId(id);

    const index = props.data.findIndex((text) => text.id === id);
    const text = props.data[index];

    const textElement = document.getElementById(`text-${id}`);
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

    const updatedTexts = props.gridsBlock.map((grid) => {
      if (grid.mainid === props.selectedText[0]) {
        const updatedItems = grid.items.map((item) => {
          if (item.id === props.selectedText[1]) {
            const updatedAddedHeadText = item.addedHeadText.map((text) =>
              text.id === props.selectedText[2] ? { ...text, x: newX, y: newY } : text
            );
            return { ...item, addedHeadText: updatedAddedHeadText };
          }
          return item;
        });
        return { ...grid, items: updatedItems };
      }
      return grid;
    });

    props.setGridsBlock(updatedTexts);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggedTextId(null);
  };


  return (
    <div className={`box-container ${isDragging && 'selectedbox'}`} onMouseMove={handleDrag} onMouseUp={handleDragEnd}>
  
        <div className="box">
          {props.data.map((text) => (
            <div
              key={text.id}
              id={`text-${text.id}`}
              style={{
                top: `${text.y}px`, left: `${text.x}px`,
              }}
              className={`draggable-text ${draggedTextId === text.id && 'selected'}`}
              onMouseDown={(e) => {
                handleDragStart(e, text.id);
                props.setSelectedText([props.gridBlock.mainid, props.item.id, text.id, ''])

              }}
            >
              <div className='position-relative'
                onClick={(e) => {
                  e.stopPropagation();
                  props.setSelectedGrid([props.gridBlock.mainid, ""])
                  props.setSelectedText([props.gridBlock.mainid, props.item.id, text.id, 'text'])
                }
                }
              >
                <span
                  contentEditable={true}
                  style={{
                    fontStyle: text?.styles.fontstyle.includes('italic') ? 'italic' : 'normal',
                    textDecoration: text?.styles.fontstyle.includes('underlined') ? 'underline' : 'none',
                    fontSize: `${text?.styles.fontSize}px`,
                    fontWeight: text?.styles.fontstyle.includes('bold') ? 'bold' : props.cardheader?.styles.fontWeight,
                    color: text?.styles.color,
                  }}
                >

                  {text.text}
                </span>
                {/* <FontChanges /> */}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};


export const TableInCardBody = ({ data }) => {
}


export default CardBody;
