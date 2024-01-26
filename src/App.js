import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './Components/LoginForm';
import EditHomeComponents from './Components/EditHomeComponents';
import PrivateRouder from './PrivateRouder';


function App() {

  return (
    <Router>
      <Switch>
        <Route component={LoginForm} path="/login" />
        <Route component={EditHomeComponents} path="/" />
      </Switch>
    </Router>
  );
}

export default App;