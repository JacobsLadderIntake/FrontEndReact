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
            <fieldset>
                <div>Section 1: Client Information</div>

            </fieldset>


        );
    }

    renderSection2() {
        return(
            <fieldset>
                <div>Section 2: Family Information</div>
            </fieldset>

        );
    }

    renderSection3() {
        return(
            <fieldset>
                <div>Section 3: Prenatal and Birth History</div>
            </fieldset>

        );
    }

    renderSection4() {
        return(
            <fieldset>
                <div>Section 4: Developmental History</div>
            </fieldset>

        );
    }

    renderSection5() {
        return(
            <fieldset>
                <div>Section 5: Medical History/Past Therapies</div>
            </fieldset>
        );
    }

    renderSection6() {
        return(
            <fieldset>
                <div>Section 6: General Health</div>
            </fieldset>

        );
    }

    renderSection7() {
        return(
            <fieldset>
                <div>Section 7: Educational History</div>
            </fieldset>

        );
    }

    renderSection8() {
        return(
            <fieldset>
                <div>Section 8: Communication</div>
            </fieldset>

        );
    }

    renderSection9() {
        return(
            <fieldset>
                <div>Section 9: Emotional/Behavioral History</div>
            </fieldset>

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
                <div className={"frame p-4"}>
                    <div> {this.renderSection1()} </div>
                    <div> {this.renderSection2()} </div>
                    <div> {this.renderSection3()} </div>
                    <div> {this.renderSection4()} </div>
                    <div> {this.renderSection5()} </div>
                    <div> {this.renderSection6()} </div>
                    <div> {this.renderSection7()} </div>
                    <div> {this.renderSection8()} </div>
                    <div> {this.renderSection9()} </div>
                </div>
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