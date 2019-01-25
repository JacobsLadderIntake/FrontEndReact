import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './register.css'


import {
  Alert,
  Button,
  FormFeedback,
  InputGroup,
  Input,
  Label
} from "reactstrap";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
//      isLoading: false,
      errors: [],
      studentFirstName: "",
      studentLastName: "",
      parentFirstName: "",
      parentLastName: "",
      relationship: "",
      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);

  }

handleSubmit(e) {
    e.preventDefault();

    const studentFirstName = ReactDOM.findDOMNode(this.studentFirstName).value;
    const studentLastName = ReactDOM.findDOMNode(this.studentLastName).value;
    const parentFirstName = ReactDOM.findDOMNode(this.parentFirstName).value;
    const parentLastName = ReactDOM.findDOMNode(this.parentLastName).value;
    const password = ReactDOM.findDOMNode(this.password).value;
    const confirmPassword = ReactDOM.findDOMNode(this.confirmPassword).value;
    const relationship = ReactDOM.findDOMNode(this.relationship).value;

    const errors = this.validate(studentFirstName, studentLastName, parentFirstName,parentLastName,relationship,password,confirmPassword);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    } else {
        console.log("sup")
    this.props.history.push("/adminhome")    }

    // submit the data...
  }


  validate(studentFirstName, studentLastName, parentFirstName,parentLastName,password,confirmPassword,relationship) {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
    console.log("help")
    if (studentFirstName.length === 0) {
      errors.push("Student First Name can't be empty");
      console.log("why")
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
       errors.push("Field can't be empty");
    }
    if (password !== confirmPassword) {
        errors.push("wrong");
    }

//    if (email.length < 5) {
//      errors.push("Email should be at least 5 charcters long");
//    }
//    if (email.split("").filter(x => x === "@").length !== 1) {
//      errors.push("Email should contain a @");
//    }
//    if (email.indexOf(".") === -1) {
//      errors.push("Email should contain at least one dot");
//    }



    return errors;
  }


  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange (event){
    let change = {}
    change[event.target.id] = event.target.value
    this.setState(change)

  }

//  handleSubmit = async event => {
//    event.preventDefault();
//
//    this.setState({ isLoading: true });
//
//    this.setState({ newUser: "test" });
//
//    this.setState({ isLoading: false });
//  }

//  handleConfirmationSubmit = async event => {
//    event.preventDefault();
//
//    this.setState({ isLoading: true });
//  }

//  renderConfirmationForm() {
//    return (
//        <div>
//        <InputGroup id="confirmationCode">
//          <Label>Confirmation Code</Label>
//          <Input
//            autoFocus
//            type="tel"
//            value={this.state.confirmationCode}
//            onChange={event => this.handleChange(event)}
//          />
//          <FormFeedback>Please check your email for the code.</FormFeedback>
//        </InputGroup>
//        <Button
//          disabled={!this.validateConfirmationForm()}
//          type="submit"
////          isLoading={this.state.isLoading}
//          text="Verify"
//          loadingText="Verifying…"
//        />
//        </div>
//
//    );
//  }

  renderForm() {
  const { errors } = this.state;

    return (

      <form onSubmit={this.handleSubmit}>
      <h1> Welcome to Jacob's Ladder</h1>
      <h2>Registration Page </h2>
        {errors.map(error => (
                        <Alert color = "warning" key={error}>Error: {error}</Alert>
                      ))}
        <InputGroup id="studentFirstName">
          <Label>Student First Name</Label>
          <Input
            autoFocus
            type="text"
            ref={studentFirstName => (this.studentFirstName = studentFirstName)}
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
        </InputGroup>
        <InputGroup id="studentLastName">
            <Label>Student Last Name</Label>
            <Input
                ref={studentLastName => (this.studentLastName = studentLastName)}
                autoFocus
                type="text"
                value={this.state.id}
                onChange={this.handleChange.bind(this)}
          />
        </InputGroup>
        <InputGroup id="parentFirstName">
            <Label>Parent/Guardian First Name</Label>
            <Input
                autoFocus
                ref={parentFirstName => (this.parentFirstName = parentFirstName)}
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
            />
        </InputGroup>
        <InputGroup id="parentLastName">
        <Label>Parent/Guardian Last Name</Label>
            <Input
                autoFocus
                ref={parentLastName => (this.parentLastName = parentLastName)}
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
            />
                </InputGroup>
         <InputGroup id="relationship">
         <Label>Relationship to Student</Label>
            <Input
                autoFocus
                ref={relationship => (this.relationship = relationship)}
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
             />
          </InputGroup>
        <InputGroup id="password">
          <Label>Password</Label>
          <Input
            value={this.state.id}
            ref={password => (this.password = password)}
            onChange={event => this.handleChange(event)}
            type="password"
          />
        </InputGroup>
        <InputGroup id="confirmPassword">
          <Label>Confirm Password</Label>
          <Input
            ref={confirmPassword => (this.confirmPassword = confirmPassword)}
            value={this.state.id}
            onChange={event => this.handleChange(event)}
            type="password"
          />
        </InputGroup>
        <Button
        onClick={this.validForm}

        color="primary"
          type="submit"
//          isLoading={this.state.isLoading}
        > Submit </Button>
      </form>
    );
  }

  render() {
    return (
      <div className="Signup">
        {this.state.newUser === null
          ? this.renderForm()
          : this.renderConfirmationForm()}
      </div>
    );
  }
}
export default Register;