import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Row} from "react-bootstrap";
import Header from "../Header/Header";
import { token, userID } from '../Login';

// FUTURE WORK: hardcoded indexing at 0 (getChild) will need to be dynamic based on selected student,
// such that one parent can have multiple children (a need specified by Jacob's Ladder)

class ParentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAdmin: false,
            studentName: "",
            evalDate: "",
            dueDate: "",
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
                name: 'Medical Protocol Form',
                progress: 'Not Started'
            }, {
                name: 'Independent Life Transition Parent/Guardian Form',
                progress: 'Not Started'
            }, {
                name: <div id="cmr" style={{color: 'blue', textDecoration: 'underline'}}>Consent and Medical Release Form</div>,
                progress: 'Not Started'
            }, {
                name: 'Permission for Exchange of Information Form',
                progress: 'Not Started'
            }, {
                name: <div id="ep" style={{color: 'blue', textDecoration: 'underline'}}>Enrollment Process Form</div>,
                progress: 'Not Started'
            }, {
                name: <div id="bmc" style={{color: 'blue', textDecoration: 'underline'}}>Brain Map Consent Form</div>,
                progress: 'Not Started'
            }, {
                name: 'Credit Card Authorization Form',
                progress: 'Not Started'
            }, {
                name: 'Insurance and Financial Information Form',
                progress: 'Not Started'
            }]
        };
    }

    componentDidMount() {
        this.getChild()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
        console.log(this.state.studentName)
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
        } else if (row.name === "Permission for Exchange of Information Form") {
            this.props.history.push("/pei");
        } else if (row.name === "Credit Card Authorization Form") {
            this.props.history.push("/cca");
        } else if (row.name === "Insurance and Financial Information Form") {
            this.props.history.push("/ifi");
        }
        // console.log(this.state.data.name);
        // need to figure out how to access the row that has been clicked on, not sure how to do that though
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
        console.log(body)
        if (response.status !== 200) throw Error(body.message);
        this.state.studentName = body.UsersChildren[0].ChildFirstName + " " + body.UsersChildren[0].ChildLastName;
        this.state.evalDate = body.UsersChildren[0].EvaluationDate;
        this.state.dueDate = body.UsersChildren[0].ProfileDueDate;
        return body;
    };

    render() {
        var ifAdmin = this.state.isAdmin ? <input type="date"></input> : <text style={{fontWeight: 'normal'}}>get the date</text>;
        return (
            <div className={"p-4"}>
                <Header loggedIn = {true}/>
                <Row className="parent-table-header">
                    <h2 className = "parent-top col-9 pb-4">Intake Profile Checklist: {this.state.studentName}</h2>
                </Row>
                <Row>
                    <div style={{fontWeight: 'bold', marginLeft: 35}}> Intake Profile Due Date: {ifAdmin} </div>
                </Row>
                <Row>
                    <div style={{fontWeight: 'bold', marginLeft: 35}}> Evaluation Date: {ifAdmin} </div>
                </Row>
                <br/>
                <ReactTable
                    className={"parentTable -striped -highlight"}
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={9}
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