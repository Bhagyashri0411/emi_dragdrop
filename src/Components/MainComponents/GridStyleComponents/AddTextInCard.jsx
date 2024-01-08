import { MDBBtn } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import RandomNumberGenerator from '../../CommonComponents/RandomNumberGenerator';

export default function AddTextInCard(props) {
    // add text
    const [texts, setTexts] = useState([])
    const addText = () => {
        const newText = {
            id: RandomNumberGenerator(), text: 'Text', x: 0, y: 0, styles: {
                fontSize: 18, fontWeight: 500, fontstyle: ["bold", "", "underlined"], color: "#fff"
            }
        };
        setTexts([...texts, newText]);

        // Update gridsBlock items
        const updatedItems = props.gridsBlock.map((item) => {
            if (item.mainid === props.selectedGrid[1]) {
                const selectedItemId = props.selectedGrid[0];
                const updatedItems = item.items.map((innerItem) => {
                    if (innerItem.id === selectedItemId) {
                        const updatedAddedHeadText = innerItem.addedHeadText
                            ? [...innerItem.addedHeadText, newText]
                            : [newText];
                        return { ...innerItem, addedHeadText: updatedAddedHeadText };
                    }
                    return innerItem;
                });
                return { ...item, items: updatedItems };
            }
            return item;
        });

        props.setGridsBlock(updatedItems);
    };

    return <MDBBtn onClick={addText}>Text</MDBBtn>

}
