import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from './Components/Main';
import Header from './Components/MainComponents/Header';
import PreviewpageSection from './Components/PreviewpageSection/PreviewpageSection';

function App() {
  const [code, setCode] = React.useState('');

  const handleClick = () => {
    setCode(document.getElementById('code').innerHTML);
  };

  return (
    <>
      <Router>
        <Header handleClick={handleClick} />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/preview" render={(props)=> <PreviewpageSection {...props} code={code} />} /> 
        </Switch>
      </Router>
    </>

  );
}

export default App;
