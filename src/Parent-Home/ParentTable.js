import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import {Row} from "react-bootstrap";
import Header from "../Header/Header";

class ParentTable extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [{
                name: 'Client History and Information Form',
                progress: 'Not Started',
                flag: 'No'
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
    }

    handleClick(row, event) {
        event.preventDefault();
        if (row.name === "Brain Map Consent Form") {
            this.props.history.push("/bmc");
        } else if (row.name === "Enrollment Process Form") {
            this.props.history.push("/ep");
        } else if (row.name === "Consent and Medical Release Form") {
            this.props.history.push("/cmr");
        }
        // console.log(this.state.data.name);
        // need to figure out how to access the row that has been clicked on, not sure how to do that though
    }

    render() {


        const studentName = "susie lou";//getChildren("emma@gmail.com");

        return (
            <div className={"parentTable p-4"}>
                <Header loggedIn = {true}/>
                <Row className="parent-table-header">
                    <h2 className = "parent-top col-9">Intake Profile Checklist: {studentName}</h2>
                </Row>
                <ReactTable
                    data={this.state.data}
                    columns={this.state.columns}
                    defaultPageSize={9}
                    showPagination={false}
                    getTdProps={(state, rowInfo) => {
                        return {
                            //style: {background rowInfo.progress === "In Progress" ? #DEDEDD : #DEDEDE}
                            onClick: (e) => {
                                console.log(rowInfo);
                                this.handleClick(rowInfo.original, e);}
                        }
                    }}
                />
            </div>
        );
    }
}

export default ParentTable;