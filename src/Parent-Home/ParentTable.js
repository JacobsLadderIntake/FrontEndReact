import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Row} from "react-bootstrap";
import Header from "../Header/Header";

class ParentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isAdmin: false,

            columns: [{
                Header: 'Form Name',
                accessor: 'name',
            }, {
                Header: 'Progress',
                accessor: 'progress',
                width: 200
            }],

            data: [{
                name: 'Client History and Information Form',
                progress: 'Not Started',
                color: 'white'
            }, {
                name: 'Medical Protocol Form',
                progress: 'Not Started'
            }, {
                name: 'Independent Life Transition Parent/Guardian Form',
                progress: 'Not Started'
            }, {
                name: 'Consent and Medical Release Form',
                progress: 'Not Started'
            }, {
                name: 'Permission for Exchange of Information Form',
                progress: 'Not Started'
            }, {
                name: 'Enrollment Process Form',
                progress: 'Not Started'
            }, {
                name: 'Brain Map Consent Form',
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

    handleClick(row, event) {
        event.preventDefault();
        if (row.name === "Brain Map Consent Form") {
            this.props.history.push("/bmc");
        } else if (row.name === "Enrollment Process Form") {
            this.props.history.push("/ep");
        } else if (row.name === "Consent and Medical Release Form") {
            this.props.history.push("/cmr");
        } else if (row.name === "Client History and Information Form") {
            this.props.history.push("/chai");
        } else if (row.name === "Permission for Exchange of Information Form") {
            this.props.history.push("/pei");
        }
        // console.log(this.state.data.name);
        // need to figure out how to access the row that has been clicked on, not sure how to do that though
    }


    render() {


        const studentName = "susie lou";//getChildren("emma@gmail.com");

        var ifAdmin = this.state.isAdmin ? <input type="date"></input> : <text style={{fontWeight: 'normal'}}>get the date</text>;

        return (
            <div className={"p-4"}>
                <Header loggedIn = {true}/>
                <Row className="parent-table-header">
                    <h2 className = "parent-top col-9 pb-4">Intake Profile Checklist: {studentName}</h2>
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
                                console.log(rowInfo);
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