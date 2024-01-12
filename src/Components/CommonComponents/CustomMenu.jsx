import React from 'react';
import Menu from '@mui/material/Menu';

const CustomMenu = ({ anchorEl, onClose, onMouseLeave, contentComponent, componentProps }) => {
    const ContentComponent = contentComponent;

    return (
        <Menu className='w-25'
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={onClose}
            onMouseLeave={onMouseLeave}
            PaperProps={{
                sx: {
                    overflow: 'visible',
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        left: 40,
                        top: -5,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateX(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
        >
            <ContentComponent {...componentProps} />
        </Menu>
    );
};

export default CustomMenu;
