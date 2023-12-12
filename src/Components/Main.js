import React, { useState } from 'react';
import HomeMainSection from './Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import "./MainComponents/mainComponents.css";
import GridOptionComponent from './MainComponents/LeftSidebarOptionComponent/GridOptionComponent';
import BoxOptionCompoent from './MainComponents/LeftSidebarOptionComponent/BoxOptionComponent';
import MainPageOptionComponent from './MainComponents/LeftSidebarOptionComponent/MainPageOptionComponent';

const Main = () => {
    const width = "220px";

    const [open, setOpen] = React.useState(true);
    const [openStyleBox, setOpenStyleBox] = React.useState(true);

    // const for card
    const [boxes, setBoxes] = useState([]);
    // const for grid collection
    const [gridsBlock, setGridsBlock] = useState([]);
    // main page style
    const [propertyPage, setPropertyPage] = React.useState();

    // Selection
    const [selectedBox, setSelectedBox] = useState(null);
    const [selectedGrid, setSelectedGrid] = useState(["", ""]);
    const [selectedText, setSelectedText] = useState(["", "", ""]);


    // Close and open side bar
    const handleOpenandCloseDrawer = () => {
        setOpen(!open);
    };

    // close and open stylecomponent
    const handleOpenandCloseStyleDrawer = () => {
        setOpenStyleBox(!openStyleBox);
    }

    // Add Card
    const handleAddBox = () => {
        const newBox = {
            id: Date.now(),
            position: { x: 0, y: 0 },
            dimensions: { width: 100, height: 100, padding: '5', border_radius: "10", bg: "blue", border: ["3", "dotted", "#E50B0B"] },
            unit: { width: "px", height: "px" },

            textstyle: {
                text: "cardvgh",
                fontSize: 15, fontWeight: 500,
                tcolor: "white"
            }
        };
        setBoxes([...boxes, newBox]);
    };


    // function for add grid
    const handleAddGrid = (columns, rows) => {
        const totalCells = columns * rows;

        // Create an array of items for the grid
        const gridItems = Array.from({ length: totalCells }, (_, index) => ({
            id: String(Date.now()).slice(-4) + (index + 1),
            styles: {
                padding: [10, 12], width: [100, "%"], bg: [45, "#26293c", "#26293c"],
                border: [0, 0, 0, 0, "solid", "blue"], radius: 5
            },
        }));

        const noOfGrid = Array.from({ length: columns }, () => "1fr");

        const newGrid = {
            mainid: String(Date.now()).slice(-3),
            items: gridItems,
            styles: {
                gap: 10, height: [100, "px"], margin: [10, 5, 2, 3],
                gridColumn: noOfGrid
            },
            columns: columns,
            rows: rows
        };

        setGridsBlock([...gridsBlock, newGrid]);

    };

    return (
        <>
            <div className='MainBackground'>
                <div className='container-fluid'>
                    <div className='mainLayout'>
                        <div className='fisrtColumn'
                            style={{ width: open ? width : '' }}>
                            <Sidebar open={open}
                                handleFun={handleOpenandCloseDrawer}
                                handleAddBox={handleAddBox}
                                handleAddGrid={handleAddGrid}
                                setSelectedBox={setSelectedBox}
                                setSelectedGrid={setSelectedGrid}
                            />
                        </div>
                        <div className='secondColumn' style={{ width: open ? `calc(100% - ${width})` : '100%' }}>
                            <div className='pt-3'>
                                <HomeMainSection
                                    propertyPage={propertyPage}
                                    boxes={boxes}
                                    setBoxes={setBoxes}
                                    selectedBox={selectedBox}
                                    setSelectedBox={setSelectedBox}
                                    // elements for grids
                                    gridsBlock={gridsBlock}
                                    setGridsBlock={setGridsBlock}

                                    selectedGrid={selectedGrid}
                                    setSelectedGrid={setSelectedGrid}

                                    // elements for text in grids
                                    selectedText={selectedText}
                                    setSelectedText={setSelectedText}

                                />
                            </div>

                        </div>

                        {
                            selectedBox ?
                                <div className='thirdColumn' style={{ width: openStyleBox ? "350px" : "0" }}>
                                    <BoxOptionCompoent
                                        handleFun={handleOpenandCloseStyleDrawer}
                                        open={openStyleBox}
                                        boxes={boxes}
                                        setBoxes={setBoxes}
                                        selectedBox={selectedBox}
                                    />
                                </div> :

                                selectedGrid[0] || selectedText[0] ?

                                    <div className='thirdColumn grid' style={{ width: openStyleBox ? "360px" : "0" }}>
                                        <GridOptionComponent
                                            handleFun={handleOpenandCloseStyleDrawer}
                                            open={openStyleBox}
                                            gridsBlock={gridsBlock}
                                            setGridsBlock={setGridsBlock}
                                            selectedGrid={selectedGrid}
                                            handleAddGrid={handleAddGrid}
                                            selectedText={selectedText}
                                        />
                                    </div>
                                    :
                                    <div className='thirdColumn Mainpage' style={{ width: openStyleBox ? "250px" : "0" }}>
                                        <MainPageOptionComponent
                                            open={openStyleBox}
                                            handleFun={handleOpenandCloseStyleDrawer}
                                            setPropertyPage={setPropertyPage}
                                            propertyPage={propertyPage}
                                        />
                                    </div>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main