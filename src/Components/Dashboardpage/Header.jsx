import React from 'react';
import TextEditor, { HeaderEditors, ItemsEditors } from '../MainComponents/LeftSidebarOptionComponent/TextEditor';
import CustomMenu from '../CommonComponents/CustomMenu';
import { Menu } from '@mui/material';

const Header = (props) => {
  const [menuEl, setMenuEl] = React.useState(null);
  const [menuElImage, setMenuElImage] = React.useState(null);
  const [menuEItems, setMenuEItems] = React.useState(null);
  const [menuEMainHeader, setMenuEMainHeader] = React.useState(null);

  const openMenu = (stateSetter, event) => {
    // Close all other menus before opening the new one
    closeAllMenus();
    stateSetter(event.currentTarget);
  };

  const closeAllMenus = () => {
    setMenuEl(null);
    setMenuElImage(null);
    setMenuEItems(null);
    setMenuEMainHeader(null);
  };

  const closeMenu = (stateSetter) => {
    stateSetter(null);
  };

  const handleOpenMenu = (stateSetter, event) => {
    openMenu(stateSetter, event);
  };

  const handleCloseMenu = (stateSetter) => {
    closeMenu(stateSetter);
  };

  const com = props.headerInfo.styles;

  const applyStyles = () => ({
    fontSize: `${com.fontSize}px`,
    fontWeight: com.fontWeight,
    color: com.fontColor,
  });

  const applyStylesLogo = () => ({
    width: `${com.width}rem`,
    height: `${com.height}rem`,
  });

  const applyStyleItems = (border) => ({
    borderLeft: border[0] ? '2px solid' : 'none',
    borderRight: border[1] ? '2px solid' : 'none',
    padding: `${com.padding[0]}px ${com.padding[1]}px`,
  });

  const handleMenu = (stateSetter) => (event) => {
    handleOpenMenu(stateSetter, event);
  };

  const handleCloseMenuWithState = (stateSetter) => () => {
    closeMenu(stateSetter);
  };

  return (
    <>
      <nav
        className={`header ${props.selectedHeader === props.headerInfo.id && "selected"}`}
        style={{ backgroundColor: com.bgColor, color: com.color }}
        onClick={(e) => { e.stopPropagation(); props.setSelectedHeader(props.headerInfo.id) }}
        onMouseEnter={handleMenu(setMenuEMainHeader)}
      >
        {/* <Menu
          anchorEl={menuEMainHeader}
          id="account-menu"
          open={Boolean(menuEMainHeader)}
          onClose={handleCloseMenuWithState(setMenuEMainHeader)}
          onMouseLeave={handleCloseMenuWithState(setMenuEMainHeader)}
          PaperProps={{
            sx: {
              overflow: 'visible',
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: 40,
                bottom: -5,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateX(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        >
          <HeaderEditors headerInfo={props.headerInfo} setHeaderInfo={props.setHeaderInfo} />
        </Menu> */}
        <div className='row'>
          <div className={`col-md-${props.headerInfo.size} mx-auto`}>
            <div className='d-flex justify-content-between align-items-center'>
              {props.headerInfo.type === 'text' ? (
                <>
                  <h1 className='mb-0' style={applyStyles()} onMouseEnter={(e) => { e.stopPropagation(); handleOpenMenu(setMenuEl, e) }}>
                    {props.headerInfo.mainHeader}
                  </h1>
                  {/* <CustomMenu
                    anchorEl={menuEl}
                    onClose={handleCloseMenuWithState(setMenuEl)}
                    onMouseLeave={handleCloseMenuWithState(setMenuEl)}
                    contentComponent={TextEditor}
                    componentProps={{ headerInfo: props.headerInfo, setHeaderInfo: props.setHeaderInfo }}
                  /> */}
                </>
              ) : (
                <div>
                  {props.headerInfo.logo && (
                    <img
                      src={URL.createObjectURL(props.headerInfo.logo)}
                      alt="CompanyLogo"
                      style={applyStylesLogo()}
                      onMouseEnter={(e) => { e.stopPropagation(); handleOpenMenu(setMenuElImage, e) }}
                    />
                  )}
                  {/* <CustomMenu
                    anchorEl={menuElImage}
                    onClose={handleCloseMenuWithState(setMenuElImage)}
                    onMouseLeave={handleCloseMenuWithState(setMenuElImage)}
                    contentComponent={TextEditor}
                    componentProps={{ headerInfo: props.headerInfo, setHeaderInfo: props.setHeaderInfo }}
                  /> */}
                </div>
              )}

              <div>
                <ul
                  className={`d-flex align-items-center ${props.selectedHeader === 5 && "selected"}`}
                  // onMouseEnter={(e) => {
                  //   e.stopPropagation();
                  //   props.setSelectedHeader(5);
                  //   handleOpenMenu(setMenuEItems, e);
                  // }}
                >
                  {props.headerInfo.items.map((item, index) => (
                    <div key={index} style={applyStyleItems(item.border)}>
                      <li>
                        {item.type ?
                          item.label
                          :
                          item.icon
                        }
                      </li>
                    </div>
                  ))}
                  {/* <CustomMenu
                    anchorEl={menuEItems}
                    onClose={handleCloseMenuWithState(setMenuEItems)}
                    onMouseLeave={handleCloseMenuWithState(setMenuEItems)}
                    contentComponent={ItemsEditors}
                    componentProps={{ headerInfo: props.headerInfo, setHeaderInfo: props.setHeaderInfo }}
                  /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
