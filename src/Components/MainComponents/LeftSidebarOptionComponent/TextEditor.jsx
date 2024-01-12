import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react';

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

    const addItem = () => {
        const newItems = [...headerInfo.items, { label: 'New Item', icon: '', border: [false, false] }];
        setHeaderInfo({ ...headerInfo, items: newItems });
    };

    const updateItemLabel = (index, name) => {
        const updatedItems = [...headerInfo.items];
        updatedItems[index].label = name;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    };
    const addBorder = (index, place) => {
        const updatedItems = [...headerInfo.items];
        updatedItems[index].border[place] = !updatedItems[index].border[place];
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }
    return (
        <>

            <div className='p-3'>
                {headerInfo.items.map((item, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="text"
                                value={item.label}
                                onChange={(e) => updateItemLabel(index, e.target.value,)}
                                style={{ marginRight: '10px' }}
                            />
                        </div>
                        <button className='ms-2' onClick={() => addBorder(index, "0")}>
                            {item.border[0] ? "Remove " : "Add "}
                            Left
                        </button>
                        <button className='ms-2' onClick={() => addBorder(index, "1")}>
                            {item.border[1] ? "Remove " : "Add "}

                            RIght</button>
                    </div>
                ))}
                <button onClick={addItem}>Add Item</button>
            </div>
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

export default TextEditor;
