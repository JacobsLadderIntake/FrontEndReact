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
import { token, userID } from '../Login';
import {childID} from "../Parent-Home/ParentTable";

var infoObj = {"ChildID": childID, "StudentName":"", "ParentName":"", "Date":"", "ConsentCheck":""};

class BrainMapConsent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed:false
        };
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
        infoObj.ConsentCheck = {type: "Buffer", data: [444]}

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
      var url = 'api/children/' + childID + '/forms/BrainMapConsentForm';
      const response = fetch(url, {
          method: 'POST',
          headers: {
              'token': token,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: update
      });
      console.log(response);
    }

    fetchFromDB = async () => {
        var url = 'api/children/' + childID + '/forms/BrainMapConsentForm';
        console.log("in fetch " + url);
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        if (body.Form.length > 0) {
          this.state.fields["studentName"] = body.Form[0].StudentName == null ? "" : body.Form[0].StudentName;
          this.state.fields["parentName"] = body.Form[0].ParentName == null ? "" : body.Form[0].ParentName;
          this.state.fields["date"] = body.Form[0].Date == null ? "" : body.Form[0].Date;
          this.state.fields["consentCheck"] = (body.Form[0].ConsentCheck == null || body.Form[0].ConsentCheck.data[0] ==1) ? 99: 100;

        }
        return body;
    };
    handleChangeCheckbox(field,e) {
        let fields = this.state.fields;
        if (e.target.checked == 100) {
            fields[field] = 1;
        } else {
            fields[field] = 0;
        }
        this.setState({fields: fields});
    }

    renderFields() {
        return (
          <fieldset>
              <div>
                  <FormGroup>
                      <Col sm={12}>
                          <Label sm={12} className={"checkBox"}>
                              <Input type="checkbox"
                                     ref="consentCheck"
                                     className="error"
                                     onChange={this.handleChangeCheckbox.bind(this, "consentCheck")}
                                     checked={this.state.fields["consentCheck"] == 100 || ""}/>
                              I hereby give release to complete a brain map as part of the Jacob’s Ladder initial evaluation process.
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
                        The initial evaluation brain map includes the following:
                    </div>
                    <div className="closer-body-of-text">
                        <div>
                        -Recording of EEG
                        </div>
                        <div>
                            -Review and analysis of EEG to generate brain map
                        </div>
                        <div>
                        -Feedback regarding the brain map from a Neurofeedback Practitioner
                        </div>
                    </div>
                    <div>
                        *Note: Please let us know if the client has any sensitivities on the head or scalp. The recording of an EEG is a non-invasive method of measuring surface electrical activity in the brain. It is recorded with a 19-electrode medical-grade cap, and a water/saline based conductive gel. The EEG reading can be affected by medications, diet changes, sickness, and hair products. Avoid using conditioner, hair gel,and hair spray the day of the recording. Please make sure to limit any drastic changes in the client’s typical day-to-day routine as much as possible.
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
                    <Row >
                        <div className = "parent-top col-9">
                            <h2 className={"header-print"}>Brain Map Consent Form</h2>
                        </div>
                        <div className={"col-3"}>
                            <button className="print-button" onClick={() => window.print()}>Print</button>
                        </div>
                    </Row>
                </div>

                <div className={"frame p-4 print-form"} data-spy="scroll" >
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

export default BrainMapConsent;