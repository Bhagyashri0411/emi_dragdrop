import React, { useState } from 'react';
import HomeMainSection from './Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import StyleComponent from './MainComponents/StyleComponent';
import "./MainComponents/mainComponents.css";


const Main = () => {
    const width = "220px";

    const [open, setOpen] = React.useState(true);
    const [openStyleBox, setOpenStyleBox] = React.useState(true);

    const [boxes, setBoxes] = useState([]);
    const [selectedBox, setSelectedBox] = useState(null);

    // Close and open side bar
    const handleOpenandCloseDrawer = () => {
        setOpen(!open);
    };

    // close and open stylecomponent
    const handleOpenandCloseStyleDrawer = () => {
        setOpenStyleBox(!openStyleBox);
    }

    const handleAddBox = () => {
        const newBox = {
            id: Date.now(),
            text: "cardvgh",
            position: { x: 0, y: 0 },
            dimensions: { width: 100, height: 100, padding: 5 },
            style: { border_radius: 10 }
        };
        setBoxes([...boxes, newBox]);
    };

    const handleMouseClick = (e, id) => {
        setSelectedBox(id);
        setOpenStyleBox(false)
    }

    return (
        <>
            <div className='MainBackground'>
                <div className='container-fluid'>
                    <div className='mainLayout'>
                        <div className='fisrtColumn'
                            style={{ width: open ? width : '' }}>
                            <Sidebar open={open}
                                handleFun={handleOpenandCloseDrawer}
                                handleAddBox={handleAddBox} />
                        </div>
                        <div className='secondColumn' style={{ width: open ? `calc(100% - ${width})` : '100%' }}>
                            <div className='pt-3'>
                                <HomeMainSection
                                    boxes={boxes}
                                    selectedBox={selectedBox}
                                    setSelectedBox={setSelectedBox}
                                    setBoxes={setBoxes}
                                    handleMouseClick={handleMouseClick}
                                />
                            </div>

                        </div>
                        <div className='thirdColumn' style={{ width: openStyleBox ? "0" : "350px" }}>
                            <StyleComponent handleFun={handleOpenandCloseStyleDrawer} open={openStyleBox}
                                boxes={boxes}
                                setBoxes={setBoxes}
                                selectedBox={selectedBox}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main