import React from "react";
import { Link } from "react-router-dom";


const Header = React.memo(({getHtmlContentFromChild}) => {

    return (
        <>
            <div className={`headerContainer`}>

                <div className='create-header'>
                    <Link to={"/preview"}>

                        <button  >
                            Preview
                        </button>
                    </Link>
                </div>
                <button className="btn btn-success" onClick={getHtmlContentFromChild}>Save</button>
            </div>
        </>
    )
});


export default Header;