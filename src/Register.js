import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './register.css'


import {
    Alert,
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label
} from "reactstrap";


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
//      isLoading: false,
            errors: [],
            errorNumber: 0,
            studentFirstName: "",
            studentLastName: "",
            parentFirstName: "",
            parentLastName: "",
            relationship: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            firstName: "",
            lastName: "",
            newUser: null,
            isAdminChecked: false,
            startsHidden: true,
            codeSubmitted: false,
            submitButtonHit:false,
            confirmationCodeValid:false,

        };
        this.handleChange = this.handleChange.bind(this, false);
        this.goBack = this.goBack.bind(this)
    }

    goBack(event) {
        window.location.reload()
    }

    handleChange(e) {

        const studentFirstName = ReactDOM.findDOMNode(this.studentFirstName).value;
        const studentLastName = ReactDOM.findDOMNode(this.studentLastName).value;
        const parentFirstName = ReactDOM.findDOMNode(this.parentFirstName).value;
        const parentLastName = ReactDOM.findDOMNode(this.parentLastName).value;
        const relationship = ReactDOM.findDOMNode(this.relationship).value;
        const password = ReactDOM.findDOMNode(this.password).value;
        const confirmPassword = ReactDOM.findDOMNode(this.confirmPassword).value;
        const email = ReactDOM.findDOMNode(this.email).value;
        const firstName = ReactDOM.findDOMNode(this.firstName).value;
        const lastName = ReactDOM.findDOMNode(this.lastName).value;
            console.log(this.state.submitButtonHit)
            if(this.state.submitButtonHit) {
                return this.validate(studentFirstName, studentLastName, parentFirstName, parentLastName, relationship, password, confirmPassword, email, firstName, lastName);
            } else {
                return -1;
            }





        // submit the data...
    }


    validate(studentFirstName, studentLastName, parentFirstName, parentLastName, relationship, password, confirmPassword, email, firstName, lastName) {
        // we are going to store errors for all fields
        // in a signle array
        const errors=[]
        console.log("help")
        if (!this.state.isAdminChecked) {
            if (studentFirstName.length === 0) {
                errors.push("Student First Name can't be empty");
            }
            if (studentLastName.length === 0) {
                errors.push("Student Last Name can't be empty");
            }
            if (parentFirstName.length === 0) {
                errors.push("Parent First Name can't be empty");
            }
            if (parentLastName.length === 0) {
                errors.push("Parent Last Name can't be empty");
            }
            if (relationship.length === 0) {
                errors.push("Relationship with student can't be empty");
                console.log("why")

            }
        } else {
            if (firstName.length === 0) {
                errors.push("First Name can't be empty");
            }
            if (lastName.length === 0) {
                errors.push("Last Name can't be empty");
            }

        }

        if (email.length === 0) {
            errors.push("Email can't be empty");
        }
        if (password.length === 0) {
            errors.push("Password can't be empty");
        }
        if (confirmPassword.length === 0) {
            errors.push("Confirm Password can't be empty");
        }
        if (password !== confirmPassword) {
            errors.push("Passwords do not match");
        }

        if (email.length < 5 && email.length !== 0) {
            errors.push("Email should be at least 5 characters long");
        }
        if (email.split("").filter(x => x === "@").length !== 1 && email.length !== 0) {
            errors.push("Email should contain a @");
        }
        if (email.indexOf(".") === -1 && email.length !== 0) {
            errors.push("Email should contain at least one dot");
        }
        console.log(errors.length)
        this.setState({errors})
        return errors.length
    }


    validateConfirmationForm() {
        console.log("hey")
        const confirmationCode = ReactDOM.findDOMNode(this.confirmationCode).value;
        if(confirmationCode == 1234) {
            this.setState({confirmationCodeValid:true})

        } else {
            this.state.codeSubmitted = true
            console.log(this.state.codeSubmitted)
            console.log(this.state.confirmationCodeValid)
        }

    }

    handleChangeConfirmationCode(e) {

        const code = ReactDOM.findDOMNode(this.confirmationCode).value;
    }

    toggle() {
        this.setState({
            isAdminChecked: !this.state.isAdminChecked,
            startsHidden: !this.state.startsHidden
        });
        if (!this.state.isAdminChecked) {
            this.renderConfirmationForm()
            console.log("confirm")
        }
        this.setState({errors: []})
    }


    handleSubmit (event){
        event.preventDefault();
        this.state.submitButtonHit = true
        console.log(this.state.submitButtonHit)
        const number = this.handleChange(event)
        console.log(number)
        if (number === 0 && this.state.isAdminChecked) {
            this.props.history.push("/adminhome");
        } else if(number === 0) {
            this.props.history.push("/parenthome")
    } else {
            console.log("ugh why")
        }
    }


    renderConfirmationForm() {
        return (
            <div>
            <div className="registration-page-title">
                <h1> Welcome to Jacob's Ladder!</h1>
                <h2>Registration Page </h2>
            </div>
            <div className={"confirmationCode"}>
                <FormGroup id="confirmationCode">
                    <Label>If you are signing in as a member of the admission team, please submit the code provided by Jacob's Ladder. If this was a mistake hit "Back" to continue registering as a parent.</Label>
                    <Input
                        autoFocus
                        type="tel"
                        value={this.state.id}
                        ref={confirmationCode => (this.confirmationCode = confirmationCode)}
                        onChange={this.handleChangeConfirmationCode.bind(this)}
                        placeholder = "Confirmation Code"

                    />
                    <FormFeedback>Yikes!</FormFeedback>
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
                    onClick={this.validateConfirmationForm.bind(this)}
                > Submit </Button></div>

            </div>
            </div>

        );
    }

    renderForm() {
        const {errors} = this.state;
        var isAdminChecked = {
            display: this.state.isAdminChecked ? "none" : "flex",
        };
        var startsHidden = {
            display: this.state.startsHidden ? "none" : "flex"
        };

        return (

            <form className="form-style" onSubmit={this.handleSubmit.bind(this)}>
                <div className="registration-page-title">
                    <h1> Welcome to Jacob's Ladder!</h1>
                    <h2>Registration Page </h2>
                </div>
                <div className="question-fields">
                    {errors.map(error => (
                        <Alert color="warning" key={error}>Error: {error}</Alert>
                    ))}
                    <FormGroup check>
                        <Label check onChange={this.toggle.bind(this)} >
                            <Input disabled = {this.state.isAdminChecked} checked={this.state.isAdminChecked} type="checkbox"/>
                            I am a member of the admission team.
                        </Label>
                    </FormGroup>
                    <FormGroup row id="studentFirstName" style={isAdminChecked}>
                        <Label className="control-label required" sm={4}>Student First Name</Label>
                        <Col sm={12}>

                            <Input
                                autoFocus
                                type="text"
                                ref={studentFirstName => (this.studentFirstName = studentFirstName)}
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row id="studentLastName" style={isAdminChecked}>
                        <Label className="control-label required" sm={4}>Student Last Name</Label>
                        <Col sm={12}>
                            <Input
                                ref={studentLastName => (this.studentLastName = studentLastName)}
                                autoFocus
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row id="parentFirstName" style={isAdminChecked}>
                        <Label className="control-label required" sm={4}>Parent/Guardian First Name</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={parentFirstName => (this.parentFirstName = parentFirstName)}
                                type="text"
                                value={this.state.id}
                                onChange={ this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="parentLastName" row style={isAdminChecked}>
                        <Label className="control-label required" sm={4}>Parent/Guardian Last Name</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={parentLastName => (this.parentLastName = parentLastName)}
                                type="text"
                                value={this.state.id}
                                onChange={event => this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="firstName" row style={startsHidden}>
                        <Label className="control-label required" sm={4}>First Name</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={firstName => (this.firstName = firstName)}
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="lastName" row style={startsHidden}>
                        <Label className="control-label required" sm={4}>Last Name</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={lastName => (this.lastName = lastName)}
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="relationship" row style={isAdminChecked}>
                        <Label className="control-label required" sm={4}>Relationship to Student</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={relationship => (this.relationship = relationship)}
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="email" row>
                        <Label className="control-label required" sm={4}>Email</Label>
                        <Col sm={12}>
                            <Input
                                autoFocus
                                ref={email => (this.email = email)}
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="password" row>
                        <Label className="control-label required" sm={4}>Password</Label>
                        <Col sm={12}>
                            <Input
                                value={this.state.id}
                                ref={password => (this.password = password)}
                                onChange={this.handleChange.bind(this, false)}
                                type="password"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup id="confirmPassword" row>
                        <Label className="control-label required" sm={4}>Confirm Password</Label>
                        <Col sm={12}>
                            <Input
                                ref={confirmPassword => (this.confirmPassword = confirmPassword)}
                                value={this.state.id}
                                onChange={this.handleChange.bind(this, false)}
                                type="password"

                            />
                        </Col>
                    </FormGroup>
                    <div className="button-div">
                        <Button
                            onClick={this.validForm}
                            color="success"
                            type="submit"
                            className="submit-button"
                            //          isLoading={this.state.isLoading}
                        > Submit </Button>
                    </div>
                </div>
            </form>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.state.isAdminChecked && !this.state.confirmationCodeValid
                    ? this.renderConfirmationForm()
                    : this.renderForm()}
            </div>
        );
    }
}

export default Register;