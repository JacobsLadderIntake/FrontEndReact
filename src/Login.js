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

var url = '/userlogin';
var infoObj = {};
var token = '';
var userID = '';

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
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }

    infoObj = {email:"default", password:"default"};

    handleLogin(e) {
        e.preventDefault();
        console.log(infoObj)
        this.setState({loginButtonPressed:true})
        infoObj.password = ReactDOM.findDOMNode(this.password).value;
        infoObj.email = ReactDOM.findDOMNode(this.email).value;
        this.doLogin();
    }

    handleForgotPassword(e) {
        e.preventDefault();
        this.props.history.push("/resetpassword");
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate()
        this.updateFields();
        this.setState({fields});
    }

    updateFields() {
        let fields = this.state.fields;
        let infoObj = this.infoObj;
        infoObj.email = fields["email"];
        infoObj.password = fields["password"];
    }

    doLogin = async () => {
        infoObj = JSON.stringify(this.infoObj);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: infoObj
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        if (body.Error) {
            console.log("wrong email/pass");
            console.log(infoObj)
        } else {
            token = body.token;
            userID = this.state.fields["email"].split("@")[0];
            this.props.history.push("/parenthome");
        }
        console.log(body);
    };

    validate(email, password) {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(this.state.loginButtonPressed) {
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
                <div className={"p-2 justify-content-center"} onClick = {this.handleForgotPassword} style = {{fontWeight: 'bold'}}>
                    Forgot password? Click here.
                    </div>
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
export {token, userID};