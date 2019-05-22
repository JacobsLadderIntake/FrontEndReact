import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Row, Col, Input, Button} from "reactstrap";
import Header from "../Header/Header";
import {token, userID, isAdmin} from '../Login';
import {childParentID} from "../AdminView/StudentCard";

// FUTURE WORK: hardcoded indexing at 0 (getChild) will need to be dynamic based on selected student,
// such that one parent can have multiple children (a need specified by Jacob's Ladder)

let childID = '';
let childObj = {};

class ParentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAdmin: false,
            studentName: "",
            evalDate: "",
            dueDate: "",
            fields: [],
            columns: [{
                Header: 'Form Name',
                accessor: 'name',
            }, {
                Header: 'Progress',
                accessor: 'progress',
                width: 200
            }],
            data: [{
                name: <div id="chai" style={{color: 'blue', textDecoration: 'underline'}}>Client History and Information Form</div>,
                progress: 'Not Started',
                color: 'white',
            }, {
                name: <div id="cmr" style={{color: 'blue', textDecoration: 'underline'}}>Consent and Medical Release Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="pei" >Permission for Exchange of Information Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="ep" style={{color: 'blue', textDecoration: 'underline'}}>Enrollment Process Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="bmc" style={{color: 'blue', textDecoration: 'underline'}}>Brain Map Consent Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="cca" >Credit Card Authorization Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="ifi" >Insurance and Financial Information Form</div>,
                progress: 'Not Started'
            }]
        };
        this.handleDueDateSubmit = this.handleDueDateSubmit.bind(this);
    }

    componentDidMount() {
        if (!isAdmin) {
            this.getChild()
                .then(res => this.setState({ response: res.express }))
                .catch(err => console.log(err));
        } else {
            this.getChildFromID()
                .then(res => this.setState({ response: res.express }))
                .catch(err => console.log(err));
        }

    }


    handleClick(row, event) {
        event.preventDefault();

        if (row.name.props.id === "bmc") {
            this.props.history.push("/bmc");
        } else if (row.name.props.id === "ep") {
            this.props.history.push("/ep");
        } else if (row.name.props.id === "cmr") {
            this.props.history.push("/cmr");
        } else if (row.name.props.id === "chai") {
            this.props.history.push("/chai");
        } else if (row.name.props.id === "pei") {
            // THIS FORM IS NOT YET FULLY WORKING
            // this.props.history.push("/pei");
        } else if (row.name.props.id === "cca") {
            // THIS FORM IS NOT YET FULLY WORKING
            // this.props.history.push("/cca");
        } else if (row.name.props.id === "ifi") {
            // THIS FORM IS NOT YET FULLY WORKING
            // this.props.history.push("/ifi");
        }
    }

    getChild = async () => {
        const response = await fetch("api/users/" + userID + "/children", {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.state.studentName = body.UsersChildren[0].ChildFirstName + " " + body.UsersChildren[0].ChildLastName;
        this.state.evalDate = body.UsersChildren[0].EvaluationDate;
        this.state.dueDate = body.UsersChildren[0].ProfileDueDate;
        childID = body.UsersChildren[0].ChildID;
        return body;
    };

    getChildFromID = async () =>{
        const response = await fetch("api/users/" + childParentID + "/children", {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        this.state.studentName = body.UsersChildren[0].ChildFirstName + " " + body.UsersChildren[0].ChildLastName;
        this.state.fields["evalDateInput"] = body.UsersChildren[0].EvaluationDate;
        this.state.fields["dueDateInput"] = body.UsersChildren[0].ProfileDueDate;
        childID = body.UsersChildren[0].ChildID;
        childObj = body.UsersChildren[0];
        console.log(childObj);
        return body;
    };

    updateChild() {
        childObj.ProfileDueDate =  this.state.fields["dueDateInput"];
        childObj.EvaluationDate = this.state.fields["evalDateInput"];
        var update = JSON.stringify(childObj);
        console.log("updated JSON");
        console.log(update);
        const response = fetch('/children/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
        console.log("response");
        console.log(response);
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        // this.validate();
        this.setState({fields: fields});

    }

    handleDueDateSubmit() {
        this.updateChild();
    }

    render() {
        // console.log(isAdmin);
        var dueDate = isAdmin ? <Input ref="dueDateInput"
                                       type="text"
                                       onChange={this.handleChange.bind(this, "dueDateInput")}
                                       value={this.state.fields["dueDateInput"] || ""}/>
            : <text style={{fontWeight: 'normal'}}>{this.state.dueDate}</text>;
        var evalDate = isAdmin ? <Input ref="evalDateInput"
                                        type="text"
                                        onChange={this.handleChange.bind(this, "evalDateInput")}
                                        value={this.state.fields["evalDateInput"] || ""}/>
            : <text style={{fontWeight: 'normal'}}>{this.state.evalDate}</text>;
        var button = isAdmin ? <Button className={"mt-auto"} onClick = {this.handleDueDateSubmit}>Set Dates</Button> : "";
        return (
            <div className={"p-4"}>
                <Header loggedIn = {true}/>
                <Row className="parent-table-header">
                    <h2 className = "parent-top col-9 pb-4">Intake Profile Checklist: {this.state.studentName}</h2>
                </Row>
                <Row>
                    <Col className={"col-4"} style={{fontWeight: 'bold', marginLeft: 35}}> Intake Profile Due Date: {dueDate} </Col>
                    <Col className={"col-4"} style={{fontWeight: 'bold'}}> Evaluation Date: {evalDate} </Col>
                    <Col className={"d-flex flex-column"}> {button} </Col>
                </Row>
                <br/>
                <ReactTable
                    className={"parentTable -striped -highlight"}
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={7}
                    showPagination={false}
                    getTdProps={(state, rowInfo) => {
                        return {
                            onClick: (e) => {
                                // console.log(rowInfo);
                                this.handleClick(rowInfo.original, e);},
                            // style: {background: (rowInfo.progress == "In Progress") ? "grey" : "white"}


                        }
                    }}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
            </div>
        );
    }
}

export default ParentTable;
export {childID};