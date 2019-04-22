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
            userName: "",
            children: null,
        };

    }

    componentDidMount() {
        this.getChildren()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));

        this.getUser()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    getUser = async () => {
        let url = '/api/Users/' + userID;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        let userObj = body.User[0];
        if (response.status !== 200) throw Error(body.message);
        this.state.userName = userObj.UserFirstName + " " + userObj.UserLastName;
        return body;
    };

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
        if (response.status !== 200) throw Error(body.message);
        this.state.children = body.Users;
        return body;
    };

    createCards() {
        let cards = [];
        if (this.state.children != null) {
            for (let i = 0; i < this.state.children.length; i++) {
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
                            <h1 className="">Admission Team Board: {this.state.userName}</h1>
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


export default AdminHome