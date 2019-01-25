import React, { Component } from 'react';
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
      isLoading: false,
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
  }



  validateForm() {
//    return (
//      this.state.studentFirstName.length > 0 &&
//      this.state.studentFirstName.length > 0 &&
//      this.state.parentFirstName.length > 0 &&
//      this.state.parentLastName.length > 0 &&
//      this.state.relationship.length > 0 &&
//      this.state.password.length > 0 &&
//      this.state.password === this.state.confirmPassword
//    );
    return (this.state.studentFirstName.length > 0);

  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange (event){
    let change = {}
    change[event.target.id] = event.target.value
    this.setState(change)
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });

    this.setState({ newUser: "test" });

    this.setState({ isLoading: false });
  }

  handleConfirmationSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
  }

  renderConfirmationForm() {
    return (
      <form onSubmit={this.handleConfirmationSubmit}>
        <InputGroup id="confirmationCode">
          <Label>Confirmation Code</Label>
          <Input
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={event => this.handleChange(event)}
          />
          <FormFeedback>Please check your email for the code.</FormFeedback>
        </InputGroup>
        <Button
          disabled={!this.validateConfirmationForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Verify"
          loadingText="Verifying…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputGroup id="studentFirstName">
          <Label>Student First Name</Label>
          <Input
            autoFocus
            type="text"
            placeholder = "testing"
            value={this.state.id}
            onChange={this.handleChange.bind(this)}
          />
        </InputGroup>
        <InputGroup id="studentLastName">
            <Label>Student Last Name</Label>
            <Input
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
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
            />
        </InputGroup>
        <InputGroup id="parentLastName">
        <Label>Parent/Guardian Last Name</Label>
            <Input
                autoFocus
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
            />
                </InputGroup>
         <InputGroup id="relationship">
         <Label>Relationship to Student</Label>
            <Input
                autoFocus
                type="text"
                value={this.state.id}
                onChange={event => this.handleChange(event)}
             />
          </InputGroup>
        <InputGroup id="password">
          <Label>Password</Label>
          <Input
            value={this.state.id}
            onChange={event => this.handleChange(event)}
            type="password"
          />
        </InputGroup>
        <InputGroup id="confirmPassword">
          <Label>Confirm Password</Label>
          <Input
            value={this.state.id}
            onChange={event => this.handleChange(event)}
            type="password"
          />
        </InputGroup>
        <Alert>
        Alert!!
        </Alert>
        <Button
        disabled={!this.validateForm()}

        color="primary"
          type="submit"
          isLoading={this.state.isLoading}
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