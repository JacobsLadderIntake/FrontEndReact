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

class CreditCardAuthorization extends Component {
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
    infoObj = {"ChildID":"EmmaChild@gmail.com","Name":"", "Address":"", "City":"", "State":"", "ZipCode":"", "Country":"", "CardNumber":"", "Date":"", "SecurityCode":""}; //, "ConsentCheck":""};

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
        infoObj.Name = fields["name"];
        infoObj.Address = fields["address"];
        infoObj.City = fields["city"];
        infoObj.State = fields["state"];
        infoObj.ZipCode = fields["zip"];
        infoObj.Country = fields["country"];
        infoObj.CardNumber = fields["cardNumber"];
        infoObj.Date = fields["date"];
        infoObj.SecurityCode = fields["securityCode"];
        // infoObj.ConsentCheck = fields["consentCheck"];
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            if (!fields["name"]) {
                formIsValid = false;
                errors["name"] = "Cannot be empty";
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
            if (!fields["cardNumber"]) {
                formIsValid = false;
                errors["cardNumber"] = "Cannot be empty";
            }
            if (!fields["date"]) {
                formIsValid = false;
                errors["date"] = "Cannot be empty";
            }
            if (!fields["securityCode"]) {
                formIsValid = false;
                errors["securityCode"] = "Cannot be empty";
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
        const response = fetch('/children/EmmaChild@gmail.com/forms/CreditCardAuthorizationForm', {
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
        const response = await fetch('/children/EmmaChild@gmail.com/forms/CreditCardAuthorizationForm');
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.state.fields["name"] = body[0].Name;
        this.state.fields["address"] = body[0].Address;
        this.state.fields["city"] = body[0].City;
        this.state.fields["state"] = body[0].State;
        this.state.fields["zip"] = body[0].ZipCode;
        this.state.fields["country"] = body[0].Country;
        this.state.fields["cardNumber"] = body[0].CardNumber;
        this.state.fields["date"] = body[0].Date;
        this.state.fields["securityCode"] = body[0].securityCode;
        // this.state.fields["consentCheck"] = body[0].ConsentCheck;
        console.log(this.state.fields);
        return body;
    };

    renderFields() {
        return (
            <fieldset>
                <div>
                    <FormGroup>
                        <Row>
                        <Col sm={12}>
                        <Label className="control-label required" sm={12}>Name of Card Holder</Label>

                            <Input
                                type="text"
                                ref="name"
                                value={this.state.fields["name"] || ""}
                                onChange={this.handleChange.bind(this, "name")}
                                className="error"
                                invalid={this.state.errors["name"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["name"] }>{this.state.errors["name"]}
                            </FormFeedback>
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                        <Col sm={12}>
                            <Label className="control-label required">Billing Address</Label>
                            <Input
                                type="text"
                                ref="address"
                                value={this.state.fields["address"] || ""}
                                onChange={this.handleChange.bind(this, "address")}
                                className="error"
                                invalid={this.state.errors["address"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["address"]}>{this.state.errors["address"]}
                            </FormFeedback>
                        </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm={3}>
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
                            <Col sm={2}>
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
                        <Col sm={4}>
                        <Label className="control-label required" sm={12}>Credit Card Number</Label>
                            <Input
                                type="text"
                                ref="cardNumber"
                                value={this.state.fields["cardNumber"] || ""}
                                onChange={this.handleChange.bind(this, "cardNumber")}
                                className="error"
                                invalid={this.state.errors["cardNumber"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["cardNumber"]}>{this.state.errors["cardNumber"]}
                            </FormFeedback>
                        </Col>
                        <Col sm={4}>
                            <Label className="control-label required" sm={5}>Expiration Date</Label>
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
                        <Col sm={4}>
                            <Label className="control-label required" sm={5}>Security Code</Label>
                            <Input
                                type="text"
                                ref="securityCode"
                                value={this.state.fields["securityCode"] || ""}
                                onChange={this.handleChange.bind(this, "securityCode")}
                                className="error"
                                invalid={this.state.errors["securityCode"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["securityCode"]}>{this.state.errors["securityCode"]}
                            </FormFeedback>
                        </Col>
                        </Row>
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
                            <h2 className={"header-print"}>Credit Card Authorization Form</h2>
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

export default CreditCardAuthorization;