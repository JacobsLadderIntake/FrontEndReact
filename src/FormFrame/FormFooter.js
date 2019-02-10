import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Button, ButtonToolbar} from 'reactstrap';
import ParentTable from "../Parent-Home/ParentTable";
import AdminHome from "../AdminView/AdminHome";
import './formFooter.css';

var s;

class FormFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // This binding is necessary to make `this` work in the callback
        this.handleSaveAndQuit = this.handleSaveAndQuit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    s = 0;

    state = {redirect: false};

    setRedirect = () => {
        this.setState({ redirect: true});
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            if (s == 1) {
                return <Redirect to={ParentTable}/>
            } else {
                return<Redirect to={AdminHome}/>
            }
        }
    };

    handleSaveAndQuit(event) {
        //need to save data entered into database
        //if first time opening the form, change progress column of parent table
        //update progress percent for parent and admin

        s = 1;
        this.setRedirect();
        this.renderRedirect();

    }

    handleSubmit(event) {
        //need to save data entered into database
        //update progress column of parent table
        //update progress percent for parent and admin
        //check for incomplete fields

        //probably will navigate to admin's view of the parent table
        s = 2;
        this.setRedirect();
        this.renderRedirect();
    }

    //I NEED SOME WAY TO CHECK IF THE USER IS A PARENT OR AN ADMIN BC THAT CHANGES THE BUTTONS IN THE FOOTER
    render() {
        return (
            <div className="formFooter">
                <ButtonToolbar className="">
                    <Button variant="outline-secondary" size="sm" onClick={this.handleSaveAndQuit} active>
                        Save and Quit
                    </Button>
                    <Button variant="secondary" size="sm" onClick={this.handleSubmit} active>
                        Submit
                    </Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default FormFooter;