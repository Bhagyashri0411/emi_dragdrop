import React, { useState } from 'react';
import HomeMainSection from './Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import StyleComponent from './MainComponents/StyleComponent';
import "./MainComponents/mainComponents.css";
import GridOptionComponent from './MainComponents/GridOptionComponent';


const Main = () => {
    const width = "220px";

    const [open, setOpen] = React.useState(true);
    const [openStyleBox, setOpenStyleBox] = React.useState(true);

    // const for card
    const [boxes, setBoxes] = useState([]);
    // const for grid collection
    const [gridsBlock, setGridsBlock] = useState([]);


    // Selection
    const [selectedBox, setSelectedBox] = useState(null);
    const [selectedGrid, setSelectedGrid] = useState(null);
    const [selectedMainGrid, setSelectedMainGrid] = useState(null);


    // const for custom grid section
    const [openGridSection, setOpenGridSection] = useState(false);

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
            dimensions: { width: 100, height: 100, padding: 5, border_radius: "10", bg: "blue" },
            unit: { width: "px", height: "px" },

            textstyle: {
                text: "cardvgh",
                fontSize: 15, fontWeight: 500,
                tcolor: "white"
            }
        };
        setBoxes([...boxes, newBox]);
    };


    const handleMouseClick = (id) => {
        setSelectedBox(id);
        setOpenStyleBox(false)
    }

    // gridfunctions


    const handleMouseClickGrid = (id, name) => {
        if (name === "main") {
            setSelectedMainGrid(id);
            setSelectedGrid(null); // Reset other grid selection
        } else if (name === "") {
            setSelectedGrid(id);
            setSelectedMainGrid(null); // Reset main grid selection
        }

        setOpenStyleBox(true);
    };

    // function for add grid
    const handleAddGrid = (columns, rows) => {
        // Calculate total number of cells
        const totalCells = columns * rows;

        // Create an array of items for the grid
        const gridItems = Array.from({ length: totalCells }, (_, index) => ({
            id: index + 1,
            text: `Item ${index + 1}`,
            styles: {
                padding: [10, 12], margin: [10, 5], width: [100, "%"]
            },

        }));

        const newGrid = {
            mainid: Date.now(),
            items: gridItems,
            styles: { gap: 10, height:[100, "px"] },
            columns: columns,
            rows: rows
        };

        setGridsBlock([...gridsBlock, newGrid])
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
                                handleAddBox={handleAddBox}
                                handleAddGrid={handleAddGrid}
                                setSelectedBox={setSelectedBox}
                                // Grid section open const
                                setOpenGridSection={setOpenGridSection}
                            />
                        </div>
                        <div className='secondColumn' style={{ width: open ? `calc(100% - ${width})` : '100%' }}>
                            <div className='pt-3'>
                                <HomeMainSection
                                    boxes={boxes}
                                    selectedBox={selectedBox}
                                    setSelectedBox={setSelectedBox}
                                    setBoxes={setBoxes}
                                    handleMouseClick={handleMouseClick}
                                    // handle click on grid
                                    gridsBlock={gridsBlock}
                                    setGridsBlock={setGridsBlock}
                                    selectedGrid={selectedGrid}
                                    selectedMainGrid={selectedMainGrid}
                                    setSelectedGrid={setSelectedGrid}
                                    handleMouseClickGrid={handleMouseClickGrid}
                                />
                            </div>

                        </div>

                        {openGridSection || selectedGrid ? (

                            <div className='thirdColumn grid' style={{ width: openStyleBox ? "360px" : "0" }}>
                                <GridOptionComponent
                                    selectedGrid={selectedGrid}
                                    gridsBlock={gridsBlock}
                                    setGridsBlock={setGridsBlock}
                                    // handle grid
                                    handleAddGrid={handleAddGrid}

                                />
                            </div>
                        ) :
                            <div className='thirdColumn' style={{ width: openStyleBox ? "0" : "350px" }}>
                                <StyleComponent
                                    handleFun={handleOpenandCloseStyleDrawer}
                                    open={openStyleBox}
                                    boxes={boxes}
                                    setBoxes={setBoxes}
                                    selectedBox={selectedBox}
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