import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import HomeMainSection from './EditDashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import "./MainComponents/mainComponents.css";
import DefaultHeaderOption from './MainComponents/LeftSidebarOptionComponent/DefaultHeaderOption';
import MainPageOptionComponent from './MainComponents/LeftSidebarOptionComponent/MainPageOption';
import { NewSidebarcomponent, Newheadercomponent } from '../pageDetails';
import DefaultSidebarOption from './MainComponents/LeftSidebarOptionComponent/DefaultSidebarOption';


const Main = ({ page, setPage, singlePage ,isTrue, setIsTrue }) => {
    
    return (
        <div className='secondColumn' style={{ width: '100%' }}>
            <div className='pt-3'>
                <HomeMainSection
                    page={page}
                    setPage={setPage}
                    singlePage={singlePage}
                    // Header
                    isTrue={isTrue}
                    setIsTrue={setIsTrue}
                />
            </div>
        </div>
    )
};


export default Main