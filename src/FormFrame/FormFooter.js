import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';
import ParentTable from "../Parent-Home/ParentTable";
import AdminHome from "../AdminView/AdminHome";
//npm install react-sticky-footer

class FormFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // This binding is necessary to make `this` work in the callback
        this.handleSaveAndQuit = this.handleSaveAndQuit().bind(this);
        this.handleSaveAndQuit = this.handleSubmit().bind(this);
    }

    handleSaveAndQuit(event) {
        //need to save data entered into database
        //if first time opening the form, change progress column of parent table
        //update progress percent for parent and admin

        this.props.navigation.navigate(ParentTable);
    }

    handleSubmit(event) {
        //need to save data entered into database
        //update progress column of parent table
        //update progress percent for parent and admin
        //check for incomplete fields

        //probably will navigate to admin's view of the parent table
        this.props.navigation.navigate(AdminHome);
    }

    //I NEED SOME WAY TO CHECK IF THE USER IS A PARENT OR AN ADMIN BC THAT CHANGES THE BUTTONS IN THE FOOTER
    render() {
        return (
            <StickyFooter
                bottomThreshold={50}
                normalStyles={{
                    backgroundColor: "#999999",
                    padding: "2rem"
                }}
                stickyStyles={{
                    backgroundColor: "rgba(255,255,255,.8)",
                    padding: "2rem"
                }}
            >
                <ButtonToolbar>
                    <Button variant="outline-secondary" size="sm" onChange={this.handleSaveAndQuit} active>
                        Save and Quit
                    </Button>
                    <Button variant="secondary" size="sm" onChange={this.handleSubmit} active>
                        Submit
                    </Button>
                </ButtonToolbar>
            </StickyFooter>
        )
    }
}