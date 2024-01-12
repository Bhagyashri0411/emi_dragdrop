import React, { useState } from 'react';
import HomeMainSection from './Dashboardpage/HomeMainSection';
import Sidebar from './MainComponents/Sidebar';
import GridOptionComponent from './MainComponents/LeftSidebarOptionComponent/GridOptionComponent';
import BoxOptionCompoent from './MainComponents/LeftSidebarOptionComponent/BoxOptionComponent';
import MainPageOptionComponent from './MainComponents/LeftSidebarOptionComponent/MainPageOptionComponent';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "./MainComponents/mainComponents.css";
import RandomNumberGenerator from './CommonComponents/RandomNumberGenerator';

const Main = () => {
    const width = "350px";

    const [boxes, setBoxes] = useState([]);
    // const for grid collection
    const [gridsBlock, setGridsBlock] = useState([]);
    const [graph, setGraph] = useState(false);
    // main page style
    const [propertyPage, setPropertyPage] = React.useState();
    // set for header component
    const [headerInfo, setHeaderInfo] = useState({})

    // Selection
    const [selectedBox, setSelectedBox] = useState(null);
    const [selectedGrid, setSelectedGrid] = useState(["", ""]);
    const [selectedText, setSelectedText] = useState(["", "", "", null]);
    // select header
    const [selectedHeader, setSelectedHeader] = useState(null)

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
                gap: 10, height: [100, "px"], margin: [10, 5, 2, 3], padding: [5, 2, 2, 3],
                gridColumn: noOfGrid
            },
            columns: columns,
            rows: rows
        };

        setGridsBlock([...gridsBlock, newGrid]);

    };

    // function to add header
    const handleAddHeader = () => {
        const header = {
            id: RandomNumberGenerator(),
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
                { label: 'Home', icon: "", type:"text", border: [false, false] },
                { label: 'About', icon: "", type:"text", border: [false, false] },
            ],
        }
        setHeaderInfo(header);
    }


    // Third bar
    const [isTrue, setIsTrue] = useState(true);

    const toggleValue = () => {
        setIsTrue((prevValue) => !prevValue);
    };

    const handleAddDounghut = () => {
        setGraph(true);
    }

    return (
        <>
            <div className='MainBackground'>
                <div className='container-fluid'>
                    <div className='mainLayout'>
                        <div className='fisrtColumn'>
                            <Sidebar
                                handleAddBox={handleAddBox}
                                handleAddGrid={handleAddGrid}
                                handleAddDounghut={handleAddDounghut}
                                setSelectedBox={setSelectedBox}
                                setSelectedGrid={setSelectedGrid}

                                // Header function
                                handleAddHeader={handleAddHeader}
                            />
                        </div>
                        <div className='secondColumn' style={{ width: '100%' }}>
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
                                    // graph
                                    graph={graph}

                                    // Header
                                    setHeaderInfo={setHeaderInfo}
                                    headerInfo={headerInfo}
                                    selectedHeader={selectedHeader}
                                    setSelectedHeader={setSelectedHeader}
                                />
                            </div>

                        </div>

                        <div className='thirdColumn' style={{ width: isTrue ? "25px" : width }}>
                            <div className="subheading">
                                <div className='icon' onClick={toggleValue}>
                                    {isTrue ?
                                        <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />
                                    }
                                </div>
                            </div>

                            <div className={`${isTrue ? 'd-none' : 'd-block'}`}>
                                {
                                    selectedBox ?
                                        <BoxOptionCompoent
                                            boxes={boxes}
                                            setBoxes={setBoxes}
                                            selectedBox={selectedBox}
                                        />
                                        :
                                        selectedGrid[0] || selectedText[0] ?

                                            <GridOptionComponent
                                                gridsBlock={gridsBlock}
                                                setGridsBlock={setGridsBlock}
                                                selectedGrid={selectedGrid}
                                                handleAddGrid={handleAddGrid}
                                                selectedText={selectedText}
                                                setSelectedText={setSelectedText}
                                            />
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