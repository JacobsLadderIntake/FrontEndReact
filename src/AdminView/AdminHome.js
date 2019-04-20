import React, { Component } from 'react'

import './AdminHome.css';
import '../custom-style.css'
import StudentCard from './StudentCard'
import {Button, Input, Row, Col} from 'reactstrap'
import Header from "../Header/Header";
import { token, userID } from '../Login';


class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            children: null,
        };

    }

    componentDidMount() {
        this.getChildren()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));

        // this.getUserName()
        //     .then(res => this.setState({ response: res.express }))
        //     .catch(err => console.log(err));
    }
    // getUserName = async () => {
    //     const response = await fetch('/api/Users', {
    //         method: 'GET',
    //         headers: {
    //             'token': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIwIjp7IlVzZXJJRCI6Ijk4NzYiLCJJc0FkbWluIjowLCJVc2VyRmlyc3ROYW1lIjoiIiwiVXNlckxhc3ROYW1lIjoiIiwiUGFzc3dvcmQiOiJmODY5Y2UxYzg0MTRhMjY0YmIxMWUxNGEyYzg4NTBlZCIsIkVtYWlsIjoiYWJpZ2FpbEBnbWFpbC5jb20ifSwiaWF0IjoxNTU0NzU5MTU2LCJleHAiOjE1NTQ3NzcxNTZ9.u6zT4kvZX-zbZ7JpaCj8oRY4jEHZG0n0noOSi3TX7MI",
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     });
    //     const body = await response.json();
    //     console.log(body);
    //     this.state.user = body.UserFirstName;
    //     if (response.status !== 200) throw Error(body.message);
    //     return body;
    // };

    getChildren = async () => {
        const response = await fetch('/api/children', {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log(body);
        // this.state.user = body.UserFirstName;
        if (response.status !== 200) throw Error(body.message);
        console.log(body);
        this.state.children = body.Users;
        // console.log(this.state.children);
        return body;
    };

    createCards() {
        let cards = [];
        // console.log(this.state.children);
        if (this.state.children != null) {
            console.log("in the if of create cards");
            console.log("number of cards: " + this.state.children.length);
            // console.log(this.state.children);

            for (let i = 0; i < this.state.children.length; i++) {
                console.log(this.state.children[i]);
                cards.push(<Col className={"col-3 p-2"}> <StudentCard child = {this.state.children[i]}/> </Col>)
            }
        }

        return cards;
    }

    render() {

        return (
            <div>
                <Header loggedIn = {true}/>
                <div className = "adminHome container-fluid" >
                    <div className = "row" >
                        <div className = "admin-top col-9">
                            <h1 className="">Admission Team Board: { this.state.user }</h1>
                        </div>
                    </div>
                    <div className="row pl-3 pr-3 align-items-center">
                        <Input className="col-2 form-control ml-auto" type="search" placeholder="Search" aria-label="Search"/>
                        <Button className="button col-1 h-50" type="submit">Search</Button>
                    </div>
                    <Row>
                        { this.createCards() }
                    </Row>

                </div>

            </div>

    )
    }
}

// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//     host: "jacobsladderintaketeam.cik1yin3pif1.us-east-1.rds.amazonaws.com",
//     user: "intaketeam",
//     password: "IwantanA123",
//     database: "intaketeam"
// });
//
// function getParentFirstName(UserID, callback){
//     var sql = "SELECT firstName FROM User WHERE userID = ?";
//
//     con.query(sql, UserID, function(err, result, fields) {
//         if (err) throw err;
//         return callback(result[0].firstName);
//     });
// }

export default AdminHome