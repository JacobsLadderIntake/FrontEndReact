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

var infoObj;

class PermissionExchangeInformation extends Component {
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
    infoObj = {"ChildID":"EmmaChild@gmail.com","StudentName":"", "ParentName":"", "Date":""}; //, "ConsentCheck":""};

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

    populateFields() {
        let fields = this.state.fields;
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
        // this.componentDidMount();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                console.log("pressed submit");
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.updateFields();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.postToDB();
        // this.componentDidMount();
        console.log("saved and quit");
        //back to homepage
        this.props.history.push("/parenthome");
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
        infoObj = JSON.stringify(this.infoObj);
        // console.log(infoObj);
        const response = fetch('/children/EmmaChild@gmail.com/forms/BrainMapConsentForm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: infoObj
        });
    }

    callApi = async () => {
        // infoObj = JSON.stringify(this.infoObj);
        // console.log(infoObj);
        const response = await fetch('/children/EmmaChild@gmail.com/forms/BrainMapConsentForm');
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.state.fields["studentName"] = body[0].StudentName;
        this.state.fields["parentName"] = body[0].ParentName;
        this.state.fields["date"] = body[0].Date;
        // this.state.fields["consentCheck"] = body[0].ConsentCheck;
        console.log(this.state.fields);
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
                                I acknowledge that I have read and completed this information to the best of my knowledge and ability.”
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
                        <Label className="control-label required" sm={12}>Parent/Guardian  Name</Label>
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
                            <h2>Permission for Exchange of Information Form</h2>
                        </div>
                    </Row>
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

export default PermissionExchangeInformation;