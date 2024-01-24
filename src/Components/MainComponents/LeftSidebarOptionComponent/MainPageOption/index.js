import React, { useState } from 'react';
import ColorInput from '../../../CommonComponents/ColorInput';
import { ChevronRight } from 'lucide-react';

export default function MainPageOptionComponent({ singlePage, page, setPage }) {

    const handleEditBack = (e) => {
        const updatedPage = {
            ...singlePage,
            mainPageStyles: {
                ...singlePage.mainPageStyles,
                bgColor: e.target.value,
            },
        };

        const updatedPages = page.map((itempage) => {
            if (itempage.id === updatedPage.id) {
                return updatedPage;
            } else {
                return itempage;
            }
        });
        
        setPage(updatedPages);
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
            <ColorInput bgval={singlePage.mainPageStyles.bgColor} funOnchange={handleEditBack} />
        </>
    );
}
