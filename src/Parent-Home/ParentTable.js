import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';


class ParentTable extends Component {
    render() {
        var data = [{
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
            name: 'JL Consent and Medical Release Form',
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
        }];


        var columns = [{
            Header: 'Form Name',
            accessor: 'name'
        }, {
            Header: 'Progress',
            accessor: 'progress'
        }, {
            Header: 'Flagged?',
            accessor: 'flag'
        }];

        return (
            <div className={"parentTable p-4"}>
                <div className="parent-table-header">
                    <div className = "row" >
                        <a className = "parent-top col-9">
                            <h2>Intake Profile Checklist: Parent Name</h2>
                        </a>
                    </div>
                </div>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={9}
                />
            </div>
        );
    }
}

export default ParentTable;