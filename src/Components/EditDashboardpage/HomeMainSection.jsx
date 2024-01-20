import React from "react";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSidebar";

const HomeMainSection = (props) => {
    return (
        <div className='containerbox' id='code'>
            {props.page.map(pageItem =>
            (
                <div className="col-md-12" key={pageItem.id}>
                    <div className="homecard"
                        style={{
                            backgroundColor: pageItem.mainPageStyles?.bgColor,
                        }}
                    >
                        {pageItem.components && Object.keys(pageItem.components.headercomponent).length !== 0 &&
                            <DefaultHeader page={pageItem.components} setIsTrue={props.setIsTrue} />
                        }

                        {/* {pageItem.components && Object.keys(pageItem.components.sidebarcomponent).length !== 0 &&
                            <DefaultSidebar sidebarcomponent={pageItem.components.sidebarcomponent} setIsTrue={props.setIsTrue} />
                        } */}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomeMainSection;