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
import { token, userID } from '../Login';

var infoObj = {"StudentName":"", "ParentName":"", "Date":""};
var childID = "child"
var url = 'api/children/' + childID + '/forms/EnrollmentProcessForm';

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

    updateFields() {
        let fields = this.state.fields;
        let infoObj = this.infoObj;
        infoObj.StudentName = fields["studentName"];
        infoObj.ParentName = fields["parentName"];
        infoObj.Date = fields["date"];
        // infoObj.ConsentCheck = fields["consentCheck"];
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
        this.updateFields();
        this.postToDB();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.updateFields();
        this.setState({saveButtonPressed: true});
        this.postToDB();
        //back to homepage
        this.props.history.push("/parenthome");
    }

    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
        infoObj = JSON.stringify(this.infoObj);
        const response = fetch(this.url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: infoObj
        });
    }

    fetchFromDB = async () => {
        const response = await fetch(this.url, {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log(body)
        if (response.status !== 200) throw Error(body.message);
        if (body.Form.length > 0) {
          this.state.fields["studentName"] = body.Form[0].StudentName;
          this.state.fields["parentName"] = body.Form[0].ParentName;
          this.state.fields["date"] = body.Form[0].Date;
        }
        return body;
    };

    renderFields() {
        return (
            <fieldset>
                <div>
                    <FormGroup>
                        <Col sm={12}>
                            <Label sm={12} className={"checkBox"}>
                                <Input type="checkbox"
                                       ref="consentCheck"
                                       className="error"/>
                                By signing, I acknowledge that I am aware and understand the enrollment process and financial responsibilities.
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
                        <Label className="control-label required" sm={12}>Parent/Guardian Name</Label>
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
                            <h2>Enrollment Process Form</h2>
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

export default EnrollmentProcess;