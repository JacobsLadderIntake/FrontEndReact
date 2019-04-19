import React, { Component } from 'react';
import {Button, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import './register.css';
import Header from "./Header/Header";

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            formIsValid: false
        };

        this.goBack = this.goBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    goBack(event) {
        event.preventDefault();
        this.props.history.push("/");
    }

    handleChange(field, e) {
        e.preventDefault();
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    handleReset(e) {
        e.preventDefault();
        //post to database
        if (!this.validate()) {

        } else {
            this.props.history.push("/");
        }
    }

    validate() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
            if (!fields["securityQuestion"]) {
                formIsValid = false;
                errors["securityQuestion"] = "Cannot be empty";
            }
            if (!fields["email"]) {
                formIsValid = false;
                errors["email"] = "Cannot be empty";
            }
            if (!fields["newPassword"]) {
                formIsValid = false;
                errors["newPassword"] = "Cannot be empty";
            }
            if (!fields["confirmPassword"]) {
                formIsValid = false;
                errors["confirmPassword"] = "Cannot be empty";
            }
            //need to make sure email is valid
            //need to make sure security question answer is correct
            if (fields["newPassword"] !== fields["confirmPassword"]) {
                formIsValid = false;
                errors["confirmPassword"] = "Passwords do not match";
            }
        this.setState({errors: errors});
        return formIsValid;
    }

    render() {
        return (
            <div className="confirmation-code-background">
                <Header loggedIn = {false}/>
                <br/>
                <br/>
                <br/>
                <div className="registration-page-title">
                    <h1>Reset Password</h1>
                </div>
                <div className={"confirmationCode"}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            autoFocus
                            onChange={this.handleChange.bind(this, "email")}
                            invalid= {this.state.errors["email"] != null}
                        />
                        <FormFeedback
                            invalid={this.state.errors["email"]}>{this.state.errors["email"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>GET Security Question</Label>
                        <Input
                            autoFocus
                            type="password"
                            onChange={this.handleChange.bind(this, "securityQuestion")}
                            invalid= {this.state.errors["securityQuestion"] != null}
                        />
                        <FormFeedback
                            invalid={this.state.errors["securityQuestion"]}>{this.state.errors["securityQuestion"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>New Password</Label>
                        <Input
                            autoFocus
                            type="password"
                            onChange={this.handleChange.bind(this, "newPassword")}
                            invalid= {this.state.errors["newPassword"] != null}
                        />
                        <FormFeedback
                            invalid={this.state.errors["newPassword"]}>{this.state.errors["newPassword"]}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input
                            autoFocus
                            type="password"
                            onChange={this.handleChange.bind(this, "confirmPassword")}
                            invalid= {this.state.errors["confirmPassword"] != null}
                        />
                        <FormFeedback
                            invalid={this.state.errors["confirmPassword"]}>{this.state.errors["confirmPassword"]}</FormFeedback>
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
                            onClick={this.handleReset.bind(this)}
                        > Submit </Button></div>
                </div>
            </div>
        );
    }
}

export default ResetPassword;