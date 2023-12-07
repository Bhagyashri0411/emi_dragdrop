import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";


const Header = React.memo((props) => {

    return (
        <>
            <div className={`headerContainer`}>

                <div className='create-header'>
                    <Link to={"/preview"} onClick={props.handleClick}>

                        <button  >
                            Preview
                        </button>
                    </Link>
                </div>
                <div className="secondDiv ">
                    <div className="serach">
                        <div className="serachdivefirst">
                            <div className={'inputbox inputBoxFocus '}>
                                <input className="" placeholder="Search..." type="text" defaultValue />
                            </div>
                            <div className="box ">
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                    <div className="signInbox">

                    </div>
                </div>
            </div>
        </>
    )
});


export default Header;