import React, { Component } from 'react';
import Header from '../Header/Header';
import FormFooter from '../FormFrame/FormFooter';
import './brainMapConsent.css';
import {
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";

var bodyOfTextStyle;
var lessAggressiveStyle;

class BrainMapConsent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            isAdminChecked: false,
            submitButtonPressed: false,
            saveButtonPressed:false
        };

        this.goBack = this.goBack.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields});
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonHit) {
            if (!fields["studentFirstName"]) {
                formIsValid = false;
                errors["studentFirstName"] = "Cannot be empty";
            }
            if (!fields["studentLastName"]) {
                formIsValid = false;
                errors["studentLastName"] = "Cannot be empty";
            }
            if (!fields["parentFirstName"]) {
                formIsValid = false;
                errors["parentFirstName"] = "Cannot be empty";
            }
            if (!fields["parentLastName"]) {
                formIsValid = false;
                errors["parentLastName"] = "Cannot be empty";
            }
            if (!fields["parentSignature"]) {
                formIsValid = false;
                errors["parentSignature"] = "Cannot be empty";
            }
            if (!fields["date"]) {
                formIsValid = false;
                errors["date"] = "Cannot be empty";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.state.submitButtonHit = true;
        if (this.validate()) {
            //NEED TO UPDATE DATABASE
            this.props.history.push("/parenthome")
        } else {
            console.log("ugh why")
        }
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        //UPDATE DATABASE
        this.props.history.push("/parenthome");
    }

    renderFields() {
        const {errors} = this.state;
        return (
          <fieldset>
              <div className = "question-fields">
                  <Row className = "side-by-side-style">
                      <FormGroup>
                          <Label className="control-label required" sm={6}>Student First Name</Label>
                          <Col sm={12}>
                              <Input
                                  type="text"
                                  ref="studentFirstName"
                                  value={this.state.fields["studentFirstName"]}
                                  onChange={this.handleChange.bind(this, "studentFirstName")}
                                  className="error"
                                  invalid={this.state.errors["studentFirstName"]}/>
                              <FormFeedback
                                  invalid={this.state.errors["studentFirstName"]}>{this.state.errors["studentFirstName"]}
                              </FormFeedback>
                          </Col>
                      </FormGroup>
                      <FormGroup>
                          <Label className="control-label required" sm={6}>Student Last Name</Label>
                          <Col sm={12}>
                              <Input
                                  type="text"
                                  ref="studentLastName"
                                  value={this.state.fields["studentLastName"]}
                                  onChange={this.handleChange.bind(this, "studentLastName")}
                                  className="error"
                                  invalid={this.state.errors["studentLastName"]}/>
                              <FormFeedback
                                  invalid={this.state.errors["studentLastName"]}>{this.state.errors["studentLastName"]}
                              </FormFeedback>
                          </Col>
                      </FormGroup>
                  </Row>
                  <Row className = "side-by-side-style">
                      <FormGroup>
                          <Label className="control-label required" sm={6}>Parent/Guardian First Name</Label>
                          <Col sm={12}>
                              <Input
                                  type="text"
                                  ref="parentFirstName"
                                  value={this.state.fields["parentFirstName"]}
                                  onChange={this.handleChange.bind(this, "parentFirstName")}
                                  className="error"
                                  invalid={this.state.errors["parentFirstName"]}/>
                              <FormFeedback
                                  invalid={this.state.errors["parentFirstName"]}>{this.state.errors["parentFirstName"]}
                              </FormFeedback>
                          </Col>
                      </FormGroup>
                      <FormGroup>
                          <Label className="control-label required" sm={6}>Parent/Guardian Last Name</Label>
                          <Col sm={12}>
                              <Input
                                  type="text"
                                  ref="parentLastName"
                                  value={this.state.fields["parentLastName"]}
                                  onChange={this.handleChange.bind(this, "parentLastName")}
                                  className="error"
                                  invalid={this.state.errors["parentLastName"]}/>
                              <FormFeedback
                                  invalid={this.state.errors["parentLastName"]}>{this.state.errors["parentLastName"]}
                              </FormFeedback>
                          </Col>
                      </FormGroup>
                  </Row>
                  <FormGroup>
                      <Label className="control-label required" sm={6}>Parent/Guardian Signature</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="parentSignature"
                              value={this.state.fields["parentSignature"]}
                              onChange={this.handleChange.bind(this, "parentSignature")}
                              className="error"
                              invalid={this.state.errors["parentSignature"]}/>
                          <FormFeedback
                              invalid={this.state.errors["parentSignature"]}>{this.state.errors["parentSignature"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={6}>Date</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="date"
                              value={this.state.fields["date"]}
                              onChange={this.handleChange.bind(this, "date")}
                              className="error"
                              invalid={this.state.errors["date"]}/>
                          <FormFeedback
                              invalid={this.state.errors["date"]}>{this.state.errors["date"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
              </div>
          </fieldset>
        );
    }


    bodyOfTextStyle = {
        margin:"20px",
        padding:"20px"
    };

    lessAggressiveStyle = {
        margin:"10px",
        padding:"5px"
    };

    renderText() {
        return(
            <div>
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
            </div>
        );
    }

    render(){
        return (
            <div>
                <Header/>
                <div className="form-title">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Brain Map Consent Form</h2>
                        </a>
                    </div>
                </div>
                <div> {this.renderText()} </div>
                <div> {this.renderFields()} </div>
                <FormFooter/>
            </div>
        );
    };
}

export default BrainMapConsent;