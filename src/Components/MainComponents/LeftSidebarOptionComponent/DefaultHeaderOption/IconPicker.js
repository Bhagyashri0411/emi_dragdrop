import React, { useState } from "react";
import { Iconlists } from "../../../CommonComponents/Iconlists";
export const IconPicker = ({ iconName, setHeaderInfo, headerInfo, index }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredIcons, setFilteredIcons] = useState(Iconlists);
    console.log(filteredIcons);
    const changeIcon = (e) => {
        const updatedItems = [...headerInfo.items];
        updatedItems[index].icon = e;
        setHeaderInfo({ ...headerInfo, items: updatedItems });
    }

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filtered = Iconlists.filter((icon) =>
            icon.icon.toLowerCase().includes(query)
        );
        setFilteredIcons(filtered);
    };

    return (
        <div>
            <div className="secondDiv">
                <div className="serach">
                    <div className="serachdivefirst">
                        {/* <div className={'inputbox inputBoxFocus '}>
                            <input className="" placeholder="Search..." type="text" defaultValue
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div> */}
                        {/* <div className="box ">
                            <SearchIcon className='icon' />
                        </div> */}
                    </div>
                </div>
            </div>
            <ul className="icon-picker-list">
                {filteredIcons.map((icon, index) => (
                    <li key={index} className="float-end" >
                        <a className={"selected-icon"}
                        // onClick={()=>changeIcon(icon.icon)}
                        >
                            <icon.icon />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};