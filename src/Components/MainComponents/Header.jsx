import React from "react";
import { Link } from "react-router-dom";
import { ConfirmToast } from 'react-confirm-toast'
import Addpagemodel from "../CommonComponents/Addpagemodel";


const Header = React.memo(({ getHtmlContentFromChild, page, setPage }) => {

    const myFunction = () => {
        getHtmlContentFromChild()
    };

    return (
        <>
            <div className={`headerContainer`}>

                <div className='create-header'>
                    <Link to={"/preview"}>

                        <button className="submitbutton btn btn-primary" >
                            Preview
                        </button>
                    </Link>
                    <Addpagemodel page={page} setPage={setPage} />
                </div>
                <ConfirmToast customFunction={myFunction}
                    customCancel='Reject'
                    customConfirm='Confirm'
                    message='Do you want to save?'
                    position='top-right'
                    showCloseIcon={false}
                    theme='snow'
                >
                    <button className="btn btn-success">Save</button>
                </ConfirmToast>
            </div>
        </>
    )
});


export default Header;