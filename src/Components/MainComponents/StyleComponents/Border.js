import React from 'react';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Border() {
    const [menuEl, setMenuEl] = React.useState(null);

    // const for bordersection box
    const [borderApply, setBorderApply] = React.useState(false);

    const open = Boolean(menuEl);
    const handleClick = (event) => {
        setMenuEl(event.currentTarget);
    };
    const handleClose = () => {
        setMenuEl(null);
    };

    // function for applying border section
    const handleOpenBorderSection = () => {
        setBorderApply(true);
    }

    return (
        <div>
            <div className='blockflex mt-2'>
                <span>Border</span>
                <div className='block'>
                    <div className='fillbox' onClick={()=> setBorderApply(false)} />
                    <div className='blankbox' onClick={handleOpenBorderSection} />
                    <MoreHorizIcon onClick={handleClick} className='cursor'
                    />
                </div>
            </div>
            {borderApply && (
                <>

                    {/* border width and color */}
                    <div className='blockflex'>
                        <span>Color</span>
                        <input type="color" />

                    </div>
                </>

            )
            }

            <Menu
                anchorEl={menuEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 8,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

                <MenuItem onClick={handleClose}>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Logout
                </MenuItem>
            </Menu>
        </div >
    )
}
