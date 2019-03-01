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

class EnrollmentProcess extends Component{
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
                        If you are interested in enrolling the client at Jacob’s Ladder, please carefully review the following information and sign to acknowledge that you understand the Enrollment Process:
                    </div>
                    <div className="closer-body-of-text">
                        <div>
                            -All client’s must receive an initial evaluation prior to beginning programming at Jacob’s Ladder.
                        </div>
                        <div>
                            -Prior to the client’s first day of programming at Jacob’s Ladder, a retainer of one month’s tuition is required. Once fully enrolled, monthly tuition is due on the last business day of the prior month.  If the client starts mid-month, the pro-rated tuition that is due for that month is due prior to the client’s first day.
                        </div>
                        <div>
                            -There is an Annual Re-Evaluation and Case Load Management fee based on the hours enrolled. Please see our registration forms for further information regarding this.
                        </div>
                        <div>
                            -The Annual Re-Evaluation fee is only applicable if your initial evaluation has not taken place within the past 12 months.
                        </div>
                        <div>
                            -Jacob’s Ladder offers various financial assistance options, such as private insurance, SB-10, SSO’s etc. All services are pre-paid and your account will be credited upon receipt of payment.
                        </div>
                        <div>
                            -If you are interested in enrollment, please submit your Registration Form with your preferred schedule and the Admissions Coordinator will be in contact with you upon receipt.
                        </div>
                        <div>
                            -Due to our unique staffing requirements, Jacob’s Ladder often works from a waitlist. If you are placed on the waitlist, Jacob’s Ladder requests a holding deposit in the form of a check for one month’s tuition. This check will not be processed and is used to reserve your priority on the waiting list. Should placement become available, you will be contacted and your deposit will be processed, along with one month’s tuition.
                        </div>
                    </div>
                    <div className="closer-body-of-text">
                        By signing, you are aware and understand the enrollment process and financial responsibilities.
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
                        <a className = "parent-top col-9">
                            <h2>Enrollment Process Form</h2>
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

export default EnrollmentProcess;