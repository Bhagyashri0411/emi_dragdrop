import React, { useState } from 'react';
import HomeMainSection from './Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./MainComponents/mainComponents.css";
import RandomNumberGenerator from './CommonComponents/RandomNumberGenerator';
import DefaultHeaderOption from './MainComponents/LeftSidebarOptionComponent/DefaultHeaderOption';
import MainPageOptionComponent from './MainComponents/LeftSidebarOptionComponent/MainPageOption';
import { Home } from 'lucide-react';


const Main = () => {
    const width = "350px";

    // main page style
    const [propertyPage, setPropertyPage] = React.useState();
    // set for header component
    const [headerInfo, setHeaderInfo] = useState({})

    // select header
    const [selectedHeader, setSelectedHeader] = useState(null)

    // function to add header
    const handleAddHeader = () => {
        const header = {
            id: `header${RandomNumberGenerator()}`,
            mainHeader: 'Welcome!',
            size: 12,
            logo: "",
            type: "text",
            styles: {
                bgColor: '#3498db', color: "#ffffff", padding: [10, 10],
                fontSize: 18, fontWeight: 500,
                width: 8, height: 5
            },
            items: [
                { id: RandomNumberGenerator(), label: 'Home', icon: <Home />, type: true, border: [false, false] },
                { id: RandomNumberGenerator(), label: 'About', icon: "fa fa-user", type: true, border: [false, false] },
            ],
        }
        setHeaderInfo(header);
    }


    // Third bar
    const [isTrue, setIsTrue] = useState(true);

    const toggleValue = () => {
        setIsTrue((prevValue) => !prevValue);
    };


    return (
        <>
            <div className='MainBackground'>
                <div className='container-fluid'>
                    <div className='mainLayout'>
                        <div className='fisrtColumn'>
                            <Sidebar
                                // Header function
                                handleAddHeader={handleAddHeader}
                            />
                        </div>
                        <div className='secondColumn' style={{ width: '100%' }}>
                            <div className='pt-3'>
                                <HomeMainSection
                                    propertyPage={propertyPage}
                                    // Header
                                    setHeaderInfo={setHeaderInfo}
                                    headerInfo={headerInfo}
                                    selectedHeader={selectedHeader}
                                    setSelectedHeader={setSelectedHeader}
                                />
                            </div>

                        </div>
                        <i data-lucide="search"></i>
                        <div className='thirdColumn' style={{ width: isTrue ? "25px" : width }}>
                            <div className="subheading">
                                <div className='icon' onClick={toggleValue}>
                                    {isTrue ?
                                        <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
                                    }
                                </div>
                            </div>

                            <div className={`${isTrue ? 'd-none' : 'd-block'}`}>
                                {selectedHeader ? <DefaultHeaderOption headerInfo={headerInfo} setHeaderInfo={setHeaderInfo} />
                                    :

                                    <MainPageOptionComponent
                                        setPropertyPage={setPropertyPage}
                                        propertyPage={propertyPage}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Main