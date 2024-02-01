import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight} from 'lucide-react'; // Assuming you have ChevronUp imported
import './default.sidebar.css';
import { Iconlists } from '../../CommonComponents/Iconlists';

function DefaultSidebar({ page, setIsTrue, isTrue }) {
  const sidebarcomponent = page.sidebarcomponent;

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  console.log(sidebarcomponent);
  const handleToggleSidebar = ( ) => {
    setIsSidebarVisible(!isSidebarVisible);
    // setSidebarDirection(direction);
  };

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    height: '100%',
    flexDirection: sidebarcomponent.position==='left' ? 'row':'row-reverse' // To place the button on the respective side
  };

  const buttonStyle = {
    transition: 'margin-right 0.4s ease',
    color: 'white',
    right: '0',
    top: '50%',
    transform: 'translateY(-50%)'
  };

  const sidebarStyle = {
    position: 'absolute',
    width: isSidebarVisible ? '250px' : '0',
    // overflowY: 'auto',
    // zIndex: 1000,
    transition: 'width 0.4s ease',
    backgroundColor: sidebarcomponent.styles.bgColor,
    color: sidebarcomponent.styles.color,
   // Align sidebar to the respective side
  };

  const applyStylesItem = (item) => ({
    margin: '5px',
    // Add more styles as needed
  });

  return (
    <div className="" style={containerStyle}>
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
                    <a href={item.href} style={{ display: 'flex', alignItems: 'center' }}  onClick={(e) => {
                      e.preventDefault();
                     
                    }}>
                      {item.icon && (
                        Iconlists.map((icon, iconIndex) =>
                          icon.name === item.icon && <icon.icon key={iconIndex} />
                        )
                      )}
                      {item.itemname && <span style={{ marginLeft: '5px' }}>{item.itemname}</span>}

                    </a>
                  </li>
             


                </div>
              ))}
            </ul>
          </div>
        )}
      </div>

  

      
      <div className='Three' style={{ marginLeft: '20px' }}>
   
      <button className="Btn-1" onClick={() => handleToggleSidebar('right')} >
          <ChevronLeft  />
        </button>
        
      {/* <div className='Btn-1' style={{  display: selectedPosition === 'right' ? 'block' : 'none' }}>
       
      </div>
      <div className='Btn-2' style={{ display: selectedPosition === 'left' ? 'block' : 'none' }}>
        <button className="btn" onClick={() => handleToggleSidebar('left')} >
          <ChevronRight className={`PanelRightButton ${isSidebarVisible ? 'click' : ''}`} />
        </button>
      </div>
      <div className='Btn-3' style={{ display: selectedPosition === 'top' ? 'block' : 'none' }}>
        <button className="btn" onClick={() => handleToggleSidebar('top')} >
          <ChevronDown className={`PanelRightButton ${isSidebarVisible ? 'click' : ''}`} />
        </button>
      </div> */}
      </div>

     </div>
  );
}

export default DefaultSidebar;

