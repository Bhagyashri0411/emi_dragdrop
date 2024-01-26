import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NewSidebarcomponent, Newheadercomponent, pageDetails } from '../../pageDetails';
import Sidebar from '../MainComponents/Sidebar';
import Main from '../Main';
import RightSidebar from '../MainComponents/RightSidebar';
import PrivateRouder from '../../PrivateRouder';
import Header from '../MainComponents/Header';

export default function EditHomeComponents() {

    const [page, setPage] = useState(pageDetails);

    useEffect(() => {
        const savedPage = localStorage.getItem('savedCode');
        if (savedPage !== null) {
            setPage(JSON.parse(savedPage));
        }
    }, []);

    const getHtmlContentFromChild = () => {
        localStorage.setItem('savedCode', JSON.stringify(page));
    };

    const [isTrue, setIsTrue] = useState([false, null]);

    const pathname = window.location.pathname;
    const currentPage = page.find((singlepage) => singlepage.pageLink === pathname);

    const handleAddHeader = () => {
        setPage((prevPage) => {
            return prevPage.map((itempage) => ({
                ...itempage,
                components: {
                    ...itempage.components,
                    headercomponent: Newheadercomponent
                },
            }))
        })
    };

    const handleAddSidebar = () => {
        setPage((prevPage) => {
            return prevPage.map((itempage) => ({
                ...itempage,
                components: {
                    ...itempage.components,
                    sidebarcomponent: NewSidebarcomponent
                },
            }))
        })
    };

    return (
        <>
            <Header getHtmlContentFromChild={getHtmlContentFromChild} page={page} setPage={setPage} />

            <div className='MainBackground'>
                {page.length !== 0 &&
                    <div className='mainLayout'>
                        <div className='fisrtColumn'>
                            <Sidebar
                                // Header function
                                handleAddHeader={handleAddHeader}
                                handleAddSidebar={handleAddSidebar}
                            />
                        </div>
                        {page.map((singlepage, key) =>
                            <Route
                                key={key}
                                exact
                                path={singlepage.pageLink}
                                render={(props) => (
                                    <Main {...props}
                                        page={page}
                                        singlePage={singlepage}
                                        setPage={setPage}
                                        isTrue={isTrue}
                                        setIsTrue={setIsTrue}
                                    />
                                )}
                            />
                        )}

                        {currentPage &&
                            <div className='rightSideBar' style={{ width: isTrue[0] ? "25px" : "350px" }}>
                                <RightSidebar isTrue={isTrue} singlePage={currentPage} page={page} setPage={setPage} />
                            </div>
                        }
                    </div>

                }
            </div>
        </>
    )
}
