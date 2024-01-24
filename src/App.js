import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from './Components/Main';
import Header from './Components/MainComponents/Header';
import PreviewpageSection from './Components/PreviewpageSection/PreviewpageSection';
import { NewSidebarcomponent, Newheadercomponent, pageDetails } from './pageDetails';
import Sidebar from './Components/MainComponents/Sidebar';
import RightSidebar from './Components/MainComponents/RightSidebar';
import LoginForm from './Components/LoginForm';


function App() {

  const [page, setPage] = useState(pageDetails);
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

  useEffect(() => {
    const savedPage = localStorage.getItem('savedCode');
    if (savedPage !== null) {
      setPage(JSON.parse(savedPage));
    }
  }, []);

  const getHtmlContentFromChild = () => {
    localStorage.setItem('savedCode', JSON.stringify(page));
  };

  return (
    <>
      <Router>
        <Header getHtmlContentFromChild={getHtmlContentFromChild}
          page={page} setPage={setPage} />

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

              <Switch>
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
              </Switch>


              {currentPage &&
                <div className='rightSideBar' style={{ width: isTrue[0] ? "25px" : "350px" }}>
                  <RightSidebar isTrue={isTrue} singlePage={currentPage} page={page} setPage={setPage} />
                </div>
              }
            </div>

          }
        </div>
      </Router>
    </>
  );
}

export default App;