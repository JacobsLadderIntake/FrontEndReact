import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './login.css'


import {
  Alert,
  Button,
  FormGroup,
  InputGroup,
  Input,
  Label
} from "reactstrap";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      fields: [],
      email: "",
      password: "",
      startsHidden:true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleSubmit(e) {
    e.preventDefault();

    const password = ReactDOM.findDOMNode(this.password).value;
    const email = ReactDOM.findDOMNode(this.email).value;
    var errors = this.validate(email, password);
    const isAdmin = this.isAdmin(email);

    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
      if (isAdmin) {
        this.props.history.push("/adminhome");
      } else {
        this.props.history.push("/parenthome");
      }    
    }
  }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(this.state.submitButtonHit) {
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
        }

        this.setState({errors: errors})
        return formIsValid
    }

  isAdmin(email) {
    return true;
  }


  handleChange (event) {
    let change = {}
    change[event.target.id] = event.target.value
    this.setState(change)

  }

  renderForm() {
    const { errors } = this.state;

    return (
        <form className="form-style" onSubmit={this.handleSubmit}>
            <div className="login-page-title">
                <h1> Existing User Login</h1>
            </div>
            <div className = "question-fields">
                {errors.map(error => (
                    <Alert color = "warning" key={error}>Error: {error}</Alert>))}
                    <FormGroup check/>
                <InputGroup id="email">
                    <Label className="control-label required" lg={6}>Email</Label>
                    <Input lg={12}
                        ref={email => (this.email = email)}
                        type="text"
                        value={this.state.id}
                        onChange={event => this.handleChange(event)}/>
                </InputGroup>
                <InputGroup id="password">
                    <Label className="control-label required" sm={6}>Password</Label>
                    <Input sm={12}
                        value={this.state.id}
                        ref={password => (this.password = password)}
                        onChange={event => this.handleChange(event)}
                        type="password"/>
                </InputGroup>
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