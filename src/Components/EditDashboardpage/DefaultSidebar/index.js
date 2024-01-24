import { Home, BarChart4, ChevronRight } from 'lucide-react';
import './default.sidebar.css';
import { useState } from 'react';

function DefaultSidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const containerStyle = {
    display: 'flex',
  };

  const buttonStyle = {
    // marginLeft: isSidebarVisible ? '250px' : '0',
    transition: 'margin-left 0.4s ease',
  };

  const sidebarStyle = {
   position:'relative',
    width: isSidebarVisible ? '250px' : '0',
    overflow: 'hidden',
    transition: 'width 0.4s ease',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="sidebar-box" style={sidebarStyle}>
        {isSidebarVisible && (
          <div className="side">
            <ul>
            <li>
          <Home style={{ margin: '10px' }} />
          Home
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Energy Consuption
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          TPS Overview
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Unit Level Overview
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Fuel Monitoring
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Formula Manage
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Multiple KPI Trending
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          User Manual Tags
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          user Auther
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          optimization
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Ems 
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Ems 
        </li>
        <li>
          <BarChart4 style={{ margin: '10px' }} />
          Ems 
        </li>
              {/* Add other sidebar items as needed */}
            </ul>
          </div>
        )}
           
      </div>
  
      <div className="btn-box">
        <button className="btn" onClick={handleToggleSidebar} style={buttonStyle}>
          <ChevronRight className={`PanelRightButton ${isSidebarVisible ? 'click' : ''}`} />
        </button>
      </div>
      
    </div>
  );
}

export default DefaultSidebar;