import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Button,
    ButtonToolbar,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";

class BrainMapConsent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
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
        this.setState({fields: fields});
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            if (!fields["studentName"]) {
                formIsValid = false;
                errors["studentName"] = "Cannot be empty";
            }
            if (!fields["parentName"]) {
                formIsValid = false;
                errors["parentName"] = "Cannot be empty";
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
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.props.history.push("/parenthome")
    }

    renderFields() {
        const {errors} = this.state.errors;
        return (
          <fieldset>
              <div className = "question-fields">
                  <FormGroup>
                      <Col sm={12}>
                          <Label sm={12} className={"checkBox"}>
                              <Input type="checkbox"
                                     ref="consentCheck"
                                     className="error"/>
                              I hereby give release to complete a brain map as part of the Jacob’s Ladder initial evaluation process.
                          </Label>
                      </Col>

                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Student Name</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="studentName"
                              value={this.state.fields["studentName"] || ""}
                              onChange={this.handleChange.bind(this, "studentName")}
                              className="error"
                              invalid={this.state.errors["studentName"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["studentName"] }>{this.state.errors["studentName"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Parent/Guardian First Name</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="parentName"
                              value={this.state.fields["parentName"] || ""}
                              onChange={this.handleChange.bind(this, "parentName")}
                              className="error"
                              invalid={this.state.errors["parentName"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["parentName"]}>{this.state.errors["parentName"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
                  <FormGroup>
                      <Label className="control-label required" sm={12}>Date</Label>
                      <Col sm={12}>
                          <Input
                              type="text"
                              ref="date"
                              value={this.state.fields["date"] || ""}
                              onChange={this.handleChange.bind(this, "date")}
                              className="error"
                              invalid={this.state.errors["date"] != null}/>
                          <FormFeedback
                              invalid={this.state.errors["date"]}>{this.state.errors["date"]}
                          </FormFeedback>
                      </Col>
                  </FormGroup>
              </div>
          </fieldset>
        );
    }


    renderText() {
        return(
            <div>
                <div className="body-of-text">
                    <div>
                        The initial evaluation brain map includes the following:
                    </div>
                    <div className="closer-body-of-text">
                        <div>
                        -Recording of EEG
                        </div>
                        <div>
                            -Review and analysis of EEG to generate brain map
                        </div>
                        <div>
                        -Feedback regarding the brain map from a Neurofeedback Practitioner
                        </div>
                    </div>
                    <div>
                        *Note: Please let us know if the client has any sensitivities on the head or scalp. The recording of an EEG is a non-invasive method of measuring surface electrical activity in the brain. It is recorded with a 19-electrode medical-grade cap, and a water/saline based conductive gel. The EEG reading can be affected by medications, diet changes, sickness, and hair products. Avoid using conditioner, hair gel,and hair spray the day of the recording. Please make sure to limit any drastic changes in the client’s typical day-to-day routine as much as possible.
                    </div>
                    {/*<div className="closer-body-of-text">*/}
                    {/*I hereby give release to complete a brain map as part of the Jacob’s Ladder initial evaluation process.*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <Header loggedIn = {true}/>
                <div className="form-title">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Brain Map Consent Form</h2>
                        </a>
                    </div>
                </div>
                <div> {this.renderText()} </div>
                <div> {this.renderFields()} </div>
                <div className="formFooter">
                    <ButtonToolbar className="">
                        <Button variant="outline-secondary" size="sm" onClick={this.handleSaveAndQuit.bind(this)} active>
                            Save and Quit
                        </Button>
                        <Button variant="secondary" size="sm" onClick={this.handleSubmit.bind(this)} active>
                            Submit
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    };
}

export default BrainMapConsent;