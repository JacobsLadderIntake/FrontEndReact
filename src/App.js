import React, { Component } from 'react';
// import './App.css';
import Register from './Register';
import Navigation from './Navigation'
import Login from './Login'
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";
import ParentTable from "./Parent-Home/ParentTable";
import FormFrame from './FormFrame/FormFrame';
import BrainMapConsent from './Forms/BrainMapConsent';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faPlusCircle)

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

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
            <Route path = "/formframe" component = {FormFrame}/>
            <Route path = "/bmc" component = {BrainMapConsent}/>

        </div>
        </Router>
        </div>


    );
  }
}

export default App;
