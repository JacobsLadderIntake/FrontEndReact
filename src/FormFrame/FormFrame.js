import React, { Component } from 'react';
import Header from '../Header/Header';
import FormFooter from './FormFooter';
//npm install react-sticky-footer

class FormFrame extends Component{
    render(){



        return(
            <div>
                <Header/>
                <FormFooter/>
            </ div>
        );
    };
}