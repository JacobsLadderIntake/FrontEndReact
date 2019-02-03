import React, { Component } from 'react'

import './StudentCard.css'
import {Card, CardBody, CardHeader, CardText} from "reactstrap";


class StudentCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            studentFirstName: "Susie",
            studentLastName: "Loo",
            parentFirstName: "Bill",
            parentLastName: "Loo",
            percentCompletion: "",
            formDueDate: "01/01/2020",
            evalDate: "01/10/2020",
            evaluator: "Rachel Smith",
            reviewers: "Nancy"
        };
    }

    renderCard() {
        return <div>
            <Card className={"styles.card"}>
                <CardHeader
                    className={"styles.title"}>{this.state.studentFirstName + " " + this.state.studentLastName}</CardHeader>
                <CardBody>
                    <CardText className={"styles.text"}>
                        <CardText>Parents: {this.state.parentFirstName + " " + this.state.parentLastName}</CardText>
                        <CardText>Form due: {this.state.formDueDate}</CardText>
                        <CardText>Evaluation on {this.state.formDueDate} with {this.state.evaluator}</CardText>
                        <CardText>Reviewed by: {this.state.reviewers}</CardText>
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

export default StudentCard
