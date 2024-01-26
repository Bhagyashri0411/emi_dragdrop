import React from 'react'
import DefaultHeaderOption from './LeftSidebarOptionComponent/DefaultHeaderOption'
import DefaultSidebarOption from './LeftSidebarOptionComponent/DefaultSidebarOption'
import MainPageOptionComponent from './LeftSidebarOptionComponent/MainPageOption'

export default function RightSidebar({ isTrue, singlePage, page, setPage }) {
    
    return (
        <div className="noBorderTop">
            <div className={`${isTrue[0] ? 'd-none' : 'd-block'}`}>
                {/* {isTrue[1] === "header" &&
                    <DefaultHeaderOption page={page} setPage={setPage} singlePage={singlePage}/>
                } */}
                {isTrue[1] === "sidebar" &&
                    <DefaultSidebarOption page={page} setPage={setPage} singlePage={singlePage} />
                }
                {isTrue[1] === null &&
                    <MainPageOptionComponent
                        singlePage={singlePage}
                        page={page}
                        setPage={setPage}
                    />
                }
            </div>
        </div>
    )
}
