import React from 'react';
import "./default_header.css"
import { ChevronRight, Eclipse, GanttChartSquare, GripVertical, Link2OffIcon, Plus, Search, Trash2, Type } from 'lucide-react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import RandomNumberGenerator from '../../../CommonComponents/RandomNumberGenerator';
import { IconPicker } from './IconPicker';
import ColorInput from '../../../CommonComponents/ColorInput';
import CollapseAndExpand from '../../../CommonComponents/CollapseAndExpand';

export default function DefaultHeaderOption({ page, setPage }) {
    const headercomponent = page && page[0]?.components?.headercomponent;

    const [visibleBlock, setVisibleBlock] = React.useState(null);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const updatedItems = Array.from(headercomponent.items);
        const [draggedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, draggedItem);

        setPage((prevPage) => ({
            ...prevPage,
            components: {
                ...prevPage.components,
                headercomponent: {
                    ...prevPage.components.headercomponent,
                    items: updatedItems,
                },
            },
        }));
    };

    const addItem = () => {
        const newItems = [
            ...headercomponent.items,
            {
                id: RandomNumberGenerator(),
                styles: {
                    border: [false, false],
                    width: 8,
                    fontSize: 4,
                },
                img: "",
                icon: "",
                href: "",
                itemname: "New Item",
                type: true,
            },
        ];

        setPage([{
            ...page[0],
            components: {
                headercomponent: {
                    ...page[0].components.headercomponent,
                    items: newItems,
                },
            },
        }]);
    };

    const deleteItem = (itemId) => {
        const updatedItems = headercomponent.items.filter((item) => item.id !== itemId);

        setPage([{
            ...page[0],
            components: {
                headercomponent: {
                    ...page[0].components.headercomponent,
                    items: updatedItems,
                },
            },
        }]);
    };

    const updateItems = (index, val) => {
        const updatedItems = [...headercomponent.items];
        updatedItems[index].itemname = val;

        setPage([{
            ...page[0],
            components: {
                headercomponent: {
                    ...page[0].components.headercomponent,
                    items: updatedItems
                }
            }
        }]);
    };

    const updateItemsType = (index) => {
        const updatedItems = [...headercomponent.items];
        updatedItems[index].type = !updatedItems[index].type;

        setPage([{
            ...page[0],
            components: {
                headercomponent: {
                    ...page[0].components.headercomponent,
                    items: updatedItems,
                },
            },
        }]);
    };

    const handleHeaderEdit = (e) => {
        const updatedItems = headercomponent.logo.logoname;
        updateItems.logoname = e.target.value;
    }

    const handleHeaderStylecolor = (e, name) => {
        const updatedItems = headercomponent;
        updatedItems.styles[name] = e.target.value;
        setPage([{
            ...page[0],
            components: {
                headercomponent: updatedItems
            }
        }]);
    }
    const toggleVisibility = (blockNumber) => {
        setVisibleBlock((prevVisibleBlock) =>
            prevVisibleBlock === blockNumber ? null : blockNumber
        );
    };


    return (
        <>
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
                <div className="HeaderFields">
                    {headercomponent ? (
                        <>
                            <label className="Input">
                                <div className="Input-label">
                                    <div className="Input-labelIcon">
                                        <Type className='icon' />
                                    </div>
                                    title
                                </div>
                                <input className="Input-input" type="text"
                                    value={headercomponent.logo?.logoname}
                                    onChange={handleHeaderEdit}
                                />
                            </label>
                            <div className="Input">
                                <div className="Input-label">
                                    <div className="Input-labelIcon">
                                        <Eclipse />
                                    </div>Styles</div>


                                <CollapseAndExpand
                                    name={"Background"}
                                    contentComponent={ColorInput}
                                    componentProps={{
                                        bgval: headercomponent.styles?.bgColor,
                                        funOnchange: (e) => handleHeaderStylecolor(e, "bgColor")
                                    }}
                                />
                                <CollapseAndExpand
                                    name={"Color"}
                                    contentComponent={ColorInput}
                                    componentProps={{
                                        bgval: headercomponent.styles?.color,
                                        funOnchange: (e) => handleHeaderStylecolor(e, "color")
                                    }}
                                />
                             
                            </div>




                            <div className="Input">
                                <div className="Input-label">
                                    <div className="Input-labelIcon">
                                        <GanttChartSquare />
                                    </div>Header Items</div>

                                <div className='fullbox'>

                                    <DragDropContext onDragEnd={handleOnDragEnd}>
                                        <Droppable draggableId="headerarray" >
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                                    {headercomponent.items.map((item, index) =>
                                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}                                                    >
                                                            {(provided) => (
                                                                <div
                                                                    className="ItemBox" key={index}
                                                                    ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                                                                >
                                                                    <div className={`ArrayFieldItem-summary ${visibleBlock === item.id && "active"}`} onClick={() => toggleVisibility(item.id)}>
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
                                                                    {visibleBlock === item.id &&
                                                                        <div className="ArrayFieldItem-body">
                                                                            <fieldset className="ArrayFieldItem-fieldset">
                                                                                <div className="Input">
                                                                                    <div className="Input-radioGroupItems" id={headercomponent.id}>
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
                                                                                    <>
                                                                                        <label className="Input">
                                                                                            <div className="Input-label">
                                                                                                <div className="Input-labelIcon">
                                                                                                    <Type />
                                                                                                </div>label</div>
                                                                                            <input className="Input-input" type="text"
                                                                                                value={item.itemname}
                                                                                                onChange={(e) => {
                                                                                                    updateItems(index, e.target.value);
                                                                                                }} />
                                                                                        </label>
                                                                                        <label className="Input">
                                                                                            <div className="Input-label">
                                                                                                <div className="Input-labelIcon">
                                                                                                    <Link2OffIcon />
                                                                                                </div>Href</div>
                                                                                            <input className="Input-input" type="text"
                                                                                                value={item.href}
                                                                                                onChange={(e) => {
                                                                                                    updateItems(index, e.target.value);
                                                                                                }} />
                                                                                        </label>

                                                                                    </>
                                                                                    :
                                                                                    <label className="Input">
                                                                                        <div className="Input-label">
                                                                                            <div className="Input-labelIcon">
                                                                                                <Search />
                                                                                            </div>Icon</div>
                                                                                        <IconPicker index={index} iconName={item.icon} headercomponent={headercomponent} page={page} setPage={setPage} />

                                                                                    </label>
                                                                                }
                                                                            </fieldset>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            )}
                                        </Droppable>
                                    </DragDropContext>

                                    <button className="ArrayField-addButton"
                                        onClick={addItem}
                                    >
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <p>Error: headercomponent not found in page.components</p>
                    )}
                </div>
            </div>
        </>
    );
}
