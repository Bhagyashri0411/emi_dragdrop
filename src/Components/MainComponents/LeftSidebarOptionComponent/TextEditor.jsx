import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import RandomNumberGenerator from '../../CommonComponents/RandomNumberGenerator';
import "./TextEditor.css"
import icons from "../../CommonComponents/Icon.json";
import SearchIcon from '@mui/icons-material/Search';

export const HeaderEditors = ({ headerInfo, setHeaderInfo }) => {
    const handleChangesOnHeader = (e, property) => {
        if (property.includes("padding")) {
            const [nestedProperty, subProperty] = property.split('.');
            setHeaderInfo({
                ...headerInfo,
                styles: {
                    ...headerInfo.styles,
                    [nestedProperty]: {
                        ...headerInfo.styles[nestedProperty],
                        [subProperty]: parseFloat(e.target.value),
                    },
                },
            });
        } else {
            setHeaderInfo({
                ...headerInfo,
                styles: {
                    ...headerInfo.styles,
                    [property]: e.target.value,
                },
            });
        }
    };

    const handleContainerClass = (value) => {
        setHeaderInfo({ ...headerInfo, size: value });
    };

    const decreaseValue = () => {
        if (headerInfo.size > 8) {
            handleContainerClass(headerInfo.size - 2);
        } else {
            handleContainerClass(12);
        }
    };
    return (
        <>
            <div>
                <label htmlFor="bgColor">Background Color: </label>
                <input
                    type="color"
                    id="bgColor"
                    value={headerInfo.styles.bgColor}
                    onChange={(e) => handleChangesOnHeader(e, "bgColor")}
                />
            </div>
            <div>
                <label htmlFor="color">Font Color:</label>
                <input
                    type="color"
                    id="color"
                    value={headerInfo.styles.color}
                    onChange={(e) => handleChangesOnHeader(e, "color")}
                />
            </div>
            <div>
                <label htmlFor="padding">Padding:</label>
                <input
                    type="number"
                    id="padding"
                    value={headerInfo.styles.padding[0]}
                    onChange={(e) => handleChangesOnHeader(e, 'padding.0')}
                />
                <input
                    type="number"
                    id="padding1"
                    value={headerInfo.styles.padding[1]}
                    onChange={(e) => handleChangesOnHeader(e, 'padding.1')}
                />
            </div>
            <button onClick={decreaseValue}>changes</button>
        </>
    )
}

export const ItemsEditors = ({ headerInfo, setHeaderInfo }) => {

    const updatedItems = [...headerInfo.items];
    const addItem = () => {
        const newItems = [...headerInfo.items, { id: RandomNumberGenerator(), label: 'New Item', icon: '', border: [false, false] }];
        setHeaderInfo({ ...headerInfo, items: newItems });
    };

    const updateItems = (index, val) => {
        updatedItems[index].label = val;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };
    const addBorder = (index, place) => {
        updatedItems[index].border[place] = !updatedItems[index].border[place];
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }
    const updateItemsType = (index) => {
        updatedItems[index].type = !updatedItems[index].type;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const updatedItems = Array.from(headerInfo.items);
        const [draggedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, draggedItem);
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };

    return (
        <>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="boxes">
                    {(provided) => (
                        <ul ref={provided.innerRef} {...provided.droppableProps}>
                            {headerInfo.items.map((item, index) =>
                                <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                    {(provided) => (
                                        <div className='p-2 border border-black' key={index} style={{ marginBottom: '10px' }}
                                            ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <button className='me-2' onClick={() => updateItemsType(index)}>
                                                    {item.type ? "Add " : "Remove "}
                                                    Icon
                                                </button>
                                                {item.type &&
                                                    <input
                                                        type="text"
                                                        value={item.label}
                                                        onChange={(e) => {
                                                            updateItems(index, e.target.value);
                                                        }}
                                                        style={{ marginRight: '10px' }}
                                                    />
                                                }
                                            </div>
                                            <button className='ms-2' onClick={() => addBorder(index, "0")}>
                                                {item.border[0] ? "Remove " : "Add "}
                                                Left
                                            </button>
                                            <button className='ms-2' onClick={() => addBorder(index, "1")}>
                                                {item.border[1] ? "Remove " : "Add "}
                                                RIght</button>

                                            {!item.type &&
                                                <div>
                                                    <IconPicker index={index} iconName={item.icon} headerInfo={headerInfo} setHeaderInfo={setHeaderInfo} />
                                                </div>
                                            }
                                        </div>
                                    )}
                                </Draggable>
                            )}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </>
    )
}

const TextEditor = ({ headerInfo, setHeaderInfo }) => {

    const [type, setType] = useState(headerInfo.type);

    const handleChangesOnHeader = (e, property) => {
        setHeaderInfo({
            ...headerInfo,
            styles: {
                ...headerInfo.styles,
                [property]: e.target.value,
            },
        });
    };


    const handleHeaderEdit = (e, name) => {
        setHeaderInfo({ ...headerInfo, [name]: e.target.value, type: "text" });
    };


    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        setHeaderInfo({ ...headerInfo, logo: file, type: "logo" });
    };


    return (
        <div className='texteditor'>
            <div>
                <label>
                    <input
                        type="radio"
                        value="text"
                        checked={type === 'text'}
                        onChange={() => setType("text")}
                    />
                    Text
                </label>
                <label>
                    <input
                        type="radio"
                        value="logo"
                        checked={type === 'logo'}
                        onChange={() => setType("logo")}
                    />
                    Logo
                </label>

                {type === 'text' ? (
                    <div>
                        <input
                            type="text"
                            value={headerInfo.mainHeader}
                            onChange={(e) => handleHeaderEdit(e, "mainHeader")}
                        />
                    </div>
                ) : (
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleLogoChange}
                        />
                    </div>
                )}
            </div>
            {type === "text" && (<>
                <div>
                    <label htmlFor="fontSize">Font Size:</label>
                    <input
                        type="number"
                        id="fontSize"
                        value={headerInfo.styles.fontSize}
                        onChange={(e) => handleChangesOnHeader(e, "fontSize")}
                    />
                </div>
                <div>
                    <label htmlFor="fontWeight">Font Weight:</label>
                    <select id="fontWeight" value={headerInfo.styles.fontWeight} onChange={(e) => handleChangesOnHeader(e, "fontWeight")}>
                        <option value="300" style={{ fontWeight: 300 }} >300 Light</option>
                        <option value="400" style={{ fontWeight: 400 }}>400 Regular</option>
                        <option value="500" style={{ fontWeight: 500 }}>500 Medium</option>
                        <option value="600" style={{ fontWeight: 600 }}>600 Semi-Bold</option>
                        <option value="700" style={{ fontWeight: 700 }}>700 Bold</option>
                        <option value="800" style={{ fontWeight: 800 }}>800 Extra-Bold</option>
                    </select>
                </div>

            </>)}

            {type === 'logo' && <>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input
                        type="number"
                        id="width"
                        value={headerInfo.styles.width}
                        onChange={(e) => handleChangesOnHeader(e, "width")}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input
                        type="number"
                        id="height"
                        value={headerInfo.styles.height}
                        onChange={(e) => handleChangesOnHeader(e, "height")}
                    />
                </div>
            </>}

        </div>
    );
};


export const IconPicker = ({ iconName, setHeaderInfo, headerInfo, index }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredIcons, setFilteredIcons] = useState(icons);

    const changeIcon =(e)=>{
        const updatedItems = [...headerInfo.items];
        updatedItems[index].icon = e;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }
 
    
    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = icons.filter((icon) =>
            icon.icon.toLowerCase().includes(query)
        );
        setFilteredIcons(filtered);
    };

    return (
        <div>
            <div className="secondDiv">
                <div className="serach">
                    <div className="serachdivefirst">
                        <div className={'inputbox inputBoxFocus '}>
                            <input className="" placeholder="Search..." type="text" defaultValue
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="box ">
                            <SearchIcon className='icon' />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="icon-picker-list row">
                {filteredIcons.map((icon, index) => (
                    <li key={index} className="col-md-2" >
                        <a className={icon.icon === iconName && "selected-icon"}
                            onClick={() => changeIcon(icon.icon)}
                        >
                            <span className={icon.icon}></span>
                        </a>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default TextEditor;
