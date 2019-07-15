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
import {token} from '../Login';
import {childID} from "../Parent-Home/ParentTable";

let infoObj = {"ChildID": childID};

class PermissionExchangeInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: {"consentCheck": false},
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
        infoObj.ChildID = childID;
        infoObj.studentName = fields["studentName"];
        infoObj.parentName = fields["parentName"];
        infoObj.date = fields["date"];
        infoObj.consentCheck = fields["consentCheck"];
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

    handleChangeCheckbox(field,e) {
        let fields = this.state.fields;
        fields[field] = e.target.checked ? "true" : "false";
        this.validate();
        this.setState({fields: fields});
    }

    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
        var update = JSON.stringify(infoObj);
        var url = 'api/children/' + childID + '/forms/PermissionForExchangeOfInformationForm';
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: update
        });
    }

    fetchFromDB = async () => {
        let url = 'api/children/' + childID + '/forms/PermissionForExchangeOfInformationForm';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        if (body.Form.length > 0) {
            this.state.fields["studentName"] = body.Form[0].studentName == null ? "" : body.Form[0].studentName;
            this.state.fields["parentName"] = body.Form[0].parentName == null ? "" : body.Form[0].parentName;
            this.state.fields["date"] = body.Form[0].date == null ? "" : body.Form[0].date;
            this.state.fields["consentCheck"] = body.Form[0].consentCheck == null ? "" : body.Form[0].consentCheck;
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
                                       checked={this.state.fields["consentCheck"] === "true"}
                                       onChange={this.handleChangeCheckbox.bind(this, "consentCheck")}
                                       className="error"
                                       invalid={this.state.fields["consentCheck"] === false || this.state.errors["consentCheck"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["consentCheck"]}>{this.state.errors["consentCheck"]}
                                </FormFeedback>
                                I acknowledge that I have read and completed this information to the best of my knowledge and ability.
                            </Label>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Student Name (First and Last)</Label>
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
                        <Label className="control-label required" sm={12}>Parent/Guardian Name (First and Last)</Label>
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
                        I, the undersigned parent/guardian of the client named below, authorize Jacob's Ladder Neurodevelopmental School
                        & Therapy Center to exchange necessary and pertinent medical information to physicians, case managers, and insurance
                        companies as needed for the client. I understand that if the client is on any psychotropic medication, a permission
                        to exchange information form must be on file to allow the Clinical Team to be in communication with their physician.
                    </div>
                    <div>
                        Approved information, verbal and written documents, may be exchanged with the following people directly related to
                        the client's care:
                    </div>
                    <div className="closer-body-of-text">
                        <div>
                            -Therapists
                        </div>
                        <div>
                            -Physicians
                        </div>
                        <div>
                            -Schools
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
                    <Row >
                        <div className = "parent-top col-9">
                            <h2 className={"header-print"}>Permission for Exchange of Information Form</h2>
                        </div>
                        <div className={"col-3"}>
                            <button className="print-button" onClick={() => window.print()}>Print</button>
                        </div>
                    </Row>
                </div>

                <div className={"frame p-4 print-form"} data-spy="scroll">
                    <div> {this.renderText()} </div>
                    <div> {this.renderFields()} </div>
                </div>

                <Row className={"p-2 justify-content-center"}>
                    <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                        Save and Return
                    </Button>

                    <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                        Submit
                    </Button>
                </Row>
            </div>
        );
    };
}

export default PermissionExchangeInformation;