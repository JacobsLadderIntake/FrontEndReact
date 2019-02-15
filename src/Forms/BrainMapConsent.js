import React, { Component } from 'react';
import Header from '../Header/Header';
import FormFooter from '../FormFrame/FormFooter';

var bodyOfTextStyle;
var lessAggressiveStyle;

class BrainMapConsent extends Component{

    bodyOfTextStyle = {
        margin:"20px",
        padding:"20px"
    };

    lessAggressiveStyle = {
        margin:"10px",
        padding:"5px"
    };


    render(){
        return(
            <div>
                <Header/>
                <div className="form-title">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Brain Map Consent Form</h2>
                        </a>
                    </div>
                </div>
                <div style={this.bodyOfTextStyle}>
                    <div>
                        The initial evaluation brain map includes the following:
                    </div>
                    <div style={this.lessAggressiveStyle}>
                        -Recording of EEG
                    </div>
                    <div style={this.lessAggressiveStyle}>
                        -Review and analysis of EEG to generate brain map
                    </div>
                    <div style={this.lessAggressiveStyle}>
                        -Feedback regarding the brain map from a Neurofeedback Practitioner
                    </div>
                    <div>
                        *Note: Please let us know if the client has any sensitivities on the head or scalp. The recording of an EEG is a non-invasive method of measuring surface electrical activity in the brain. It is recorded with a 19-electrode medical-grade cap, and a water/saline based conductive gel. The EEG reading can be affected by medications, diet changes, sickness, and hair products. Avoid using conditioner, hair gel,and hair spray the day of the recording. Please make sure to limit any drastic changes in the client’s typical day-to-day routine as much as possible.
                    </div>
                    <div style={this.bodyOfTextStyle}>
                        I hereby give release to complete a brain map as part of the Jacob’s Ladder initial evaluation process.
                    </div>
                </div>
                <FormFooter/>
            </ div>
        );
    };
}

export default BrainMapConsent;