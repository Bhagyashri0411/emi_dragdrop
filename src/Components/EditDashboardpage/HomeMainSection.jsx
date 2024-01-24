import React from "react";
import DefaultHeader from "./DefaultHeader";
import DefaultSidebar from "./DefaultSidebar";

const HomeMainSection = (props) => {
    
    return (
        <div className='containerbox' id='code'>
            {/* {props.page.map(pageItem =>
            ( */}
            <div className="col-md-12" key={props.page.id}>
                <div className="homecard"
                    style={{
                        backgroundColor: props.singlePage.mainPageStyles?.bgColor,
                    }}
                >
                    {props.singlePage.components && Object.keys(props.singlePage.components.headercomponent).length !== 0 &&
                        <DefaultHeader page={props.singlePage.components} setIsTrue={props.setIsTrue} isTrue={props.isTrue} />
                    }

                    {props.singlePage.components && Object.keys(props.singlePage.components.sidebarcomponent).length !== 0 &&
                        <DefaultSidebar page={props.singlePage.components} setIsTrue={props.setIsTrue} isTrue={props.isTrue} />
                    }

                </div>
            </div>
            {/* ))} */}
        </div>
    )
}

export default HomeMainSection;