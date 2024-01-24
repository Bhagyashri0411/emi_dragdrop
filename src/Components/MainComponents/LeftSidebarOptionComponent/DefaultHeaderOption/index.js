import React from 'react';
import "./default_header.css"
import { ChevronRight, Eclipse, GanttChartSquare, GripVertical, Link2OffIcon, Plus, Search, Trash2, Type, Upload } from 'lucide-react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import RandomNumberGenerator from '../../../CommonComponents/RandomNumberGenerator';
import { IconPicker } from './IconPicker';
import ColorInput from '../../../CommonComponents/ColorInput';
import CollapseAndExpand from '../../../CommonComponents/CollapseAndExpand';
import { FontSizeAndWeightComponent, PaddingComponent, WidthAndHeightComponent } from '../../../CommonComponents/SizeChangeingComponent';
import Addpagemodel from '../../../CommonComponents/Addpagemodel';

export default function DefaultHeaderOption({ singlePage, page, setPage }) {
    const headercomponent = page && singlePage?.components?.headercomponent;

    const [visibleBlock, setVisibleBlock] = React.useState(null);

    const updatePageState = (updatedComponent) => {
        setPage((prevPage) => {
            return prevPage.map((itempage) => ({
                ...itempage,
                components: {
                    ...itempage.headercomponent,
                    headercomponent: {
                        ...itempage.components.headercomponent,
                        ...updatedComponent,
                    },
                },
            }))
        })
    }

    const handleLogoUploadChange = () => {
        const updatedItems = { ...headercomponent.logo, type: !headercomponent.logo?.type };
        updatePageState({ logo: updatedItems });
    };

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const updatedItems = Array.from(headercomponent.items);
        const [draggedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, draggedItem);

        updatePageState({ items: updatedItems });
    };

    const addItem = () => {

        const newItems = [
            ...headercomponent.items,
            {
                styles: { border: [false, false], width: 8, fontSize: 4 },
                img: "",
                icon: "HelpCircle",
                href: "",
                itemname: "New Item",
                id: headercomponent.items.length === 0 ? 0 : Math.max(...headercomponent.items.map(item => item.id)) + 1,
                type: "text",
            },
        ];

        updatePageState({ items: newItems });
    };


    const deleteItem = (itemId) => {
        const updatedItems = headercomponent.items.filter((item) => item.id !== itemId);
        updatePageState({ items: updatedItems });
    };

    const updateItems = (index, val, property) => {
        const updatedItems = [...singlePage.components.headercomponent.items];

        if (property.includes("border")) {
            updatedItems[index].styles.border[parseInt(property.split('.')[1])] =
                !updatedItems[index].styles.border[parseInt(property.split('.')[1])];
        }
        updatedItems[index][property] = val;
        updatePageState({ items: updatedItems });

    };


    const handleHeaderEdit = (e) => {
        const updatedItems = { ...headercomponent.logo, logoname: e.target.value };
        updatePageState({ logo: updatedItems });
    };

    const handleHeaderStylecolor = (e, name) => {
        const updatedItems = { ...headercomponent };
        updatedItems.styles[name] = e.target.value;
        if (name.includes("padding")) {
            updatedItems.styles.padding[parseInt(name.split('.')[1])] = e.target.value;
        }
        updatePageState(updatedItems);
    };

    const toggleVisibility = (blockNumber) => {
        setVisibleBlock((prevVisibleBlock) =>
            prevVisibleBlock === blockNumber ? null : blockNumber
        );
    };

    const handleImageChange = (e) => {
        const updatedItems = { ...headercomponent.logo, logoimg: e.target.files[0] };
        updatePageState({ logo: updatedItems });
    };

    const handleImageStylesChange = (e, name) => {
        const updatedStyles = { ...headercomponent.logo.styles, [name]: parseInt(e.target.value) };
        updatePageState({ logo: { ...headercomponent.logo, styles: updatedStyles } });
    };

    const handleItemImageStylesChange = (e, name) => {
        const updatedItems = { ...headercomponent };
        updatedItems.styles[name] = parseInt(e.target.value);
        updatePageState(updatedItems);
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
                    <>
                        <div className="Input">
                            <div className='mb-2'>
                                <div className="Input-label">
                                    <div className="Input-labelIcon">
                                        <Type className='icon' />
                                    </div>
                                    title
                                </div>
                                <input className="Input-input" type="text"
                                    value={headercomponent.logo?.logoname}
                                    disabled={headercomponent.logo?.type}
                                    onChange={handleHeaderEdit}
                                />
                            </div>
                            <div className="Input-label">
                                <div className="Input-labelIcon">
                                    <input
                                        type='checkbox'
                                        checked={headercomponent.logo?.type}
                                        onChange={handleLogoUploadChange}
                                    />
                                </div>
                                Upload Logo
                            </div>
                            <div className={`Input-label ${!headercomponent.logo?.type && "disabledDiv"}`}>
                                <div className="Input-labelIcon">
                                    <Upload className='icon' />
                                </div>
                                <label htmlFor="uploadlogo">
                                    Logo
                                </label>
                                <input type='file' id='uploadlogo' name='uploadlogo' className='d-none'
                                    accept="image/*" onChange={handleImageChange}
                                />
                            </div>
                        </div>
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
                            {!headercomponent.logo?.type ?
                                <FontSizeAndWeightComponent size={headercomponent.logo.styles} funOnchange={handleImageStylesChange} />
                                :
                                <div className={`${!headercomponent.logo?.logoimg && "disabledDiv"}`}>
                                    <WidthAndHeightComponent size={headercomponent.logo.styles} funOnchange={handleImageStylesChange} />
                                </div>
                            }
                            <CollapseAndExpand
                                name={"Padding"}
                                contentComponent={PaddingComponent}
                                componentProps={{
                                    size: headercomponent.styles,
                                    funOnchange: handleHeaderStylecolor
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
                                    <Droppable droppableId="headerarray">
                                        {(provided) => (
                                            <div ref={provided.innerRef} {...provided.droppableProps}>
                                                {headercomponent.items.map((item, index) => (
                                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                        {(provided, snapshot) => (
                                                            <div
                                                                className="ItemBox"
                                                                key={index}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    ...provided.draggableProps.style,
                                                                    background: snapshot.isDragging ? 'lightblue' : 'white',
                                                                }}
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

                                                                                    <div className="Input-radio">
                                                                                        <div className={`Input-radioInner ${item.type === "text" && 'active'}`}
                                                                                            onClick={() => updateItems(index, "text", "type")}>text</div>
                                                                                    </div>

                                                                                    <div className="Input-radio">
                                                                                        <div className={`Input-radioInner ${item.type === "icon" && 'active'}`}
                                                                                            onClick={() => updateItems(index, "icon", "type")}>icon</div>
                                                                                    </div>

                                                                                    <div className="Input-radio" htmlFor={`uploadItem${item.id}`}>
                                                                                        <div className={`Input-radioInner ${item.type === "img" && 'active'}`}
                                                                                            onClick={() => updateItems(index, "img", "type")}><Upload />
                                                                                        </div>

                                                                                        <input type='file' id={`uploadItem${item.id}`} name={`uploadItem${item.id}`} className='d-none'
                                                                                            accept="image/*" onChange={(e) => updateItems(index, e.target.files[0], "img")}
                                                                                        />
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                            {item.type === "text" ?
                                                                                <>
                                                                                    <div className="Input">
                                                                                        <div className="Input-label">
                                                                                            <div className="Input-labelIcon">
                                                                                                <Type />
                                                                                            </div>label</div>
                                                                                        <input className="Input-input" type="text"
                                                                                            value={item.itemname}
                                                                                            onChange={(e) => {
                                                                                                updateItems(index, e.target.value, "itemname");
                                                                                            }} />

                                                                                    </div>

                                                                                </>
                                                                                :
                                                                                item.type === "icon" &&
                                                                                <div className="Input">
                                                                                    <div className="Input-label">
                                                                                        <div className="Input-labelIcon">
                                                                                            <Search />
                                                                                        </div>Icon</div>
                                                                                    <IconPicker index={index} iconName={item.icon} headercomponent={headercomponent} page={page} setPage={setPage} />
                                                                                </div>
                                                                            }
                                                                            <div className='Input'>

                                                                                <div className="Input-label">
                                                                                    <div className="Input-labelIcon">
                                                                                        <Link2OffIcon />
                                                                                    </div>Href</div>
                                                                                <select className='Input-input'
                                                                                    value={item.href}
                                                                                    onChange={(e) => {
                                                                                        updateItems(index, e.target.value, "href");
                                                                                    }}
                                                                                >
                                                                                    {page.map((item, key) =>
                                                                                        <option value={item.pageLink} key={key}>{item.pageName}</option>
                                                                                    )}
                                                                                </select>
                                                                                <Addpagemodel page={page} setPage={setPage}/>
                                                                            </div>
                                                                            <div className="Input">
                                                                                <div className="Input-label pb-0 justify-content-between">
                                                                                    <div className='Input-label pb-0'>
                                                                                        <div className="Input-labelIcon">
                                                                                            <input type='checkbox' checked={item.styles.border[0]}
                                                                                                onChange={(e) => updateItems(index, e, "border.0")} />
                                                                                        </div>
                                                                                        Border Left
                                                                                    </div>
                                                                                    <div className='Input-label pb-0'>

                                                                                        <div className="Input-labelIcon">
                                                                                            <input type='checkbox' checked={item.styles.border[1]}
                                                                                                onChange={(e) => updateItems(index, e, "border.1")} />
                                                                                        </div>
                                                                                        Border Right
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="Input">
                                                                                <div className="Input-label pb-0 justify-content-between">
                                                                                    <div className='Input-label pb-0'>
                                                                                        <div className="Input-labelIcon">
                                                                                            <Eclipse />
                                                                                        </div>
                                                                                        Styles
                                                                                    </div>

                                                                                </div>
                                                                                <div
                                                                                    className={`${!item.img && "disabledDiv"}`}
                                                                                >
                                                                                    <WidthAndHeightComponent size={item.styles}
                                                                                        funOnchange={handleItemImageStylesChange}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </fieldset>
                                                                    </div>
                                                                }
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
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
                </div>
            </div>
        </>
    );
}
