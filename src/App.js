import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import Navigation from './Navigation'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";

class App extends Component {
  render() {
    return (
        <div>
        <Router>
        <div>
            <Route exact path = "/" component = {Navigation}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/adminhome" component = {AdminHome}/>
        </div>
        </Router>
        </div>


    );
  }
}

export default App;
