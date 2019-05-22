import React, { Component } from 'react';
import Header from '../Header/Header';
import './formFormatting.css';
import {
    Col,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";
import token from '../Login';
import {childID} from "../Parent-Home/ParentTable";

var infoObj = {"ChildID":childID, "StudentName":"", "ParentName":"", "Date":"", "Comments":""};

class ConsentAndMedicalRelease extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed:false
        }
        this.goBack = this.goBack.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }

    updateFields() {
        let fields = this.state.fields;
        infoObj.ChildID = childID;
        infoObj.StudentName = fields["studentName"];
        infoObj.ParentName = fields["parentName"];
        infoObj.Date = fields["date"];
        infoObj.Comments = fields["consideration"];
        // infoObj.ConsentCheck = fields["consentCheck"];
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if (this.state.submitButtonPressed) {
            if (!fields["studentName"]) {
                formIsValid = false;
                errors["studentName"] = "Cannot be empty";
            }
            if (!fields["parentName"]) {
                formIsValid = false;
                errors["parentName"] = "Cannot be empty";
            }
            if (!fields["date"]) {
                formIsValid = false;
                errors["date"] = "Cannot be empty";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateFields();
        this.postToDB();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.updateFields();
        this.setState({saveButtonPressed: true});
        this.postToDB();
        //back to homepage
        this.props.history.push("/parenthome");
    }

    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
        var update = JSON.stringify(infoObj);
        var url = 'api/children/' + childID + '/forms/ConsentMedicalReleaseForm';
        console.log("post url" + url);
        console.log("updated JSON");
        console.log(update);
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
        console.log("response");
        console.log(response);
    }

    fetchFromDB = async () => {
        var url = 'api/children/' + childID + '/forms/ConsentMedicalReleaseForm';
        console.log("get url " + url);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        console.log("fetch from db response");
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        if (body.Form.length > 0) {
            this.state.fields["studentName"] = body.Form[0].StudentName == null ? "" : body.Form[0].StudentName;
            this.state.fields["parentName"] = body.Form[0].ParentName == null ? "" : body.Form[0].ParentName;
            this.state.fields["date"] = body.Form[0].Date == null ? "" : body.Form[0].StudentName;
            this.state.fields["consideration"] = body.Form[0].Comments == null ? "" : body.Date[0].Comments;
        }
        return body;
    };



    renderFields() {
        return (
            <fieldset>
                <div>
                    <FormGroup>
                        <Label sm={6}>List any special considerations or requests below.</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="considerations"
                                value={this.state.fields["consideration"] || ""}
                                onChange={this.handleChange.bind(this, "consideration")}/>
                        </Col>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup>
                        <Col sm={12}>
                            <Label sm={12} className={"checkBox"}>
                                <Input type="checkbox"
                                       ref="consentCheck"
                                       className="error"/>
                                I acknowledge that I have read and completed this information to the best of my knowledge and ability.”
                            </Label>
                        </Col>

                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Student Name (First and Last)</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="studentName"
                                value={this.state.fields["studentName"] || ""}
                                onChange={this.handleChange.bind(this, "studentName")}
                                className="error"
                                invalid={this.state.errors["studentName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["studentName"] }>{this.state.errors["studentName"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Parent/Guardian Name (First and Last)</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="parentName"
                                value={this.state.fields["parentName"] || ""}
                                onChange={this.handleChange.bind(this, "parentName")}
                                className="error"
                                invalid={this.state.errors["parentName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["parentName"]}>{this.state.errors["parentName"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label className="control-label required" sm={12}>Date</Label>
                        <Col sm={12}>
                            <Input
                                type="text"
                                ref="date"
                                value={this.state.fields["date"] || ""}
                                onChange={this.handleChange.bind(this, "date")}
                                className="error"
                                invalid={this.state.errors["date"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["date"]}>{this.state.errors["date"]}
                            </FormFeedback>
                        </Col>
                    </FormGroup>
                </div>
            </fieldset>
        );
    }


    renderText() {
        return(
            <div>
                <div className="body-of-text">
                    <div>
                        I, the undersigned parent/guardian of the child named below have voluntarily submitted my child for registration as a participant in the Jacob’s Ladder Neurodevelopmental School and Therapy Center program, a non-profit corporation (“Jacob’s Ladder”) and all programs associated therewith. I consent to my child participating in the Jacob’s Ladder Neurodevelopmental Evaluation which includes a Brain Map, Parent/Guardian Interview (preferably with both parents/guardians), and Jacob’s Ladder Neurodevelopmental Testing as well as utilizing Jacob’s Ladder facilities and amenities such as playground, trampoline, animals, and golf cart transportation, as needed. I have indicated below if I prefer for my child not to participate in any of the aforementioned facilities and amenities.
                    </div>
                    <div>
                        I consent to my child participating in the Jacob’s Ladder program as written by Amy O’Dell, M.Ed, LPC, CTRS, CNC and the Jacob’s Ladder evaluation team. I give permission for Jacob’s Ladder and all individuals representing Jacob’s Ladder to implement all activities as outlined on my child’s program. I, the undersigned parent/guardian of the child named below have been trained to implement my child’s program at home and understand that any changes in programming and implementation will be sent home in writing. I understand that it is my responsibility to communicate any questions or concerns I may have with my child’s program.
                    </div>
                    <div>
                        I give consent for Jacob’s Ladder to provide my child with Therapy services. I consent to care and treatment falling under the practice guideline of the American Counseling Association (ACA), American Therapeutic Recreation Association (ATRA), American Psychological Association (APA), American Music Therapy Association (AMTA), American Occupational Therapy Association (AOTA), American Physical Therapy Association (APTA), American Speech-Language-Hearing Association (ASHA), and the State of Georgia. I acknowledge that there is always a risk of injury with any therapy involving physical activities.
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <Header loggedIn = {true}/>
                <div className="form-title">
                    <div className = "row" >
                        <div className = "parent-top col-9">
                            <h2 className={"header-print"}>Consent and Medical Release Form</h2>
                        </div>
                        <div className={"col-3"}>
                            <button className="print-button" onClick={() => window.print()}>Print</button>
                        </div>
                    </div>
                </div>
                <div className={"frame p-4 print-form"} data-spy="scroll">
                    <div> {this.renderText()} </div>
                    <div> {this.renderFields()} </div>
                </div>

                <Row className={"p-2 justify-content-center"}>
                        <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                            Save and Return
                        </Button>

                        <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                            Submit
                        </Button>

                </Row>
            </div>
        );
    };
}

export default ConsentAndMedicalRelease;