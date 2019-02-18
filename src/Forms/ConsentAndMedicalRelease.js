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

class ConsentAndMedicalRelease extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed:false
        };

        this.goBack = this.goBack.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSaveAndQuit = this.handleSaveAndQuit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.setState({submitButtonPressed: true});
        if (this.validate()) {
            //NEED TO UPDATE DATABASE
            this.props.history.push("/parenthome")
        } else {
            console.log("ugh why")
        }
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


    renderText() {
        return(
            <div>
                <div className="body-of-text">
                    <div>
                        I, the undersigned parent/guardian of the child named below have voluntarily submitted my child for registration as a participant in the Jacob’s Ladder Neurodevelopmental School and Therapy Center program, a non-profit corporation (“Jacob’s Ladder”) and all programs associated therewith. I consent to my child participating in the Jacob’s Ladder Neurodevelopmental Evaluation which includes a Brain Map, Parent/Guardian Interview (preferably with both parents/guardians), and Jacob’s Ladder Neurodevelopmental Testing as well as utilizing Jacob’s Ladder facilities and amenities such as playground, trampoline, animals, and golf cart transportation, as needed. I have indicated below if I prefer for my child not to participate in any of the aforementioned facilities and amenities.
                    </div>
                    <div>
                        I consent to my child participating in the Jacob’s Ladder program as written by Amy O’Dell, M.Ed, LPC, CTRS, CNC and the Jacob’s Ladder evaluation team. I give permission for Jacob’s Ladder and all individuals representing Jacob’s Ladder to implement all activities as outlined on my child’s program. I, the undersigned parent/guardian of the child named below have been trained to implement my child’s program at home and understand that any changes in programming and implementation will be sent home in writing. I understand that it is my responsibility to communicate any questions or concerns I may have with my child’s program.
                    </div>
                    <div>
                        I give consent for Jacob’s Ladder to provide my child with Therapy services. I consent to care and treatment falling under the practice guideline of the American Counseling Association (ACA), American Therapeutic Recreation Association (ATRA), American Psychological Association (APA), American Music Therapy Association (AMTA), American Occupational Therapy Association (AOTA), American Physical Therapy Association (APTA), American Speech-Language-Hearing Association (ASHA), and the State of Georgia. I acknowledge that there is always a risk of injury with any therapy involving physical activities.
                    </div>
                    <fieldset>
                        <div className = "question-fields">
                            <FormGroup>
                                <Label className="control-label required" sm={6}>List any special considerations or requests below.</Label>
                                <Col sm={12}>
                                    <Input
                                        type="text"
                                        ref="considerations"
                                        value={this.state.fields["consideration"]}
                                        onChange={this.handleChange.bind(this, "consideration")}/>
                                </Col>
                            </FormGroup>
                        </div>
                    </fieldset>
                    <div className="closer-body-of-text">
                        I acknowledge that I have read and completed this information to the best of my knowledge and ability.
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
                            <h2>Consent and Medical Release Form</h2>
                        </a>
                    </div>
                </div>
                <div> {this.renderText()} </div>
                <div> {this.renderFields()} </div>
                <div className="formFooter">
                    <ButtonToolbar className="">
                        <Button variant="outline-secondary" size="sm" onClick={this.handleSaveAndQuit} active>
                            Save and Quit
                        </Button>
                        <Button variant="secondary" size="sm" onClick={this.handleSubmit} active>
                            Submit
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    };
}

export default ConsentAndMedicalRelease;