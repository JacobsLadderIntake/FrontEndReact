import React, { Component } from 'react';
import Register from './Register';
import Login from './Login'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminHome from "./AdminView/AdminHome";
import ParentTable from "./Parent-Home/ParentTable";
import BrainMapConsent from './Forms/BrainMapConsent';
import EnrollmentProcess from './Forms/EnrollmentProcess';
import ConsentAndMedicalRelease from './Forms/ConsentAndMedicalRelease';
import ClientHistoryAndInformation from "./Forms/ClientHistoryAndInformation";
import PermissionExchangeInformation from './Forms/PermissionExchangeInformation';
import CreditCardAuthorization from './Forms/CreditCardAuthorization';
import InsuranceFinancialInformation from './Forms/InsuranceFinancialInformation';
import ResetPassword from './ResetPassword';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import {HashRouter,Route,Link,Switch} from "react-router-dom";

library.add(faPlus, faPlusCircle);

class App extends Component {
    state = {
        data: null
    };


  render() {
    return (
        <div>
        <HashRouter>
        <div>
            <Route exact path = "/" component = {Login}/>
            <Route path = "/register" component = {Register}/>
            <Route path = "/adminhome" component = {AdminHome}/>
            <Route path = "/parenthome" component = {ParentTable}/>
            <Route path = "/bmc" component = {BrainMapConsent}/>
            <Route path = "/ep" component = {EnrollmentProcess}/>
            <Route path = "/cmr" component = {ConsentAndMedicalRelease}/>
            <Route path = "/chai" component = {ClientHistoryAndInformation}/>
            <Route path = "/pei" component = {PermissionExchangeInformation}/>
            <Route path = "/cca" component = {CreditCardAuthorization}/>
            <Route path = "/ifi" component = {InsuranceFinancialInformation}/>
            <Route path = "/resetpassword" component = {ResetPassword}/>
        </div>
        </HashRouter>
        </div>


    );
  }
}

export default App;
