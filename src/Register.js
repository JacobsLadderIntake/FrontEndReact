import React, {Component} from 'react';
import './register.css'
import {
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label
} from "reactstrap";
import Header from "./Header/Header";

var parentObj = {};
var childObj = {};
var urlUser = 'https://jacobsladderapi.herokuapp.com/signup';
var urlChild = 'https://jacobsladderapi.herokuapp.com/children/';
var token = '';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            fields: [],
            isAdminChecked: false,
            startsHidden: true,
            confirmationCode:'1234',
            confirmationCodeValid: false,
            submitButtonPressed: false,
            confirmButtonPressed:false
            // emailAlreadyExists:false,
        };
        this.goBack = this.goBack.bind(this);
    }

    goBack(event) {
        window.location.reload()
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields});
        this.updateFields();
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        // let substring ="@";
        if(this.state.submitButtonPressed ||this.state.confirmButtonPressed) {
            if (!this.state.isAdminChecked) {
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
                if (!fields["relationship"]) {
                    formIsValid = false;
                    errors["relationship"] = "Cannot be empty";
                }
            } else {
                if (!fields["firstName"]) {
                    formIsValid = false;
                    errors["firstName"] = "Cannot be empty";
                }
                if (!fields["lastName"]) {
                    formIsValid = false;
                    errors["lastName"] = "Cannot be empty";
                }
            }
            if (!fields["email"]) {
                formIsValid = false;
                errors["email"] = "Cannot be empty";

            }
            if (fields["email"] && (fields["email"].indexOf("@") === -1 || fields["email"].indexOf(".") === -1)) {
                errors["email"] = "Email is not formatted correctly"
            }

            if (!fields["password"]) {
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }
            // if(this.checkEmailExists()) {
            //     this.setState({emailAlreadyExists:true})
            // }
            if (!fields["confirmPassword"]) {
                formIsValid = false;
                errors["confirmPassword"] = "Cannot be empty";
            }
            if (fields["confirmPassword"] !== fields["password"]) {
                formIsValid = false;
                errors["confirmPassword"] = "Passwords do not match";
            }

            if (fields["email"] < 5 && fields["email"].length !== 0) {
                formIsValid = false;
                errors["email"] = "Email should be at least 5 characters long";
            }

            if (!fields["securityQuestion"]) {
                formIsValid = false;
                errors["securityQuestion"] = "Must select a question";
            }

            if (!fields["securityAnswer"]) {
                formIsValid = false;
                errors["securityAnswer"] = "Cannot be empty";
            }
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    handleConfirmButtonHit(){
        this.setState({ confirmButtonPressed: true }, () => {
            this.validateConfirmationForm();
        });


    }
    // uncommentlater
    checkEmailExists() {
        return true
    }

    validateConfirmationForm() {
        let fields = this.state.fields;
        let errors = {};
        if (this.state.confirmButtonPressed) {
            if (this.state.confirmationCode === fields["confirmationCode"]) {
                this.setState({confirmationCodeValid: true})
            } else {
                errors["confirmationCode"] = "The code entered is incorrect";
            }
        }
        this.setState({errors: errors})
    }
    handleChangeConfirmationCode(field,e) {

        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    toggle() {
        this.setState({
            isAdminChecked: !this.state.isAdminChecked,
            startsHidden: !this.state.startsHidden
        });
        if (!this.state.isAdminChecked) {
            this.renderConfirmationForm()
        }
    }

    updateFields() {
        let fields = this.state.fields;
        parentObj.isAdmin = fields["isAdmin"] ? 1 : 0;
        parentObj.userFirstName = fields["parentFirstName"];
        parentObj.userLastName = fields["parentLastName"];
        parentObj.password = fields["password"];
        parentObj.email = fields["email"];
        parentObj.securityQuestion = fields["securityQuestion"];
        parentObj.securityQuestionAnswer = fields["securityAnswer"];
        childObj.childFirstName = this.state.fields["studentFirstName"];
        childObj.childLastName = this.state.fields["studentLastName"];
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonPressed: true},()=> {
        });
        this.createUser();
        this.createChild();
        this.props.history.push("/");
    }

    createUser = async () => {
        parentObj.userID = this.state.fields["email"].split("@")[0];
        var update = JSON.stringify(parentObj);
        const response = fetch(urlUser, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
        const body = await response.json;
    }

    createChild = async () => {
        childObj.parentID = parentObj.userID;
        // semi-unique childID generation. relies on no parentID being the same
        // and no parent naming two children the same thing
        childObj.childID = childObj.childFirstName + parentObj.userID;
        var update = JSON.stringify(childObj);
        const response = fetch(urlChild, {
            method: 'POST',
            headers: {
                //'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
    }

    handleCancel(event) {
        event.preventDefault();
        this.props.history.push("/")
    }

    renderConfirmationForm() {
        return (
            <div className="confirmation-code-background">
                <div className="registration-page-title">
                    <h1> Welcome to Jacob's Ladder!</h1>
                    <h2>Registration Page </h2>
                </div>
                <div className={"confirmationCode"}>
                    <FormGroup>
                        <Label>If you are signing in as a member of the admission team, please submit the code provided
                            by Jacob's Ladder. If this was a mistake hit "Back" to continue registering as a
                            parent.</Label>
                        <Input
                            autoFocus
                            type="password"
                            value={this.state.fields["confirmationCode"] || ""}
                            ref="confirmationCode"
                            onChange={this.handleChangeConfirmationCode.bind(this,"confirmationCode")}
                            invalid= {this.state.errors["confirmationCode"] != null}
                    />
                        <FormFeedback invalid = {this.state.errors["confirmationCode"]}>{this.state.errors["confirmationCode"]}</FormFeedback>
                    </FormGroup>
                    <div className={" confirmation_buttons_div"}>
                        <Button
                            color={"warning"}
                            className={"confirmationCodeButton"}
                            type="submit"
                            onClick={this.goBack.bind(this)}
                        > Back </Button>
                        <Button
                            color={"success"}
                            className={"confirmationCodeButton"}
                            onClick={this.handleConfirmButtonHit.bind(this)}
                        > Submit </Button></div>

                </div>
            </div>

        );
    }

    renderForm() {
        var isAdminChecked = {
            display: this.state.isAdminChecked ? "none" : "flex",
        };
        var startsHidden = {
            display: this.state.startsHidden ? "none" : "flex"
        };
        // var emailAlreadyExists = {
        //     display: this.state.emailAlreadyExists ? "block" : "none",
        // };
        return (

            <form className="form-style" onSubmit={this.handleSubmit.bind(this)}>
                <div className="registration-page-title">
                    <h2>Registration</h2>
                </div>
                <fieldset>
                    <div className="question-fields">
                        {/*<Alert style={emailAlreadyExists}> This email is already connected to an account. Would you to like to return to return to the <a href = './login'>login page</a>?</Alert>*/}

                        <FormGroup check>
                            <Label check onChange={this.toggle.bind(this)}>
                                <Input disabled={this.state.isAdminChecked} defaultChecked={this.state.isAdminChecked}
                                       type="checkbox"/>
                                I am a member of the admission team.
                            </Label>
                        </FormGroup>
                        <FormGroup row style={isAdminChecked}>
                            <Label className="control-label required" sm={6}>Student First Name</Label>
                            <Col sm={12}>

                                <Input

                                    type="text"
                                    ref="studentFirstName"
                                    value={this.state.fields["studentFirstName"] || ""}
                                    onChange={this.handleChange.bind(this, "studentFirstName")}
                                    className="error"
                                    invalid={this.state.errors["studentFirstName"] != null}


                                />
                                <FormFeedback
                                    invalid={this.state.errors["studentFirstName"]}>{this.state.errors["studentFirstName"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={isAdminChecked}>
                            <Label className="control-label required" sm={6}>Student Last Name</Label>
                            <Col sm={12}>
                                <Input
                                    ref="studentLastName"
                                    type="text"
                                    value={this.state.fields["studentLastName"] || ""}
                                    onChange={this.handleChange.bind(this, "studentLastName")}
                                    invalid={this.state.errors["studentLastName"] != null}

                                />
                                <FormFeedback
                                    invalid={this.state.errors["studentLastName"]}>{this.state.errors["studentLastName"]}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row style={isAdminChecked}>
                            <Label className="control-label required" sm={6}>Parent/Guardian First Name</Label>
                            <Col sm={12}>
                                <Input
                                    ref="parentFirstName"
                                    type="text"
                                    value={this.state.fields["parentFirstName"] || ""}
                                    onChange={this.handleChange.bind(this, "parentFirstName")}
                                    invalid={this.state.errors["parentFirstName"] != null}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["parentFirstName"]}>{this.state.errors["parentFirstName"]}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row style={isAdminChecked}>
                            <Label className="control-label required" sm={6}>Parent/Guardian Last Name</Label>
                            <Col sm={12}>
                                <Input
                                    ref="parentLastName"
                                    type="text"
                                    value={this.state.fields["parentLastName"] || ""}
                                    onChange={this.handleChange.bind(this, "parentLastName")}
                                    invalid={this.state.errors["parentLastName"] != null}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["parentLastName"]}>{this.state.errors["parentLastName"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={startsHidden}>
                            <Label className="control-label required" sm={6}>First Name</Label>
                            <Col sm={12}>
                                <Input
                                    ref="firstName"
                                    type="text"
                                    value={this.state.fields["firstName"] || ""}
                                    onChange={this.handleChange.bind(this, "firstName")}
                                    invalid={this.state.errors["firstName"]}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["firstName"]}>{this.state.errors["firstName"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row style={startsHidden}>
                            <Label className="control-label required" sm={6}>Last Name</Label>
                            <Col sm={12}>
                                <Input
                                    ref="lastName"
                                    type="text"
                                    value={this.state.fields["lastName"] || ""}
                                    onChange={this.handleChange.bind(this, "lastName")}
                                    invalid={this.state.errors["lastName"]}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["lastName"]}>{this.state.errors["lastName"]}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row style={isAdminChecked}>
                            <Label className="control-label required" sm={6}>Relationship to Student</Label>
                            <Col sm={12}>
                                <Input
                                    ref="relationship"
                                    type="text"
                                    value={this.state.fields["relationship"] || ""}
                                    onChange={this.handleChange.bind(this, "relationship")}
                                    invalid={this.state.errors["relationship"] != null}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["relationship"]}>{this.state.errors["relationship"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="control-label required" sm={6}>Email</Label>
                            <Col sm={12}>
                                <Input
                                    ref="email"
                                    type="text"
                                    value={this.state.fields["email"] || ""}
                                    onChange={this.handleChange.bind(this, "email")}
                                    invalid={this.state.errors["email"] != null}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["email"]}>{this.state.errors["email"]}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="control-label required" sm={6}>Password</Label>
                            <Col sm={12}>
                                <Input
                                    value={this.state.fields["password"] || ""}
                                    ref="password"
                                    onChange={this.handleChange.bind(this, "password")}
                                    type="password"
                                    invalid={this.state.errors["password"] != null}
                                />
                                <FormFeedback
                                    invalid={this.state.errors["password"]}>{this.state.errors["password"]}</FormFeedback>

                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="control-label required" sm={6}>Confirm Password</Label>
                            <Col sm={12}>
                                <Input
                                    ref="confirmPassword"
                                    value={this.state.fields["confirmPassword"] || ""}
                                    onChange={this.handleChange.bind(this, "confirmPassword")}
                                    type="password"
                                    invalid={this.state.errors["confirmPassword"] != null}

                                />
                                <FormFeedback
                                    invalid={this.state.errors["confirmPassword"]}>{this.state.errors["confirmPassword"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="control-label required" sm={6}>Select a Security Question</Label>
                            <Col sm={12}>
                                <Input
                                    ref="securityQuestion"
                                    value={this.state.fields["securityQuestion"] || ""}
                                    onChange={this.handleChange.bind(this, "securityQuestion")}
                                    type="select"
                                    invalid={this.state.errors["securityQuestion"] != null}>
                                <option></option>
                                <option>What is your mother's maiden name?</option>
                                <option>What is the name of your first pet?</option>
                                <option>What elementary school did you go to?</option>
                                <option>Where would you travel on your dream vacation?</option>
                                </Input>
                                <FormFeedback
                                    invalid={this.state.errors["securityQuestion"]}>{this.state.errors["securityQuestion"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label className="control-label required" sm={6}>Security Question Answer</Label>
                            <Col sm={12}>
                                <Input
                                    ref="securityAnswer"
                                    value={this.state.fields["securityAnswer"] || ""}
                                    onChange={this.handleChange.bind(this, "securityAnswer")}
                                    type="password"
                                    invalid={this.state.errors["securityAnswer"] != null}

                                />
                                <FormFeedback
                                    invalid={this.state.errors["securityAnswer"]}>{this.state.errors["securityAnswer"]}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <div className="button-div">
                            <Button
                                onClick={this.validForm}
                                color="success"
                                type="submit"
                                className="submit-button"
                            > Submit </Button>
                            <br></br>
                            <Button
                                onClick={this.handleCancel.bind(this)}
                                color="link"
                                type="submit"
                            > Cancel </Button>
                        </div>


                    </div>
                </fieldset>
            </form>
        );
    }

    render() {
        return (
            <div>
                <Header loggedIn = {false}/>
                {(this.state.isAdminChecked && !this.state.confirmationCodeValid)
                    ? this.renderConfirmationForm()
                    : this.renderForm()}
            </div>
        );
    }
}

export default Register;
