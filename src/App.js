import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './Components/Main';
import Header from './Components/MainComponents/Header';
import PreviewpageSection from './Components/PreviewpageSection/PreviewpageSection';
import { pageDetails } from './pageDetails';


function App() {
  const childRef = useRef();
  const [page, setPage] = useState(pageDetails);

  useEffect(() => {
    const savedPage = localStorage.getItem('savedCode');
    
    if (savedPage === null) {
      setPage(page)
    }
    // else
    //   setPage(JSON.parse(savedPage));
  }, [page]);


  const getHtmlContentFromChild = () => {
    localStorage.setItem('savedCode', page);
  };

  return (
    <>
      <Router>
        <Header getHtmlContentFromChild={getHtmlContentFromChild} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main {...props} ref={childRef} page={page} setPage={setPage} />
            )}
          />
          <Route path="/preview" render={(props) => <PreviewpageSection {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;