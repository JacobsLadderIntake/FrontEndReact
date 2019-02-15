import React, { Component } from 'react';
import FormFooter from './FormFooter';

var bodyOfTextStyle;

class FormFrame extends Component{

    bodyOfTextStyle = {
        margin:"20px"
    };

    render(){



        return(
            <div>
                <textarea></textarea>
                <div className="parent-table-header">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Name of Form</h2>
                        </a>
                    </div>
                </div>
                <div style={bodyOfTextStyle}>
                    Body of text for the form
                </div>
                <FormFooter/>
            </ div>
        );
    };
}

export default FormFrame;