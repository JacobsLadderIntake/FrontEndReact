import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Button,
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
        console.log(formIsValid)
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
        return (
            <fieldset>
                <div>
                    <FormGroup>
                        <Label sm={6}>List any special considerations or requests below.</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="considerations"
                                value={this.state.fields["consideration"] || ""}
                                onChange={this.handleChange.bind(this, "consideration")}/>
                        </Col>
                    </FormGroup>
                </div>
                <div>
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
                        I, the undersigned parent/guardian of the child named below have voluntarily submitted my child for registration as a participant in the Jacob’s Ladder Neurodevelopmental School and Therapy Center program, a non-profit corporation (“Jacob’s Ladder”) and all programs associated therewith. I consent to my child participating in the Jacob’s Ladder Neurodevelopmental Evaluation which includes a Brain Map, Parent/Guardian Interview (preferably with both parents/guardians), and Jacob’s Ladder Neurodevelopmental Testing as well as utilizing Jacob’s Ladder facilities and amenities such as playground, trampoline, animals, and golf cart transportation, as needed. I have indicated below if I prefer for my child not to participate in any of the aforementioned facilities and amenities.
                    </div>
                    <div>
                        I consent to my child participating in the Jacob’s Ladder program as written by Amy O’Dell, M.Ed, LPC, CTRS, CNC and the Jacob’s Ladder evaluation team. I give permission for Jacob’s Ladder and all individuals representing Jacob’s Ladder to implement all activities as outlined on my child’s program. I, the undersigned parent/guardian of the child named below have been trained to implement my child’s program at home and understand that any changes in programming and implementation will be sent home in writing. I understand that it is my responsibility to communicate any questions or concerns I may have with my child’s program.
                    </div>
                    <div>
                        I give consent for Jacob’s Ladder to provide my child with Therapy services. I consent to care and treatment falling under the practice guideline of the American Counseling Association (ACA), American Therapeutic Recreation Association (ATRA), American Psychological Association (APA), American Music Therapy Association (AMTA), American Occupational Therapy Association (AOTA), American Physical Therapy Association (APTA), American Speech-Language-Hearing Association (ASHA), and the State of Georgia. I acknowledge that there is always a risk of injury with any therapy involving physical activities.
                    </div>
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
                        <div className = "parent-top col-9">
                            <h2>Consent and Medical Release Form</h2>
                        </div>
                    </div>
                </div>
                <div className={"frame p-4"} data-spy="scroll">
                    <div> {this.renderText()} </div>
                    <div> {this.renderFields()} </div>
                </div>

                <Row className={"p-2 justify-content-center"}>
                        <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                            Save and Quit
                        </Button>

                        <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                            Submit
                        </Button>

                </Row>
            </div>
        );
    };
}

export default ConsentAndMedicalRelease;