import React, { Component } from 'react';
import Header from '../Header/Header';
import FormFooter from './FormFooter';

class FormFrame extends Component{
    render(){



        return(
            <div>
                <Header/>
                <textarea></textarea>
                <FormFooter/>
            </ div>
        );
    };
}

export default FormFrame;