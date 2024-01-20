import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import HomeMainSection from './EditDashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import "./MainComponents/mainComponents.css";
import DefaultHeaderOption from './MainComponents/LeftSidebarOptionComponent/DefaultHeaderOption';
import MainPageOptionComponent from './MainComponents/LeftSidebarOptionComponent/MainPageOption';
import { NewSidebarcomponent, Newheadercomponent } from '../pageDetails';
import DefaultSidebarOption from './MainComponents/LeftSidebarOptionComponent/DefaultSidebarOption';


const Main = forwardRef(({ page, setPage }, ref) => {
    const width = "350px";

    const [propertyPage, setPropertyPage] = React.useState();
    // set for header component
    const [headerInfo, setHeaderInfo] = useState({})

    const handleAddHeader = () => {
        setPage((prevPage) => [
            {
                ...prevPage[0],
                components: {
                    ...prevPage[0].components,
                    headercomponent: Newheadercomponent
                }
            },
        ]);

    };

    const handleAddSidebarData = () => {
        setPage((prevPage) => [
            {
                ...prevPage[0],
                components: {
                    ...prevPage[0].components,
                    sidebarcomponent: NewSidebarcomponent
                }
            },
        ]);

    };
    // Third bar
    const [isTrue, setIsTrue] = useState([false, null]);

    // Create a ref for the div
    const myDivRef = useRef();

    // Expose the ref to the parent component
    useImperativeHandle(ref, () => ({
        getHtmlContent: () => {
            if (myDivRef.current) {
                return myDivRef.current.innerHTML;
            }
        }
    }));
    return (
        <>
            <div className='MainBackground'>
                <div className='mainLayout'>
                    <div className='fisrtColumn'>
                        <Sidebar
                            // Header function
                            handleAddHeader={handleAddHeader}
                            // sidebar function
                            handleAddSidebarData={handleAddSidebarData}
                        />
                    </div>
                    <div className='secondColumn' style={{ width: '100%' }}>
                        <div className='pt-3' ref={myDivRef}>
                            <HomeMainSection
                                page={page}
                                setPage={setPage}
                                // Header
                                setHeaderInfo={setHeaderInfo}
                                headerInfo={headerInfo}
                                isTrue={isTrue}
                                setIsTrue={setIsTrue}
                            />
                        </div>

                    </div>
                    <i data-lucide="search"></i>
                    <div className='rightSideBar' style={{ width: isTrue[0] ? "25px" : width }}>

                        <div className="noBorderTop">
                            <div className={`${isTrue[0] ? 'd-none' : 'd-block'}`}>
                                {isTrue[1] === "header" &&
                                    <DefaultHeaderOption page={page} setPage={setPage} />
                                }
                                {isTrue[1] === "sidebar" &&
                                    <DefaultSidebarOption page={page} setPage={setPage} />
                                }
                                {isTrue[1] === null &&
                                    <MainPageOptionComponent
                                        setPropertyPage={setPropertyPage}
                                        propertyPage={propertyPage}
                                        page={page}
                                        setPage={setPage}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})


export default Main