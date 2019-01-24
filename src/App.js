import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Navigation from './Navigation'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div>
        <Router>
        <div>
            <Route exact path = "/" component = {Navigation}/>
            <Route path = "/register" component = {Register}/>
        </div>
        </Router>
        </div>


    );
  }
}

export default App;
