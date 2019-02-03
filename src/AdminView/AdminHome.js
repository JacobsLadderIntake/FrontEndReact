import React, { Component } from 'react'

import './AdminHome.css';
import '../custom-style.css'
import Header from '../Header/Header'
import StudentCard from './StudentCard'
import {Button, Input, Row, Col} from 'reactstrap'

class AdminHome extends Component {
    constructor(props) {
        super(props);

    }

    createCards() {
        let cards = [];
        for (let i = 0; i < 10; i++) {
            cards.push(<Col className={"col-4 p-2"}> <StudentCard/> </Col>)
        }
        return cards;
    }

    render() {
        const user = 'user';

        return (
            <div>
                <Header/>
                <div className = "adminHome container-fluid p-4" >
                    <div className = "row" >
                        <a className = "admin-top col-9">
                            <h1 className="">Admission Team Board: {user}</h1>
                        </a>
                    </div>
                    <div className={"row p-3"}>
                        <Button className= {"styles.button"}>Add New Student</Button>
                        <Input className="col-2 mr-sm-2 form-control ml-auto" type="search" placeholder="Search" aria-label="Search"/>
                        <Button className="col-1 my-2 my-sm-0 button" type="submit">Search</Button>
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