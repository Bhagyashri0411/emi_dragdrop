import React from 'react';
import "./default_header.css"
import { ChevronRight, GanttChartSquare, GripVertical, PenLine, Plus, Search, Trash2, Type } from 'lucide-react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import RandomNumberGenerator from '../../../CommonComponents/RandomNumberGenerator';
import { IconPicker } from './IconPicker';

export default function DefaultHeaderOption({ headerInfo, setHeaderInfo }) {

    const updatedItems = [...headerInfo.items];

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const updatedItems = Array.from(headerInfo.items);
        const [draggedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, draggedItem);
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };

    // add 
    const addItem = () => {
        const newItems = [...headerInfo.items, { id: RandomNumberGenerator(), label: 'New Item', type: true, icon: '', border: [false, false] }];
        setHeaderInfo({ ...headerInfo, items: newItems });
    };

    // delete
    const deleteItem = (itemId) => {
        const updatedItems = headerInfo.items.filter((item) => item.id !== itemId);
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };

    // update
    const updateItems = (index, val) => {
        updatedItems[index].label = val;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };
    // Heading pdate
    const handleHeaderEdit = (e, name) => {
        setHeaderInfo({ ...headerInfo, [name]: e.target.value, type: "text" });
    };

    const updateItemsType = (index) => {
        updatedItems[index].type = !updatedItems[index].type;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }
    return (
        <div className="rightSideBar">
            <div className="noBorderTop">
                <div className="title">
                    <div className="breadcrumbs">
                        <div className="breadcrumb">
                            <button className="breadcrumbLabel">Page</button>
                            <ChevronRight />
                        </div>
                        <div className="heading">
                            <h2 className="Heading--xs">Header</h2>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="PuckFields">

                        <label className="Input">
                            <div className="Input-label">
                                <div className="Input-labelIcon">
                                    <Type className='icon' />
                                </div>
                                title
                            </div>
                            <input className="Input-input" type="text" value={headerInfo.mainHeader} onChange={(e) => handleHeaderEdit(e, "mainHeader")} />
                        </label>

                        <div className="Input">
                            <div className="Input-label">
                                <div className="Input-labelIcon">
                                    <GanttChartSquare />
                                </div>buttons</div>

                            <div className='fullbox'>

                                <DragDropContext onDragEnd={handleOnDragEnd}>
                                    <Droppable draggableId="headerarray" >
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {headerInfo.items.map((item, index) =>
                                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}
                                                    >
                                                        {(provided) => (
                                                            <div
                                                                className="ItemBox"
                                                                ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                                                            >

                                                                <div className="ArrayFieldItem-summary">
                                                                    Header Item {item.id}
                                                                    <div className="ArrayFieldItem">
                                                                        <div className="ArrayFieldItem-actions">
                                                                            <button className="IconButton_IconButton" title="Delete" onClick={() => deleteItem(item.id)}>
                                                                                <span className="IconButton_IconButton-title">Delete</span>
                                                                                <Trash2 />
                                                                            </button>
                                                                        </div>
                                                                        <div>
                                                                            <div className="DragIcon">
                                                                                <GripVertical />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="ArrayFieldItem-body">
                                                                    <fieldset className="ArrayFieldItem-fieldset">
                                                                        <div className="Input">
                                                                            <div className="Input-label">
                                                                                <div className="Input-labelIcon">
                                                                                    <PenLine />
                                                                                </div>Change type</div>
                                                                            <div className="Input-radioGroupItems" id="Hero-1687283596554_align">
                                                                                <label className="Input-radio">
                                                                                    <div className={`Input-radioInner ${item.type ? 'active' : ""}`}
                                                                                        onClick={() => updateItemsType(index)}>text</div>
                                                                                </label>
                                                                                <label className="Input-radio">
                                                                                    <div className={`Input-radioInner ${!item.type ? 'active' : ""}`}
                                                                                        onClick={() => updateItemsType(index)}>icon</div>
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        {item.type ?
                                                                            <label className="Input">
                                                                                <div className="Input-label">
                                                                                    <div className="Input-labelIcon">
                                                                                        <Type />
                                                                                    </div>label</div>
                                                                                <input className="Input-input" type="text"
                                                                                    value={item.label}
                                                                                    onChange={(e) => {
                                                                                        updateItems(index, e.target.value);
                                                                                    }} />
                                                                            </label>
                                                                            :
                                                                            <label className="Input">
                                                                                <div className="Input-label">
                                                                                    <div className="Input-labelIcon">
                                                                                        <Search />
                                                                                    </div>Icon</div>
                                                                                <IconPicker index={index} iconName={item.icon} headerInfo={headerInfo} setHeaderInfo={setHeaderInfo} />

                                                                            </label>
                                                                        }
                                                                        {/* <label className="Input">
                                                                            <div className="Input-label">
                                                                                <div className="Input-labelIcon">
                                                                                    <Type />
                                                                                </div>href</div>
                                                                            <input className="Input-input" type="text" />
                                                                        </label> */}

                                                                    </fieldset>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                )}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>

                                <button className="ArrayField-addButton" onClick={addItem}>
                                    <Plus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
