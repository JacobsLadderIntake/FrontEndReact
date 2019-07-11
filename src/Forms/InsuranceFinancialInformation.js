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
    Row, Collapse, Card, CardBody
} from "reactstrap";
import ReactTable from 'react-table';
import {token} from '../Login';
import {childID} from "../Parent-Home/ParentTable";
var infoObj = {"ChildID": childID};

class InsuranceFinancialInformation extends Component{
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            outsideTherapyServices: false,
            therapyServicesColumns: [{
                Header: 'Therapy',
                accessor: 'therapy'
            }, {
                Header: 'Provider Name',
                accessor: 'provider'
            }, {
                Header: 'Schedule of Service (day of the week)',
                accessor: 'schedule'
            }, {
                Header: 'Do you have a current assessment on file for this year?',
                accessor: 'assessment'
            }],
            therapyServicesData: [{
                therapy: 'Occupational Therapy',
                provider: <input type="text" name="providerOT" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleOT" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentOT"
                                   id="assessmentOT"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: 'Physical Therapy',
                provider: <input type="text" name="providerPT" className={"tableInputField"}/>,
                schedule: <input type="text" name="schedulePT" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentPT"
                                   id="assessmentPT"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: 'Speech Therapy',
                provider: <input type="text" name="providerST" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleST" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentST"
                                   id="assessmentST"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: 'Mental and Behavioral Health',
                provider: <input type="text" name="providerMBH" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleMBH" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentMBH"
                                   id="assessmentMBH"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: <input type="text" name="otherTherapy1" className={"tableInputField"} placeholder={" Other"}/>,
                provider: <input type="text" name="providerOther1" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleOther1" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentOther1"
                                   id="assessmentOther1"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: <input type="text" name="otherTherapy2" className={"tableInputField"} placeholder={" Other"}/>,
                provider: <input type="text" name="providerOther2" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleOther2" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentOther2"
                                   id="assessmentOther2"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                therapy: <input type="text" name="otherTherapy3" className={"tableInputField"} placeholder={" Other"}/>,
                provider: <input type="text" name="providerOther3" className={"tableInputField"}/>,
                schedule: <input type="text" name="scheduleOther3" className={"tableInputField"}/>,
                assessment: <Input type="select"
                                   name="assessmentOther3"
                                   id="assessmentOther3"
                                   onChange={this.handleChange.bind(this)}>
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            submitButtonPressed: false,
            saveButtonPressed:false
        };

        this.goBack = this.goBack.bind(this);

    }

    goBack(event) {
        window.location.reload();
    }

    toggleOutsideTherapyServices(e){
        e.preventDefault();
        if ((e.target.value)===('Yes')) {
            this.setState(state=>({outsideTherapyServices: true}));
        } else {
            this.setState(state => ({outsideTherapyServices: false}));
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }

    handleChangeCheckbox(field,e) {
        let fields = this.state.fields;
        fields[field] = e.target.checked ? "true" : "false";
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
            //INSURANCE SECTION
            if (!fields["clientName"]) {
                formIsValid = false;
                errors["clientName"] = "Cannot be empty";
            }
            if (!fields["dob"]) {
                formIsValid = false;
                errors["dob"] = "Cannot be empty";
            }
            if (!fields["parentName1"]) {
                formIsValid = false;
                errors["parentName1"] = "Cannot be empty";
            }
            if (!fields["parentPhoneNumber"]) {
                formIsValid = false;
                errors["parentPhoneNumber"] = "Cannot be empty";
            }
            if (!fields["parentEmail"]) {
                formIsValid = false;
                errors["parentEmail"] = "Cannot be empty";
            }
            if (!fields["physicianName"]) {
                formIsValid = false;
                errors["physicianName"] = "Cannot be empty";
            }
            if (!fields["physicianPhoneNumber"]) {
                formIsValid = false;
                errors["physicianPhoneNumber"] = "Cannot be empty";
            }
            if (!fields["physicianFaxNumber"]) {
                formIsValid = false;
                errors["physicianFaxNumber"] = "Cannot be empty";
            }
            if (!fields["address"]) {
                formIsValid = false;
                errors["address"] = "Cannot be empty";
            }
            if (!fields["city"]) {
                formIsValid = false;
                errors["city"] = "Cannot be empty";
            }
            if (!fields["state"]) {
                formIsValid = false;
                errors["state"] = "Cannot be empty";
            }
            if (!fields["zip"]) {
                formIsValid = false;
                errors["zip"] = "Cannot be empty";
            }
            if (!fields["country"]) {
                formIsValid = false;
                errors["country"] = "Cannot be empty";
            }
            if (!fields["diagnosis"]) {
                formIsValid = false;
                errors["diagnosis"] = "Cannot be empty";
            }
            if (!fields["primaryInsurance"]) {
                formIsValid = false;
                errors["primaryInsurance"] = "Cannot be empty";
            }
            if (!fields["primaryInsuranceName"]) {
                formIsValid = false;
                errors["primaryInsuranceName"] = "Cannot be empty";
            }
            if (!fields["insuranceSsn1"]) {
                formIsValid = false;
                errors["insuranceSsn1"] = "Cannot be empty";
            }
            if (!fields["insuranceDob1"]) {
                formIsValid = false;
                errors["insuranceDob1"] = "Cannot be empty";
            }
            if (!fields["employer1"]) {
                formIsValid = false;
                errors["employer1"] = "Cannot be empty";
            }
            if (!fields["memberID1"]) {
                formIsValid = false;
                errors["memberID1"] = "Cannot be empty";
            }
            if (!fields["groupNumber1"]) {
                formIsValid = false;
                errors["groupNumber1"] = "Cannot be empty";
            }
            if (!fields["customerService1"]) {
                formIsValid = false;
                errors["customerService1"] = "Cannot be empty";
            }
            if (!fields["secondaryInsurance"]) {
                formIsValid = false;
                errors["secondaryInsurance"] = "Cannot be empty";
            }
            if (!fields["secondaryInsuranceName"]) {
                formIsValid = false;
                errors["secondaryInsuranceName"] = "Cannot be empty";
            }
            if (!fields["insuranceSsn2"]) {
                formIsValid = false;
                errors["insuranceSsn2"] = "Cannot be empty";
            }
            if (!fields["insuranceDob2"]) {
                formIsValid = false;
                errors["insuranceDob2"] = "Cannot be empty";
            }
            if (!fields["employer2"]) {
                formIsValid = false;
                errors["employer2"] = "Cannot be empty";
            }
            if (!fields["memberID2"]) {
                formIsValid = false;
                errors["memberID2"] = "Cannot be empty";
            }
            if (!fields["groupNumber2"]) {
                formIsValid = false;
                errors["groupNumber2"] = "Cannot be empty";
            }
            if (!fields["customerService2"]) {
                formIsValid = false;
                errors["customerService2"] = "Cannot be empty";
            }
            if (!fields["gncWaiver"]){
                document.getElementById("gncWaiver").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("gncWaiver").setAttribute("class", "form-control")
            }
            if (!fields["kbdWaiver"]){
                document.getElementById("kbdWaiver").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("kbdWaiver").setAttribute("class", "form-control")
            }
            //need to be conditional depending on if they want services
            // if (!fields["wantOT"]) {
            //     formIsValid = false;
            //     errors["wantOT"] = "Cannot be empty";
            // }
            // if (!fields["wantPT"]) {
            //     formIsValid = false;
            //     errors["wantPT"] = "Cannot be empty";
            // }
            // if (!fields["wantST"]) {
            //     formIsValid = false;
            //     errors["wantST"] = "Cannot be empty";
            // }
            // if (!fields["wantMBH"]) {
            //     formIsValid = false;
            //     errors["wantMBH"] = "Cannot be empty";
            // }
            // if (!fields["wantMonday"]) {
            //     formIsValid = false;
            //     errors["wantMonday"] = "Cannot be empty";
            // }
            // if (!fields["wantTuesday"]) {
            //     formIsValid = false;
            //     errors["wantTuesday"] = "Cannot be empty";
            // }
            // if (!fields["wantWednesday"]) {
            //     formIsValid = false;
            //     errors["wantWednesday"] = "Cannot be empty";
            // }
            // if (!fields["wantThursday"]) {
            //     formIsValid = false;
            //     errors["wantThursday"] = "Cannot be empty";
            // }
            // if (!fields["wantFriday"]) {
            //     formIsValid = false;
            //     errors["wantFriday"] = "Cannot be empty";
            // }
            // if (!fields["wantTime"]) {
            //     formIsValid = false;
            //     errors["wantTime"] = "Cannot be empty";
            // }
            // if (!fields["payWithInsurance"]) {
            //     formIsValid = false;
            //     errors["payWithInsurance"] = "Cannot be empty";
            // }
            // if (!fields["payWithSelfPay"]) {
            //     formIsValid = false;
            //     errors["payWithSelfPay"] = "Cannot be empty";
            // }
            //POLICY SECTION
            if (!fields["initial1"]) {
                formIsValid = false;
                errors["initial1"] = "Cannot be empty";
            }
            if (!fields["initial2"]) {
                formIsValid = false;
                errors["initial2"] = "Cannot be empty";
            }
            if (!fields["initial3"]) {
                formIsValid = false;
                errors["initial3"] = "Cannot be empty";
            }
            if (!fields["initial4"]) {
                formIsValid = false;
                errors["initial4"] = "Cannot be empty";
            }
            if (!fields["initial5"]) {
                formIsValid = false;
                errors["initial5"] = "Cannot be empty";
            }
            if (!fields["initial6"]) {
                formIsValid = false;
                errors["initial6"] = "Cannot be empty";
            }
            if (!fields["initial7"]) {
                formIsValid = false;
                errors["initial7"] = "Cannot be empty";
            }
            if (!fields["initial8"]) {
                formIsValid = false;
                errors["initial8"] = "Cannot be empty";
            }
            //SIGNATURE SECTION
            if (!fields["studentName"]) {
                formIsValid = false;
                errors["studentName"] = "Cannot be empty";
            }
            if (!fields["parentName2"]) {
                formIsValid = false;
                errors["parentName2"] = "Cannot be empty";
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
    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    updateFields() {
        let fields = this.state.fields;
        infoObj.ChildID = childID;
        infoObj.ClientName = fields["clientName"];
        infoObj.Dob = fields["dob"];
        infoObj.ParentName1 = fields["parentName1"];
        infoObj.ParentPhoneNumber = fields["parentPhoneNumber"];
        infoObj.ParentEmail = fields["parentEmail"];
        infoObj.PhysicianName = fields["physicianName"];
        infoObj.PhysicianPhoneNumber = fields["physicianPhoneNumber"];
        infoObj.PhysicianFaxNumber = fields["physicianFaxNumber"];
        infoObj.Address = fields["address"];
        infoObj.City = fields["city"];
        infoObj.State = fields["state"];
        infoObj.Zip = fields["zip"];
        infoObj.Country = fields["country"];

        infoObj.CustomerService1 = fields["customerService1"];
        infoObj.CustomerService1 = fields["customerService2"];
        infoObj.Diagnosis = fields["diagnosis"];
        infoObj.Employer1 = fields["employer1"];
        infoObj.Employer2 = fields["employer2"];
        infoObj.GncWaiver = fields["gncWaiver"];
        infoObj.GroupNumber1 = fields["groupNumber1"];
        infoObj.GroupNumber2 = fields["groupNumber2"];
        infoObj.InsuranceDob1 = fields["insuranceDob1"];
        infoObj.InsuranceDob2 = fields["insuranceDob2"];
        infoObj.InsuranceSsn1 = fields["insuranceSsn1"];
        infoObj.InsuranceSsn2 = fields["insuranceSsn2"];
        infoObj.MemberID1 = fields["memberID1"];
        infoObj.MemberID2 = fields["memberID2"];
        infoObj.PrimaryInsurance = fields["primaryInsurance"];
        infoObj.PrimaryInsuranceName = fields["primaryInsuranceName"];
        infoObj.SecondaryInsurance = fields["secondaryInsurance"];

        // not in db yet
        infoObj.studentName = fields["studentName"];
        infoObj.parentName2 = fields["parentName2"];
        infoObj.date = fields["date"];
        infoObj.consentCheck = fields["consentCheck"];
        console.log(infoObj)

    }

    fetchFromDB = async () => {
        let url = 'api/children/' + childID + '/forms/InsuranceFinancialInformationForm';
        const response = await fetch(url, {
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
            this.state.fields["clientName"] = body.Form[0].ClientName == null ? "" : body.Form[0].ClientName;
            this.state.fields["dob"] = body.Form[0].Dob == null ? "" : body.Form[0].Dob;
            this.state.fields["parentName1"] = body.Form[0].ParentName1 == null ? "" : body.Form[0].ParentName1;
            this.state.fields["parentPhoneNumber"] = body.Form[0].ParentPhoneNumber == null ? "" : body.Form[0].ParentPhoneNumber;
            this.state.fields["parentEmail"] = body.Form[0].ParentEmail == null ? "" : body.Form[0].ParentEmail;
            this.state.fields["physicianName"] = body.Form[0].PhysicianName == null ? "" : body.Form[0].PhysicianName;
            this.state.fields["physicianPhoneNumber"] = body.Form[0].PhysicianPhoneNumber == null ? "" : body.Form[0].PhysicianPhoneNumber;
            this.state.fields["physicianFaxNumber"] = body.Form[0].PhysicianFaxNumber == null ? "" : body.Form[0].PhysicianFaxNumber;
            this.state.fields["country"] = body.Form[0].Country == null ? "" : body.Form[0].Country;
            this.state.fields["city"] = body.Form[0].City == null ? "" : body.Form[0].City;
            this.state.fields["state"] = body.Form[0].State == null ? "" : body.Form[0].State;
            this.state.fields["zip"] = body.Form[0].Zip == null ? "" : body.Form[0].Zip;
            this.state.fields["address"] = body.Form[0].Address == null ? "" : body.Form[0].Address;


            this.state.fields["customerService1"] = body.Form[0].CustomerService1 == null ? "" : body.Form[0].CustomerService1;
            this.state.fields["customerService1"] = body.Form[0].CustomerService1 == null ? "" : body.Form[0].CustomerService1;
            this.state.fields["diagnosis"] = body.Form[0].Diagnosis == null ? "" : body.Form[0].Diagnosis;
            this.state.fields["employer1"] = body.Form[0].Employer1 == null ? "" : body.Form[0].Employer1;
            this.state.fields["employer2"] = body.Form[0].Employer2 == null ? "" : body.Form[0].Employer2;
            this.state.fields["gncWaiver"] = body.Form[0].GncWaiver == null ? "" : body.Form[0].GncWaiver;
            this.state.fields["groupNumber1"] = body.Form[0].GroupNumber1 == null ? "" : body.Form[0].GroupNumber1;
            this.state.fields["groupNumber2"] = body.Form[0].GroupNumber2 == null ? "" : body.Form[0].GroupNumber2;
            this.state.fields["insuranceDob1"] = body.Form[0].InsuranceDob1 == null ? "" : body.Form[0].InsuranceDob1;
            this.state.fields["insuranceDob2"] = body.Form[0].InsuranceDob2 == null ? "" : body.Form[0].InsuranceDob2;
            this.state.fields["insuranceSsn1"] = body.Form[0].InsuranceSsn1 == null ? "" : body.Form[0].InsuranceSsn1;
            this.state.fields["insuranceSsn2"] = body.Form[0].InsuranceSsn2 == null ? "" : body.Form[0].InsuranceSsn2;
            this.state.fields["memberID1"] = body.Form[0].MemberID1 == null ? "" : body.Form[0].MemberID1;
            this.state.fields["memberID2"] = body.Form[0].MemberID2 == null ? "" : body.Form[0].MemberID2;
            this.state.fields["primaryInsurance"] = body.Form[0].PrimaryInsurance == null ? "" : body.Form[0].PrimaryInsurance;
            this.state.fields["primaryInsuranceName"] = body.Form[0].PrimaryInsuranceName == null ? "" : body.Form[0].PrimaryInsuranceName;
            this.state.fields["secondaryInsurance"] = body.Form[0].SecondaryInsurance == null ? "" : body.Form[0].SecondaryInsurance;

            this.state.fields["studentName"] = body.Form[0].studentName == null ? "" : body.Form[0].studentName;
            this.state.fields["parentName2"] = body.Form[0].parentName2 == null ? "" : body.Form[0].parentName2;
            this.state.fields["date"] = body.Form[0].date == null ? "" : body.Form[0].date;
            this.state.fields["consentCheck"] = body.Form[0].consentCheck == null ? "" : body.Form[0].consentCheck;
        }
        return body;
    };

    postToDB() {
        let url = 'api/children/' + childID + '/forms/InsuranceFinancialInformationForm';
        let update = JSON.stringify(infoObj);
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.updateFields();
        this.setState({saveButtonPressed: true});
        this.postToDB();
        this.props.history.push("/parenthome")
    }

    renderInsurance() {
        return(
            <fieldset>
                <div>
                    <div className={"section"}>Insurance Information</div>
                    <div className={"sub-section"}>Client Information</div>
                    <FormGroup>
                        <Row >
                            <Col sm={6}>
                                <Label className="control-label required">Client's Name (First and Last)</Label>
                                <Input
                                    type="text"
                                    ref="clientName"
                                    value={this.state.fields["clientName"] || ""}
                                    onChange={this.handleChange.bind(this, "clientName")}
                                    className="error"
                                    invalid={this.state.errors["clientName"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["clientName"]}>{this.state.errors["clientName"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Date of Birth</Label>
                                <Input
                                    type="text"
                                    ref="dob"
                                    value={this.state.fields["dob"] || ""}
                                    onChange={this.handleChange.bind(this, "dob")}
                                    className="error"
                                    invalid={this.state.errors["dob"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["dob"]}>{this.state.errors["dob"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col sm={6}>
                                <Label className="control-label required">Parent Contact's Name (First and Last)</Label>
                                <Input
                                    type="text"
                                    ref="parentName1"
                                    value={this.state.fields["parentName1"] || ""}
                                    onChange={this.handleChange.bind(this, "parentName1")}
                                    className="error"
                                    invalid={this.state.errors["parentName1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["parentName1"]}>{this.state.errors["parentName1"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Phone Number</Label>
                                <Input
                                    type="text"
                                    ref="parentPhoneNumber"
                                    value={this.state.fields["parentPhoneNumber"] || ""}
                                    onChange={this.handleChange.bind(this, "parentPhoneNumber")}
                                    className="error"
                                    invalid={this.state.errors["parentPhoneNumber"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["parentPhoneNumber"]}>{this.state.errors["parentPhoneNumber"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label className="control-label required">Parent's Email Address</Label>
                                <Input
                                    type="text"
                                    ref="parentEmail"
                                    value={this.state.fields["parentEmail"] || ""}
                                    onChange={this.handleChange.bind(this, "parentEmail")}
                                    className="error"
                                    invalid={this.state.errors["parentEmail"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["parentEmail"]}>{this.state.errors["parentEmail"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className={"sub-section"}>Primary Care Physician</div>
                    <FormGroup>
                        <Row >
                            <Col sm={6}>
                                <Label className="control-label required">Client's Primary Care Physician's Name</Label>
                                <Input
                                    type="text"
                                    ref="physicianName"
                                    value={this.state.fields["physicianName"] || ""}
                                    onChange={this.handleChange.bind(this, "physicianName")}
                                    className="error"
                                    invalid={this.state.errors["physicianName"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["physicianName"]}>{this.state.errors["physicianName"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Phone Number</Label>
                                <Input
                                    type="text"
                                    ref="physicianPhoneNumber"
                                    value={this.state.fields["physicianPhoneNumber"] || ""}
                                    onChange={this.handleChange.bind(this, "physicianPhoneNumber")}
                                    className="error"
                                    invalid={this.state.errors["physicianPhoneNumber"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["physicianPhoneNumber"]}>{this.state.errors["physicianPhoneNumber"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Fax Number</Label>
                                <Input
                                    type="text"
                                    ref="physicianFaxNumber"
                                    value={this.state.fields["physicianFaxNumber"] || ""}
                                    onChange={this.handleChange.bind(this, "physicianFaxNumber")}
                                    className="error"
                                    invalid={this.state.errors["physicianFaxNumber"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["physicianFaxNumber"]}>{this.state.errors["physicianFaxNumber"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label className="control-label required">Physician's Street Address</Label>
                                <Input
                                    type="text"
                                    ref="street"
                                    value={this.state.fields["street"] || ""}
                                    onChange={this.handleChange.bind(this, "street")}
                                    className="error"
                                    invalid={this.state.errors["street"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["street"]}>{this.state.errors["street"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={4}>
                                <Label className="control-label required">City</Label>
                                <Input
                                    type="text"
                                    ref="city"
                                    value={this.state.fields["city"] || ""}
                                    onChange={this.handleChange.bind(this, "city")}
                                    className="error"
                                    invalid={this.state.errors["city"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["city"]}>{this.state.errors["city"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={2}>
                                <Label className="control-label required">State</Label>
                                <Input
                                    type="text"
                                    ref="state"
                                    value={this.state.fields["state"] || ""}
                                    onChange={this.handleChange.bind(this, "state")}
                                    className="error"
                                    invalid={this.state.errors["state"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["state"]}>{this.state.errors["state"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Zip Code</Label>
                                <Input
                                    type="text"
                                    ref="zip"
                                    value={this.state.fields["zip"] || ""}
                                    onChange={this.handleChange.bind(this, "zip")}
                                    className="error"
                                    invalid={this.state.errors["zip"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["zip"]}>{this.state.errors["zip"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Country</Label>
                                <Input
                                    type="text"
                                    ref="country"
                                    value={this.state.fields["country"] || ""}
                                    onChange={this.handleChange.bind(this, "country")}
                                    className="error"
                                    invalid={this.state.errors["country"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["country"]}>{this.state.errors["country"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Label className="control-label required ">Client's Current Diagnosis</Label>
                                <Input
                                    type="textarea"
                                    ref="diagnosis"
                                    value={this.state.fields["diagnosis"] || ""}
                                    onChange={this.handleChange.bind(this, "diagnosis")}
                                    invalid={this.state.errors["diagnosis"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["diagnosis"]}>{this.state.errors["diagnosis"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className={"sub-section"}>Primary Insurance</div>
                    <FormGroup>
                        <Row >
                            <Col sm={6}>
                                <Label className="control-label required">Primary Insurance</Label>
                                <Input
                                    type="text"
                                    ref="primaryInsurance"
                                    value={this.state.fields["primaryInsurance"] || ""}
                                    onChange={this.handleChange.bind(this, "primaryInsurance")}
                                    className="error"
                                    invalid={this.state.errors["primaryInsurance"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["primaryInsurance"]}>{this.state.errors["primaryInsurance"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={6}>
                                <Label className="control-label required">Name of Insured (First and Last)</Label>
                                <Input
                                    type="text"
                                    ref="primaryInsuranceName"
                                    value={this.state.fields["primaryInsuranceName"] || ""}
                                    onChange={this.handleChange.bind(this, "primaryInsuranceName")}
                                    className="error"
                                    invalid={this.state.errors["primaryInsuranceName"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["primaryInsuranceName"]}>{this.state.errors["primaryInsuranceName"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col sm={3}>
                                <Label className="control-label required">Insured's SSN</Label>
                                <Input
                                    type="text"
                                    ref="insuranceSsn1"
                                    value={this.state.fields["insuranceSsn1"] || ""}
                                    onChange={this.handleChange.bind(this, "insuranceSsn1")}
                                    className="error"
                                    invalid={this.state.errors["insuranceSsn1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["insuranceSsn1"]}>{this.state.errors["insuranceSsn1"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Insured's DOB</Label>
                                <Input
                                    type="text"
                                    ref="insuranceDob1"
                                    value={this.state.fields["insuranceDob1"] || ""}
                                    onChange={this.handleChange.bind(this, "insuranceDob1")}
                                    className="error"
                                    invalid={this.state.errors["insuranceDob1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["insuranceDob1"]}>{this.state.errors["insuranceDob1"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={6}>
                                <Label className="control-label required">Employer's Name</Label>
                                <Input
                                    type="text"
                                    ref="employer1"
                                    value={this.state.fields["employer1"] || ""}
                                    onChange={this.handleChange.bind(this, "employer1")}
                                    className="error"
                                    invalid={this.state.errors["employer1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["employer1"]}>{this.state.errors["employer1"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col sm={4}>
                                <Label className="control-label required">Member ID</Label>
                                <Input
                                    type="text"
                                    ref="memberID1"
                                    value={this.state.fields["memberID1"] || ""}
                                    onChange={this.handleChange.bind(this, "memberID1")}
                                    className="error"
                                    invalid={this.state.errors["memberID1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["memberID1"]}>{this.state.errors["memberID1"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={4}>
                                <Label className="control-label required">Group Number</Label>
                                <Input
                                    type="text"
                                    ref="groupNumber1"
                                    value={this.state.fields["groupNumber1"] || ""}
                                    onChange={this.handleChange.bind(this, "groupNumber1")}
                                    className="error"
                                    invalid={this.state.errors["groupNumber1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["groupNumber1"]}>{this.state.errors["groupNumber1"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={4}>
                                <Label className="control-label required">Customer Service Number</Label>
                                <Input
                                    type="text"
                                    ref="customerService1"
                                    value={this.state.fields["customerService1"] || ""}
                                    onChange={this.handleChange.bind(this, "customerService1")}
                                    className="error"
                                    invalid={this.state.errors["customerService1"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["customerService1"]}>{this.state.errors["customerService1"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className={"sub-section"}>Secondary Insurance</div>
                    <FormGroup>
                        <Row >
                            <Col sm={6}>
                                <Label className="control-label required">Secondary Insurance</Label>
                                <Input
                                    type="text"
                                    ref="secondaryInsurance"
                                    value={this.state.fields["secondaryInsurance"] || ""}
                                    onChange={this.handleChange.bind(this, "secondaryInsurance")}
                                    className="error"
                                    invalid={this.state.errors["secondaryInsurance"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["secondaryInsurance"]}>{this.state.errors["secondaryInsurance"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={6}>
                                <Label className="control-label required">Name of Insured (First and Last)</Label>
                                <Input
                                    type="text"
                                    ref="secondaryInsuranceName"
                                    value={this.state.fields["secondaryInsuranceName"] || ""}
                                    onChange={this.handleChange.bind(this, "secondaryInsuranceName")}
                                    className="error"
                                    invalid={this.state.errors["secondaryInsuranceName"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["secondaryInsuranceName"]}>{this.state.errors["secondaryInsuranceName"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col sm={3}>
                                <Label className="control-label required">Insured's SSN</Label>
                                <Input
                                    type="text"
                                    ref="insuranceSsn2"
                                    value={this.state.fields["insuranceSsn2"] || ""}
                                    onChange={this.handleChange.bind(this, "insuranceSsn2")}
                                    className="error"
                                    invalid={this.state.errors["insuranceSsn2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["insuranceSsn2"]}>{this.state.errors["insuranceSsn2"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={3}>
                                <Label className="control-label required">Insured's DOB</Label>
                                <Input
                                    type="text"
                                    ref="insuranceDob2"
                                    value={this.state.fields["insuranceDob2"] || ""}
                                    onChange={this.handleChange.bind(this, "insuranceDob2")}
                                    className="error"
                                    invalid={this.state.errors["insuranceDob2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["insuranceDob2"]}>{this.state.errors["insuranceDob2"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={6}>
                                <Label className="control-label required">Employer's Name</Label>
                                <Input
                                    type="text"
                                    ref="employer2"
                                    value={this.state.fields["employer2"] || ""}
                                    onChange={this.handleChange.bind(this, "employer2")}
                                    className="error"
                                    invalid={this.state.errors["employer2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["employer2"]}>{this.state.errors["employer2"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row >
                            <Col sm={4}>
                                <Label className="control-label required">Member ID</Label>
                                <Input
                                    type="text"
                                    ref="memberID2"
                                    value={this.state.fields["memberID2"] || ""}
                                    onChange={this.handleChange.bind(this, "memberID2")}
                                    className="error"
                                    invalid={this.state.errors["memberID2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["memberID2"]}>{this.state.errors["memberID2"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={4}>
                                <Label className="control-label required">Group Number</Label>
                                <Input
                                    type="text"
                                    ref="groupNumber2"
                                    value={this.state.fields["groupNumber2"] || ""}
                                    onChange={this.handleChange.bind(this, "groupNumber2")}
                                    className="error"
                                    invalid={this.state.errors["groupNumber2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["groupNumber2"]}>{this.state.errors["groupNumber2"]}
                                </FormFeedback>
                            </Col>
                            <Col sm={4}>
                                <Label className="control-label required">Customer Service Number</Label>
                                <Input
                                    type="text"
                                    ref="customerService2"
                                    value={this.state.fields["customerService2"] || ""}
                                    onChange={this.handleChange.bind(this, "customerService2")}
                                    className="error"
                                    invalid={this.state.errors["customerService2"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["customerService2"]}>{this.state.errors["customerService2"]}
                                </FormFeedback>
                            </Col>
                        </Row>
                    </FormGroup>
                    <div className={"sub-section"}>Waivers</div>
                    <FormGroup>
                        <Label className="control-label required">Has the client been approved for the Georgia NOW/COMP Waiver?</Label>
                        <Col sm ={2}>
                            <Input type="select"
                                   name="gncWaiver"
                                   id="gncWaiver"
                                   onChange={this.handleChange.bind(this, "gncWaiver")}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required">Does the client have Katie Beckett/Deeming Waiver?</Label>
                        <Col sm ={2}>
                            <Input type="select"
                                   name="kbdWaiver"
                                   id="kbdWaiver"
                                   onChange={this.handleChange.bind(this, "kbdWaiver")}>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <div className={"sub-section"}>Therapy Services</div>
                    <FormGroup>
                        <p className={"control-label required"} >Please indicate which direct service(s) you are interested in
                        having the client receive in addition to the Jacob's Ladder Neurodevelopmental Programming (sessions can
                        be completed during or outside of program time) and we will begin the insurance determination process:</p>
                        <FormGroup check>
                            <Label check style={{marginLeft:20}}>
                                <Input
                                    type="checkbox"
                                    name="wantOT"
                                    id="wantOT"
                                    onChange={this.handleChange.bind(this, "wantOT")}/>
                                    Occupational Therapy
                            </Label>
                            <br/>
                            <Label check style={{marginLeft:20}}>
                                <Input
                                    type="checkbox"
                                    name="wantPT"
                                    id="wantPT"
                                    onChange={this.handleChange.bind(this, "wantPT")}/>
                                    Physical Therapy
                            </Label>
                            <br/>
                            <Label check style={{marginLeft:20}}>
                                <Input
                                    type="checkbox"
                                    name="wantST"
                                    id="wantST"
                                    onChange={this.handleChange.bind(this, "wantST")}/>
                                    Speech Therapy
                            </Label>
                            <br/>
                            <Label check style={{marginLeft:20}}>
                                <Input
                                    type="checkbox"
                                    name="wantMBH"
                                    id="wantMBH"
                                    onChange={this.handleChange.bind(this, "wantMBH")}/>
                                    Mental and Behavioral Health
                            </Label>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <p className={"control-label required"} >Preferred schedule:</p>
                        <FormGroup check>
                            <Row>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="wantMonday"
                                        id="wantMonday"
                                        onChange={this.handleChange.bind(this, "wantMonday")}/>
                                    Monday
                                </Label>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="wantTuesday"
                                        id="wantTuesday"
                                        onChange={this.handleChange.bind(this, "wantTuesday")}/>
                                    Tuesday
                                </Label>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="wantWednesday"
                                        id="wantWednesday"
                                        onChange={this.handleChange.bind(this, "wantWednesday")}/>
                                    Wednesday
                                </Label>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="wantThursday"
                                        id="wantThursday"
                                        onChange={this.handleChange.bind(this, "wantThursday")}/>
                                    Thursday
                                </Label>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="wantFriday"
                                        id="wantFriday"
                                        onChange={this.handleChange.bind(this, "wantFriday")}/>
                                    Friday
                                </Label>
                            </Row>
                            <br/>
                            <Row>
                                <Label className="control-label required" style={{marginLeft:20}}>Time:</Label>
                                <Input
                                    style={{width:400, marginLeft:20}}
                                    type="text"
                                    ref="wantTime"
                                    value={this.state.fields["wantTime"] || ""}
                                    onChange={this.handleChange.bind(this, "wantTime")}
                                    className="wantTime"
                                    invalid={this.state.errors["wantTime"] != null}/>
                                <FormFeedback
                                    invalid={this.state.errors["wantTime"]}>{this.state.errors["wantTime"]}
                                </FormFeedback>
                            </Row>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <p className={"control-label required"} style={{marginLeft:20}}>How would you like to pay for LSP services?</p>
                            <FormGroup check>
                                <Label check style={{marginLeft:20}}>
                                    <Input
                                        type="checkbox"
                                        name="payWithInsurance"
                                        id="payWithInsurance"
                                        onChange={this.handleChange.bind(this, "payWithInsurance")}/>
                                    Insurance
                                </Label>
                                <Label check style={{marginLeft:40}}>
                                    <Input
                                        type="checkbox"
                                        name="payWithSelfPay"
                                        id="payWithSelfPay"
                                        onChange={this.handleChange.bind(this, "payWithSelfPay")}/>
                                    Self-Pay
                                </Label>
                            </FormGroup>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required">Does the client currently receive therapy services outside of Jacob's Ladder?</Label>
                            <Col sm ={2}>
                                <Input type="select"
                                       name="gncWaiver"
                                       id="gncWaiver"
                                       onChange={this.toggleOutsideTherapyServices.bind(this)}>
                                    <option></option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Input>
                        </Col>
                        <Collapse isOpen={this.state.outsideTherapyServices}>
                            <Card className={"toggle-card"}>
                                <CardBody className={"toggle-card-body"}>
                                    <br/>
                                    <Label>Please complete the below information, as we are unable to complete therapies
                                    on same days for insurance purposes.</Label>
                                    <ReactTable
                                        className={"therapyServicesTable -striped -highlight"}
                                        data={this.state.therapyServicesData}
                                        columns={this.state.therapyServicesColumns}
                                        defaultPageSize={7}
                                        showPagination={false}
                                        getTheadProps={(state, rowInfo) => {
                                            return {style: {background: "#E9E9E9"}}
                                        }}
                                        getTableProps={() => {
                                            return {style: {background: "white"}}
                                        }}
                                    />
                                </CardBody>
                            </Card>
                        </Collapse>
                    </FormGroup>
                </div>
            </fieldset>
        );
    }

    renderAgreement() {
        return (
            <fieldset>
                <div>
                    <div className={"section"}>Signature</div>
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
                                ref="parentName2"
                                value={this.state.fields["parentName2"] || ""}
                                onChange={this.handleChange.bind(this, "parentName2")}
                                className="error"
                                invalid={this.state.errors["parentName2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["parentName2"]}>{this.state.errors["parentName2"]}
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

    renderPolicy() {
        return(
            <div>
                <div className={"section"}>Financial and Insurance Policy</div>
                <div className="body-of-text">
                    <div>
                        Thank you for choosing Jacob's Ladder School and Therapy Center. The following information explains our medical
                        billing and financial policy.
                    </div>
                    <br></br>
                    <div>
                        A copy of your driver's license and the front and back of your insurance card is required before services begin.
                        Benefits will be verified upon receipt of your insurance information and you will be made aware of any estimated
                        out-of-pocket expenses before any services are started. Information obtained from insurance companies is not
                        always a guarantee of payment. Families are ultimately responsible for payment for non-covered services. It is
                        imperative that families are aware of their insurance coverage and their potential responsibilities. We will
                        strive to keep open communication in regards to insurance and payment. Families are responsible for informing
                        Jacob's Ladder School and Therapy Center of any changes regarding insurance. Families assign benefits for filed
                        claims to be paid to Jacob's Ladder School and Therapy Center. Any payment sent directly to the family, intended
                        to cover therapy services provided by one of the companies at Jacob's Ladder School and Therapy Center, should
                        be given to the front office.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial1"
                            value={this.state.fields["initial1"] || ""}
                            onChange={this.handleChange.bind(this, "initial1")}
                            className="error"
                            invalid={this.state.errors["initial1"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial1"]}>{this.state.errors["initial1"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        The usual and customary rate for each service is billed to insurance. If the client is a current JL student and
                        completes LSP services during program hours, the reimbursement will first be applies to the total cost of therapy
                        ($105/hour and $60/half-hour) and any reimbursement amount over the rate will be applies to a future invoice. If
                        the insurance reimbursement is less than the LSP rate, you will be responsible for the remaining balance. If
                        the client completes LSP services outside of program time, the usual and customary rate for each service is billed
                        to insurance and the full reimbursement will be applied to the cost of therapy. If the insurance reimbursement
                        is less than the LSP rate, you will be responsible for the remaining balance.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial2"
                            value={this.state.fields["initial2"] || ""}
                            onChange={this.handleChange.bind(this, "initial2")}
                            className="error"
                            invalid={this.state.errors["initial2"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial2"]}>{this.state.errors["initial2"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        If we bill your insurance and you have a deductible, the full amount applied to your deductible will be billed
                        to you. Families are responsible for all co-pays, coinsurances, and deductible expenses associated with each
                        date of service. Jacob's Ladder School and Therapy Center accepts cash, check, VISA, MASTERCARD. There is a
                        $50 fee for all returned checks.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial3"
                            value={this.state.fields["initial3"] || ""}
                            onChange={this.handleChange.bind(this, "initial3")}
                            className="error"
                            invalid={this.state.errors["initial3"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial3"]}>{this.state.errors["initial3"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        We submit claims for direct treatment with a Licensed Service Professional to insurance within one month of service
                        dates. If payment has not been received within 60 days, the family will be responsible for payment. If insurance
                        makes payment, the payment will be reflected on the next invoice. If a family receives a bill that is not paid
                        within 30 days of receipt of invoice, there will be a $25 late fee added, and services risk being put on hold.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial4"
                            value={this.state.fields["initial4"] || ""}
                            onChange={this.handleChange.bind(this, "initial4")}
                            className="error"
                            invalid={this.state.errors["initial4"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial4"]}>{this.state.errors["initial4"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        Jacob's Ladder Neurodevelopmental Therapy Center will file all insurance as an out-of-network provider. We are not
                        contracted with CMO plans (Amerigroup, Peachstate, or Wellcare). We do not accept any HMO plans unless special
                        approval has been given by your HMO. Currently, we do not bill Medicaid as primary or secondary insurance. Jacob's
                        Ladder School and Therapy Center does accept the NOW and COMP waivers; however, pre-authorization must be approved.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial5"
                            value={this.state.fields["initial5"] || ""}
                            onChange={this.handleChange.bind(this, "initial5")}
                            className="error"
                            invalid={this.state.errors["initial5"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial5"]}>{this.state.errors["initial5"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        An initial assessment for OT/PT/ST/Mental Health Services is $300. Evaluations are an out-of-pocket expense
                        expected at the time of service. An initial evaluation will be needed for all clients starting direct treatment
                        with one of JL's Licensed Service Professionals. Most evaluations will last 1 hour. If a client needs a
                        re-assessment for insurance or personal reasons, the rate will be $175/hour. Direct treatment for PT, OT, ST,
                        and Mental Health Sessions are billed at $105/hour and $60/half-hour.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial6"
                            value={this.state.fields["initial6"] || ""}
                            onChange={this.handleChange.bind(this, "initial6")}
                            className="error"
                            invalid={this.state.errors["initial6"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial6"]}>{this.state.errors["initial6"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        I authorize Jacob's Ladder to release any information including the diagnosis, treatment plan, evaluation report/
                        summaries, progress notes, and discharge summaries for any treatment rendered to my child during the periods of
                        such care to third party payers. I also authorize my insurance company to directly pay Jacob's Ladder insurance
                        benefits otherwise payable to me. I understand that my insurance carrier may pay less than the actual bill for
                        services. I agree to be responsible for payment of all services rendered on behalf of my dependent(s) that are
                        not covered by my insurance carrier.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial7"
                            value={this.state.fields["initial7"] || ""}
                            onChange={this.handleChange.bind(this, "initial7")}
                            className="error"
                            invalid={this.state.errors["initial7"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial7"]}>{this.state.errors["initial7"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        Therapy will be most beneficial to the client with consistent attendance. After 1 missed session, Jacob's Ladder
                        charges a $50 fee per hour or $25 per half hour for any appointment that is not kept per modality. I also
                        understand that on occasion, my child's therapist may have a conflict or illness and need to cancel or reschedule.
                        A make-up session will be attempted when possible.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial8"
                            value={this.state.fields["initial8"] || ""}
                            onChange={this.handleChange.bind(this, "initial8")}
                            className="error"
                            invalid={this.state.errors["initial8"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial8"]}>{this.state.errors["initial8"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div style={{fontWeight:'bold'}}>
                        Please do not hesitate to contact us regarding questions of billing/payments. We are willing to work with each
                        client to ensure a balance between providing therapy services and addressing business issues or concerns.
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
                            <h2 className={"header-print"}>Insurance and Financial Information Form</h2>
                        </div>
                        <div className={"col-3"}>
                            <button className="print-button" onClick={() => window.print()}>Print</button>
                        </div>
                    </div>
                </div>
                <div className={"frame p-4 print-form"} data-spy="scroll">
                    <div> {this.renderInsurance()} </div>
                    <div> {this.renderPolicy()} </div>
                    <div> {this.renderAgreement()} </div>
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

export default InsuranceFinancialInformation;