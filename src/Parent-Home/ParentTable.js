import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Row} from "react-bootstrap";
import Header from "../Header/Header";
import userID from '../Login';

const studentName = '';
var url = 'api/findUsersChildren';

class ParentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            // TODO: remove flag, progress should be dynamic
            data: [{
                name: 'Client History and Information Form',
                progress: 'Not Started',
                flag: 'No',
                color: 'white'
            }, {
                name: 'Medical Protocol Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Independent Life Transition Parent/Guardian Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Consent and Medical Release Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'JL Permission for Exchange of Information Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Enrollment Process Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Brain Map Consent Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Credit Card Authorization Form',
                progress: 'Not Started',
                flag: 'No'
            }, {
                name: 'Insurance and Financial Information Form',
                progress: 'Not Started',
                flag: 'No'
            }],

            columns: [{
                Header: 'Form Name',
                accessor: 'name'
            }, {
                Header: 'Progress',
                accessor: 'progress'
            }, {
                Header: 'Flagged?',
                accessor: 'flag'
            }]
        };
        // this.getChild();
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
        }
        // console.log(this.state.data.name);
        // need to figure out how to access the row that has been clicked on, not sure how to do that though
    }

    getChild = async () => {
      var infoObj = JSON.stringify(this.userID);
      console.log(infoObj)
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: infoObj
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        if (body.Error) {
            console.log(body.Message);
        } else {
            console.log(body.rows);
            this.studentName = body.rows[0];
        }
    }

    render() {
        return (
            <div className={"p-4"}>
                <Header loggedIn = {true}/>
                <Row className="parent-table-header">
                    <h2 className = "parent-top col-9 pb-4">Intake Profile Checklist: {studentName}</h2>
                </Row>
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