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

class InsuranceFinancialInformation extends Component{
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

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            if (!fields["initial1"]) {
                formIsValid = false;
                errors["initial1"] = "Cannot be empty";
            }
            if (!fields["initial2"]) {
                formIsValid = false;
                errors["initial2"] = "Cannot be empty";
            }
            if (!fields["initial3"]) {
                formIsValid = false;
                errors["initial3"] = "Cannot be empty";
            }
            if (!fields["initial4"]) {
                formIsValid = false;
                errors["initial4"] = "Cannot be empty";
            }
            if (!fields["initial5"]) {
                formIsValid = false;
                errors["initial5"] = "Cannot be empty";
            }
            if (!fields["initial6"]) {
                formIsValid = false;
                errors["initial6"] = "Cannot be empty";
            }
            if (!fields["initial7"]) {
                formIsValid = false;
                errors["initial7"] = "Cannot be empty";
            }
            if (!fields["initial8"]) {
                formIsValid = false;
                errors["initial8"] = "Cannot be empty";
            }
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
        console.log(formIsValid);
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonPressed:true},() => {
            if (this.validate()) {
                //NEED TO UPDATE DATABASE
                this.props.history.push("/parenthome")
            }
        });
    }

    handleSaveAndQuit(event) {
        event.preventDefault();
        this.setState({saveButtonPressed: true});
        //UPDATE DATABASE
        this.props.history.push("/parenthome")
    }

    renderInsurance() {

    }

    renderAgreement() {
        return (
            <fieldset>
                <div>
                    <div className={"section"}>Signature</div>
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
                        <Label className="control-label required" sm={12}>Student Name</Label>
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
                        <Label className="control-label required" sm={12}>Parent/Guardian Name</Label>
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


    renderPolicy() {
        return(
            <div>
                <div className={"section"}>Financial and Insurance Policy</div>
                <div className="body-of-text">
                    <div>
                        Thank you for choosing Jacob's Ladder School and Therapy Center. The following information explains our medical
                        billing and financial policy.
                    </div>
                    <br></br>
                    <div>
                        A copy of your driver's license and the front and back of your insurance card is required before services begin.
                        Benefits will be verified upon receipt of your insurance information and you will be made aware of any estimated
                        out-of-pocket expenses before any services are started. Information obtained from insurance companies is not
                        always a guarantee of payment. Families are ultimately responsible for payment for non-covered services. It is
                        imperative that families are aware of their insurance coverage and their potential responsibilities. We will
                        strive to keep open communication in regards to insurance and payment. Families are responsible for informing
                        Jacob's Ladder School and Therapy Center of any changes regarding insurance. Families assign benefits for filed
                        claims to be paid to Jacob's Ladder School and Therapy Center. Any payment sent directly to the family, intended
                        to cover therapy services provided by one of the companies at Jacob's Ladder School and Therapy Center, should
                        be given to the front office.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial1"
                            value={this.state.fields["initial1"] || ""}
                            onChange={this.handleChange.bind(this, "initial1")}
                            className="error"
                            invalid={this.state.errors["initial1"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial1"]}>{this.state.errors["initial1"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        The usual and customary rate for each service is billed to insurance. If the client is a current JL student and
                        completes LSP services during program hours, the reimbursement will first be applies to the total cost of therapy
                        ($105/hour and $60/half-hour) and any reimbursement amount over the rate will be applies to a future invoice. If
                        the insurance reimbursement is less than the LSP rate, you will be responsible for the remaining balance. If
                        the client completes LSP services outside of program time, the usual and customary rate for each service is billed
                        to insurance and the full reimbursement will be applied to the cost of therapy. If the insurance reimbursement
                        is less than the LSP rate, you will be responsible for the remaining balance.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial2"
                            value={this.state.fields["initial2"] || ""}
                            onChange={this.handleChange.bind(this, "initial2")}
                            className="error"
                            invalid={this.state.errors["initial2"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial2"]}>{this.state.errors["initial2"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        If we bill your insurance and you have a deductible, the full amount applied to your deductible will be billed
                        to you. Families are responsible for all co-pays, coinsurances, and deductible expenses associated with each
                        date of service. Jacob's Ladder School and Therapy Center accepts cash, check, VISA, MASTERCARD. There is a
                        $50 fee for all returned checks.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial3"
                            value={this.state.fields["initial3"] || ""}
                            onChange={this.handleChange.bind(this, "initial3")}
                            className="error"
                            invalid={this.state.errors["initial3"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial3"]}>{this.state.errors["initial3"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        We submit claims for direct treatment with a Licensed Service Professional to insurance within one month of service
                        dates. If payment has not been received within 60 days, the family will be responsible for payment. If insurance
                        makes payment, the payment will be reflected on the next invoice. If a family receives a bill that is not paid
                        within 30 days of receipt of invoice, there will be a $25 late fee added, and services risk being put on hold.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial4"
                            value={this.state.fields["initial4"] || ""}
                            onChange={this.handleChange.bind(this, "initial4")}
                            className="error"
                            invalid={this.state.errors["initial4"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial4"]}>{this.state.errors["initial4"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        Jacob's Ladder Neurodevelopmental Therapy Center will file all insurance as an out-of-network provider. We are not
                        contracted with CMO plans (Amerigroup, Peachstate, or Wellcare). We do not accept any HMO plans unless special
                        approval has been given by your HMO. Currently, we do not bill Medicaid as primary or secondary insurance. Jacob's
                        Ladder School and Therapy Center does accept the NOW and COMP waivers; however, pre-authorization must be approved.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial5"
                            value={this.state.fields["initial5"] || ""}
                            onChange={this.handleChange.bind(this, "initial5")}
                            className="error"
                            invalid={this.state.errors["initial5"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial5"]}>{this.state.errors["initial5"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        An initial assessment for OT/PT/ST/Mental Health Services is $300. Evaluations are an out-of-pocket expense
                        expected at the time of service. An initial evaluation will be needed for all clients starting direct treatment
                        with one of JL's Licensed Service Professionals. Most evaluations will last 1 hour. If a client needs a
                        re-assessment for insurance or personal reasons, the rate will be $175/hour. Direct treatment for PT, OT, ST,
                        and Mental Health Sessions are billed at $105/hour and $60/half-hour.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial6"
                            value={this.state.fields["initial6"] || ""}
                            onChange={this.handleChange.bind(this, "initial6")}
                            className="error"
                            invalid={this.state.errors["initial6"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial6"]}>{this.state.errors["initial6"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        I authorize Jacob's Ladder to release any information including the diagnosis, treatment plan, evaluation report/
                        summaries, progress notes, and discharge summaries for any treatment rendered to my child during the periods of
                        such care to third party payers. I also authorize my insurance company to directly pay Jacob's Ladder insurance
                        benefits otherwise payable to me. I understand that my insurance carrier may pay less than the actual bill for
                        services. I agree to be responsible for payment of all services rendered on behalf of my dependent(s) that are
                        not covered by my insurance carrier.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial7"
                            value={this.state.fields["initial7"] || ""}
                            onChange={this.handleChange.bind(this, "initial7")}
                            className="error"
                            invalid={this.state.errors["initial7"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial7"]}>{this.state.errors["initial7"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div>
                        Therapy will be most beneficial to the client with consistent attendance. After 1 missed session, Jacob's Ladder
                        charges a $50 fee per hour or $25 per half hour for any appointment that is not kept per modality. I also
                        understand that on occasion, my child's therapist may have a conflict or illness and need to cancel or reschedule.
                        A make-up session will be attempted when possible.
                    </div>
                    <Label className="control-label required" sm={12}>Parent Initials</Label>
                    <Col sm={4}>
                        <Input
                            type="text"
                            ref="initial8"
                            value={this.state.fields["initial8"] || ""}
                            onChange={this.handleChange.bind(this, "initial8")}
                            className="error"
                            invalid={this.state.errors["initial8"] != null}/>
                        <FormFeedback
                            invalid={this.state.errors["initial8"]}>{this.state.errors["initial8"]}
                        </FormFeedback>
                    </Col>
                    <br></br>
                    <div style={{fontWeight:'bold'}}>
                        Please do not hesitate to contact us regarding questions of billing/payments. We are willing to work with each
                        client to ensure a balance between providing therapy services and addressing business issues or concerns.
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
                            <h2>Insurance and Financial Information Form</h2>
                        </div>
                    </div>
                </div>
                <div className={"frame p-4"} data-spy="scroll">
                    <div> {this.renderInsurance()} </div>
                    <div> {this.renderPolicy()} </div>
                    <div> {this.renderAgreement()} </div>
                </div>

                <Row className={"p-2 justify-content-center"}>
                    <Button className={"m-2"} onClick={this.handleSaveAndQuit.bind(this)} active>
                        Save and Quit
                    </Button>

                    <Button className={"m-2"} onClick={this.handleSubmit.bind(this)} active>
                        Submit
                    </Button>

                </Row>
            </div>
        );
    };
}

export default InsuranceFinancialInformation;