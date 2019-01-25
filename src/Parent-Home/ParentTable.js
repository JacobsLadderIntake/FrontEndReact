import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import ParentTableHeader from "./ParentTableHeader";


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
            <div>
                <ParentTableHeader/>
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