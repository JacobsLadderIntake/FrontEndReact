import React, { Component } from 'react';
import './App.css';
import Register from './Register';
import Navigation from './Navigation'
import Login from './Login'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";
import ParentTable from "./Parent-Home/ParentTable";

class App extends Component {
  render() {
    return (
        <div>
        <Router>
        <div>
            <Route exact path = "/" component = {Navigation}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/adminhome" component = {AdminHome}/>
            <Route path = "/login" component = {Login}/>
            <Route path = "/parenthome" component = {ParentTable}/>
        </div>
        </Router>
        </div>


    );
  }
}

export default App;
