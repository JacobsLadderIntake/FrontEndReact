import React, { Component } from 'react';
import {
  Alert,
  HelpBlock,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "./LoaderButton";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      studentFirstName: "",
      studentLastName: "",
      parentFirstName: "",
      parentLastName: "",

      password: "",
      confirmPassword: "",
      confirmationCode: "",
      newUser: null
    };
  }

  validateForm() {
    return (
      this.state.studentFirstName.length > 0 &&
      this.state.studentFirstName.length > 0 &&
      this.state.parentFirstName.length > 0 &&
      this.state.parentLastName.length > 0 &&


      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  validateConfirmationForm() {
    return this.state.confirmationCode.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
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
        <FormGroup controlId="confirmationCode" bsSize="large">
          <ControlLabel>Confirmation Code</ControlLabel>
          <FormControl
            autoFocus
            type="tel"
            value={this.state.confirmationCode}
            onChange={this.handleChange}
          />
          <HelpBlock>Please check your email for the code.</HelpBlock>
        </FormGroup>
        <LoaderButton
          block
          bsSize="large"
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
        <FormGroup controlId="studentFirstName" bsSize="large">
          <ControlLabel>Student First Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            value={this.state.studentFirstName}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="studentLastName" bsSize="large">
            <ControlLabel>Student Last Name</ControlLabel>
            <FormControl
                autoFocus
                type="text"
                value={this.state.studentLastName}
                onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="parentFirstName" bsSize="large">
            <ControlLabel>Parent Last Name</ControlLabel>
            <FormControl
                autoFocus
                type="text"
                value={this.state.parentFirstName}
                onChange={this.handleChange}
            />
        </FormGroup>
        <FormGroup controlId="parentLastName" bsSize="large">
        <ControlLabel>Parent Last Name</ControlLabel>
            <FormControl
                autoFocus
                type="text"
                value={this.state.parentLastName}
                onChange={this.handleChange}
            />
                </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword" bsSize="large">
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
        </FormGroup>
        <Alert bsStyle="warning">
          Passwords do not match
        </Alert>
        <LoaderButton
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Signup"
          loadingText="Signing up…"
        />
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