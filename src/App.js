import React, { Component } from 'react';
import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";
import ParentTable from "./Parent-Home/ParentTable";
import FormFrame from './FormFrame/FormFrame';
import BrainMapConsent from './Forms/BrainMapConsent';
import EnrollmentProcess from './Forms/EnrollmentProcess';
import ConsentAndMedicalRelease from './Forms/ConsentAndMedicalRelease';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faPlusCircle)

class App extends Component {
    state = {
        data: null
    };

  render() {
    return (
        <div>
        <Router>
        <div>
            {/*Routes to the login page automatically, maybe add a button to get to registration???*/}
            <Route exact path = "/" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/adminhome" component = {AdminHome}/>
            <Route path = "/parenthome" component = {ParentTable}/>
            <Route path = "/formframe" component = {FormFrame}/>
            <Route path = "/bmc" component = {BrainMapConsent}/>
            <Route path = "/ep" component = {EnrollmentProcess}/>
            <Route path = "/cmr" component = {ConsentAndMedicalRelease}/>
        </div>
        </Router>
        </div>


    );
  }
}

export default App;
