import React from 'react'
import { render } from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
// supposedly these are needed to use bootstrap but im getting a warning that they arent used
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AdminHome from './AdminView/AdminHome'
import Header from './Header/Header'


render(
    <AdminHome/>,
    document.getElementById('root')
)