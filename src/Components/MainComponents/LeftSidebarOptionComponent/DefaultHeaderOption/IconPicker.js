import React, { useState } from "react";
import { Iconlists } from "../../../CommonComponents/Iconlists";
import * as LucideIcons from 'lucide-react';


export const IconPicker = ({ iconName, headercomponent,sidebarcomponent, setPage, page, index }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredIcons, setFilteredIcons] = useState(Iconlists);

    // const changeIcon = (e) => {
    //     const updatedItems = [...headercomponent.items];
    //     updatedItems[index].icon = e;
        
    //     setPage((prevPage) => {
    //         return prevPage.map((itempage) => ({
    //             ...itempage,
    //             components: {
    //                 ...itempage.headercomponent,
    //                 headercomponent: {
    //                     ...itempage.components.headercomponent,
    //                     ...updatedItems,
    //                 },
    //             },
    //         }))
    //     })
    // }

    const changeIcon = (e) => {
        const updatedItems = [...sidebarcomponent.items];
        updatedItems[index].icon = e;
        
        setPage((prevPage) => {
            return prevPage.map((itempage) => ({
                ...itempage,
                components: {
                    ...itempage.sidebarcomponent,
                    sidebarcomponent: {
                        ...itempage.components.sidebarcomponent,
                        ...updatedItems,
                    },
                },
            }))
        })
    }

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = Iconlists.filter((icon) =>
            icon.name.toLowerCase().includes(query)
        );
        setFilteredIcons(filtered);
    };

    return (
        <div>
            <div className="secondDiv">
                <div className="serach">
                    <div className="serachdivefirst">
                        <div className={'inputbox inputBoxFocus '}>
                            <input className="" placeholder="Search..." type="text" defaultValue
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        {/* <div className="box ">
                            <SearchIcon className='icon' />
                        </div> */}
                    </div>
                </div>
            </div>
            <ul className="icon-picker-list">
                {filteredIcons.map((icon, index) => (
                    <li key={index} className="float-end" >
                        <a className={icon.name === iconName && "selected-icon"}
                            onClick={() => changeIcon(icon.name)}
                        >
                            <icon.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};