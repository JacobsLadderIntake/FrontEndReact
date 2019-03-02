import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './login.css'


import {
  Button,
  FormGroup,
  Input,
  Label,
  FormFeedback
} from "reactstrap";
import Header from "./Header/Header";


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          errors: [],
          fields: [],
          email: "test@test.com",
          password: "test",
          startsHidden:true,
          loginButtonPressed:false
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        this.state.loginButtonPressed = true;

        const password = ReactDOM.findDOMNode(this.password).value;
        const email = ReactDOM.findDOMNode(this.email).value;

        if(this.validate(email, password) && this.isAdmin()) {
            this.props.history.push("/adminhome");
        } else if (this.validate()){

        } else {
            return
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate()
        this.setState({fields});
    }

    validate(email, password) {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(this.state.loginButtonPressed) {
            if (email !== this.state.email && password !== this.state.password ) {
                errors["email"] = "Email or password is incorrect"
                errors["password"] = "Email or password is incorrect"
                formIsValid = false;
            }
            if (!fields["email"]) {
                formIsValid = false;
                errors["email"] = "Cannot be empty";

            }

            if (!fields["password"]) {
                formIsValid = false;
                errors["password"] = "Cannot be empty";
            }

        }

        this.setState({errors: errors})
        return formIsValid
    }

  isAdmin(email) {
    return true;
  }

  renderForm() {
    const { errors } = this.state;

    return (
        <form className="form-style" onSubmit={this.handleLogin}>
            <Header loggedIn = {false}/>
            <div className="login-page-title">
                <h1> Existing User Login</h1>
            </div>
            <div className = "question-fields">
                <FormGroup id="email">
                    <Label className="control-label required" lg={6}>Email</Label>
                    <Input lg={12}
                        ref={email => (this.email = email)}
                        type="text"
                        value={this.state.id}
                        onChange={this.handleChange.bind(this, "email")}
                        invalid={this.state.errors["email"]}/>
                    <FormFeedback invalid = {this.state.errors["email"]}>{this.state.errors["email"]}</FormFeedback>
                </FormGroup>
                <FormGroup id="password">
                    <Label className="control-label required" sm={6}>Password</Label>
                    <Input sm={12}
                        value={this.state.id}
                        ref={password => (this.password = password)}
                        onChange={this.handleChange.bind(this, "password")}
                        type="password"
                        invalid={this.state.errors["password"]}/>
                    <FormFeedback invalid = {this.state.errors["password"]}>{this.state.errors["password"]}</FormFeedback>
                </FormGroup>
                <div className="button-div">
                    <Button onClick={this.validForm}
                            color="success"
                            type="submit"> Login </Button>
                </div>
            </div>
        </form>
    );
  }

  render() {
    return (
      <div className="Login">
          {this.renderForm()}
      </div>
    );
  }
}
export default Login;