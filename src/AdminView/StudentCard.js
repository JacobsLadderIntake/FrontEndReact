import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './StudentCard.css'
import {Card, CardBody, CardHeader, CardText} from "reactstrap";
import { token } from '../Login';


let childParentID = '';

class StudentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentFirstName: "",
            parentLastName: "",
        };
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleNameClick() {
        childParentID = this.props.child.ParentID;
        this.props.history.push("/parenthome");
    };

    componentDidMount() {
        this.getParentName()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    getParentName = async () => {
        const response = await fetch('https://jacobsladderapi.herokuapp.com/api/users/' + this.props.child.ParentID, {
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
        this.state.parentFirstName = userObj.UserFirstName;
        this.state.parentLastName = userObj.UserLastName;
        return body;
    };

    renderCard() {
        return  <div>
                    <Card className="card"
                          onClick={this.handleNameClick}>
                        <CardHeader
                            className="title"
                            >{this.props.child.ChildFirstName + " " + this.props.child.ChildLastName}</CardHeader>
                        <CardBody >
                            <CardText className="text">
                                Parent: {this.state.parentFirstName + " " + this.state.parentLastName}<br/>
                                Forms due: {this.props.child.ProfileDueDate}<br/>
                                Evaluation date: {this.props.child.EvaluationDate} <br/>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>;
    };



    render() {
        return (
            this.renderCard()
        );

    };
}

export {childParentID};
export default withRouter(StudentCard)
