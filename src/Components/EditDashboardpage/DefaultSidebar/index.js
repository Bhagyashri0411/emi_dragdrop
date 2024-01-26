//from sidebar branch


import React from 'react';
import { ChevronRight } from 'lucide-react';
import './default.sidebar.css';
import { useState } from 'react';
import { Iconlists } from '../../CommonComponents/Iconlists';

function DefaultSidebar({ page, setIsTrue, isTrue }) {
  const sidebarcomponent = page.sidebarcomponent;

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const containerStyle = {
    display: 'flex',
  };

  const buttonStyle = {
    transition: 'margin-left 0.4s ease',
  };

  const sidebarStyle = {
    position: 'relative',
    width: isSidebarVisible ? '250px' : '0',
    overflow: 'hidden',
    transition: 'width 0.4s ease',
    backgroundColor: sidebarcomponent.styles.bgColor,
    color: sidebarcomponent.styles.color,
  };

  const applyStylesItem = (item) => ({
    margin: '5px',
    // Add more styles as needed
  });

  return (
    <div className="container" style={containerStyle}>
      <div
        className={`sidebar-box ${isTrue[1] === 'sidebar' && 'selected'}`}
        style={sidebarStyle}
        onClick={() => setIsTrue([false, sidebarcomponent.id])}
      >
        {isSidebarVisible && (
          <div className="side">
            <ul>
              {sidebarcomponent.items.map((item, index) => (
                <div key={index} style={applyStylesItem(item.styles)}>
                  <li>
                    <a href={item.href} style={{ display: 'flex', alignItems: 'center' }}>
                      {/* {item.icon && (
                        Iconlists.map((icon, iconIndex) =>
                          icon.name === item.icon && <icon.icon key={iconIndex} />
                        )
                      )} */}
                      {item.itemname && <span style={{ marginLeft: '5px' }}>{item.itemname}</span>}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="btn-box">
        <button className="btn" onClick={handleToggleSidebar} style={buttonStyle}>
          <ChevronRight
            className={`PanelRightButton ${isSidebarVisible ? 'click' : ''}`}
          />
        </button>
      </div>
    </div>
  );
}

export default DefaultSidebar;


