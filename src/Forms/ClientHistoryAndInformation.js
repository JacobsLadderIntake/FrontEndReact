import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    ButtonToolbar, Button
} from "reactstrap";

class ClientHistoryAndInformation extends Component{
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

    goBack(event) {
        window.location.reload();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            // if (!fields["studentFirstName"]) {
            //     formIsValid = false;
            //     errors["studentFirstName"] = "Cannot be empty";
            // }
            // if (!fields["studentLastName"]) {
            //     formIsValid = false;
            //     errors["studentLastName"] = "Cannot be empty";
            // }
            // if (!fields["parentFirstName"]) {
            //     formIsValid = false;
            //     errors["parentFirstName"] = "Cannot be empty";
            // }
            // if (!fields["parentLastName"]) {
            //     formIsValid = false;
            //     errors["parentLastName"] = "Cannot be empty";
            // }
            // if (!fields["parentSignature"]) {
            //     formIsValid = false;
            //     errors["parentSignature"] = "Cannot be empty";
            // }
            // if (!fields["date"]) {
            //     formIsValid = false;
            //     errors["date"] = "Cannot be empty";
            // }
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.props.history.push("/parenthome")
    }

    renderSection1() {
        return(
            <h1>Section 1</h1>
        );
    }

    renderSection2() {
        return(
            <h1>Section 2</h1>
        );
    }

    renderSection3() {
        return(
            <h1>Section 3</h1>
        );
    }

    renderSection4() {
        return(
            <h1>Section 4</h1>
        );
    }

    renderSection5() {
        return(
            <h1>Section 5</h1>
        );
    }

    renderSection6() {
        return(
            <h1>Section 6</h1>
        );
    }

    renderSection7() {
        return(
            <h1>Section 7</h1>
        );
    }

    renderSection8() {
        return(
            <h1>Section 8</h1>
        );
    }

    renderSection9() {
        return(
            <h1>Section 9</h1>
        );
    }

    render(){
        return (
            <div>
                <Header loggedIn = {true}/>
                <div className="form-title">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Client History and Information</h2>
                        </a>
                    </div>
                </div>
                <div> {this.renderSection1()} </div>
                <div> {this.renderSection2()} </div>
                <div> {this.renderSection3()} </div>
                <div> {this.renderSection4()} </div>
                <div> {this.renderSection5()} </div>
                <div> {this.renderSection6()} </div>
                <div> {this.renderSection7()} </div>
                <div> {this.renderSection8()} </div>
                <div> {this.renderSection9()} </div>
                <div className="formFooter">
                    <ButtonToolbar className="">
                        <Button variant="outline-secondary" size="sm" onClick={this.handleSaveAndQuit.bind(this)} active>
                            Save and Quit
                        </Button>
                        <Button variant="secondary" size="sm" onClick={this.handleSubmit.bind(this)} active>
                            Submit
                        </Button>
                    </ButtonToolbar>
                </div>
            </div>
        );
    };
}

export default ClientHistoryAndInformation;