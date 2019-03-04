import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

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
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleNameClick() {
        // event.preventDefault();
        console.log("card clicked!!");
        this.props.history.push("/parenthome");
    };



    renderCard() {
        return <div>
            <Card className="card"
                  onClick={this.handleNameClick}>
                <CardHeader
                    className="title"
                    >{this.state.studentFirstName + " " + this.state.studentLastName}</CardHeader>
                <CardBody >
                    <CardText className="text">
                        Parents: {this.state.parentFirstName + " " + this.state.parentLastName}<br/>
                        Forms due: {this.state.formDueDate}<br/>
                        Evaluation on {this.state.formDueDate} with {this.state.evaluator}<br/>
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
