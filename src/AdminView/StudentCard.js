import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import './StudentCard.css'
import {Card, CardBody, CardHeader, CardText} from "reactstrap";


class StudentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentFirstName: "Bill",
            parentLastName: "Loo",
            percentCompletion: "",
            formDueDate: "01/01/2020",
            evalDate: "01/10/2020",
            evaluator: "Rachel Smith",
        };
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleNameClick() {
        // event.preventDefault();
        console.log("card clicked!!");
        this.props.history.push("/parenthome");
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
                                Parents: <br/>
                                Forms due: {this.props.child.ProfileDueDate}<br/>
                                Evaluation on {this.props.child.EvaluationDate} with {this.props.child.Evaluator}<br/>
                                Reviewed by: {this.state.reviewers}
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

export default withRouter(StudentCard)
