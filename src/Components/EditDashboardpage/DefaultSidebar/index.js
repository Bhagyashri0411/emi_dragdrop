import React, { useState } from 'react';
import { Home, BarChart4, ChevronRight, ChevronRightIcon, ChevronLastIcon, ChevronLeft } from 'lucide-react';
import './default.sidebar.css';

function DefaultSidebar({ sidebarcomponent, setIsTrue }) {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    const sidebarStyle = {
        width: isSidebarVisible ? '250px' : '0',
        backgroundColor: sidebarcomponent.styles.bgColor,
        color: sidebarcomponent.styles.color
    };

    const buttonStyle = {
        marginLeft: isSidebarVisible ? "250px" : "0"
    }
    
    return (
        <>
            <div id="mySidebar" className="sidebar" style={sidebarStyle}
                onClick={() => setIsTrue([false, sidebarcomponent.id])}>
                <div className="sidebar-box position-relative" style={sidebarStyle}>
                    {isSidebarVisible && (
                        <div className="side">
                            <ul>
                                {sidebarcomponent.items.map((item, key) =>
                                    <li key={key}>
                                        <Home style={{ margin: '10px' }} />
                                        {item.itemname}
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
            <div id="main" style={buttonStyle}>
                <button className="openbtn" onClick={(e) => { e.stopPropagation(); handleToggleSidebar() }}>
                    {isSidebarVisible ? <ChevronLeft /> : <ChevronRightIcon />}
                </button>
            </div>

        </>
    );
}

export default DefaultSidebar;