import React, { useState } from 'react';
import ColorInput from '../../../CommonComponents/ColorInput';
import { ChevronRight } from 'lucide-react';

export default function MainPageOptionComponent(props) {

    const handleEditBack = (e) => {
        const updatedPage = [{
            ...props.page[0], mainPageStyles: {
                ...props.page[0].mainPageStyles,
                bgColor: e.target.value
            }
        }];
        props.setPage(updatedPage);
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
                        <h2 className="Heading--xs">/</h2>
                    </div>
                </div>
            </div>

            <div className='blockflex mt-2'>
                <h6>Background</h6>
            </div>
            <ColorInput bgval={props.page[0].mainPageStyles.bgColor} funOnchange={handleEditBack} />
        </>
    );
}
