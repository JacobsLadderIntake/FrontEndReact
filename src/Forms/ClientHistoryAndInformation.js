import React, {Component,useRef } from 'react';
import PropTypes from "prop-types";
import Header from '../Header/Header';

import './formFormatting.css';
import {
    Col,
    Card,
    CardBody,
    Collapse,
    Button,
    FormGroup,
    FormFeedback,
    Input,
    Label,
    Row
} from "reactstrap";
import ReactTable from "react-table";
import { token, userID } from '../Login';
import {childID} from "../Parent-Home/ParentTable";

let infoObj = {"ChildID": childID};
let sec11InfoObj = {"ChildID": childID};;

class ClientHistoryAndInformation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            fields: [],
            submitButtonPressed: false,
            saveButtonPressed: false,
            siblingColumns: [{
                Header: 'Name',
                accessor: 'name'
            }, {
                Header: 'Age',
                accessor: 'age'
            }, {
                Header: 'Gender',
                accessor: 'gender'
            }],


            devHistoryColumns: [{
                Header: 'Activity',
                accessor: 'devHistoryActivity'
            }, {
                Header: 'Years',
                accessor: 'devHistoryYears'
            }, {
                Header: 'Months',
                accessor: 'devHistoryMonths'
            }, {
                Header: 'Developed?',
                accessor: 'devHistoryNa'
            }],

            otherDoctorsColumns: [{
                Header: 'Name',
                accessor: 'otherDrName'
            }, {
                Header: 'Specialty',
                accessor: 'otherDrSpecialty'
            }, {
                Header: 'Phone Number',
                accessor: 'otherDrPhone'
            }, {
                Header: 'Schedule of Service (Date and Time)',
                accessor: 'otherDrSched'
            }],
            otherSpecialistsColumns: [{
            Header: 'Name',
            accessor: 'specialDrName'
        }, {
            Header: 'Specialty',
            accessor: 'specialDrSpecialty'
        }, {
            Header: 'Phone Number',
            accessor: 'specialDrPhone'
        }, {
            Header: 'Diagnosis',
            accessor: 'specialDrSched'
        }],

            otherProgramsColumns: [{
                Header: 'School/Program Name',
                accessor: 'programName'
            }, {
                Header: 'Start Date',
                accessor: 'startDate'
            }, {
                Header: 'Primary Provider',
                accessor: 'provider'
            }, {
                Header: 'Phone Number',
                accessor: 'programPhoneNumber'
            }, {
                Header: 'May we contact the primary provider?',
                accessor: 'contactPermission'
            }],

            medicalConditionsColumns: [{
                Header: 'Medical Condition',
                accessor: 'medCondition'
            }, {
                Header: ' ',
                accessor: 'medConditionYN'
            }],
            suppliesColumns: [{
                Header: 'Supplies/Equipment',
                accessor: 'supplies'
            }, {
                Header: '',
                accessor: 'suppliesYN'
            }],
             medsColumns: [{
                Header: 'Name',
                accessor: 'medsName'
            }, {
                Header: 'Dosage',
                accessor: 'medsDosage'
            }, {
                Header: 'Time(s) Given',
                accessor: 'medsTimeGiven'
            }, {
                Header: 'Frequency',
                accessor: 'medsFrequency'
            }, {
                Header: 'Purpose',
                accessor: 'medsPurpose'
            }, {
                Header: 'Potential Side Effects',
                accessor: 'medsSideEffects'
            }],
            testingColumns: [{
                Header: 'Date',
                accessor: 'testDate'
            }, {
                Header: 'Examined by',
                accessor: 'testExaminer'
            }, {
                Header: 'Diagnosis',
                accessor: 'testDiagnosis'
            }, {
                Header: 'Recommendations',
                accessor: 'testReco'
            }],
            foodGroupColumns: [{
                Header: 'Food Group',
                accessor: 'foodGroup'
            }, {
                Header: 'Excessive',
                accessor: 'foodExcessive'
            }, {
                Header: 'Daily',
                accessor: 'foodDaily'
            }, {
                Header: 'Weekly',
                accessor: 'foodWeekly'
            }, {
                Header: 'Rarely',
                accessor: 'foodRarely'
            }, {
                Header: 'Never',
                accessor: 'foodNever'
            }],
            physicalMotorColumns: [{
                Header: '',
                accessor: 'physicalMotor'
            }, {
                Header: '',
                accessor: 'physicalMotorYN'
            }],
            handPreferenceColumns: [{
                Header: 'Activity',
                accessor: 'activityHandPreference'
            }, {
                Header: 'Hand Preference',
                accessor: 'handPreference'
            }],
            skillsColumns: [{
                Header: '',
                accessor: 'skill'
            }, {
                Header: '',
                accessor: 'checkApplied'
            }],
            communicationProblemsColumns: [{
                Header: 'Other Communication Issues',
                accessor: 'communicationIssue'
            }, {
                Header: '',
                accessor: 'communicationResponse'
            }],
            level1GoalsColumns: [{
                Header: 'Level of Completion',
                accessor: 'goal1Category',
            }, {
                Header: '',
                accessor: 'goal1NA',
            }, {
                Header: '',
                accessor: 'goal1Physical',
            }, {
                Header: '',
                accessor: 'goal1Verbal',
            }, {
                Header: '',
                accessor: 'goal1Initiates',
            }],
            level2GoalsColumns: [{
                Header: 'Level of Completion',
                accessor: 'goal2Category'
            }, {
                Header: '',
                accessor: 'goal2NA',
                width: 100
            }, {
                Header: '',
                accessor: 'goal2Physical',
                width: 175
            }, {
                Header: '',
                accessor: 'goal2Verbal',
                width: 175
            }, {
                Header: '',
                accessor: 'goal2Initiates',
                width: 175
            }],
            


            collapseVerbal: false,
            collapseCommunication: false,
            collapseCommunicationBinder: false,
            collapseSignLanguage: false,
            collapseCommunicationOther:false,
            physicalAssistance:false,
            verbalDirectives:false,
            behavioralGoals:false,
            epipen:false,
            seizure:false
        };

        this.goBack = this.goBack.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }

    togglePhysicalAssistance(field,e){
        this.setState(state=>({physicalAssistance:!state.physicalAssistance}));
        this.handleChange(field,e);
    }

    toggleVerbalDirectives(field,e){
        this.setState(state=>({verbalDirectives:!state.verbalDirectives}));
        this.handleChange(field,e);

    }
    toggleBehavioralGoals(){
        this.setState(state=>({behavioralGoals: !state.behavioralGoals}));
    }
    toggleCurrentEvents(field,e) {
        this.setState(state=>({currentEvents: !state.currentEvents}));
        this.handleChange(field,e);

    }
    toggleEpipen() {
        this.setState(state=>({epipen: !state.epipen}));
    }
    toggleSeizures() {
        this.setState(state=>({seizures: !state.seizures}));
    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        infoObj[field] = e.target.value
        this.validate();
        this.setState({fields: fields});
    }
    handleChangeCheckbox(field,e) {
        let fields = this.state.fields;
        fields[field] = e.target.checked ? "true" : "false";
        console.log(fields[field]);
        this.validate();
        this.setState({fields: fields});
    }

    checkValue(name) {
        let fields = this.state.fields;
        if (fields[name] >= 1){
            return true;
        } else {
            return false;
        }
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            //SECTION ONE
            if(!fields["dob"]) {
                formIsValid =false;
                errors["dob"] = "Cannot be empty";
            }
            if (!fields["age"]) {
                formIsValid = false;
                errors["age"] = "Cannot be empty";
            }
            if (!fields["diagnosis"]) {
                formIsValid = false;
                errors["diagnosis"] = "Cannot be empty";
            }
            if (!fields["height"]) {
                formIsValid = false;
                errors["height"] = "Cannot be empty";
            }
            if (!fields["weight"]) {
                formIsValid = false;
                errors["weight"] = "Cannot be empty";
            }
            if (!fields["street"]) {
                formIsValid = false;
                errors["street"] = "Cannot be empty";
            }
            if (!fields["city"]) {
                formIsValid = false;
                errors["city"] = "Cannot be empty";
            }
            if (!fields["state"]) {
                formIsValid = false;
                errors["state"] = "Cannot be empty";
            }
            if (!fields["zip"]) {
                formIsValid = false;
                errors["zip"] = "Cannot be empty";
            }
            if (!fields["country"]) {
                formIsValid = false;
                errors["country"] = "Cannot be empty";
            }

            if (!fields["homeNumber"]) {
                formIsValid = false;
                errors["homeNumber"] = "Cannot be empty";
            }
            //SECTION TWO
            if (!fields["maritalStatus"]) {
                formIsValid = false;
                errors["maritalStatus"] = "Cannot be empty";
            }
            if (!fields["motherName"]) {
                formIsValid = false;
                errors["motherName"] = "Cannot be empty";
            }
            if (!fields["motherAge"]) {
                formIsValid = false;
                errors["motherAge"] = "Cannot be empty";
            }
            if (!fields["motherCell"]) {
                formIsValid = false;
                errors["motherCell"] = "Cannot be empty";
            }
            if (!fields["motherEmail"]) {
                formIsValid = false;
                errors["motherEmail"] = "Cannot be empty";
            }
            if (!fields["motherOccupation"]) {
                formIsValid = false;
                errors["motherOccupation"] = "Cannot be empty";
            }
            if (!fields["fatherName"]) {
                formIsValid = false;
                errors["fatherName"] = "Cannot be empty";
            }
            if (!fields["fatherAge"]) {
                formIsValid = false;
                errors["fatherAge"] = "Cannot be empty";
            }
            if (!fields["fatherCell"]) {
                formIsValid = false;
                errors["fatherCell"] = "Cannot be empty";
            }
            if (!fields["fatherEmail"]) {
                formIsValid = false;
                errors["fatherEmail"] = "Cannot be empty";
            }
            if (!fields["fatherOccupation"]) {
                formIsValid = false;
                errors["fatherOccupation"] = "Cannot be empty";
            }
            if (!fields["isAdopted"] || fields["isAdopted"] =="blank") {
                formIsValid = false;
                errors["isAdopted"] = "Cannot be empty";
            }
            // Section 3
            if (!fields["birthWeek"]) {
                formIsValid = false;
                errors["birthWeek"] = "Cannot be empty";
            }
            if (!fields["birthWeight"]) {
                formIsValid = false;
                errors["birthWeight"] = "Cannot be empty";
            }
            if (!fields["deliveryType"]) {
                formIsValid = false;
                errors["deliveryType"] = "Cannot be empty";
            }
            if (!fields["pregComplications"]) {
                formIsValid = false;
                errors["pregComplications"] = "Cannot be empty";
            }
            if (!fields["hospitalizedAfterBirth"]) {
                formIsValid = false;
                errors["hospitalizedAfterBirth"] = "Cannot be empty";
            }


            //SECTION FOUR
            if ((!fields["crawlYears"] || fields["crawlYears"] == 0) && (!fields["crawlMonths"] || fields["crawlMonths"] == 0) &&(fields["crawlNa"] == "Yes") || !fields["crawlNa"]){
                document.getElementById("crawlYears").setAttribute("class", "form-control testing")
                document.getElementById("crawlMonths").setAttribute("class", "form-control testing")
                document.getElementById("crawlNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("crawlYears").setAttribute("class", "form-control")
                document.getElementById("crawlMonths").setAttribute("class", "form-control")
                document.getElementById("crawlNa").setAttribute("class", "form-control")

            }
            if ((!fields["creptYears"] || fields["creptYears"] == 0) && (!fields["creptMonths"] || fields["creptMonths"] == 0) &&(fields["creptNa"] == "Yes") || !fields["creptNa"]){
                document.getElementById("creptYears").setAttribute("class", "form-control testing")
                document.getElementById("creptMonths").setAttribute("class", "form-control testing")
                document.getElementById("creptNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("creptYears").setAttribute("class", "form-control")
                document.getElementById("creptMonths").setAttribute("class", "form-control")
                document.getElementById("creptNa").setAttribute("class", "form-control")
            }
            if ((!fields["walkYears"] || fields["walkYears"] == 0) && (!fields["walkMonths"] || fields["walkMonths"] == 0) &&(fields["walkNa"] == "Yes") || !fields["walkNa"]){
                document.getElementById("walkYears").setAttribute("class", "form-control testing")
                document.getElementById("walkMonths").setAttribute("class", "form-control testing")
                document.getElementById("walkNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("walkYears").setAttribute("class", "form-control")
                document.getElementById("walkMonths").setAttribute("class", "form-control")
                document.getElementById("walkNa").setAttribute("class", "form-control")
            }
            if ((!fields["toiletYears"] || fields["toiletYears"] == 0) && (!fields["toiletMonths"] || fields["toiletMonths"] == 0) &&(fields["toiletNa"] == "Yes") || !fields["toiletNa"]){
                document.getElementById("toiletYears").setAttribute("class", "form-control testing")
                document.getElementById("toiletMonths").setAttribute("class", "form-control testing")
                document.getElementById("toiletNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("toiletYears").setAttribute("class", "form-control")
                document.getElementById("toiletMonths").setAttribute("class", "form-control")
                document.getElementById("toiletNa").setAttribute("class", "form-control")
            }
            if ((!fields["wordYears"] || fields["wordYears"] == 0) && (!fields["wordMonths"] || fields["wordMonths"] == 0) &&(fields["wordNa"] == "Yes") || !fields["wordNa"]){
                document.getElementById("wordYears").setAttribute("class", "form-control testing")
                document.getElementById("wordMonths").setAttribute("class", "form-control testing")
                document.getElementById("wordNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("wordYears").setAttribute("class", "form-control")
                document.getElementById("wordMonths").setAttribute("class", "form-control")
                document.getElementById("wordNa").setAttribute("class", "form-control")
            }if ((!fields["coupletYears"] || fields["coupletYears"] == 0) && (!fields["coupletMonths"] || fields["coupletMonths"] == 0) &&(fields["coupletNa"] == "Yes") || !fields["coupletNa"]){
                document.getElementById("coupletYears").setAttribute("class", "form-control testing")
                document.getElementById("coupletMonths").setAttribute("class", "form-control testing")
                document.getElementById("coupletNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("coupletYears").setAttribute("class", "form-control")
                document.getElementById("coupletMonths").setAttribute("class", "form-control")
                document.getElementById("coupletNa").setAttribute("class", "form-control")
            }
            if ((!fields["phraseYears"] || fields["phraseYears"] == 0) && (!fields["phraseMonths"] || fields["phraseMonths"] == 0) &&(fields["phraseNa"] == "Yes") || !fields["phraseNa"]){
                document.getElementById("phraseYears").setAttribute("class", "form-control testing")
                document.getElementById("phraseMonths").setAttribute("class", "form-control testing")
                document.getElementById("phraseNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("phraseYears").setAttribute("class", "form-control")
                document.getElementById("phraseMonths").setAttribute("class", "form-control")
                document.getElementById("phraseNa").setAttribute("class", "form-control")
            }
            if ((!fields["sentenceYears"] || fields["sentenceYears"] == 0) && (!fields["sentenceMonths"] || fields["sentenceMonths"] == 0) &&(fields["sentenceNa"] == "Yes") || !fields["sentenceNa"]){
                document.getElementById("sentenceYears").setAttribute("class", "form-control testing")
                document.getElementById("sentenceMonths").setAttribute("class", "form-control testing")
                document.getElementById("sentenceNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("sentenceYears").setAttribute("class", "form-control")
                document.getElementById("sentenceMonths").setAttribute("class", "form-control")
                document.getElementById("sentenceNa").setAttribute("class", "form-control")
            }if ((!fields["conversationYears"] || fields["conversationYears"] == 0) && (!fields["conversationMonths"] || fields["conversationMonths"] == 0) &&(fields["conversationNa"] == "Yes") || !fields["conversationNa"]){
                document.getElementById("conversationYears").setAttribute("class", "form-control testing")
                document.getElementById("conversationMonths").setAttribute("class", "form-control testing")
                document.getElementById("conversationNa").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("conversationYears").setAttribute("class", "form-control")
                document.getElementById("conversationMonths").setAttribute("class", "form-control")
                document.getElementById("conversationNa").setAttribute("class", "form-control")
            }
            //SECTION FIVE
            if (!fields["outsideTherapy"]){
                document.getElementById("outsideTherapy").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("outsideTherapy").setAttribute("class", "form-control")
            }
            if (!fields["brace"]){
                document.getElementById("brace").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("brace").setAttribute("class", "form-control")
            }
            if (!fields["feedSupport"]){
                document.getElementById("feedSupport").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("feedSupport").setAttribute("class", "form-control")
            }
            if (!fields["toiletEquip"]){
                document.getElementById("toiletEquip").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("toiletEquip").setAttribute("class", "form-control")
            }
            if (!fields["mobilityEquip"]){
                document.getElementById("mobilityEquip").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("mobilityEquip").setAttribute("class", "form-control")
            }
            if (!fields["communicationEquip"]){
                document.getElementById("communicationEquip").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("communicationEquip").setAttribute("class", "form-control")
            }
            if (!fields["oxygenTank"]){
                document.getElementById("oxygenTank").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("oxygenTank").setAttribute("class", "form-control")
            }
            if (!fields["hearingDevice"]){
                document.getElementById("hearingDevice").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("hearingDevice").setAttribute("class", "form-control")
            }
            if (!fields["otherSupply"]){
                document.getElementById("otherSupply").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("otherSupply").setAttribute("class", "form-control")
            }
            // SECTION SIX
            if (!fields["lowMuscleTone"]){
                document.getElementById("lowMuscleTone").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("lowMuscleTone").setAttribute("class", "form-control")
            }
            if (!fields["highMuscleTone"]){
                document.getElementById("highMuscleTone").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("highMuscleTone").setAttribute("class", "form-control")
            }
            if (!fields["coordination"]){
                document.getElementById("coordination").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("coordination").setAttribute("class", "form-control")
            }
            if (!fields["crawling"]){
                document.getElementById("crawling").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("crawling").setAttribute("class", "form-control")
            }
            if (!fields["walking"]){
                document.getElementById("walking").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("walking").setAttribute("class", "form-control")
            }
            if (!fields["running"]){
                document.getElementById("running").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("running").setAttribute("class", "form-control")
            }
            if (!fields["athetoid"]){
                document.getElementById("athetoid").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("athetoid").setAttribute("class", "form-control")
            }
            if (!fields["ataxic"]){
                document.getElementById("ataxic").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("ataxic").setAttribute("class", "form-control")
            }
            if (!fields["weak"]){
                document.getElementById("weak").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("weak").setAttribute("class", "form-control")
            }
            if (!fields["balance"]){
                document.getElementById("balance").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("balance").setAttribute("class", "form-control")
            }
            //SECTION 5
            if (!fields["drName"]) {
                formIsValid = false;
                errors["drName"] = "Cannot be empty";
            }
            if (!fields["drPhone"]) {
                formIsValid = false;
                errors["drPhone"] = "Cannot be empty";
            }
            if (!fields["drStreet"]) {
                formIsValid = false;
                errors["drStreet"] = "Cannot be empty";
            }
            if (!fields["drCity"]) {
                formIsValid = false;
                errors["drCity"] = "Cannot be empty";
            }
            if (!fields["drState"]) {
                formIsValid = false;
                errors["drState"] = "Cannot be empty";
            }
            if (!fields["drCountry"]) {
                formIsValid = false;
                errors["drCountry"] = "Cannot be empty";
            }
            if (!fields["drZip"]) {
                formIsValid = false;
                errors["drZip"] = "Cannot be empty";
            }
            if (!fields["hospital"]) {
                formIsValid = false;
                errors["hospital"] = "Cannot be empty";
            }
            //SECTION 6
            if (!fields["diet"]) {
                formIsValid = false;
                errors["diet"] = "Cannot be empty";
            }
            if (!fields["allergies"]){
                document.getElementById("allergies").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("allergies").setAttribute("class", "form-control")
            }
            if (!fields["breakfastTime"]) {
                formIsValid = false;
                errors["breakfastTime"] = "Cannot be empty";
            }
            if (!fields["lunchTime"]) {
                formIsValid = false;
                errors["lunchTime"] = "Cannot be empty";
            }
            if (!fields["dinnerTime"]) {
                formIsValid = false;
                errors["dinnerTime"] = "Cannot be empty";
            }
            if (!fields["snackTime"]) {
                formIsValid = false;
                errors["snackTime"] = "Cannot be empty";
            }
            if (!fields["hoursOfSleep"]) {
                formIsValid = false;
                errors["hoursOfSleep"] = "Cannot be empty";
            }
            if (!fields["bedTime"]) {
                formIsValid = false;
                errors["bedTime"] = "Cannot be empty";
            }
            if (!fields["wakeTime"]) {
                formIsValid = false;
                errors["wakeTime"] = "Cannot be empty";
            }
            if (!fields["troubleStayingAsleep"]){
                document.getElementById("troubleStayingAsleep").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("troubleStayingAsleep").setAttribute("class", "form-control")
            }
            if (!fields["troubleFallingAsleep"]){
                document.getElementById("troubleFallingAsleep").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("troubleFallingAsleep").setAttribute("class", "form-control")
            }
            if (!fields["wakesEarly"]){
                document.getElementById("wakesEarly").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("wakesEarly").setAttribute("class", "form-control")
            }



            //SECTION SEVEN
            if (!fields["educationalChallenges"]) {
                formIsValid = false;
                errors["educationalChallenges"] = "Cannot be empty";
            }
            if (!fields["exceptionalTalents"]) {
                formIsValid = false;
                errors["exceptionalTalents"] = "Cannot be empty";
            }
            if (!fields["academicGoal"]) {
                formIsValid = false;
                errors["academicGoal"] = "Cannot be empty";
            }
            if (!fields["skill1"]) {
                formIsValid = false;
                errors["skill1"] = "Cannot be empty";
            }
            if (!fields["handPreference1"]){
                document.getElementById("handPreference1").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("handPreference1").setAttribute("class", "form-control")
            }
            if (!fields["handPreference2"]){
                document.getElementById("handPreference2").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("handPreference2").setAttribute("class", "form-control")
            }
            if (!fields["handPreference3"]){
                document.getElementById("handPreference3").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("handPreference3").setAttribute("class", "form-control")
            }
            if (!fields["handPreference4"]){
                document.getElementById("handPreference4").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("handPreference4").setAttribute("class", "form-control")
            }
            if (!fields["handPreference5"]){
                document.getElementById("handPreference5").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("handPreference5").setAttribute("class", "form-control")
            }
            if (!fields["iepPlan"]){
                document.getElementById("iepPlan").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("iepPlan").setAttribute("class", "form-control")
            }
            if (!fields["skill1"]){
                document.getElementById("skill1").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill1").setAttribute("class", "form-control")
            }
            if (!fields["skill2"]){
                document.getElementById("skill2").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill2").setAttribute("class", "form-control")
            }
            if (!fields["skill3"]){
                document.getElementById("skill3").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill3").setAttribute("class", "form-control")
            }
            if (!fields["skill4"]){
                document.getElementById("skill4").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill4").setAttribute("class", "form-control")
            }
            if (!fields["skill5"]){
                document.getElementById("skill5").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill5").setAttribute("class", "form-control")
            }
            if (!fields["skill6"]){
                document.getElementById("skill6").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill6").setAttribute("class", "form-control")
            }
            if (!fields["skill7"]){
                document.getElementById("skill7").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill7").setAttribute("class", "form-control")
            }
            if (!fields["skill8"]){
                document.getElementById("skill8").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill8").setAttribute("class", "form-control")
            }
            if (!fields["skill9"]){
                document.getElementById("skill9").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("skill9").setAttribute("class", "form-control")
            }
            //SECTION 9
            if (!fields["soothing"]) {
                formIsValid = false;
                errors["soothing"] = "Cannot be empty";
            }
            if (!fields["assistanceRequired"]) {
                formIsValid = false;
                errors["assistanceRequired"] = "Cannot be empty";
            }
            if (!fields["positiveBehavior"]) {
                formIsValid = false;
                errors["positiveBehavior"] = "Cannot be empty";
            }
            //SECTION NINE
            if (!fields["schoolConcentration"]){
                document.getElementById("schoolConcentration").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("schoolConcentration").setAttribute("class", "form-control")
            }
            if (!fields["socialAnxiety"]){
                document.getElementById("socialAnxiety").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("socialAnxiety").setAttribute("class", "form-control")
            }
            if (!fields["lowGrades"]){
                document.getElementById("lowGrades").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("lowGrades").setAttribute("class", "form-control")
            }
            if (!fields["makingFriends"]){
                document.getElementById("makingFriends").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("makingFriends").setAttribute("class", "form-control")
            }
            if (!fields["oppositionalBehavior"]){
                document.getElementById("oppositionalBehavior").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("oppositionalBehavior").setAttribute("class", "form-control")
            }
            if (!fields["sociallyIsolated"]){
                document.getElementById("sociallyIsolated").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("sociallyIsolated").setAttribute("class", "form-control")
            }
            if (!fields["agressiveBehavior"]){
                document.getElementById("aggressiveBehavior").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("aggressiveBehavior").setAttribute("class", "form-control")
            }
            if (!fields["stressFamily"]){
                document.getElementById("stressFamily").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("stressFamily").setAttribute("class", "form-control")
            }
            if (!fields["generalizedAnxiety"]){
                document.getElementById("generalizedAnxiety").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("generalizedAnxiety").setAttribute("class", "form-control")
            }
            if (!fields["phobias"]){
                document.getElementById("phobias").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("phobias").setAttribute("class", "form-control")
            }
            if (!fields["temperProblem"]){
                document.getElementById("temperProblem").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("temperProblem").setAttribute("class", "form-control")
            }
            if (!fields["hyperactive"]){
                document.getElementById("hyperactive").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("hyperactive").setAttribute("class", "form-control")
            }
            if (!fields["sensoryProblems"]){
                document.getElementById("sensoryProblems").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("sensoryProblems").setAttribute("class", "form-control")
            }
            if (!fields["problemsEating"]){
                document.getElementById("problemsEating").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("problemsEating").setAttribute("class", "form-control")
            }
            if (!fields["wettingAccidents"]){
                document.getElementById("wettingAccidents").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("wettingAccidents").setAttribute("class", "form-control")
            }
            if (!fields["vocalTics"]){
                document.getElementById("vocalTics").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("vocalTics").setAttribute("class", "form-control")
            }
            if (!fields["wakingUp"]){
                document.getElementById("wakingUp").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("wakingUp").setAttribute("class", "form-control")
            }
            if (!fields["nightmares"]){
                document.getElementById("nightmares").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("nightmares").setAttribute("class", "form-control")
            }
            if (!fields["problemsSleeping"]){
                document.getElementById("problemsSleeping").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("problemsSleeping").setAttribute("class", "form-control")
            }
            if (!fields["tiredness"]){
                document.getElementById("tiredness").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("tiredness").setAttribute("class", "form-control")
            }
            if (!fields["sadness"]){
                document.getElementById("sadness").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("sadness").setAttribute("class", "form-control")
            }
            if (!fields["impulsive"]){
                document.getElementById("impulsive").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("impulsive").setAttribute("class", "form-control")
            }
            if (!fields["npncompliant"]){
                document.getElementById("noncompliant").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("noncompliant").setAttribute("class", "form-control")
            }
            if (!fields["injuryBehavior"]){
                document.getElementById("injuryBehavior").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("injuryBehavior").setAttribute("class", "form-control")
            }
            if (!fields["darting"]){
                document.getElementById("darting").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("darting").setAttribute("class", "form-control")
            }
            if (!fields["abuse"]){
                document.getElementById("abuse").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("abuse").setAttribute("class", "form-control")
            }
            if (!fields["rigid"]){
                document.getElementById("rigid").setAttribute("class", "form-control testing")
            } else {
                document.getElementById("rigid").setAttribute("class", "form-control")
            }

            if (!fields["physicalAssistanceYes"] && !fields["physicalAssistanceNo"]){
                document.getElementById("physicalAssistanceQuestion").setAttribute("class", "control-label required error")
            } else {
                document.getElementById("physicalAssistanceQuestion").setAttribute("class", "control-label required")
            }
            if (!fields["verbalDirectivesYes"] && !fields["verbalDirectivesNo"]){
                document.getElementById("verbalDirectivesQuestion").setAttribute("class", "control-label required error")
            } else {
                document.getElementById("verbalDirectivesQuestion").setAttribute("class", "control-label required")
            }
            if (!fields["currentEventsYes"] && !fields["currentEventsNo"]){
                document.getElementById("currentEventsQuestion").setAttribute("class", "control-label required error")
            } else {
                document.getElementById("currentEventsQuestion").setAttribute("class", "control-label required")
            }
            //SECTION 10
            if (!fields["morning"]) {
                formIsValid = false;
                errors["morning"] = "Cannot be empty";
            }
            if (!fields["evening"]) {
                formIsValid = false;
                errors["evening"] = "Cannot be empty";
            }
            if (!fields["afternoon"]) {
                formIsValid = false;
                errors["afternoon"] = "Cannot be empty";
            }
            if (!fields["downtime"]) {
                formIsValid = false;
                errors["downtime"] = "Cannot be empty";
            }
            if (!fields["screentime"]) {
                formIsValid = false;
                errors["screentime"] = "Cannot be empty";
            }
            if (!fields["homeExpectation"]) {
                formIsValid = false;
                errors["homeExpectation"] = "Cannot be empty";
            }
            if (!fields["chores"]) {
                formIsValid = false;
                errors["chores"] = "Cannot be empty";
            }
            if (!fields["physicalActivity"]) {
                formIsValid = false;
                errors["physicalActivity"] = "Cannot be empty";
            }

            //SECTION 12
            if (!fields["challengesWithUnknownProvider"]) {
                formIsValid = false;
                errors["challengesWithUnknownProvider"] = "Cannot be empty";
            }
            if (!fields["concernsWithRoom"]) {
                formIsValid = false;
                errors["concernsWithRoom"] = "Cannot be empty";
            }
            if (!fields["challengesWithUnknownProvider"]) {
                formIsValid = false;
                errors["challengesWithUnknownProvider"] = "Cannot be empty";
            }
            if (!fields["concernsWithCubbies"]) {
                formIsValid = false;
                errors["concernsWithCubbies"] = "Cannot be empty";
            }
            if (!fields["signsOfToilet"]) {
                formIsValid = false;
                errors["signsOfToilet"] = "Cannot be empty";
            }
            if (!fields["amountOfRestroomUse"]) {
                formIsValid = false;
                errors["amountOfRestroomUse"] = "Cannot be empty";
            }
            if (!fields["restroomTerminology"]) {
                formIsValid = false;
                errors["restroomTerminology"] = "Cannot be empty";
            }
            if (!fields["restroomIndependence"]) {
                formIsValid = false;
                errors["restroomIndependence"] = "Cannot be empty";
            }
            if (!fields["snackDuringEval"]) {
                formIsValid = false;
                errors["snackDuringEval"] = "Cannot be empty";
            }
            if (!fields["techniquesDuringEating"]) {
                formIsValid = false;
                errors["techniquesDuringEating"] = "Cannot be empty";
            }
            if (!fields["eatingIndependence"]) {
                formIsValid = false;
                errors["eatingIndependence"] = "Cannot be empty";
            }
            if (!fields["medicationDuringEval"]) {
                formIsValid = false;
                errors["medicationDuringEval"] = "Cannot be empty";
            }
            if (!fields["conditionsWithRescueMedication"]) {
                formIsValid = false;
                errors["conditionsWithRescueMedication"] = "Cannot be empty";
            }
            if (!fields["allergicReaction"]) {
                formIsValid = false;
                errors["allergicReaction"] = "Cannot be empty";
            }

            // SECTION 13
            if (!fields["hearAboutJL"]) {
                formIsValid = false;
                errors["hearAboutJL"] = "Cannot be empty";
            }
            if (!fields["goalsAndExpectations"]) {
                formIsValid = false;
                errors["goalsAndExpectations"] = "Cannot be empty";
            }
            if (!fields["enrollmentAfterEval"]) {
                formIsValid = false;
                errors["enrollmentAfterEval"] = "Cannot be empty";
            }
            if (!fields["additionalInfoAboutChild"]) {
                formIsValid = false;
                errors["additionalInfoAboutChild"] = "Cannot be empty";
            }

            //SECTION 14
            if (!fields["consentCheck"]) {
                formIsValid = false;
                errors["consentCheck"] = "Cannot be empty";
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
        return formIsValid;
    }

    componentDidMount() {
        this.fetchFromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));

        this.fetchSection11FromDB()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }

    postToDB() {
        var update = JSON.stringify(infoObj);
        var url = 'api/children/' + childID + '/forms/ClientHistoryIntakeInformationForm';
        const response = fetch(url, {
            method: 'POST',
            headers: {
                'token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: update
        });
    }

    fetchFromDB = async () => {
        let url = 'api/children/' + childID + '/forms/ClientHistoryIntakeInformationForm';
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
            this.state.fields["dob"] = body.Form[0].dob == null ? "" : body.Form[0].dob;
            this.state.fields["age"] = body.Form[0].age == null ? "" : body.Form[0].age;
            this.state.fields["diagnosis"] = body.Form[0].diagnosis == null ? "" : body.Form[0].diagnosis;
            this.state.fields["height"] = body.Form[0].height == null ? "" : body.Form[0].height;
            this.state.fields["weight"] = body.Form[0].weight == null ? "" : body.Form[0].weight;
            this.state.fields["street"] = body.Form[0].street == null ? "" : body.Form[0].street;
            this.state.fields["city"] = body.Form[0].city == null ? "" : body.Form[0].city;
            this.state.fields["state"] = body.Form[0].state == null ? "" : body.Form[0].state;
            this.state.fields["zip"] = body.Form[0].zip == null ? "" : body.Form[0].zip;
            this.state.fields["country"] = body.Form[0].country == null ? "" : body.Form[0].country;
            this.state.fields["homeNumber"] = body.Form[0].homeNumber == null ? "" : body.Form[0].homeNumber;
            this.state.fields["section1Comments"] = body.Form[0].section1Comments == null ? "" : body.Form[0].section1Comments;
            this.state.fields["isAdopted"] = body.Form[0].isAdopted == null ? "" : body.Form[0].isAdopted;
            this.state.fields["isAdoptedAge"] = body.Form[0].isAdoptedAge == null ? "" : body.Form[0].isAdoptedAge;
            this.state.fields["birthCountry"] = body.Form[0].birthCountry == null ? "" : body.Form[0].birthCountry;
            this.state.fields["motherName"] = body.Form[0].motherName == null ? "" : body.Form[0].motherName;
            this.state.fields["motherAge"] = body.Form[0].motherAge == null ? "" : body.Form[0].motherAge;
            this.state.fields["motherCell"] = body.Form[0].motherCell == null ? "" : body.Form[0].motherCell;
            this.state.fields["motherEmail"] = body.Form[0].motherEmail == null ? "" : body.Form[0].motherEmail;
            this.state.fields["motherOccupation"] = body.Form[0].motherOccupation == null ? "" : body.Form[0].motherOccupation;
            this.state.fields["fatherName"] = body.Form[0].fatherName == null ? "" : body.Form[0].fatherName;
            this.state.fields["fatherAge"] = body.Form[0].fatherAge == null ? "" : body.Form[0].fatherAge;
            this.state.fields["fatherCell"] = body.Form[0].fatherCell == null ? "" : body.Form[0].fatherCell;
            this.state.fields["fatherEmail"] = body.Form[0].fatherEmail == null ? "" : body.Form[0].fatherEmail;
            this.state.fields["fatherOccupation"] = body.Form[0].fatherOccupation == null ? "" : body.Form[0].fatherOccupation;
            this.state.fields["maritalStatus"] = body.Form[0].maritalStatus == null ? "" : body.Form[0].maritalStatus;
            this.state.fields["legalGuardian"] = body.Form[0].legalGuardian == null ? "" : body.Form[0].legalGuardian;
            this.state.fields["sMotherName"] = body.Form[0].sMotherName == null ? "" : body.Form[0].sMotherName;
            this.state.fields["sMotherAge"] = body.Form[0].sMotherAge == null ? "" : body.Form[0].sMotherAge;
            this.state.fields["sMotherCell"] = body.Form[0].sMotherCell == null ? "" : body.Form[0].sMotherCell;
            this.state.fields["sMotherEmail"] = body.Form[0].sMotherEmail == null ? "" : body.Form[0].sMotherEmail;
            this.state.fields["sMotherOccupation"] = body.Form[0].sMotherOccupation == null ? "" : body.Form[0].sMotherOccupation;
            this.state.fields["sFatherName"] = body.Form[0].sFatherName == null ? "" : body.Form[0].sFatherName;
            this.state.fields["sFatherAge"] = body.Form[0].sFatherAge == null ? "" : body.Form[0].sFatherAge;
            this.state.fields["sFatherCell"] = body.Form[0].sFatherCell == null ? "" : body.Form[0].sFatherCell;
            this.state.fields["sFatherEmail"] = body.Form[0].sFatherEmail == null ? "" : body.Form[0].sFatherEmail;
            this.state.fields["sFatherOccupation"] = body.Form[0].sFatherOccupation == null ? "" : body.Form[0].sFatherOccupation;
            this.state.fields["sib1Name"] = body.Form[0].sib1Name == null ? "" : body.Form[0].sib1Name;
            this.state.fields["sib1Age"] = body.Form[0].sib1Age == null ? "" : body.Form[0].sib1Age;
            this.state.fields["sib1Gender"] = body.Form[0].sib1Gender == null ? "" : body.Form[0].sib1Gender;
            this.state.fields["sib2Name"] = body.Form[0].sib2Name == null ? "" : body.Form[0].sib2Name;
            this.state.fields["sib2Age"] = body.Form[0].sib2Age == null ? "" : body.Form[0].sib2Age;
            this.state.fields["sib2Gender"] = body.Form[0].sib2Gender == null ? "" : body.Form[0].sib2Gender;
            this.state.fields["sib3Name"] = body.Form[0].sib3Name == null ? "" : body.Form[0].sib3Name;
            this.state.fields["sib3Age"] = body.Form[0].sib3Age == null ? "" : body.Form[0].sib3Age;
            this.state.fields["sib3Gender"] = body.Form[0].sib3Gender == null ? "" : body.Form[0].sib3Gender;
            this.state.fields["sib4Name"] = body.Form[0].sib4Name == null ? "" : body.Form[0].sib4Name;
            this.state.fields["sib4Age"] = body.Form[0].sib4Age == null ? "" : body.Form[0].sib4Age;
            this.state.fields["sib4Gender"] = body.Form[0].sib4Gender == null ? "" : body.Form[0].sib4Gender;
            this.state.fields["sib5Name"] = body.Form[0].sib5Name == null ? "" : body.Form[0].sib5Name;
            this.state.fields["sib5Age"] = body.Form[0].sib5Age == null ? "" : body.Form[0].sib5Age;
            this.state.fields["sib5Gender"] = body.Form[0].sib5Gender == null ? "" : body.Form[0].sib5Gender;
            this.state.fields["section2Comments"] = body.Form[0].section2Comments == null ? "" : body.Form[0].section2Comments;
            this.state.fields["birthWeek"] = body.Form[0].birthWeek == null ? "" : body.Form[0].birthWeek;
            this.state.fields["birthWeight"] = body.Form[0].birthWeight == null ? "" : body.Form[0].birthWeight;
            this.state.fields["deliveryType"] = body.Form[0].deliveryType == null ? "" : body.Form[0].deliveryType;
            this.state.fields["pregComplications"] = body.Form[0].pregComplications == null ? "" : body.Form[0].pregComplications;
            this.state.fields["pregComplicationDescription"] = body.Form[0].pregComplicationDescription == null ? "" : body.Form[0].pregComplicationDescription;
            this.state.fields["hospitalizedAfterBirth"] = body.Form[0].hospitalizedAfterBirth == null ? "" : body.Form[0].hospitalizedAfterBirth;
            this.state.fields["hospitaliedAfterBirthDescription"] = body.Form[0].hospitaliedAfterBirthDescription == null ? "" : body.Form[0].hospitaliedAfterBirthDescription;
            this.state.fields["section3Comments"] = body.Form[0].section3Comments == null ? "" : body.Form[0].section3Comments;
            this.state.fields["crawlYears"] = body.Form[0].crawlYears == null ? "" : body.Form[0].crawlYears;
            this.state.fields["crawlMonths"] = body.Form[0].crawlMonths == null ? "" : body.Form[0].crawlMonths;
            this.state.fields["crawlNa"] = body.Form[0].crawlNa == null ? "" : body.Form[0].crawlNa;
            this.state.fields["creptYears"] = body.Form[0].creptYears == null ? "" : body.Form[0].creptYears;
            this.state.fields["creptMonths"] = body.Form[0].creptMonths == null ? "" : body.Form[0].creptMonths;
            this.state.fields["creptNa"] = body.Form[0].creptNa == null ? "" : body.Form[0].creptNa;
            this.state.fields["walkYears"] = body.Form[0].walkYears == null ? "" : body.Form[0].walkYears;
            this.state.fields["walkMonths"] = body.Form[0].walkMonths == null ? "" : body.Form[0].walkMonths;
            this.state.fields["walkNa"] = body.Form[0].walkNa == null ? "" : body.Form[0].walkNa;
            this.state.fields["toiletYears"] = body.Form[0].toiletYears == null ? "" : body.Form[0].toiletYears;
            this.state.fields["toiletMonths"] = body.Form[0].toiletMonths == null ? "" : body.Form[0].toiletMonths;
            this.state.fields["toiletNa"] = body.Form[0].toiletNa == null ? "" : body.Form[0].toiletNa;
            this.state.fields["wordYears"] = body.Form[0].wordYears == null ? "" : body.Form[0].wordYears;
            this.state.fields["wordMonths"] = body.Form[0].wordMonths == null ? "" : body.Form[0].wordMonths;
            this.state.fields["wordNa"] = body.Form[0].wordNa == null ? "" : body.Form[0].wordNa;
            this.state.fields["coupletYears"] = body.Form[0].coupletYears == null ? "" : body.Form[0].coupletYears;
            this.state.fields["coupletMonths"] = body.Form[0].coupletMonths == null ? "" : body.Form[0].coupletMonths;
            this.state.fields["coupletNa"] = body.Form[0].coupletNa == null ? "" : body.Form[0].coupletNa;
            this.state.fields["phraseYears"] = body.Form[0].phraseYears == null ? "" : body.Form[0].phraseYears;
            this.state.fields["phraseMonths"] = body.Form[0].phraseMonths == null ? "" : body.Form[0].phraseMonths;
            this.state.fields["phraseNa"] = body.Form[0].phraseNa == null ? "" : body.Form[0].phraseNa;
            this.state.fields["sentenceYears"] = body.Form[0].sentenceYears == null ? "" : body.Form[0].sentenceYears;
            this.state.fields["sentenceMonths"] = body.Form[0].sentenceMonths == null ? "" : body.Form[0].sentenceMonths;
            this.state.fields["sentenceNa"] = body.Form[0].sentenceNa == null ? "" : body.Form[0].sentenceNa;
            this.state.fields["conversationYears"] = body.Form[0].conversationYears == null ? "" : body.Form[0].conversationYears;
            this.state.fields["conversationMonths"] = body.Form[0].conversationMonths == null ? "" : body.Form[0].conversationMonths;
            this.state.fields["conversationNa"] = body.Form[0].conversationNa == null ? "" : body.Form[0].conversationNa;
            this.state.fields["readYears"] = body.Form[0].readYears == null ? "" : body.Form[0].readYears;
            this.state.fields["readMonths"] = body.Form[0].readMonths == null ? "" : body.Form[0].readMonths;
            this.state.fields["readNa"] = body.Form[0].readNa == null ? "" : body.Form[0].readNa;
            this.state.fields["section4Comments"] = body.Form[0].section4Comments == null ? "" : body.Form[0].section4Comments;
            this.state.fields["drName"] = body.Form[0].drName == null ? "" : body.Form[0].drName;
            this.state.fields["drPhone"] = body.Form[0].drPhone == null ? "" : body.Form[0].drPhone;
            this.state.fields["drStreet"] = body.Form[0].drStreet == null ? "" : body.Form[0].drStreet;
            this.state.fields["drCity"] = body.Form[0].drCity == null ? "" : body.Form[0].drCity;
            this.state.fields["drState"] = body.Form[0].drState == null ? "" : body.Form[0].drState;
            this.state.fields["drZip"] = body.Form[0].drZip == null ? "" : body.Form[0].drZip;
            this.state.fields["drCountry"] = body.Form[0].drCountry == null ? "" : body.Form[0].drCountry;
            this.state.fields["drName2"] = body.Form[0].drName2 == null ? "" : body.Form[0].drName2;
            this.state.fields["drPhone2"] = body.Form[0].drPhone2 == null ? "" : body.Form[0].drPhone2;
            this.state.fields["drStreet2"] = body.Form[0].drStreet2 == null ? "" : body.Form[0].drStreet2;
            this.state.fields["drCity2"] = body.Form[0].drCity2 == null ? "" : body.Form[0].drCity2;
            this.state.fields["drState2"] = body.Form[0].drState2 == null ? "" : body.Form[0].drState2;
            this.state.fields["drZip2"] = body.Form[0].drZip2 == null ? "" : body.Form[0].drZip2;
            this.state.fields["drCountry2"] = body.Form[0].drCountry2 == null ? "" : body.Form[0].drCountry2;
            this.state.fields["outsideTherapy"] = body.Form[0].outsideTherapy == null ? "" : body.Form[0].outsideTherapy;
            this.state.fields["doc1Name"] = body.Form[0].doc1Name == null ? "" : body.Form[0].doc1Name;
            this.state.fields["doc1Specialty"] = body.Form[0].doc1Specialty == null ? "" : body.Form[0].doc1Specialty;
            this.state.fields["doc1Phone"] = body.Form[0].doc1Phone == null ? "" : body.Form[0].doc1Phone;
            this.state.fields["doc1Sched"] = body.Form[0].doc1Sched == null ? "" : body.Form[0].doc1Sched;
            this.state.fields["doc2Name"] = body.Form[0].doc2Name == null ? "" : body.Form[0].doc2Name;
            this.state.fields["doc2Specialty"] = body.Form[0].doc2Specialty == null ? "" : body.Form[0].doc2Specialty;
            this.state.fields["doc2Phone"] = body.Form[0].doc2Phone == null ? "" : body.Form[0].doc2Phone;
            this.state.fields["doc2Sched"] = body.Form[0].doc2Sched == null ? "" : body.Form[0].doc2Sched;
            this.state.fields["doc3Name"] = body.Form[0].doc3Name == null ? "" : body.Form[0].doc3Name;
            this.state.fields["doc3Specialty"] = body.Form[0].doc3Specialty == null ? "" : body.Form[0].doc3Specialty;
            this.state.fields["doc3Phone"] = body.Form[0].doc3Phone == null ? "" : body.Form[0].doc3Phone;
            this.state.fields["doc3Sched"] = body.Form[0].doc3Sched == null ? "" : body.Form[0].doc3Sched;
            this.state.fields["doc4Name"] = body.Form[0].doc4Name == null ? "" : body.Form[0].doc4Name;
            this.state.fields["doc4Specialty"] = body.Form[0].doc4Specialty == null ? "" : body.Form[0].doc4Specialty;
            this.state.fields["doc4Phone"] = body.Form[0].doc4Phone == null ? "" : body.Form[0].doc4Phone;
            this.state.fields["doc4Sched"] = body.Form[0].doc4Sched == null ? "" : body.Form[0].doc4Sched;
            this.state.fields["doc5Name"] = body.Form[0].doc5Name == null ? "" : body.Form[0].doc5Name;
            this.state.fields["doc5Specialty"] = body.Form[0].doc5Specialty == null ? "" : body.Form[0].doc5Specialty;
            this.state.fields["doc5Phone"] = body.Form[0].doc5Phone == null ? "" : body.Form[0].doc5Phone;
            this.state.fields["doc5Sched"] = body.Form[0].doc5Sched == null ? "" : body.Form[0].doc5Sched;
            this.state.fields["doc5Name"] = body.Form[0].doc5Name == null ? "" : body.Form[0].doc5Name;
            this.state.fields["specialDoc1Name"] = body.Form[0].specialDoc1Name == null ? "" : body.Form[0].specialDoc1Name;
            this.state.fields["specialDoc1Specialty"] = body.Form[0].specialDoc1Specialty == null ? "" : body.Form[0].specialDoc1Specialty;
            this.state.fields["specialDoc1Phone"] = body.Form[0].specialDoc1Phone == null ? "" : body.Form[0].specialDoc1Phone;
            this.state.fields["specialDoc1Sched"] = body.Form[0].specialDoc1Sched == null ? "" : body.Form[0].specialDoc1Sched;
            this.state.fields["specialDoc2Name"] = body.Form[0].specialDoc2Name == null ? "" : body.Form[0].specialDoc2Name;
            this.state.fields["specialDoc2Specialty"] = body.Form[0].specialDoc2Specialty == null ? "" : body.Form[0].specialDoc2Specialty;
            this.state.fields["specialDoc2Phone"] = body.Form[0].specialDoc2Phone == null ? "" : body.Form[0].specialDoc2Phone;
            this.state.fields["specialDoc2Sched"] = body.Form[0].specialDoc2Sched == null ? "" : body.Form[0].specialDoc2Sched;
            this.state.fields["specialDoc3Name"] = body.Form[0].specialDoc3Name == null ? "" : body.Form[0].specialDoc3Name;
            this.state.fields["specialDoc3Specialty"] = body.Form[0].specialDoc3Specialty == null ? "" : body.Form[0].specialDoc3Specialty;
            this.state.fields["specialDoc3Phone"] = body.Form[0].specialDoc3Phone == null ? "" : body.Form[0].specialDoc3Phone;
            this.state.fields["specialDoc3Sched"] = body.Form[0].specialDoc3Sched == null ? "" : body.Form[0].specialDoc3Sched;
            this.state.fields["specialDoc4Name"] = body.Form[0].specialDoc4Name == null ? "" : body.Form[0].specialDoc4Name;
            this.state.fields["specialDoc4Specialty"] = body.Form[0].specialDoc4Specialty == null ? "" : body.Form[0].specialDoc4Specialty;
            this.state.fields["specialDoc4Phone"] = body.Form[0].specialDoc4Phone == null ? "" : body.Form[0].specialDoc4Phone;
            this.state.fields["specialDoc4Sched"] = body.Form[0].specialDoc4Sched == null ? "" : body.Form[0].specialDoc4Sched;
            this.state.fields["specialDoc5Name"] = body.Form[0].specialDoc5Name == null ? "" : body.Form[0].specialDoc5Name;
            this.state.fields["specialDoc5Specialty"] = body.Form[0].specialDoc5Specialty == null ? "" : body.Form[0].specialDoc5Specialty;
            this.state.fields["specialDoc5Phone"] = body.Form[0].specialDoc5Phone == null ? "" : body.Form[0].specialDoc5Phone;
            this.state.fields["specialDoc5Sched"] = body.Form[0].specialDoc1Sched == null ? "" : body.Form[0].specialDoc1Sched;
            this.state.fields["test1Date"] = body.Form[0].test1Date == null ? "" : body.Form[0].test1Date;
            this.state.fields["test1Examiner"] = body.Form[0].test1Examiner == null ? "" : body.Form[0].test1Examiner;
            this.state.fields["test1Diagnosis"] = body.Form[0].test1Diagnosis == null ? "" : body.Form[0].test1Diagnosis;
            this.state.fields["test1Reco"] = body.Form[0].test1Reco == null ? "" : body.Form[0].test1Reco;
            this.state.fields["test2Date"] = body.Form[0].test2Date == null ? "" : body.Form[0].test2Date;
            this.state.fields["test2Examiner"] = body.Form[0].test2Examiner == null ? "" : body.Form[0].test2Examiner;
            this.state.fields["test2Diagnosis"] = body.Form[0].test2Diagnosis == null ? "" : body.Form[0].test2Diagnosis;
            this.state.fields["test2Reco"] = body.Form[0].test2Reco == null ? "" : body.Form[0].test2Reco;
            this.state.fields["test3Date"] = body.Form[0].test3Date == null ? "" : body.Form[0].test3Date;
            this.state.fields["test3Examiner"] = body.Form[0].test3Examiner == null ? "" : body.Form[0].test3Examiner;
            this.state.fields["test3Diagnosis"] = body.Form[0].test3Diagnosis == null ? "" : body.Form[0].test3Diagnosis;
            this.state.fields["test3Reco"] = body.Form[0].test3Reco == null ? "" : body.Form[0].test3Reco;
            this.state.fields["test4Date"] = body.Form[0].test4Date == null ? "" : body.Form[0].test4Date;
            this.state.fields["test4Examiner"] = body.Form[0].test4Examiner == null ? "" : body.Form[0].test4Examiner;
            this.state.fields["test4Diagnosis"] = body.Form[0].test4Diagnosis == null ? "" : body.Form[0].test4Diagnosis;
            this.state.fields["test4Reco"] = body.Form[0].test4Reco == null ? "" : body.Form[0].test4Reco;
            this.state.fields["test5Date"] = body.Form[0].test5Date == null ? "" : body.Form[0].test5Date;
            this.state.fields["test5Examiner"] = body.Form[0].test5Examiner == null ? "" : body.Form[0].test5Examiner;
            this.state.fields["test5Diagnosis"] = body.Form[0].test5Diagnosis == null ? "" : body.Form[0].test5Diagnosis;
            this.state.fields["test5Reco"] = body.Form[0].test5Reco == null ? "" : body.Form[0].test5Reco;
            this.state.fields["hospital"] = body.Form[0].hospital == null ? "" : body.Form[0].hospital;
            this.state.fields["otherMedicalConditions"] = body.Form[0].otherMedicalConditions == null ? "" : body.Form[0].otherMedicalConditions;
            this.state.fields["epilepsy"] = body.Form[0].epilepsy == null ? "" : body.Form[0].epilepsy;
            this.state.fields["diabetes"] = body.Form[0].diabetes == null ? "" : body.Form[0].diabetes;
            this.state.fields["asthma"] = body.Form[0].asthma == null ? "" : body.Form[0].asthma;
            this.state.fields["epipen"] = body.Form[0].epipen == null ? "" : body.Form[0].epipen;
            this.state.fields["medConditionOther"] = body.Form[0].medConditionOther == null ? "" : body.Form[0].medConditionOther;
            this.state.fields["feedSupport"] = body.Form[0].feedSupport == null ? "" : body.Form[0].feedSupport;
            this.state.fields["toiletEquip"] = body.Form[0].toiletEquip == null ? "" : body.Form[0].toiletEquip;
            this.state.fields["mobilityEquip"] = body.Form[0].mobilityEquip == null ? "" : body.Form[0].mobilityEquip;
            this.state.fields["communicationEquip"] = body.Form[0].communicationEquip == null ? "" : body.Form[0].communicationEquip;
            this.state.fields["oxygenTank"] = body.Form[0].oxygenTank == null ? "" : body.Form[0].oxygenTank;
            this.state.fields["hearingDevice"] = body.Form[0].hearingDevice == null ? "" : body.Form[0].hearingDevice;
            this.state.fields["otherSupply"] = body.Form[0].otherSupply == null ? "" : body.Form[0].otherSupply;
            this.state.fields["otherSupplyDetail"] = body.Form[0].otherSupplyDetail == null ? "" : body.Form[0].otherSupplyDetail;
            this.state.fields["med1Name"] = body.Form[0].med1Name == null ? "" : body.Form[0].med1Name;
            this.state.fields["med1Dosage"] = body.Form[0].med1Dosage == null ? "" : body.Form[0].med1Dosage;
            this.state.fields["med1TimeGiven"] = body.Form[0].med1TimeGiven == null ? "" : body.Form[0].med1TimeGiven;
            this.state.fields["med1Frequency"] = body.Form[0].med1Frequency == null ? "" : body.Form[0].med1Frequency;
            this.state.fields["med1Purpose"] = body.Form[0].med1Purpose == null ? "" : body.Form[0].med1Purpose;
            this.state.fields["med1SideEffect"] = body.Form[0].med1SideEffect == null ? "" : body.Form[0].med1SideEffect;
            this.state.fields["med2Name"] = body.Form[0].med2Name == null ? "" : body.Form[0].med2Name;
            this.state.fields["med2Dosage"] = body.Form[0].med2Dosage == null ? "" : body.Form[0].med2Dosage;
            this.state.fields["med2TimeGiven"] = body.Form[0].med2TimeGiven == null ? "" : body.Form[0].med2TimeGiven;
            this.state.fields["med2Frequency"] = body.Form[0].med2Frequency == null ? "" : body.Form[0].med2Frequency;
            this.state.fields["med2Purpose"] = body.Form[0].med2Purpose == null ? "" : body.Form[0].med2Purpose;
            this.state.fields["med2SideEffect"] = body.Form[0].med2SideEffect == null ? "" : body.Form[0].med2SideEffect;
            this.state.fields["med3Name"] = body.Form[0].med3Name == null ? "" : body.Form[0].med3Name;
            this.state.fields["med3Dosage"] = body.Form[0].med3Dosage == null ? "" : body.Form[0].med3Dosage;
            this.state.fields["med3TimeGiven"] = body.Form[0].med3TimeGiven == null ? "" : body.Form[0].med3TimeGiven;
            this.state.fields["med3Frequency"] = body.Form[0].med3Frequency == null ? "" : body.Form[0].med3Frequency;
            this.state.fields["med3Purpose"] = body.Form[0].med3Purpose == null ? "" : body.Form[0].med3Purpose;
            this.state.fields["med3SideEffect"] = body.Form[0].med3SideEffect == null ? "" : body.Form[0].med3SideEffect;
            this.state.fields["med4Name"] = body.Form[0].med4Name == null ? "" : body.Form[0].med4Name;
            this.state.fields["med4Dosage"] = body.Form[0].med4Dosage == null ? "" : body.Form[0].med4Dosage;
            this.state.fields["med4TimeGiven"] = body.Form[0].med4TimeGiven == null ? "" : body.Form[0].med4TimeGiven;
            this.state.fields["med4Frequency"] = body.Form[0].med4Frequency == null ? "" : body.Form[0].med4Frequency;
            this.state.fields["med4Purpose"] = body.Form[0].med4Purpose == null ? "" : body.Form[0].med4Purpose;
            this.state.fields["med4SideEffect"] = body.Form[0].med4SideEffect == null ? "" : body.Form[0].med4SideEffect;
            this.state.fields["med5Name"] = body.Form[0].med5Name == null ? "" : body.Form[0].med5Name;
            this.state.fields["med5Dosage"] = body.Form[0].med5Dosage == null ? "" : body.Form[0].med5Dosage;
            this.state.fields["med5TimeGiven"] = body.Form[0].med5TimeGiven == null ? "" : body.Form[0].med5TimeGiven;
            this.state.fields["med5Frequency"] = body.Form[0].med5Frequency == null ? "" : body.Form[0].med5Frequency;
            this.state.fields["med5Purpose"] = body.Form[0].med5Purpose == null ? "" : body.Form[0].med5Purpose;
            this.state.fields["med5SideEffect"] = body.Form[0].med5SideEffect == null ? "" : body.Form[0].med5SideEffect;
            this.state.fields["section5Comments"] = body.Form[0].section5Comments == null ? "" : body.Form[0].section5Comments;
            this.state.fields["diet"] = body.Form[0].diet == null ? "" : body.Form[0].diet;
            this.state.fields["vegetableExcess"] = body.Form[0].vegetableExcess == null ? "" : body.Form[0].vegetableExcess;
            this.state.fields["vegetableDaily"] = body.Form[0].vegetableDaily == null ? "" : body.Form[0].vegetableDaily;
            this.state.fields["vegetableWeekly"] = body.Form[0].vegetableWeekly == null ? "" : body.Form[0].vegetableWeekly;
            this.state.fields["vegetableRarely"] = body.Form[0].vegetableRarely == null ? "" : body.Form[0].vegetableRarely;
            this.state.fields["vegetableNever"] = body.Form[0].vegetableNever == null ? "" : body.Form[0].vegetableNever;
            this.state.fields["fruitExcess"] = body.Form[0].fruitExcess == null ? "" : body.Form[0].fruitExcess;
            this.state.fields["fruitDaily"] = body.Form[0].fruitDaily == null ? "" : body.Form[0].fruitDaily;
            this.state.fields["fruitWeekly"] = body.Form[0].fruitWeekly == null ? "" : body.Form[0].fruitWeekly;
            this.state.fields["fruitRarely"] = body.Form[0].fruitRarely == null ? "" : body.Form[0].fruitRarely;
            this.state.fields["fruitNever"] = body.Form[0].fruitNever == null ? "" : body.Form[0].fruitNever;
            this.state.fields["meatExcess"] = body.Form[0].meatExcess == null ? "" : body.Form[0].meatExcess;
            this.state.fields["meatDaily"] = body.Form[0].meatDaily == null ? "" : body.Form[0].meatDaily;
            this.state.fields["meatWeekly"] = body.Form[0].meatWeekly == null ? "" : body.Form[0].meatWeekly;
            this.state.fields["meatRarely"] = body.Form[0].meatRarely == null ? "" : body.Form[0].meatRarely;
            this.state.fields["meatNever"] = body.Form[0].meatNever == null ? "" : body.Form[0].meatNever;
            this.state.fields["sugarExcess"] = body.Form[0].sugarExcess == null ? "" : body.Form[0].sugarExcess;
            this.state.fields["sugarDaily"] = body.Form[0].sugarDaily == null ? "" : body.Form[0].sugarDaily;
            this.state.fields["sugarWeekly"] = body.Form[0].sugarWeekly == null ? "" : body.Form[0].sugarWeekly;
            this.state.fields["sugarRarely"] = body.Form[0].sugarRarely == null ? "" : body.Form[0].sugarRarely;
            this.state.fields["sugarNever"] = body.Form[0].sugarNever == null ? "" : body.Form[0].sugarNever;
            this.state.fields["artSweetenerExcess"] = body.Form[0].artSweetenerExcess == null ? "" : body.Form[0].artSweetenerExcess;
            this.state.fields["artSweetenerDaily"] = body.Form[0].artSweetenerDaily == null ? "" : body.Form[0].artSweetenerDaily;
            this.state.fields["artSweetenerWeekly"] = body.Form[0].artSweetenerWeekly == null ? "" : body.Form[0].artSweetenerWeekly;
            this.state.fields["artSweetenerRarely"] = body.Form[0].artSweetenerRarely == null ? "" : body.Form[0].artSweetenerRarely;
            this.state.fields["artSweetenerNever"] = body.Form[0].artSweetenerNever == null ? "" : body.Form[0].artSweetenerNever;
            this.state.fields["artProductsExcess"] = body.Form[0].artProductsExcess == null ? "" : body.Form[0].artProductsExcess;
            this.state.fields["artProductsDaily"] = body.Form[0].artProductsDaily == null ? "" : body.Form[0].artProductsDaily;
            this.state.fields["artProductsWeekly"] = body.Form[0].artProductsWeekly == null ? "" : body.Form[0].artProductsWeekly;
            this.state.fields["artProductsRarely"] = body.Form[0].artProductsRarely == null ? "" : body.Form[0].artProductsRarely;
            this.state.fields["artProductsNever"] = body.Form[0].artProductsNever == null ? "" : body.Form[0].artProductsNever;
            this.state.fields["dairyExcess"] = body.Form[0].dairyExcess == null ? "" : body.Form[0].dairyExcess;
            this.state.fields["dairyWeekly"] = body.Form[0].dairyWeekly == null ? "" : body.Form[0].dairyWeekly;
            this.state.fields["dairyRarely"] = body.Form[0].dairyRarely == null ? "" : body.Form[0].dairyRarely;
            this.state.fields["dairyNever"] = body.Form[0].dairyNever == null ? "" : body.Form[0].dairyNever;
            this.state.fields["flourExcess"] = body.Form[0].flourExcess == null ? "" : body.Form[0].flourExcess;
            this.state.fields["flourDaily"] = body.Form[0].flourDaily == null ? "" : body.Form[0].flourDaily;
            this.state.fields["flourWeekly"] = body.Form[0].flourWeekly == null ? "" : body.Form[0].flourWeekly;
            this.state.fields["flourRarely"] = body.Form[0].flourRarely == null ? "" : body.Form[0].flourRarely;
            this.state.fields["flourNever"] = body.Form[0].flourNever == null ? "" : body.Form[0].flourNever;
            this.state.fields["allergies"] = body.Form[0].allergies == null ? "" : body.Form[0].allergies;
            this.state.fields["describeAllergies"] = body.Form[0].describeAllergies == null ? "" : body.Form[0].describeAllergies;
            this.state.fields["breakfastTime"] = body.Form[0].breakfastTime == null ? "" : body.Form[0].breakfastTime;
            this.state.fields["lunchTime"] = body.Form[0].lunchTime == null ? "" : body.Form[0].lunchTime;
            this.state.fields["dinnerTime"] = body.Form[0].dinnerTime == null ? "" : body.Form[0].dinnerTime;
            this.state.fields["snackTime"] = body.Form[0].snackTime == null ? "" : body.Form[0].snackTime;
            this.state.fields["hoursOfSleep"] = body.Form[0].hoursOfSleep == null ? "" : body.Form[0].hoursOfSleep;
            this.state.fields["bedTime"] = body.Form[0].bedTime == null ? "" : body.Form[0].bedTime;
            this.state.fields["wakeTime"] = body.Form[0].wakeTime == null ? "" : body.Form[0].wakeTime;
            this.state.fields["troubleFallingAsleep"] = body.Form[0].troubleFallingAsleep == null ? "" : body.Form[0].troubleFallingAsleep;
            this.state.fields["troubleStayingAsleep"] = body.Form[0].troubleStayingAsleep == null ? "" : body.Form[0].troubleStayingAsleep;
            this.state.fields["wakesEarly"] = body.Form[0].wakesEarly == null ? "" : body.Form[0].wakesEarly;
            this.state.fields["lowMuscleTone"] = body.Form[0].lowMuscleTone == null ? "" : body.Form[0].lowMuscleTone;
            this.state.fields["highMuscleTone"] = body.Form[0].highMuscleTone == null ? "" : body.Form[0].highMuscleTone;
            this.state.fields["coordination"] = body.Form[0].coordination == null ? "" : body.Form[0].coordination;
            this.state.fields["crawling"] = body.Form[0].crawling == null ? "" : body.Form[0].crawling;
            this.state.fields["walking"] = body.Form[0].walking == null ? "" : body.Form[0].walking;
            this.state.fields["running"] = body.Form[0].running == null ? "" : body.Form[0].running;
            this.state.fields["athetoid"] = body.Form[0].athetoid == null ? "" : body.Form[0].athetoid;
            this.state.fields["ataxic"] = body.Form[0].ataxic == null ? "" : body.Form[0].ataxic;
            this.state.fields["weak"] = body.Form[0].weak == null ? "" : body.Form[0].weak;
            this.state.fields["balance"] = body.Form[0].balance == null ? "" : body.Form[0].balance;
            this.state.fields["otherPhysicalMotor"] = body.Form[0].otherPhysicalMotor == null ? "" : body.Form[0].otherPhysicalMotor;
            this.state.fields["section6Comments"] = body.Form[0].section6Comments == null ? "" : body.Form[0].section6Comments;
            this.state.fields["program1name"] = body.Form[0].program1name == null ? "" : body.Form[0].program1name;
            this.state.fields["startdate1"] = body.Form[0].startdate1 == null ? "" : body.Form[0].startdate1;
            this.state.fields["provider1"] = body.Form[0].provider1 == null ? "" : body.Form[0].provider1;
            this.state.fields["phonenumber1"] = body.Form[0].phonenumber1 == null ? "" : body.Form[0].phonenumber1;
            this.state.fields["contactpermission1"] = body.Form[0].contactpermission1 == null ? "" : body.Form[0].contactpermission1;
            this.state.fields["program2name"] = body.Form[0].program2name == null ? "" : body.Form[0].program2name;
            this.state.fields["startdate2"] = body.Form[0].startdate2 == null ? "" : body.Form[0].startdate2;
            this.state.fields["provider2"] = body.Form[0].provider2 == null ? "" : body.Form[0].provider2;
            this.state.fields["phonenumber2"] = body.Form[0].phonenumber2 == null ? "" : body.Form[0].phonenumber2;
            this.state.fields["contactpermission2"] = body.Form[0].contactpermission2 == null ? "" : body.Form[0].contactpermission2;
            this.state.fields["program3name"] = body.Form[0].program3name == null ? "" : body.Form[0].program3name;
            this.state.fields["startdate3"] = body.Form[0].startdate3 == null ? "" : body.Form[0].startdate3;
            this.state.fields["provider3"] = body.Form[0].provider3 == null ? "" : body.Form[0].provider3;
            this.state.fields["phonenumber3"] = body.Form[0].phonenumber3 == null ? "" : body.Form[0].phonenumber3;
            this.state.fields["contactpermission3"] = body.Form[0].contactpermission3 == null ? "" : body.Form[0].contactpermission3;
            this.state.fields["program4name"] = body.Form[0].program4name == null ? "" : body.Form[0].program4name;
            this.state.fields["startdate4"] = body.Form[0].startdate4 == null ? "" : body.Form[0].startdate4;
            this.state.fields["provider4"] = body.Form[0].provider4 == null ? "" : body.Form[0].provider4;
            this.state.fields["phonenumber4"] = body.Form[0].phonenumber4 == null ? "" : body.Form[0].phonenumber4;
            this.state.fields["contactpermission4"] = body.Form[0].contactpermission4 == null ? "" : body.Form[0].contactpermission4;
            this.state.fields["program5name"] = body.Form[0].program5name == null ? "" : body.Form[0].program5name;
            this.state.fields["startdate5"] = body.Form[0].startdate5 == null ? "" : body.Form[0].startdate5;
            this.state.fields["provider5"] = body.Form[0].provider5 == null ? "" : body.Form[0].provider5;
            this.state.fields["phonenumber5"] = body.Form[0].phonenumber5 == null ? "" : body.Form[0].phonenumber5;
            this.state.fields["contactpermission5"] = body.Form[0].contactpermission5 == null ? "" : body.Form[0].contactpermission5;
            this.state.fields["educationalChallenges"] = body.Form[0].educationalChallenges == null ? "" : body.Form[0].educationalChallenges;
            this.state.fields["exceptionalTalents"] = body.Form[0].exceptionalTalents == null ? "" : body.Form[0].exceptionalTalents;
            this.state.fields["iepPlan"] = body.Form[0].iepPlan == null ? "" : body.Form[0].iepPlan;
            this.state.fields["handPreference1"] = body.Form[0].handPreference1 == null ? "" : body.Form[0].handPreference1;
            this.state.fields["handPreference2"] = body.Form[0].handPreference2 == null ? "" : body.Form[0].handPreference2;
            this.state.fields["handPreference3"] = body.Form[0].handPreference3 == null ? "" : body.Form[0].handPreference3;
            this.state.fields["handPreference4"] = body.Form[0].handPreference4 == null ? "" : body.Form[0].handPreference4;
            this.state.fields["handPreference5"] = body.Form[0].handPreference5 == null ? "" : body.Form[0].handPreference5;
            this.state.fields["skill1"] = body.Form[0].skill1 == null ? "" : body.Form[0].skill1;
            this.state.fields["skill2"] = body.Form[0].skill2 == null ? "" : body.Form[0].skill2;
            this.state.fields["skill3"] = body.Form[0].skill3 == null ? "" : body.Form[0].skill3;
            this.state.fields["skill4"] = body.Form[0].skill4 == null ? "" : body.Form[0].skill4;
            this.state.fields["skill5"] = body.Form[0].skill5 == null ? "" : body.Form[0].skill5;
            this.state.fields["skill6"] = body.Form[0].skill6 == null ? "" : body.Form[0].skill6;
            this.state.fields["skill7"] = body.Form[0].skill7 == null ? "" : body.Form[0].skill7;
            this.state.fields["skill8"] = body.Form[0].skill8 == null ? "" : body.Form[0].skill8;
            this.state.fields["skill9"] = body.Form[0].skill9 == null ? "" : body.Form[0].skill9;
            this.state.fields["skill10"] = body.Form[0].skill10 == null ? "" : body.Form[0].skill10;
            this.state.fields["academicGoal"] = body.Form[0].academicGoal == null ? "" : body.Form[0].academicGoal;
            this.state.fields["section7Comments"] = body.Form[0].section7Comments == null ? "" : body.Form[0].section7Comments;
            this.state.fields["verbalSkills"] = body.Form[0].verbalSkills == null ? "" : body.Form[0].verbalSkills;
            this.state.fields["verbalLevel"] = body.Form[0].verbalLevel == null ? "" : body.Form[0].verbalLevel;
            this.state.fields["pointing"] = body.Form[0].pointing == null ? "" : body.Form[0].pointing;
            this.state.fields["signLanguage"] = body.Form[0].signLanguage == null ? "" : body.Form[0].signLanguage;
            this.state.fields["typeOfSignLanguage"] = body.Form[0].typeOfSignLanguage == null ? "" : body.Form[0].typeOfSignLanguage;
            this.state.fields["numberOfSigns"] = body.Form[0].numberOfSigns == null ? "" : body.Form[0].numberOfSigns;
            this.state.fields["communicationDevice"] = body.Form[0].communicationDevice == null ? "" : body.Form[0].communicationDevice;
            this.state.fields["nameOfDevice"] = body.Form[0].nameOfDevice == null ? "" : body.Form[0].nameOfDevice;
            this.state.fields["deviceIndependenceLevel"] = body.Form[0].deviceIndependenceLevel == null ? "" : body.Form[0].deviceIndependenceLevel;
            this.state.fields["communicationBinder"] = body.Form[0].communicationBinder == null ? "" : body.Form[0].communicationBinder;
            this.state.fields["binderIndependenceLevel"] = body.Form[0].binderIndependenceLevel == null ? "" : body.Form[0].binderIndependenceLevel;
            this.state.fields["otherCommunicationMethod"] = body.Form[0].otherCommunicationMethod == null ? "" : body.Form[0].otherCommunicationMethod;
            this.state.fields["explainOtherCommunication"] = body.Form[0].explainOtherCommunication == null ? "" : body.Form[0].explainOtherCommunication;
            this.state.fields["communicationIssue1"] = body.Form[0].communicationIssue1 == null ? "" : body.Form[0].communicationIssue1;
            this.state.fields["communicationIssue2"] = body.Form[0].communicationIssue2 == null ? "" : body.Form[0].communicationIssue2;
            this.state.fields["communicationIssue3"] = body.Form[0].communicationIssue3 == null ? "" : body.Form[0].communicationIssue3;
            this.state.fields["languageAtHome"] = body.Form[0].languageAtHome == null ? "" : body.Form[0].languageAtHome;
            this.state.fields["otherLanguages"] = body.Form[0].otherLanguages == null ? "" : body.Form[0].otherLanguages;
            this.state.fields["section8Comments"] = body.Form[0].section8Comments == null ? "" : body.Form[0].section8Comments;
            this.state.fields["behavioralGoalYes"] = body.Form[0].behavioralGoalYes == null ? "" : body.Form[0].behavioralGoalYes;
            this.state.fields["behavioralGoalYesExplain"] = body.Form[0].behavioralGoalYesExplain == null ? "" : body.Form[0].behavioralGoalYesExplain;
            this.state.fields["behavioralGoalNo"] = body.Form[0].behavioralGoalNo == null ? "" : body.Form[0].behavioralGoalNo;
            this.state.fields["schoolConcentration"] = body.Form[0].schoolConcentration == null ? "" : body.Form[0].schoolConcentration;
            this.state.fields["schoolConcentrationCurrent"] = body.Form[0].schoolConcentrationCurrent == null ? "" : body.Form[0].schoolConcentrationCurrent;
            this.state.fields["schoolConcentrationTypical"] = body.Form[0].schoolConcentrationTypical == null ? "" : body.Form[0].schoolConcentrationTypical;
            this.state.fields["schoolConcentrationLast"] = body.Form[0].schoolConcentrationLast == null ? "" : body.Form[0].schoolConcentrationLast;
            this.state.fields["schoolConcentrationLocation"] = body.Form[0].schoolConcentrationLocation == null ? "" : body.Form[0].schoolConcentrationLocation;
            this.state.fields["schoolConcentrationPrecursors"] = body.Form[0].schoolConcentrationPrecursors == null ? "" : body.Form[0].schoolConcentrationPrecursors;
            this.state.fields["schoolConcentrationHandleBehaviors"] = body.Form[0].schoolConcentrationHandleBehaviors == null ? "" : body.Form[0].schoolConcentrationHandleBehaviors;
            this.state.fields["socialAnxiety"] = body.Form[0].socialAnxiety == null ? "" : body.Form[0].socialAnxiety;
            this.state.fields["socialAnxietyCurrent"] = body.Form[0].socialAnxietyCurrent == null ? "" : body.Form[0].socialAnxietyCurrent;
            this.state.fields["socialAnxietyTypical"] = body.Form[0].socialAnxietyTypical == null ? "" : body.Form[0].socialAnxietyTypical;
            this.state.fields["socialAnxietyLast"] = body.Form[0].socialAnxietyLast == null ? "" : body.Form[0].socialAnxietyLast;
            this.state.fields["socialAnxietyLocation"] = body.Form[0].socialAnxietyLocation == null ? "" : body.Form[0].socialAnxietyLocation;
            this.state.fields["socialAnxietyPrecursors"] = body.Form[0].socialAnxietyPrecursors == null ? "" : body.Form[0].socialAnxietyPrecursors;
            this.state.fields["socialAnxietyHandleBehavior"] = body.Form[0].socialAnxietyHandleBehavior == null ? "" : body.Form[0].socialAnxietyHandleBehavior;
            this.state.fields["lowGrades"] = body.Form[0].lowGrades == null ? "" : body.Form[0].lowGrades;
            this.state.fields["lowGradesTypical"] = body.Form[0].lowGradesTypical == null ? "" : body.Form[0].lowGradesTypical;
            this.state.fields["lowGradesLast"] = body.Form[0].lowGradesLast == null ? "" : body.Form[0].lowGradesLast;
            this.state.fields["lowGradesLocation"] = body.Form[0].lowGradesLocation == null ? "" : body.Form[0].lowGradesLocation;
            this.state.fields["lowGradesPrecursors"] = body.Form[0].lowGradesPrecursors == null ? "" : body.Form[0].lowGradesPrecursors;
            this.state.fields["lowGradesHandleBehavior"] = body.Form[0].lowGradesHandleBehavior == null ? "" : body.Form[0].lowGradesHandleBehavior;
            this.state.fields["makingFriends"] = body.Form[0].makingFriends == null ? "" : body.Form[0].makingFriends;
            this.state.fields["makingFriendsCurrent"] = body.Form[0].makingFriendsCurrent == null ? "" : body.Form[0].makingFriendsCurrent;
            this.state.fields["makingFriendsTypical"] = body.Form[0].makingFriendsTypical == null ? "" : body.Form[0].makingFriendsTypical;
            this.state.fields["makingFriendsLocation"] = body.Form[0].makingFriendsLocation == null ? "" : body.Form[0].makingFriendsLocation;
            this.state.fields["makingFriendsPrecursors"] = body.Form[0].makingFriendsPrecursors == null ? "" : body.Form[0].makingFriendsPrecursors;
            this.state.fields["makingFriendsHandleBehavior"] = body.Form[0].makingFriendsHandleBehavior == null ? "" : body.Form[0].makingFriendsHandleBehavior;
            this.state.fields["oppositionalBehavior"] = body.Form[0].oppositionalBehavior == null ? "" : body.Form[0].oppositionalBehavior;
            this.state.fields["oppositionalBehaviorCurrent"] = body.Form[0].oppositionalBehaviorCurrent == null ? "" : body.Form[0].oppositionalBehaviorCurrent;
            this.state.fields["oppositionalBehaviorTypical"] = body.Form[0].oppositionalBehaviorTypical == null ? "" : body.Form[0].oppositionalBehaviorTypical;
            this.state.fields["oppositionalBehaviorLast"] = body.Form[0].oppositionalBehaviorLast == null ? "" : body.Form[0].oppositionalBehaviorLast;
            this.state.fields["oppositionalBehaviorLocation"] = body.Form[0].oppositionalBehaviorLocation == null ? "" : body.Form[0].oppositionalBehaviorLocation;
            this.state.fields["oppositionalBehaviorPrecursors"] = body.Form[0].oppositionalBehaviorPrecursors == null ? "" : body.Form[0].oppositionalBehaviorPrecursors;
            this.state.fields["oppositionalBehaviorHandleBehavior"] = body.Form[0].oppositionalBehaviorHandleBehavior == null ? "" : body.Form[0].oppositionalBehaviorHandleBehavior;
            this.state.fields["problemsWithAuthority"] = body.Form[0].problemsWithAuthority == null ? "" : body.Form[0].problemsWithAuthority;
            this.state.fields["problemsWithAuthorityCurrent"] = body.Form[0].problemsWithAuthorityCurrent == null ? "" : body.Form[0].problemsWithAuthorityCurrent;
            this.state.fields["problemsWithAuthorityTypical"] = body.Form[0].problemsWithAuthorityTypical == null ? "" : body.Form[0].problemsWithAuthorityTypical;
            this.state.fields["problemsWithAuthorityLast"] = body.Form[0].problemsWithAuthorityLast == null ? "" : body.Form[0].problemsWithAuthorityLast;
            this.state.fields["problemsWithAuthorityLocation"] = body.Form[0].problemsWithAuthorityLocation == null ? "" : body.Form[0].problemsWithAuthorityLocation;
            this.state.fields["problemsWithAuthorityPrecursors"] = body.Form[0].problemsWithAuthorityPrecursors == null ? "" : body.Form[0].problemsWithAuthorityPrecursors;
            this.state.fields["problemsWithAuthorityHandleBehavior"] = body.Form[0].problemsWithAuthorityHandleBehavior == null ? "" : body.Form[0].problemsWithAuthorityHandleBehavior;
            this.state.fields["sociallyIsolated"] = body.Form[0].sociallyIsolated == null ? "" : body.Form[0].sociallyIsolated;
            this.state.fields["sociallyIsolatedCurrent"] = body.Form[0].sociallyIsolatedCurrent == null ? "" : body.Form[0].sociallyIsolatedCurrent;
            this.state.fields["sociallyIsolatedTypical"] = body.Form[0].sociallyIsolatedTypical == null ? "" : body.Form[0].sociallyIsolatedTypical;
            this.state.fields["sociallyIsolatedLast"] = body.Form[0].sociallyIsolatedLast == null ? "" : body.Form[0].sociallyIsolatedLast;
            this.state.fields["sociallyIsolatedLocation"] = body.Form[0].sociallyIsolatedLocation == null ? "" : body.Form[0].sociallyIsolatedLocation;
            this.state.fields["sociallyIsolatedPrecursors"] = body.Form[0].sociallyIsolatedPrecursors == null ? "" : body.Form[0].sociallyIsolatedPrecursors;
            this.state.fields["sociallyIsolatedHandleBehavior"] = body.Form[0].sociallyIsolatedHandleBehavior == null ? "" : body.Form[0].sociallyIsolatedHandleBehavior;
            this.state.fields["aggressiveBehavior"] = body.Form[0].aggressiveBehavior == null ? "" : body.Form[0].aggressiveBehavior;
            this.state.fields["aggressiveBehaviorCurrent"] = body.Form[0].aggressiveBehaviorCurrent == null ? "" : body.Form[0].aggressiveBehaviorCurrent;
            this.state.fields["aggressiveBehaviorTypical"] = body.Form[0].aggressiveBehaviorTypical == null ? "" : body.Form[0].aggressiveBehaviorTypical;
            this.state.fields["aggressiveBehaviorLast"] = body.Form[0].aggressiveBehaviorLast == null ? "" : body.Form[0].aggressiveBehaviorLast;
            this.state.fields["aggressiveBehaviorLocation"] = body.Form[0].aggressiveBehaviorLocation == null ? "" : body.Form[0].aggressiveBehaviorLocation;
            this.state.fields["aggressiveBehaviorPrecursors"] = body.Form[0].aggressiveBehaviorPrecursors == null ? "" : body.Form[0].aggressiveBehaviorPrecursors;
            this.state.fields["aggressiveBehaviorHandleBehavior"] = body.Form[0].aggressiveBehaviorHandleBehavior == null ? "" : body.Form[0].aggressiveBehaviorHandleBehavior;
            this.state.fields["stressFamily"] = body.Form[0].stressFamily == null ? "" : body.Form[0].stressFamily;
            this.state.fields["stressFamilyCurrent"] = body.Form[0].stressFamilyCurrent == null ? "" : body.Form[0].stressFamilyCurrent;
            this.state.fields["stressFamilyTypical"] = body.Form[0].stressFamilyTypical == null ? "" : body.Form[0].stressFamilyTypical;
            this.state.fields["stressFamilyLast"] = body.Form[0].stressFamilyLast == null ? "" : body.Form[0].stressFamilyLast;
            this.state.fields["stressFamilyLocation"] = body.Form[0].stressFamilyLocation == null ? "" : body.Form[0].stressFamilyLocation;
            this.state.fields["stressFamilyPrecursors"] = body.Form[0].stressFamilyPrecursors == null ? "" : body.Form[0].stressFamilyPrecursors;
            this.state.fields["stressFamilyHandleBehavior"] = body.Form[0].stressFamilyHandleBehavior == null ? "" : body.Form[0].stressFamilyHandleBehavior;
            this.state.fields["generalizedAnxiety"] = body.Form[0].generalizedAnxiety == null ? "" : body.Form[0].generalizedAnxiety;
            this.state.fields["generalizedAnxietyCurrent"] = body.Form[0].generalizedAnxietyCurrent == null ? "" : body.Form[0].generalizedAnxietyCurrent;
            this.state.fields["generalizedAnxietyTypical"] = body.Form[0].generalizedAnxietyTypical == null ? "" : body.Form[0].generalizedAnxietyTypical;
            this.state.fields["generalizedAnxietyLast"] = body.Form[0].generalizedAnxietyLast == null ? "" : body.Form[0].generalizedAnxietyLast;
            this.state.fields["generalizedAnxietyLocation"] = body.Form[0].generalizedAnxietyLocation == null ? "" : body.Form[0].generalizedAnxietyLocation;
            this.state.fields["generalizedAnxietyPrecursors"] = body.Form[0].generalizedAnxietyPrecursors == null ? "" : body.Form[0].generalizedAnxietyPrecursors;
            this.state.fields["generalizedAnxietyHandleBehavio"] = body.Form[0].generalizedAnxietyHandleBehavio == null ? "" : body.Form[0].generalizedAnxietyHandleBehavio;
            this.state.fields["phobias"] = body.Form[0].phobias == null ? "" : body.Form[0].phobias;
            this.state.fields["phobiasExplain"] = body.Form[0].phobiasExplain == null ? "" : body.Form[0].phobiasExplain;
            this.state.fields["phobiasCurrent"] = body.Form[0].phobiasCurrent == null ? "" : body.Form[0].phobiasCurrent;
            this.state.fields["phobiasTypical"] = body.Form[0].phobiasTypical == null ? "" : body.Form[0].phobiasTypical;
            this.state.fields["phobiasLast"] = body.Form[0].phobiasLast == null ? "" : body.Form[0].phobiasLast;
            this.state.fields["phobiasLocation"] = body.Form[0].phobiasLocation == null ? "" : body.Form[0].phobiasLocation;
            this.state.fields["phobiasPrecursors"] = body.Form[0].phobiasPrecursors == null ? "" : body.Form[0].phobiasPrecursors;
            this.state.fields["phobiasHandleBehavior"] = body.Form[0].phobiasHandleBehavior == null ? "" : body.Form[0].phobiasHandleBehavior;
            this.state.fields["hyperactive"] = body.Form[0].hyperactive == null ? "" : body.Form[0].hyperactive;
            this.state.fields["hyperactiveCurrent"] = body.Form[0].hyperactiveCurrent == null ? "" : body.Form[0].hyperactiveCurrent;
            this.state.fields["hyperactiveTypical"] = body.Form[0].hyperactiveTypical == null ? "" : body.Form[0].hyperactiveTypical;
            this.state.fields["hyperactiveLast"] = body.Form[0].hyperactiveLast == null ? "" : body.Form[0].hyperactiveLast;
            this.state.fields["hyperactiveLocation"] = body.Form[0].hyperactiveLocation == null ? "" : body.Form[0].hyperactiveLocation;
            this.state.fields["hyperactivePrecursors"] = body.Form[0].hyperactivePrecursors == null ? "" : body.Form[0].hyperactivePrecursors;
            this.state.fields["hyperactiveHandleBehavior"] = body.Form[0].hyperactiveHandleBehavior == null ? "" : body.Form[0].hyperactiveHandleBehavior;
            this.state.fields["sensoryProblems"] = body.Form[0].sensoryProblems == null ? "" : body.Form[0].sensoryProblems;
            this.state.fields["sensoryProblemsCurrent"] = body.Form[0].sensoryProblemsCurrent == null ? "" : body.Form[0].sensoryProblemsCurrent;
            this.state.fields["sensoryProblemsTypical"] = body.Form[0].sensoryProblemsTypical == null ? "" : body.Form[0].sensoryProblemsTypical;
            this.state.fields["sensoryProblemsLast"] = body.Form[0].sensoryProblemsLast == null ? "" : body.Form[0].sensoryProblemsLast;
            this.state.fields["sensoryProblemsLocation"] = body.Form[0].sensoryProblemsLocation == null ? "" : body.Form[0].sensoryProblemsLocation;
            this.state.fields["sensoryProblemsPrecursors"] = body.Form[0].sensoryProblemsPrecursors == null ? "" : body.Form[0].sensoryProblemsPrecursors;
            this.state.fields["sensoryProblemsHandleBehavior"] = body.Form[0].sensoryProblemsHandleBehavior == null ? "" : body.Form[0].sensoryProblemsHandleBehavior;
            this.state.fields["problemsEating"] = body.Form[0].problemsEating == null ? "" : body.Form[0].problemsEating;
            this.state.fields["problemsEatingCurrent"] = body.Form[0].problemsEatingCurrent == null ? "" : body.Form[0].problemsEatingCurrent;
            this.state.fields["problemsEatingTypical"] = body.Form[0].problemsEatingTypical == null ? "" : body.Form[0].problemsEatingTypical;
            this.state.fields["problemsEatingLast"] = body.Form[0].problemsEatingLast == null ? "" : body.Form[0].problemsEatingLast;
            this.state.fields["problemsEatingLocation"] = body.Form[0].problemsEatingLocation == null ? "" : body.Form[0].problemsEatingLocation;
            this.state.fields["problemsEatingPrecursors"] = body.Form[0].problemsEatingPrecursors == null ? "" : body.Form[0].problemsEatingPrecursors;
            this.state.fields["problemsEatingHandleBehavior"] = body.Form[0].problemsEatingHandleBehavior == null ? "" : body.Form[0].problemsEatingHandleBehavior;
            this.state.fields["wettingAccidents"] = body.Form[0].wettingAccidents == null ? "" : body.Form[0].wettingAccidents;
            this.state.fields["wettingAccidentsCurrent"] = body.Form[0].wettingAccidentsCurrent == null ? "" : body.Form[0].wettingAccidentsCurrent;
            this.state.fields["wettingAccidentsTypical"] = body.Form[0].wettingAccidentsTypical == null ? "" : body.Form[0].wettingAccidentsTypical;
            this.state.fields["wettingAccidentsLast"] = body.Form[0].wettingAccidentsLast == null ? "" : body.Form[0].wettingAccidentsLast;
            this.state.fields["wettingAccidentsLocation"] = body.Form[0].wettingAccidentsLocation == null ? "" : body.Form[0].wettingAccidentsLocation;
            this.state.fields["wettingAccidentsPrecursors"] = body.Form[0].wettingAccidentsPrecursors == null ? "" : body.Form[0].wettingAccidentsPrecursors;
            this.state.fields["wettingAccidentsHandleBehavior"] = body.Form[0].wettingAccidentsHandleBehavior == null ? "" : body.Form[0].wettingAccidentsHandleBehavior;
            this.state.fields["vocalTics"] = body.Form[0].vocalTics == null ? "" : body.Form[0].vocalTics;
            this.state.fields["vocalTicsCurrent"] = body.Form[0].vocalTicsCurrent == null ? "" : body.Form[0].vocalTicsCurrent;
            this.state.fields["vocalTicsTypical"] = body.Form[0].vocalTicsTypical == null ? "" : body.Form[0].vocalTicsTypical;
            this.state.fields["vocalTicsLast"] = body.Form[0].vocalTicsLast == null ? "" : body.Form[0].vocalTicsLast;
            this.state.fields["vocalTicsLocation"] = body.Form[0].vocalTicsLocation == null ? "" : body.Form[0].vocalTicsLocation;
            this.state.fields["vocalTicsPrecursors"] = body.Form[0].vocalTicsPrecursors == null ? "" : body.Form[0].vocalTicsPrecursors;
            this.state.fields["vocalTicsHandleBehavior"] = body.Form[0].vocalTicsHandleBehavior == null ? "" : body.Form[0].vocalTicsHandleBehavior;
            this.state.fields["wakingUp"] = body.Form[0].wakingUp == null ? "" : body.Form[0].wakingUp;
            this.state.fields["wakingUpCurrent"] = body.Form[0].wakingUpCurrent == null ? "" : body.Form[0].wakingUpCurrent;
            this.state.fields["wakingUpTypical"] = body.Form[0].wakingUpTypical == null ? "" : body.Form[0].wakingUpTypical;
            this.state.fields["wakingUpLast"] = body.Form[0].wakingUpLast == null ? "" : body.Form[0].wakingUpLast;
            this.state.fields["wakingUpLocation"] = body.Form[0].wakingUpLocation == null ? "" : body.Form[0].wakingUpLocation;
            this.state.fields["wakingUpPrecursors"] = body.Form[0].wakingUpPrecursors == null ? "" : body.Form[0].wakingUpPrecursors;
            this.state.fields["wakingUpHandleBehavior"] = body.Form[0].wakingUpHandleBehavior == null ? "" : body.Form[0].wakingUpHandleBehavior;
            this.state.fields["nightmares"] = body.Form[0].nightmares == null ? "" : body.Form[0].nightmares;
            this.state.fields["nightmaresCurrent"] = body.Form[0].nightmaresCurrent == null ? "" : body.Form[0].nightmaresCurrent;
            this.state.fields["nightmaresTypical"] = body.Form[0].nightmaresTypical == null ? "" : body.Form[0].nightmaresTypical;
            this.state.fields["nightmaresLast"] = body.Form[0].nightmaresLast == null ? "" : body.Form[0].nightmaresLast;
            this.state.fields["nightmaresLocation"] = body.Form[0].nightmaresLocation == null ? "" : body.Form[0].nightmaresLocation;
            this.state.fields["nightmaresPrecursors"] = body.Form[0].nightmaresPrecursors == null ? "" : body.Form[0].nightmaresPrecursors;
            this.state.fields["nightmaresHandleBehavior"] = body.Form[0].nightmaresHandleBehavior == null ? "" : body.Form[0].nightmaresHandleBehavior;
            this.state.fields["problemsSleeping"] = body.Form[0].problemsSleeping == null ? "" : body.Form[0].problemsSleeping;
            this.state.fields["problemsSleepingCurrent"] = body.Form[0].problemsSleepingCurrent == null ? "" : body.Form[0].problemsSleepingCurrent;
            this.state.fields["problemsSleepingTypical"] = body.Form[0].problemsSleepingTypical == null ? "" : body.Form[0].problemsSleepingTypical;
            this.state.fields["problemsSleepingLast"] = body.Form[0].problemsSleepingLast == null ? "" : body.Form[0].problemsSleepingLast;
            this.state.fields["problemsSleepingLocation"] = body.Form[0].problemsSleepingLocation == null ? "" : body.Form[0].problemsSleepingLocation;
            this.state.fields["problemsSleepingPrecursors"] = body.Form[0].problemsSleepingPrecursors == null ? "" : body.Form[0].problemsSleepingPrecursors;
            this.state.fields["problemsSleepingHandleBehavior"] = body.Form[0].problemsSleepingHandleBehavior == null ? "" : body.Form[0].problemsSleepingHandleBehavior;
            this.state.fields["tiredness"] = body.Form[0].tiredness == null ? "" : body.Form[0].tiredness;
            this.state.fields["tirednessCurrent"] = body.Form[0].tirednessCurrent == null ? "" : body.Form[0].tirednessCurrent;
            this.state.fields["tirednessTypical"] = body.Form[0].tirednessTypical == null ? "" : body.Form[0].tirednessTypical;
            this.state.fields["tirednessLast"] = body.Form[0].tirednessLast == null ? "" : body.Form[0].tirednessLast;
            this.state.fields["tirednessLocation"] = body.Form[0].tirednessLocation == null ? "" : body.Form[0].tirednessLocation;
            this.state.fields["tirednessPrecurosors"] = body.Form[0].tirednessPrecurosors == null ? "" : body.Form[0].tirednessPrecurosors;
            this.state.fields["tirednessHandleBehavior"] = body.Form[0].tirednessHandleBehavior == null ? "" : body.Form[0].tirednessHandleBehavior;
            this.state.fields["sadness"] = body.Form[0].sadness == null ? "" : body.Form[0].sadness;
            this.state.fields["sadnessCurrent"] = body.Form[0].sadnessCurrent == null ? "" : body.Form[0].sadnessCurrent;
            this.state.fields["sadnessTypical"] = body.Form[0].sadnessTypical == null ? "" : body.Form[0].sadnessTypical;
            this.state.fields["sadnessLast"] = body.Form[0].sadnessLast == null ? "" : body.Form[0].sadnessLast;
            this.state.fields["sadnessLocation"] = body.Form[0].sadnessLocation == null ? "" : body.Form[0].sadnessLocation;
            this.state.fields["sadnessPrecursors"] = body.Form[0].sadnessPrecursors == null ? "" : body.Form[0].sadnessPrecursors;
            this.state.fields["sadnessHandleBehavior"] = body.Form[0].sadnessHandleBehavior == null ? "" : body.Form[0].sadnessHandleBehavior;
            this.state.fields["impulsive"] = body.Form[0].impulsive == null ? "" : body.Form[0].impulsive;
            this.state.fields["impulsiveCurrent"] = body.Form[0].impulsiveCurrent == null ? "" : body.Form[0].impulsiveCurrent;
            this.state.fields["impulsiveTypical"] = body.Form[0].impulsiveTypical == null ? "" : body.Form[0].impulsiveTypical;
            this.state.fields["impulsiveLocation"] = body.Form[0].impulsiveLocation == null ? "" : body.Form[0].impulsiveLocation;
            this.state.fields["impulsivePrecursors"] = body.Form[0].impulsivePrecursors == null ? "" : body.Form[0].impulsivePrecursors;
            this.state.fields["impulsiveHandleBehavior"] = body.Form[0].impulsiveHandleBehavior == null ? "" : body.Form[0].impulsiveHandleBehavior;
            this.state.fields["noncompliant"] = body.Form[0].noncompliant == null ? "" : body.Form[0].noncompliant;
            this.state.fields["noncompliantCurrent"] = body.Form[0].noncompliantCurrent == null ? "" : body.Form[0].noncompliantCurrent;
            this.state.fields["noncompliantTypcial"] = body.Form[0].noncompliantTypcial == null ? "" : body.Form[0].noncompliantTypcial;
            this.state.fields["noncompliantLast"] = body.Form[0].noncompliantLast == null ? "" : body.Form[0].noncompliantLast;
            this.state.fields["noncompliantLocation"] = body.Form[0].noncompliantLocation == null ? "" : body.Form[0].noncompliantLocation;
            this.state.fields["noncompliantPrecursors"] = body.Form[0].noncompliantPrecursors == null ? "" : body.Form[0].noncompliantPrecursors;
            this.state.fields["noncompliantHandleBeahvior"] = body.Form[0].noncompliantHandleBeahvior == null ? "" : body.Form[0].noncompliantHandleBeahvior;
            this.state.fields["tantrums"] = body.Form[0].tantrums == null ? "" : body.Form[0].tantrums;
            this.state.fields["tantrumsCurrent"] = body.Form[0].tantrumsCurrent == null ? "" : body.Form[0].tantrumsCurrent;
            this.state.fields["tantrumsTypical"] = body.Form[0].tantrumsTypical == null ? "" : body.Form[0].tantrumsTypical;
            this.state.fields["tantrumsLast"] = body.Form[0].tantrumsLast == null ? "" : body.Form[0].tantrumsLast;
            this.state.fields["tantrumsLocation"] = body.Form[0].tantrumsLocation == null ? "" : body.Form[0].tantrumsLocation;
            this.state.fields["tantrumsPrecursors"] = body.Form[0].tantrumsPrecursors == null ? "" : body.Form[0].tantrumsPrecursors;
            this.state.fields["tantrumsHandleBehavior"] = body.Form[0].tantrumsHandleBehavior == null ? "" : body.Form[0].tantrumsHandleBehavior;
            this.state.fields["injuryBehavior"] = body.Form[0].injuryBehavior == null ? "" : body.Form[0].injuryBehavior;
            this.state.fields["injuryBehaviorCurrent"] = body.Form[0].injuryBehaviorCurrent == null ? "" : body.Form[0].injuryBehaviorCurrent;
            this.state.fields["injuryBehaviorTypical"] = body.Form[0].injuryBehaviorTypical == null ? "" : body.Form[0].injuryBehaviorTypical;
            this.state.fields["injuryBehaviorLast"] = body.Form[0].injuryBehaviorLast == null ? "" : body.Form[0].injuryBehaviorLast;
            this.state.fields["injuryBehaviorLocation"] = body.Form[0].injuryBehaviorLocation == null ? "" : body.Form[0].injuryBehaviorLocation;
            this.state.fields["injuryBehaviorPrecursors"] = body.Form[0].injuryBehaviorPrecursors == null ? "" : body.Form[0].injuryBehaviorPrecursors;
            this.state.fields["injuryBehaviorHandleBehavior"] = body.Form[0].injuryBehaviorHandleBehavior == null ? "" : body.Form[0].injuryBehaviorHandleBehavior;
            this.state.fields["temperProblem"] = body.Form[0].temperProblem == null ? "" : body.Form[0].temperProblem;
            this.state.fields["temperProblemCurrent"] = body.Form[0].temperProblemCurrent == null ? "" : body.Form[0].temperProblemCurrent;
            this.state.fields["temperProblemTypical"] = body.Form[0].temperProblemTypical == null ? "" : body.Form[0].temperProblemTypical;
            this.state.fields["temperProblemLast"] = body.Form[0].temperProblemLast == null ? "" : body.Form[0].temperProblemLast;
            this.state.fields["temperProblemLocation"] = body.Form[0].temperProblemLocation == null ? "" : body.Form[0].temperProblemLocation;
            this.state.fields["temperProblemPrecursors"] = body.Form[0].temperProblemPrecursors == null ? "" : body.Form[0].temperProblemPrecursors;
            this.state.fields["temperProblemHandleBehavior"] = body.Form[0].temperProblemHandleBehavior == null ? "" : body.Form[0].temperProblemHandleBehavior;
            this.state.fields["darting"] = body.Form[0].darting == null ? "" : body.Form[0].darting;
            this.state.fields["dartingCurrent"] = body.Form[0].dartingCurrent == null ? "" : body.Form[0].dartingCurrent;
            this.state.fields["dartingTypical"] = body.Form[0].dartingTypical == null ? "" : body.Form[0].dartingTypical;
            this.state.fields["dartingLast"] = body.Form[0].dartingLast == null ? "" : body.Form[0].dartingLast;
            this.state.fields["dartingLocation"] = body.Form[0].dartingLocation == null ? "" : body.Form[0].dartingLocation;
            this.state.fields["dartingPrecursors"] = body.Form[0].dartingPrecursors == null ? "" : body.Form[0].dartingPrecursors;
            this.state.fields["dartingHandleBehavior"] = body.Form[0].dartingHandleBehavior == null ? "" : body.Form[0].dartingHandleBehavior;
            this.state.fields["rigid"] = body.Form[0].rigid == null ? "" : body.Form[0].rigid;
            this.state.fields["rigidCurrent"] = body.Form[0].rigidCurrent == null ? "" : body.Form[0].rigidCurrent;
            this.state.fields["rigidTypical"] = body.Form[0].rigidTypical == null ? "" : body.Form[0].rigidTypical;
            this.state.fields["rigidLast"] = body.Form[0].rigidLast == null ? "" : body.Form[0].rigidLast;
            this.state.fields["rigidLocation"] = body.Form[0].rigidLocation == null ? "" : body.Form[0].rigidLocation;
            this.state.fields["rigidPrecursors"] = body.Form[0].rigidPrecursors == null ? "" : body.Form[0].rigidPrecursors;
            this.state.fields["rigidHandleBehavior"] = body.Form[0].rigidHandleBehavior == null ? "" : body.Form[0].rigidHandleBehavior;
            this.state.fields["abuse"] = body.Form[0].abuse == null ? "" : body.Form[0].abuse;
            this.state.fields["abuseCurrent"] = body.Form[0].abuseCurrent == null ? "" : body.Form[0].abuseCurrent;
            this.state.fields["abuseTypical"] = body.Form[0].abuseTypical == null ? "" : body.Form[0].abuseTypical;
            this.state.fields["abuseLast"] = body.Form[0].abuseLast == null ? "" : body.Form[0].abuseLast;
            this.state.fields["abuseCurrentLocation"] = body.Form[0].abuseCurrentLocation == null ? "" : body.Form[0].abuseCurrentLocation;
            this.state.fields["abusePrecursors"] = body.Form[0].abusePrecursors == null ? "" : body.Form[0].abusePrecursors;
            this.state.fields["abuseHandleBehavior"] = body.Form[0].abuseHandleBehavior == null ? "" : body.Form[0].abuseHandleBehavior;
            this.state.fields["physicalAssistanceQuestion"] = body.Form[0].physicalAssistanceQuestion == null ? "" : body.Form[0].physicalAssistanceQuestion;
            this.state.fields["physicalAssistanceYes"] = body.Form[0].physicalAssistanceYes == null ? "" : body.Form[0].physicalAssistanceYes;
            this.state.fields["physicalAssistanceYesExplain"] = body.Form[0].physicalAssistanceYesExplain == null ? "" : body.Form[0].physicalAssistanceYesExplain;
            this.state.fields["physicalAssistanceNo"] = body.Form[0].physicalAssistanceNo == null ? "" : body.Form[0].physicalAssistanceNo;
            this.state.fields["verbalDirectivesCheckYes"] = body.Form[0].verbalDirectivesCheckYes == null ? "" : body.Form[0].verbalDirectivesCheckYes;
            this.state.fields["verbalDirectivesYesExplain"] = body.Form[0].verbalDirectivesYesExplain == null ? "" : body.Form[0].verbalDirectivesYesExplain;
            this.state.fields["verbalDirectivesCheckNo"] = body.Form[0].verbalDirectivesCheckNo == null ? "" : body.Form[0].verbalDirectivesCheckNo;
            this.state.fields["currentEventsCheckYes"] = body.Form[0].currentEventsCheckYes == null ? "" : body.Form[0].currentEventsCheckYes;
            this.state.fields["currentEventsExplain"] = body.Form[0].currentEventsExplain == null ? "" : body.Form[0].currentEventsExplain;
            this.state.fields["currentEventsCheckNo"] = body.Form[0].currentEventsCheckNo == null ? "" : body.Form[0].currentEventsCheckNo;
            this.state.fields["positiveBehavior"] = body.Form[0].positiveBehavior == null ? "" : body.Form[0].positiveBehavior;
            this.state.fields["assistanceRequired"] = body.Form[0].assistanceRequired == null ? "" : body.Form[0].assistanceRequired;
            this.state.fields["soothing"] = body.Form[0].soothing == null ? "" : body.Form[0].soothing;
            this.state.fields["section9Comments"] = body.Form[0].section9Comments == null ? "" : body.Form[0].section9Comments;
            this.state.fields["morning"] = body.Form[0].morning == null ? "" : body.Form[0].morning;
            this.state.fields["afternoon"] = body.Form[0].afternoon == null ? "" : body.Form[0].afternoon;
            this.state.fields["evening"] = body.Form[0].evening == null ? "" : body.Form[0].evening;
            this.state.fields["downtime"] = body.Form[0].downtime == null ? "" : body.Form[0].downtime;
            this.state.fields["homeExpectation"] = body.Form[0].homeExpectation == null ? "" : body.Form[0].homeExpectation;
            this.state.fields["screentime"] = body.Form[0].screentime == null ? "" : body.Form[0].screentime;
            this.state.fields["chores"] = body.Form[0].chores == null ? "" : body.Form[0].chores;
            this.state.fields["physicalActivity"] = body.Form[0].physicalActivity == null ? "" : body.Form[0].physicalActivity;
            this.state.fields["section10Comments"] = body.Form[0].section10Comments == null ? "" : body.Form[0].section10Comments;
            this.state.fields["challengesWithUnknownProvider"] = body.Form[0].challengesWithUnknownProvider == null ? "" : body.Form[0].challengesWithUnknownProvider;
            this.state.fields["concernsWithRoom"] = body.Form[0].concernsWithRoom == null ? "" : body.Form[0].concernsWithRoom;
            this.state.fields["concernsWithCubbies"] = body.Form[0].concernsWithCubbies == null ? "" : body.Form[0].concernsWithCubbies;
            this.state.fields["signsOfToilet"] = body.Form[0].signsOfToilet == null ? "" : body.Form[0].signsOfToilet;
            this.state.fields["amountOfRestroomUse"] = body.Form[0].amountOfRestroomUse == null ? "" : body.Form[0].amountOfRestroomUse;
            this.state.fields["restroomTerminology"] = body.Form[0].restroomTerminology == null ? "" : body.Form[0].restroomTerminology;
            this.state.fields["restroomIndependence"] = body.Form[0].restroomIndependence == null ? "" : body.Form[0].restroomIndependence;
            this.state.fields["snackDuringEval"] = body.Form[0].snackDuringEval == null ? "" : body.Form[0].snackDuringEval;
            this.state.fields["techniquesDuringEating"] = body.Form[0].techniquesDuringEating == null ? "" : body.Form[0].techniquesDuringEating;
            this.state.fields["eatingIndependence"] = body.Form[0].eatingIndependence == null ? "" : body.Form[0].eatingIndependence;
            this.state.fields["medicationDuringEval"] = body.Form[0].medicationDuringEval == null ? "" : body.Form[0].medicationDuringEval;
            this.state.fields["conditionsWithRescueMedication"] = body.Form[0].conditionsWithRescueMedication == null ? "" : body.Form[0].conditionsWithRescueMedication;
            this.state.fields["allergicReaction"] = body.Form[0].allergicReaction == null ? "" : body.Form[0].allergicReaction;
            this.state.fields["seizureCheckYes"] = body.Form[0].seizureCheckYes == null ? "" : body.Form[0].seizureCheckYes;
            this.state.fields["seizureCheckNo"] = body.Form[0].seizureCheckNo == null ? "" : body.Form[0].seizureCheckNo;
            this.state.fields["seizureHistory"] = body.Form[0].seizureHistory == null ? "" : body.Form[0].seizureHistory;
            this.state.fields["signsOfSeizure"] = body.Form[0].signsOfSeizure == null ? "" : body.Form[0].signsOfSeizure;
            this.state.fields["otherSeizureProtocol"] = body.Form[0].otherSeizureProtocol == null ? "" : body.Form[0].otherSeizureProtocol;
            this.state.fields["lastSeizure"] = body.Form[0].lastSeizure == null ? "" : body.Form[0].lastSeizure;
            this.state.fields["seizureFrequency"] = body.Form[0].seizureFrequency == null ? "" : body.Form[0].seizureFrequency;
            this.state.fields["section12Comments"] = body.Form[0].section12Comments == null ? "" : body.Form[0].section12Comments;
            this.state.fields["hearAboutJL"] = body.Form[0].hearAboutJL == null ? "" : body.Form[0].hearAboutJL;
            this.state.fields["goalsAndExpectations"] = body.Form[0].goalsAndExpectations == null ? "" : body.Form[0].goalsAndExpectations;
            this.state.fields["enrollmentAfterEval"] = body.Form[0].enrollmentAfterEval == null ? "" : body.Form[0].enrollmentAfterEval;
            this.state.fields["additionalInfoAboutChild"] = body.Form[0].additionalInfoAboutChild == null ? "" : body.Form[0].additionalInfoAboutChild;
            this.state.fields["consentCheck"] = body.Form[0].consentCheck == null ? "" : body.Form[0].consentCheck;
            this.state.fields["studentName"] = body.Form[0].studentName == null ? "" : body.Form[0].studentName;
            this.state.fields["parentName"] = body.Form[0].parentName == null ? "" : body.Form[0].parentName;
            this.state.fields["date"] = body.Form[0].date == null ? "" : body.Form[0].date;
            this.state.fields["section11Comments"] = body.Form[0].section11comments == null ? "" : body.Form[0].section11comments;
            this.state.fields["brace"] = body.Form[0].brace == null ? "" : body.Form[0].brace;
            this.state.fields["feedSupport"] = body.Form[0].feedSupport == null ? "" : body.Form[0].feedSupport;
            this.state.fields["toiletEquip"] = body.Form[0].toiletEquip == null ? "" : body.Form[0].toiletEquip;
            this.state.fields["mobilityEquip"] = body.Form[0].mobilityEquip == null ? "" : body.Form[0].mobilityEquip;
            this.state.fields["communicationEquip"] = body.Form[0].communicationEquip == null ? "" : body.Form[0].communicationEquip;
            this.state.fields["oxygenTank"] = body.Form[0].oxygenTank == null ? "" : body.Form[0].oxygenTank;
            this.state.fields["hearingDevice"] = body.Form[0].hearingDevice == null ? "" : body.Form[0].hearingDevice;
            this.state.fields["otherSupply"] = body.Form[0].otherSupply == null ? "" : body.Form[0].otherSupply;
        }
        return body;
    };

    postSection11ToDB() {
        var update = JSON.stringify(sec11InfoObj);
        var url = 'api/children/' + childID + '/forms/Section11';
        console.log("post section 11 url" + url);
        console.log("updated section 11 JSON");
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
    }

    fetchSection11FromDB = async () => {
        var url = 'api/children/' + childID + '/forms/Section11';
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
        console.log("fetch section 11 from db response");
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        if (body.Form.length > 0) {
            this.state.fields["g1SitNA"] = body.Form[0].g1SitNA == null ? "" : body.Form[0].g1SitNA;
            this.state.fields["g1SitPhysical"] = body.Form[0].g1SitPhysical == null ? "" : body.Form[0].g1SitPhysical;
            this.state.fields["g1SitVerbal"] = body.Form[0].g1SitVerbal == null ? "" : body.Form[0].g1SitVerbal;
            this.state.fields["g1SitInitiates"] = body.Form[0].g1SitInitiates == null ? "" : body.Form[0].g1SitInitiates;
            this.state.fields["g1AttendTaskLongNA"] = body.Form[0].g1AttendTaskLongNA == null ? "" : body.Form[0].g1AttendTaskLongNA;
            this.state.fields["g1AttendTaskLongPhysical"] = body.Form[0].g1AttendTaskLongPhysical == null ? "" : body.Form[0].g1AttendTaskLongPhysical;
            this.state.fields["g1AttendTaskLongVerbal"] = body.Form[0].g1AttendTaskLongVerbal == null ? "" : body.Form[0].g1AttendTaskLongVerbal;
            this.state.fields["g1AttendTaskLongInitiates"] = body.Form[0].g1AttendTaskLongInitiates == null ? "" : body.Form[0].g1AttendTaskLongInitiates;
            this.state.fields["g1AttendTaskShortNA"] = body.Form[0].g1AttendTaskShortNA == null ? "" : body.Form[0].g1AttendTaskShortNA;
            this.state.fields["g1AttendTaskShortPhysical"] = body.Form[0].g1AttendTaskShortPhysical == null ? "" : body.Form[0].g1AttendTaskShortPhysical;
            this.state.fields["g1AttendTaskShortVerbal"] = body.Form[0].g1AttendTaskShortVerbal == null ? "" : body.Form[0].g1AttendTaskShortVerbal;
            this.state.fields["g1AttendTaskShortInitiates"] = body.Form[0].g1AttendTaskShortInitiates == null ? "" : body.Form[0].g1AttendTaskShortInitiates;
            this.state.fields["g1EyeContactNA"] = body.Form[0].g1EyeContactNA == null ? "" : body.Form[0].g1EyeContactNA;
            this.state.fields["g1EyeContactPhysical"] = body.Form[0].g1EyeContactPhysical == null ? "" : body.Form[0].g1EyeContactPhysical;
            this.state.fields["g1EyeContactVerbal"] = body.Form[0].g1EyeContactVerbal == null ? "" : body.Form[0].g1EyeContactVerbal;
            this.state.fields["g1EyeContactInitiates"] = body.Form[0].g1EyeContactInitiates == null ? "" : body.Form[0].g1EyeContactInitiates;
            this.state.fields["g1EyeContactNameNA"] = body.Form[0].g1EyeContactNameNA == null ? "" : body.Form[0].g1EyeContactNameNA;
            this.state.fields["g1EyeContactNamePhysical"] = body.Form[0].g1EyeContactNamePhysical == null ? "" : body.Form[0].g1EyeContactNamePhysical;
            this.state.fields["g1EyeContactNameVerbal"] = body.Form[0].g1EyeContactNameVerbal == null ? "" : body.Form[0].g1EyeContactNameVerbal;
            this.state.fields["g1EyeContactNameInitiates"] = body.Form[0].g1EyeContactNameInitiates == null ? "" : body.Form[0].g1EyeContactNameInitiates;
            this.state.fields["g1EyeContactGroupNA"] = body.Form[0].g1EyeContactGroupNA == null ? "" : body.Form[0].g1EyeContactGroupNA;
            this.state.fields["g1EyeContactGroupPhysical"] = body.Form[0].g1EyeContactGroupPhysical == null ? "" : body.Form[0].g1EyeContactGroupPhysical;
            this.state.fields["g1EyeContactGroupVerbal"] = body.Form[0].g1EyeContactGroupVerbal == null ? "" : body.Form[0].g1EyeContactGroupVerbal;
            this.state.fields["g1EyeContactGroupInitiates"] = body.Form[0].g1EyeContactGroupInitiates == null ? "" : body.Form[0].g1EyeContactGroupInitiates;
            this.state.fields["g1WantsNeedsNA"] = body.Form[0].g1WantsNeedsNA == null ? "" : body.Form[0].g1WantsNeedsNA;
            this.state.fields["g1WantsNeedsPhysical"] = body.Form[0].g1WantsNeedsPhysical == null ? "" : body.Form[0].g1WantsNeedsPhysical;
            this.state.fields["g1WantsNeedsVerbal"] = body.Form[0].g1WantsNeedsVerbal == null ? "" : body.Form[0].g1WantsNeedsVerbal;
            this.state.fields["g1WantsNeedsInitiates"] = body.Form[0].g1WantsNeedsInitiates == null ? "" : body.Form[0].g1WantsNeedsInitiates;
            this.state.fields["g1socialQsNA"] = body.Form[0].g1socialQsNA == null ? "" : body.Form[0].g1socialQsNA;
            this.state.fields["g1SocialQsPhysical"] = body.Form[0].g1SocialQsPhysical == null ? "" : body.Form[0].g1SocialQsPhysical;
            this.state.fields["g1SocialQsVerbal"] = body.Form[0].g1SocialQsVerbal == null ? "" : body.Form[0].g1SocialQsVerbal;
            this.state.fields["g1SocialQsInitiates"] = body.Form[0].g1SocialQsInitiates == null ? "" : body.Form[0].g1SocialQsInitiates;
            this.state.fields["g1InterferenceQsNA"] = body.Form[0].g1InterferenceQsNA == null ? "" : body.Form[0].g1InterferenceQsNA;
            this.state.fields["g1InterferenceQsPhysical"] = body.Form[0].g1InterferenceQsPhysical == null ? "" : body.Form[0].g1InterferenceQsPhysical;
            this.state.fields["g1InterferenceQsVerbal"] = body.Form[0].g1InterferenceQsVerbal == null ? "" : body.Form[0].g1InterferenceQsVerbal;
            this.state.fields["g1InterferenceQsInitiates"] = body.Form[0].g1InterferenceQsInitiates == null ? "" : body.Form[0].g1InterferenceQsInitiates;
            this.state.fields["g1ReciprocateConversationNA"] = body.Form[0].g1ReciprocateConversationNA == null ? "" : body.Form[0].g1ReciprocateConversationNA;
            this.state.fields["g1ReciprocateConversationPhysical"] = body.Form[0].g1ReciprocateConversationPhysical == null ? "" : body.Form[0].g1ReciprocateConversationPhysical;
            this.state.fields["g1ReciprocateConversationVerbal"] = body.Form[0].g1ReciprocateConversationVerbal == null ? "" : body.Form[0].g1ReciprocateConversationVerbal;
            this.state.fields["g1ReciprocateConversationInitiates"] = body.Form[0].g1ReciprocateConversationInitiates == null ? "" : body.Form[0].g1ReciprocateConversationInitiates;
            this.state.fields["g1MaintainConversationNA"] = body.Form[0].g1MaintainConversationNA == null ? "" : body.Form[0].g1MaintainConversationNA;
            this.state.fields["g1MaintainConversationPhysical"] = body.Form[0].g1MaintainConversationPhysical == null ? "" : body.Form[0].g1MaintainConversationPhysical;
            this.state.fields["g1MaintainConversationVerbal"] = body.Form[0].g1MaintainConversationVerbal == null ? "" : body.Form[0].g1MaintainConversationVerbal;
            this.state.fields["g1MaintainConversationInitiates"] = body.Form[0].g1MaintainConversationInitiates == null ? "" : body.Form[0].g1MaintainConversationInitiates;
            this.state.fields["g1OriginalConversationNA"] = body.Form[0].g1OriginalConversationNA == null ? "" : body.Form[0].g1OriginalConversationNA;
            this.state.fields["g1OriginalConversationPhysical"] = body.Form[0].g1OriginalConversationPhysical == null ? "" : body.Form[0].g1OriginalConversationPhysical;
            this.state.fields["g1OriginalConversationVerbal"] = body.Form[0].g1OriginalConversationVerbal == null ? "" : body.Form[0].g1OriginalConversationVerbal;
            this.state.fields["g1OriginalConversationInitiates"] = body.Form[0].g1OriginalConversationInitiates == null ? "" : body.Form[0].g1OriginalConversationInitiates;
            this.state.fields["g1WithinRoomNA"] = body.Form[0].g1WithinRoomNA == null ? "" : body.Form[0].g1WithinRoomNA;
            this.state.fields["g1WithinRoomPhysical"] = body.Form[0].g1WithinRoomPhysical == null ? "" : body.Form[0].g1WithinRoomPhysical;
            this.state.fields["g1WithinRoomVerbal"] = body.Form[0].g1WithinRoomVerbal == null ? "" : body.Form[0].g1WithinRoomVerbal;
            this.state.fields["g1WithinRoomInitiates"] = body.Form[0].g1WithinRoomInitiates == null ? "" : body.Form[0].g1WithinRoomInitiates;
            this.state.fields["g1AnotherRoomNA"] = body.Form[0].g1AnotherRoomNA == null ? "" : body.Form[0].g1AnotherRoomNA;
            this.state.fields["g1AnotherRoomPhysical"] = body.Form[0].g1AnotherRoomPhysical == null ? "" : body.Form[0].g1AnotherRoomPhysical;
            this.state.fields["g1AnotherRoomVerbal"] = body.Form[0].g1AnotherRoomVerbal == null ? "" : body.Form[0].g1AnotherRoomVerbal;
            this.state.fields["g1AnotherRoomInitiates"] = body.Form[0].g1AnotherRoomInitiates == null ? "" : body.Form[0].g1AnotherRoomInitiates;
            this.state.fields["g1IndTaskLongNA"] = body.Form[0].g1IndTaskLongNA == null ? "" : body.Form[0].g1IndTaskLongNA;
            this.state.fields["g1IndTaskLongPhysical"] = body.Form[0].g1IndTaskLongPhysical == null ? "" : body.Form[0].g1IndTaskLongPhysical;
            this.state.fields["g1IndTaskLongVerbal"] = body.Form[0].g1IndTaskLongVerbal == null ? "" : body.Form[0].g1IndTaskLongVerbal;
            this.state.fields["g1IndTaskLongInitiates"] = body.Form[0].g1IndTaskLongInitiates == null ? "" : body.Form[0].g1IndTaskLongInitiates;
            this.state.fields["g1IndTaskShortNA"] = body.Form[0].g1IndTaskShortNA == null ? "" : body.Form[0].g1IndTaskShortNA;
            this.state.fields["g1IndTaskShortPhysical"] = body.Form[0].g1IndTaskShortPhysical == null ? "" : body.Form[0].g1IndTaskShortPhysical;
            this.state.fields["g1IndTaskShortVerbal"] = body.Form[0].g1IndTaskShortVerbal == null ? "" : body.Form[0].g1IndTaskShortVerbal;
            this.state.fields["g1IndTaskShortInitiates"] = body.Form[0].g1IndTaskShortInitiates == null ? "" : body.Form[0].g1IndTaskShortInitiates;
            this.state.fields["g1OrganizeMaterialsNA"] = body.Form[0].g1OrganizeMaterialsNA == null ? "" : body.Form[0].g1OrganizeMaterialsNA;
            this.state.fields["g1OrganizeMaterialsPhysical"] = body.Form[0].g1OrganizeMaterialsPhysical == null ? "" : body.Form[0].g1OrganizeMaterialsPhysical;
            this.state.fields["g1OrganizeMaterialsVerbal"] = body.Form[0].g1OrganizeMaterialsVerbal == null ? "" : body.Form[0].g1OrganizeMaterialsVerbal;
            this.state.fields["g1OrganizeMaterialsInitiates"] = body.Form[0].g1OrganizeMaterialsInitiates == null ? "" : body.Form[0].g1OrganizeMaterialsInitiates;
            this.state.fields["g1OrganizeTasksNA"] = body.Form[0].g1OrganizeTasksNA == null ? "" : body.Form[0].g1OrganizeTasksNA;
            this.state.fields["g1OrganizeTasksPhysical"] = body.Form[0].g1OrganizeTasksPhysical == null ? "" : body.Form[0].g1OrganizeTasksPhysical;
            this.state.fields["g1OrganizeTasksVerbal"] = body.Form[0].g1OrganizeTasksVerbal == null ? "" : body.Form[0].g1OrganizeTasksVerbal;
            this.state.fields["g1OrganizeTasksInitiates"] = body.Form[0].g1OrganizeTasksInitiates == null ? "" : body.Form[0].g1OrganizeTasksInitiates;
            this.state.fields["g1ShoesOnOffNA"] = body.Form[0].g1ShoesOnOffNA == null ? "" : body.Form[0].g1ShoesOnOffNA;
            this.state.fields["g1ShoesOnOffPhysical"] = body.Form[0].g1ShoesOnOffPhysical == null ? "" : body.Form[0].g1ShoesOnOffPhysical;
            this.state.fields["g1ShoesOnOffVerbal"] = body.Form[0].g1ShoesOnOffVerbal == null ? "" : body.Form[0].g1ShoesOnOffVerbal;
            this.state.fields["g1ShoesOnOffInitiates"] = body.Form[0].g1ShoesOnOffInitiates == null ? "" : body.Form[0].g1ShoesOnOffInitiates;
            this.state.fields["g1RightLeftNA"] = body.Form[0].g1RightLeftNA == null ? "" : body.Form[0].g1RightLeftNA;
            this.state.fields["g1RightLeftPhysical"] = body.Form[0].g1RightLeftPhysical == null ? "" : body.Form[0].g1RightLeftPhysical;
            this.state.fields["g1RightLeftVerbal"] = body.Form[0].g1RightLeftVerbal == null ? "" : body.Form[0].g1RightLeftVerbal;
            this.state.fields["g1RightLeftInitiates"] = body.Form[0].g1RightLeftInitiates == null ? "" : body.Form[0].g1RightLeftInitiates;
            this.state.fields["g1TieShoesNA"] = body.Form[0].g1TieShoesNA == null ? "" : body.Form[0].g1TieShoesNA;
            this.state.fields["g1TieShoesPhysical"] = body.Form[0].g1TieShoesPhysical == null ? "" : body.Form[0].g1TieShoesPhysical;
            this.state.fields["g1TieShoesVerbal"] = body.Form[0].g1TieShoesVerbal == null ? "" : body.Form[0].g1TieShoesVerbal;
            this.state.fields["g1TieShoesInitiates"] = body.Form[0].g1TieShoesInitiates == null ? "" : body.Form[0].g1TieShoesInitiates;
            this.state.fields["g1PantsNA"] = body.Form[0].g1PantsNA == null ? "" : body.Form[0].g1PantsNA;
            this.state.fields["g1PantsPhysical"] = body.Form[0].g1PantsPhysical == null ? "" : body.Form[0].g1PantsPhysical;
            this.state.fields["g1PantsVerbal"] = body.Form[0].g1PantsVerbal == null ? "" : body.Form[0].g1PantsVerbal;
            this.state.fields["g1PantsInitiates"] = body.Form[0].g1PantsInitiates == null ? "" : body.Form[0].g1PantsInitiates;
            this.state.fields["g1ButtonsNA"] = body.Form[0].g1ButtonsNA == null ? "" : body.Form[0].g1ButtonsNA;
            this.state.fields["g1ButtonsPhysical"] = body.Form[0].g1ButtonsPhysical == null ? "" : body.Form[0].g1ButtonsPhysical;
            this.state.fields["g1ButtonsVerbal"] = body.Form[0].g1ButtonsVerbal == null ? "" : body.Form[0].g1ButtonsVerbal;
            this.state.fields["g1ButtonsInitiates"] = body.Form[0].g1ButtonsInitiates == null ? "" : body.Form[0].g1ButtonsInitiates;
            this.state.fields["g1AdjustClothesNA"] = body.Form[0].g1AdjustClothesNA == null ? "" : body.Form[0].g1AdjustClothesNA;
            this.state.fields["g1AdjustClothesPhysical"] = body.Form[0].g1AdjustClothesPhysical == null ? "" : body.Form[0].g1AdjustClothesPhysical;
            this.state.fields["g1AdjustClothesVerbal"] = body.Form[0].g1AdjustClothesVerbal == null ? "" : body.Form[0].g1AdjustClothesVerbal;
            this.state.fields["g1AdjustClothesInitiates"] = body.Form[0].g1AdjustClothesInitiates == null ? "" : body.Form[0].g1AdjustClothesInitiates;
            this.state.fields["g1DressesNA"] = body.Form[0].g1DressesNA == null ? "" : body.Form[0].g1DressesNA;
            this.state.fields["g1DressesPhysical"] = body.Form[0].g1DressesPhysical == null ? "" : body.Form[0].g1DressesPhysical;
            this.state.fields["g1DressesVerbal"] = body.Form[0].g1DressesVerbal == null ? "" : body.Form[0].g1DressesVerbal;
            this.state.fields["g1DressesInitiates"] = body.Form[0].g1DressesInitiates == null ? "" : body.Form[0].g1DressesInitiates;
            this.state.fields["g1SortsClothesNA"] = body.Form[0].g1SortsClothesNA == null ? "" : body.Form[0].g1SortsClothesNA;
            this.state.fields["g1SortsClothesPhysical"] = body.Form[0].g1SortsClothesPhysical == null ? "" : body.Form[0].g1SortsClothesPhysical;
            this.state.fields["g1SortsClothesVerbal"] = body.Form[0].g1SortsClothesVerbal == null ? "" : body.Form[0].g1SortsClothesVerbal;
            this.state.fields["g1SortsClothesInitiates"] = body.Form[0].g1SortsClothesInitiates == null ? "" : body.Form[0].g1SortsClothesInitiates;
            this.state.fields["g1ClothesWeatherNA"] = body.Form[0].g1ClothesWeatherNA == null ? "" : body.Form[0].g1ClothesWeatherNA;
            this.state.fields["g1ClothesWeatherPhysical"] = body.Form[0].g1ClothesWeatherPhysical == null ? "" : body.Form[0].g1ClothesWeatherPhysical;
            this.state.fields["g1ClothesWeatherVerbal"] = body.Form[0].g1ClothesWeatherVerbal == null ? "" : body.Form[0].g1ClothesWeatherVerbal;
            this.state.fields["g1ClothesWeatherInitiates"] = body.Form[0].g1ClothesWeatherInitiates == null ? "" : body.Form[0].g1ClothesWeatherInitiates;
            this.state.fields["g1BathroomNA"] = body.Form[0].g1BathroomNA == null ? "" : body.Form[0].g1BathroomNA;
            this.state.fields["g1BathroomPhysical"] = body.Form[0].g1BathroomPhysical == null ? "" : body.Form[0].g1BathroomPhysical;
            this.state.fields["g1BathroomVerbal"] = body.Form[0].g1BathroomVerbal == null ? "" : body.Form[0].g1BathroomVerbal;
            this.state.fields["g1BathroomInitiates"] = body.Form[0].g1BathroomInitiates == null ? "" : body.Form[0].g1BathroomInitiates;
            this.state.fields["g1WashesHandsNA"] = body.Form[0].g1WashesHandsNA == null ? "" : body.Form[0].g1WashesHandsNA;
            this.state.fields["g1WashesHandsPhysical"] = body.Form[0].g1WashesHandsPhysical == null ? "" : body.Form[0].g1WashesHandsPhysical;
            this.state.fields["g1WashesHandsVerbal"] = body.Form[0].g1WashesHandsVerbal == null ? "" : body.Form[0].g1WashesHandsVerbal;
            this.state.fields["g1WashesHandsInitiates"] = body.Form[0].g1WashesHandsInitiates == null ? "" : body.Form[0].g1WashesHandsInitiates;
            this.state.fields["g1ShowerNA"] = body.Form[0].g1ShowerNA == null ? "" : body.Form[0].g1ShowerNA;
            this.state.fields["g1ShowerPhysical"] = body.Form[0].g1ShowerPhysical == null ? "" : body.Form[0].g1ShowerPhysical;
            this.state.fields["g1ShowerVerbal"] = body.Form[0].g1ShowerVerbal == null ? "" : body.Form[0].g1ShowerVerbal;
            this.state.fields["g1ShowerInitiates"] = body.Form[0].g1ShowerInitiates == null ? "" : body.Form[0].g1ShowerInitiates;
            this.state.fields["g1UtensilsNA"] = body.Form[0].g1UtensilsNA == null ? "" : body.Form[0].g1UtensilsNA;
            this.state.fields["g1UtensilsPhysical"] = body.Form[0].g1UtensilsPhysical == null ? "" : body.Form[0].g1UtensilsPhysical;
            this.state.fields["g1UtensilsVerbal"] = body.Form[0].g1UtensilsVerbal == null ? "" : body.Form[0].g1UtensilsVerbal;
            this.state.fields["g1UtensilsInitiates"] = body.Form[0].g1UtensilsInitiates == null ? "" : body.Form[0].g1UtensilsInitiates;
            this.state.fields["g1OpensContainersNA"] = body.Form[0].g1OpensContainersNA == null ? "" : body.Form[0].g1OpensContainersNA;
            this.state.fields["g1OpensContainersPhysical"] = body.Form[0].g1OpensContainersPhysical == null ? "" : body.Form[0].g1OpensContainersPhysical;
            this.state.fields["g1OpensContainersVerbal"] = body.Form[0].g1OpensContainersVerbal == null ? "" : body.Form[0].g1OpensContainersVerbal;
            this.state.fields["g1OpensContainersInitiates"] = body.Form[0].g1OpensContainersInitiates == null ? "" : body.Form[0].g1OpensContainersInitiates;
            this.state.fields["g1CleansEatingAreaNA"] = body.Form[0].g1CleansEatingAreaNA == null ? "" : body.Form[0].g1CleansEatingAreaNA;
            this.state.fields["g1CleansEatingAreaPhysical"] = body.Form[0].g1CleansEatingAreaPhysical == null ? "" : body.Form[0].g1CleansEatingAreaPhysical;
            this.state.fields["g1CleansEatingAreaVerbal"] = body.Form[0].g1CleansEatingAreaVerbal == null ? "" : body.Form[0].g1CleansEatingAreaVerbal;
            this.state.fields["g1CleansEatingAreaInitiates"] = body.Form[0].g1CleansEatingAreaInitiates == null ? "" : body.Form[0].g1CleansEatingAreaInitiates;
            this.state.fields["g1HotCautionNA"] = body.Form[0].g1HotCautionNA == null ? "" : body.Form[0].g1HotCautionNA;
            this.state.fields["g1HotCautionPhysical"] = body.Form[0].g1HotCautionPhysical == null ? "" : body.Form[0].g1HotCautionPhysical;
            this.state.fields["g1HotCautionVerbal"] = body.Form[0].g1HotCautionVerbal == null ? "" : body.Form[0].g1HotCautionVerbal;
            this.state.fields["g1HotCautionInitiates"] = body.Form[0].g1HotCautionInitiates == null ? "" : body.Form[0].g1HotCautionInitiates;
            this.state.fields["g1NearPeersNA"] = body.Form[0].g1NearPeersNA == null ? "" : body.Form[0].g1NearPeersNA;
            this.state.fields["g1NearPeersPhysical"] = body.Form[0].g1NearPeersPhysical == null ? "" : body.Form[0].g1NearPeersPhysical;
            this.state.fields["g1NearPeersVerbal"] = body.Form[0].g1NearPeersVerbal == null ? "" : body.Form[0].g1NearPeersVerbal;
            this.state.fields["g1NearPeersInitiates"] = body.Form[0].g1NearPeersInitiates == null ? "" : body.Form[0].g1NearPeersInitiates;
            this.state.fields["g1InterestInOthersNA"] = body.Form[0].g1InterestInOthersNA == null ? "" : body.Form[0].g1InterestInOthersNA;
            this.state.fields["g1InterestInOthersPhysical"] = body.Form[0].g1InterestInOthersPhysical == null ? "" : body.Form[0].g1InterestInOthersPhysical;
            this.state.fields["g1InterestInOthersVerbal"] = body.Form[0].g1InterestInOthersVerbal == null ? "" : body.Form[0].g1InterestInOthersVerbal;
            this.state.fields["g1InterestInOthersInitiates"] = body.Form[0].g1InterestInOthersInitiates == null ? "" : body.Form[0].g1InterestInOthersInitiates;
            this.state.fields["g1SitSmallGroupNA"] = body.Form[0].g1SitSmallGroupNA == null ? "" : body.Form[0].g1SitSmallGroupNA;
            this.state.fields["g1SitSmallGroupPhysical"] = body.Form[0].g1SitSmallGroupPhysical == null ? "" : body.Form[0].g1SitSmallGroupPhysical;
            this.state.fields["g1SitSmallGroupVerbal"] = body.Form[0].g1SitSmallGroupVerbal == null ? "" : body.Form[0].g1SitSmallGroupVerbal;
            this.state.fields["g1SitSmallGroupInitiates"] = body.Form[0].g1SitSmallGroupInitiates == null ? "" : body.Form[0].g1SitSmallGroupInitiates;
            this.state.fields["g1InstructorSmallGroupNA"] = body.Form[0].g1InstructorSmallGroupNA == null ? "" : body.Form[0].g1InstructorSmallGroupNA;
            this.state.fields["g1InstructorSmallGroupPhysical"] = body.Form[0].g1InstructorSmallGroupPhysical == null ? "" : body.Form[0].g1InstructorSmallGroupPhysical;
            this.state.fields["g1InstructorSmallGroupVerbal"] = body.Form[0].g1InstructorSmallGroupVerbal == null ? "" : body.Form[0].g1InstructorSmallGroupVerbal;
            this.state.fields["g1InstructorSmallGroupInitiates"] = body.Form[0].g1InstructorSmallGroupInitiates == null ? "" : body.Form[0].g1InstructorSmallGroupInitiates;
            this.state.fields["g1InstructionNA"] = body.Form[0].g1InstructionNA == null ? "" : body.Form[0].g1InstructionNA;
            this.state.fields["g1InstructionPhysical"] = body.Form[0].g1InstructionPhysical == null ? "" : body.Form[0].g1InstructionPhysical;
            this.state.fields["g1InstructionVerbal"] = body.Form[0].g1InstructionVerbal == null ? "" : body.Form[0].g1InstructionVerbal;
            this.state.fields["g1InstructionInitiates"] = body.Form[0].g1InstructionInitiates == null ? "" : body.Form[0].g1InstructionInitiates;
            this.state.fields["g1TakesTurnsNA"] = body.Form[0].g1TakesTurnsNA == null ? "" : body.Form[0].g1TakesTurnsNA;
            this.state.fields["g1TakesTurnsPhysical"] = body.Form[0].g1TakesTurnsPhysical == null ? "" : body.Form[0].g1TakesTurnsPhysical;
            this.state.fields["g1TakesTurnsVerbal"] = body.Form[0].g1TakesTurnsVerbal == null ? "" : body.Form[0].g1TakesTurnsVerbal;
            this.state.fields["g1TakesTurnsInitiates"] = body.Form[0].g1TakesTurnsInitiates == null ? "" : body.Form[0].g1TakesTurnsInitiates;
            this.state.fields["g1SharesNA"] = body.Form[0].g1SharesNA == null ? "" : body.Form[0].g1SharesNA;
            this.state.fields["g1SharesPhysical"] = body.Form[0].g1SharesPhysical == null ? "" : body.Form[0].g1SharesPhysical;
            this.state.fields["g1SharesVerbal"] = body.Form[0].g1SharesVerbal == null ? "" : body.Form[0].g1SharesVerbal;
            this.state.fields["g1SharesInitiates"] = body.Form[0].g1SharesInitiates == null ? "" : body.Form[0].g1SharesInitiates;
            this.state.fields["g1ConverseOthersNA"] = body.Form[0].g1ConverseOthersNA == null ? "" : body.Form[0].g1ConverseOthersNA;
            this.state.fields["g1ConverseOthersPhysical"] = body.Form[0].g1ConverseOthersPhysical == null ? "" : body.Form[0].g1ConverseOthersPhysical;
            this.state.fields["g1ConverseOthersVerbal"] = body.Form[0].g1ConverseOthersVerbal == null ? "" : body.Form[0].g1ConverseOthersVerbal;
            this.state.fields["g1ConverseOthersInitiates"] = body.Form[0].g1ConverseOthersInitiates == null ? "" : body.Form[0].g1ConverseOthersInitiates;
            this.state.fields["g1SitLargeGroupNA"] = body.Form[0].g1SitLargeGroupNA == null ? "" : body.Form[0].g1SitLargeGroupNA;
            this.state.fields["g1SitLargeGroupPhysical"] = body.Form[0].g1SitLargeGroupPhysical == null ? "" : body.Form[0].g1SitLargeGroupPhysical;
            this.state.fields["g1SitLargeGroupVerbal"] = body.Form[0].g1SitLargeGroupVerbal == null ? "" : body.Form[0].g1SitLargeGroupVerbal;
            this.state.fields["g1SitLargeGroupInitiates"] = body.Form[0].g1SitLargeGroupInitiates == null ? "" : body.Form[0].g1SitLargeGroupInitiates;
            this.state.fields["g1InstructorLargeGroupNA"] = body.Form[0].g1InstructorLargeGroupNA == null ? "" : body.Form[0].g1InstructorLargeGroupNA;
            this.state.fields["g1InstructorLargeGroupPhysical"] = body.Form[0].g1InstructorLargeGroupPhysical == null ? "" : body.Form[0].g1InstructorLargeGroupPhysical;
            this.state.fields["g1InstructorLargeGroupVerbal"] = body.Form[0].g1InstructorLargeGroupVerbal == null ? "" : body.Form[0].g1InstructorLargeGroupVerbal;
            this.state.fields["g1InstructorLargeGroupInitiates"] = body.Form[0].g1InstructorLargeGroupInitiates == null ? "" : body.Form[0].g1InstructorLargeGroupInitiates;
            this.state.fields["g1StandWaitNA"] = body.Form[0].g1StandWaitNA == null ? "" : body.Form[0].g1StandWaitNA;
            this.state.fields["g1StandWaitPhysical"] = body.Form[0].g1StandWaitPhysical == null ? "" : body.Form[0].g1StandWaitPhysical;
            this.state.fields["g1StandWaitVerbal"] = body.Form[0].g1StandWaitVerbal == null ? "" : body.Form[0].g1StandWaitVerbal;
            this.state.fields["g1StandWaitInitiates"] = body.Form[0].g1StandWaitInitiates == null ? "" : body.Form[0].g1StandWaitInitiates;
            this.state.fields["g1UnderstandsRulesNA"] = body.Form[0].g1UnderstandsRulesNA == null ? "" : body.Form[0].g1UnderstandsRulesNA;
            this.state.fields["g1UnderstandsRulesPhysical"] = body.Form[0].g1UnderstandsRulesPhysical == null ? "" : body.Form[0].g1UnderstandsRulesPhysical;
            this.state.fields["g1UnderstandsRulesVerbal"] = body.Form[0].g1UnderstandsRulesVerbal == null ? "" : body.Form[0].g1UnderstandsRulesVerbal;
            this.state.fields["g1UnderstandsRulesInitiates"] = body.Form[0].g1UnderstandsRulesInitiates == null ? "" : body.Form[0].g1UnderstandsRulesInitiates;
            this.state.fields["g2FeelingsHelpNA"] = body.Form[0].g2FeelingsHelpNA == null ? "" : body.Form[0].g2FeelingsHelpNA;
            this.state.fields["g2FeelingsHelpPhysical"] = body.Form[0].g2FeelingsHelpPhysical == null ? "" : body.Form[0].g2FeelingsHelpPhysical;
            this.state.fields["g2FeelingsHelpVerbal"] = body.Form[0].g2FeelingsHelpVerbal == null ? "" : body.Form[0].g2FeelingsHelpVerbal;
            this.state.fields["g2FeelingsHelpInitiates"] = body.Form[0].g2FeelingsHelpInitiates == null ? "" : body.Form[0].g2FeelingsHelpInitiates;
            this.state.fields["g2ExplainFeelingsNA"] = body.Form[0].g2ExplainFeelingsNA == null ? "" : body.Form[0].g2ExplainFeelingsNA;
            this.state.fields["g2ExplainFeelingsPhysical"] = body.Form[0].g2ExplainFeelingsPhysical == null ? "" : body.Form[0].g2ExplainFeelingsPhysical;
            this.state.fields["g2ExplainFeelingsVerbal"] = body.Form[0].g2ExplainFeelingsVerbal == null ? "" : body.Form[0].g2ExplainFeelingsVerbal;
            this.state.fields["g2ExplainFeelingsInitiates"] = body.Form[0].g2ExplainFeelingsInitiates == null ? "" : body.Form[0].g2ExplainFeelingsInitiates;
            this.state.fields["g2AsksHelpNA"] = body.Form[0].g2AsksHelpNA == null ? "" : body.Form[0].g2AsksHelpNA;
            this.state.fields["g2AsksHelpPhysical"] = body.Form[0].g2AsksHelpPhysical == null ? "" : body.Form[0].g2AsksHelpPhysical;
            this.state.fields["g2AsksHelpVerbal"] = body.Form[0].g2AsksHelpVerbal == null ? "" : body.Form[0].g2AsksHelpVerbal;
            this.state.fields["g2AsksHelpInitiates"] = body.Form[0].g2AsksHelpInitiates == null ? "" : body.Form[0].g2AsksHelpInitiates;
            this.state.fields["g2TalksToAdultNA"] = body.Form[0].g2TalksToAdultNA == null ? "" : body.Form[0].g2TalksToAdultNA;
            this.state.fields["g2TalksToAdultPhysical"] = body.Form[0].g2TalksToAdultPhysical == null ? "" : body.Form[0].g2TalksToAdultPhysical;
            this.state.fields["g2TalksToAdultVerbal"] = body.Form[0].g2TalksToAdultVerbal == null ? "" : body.Form[0].g2TalksToAdultVerbal;
            this.state.fields["g2TalksToAdultInitiates"] = body.Form[0].g2TalksToAdultInitiates == null ? "" : body.Form[0].g2TalksToAdultInitiates;
            this.state.fields["g2TalksToFriendNA"] = body.Form[0].g2TalksToFriendNA == null ? "" : body.Form[0].g2TalksToFriendNA;
            this.state.fields["g2TalksToFriendPhysical"] = body.Form[0].g2TalksToFriendPhysical == null ? "" : body.Form[0].g2TalksToFriendPhysical;
            this.state.fields["g2TalksToFriendVerbal"] = body.Form[0].g2TalksToFriendVerbal == null ? "" : body.Form[0].g2TalksToFriendVerbal;
            this.state.fields["g2TalksToFriendInitiates"] = body.Form[0].g2TalksToFriendInitiates == null ? "" : body.Form[0].g2TalksToFriendInitiates;
            this.state.fields["g2ComplimentNA"] = body.Form[0].g2ComplimentNA == null ? "" : body.Form[0].g2ComplimentNA;
            this.state.fields["g2ComplimentPhysical"] = body.Form[0].g2ComplimentPhysical == null ? "" : body.Form[0].g2ComplimentPhysical;
            this.state.fields["g2ComplimentVerbal"] = body.Form[0].g2ComplimentVerbal == null ? "" : body.Form[0].g2ComplimentVerbal;
            this.state.fields["g2ComplimentInitiates"] = body.Form[0].g2ComplimentInitiates == null ? "" : body.Form[0].g2ComplimentInitiates;
            this.state.fields["g2PresentsIdeasNA"] = body.Form[0].g2PresentsIdeasNA == null ? "" : body.Form[0].g2PresentsIdeasNA;
            this.state.fields["g2PresentsIdeasPhysical"] = body.Form[0].g2PresentsIdeasPhysical == null ? "" : body.Form[0].g2PresentsIdeasPhysical;
            this.state.fields["g2PresentsIdeasVerbal"] = body.Form[0].g2PresentsIdeasVerbal == null ? "" : body.Form[0].g2PresentsIdeasVerbal;
            this.state.fields["g2PresentsIdeasInitiates"] = body.Form[0].g2PresentsIdeasInitiates == null ? "" : body.Form[0].g2PresentsIdeasInitiates;
            this.state.fields["g2AsksQuestionsNA"] = body.Form[0].g2AsksQuestionsNA == null ? "" : body.Form[0].g2AsksQuestionsNA;
            this.state.fields["g2AsksQuestionsPhysical"] = body.Form[0].g2AsksQuestionsPhysical == null ? "" : body.Form[0].g2AsksQuestionsPhysical;
            this.state.fields["g2AsksQuestionsVerbal"] = body.Form[0].g2AsksQuestionsVerbal == null ? "" : body.Form[0].g2AsksQuestionsVerbal;
            this.state.fields["g2AsksQuestionsInitiates"] = body.Form[0].g2AsksQuestionsInitiates == null ? "" : body.Form[0].g2AsksQuestionsInitiates;
            this.state.fields["g2CompromiseNA"] = body.Form[0].g2CompromiseNA == null ? "" : body.Form[0].g2CompromiseNA;
            this.state.fields["g2CompromisePhysical"] = body.Form[0].g2CompromisePhysical == null ? "" : body.Form[0].g2CompromisePhysical;
            this.state.fields["g2CompromiseVerbal"] = body.Form[0].g2CompromiseVerbal == null ? "" : body.Form[0].g2CompromiseVerbal;
            this.state.fields["g2CompromiseInitiates"] = body.Form[0].g2CompromiseInitiates == null ? "" : body.Form[0].g2CompromiseInitiates;
            this.state.fields["g2FeedbackNA"] = body.Form[0].g2FeedbackNA == null ? "" : body.Form[0].g2FeedbackNA;
            this.state.fields["g2FeedbackPhysical"] = body.Form[0].g2FeedbackPhysical == null ? "" : body.Form[0].g2FeedbackPhysical;
            this.state.fields["g2FeedbackVerbal"] = body.Form[0].g2FeedbackVerbal == null ? "" : body.Form[0].g2FeedbackVerbal;
            this.state.fields["g2FeedbackInitiates"] = body.Form[0].g2FeedbackInitiates == null ? "" : body.Form[0].g2FeedbackInitiates;
            this.state.fields["g2MicrowaveNA"] = body.Form[0].g2MicrowaveNA == null ? "" : body.Form[0].g2MicrowaveNA;
            this.state.fields["g2MicrowavePhysical"] = body.Form[0].g2MicrowavePhysical == null ? "" : body.Form[0].g2MicrowavePhysical;
            this.state.fields["g2MicrowaveHelpVerbal"] = body.Form[0].g2MicrowaveHelpVerbal == null ? "" : body.Form[0].g2MicrowaveHelpVerbal;
            this.state.fields["g2MicrowaveInitiates"] = body.Form[0].g2MicrowaveInitiates == null ? "" : body.Form[0].g2MicrowaveInitiates;
            this.state.fields["g2StoveTopNA"] = body.Form[0].g2StoveTopNA == null ? "" : body.Form[0].g2StoveTopNA;
            this.state.fields["g2StoveTopVerbal"] = body.Form[0].g2StoveTopVerbal == null ? "" : body.Form[0].g2StoveTopVerbal;
            this.state.fields["g2StoveTopPhysical"] = body.Form[0].g2StoveTopPhysical == null ? "" : body.Form[0].g2StoveTopPhysical;
            this.state.fields["g2StoveTopInitiates"] = body.Form[0].g2StoveTopInitiates == null ? "" : body.Form[0].g2StoveTopInitiates;
            this.state.fields["g2OvenNA"] = body.Form[0].g2OvenNA == null ? "" : body.Form[0].g2OvenNA;
            this.state.fields["g2OvenPhysical"] = body.Form[0].g2OvenPhysical == null ? "" : body.Form[0].g2OvenPhysical;
            this.state.fields["g2OvenVerbal"] = body.Form[0].g2OvenVerbal == null ? "" : body.Form[0].g2OvenVerbal;
            this.state.fields["g2OvenInitiates"] = body.Form[0].g2OvenInitiates == null ? "" : body.Form[0].g2OvenInitiates;
            this.state.fields["g2StoresFoodNA"] = body.Form[0].g2StoresFoodNA == null ? "" : body.Form[0].g2StoresFoodNA;
            this.state.fields["g2StoresFoodPhysical"] = body.Form[0].g2StoresFoodPhysical == null ? "" : body.Form[0].g2StoresFoodPhysical;
            this.state.fields["g2StoresFoodVerbal"] = body.Form[0].g2StoresFoodVerbal == null ? "" : body.Form[0].g2StoresFoodVerbal;
            this.state.fields["g2StoresFoodInitiates"] = body.Form[0].g2StoresFoodInitiates == null ? "" : body.Form[0].g2StoresFoodInitiates;
            this.state.fields["g2SimpleMealsNA"] = body.Form[0].g2SimpleMealsNA == null ? "" : body.Form[0].g2SimpleMealsNA;
            this.state.fields["g2SimpleMealsPhysical"] = body.Form[0].g2SimpleMealsPhysical == null ? "" : body.Form[0].g2SimpleMealsPhysical;
            this.state.fields["g2SimpleMealsVerbal"] = body.Form[0].g2SimpleMealsVerbal == null ? "" : body.Form[0].g2SimpleMealsVerbal;
            this.state.fields["g2SimpleMealsInitiates"] = body.Form[0].g2SimpleMealsInitiates == null ? "" : body.Form[0].g2SimpleMealsInitiates;
            this.state.fields["g2ComplexMealsNA"] = body.Form[0].g2ComplexMealsNA == null ? "" : body.Form[0].g2ComplexMealsNA;
            this.state.fields["g2ComplexMealsPhysical"] = body.Form[0].g2ComplexMealsPhysical == null ? "" : body.Form[0].g2ComplexMealsPhysical;
            this.state.fields["g2ComplexMealsVerbal"] = body.Form[0].g2ComplexMealsVerbal == null ? "" : body.Form[0].g2ComplexMealsVerbal;
            this.state.fields["g2ComplexMealsInitiates"] = body.Form[0].g2ComplexMealsInitiates == null ? "" : body.Form[0].g2ComplexMealsInitiates;
            this.state.fields["g2DishwasherNA"] = body.Form[0].g2DishwasherNA == null ? "" : body.Form[0].g2DishwasherNA;
            this.state.fields["g2DishwasherPhysical"] = body.Form[0].g2DishwasherPhysical == null ? "" : body.Form[0].g2DishwasherPhysical;
            this.state.fields["g2DishwasherVerbal"] = body.Form[0].g2DishwasherVerbal == null ? "" : body.Form[0].g2DishwasherVerbal;
            this.state.fields["g2DishwasherInitiates"] = body.Form[0].g2DishwasherInitiates == null ? "" : body.Form[0].g2DishwasherInitiates;
            this.state.fields["g2WashDishesNA"] = body.Form[0].g2WashDishesNA == null ? "" : body.Form[0].g2WashDishesNA;
            this.state.fields["g2WashDishesPhysical"] = body.Form[0].g2WashDishesPhysical == null ? "" : body.Form[0].g2WashDishesPhysical;
            this.state.fields["g2WashDishesVerbal"] = body.Form[0].g2WashDishesVerbal == null ? "" : body.Form[0].g2WashDishesVerbal;
            this.state.fields["g2WashDishesInitiates"] = body.Form[0].g2WashDishesInitiates == null ? "" : body.Form[0].g2WashDishesInitiates;
            this.state.fields["g2OrderMealsNA"] = body.Form[0].g2OrderMealsNA == null ? "" : body.Form[0].g2OrderMealsNA;
            this.state.fields["g2OrderMealsPhysical"] = body.Form[0].g2OrderMealsPhysical == null ? "" : body.Form[0].g2OrderMealsPhysical;
            this.state.fields["g2OrderMealsVerbal"] = body.Form[0].g2OrderMealsVerbal == null ? "" : body.Form[0].g2OrderMealsVerbal;
            this.state.fields["g2OrderMealsInitiates"] = body.Form[0].g2OrderMealsInitiates == null ? "" : body.Form[0].g2OrderMealsInitiates;
            this.state.fields["g2CleanSpaceNA"] = body.Form[0].g2CleanSpaceNA == null ? "" : body.Form[0].g2CleanSpaceNA;
            this.state.fields["g2CleanSpacePhysical"] = body.Form[0].g2CleanSpacePhysical == null ? "" : body.Form[0].g2CleanSpacePhysical;
            this.state.fields["g2CleanSpaceVerbal"] = body.Form[0].g2CleanSpaceVerbal == null ? "" : body.Form[0].g2CleanSpaceVerbal;
            this.state.fields["g2CleanSpaceInitiates"] = body.Form[0].g2CleanSpaceInitiates == null ? "" : body.Form[0].g2CleanSpaceInitiates;
            this.state.fields["g2WashClothesNA"] = body.Form[0].g2WashClothesNA == null ? "" : body.Form[0].g2WashClothesNA;
            this.state.fields["g2WashClothesPhysical"] = body.Form[0].g2WashClothesPhysical == null ? "" : body.Form[0].g2WashClothesPhysical;
            this.state.fields["g2WashClothesVerbal"] = body.Form[0].g2WashClothesVerbal == null ? "" : body.Form[0].g2WashClothesVerbal;
            this.state.fields["g2WashClothesInitiates"] = body.Form[0].g2WashClothesInitiates == null ? "" : body.Form[0].g2WashClothesInitiates;
            this.state.fields["g2DressAppropriatelyNA"] = body.Form[0].g2DressAppropriatelyNA == null ? "" : body.Form[0].g2DressAppropriatelyNA;
            this.state.fields["g2DressAppropriatelyPhysical"] = body.Form[0].g2DressAppropriatelyPhysical == null ? "" : body.Form[0].g2DressAppropriatelyPhysical;
            this.state.fields["g2DressAppropriatelyVerbal"] = body.Form[0].g2DressAppropriatelyVerbal == null ? "" : body.Form[0].g2DressAppropriatelyVerbal;
            this.state.fields["g2DressAppropriatelyInitiates"] = body.Form[0].g2DressAppropriatelyInitiates == null ? "" : body.Form[0].g2DressAppropriatelyInitiates;
            this.state.fields["g2FixClothesNA"] = body.Form[0].g2FixClothesNA == null ? "" : body.Form[0].g2FixClothesNA;
            this.state.fields["g2FixClothesPhysical"] = body.Form[0].g2FixClothesPhysical == null ? "" : body.Form[0].g2FixClothesPhysical;
            this.state.fields["g2FixClothesVerbal"] = body.Form[0].g2FixClothesVerbal == null ? "" : body.Form[0].g2FixClothesVerbal;
            this.state.fields["g2FixClothesInitiates"] = body.Form[0].g2FixClothesInitiates == null ? "" : body.Form[0].g2FixClothesInitiates;
            this.state.fields["g2FireRulesNA"] = body.Form[0].g2FireRulesNA == null ? "" : body.Form[0].g2FireRulesNA;
            this.state.fields["g2FireRulesPhysical"] = body.Form[0].g2FireRulesPhysical == null ? "" : body.Form[0].g2FireRulesPhysical;
            this.state.fields["g2FireRulesVerbal"] = body.Form[0].g2FireRulesVerbal == null ? "" : body.Form[0].g2FireRulesVerbal;
            this.state.fields["g2FireRulesInitiates"] = body.Form[0].g2FireRulesInitiates == null ? "" : body.Form[0].g2FireRulesInitiates;
            this.state.fields["g2TimeMgmtNA"] = body.Form[0].g2TimeMgmtNA == null ? "" : body.Form[0].g2TimeMgmtNA;
            this.state.fields["g2TimeMgmtPhysical"] = body.Form[0].g2TimeMgmtPhysical == null ? "" : body.Form[0].g2TimeMgmtPhysical;
            this.state.fields["g2TimeMgmtVerbal"] = body.Form[0].g2TimeMgmtVerbal == null ? "" : body.Form[0].g2TimeMgmtVerbal;
            this.state.fields["g2TimeMgmtInitiates"] = body.Form[0].g2TimeMgmtInitiates == null ? "" : body.Form[0].g2TimeMgmtInitiates;
            this.state.fields["g2SleepSchedNA"] = body.Form[0].g2SleepSchedNA == null ? "" : body.Form[0].g2SleepSchedNA;
            this.state.fields["g2SleepSchedPhysical"] = body.Form[0].g2SleepSchedPhysical == null ? "" : body.Form[0].g2SleepSchedPhysical;
            this.state.fields["g2SleepSchedVerbal"] = body.Form[0].g2SleepSchedVerbal == null ? "" : body.Form[0].g2SleepSchedVerbal;
            this.state.fields["g2SleepSchedInitiates"] = body.Form[0].g2SleepSchedInitiates == null ? "" : body.Form[0].g2SleepSchedInitiates;
            this.state.fields["g2RentAgreementNA"] = body.Form[0].g2RentAgreementNA == null ? "" : body.Form[0].g2RentAgreementNA;
            this.state.fields["g2RentAgreementPhysical"] = body.Form[0].g2RentAgreementPhysical == null ? "" : body.Form[0].g2RentAgreementPhysical;
            this.state.fields["g2RentAgreementVerbal"] = body.Form[0].g2RentAgreementVerbal == null ? "" : body.Form[0].g2RentAgreementVerbal;
            this.state.fields["g2RentAgreementInitiates"] = body.Form[0].g2RentAgreementInitiates == null ? "" : body.Form[0].g2RentAgreementInitiates;
            this.state.fields["g2PhoneServicesNA"] = body.Form[0].g2PhoneServicesNA == null ? "" : body.Form[0].g2PhoneServicesNA;
            this.state.fields["g2PhoneServicesPhysical"] = body.Form[0].g2PhoneServicesPhysical == null ? "" : body.Form[0].g2PhoneServicesPhysical;
            this.state.fields["g2PhoneServicesVerbal"] = body.Form[0].g2PhoneServicesVerbal == null ? "" : body.Form[0].g2PhoneServicesVerbal;
            this.state.fields["g2PhoneServicesInitiates"] = body.Form[0].g2PhoneServicesInitiates == null ? "" : body.Form[0].g2PhoneServicesInitiates;
            this.state.fields["g2LivingCostsNA"] = body.Form[0].g2LivingCostsNA == null ? "" : body.Form[0].g2LivingCostsNA;
            this.state.fields["g2LivingCostsPhysical"] = body.Form[0].g2LivingCostsPhysical == null ? "" : body.Form[0].g2LivingCostsPhysical;
            this.state.fields["g2LivingCostsVerbal"] = body.Form[0].g2LivingCostsVerbal == null ? "" : body.Form[0].g2LivingCostsVerbal;
            this.state.fields["g2LivingCostsInitiates"] = body.Form[0].g2LivingCostsInitiates == null ? "" : body.Form[0].g2LivingCostsInitiates;
            this.state.fields["g2CarInsuranceNA"] = body.Form[0].g2CarInsuranceNA == null ? "" : body.Form[0].g2CarInsuranceNA;
            this.state.fields["g2CarInsurancePhysical"] = body.Form[0].g2CarInsurancePhysical == null ? "" : body.Form[0].g2CarInsurancePhysical;
            this.state.fields["g2CarInsuranceVerbal"] = body.Form[0].g2CarInsuranceVerbal == null ? "" : body.Form[0].g2CarInsuranceVerbal;
            this.state.fields["g2CarInsuranceInitiates"] = body.Form[0].g2CarInsuranceInitiates == null ? "" : body.Form[0].g2CarInsuranceInitiates;
            this.state.fields["g2GoodCreditNA"] = body.Form[0].g2GoodCreditNA == null ? "" : body.Form[0].g2GoodCreditNA;
            this.state.fields["g2GoodCreditPhysical"] = body.Form[0].g2GoodCreditPhysical == null ? "" : body.Form[0].g2GoodCreditPhysical;
            this.state.fields["g2GoodCreditVerbal"] = body.Form[0].g2GoodCreditVerbal == null ? "" : body.Form[0].g2GoodCreditVerbal;
            this.state.fields["g2GoodCreditInitiates"] = body.Form[0].g2GoodCreditInitiates == null ? "" : body.Form[0].g2GoodCreditInitiates;
            this.state.fields["g2PayStubNA"] = body.Form[0].g2PayStubNA == null ? "" : body.Form[0].g2PayStubNA;
            this.state.fields["g2PayStubPhysical"] = body.Form[0].g2PayStubPhysical == null ? "" : body.Form[0].g2PayStubPhysical;
            this.state.fields["g2PayStubVerbal"] = body.Form[0].g2PayStubVerbal == null ? "" : body.Form[0].g2PayStubVerbal;
            this.state.fields["g2PayStubInitiates"] = body.Form[0].g2PayStubInitiates == null ? "" : body.Form[0].g2PayStubInitiates;
            this.state.fields["g2BillingInfoNA"] = body.Form[0].g2BillingInfoNA == null ? "" : body.Form[0].g2BillingInfoNA;
            this.state.fields["g2BillingInfoPhysical"] = body.Form[0].g2BillingInfoPhysical == null ? "" : body.Form[0].g2BillingInfoPhysical;
            this.state.fields["g2BillingInfoVerbal"] = body.Form[0].g2BillingInfoVerbal == null ? "" : body.Form[0].g2BillingInfoVerbal;
            this.state.fields["g2BillingInfoInitiates"] = body.Form[0].g2BillingInfoInitiates == null ? "" : body.Form[0].g2BillingInfoInitiates;
            this.state.fields["g2BudgetNA"] = body.Form[0].g2BudgetNA == null ? "" : body.Form[0].g2BudgetNA;
            this.state.fields["g2BudgetPhysical"] = body.Form[0].g2BudgetPhysical == null ? "" : body.Form[0].g2BudgetPhysical;
            this.state.fields["g2BudgetVerbal"] = body.Form[0].g2BudgetVerbal == null ? "" : body.Form[0].g2BudgetVerbal;
            this.state.fields["g2BudgetInitiates"] = body.Form[0].g2BudgetInitiates == null ? "" : body.Form[0].g2BudgetInitiates;
            this.state.fields["g2CreditNA"] = body.Form[0].g2CreditNA == null ? "" : body.Form[0].g2CreditNA;
            this.state.fields["g2CreditPhysical"] = body.Form[0].g2CreditPhysical == null ? "" : body.Form[0].g2CreditPhysical;
            this.state.fields["g2CreditVerbal"] = body.Form[0].g2CreditVerbal == null ? "" : body.Form[0].g2CreditVerbal;
            this.state.fields["g2CreditInitiates"] = body.Form[0].g2CreditInitiates == null ? "" : body.Form[0].g2CreditInitiates;
            this.state.fields["g2DriversLicenseNA"] = body.Form[0].g2DriversLicenseNA == null ? "" : body.Form[0].g2DriversLicenseNA;
            this.state.fields["g2DriversLicensePhysical"] = body.Form[0].g2DriversLicensePhysical == null ? "" : body.Form[0].g2DriversLicensePhysical;
            this.state.fields["g2DriversLicenseVerbal"] = body.Form[0].g2DriversLicenseVerbal == null ? "" : body.Form[0].g2DriversLicenseVerbal;
            this.state.fields["g2DriversLicenseInitiates"] = body.Form[0].g2DriversLicenseInitiates == null ? "" : body.Form[0].g2DriversLicenseInitiates;
            this.state.fields["g2TransportationNA"] = body.Form[0].g2TransportationNA == null ? "" : body.Form[0].g2TransportationNA;
            this.state.fields["g2TransportationPhysical"] = body.Form[0].g2TransportationPhysical == null ? "" : body.Form[0].g2TransportationPhysical;
            this.state.fields["g2TransportationVerbal"] = body.Form[0].g2TransportationVerbal == null ? "" : body.Form[0].g2TransportationVerbal;
            this.state.fields["g2TransportationInitiates"] = body.Form[0].g2TransportationInitiates == null ? "" : body.Form[0].g2TransportationInitiates;
            this.state.fields["g2FollowNavigationNA"] = body.Form[0].g2FollowNavigationNA == null ? "" : body.Form[0].g2FollowNavigationNA;
            this.state.fields["g2FollowNavigationPhysical"] = body.Form[0].g2FollowNavigationPhysical == null ? "" : body.Form[0].g2FollowNavigationPhysical;
            this.state.fields["g2FollowNavigationVerbal"] = body.Form[0].g2FollowNavigationVerbal == null ? "" : body.Form[0].g2FollowNavigationVerbal;
            this.state.fields["g2FollowNavigationInitiates"] = body.Form[0].g2FollowNavigationInitiates == null ? "" : body.Form[0].g2FollowNavigationInitiates;
            this.state.fields["g2FinancialAdviceNA"] = body.Form[0].g2FinancialAdviceNA == null ? "" : body.Form[0].g2FinancialAdviceNA;
            this.state.fields["g2FinancialAdvicePhysical"] = body.Form[0].g2FinancialAdvicePhysical == null ? "" : body.Form[0].g2FinancialAdvicePhysical;
            this.state.fields["g2FinancialAdviceVerbal"] = body.Form[0].g2FinancialAdviceVerbal == null ? "" : body.Form[0].g2FinancialAdviceVerbal;
            this.state.fields["g2FinancialAdviceInitiates"] = body.Form[0].g2FinancialAdviceInitiates == null ? "" : body.Form[0].g2FinancialAdviceInitiates;
            this.state.fields["g2WriteChecksNA"] = body.Form[0].g2WriteChecksNA == null ? "" : body.Form[0].g2WriteChecksNA;
            this.state.fields["g2WriteChecksPhysical"] = body.Form[0].g2WriteChecksPhysical == null ? "" : body.Form[0].g2WriteChecksPhysical;
            this.state.fields["g2WriteChecksVerbal"] = body.Form[0].g2WriteChecksVerbal == null ? "" : body.Form[0].g2WriteChecksVerbal;
            this.state.fields["g2WriteChecksInitiates"] = body.Form[0].g2WriteChecksInitiates == null ? "" : body.Form[0].g2WriteChecksInitiates;
            this.state.fields["g2ATMTransactionsNA"] = body.Form[0].g2ATMTransactionsNA == null ? "" : body.Form[0].g2ATMTransactionsNA;
            this.state.fields["g2ATMTransactionsPhysical"] = body.Form[0].g2ATMTransactionsPhysical == null ? "" : body.Form[0].g2ATMTransactionsPhysical;
            this.state.fields["g2ATMTransactionsVerbal"] = body.Form[0].g2ATMTransactionsVerbal == null ? "" : body.Form[0].g2ATMTransactionsVerbal;
            this.state.fields["g2ATMTransactionsInitiates"] = body.Form[0].g2ATMTransactionsInitiates == null ? "" : body.Form[0].g2ATMTransactionsInitiates;
            this.state.fields["g2BalanceBankAccountNA"] = body.Form[0].g2BalanceBankAccountNA == null ? "" : body.Form[0].g2BalanceBankAccountNA;
            this.state.fields["g2BalanceBankAccountPhysical"] = body.Form[0].g2BalanceBankAccountPhysical == null ? "" : body.Form[0].g2BalanceBankAccountPhysical;
            this.state.fields["g2BalanceBankAccountVerbal"] = body.Form[0].g2BalanceBankAccountVerbal == null ? "" : body.Form[0].g2BalanceBankAccountVerbal;
            this.state.fields["g2BalanceBankAccountInitiates"] = body.Form[0].g2BalanceBankAccountInitiates == null ? "" : body.Form[0].g2BalanceBankAccountInitiates;
            this.state.fields["g2HousingAdsNA"] = body.Form[0].g2HousingAdsNA == null ? "" : body.Form[0].g2HousingAdsNA;
            this.state.fields["g2HousingAdsPhysical"] = body.Form[0].g2HousingAdsPhysical == null ? "" : body.Form[0].g2HousingAdsPhysical;
            this.state.fields["g2HousingAdsVerbal"] = body.Form[0].g2HousingAdsVerbal == null ? "" : body.Form[0].g2HousingAdsVerbal;
            this.state.fields["g2HousingAdsInitiates"] = body.Form[0].g2HousingAdsInitiates == null ? "" : body.Form[0].g2HousingAdsInitiates;
            this.state.fields["g2EduFinancialAidNA"] = body.Form[0].g2EduFinancialAidNA == null ? "" : body.Form[0].g2EduFinancialAidNA;
            this.state.fields["g2EduFinancialAidPhysical"] = body.Form[0].g2EduFinancialAidPhysical == null ? "" : body.Form[0].g2EduFinancialAidPhysical;
            this.state.fields["g2EduFinancialAidVerbal"] = body.Form[0].g2EduFinancialAidVerbal == null ? "" : body.Form[0].g2EduFinancialAidVerbal;
            this.state.fields["g2EduFinancialAidInitiates"] = body.Form[0].g2EduFinancialAidInitiates == null ? "" : body.Form[0].g2EduFinancialAidInitiates;
            this.state.fields["g2SaveMoneyNA"] = body.Form[0].g2SaveMoneyNA == null ? "" : body.Form[0].g2SaveMoneyNA;
            this.state.fields["g2SaveMoneyPhysical"] = body.Form[0].g2SaveMoneyPhysical == null ? "" : body.Form[0].g2SaveMoneyPhysical;
            this.state.fields["g2SaveMoneyVerbal"] = body.Form[0].g2SaveMoneyVerbal == null ? "" : body.Form[0].g2SaveMoneyVerbal;
            this.state.fields["g2SaveMoneyInitiates"] = body.Form[0].g2SaveMoneyInitiates == null ? "" : body.Form[0].g2SaveMoneyInitiates;
            this.state.fields["g2SocialServicesNA"] = body.Form[0].g2SocialServicesNA == null ? "" : body.Form[0].g2SocialServicesNA;
            this.state.fields["g2SocialServicesPhysical"] = body.Form[0].g2SocialServicesPhysical == null ? "" : body.Form[0].g2SocialServicesPhysical;
            this.state.fields["g2SocialServicesVerbal"] = body.Form[0].g2SocialServicesVerbal == null ? "" : body.Form[0].g2SocialServicesVerbal;
            this.state.fields["g2SocialServicesInitiates"] = body.Form[0].g2SocialServicesInitiates == null ? "" : body.Form[0].g2SocialServicesInitiates;
            this.state.fields["g2CareerEduNA"] = body.Form[0].g2CareerEduNA == null ? "" : body.Form[0].g2CareerEduNA;
            this.state.fields["g2CareerEduPhysical"] = body.Form[0].g2CareerEduPhysical == null ? "" : body.Form[0].g2CareerEduPhysical;
            this.state.fields["g2CareerEduVerbal"] = body.Form[0].g2CareerEduVerbal == null ? "" : body.Form[0].g2CareerEduVerbal;
            this.state.fields["g2CareerEduInitiates"] = body.Form[0].g2CareerEduInitiates == null ? "" : body.Form[0].g2CareerEduInitiates;
            this.state.fields["g2OralCareNA"] = body.Form[0].g2OralCareNA == null ? "" : body.Form[0].g2OralCareNA;
            this.state.fields["g2OralCarePhysical"] = body.Form[0].g2OralCarePhysical == null ? "" : body.Form[0].g2OralCarePhysical;
            this.state.fields["g2OralCareVerbal"] = body.Form[0].g2OralCareVerbal == null ? "" : body.Form[0].g2OralCareVerbal;
            this.state.fields["g2OralCareInitiates"] = body.Form[0].g2OralCareInitiates == null ? "" : body.Form[0].g2OralCareInitiates;
            this.state.fields["g2HairNA"] = body.Form[0].g2HairNA == null ? "" : body.Form[0].g2HairNA;
            this.state.fields["g2HairPhysical"] = body.Form[0].g2HairPhysical == null ? "" : body.Form[0].g2HairPhysical;
            this.state.fields["g2HairVerbal"] = body.Form[0].g2HairVerbal == null ? "" : body.Form[0].g2HairVerbal;
            this.state.fields["g2HairInitiates"] = body.Form[0].g2HairInitiates == null ? "" : body.Form[0].g2HairInitiates;
            this.state.fields["g2SkinCareNA"] = body.Form[0].g2SkinCareNA == null ? "" : body.Form[0].g2SkinCareNA;
            this.state.fields["g2SkinCarePhysical"] = body.Form[0].g2SkinCarePhysical == null ? "" : body.Form[0].g2SkinCarePhysical;
            this.state.fields["g2SkinCareVerbal"] = body.Form[0].g2SkinCareVerbal == null ? "" : body.Form[0].g2SkinCareVerbal;
            this.state.fields["g2SkinCareInitiates"] = body.Form[0].g2SkinCareInitiates == null ? "" : body.Form[0].g2SkinCareInitiates;
            this.state.fields["g2EyeGlassesNA"] = body.Form[0].g2EyeGlassesNA == null ? "" : body.Form[0].g2EyeGlassesNA;
            this.state.fields["g2EyeGlassesPhysical"] = body.Form[0].g2EyeGlassesPhysical == null ? "" : body.Form[0].g2EyeGlassesPhysical;
            this.state.fields["g2EyeGlassesVerbal"] = body.Form[0].g2EyeGlassesVerbal == null ? "" : body.Form[0].g2EyeGlassesVerbal;
            this.state.fields["g2EyeGlassesInitiates"] = body.Form[0].g2EyeGlassesInitiates == null ? "" : body.Form[0].g2EyeGlassesInitiates;
            this.state.fields["g2WellGroomedNA"] = body.Form[0].g2WellGroomedNA == null ? "" : body.Form[0].g2WellGroomedNA;
            this.state.fields["g2WellGroomedPhysical"] = body.Form[0].g2WellGroomedPhysical == null ? "" : body.Form[0].g2WellGroomedPhysical;
            this.state.fields["g2WellGroomedVerbal"] = body.Form[0].g2WellGroomedVerbal == null ? "" : body.Form[0].g2WellGroomedVerbal;
            this.state.fields["g2WellGroomedInitiates"] = body.Form[0].g2WellGroomedInitiates == null ? "" : body.Form[0].g2WellGroomedInitiates;
            this.state.fields["g2ToiletNeedsNA"] = body.Form[0].g2ToiletNeedsNA == null ? "" : body.Form[0].g2ToiletNeedsNA;
            this.state.fields["g2ToiletNeedsPhysical"] = body.Form[0].g2ToiletNeedsPhysical == null ? "" : body.Form[0].g2ToiletNeedsPhysical;
            this.state.fields["g2ToiletNeedsVerbal"] = body.Form[0].g2ToiletNeedsVerbal == null ? "" : body.Form[0].g2ToiletNeedsVerbal;
            this.state.fields["g2ToiletNeedsInitiates"] = body.Form[0].g2ToiletNeedsInitiates == null ? "" : body.Form[0].g2ToiletNeedsInitiates;
            this.state.fields["g2WashHandsNA"] = body.Form[0].g2WashHandsNA == null ? "" : body.Form[0].g2WashHandsNA;
            this.state.fields["g2WashHandsPhysical"] = body.Form[0].g2WashHandsPhysical == null ? "" : body.Form[0].g2WashHandsPhysical;
            this.state.fields["g2WashHandsVerbal"] = body.Form[0].g2WashHandsVerbal == null ? "" : body.Form[0].g2WashHandsVerbal;
            this.state.fields["g2WashHandsInitiates"] = body.Form[0].g2WashHandsInitiates == null ? "" : body.Form[0].g2WashHandsInitiates;
            this.state.fields["g2BatheNA"] = body.Form[0].g2BatheNA == null ? "" : body.Form[0].g2BatheNA;
            this.state.fields["g2BathePhysical"] = body.Form[0].g2BathePhysical == null ? "" : body.Form[0].g2BathePhysical;
            this.state.fields["g2BatheVerbal"] = body.Form[0].g2BatheVerbal == null ? "" : body.Form[0].g2BatheVerbal;
            this.state.fields["g2BatheInitiates"] = body.Form[0].g2BatheInitiates == null ? "" : body.Form[0].g2BatheInitiates;
            this.state.fields["g2ShavingNeedsNA"] = body.Form[0].g2ShavingNeedsNA == null ? "" : body.Form[0].g2ShavingNeedsNA;
            this.state.fields["g2ShavingNeedsPhysical"] = body.Form[0].g2ShavingNeedsPhysical == null ? "" : body.Form[0].g2ShavingNeedsPhysical;
            this.state.fields["g2ShavingNeedsVerbal"] = body.Form[0].g2ShavingNeedsVerbal == null ? "" : body.Form[0].g2ShavingNeedsVerbal;
            this.state.fields["g2ShavingNeedsInitiates"] = body.Form[0].g2ShavingNeedsInitiates == null ? "" : body.Form[0].g2ShavingNeedsInitiates;
            this.state.fields["g2DeodorantNA"] = body.Form[0].g2DeodorantNA == null ? "" : body.Form[0].g2DeodorantNA;
            this.state.fields["g2DeodorantPhysical"] = body.Form[0].g2DeodorantPhysical == null ? "" : body.Form[0].g2DeodorantPhysical;
            this.state.fields["g2DeodorantVerbal"] = body.Form[0].g2DeodorantVerbal == null ? "" : body.Form[0].g2DeodorantVerbal;
            this.state.fields["g2DeodorantInitiates"] = body.Form[0].g2DeodorantInitiates == null ? "" : body.Form[0].g2DeodorantInitiates;
            this.state.fields["g2ClosesDoorNA"] = body.Form[0].g2ClosesDoorNA == null ? "" : body.Form[0].g2ClosesDoorNA;
            this.state.fields["g2ClosesDoorPhysical"] = body.Form[0].g2ClosesDoorPhysical == null ? "" : body.Form[0].g2ClosesDoorPhysical;
            this.state.fields["g2ClosesDoorVerbal"] = body.Form[0].g2ClosesDoorVerbal == null ? "" : body.Form[0].g2ClosesDoorVerbal;
            this.state.fields["g2ClosesDoorInitiates"] = body.Form[0].g2ClosesDoorInitiates == null ? "" : body.Form[0].g2ClosesDoorInitiates;
            this.state.fields["g2MinorInjuriesNA"] = body.Form[0].g2MinorInjuriesNA == null ? "" : body.Form[0].g2MinorInjuriesNA;
            this.state.fields["g2MinorInjuriesPhysical"] = body.Form[0].g2MinorInjuriesPhysical == null ? "" : body.Form[0].g2MinorInjuriesPhysical;
            this.state.fields["g2MinorInjuriesVerbal"] = body.Form[0].g2MinorInjuriesVerbal == null ? "" : body.Form[0].g2MinorInjuriesVerbal;
            this.state.fields["g2MinorInjuriesInitiates"] = body.Form[0].g2MinorInjuriesInitiates == null ? "" : body.Form[0].g2MinorInjuriesInitiates;
            this.state.fields["g2GetsMedicalHelpNA"] = body.Form[0].g2GetsMedicalHelpNA == null ? "" : body.Form[0].g2GetsMedicalHelpNA;
            this.state.fields["g2GetsMedicalHelpPhysical"] = body.Form[0].g2GetsMedicalHelpPhysical == null ? "" : body.Form[0].g2GetsMedicalHelpPhysical;
            this.state.fields["g2GetsMedicalHelpVerbal"] = body.Form[0].g2GetsMedicalHelpVerbal == null ? "" : body.Form[0].g2GetsMedicalHelpVerbal;
            this.state.fields["g2GetsMedicalHelpInitiates"] = body.Form[0].g2GetsMedicalHelpInitiates == null ? "" : body.Form[0].g2GetsMedicalHelpInitiates;
            this.state.fields["g2Call911NA"] = body.Form[0].g2Call911NA == null ? "" : body.Form[0].g2Call911NA;
            this.state.fields["g2Call911Physical"] = body.Form[0].g2Call911Physical == null ? "" : body.Form[0].g2Call911Physical;
            this.state.fields["g2Call911Verbal"] = body.Form[0].g2Call911Verbal == null ? "" : body.Form[0].g2Call911Verbal;
            this.state.fields["g2Call911Initiates"] = body.Form[0].g2Call911Initiates == null ? "" : body.Form[0].g2Call911Initiates;
            this.state.fields["g2HelpIfUnsafeNA"] = body.Form[0].g2HelpIfUnsafeNA == null ? "" : body.Form[0].g2HelpIfUnsafeNA;
            this.state.fields["g2HelpIfUnsafePhysical"] = body.Form[0].g2HelpIfUnsafePhysical == null ? "" : body.Form[0].g2HelpIfUnsafePhysical;
            this.state.fields["g2HelpIfUnsafeVerbal"] = body.Form[0].g2HelpIfUnsafeVerbal == null ? "" : body.Form[0].g2HelpIfUnsafeVerbal;
            this.state.fields["g2HelpIfUnsafeInitiates"] = body.Form[0].g2HelpIfUnsafeInitiates == null ? "" : body.Form[0].g2HelpIfUnsafeInitiates;
            this.state.fields["g2IDStrangerNA"] = body.Form[0].g2IDStrangerNA == null ? "" : body.Form[0].g2IDStrangerNA;
            this.state.fields["g2IDStrangerPhysical"] = body.Form[0].g2IDStrangerPhysical == null ? "" : body.Form[0].g2IDStrangerPhysical;
            this.state.fields["g2IDStrangerVerbal"] = body.Form[0].g2IDStrangerVerbal == null ? "" : body.Form[0].g2IDStrangerVerbal;
            this.state.fields["g2IDStrangerInitiates"] = body.Form[0].g2IDStrangerInitiates == null ? "" : body.Form[0].g2IDStrangerInitiates;
            this.state.fields["g2PoliteNA"] = body.Form[0].g2PoliteNA == null ? "" : body.Form[0].g2PoliteNA;
            this.state.fields["g2PolitePhysical"] = body.Form[0].g2PolitePhysical == null ? "" : body.Form[0].g2PolitePhysical;
            this.state.fields["g2PoliteVerbal"] = body.Form[0].g2PoliteVerbal == null ? "" : body.Form[0].g2PoliteVerbal;
            this.state.fields["g2PoliteInitiates"] = body.Form[0].g2PoliteInitiates == null ? "" : body.Form[0].g2PoliteInitiates;
            this.state.fields["g2RespectOthersThingsNA"] = body.Form[0].g2RespectOthersThingsNA == null ? "" : body.Form[0].g2RespectOthersThingsNA;
            this.state.fields["g2RespectOthersThingsPhysical"] = body.Form[0].g2RespectOthersThingsPhysical == null ? "" : body.Form[0].g2RespectOthersThingsPhysical;
            this.state.fields["g2RespectOthersThingsVerbal"] = body.Form[0].g2RespectOthersThingsVerbal == null ? "" : body.Form[0].g2RespectOthersThingsVerbal;
            this.state.fields["g2RespectOthersThingsInitiates"] = body.Form[0].g2RespectOthersThingsInitiates == null ? "" : body.Form[0].g2RespectOthersThingsInitiates;
            this.state.fields["g2RespectOthersIdeasNA"] = body.Form[0].g2RespectOthersIdeasNA == null ? "" : body.Form[0].g2RespectOthersIdeasNA;
            this.state.fields["g2RespectOthersIdeasPhysical"] = body.Form[0].g2RespectOthersIdeasPhysical == null ? "" : body.Form[0].g2RespectOthersIdeasPhysical;
            this.state.fields["g2RespectOthersIdeasVerbal"] = body.Form[0].g2RespectOthersIdeasVerbal == null ? "" : body.Form[0].g2RespectOthersIdeasVerbal;
            this.state.fields["g2RespectOthersIdeasInitiates"] = body.Form[0].g2RespectOthersIdeasInitiates == null ? "" : body.Form[0].g2RespectOthersIdeasInitiates;
            this.state.fields["g2AppreciationNA"] = body.Form[0].g2AppreciationNA == null ? "" : body.Form[0].g2AppreciationNA;
            this.state.fields["g2AppreciationPhysical"] = body.Form[0].g2AppreciationPhysical == null ? "" : body.Form[0].g2AppreciationPhysical;
            this.state.fields["g2AppreciationVerbal"] = body.Form[0].g2AppreciationVerbal == null ? "" : body.Form[0].g2AppreciationVerbal;
            this.state.fields["g2AppreciationInitiates"] = body.Form[0].g2AppreciationInitiates == null ? "" : body.Form[0].g2AppreciationInitiates;
            this.state.fields["g2NonviolentAngerNA"] = body.Form[0].g2NonviolentAngerNA == null ? "" : body.Form[0].g2NonviolentAngerNA;
            this.state.fields["g2NonviolentAngerPhysical"] = body.Form[0].g2NonviolentAngerPhysical == null ? "" : body.Form[0].g2NonviolentAngerPhysical;
            this.state.fields["g2NonviolentAngerVerbal"] = body.Form[0].g2NonviolentAngerVerbal == null ? "" : body.Form[0].g2NonviolentAngerVerbal;
            this.state.fields["g2NonviolentAngerInitiates"] = body.Form[0].g2NonviolentAngerInitiates == null ? "" : body.Form[0].g2NonviolentAngerInitiates;
            this.state.fields["g2EffectOfChoicesNA"] = body.Form[0].g2EffectOfChoicesNA == null ? "" : body.Form[0].g2EffectOfChoicesNA;
            this.state.fields["g2EffectOfChoicesPhysical"] = body.Form[0].g2EffectOfChoicesPhysical == null ? "" : body.Form[0].g2EffectOfChoicesPhysical;
            this.state.fields["g2EffectOfChoicesVerbal"] = body.Form[0].g2EffectOfChoicesVerbal == null ? "" : body.Form[0].g2EffectOfChoicesVerbal;
            this.state.fields["g2EffectOfChoicesInitiates"] = body.Form[0].g2EffectOfChoicesInitiates == null ? "" : body.Form[0].g2EffectOfChoicesInitiates;
            this.state.fields["g2InternetSafetyNA"] = body.Form[0].g2InternetSafetyNA == null ? "" : body.Form[0].g2InternetSafetyNA;
            this.state.fields["g2InternetSafetyPhysical"] = body.Form[0].g2InternetSafetyPhysical == null ? "" : body.Form[0].g2InternetSafetyPhysical;
            this.state.fields["g2InternetSafetyVerbal"] = body.Form[0].g2InternetSafetyVerbal == null ? "" : body.Form[0].g2InternetSafetyVerbal;
            this.state.fields["g2InternetSafetyInitiates"] = body.Form[0].g2InternetSafetyInitiates == null ? "" : body.Form[0].g2InternetSafetyInitiates;
            this.state.fields["g2PublicPrivateNA"] = body.Form[0].g2PublicPrivateNA == null ? "" : body.Form[0].g2PublicPrivateNA;
            this.state.fields["g2PublicPrivatePhysical"] = body.Form[0].g2PublicPrivatePhysical == null ? "" : body.Form[0].g2PublicPrivatePhysical;
            this.state.fields["g2PublicPrivateVerbal"] = body.Form[0].g2PublicPrivateVerbal == null ? "" : body.Form[0].g2PublicPrivateVerbal;
            this.state.fields["g2PublicPrivateInitiates"] = body.Form[0].g2PublicPrivateInitiates == null ? "" : body.Form[0].g2PublicPrivateInitiates;
            this.state.fields["g2WorkDoneOnTimeNA"] = body.Form[0].g2WorkDoneOnTimeNA == null ? "" : body.Form[0].g2WorkDoneOnTimeNA;
            this.state.fields["g2WorkDoneOnTimePhysical"] = body.Form[0].g2WorkDoneOnTimePhysical == null ? "" : body.Form[0].g2WorkDoneOnTimePhysical;
            this.state.fields["g2WorkDoneOnTimeVerbal"] = body.Form[0].g2WorkDoneOnTimeVerbal == null ? "" : body.Form[0].g2WorkDoneOnTimeVerbal;
            this.state.fields["g2WorkDoneOnTimeInitiates"] = body.Form[0].g2WorkDoneOnTimeInitiates == null ? "" : body.Form[0].g2WorkDoneOnTimeInitiates;
            this.state.fields["g2OnTimeToSchoolNA"] = body.Form[0].g2OnTimeToSchoolNA == null ? "" : body.Form[0].g2OnTimeToSchoolNA;
            this.state.fields["g2OnTimeToSchoolPhysical"] = body.Form[0].g2OnTimeToSchoolPhysical == null ? "" : body.Form[0].g2OnTimeToSchoolPhysical;
            this.state.fields["g2OnTimeToSchoolVerbal"] = body.Form[0].g2OnTimeToSchoolVerbal == null ? "" : body.Form[0].g2OnTimeToSchoolVerbal;
            this.state.fields["g2OnTimeToSchoolInitiates"] = body.Form[0].g2OnTimeToSchoolInitiates == null ? "" : body.Form[0].g2OnTimeToSchoolInitiates;
            this.state.fields["g2SchoolHelpNA"] = body.Form[0].g2SchoolHelpNA == null ? "" : body.Form[0].g2SchoolHelpNA;
            this.state.fields["g2SchoolHelpPhysical"] = body.Form[0].g2SchoolHelpPhysical == null ? "" : body.Form[0].g2SchoolHelpPhysical;
            this.state.fields["g2SchoolHelpVerbal"] = body.Form[0].g2SchoolHelpVerbal == null ? "" : body.Form[0].g2SchoolHelpVerbal;
            this.state.fields["g2SchoolHelpInitiates"] = body.Form[0].g2SchoolHelpInitiates == null ? "" : body.Form[0].g2SchoolHelpInitiates;
            this.state.fields["g2ExamPrepNA"] = body.Form[0].g2ExamPrepNA == null ? "" : body.Form[0].g2ExamPrepNA;
            this.state.fields["g2ExamPrepPhysical"] = body.Form[0].g2ExamPrepPhysical == null ? "" : body.Form[0].g2ExamPrepPhysical;
            this.state.fields["g2ExamPrepVerbal"] = body.Form[0].g2ExamPrepVerbal == null ? "" : body.Form[0].g2ExamPrepVerbal;
            this.state.fields["g2ExamPrepInitiates"] = body.Form[0].g2ExamPrepInitiates == null ? "" : body.Form[0].g2ExamPrepInitiates;
            this.state.fields["g2LooksForMistakesNA"] = body.Form[0].g2LooksForMistakesNA == null ? "" : body.Form[0].g2LooksForMistakesNA;
            this.state.fields["g2LooksForMistakesPhysical"] = body.Form[0].g2LooksForMistakesPhysical == null ? "" : body.Form[0].g2LooksForMistakesPhysical;
            this.state.fields["g2LooksForMistakesVerbal"] = body.Form[0].g2LooksForMistakesVerbal == null ? "" : body.Form[0].g2LooksForMistakesVerbal;
            this.state.fields["g2LooksForMistakesInitiates"] = body.Form[0].g2LooksForMistakesInitiates == null ? "" : body.Form[0].g2LooksForMistakesInitiates;
            this.state.fields["g2GetsInformationNA"] = body.Form[0].g2GetsInformationNA == null ? "" : body.Form[0].g2GetsInformationNA;
            this.state.fields["g2GetsInformationPhysical"] = body.Form[0].g2GetsInformationPhysical == null ? "" : body.Form[0].g2GetsInformationPhysical;
            this.state.fields["g2GetsInformationVerbal"] = body.Form[0].g2GetsInformationVerbal == null ? "" : body.Form[0].g2GetsInformationVerbal;
            this.state.fields["g2GetsInformationInitiates"] = body.Form[0].g2GetsInformationInitiates == null ? "" : body.Form[0].g2GetsInformationInitiates;
            this.state.fields["g2InternetForHomeworkNA"] = body.Form[0].g2InternetForHomeworkNA == null ? "" : body.Form[0].g2InternetForHomeworkNA;
            this.state.fields["g2InternetForHomeworkPhysical"] = body.Form[0].g2InternetForHomeworkPhysical == null ? "" : body.Form[0].g2InternetForHomeworkPhysical;
            this.state.fields["g2InternetForHomeworkVerbal"] = body.Form[0].g2InternetForHomeworkVerbal == null ? "" : body.Form[0].g2InternetForHomeworkVerbal;
            this.state.fields["g2InternetForHomeworkInitiates"] = body.Form[0].g2InternetForHomeworkInitiates == null ? "" : body.Form[0].g2InternetForHomeworkInitiates;
            this.state.fields["g2SearchEngineNA"] = body.Form[0].g2SearchEngineNA == null ? "" : body.Form[0].g2SearchEngineNA;
            this.state.fields["g2SearchEnginePhysical"] = body.Form[0].g2SearchEnginePhysical == null ? "" : body.Form[0].g2SearchEnginePhysical;
            this.state.fields["g2SearchEngineVerbal"] = body.Form[0].g2SearchEngineVerbal == null ? "" : body.Form[0].g2SearchEngineVerbal;
            this.state.fields["g2SearchEngineInitiates"] = body.Form[0].g2SearchEngineInitiates == null ? "" : body.Form[0].g2SearchEngineInitiates;
            this.state.fields["g2ComputerDocumentsNA"] = body.Form[0].g2ComputerDocumentsNA == null ? "" : body.Form[0].g2ComputerDocumentsNA;
            this.state.fields["g2ComputerDocumentsPhysical"] = body.Form[0].g2ComputerDocumentsPhysical == null ? "" : body.Form[0].g2ComputerDocumentsPhysical;
            this.state.fields["g2ComputerDocumentsVerbal"] = body.Form[0].g2ComputerDocumentsVerbal == null ? "" : body.Form[0].g2ComputerDocumentsVerbal;
            this.state.fields["g2ComputerDocumentsInitiates"] = body.Form[0].g2ComputerDocumentsInitiates == null ? "" : body.Form[0].g2ComputerDocumentsInitiates;
            this.state.fields["g2MakeAppointmentsNA"] = body.Form[0].g2MakeAppointmentsNA == null ? "" : body.Form[0].g2MakeAppointmentsNA;
            this.state.fields["g2MakeAppointmentsPhysical"] = body.Form[0].g2MakeAppointmentsPhysical == null ? "" : body.Form[0].g2MakeAppointmentsPhysical;
            this.state.fields["g2MakeAppointmentsVerbal"] = body.Form[0].g2MakeAppointmentsVerbal == null ? "" : body.Form[0].g2MakeAppointmentsVerbal;
            this.state.fields["g2MakeAppointmentsInitiates"] = body.Form[0].g2MakeAppointmentsInitiates == null ? "" : body.Form[0].g2MakeAppointmentsInitiates;
            this.state.fields["g2HurtRelationshipsNA"] = body.Form[0].g2HurtRelationshipsNA == null ? "" : body.Form[0].g2HurtRelationshipsNA;
            this.state.fields["g2HurtRelationshipsPhysical"] = body.Form[0].g2HurtRelationshipsPhysical == null ? "" : body.Form[0].g2HurtRelationshipsPhysical;
            this.state.fields["g2HurtRelationshipsVerbal"] = body.Form[0].g2HurtRelationshipsVerbal == null ? "" : body.Form[0].g2HurtRelationshipsVerbal;
            this.state.fields["g2HurtRelationshipsInitiates"] = body.Form[0].g2HurtRelationshipsInitiates == null ? "" : body.Form[0].g2HurtRelationshipsInitiates;
            this.state.fields["g2BirthCertificateNA"] = body.Form[0].g2BirthCertificateNA == null ? "" : body.Form[0].g2BirthCertificateNA;
            this.state.fields["g2BirthCertificatePhysical"] = body.Form[0].g2BirthCertificatePhysical == null ? "" : body.Form[0].g2BirthCertificatePhysical;
            this.state.fields["g2BirthCertificateVerbal"] = body.Form[0].g2BirthCertificateVerbal == null ? "" : body.Form[0].g2BirthCertificateVerbal;
            this.state.fields["g2BirthCertificateInitiates"] = body.Form[0].g2BirthCertificateInitiates == null ? "" : body.Form[0].g2BirthCertificateInitiates;
            this.state.fields["g2SocialSecurityCardNA"] = body.Form[0].g2SocialSecurityCardNA == null ? "" : body.Form[0].g2SocialSecurityCardNA;
            this.state.fields["g2SocialSecurityCardPhysical"] = body.Form[0].g2SocialSecurityCardPhysical == null ? "" : body.Form[0].g2SocialSecurityCardPhysical;
            this.state.fields["g2SocialSecurityCardVerbal"] = body.Form[0].g2SocialSecurityCardVerbal == null ? "" : body.Form[0].g2SocialSecurityCardVerbal;
            this.state.fields["g2SocialSecurityCardInitiates"] = body.Form[0].g2SocialSecurityCardInitiates == null ? "" : body.Form[0].g2SocialSecurityCardInitiates;
        }
        return body;
    };

    updateFields() {
        let fields = this.state.fields;
        infoObj.ChildID = childID;
        infoObj.dob = fields["dob"];
        infoObj.age = fields["age"];
        infoObj.diagnosis = fields["diagnosis"];
        infoObj.height = fields["height"];
        infoObj.weight = fields["weight"];
        infoObj.street = fields["street"];
        infoObj.city = fields["city"];
        infoObj.state = fields["state"];
        infoObj.zip = fields["zip"];
        infoObj.country = fields["country"];
        infoObj.homeNumber = fields["homeNumber"];
        infoObj.section1Comments = fields["section1Comments"];
        infoObj.isAdopted = fields["isAdopted"];
        infoObj.isAdoptedAge = fields["isAdoptedAge"];
        infoObj.birthCountry = fields["birthCountry"];
        infoObj.motherName = fields["motherName"];
        infoObj.motherAge = fields["motherAge"];
        infoObj.motherCell = fields["motherCell"];
        infoObj.motherEmail = fields["motherEmail"];
        infoObj.motherOccupation = fields["motherOccupation"];
        infoObj.fatherName = fields["fatherName"];
        infoObj.fatherAge = fields["fatherAge"];
        infoObj.fatherCell = fields["fatherCell"];
        infoObj.fatherEmail = fields["fatherEmail"];
        infoObj.fatherOccupation = fields["fatherOccupation"];
        infoObj.maritalStatus = fields["maritalStatus"];
        infoObj.legalGuardian = fields["legalGuardian"];
        infoObj.sMotherName = fields["sMotherName"];
        infoObj.sMotherAge = fields["sMotherAge"];
        infoObj.sMotherCell = fields["sMotherCell"];
        infoObj.sMotherEmail = fields["sMotherEmail"];
        infoObj.sMotherOccupation = fields["sMotherOccupation"];
        infoObj.sFatherName = fields["sFatherName"];
        infoObj.sFatherAge = fields["sFatherAge"];
        infoObj.sFatherCell = fields["sFatherCell"];
        infoObj.sFatherEmail = fields["sFatherEmail"];
        infoObj.sFatherOccupation = fields["sFatherOccupation"];
        infoObj.sib1Name = fields["sib1Name"];
        infoObj.sib1Age = fields["sib1Age"];
        infoObj.sib1Gender = fields["sib1Gender"];
        infoObj.sib2Name = fields["sib2Name"];
        infoObj.sib2Age = fields["sib2Age"];
        infoObj.sib2Gender = fields["sib2Gender"];
        infoObj.sib3Name = fields["sib3Name"];
        infoObj.sib3Age = fields["sib3Age"];
        infoObj.sib3Gender = fields["sib3Gender"];
        infoObj.sib4Name = fields["sib4Name"];
        infoObj.sib4Age = fields["sib4Age"];
        infoObj.sib4Gender = fields["sib4Gender"];
        infoObj.sib5Name = fields["sib5Name"];
        infoObj.sib5Age = fields["sib5Age"];
        infoObj.sib5Gender = fields["sib5Gender"];
        infoObj.section2Comments = fields["section2Comments"];
        infoObj.birthWeek = fields["birthWeek"];
        infoObj.birthWeight = fields["birthWeight"];
        infoObj.deliveryType = fields["deliveryType"];
        infoObj.pregComplications = fields["pregComplications"];
        infoObj.pregComplicationDescription = fields["pregComplicationDescription"];
        infoObj.hospitalizedAfterBirth = fields["hospitalizedAfterBirth"];
        infoObj.hospitaliedAfterBirthDescription = fields["hospitaliedAfterBirthDescription"];
        infoObj.section3Comments = fields["section3Comments"];
        infoObj.crawlYears = fields["crawlYears"];
        infoObj.crawlMonths = fields["crawlMonths"];
        infoObj.crawlNa = fields["crawlNa"];
        infoObj.creptYears = fields["creptYears"];
        infoObj.creptMonths = fields["creptMonths"];
        infoObj.creptNa = fields["creptNa"];
        infoObj.walkYears = fields["walkYears"];
        infoObj.walkMonths = fields["walkMonths"];
        infoObj.walkNa = fields["walkNa"];
        infoObj.toiletYears = fields["toiletYears"];
        infoObj.toiletMonths = fields["toiletMonths"];
        infoObj.toiletNa = fields["toiletNa"];
        infoObj.wordYears = fields["wordYears"];
        infoObj.wordMonths = fields["wordMonths"];
        infoObj.wordNa = fields["wordNa"];
        infoObj.coupletYears = fields["coupletYears"];
        infoObj.coupletMonths = fields["coupletMonths"];
        infoObj.coupletNa = fields["coupletNa"];
        infoObj.phraseYears = fields["phraseYears"];
        infoObj.phraseMonths = fields["phraseMonths"];
        infoObj.phraseNa = fields["phraseNa"];
        infoObj.sentenceYears = fields["sentenceYears"];
        infoObj.sentenceMonths = fields["sentenceMonths"];
        infoObj.sentenceNa = fields["sentenceNa"];
        infoObj.conversationYears = fields["conversationYears"];
        infoObj.conversationMonths = fields["conversationMonths"];
        infoObj.conversationNa = fields["conversationNa"];
        infoObj.readYears = fields["readYears"];
        infoObj.readMonths = fields["readMonths"];
        infoObj.readNa = fields["readNa"];
        infoObj.section4Comments = fields["section4Comments"];
        infoObj.drName = fields["drName"];
        infoObj.drPhone = fields["drPhone"];
        infoObj.drStreet = fields["drStreet"];
        infoObj.drCity = fields["drCity"];
        infoObj.drState = fields["drState"];
        infoObj.drZip = fields["drZip"];
        infoObj.drCountry = fields["drCountry"];
        infoObj.drName2 = fields["drName2"];
        infoObj.drPhone2 = fields["drPhone2"];
        infoObj.drStreet2 = fields["drStreet2"];
        infoObj.drCity2 = fields["drCity2"];
        infoObj.drState2 = fields["drState2"];
        infoObj.drZip2 = fields["drZip2"];
        infoObj.drCountry2 = fields["drCountry2"];
        infoObj.outsideTherapy = fields["outsideTherapy"];
        infoObj.doc1Name = fields["doc1Name"];
        infoObj.doc1Specialty = fields["doc1Specialty"];
        infoObj.doc1Phone = fields["doc1Phone"];
        infoObj.doc1Sched = fields["doc1Sched"];
        infoObj.doc2Name = fields["doc2Name"];
        infoObj.doc2Specialty = fields["doc2Specialty"];
        infoObj.doc2Phone = fields["doc2Phone"];
        infoObj.doc2Sched = fields["doc2Sched"];
        infoObj.doc3Name = fields["doc3Name"];
        infoObj.doc3Specialty = fields["doc3Specialty"];
        infoObj.doc3Phone = fields["doc3Phone"];
        infoObj.doc3Sched = fields["doc3Sched"];
        infoObj.doc4Name = fields["doc4Name"];
        infoObj.doc4Specialty = fields["doc4Specialty"];
        infoObj.doc4Phone = fields["doc4Phone"];
        infoObj.doc4Sched = fields["doc4Sched"];
        infoObj.doc5Name = fields["doc5Name"];
        infoObj.doc5Specialty = fields["doc5Specialty"];
        infoObj.doc5Phone = fields["doc5Phone"];
        infoObj.doc5Sched = fields["doc5Sched"];
        infoObj.specialDoc1Name = fields["specialDoc1Name"];
        infoObj.specialDoc1Specialty = fields["specialDoc1Specialty"];
        infoObj.specialDoc1Phone = fields["specialDoc1Phone"];
        infoObj.specialDoc1Sched = fields["specialDoc1Sched"];
        infoObj.specialDoc2Name = fields["specialDoc2Name"];
        infoObj.specialDoc2Specialty = fields["specialDoc2Specialty"];
        infoObj.specialDoc2Phone = fields["specialDoc2Phone"];
        infoObj.specialDoc2Sched = fields["specialDoc2Sched"];
        infoObj.specialDoc3Name = fields["specialDoc3Name"];
        infoObj.specialDoc3Specialty = fields["specialDoc3Specialty"];
        infoObj.specialDoc3Phone = fields["specialDoc3Phone"];
        infoObj.specialDoc3Sched = fields["specialDoc3Sched"];
        infoObj.specialDoc4Name = fields["specialDoc4Name"];
        infoObj.specialDoc4Specialty = fields["specialDoc4Specialty"];
        infoObj.specialDoc4Phone = fields["specialDoc4Phone"];
        infoObj.specialDoc4Sched = fields["specialDoc4Sched"];
        infoObj.specialDoc5Name = fields["specialDoc5Name"];
        infoObj.specialDoc5Specialty = fields["specialDoc5Specialty"];
        infoObj.specialDoc5Phone = fields["specialDoc5Phone"];
        infoObj.specialDoc5Sched = fields["specialDoc5Sched"];
        infoObj.test1Date = fields["test1Date"];
        infoObj.test1Examiner = fields["test1Examiner"];
        infoObj.test1Diagnosis = fields["test1Diagnosis"];
        infoObj.test1Reco = fields["test1Reco"];
        infoObj.test2Date = fields["test2Date"];
        infoObj.test2Examiner = fields["test2Examiner"];
        infoObj.test2Diagnosis = fields["test2Diagnosis"];
        infoObj.test2Reco = fields["test2Reco"];
        infoObj.test3Date = fields["test3Date"];
        infoObj.test3Examiner = fields["test3Examiner"];
        infoObj.test3Diagnosis = fields["test3Diagnosis"];
        infoObj.test3Reco = fields["test3Reco"];
        infoObj.test4Date = fields["test4Date"];
        infoObj.test4Examiner = fields["test4Examiner"];
        infoObj.test4Diagnosis = fields["test4Diagnosis"];
        infoObj.test4Reco = fields["test4Reco"];
        infoObj.test5Date = fields["test5Date"];
        infoObj.test5Examiner = fields["test5Examiner"];
        infoObj.test5Diagnosis = fields["test5Diagnosis"];
        infoObj.test5Reco = fields["test5Reco"];
        infoObj.hospital = fields["hospital"];
        infoObj.otherMedicalConditions = fields["otherMedicalConditions"];
        infoObj.epilepsy = fields["epilepsy"];
        infoObj.diabetes = fields["diabetes"];
        infoObj.asthma = fields["asthma"];
        infoObj.epipen = fields["epipen"];
        infoObj.medConditionOther = fields["medConditionOther"];
        infoObj.feedSupport = fields["feedSupport"];
        infoObj.toiletEquip = fields["toiletEquip"];
        infoObj.mobilityEquip = fields["mobilityEquip"];
        infoObj.communicationEquip = fields["communicationEquip"];
        infoObj.oxygenTank = fields["oxygenTank"];
        infoObj.hearingDevice = fields["hearingDevice"];
        infoObj.otherSupply = fields["otherSupply"];
        infoObj.otherSupplyDetail = fields["otherSupplyDetail"];
        infoObj.med1Name = fields["med1Name"];
        infoObj.med1Dosage = fields["med1Dosage"];
        infoObj.med1TimeGiven = fields["med1TimeGiven"];
        infoObj.med1Frequency = fields["med1Frequency"];
        infoObj.med1Purpose = fields["med1Purpose"];
        infoObj.med1SideEffect = fields["med1SideEffect"];
        infoObj.med2Name = fields["med2Name"];
        infoObj.med2Dosage = fields["med2Dosage"];
        infoObj.med2TimeGiven = fields["med2TimeGiven"];
        infoObj.med2Frequency = fields["med2Frequency"];
        infoObj.med2Purpose = fields["med2Purpose"];
        infoObj.med2SideEffect = fields["med2SideEffect"];
        infoObj.med3Name = fields["med3Name"];
        infoObj.med3Dosage = fields["med3Dosage"];
        infoObj.med3TimeGiven = fields["med3TimeGiven"];
        infoObj.med3Frequency = fields["med3Frequency"];
        infoObj.med3Purpose = fields["med3Purpose"];
        infoObj.med3SideEffect = fields["med3SideEffect"];
        infoObj.med4Name = fields["med4Name"];
        infoObj.med4Dosage = fields["med4Dosage"];
        infoObj.med4TimeGiven = fields["med4TimeGiven"];
        infoObj.med4Frequency = fields["med4Frequency"];
        infoObj.med4Purpose = fields["med4Purpose"];
        infoObj.med4SideEffect = fields["med4SideEffect"];
        infoObj.med5Name = fields["med5Name"];
        infoObj.med5Dosage = fields["med5Dosage"];
        infoObj.med5TimeGiven = fields["med5TimeGiven"];
        infoObj.med5Frequency = fields["med5Frequency"];
        infoObj.med5Purpose = fields["med5Purpose"];
        infoObj.med5SideEffect = fields["med5SideEffect"];
        infoObj.section5Comments = fields["section5Comments"];
        infoObj.diet = fields["diet"];
        infoObj.vegetableExcess = fields["vegetableExcess"];
        infoObj.vegetableDaily = fields["vegetableDaily"];
        infoObj.vegetableWeekly = fields["vegetableWeekly"];
        infoObj.vegetableRarely = fields["vegetableRarely"];
        infoObj.vegetableNever = fields["vegetableNever"];
        infoObj.fruitExcess = fields["fruitExcess"];
        infoObj.fruitDaily = fields["fruitDaily"];
        infoObj.fruitWeekly = fields["fruitWeekly"];
        infoObj.fruitRarely = fields["fruitRarely"];
        infoObj.fruitNever = fields["fruitNever"];
        infoObj.meatExcess = fields["meatExcess"];
        infoObj.meatDaily = fields["meatDaily"];
        infoObj.meatWeekly = fields["meatWeekly"];
        infoObj.meatRarely = fields["meatRarely"];
        infoObj.meatNever = fields["meatNever"];
        infoObj.sugarExcess = fields["sugarExcess"];
        infoObj.sugarDaily = fields["sugarDaily"];
        infoObj.sugarWeekly = fields["sugarWeekly"];
        infoObj.sugarRarely = fields["sugarRarely"];
        infoObj.sugarNever = fields["sugarNever"];
        infoObj.artSweetenerExcess = fields["artSweetenerExcess"];
        infoObj.artSweetenerDaily = fields["artSweetenerDaily"];
        infoObj.artSweetenerWeekly = fields["artSweetenerWeekly"];
        infoObj.artSweetenerRarely = fields["artSweetenerRarely"];
        infoObj.artSweetenerNever = fields["artSweetenerNever"];
        infoObj.artProductsExcess = fields["artProductsExcess"];
        infoObj.artProductsDaily = fields["artProductsDaily"];
        infoObj.artProductsWeekly = fields["artProductsWeekly"];
        infoObj.artProductsRarely = fields["artProductsRarely"];
        infoObj.artProductsNever = fields["artProductsNever"];
        infoObj.dairyExcess = fields["dairyExcess"];
        infoObj.dairyWeekly = fields["dairyWeekly"];
        infoObj.dairyRarely = fields["dairyRarely"];
        infoObj.dairyNever = fields["dairyNever"];
        infoObj.flourExcess = fields["flourExcess"];
        infoObj.flourDaily = fields["flourDaily"];
        infoObj.flourWeekly = fields["flourWeekly"];
        infoObj.flourRarely = fields["flourRarely"];
        infoObj.flourNever = fields["flourNever"];
        infoObj.allergies = fields["allergies"];
        infoObj.describeAllergies = fields["describeAllergies"];
        infoObj.breakfastTime = fields["breakfastTime"];
        infoObj.lunchTime = fields["lunchTime"];
        infoObj.dinnerTime = fields["dinnerTime"];
        infoObj.snackTime = fields["snackTime"];
        infoObj.hoursOfSleep = fields["hoursOfSleep"];
        infoObj.bedTime = fields["bedTime"];
        infoObj.wakeTime = fields["wakeTime"];
        infoObj.troubleFallingAsleep = fields["troubleFallingAsleep"];
        infoObj.troubleStayingAsleep = fields["troubleStayingAsleep"];
        infoObj.wakesEarly = fields["wakesEarly"];
        infoObj.lowMuscleTone = fields["lowMuscleTone"];
        infoObj.highMuscleTone = fields["highMuscleTone"];
        infoObj.coordination = fields["coordination"];
        infoObj.crawling = fields["crawling"];
        infoObj.walking = fields["walking"];
        infoObj.running = fields["running"];
        infoObj.athetoid = fields["athetoid"];
        infoObj.ataxic = fields["ataxic"];
        infoObj.weak = fields["weak"];
        infoObj.balance = fields["balance"];
        infoObj.otherPhysicalMotor = fields["otherPhysicalMotor"];
        infoObj.section6Comments = fields["section6Comments"];
        infoObj.program1name = fields["program1name"];
        infoObj.startdate1 = fields["startdate1"];
        infoObj.provider1 = fields["provider1"];
        infoObj.phonenumber1 = fields["phonenumber1"];
        infoObj.contactpermission1 = fields["contactpermission1"];
        infoObj.program2name = fields["program2name"];
        infoObj.startdate2 = fields["startdate2"];
        infoObj.provider2 = fields["provider2"];
        infoObj.phonenumber2 = fields["phonenumber2"];
        infoObj.contactpermission2 = fields["contactpermission2"];
        infoObj.program3name = fields["program3name"];
        infoObj.startdate3 = fields["startdate3"];
        infoObj.provider3 = fields["provider3"];
        infoObj.phonenumber3 = fields["phonenumber3"];
        infoObj.contactpermission3 = fields["contactpermission3"];
        infoObj.program4name = fields["program4name"];
        infoObj.startdate4 = fields["startdate4"];
        infoObj.provider4 = fields["provider4"];
        infoObj.phonenumber4 = fields["phonenumber4"];
        infoObj.contactpermission4 = fields["contactpermission4"];
        infoObj.program5name = fields["program5name"];
        infoObj.startdate5 = fields["startdate5"];
        infoObj.provider5 = fields["provider5"];
        infoObj.phonenumber5 = fields["phonenumber5"];
        infoObj.contactpermission5 = fields["contactpermission5"];
        infoObj.educationalChallenges = fields["educationalChallenges"];
        infoObj.exceptionalTalents = fields["exceptionalTalents"];
        infoObj.iepPlan = fields["iepPlan"];
        infoObj.handPreference1 = fields["handPreference1"];
        infoObj.handPreference2 = fields["handPreference2"];
        infoObj.handPreference3 = fields["handPreference3"];
        infoObj.handPreference4 = fields["handPreference4"];
        infoObj.handPreference5 = fields["handPreference5"];
        infoObj.skill1 = fields["skill1"];
        infoObj.skill2 = fields["skill2"];
        infoObj.skill3 = fields["skill3"];
        infoObj.skill4 = fields["skill4"];
        infoObj.skill5 = fields["skill5"];
        infoObj.skill6 = fields["skill6"];
        infoObj.skill7 = fields["skill7"];
        infoObj.skill8 = fields["skill8"];
        infoObj.skill9 = fields["skill9"];
        infoObj.skill10 = fields["skill10"];
        infoObj.academicGoal = fields["academicGoal"];
        infoObj.section7Comments = fields["section7Comments"];
        infoObj.verbalSkills = fields["verbalSkills"];
        infoObj.verbalLevel = fields["verbalLevel"];
        infoObj.pointing = fields["pointing"];
        infoObj.signLanguage = fields["signLanguage"];
        infoObj.typeOfSignLanguage = fields["typeOfSignLanguage"];
        infoObj.numberOfSigns = fields["numberOfSigns"];
        infoObj.communicationDevice = fields["communicationDevice"];
        infoObj.nameOfDevice = fields["nameOfDevice"];
        infoObj.deviceIndependenceLevel = fields["deviceIndependenceLevel"];
        infoObj.communicationBinder = fields["communicationBinder"];
        infoObj.binderIndependenceLevel = fields["binderIndependenceLevel"];
        infoObj.otherCommunicationMethod = fields["otherCommunicationMethod"];
        infoObj.explainOtherCommunication = fields["explainOtherCommunication"];
        infoObj.communicationIssue1 = fields["communicationIssue1"];
        infoObj.communicationIssue2 = fields["communicationIssue2"];
        infoObj.communicationIssue3 = fields["communicationIssue3"];
        infoObj.languageAtHome = fields["languageAtHome"];
        infoObj.otherLanguages = fields["otherLanguages"];
        infoObj.section8Comments = fields["section8Comments"];
        infoObj.behavioralGoalYes = fields["behavioralGoalYes"];
        infoObj.behavioralGoalYesExplain = fields["behavioralGoalYesExplain"];
        infoObj.behavioralGoalNo = fields["behavioralGoalNo"];
        infoObj.schoolConcentration = fields["schoolConcentration"];
        infoObj.schoolConcentrationCurrent = fields["schoolConcentrationCurrent"];
        infoObj.schoolConcentrationTypical = fields["schoolConcentrationTypical"];
        infoObj.schoolConcentrationLast = fields["schoolConcentrationLast"];
        infoObj.schoolConcentrationLocation = fields["schoolConcentrationLocation"];
        infoObj.schoolConcentrationPrecursors = fields["schoolConcentrationPrecursors"];
        infoObj.schoolConcentrationHandleBehaviors = fields["schoolConcentrationHandleBehaviors"];
        infoObj.socialAnxiety = fields["socialAnxiety"];
        infoObj.socialAnxietyCurrent = fields["socialAnxietyCurrent"];
        infoObj.socialAnxietyTypical = fields["socialAnxietyTypical"];
        infoObj.socialAnxietyLast = fields["socialAnxietyLast"];
        infoObj.socialAnxietyLocation = fields["socialAnxietyLocation"];
        infoObj.socialAnxietyPrecursors = fields["socialAnxietyPrecursors"];
        infoObj.socialAnxietyHandleBehavior = fields["socialAnxietyHandleBehavior"];
        infoObj.lowGrades = fields["lowGrades"];
        infoObj.lowGradesTypical = fields["lowGradesTypical"];
        infoObj.lowGradesLast = fields["lowGradesLast"];
        infoObj.lowGradesLocation = fields["lowGradesLocation"];
        infoObj.lowGradesPrecursors = fields["lowGradesPrecursors"];
        infoObj.lowGradesHandleBehavior = fields["lowGradesHandleBehavior"];
        infoObj.makingFriends = fields["makingFriends"];
        infoObj.makingFriendsCurrent = fields["makingFriendsCurrent"];
        infoObj.makingFriendsTypical = fields["makingFriendsTypical"];
        infoObj.makingFriendsLocation = fields["makingFriendsLocation"];
        infoObj.makingFriendsPrecursors = fields["makingFriendsPrecursors"];
        infoObj.makingFriendsHandleBehavior = fields["makingFriendsHandleBehavior"];
        infoObj.oppositionalBehavior = fields["oppositionalBehavior"];
        infoObj.oppositionalBehaviorCurrent = fields["oppositionalBehaviorCurrent"];
        infoObj.oppositionalBehaviorTypical = fields["oppositionalBehaviorTypical"];
        infoObj.oppositionalBehaviorLast = fields["oppositionalBehaviorLast"];
        infoObj.oppositionalBehaviorLocation = fields["oppositionalBehaviorLocation"];
        infoObj.oppositionalBehaviorPrecursors = fields["oppositionalBehaviorPrecursors"];
        infoObj.oppositionalBehaviorHandleBehavior = fields["oppositionalBehaviorHandleBehavior"];
        infoObj.problemsWithAuthority = fields["problemsWithAuthority"];
        infoObj.problemsWithAuthorityCurrent = fields["problemsWithAuthorityCurrent"];
        infoObj.problemsWithAuthorityTypical = fields["problemsWithAuthorityTypical"];
        infoObj.problemsWithAuthorityLast = fields["problemsWithAuthorityLast"];
        infoObj.problemsWithAuthorityLocation = fields["problemsWithAuthorityLocation"];
        infoObj.problemsWithAuthorityPrecursors = fields["problemsWithAuthorityPrecursors"];
        infoObj.problemsWithAuthorityHandleBehavior = fields["problemsWithAuthorityHandleBehavior"];
        infoObj.sociallyIsolated = fields["sociallyIsolated"];
        infoObj.sociallyIsolatedCurrent = fields["sociallyIsolatedCurrent"];
        infoObj.sociallyIsolatedTypical = fields["sociallyIsolatedTypical"];
        infoObj.sociallyIsolatedLast = fields["sociallyIsolatedLast"];
        infoObj.sociallyIsolatedLocation = fields["sociallyIsolatedLocation"];
        infoObj.sociallyIsolatedPrecursors = fields["sociallyIsolatedPrecursors"];
        infoObj.sociallyIsolatedHandleBehavior = fields["sociallyIsolatedHandleBehavior"];
        infoObj.aggressiveBehavior = fields["aggressiveBehavior"];
        infoObj.aggressiveBehaviorCurrent = fields["aggressiveBehaviorCurrent"];
        infoObj.aggressiveBehaviorTypical = fields["aggressiveBehaviorTypical"];
        infoObj.aggressiveBehaviorLast = fields["aggressiveBehaviorLast"];
        infoObj.aggressiveBehaviorLocation = fields["aggressiveBehaviorLocation"];
        infoObj.aggressiveBehaviorPrecursors = fields["aggressiveBehaviorPrecursors"];
        infoObj.aggressiveBehaviorHandleBehavior = fields["aggressiveBehaviorHandleBehavior"];
        infoObj.stressFamily = fields["stressFamily"];
        infoObj.stressFamilyCurrent = fields["stressFamilyCurrent"];
        infoObj.stressFamilyTypical = fields["stressFamilyTypical"];
        infoObj.stressFamilyLast = fields["stressFamilyLast"];
        infoObj.stressFamilyLocation = fields["stressFamilyLocation"];
        infoObj.stressFamilyPrecursors = fields["stressFamilyPrecursors"];
        infoObj.stressFamilyHandleBehavior = fields["stressFamilyHandleBehavior"];
        infoObj.generalizedAnxiety = fields["generalizedAnxiety"];
        infoObj.generalizedAnxietyCurrent = fields["generalizedAnxietyCurrent"];
        infoObj.generalizedAnxietyTypical = fields["generalizedAnxietyTypical"];
        infoObj.generalizedAnxietyLast = fields["generalizedAnxietyLast"];
        infoObj.generalizedAnxietyLocation = fields["generalizedAnxietyLocation"];
        infoObj.generalizedAnxietyPrecursors = fields["generalizedAnxietyPrecursors"];
        infoObj.generalizedAnxietyHandleBehavio = fields["generalizedAnxietyHandleBehavio"];
        infoObj.phobias = fields["phobias"];
        infoObj.phobiasExplain = fields["phobiasExplain"];
        infoObj.phobiasCurrent = fields["phobiasCurrent"];
        infoObj.phobiasTypical = fields["phobiasTypical"];
        infoObj.phobiasLast = fields["phobiasLast"];
        infoObj.phobiasLocation = fields["phobiasLocation"];
        infoObj.phobiasPrecursors = fields["phobiasPrecursors"];
        infoObj.phobiasHandleBehavior = fields["phobiasHandleBehavior"];
        infoObj.hyperactive = fields["hyperactive"];
        infoObj.hyperactiveCurrent = fields["hyperactiveCurrent"];
        infoObj.hyperactiveTypical = fields["hyperactiveTypical"];
        infoObj.hyperactiveLast = fields["hyperactiveLast"];
        infoObj.hyperactiveLocation = fields["hyperactiveLocation"];
        infoObj.hyperactivePrecursors = fields["hyperactivePrecursors"];
        infoObj.hyperactiveHandleBehavior = fields["hyperactiveHandleBehavior"];
        infoObj.sensoryProblems = fields["sensoryProblems"];
        infoObj.sensoryProblemsCurrent = fields["sensoryProblemsCurrent"];
        infoObj.sensoryProblemsTypical = fields["sensoryProblemsTypical"];
        infoObj.sensoryProblemsLast = fields["sensoryProblemsLast"];
        infoObj.sensoryProblemsLocation = fields["sensoryProblemsLocation"];
        infoObj.sensoryProblemsPrecursors = fields["sensoryProblemsPrecursors"];
        infoObj.sensoryProblemsHandleBehavior = fields["sensoryProblemsHandleBehavior"];
        infoObj.problemsEating = fields["problemsEating"];
        infoObj.problemsEatingCurrent = fields["problemsEatingCurrent"];
        infoObj.problemsEatingTypical = fields["problemsEatingTypical"];
        infoObj.problemsEatingLast = fields["problemsEatingLast"];
        infoObj.problemsEatingLocation = fields["problemsEatingLocation"];
        infoObj.problemsEatingPrecursors = fields["problemsEatingPrecursors"];
        infoObj.problemsEatingHandleBehavior = fields["problemsEatingHandleBehavior"];
        infoObj.wettingAccidents = fields["wettingAccidents"];
        infoObj.wettingAccidentsCurrent = fields["wettingAccidentsCurrent"];
        infoObj.wettingAccidentsTypical = fields["wettingAccidentsTypical"];
        infoObj.wettingAccidentsLast = fields["wettingAccidentsLast"];
        infoObj.wettingAccidentsLocation = fields["wettingAccidentsLocation"];
        infoObj.wettingAccidentsPrecursors = fields["wettingAccidentsPrecursors"];
        infoObj.wettingAccidentsHandleBehavior = fields["wettingAccidentsHandleBehavior"];
        infoObj.vocalTics = fields["vocalTics"];
        infoObj.vocalTicsCurrent = fields["vocalTicsCurrent"];
        infoObj.vocalTicsTypical = fields["vocalTicsTypical"];
        infoObj.vocalTicsLast = fields["vocalTicsLast"];
        infoObj.vocalTicsLocation = fields["vocalTicsLocation"];
        infoObj.vocalTicsPrecursors = fields["vocalTicsPrecursors"];
        infoObj.vocalTicsHandleBehavior = fields["vocalTicsHandleBehavior"];
        infoObj.wakingUp = fields["wakingUp"];
        infoObj.wakingUpCurrent = fields["wakingUpCurrent"];
        infoObj.wakingUpTypical = fields["wakingUpTypical"];
        infoObj.wakingUpLast = fields["wakingUpLast"];
        infoObj.wakingUpLocation = fields["wakingUpLocation"];
        infoObj.wakingUpPrecursors = fields["wakingUpPrecursors"];
        infoObj.wakingUpHandleBehavior = fields["wakingUpHandleBehavior"];
        infoObj.nightmares = fields["nightmares"];
        infoObj.nightmaresCurrent = fields["nightmaresCurrent"];
        infoObj.nightmaresTypical = fields["nightmaresTypical"];
        infoObj.nightmaresLast = fields["nightmaresLast"];
        infoObj.nightmaresLocation = fields["nightmaresLocation"];
        infoObj.nightmaresPrecursors = fields["nightmaresPrecursors"];
        infoObj.nightmaresHandleBehavior = fields["nightmaresHandleBehavior"];
        infoObj.problemsSleeping = fields["problemsSleeping"];
        infoObj.problemsSleepingCurrent = fields["problemsSleepingCurrent"];
        infoObj.problemsSleepingTypical = fields["problemsSleepingTypical"];
        infoObj.problemsSleepingLast = fields["problemsSleepingLast"];
        infoObj.problemsSleepingLocation = fields["problemsSleepingLocation"];
        infoObj.problemsSleepingPrecursors = fields["problemsSleepingPrecursors"];
        infoObj.problemsSleepingHandleBehavior = fields["problemsSleepingHandleBehavior"];
        infoObj.tiredness = fields["tiredness"];
        infoObj.tirednessCurrent = fields["tirednessCurrent"];
        infoObj.tirednessTypical = fields["tirednessTypical"];
        infoObj.tirednessLast = fields["tirednessLast"];
        infoObj.tirednessLocation = fields["tirednessLocation"];
        infoObj.tirednessPrecurosors = fields["tirednessPrecurosors"];
        infoObj.tirednessHandleBehavior = fields["tirednessHandleBehavior"];
        infoObj.sadness = fields["sadness"];
        infoObj.sadnessCurrent = fields["sadnessCurrent"];
        infoObj.sadnessTypical = fields["sadnessTypical"];
        infoObj.sadnessLast = fields["sadnessLast"];
        infoObj.sadnessLocation = fields["sadnessLocation"];
        infoObj.sadnessPrecursors = fields["sadnessPrecursors"];
        infoObj.sadnessHandleBehavior = fields["sadnessHandleBehavior"];
        infoObj.impulsive = fields["impulsive"];
        infoObj.impulsiveCurrent = fields["impulsiveCurrent"];
        infoObj.impulsiveTypical = fields["impulsiveTypical"];
        infoObj.impulsiveLocation = fields["impulsiveLocation"];
        infoObj.impulsivePrecursors = fields["impulsivePrecursors"];
        infoObj.impulsiveHandleBehavior = fields["impulsiveHandleBehavior"];
        infoObj.noncompliant = fields["noncompliant"];
        infoObj.noncompliantCurrent = fields["noncompliantCurrent"];
        infoObj.noncompliantTypcial = fields["noncompliantTypcial"];
        infoObj.noncompliantLast = fields["noncompliantLast"];
        infoObj.noncompliantLocation = fields["noncompliantLocation"];
        infoObj.noncompliantPrecursors = fields["noncompliantPrecursors"];
        infoObj.noncompliantHandleBeahvior = fields["noncompliantHandleBeahvior"];
        infoObj.tantrums = fields["tantrums"];
        infoObj.tantrumsCurrent = fields["tantrumsCurrent"];
        infoObj.tantrumsTypical = fields["tantrumsTypical"];
        infoObj.tantrumsLast = fields["tantrumsLast"];
        infoObj.tantrumsLocation = fields["tantrumsLocation"];
        infoObj.tantrumsPrecursors = fields["tantrumsPrecursors"];
        infoObj.tantrumsHandleBehavior = fields["tantrumsHandleBehavior"];
        infoObj.injuryBehavior = fields["injuryBehavior"];
        infoObj.injuryBehaviorCurrent = fields["injuryBehaviorCurrent"];
        infoObj.injuryBehaviorTypical = fields["injuryBehaviorTypical"];
        infoObj.injuryBehaviorLast = fields["injuryBehaviorLast"];
        infoObj.injuryBehaviorLocation = fields["injuryBehaviorLocation"];
        infoObj.injuryBehaviorPrecursors = fields["injuryBehaviorPrecursors"];
        infoObj.injuryBehaviorHandleBehavior = fields["injuryBehaviorHandleBehavior"];
        infoObj.temperProblem = fields["temperProblem"];
        infoObj.temperProblemCurrent = fields["temperProblemCurrent"];
        infoObj.temperProblemTypical = fields["temperProblemTypical"];
        infoObj.temperProblemLast = fields["temperProblemLast"];
        infoObj.temperProblemLocation = fields["temperProblemLocation"];
        infoObj.temperProblemPrecursors = fields["temperProblemPrecursors"];
        infoObj.temperProblemHandleBehavior = fields["temperProblemHandleBehavior"];
        infoObj.darting = fields["darting"];
        infoObj.dartingCurrent = fields["dartingCurrent"];
        infoObj.dartingTypical = fields["dartingTypical"];
        infoObj.dartingLast = fields["dartingLast"];
        infoObj.dartingLocation = fields["dartingLocation"];
        infoObj.dartingPrecursors = fields["dartingPrecursors"];
        infoObj.dartingHandleBehavior = fields["dartingHandleBehavior"];
        infoObj.rigid = fields["rigid"];
        infoObj.rigidCurrent = fields["rigidCurrent"];
        infoObj.rigidTypical = fields["rigidTypical"];
        infoObj.rigidLast = fields["rigidLast"];
        infoObj.rigidLocation = fields["rigidLocation"];
        infoObj.rigidPrecursors = fields["rigidPrecursors"];
        infoObj.rigidHandleBehavior = fields["rigidHandleBehavior"];
        infoObj.abuse = fields["abuse"];
        infoObj.abuseCurrent = fields["abuseCurrent"];
        infoObj.abuseTypical = fields["abuseTypical"];
        infoObj.abuseLast = fields["abuseLast"];
        infoObj.abuseCurrentLocation = fields["abuseCurrentLocation"];
        infoObj.abusePrecursors = fields["abusePrecursors"];
        infoObj.abuseHandleBehavior = fields["abuseHandleBehavior"];
        infoObj.physicalAssistanceQuestion = fields["physicalAssistanceQuestion"];
        infoObj.physicalAssistanceYes = fields["physicalAssistanceYes"];
        infoObj.physicalAssistanceYesExplain = fields["physicalAssistanceYesExplain"];
        infoObj.physicalAssistanceNo = fields["physicalAssistanceNo"];
        infoObj.verbalDirectivesCheckYes = fields["verbalDirectivesCheckYes"];
        infoObj.verbalDirectivesYesExplain = fields["verbalDirectivesYesExplain"];
        infoObj.verbalDirectivesCheckNo = fields["verbalDirectivesCheckNo"];
        infoObj.currentEventsCheckYes = fields["currentEventsCheckYes"];
        infoObj.currentEventsExplain = fields["currentEventsExplain"];
        infoObj.currentEventsCheckNo = fields["currentEventsCheckNo"];
        infoObj.positiveBehavior = fields["positiveBehavior"];
        infoObj.assistanceRequired = fields["assistanceRequired"];
        infoObj.soothing = fields["soothing"];
        infoObj.section9Comments = fields["section9Comments"];
        infoObj.morning = fields["morning"];
        infoObj.afternoon = fields["afternoon"];
        infoObj.evening = fields["evening"];
        infoObj.downtime = fields["downtime"];
        infoObj.homeExpectation = fields["homeExpectation"];
        infoObj.screentime = fields["screentime"];
        infoObj.chores = fields["chores"];
        infoObj.physicalActivity = fields["physicalActivity"];
        infoObj.section10Comments = fields["section10Comments"];
        infoObj.challengesWithUnknownProvider = fields["challengesWithUnknownProvider"];
        infoObj.concernsWithRoom = fields["concernsWithRoom"];
        infoObj.concernsWithCubbies = fields["concernsWithCubbies"];
        infoObj.signsOfToilet = fields["signsOfToilet"];
        infoObj.amountOfRestroomUse = fields["amountOfRestroomUse"];
        infoObj.restroomTerminology = fields["restroomTerminology"];
        infoObj.restroomIndependence = fields["restroomIndependence"];
        infoObj.snackDuringEval = fields["snackDuringEval"];
        infoObj.techniquesDuringEating = fields["techniquesDuringEating"];
        infoObj.eatingIndependence = fields["eatingIndependence"];
        infoObj.medicationDuringEval = fields["medicationDuringEval"];
        infoObj.conditionsWithRescueMedication = fields["conditionsWithRescueMedication"];
        infoObj.allergicReaction = fields["allergicReaction"];
        infoObj.seizureCheckYes = fields["seizureCheckYes"];
        infoObj.seizureCheckNo = fields["seizureCheckNo"];
        infoObj.seizureHistory = fields["seizureHistory"];
        infoObj.signsOfSeizure = fields["signsOfSeizure"];
        infoObj.otherSeizureProtocol = fields["otherSeizureProtocol"];
        infoObj.lastSeizure = fields["lastSeizure"];
        infoObj.seizureFrequency = fields["seizureFrequency"];
        infoObj.section12Comments = fields["section12Comments"];
        infoObj.hearAboutJL = fields["hearAboutJL"];
        infoObj.goalsAndExpectations = fields["goalsAndExpectations"];
        infoObj.enrollmentAfterEval = fields["enrollmentAfterEval"];
        infoObj.additionalInfoAboutChild = fields["additionalInfoAboutChild"];
        infoObj.consentCheck = fields["consentCheck"];
        infoObj.studentName = fields["studentName"];
        infoObj.parentName = fields["parentName"];
        infoObj.date = fields["date"];
        infoObj.section11comments = fields["section11Comments"];
        infoObj.brace = fields["brace"];
        infoObj.feedSupport = fields["feedSupport"];
        infoObj.toiletEquip = fields["toiletEquip"];
        infoObj.mobilityEquip = fields["mobilityEquip"];
        infoObj.communicationEquip = fields["communicationEquip"];
        infoObj.oxygenTank = fields["oxygenTank"];
        infoObj.hearingDevice = fields["hearingDevice"];
        infoObj.otherSupply = fields["otherSupply"];
        console.log("UPDATED FIELDS")
        console.log(infoObj);
    }

    updateSection11Fields () {
        let fields = this.state.fields;
        sec11InfoObj.ChildID = childID;
        sec11InfoObj.g1SitNA = fields["g1SitNA"];
        sec11InfoObj.g1SitPhysical = fields["g1SitPhysical"];
        sec11InfoObj.g1SitVerbal = fields["g1SitVerbal"];
        sec11InfoObj.g1SitInitiates = fields["g1SitInitiates"];
        sec11InfoObj.g1AttendTaskLongNA = fields["g1AttendTaskLongNA"];
        sec11InfoObj.g1AttendTaskLongPhysical = fields["g1AttendTaskLongPhysical"];
        sec11InfoObj.g1AttendTaskLongVerbal = fields["g1AttendTaskLongVerbal"];
        sec11InfoObj.g1AttendTaskLongInitiates = fields["g1AttendTaskLongInitiates"];
        sec11InfoObj.g1AttendTaskShortNA = fields["g1AttendTaskShortNA"];
        sec11InfoObj.g1AttendTaskShortPhysical = fields["g1AttendTaskShortPhysical"];
        sec11InfoObj.g1AttendTaskShortVerbal = fields["g1AttendTaskShortVerbal"];
        sec11InfoObj.g1AttendTaskShortInitiates = fields["g1AttendTaskShortInitiates"];
        sec11InfoObj.g1EyeContactNA = fields["g1EyeContactNA"];
        sec11InfoObj.g1EyeContactPhysical = fields["g1EyeContactPhysical"];
        sec11InfoObj.g1EyeContactVerbal = fields["g1EyeContactVerbal"];
        sec11InfoObj.g1EyeContactInitiates = fields["g1EyeContactInitiates"];
        sec11InfoObj.g1EyeContactNameNA = fields["g1EyeContactNameNA"];
        sec11InfoObj.g1EyeContactNamePhysical = fields["g1EyeContactNamePhysical"];
        sec11InfoObj.g1EyeContactNameVerbal = fields["g1EyeContactNameVerbal"];
        sec11InfoObj.g1EyeContactNameInitiates = fields["g1EyeContactNameInitiates"];
        sec11InfoObj.g1EyeContactGroupNA = fields["g1EyeContactGroupNA"];
        sec11InfoObj.g1EyeContactGroupPhysical = fields["g1EyeContactGroupPhysical"];
        sec11InfoObj.g1EyeContactGroupVerbal = fields["g1EyeContactGroupVerbal"];
        sec11InfoObj.g1EyeContactGroupInitiates = fields["g1EyeContactGroupInitiates"];
        sec11InfoObj.g1WantsNeedsNA = fields["g1WantsNeedsNA"];
        sec11InfoObj.g1WantsNeedsPhysical = fields["g1WantsNeedsPhysical"];
        sec11InfoObj.g1WantsNeedsVerbal = fields["g1WantsNeedsVerbal"];
        sec11InfoObj.g1WantsNeedsInitiates = fields["g1WantsNeedsInitiates"];
        sec11InfoObj.g1socialQsNA = fields["g1socialQsNA"];
        sec11InfoObj.g1SocialQsPhysical = fields["g1SocialQsPhysical"];
        sec11InfoObj.g1SocialQsVerbal = fields["g1SocialQsVerbal"];
        sec11InfoObj.g1SocialQsInitiates = fields["g1SocialQsInitiates"];
        sec11InfoObj.g1InterferenceQsNA = fields["g1InterferenceQsNA"];
        sec11InfoObj.g1InterferenceQsPhysical = fields["g1InterferenceQsPhysical"];
        sec11InfoObj.g1InterferenceQsVerbal = fields["g1InterferenceQsVerbal"];
        sec11InfoObj.g1InterferenceQsInitiates = fields["g1InterferenceQsInitiates"];
        sec11InfoObj.g1ReciprocateConversationNA = fields["g1ReciprocateConversationNA"];
        sec11InfoObj.g1ReciprocateConversationPhysical = fields["g1ReciprocateConversationPhysical"];
        sec11InfoObj.g1ReciprocateConversationVerbal = fields["g1ReciprocateConversationVerbal"];
        sec11InfoObj.g1ReciprocateConversationInitiates = fields["g1ReciprocateConversationInitiates"];
        sec11InfoObj.g1MaintainConversationNA = fields["g1MaintainConversationNA"];
        sec11InfoObj.g1MaintainConversationPhysical = fields["g1MaintainConversationPhysical"];
        sec11InfoObj.g1MaintainConversationVerbal = fields["g1MaintainConversationVerbal"];
        sec11InfoObj.g1MaintainConversationInitiates = fields["g1MaintainConversationInitiates"];
        sec11InfoObj.g1OriginalConversationNA = fields["g1OriginalConversationNA"];
        sec11InfoObj.g1OriginalConversationPhysical = fields["g1OriginalConversationPhysical"];
        sec11InfoObj.g1OriginalConversationVerbal = fields["g1OriginalConversationVerbal"];
        sec11InfoObj.g1OriginalConversationInitiates = fields["g1OriginalConversationInitiates"];
        sec11InfoObj.g1WithinRoomNA = fields["g1WithinRoomNA"];
        sec11InfoObj.g1WithinRoomPhysical = fields["g1WithinRoomPhysical"];
        sec11InfoObj.g1WithinRoomVerbal = fields["g1WithinRoomVerbal"];
        sec11InfoObj.g1WithinRoomInitiates = fields["g1WithinRoomInitiates"];
        sec11InfoObj.g1AnotherRoomNA = fields["g1AnotherRoomNA"];
        sec11InfoObj.g1AnotherRoomPhysical = fields["g1AnotherRoomPhysical"];
        sec11InfoObj.g1AnotherRoomVerbal = fields["g1AnotherRoomVerbal"];
        sec11InfoObj.g1AnotherRoomInitiates = fields["g1AnotherRoomInitiates"];
        sec11InfoObj.g1IndTaskLongNA = fields["g1IndTaskLongNA"];
        sec11InfoObj.g1IndTaskLongPhysical = fields["g1IndTaskLongPhysical"];
        sec11InfoObj.g1IndTaskLongVerbal = fields["g1IndTaskLongVerbal"];
        sec11InfoObj.g1IndTaskLongInitiates = fields["g1IndTaskLongInitiates"];
        sec11InfoObj.g1IndTaskShortNA = fields["g1IndTaskShortNA"];
        sec11InfoObj.g1IndTaskShortPhysical = fields["g1IndTaskShortPhysical"];
        sec11InfoObj.g1IndTaskShortVerbal = fields["g1IndTaskShortVerbal"];
        sec11InfoObj.g1IndTaskShortInitiates = fields["g1IndTaskShortInitiates"];
        sec11InfoObj.g1OrganizeMaterialsNA = fields["g1OrganizeMaterialsNA"];
        sec11InfoObj.g1OrganizeMaterialsPhysical = fields["g1OrganizeMaterialsPhysical"];
        sec11InfoObj.g1OrganizeMaterialsVerbal = fields["g1OrganizeMaterialsVerbal"];
        sec11InfoObj.g1OrganizeMaterialsInitiates = fields["g1OrganizeMaterialsInitiates"];
        sec11InfoObj.g1OrganizeTasksNA = fields["g1OrganizeTasksNA"];
        sec11InfoObj.g1OrganizeTasksPhysical = fields["g1OrganizeTasksPhysical"];
        sec11InfoObj.g1OrganizeTasksVerbal = fields["g1OrganizeTasksVerbal"];
        sec11InfoObj.g1OrganizeTasksInitiates = fields["g1OrganizeTasksInitiates"];
        sec11InfoObj.g1ShoesOnOffNA = fields["g1ShoesOnOffNA"];
        sec11InfoObj.g1ShoesOnOffPhysical = fields["g1ShoesOnOffPhysical"];
        sec11InfoObj.g1ShoesOnOffVerbal = fields["g1ShoesOnOffVerbal"];
        sec11InfoObj.g1ShoesOnOffInitiates = fields["g1ShoesOnOffInitiates"];
        sec11InfoObj.g1RightLeftNA = fields["g1RightLeftNA"];
        sec11InfoObj.g1RightLeftPhysical = fields["g1RightLeftPhysical"];
        sec11InfoObj.g1RightLeftVerbal = fields["g1RightLeftVerbal"];
        sec11InfoObj.g1RightLeftInitiates = fields["g1RightLeftInitiates"];
        sec11InfoObj.g1TieShoesNA = fields["g1TieShoesNA"];
        sec11InfoObj.g1TieShoesPhysical = fields["g1TieShoesPhysical"];
        sec11InfoObj.g1TieShoesVerbal = fields["g1TieShoesVerbal"];
        sec11InfoObj.g1TieShoesInitiates = fields["g1TieShoesInitiates"];
        sec11InfoObj.g1PantsNA = fields["g1PantsNA"];
        sec11InfoObj.g1PantsPhysical = fields["g1PantsPhysical"];
        sec11InfoObj.g1PantsVerbal = fields["g1PantsVerbal"];
        sec11InfoObj.g1PantsInitiates = fields["g1PantsInitiates"];
        sec11InfoObj.g1ButtonsNA = fields["g1ButtonsNA"];
        sec11InfoObj.g1ButtonsPhysical = fields["g1ButtonsPhysical"];
        sec11InfoObj.g1ButtonsVerbal = fields["g1ButtonsVerbal"];
        sec11InfoObj.g1ButtonsInitiates = fields["g1ButtonsInitiates"];
        sec11InfoObj.g1AdjustClothesNA = fields["g1AdjustClothesNA"];
        sec11InfoObj.g1AdjustClothesPhysical = fields["g1AdjustClothesPhysical"];
        sec11InfoObj.g1AdjustClothesVerbal = fields["g1AdjustClothesVerbal"];
        sec11InfoObj.g1AdjustClothesInitiates = fields["g1AdjustClothesInitiates"];
        sec11InfoObj.g1DressesNA = fields["g1DressesNA"];
        sec11InfoObj.g1DressesPhysical = fields["g1DressesPhysical"];
        sec11InfoObj.g1DressesVerbal = fields["g1DressesVerbal"];
        sec11InfoObj.g1DressesInitiates = fields["g1DressesInitiates"];
        sec11InfoObj.g1SortsClothesNA = fields["g1SortsClothesNA"];
        sec11InfoObj.g1SortsClothesPhysical = fields["g1SortsClothesPhysical"];
        sec11InfoObj.g1SortsClothesVerbal = fields["g1SortsClothesVerbal"];
        sec11InfoObj.g1SortsClothesInitiates = fields["g1SortsClothesInitiates"];
        sec11InfoObj.g1ClothesWeatherNA = fields["g1ClothesWeatherNA"];
        sec11InfoObj.g1ClothesWeatherPhysical = fields["g1ClothesWeatherPhysical"];
        sec11InfoObj.g1ClothesWeatherVerbal = fields["g1ClothesWeatherVerbal"];
        sec11InfoObj.g1ClothesWeatherInitiates = fields["g1ClothesWeatherInitiates"];
        sec11InfoObj.g1BathroomNA = fields["g1BathroomNA"];
        sec11InfoObj.g1BathroomPhysical = fields["g1BathroomPhysical"];
        sec11InfoObj.g1BathroomVerbal = fields["g1BathroomVerbal"];
        sec11InfoObj.g1BathroomInitiates = fields["g1BathroomInitiates"];
        sec11InfoObj.g1WashesHandsNA = fields["g1WashesHandsNA"];
        sec11InfoObj.g1WashesHandsPhysical = fields["g1WashesHandsPhysical"];
        sec11InfoObj.g1WashesHandsVerbal = fields["g1WashesHandsVerbal"];
        sec11InfoObj.g1WashesHandsInitiates = fields["g1WashesHandsInitiates"];
        sec11InfoObj.g1ShowerNA = fields["g1ShowerNA"];
        sec11InfoObj.g1ShowerPhysical = fields["g1ShowerPhysical"];
        sec11InfoObj.g1ShowerVerbal = fields["g1ShowerVerbal"];
        sec11InfoObj.g1ShowerInitiates = fields["g1ShowerInitiates"];
        sec11InfoObj.g1UtensilsNA = fields["g1UtensilsNA"];
        sec11InfoObj.g1UtensilsPhysical = fields["g1UtensilsPhysical"];
        sec11InfoObj.g1UtensilsVerbal = fields["g1UtensilsVerbal"];
        sec11InfoObj.g1UtensilsInitiates = fields["g1UtensilsInitiates"];
        sec11InfoObj.g1OpensContainersNA = fields["g1OpensContainersNA"];
        sec11InfoObj.g1OpensContainersPhysical = fields["g1OpensContainersPhysical"];
        sec11InfoObj.g1OpensContainersVerbal = fields["g1OpensContainersVerbal"];
        sec11InfoObj.g1OpensContainersInitiates = fields["g1OpensContainersInitiates"];
        sec11InfoObj.g1CleansEatingAreaNA = fields["g1CleansEatingAreaNA"];
        sec11InfoObj.g1CleansEatingAreaPhysical = fields["g1CleansEatingAreaPhysical"];
        sec11InfoObj.g1CleansEatingAreaVerbal = fields["g1CleansEatingAreaVerbal"];
        sec11InfoObj.g1CleansEatingAreaInitiates = fields["g1CleansEatingAreaInitiates"];
        sec11InfoObj.g1HotCautionNA = fields["g1HotCautionNA"];
        sec11InfoObj.g1HotCautionPhysical = fields["g1HotCautionPhysical"];
        sec11InfoObj.g1HotCautionVerbal = fields["g1HotCautionVerbal"];
        sec11InfoObj.g1HotCautionInitiates = fields["g1HotCautionInitiates"];
        sec11InfoObj.g1NearPeersNA = fields["g1NearPeersNA"];
        sec11InfoObj.g1NearPeersPhysical = fields["g1NearPeersPhysical"];
        sec11InfoObj.g1NearPeersVerbal = fields["g1NearPeersVerbal"];
        sec11InfoObj.g1NearPeersInitiates = fields["g1NearPeersInitiates"];
        sec11InfoObj.g1InterestInOthersNA = fields["g1InterestInOthersNA"];
        sec11InfoObj.g1InterestInOthersPhysical = fields["g1InterestInOthersPhysical"];
        sec11InfoObj.g1InterestInOthersVerbal = fields["g1InterestInOthersVerbal"];
        sec11InfoObj.g1InterestInOthersInitiates = fields["g1InterestInOthersInitiates"];
        sec11InfoObj.g1SitSmallGroupNA = fields["g1SitSmallGroupNA"];
        sec11InfoObj.g1SitSmallGroupPhysical = fields["g1SitSmallGroupPhysical"];
        sec11InfoObj.g1SitSmallGroupVerbal = fields["g1SitSmallGroupVerbal"];
        sec11InfoObj.g1SitSmallGroupInitiates = fields["g1SitSmallGroupInitiates"];
        sec11InfoObj.g1InstructorSmallGroupNA = fields["g1InstructorSmallGroupNA"];
        sec11InfoObj.g1InstructorSmallGroupPhysical = fields["g1InstructorSmallGroupPhysical"];
        sec11InfoObj.g1InstructorSmallGroupVerbal = fields["g1InstructorSmallGroupVerbal"];
        sec11InfoObj.g1InstructorSmallGroupInitiates = fields["g1InstructorSmallGroupInitiates"];
        sec11InfoObj.g1InstructionNA = fields["g1InstructionNA"];
        sec11InfoObj.g1InstructionPhysical = fields["g1InstructionPhysical"];
        sec11InfoObj.g1InstructionVerbal = fields["g1InstructionVerbal"];
        sec11InfoObj.g1InstructionInitiates = fields["g1InstructionInitiates"];
        sec11InfoObj.g1TakesTurnsNA = fields["g1TakesTurnsNA"];
        sec11InfoObj.g1TakesTurnsPhysical = fields["g1TakesTurnsPhysical"];
        sec11InfoObj.g1TakesTurnsVerbal = fields["g1TakesTurnsVerbal"];
        sec11InfoObj.g1TakesTurnsInitiates = fields["g1TakesTurnsInitiates"];
        sec11InfoObj.g1SharesNA = fields["g1SharesNA"];
        sec11InfoObj.g1SharesPhysical = fields["g1SharesPhysical"];
        sec11InfoObj.g1SharesVerbal = fields["g1SharesVerbal"];
        sec11InfoObj.g1SharesInitiates = fields["g1SharesInitiates"];
        sec11InfoObj.g1ConverseOthersNA = fields["g1ConverseOthersNA"];
        sec11InfoObj.g1ConverseOthersPhysical = fields["g1ConverseOthersPhysical"];
        sec11InfoObj.g1ConverseOthersVerbal = fields["g1ConverseOthersVerbal"];
        sec11InfoObj.g1ConverseOthersInitiates = fields["g1ConverseOthersInitiates"];
        sec11InfoObj.g1SitLargeGroupNA = fields["g1SitLargeGroupNA"];
        sec11InfoObj.g1SitLargeGroupPhysical = fields["g1SitLargeGroupPhysical"];
        sec11InfoObj.g1SitLargeGroupVerbal = fields["g1SitLargeGroupVerbal"];
        sec11InfoObj.g1SitLargeGroupInitiates = fields["g1SitLargeGroupInitiates"];
        sec11InfoObj.g1InstructorLargeGroupNA = fields["g1InstructorLargeGroupNA"];
        sec11InfoObj.g1InstructorLargeGroupPhysical = fields["g1InstructorLargeGroupPhysical"];
        sec11InfoObj.g1InstructorLargeGroupVerbal = fields["g1InstructorLargeGroupVerbal"];
        sec11InfoObj.g1InstructorLargeGroupInitiates = fields["g1InstructorLargeGroupInitiates"];
        sec11InfoObj.g1StandWaitNA = fields["g1StandWaitNA"];
        sec11InfoObj.g1StandWaitPhysical = fields["g1StandWaitPhysical"];
        sec11InfoObj.g1StandWaitVerbal = fields["g1StandWaitVerbal"];
        sec11InfoObj.g1StandWaitInitiates = fields["g1StandWaitInitiates"];
        sec11InfoObj.g1UnderstandsRulesNA = fields["g1UnderstandsRulesNA"];
        sec11InfoObj.g1UnderstandsRulesPhysical = fields["g1UnderstandsRulesPhysical"];
        sec11InfoObj.g1UnderstandsRulesVerbal = fields["g1UnderstandsRulesVerbal"];
        sec11InfoObj.g1UnderstandsRulesInitiates = fields["g1UnderstandsRulesInitiates"];
        sec11InfoObj.g2FeelingsHelpNA = fields["g2FeelingsHelpNA"];
        sec11InfoObj.g2FeelingsHelpPhysical = fields["g2FeelingsHelpPhysical"];
        sec11InfoObj.g2FeelingsHelpVerbal = fields["g2FeelingsHelpVerbal"];
        sec11InfoObj.g2FeelingsHelpInitiates = fields["g2FeelingsHelpInitiates"];
        sec11InfoObj.g2ExplainFeelingsNA = fields["g2ExplainFeelingsNA"];
        sec11InfoObj.g2ExplainFeelingsPhysical = fields["g2ExplainFeelingsPhysical"];
        sec11InfoObj.g2ExplainFeelingsVerbal = fields["g2ExplainFeelingsVerbal"];
        sec11InfoObj.g2ExplainFeelingsInitiates = fields["g2ExplainFeelingsInitiates"];
        sec11InfoObj.g2AsksHelpNA = fields["g2AsksHelpNA"];
        sec11InfoObj.g2AsksHelpPhysical = fields["g2AsksHelpPhysical"];
        sec11InfoObj.g2AsksHelpVerbal = fields["g2AsksHelpVerbal"];
        sec11InfoObj.g2AsksHelpInitiates = fields["g2AsksHelpInitiates"];
        sec11InfoObj.g2TalksToAdultNA = fields["g2TalksToAdultNA"];
        sec11InfoObj.g2TalksToAdultPhysical = fields["g2TalksToAdultPhysical"];
        sec11InfoObj.g2TalksToAdultVerbal = fields["g2TalksToAdultVerbal"];
        sec11InfoObj.g2TalksToAdultInitiates = fields["g2TalksToAdultInitiates"];
        sec11InfoObj.g2TalksToFriendNA = fields["g2TalksToFriendNA"];
        sec11InfoObj.g2TalksToFriendPhysical = fields["g2TalksToFriendPhysical"];
        sec11InfoObj.g2TalksToFriendVerbal = fields["g2TalksToFriendVerbal"];
        sec11InfoObj.g2TalksToFriendInitiates = fields["g2TalksToFriendInitiates"];
        sec11InfoObj.g2ComplimentNA = fields["g2ComplimentNA"];
        sec11InfoObj.g2ComplimentPhysical = fields["g2ComplimentPhysical"];
        sec11InfoObj.g2ComplimentVerbal = fields["g2ComplimentVerbal"];
        sec11InfoObj.g2ComplimentInitiates = fields["g2ComplimentInitiates"];
        sec11InfoObj.g2PresentsIdeasNA = fields["g2PresentsIdeasNA"];
        sec11InfoObj.g2PresentsIdeasPhysical = fields["g2PresentsIdeasPhysical"];
        sec11InfoObj.g2PresentsIdeasVerbal = fields["g2PresentsIdeasVerbal"];
        sec11InfoObj.g2PresentsIdeasInitiates = fields["g2PresentsIdeasInitiates"];
        sec11InfoObj.g2AsksQuestionsNA = fields["g2AsksQuestionsNA"];
        sec11InfoObj.g2AsksQuestionsPhysical = fields["g2AsksQuestionsPhysical"];
        sec11InfoObj.g2AsksQuestionsVerbal = fields["g2AsksQuestionsVerbal"];
        sec11InfoObj.g2AsksQuestionsInitiates = fields["g2AsksQuestionsInitiates"];
        sec11InfoObj.g2CompromiseNA = fields["g2CompromiseNA"];
        sec11InfoObj.g2CompromisePhysical = fields["g2CompromisePhysical"];
        sec11InfoObj.g2CompromiseVerbal = fields["g2CompromiseVerbal"];
        sec11InfoObj.g2CompromiseInitiates = fields["g2CompromiseInitiates"];
        sec11InfoObj.g2FeedbackNA = fields["g2FeedbackNA"];
        sec11InfoObj.g2FeedbackPhysical = fields["g2FeedbackPhysical"];
        sec11InfoObj.g2FeedbackVerbal = fields["g2FeedbackVerbal"];
        sec11InfoObj.g2FeedbackInitiates = fields["g2FeedbackInitiates"];
        sec11InfoObj.g2MicrowaveNA = fields["g2MicrowaveNA"];
        sec11InfoObj.g2MicrowavePhysical = fields["g2MicrowavePhysical"];
        sec11InfoObj.g2MicrowaveHelpVerbal = fields["g2MicrowaveHelpVerbal"];
        sec11InfoObj.g2MicrowaveInitiates = fields["g2MicrowaveInitiates"];
        sec11InfoObj.g2StoveTopNA = fields["g2StoveTopNA"];
        sec11InfoObj.g2StoveTopVerbal = fields["g2StoveTopVerbal"];
        sec11InfoObj.g2StoveTopPhysical = fields["g2StoveTopPhysical"];
        sec11InfoObj.g2StoveTopInitiates = fields["g2StoveTopInitiates"];
        sec11InfoObj.g2OvenNA = fields["g2OvenNA"];
        sec11InfoObj.g2OvenPhysical = fields["g2OvenPhysical"];
        sec11InfoObj.g2OvenVerbal = fields["g2OvenVerbal"];
        sec11InfoObj.g2OvenInitiates = fields["g2OvenInitiates"];
        sec11InfoObj.g2StoresFoodNA = fields["g2StoresFoodNA"];
        sec11InfoObj.g2StoresFoodPhysical = fields["g2StoresFoodPhysical"];
        sec11InfoObj.g2StoresFoodVerbal = fields["g2StoresFoodVerbal"];
        sec11InfoObj.g2StoresFoodInitiates = fields["g2StoresFoodInitiates"];
        sec11InfoObj.g2SimpleMealsNA = fields["g2SimpleMealsNA"];
        sec11InfoObj.g2SimpleMealsPhysical = fields["g2SimpleMealsPhysical"];
        sec11InfoObj.g2SimpleMealsVerbal = fields["g2SimpleMealsVerbal"];
        sec11InfoObj.g2SimpleMealsInitiates = fields["g2SimpleMealsInitiates"];
        sec11InfoObj.g2ComplexMealsNA = fields["g2ComplexMealsNA"];
        sec11InfoObj.g2ComplexMealsPhysical = fields["g2ComplexMealsPhysical"];
        sec11InfoObj.g2ComplexMealsVerbal = fields["g2ComplexMealsVerbal"];
        sec11InfoObj.g2ComplexMealsInitiates = fields["g2ComplexMealsInitiates"];
        sec11InfoObj.g2DishwasherNA = fields["g2DishwasherNA"];
        sec11InfoObj.g2DishwasherPhysical = fields["g2DishwasherPhysical"];
        sec11InfoObj.g2DishwasherVerbal = fields["g2DishwasherVerbal"];
        sec11InfoObj.g2DishwasherInitiates = fields["g2DishwasherInitiates"];
        sec11InfoObj.g2WashDishesNA = fields["g2WashDishesNA"];
        sec11InfoObj.g2WashDishesPhysical = fields["g2WashDishesPhysical"];
        sec11InfoObj.g2WashDishesVerbal = fields["g2WashDishesVerbal"];
        sec11InfoObj.g2WashDishesInitiates = fields["g2WashDishesInitiates"];
        sec11InfoObj.g2OrderMealsNA = fields["g2OrderMealsNA"];
        sec11InfoObj.g2OrderMealsPhysical = fields["g2OrderMealsPhysical"];
        sec11InfoObj.g2OrderMealsVerbal = fields["g2OrderMealsVerbal"];
        sec11InfoObj.g2OrderMealsInitiates = fields["g2OrderMealsInitiates"];
        sec11InfoObj.g2CleanSpaceNA = fields["g2CleanSpaceNA"];
        sec11InfoObj.g2CleanSpacePhysical = fields["g2CleanSpacePhysical"];
        sec11InfoObj.g2CleanSpaceVerbal = fields["g2CleanSpaceVerbal"];
        sec11InfoObj.g2CleanSpaceInitiates = fields["g2CleanSpaceInitiates"];
        sec11InfoObj.g2WashClothesNA = fields["g2WashClothesNA"];
        sec11InfoObj.g2WashClothesPhysical = fields["g2WashClothesPhysical"];
        sec11InfoObj.g2WashClothesVerbal = fields["g2WashClothesVerbal"];
        sec11InfoObj.g2WashClothesInitiates = fields["g2WashClothesInitiates"];
        sec11InfoObj.g2DressAppropriatelyNA = fields["g2DressAppropriatelyNA"];
        sec11InfoObj.g2DressAppropriatelyPhysical = fields["g2DressAppropriatelyPhysical"];
        sec11InfoObj.g2DressAppropriatelyVerbal = fields["g2DressAppropriatelyVerbal"];
        sec11InfoObj.g2DressAppropriatelyInitiates = fields["g2DressAppropriatelyInitiates"];
        sec11InfoObj.g2FixClothesNA = fields["g2FixClothesNA"];
        sec11InfoObj.g2FixClothesPhysical = fields["g2FixClothesPhysical"];
        sec11InfoObj.g2FixClothesVerbal = fields["g2FixClothesVerbal"];
        sec11InfoObj.g2FixClothesInitiates = fields["g2FixClothesInitiates"];
        sec11InfoObj.g2FireRulesNA = fields["g2FireRulesNA"];
        sec11InfoObj.g2FireRulesPhysical = fields["g2FireRulesPhysical"];
        sec11InfoObj.g2FireRulesVerbal = fields["g2FireRulesVerbal"];
        sec11InfoObj.g2FireRulesInitiates = fields["g2FireRulesInitiates"];
        sec11InfoObj.g2TimeMgmtNA = fields["g2TimeMgmtNA"];
        sec11InfoObj.g2TimeMgmtPhysical = fields["g2TimeMgmtPhysical"];
        sec11InfoObj.g2TimeMgmtVerbal = fields["g2TimeMgmtVerbal"];
        sec11InfoObj.g2TimeMgmtInitiates = fields["g2TimeMgmtInitiates"];
        sec11InfoObj.g2SleepSchedNA = fields["g2SleepSchedNA"];
        sec11InfoObj.g2SleepSchedPhysical = fields["g2SleepSchedPhysical"];
        sec11InfoObj.g2SleepSchedVerbal = fields["g2SleepSchedVerbal"];
        sec11InfoObj.g2SleepSchedInitiates = fields["g2SleepSchedInitiates"];
        sec11InfoObj.g2RentAgreementNA = fields["g2RentAgreementNA"];
        sec11InfoObj.g2RentAgreementPhysical = fields["g2RentAgreementPhysical"];
        sec11InfoObj.g2RentAgreementVerbal = fields["g2RentAgreementVerbal"];
        sec11InfoObj.g2RentAgreementInitiates = fields["g2RentAgreementInitiates"];
        sec11InfoObj.g2PhoneServicesNA = fields["g2PhoneServicesNA"];
        sec11InfoObj.g2PhoneServicesPhysical = fields["g2PhoneServicesPhysical"];
        sec11InfoObj.g2PhoneServicesVerbal = fields["g2PhoneServicesVerbal"];
        sec11InfoObj.g2PhoneServicesInitiates = fields["g2PhoneServicesInitiates"];
        sec11InfoObj.g2LivingCostsNA = fields["g2LivingCostsNA"];
        sec11InfoObj.g2LivingCostsPhysical = fields["g2LivingCostsPhysical"];
        sec11InfoObj.g2LivingCostsVerbal = fields["g2LivingCostsVerbal"];
        sec11InfoObj.g2LivingCostsInitiates = fields["g2LivingCostsInitiates"];
        sec11InfoObj.g2CarInsuranceNA = fields["g2CarInsuranceNA"];
        sec11InfoObj.g2CarInsurancePhysical = fields["g2CarInsurancePhysical"];
        sec11InfoObj.g2CarInsuranceVerbal = fields["g2CarInsuranceVerbal"];
        sec11InfoObj.g2CarInsuranceInitiates = fields["g2CarInsuranceInitiates"];
        sec11InfoObj.g2GoodCreditNA = fields["g2GoodCreditNA"];
        sec11InfoObj.g2GoodCreditPhysical = fields["g2GoodCreditPhysical"];
        sec11InfoObj.g2GoodCreditVerbal = fields["g2GoodCreditVerbal"];
        sec11InfoObj.g2GoodCreditInitiates = fields["g2GoodCreditInitiates"];
        sec11InfoObj.g2PayStubNA = fields["g2PayStubNA"];
        sec11InfoObj.g2PayStubPhysical = fields["g2PayStubPhysical"];
        sec11InfoObj.g2PayStubVerbal = fields["g2PayStubVerbal"];
        sec11InfoObj.g2PayStubInitiates = fields["g2PayStubInitiates"];
        sec11InfoObj.g2BillingInfoNA = fields["g2BillingInfoNA"];
        sec11InfoObj.g2BillingInfoPhysical = fields["g2BillingInfoPhysical"];
        sec11InfoObj.g2BillingInfoVerbal = fields["g2BillingInfoVerbal"];
        sec11InfoObj.g2BillingInfoInitiates = fields["g2BillingInfoInitiates"];
        sec11InfoObj.g2BudgetNA = fields["g2BudgetNA"];
        sec11InfoObj.g2BudgetPhysical = fields["g2BudgetPhysical"];
        sec11InfoObj.g2BudgetVerbal = fields["g2BudgetVerbal"];
        sec11InfoObj.g2BudgetInitiates = fields["g2BudgetInitiates"];
        sec11InfoObj.g2CreditNA = fields["g2CreditNA"];
        sec11InfoObj.g2CreditPhysical = fields["g2CreditPhysical"];
        sec11InfoObj.g2CreditVerbal = fields["g2CreditVerbal"];
        sec11InfoObj.g2CreditInitiates = fields["g2CreditInitiates"];
        sec11InfoObj.g2DriversLicenseNA = fields["g2DriversLicenseNA"];
        sec11InfoObj.g2DriversLicensePhysical = fields["g2DriversLicensePhysical"];
        sec11InfoObj.g2DriversLicenseVerbal = fields["g2DriversLicenseVerbal"];
        sec11InfoObj.g2DriversLicenseInitiates = fields["g2DriversLicenseInitiates"];
        sec11InfoObj.g2TransportationNA = fields["g2TransportationNA"];
        sec11InfoObj.g2TransportationPhysical = fields["g2TransportationPhysical"];
        sec11InfoObj.g2TransportationVerbal = fields["g2TransportationVerbal"];
        sec11InfoObj.g2TransportationInitiates = fields["g2TransportationInitiates"];
        sec11InfoObj.g2FollowNavigationNA = fields["g2FollowNavigationNA"];
        sec11InfoObj.g2FollowNavigationPhysical = fields["g2FollowNavigationPhysical"];
        sec11InfoObj.g2FollowNavigationVerbal = fields["g2FollowNavigationVerbal"];
        sec11InfoObj.g2FollowNavigationInitiates = fields["g2FollowNavigationInitiates"];
        sec11InfoObj.g2FinancialAdviceNA = fields["g2FinancialAdviceNA"];
        sec11InfoObj.g2FinancialAdvicePhysical = fields["g2FinancialAdvicePhysical"];
        sec11InfoObj.g2FinancialAdviceVerbal = fields["g2FinancialAdviceVerbal"];
        sec11InfoObj.g2FinancialAdviceInitiates = fields["g2FinancialAdviceInitiates"];
        sec11InfoObj.g2WriteChecksNA = fields["g2WriteChecksNA"];
        sec11InfoObj.g2WriteChecksPhysical = fields["g2WriteChecksPhysical"];
        sec11InfoObj.g2WriteChecksVerbal = fields["g2WriteChecksVerbal"];
        sec11InfoObj.g2WriteChecksInitiates = fields["g2WriteChecksInitiates"];
        sec11InfoObj.g2ATMTransactionsNA = fields["g2ATMTransactionsNA"];
        sec11InfoObj.g2ATMTransactionsPhysical = fields["g2ATMTransactionsPhysical"];
        sec11InfoObj.g2ATMTransactionsVerbal = fields["g2ATMTransactionsVerbal"];
        sec11InfoObj.g2ATMTransactionsInitiates = fields["g2ATMTransactionsInitiates"];
        sec11InfoObj.g2BalanceBankAccountNA = fields["g2BalanceBankAccountNA"];
        sec11InfoObj.g2BalanceBankAccountPhysical = fields["g2BalanceBankAccountPhysical"];
        sec11InfoObj.g2BalanceBankAccountVerbal = fields["g2BalanceBankAccountVerbal"];
        sec11InfoObj.g2BalanceBankAccountInitiates = fields["g2BalanceBankAccountInitiates"];
        sec11InfoObj.g2HousingAdsNA = fields["g2HousingAdsNA"];
        sec11InfoObj.g2HousingAdsPhysical = fields["g2HousingAdsPhysical"];
        sec11InfoObj.g2HousingAdsVerbal = fields["g2HousingAdsVerbal"];
        sec11InfoObj.g2HousingAdsInitiates = fields["g2HousingAdsInitiates"];
        sec11InfoObj.g2EduFinancialAidNA = fields["g2EduFinancialAidNA"];
        sec11InfoObj.g2EduFinancialAidPhysical = fields["g2EduFinancialAidPhysical"];
        sec11InfoObj.g2EduFinancialAidVerbal = fields["g2EduFinancialAidVerbal"];
        sec11InfoObj.g2EduFinancialAidInitiates = fields["g2EduFinancialAidInitiates"];
        sec11InfoObj.g2SaveMoneyNA = fields["g2SaveMoneyNA"];
        sec11InfoObj.g2SaveMoneyPhysical = fields["g2SaveMoneyPhysical"];
        sec11InfoObj.g2SaveMoneyVerbal = fields["g2SaveMoneyVerbal"];
        sec11InfoObj.g2SaveMoneyInitiates = fields["g2SaveMoneyInitiates"];
        sec11InfoObj.g2SocialServicesNA = fields["g2SocialServicesNA"];
        sec11InfoObj.g2SocialServicesPhysical = fields["g2SocialServicesPhysical"];
        sec11InfoObj.g2SocialServicesVerbal = fields["g2SocialServicesVerbal"];
        sec11InfoObj.g2SocialServicesInitiates = fields["g2SocialServicesInitiates"];
        sec11InfoObj.g2CareerEduNA = fields["g2CareerEduNA"];
        sec11InfoObj.g2CareerEduPhysical = fields["g2CareerEduPhysical"];
        sec11InfoObj.g2CareerEduVerbal = fields["g2CareerEduVerbal"];
        sec11InfoObj.g2CareerEduInitiates = fields["g2CareerEduInitiates"];
        sec11InfoObj.g2OralCareNA = fields["g2OralCareNA"];
        sec11InfoObj.g2OralCarePhysical = fields["g2OralCarePhysical"];
        sec11InfoObj.g2OralCareVerbal = fields["g2OralCareVerbal"];
        sec11InfoObj.g2OralCareInitiates = fields["g2OralCareInitiates"];
        sec11InfoObj.g2HairNA = fields["g2HairNA"];
        sec11InfoObj.g2HairPhysical = fields["g2HairPhysical"];
        sec11InfoObj.g2HairVerbal = fields["g2HairVerbal"];
        sec11InfoObj.g2HairInitiates = fields["g2HairInitiates"];
        sec11InfoObj.g2SkinCareNA = fields["g2SkinCareNA"];
        sec11InfoObj.g2SkinCarePhysical = fields["g2SkinCarePhysical"];
        sec11InfoObj.g2SkinCareVerbal = fields["g2SkinCareVerbal"];
        sec11InfoObj.g2SkinCareInitiates = fields["g2SkinCareInitiates"];
        sec11InfoObj.g2EyeGlassesNA = fields["g2EyeGlassesNA"];
        sec11InfoObj.g2EyeGlassesPhysical = fields["g2EyeGlassesPhysical"];
        sec11InfoObj.g2EyeGlassesVerbal = fields["g2EyeGlassesVerbal"];
        sec11InfoObj.g2EyeGlassesInitiates = fields["g2EyeGlassesInitiates"];
        sec11InfoObj.g2WellGroomedNA = fields["g2WellGroomedNA"];
        sec11InfoObj.g2WellGroomedPhysical = fields["g2WellGroomedPhysical"];
        sec11InfoObj.g2WellGroomedVerbal = fields["g2WellGroomedVerbal"];
        sec11InfoObj.g2WellGroomedInitiates = fields["g2WellGroomedInitiates"];
        sec11InfoObj.g2ToiletNeedsNA = fields["g2ToiletNeedsNA"];
        sec11InfoObj.g2ToiletNeedsPhysical = fields["g2ToiletNeedsPhysical"];
        sec11InfoObj.g2ToiletNeedsVerbal = fields["g2ToiletNeedsVerbal"];
        sec11InfoObj.g2ToiletNeedsInitiates = fields["g2ToiletNeedsInitiates"];
        sec11InfoObj.g2WashHandsNA = fields["g2WashHandsNA"];
        sec11InfoObj.g2WashHandsPhysical = fields["g2WashHandsPhysical"];
        sec11InfoObj.g2WashHandsVerbal = fields["g2WashHandsVerbal"];
        sec11InfoObj.g2WashHandsInitiates = fields["g2WashHandsInitiates"];
        sec11InfoObj.g2BatheNA = fields["g2BatheNA"];
        sec11InfoObj.g2BathePhysical = fields["g2BathePhysical"];
        sec11InfoObj.g2BatheVerbal = fields["g2BatheVerbal"];
        sec11InfoObj.g2BatheInitiates = fields["g2BatheInitiates"];
        sec11InfoObj.g2ShavingNeedsNA = fields["g2ShavingNeedsNA"];
        sec11InfoObj.g2ShavingNeedsPhysical = fields["g2ShavingNeedsPhysical"];
        sec11InfoObj.g2ShavingNeedsVerbal = fields["g2ShavingNeedsVerbal"];
        sec11InfoObj.g2ShavingNeedsInitiates = fields["g2ShavingNeedsInitiates"];
        sec11InfoObj.g2DeodorantNA = fields["g2DeodorantNA"];
        sec11InfoObj.g2DeodorantPhysical = fields["g2DeodorantPhysical"];
        sec11InfoObj.g2DeodorantVerbal = fields["g2DeodorantVerbal"];
        sec11InfoObj.g2DeodorantInitiates = fields["g2DeodorantInitiates"];
        sec11InfoObj.g2ClosesDoorNA = fields["g2ClosesDoorNA"];
        sec11InfoObj.g2ClosesDoorPhysical = fields["g2ClosesDoorPhysical"];
        sec11InfoObj.g2ClosesDoorVerbal = fields["g2ClosesDoorVerbal"];
        sec11InfoObj.g2ClosesDoorInitiates = fields["g2ClosesDoorInitiates"];
        sec11InfoObj.g2MinorInjuriesNA = fields["g2MinorInjuriesNA"];
        sec11InfoObj.g2MinorInjuriesPhysical = fields["g2MinorInjuriesPhysical"];
        sec11InfoObj.g2MinorInjuriesVerbal = fields["g2MinorInjuriesVerbal"];
        sec11InfoObj.g2MinorInjuriesInitiates = fields["g2MinorInjuriesInitiates"];
        sec11InfoObj.g2GetsMedicalHelpNA = fields["g2GetsMedicalHelpNA"];
        sec11InfoObj.g2GetsMedicalHelpPhysical = fields["g2GetsMedicalHelpPhysical"];
        sec11InfoObj.g2GetsMedicalHelpVerbal = fields["g2GetsMedicalHelpVerbal"];
        sec11InfoObj.g2GetsMedicalHelpInitiates = fields["g2GetsMedicalHelpInitiates"];
        sec11InfoObj.g2Call911NA = fields["g2Call911NA"];
        sec11InfoObj.g2Call911Physical = fields["g2Call911Physical"];
        sec11InfoObj.g2Call911Verbal = fields["g2Call911Verbal"];
        sec11InfoObj.g2Call911Initiates = fields["g2Call911Initiates"];
        sec11InfoObj.g2HelpIfUnsafeNA = fields["g2HelpIfUnsafeNA"];
        sec11InfoObj.g2HelpIfUnsafePhysical = fields["g2HelpIfUnsafePhysical"];
        sec11InfoObj.g2HelpIfUnsafeVerbal = fields["g2HelpIfUnsafeVerbal"];
        sec11InfoObj.g2HelpIfUnsafeInitiates = fields["g2HelpIfUnsafeInitiates"];
        sec11InfoObj.g2IDStrangerNA = fields["g2IDStrangerNA"];
        sec11InfoObj.g2IDStrangerPhysical = fields["g2IDStrangerPhysical"];
        sec11InfoObj.g2IDStrangerVerbal = fields["g2IDStrangerVerbal"];
        sec11InfoObj.g2IDStrangerInitiates = fields["g2IDStrangerInitiates"];
        sec11InfoObj.g2PoliteNA = fields["g2PoliteNA"];
        sec11InfoObj.g2PolitePhysical = fields["g2PolitePhysical"];
        sec11InfoObj.g2PoliteVerbal = fields["g2PoliteVerbal"];
        sec11InfoObj.g2PoliteInitiates = fields["g2PoliteInitiates"];
        sec11InfoObj.g2RespectOthersThingsNA = fields["g2RespectOthersThingsNA"];
        sec11InfoObj.g2RespectOthersThingsPhysical = fields["g2RespectOthersThingsPhysical"];
        sec11InfoObj.g2RespectOthersThingsVerbal = fields["g2RespectOthersThingsVerbal"];
        sec11InfoObj.g2RespectOthersThingsInitiates = fields["g2RespectOthersThingsInitiates"];
        sec11InfoObj.g2RespectOthersIdeasNA = fields["g2RespectOthersIdeasNA"];
        sec11InfoObj.g2RespectOthersIdeasPhysical = fields["g2RespectOthersIdeasPhysical"];
        sec11InfoObj.g2RespectOthersIdeasVerbal = fields["g2RespectOthersIdeasVerbal"];
        sec11InfoObj.g2RespectOthersIdeasInitiates = fields["g2RespectOthersIdeasInitiates"];
        sec11InfoObj.g2AppreciationNA = fields["g2AppreciationNA"];
        sec11InfoObj.g2AppreciationPhysical = fields["g2AppreciationPhysical"];
        sec11InfoObj.g2AppreciationVerbal = fields["g2AppreciationVerbal"];
        sec11InfoObj.g2AppreciationInitiates = fields["g2AppreciationInitiates"];
        sec11InfoObj.g2NonviolentAngerNA = fields["g2NonviolentAngerNA"];
        sec11InfoObj.g2NonviolentAngerPhysical = fields["g2NonviolentAngerPhysical"];
        sec11InfoObj.g2NonviolentAngerVerbal = fields["g2NonviolentAngerVerbal"];
        sec11InfoObj.g2NonviolentAngerInitiates = fields["g2NonviolentAngerInitiates"];
        sec11InfoObj.g2EffectOfChoicesNA = fields["g2EffectOfChoicesNA"];
        sec11InfoObj.g2EffectOfChoicesPhysical = fields["g2EffectOfChoicesPhysical"];
        sec11InfoObj.g2EffectOfChoicesVerbal = fields["g2EffectOfChoicesVerbal"];
        sec11InfoObj.g2EffectOfChoicesInitiates = fields["g2EffectOfChoicesInitiates"];
        sec11InfoObj.g2InternetSafetyNA = fields["g2InternetSafetyNA"];
        sec11InfoObj.g2InternetSafetyPhysical = fields["g2InternetSafetyPhysical"];
        sec11InfoObj.g2InternetSafetyVerbal = fields["g2InternetSafetyVerbal"];
        sec11InfoObj.g2InternetSafetyInitiates = fields["g2InternetSafetyInitiates"];
        sec11InfoObj.g2PublicPrivateNA = fields["g2PublicPrivateNA"];
        sec11InfoObj.g2PublicPrivatePhysical = fields["g2PublicPrivatePhysical"];
        sec11InfoObj.g2PublicPrivateVerbal = fields["g2PublicPrivateVerbal"];
        sec11InfoObj.g2PublicPrivateInitiates = fields["g2PublicPrivateInitiates"];
        sec11InfoObj.g2WorkDoneOnTimeNA = fields["g2WorkDoneOnTimeNA"];
        sec11InfoObj.g2WorkDoneOnTimePhysical = fields["g2WorkDoneOnTimePhysical"];
        sec11InfoObj.g2WorkDoneOnTimeVerbal = fields["g2WorkDoneOnTimeVerbal"];
        sec11InfoObj.g2WorkDoneOnTimeInitiates = fields["g2WorkDoneOnTimeInitiates"];
        sec11InfoObj.g2OnTimeToSchoolNA = fields["g2OnTimeToSchoolNA"];
        sec11InfoObj.g2OnTimeToSchoolPhysical = fields["g2OnTimeToSchoolPhysical"];
        sec11InfoObj.g2OnTimeToSchoolVerbal = fields["g2OnTimeToSchoolVerbal"];
        sec11InfoObj.g2OnTimeToSchoolInitiates = fields["g2OnTimeToSchoolInitiates"];
        sec11InfoObj.g2SchoolHelpNA = fields["g2SchoolHelpNA"];
        sec11InfoObj.g2SchoolHelpPhysical = fields["g2SchoolHelpPhysical"];
        sec11InfoObj.g2SchoolHelpVerbal = fields["g2SchoolHelpVerbal"];
        sec11InfoObj.g2SchoolHelpInitiates = fields["g2SchoolHelpInitiates"];
        sec11InfoObj.g2ExamPrepNA = fields["g2ExamPrepNA"];
        sec11InfoObj.g2ExamPrepPhysical = fields["g2ExamPrepPhysical"];
        sec11InfoObj.g2ExamPrepVerbal = fields["g2ExamPrepVerbal"];
        sec11InfoObj.g2ExamPrepInitiates = fields["g2ExamPrepInitiates"];
        sec11InfoObj.g2LooksForMistakesNA = fields["g2LooksForMistakesNA"];
        sec11InfoObj.g2LooksForMistakesPhysical = fields["g2LooksForMistakesPhysical"];
        sec11InfoObj.g2LooksForMistakesVerbal = fields["g2LooksForMistakesVerbal"];
        sec11InfoObj.g2LooksForMistakesInitiates = fields["g2LooksForMistakesInitiates"];
        sec11InfoObj.g2GetsInformationNA = fields["g2GetsInformationNA"];
        sec11InfoObj.g2GetsInformationPhysical = fields["g2GetsInformationPhysical"];
        sec11InfoObj.g2GetsInformationVerbal = fields["g2GetsInformationVerbal"];
        sec11InfoObj.g2GetsInformationInitiates = fields["g2GetsInformationInitiates"];
        sec11InfoObj.g2InternetForHomeworkNA = fields["g2InternetForHomeworkNA"];
        sec11InfoObj.g2InternetForHomeworkPhysical = fields["g2InternetForHomeworkPhysical"];
        sec11InfoObj.g2InternetForHomeworkVerbal = fields["g2InternetForHomeworkVerbal"];
        sec11InfoObj.g2InternetForHomeworkInitiates = fields["g2InternetForHomeworkInitiates"];
        sec11InfoObj.g2SearchEngineNA = fields["g2SearchEngineNA"];
        sec11InfoObj.g2SearchEnginePhysical = fields["g2SearchEnginePhysical"];
        sec11InfoObj.g2SearchEngineVerbal = fields["g2SearchEngineVerbal"];
        sec11InfoObj.g2SearchEngineInitiates = fields["g2SearchEngineInitiates"];
        sec11InfoObj.g2ComputerDocumentsNA = fields["g2ComputerDocumentsNA"];
        sec11InfoObj.g2ComputerDocumentsPhysical = fields["g2ComputerDocumentsPhysical"];
        sec11InfoObj.g2ComputerDocumentsVerbal = fields["g2ComputerDocumentsVerbal"];
        sec11InfoObj.g2ComputerDocumentsInitiates = fields["g2ComputerDocumentsInitiates"];
        sec11InfoObj.g2MakeAppointmentsNA = fields["g2MakeAppointmentsNA"];
        sec11InfoObj.g2MakeAppointmentsPhysical = fields["g2MakeAppointmentsPhysical"];
        sec11InfoObj.g2MakeAppointmentsVerbal = fields["g2MakeAppointmentsVerbal"];
        sec11InfoObj.g2MakeAppointmentsInitiates = fields["g2MakeAppointmentsInitiates"];
        sec11InfoObj.g2HurtRelationshipsNA = fields["g2HurtRelationshipsNA"];
        sec11InfoObj.g2HurtRelationshipsPhysical = fields["g2HurtRelationshipsPhysical"];
        sec11InfoObj.g2HurtRelationshipsVerbal = fields["g2HurtRelationshipsVerbal"];
        sec11InfoObj.g2HurtRelationshipsInitiates = fields["g2HurtRelationshipsInitiates"];
        sec11InfoObj.g2BirthCertificateNA = fields["g2BirthCertificateNA"];
        sec11InfoObj.g2BirthCertificatePhysical = fields["g2BirthCertificatePhysical"];
        sec11InfoObj.g2BirthCertificateVerbal = fields["g2BirthCertificateVerbal"];
        sec11InfoObj.g2BirthCertificateInitiates = fields["g2BirthCertificateInitiates"];
        sec11InfoObj.g2SocialSecurityCardNA = fields["g2SocialSecurityCardNA"];
        sec11InfoObj.g2SocialSecurityCardPhysical = fields["g2SocialSecurityCardPhysical"];
        sec11InfoObj.g2SocialSecurityCardVerbal = fields["g2SocialSecurityCardVerbal"];
        sec11InfoObj.g2SocialSecurityCardInitiates = fields["g2SocialSecurityCardInitiates"];
    }

    handleSubmit(event) {
        event.preventDefault();
        this.updateFields();
        this.postToDB();
        this.updateSection11Fields();
        this.postSection11ToDB();
        this.setState({submitButtonPressed: true}, () => {
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
        this.updateSection11Fields();
        this.postSection11ToDB();
        this.props.history.push("/parenthome")
    }

    renderNavbar() {
        return (
            <div data-spy="scroll" id="list-example" className="list-group frame">
                <a className="list-group-item list-group-item-action" href="#/chai/section1">Section 1: Client Information</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section2">Section 2: Family Information</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section3">Section 3: Prenatal and Birth History</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section4">Section 4: Developmental History</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section5">Section 5: Medical History/Past Therapies</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section6">Section 6: General Health</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section7">Section 7: Educational History</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section8">Section 8: Communication</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section9">Section 9: Emotional/Behavioral History</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section10">Section 10: Current Schedule and Typical Day</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section11">Section 11: Independent Skills</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section12">Section 12: Additional Information for Evaluation Day</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section13">Section 13: Goals and Additional Information</a>
                <a className="list-group-item list-group-item-action" href="#/chai/section14">Section 14: Signature</a>
            </div>
        );
    }

    renderSection1() {
        return (
            <fieldset id="/chai/section1">
                <div className={"section"}>Section 1: Client Information</div>
                <Row >
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Date of Birth</Label>
                            <Input
                                type="text"
                                ref="dob"
                                value={this.state.fields["dob"] || ""}
                                onChange={this.handleChange.bind(this, "dob")}
                                className="error"
                                invalid={this.state.errors["dob"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["dob"]}>{this.state.errors["dob"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Age</Label>
                            <Input
                                type="text"
                                ref="age"
                                value={this.state.fields["age"] || ""}
                                onChange={this.handleChange.bind(this, "age")}
                                className="error"
                                invalid={this.state.errors["age"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["age"]}>{this.state.errors["age"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required ">Referring Diagnosis</Label>
                            <Input
                                type="textarea"
                                ref="diagnosis"
                                value={this.state.fields["diagnosis"] || ""}
                                onChange={this.handleChange.bind(this, "diagnosis")}
                                invalid={this.state.errors["diagnosis"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["diagnosis"]}>{this.state.errors["diagnosis"]}
                            </FormFeedback>
                            <Label className={"additional-note"}>
                                *If you wish to use private insurance funds, please discuss diagnosis (and resulting
                                diagnosis code(s)) with our insurance biller.
                            </Label>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Height</Label>
                            <Input
                                type="text"
                                ref="height"
                                value={this.state.fields["height"] || ""}
                                onChange={this.handleChange.bind(this, "height")}
                                className="error"
                                invalid={this.state.errors["height"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["height"]}>{this.state.errors["height"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Current Weight</Label>
                            <Input
                                type="text"
                                ref="weight"
                                value={this.state.fields["weight"] || ""}
                                onChange={this.handleChange.bind(this, "weight")}
                                className="error"
                                invalid={this.state.errors["weight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["weight"]}>{this.state.errors["weight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Street Name</Label>
                            <Input
                                type="text"
                                ref="street"
                                value={this.state.fields["street"] || ""}
                                onChange={this.handleChange.bind(this, "street")}
                                className="error"
                                invalid={this.state.errors["street"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["street"]}>{this.state.errors["street"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="city"
                                value={this.state.fields["city"] || ""}
                                onChange={this.handleChange.bind(this, "city")}
                                className="error"
                                invalid={this.state.errors["city"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["city"]}>{this.state.errors["city"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="state"
                                value={this.state.fields["state"] || ""}
                                onChange={this.handleChange.bind(this, "state")}
                                className="error"
                                invalid={this.state.errors["state"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["state"]}>{this.state.errors["state"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="zip"
                                value={this.state.fields["zip"] || ""}
                                onChange={this.handleChange.bind(this, "zip")}
                                className="error"
                                invalid={this.state.errors["zip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["zip"]}>{this.state.errors["zip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="country"
                                value={this.state.fields["country"] || ""}
                                onChange={this.handleChange.bind(this, "country")}
                                className="error"
                                invalid={this.state.errors["country"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["country"]}>{this.state.errors["country"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Home Phone Number</Label>
                            <Input
                                type="text"
                                ref="homeNumber"
                                value={this.state.fields["homeNumber"] || ""}
                                onChange={this.handleChange.bind(this, "homeNumber")}
                                className="error"
                                invalid={this.state.errors["homeNumber"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["homeNumber"]}>{this.state.errors["homeNumber"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 1: Client Information?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section1Comments"
                                value={this.state.fields["section1Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section1Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>


        );
    }

    renderSection2() {
        const siblingData = [{
                name: <input type="text" name="sib1Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib1Name")} value={this.state.fields["sib1Name"] || ""}/>,
                age: <input type="text" name="sib1Age" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib1Age")}value={this.state.fields["sib1Age"] || ""}/>,
                gender: <input type="text" name="sib1Gender" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib1Gender")} value={this.state.fields["sib1Gender"] || ""}/>,
            }, {
                name: <input type="text" name="sib2Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib2Name")} value={this.state.fields["sib2Name"] || ""}/>,
                age: <input type="text" name="sib2Age" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib2Age")} value={this.state.fields["sib2Age"] || ""}/>,
                gender: <input type="text" name="sib2Gender" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib2Gender")}value={this.state.fields["sib2Gender"] || ""}/>,
            }, {
                name: <input type="text" name="sib3Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib3Name")}value={this.state.fields["sib3Name"] || ""}/>,
                age: <input type="text" name="sib3Age" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib3Age")}value={this.state.fields["sib3Age"] || ""}/>,
                gender: <input type="text" name="sib3Gender" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib3Gender")} value={this.state.fields["sib3Gender"] || ""}/>,
            }, {
                name: <input type="text" name="sib4Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib4Name")} value={this.state.fields["sib4Name"] || ""}/>,
                age: <input type="text" name="sib4Age" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib4Age")} value={this.state.fields["sib4Age"] || ""}/>,
                gender: <input type="text" name="sib4Gender" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib4Gender")} value={this.state.fields["sib4Gender"] || ""}/>,
            }, {
                name: <input type="text" name="sib5Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib5Name")} value={this.state.fields["sib5Name"] || ""}/>,
                age: <input type="text" name="sib5Age" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib5Age")} value={this.state.fields["sib5Age"] || ""}/>,
                gender: <input type="text" name="sib5Gender" className={"tableInputField"} onChange={this.handleChange.bind(this, "sib5Gender")}value={this.state.fields["sib5Gender"] || ""}/>,
            }]
        return (
            <fieldset id="/chai/section2">
                <div className={"section"}>Section 2: Family Information</div>
                <div className={"sub-section"}>Student's Information</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Is your child adopted?</Label>
                            <Input type="select"
                                   name="isAdopted"
                                   id="isAdopted"
                                   ref="isAdopted"
                                   value = {this.state.fields["isAdopted"]}
                                   onChange={this.handleChange.bind(this, "isAdopted")}
                                   invalid={this.state.errors["isAdopted"] }>{this.state.errors["isAdopted"]}
                                >
                                <option value={"blank"}></option>
                                <option value={"yes"}>Yes</option>
                                <option value={"no"}>No</option>
                            </Input>
                            <FormFeedback
                                invalid={this.state.errors["isAdopted"] }>{this.state.errors["isAdopted"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={1} className={"text-right align-bottom"}>
                        <Label>If yes:</Label>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>What Age?</Label>
                            <Input type="text"
                                   name="isAdoptedAge"
                                   id="isAdoptedAge"
                                   onChange={this.handleChange.bind(this, "isAdoptedAge")}
                                   value={this.state.fields["isAdoptedAge"] || ""}
                            >
                            </Input>

                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Country of Birth?</Label>
                            <Input type="text"
                                   name="birthCountry"
                                   id="birthCountry"
                                   onChange={this.handleChange.bind(this, "birthCountry")}
                                   value={this.state.fields["birthCountry"] || ""}>

                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Mother's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Name (First and Last)</Label>
                            <Input
                                type="text"
                                ref="motherName"
                                value={this.state.fields["motherName"] || ""}
                                onChange={this.handleChange.bind(this, "motherName")}
                                className="error"
                                invalid={this.state.errors["motherName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherName"]}>{this.state.errors["motherName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Age</Label>
                            <Input
                                type="text"
                                ref="motherAge"
                                value={this.state.fields["motherAge"] || ""}
                                onChange={this.handleChange.bind(this, "motherAge")}
                                className="error"
                                invalid={this.state.errors["motherAge"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherAge"]}>{this.state.errors["motherAge"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="motherCell"
                                value={this.state.fields["motherCell"] || ""}
                                onChange={this.handleChange.bind(this, "motherCell")}
                                className="error"
                                invalid={this.state.errors["motherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherCell"]}>{this.state.errors["motherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Email</Label>
                            <Input
                                type="text"
                                ref="motherEmail"
                                value={this.state.fields["motherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "motherEmail")}
                                className="error"
                                invalid={this.state.errors["motherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherEmail"]}>{this.state.errors["motherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Occupation</Label>
                            <Input
                                type="text"
                                ref="motherOccupation"
                                value={this.state.fields["motherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "motherOccupation")}
                                className="error"
                                invalid={this.state.errors["motherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["motherOccupation"]}>{this.state.errors["motherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Father's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Name (First and Last)</Label>
                            <Input
                                type="text"
                                ref="fatherName"
                                value={this.state.fields["fatherName"] || ""}
                                onChange={this.handleChange.bind(this, "fatherName")}
                                className="error"
                                invalid={this.state.errors["fatherName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherName"]}>{this.state.errors["fatherName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Age</Label>
                            <Input
                                type="text"
                                ref="fatherAge"
                                value={this.state.fields["fatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "fatherAge")}
                                className="error"
                                invalid={this.state.errors["fatherAge"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherAge"]}>{this.state.errors["fatherAge"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="fatherCell"
                                value={this.state.fields["fatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "fatherCell")}
                                className="error"
                                invalid={this.state.errors["fatherCell"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherCell"]}>{this.state.errors["fatherCell"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label className="control-label required">Email</Label>
                            <Input
                                type="text"
                                ref="fatherEmail"
                                value={this.state.fields["fatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "fatherEmail")}
                                className="error"
                                invalid={this.state.errors["fatherEmail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherEmail"]}>{this.state.errors["fatherEmail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Occupation</Label>
                            <Input
                                type="text"
                                ref="fatherOccupation"
                                value={this.state.fields["fatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "fatherOccupation")}
                                className="error"
                                invalid={this.state.errors["fatherOccupation"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["fatherOccupation"]}>{this.state.errors["fatherOccupation"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Marital Status</Label>
                            <Input type="select"
                                   name="maritalStatus"
                                   id="maritalStatus"
                                   onChange={this.handleChange.bind(this, "maritalStatus")}
                                   value={this.state.fields["maritalStatus"]}
                            invalid={this.state.errors["maritalStatus"]}>
                                <option value= "blank"></option>
                                <option value = "single">Single</option>
                                <option value ="married">Married</option>
                                <option value ="divorced">Divorced</option>
                                <option value ="separated">Separated</option>
                                <option value = "widowed">Widowed</option>
                            </Input>
                            <FormFeedback
                            invalid={this.state.errors["martialStatus"]}> Cannot be Empty
                            </FormFeedback>
                        </FormGroup>
                    </Col>

                    <Col sm={9}>
                        <FormGroup>
                            <Label className={"pt-2"}>If Divorced or Separated, who is the legal guardian?</Label>
                            <Input type="text"
                                   ref="legalGuardian"
                                   value={this.state.fields["legalGuardian"] || ""}
                                   onChange={this.handleChange.bind(this, "legalGuardian")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Mother's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label>Name (First and Last)</Label>
                            <Input
                                type="text"
                                ref="sMotherName"
                                value={this.state.fields["sMotherName"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Age</Label>
                            <Input
                                type="text"
                                ref="sMotherAge"
                                value={this.state.fields["sMotherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sMotherCell"
                                value={this.state.fields["sMotherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                ref="sMotherEmail"
                                value={this.state.fields["sMotherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Occupation</Label>
                            <Input
                                type="text"
                                ref="sMotherOccupation"
                                value={this.state.fields["sMotherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <div className={"sub-section"}>Step Father's Information (if applicable)</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label>Name (First and Last)</Label>
                            <Input
                                type="text"
                                ref="sFatherName"
                                value={this.state.fields["sFatherName"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Age</Label>
                            <Input
                                type="text"
                                ref="sFatherAge"
                                value={this.state.fields["sFatherAge"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherAge")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label>Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sFatherCell"
                                value={this.state.fields["sFatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="text"
                                ref="sFatherEmail"
                                value={this.state.fields["sFatherEmail"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherEmail")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Occupation</Label>
                            <Input
                                type="text"
                                ref="sFatherOccupation"
                                value={this.state.fields["sFatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>

                <Label className="pr-2">Please list siblings in the table below. </Label>

                <ReactTable
                    className={"-striped -highlight"}
                    data={siblingData}
                    columns={this.state.siblingColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className={"space-between"}>
                                Any additional notes or comments about Section 2: Family Information?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section2Comments"
                                value={this.state.fields["section2Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section2Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>

            </fieldset>

        );
    }

    renderSection3() {
        return (
            <fieldset id="/chai/section3">
                <div className={"section"}>Section 3: Prenatal and Birth History</div>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">At how many weeks was the client
                                born?</Label>
                            <Input
                                type="text"
                                ref="birthWeek"
                                value={this.state.fields["birthWeek"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeek")}
                                className="error"
                                invalid={this.state.errors["birthWeek"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["birthWeek"]}>{this.state.errors["birthWeek"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Birth Weight</Label>
                            <Input
                                type="text"
                                ref="birthWeight"
                                value={this.state.fields["birthWeight"] || ""}
                                onChange={this.handleChange.bind(this, "birthWeight")}
                                className="error"
                                invalid={this.state.errors["birthWeight"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["birthWeight"]}>{this.state.errors["birthWeight"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Delivery Type:</Label>
                            <Input type="select"
                                   name="deliveryType"
                                   id="deliveryType"
                                   ref ="deliveryType"
                                   value = {this.state.fields["deliveryType"]}
                                   invalid={this.state.errors["deliveryType"]}
                                   onChange={this.handleChange.bind(this, "deliveryType")}

                            >
                                <option value = "blank"></option>
                                <option value = "vaginal">Vaginal</option>
                                <option value = "cesarean">Cesarean</option>
                            </Input>
                            <FormFeedback
                            invalid={this.state.errors["deliveryType"] }>{this.state.errors["deliveryType"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Were there any complications during the
                                pregnancy or delivery?</Label>
                            <Input type="select"
                                   name="pregComplications"
                                   id="pregComplications"
                                   ref="pregComplications"
                                   value = {this.state.fields["pregComplications"]}
                                   invalid={this.state.errors["pregComplications"]}
                                   onChange={this.handleChange.bind(this, "pregComplications")}
                            >
                                <option value ={"blank"}></option>
                                <option value={"yes"}>Yes</option>
                                <option value ={"no"}>No</option>
                            </Input>
                            <FormFeedback
                            invalid={this.state.errors["pregComplications"] }>{this.state.errors["pregComplications"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm = {7}>
                        <FormGroup>
                            <Label className="pr-2">If yes, please describe</Label>
                            <Input
                                type="textarea"
                                ref="pregComplicationDescription"
                                value={this.state.fields["pregComplicationDescription"] || ""}
                                onChange={this.handleChange.bind(this, "pregComplicationDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Was your child hospitalized after
                                birth?</Label>
                            <Input type="select"
                                   name="hospitaliedAfterBirth"
                                   id="hospitaliedAfterBirth"
                                   ref = "hospitalizedAfterBirth"
                                   value={this.state.fields["hospitalizedAfterBirth"] || ""}
                                   invalid={this.state.errors["hospitalizedAfterBirth"]}
                                   onChange={this.handleChange.bind(this, "hospitalizedAfterBirth")}
                            >
                                <option value = {"blank"}></option>
                                <option value = {"yes"}>Yes</option>
                                <option value = {"no"}>No</option>
                            </Input>
                            <FormFeedback
                            invalid={this.state.errors["hospitaliedAfterBirth"] }>{this.state.errors["hospitalizedAfterBirth"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>

                    <Col sm={7}>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="textarea"
                                ref="hospitaliedAfterBirthDescription"
                                value={this.state.fields["hospitaliedAfterBirthDescription"] || ""}
                                onChange={this.handleChange.bind(this, "hospitaliedAfterBirthDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 3: Prenatal and Birth History?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section3Comments"
                                value={this.state.fields["section3Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section3Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection4() {
        const devHistoryData= [{
                devHistoryActivity:'Crawled on stomach',
                devHistoryYears: <Input type="select"
                name="crawlYears"
                id="crawlYears"
                accesor={"crawlYears"}
                onChange={this.handleChange.bind(this, "crawlYears")}
                                        value = {this.state.fields["crawlYears"]}
                >
                <option  value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value = {4}>4</option>
                <option value ={5}>5</option>
                <option value ={6}>6</option>
                <option value={7}>7</option>
                <option value ={8}>8</option>
                <option value = {9}>9</option>
                <option value ={10}>10</option>
                <option value ={11}>11</option>
                <option value = {12}>12</option>
                <option value = {13}>13</option>
                <option value = {14}>14</option>
                <option value = {15}>15</option>
                <option value = {16}>16</option>
                <option value = {17}>17</option>
                <option value = {18}>18</option>
                <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="crawlMonths"
                id="crawlMonths"
                onChange={this.handleChange.bind(this, "crawlMonths")}
                                         value = {this.state.fields["crawlMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="crawlNa"
                id="crawlNa"
                onChange={this.handleChange.bind(this, "crawlNa")}
                                     value = {this.state.fields["crawlNa"]}
                >
                <option value = {"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value ={"not-developed"}>Not Developed</option>
                <option value = {"unknown"}>Unknown</option>
                </Input>
            }, {
                devHistoryActivity: 'Crept on hands and knees',
                devHistoryYears: <Input type="select"
                name="creptYears"
                id="creptYears"
                                        value = {this.state.fields["creptYears"]}
                onChange={this.handleChange.bind(this, "creptYears")}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="creptMonths"
                id="creptMonths"
                onChange={this.handleChange.bind(this, "creptMonths")}
                                         value = {this.state.fields["creptMonths"]}
                >
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="creptNa"
                id="creptNa"
                onChange={this.handleChange.bind(this, "creptNa")}
                                     value = {this.state.fields["creptNa"]}>
                <option></option>
                <option>Yes</option>
                <option>Not Developed</option>
                <option>Unknown</option>
                </Input>
            }, {
                devHistoryActivity: 'Walked',
                devHistoryYears: <Input type="select"
                name="walkYears"
                id="walkYears"
                onChange={this.handleChange.bind(this, "walkYears")}
                                        value = {this.state.fields["walkYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="walkMonths"
                id="walkMonths"
                onChange={this.handleChange.bind(this, "walkMonths")}
                                         value = {this.state.fields["walkMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="walkNa"
                id="walkNa"
                                     value = {this.state.fields["walkNa"]}
                onChange={this.handleChange.bind(this, "walkNa")}
                >
                <option></option>
                <option>Yes</option>
                <option>Not Developed</option>
                <option>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'Toilet trained',
                devHistoryYears: <Input type="select"
                name="toiletYears"
                id="toiletYears"
                onChange={this.handleChange.bind(this, "toiletYears")}
                                        value = {this.state.fields["toiletYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="toiletMonths"
                id="toiletMonths"
                onChange={this.handleChange.bind(this, "toiletMonths")}
                                         value = {this.state.fields["toiletMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="toiletNa"
                id="toiletNa"
                onChange={this.handleChange.bind(this, "toiletNa")}
                                     value = {this.state.fields["toiletNa"]}
                >
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'First word',
                devHistoryYears: <Input type="select"
                name="wordYears"
                id="wordYears"
                onChange={this.handleChange.bind(this, "wordYears")}
                                        value = {this.state.fields["wordYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="wordMonths"
                id="wordMonths"
                onChange={this.handleChange.bind(this, "wordMonths")}
                                         value = {this.state.fields["wordMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="wordNa"
                id="wordNa"
                onChange={this.handleChange.bind(this, "wordNa")}
                                     value = {this.state.fields["wordNa"]}>
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'Use of couplets (2 words together)',
                devHistoryYears: <Input type="select"
                name="coupletYears"
                id="coupletYears"
                onChange={this.handleChange.bind(this, "coupletYears")}
                                        value = {this.state.fields["coupletYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="coupletMonths"
                id="coupletMonths"
                onChange={this.handleChange.bind(this, "coupletMonths")}
                                         value = {this.state.fields["coupletMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="coupletNa"
                id="coupletNa"
                onChange={this.handleChange.bind(this, "coupletNa")}
                                     value = {this.state.fields["coupletNa"]}>
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>
                </Input>
            }, {
                devHistoryActivity: '3-4 word phrases',
                devHistoryYears: <Input type="select"
                name="phraseYears"
                id="phraseYears"
                onChange={this.handleChange.bind(this, "phraseYears")}
                                        value = {this.state.fields["phraseYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="phraseMonths"
                id="phraseMonths"
                onChange={this.handleChange.bind(this, "phraseMonths")}
                                         value = {this.state.fields["phraseMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="phraseNa"
                id="phraseNa"
                onChange={this.handleChange.bind(this, "phraseNa")}
                                     value = {this.state.fields["phraseNa"]}>
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'Sentences',
                devHistoryYears: <Input type="select"
                name="sentenceYears"
                id="sentenceYears"
                onChange={this.handleChange.bind(this, "sentenceYears")}
                                        value = {this.state.fields["sentenceYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="sentenceMonths"
                id="sentenceMonths"
                onChange={this.handleChange.bind(this, "sentenceMonths")}
                                         value = {this.state.fields["sentenceMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="sentenceNa"
                id="sentenceNa"
                onChange={this.handleChange.bind(this, "sentenceNa")}
                                     value = {this.state.fields["sentenceNa"]}>
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'Conversational language',
                devHistoryYears: <Input type="select"
                name="conversationYears"
                id="conversationYears"
                onChange={this.handleChange.bind(this, "conversationYears")}
                                        value = {this.state.fields["conversationYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="conversationMonths"
                id="conversationMonths"
                onChange={this.handleChange.bind(this, "conversationMonths")}
                                         value = {this.state.fields["conversationMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="conversationNa"
                id="conversationNa"
                onChange={this.handleChange.bind(this, "conversationNa")}
                                     value = {this.state.fields["conversationNa"]}
                >
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }, {
                devHistoryActivity: 'Reading',
                devHistoryYears: <Input type="select"
                name="readYears"
                id="readYears"
                onChange={this.handleChange.bind(this, "readYears")}
                                        value = {this.state.fields["readYears"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                    <option value = {13}>13</option>
                    <option value = {14}>14</option>
                    <option value = {15}>15</option>
                    <option value = {16}>16</option>
                    <option value = {17}>17</option>
                    <option value = {18}>18</option>
                    <option value = {19}>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                name="readMonths"
                id="readMonths"
                onChange={this.handleChange.bind(this, "readMonths")}
                                         value = {this.state.fields["readMonths"]}>
                    <option  value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value = {4}>4</option>
                    <option value ={5}>5</option>
                    <option value ={6}>6</option>
                    <option value={7}>7</option>
                    <option value ={8}>8</option>
                    <option value = {9}>9</option>
                    <option value ={10}>10</option>
                    <option value ={11}>11</option>
                    <option value = {12}>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                name="readNa"
                id="readNa"
                onChange={this.handleChange.bind(this, "readNa")}
                                     value = {this.state.fields["readNa"]}>
                    <option value = {"blank"}></option>
                    <option value ={"yes"}>Yes</option>
                    <option value ={"not-developed"}>Not Developed</option>
                    <option value = {"unknown"}>Unknown</option>

                </Input>
            }]
        return (
            <fieldset id="/chai/section4">
                <div className={"section"}>Section 4: Developmental History</div>
                <div className={"sub-section"}>Please complete the table below</div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={devHistoryData}
                    columns={this.state.devHistoryColumns}
                    defaultPageSize={9}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 4: Developmental History?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section4Comments"
                                value={this.state.fields["section4Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section4Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>
        );
    }

    renderSection5() {
        const  otherDoctorsData = [{
            otherDrName: <input type="text" name="doc1Name" className={"tableInputField"}  value={this.state.fields["doc1Name"] || ""} onChange={this.handleChange.bind(this, "doc1Name")}/>,
            otherDrSpecialty: <input type="text" name="doc1Specialty"className={"tableInputField"} value={this.state.fields["doc1Specialty"] || ""} onChange={this.handleChange.bind(this, "doc1Specialty")}/>,
            otherDrPhone: <input type="text" name="doc1Phone"className={"tableInputField"} value={this.state.fields["doc1Phone"] || ""} onChange={this.handleChange.bind(this, "doc1Phone")}/>,
            otherDrSched: <input type="text" name="doc1Sched"className={"tableInputField"} value={this.state.fields["doc1Sched"] || ""} onChange={this.handleChange.bind(this, "doc1Sched")}/>
        }, {
            otherDrName: <input type="text" name="doc2Name"className={"tableInputField"} value={this.state.fields["doc2Name"] || ""} onChange={this.handleChange.bind(this, "doc2Name")}/>,
            otherDrSpecialty: <input type="text" name="doc2Specialty"className={"tableInputField"} value={this.state.fields["doc2Specialty"] || ""} onChange={this.handleChange.bind(this, "doc2Specialty")}/>,
            otherDrPhone: <input type="text" name="doc2Phone" className={"tableInputField"} value={this.state.fields["doc2Phone"] || ""} onChange={this.handleChange.bind(this, "doc2Phone")}/>,
            otherDrSched: <input type="text" name="doc2Sched"className={"tableInputField"} value={this.state.fields["doc2Sched"] || ""} onChange={this.handleChange.bind(this, "doc2Sched")}/>
        }, {
            otherDrName: <input type="text" name="doc3Name"className={"tableInputField"} value={this.state.fields["doc3Name"] || ""} onChange={this.handleChange.bind(this, "doc3Name")}/>,
            otherDrSpecialty: <input type="text" name="doc3Specialty"className={"tableInputField"} value={this.state.fields["doc3Specialty"] || ""} onChange={this.handleChange.bind(this, "doc3Specialty")}/>,
            otherDrPhone: <input type="text" name="doc3Phone"className={"tableInputField"} value={this.state.fields["doc3Phone"] || ""} onChange={this.handleChange.bind(this, "doc3Phone")}/>,
            otherDrSched: <input type="text" name="doc3Sched"className={"tableInputField"} value={this.state.fields["doc3Sched"] || ""} onChange={this.handleChange.bind(this, "doc3Sched")}/>
        }, {
            otherDrName: <input type="text" name="doc4Name"className={"tableInputField"} value={this.state.fields["doc4Name"] || ""} onChange={this.handleChange.bind(this, "doc4Name")}/>,
            otherDrSpecialty: <input type="text" name="doc4Specialty"className={"tableInputField"} value={this.state.fields["doc4Specialty"] || ""} onChange={this.handleChange.bind(this, "doc4Specialty")}/>,
            otherDrPhone: <input type="text" name="doc4Phone"className={"tableInputField"} value={this.state.fields["doc4Phone"] || ""} onChange={this.handleChange.bind(this, "doc4Phone")}/>,
            otherDrSched: <input type="text" name="doc4Sched"className={"tableInputField"} value={this.state.fields["doc4Sched"] || ""} onChange={this.handleChange.bind(this, "doc4Sched")}/>
        }, {
            otherDrName: <input type="text" name="doc5Name"className={"tableInputField"} value={this.state.fields["doc5Name"] || ""} onChange={this.handleChange.bind(this, "doc5Name")}/>,
            otherDrSpecialty: <input type="text" name="doc5Specialty"className={"tableInputField"} value={this.state.fields["doc5Specialty"] || ""} onChange={this.handleChange.bind(this, "doc5Specialty")}/>,
            otherDrPhone: <input type="text" name="doc5Phone"className={"tableInputField"} value={this.state.fields["doc5Phone"] || ""} onChange={this.handleChange.bind(this, "doc5Phone")}/>,
            otherDrSched: <input type="text" name="doc5Sched"className={"tableInputField"} value={this.state.fields["doc5Sched"] || ""} onChange={this.handleChange.bind(this, "doc5Sched")}/>
        }];
        const specialDoctorsData = [{
            specialDrName: <input type="text" name="specialDoc1Name" className={"tableInputField"} value={this.state.fields["specialDoc1Name"] || ""} onChange={this.handleChange.bind(this, "specialDoc1Name")}/>,
            specialDrSpecialty: <input type="text" name="specialDoc1Specialty"className={"tableInputField"} value={this.state.fields["specialDoc1Specialty"] || ""} onChange={this.handleChange.bind(this, "specialDoc1Specialty")}/>,
            specialDrPhone: <input type="text" name="specialDoc1Phone"className={"tableInputField"} value={this.state.fields["specialDoc1Phone"] || ""} onChange={this.handleChange.bind(this, "specialDoc1Phone")}/>,
            specialDrSched: <input type="text" name="specialDoc1Sched"className={"tableInputField"} value={this.state.fields["specialDoc1Sched"] || ""} onChange={this.handleChange.bind(this, "specialDoc1Sched")}/>
        },{
            specialDrName: <input type="text" name="specialDoc2Name" className={"tableInputField"} value={this.state.fields["specialDoc2Name"] || ""} onChange={this.handleChange.bind(this, "specialDoc2Name")}/>,
            specialDrSpecialty: <input type="text" name="specialDoc2Specialty"className={"tableInputField"} value={this.state.fields["specialDoc2Specialty"] || ""} onChange={this.handleChange.bind(this, "specialDoc2Specialty")}/>,
            specialDrPhone: <input type="text" name="specialDoc2Phone"className={"tableInputField"} value={this.state.fields["specialDoc2Phone"] || ""} onChange={this.handleChange.bind(this, "specialDoc2Phone")}/>,
            specialDrSched: <input type="text" name="specialDoc2Sched"className={"tableInputField"} value={this.state.fields["specialDoc2Sched"] || ""} onChange={this.handleChange.bind(this, "specialDoc2Sched")}/>
        },{
            specialDrName: <input type="text" name="specialDoc3Name" className={"tableInputField"} value={this.state.fields["specialDoc3Name"] || ""} onChange={this.handleChange.bind(this, "specialDoc3Name")}/>,
            specialDrSpecialty: <input type="text" name="specialDoc3Specialty"className={"tableInputField"} value={this.state.fields["specialDoc3Specialty"] || ""} onChange={this.handleChange.bind(this, "specialDoc3Specialty")}/>,
            specialDrPhone: <input type="text" name="specialDoc3Phone"className={"tableInputField"} value={this.state.fields["specialDoc3Phone"] || ""} onChange={this.handleChange.bind(this, "specialDoc3Phone")}/>,
            specialDrSched: <input type="text" name="specialDoc3Sched"className={"tableInputField"} value={this.state.fields["specialDoc3Sched"] || ""} onChange={this.handleChange.bind(this, "specialDoc3Sched")}/>
        },{
            specialDrName: <input type="text" name="specialDoc4Name" className={"tableInputField"} value={this.state.fields["specialDoc4Name"] || ""} onChange={this.handleChange.bind(this, "specialDoc4Name")}/>,
            specialDrSpecialty: <input type="text" name="specialDoc4Specialty"className={"tableInputField"} value={this.state.fields["specialDoc4Specialty"] || ""} onChange={this.handleChange.bind(this, "specialDoc4Specialty")}/>,
            specialDrPhone: <input type="text" name="specialDoc4Phone"className={"tableInputField"} value={this.state.fields["specialDoc4Phone"] || ""} onChange={this.handleChange.bind(this, "specialDoc4Phone")}/>,
            specialDrSched: <input type="text" name="specialDoc4Sched"className={"tableInputField"} value={this.state.fields["specialDoc4Sched"] || ""} onChange={this.handleChange.bind(this, "specialDoc4Sched")}/>
        },{
            specialDrName: <input type="text" name="specialDoc5Name" className={"tableInputField"} value={this.state.fields["specialDoc5Name"] || ""} onChange={this.handleChange.bind(this, "specialDoc5Name")}/>,
            specialDrSpecialty: <input type="text" name="specialDoc5Specialty"className={"tableInputField"} value={this.state.fields["specialDoc5Specialty"] || ""} onChange={this.handleChange.bind(this, "specialDoc5Specialty")}/>,
            specialDrPhone: <input type="text" name="specialDoc5Phone"className={"tableInputField"} value={this.state.fields["specialDoc5Phone"] || ""} onChange={this.handleChange.bind(this, "specialDoc5Phone")}/>,
            specialDrSched: <input type="text" name="specialDoc5Sched"className={"tableInputField"} value={this.state.fields["specialDoc5Sched"] || ""} onChange={this.handleChange.bind(this, "specialDoc5Sched")}/>
        }]
        const medicalConditionsData = [{
            medCondition: 'Epilepsy/Seizures',
            medConditionYN: <Input type="select"
                                   name="epilepsy"
                                   id="epilepsy"
                                   accesor={"epilepsy"}
                                   value={this.state.fields["epilepsy"] || ""}
                                   onChange={this.handleChange.bind(this, "epilepsy")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            medCondition: 'Diabetes',
            medConditionYN: <Input type="select"
                                   name="diabetes"
                                   id="diabetes"
                                   value={this.state.fields["diabetes"] || ""}
                                   onChange={this.handleChange.bind(this, "diabetes")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            medCondition: 'Asthma',
            medConditionYN: <Input type="select"
                                   name="asthma"
                                   id="asthma"
                                   value={this.state.fields["asthma"] || ""}
                                   onChange={this.handleChange.bind(this, "asthma")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            medCondition: 'Uses an Epi-Pen',
            medConditionYN: <Input type="select"
                                   name="epipen"
                                   id="epipen"
                                   value={this.state.fields["epipen"] || ""}
                                   onChange={this.handleChange.bind(this, "epipen")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            medCondition: 'Other (please list in the box below)',
            medConditionYN: <Input type="select"
                                   name="medConditionOther"
                                   id="medConditionOther"
                                   value={this.state.fields["medConditionOther"] || ""}
                                   onChange={this.handleChange.bind(this, "medConditionOther")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }]
        const testingData = [{
            testDate: <input type="text" name="test1Date" className={"tableInputField"} value={this.state.fields["test1Date"] || ""} onChange={this.handleChange.bind(this, "test1Date")}/>,
            testExaminer: <input type="text" name="test1Examiner"className={"tableInputField"} value={this.state.fields["test1Examiner"] || ""} onChange={this.handleChange.bind(this, "test1Examiner")}/>,
            testDiagnosis: <input type="text" name="test1Diagnosis" className={"tableInputField"} value={this.state.fields["test1Diagnosis"] || ""} onChange={this.handleChange.bind(this, "test1Diagnosis")}/>,
            testReco: <input type="text" name="test1Reco" className={"tableInputField"} value={this.state.fields["test1Reco"] || ""} onChange={this.handleChange.bind(this, "test1Reco")}/>,

        }, {
            testDate: <input type="text" name="test2Date" className={"tableInputField"} value={this.state.fields["test2Date"] || ""} onChange={this.handleChange.bind(this, "test2Date")}/>,
            testExaminer: <input type="text" name="test2Examiner" className={"tableInputField"} value={this.state.fields["test2Examiner"] || ""} onChange={this.handleChange.bind(this, "test2Examiner")}/>,
            testDiagnosis: <input type="text" name="test2Diagnosis" className={"tableInputField"} value={this.state.fields["test2Diagnosis"] || ""} onChange={this.handleChange.bind(this, "test2Diagnosis")}/>,
            testReco: <input type="text" name="test2Reco" className={"tableInputField"} value={this.state.fields["test2Reco"] || ""} onChange={this.handleChange.bind(this, "test2Reco")}/>,

        }, {
            testDate: <input type="text" name="test3Date" className={"tableInputField"} value={this.state.fields["test3Date"] || ""} onChange={this.handleChange.bind(this, "test3Date")}/>,
            testExaminer: <input type="text" name="test3Examiner" className={"tableInputField"} value={this.state.fields["test3Examiner"] || ""} onChange={this.handleChange.bind(this, "test3Examiner")}/>,
            testDiagnosis: <input type="text" name="test3Diagnosis" className={"tableInputField"} value={this.state.fields["test3Diagnosis"] || ""} onChange={this.handleChange.bind(this, "test3Diagnosis")}/>,
            testReco: <input type="text" name="test3Reco" className={"tableInputField"} value={this.state.fields["test3Reco"] || ""} onChange={this.handleChange.bind(this, "test3Reco")}/>,
        }, {
            testDate: <input type="text" name="test4Date" className={"tableInputField"} value={this.state.fields["test4Date"] || ""} onChange={this.handleChange.bind(this, "test4Date")}/>,
            testExaminer: <input type="text" name="test4Examiner" className={"tableInputField"} value={this.state.fields["test4Examiner"] || ""} onChange={this.handleChange.bind(this, "test4Examiner")}/>,
            testDiagnosis: <input type="text" name="test4Diagnosis" className={"tableInputField"} value={this.state.fields["test4Diagnosis"] || ""} onChange={this.handleChange.bind(this, "test4Diagnosis")}/>,
            testReco: <input type="text" name="test4Reco" className={"tableInputField"} value={this.state.fields["test4Reco"] || ""} onChange={this.handleChange.bind(this, "test4Reco")}/>,

        }, {
            testDate: <input type="text" name="test5Date" className={"tableInputField"} value={this.state.fields["test5Date"] || ""} onChange={this.handleChange.bind(this, "test5Date")}/>,
            testExaminer: <input type="text" name="test5Examiner" className={"tableInputField"} value={this.state.fields["test5Examiner"] || ""} onChange={this.handleChange.bind(this, "test5Examiner")}/>,
            testDiagnosis: <input type="text" name="test5Diagnosis" className={"tableInputField"} value={this.state.fields["test5Diagnosis"] || ""} onChange={this.handleChange.bind(this, "test5Diagnosis")}/>,
            testReco: <input type="text" name="test5Reco" className={"tableInputField"} value={this.state.fields["test5Reco"] || ""} onChange={this.handleChange.bind(this, "test5Reco")}/>,

        }]
        const suppliesData= [{
            supplies: 'Braces/Splints',
            suppliesYN: <Input type="select"
                               name="brace"
                               id="brace"
                               onChange={this.handleChange.bind(this, "brace")}
                               value={this.state.fields["brace"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Feeding Support & Supplies',
            suppliesYN: <Input type="select"
                               name="feedSupport"
                               id="feedSupport"
                               onChange={this.handleChange.bind(this, "feedSupport")}
                               value={this.state.fields["feedSupport"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Toileting Equipment',
            suppliesYN: <Input type="select"
                               name="toiletEquip"
                               id="toiletEquip"
                               onChange={this.handleChange.bind(this, "toiletEquip")}
                               value={this.state.fields["toiletEquip"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Mobility Equipment',
            suppliesYN: <Input type="select"
                               name="mobilityEquip"
                               id="mobilityEquip"
                               onChange={this.handleChange.bind(this, "mobilityEquip")}
                               value={this.state.fields["mobilityEquip"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Communication Equipment',
            suppliesYN: <Input type="select"
                               name="communicationEquip"
                               id="communicationEquip"
                               onChange={this.handleChange.bind(this, "communicationEquip")}
                               value={this.state.fields["communicationEquip"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Oxygen Tank',
            suppliesYN: <Input type="select"
                               name="oxygenTank"
                               id="oxygenTank"
                               onChange={this.handleChange.bind(this, "oxygenTank")}
                               value={this.state.fields["oxygenTank"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Hearing Device',
            suppliesYN: <Input type="select"
                               name="hearingDevice"
                               id="hearingDevice"
                               onChange={this.handleChange.bind(this, "hearingDevice")}
                               value={this.state.fields["hearingDevice"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }, {
            supplies: 'Other',
            suppliesYN: <Input type="select"
                               name="otherSupply"
                               id="otherSupply"
                               onChange={this.handleChange.bind(this, "otherSupply")}
                               value={this.state.fields["otherSupply"] || ""}>
                <option value = "blank"></option>
                <option value = "yes">Yes</option>
                <option value = "no">No</option>
            </Input>
        }]
        const medsData = [{
            medsName: <input type="text" name="med1Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1Name")} value={this.state.fields["med1Name"] || ""}/>,
            medsDosage: <input type="text" name="med1Dosage" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1Dosage")} value={this.state.fields["med1Dosage"] || ""}/>,
            medsTimeGiven: <input type="text" name="med1TimeGiven" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1TimeGiven")} value={this.state.fields["med1TimeGiven"] || ""}/>,
            medsFrequency: <input type="text" name="med1Frequency" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1Frequency")} value={this.state.fields["med1Frequency"] || ""}/>,
            medsPurpose: <input type="text" name="med1Purpose" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1Purpose")} value={this.state.fields["med1Purpose"] || ""}/>,
            medsSideEffects: <input type="text" name="med1SideEffects" className={"tableInputField"} onChange={this.handleChange.bind(this, "med1SideEffects")} value={this.state.fields["med1SideEffects"] || ""}/>
        }, {
            medsName: <input type="text" name="med2Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2Name")} value={this.state.fields["med2Name"] || ""}/>,
            medsDosage: <input type="text" name="med2Dosage" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2Dosage")} value={this.state.fields["med2Dosage"] || ""}/>,
            medsTimeGiven: <input type="text" name="med2TimeGiven" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2TimeGiven")} value={this.state.fields["med2TimeGiven"] || ""}/>,
            medsFrequency: <input type="text" name="med2Frequency" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2Frequency")} value={this.state.fields["med2Frequency"] || ""}/>,
            medsPurpose: <input type="text" name="med2Purpose" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2Purpose")} value={this.state.fields["med2Purpose"] || ""}/>,
            medsSideEffects: <input type="text" name="med2SideEffects" className={"tableInputField"} onChange={this.handleChange.bind(this, "med2SideEffects")} value={this.state.fields["med2SideEffects"] || ""}/>
        }, {
            medsName: <input type="text" name="med3Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3Name")} value={this.state.fields["med3Name"] || ""}/>,
            medsDosage: <input type="text" name="med3Dosage" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3Dosage")} value={this.state.fields["med3Dosage"] || ""}/>,
            medsTimeGiven: <input type="text" name="med3TimeGiven" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3TimeGiven")} value={this.state.fields["med3TimeGiven"] || ""}/>,
            medsFrequency: <input type="text" name="med3Frequency" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3Frequency")} value={this.state.fields["med3Frequency"] || ""}/>,
            medsPurpose: <input type="text" name="med3Purpose" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3Purpose")} value={this.state.fields["med3Purpose"] || ""}/>,
            medsSideEffects: <input type="text" name="med3SideEffects" className={"tableInputField"} onChange={this.handleChange.bind(this, "med3SideEffects")} value={this.state.fields["med3SideEffects"] || ""}/>
        }, {
            medsName: <input type="text" name="med4Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4Name")} value={this.state.fields["med4Name"] || ""}/>,
            medsDosage: <input type="text" name="med4Dosage" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4Dosage")} value={this.state.fields["med4Dosage"] || ""} />,
            medsTimeGiven: <input type="text" name="med4TimeGiven" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4TimeGiven")} value={this.state.fields["med4TimeGiven"] || ""}/>,
            medsFrequency: <input type="text" name="med4Frequency" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4Frequency")} value={this.state.fields["med4Frequency"] || ""}/>,
            medsPurpose: <input type="text" name="med4Purpose" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4Purpose")} value={this.state.fields["med4Purpose"] || ""}/>,
            medsSideEffects: <input type="text" name="med4SideEffects" className={"tableInputField"} onChange={this.handleChange.bind(this, "med4SideEffects")} value={this.state.fields["med4SideEffects"] || ""}/>
        }, {
            medsName: <input type="text" name="med5Name" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5Name")} value={this.state.fields["med5Name"] || ""}/>,
            medsDosage: <input type="text" name="med5Dosage" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5Dosage")} value={this.state.fields["med5Dosage"] || ""}/>,
            medsTimeGiven: <input type="text" name="med5TimeGiven" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5TimeGiven")} value={this.state.fields["med5TimeGiven"] || ""}/>,
            medsFrequency: <input type="text" name="med5Frequency" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5Frequency")} value={this.state.fields["med5Frequency"] || ""}/>,
            medsPurpose: <input type="text" name="med5Purpose" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5Purpose")} value={this.state.fields["med5Purpose"] || ""}/>,
            medsSideEffects: <input type="text" name="med5SideEffects" className={"tableInputField"} onChange={this.handleChange.bind(this, "med5SideEffects")} value={this.state.fields["med5SideEffects"] || ""}/>
        }]

        return (
            <fieldset id="/chai/section5">
                <div className={"section"}>Section 5: Medical History/Past Therapies</div>
                <div className={"sub-section"}>Primary Physician's Information</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Name</Label>
                            <Input
                                type="text"
                                ref="drName"
                                value={this.state.fields["drName"] || ""}
                                onChange={this.handleChange.bind(this, "drName")}
                                className="error"
                                invalid={this.state.errors["drName"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drName"]}>{this.state.errors["drName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Phone Number</Label>
                            <Input
                                type="text"
                                ref="drPhone"
                                value={this.state.fields["drPhone"] || ""}
                                onChange={this.handleChange.bind(this, "drPhone")}
                                className="error"
                                invalid={this.state.errors["drPhone"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drPhone"]}>{this.state.errors["drPhone"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Address</Label>
                            <Input
                                type="text"
                                ref="drStreet"
                                value={this.state.fields["drStreet"] || ""}
                                onChange={this.handleChange.bind(this, "drStreet")}
                                className="error"
                                invalid={this.state.errors["drStreet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drStreet"]}>{this.state.errors["drStreet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">City</Label>
                            <Input
                                type="text"
                                ref="drCity"
                                value={this.state.fields["drCity"] || ""}
                                onChange={this.handleChange.bind(this, "drCity")}
                                className="error"
                                invalid={this.state.errors["drCity"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCity"]}>{this.state.errors["drCity"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label required">State</Label>
                            <Input
                                type="text"
                                ref="drState"
                                value={this.state.fields["drState"] || ""}
                                onChange={this.handleChange.bind(this, "drState")}
                                className="error"
                                invalid={this.state.errors["drState"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drState"]}>{this.state.errors["drState"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Zip Code</Label>
                            <Input
                                type="text"
                                ref="drZip"
                                value={this.state.fields["drZip"] || ""}
                                onChange={this.handleChange.bind(this, "drZip")}
                                className="error"
                                invalid={this.state.errors["drZip"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drZip"]}>{this.state.errors["drZip"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Country</Label>
                            <Input
                                type="text"
                                ref="drCountry"
                                value={this.state.fields["drCountry"] || ""}
                                onChange={this.handleChange.bind(this, "drCountry")}
                                className="error"
                                invalid={this.state.errors["drCountry"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCountry"]}>{this.state.errors["drCountry"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Secondary Physician's Information</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label">Name</Label>
                            <Input
                                type="text"
                                ref="drName2"
                                value={this.state.fields["drName2"] || ""}
                                onChange={this.handleChange.bind(this, "drName2")}
                                className="error"
                                invalid={this.state.errors["drName2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drName2"]}>{this.state.errors["drName2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label">Phone Number</Label>
                            <Input
                                type="text"
                                ref="drPhone2"
                                value={this.state.fields["drPhone2"] || ""}
                                onChange={this.handleChange.bind(this, "drPhone2")}
                                className="error"
                                invalid={this.state.errors["drPhone2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drPhone2"]}>{this.state.errors["drPhone2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label">Address</Label>
                            <Input
                                type="text"
                                ref="drStreet2"
                                value={this.state.fields["drStreet2"] || ""}
                                onChange={this.handleChange.bind(this, "drStreet2")}
                                className="error"
                                invalid={this.state.errors["drStreet2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drStreet2"]}>{this.state.errors["drStreet2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label">City</Label>
                            <Input
                                type="text"
                                ref="drCity2"
                                value={this.state.fields["drCity2"] || ""}
                                onChange={this.handleChange.bind(this, "drCity2")}
                                className="error"
                                invalid={this.state.errors["drCity2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCity2"]}>{this.state.errors["drCity2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={2}>
                        <FormGroup>
                            <Label className="control-label">State</Label>
                            <Input
                                type="text"
                                ref="drState2"
                                value={this.state.fields["drState2"] || ""}
                                onChange={this.handleChange.bind(this, "drState2")}
                                className="error"
                                invalid={this.state.errors["drState2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drState2"]}>{this.state.errors["drState2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label">Zip Code</Label>
                            <Input
                                type="text"
                                ref="drZip2"
                                value={this.state.fields["drZip2"] || ""}
                                onChange={this.handleChange.bind(this, "drZip2")}
                                className="error"
                                invalid={this.state.errors["drZip2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drZip2"]}>{this.state.errors["drZip2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label">Country</Label>
                            <Input
                                type="text"
                                ref="drCountry2"
                                value={this.state.fields["drCountry2"] || ""}
                                onChange={this.handleChange.bind(this, "drCountry2")}
                                className="error"
                                invalid={this.state.errors["drCountry2"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["drCountry2"]}>{this.state.errors["drCountry2"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Additional Services</div>
                <Row>
                    <Col sm={6}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Does the client currently receive therapy services outside of Jacob's Ladder?</Label>
                            <Input type="select"
                                   name="outsideTherapy"
                                   id="outsideTherapy"
                                   value = {this.state.fields["outsideTherapy"]}
                                   onChange={this.handleChange.bind(this, "outsideTherapy")}>
                                <option value = "blank"></option>
                                <option value = "yes">Yes</option>
                                <option value = "no">No</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"space-between"}>If yes, please fill out the following table</div>
                <ReactTable
                    className={"otherDoctorsTable -striped -highlight"}
                    data={otherDoctorsData}
                    columns={this.state.otherDoctorsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <div className={"space-between"}>Please list any additional specialists the client sees (psychologists, OT, SLP,Educational,Behavioral,etc.)</div>
                <ReactTable
                    className={" otherDoctorsTable -striped -highlight"}
                    data={specialDoctorsData}
                    columns={this.state.otherSpecialistsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                    <Label className="control-label space-between">Please list any pertinent medical, neurological, visual, hearing, therapeutic, psychological, and/or educational testing.
                        Please send any supporting documents or reports to Jacob's Ladder via email.</Label>
                <ReactTable
                    className={"testingTable -striped -highlight"}
                    data={testingData}
                    columns={this.state.testingColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />

                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required space-between">Please list any hospitalizations and/or medical
                                procedures the client has received.</Label>
                            <Input
                                type="textarea"
                                ref="hospital"
                                value={this.state.fields["hospital"] || ""}
                                onChange={this.handleChange.bind(this, "hospital")}
                                className="error"
                                invalid={this.state.errors["hospital"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hospital"]}>{this.state.errors["hospital"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                    <Label className="control-label required">Please indicate whether the following apply to the client.</Label>
                <ReactTable
                    className={"medicalConditionsTable -striped -highlight"}
                    data={medicalConditionsData}
                    columns={this.state.medicalConditionsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label  space-between">Please list other medical conditions here.</Label>
                            <Input
                                type="textarea"
                                ref="otherMedicalConditions"
                                value={this.state.fields["otherMedicalConditions"] || ""}
                                onChange={this.handleChange.bind(this, "otherMedicalConditions")}
                                className="error"
                                invalid={this.state.errors["otherMedicalConditions"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["otherMedicalConditions"]}>{this.state.errors["otherMedicalConditions"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                    <Label className="control-label required space-between">Please indicate if the client uses any of the following supplies/equipment.</Label>
                <ReactTable
                    className={"suppliesTable -striped -highlight"}
                    data={suppliesData}
                    columns={this.state.suppliesColumns}
                    defaultPageSize={8}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label  space-between">Please list other supplies/equipment here.</Label>
                            <Input
                                type="textarea"
                                ref="otherSupplyDetail"
                                value={this.state.fields["otherSupplyDetail"] || ""}
                                onChange={this.handleChange.bind(this, "otherSupplyDetail")}
                                className="error"
                                invalid={this.state.errors["otherSupplyDetail"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["otherSupplyDetail"]}>{this.state.errors["otherSupplyDetail"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Current Medications</div>
                    <Label className="control-label required">Please list all current medications, dietary supplement, and vitamins.</Label>
                <ReactTable
                    className={"medsTable -striped -highlight"}
                    data={medsData}
                    columns={this.state.medsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />

                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 5: Medical History/Past Therapies?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section5Comments"
                                value={this.state.fields["section5Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section5Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>
        );
    }

    renderSection6() {
        const physicalMotorData = [{
            physicalMotor: 'Low muscle tone',
            physicalMotorYN: <Input type="select"
                                    name="lowMuscleTone"
                                    id="lowMuscleTone"
                                    onChange={this.handleChange.bind(this, "lowMuscleTone")}
                                    value={this.state.fields["lowMuscleTone"] || ""}
            >
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'High muscle tone',
            physicalMotorYN: <Input type="select"
                                    name="highMuscleTone"
                                    id="highMuscleTone"
                                    onChange={this.handleChange.bind(this, "highMuscleTone")}
                                    value={this.state.fields["highuscleTone"] || ""}
            >
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Coordination challenges',
            physicalMotorYN: <Input type="select"
                                    name="coordination"
                                    id="coordination"
                                    onChange={this.handleChange.bind(this, "coordination")}
                                    value={this.state.fields["coordination"] || ""}
            >
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Crawling challenges',
            physicalMotorYN: <Input type="select"
                                    name="crawling"
                                    id="crawling"
                                    value={this.state.fields["crawling"] || ""}
                                    onChange={this.handleChange.bind(this, "crawling")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Walking challenges',
            physicalMotorYN: <Input type="select"
                                    name="walking"
                                    id="walking"
                                    onChange={this.handleChange.bind(this, "walking")}
                                    value={this.state.fields["walking"] || ""}
            >
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Running challenges',
            physicalMotorYN: <Input type="select"
                                    name="running"
                                    id="running"
                                    value={this.state.fields["running"] || ""}
                                    onChange={this.handleChange.bind(this, "running")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Athetoid movement',
            physicalMotorYN: <Input type="select"
                                    name="athetoid"
                                    id="athetoid"
                                    value={this.state.fields["athetoid"] || ""}
                                    onChange={this.handleChange.bind(this, "athetoid")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Ataxic',
            physicalMotorYN: <Input type="select"
                                    name="ataxic"
                                    id="ataxic"
                                    value={this.state.fields["ataxic"] || ""}
                                    onChange={this.handleChange.bind(this, "ataxic")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Weak',
            physicalMotorYN: <Input type="select"
                                    name="weak"
                                    id="weak"
                                    value={this.state.fields["weak"] || ""}
                                    onChange={this.handleChange.bind(this, "weak")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }, {
            physicalMotor: 'Balance challenges',
            physicalMotorYN: <Input type="select"
                                    name="balance"
                                    id="balance"
                                    value={this.state.fields["balance"] || ""}
                                    onChange={this.handleChange.bind(this, "balance")}>
                <option value ={"blank"}></option>
                <option value ={"yes"}>Yes</option>
                <option value = {"no"}>No</option>
                <option value = {"not-sure"}>Not Sure</option>
            </Input>
        }]
        const foodGroupData = [{
            foodGroup: 'Vegetables',
            foodExcessive: <div className={"checkbox-div"}><Input type="checkbox" name="vegetableExcess" id="vegetableExcess" className={"checkbox-style"} value={this.state.fields["vegetableExcess"] || ""} onChange={this.handleChange.bind(this, "vegetableExcess")}/></div>,
            foodDaily: <div className={"checkbox-div"}><Input type="checkbox" name="vegetableDaily" id="vegetableDaily" className={"checkbox-style"} value={this.state.fields["vegetableDaily"] || ""} onChange={this.handleChange.bind(this, "vegetableDaily")}/></div>,
            foodWeekly: <div className={"checkbox-div"}><Input type="checkbox" name="vegetableWeekly" id="vegetableWeekly" className={"checkbox-style"} value={this.state.fields["vegetableWeekly"] || ""} onChange={this.handleChange.bind(this, "vegetableWeekly")}/></div>,
            foodRarely: <div className={"checkbox-div"}><Input type="checkbox" name="vegetableRarely" id="vegetableRarely" className={"checkbox-style"} value={this.state.fields["vegetableRarely"] || ""} onChange={this.handleChange.bind(this, "vegetableRarely")}/></div>,
            foodNever: <div className={"checkbox-div"}><Input type="checkbox" name="vegetableNever" id="vegetableNever" className={"checkbox-style"} value={this.state.fields["vegetableNever"] || ""} onChange={this.handleChange.bind(this, "vegetableNever")}/></div>
        }, {
            foodGroup: 'Fruits',
            foodExcessive: <div className={"checkbox-div"}> <Input type="checkbox" name="fruitExcess" id="fruitExcess" className={"checkbox-style"} value={this.state.fields["fruitExcess"] || ""} onChange={this.handleChange.bind(this, "fruitExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}> <Input type="checkbox" name="fruitDaily" id="fruitDaily"className={"checkbox-style"} value={this.state.fields["fruitDaily"] || ""} onChange={this.handleChange.bind(this, "fruitDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}> <Input type="checkbox" name="fruitWeekly" id="fruitWeekly" className={"checkbox-style"} value={this.state.fields["fruitWeekly"] || ""} onChange={this.handleChange.bind(this, "fruitWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}> <Input type="checkbox" name="fruitRarely" id="fruitRarely"className={"checkbox-style"} value={this.state.fields["fruitRarely"] || ""} onChange={this.handleChange.bind(this, "fruitRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}> <Input type="checkbox" name="fruitNever" id="fruitNever"className={"checkbox-style"} value={this.state.fields["fruitNever"] || ""} onChange={this.handleChange.bind(this, "fruitNever")}/>  </div>
        }, {
            foodGroup: 'Meats',
            foodExcessive: <div className={"checkbox-div"}>  <Input type="checkbox" name="meatExcess" id="meatExcess" className={"checkbox-style"} value={this.state.fields["meatExcess"] || ""} onChange={this.handleChange.bind(this, "meatExcess")}/></div> ,
            foodDaily: <div className={"checkbox-div"}> <Input type="checkbox" name="meatDaily" id="meatDaily" className={"checkbox-style"} value={this.state.fields["meatDaily"] || ""} onChange={this.handleChange.bind(this, "meatDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}>  <Input type="checkbox" name="meatWeekly" id="meatWeekly" className={"checkbox-style"} value={this.state.fields["meatWeekly"] || ""} onChange={this.handleChange.bind(this, "meatWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}>  <Input type="checkbox" name="meatRarely" id="meatRarely" className={"checkbox-style"} value={this.state.fields["meatRarely"] || ""} onChange={this.handleChange.bind(this, "meatRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="meatNever" id="meatNever" className={"checkbox-style"} value={this.state.fields["meatNever"] || ""} onChange={this.handleChange.bind(this, "meatNever")}/>  </div>
        }, {
            foodGroup: 'Sugar',
            foodExcessive: <div className={"checkbox-div"}>  <Input type="checkbox" name="sugarExcess" id="sugarExcess" className={"checkbox-style"} value={this.state.fields["sugarExcess"] || ""} onChange={this.handleChange.bind(this, "sugarExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}>  <Input type="checkbox" name="sugarDaily" id="sugarDaily" className={"checkbox-style"} value={this.state.fields["sugarDaily"] || ""} onChange={this.handleChange.bind(this, "sugarDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}>  <Input type="checkbox" name="sugarWeekly" id="sugarWeekly" className={"checkbox-style"} value={this.state.fields["sugarWeekly"] || ""} onChange={this.handleChange.bind(this, "sugarWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}>  <Input type="checkbox" name="sugarRarely" id="sugarRarely" className={"checkbox-style"}value={this.state.fields["sugarRarely"] || ""} onChange={this.handleChange.bind(this, "sugarRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="sugarNever" id="sugarNever" className={"checkbox-style"} value={this.state.fields["sugarNever"] || ""} onChange={this.handleChange.bind(this, "sugarNever")}/>  </div>
        }, {
            foodGroup: 'Artificial Sweetener',
            foodExcessive: <div className={"checkbox-div"}>  <Input type="checkbox" name="artSweetenerExcess" id="artSweetenerExcess" className={"checkbox-style"} value={this.state.fields["artSweetenerExcess"] || ""} onChange={this.handleChange.bind(this, "artSweetenerExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}> <Input type="checkbox" name="artSweetenerDaily" id="artSweetenerDaily" className={"checkbox-style"} value={this.state.fields["artSweetenerDaily"] || ""} onChange={this.handleChange.bind(this, "artSweetenerDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}> <Input type="checkbox" name="artSweetenerWeekly" id="artSweetenerWeekly" className={"checkbox-style"} value={this.state.fields["artSweetenerWeekly"] || ""} onChange={this.handleChange.bind(this, "artSweetenerWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}>  <Input type="checkbox" name="artSweetenerRarely" id="artSweetenerRarely" className={"checkbox-style"} value={this.state.fields["artSweetenerRarely"] || ""} onChange={this.handleChange.bind(this, "artSweetenerRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="artSweetenerNever" id="artSweetenerNever" className={"checkbox-style"} value={this.state.fields["artSweetenerNever"] || ""} onChange={this.handleChange.bind(this, "artSweetenerNever")}/>  </div>
        }, {
            foodGroup: 'Artificial Products',
            foodExcessive: <div className={"checkbox-div"}>  <Input type="checkbox" name="artProductsExcess" id="artProductsExcess" className={"checkbox-style"} value={this.state.fields["artProductsExcess"] || ""} onChange={this.handleChange.bind(this, "artProductsExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}>  <Input type="checkbox" name="artProductsDaily" id="artProductsDaily" className={"checkbox-style"} value={this.state.fields["artProductsDaily"] || ""} onChange={this.handleChange.bind(this, "artProductsDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}> <Input type="checkbox" name="artProductsWeekly" id="artProductsWeekly" className={"checkbox-style"} value={this.state.fields["artProductsWeekly"] || ""} onChange={this.handleChange.bind(this, "artProductsWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}> <Input type="checkbox" name="artProductsRarely" id="artProductsRarely" className={"checkbox-style"} value={this.state.fields["artProductsRarely"] || ""} onChange={this.handleChange.bind(this, "artProductsRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="artProductsNever" id="artProductsNever" className={"checkbox-style"} value={this.state.fields["artProductsNever"] || ""} onChange={this.handleChange.bind(this, "artProductsNever")}/>  </div>
        }, {
            foodGroup: 'Dairy Products',
            foodExcessive: <div className={"checkbox-div"}> <Input type="checkbox" name="dairyExcess" id="dairyExcess" className={"checkbox-style"} value={this.state.fields["dairyExcess"] || ""} onChange={this.handleChange.bind(this, "dairyExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}> <Input type="checkbox" name="dairyDaily" id="dairyDaily" className={"checkbox-style"} value={this.state.fields["dairyDaily"] || ""} onChange={this.handleChange.bind(this, "dairyDaily")}/>  </div>,
            foodWeekly:<div className={"checkbox-div"}> <Input type="checkbox" name="dairyWeekly" id="dairyWeekly" className={"checkbox-style"} value={this.state.fields["dairyWeekly"] || ""} onChange={this.handleChange.bind(this, "dairyWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}> <Input type="checkbox" name="dairyRarely" id="dairyRarely" className={"checkbox-style"} value={this.state.fields["dairyRarely"] || ""} onChange={this.handleChange.bind(this, "dairyRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="dairyNever" id="dairyNever"className={"checkbox-style"} value={this.state.fields["dairyNever"] || ""} onChange={this.handleChange.bind(this, "dairyNever")}/>  </div>
        }, {
            foodGroup: 'White Flour',
            foodExcessive: <div className={"checkbox-div"}>  <Input type="checkbox" name="flourExcess" id="flourExcess"className={"checkbox-style"} value={this.state.fields["flourExcess"] || ""} onChange={this.handleChange.bind(this, "flourExcess")}/>  </div>,
            foodDaily: <div className={"checkbox-div"}> <Input type="checkbox" name="flourDaily" id="flourDaily" className={"checkbox-style"} value={this.state.fields["flourDaily"] || ""} onChange={this.handleChange.bind(this, "flourDaily")}/>  </div>,
            foodWeekly: <div className={"checkbox-div"}> <Input type="checkbox" name="flourWeekly" id="flourWeekly" className={"checkbox-style"} value={this.state.fields["flourWeekly"] || ""} onChange={this.handleChange.bind(this, "flourWeekly")}/>  </div>,
            foodRarely: <div className={"checkbox-div"}>  <Input type="checkbox" name="flourRarely" id="flourRarely" className={"checkbox-style"} value={this.state.fields["flourRarely"] || ""} onChange={this.handleChange.bind(this, "flourRarely")}/>  </div>,
            foodNever: <div className={"checkbox-div"}>  <Input type="checkbox" name="flourNever" id="flourNever" className={"checkbox-style"} value={this.state.fields["flourNever"] || ""} onChange={this.handleChange.bind(this, "flourNever")}/>  </div>
        }]
        return (
            <fieldset id="/chai/section6">
                <div className={"section"}>Section 6: General Health</div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please describe the client's diet.</Label>
                            <Input
                                type="textarea"
                                ref="diet"
                                value={this.state.fields["diet"] || ""}
                                onChange={this.handleChange.bind(this, "diet")}
                                className="error"
                                invalid={this.state.errors["diet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["diet"]}>{this.state.errors["diet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                    <Label className="control-label required">Please check all that apply:</Label>
                <ReactTable
                    className={"foodGroupTable -striped -highlight"}
                    data={foodGroupData}
                    columns={this.state.foodGroupColumns}
                    defaultPageSize={8}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2 space-between">Does the client have any allergies?</Label>
                            <Input type="select"
                                   name="allergies"
                                   id="allergies"
                                   value = {this.state.fields["allergies"]}
                                   onChange={this.handleChange.bind(this, "allergies")}>
                                <option value = "blank"></option>
                                <option value ="yes">Yes</option>
                                <option value = "none">None Known</option>
                            </Input>
                        </FormGroup>
                    </Col>

                    <Col sm ={9}>
                        <FormGroup>
                            <Label className="control-label required space-between">If yes, please describe.</Label>
                            <Input
                                type="textarea"
                                ref="describeAllergies"
                                value={this.state.fields["describeAllergies"] || ""}
                                onChange={this.handleChange.bind(this, "describeAllergies")}
                                className="error"
                                invalid={this.state.errors["describeAllergies"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["describeAllergies"]}>{this.state.errors["describeAllergies"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Daily Meal Schedule</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Breakfast Time</Label>
                            <Input
                                type="text"
                                ref="breakfastTime"
                                value={this.state.fields["breakfastTime"] || ""}
                                onChange={this.handleChange.bind(this, "breakfastTime")}
                                className="error"
                                invalid={this.state.errors["breakfastTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["breakfastTime"]}>{this.state.errors["breakfastTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Lunch Time</Label>
                            <Input
                                type="text"
                                ref="lunchTime"
                                value={this.state.fields["lunchTime"] || ""}
                                onChange={this.handleChange.bind(this, "lunchTime")}
                                className="error"
                                invalid={this.state.errors["lunchTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["lunchTime"]}>{this.state.errors["lunchTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Dinner Time</Label>
                            <Input
                                type="text"
                                ref="dinnerTime"
                                value={this.state.fields["dinnerTime"] || ""}
                                onChange={this.handleChange.bind(this, "dinnerTime")}
                                className="error"
                                invalid={this.state.errors["dinnerTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["dinnerTime"]}>{this.state.errors["dinnerTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Approximate Snack Times</Label>
                            <Input
                                type="text"
                                ref="snackTime"
                                value={this.state.fields["snackTime"] || ""}
                                onChange={this.handleChange.bind(this, "snackTime")}
                                className="error"
                                invalid={this.state.errors["snackTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["snackTime"]}>{this.state.errors["snackTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Sleep</div>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Approximately how many hours of sleep does the client get each night?</Label>
                            <Input
                                type="text"
                                ref="hoursOfSleep"
                                value={this.state.fields["hoursOfSleep"] || ""}
                                onChange={this.handleChange.bind(this, "hoursOfSleep")}
                                className="error"
                                invalid={this.state.errors["hoursOfSleep"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hoursOfSleep"]}>{this.state.errors["hoursOfSleep"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Typical bedtime</Label>
                            <Input
                                type="text"
                                ref="bedTime"
                                value={this.state.fields["bedTime"] || ""}
                                onChange={this.handleChange.bind(this, "bedTime")}
                                className="error"
                                invalid={this.state.errors["bedTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["bedTime"]}>{this.state.errors["bedTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required">Typical morning wake time</Label>
                            <Input
                                type="text"
                                ref="wakeTime"
                                value={this.state.fields["wakeTime"] || ""}
                                onChange={this.handleChange.bind(this, "wakeTime")}
                                className="error"
                                invalid={this.state.errors["wakeTime"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["wakeTime"]}>{this.state.errors["wakeTime"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Label>Does the client experience any of the following?</Label>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Trouble falling asleep</Label>
                            <Input type="select"
                                   name="troubleFallingAsleep"
                                   id="troubleFallingAsleep"
                                   value={this.state.fields["troubleFallingAsleep"]}
                                   onChange={this.handleChange.bind(this, "troubleFallingAsleep")}>
                                <option value={"blank"}></option>
                                <option value = "yes">Yes</option>
                                <option value = "no">No</option>
                                <option value = "not sure">Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Trouble staying asleep/wakes
                                frequently</Label>
                            <Input type="select"
                                   name="troubleStayingAsleep"
                                   id="troubleStayingAsleep"
                                   value = {this.state.fields["troubleStayingAsleep"]}
                                   onChange={this.handleChange.bind(this, "troubleStayingAsleep")}>
                                <option value = "blank"></option>
                                <option value = "yes">Yes</option>
                                <option value = "no">No</option>
                                <option value = "not sure">Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Wakes Early</Label>
                            <Input type="select"
                                   name="wakesEarly"
                                   id="wakesEarly"
                                   value={this.state.fields["wakesEarly"]}
                                   onChange={this.handleChange.bind(this, "wakesEarly")}>
                                <option value ="blank"></option>
                                <option value = "yes">Yes</option>
                                <option value = "no">No</option>
                                <option value = "not sure">Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Physical Motor</div>
                <Row>
                    <Label className="control-label required pl-3">Please select whether the following apply.</Label>
                </Row>
                <ReactTable
                    className={"physicalMotorTable -striped -highlight"}
                    data={physicalMotorData}
                    columns={this.state.physicalMotorColumns}
                    defaultPageSize={10}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label space-between">Please list other physical motor challenges.</Label>
                            <Input
                                type="textarea"
                                ref="otherPhysicalMotor"
                                value={this.state.fields["otherPhysicalMotor"] || ""}
                                onChange={this.handleChange.bind(this, "otherPhysicalMotor")}
                                className="error"
                                invalid={this.state.errors["otherPhysicalMotor"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["otherPhysicalMotor"]}>{this.state.errors["otherPhysicalMotor"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 6: General Health?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section6Comments"
                                value={this.state.fields["section6Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section6Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection7() {
        const otherProgramsData = [{
            programName: <input type="text" name="program1name"className={"tableInputField"} value={this.state.fields["program1name"] || ""} onChange={this.handleChange.bind(this, "program1name")}/>,
            startDate: <input type="text" name="startdate1"className={"tableInputField"} value={this.state.fields["startdate1"] || ""} onChange={this.handleChange.bind(this, "startdate1")}/>,
            provider: <input type="text" name="provider1"className={"tableInputField"} value={this.state.fields["provider1"] || ""} onChange={this.handleChange.bind(this, "provider1")}/>,
            programPhoneNumber: <input type="tel" name="phonenumber1"className={"tableInputField"} value={this.state.fields["phonenumber1"] || ""} onChange={this.handleChange.bind(this, "phonenumber1")}/>,
            contactPermission: <Input type="select"
                                      name="contactpermission1"
                                      id="contactpermission1"
                                      value={this.state.fields["contactpermission1"] || ""}
                                      onChange={this.handleChange.bind(this, "contactpermission1")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            programName: <input type="text" name="program2name"className={"tableInputField"} value={this.state.fields["program2name"] || ""} onChange={this.handleChange.bind(this, "program2name")}/>,
            startDate: <input type="text" name="startdate2"className={"tableInputField"} value={this.state.fields["startdate2"] || ""} onChange={this.handleChange.bind(this, "startdate2")}/>,
            provider: <input type="text" name="provider2"className={"tableInputField"} value={this.state.fields["provider2"] || ""} onChange={this.handleChange.bind(this, "provider2")}/>,
            programPhoneNumber: <input type="tel" name="phonenumber2"className={"tableInputField"} value={this.state.fields["phonenumber2"] || ""} onChange={this.handleChange.bind(this, "phonenumber2")}/>,
            contactPermission: <Input type="select"
                                      name="contactpermission2"
                                      id="contactpermission2"
                                      value={this.state.fields["contactpermission2"] || ""}
                                      onChange={this.handleChange.bind(this, "contactpermission2")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            programName: <input type="text" name="program3name"className={"tableInputField"} value={this.state.fields["program3name"] || ""} onChange={this.handleChange.bind(this, "program3name")}/>,
            startDate: <input type="text" name="startdate3"className={"tableInputField"} value={this.state.fields["startdate3"] || ""} onChange={this.handleChange.bind(this, "startdate3")}/>,
            provider: <input type="text" name="provider3" className={"tableInputField"} value={this.state.fields["provider3"] || ""} onChange={this.handleChange.bind(this, "provider3")}/>,
            programPhoneNumber: <input type="tel" name="phonenumber3" className={"tableInputField"} value={this.state.fields["phonenumber3"] || ""} onChange={this.handleChange.bind(this, "phonenumber3")}/>,
            contactPermission: <Input type="select"
                                      name="contactpermission3"
                                      id="contactpermission3"
                                      value={this.state.fields["contactpermission3"] || ""}
                                      onChange={this.handleChange.bind(this, "contactpermission3")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            programName: <input type="text" name="program4name" className={"tableInputField"} value={this.state.fields["program4name"] || ""} onChange={this.handleChange.bind(this, "program4name")}/>,
            startDate: <input type="text" name="startdate4" className={"tableInputField"} value={this.state.fields["startdate4"] || ""} onChange={this.handleChange.bind(this, "startdate4")}/>,
            provider: <input type="text" name="provider4" className={"tableInputField"} value={this.state.fields["provider4"] || ""} onChange={this.handleChange.bind(this, "provider4")}/>,
            programPhoneNumber: <input type="tel" name="phonenumber4" className={"tableInputField"} value={this.state.fields["phonenumber4"] || ""} onChange={this.handleChange.bind(this, "phonenumber4")}/>,
            contactPermission: <Input type="select"
                                      name="contactpermission4"
                                      id="contactpermission4"
                                      value={this.state.fields["contactpermission4"] || ""}
                                      onChange={this.handleChange.bind(this, "contactpermission4")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }, {
            programName: <input type="text" name="program5name" className={"tableInputField"} value={this.state.fields["program5name"] || ""} onChange={this.handleChange.bind(this, "program5name")}/>,
            startDate: <input type="text" name="startdate5" className={"tableInputField"} value={this.state.fields["startdate5"] || ""} onChange={this.handleChange.bind(this, "startdate5")}/>,
            provider: <input type="text" name="provider5" className={"tableInputField"} value={this.state.fields["provider5"] || ""} onChange={this.handleChange.bind(this, "provider5")}/>,
            programPhoneNumber: <input type="tel" name="phonenumber5" className={"tableInputField"} value={this.state.fields["phonenumber5"] || ""} onChange={this.handleChange.bind(this, "phonenumber5")}/>,
            contactPermission: <Input type="select"
                                      name="contactpermission5"
                                      id="contactpermission5"
                                      value={this.state.fields["contactpermission5"] || ""}
                                      onChange={this.handleChange.bind(this, "contactpermission5")}>
                <option value = {"blank"}></option>
                <option value = {"yes"}>Yes</option>
                <option value = {"no"}>No</option>
            </Input>
        }]
         const handPreferenceData = [{
            activityHandPreference: "Writing",
            handPreference: <Input type="select"
                                   name="handPreference1"
                                   id="handPreference1"
                                   onChange={this.handleChange.bind(this, "handPreference1")}
                                   value={this.state.fields["handPreference1"] || ""}
            >
                <option value = {"blank"}></option>
                <option value = {"unknown"}>Unknown</option>
                <option value = {"right"}>Right</option>
                <option value ={"left"}>Left</option>
                <option value = {"mixed"}>Mixed</option>
            </Input>
        }, {
            activityHandPreference: "Eating",
            handPreference: <Input type="select"
                                   name="handPreference2"
                                   id="handPreference2"
                                   onChange={this.handleChange.bind(this, "handPreference2")}
                                   value={this.state.fields["handPreference2"] || ""}
            >
                <option value = {"blank"}></option>
                <option value = {"unknown"}>Unknown</option>
                <option value = {"right"}>Right</option>
                <option value ={"left"}>Left</option>
                <option value = {"mixed"}>Mixed</option>
            </Input>
        }, {
            activityHandPreference: "Throwing",
            handPreference: <Input type="select"
                                   name="handPreference3"
                                   id="handPreference3"
                                   onChange={this.handleChange.bind(this, "handPreference3")}
                                   value={this.state.fields["handPreference3"] || ""}
            >
                <option value = {"blank"}></option>
                <option value = {"unknown"}>Unknown</option>
                <option value = {"right"}>Right</option>
                <option value ={"left"}>Left</option>
                <option value = {"mixed"}>Mixed</option>
            </Input>
        }, {
            activityHandPreference: "Brushing Teeth",
            handPreference: <Input type="select"
                                   name="handPreference4"
                                   id="handPreference4"
                                   onChange={this.handleChange.bind(this, "handPreference4")}
                                   value={this.state.fields["handPreference4"] || ""}
            >
                <option value = {"blank"}></option>
                <option value = {"unknown"}>Unknown</option>
                <option value = {"right"}>Right</option>
                <option value ={"left"}>Left</option>
                <option value = {"mixed"}>Mixed</option>
            </Input>
        }, {
            activityHandPreference: "Combing Hair",
            handPreference: <Input type="select"
                                   name="handPreference5"
                                   id="handPreference5"
                                   onChange={this.handleChange.bind(this, "handPreference5")}
                                   value={this.state.fields["handPreference5"] || ""}
            >
                <option value = {"blank"}></option>
                <option value = {"unknown"}>Unknown</option>
                <option value = {"right"}>Right</option>
                <option value ={"left"}>Left</option>
                <option value = {"mixed"}>Mixed</option>
            </Input>
        }]
        const skillsData = [{
            skill: "Poor Pencil Grip",
            checkApplied: <Input type="select"
                                 name="skill1"
                                 id="skill1"
                                 onChange={this.handleChange.bind(this, "skill1")}
                                 value={this.state.fields["skill1"] || ""}
            >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Sloppy Writing",
            checkApplied: <Input type="select"
                                 name="skill2"
                                 id="skill2"
                                 onChange={this.handleChange.bind(this, "skill2")}
                                 value={this.state.fields["skill2"] || ""}>
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Letter Reversals",
            checkApplied: <Input type="select"
                                 name="skill3"
                                 id="skill3"
                                 onChange={this.handleChange.bind(this, "skill3")}
                                 value={this.state.fields["skill3"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Right/Left Confusion",
            checkApplied: <Input type="select"
                                 name="skill4"
                                 id="skill4"
                                 onChange={this.handleChange.bind(this, "skill4")}
                                 value={this.state.fields["skill4"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Poor reading ability",
            checkApplied: <Input type="select"
                                 name="skill5"
                                 id="skill5"
                                 onChange={this.handleChange.bind(this, "skill5")}
                                 value={this.state.fields["skill5"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Math Computation Challenges",
            checkApplied: <Input type="select"
                                 name="skill6"
                                 id="skill6"
                                 onChange={this.handleChange.bind(this, "skill6")}
                                 value={this.state.fields["skill6"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Math Concept Challenges",
            checkApplied: <Input type="select"
                                 name="skill7"
                                 id="skill7"
                                 onChange={this.handleChange.bind(this, "skill7")}
                                 value={this.state.fields["skill7"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Math Word Problem Challenges",
            checkApplied: <Input type="select"
                                 name="skill8"
                                 id="skill8"
                                 onChange={this.handleChange.bind(this, "skill8")}
                                 value={this.state.fields["skill8"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Math Logic Challenges",
            checkApplied: <Input type="select"
                                 name="skill9"
                                 id="skill9"
                                 onChange={this.handleChange.bind(this, "skill9")}
                                 value={this.state.fields["skill9"] || ""}>
                >
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>
            </Input>
        }, {
            skill: "Other related Challenges",
            checkApplied: <Input type="text"
                                 name="skill10"
                                 id="skill10"
                                 placeholder="Please Explain"
                                 onChange={this.handleChange.bind(this, "skill10")}
                                 value={this.state.fields["skill10"] || ""}>
            </Input>
        }]
        return (
            <fieldset id="/chai/section7">
                <div className={"section"}>Section 7: Educational History</div>
                <p className="control-label required">List current and past educational and/or treatment placement(s).</p>
                <ReactTable
                    className={"otherSchoolTable -striped -highlight"}
                    data={otherProgramsData}
                    columns={this.state.otherProgramsColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">List any education challenges (past or current)</Label>
                    <Input
                        type="textarea"
                        ref="educationalChallenges"
                        value={this.state.fields["educationalChallenges"] || ""}
                        onChange={this.handleChange.bind(this, "educationalChallenges")}
                        className="error"
                        invalid={this.state.errors["educationalChallenges"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["educationalChallenges"]}>{this.state.errors["educationalChallenges"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">List any exceptional abilities – academic, physical, artistic, musical, etc.</Label>
                    <Input
                        type="textarea"
                        ref="exceptionalTalents"
                        value={this.state.fields["exceptionalTalents"] || ""}
                        onChange={this.handleChange.bind(this, "exceptionalTalents")}
                        className="error"
                        invalid={this.state.errors["exceptionalTalents"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["exceptionalTalents"]}>{this.state.errors["exceptionalTalents"]}
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label className="control-label required">Does your child have a current Individualized Education Plan (IEP)?
                        <b> If “yes” please email the current IEP to Jacob's Ladder.</b></Label>
                    <Col sm ={2}>
                        <Input type="select"
                               name="iepPlan"
                               id="iepPlan"
                               value = {this.state.fields["iepPlan"]}
                               onChange={this.handleChange.bind(this, "iepPlan")}>
                            <option value = "blank"></option>
                            <option value = "yes">Yes</option>
                            <option value = "no">No</option>
                        </Input>
                    </Col>

                </FormGroup>
                <p className="control-label required">Indicate your child’s hand preference for each activity: Right/Left/Mixed/Not Applicable.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={handPreferenceData}
                    columns={this.state.handPreferenceColumns}
                    defaultPageSize={5}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <p className="control-label required">Check all of the following that apply.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={skillsData}
                    columns={this.state.skillsColumns}
                    defaultPageSize={10}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">What is your specific academic goal for your child?</Label>
                    <Input
                        type="textarea"
                        ref="academicGoal"
                        value={this.state.fields["academicGoal"] || ""}
                        onChange={this.handleChange.bind(this, "academicGoal")}
                        className="error"
                        invalid={this.state.errors["academicGoal"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["academicGoal"]}>{this.state.errors["academicGoal"]}
                    </FormFeedback>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 7: Educational History?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section7Comments"
                                value={this.state.fields["section7Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section7Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>

            </fieldset>

        );
    }

    renderSection8() {
        const communicationProblemsData= [{
            communicationIssue: "Articulation Problems",
            communicationResponse: <Input type="select"
                                          name="communicationIssue1"
                                          id="communicationIssue1"
                                          value={this.state.fields["communicationIssue1"] || ""}
                                          onChange={this.handleChange.bind(this, "communicationIssue1")}>
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>

            </Input>
        },{communicationIssue: "Stammer or Stutter",
            communicationResponse: <Input type="select"
                                          name="communicationIssue2"
                                          id="communicationIssue2"
                                          value={this.state.fields["communicationIssue2"] || ""}
                                          onChange={this.handleChange.bind(this, "communicationIssue2")}>
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>

            </Input>
        }, {
            communicationIssue: "Aphasia",
            communicationResponse: <Input type="select"
                                          name="communicationIssue3"
                                          id="communicationIssue3"
                                          value={this.state.fields["communicationIssue3"] || ""}
                                          onChange={this.handleChange.bind(this, "communicationIssue3")}>
                <option value = {"blank"}></option>
                <option value={"yes"}>Yes</option>
                <option value ={"no"}>No</option>
                <option value ={"not-sure"}>Not Sure</option>

            </Input>
        }]
        return (
            <fieldset id="/chai/section8">
                <div className={"section"}>Section 8: Communication</div>
                    <p className="control-label required" >Please indicate the client’s primary mode of communication and current independence level:</p>
                <Row>
                    <Col sm={"2"}>
                        <FormGroup check>
                            <Input onChange={this.handleChangeCheckbox.bind(this, "verbalSkills")}
                                   ref="verbalSkills"
                                   type="checkbox"
                                   checked={this.state.fields["verbalSkills"] === "true"} />
                            <FormFeedback
                                invalid={this.state.errors["verbalSkills"]}>{this.state.errors["verbalSkills"]}
                            </FormFeedback>
                            <Label>
                                Verbal
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={"6"}>
                        <Input
                            ref = "verbalLevel"
                            type="select"
                            placeholder="why"
                            value = {this.state.fields["verbalLevel"]}
                            onChange={this.handleChangeCheckbox.bind(this, "verbalLevel")}>
                            <option value={"select"}>Select Current Independent Level</option>
                            <option value={"fully"}>fully conversational with original thought language</option>
                            <option value={"some"}>sentences with some rote language</option>
                            <option value={"word"}>1-2 word verbalizations</option>

                        </Input>
                    </Col>
                </Row>

                <FormGroup check>
                    <Label check>
                        <Input onChange={this.handleChangeCheckbox.bind(this, "pointing")}
                               ref="pointing"
                               type="checkbox"
                               checked={this.state.fields["pointing"] === "true"} />
                        Pointing/Grabbing
                    </Label>
                </FormGroup>
                <Row>
                    <Col sm={2}>
                        <FormGroup check>
                            <Label check>
                                <Input onChange={this.handleChangeCheckbox.bind(this, "signLanguage")}
                                       ref="signLanguage"
                                       type="checkbox"
                                       checked={this.state.fields["signLanguage"] === "true"}/>
                                Sign Language
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Label> Types of signs used (i.e.ALS or modified):</Label>
                            <Input
                                type="text"
                            ref = "typeOfSignLanguage"/>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Label> Number of signs known:</Label>
                            <Input
                                ref = "numberOfSigns"
                                type="text"/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <FormGroup check>
                            <Label check>

                                <Input onChange={this.handleChangeCheckbox.bind(this, "communicationDevice")}
                                       ref="communicationDevice"
                                       type="checkbox"
                                       checked={this.state.fields["communicationDevice"] === "true"} />
                                Communication Device
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Label>Name of Device and Software Used</Label>
                            <Input
                                type="text"
                                ref="nameOfDevice"
                                value={this.state.fields["nameOfDevice"] || ""}
                                onChange={this.handleChange.bind(this, "nameOfDevice")}
                                className="error"
                                invalid={this.state.errors["nameOfDevice"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["nameOfDevice"]}>{this.state.errors["nameOfDevice"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>
                        <FormGroup>
                            <Label>Select Current Independent Level</Label>
                            <Input
                                ref = "deviceIndependenceLevel"
                                type="select"
                                value = {this.state.fields["deviceIndependenceLevel"]}
                                onChange={this.handleChangeCheckbox.bind(this, "deviceIndependenceLevel")}>
                                <option value={"blank"}></option>
                                <option value={"fully"}>Fully Independent</option>
                                <option value={"emerging"}>Emerging Independence</option>
                                <option value={"heavy"}>Heavy Prompting Required</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <FormGroup check>
                            <Label check>

                                <Input onChange={this.handleChangeCheckbox.bind(this, "communicationBinder")}
                                       ref="communicationBinder"
                                       type="checkbox"
                                       checked={this.state.fields["communicationBinder"] === "true"} />
                                Communication Binder
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col sm={5}>

                        <FormGroup>
                            <Input
                                ref = "binderIndependenceLevel"
                                type="select"
                                value = {this.state.fields["binderIndependenceLevel"]}
                                onChange={this.handleChangeCheckbox.bind(this, "binderIndependenceLevel")}>
                                <option value={"blank"}></option>
                                <option value={"fully"}>Fully Independent</option>
                                <option value={"emerging"}>Emerging Independence</option>
                                <option value={"heavy"}>Heavy Prompting Required</option>

                            </Input>
                        </FormGroup>
                    </Col>

                </Row>
                <Row>
                        <Col sm={2}>
                            <FormGroup check>
                                <Label check>

                                    <Input onChange={this.handleChangeCheckbox.bind(this, "otherCommunicationMethod")}
                                           ref="otherCommunicationMethod"
                                           type="checkbox"
                                           checked={this.state.fields["otherCommunicationMethod"] === "true"} />
                                    Other
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col sm={5}>

                            <FormGroup>
                                <Label> Please Explain</Label>
                                <Input
                                    ref= "explainOtherCommunication"
                                    type="textarea"/>
                            </FormGroup>
                        </Col>


                </Row>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={communicationProblemsData}
                    columns={this.state.communicationProblemsColumns}
                    defaultPageSize={3}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label required">Primary language spoken at home</Label>
                    <Input
                        type="text"
                        ref="languageAtHome"
                        value={this.state.fields["languageAtHome"] || ""}
                        onChange={this.handleChange.bind(this, "languageAtHome")}
                        className="error"
                        invalid={this.state.errors["languageAtHome"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["languageAtHome"]}>{this.state.errors["languageAtHome"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label">Other Languages Known</Label>
                    <Input
                        type="text"
                        ref="otherLanguages"
                        value={this.state.fields["otherLanguages"] || ""}
                        onChange={this.handleChange.bind(this, "otherLanguages")}
                        className="error"
                        invalid={this.state.errors["otherLanguages"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["otherLanguages"]}>{this.state.errors["otherLanguages"]}
                    </FormFeedback>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 8: Communication?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section8Comments"
                                value={this.state.fields["section8Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section8Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection9() {
        return (
            <fieldset id="/chai/section9">
                <div className={"section"}>Section 9: Emotional/Behavioral History</div>
                <p className="word-section">In order for Jacob’s Ladder to best serve your family and design the optimal program for the client, please share as much specific and detailed information as possible regarding the client’s past and/or current behavioral needs.
                    This information will not prohibit admissions but will allow Jacob’s Ladder to best prepare for the client’s evaluation and program design</p>
                <u>Current Behavior and Behavior Management</u>
                <div>
                    <p className={"control-label required"} >Do you have a specific behavioral goal for the client? If "Yes",please describe: </p>
                    <FormGroup check>
                        <Label check onChange={this.toggleBehavioralGoals.bind(this)}>

                            <Input ref ="behavioralGoalYes" type="checkbox"/>
                            Yes
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.behavioralGoals}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Input
                                    ref ="behavioralGoalYesExplain"
                                    type="textarea"/>

                            </CardBody>
                        </Card>
                    </Collapse>
                    <FormGroup check>
                        <Label check>

                            <Input ref ="behavioralGoalNo"type="checkbox"/>
                            No
                        </Label>
                    </FormGroup>
                </div>
                <p>Please indicate if your child is experiencing any of the following emotional or behavioral difficulties on a 0-10 scale, with 0=Does Not Apply and 10=Extreme/Severe.
                    For any behaviors that were rated at a 1 or above, answer the following questions for each behavior experienced, using the most extreme behavior as the example.
                </p>
                <p><b>School/Social</b></p>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"schoolConcentration")}>
                            School Concentration Difficulties
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="schoolConcentration"
                               id="schoolConcentration"
                               value={this.state.fields["schoolConcentration"] || ""}
                               onChange={this.handleChange.bind(this, "schoolConcentration")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("schoolConcentration")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                    <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                    <Input
                                        ref="schoolConcentrationCurrent"
                                        type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref = "schoolConcentrationTypical"
                                type="textarea"
                                className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                            <Input
                                ref  = "schoolConcentrationLast"
                                type="textarea"
                                className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="schoolConcentrationLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref = "schoolConcentrationPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref = "schoolConcentrationHandleBehaviors"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required">
                            Social Anxiety</Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="socialAnxiety"
                               id = "socialAnxiety"
                               value={this.state.fields["socialAnxiety"] || ""}
                               onChange={this.handleChange.bind(this, "socialAnxiety")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>

                    </FormGroup>
                    <Collapse isOpen={this.checkValue("socialAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="socialAnxietyCurrent"
                                    type="textarea"/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="socialAnxietyTypical"
                                    type="textarea"/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="socialAnxietyLast"
                                    type="textarea"
                                />
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="socialAnxietyLocation"
                                    type="textarea"
                                />
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="socialAnxietyPrecursors"
                                    type="textarea"
                                />
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="socialAnxietyHandleBehavior"
                                    type="textarea"
                                />

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"lowGrades")}>
                            Grades dropping or consistently low
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="lowGrades"
                               id = "lowGrades"
                               value={this.state.fields["lowGrades"] || ""}
                               onChange={this.handleChange.bind(this, "lowGrades")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("lowGrades")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="lowGradesCurrent"
                                    type="textarea"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="lowGradesTypical"
                                    type="textarea"
                                />
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="lowGradesLast"
                                    type="textarea"
                                />
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="lowGradesLocation"
                                    type="textarea"
                                />
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="lowGradesPrecursors"
                                    type="textarea"
                                />
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="lowGradesHandleBehavior"
                                    type="textarea"
                                />

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"makingFriends")}>
                            Problems Making or Keeping Friends
                        </Label>
                        <Input type="select"
                                   className={"col-4"}
                                   ref="makingFriends"
                                   id = "makingFriends"
                                   value={this.state.fields["makingFriends"] || ""}
                                   onChange={this.handleChange.bind(this, "makingFriends")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                            </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("makingFriends")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="makingFriendsCurrent"
                                    type="textarea"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="makingFriendsTypical"
                                    type="textarea"/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="makingFriendsLast"
                                    type="textarea"
                                />
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="makingFriendsLocation"
                                    type="textarea"
                                />
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="makingFriendsPrecursors"
                                    type="textarea"
                                />
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="makingFriendsHandleBehavior"
                                    type="textarea"
                                />

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"oppositionalBehavior")}>
                            Oppositional, defiant behavior
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="oppositionalBehavior"
                               id = "oppositionalBehavior"
                               value={this.state.fields["oppositionalBehavior"] || ""}
                               onChange={this.handleChange.bind(this, "oppositionalBehavior")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("oppositionalBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="oppositionalBehaviorCurrent"
                                    type="textarea"

                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    ref="oppositionalBehaviorTypical"
                                />
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    type="textarea"
                                    ref="oppositionalBehaviorLast"

                                />
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="oppositionalBehaviorLocation"
                                />
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="oppositionalBehaviorPrecursors"

                                />
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="oppositionalBehaviorHandleBehavior"
                                />

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"problemsWithAuthority")}>
                            Problems With Authority
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="problemsWithAuthority"
                               id = "problemsWithAuthority"
                               value={this.state.fields["problemsWithAuthority"] || ""}
                               onChange={this.handleChange.bind(this, "problemsWithAuthority")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("problemsWithAuthority")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    ref="problemsWithAuthorityCurrent"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="problemsWithAuthorityTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="problemsWithAuthorityLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="problemsWithAuthorityLocation"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="problemsWithAuthorityPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="problemsWithAuthorityHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"sociallyIsolated")}>
                            Isolated socially from peers
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="sociallyIsolated"
                               id = "sociallyIsolated"
                               value={this.state.fields["sociallyIsolated"] || ""}
                               onChange={this.handleChange.bind(this, "sociallyIsolated")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sociallyIsolated")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="sociallyIsolatedCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="sociallyIsolatedTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="sociallyIsolatedLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="sociallyIsolatedLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="sociallyIsolatedPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="sociallyIsolatedHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"aggressiveBehavior")}>
                            Aggressive Behavior towards others
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="aggressiveBehavior"
                               id = "aggressiveBehavior"
                               value={this.state.fields["aggressiveBehavior"] || ""}
                               onChange={this.handleChange.bind(this, "aggressiveBehavior")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("aggressiveBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    ref="aggressiveBehaviorCurrent"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="aggressiveBehaviorTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    type="textarea"
                                    ref="aggressiveBehaviorLast"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="aggressiveBehaviorLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="aggressiveBehaviorPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="aggressiveBehaviorHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"stressFamily")}>
                            Stress from conflicts within family
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="stressFamily"
                               id = "stressFamily"
                               value={this.state.fields["stressFamily"] || ""}
                               onChange={this.handleChange.bind(this, "stressFamily")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("stressFamily")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="stressFamilyCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="stressFamilyTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="stressFamilyLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="stressFamilyLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="stressFamilyPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="stressFamilyHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"generalizedAnxiety")}>
                            Generalized Anxiety (across many situations)
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="generalizedAnxiety"
                               id = "generalizedAnxiety"
                               value={this.state.fields["generalizedAnxiety"] || ""}
                               onChange={this.handleChange.bind(this, "generalizedAnxiety")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("generalizedAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="generalizedAnxietyCurrent"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    ref="generalizedAnxietyTypical"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="generalizedAnxietyLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="generalizedAnxietyLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="generalizedAnxietyPrecursors"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    ref="generalizedAnxietyHandleBehavior"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                        <FormGroup>
                            <Label  className="control-label required" onChange={this.handleChange.bind(this,"generalizedAnxiety")}>
                                Specific fears/ phobias (list):
                            </Label>
                            <Row>
                            <Col sm={4}>
                                <Input type="select"
                                       ref="phobias"
                                       id = "phobias"
                                       value={this.state.fields["phobias"] || ""}
                                       onChange={this.handleChange.bind(this, "phobias")}>
                                    <option value = "blank"></option>
                                    <option value = "0">0</option>
                                    <option value = "1">1</option>
                                    <option value = "2">2</option>
                                    <option value = "3">3</option>
                                    <option value = "4">4</option>
                                    <option value = "5">5</option>
                                    <option value = "6">6</option>
                                    <option value = "7">7</option>
                                    <option value = "8">8</option>
                                    <option value = "9">9</option>
                                    <option value = "10">10</option>
                                </Input>
                            </Col>
                            <Col sm={8}>

                                <Input
                                    ref = "phobiasExplain"
                                    type="textarea"
                                placeholde="Please List"/>
                            </Col>
                            </Row>
                        </FormGroup>

                        <Collapse isOpen={this.checkValue("generalizedAnxiety")}>
                            <Card className={"toggle-card"}>
                                <CardBody className={"toggle-card-body"}>
                                    <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                    <Input
                                        ref="phobiasCurrent"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                    <Input
                                        type="textarea"
                                        ref="phobiasTypical"
                                        className={"required"}/>
                                    <Label className="control-label required"> How long do they generally last?</Label>
                                    <Input
                                        type="textarea"
                                        ref="phobiasLast"
                                        className={"required"}/>
                                    <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                    <Input
                                        ref="phobiasLocation"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                    <Input
                                        ref="phobiasPrecursors"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                    <Input
                                        ref="phobiasHandleBehavior"
                                        type="textarea"
                                        className={"required"}/>

                                </CardBody>
                            </Card>
                        </Collapse>

                <p><b>Sensory/Physiological</b></p>
                <div>

                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"hyperactive")}>
                            Hyperactive, difficulty being still
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                                   ref="hyperactive"
                                   id = "hyperactive"
                                   value={this.state.fields["hyperactive"] || ""}
                                   onChange={this.handleChange.bind(this, "hyperactive")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                            </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("hyperactive")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="hyperactiveCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="hyperactiveTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="hyperactiveLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="hyperactiveLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="hyperactivePrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="hyperactiveHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"sensoryProblems")}>
                            Sensory problems
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="sensoryProblems"
                               id ="sensoryProblems"
                               value={this.state.fields["sensoryProblems"] || ""}
                               onChange={this.handleChange.bind(this, "sensoryProblems")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sensoryProblems")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="sensoryProblemsCurrent"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="sensoryProblemsTypical"
                                />
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="sensoryProblemsLast"
                                />
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="sensoryProblemsLocation"
                                />
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="sensoryProblemsPrecursors"
                                />
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="sensoryProblemsHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required"  onChange={this.handleChange.bind(this,"problemsEating")}>
                            Problems with eating
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="problemsEating"
                               id = "problemsEating"
                               value={this.state.fields["problemsEating"] || ""}
                               onChange={this.handleChange.bind(this, "problemsEating")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("problemsEating")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="problemsEatingCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="problemsEatingTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="problemsEatingLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="problemsEatingLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="problemsEatingPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="problemsEatingHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"wettingAccidents")}>
                            Wetting/Soiling accidents
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="wettingAccidents"
                               id = "wettingAccidents"
                               value={this.state.fields["wettingAccidents"] || ""}
                               onChange={this.handleChange.bind(this, "wettingAccidents")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("wettingAccidents")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="wettingAccidentsCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    ref="wettingAccidentsTypical"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="wettingAccidentsLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="wettingAccidentsLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="wettingAccidentsPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="wettingAccidentsHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"vocalTics")}>
                            Vocal or motor tics
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="vocalTics"
                               id = "vocalTics"
                               value={this.state.fields["vocalTics"] || ""}
                               onChange={this.handleChange.bind(this, "vocalTics")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("vocalTics")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="vocalTicsCurrent"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="vocalTicsTypical"
                                />
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="vocalTicsLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="vocalTicsLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="vocalTicsPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="vocalTicsHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"wakingUp")}>
                            Trouble waking up
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="wakingUp"
                               id = "wakingUp"
                               value={this.state.fields["wakingUp"] || ""}
                               onChange={this.handleChange.bind(this, "wakingUp")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("wakingUp")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="wakingUpCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="wakingUpTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="wakingUpLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="wakingUpLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="wakingUpPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="wakingUpHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"nightmares")}>
                            Nightmares
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="nightmares"
                               id = "nightmares"
                               value={this.state.fields["nightmares"] || ""}
                               onChange={this.handleChange.bind(this, "nightmares")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("nightmares")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="nightmaresCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="nightmaresTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="nightmaresLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="nightmaresLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="nightmaresPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="nightmaresHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required"  onChange={this.handleChange.bind(this,"problemsSleeping")}>
                            Problems Sleeping
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="problemsSleeping"
                               id = "problemsSleeping"
                               value={this.state.fields["problemsSleeping"] || ""}
                               onChange={this.handleChange.bind(this, "problemsSleeping")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("problemsSleeping")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="problemsSleepingCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="problemsSleepingTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="problemsSleepingLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="problemsSleepingLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="problemsSleepingPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="problemsSleepingHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"tiredness")}>
                            Fatigue/Tiredness
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="tiredness"
                               id = "tiredness"
                               value={this.state.fields["tiredness"] || ""}
                               onChange={this.handleChange.bind(this, "tiredness")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("tiredness")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="tirednessCurrent"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    type="textarea"
                                    ref="tirednessTypical"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    type="textarea"
                                    ref="tirednessLast"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="tirednessLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="tirednessPrecurosors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="tirednessHandleBehavior"
                                />

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <p><b>Emotional</b></p>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"sadness")}>
                            Sadness or Depression
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="sadness"
                               id ="sadness"
                               value={this.state.fields["sadness"] || ""}
                               onChange={this.handleChange.bind(this, "sadness")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sadness")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="sadnessCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="sadnessTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="sadnessLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="sadnessLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="sadnessPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="sadnessHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"impulsive")}>
                            Impulsive,doesn't think before acting
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="impulsive"
                               id = "impulsive"
                               value={this.state.fields["impulsive"] || ""}
                               onChange={this.handleChange.bind(this, "impulsive")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                            </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("impulsive")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="impulsiveCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="impulsiveTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="impulsiveLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="impulsiveLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="impulsivePrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="impulsiveHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required"  onChange={this.handleChange.bind(this,"noncompliant")}>
                            Non-compliant
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="noncompliant"
                               id = "noncompliant"
                               value={this.state.fields["noncompliant"] || ""}
                               onChange={this.handleChange.bind(this, "noncompliant")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("noncompliant")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    type="textarea"
                                    className={"required"}
                                    ref="noncompliantCurrent"
                                />
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="noncompliantTypcial"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="noncompliantLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="noncompliantLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="noncompliantPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="noncompliantHandleBeahvior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  className="control-label required" onChange={this.handleChange.bind(this,"tantrums")}>
                            Tantrums/"meltdowns"
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="tantrums"
                               id = "tantrums"
                               value={this.state.fields["tantrums"] || ""}
                               onChange={this.handleChange.bind(this, "tantrums")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("tantrums")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="tantrumsCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="tantrumsTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="tantrumsLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="tantrumsLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="tantrumsPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="tantrumsHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"injuryBehavior")}>
                            Self-injurious behavior
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="injuryBehavior"
                               id = "injuryBehavior"
                               value={this.state.fields["injuryBehavior"] || ""}
                               onChange={this.handleChange.bind(this, "injuryBehavior")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("injuryBehavior")}>
                            <Card className={"toggle-card"}>
                                <CardBody className={"toggle-card-body"}>
                                    <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                    <Input
                                        type="textarea"
                                        className={"required"}
                                        ref="injuryBehaviorCurrent"
                                    />
                                    <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                    <Input
                                        ref="injuryBehaviorTypical"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> How long do they generally last?</Label>
                                    <Input
                                        ref="injuryBehaviorLast"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                    <Input
                                        ref="injuryBehaviorLocation"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                    <Input
                                        ref="injuryBehaviorPrecursors"
                                        type="textarea"
                                        className={"required"}/>
                                    <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                    <Input
                                        ref="injuryBehaviorHandleBehavior"
                                        type="textarea"
                                        className={"required"}/>

                                </CardBody>
                            </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"temperProblem")}>
                            Problems controlling temper
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="temperProblem"
                               id = "temperProblem"
                               value={this.state.fields["temperProblem"] || ""}
                               onChange={this.handleChange.bind(this, "temperProblem")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("temperProblem")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="temperProblemCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="temperProblemTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="temperProblemLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="temperProblemLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="temperProblemPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="temperProblemHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"darting")}>
                            Darting/Elopement
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="darting"
                               id = "darting"
                               value={this.state.fields["darting"] || ""}
                               onChange={this.handleChange.bind(this, "darting")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("darting")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="dartingCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="dartingTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="dartingLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="dartingLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="dartingPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="dartingHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"rigid")}>
                            Rigid Behavior Patterns
                        </Label>
                        <Input type="select"
                               className={"col-4"}
                               ref="rigid"
                               id = "rigid"
                               value={this.state.fields["rigid"] || ""}
                               onChange={this.handleChange.bind(this, "rigid")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("rigid")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="rigidCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="rigidTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="rigidLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="rigidLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="rigidPrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="rigidHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label className="control-label required" onChange={this.handleChange.bind(this,"abuse")}>
                            History of abuse (emotional,physical,sexual)
                        </Label>

                        <Input type="select"
                               className={"col-4"}
                               ref="abuse"
                               id = "abuse"
                               value={this.state.fields["abuse"] || ""}
                               onChange={this.handleChange.bind(this, "abuse")}>
                            <option value = "blank"></option>
                            <option value = "0">0</option>
                            <option value = "1">1</option>
                            <option value = "2">2</option>
                            <option value = "3">3</option>
                            <option value = "4">4</option>
                            <option value = "5">5</option>
                            <option value = "6">6</option>
                            <option value = "7">7</option>
                            <option value = "8">8</option>
                            <option value = "9">9</option>
                            <option value = "10">10</option>
                        </Input>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("abuse")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label className="control-label required"> What behaviors, either past or current, have you seen at home?  </Label>
                                <Input
                                    ref="abuseCurrent"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> What do these behaviors typically look like?  </Label>

                                <Input
                                    ref="abuseTypical"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How long do they generally last?</Label>
                                <Input
                                    ref="abuseLast"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> Where do these behaviors normally occur? Is there a common setting in which your child displays these specific behaviors?</Label>
                                <Input
                                    ref="abuseCurrentLocation"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> If possible, can you identify the <b>precursors that happen immediately before</b> your child engages in these behaviors? Are there any other additional <b>triggers </b>that elicit these behaviors?</Label>
                                <Input
                                    ref="abusePrecursors"
                                    type="textarea"
                                    className={"required"}/>
                                <Label className="control-label required"> How do you typically handle these behaviors?</Label>
                                <Input
                                    ref="abuseHandleBehavior"
                                    type="textarea"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <p > During a behavioral moment, does the client appear to become more heightened or dysregulated when:</p>
                    <p className={"control-label required"}id={"physicalAssistanceQuestion"} >Provided physical assistance? If yes, please describe:</p>
                    <Row>
                        <Col sm={1}>
                            <FormGroup check>
                                <Label check onChange={this.togglePhysicalAssistance.bind(this,"physicalAssistanceYes")}>

                                    <Input ref = "physicalAssistanceYes" type="checkbox"/>
                                    Yes
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col sm={11}>
                            <Collapse isOpen={this.state.physicalAssistance}>
                                <Card className={"toggle-card"}>
                                    <CardBody className={"toggle-card-body"}>
                                        <Input
                                            ref = "physicalAssistanceYesExplain"
                                            type="textarea"/>

                                    </CardBody>
                                </Card>
                            </Collapse>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label check onChange={this.handleChange.bind(this,"physicalAssistanceYes")}>

                            <Input ref = "physicalAssistanceNo" type="checkbox"/>
                            No
                        </Label>
                    </FormGroup>

                </div>
                <div>
                    <p className={"control-label required"} id ={"verbalDirectivesQuestion"}>When provided verbal directives? If yes, please describe: </p>
                    <Row>
                        <Col sm={1}>
                            <FormGroup check>
                                <Label check id ={"verbalDirectivesYes"} onChange={this.toggleVerbalDirectives.bind(this,"verbalDirectivesYes")}>

                                    <Input ref = "verbalDirectivesCheckYes" type="checkbox"/>
                                    Yes
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col sm={11}>
                            <Collapse isOpen={this.state.verbalDirectives}>
                                <Card className={"toggle-card"}>
                                    <CardBody className={"toggle-card-body"}>
                                        <Input
                                            ref = "verbalDirectivesYesExplain"
                                            type="textarea"/>

                                    </CardBody>
                                </Card>
                            </Collapse>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label check id ={"verbalDirectivesNo"} onChange={this.handleChange.bind(this,"verbalDirectivesNo")}>

                            <Input ref = "verbalDirectivesCheckNo"type="checkbox"/>
                            No
                        </Label>
                    </FormGroup>
                </div>
                <div>
                    <p className={"control-label required"} id ={"currentEventsQuestion"}  >Are there any events, which may be currently affecting the client adversely?  If “Yes”, please describe:   </p>
                    <Row>
                        <Col sm={1}>
                            <FormGroup check>
                                <Label check  id ={"currentEventsYes"} onChange={this.toggleCurrentEvents.bind(this,"currentEventsYes")}>

                                    <Input ref = "currentEventsCheckYes "type="checkbox"/>
                                    Yes
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col sm={11}>
                            <Collapse isOpen={this.state.currentEvents}>
                                <Card className={"toggle-card"}>
                                    <CardBody className={"toggle-card-body"}>
                                        <Input
                                            ref = "currentEventsExplain"
                                            type="textarea"/>

                                    </CardBody>
                                </Card>
                            </Collapse>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Label check  id ={"currentEventsQuestion"} onChange={this.handleChange.bind(this,"currentEventsNo")} >

                            <Input ref = "currentEventsCheckNo" type="checkbox"/>
                            No
                        </Label>
                    </FormGroup>
                </div>
                <FormGroup>
                    <Label className="control-label required">Please list the client’s specific positive behaviors: </Label>
                    <Input
                        type="textarea"
                        ref="positiveBehavior"
                        value={this.state.fields["positiveBehavior"] || ""}
                        onChange={this.handleChange.bind(this, "positiveBehavior")}
                        className="error"
                        invalid={this.state.errors["positiveBehavior"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["positiveBehavior"]}>{this.state.errors["positiveBehavior"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">Does the client require assistance to complete tasks?  What level of assistance is required?
                        Please identify verbal or physical prompts that are needed, and specific language and level of physicality is required for completion.   </Label>
                    <Input
                        type="textarea"
                        ref="assistanceRequired"
                        value={this.state.fields["assistanceRequired"] || ""}
                        onChange={this.handleChange.bind(this, "assistanceRequired")}
                        className="error"
                        invalid={this.state.errors["assistanceRequired"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["assistanceRequired"]}>{this.state.errors["assistanceRequired"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">Please list the client’s reinforcing items and specific activities that help soothe/calm the client.   </Label>
                    <Input
                        type="textarea"
                        ref="soothing"
                        value={this.state.fields["soothing"] || ""}
                        onChange={this.handleChange.bind(this, "soothing")}
                        className="error"
                        invalid={this.state.errors["soothing"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["soothing"]}>{this.state.errors["soothing"]}
                    </FormFeedback>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 9: Emotional/Behavioral History?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section9Comments"
                                value={this.state.fields["section9Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section9Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>

           </fieldset>
        );
    }

    renderSection10() {
        return (
            <fieldset id="/chai/section10">
                <div className={"section"}>Section 10: Current Schedule and Typical Day</div>
                <p>What does the client’s current full-time educational/therapeutic daily routine look like?  Please include environment, setting, expectations, schedule, provider, etc.</p>
                <FormGroup>
                    <Label className="control-label required"><u>Morning:</u></Label>
                    <Input
                        type="textarea"
                        ref="morning"
                        value={this.state.fields["morning"] || ""}
                        onChange={this.handleChange.bind(this, "morning")}
                        className="error"
                        invalid={this.state.errors["morning"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["morning"]}>{this.state.errors["morning"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required"><u>Afternoon:</u> </Label>
                    <Input
                        type="textarea"
                        ref="afternoon"
                        value={this.state.fields["afternoon"] || ""}
                        onChange={this.handleChange.bind(this, "afternoon")}
                        className="error"
                        invalid={this.state.errors["afternoon"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["afternoon"]}>{this.state.errors["afternoon"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required"><u>Evening:</u> </Label>
                    <Input
                        type="textarea"
                        ref="evening"
                        value={this.state.fields["evening"] || ""}
                        onChange={this.handleChange.bind(this, "evening")}
                        className="error"
                        invalid={this.state.errors["evening"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["evening"]}>{this.state.errors["evening"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">What does the client’s “at-home” and “downtime” look like on a typical day, as well as weekend, for both morning and evening routines? </Label>
                    <Input
                        type="textarea"
                        ref="downtime"
                        value={this.state.fields["downtime"] || ""}
                        onChange={this.handleChange.bind(this, "downtime")}
                        className="error"
                        invalid={this.state.errors["downtime"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["downtime"]}>{this.state.errors["downtime"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">What is your level of expectation at home? </Label>
                    <Input
                        type="textarea"
                        ref="homeExpectation"
                        value={this.state.fields["homeExpectation"] || ""}
                        onChange={this.handleChange.bind(this, "homeExpectation")}
                        className="error"
                        invalid={this.state.errors["homeExpectation"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["homeExpectation"]}>{this.state.errors["homeExpectation"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">How much screen time (iPad, cell phone, television, computer) is allotted at home?  What programs and devices does the client have access to?
                        Is screen time required, and or helpful for any task completion?   </Label>
                    <Input
                        type="textarea"
                        ref="screentime"
                        value={this.state.fields["screentime"] || ""}
                        onChange={this.handleChange.bind(this, "screentime")}
                        className="error"
                        invalid={this.state.errors["screentime"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["screentime"]}>{this.state.errors["screentime"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">What responsibilities/chores does the client complete at home?   </Label>
                    <Input
                        type="textarea"
                        ref="chores"
                        value={this.state.fields["chores"] || ""}
                        onChange={this.handleChange.bind(this, "chores")}
                        className="error"
                        invalid={this.state.errors["chores"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["chores"]}>{this.state.errors["chores"]}
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label className="control-label required">Please comment on the client’s physical activity level: </Label>
                    <Input
                        type="textarea"
                        ref="physicalActivity"
                        value={this.state.fields["physicalActivity"] || ""}
                        onChange={this.handleChange.bind(this, "physicalActivity")}
                        className="error"
                        invalid={this.state.errors["physicalActivity"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["physicalActivity"]}>{this.state.errors["physicalActivity"]}
                    </FormFeedback>
                </FormGroup>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 10: Current Schedule and Typical Day?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section10Comments"
                                value={this.state.fields["section10Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section10Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>

            </fieldset>
        );
    }

    renderSection11() {
            const level1GoalsData = [{
            goal1Category: <div className={"sub-section"}>Attending Skills</div>,
            goal1NA: '',
            goal1Physical: '',
            goal1Verbal: '',
            goal1Initiates: ''
        }, {
            goal1Category: 'Sits in chair independently',
            goal1NA: <Label check> <Input type="checkbox" name="g1SitNA" id="g1SitNA" checked={this.state.fields["g1SitNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SitPhysical" id="g1SitPhysical" checked={this.state.fields["g1SitPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SitVerbal" id="g1SitVerbal" checked={this.state.fields["g1SitVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitVerbal")}/> Verbal Prompt</Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SitInitiates" id="g1SitInitiates" checked={this.state.fields["g1SitInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Attends to a task >5 minutes',
            goal1NA: <Label check> <Input type="checkbox" name="g1AttendTaskLongNA" id="g1AttendTaskLongNA" checked={this.state.fields["g1AttendTaskLongNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskLongNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1AttendTaskLongPhysical" id="g1AttendTaskLongPhysical" checked={this.state.fields["g1AttendTaskLongPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskLongPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1AttendTaskLongVerbal" id="g1AttendTaskLongVerbal" checked={this.state.fields["g1AttendTaskLongVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskLongVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1AttendTaskLongInitiates" id="g1AttendTaskLongInitiates" checked={this.state.fields["g1AttendTaskLongInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskLongInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Attends to a task <5 minutes',
            goal1NA: <Label check> <Input type="checkbox" name="g1AttendTaskShortNA" id="g1AttendTaskShortNA" checked={this.state.fields["g1AttendTaskShortNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskShortNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1AttendTaskShortPhysical" id="g1AttendTaskShortPhysical" checked={this.state.fields["g1AttendTaskShortPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskShortPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1AttendTaskShortVerbal" id="g1AttendTaskShortVerbal" checked={this.state.fields["g1AttendTaskShortVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskShortVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1AttendTaskShortInitiates" id="g1AttendTaskShortInitiates" checked={this.state.fields["g1AttendTaskShortInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AttendTaskShortInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Makes eye contact',
            goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactNA" id="g1EyeContactNA" checked={this.state.fields["g1EyeContactNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactPhysical" id="g1EyeContactPhysical" checked={this.state.fields["g1EyeContactPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactVerbal" id="g1EyeContactVerbal" checked={this.state.fields["g1EyeContactVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactInitiates" id="g1EyeContactInitiates" checked={this.state.fields["g1EyeContactInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Sustains eye contact in response to name',
            goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactNameNA" id="g1EyeContactNameNA" checked={this.state.fields["g1EyeContactNameNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactNameNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactNamePhysical" id="g1EyeContactNamePhysical" checked={this.state.fields["g1EyeContactNamePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactNamePhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactNameVerbal" id="g1EyeContactNameVerbal" checked={this.state.fields["g1EyeContactNameVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactNameVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactNameInitiates" id="g1EyeContactNameInitiates" checked={this.state.fields["g1EyeContactNameInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactNameInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Makes eye contact during group instruction',
            goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactGroupNA" id="g1EyeContactGroupNA" checked={this.state.fields["g1EyeContactGroupNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactGroupNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactGroupPhysical" id="g1EyeContactGroupPhysical" checked={this.state.fields["g1EyeContactGroupPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactGroupPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactGroupVerbal" id="g1EyeContactGroupVerbal" checked={this.state.fields["g1EyeContactGroupVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactGroupVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactGroupInitiates" id="g1EyeContactGroupInitiates" checked={this.state.fields["g1EyeContactGroupInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1EyeContactGroupInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: <div className={"sub-section"}>Communication Skills</div>,
            goal1NA: '',
            goal1Physical: '',
            goal1Verbal: '',
            goal1Initiates: ''
        }, {
            goal1Category: 'Communicates wants and needs',
            goal1NA: <Label check> <Input type="checkbox" name="g1WantsNeedsNA" id="g1WantsNeedsNA" checked={this.state.fields["g1WantsNeedsNA"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WantsNeedsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1WantsNeedsPhysical" id="g1WantsNeedsPhysical" checked={this.state.fields["g1WantsNeedsPhysical"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WantsNeedsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1WantsNeedsVerbal" id="g1WantsNeedsVerbal" checked={this.state.fields["g1WantsNeedsVerbal"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WantsNeedsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1WantsNeedsInitiates" id="g1WantsNeedsInitiates" checked={this.state.fields["g1WantsNeedsInitiates"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WantsNeedsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Answers simple social questions',
            goal1NA: <Label check> <Input type="checkbox" name="g1SocialQsNA" id="g1socialQsNA" checked={this.state.fields["g1SocialQsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SocialQsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SocialQsPhysical" id="g1SocialQsPhysical" checked={this.state.fields["g1SocialQsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SocialQsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SocialQsVerbal" id="g1SocialQsVerbal" checked={this.state.fields["g1SocialQsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SocialQsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SocialQsInitiates" id="g1SocialQsInitiates" checked={this.state.fields["g1SocialQsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SocialQsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Answers simple interference-based questions',
            goal1NA: <Label check> <Input type="checkbox" name="g1InterferenceQsNA" id="g1InterferenceQsNA" checked={this.state.fields["g1InterferenceQsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterferenceQsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1InterferenceQsPhysical" id="g1InterferenceQsPhysical" checked={this.state.fields["g1InterferenceQsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterferenceQsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1InterferenceQsVerbal" id="g1InterferenceQsVerbal" checked={this.state.fields["g1InterferenceQsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterferenceQsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1InterferenceQsInitiates" id="g1InterferenceQsInitiates" checked={this.state.fields["g1InterferenceQsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterferenceQsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Reciprocates conversation',
            goal1NA: <Label check> <Input type="checkbox" name="g1ReciprocateConversationNA" id="g1ReciprocateConversationNA" checked={this.state.fields["g1ReciprocateConversationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ReciprocateConversationNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ReciprocateConversationPhysical" id="g1ReciprocateConversationPhysical" checked={this.state.fields["g1ReciprocateConversationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ReciprocateConversationPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ReciprocateConversationVerbal" id="g1ReciprocateConversationVerbal" checked={this.state.fields["g1ReciprocateConversationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ReciprocateConversationVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ReciprocateConversationInitiates" id="g1ReciprocateConversationInitiates" checked={this.state.fields["g1ReciprocateConversationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ReciprocateConversationInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Maintains conversation',
            goal1NA: <FormGroup> <Input type="checkbox" name="g1MaintainConversationNA" id="g1MaintainConversationNA" checked={this.state.fields["g1MaintainConversationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1MaintainConversationNA")}/><Label check>  N/A </Label></FormGroup>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1MaintainConversationPhysical" id="g1MaintainConversationPhysical" checked={this.state.fields["g1MaintainConversationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1MaintainConversationPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1MaintainConversationVerbal" id="g1MaintainConversationVerbal" checked={this.state.fields["g1MaintainConversationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1MaintainConversationVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1MaintainConversationInitiates" id="g1MaintainConversationInitiates" checked={this.state.fields["g1MaintainConversationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1MaintainConversationInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Has conversations using original thought',
            goal1NA: <Label check> <Input type="checkbox" name="g1OriginalConversationNA" id="g1OriginalConversationNA" checked={this.state.fields["g1OriginalConversationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OriginalConversationNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1OriginalConversationPhysical" id="g1OriginalConversationPhysical" checked={this.state.fields["g1OriginalConversationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OriginalConversationPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1OriginalConversationVerbal" id="g1OriginalConversationVerbal" checked={this.state.fields["g1OriginalConversationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OriginalConversationVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1OriginalConversationInitiates" id="g1OriginalConversationInitiates" checked={this.state.fields["g1OriginalConversationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OriginalConversationInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: <div className={"sub-section"}>Independent Skills</div>,
            goal1NA: '',
            goal1Physical: '',
            goal1Verbal: '',
            goal1Initiates: ''
        }, {
            goal1Category: 'Goes to designated person/place within the room',
            goal1NA: <Label check> <Input type="checkbox" name="g1WithinRoomNA" id="g1WithinRoomNA" checked={this.state.fields["g1WithinRoomNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WithinRoomNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1WithinRoomPhysical" id="g1WithinRoomPhysical" checked={this.state.fields["g1WithinRoomPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WithinRoomPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1WithinRoomVerbal" id="g1WithinRoomVerbal" checked={this.state.fields["g1WithinRoomVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WithinRoomVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1WithinRoomInitiates" id="g1WithinRoomInitiates" checked={this.state.fields["g1WithinRoomInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WithinRoomInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Goes to designated person/place in another room',
            goal1NA: <Label check> <Input type="checkbox" name="g1AnotherRoomNA" id="g1AnotherRoomNA" checked={this.state.fields["g1AnotherRoomNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AnotherRoomNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1AnotherRoomPhysical" id="g1AnotherRoomPhysical" checked={this.state.fields["g1AnotherRoomPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AnotherRoomPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1AnotherRoomVerbal" id="g1AnotherRoomVerbal" checked={this.state.fields["g1AnotherRoomVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AnotherRoomVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1AnotherRoomInitiates" id="g1AnotherRoomInitiates" checked={this.state.fields["g1AnotherRoomInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AnotherRoomInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Able to complete task independently >5 minutes',
            goal1NA: <Label check> <Input type="checkbox" name="g1IndTaskLongNA" id="g1IndTaskLongNA" checked={this.state.fields["g1IndTaskLongNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskLongNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1IndTaskLongPhysical" id="g1IndTaskLongPhysical" checked={this.state.fields["g1IndTaskLongPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskLongPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1IndTaskLongVerbal" id="g1IndTaskLongVerbal" checked={this.state.fields["g1IndTaskLongVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskLongVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1IndTaskLongInitiates" id="g1IndTaskLongInitiates" checked={this.state.fields["g1IndTaskLongInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskLongInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Able to complete task independently <5 minutes',
            goal1NA: <Label check> <Input type="checkbox" name="g1IndTaskShortNA" id="g1IndTaskShortNA" checked={this.state.fields["g1IndTaskShortNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskShortNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1IndTaskShortPhysical" id="g1IndTaskShortPhysical" checked={this.state.fields["g1IndTaskShortPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskShortPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1IndTaskShortVerbal" id="g1IndTaskShortVerbal" checked={this.state.fields["g1IndTaskShortVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskShortVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1IndTaskShortInitiates" id="g1IndTaskShortInitiates" checked={this.state.fields["g1IndTaskShortInitiates"] || ""} onChange={this.handleChangeCheckbox.bind(this, "g1IndTaskShortInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Able to organize materials within and for simple tasks and execute them independently',
            goal1NA: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsNA" id="g1OrganizeMaterialsNA" checked={this.state.fields["g1OrganizeMaterialsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeMaterialsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsPhysical" id="g1OrganizeMaterialsPhysical" checked={this.state.fields["g1OrganizeMaterialsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeMaterialsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsVerbal" id="g1OrganizeMaterialsVerbal" checked={this.state.fields["g1OrganizeMaterialsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeMaterialsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsInitiates" id="g1OrganizeMaterialsInitiates" checked={this.state.fields["g1OrganizeMaterialsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeMaterialsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Able to organize/prioritize simple progression of tasks (ex. Prioritizing homework with different due dates- doing what is due first, then second, etc.)',
            goal1NA: <Label check> <Input type="checkbox" name="g1OrganizeTasksNA" id="g1OrganizeTasksNA" checked={this.state.fields["g1OrganizeTasksNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeTasksNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1OrganizeTasksPhysical" id="g1OrganizeTasksPhysical" checked={this.state.fields["g1OrganizeTasksPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeTasksPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1OrganizeTasksVerbal" id="g1OrganizeTasksVerbal" checked={this.state.fields["g1OrganizeTasksVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeTasksVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1OrganizeTasksInitiates" id="g1OrganizeTasksInitiates" checked={this.state.fields["g1OrganizeTasksInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OrganizeTasksInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: <div className={"sub-section"}>Self-Care Skills</div>,
            goal1NA: '',
            goal1Physical: '',
            goal1Verbal: '',
            goal1Initiates: ''
        }, {
            goal1Category: 'Put shoes on and off',
            goal1NA: <Label check> <Input type="checkbox" name="g1ShoesOnOffNA" id="g1ShoesOnOffNA" checked={this.state.fields["g1ShoesOnOffNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShoesOnOffNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ShoesOnOffPhysical" id="g1ShoesOnOffPhysical" checked={this.state.fields["g1ShoesOnOffPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShoesOnOffPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ShoesOnOffVerbal" id="g1ShoesOnOffVerbal" checked={this.state.fields["g1ShoesOnOffVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShoesOnOffVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ShoesOnOffInitiates" id="g1ShoesOnOffInitiates" checked={this.state.fields["g1ShoesOnOffInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShoesOnOffInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Discriminates right and left',
            goal1NA: <Label check> <Input type="checkbox" name="g1RightLeftNA" id="g1RightLeftNA" checked={this.state.fields["g1RightLeftNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1RightLeftNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1RightLeftPhysical" id="g1RightLeftPhysical" checked={this.state.fields["g1RightLeftPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1RightLeftPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1RightLeftVerbal" id="g1RightLeftVerbal" checked={this.state.fields["g1RightLeftVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1RightLeftVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1RightLeftInitiates" id="g1RightLeftInitiates" checked={this.state.fields["g1RightLeftInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1RightLeftInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Unties and ties shoes',
            goal1NA: <Label check> <Input type="checkbox" name="g1TieShoesNA" id="g1TieShoesNA" checked={this.state.fields["g1TieShoesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TieShoesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1TieShoesPhysical" id="g1TieShoesPhysical" checked={this.state.fields["g1TieShoesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TieShoesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1TieShoesVerbal" id="g1TieShoesVerbal" checked={this.state.fields["g1TieShoesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TieShoesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1TieShoesInitiates" id="g1TieShoesInitiates" checked={this.state.fields["g1TieShoesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TieShoesInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Pulls up/down pants',
            goal1NA: <Label check> <Input type="checkbox" name="g1PantsNA" id="g1PantsNA" checked={this.state.fields["g1PantsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1PantsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1PantsPhysical" id="g1PantsPhysical" checked={this.state.fields["g1PantsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1PantsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1PantsVerbal" id="g1PantsVerbal" checked={this.state.fields["g1PantsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1PantsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1PantsInitiates" id="g1PantsInitiates" checked={this.state.fields["g1PantsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1PantsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Buttons and unbuttons',
            goal1NA: <Label check> <Input type="checkbox" name="g1ButtonsNA" id="g1ButtonsNA" checked={this.state.fields["g1ButtonsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ButtonsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ButtonsPhysical" id="g1ButtonsPhysical" checked={this.state.fields["g1ButtonsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ButtonsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ButtonsVerbal" id="g1ButtonsVerbal" checked={this.state.fields["g1ButtonsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ButtonsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ButtonsInitiates" id="g1ButtonsInitiates" checked={this.state.fields["g1ButtonsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ButtonsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Adjusts clothes',
            goal1NA: <Label check> <Input type="checkbox" name="g1AdjustClothesNA" id="g1AdjustClothesNA" checked={this.state.fields["g1AdjustClothesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AdjustClothesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1AdjustClothesPhysical" id="g1AdjustClothesPhysical" checked={this.state.fields["g1AdjustClothesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AdjustClothesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1AdjustClothesVerbal" id="g1AdjustClothesVerbal" checked={this.state.fields["g1AdjustClothesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AdjustClothesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1AdjustClothesInitiates" id="g1AdjustClothesInitiates" checked={this.state.fields["g1AdjustClothesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1AdjustClothesInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Dresses and undresses',
            goal1NA: <Label check> <Input type="checkbox" name="g1DressesNA" id="g1DressesNA" checked={this.state.fields["g1DressesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1DressesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1DressesPhysical" id="g1DressesPhysical" checked={this.state.fields["g1DressesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1DressesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1DressesVerbal" id="g1DressesVerbal" checked={this.state.fields["g1DressesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1DressesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1DressesInitiates" id="g1DressesInitiates" checked={this.state.fields["g1DressesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1DressesInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Sorts clothes for washing',
            goal1NA: <Label check> <Input type="checkbox" name="g1SortsClothesNA" id="g1SortsClothesNA" checked={this.state.fields["g1SortsClothesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SortsClothesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SortsClothesPhysical" id="g1SortsClothesPhysical" checked={this.state.fields["g1SortsClothesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SortsClothesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SortsClothesVerbal" id="g1SortsClothesVerbal" checked={this.state.fields["g1SortsClothesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SortsClothesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SortsClothesInitiates" id="g1SortsClothesInitiates" checked={this.state.fields["g1SortsClothesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SortsClothesInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Identifies clothes based on the weather',
            goal1NA: <Label check> <Input type="checkbox" name="g1ClothesWeatherNA" id="g1ClothesWeatherNA" checked={this.state.fields["g1ClothesWeatherNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ClothesWeatherNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ClothesWeatherPhysical" id="g1ClothesWeatherPhysical" checked={this.state.fields["g1ClothesWeatherPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ClothesWeatherPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ClothesWeatherVerbal" id="g1ClothesWeatherVerbal" checked={this.state.fields["g1ClothesWeatherVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ClothesWeatherVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ClothesWeatherInitiates" id="g1ClothesWeatherInitiates" checked={this.state.fields["g1ClothesWeatherInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ClothesWeatherInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Goes to the bathroom independently',
            goal1NA: <Label check> <Input type="checkbox" name="g1BathroomNA" id="g1BathroomNA" checked={this.state.fields["g1BathroomNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1BathroomNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1BathroomPhysical" id="g1BathroomPhysical" checked={this.state.fields["g1BathroomPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1BathroomPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1BathroomVerbal" id="g1BathroomVerbal" checked={this.state.fields["g1BathroomVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1BathroomVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1BathroomInitiates" id="g1BathroomInitiates" checked={this.state.fields["g1BathroomInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1BathroomInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Washes hands',
            goal1NA: <Label check> <Input type="checkbox" name="g1WashesHandsNA" id="g1WashesHandsNA" checked={this.state.fields["g1WashesHandsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WashesHandsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1WashesHandsPhysical" id="g1WashesHandsPhysical" checked={this.state.fields["g1WashesHandsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WashesHandsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1WashesHandsVerbal" id="g1WashesHandsVerbal" checked={this.state.fields["g1WashesHandsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WashesHandsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1WashesHandsInitiates" id="g1WashesHandsInitiates" checked={this.state.fields["g1WashesHandsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1WashesHandsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Completes shower/bathing sequence',
            goal1NA: <Label check> <Input type="checkbox" name="g1ShowerNA" id="g1ShowerNA" checked={this.state.fields["g1ShowerNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShowerNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ShowerPhysical" id="g1ShowerPhysical" checked={this.state.fields["g1ShowerPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShowerPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ShowerVerbal" id="g1ShowerVerbal" checked={this.state.fields["g1ShowerVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShowerVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ShowerInitiates" id="g1ShowerInitiates" checked={this.state.fields["g1ShowerInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ShowerInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Uses utensils properly when eating',
            goal1NA: <Label check> <Input type="checkbox" name="g1UtensilsNA" id="g1UtensilsNA" checked={this.state.fields["g1UtensilsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UtensilsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1UtensilsPhysical" id="g1UtensilsPhysical" checked={this.state.fields["g1UtensilsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UtensilsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1UtensilsVerbal" id="g1UtensilsVerbal" checked={this.state.fields["g1UtensilsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UtensilsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1UtensilsInitiates" id="g1UtensilsInitiates" checked={this.state.fields["g1UtensilsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UtensilsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Opens food containers/wrappers',
            goal1NA: <Label check> <Input type="checkbox" name="g1OpensContainersNA" id="g1OpensContainersNA" checked={this.state.fields["g1OpensContainersNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OpensContainersNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1OpensContainersPhysical" id="g1OpensContainersPhysical" checked={this.state.fields["g1OpensContainersPhysical"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OpensContainersPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1OpensContainersVerbal" id="g1OpensContainersVerbal" checked={this.state.fields["g1OpensContainersVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OpensContainersVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1OpensContainersInitiates" id="g1OpensContainersInitiates" checked={this.state.fields["g1OpensContainersInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1OpensContainersInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Cleans up eating area after eating',
            goal1NA: <Label check> <Input type="checkbox" name="g1CleansEatingAreaNA" id="g1CleansEatingAreaNA" checked={this.state.fields["g1CleansEatingAreaNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1CleansEatingAreaNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1CleansEatingAreaPhysical" id="g1CleansEatingAreaPhysical" checked={this.state.fields["g1CleansEatingAreaPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1CleansEatingAreaPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1CleansEatingAreaVerbal" id="g1CleansEatingAreaVerbal" checked={this.state.fields["g1CleansEatingAreaVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1CleansEatingAreaVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1CleansEatingAreaInitiates" id="g1CleansEatingAreaInitiates" checked={this.state.fields["g1CleansEatingAreaInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1CleansEatingAreaInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Uses caution with hot items',
            goal1NA: <Label check> <Input type="checkbox" name="g1HotCautionNA" id="g1HotCautionNA" checked={this.state.fields["g1HotCautionNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1HotCautionNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1HotCautionPhysical" id="g1HotCautionPhysical" checked={this.state.fields["g1HotCautionPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1HotCautionPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1HotCautionVerbal" id="g1HotCautionVerbal" checked={this.state.fields["g1HotCautionVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1HotCautionVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1HotCautionInitiates" id="g1HotCautionInitiates" checked={this.state.fields["g1HotCautionInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1HotCautionInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: <div className={"sub-section"}>Social Skills</div>,
            goal1NA: '',
            goal1Physical: '',
            goal1Verbal: '',
            goal1Initiates: ''
        }, {
            goal1Category: 'Appropriate with near peers',
            goal1NA: <Label check> <Input type="checkbox" name="g1NearPeersNA" id="g1NearPeersNA" checked={this.state.fields["g1NearPeersNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1NearPeersNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1NearPeersPhysical" id="g1NearPeersPhysical" checked={this.state.fields["g1NearPeersPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1NearPeersPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1NearPeersVerbal" id="g1NearPeersVerbal" checked={this.state.fields["g1NearPeersVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1NearPeersVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1NearPeersInitiates" id="g1NearPeersInitiates" checked={this.state.fields["g1NearPeersInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1NearPeersInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Shows interest in others',
            goal1NA: <Label check> <Input type="checkbox" name="g1InterestInOthersNA" id="g1InterestInOthersNA" checked={this.state.fields["g1InterestInOthersNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterestInOthersNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1InterestInOthersPhysical" id="g1InterestInOthersPhysical" checked={this.state.fields["g1InterestInOthersPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterestInOthersPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1InterestInOthersVerbal" id="g1InterestInOthersVerbal" checked={this.state.fields["g1InterestInOthersVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterestInOthersVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1InterestInOthersInitiates" id="g1InterestInOthersInitiates" checked={this.state.fields["g1InterestInOthersInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InterestInOthersInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Sits appropriately in small groups (3-5)',
            goal1NA: <Label check> <Input type="checkbox" name="g1SitSmallGroupNA" id="g1SitSmallGroupNA" checked={this.state.fields["g1SitSmallGroupNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitSmallGroupNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SitSmallGroupPhysical" id="g1SitSmallGroupPhysical" checked={this.state.fields["g1SitSmallGroupPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitSmallGroupPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SitSmallGroupVerbal" id="g1SitSmallGroupVerbal" checked={this.state.fields["g1SitSmallGroupVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitSmallGroupVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SitSmallGroupInitiates" id="g1SitSmallGroupInitiates" checked={this.state.fields["g1SitSmallGroupInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitSmallGroupInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Attends to instructor in small groups (3-5)',
            goal1NA: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupNA" id="g1InstructorSmallGroupNA" checked={this.state.fields["g1InstructorSmallGroupNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorSmallGroupNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupPhysical" id="g1InstructorSmallGroupPhysical" checked={this.state.fields["g1InstructorSmallGroupPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorSmallGroupPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupVerbal" id="g1InstructorSmallGroupVerbal" checked={this.state.fields["g1InstructorSmallGroupVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorSmallGroupVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupInitiates" id="g1InstructorSmallGroupInitiates" checked={this.state.fields["g1InstructorSmallGroupInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorSmallGroupInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Follows instruction',
            goal1NA: <Label check> <Input type="checkbox" name="g1InstructionNA" id="g1InstructionNA" checked={this.state.fields["g1InstructionNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructionNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1InstructionPhysical" id="g1InstructionPhysical" checked={this.state.fields["g1InstructionPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructionPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructionVerbal" id="g1InstructionVerbal" checked={this.state.fields["g1InstructionVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructionVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructionInitiates" id="g1InstructionInitiates" checked={this.state.fields["g1InstructionInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructionInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Takes turns',
            goal1NA: <Label check> <Input type="checkbox" name="g1TakesTurnsNA" id="g1TakesTurnsNA" checked={this.state.fields["g1TakesTurnsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TakesTurnsNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1TakesTurnsPhysical" id="g1TakesTurnsPhysical" checked={this.state.fields["g1TakesTurnsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TakesTurnsPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1TakesTurnsVerbal" id="g1TakesTurnsVerbal" checked={this.state.fields["g1TakesTurnsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TakesTurnsVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1TakesTurnsInitiates" id="g1TakesTurnsInitiates" checked={this.state.fields["g1TakesTurnsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1TakesTurnsInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Shares',
            goal1NA: <Label check> <Input type="checkbox" name="g1SharesNA" id="g1SharesNA" checked={this.state.fields["g1SharesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SharesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SharesPhysical" id="g1SharesPhysical" checked={this.state.fields["g1SharesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SharesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SharesVerbal" id="g1SharesVerbal" checked={this.state.fields["g1SharesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SharesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SharesInitiates" id="g1SharesInitiates" checked={this.state.fields["g1SharesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SharesInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Converses with others',
            goal1NA: <Label check> <Input type="checkbox" name="g1ConverseOthersNA" id="g1ConverseOthersNA" checked={this.state.fields["g1ConverseOthersNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ConverseOthersNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1ConverseOthersPhysical" id="g1ConverseOthersPhysical" checked={this.state.fields["g1ConverseOthersPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ConverseOthersPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1ConverseOthersVerbal" id="g1ConverseOthersVerbal" checked={this.state.fields["g1ConverseOthersVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ConverseOthersVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1ConverseOthersInitiates" id="g1ConverseOthersInitiates" checked={this.state.fields["g1ConverseOthersInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1ConverseOthersInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Sits appropriately in large groups (3-5)',
            goal1NA: <Label check> <Input type="checkbox" name="g1SitLargeGroupNA" id="g1SitLargeGroupNA" checked={this.state.fields["g1SitLargeGroupNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitLargeGroupNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1SitLargeGroupPhysical" id="g1SitLargeGroupPhysical" checked={this.state.fields["g1SitLargeGroupPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitLargeGroupPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1SitLargeGroupVerbal" id="g1SitLargeGroupVerbal" checked={this.state.fields["g1SitLargeGroupVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitLargeGroupVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1SitLargeGroupInitiates" id="g1SitLargeGroupInitiates" checked={this.state.fields["g1SitLargeGroupInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1SitLargeGroupInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Attends to instructor in large groups (3-5)',
            goal1NA: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupNA" id="g1InstructorLargeGroupNA" checked={this.state.fields["g1InstructorLargeGroupNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorLargeGroupNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupPhysical" id="g1InstructorLargeGroupPhysical" checked={this.state.fields["g1InstructorLargeGroupPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorLargeGroupPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupVerbal" id="g1InstructorLargeGroupVerbal" checked={this.state.fields["g1InstructorLargeGroupVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorLargeGroupVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupInitiates" id="g1InstructorLargeGroupInitiates" checked={this.state.fields["g1InstructorLargeGroupInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1InstructorLargeGroupInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Stands and waits independently during transitions',
            goal1NA: <Label check> <Input type="checkbox" name="g1StandWaitNA" id="g1StandWaitNA" checked={this.state.fields["g1StandWaitNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1StandWaitNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1StandWaitPhysical" id="g1StandWaitPhysical" checked={this.state.fields["g1StandWaitPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1StandWaitPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1StandWaitVerbal" id="g1StandWaitVerbal" checked={this.state.fields["g1StandWaitVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1StandWaitVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1StandWaitInitiates" id="g1StandWaitInitiates" checked={this.state.fields["g1StandWaitInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1StandWaitInitiates")}/> Initiates Independently </Label>
        }, {
            goal1Category: 'Understands simple rules of the classroom',
            goal1NA: <Label check> <Input type="checkbox" name="g1UnderstandsRulesNA" id="g1UnderstandsRulesNA" checked={this.state.fields["g1UnderstandsRulesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UnderstandsRulesNA")}/> N/A </Label>,
            goal1Physical: <Label check> <Input type="checkbox" name="g1UnderstandsRulesPhysical" id="g1UnderstandsRulesPhysical" checked={this.state.fields["g1UnderstandsRulesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UnderstandsRulesPhysical")}/> Physical Prompt </Label>,
            goal1Verbal: <Label check> <Input type="checkbox" name="g1UnderstandsRulesVerbal" id="g1UnderstandsRulesVerbal" checked={this.state.fields["g1UnderstandsRulesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UnderstandsRulesVerbal")}/> Verbal Prompt </Label>,
            goal1Initiates: <Label check> <Input type="checkbox" name="g1UnderstandsRulesInitiates" id="g1UnderstandsRulesInitiates" checked={this.state.fields["g1UnderstandsRulesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g1UnderstandsRulesInitiates")}/> Initiates Independently </Label>
        }];
        const level2GoalsData =  [{
            goal2Category: <div className={"sub-section"}>Communication</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Gets help if his/her feelings bother him/her',
            goal2NA: <Label check> <Input type="checkbox" name="g2FeelingsHelpNA" id="g2FeelingsHelpNA" checked={this.state.fields["g2FeelingsHelpNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeelingsHelpNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FeelingsHelpPhysical" id="g2FeelingsHelpPhysical" checked={this.state.fields["g2FeelingsHelpPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeelingsHelpPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FeelingsHelpVerbal" id="g2FeelingsHelpVerbal" checked={this.state.fields["g2FeelingsHelpVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeelingsHelpVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FeelingsHelpInitiates" id="g2FeelingsHelpInitiates" checked={this.state.fields["g2FeelingsHelpInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeelingsHelpInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how he/she is feeling (angry, happy, etc.)',
            goal2NA: <Label check> <Input type="checkbox" name="g2ExplainFeelingsNA" id="g2ExplainFeelingsNA" checked={this.state.fields["g2ExplainFeelingsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExplainFeelingsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ExplainFeelingsPhysical" id="g2ExplainFeelingsPhysical" checked={this.state.fields["g2ExplainFeelingsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExplainFeelingsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ExplainFeelingsVerbal" id="g2ExplainFeelingsVerbal" checked={this.state.fields["g2ExplainFeelingsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExplainFeelingsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ExplainFeelingsInitiates" id="g2ExplainFeelingsInitiates" checked={this.state.fields["g2ExplainFeelingsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExplainFeelingsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Asks for help when he/she needs it',
            goal2NA: <Label check> <Input type="checkbox" name="g2AsksHelpNA" id="g2AsksHelpNA" checked={this.state.fields["g2AsksHelpNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksHelpNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2AsksHelpPhysical" id="g2AsksHelpPhysical" checked={this.state.fields["g2AsksHelpPhysical"]  === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksHelpPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2AsksHelpVerbal" id="g2AsksHelpVerbal" checked={this.state.fields["g2AsksHelpVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksHelpVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2AsksHelpInitiates" id="g2AsksHelpInitiates" checked={this.state.fields["g2AsksHelpInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksHelpInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Talks with an adult he/she feels close to',
            goal2NA: <Label check> <Input type="checkbox" name="g2TalksToAdultNA" id="g2TalksToAdultNA" checked={this.state.fields["g2TalksToAdultNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToAdultNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2TalksToAdultPhysical" id="g2TalksToAdultPhysical" checked={this.state.fields["g2TalksToAdultPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToAdultPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2TalksToAdultVerbal" id="g2TalksToAdultVerbal" checked={this.state.fields["g2TalksToAdultVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToAdultVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2TalksToAdultInitiates" id="g2TalksToAdultInitiates" checked={this.state.fields["g2TalksToAdultInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToAdultInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Talks over problems with a friend',
            goal2NA: <Label check> <Input type="checkbox" name="g2TalksToFriendNA" id="g2TalksToFriendNA" checked={this.state.fields["g2TalksToFriendNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToFriendNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2TalksToFriendPhysical" id="g2TalksToFriendPhysical" checked={this.state.fields["g2TalksToFriendPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToFriendPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2TalksToFriendVerbal" id="g2TalksToFriendVerbal" checked={this.state.fields["g2TalksToFriendVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToFriendVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2TalksToFriendInitiates" id="g2TalksToFriendInitiates" checked={this.state.fields["g2TalksToFriendInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TalksToFriendInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Accepts compliments or praise without feeling embarrassed',
            goal2NA: <Label check> <Input type="checkbox" name="g2ComplimentNA" id="g2ComplimentNA" checked={this.state.fields["g2ComplimentNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplimentNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ComplimentPhysical" id="g2ComplimentPhysical" checked={this.state.fields["g2ComplimentPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplimentPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ComplimentVerbal" id="g2ComplimentVerbal" checked={this.state.fields["g2ComplimentVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplimentVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ComplimentInitiates" id="g2ComplimentInitiates" checked={this.state.fields["g2ComplimentInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplimentInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Clearly presents his/her ideas to others',
            goal2NA: <Label check> <Input type="checkbox" name="g2PresentsIdeasNA" id="g2PresentsIdeasNA" checked={this.state.fields["g2PresentsIdeasNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PresentsIdeasNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2PresentsIdeasPhysical" id="g2PresentsIdeasPhysical" checked={this.state.fields["g2PresentsIdeasPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PresentsIdeasPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2PresentsIdeasVerbal" id="g2PresentsIdeasVerbal" checked={this.state.fields["g2PresentsIdeasVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PresentsIdeasVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2PresentsIdeasInitiates" id="g2PresentsIdeasInitiates" checked={this.state.fields["g2PresentsIdeasInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PresentsIdeasInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Asks questions to make sure he/she understands something someone has said',
            goal2NA: <Label check> <Input type="checkbox" name="g2AsksQuestionsNA" id="g2AsksQuestionsNA" checked={this.state.fields["g2AsksQuestionsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksQuestionsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2AsksQuestionsPhysical" id="g2AsksQuestionsPhysical" checked={this.state.fields["g2AsksQuestionsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksQuestionsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2AsksQuestionsVerbal" id="g2AsksQuestionsVerbal" checked={this.state.fields["g2AsksQuestionsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksQuestionsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2AsksQuestionsInitiates" id="g2AsksQuestionsInitiates" checked={this.state.fields["g2AsksQuestionsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AsksQuestionsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Tries to find a compromise when he/she disagrees with someone',
            goal2NA: <Label check> <Input type="checkbox" name="g2CompromiseNA" id="g2CompromiseNA" checked={this.state.fields["g2CompromiseNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CompromiseNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2CompromisePhysical" id="g2CompromisePhysical" checked={this.state.fields["g2CompromisePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CompromisePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2CompromiseVerbal" id="g2CompromiseVerbal" checked={this.state.fields["g2CompromiseVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CompromiseVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2CompromiseInitiates" id="g2CompromiseInitiates" checked={this.state.fields["g2CompromiseInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CompromiseInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Accepts constructive feedback with regards to assigned tasks',
            goal2NA: <Label check> <Input type="checkbox" name="g2FeedbackNA" id="g2FeedbackNA" checked={this.state.fields["g2FeedbackNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeedbackNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FeedbackPhysical" id="g2FeedbackPhysical" checked={this.state.fields["g2FeedbackPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeedbackPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FeedbackVerbal" id="g2FeedbackVerbal" checked={this.state.fields["g2FeedbackVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeedbackVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FeedbackInitiates" id="g2FeedbackInitiates" checked={this.state.fields["g2FeedbackInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FeedbackInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Daily Living</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Uses the microwave',
            goal2NA: <Label check> <Input type="checkbox" name="g2MicrowaveNA" id="g2MicrowaveNA" checked={this.state.fields["g2MicrowaveNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MicrowaveNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2MicrowavePhysical" id="g2MicrowavePhysical" checked={this.state.fields["g2MicrowavePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MicrowavePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2MicrowaveVerbal" id="g2MicrowaveHelpVerbal" checked={this.state.fields["g2MicrowaveVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MicrowaveVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2MicrowaveInitiates" id="g2MicrowaveInitiates" checked={this.state.fields["g2MicrowaveInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MicrowaveInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Uses the stove top',
            goal2NA: <Label check> <Input type="checkbox" name="g2StoveTopNA" id="g2StoveTopNA" checked={this.state.fields["g2StoveTopNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoveTopNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2StoveTopPhysical" id="g2StoveTopPhysical" checked={this.state.fields["g2StoveTopPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoveTopPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2StoveTopVerbal" id="g2StoveTopVerbal" checked={this.state.fields["g2StoveTopVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoveTopVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2StoveTopInitiates" id="g2StoveTopInitiates" checked={this.state.fields["g2StoveTopInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoveTopInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Uses the oven',
            goal2NA: <Label check> <Input type="checkbox" name="g2OvenNA" id="g2OvenNA" checked={this.state.fields["g2OvenNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OvenNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2OvenPhysical" id="g2OvenPhysical" checked={this.state.fields["g2OvenPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OvenPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2OvenVerbal" id="g2OvenVerbal" checked={this.state.fields["g2OvenVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OvenVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2OvenInitiates" id="g2OvenInitiates" checked={this.state.fields["g2OvenInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OvenInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Stores food so it doesn\'t spoil or go bad',
            goal2NA: <Label check> <Input type="checkbox" name="g2StoresFoodNA" id="g2StoresFoodNA" checked={this.state.fields["g2StoresFoodNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoresFoodNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2StoresFoodPhysical" id="g2StoresFoodPhysical" checked={this.state.fields["g2StoresFoodPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoresFoodPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2StoresFoodVerbal" id="g2StoresFoodVerbal" checked={this.state.fields["g2StoresFoodVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoresFoodVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2StoresFoodInitiates" id="g2StoresFoodInitiates" checked={this.state.fields["g2StoresFoodInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2StoresFoodInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can fix simple meals for himself/herself',
            goal2NA: <Label check> <Input type="checkbox" name="g2SimpleMealsNA" id="g2SimpleMealsNA" checked={this.state.fields["g2SimpleMealsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SimpleMealsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SimpleMealsPhysical" id="g2SimpleMealsPhysical" checked={this.state.fields["g2SimpleMealsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SimpleMealsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SimpleMealsVerbal" id="g2SimpleMealsVerbal" checked={this.state.fields["g2SimpleMealsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SimpleMealsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SimpleMealsInitiates" id="g2SimpleMealsInitiates" checked={this.state.fields["g2SimpleMealsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SimpleMealsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can fix more complex meals by gathering ingredients\nand following box instructions or recipes',
            goal2NA: <Label check> <Input type="checkbox" name="g2ComplexMealsNA" id="g2ComplexMealsNA" checked={this.state.fields["g2ComplexMealsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplexMealsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ComplexMealsPhysical" id="g2ComplexMealsPhysical" checked={this.state.fields["g2ComplexMealsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplexMealsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ComplexMealsVerbal" id="g2ComplexMealsVerbal" checked={this.state.fields["g2ComplexMealsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplexMealsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ComplexMealsInitiates" id="g2ComplexMealsInitiates" checked={this.state.fields["g2ComplexMealsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComplexMealsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can load/unload dishwasher',
            goal2NA: <Label check> <Input type="checkbox" name="g2DishwasherNA" id="g2DishwasherNA" checked={this.state.fields["g2DishwasherNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DishwasherNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2DishwasherPhysical" id="g2DishwasherPhysical" checked={this.state.fields["g2DishwasherPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DishwasherPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2DishwasherVerbal" id="g2DishwasherVerbal" checked={this.state.fields["g2DishwasherVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DishwasherVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2DishwasherInitiates" id="g2DishwasherInitiates" checked={this.state.fields["g2DishwasherInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DishwasherInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can hand wash/dry/put away dishes',
            goal2NA: <Label check> <Input type="checkbox" name="g2WashDishesNA" id="g2WashDishesNA"value={this.state.fields["g2WashDishesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashDishesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WashDishesPhysical" id="g2WashDishesPhysical"value={this.state.fields["g2WashDishesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashDishesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WashDishesVerbal" id="g2WashDishesVerbal"value={this.state.fields["g2WashDishesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashDishesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WashDishesInitiates" id="g2WashDishesInitiates"value={this.state.fields["g2WashDishesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashDishesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can communicate meal preferences in a restaurant or other settings away from home',
            goal2NA: <Label check> <Input type="checkbox" name="g2OrderMealsNA" id="g2OrderMealsNA" checked={this.state.fields["g2OrderMealsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OrderMealsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2OrderMealsPhysical" id="g2OrderMealsPhysical" checked={this.state.fields["g2OrderMealsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OrderMealsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2OrderMealsVerbal" id="g2OrderMealsVerbal" checked={this.state.fields["g2OrderMealsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OrderMealsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2OrderMealsInitiates" id="g2OrderMealsInitiates" checked={this.state.fields["g2OrderMealsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OrderMealsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Keeps his/her living space clean',
            goal2NA: <Label check> <Input type="checkbox" name="g2CleanSpaceNA" id="g2CleanSpaceNA" checked={this.state.fields["g2CleanSpaceNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CleanSpaceNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2CleanSpacePhysical" id="g2CleanSpacePhysical" checked={this.state.fields["g2CleanSpacePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CleanSpacePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2CleanSpaceVerbal" id="g2CleanSpaceVerbal" checked={this.state.fields["g2CleanSpaceVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CleanSpaceVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2CleanSpaceInitiates" id="g2CleanSpaceInitiates" checked={this.state.fields["g2CleanSpaceInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CleanSpaceInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how to wash clothes according to the label (hand wash, dry clean, cold water, etc.)',
            goal2NA: <Label check> <Input type="checkbox" name="g2WashClothesNA" id="g2WashClothesNA" checked={this.state.fields["g2WashClothesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashClothesNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WashClothesPhysical" id="g2WashClothesPhysical" checked={this.state.fields["g2WashClothesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashClothesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WashClothesVerbal" id="g2WashClothesVerbal" checked={this.state.fields["g2WashClothesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashClothesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WashClothesInitiates" id="g2WashClothesInitiates" checked={this.state.fields["g2WashClothesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashClothesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Dresses and appropriately for season/occasion/destination',
            goal2NA: <Label check> <Input type="checkbox" name="g2DressAppropriatelyNA" id="g2DressAppropriatelyNA" checked={this.state.fields["g2DressAppropriatelyNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DressAppropriatelyNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2DressAppropriatelyPhysical" id="g2DressAppropriatelyPhysical" checked={this.state.fields["g2DressAppropriatelyPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DressAppropriatelyPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2DressAppropriatelyVerbal" id="g2DressAppropriatelyVerbal" checked={this.state.fields["g2DressAppropriatelyVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DressAppropriatelyVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2DressAppropriatelyInitiates" id="g2DressAppropriatelyInitiates" checked={this.state.fields["g2DressAppropriatelyInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DressAppropriatelyInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Fixes his/her clothes when needed, like sewing on a button',
            goal2NA: <Label check> <Input type="checkbox" name="g2FixClothesNA" id="g2FixClothesNA" checked={this.state.fields["g2FixClothesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FixClothesNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FixClothesPhysical" id="g2FixClothesPhysical" checked={this.state.fields["g2FixClothesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FixClothesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FixClothesVerbal" id="g2FixClothesVerbal" checked={this.state.fields["g2FixClothesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FixClothesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FixClothesInitiates" id="g2FixClothesInitiates" checked={this.state.fields["g2FixClothesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FixClothesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Follows the basic fire prevention and safety rules for where he/she lives',
            goal2NA: <Label check> <Input type="checkbox" name="g2FireRulesNA" id="g2FireRulesNA" checked={this.state.fields["g2FireRulesNA"] || ""} onChange={this.handleChangeCheckbox.bind(this, "g2FireRulesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FireRulesPhysical" id="g2FireRulesPhysical" checked={this.state.fields["g2FireRulesPhysical"] || ""} onChange={this.handleChangeCheckbox.bind(this, "g2FireRulesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FireRulesVerbal" id="g2FireRulesVerbal" checked={this.state.fields["g2FireRulesVerbal"] || ""} onChange={this.handleChangeCheckbox.bind(this, "g2FireRulesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FireRulesInitiates" id="g2FireRulesInitiates" checked={this.state.fields["g2FireRulesInitiates"] || ""} onChange={this.handleChangeCheckbox.bind(this, "g2FireRulesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can self-monitor time management activities',
            goal2NA: <Label check> <Input type="checkbox" name="g2TimeMgmtNA" id="g2TimeMgmtNA" checked={this.state.fields["g2TimeMgmtNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TimeMgmtNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2TimeMgmtPhysical" id="g2TimeMgmtPhysical" checked={this.state.fields["g2TimeMgmtPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TimeMgmtPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2TimeMgmtVerbal" id="g2TimeMgmtVerbal" checked={this.state.fields["g2TimeMgmtVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TimeMgmtVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2TimeMgmtInitiates" id="g2TimeMgmtInitiates" checked={this.state.fields["g2TimeMgmtInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TimeMgmtInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can monitor own sleep schedule (bedtime and setting an alarm to get up)',
            goal2NA: <Label check> <Input type="checkbox" name="g2SleepSchedNA" id="g2SleepSchedNA" checked={this.state.fields["g2SleepSchedNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SleepSchedNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SleepSchedPhysical" id="g2SleepSchedPhysical" checked={this.state.fields["g2SleepSchedPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SleepSchedPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SleepSchedVerbal" id="g2SleepSchedVerbal" checked={this.state.fields["g2SleepSchedVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SleepSchedVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SleepSchedInitiates" id="g2SleepSchedInitiates" checked={this.state.fields["g2SleepSchedInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SleepSchedInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Housing and Money Management</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Can complete a rental or lease agreement',
            goal2NA: <Label check> <Input type="checkbox" name="g2RentAgreementNA" id="g2RentAgreementNA" checked={this.state.fields["g2RentAgreementNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RentAgreementNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2RentAgreementPhysical" id="g2RentAgreementPhysical" checked={this.state.fields["g2RentAgreementPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RentAgreementPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2RentAgreementVerbal" id="g2RentAgreementVerbal" checked={this.state.fields["g2RentAgreementVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RentAgreementVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2RentAgreementInitiates" id="g2RentAgreementInitiates" checked={this.state.fields["g2RentAgreementInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RentAgreementInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can arrange for new telephone services and utilities',
            goal2NA: <Label check> <Input type="checkbox" name="g2PhoneServicesNA" id="g2PhoneServicesNA"value={this.state.fields["g2PhoneServicesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PhoneServicesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2PhoneServicesPhysical" id="g2PhoneServicesPhysical" checked={this.state.fields["g2PhoneServicesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PhoneServicesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2PhoneServicesVerbal" id="g2PhoneServicesVerbal" checked={this.state.fields["g2PhoneServicesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PhoneServicesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2PhoneServicesInitiates" id="g2PhoneServicesInitiates" checked={this.state.fields["g2PhoneServicesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PhoneServicesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can calculate the start-up costs for new living arrangements (rental deposits, rent, utilities, etc.)',
            goal2NA: <Label check> <Input type="checkbox" name="g2LivingCostsNA" id="g2LivingCostsNA" checked={this.state.fields["g1UtensilsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LivingCostsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2LivingCostsPhysical" id="g2LivingCostsPhysical" checked={this.state.fields["g2LivingCostsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LivingCostsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2LivingCostsVerbal" id="g2LivingCostsVerbal" checked={this.state.fields["g2LivingCostsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LivingCostsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2LivingCostsInitiates" id="g2LivingCostsInitiates" checked={this.state.fields["g2LivingCostsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LivingCostsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to get car insurance',
            goal2NA: <Label check> <Input type="checkbox" name="g2CarInsuranceNA" id="g2CarInsuranceNA" checked={this.state.fields["g2CarInsuranceNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CarInsuranceNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2CarInsurancePhysical" id="g2CarInsurancePhysical" checked={this.state.fields["g2CarInsurancePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CarInsurancePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2CarInsuranceVerbal" id="g2CarInsuranceVerbal" checked={this.state.fields["g2CarInsuranceVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CarInsuranceVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2CarInsuranceInitiates" id="g2CarInsuranceInitiates" checked={this.state.fields["g2CarInsuranceInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CarInsuranceInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to establish and maintain good credit',
            goal2NA: <Label check> <Input type="checkbox" name="g2GoodCreditNA" id="g2GoodCreditNA" checked={this.state.fields["g2GoodCreditNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GoodCreditNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2GoodCreditPhysical" id="g2GoodCreditPhysical" checked={this.state.fields["g2GoodCreditPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GoodCreditPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2GoodCreditVerbal" id="g2GoodCreditVerbal" checked={this.state.fields["g2GoodCreditVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GoodCreditVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2GoodCreditInitiates" id="g2GoodCreditInitiates" checked={this.state.fields["g2GoodCreditInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GoodCreditInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can interpret pay stub information',
            goal2NA: <Label check> <Input type="checkbox" name="g2PayStubNA" id="g2PayStubNA" checked={this.state.fields["g2PayStubNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PayStubNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2PayStubPhysical" id="g2PayStubPhysical" checked={this.state.fields["g2PayStubPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PayStubPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2PayStubVerbal" id="g2PayStubVerbal" checked={this.state.fields["g2PayStubVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PayStubVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2PayStubInitiates" id="g2PayStubInitiates" checked={this.state.fields["g2PayStubInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PayStubInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can understand billing information (such as phone bill)',
            goal2NA: <Label check> <Input type="checkbox" name="g2BillingInfoNA" id="g2BillingInfoNA" checked={this.state.fields["g2BillingInfoNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BillingInfoNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2BillingInfoPhysical" id="g2BillingInfoPhysical" checked={this.state.fields["g2BillingInfoPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BillingInfoPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2BillingInfoVerbal" id="g2BillingInfoVerbal" checked={this.state.fields["g2BillingInfoVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BillingInfoVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2BillingInfoInitiates" id="g2BillingInfoInitiates" checked={this.state.fields["g2BillingInfoInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BillingInfoInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can develop a monthly budget for living on his/her own',
            goal2NA: <Label check> <Input type="checkbox" name="g2BudgetNA" id="g2BudgetNA" checked={this.state.fields["g2BudgetNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BudgetNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2BudgetPhysical" id="g2BudgetPhysical" checked={this.state.fields["g2BudgetPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BudgetPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2BudgetVerbal" id="g2BudgetVerbal" checked={this.state.fields["g2BudgetVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BudgetVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2BudgetInitiates" id="g2BudgetInitiates" checked={this.state.fields["g2BudgetInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BudgetInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain the pros and cons of buying on credit',
            goal2NA: <Label check> <Input type="checkbox" name="g2CreditNA" id="g2CreditNA" checked={this.state.fields["g2CreditNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CreditNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2CreditPhysical" id="g2CreditPhysical" checked={this.state.fields["g2CreditPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CreditPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2CreditVerbal" id="g2CreditVerbal" checked={this.state.fields["g2CreditVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CreditVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2CreditInitiates" id="g2CreditInitiates" checked={this.state.fields["g2CreditInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CreditInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to get and revew a driver\'s licence',
            goal2NA: <Label check> <Input type="checkbox" name="g2DriversLicenseNA" id="g2DriversLicenseNA" checked={this.state.fields["g2DriversLicenseNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DriversLicenseNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2DriversLicensePhysical" id="g2DriversLicensePhysical" checked={this.state.fields["g2DriversLicensePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DriversLicensePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2DriversLicenseVerbal" id="g2DriversLicenseVerbal" checked={this.state.fields["g2DriversLicenseVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DriversLicenseVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2DriversLicenseInitiates" id="g2DriversLicenseInitiates" checked={this.state.fields["g2DriversLicenseInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DriversLicenseInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can use transportation independently (MARTA, bus, train)',
            goal2NA: <Label check> <Input type="checkbox" name="g2TransportationNA" id="g2TransportationNA" checked={this.state.fields["g2TransportationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TransportationNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2TransportationPhysical" id="g2TransportationPhysical" checked={this.state.fields["g2TransportationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TransportationPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2TransportationVerbal" id="g2TransportationVerbal" checked={this.state.fields["g2TransportationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TransportationVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2TransportationInitiates" id="g2TransportationInitiates" checked={this.state.fields["g2TransportationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2TransportationInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can follow directions to navigate by car, bike, or on foot to other/new destinations',
            goal2NA: <Label check> <Input type="checkbox" name="g2FollowNavigationNA" id="g2FollowNavigationNA" checked={this.state.fields["g2FollowNavigationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FollowNavigationNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FollowNavigationPhysical" id="g2FollowNavigationPhysical" checked={this.state.fields["g2FollowNavigationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FollowNavigationPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FollowNavigationVerbal" id="g2FollowNavigationVerbal" checked={this.state.fields["g2FollowNavigationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FollowNavigationVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FollowNavigationInitiates" id="g2FollowNavigationInitiates" checked={this.state.fields["g2FollowNavigationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FollowNavigationInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can contact places around where he/she lives to get financial advice',
            goal2NA: <Label check> <Input type="checkbox" name="g2FinancialAdviceNA" id="g2FinancialAdviceNA" checked={this.state.fields["g2FinancialAdviceNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FinancialAdviceNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2FinancialAdvicePhysical" id="g2FinancialAdvicePhysical" checked={this.state.fields["g2FinancialAdvicePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FinancialAdvicePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2FinancialAdviceVerbal" id="g2FinancialAdviceVerbal" checked={this.state.fields["g2FinancialAdviceVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FinancialAdviceVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2FinancialAdviceInitiates" id="g2FinancialAdviceInitiates" checked={this.state.fields["g2FinancialAdviceInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2FinancialAdviceInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to write checks',
            goal2NA: <Label check> <Input type="checkbox" name="g2WriteChecksNA" id="g2WriteChecksNA" checked={this.state.fields["g2WriteChecksNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WriteChecksNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WriteChecksPhysical" id="g2WriteChecksPhysical" checked={this.state.fields["g2WriteChecksPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WriteChecksPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WriteChecksVerbal" id="g2WriteChecksVerbal" checked={this.state.fields["g2WriteChecksVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WriteChecksVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WriteChecksInitiates" id="g2WriteChecksInitiates" checked={this.state.fields["g2WriteChecksInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WriteChecksInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to make deposits and ATM transactions',
            goal2NA: <Label check> <Input type="checkbox" name="g2ATMTransactionsNA" id="g2ATMTransactionsNA" checked={this.state.fields["g2ATMTransactionsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ATMTransactionsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ATMTransactionsPhysical" id="g2ATMTransactionsPhysical" checked={this.state.fields["g2ATMTransactionsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ATMTransactionsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ATMTransactionsVerbal" id="g2ATMTransactionsVerbal" checked={this.state.fields["g2ATMTransactionsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ATMTransactionsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ATMTransactionsInitiates" id="g2ATMTransactionsInitiates" checked={this.state.fields["g2ATMTransactionsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ATMTransactionsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to balance a checking/savings account',
            goal2NA: <Label check> <Input type="checkbox" name="g2BalanceBankAccountNA" id="g2BalanceBankAccountNA" checked={this.state.fields["g2BalanceBankAccountNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BalanceBankAccountNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2BalanceBankAccountPhysical" id="g2BalanceBankAccountPhysical" checked={this.state.fields["g2BalanceBankAccountPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BalanceBankAccountPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2BalanceBankAccountVerbal" id="g2BalanceBankAccountVerbal" checked={this.state.fields["g2BalanceBankAccountVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BalanceBankAccountVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2BalanceBankAccountInitiates" id="g2BalanceBankAccountInitiates" checked={this.state.fields["g2BalanceBankAccountInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BalanceBankAccountInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can understand and respond to ads for housing',
            goal2NA: <Label check> <Input type="checkbox" name="g2HousingAdsNA" id="g2HousingAdsNA" checked={this.state.fields["g2HousingAdsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HousingAdsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2HousingAdsPhysical" id="g2HousingAdsPhysical" checked={this.state.fields["g2HousingAdsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HousingAdsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2HousingAdsVerbal" id="g2HousingAdsVerbal" checked={this.state.fields["g2HousingAdsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HousingAdsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2HousingAdsInitiates" id="g2HousingAdsInitiates" checked={this.state.fields["g2HousingAdsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HousingAdsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain where to get information about financial aid for education',
            goal2NA: <Label check> <Input type="checkbox" name="g2EduFinancialAidNA" id="g2EduFinancialAidNA" checked={this.state.fields["g2EduFinancialAidNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EduFinancialAidNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2EduFinancialAidPhysical" id="g2EduFinancialAidPhysical" checked={this.state.fields["g2EduFinancialAidPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EduFinancialAidPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2EduFinancialAidVerbal" id="g2EduFinancialAidVerbal" checked={this.state.fields["g2EduFinancialAidVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EduFinancialAidVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2EduFinancialAidInitiates" id="g2EduFinancialAidInitiates" checked={this.state.fields["g2EduFinancialAidInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EduFinancialAidInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can name ways to save money on things he/she buys',
            goal2NA: <Label check> <Input type="checkbox" name="g2SaveMoneyNA" id="g2SaveMoneyNA" checked={this.state.fields["g2SaveMoneyNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SaveMoneyNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SaveMoneyPhysical" id="g2SaveMoneyPhysical" checked={this.state.fields["g2SaveMoneyPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SaveMoneyPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SaveMoneyVerbal" id="g2SaveMoneyVerbal" checked={this.state.fields["g2SaveMoneyVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SaveMoneyVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SaveMoneyInitiates" id="g2SaveMoneyInitiates" checked={this.state.fields["g2SaveMoneyInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SaveMoneyInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how to research and find local social service agencies (like employment and counseling services)',
            goal2NA: <Label check> <Input type="checkbox" name="g2SocialServicesNA" id="g2SocialServicesNA" checked={this.state.fields["g2SocialServicesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialServicesNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SocialServicesPhysical" id="g2SocialServicesPhysical" checked={this.state.fields["g2SocialServicesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialServicesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SocialServicesVerbal" id="g2SocialServicesVerbal" checked={this.state.fields["g2SocialServicesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialServicesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SocialServicesInitiates" id="g2SocialServicesInitiates" checked={this.state.fields["g2SocialServicesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialServicesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain the education or training needed for his/her career options',
            goal2NA: <Label check> <Input type="checkbox" name="g2CareerEduNA" id="g2CareerEduNA" checked={this.state.fields["g2CareerEduNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CareerEduNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2CareerEduPhysical" id="g2CareerEduPhysical" checked={this.state.fields["g2CareerEduPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CareerEduPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2CareerEduVerbal" id="g2CareerEduVerbal" checked={this.state.fields["g2CareerEduVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CareerEduVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2CareerEduInitiates" id="g2CareerEduInitiates" checked={this.state.fields["g2CareerEduInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2CareerEduInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Self-care</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Can perform oral care',
            goal2NA: <Label check> <Input type="checkbox" name="g2OralCareNA" id="g2OralCareNA" checked={this.state.fields["g2OralCareNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OralCareNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2OralCarePhysical" id="g2OralCarePhysical" checked={this.state.fields["g2OralCarePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OralCarePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2OralCareVerbal" id="g2OralCareVerbal" checked={this.state.fields["g2OralCareVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OralCareVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2OralCareInitiates" id="g2OralCareInitiates" checked={this.state.fields["g2OralCareInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OralCareInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can brush/comb/style hair',
            goal2NA: <Label check> <Input type="checkbox" name="g2HairNA" id="g2HairNA" checked={this.state.fields["g2HairNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HairNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2HairPhysical" id="g2HairPhysical" checked={this.state.fields["g2HairPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HairPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2HairVerbal" id="g2HairVerbal" checked={this.state.fields["g2HairVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HairVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2HairInitiates" id="g2HairInitiates" checked={this.state.fields["g2HairInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HairInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can perform skin care',
            goal2NA: <Label check> <Input type="checkbox" name="g2SkinCareNA" id="g2SkinCareNA" checked={this.state.fields["g2SkinCareNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SkinCareNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SkinCarePhysical" id="g2SkinCarePhysical" checked={this.state.fields["g2SkinCarePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SkinCarePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SkinCareVerbal" id="g2SkinCareVerbal" checked={this.state.fields["g2SkinCareVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SkinCareVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SkinCareInitiates" id="g2SkinCareInitiates" checked={this.state.fields["g2SkinCareInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SkinCareInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can maintain eye glasses/contacts',
            goal2NA: <Label check> <Input type="checkbox" name="g2EyeGlassesNA" id="g2EyeGlassesNA" checked={this.state.fields["g2EyeGlassesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EyeGlassesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2EyeGlassesPhysical" id="g2EyeGlassesPhysical" checked={this.state.fields["g2EyeGlassesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EyeGlassesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2EyeGlassesVerbal" id="g2EyeGlassesVerbal"value={this.state.fields["g2EyeGlassesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EyeGlassesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2EyeGlassesInitiates" id="g2EyeGlassesInitiates"value={this.state.fields["g2EyeGlassesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EyeGlassesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can maintain a well groomed appearance',
            goal2NA: <Label check> <Input type="checkbox" name="g2WellGroomedNA" id="g2WellGroomedNA" checked={this.state.fields["g2WellGroomedNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WellGroomedNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WellGroomedPhysical" id="g2WellGroomedPhysical" checked={this.state.fields["g2WellGroomedPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WellGroomedPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WellGroomedVerbal" id="g2WellGroomedVerbal" checked={this.state.fields["g2WellGroomedVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WellGroomedVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WellGroomedInitiates" id="g2WellGroomedInitiates" checked={this.state.fields["g2WellGroomedInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WellGroomedInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can manage toilet needs',
            goal2NA: <Label check> <Input type="checkbox" name="g2ToiletNeedsNA" id="g2ToiletNeedsNA" checked={this.state.fields["g2ToiletNeedsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ToiletNeedsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ToiletNeedsPhysical" id="g2ToiletNeedsPhysical" checked={this.state.fields["g2ToiletNeedsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ToiletNeedsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ToiletNeedsVerbal" id="g2ToiletNeedsVerbal" checked={this.state.fields["g2ToiletNeedsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ToiletNeedsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ToiletNeedsInitiates" id="g2ToiletNeedsInitiates" checked={this.state.fields["g2ToiletNeedsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ToiletNeedsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can manage washing hands to control germs',
            goal2NA: <Label check> <Input type="checkbox" name="g2WashHandsNA" id="g2WashHandsNA" checked={this.state.fields["g2WashHandsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashHandsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WashHandsPhysical" id="g2WashHandsPhysical" checked={this.state.fields["g2WashHandsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashHandsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WashHandsVerbal" id="g2WashHandsVerbal" checked={this.state.fields["g2WashHandsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashHandsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WashHandsInitiates" id="g2WashHandsInitiates" checked={this.state.fields["g2WashHandsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WashHandsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can bathe/shower/shampoo',
            goal2NA: <Label check> <Input type="checkbox" name="g2BatheNA" id="g2BatheNA" checked={this.state.fields["g2BatheNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BatheNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2BathePhysical" id="g2BathePhysical" checked={this.state.fields["g2BathePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BathePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2BatheVerbal" id="g2BatheVerbal" checked={this.state.fields["g2BatheVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BatheVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2BatheInitiates" id="g2BatheInitiates" checked={this.state.fields["g2BatheInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BatheInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can manage shaving needs',
            goal2NA: <Label check> <Input type="checkbox" name="g2ShavingNeedsNA" id="g2ShavingNeedsNA" checked={this.state.fields["g2ShavingNeedsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ShavingNeedsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ShavingNeedsPhysical" id="g2ShavingNeedsPhysical" checked={this.state.fields["g2ShavingNeedsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ShavingNeedsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ShavingNeedsVerbal" id="g2ShavingNeedsVerbal" checked={this.state.fields["g2ShavingNeedsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ShavingNeedsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ShavingNeedsInitiates" id="g2ShavingNeedsInitiates" checked={this.state.fields["g2ShavingNeedsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ShavingNeedsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can use deodorant',
            goal2NA: <Label check> <Input type="checkbox" name="g2DeodorantNA" id="g2DeodorantNA" checked={this.state.fields["g2DeodorantNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DeodorantNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2DeodorantPhysical" id="g2DeodorantPhysical" checked={this.state.fields["g2DeodorantPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DeodorantPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2DeodorantVerbal" id="g2DeodorantVerbal" checked={this.state.fields["g2DeodorantVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DeodorantVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2DeodorantInitiates" id="g2DeodorantInitiates" checked={this.state.fields["g2DeodorantInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2DeodorantInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Closes door for bathing/toileting/dressing/etc.',
            goal2NA: <Label check> <Input type="checkbox" name="g2ClosesDoorNA" id="g2ClosesDoorNA" checked={this.state.fields["g2ClosesDoorNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ClosesDoorNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ClosesDoorPhysical" id="g2ClosesDoorPhysical" checked={this.state.fields["g2ClosesDoorPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ClosesDoorPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ClosesDoorVerbal" id="g2ClosesDoorVerbal" checked={this.state.fields["g2ClosesDoorVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ClosesDoorVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ClosesDoorInitiates" id="g2ClosesDoorInitiates" checked={this.state.fields["g2ClosesDoorInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ClosesDoorInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can take care of minor injuries and illnesses',
            goal2NA: <Label check> <Input type="checkbox" name="g2MinorInjuriesNA" id="g2MinorInjuriesNA" checked={this.state.fields["g2MinorInjuriesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MinorInjuriesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2MinorInjuriesPhysical" id="g2MinorInjuriesPhysical" checked={this.state.fields["g2MinorInjuriesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MinorInjuriesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2MinorInjuriesVerbal" id="g2MinorInjuriesVerbal" checked={this.state.fields["g2MinorInjuriesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MinorInjuriesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2MinorInjuriesInitiates" id="g2MinorInjuriesInitiates" checked={this.state.fields["g2MinorInjuriesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MinorInjuriesInitiatesg2MinorInjuriesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'If needed medical help quickly, knows how to get it',
            goal2NA: <Label check> <Input type="checkbox" name="g2GetsMedicalHelpNA" id="g2GetsMedicalHelpNA" checked={this.state.fields["g2GetsMedicalHelpNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsMedicalHelpNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2GetsMedicalHelpPhysical" id="g2GetsMedicalHelpPhysical" checked={this.state.fields["g2GetsMedicalHelpPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsMedicalHelpPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2GetsMedicalHelpVerbal" id="g2GetsMedicalHelpVerbal" checked={this.state.fields["g2GetsMedicalHelpVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsMedicalHelpVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2GetsMedicalHelpInitiates" id="g2GetsMedicalHelpInitiates" checked={this.state.fields["g2GetsMedicalHelpInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsMedicalHelpInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how and when to call 911',
            goal2NA: <Label check> <Input type="checkbox" name="g2Call911NA" id="g2Call911NA" checked={this.state.fields["g2Call911NA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2Call911NA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2Call911Physical" id="g2Call911Physical" checked={this.state.fields["g2Call911Physical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2Call911Physical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2Call911Verbal" id="g2Call911Verbal" checked={this.state.fields["g2Call911Verbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2Call911Verbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2Call911Initiates" id="g2Call911Initiates" checked={this.state.fields["g2Call911Initiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2Call911Initiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can name two or more places to get help if he/she feels unsafe',
            goal2NA: <Label check> <Input type="checkbox" name="g2HelpIfUnsafeNA" id="g2HelpIfUnsafeNA" checked={this.state.fields["g2HelpIfUnsafeNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HelpIfUnsafeNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2HelpIfUnsafePhysical" id="g2HelpIfUnsafePhysical" checked={this.state.fields["g2HelpIfUnsafePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HelpIfUnsafePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2HelpIfUnsafeVerbal" id="g2HelpIfUnsafeVerbal" checked={this.state.fields["g2HelpIfUnsafeVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HelpIfUnsafeVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2HelpIfUnsafeInitiates" id="g2HelpIfUnsafeInitiates" checked={this.state.fields["g2HelpIfUnsafeInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HelpIfUnsafeInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can readily identify who is a stranger and knows appropriate types of interactions with stranger',
            goal2NA: <Label check> <Input type="checkbox" name="g2IDStrangerNA" id="g2IDStrangerNA" checked={this.state.fields["g2IDStrangerNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2IDStrangerNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2IDStrangerPhysical" id="g2IDStrangerPhysical" checked={this.state.fields["g2IDStrangerPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2IDStrangerPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2IDStrangerVerbal" id="g2IDStrangerVerbal" checked={this.state.fields["g2IDStrangerVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2IDStrangerVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2IDStrangerInitiates" id="g2IDStrangerInitiates" checked={this.state.fields["g2IDStrangerInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2IDStrangerInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Social Relationships</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Is polite to others',
            goal2NA: <Label check> <Input type="checkbox" name="g2PoliteNA" id="g2PoliteNA" checked={this.state.fields["g2PoliteNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PoliteNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2PolitePhysical" id="g2PolitePhysical" checked={this.state.fields["g2PolitePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PolitePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2PoliteVerbal" id="g2PoliteVerbal" checked={this.state.fields["g2PoliteVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PoliteVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2PoliteInitiates" id="g2PoliteInitiates" checked={this.state.fields["g2PoliteInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PoliteInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Respects other people\'s things',
            goal2NA: <Label check> <Input type="checkbox" name="g2RespectOthersThingsNA" id="g2RespectOthersThingsNA" checked={this.state.fields["g2RespectOthersThingsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersThingsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2RespectOthersThingsPhysical" id="g2RespectOthersThingsPhysical" checked={this.state.fields["g2RespectOthersThingsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersThingsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2RespectOthersThingsVerbal" id="g2RespectOthersThingsVerbal" checked={this.state.fields["g2RespectOthersThingsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersThingsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2RespectOthersThingsInitiates" id="g2RespectOthersThingsInitiates" checked={this.state.fields["g2RespectOthersThingsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersThingsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Respects other people\'s way of looking at things, their lifestyle, and their attitudes',
            goal2NA: <Label check> <Input type="checkbox" name="g2RespectOthersIdeasNA" id="g2RespectOthersIdeasNA" checked={this.state.fields["g2RespectOthersIdeasNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersIdeasNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2RespectOthersIdeasPhysical" id="g2RespectOthersIdeasPhysical" checked={this.state.fields["g2RespectOthersIdeasPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersIdeasPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2RespectOthersIdeasVerbal" id="g2RespectOthersIdeasVerbal" checked={this.state.fields["g2RespectOthersIdeasVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersIdeasVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2RespectOthersIdeasInitiates" id="g2RespectOthersIdeasInitiates" checked={this.state.fields["g2RespectOthersIdeasInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2RespectOthersIdeasInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Shows appreciation for things others do for him/her',
            goal2NA: <Label check> <Input type="checkbox" name="g2AppreciationNA" id="g2AppreciationNA" checked={this.state.fields["g2AppreciationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AppreciationNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2AppreciationPhysical" id="g2AppreciationPhysical" checked={this.state.fields["g2AppreciationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AppreciationPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2AppreciationVerbal" id="g2AppreciationVerbal" checked={this.state.fields["g2AppreciationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AppreciationVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2AppreciationInitiates" id="g2AppreciationInitiates" checked={this.state.fields["g2AppreciationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2AppreciationInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Deals with anger without using violence',
            goal2NA: <Label check> <Input type="checkbox" name="g2NonviolentAngerNA" id="g2NonviolentAngerNA" checked={this.state.fields["g2NonviolentAngerNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2NonviolentAngerNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2NonviolentAngerPhysical" id="g2NonviolentAngerPhysical" checked={this.state.fields["g2NonviolentAngerPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2NonviolentAngerPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2NonviolentAngerVerbal" id="g2NonviolentAngerVerbal" checked={this.state.fields["g2NonviolentAngerVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2NonviolentAngerVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2NonviolentAngerInitiates" id="g2NonviolentAngerInitiates" checked={this.state.fields["g2NonviolentAngerInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2NonviolentAngerInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Thinks about how his/her choices affect others',
            goal2NA: <Label check> <Input type="checkbox" name="g2EffectOfChoicesNA" id="g2EffectOfChoicesNA" checked={this.state.fields["g2EffectOfChoicesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EffectOfChoicesNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2EffectOfChoicesPhysical" id="g2EffectOfChoicesPhysical" checked={this.state.fields["g2EffectOfChoicesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EffectOfChoicesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2EffectOfChoicesVerbal" id="g2EffectOfChoicesVerbal" checked={this.state.fields["g2EffectOfChoicesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EffectOfChoicesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2EffectOfChoicesInitiates" id="g2EffectOfChoicesInitiates" checked={this.state.fields["g2EffectOfChoicesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2EffectOfChoicesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can safely interact with others on the internet',
            goal2NA: <Label check> <Input type="checkbox" name="g2InternetSafetyNA" id="g2InternetSafetyNA" checked={this.state.fields["g2InternetSafetyNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetSafetyNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2InternetSafetyPhysical" id="g2InternetSafetyPhysical" checked={this.state.fields["g2InternetSafetyPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetSafetyPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2InternetSafetyVerbal" id="g2InternetSafetyVerbal" checked={this.state.fields["g2InternetSafetyVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetSafetyVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2InternetSafetyInitiates" id="g2InternetSafetyInitiates" checked={this.state.fields["g2InternetSafetyInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetSafetyInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Understands public vs. private activities',
            goal2NA: <Label check> <Input type="checkbox" name="g2PublicPrivateNA" id="g2PublicPrivateNA" checked={this.state.fields["g2PublicPrivateNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PublicPrivateNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2PublicPrivatePhysical" id="g2PublicPrivatePhysical" checked={this.state.fields["g2PublicPrivatePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PublicPrivatePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2PublicPrivateVerbal" id="g2PublicPrivateVerbal" checked={this.state.fields["g2PublicPrivateVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PublicPrivateVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2PublicPrivateInitiates" id="g2PublicPrivateInitiates" checked={this.state.fields["g2PublicPrivateInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2PublicPrivateInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Work and Study Skills</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Gets his/her work done on time',
            goal2NA: <Label check> <Input type="checkbox" name="g2WorkDoneOnTimeNA" id="g2WorkDoneOnTimeNA" checked={this.state.fields["g2WorkDoneOnTimeNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WorkDoneOnTimeNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2WorkDoneOnTimePhysical" id="g2WorkDoneOnTimePhysical" checked={this.state.fields["g2WorkDoneOnTimePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WorkDoneOnTimePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2WorkDoneOnTimeVerbal" id="g2WorkDoneOnTimeVerbal" checked={this.state.fields["g2WorkDoneOnTimeVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WorkDoneOnTimeVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2WorkDoneOnTimeInitiates" id="g2WorkDoneOnTimeInitiates" checked={this.state.fields["g2WorkDoneOnTimeInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2WorkDoneOnTimeInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Gets to school or work on time',
            goal2NA: <Label check> <Input type="checkbox" name="g2OnTimeToSchoolNA" id="g2OnTimeToSchoolNA" checked={this.state.fields["g2OnTimeToSchoolNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OnTimeToSchoolNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2OnTimeToSchoolPhysical" id="g2OnTimeToSchoolPhysical" checked={this.state.fields["g2OnTimeToSchoolPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OnTimeToSchoolPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2OnTimeToSchoolVerbal" id="g2OnTimeToSchoolVerbal" checked={this.state.fields["g2OnTimeToSchoolVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OnTimeToSchoolVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2OnTimeToSchoolInitiates" id="g2OnTimeToSchoolInitiates" checked={this.state.fields["g2OnTimeToSchoolInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2OnTimeToSchoolInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how and where to get help outside of school',
            goal2NA: <Label check> <Input type="checkbox" name="g2SchoolHelpNA" id="g2SchoolHelpNA" checked={this.state.fields["g2SchoolHelpNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SchoolHelpNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SchoolHelpPhysical" id="g2SchoolHelpPhysical" checked={this.state.fields["g2SchoolHelpPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SchoolHelpPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SchoolHelpVerbal" id="g2SchoolHelpVerbal" checked={this.state.fields["g2SchoolHelpVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SchoolHelpVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SchoolHelpInitiates" id="g2SchoolHelpInitiates" checked={this.state.fields["g2SchoolHelpInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SchoolHelpInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Prepares for exams and presentations',
            goal2NA: <Label check> <Input type="checkbox" name="g2ExamPrepNA" id="g2ExamPrepNA" checked={this.state.fields["g2ExamPrepNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExamPrepNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ExamPrepPhysical" id="g2ExamPrepPhysical" checked={this.state.fields["g2ExamPrepPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExamPrepPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ExamPrepVerbal" id="g2ExamPrepVerbal" checked={this.state.fields["g2ExamPrepVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExamPrepVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ExamPrepInitiates" id="g2ExamPrepInitiates" checked={this.state.fields["g2ExamPrepInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ExamPrepInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Looks over his/her work for mistakes',
            goal2NA: <Label check> <Input type="checkbox" name="g2LooksForMistakesNA" id="g2LooksForMistakesNA" checked={this.state.fields["g2LooksForMistakesNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LooksForMistakesNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2LooksForMistakesPhysical" id="g2LooksForMistakesPhysical" checked={this.state.fields["g2LooksForMistakesPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LooksForMistakesPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2LooksForMistakesVerbal" id="g2LooksForMistakesVerbal" checked={this.state.fields["g2LooksForMistakesVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LooksForMistakesVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2LooksForMistakesInitiates" id="g2LooksForMistakesInitiates" checked={this.state.fields["g2LooksForMistakesInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2LooksForMistakesInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Uses the library, newspaper, computer/internet, or other resources to get information',
            goal2NA: <Label check> <Input type="checkbox" name="g2GetsInformationNA" id="g2GetsInformationNA" checked={ this.state.fields["g2GetsInformationNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsInformationNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2GetsInformationPhysical" id="g2GetsInformationPhysical" checked={this.state.fields["g2GetsInformationPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsInformationPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2GetsInformationVerbal" id="g2GetsInformationVerbal" checked={this.state.fields["g2GetsInformationVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsInformationVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2GetsInformationInitiates" id="g2GetsInformationInitiates" checked={this.state.fields["g2GetsInformationInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2GetsInformationInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how to access the internet to do homework',
            goal2NA: <Label check> <Input type="checkbox" name="g2InternetForHomeworkNA" id="g2InternetForHomeworkNA" checked={this.state.fields["g2InternetForHomeworkNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetForHomeworkNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2InternetForHomeworkPhysical" id="g2InternetForHomeworkPhysical" checked={this.state.fields["g2InternetForHomeworkPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetForHomeworkPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2InternetForHomeworkVerbal" id="g2InternetForHomeworkVerbal" checked={this.state.fields["g2InternetForHomeworkVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetForHomeworkVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2InternetForHomeworkInitiates" id="g2InternetForHomeworkInitiates" checked={this.state.fields["g2InternetForHomeworkInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2InternetForHomeworkInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Knows how to use a search engine',
            goal2NA: <Label check> <Input type="checkbox" name="g2SearchEngineNA" id="g2SearchEngineNA" checked={this.state.fields["g2SearchEngineNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SearchEngineNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SearchEnginePhysical" id="g2SearchEnginePhysical" checked={this.state.fields["g2SearchEnginePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SearchEnginePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SearchEngineVerbal" id="g2SearchEngineVerbal" checked={this.state.fields["g2SearchEngineVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SearchEngineVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SearchEngineInitiates" id="g2SearchEngineInitiates" checked={this.state.fields["g2SearchEngineInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SearchEngineInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can create, save, open, retrieve, and print documents on the computer',
            goal2NA: <Label check> <Input type="checkbox" name="g2ComputerDocumentsNA" id="g2ComputerDocumentsNA" checked={this.state.fields["g2ComputerDocumentsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComputerDocumentsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2ComputerDocumentsPhysical" id="g2ComputerDocumentsPhysical" checked={this.state.fields["g2ComputerDocumentsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComputerDocumentsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2ComputerDocumentsVerbal" id="g2ComputerDocumentsVerbal" checked={this.state.fields["g2ComputerDocumentsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComputerDocumentsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2ComputerDocumentsInitiates" id="g2ComputerDocumentsInitiates" checked={this.state.fields["g2ComputerDocumentsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2ComputerDocumentsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: <div className={"sub-section"}>Extra Items</div>,
            goal2NA: '',
            goal2Physical: '',
            goal2Verbal: '',
            goal2Initiates: ''
        }, {
            goal2Category: 'Can make appointments with his/her doctor, dentist, or clinic when needed',
            goal2NA: <Label check> <Input type="checkbox" name="g2MakeAppointmentsNA" id="g2MakeAppointmentsNA" checked={this.state.fields["g2MakeAppointmentsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MakeAppointmentsNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2MakeAppointmentsPhysical" id="g2MakeAppointmentsPhysical" checked={this.state.fields["g2MakeAppointmentsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MakeAppointmentsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2MakeAppointmentsPhysical" id="g2MakeAppointmentsPhysical" checked={this.state.fields["g2MakeAppointmentsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MakeAppointmentsPhysical")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2MakeAppointmentsInitiates" id="g2MakeAppointmentsInitiates" checked={this.state.fields["g2MakeAppointmentsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2MakeAppointmentsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Avoids relationships that hurt or are dangerous',
            goal2NA: <Label check> <Input type="checkbox" name="g2HurtRelationshipsNA" id="g2HurtRelationshipsNA" checked={this.state.fields["g2HurtRelationshipsNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HurtRelationshipsNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2HurtRelationshipsPhysical" id="g2HurtRelationshipsPhysical" checked={this.state.fields["g2HurtRelationshipsPhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HurtRelationshipsPhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2HurtRelationshipsVerbal" id="g2HurtRelationshipsVerbal" checked={this.state.fields["g2HurtRelationshipsVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HurtRelationshipsVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2HurtRelationshipsInitiates" id="g2HurtRelationshipsInitiates" checked={this.state.fields["g2HurtRelationshipsInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2HurtRelationshipsInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to get a copy of his/her birth certificate',
            goal2NA: <Label check> <Input type="checkbox" name="g2BirthCertificateNA" id="g2BirthCertificateNA" checked={this.state.fields["g2BirthCertificateNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BirthCertificateNA")}/> N/A </Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2BirthCertificatePhysical" id="g2BirthCertificatePhysical" checked={this.state.fields["g2BirthCertificatePhysical"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BirthCertificatePhysical")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2BirthCertificateVerbal" id="g2BirthCertificateVerbal" checked={this.state.fields["g2BirthCertificateVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BirthCertificateVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2BirthCertificateInitiates" id="g2BirthCertificateInitiates" checked={this.state.fields["g2BirthCertificateInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2BirthCertificateInitiates")}/> Initiates Independently </Label>
        }, {
            goal2Category: 'Can explain how to get a copy of his/her Social Security card',
            goal2NA: <Label check> <Input type="checkbox" name="g2SocialSecurityCardNA" id="g2SocialSecurityCardNA" checked={this.state.fields["g2SocialSecurityCardNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialSecurityCardNA")}/> N/A</Label>,
            goal2Physical: <Label check> <Input type="checkbox" name="g2SocialSecurityCardPhysical" id="g2SocialSecurityCardPhysical" checked={this.state.fields["g2SocialSecurityCardNA"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialSecurityCardNA")}/> Physical Prompt </Label>,
            goal2Verbal: <Label check> <Input type="checkbox" name="g2SocialSecurityCardVerbal" id="g2SocialSecurityCardVerbal" checked={this.state.fields["g2SocialSecurityCardVerbal"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialSecurityCardVerbal")}/> Verbal Prompt</Label>,
            goal2Initiates: <Label check> <Input type="checkbox" name="g2SocialSecurityCardInitiates" id="g2SocialSecurityCardInitiates" checked={this.state.fields["g2SocialSecurityCardInitiates"] === "true"} onChange={this.handleChangeCheckbox.bind(this, "g2SocialSecurityCardInitiates")}/> Initiates Independently
            </Label>
        }];

        return (
            <fieldset id="/chai/section11">
                <div className={"section"}>Section 11: Independent Skills</div>
                <div>As part of the daily program at Jacob’s Ladder, our clients/students are learning and developing skills needed to successfully transition into adulthood.  Our goal is to assist you your family throughout your time at Jacob’s Ladder with meeting these skills by reinforcing them at school and home. In order for us to maintain cohesion across providers within their expectations, we ask that you complete the following questionnaire to better equip the JL Clinical Team with a thorough understanding of the client’s abilities.</div>
                <div className={"sub-section"}>Level One Goals:</div>
                <ReactTable
                    className={"level1GoalsTable -striped -highlight"}
                    data={level1GoalsData}
                    columns={this.state.level1GoalsColumns}
                    defaultPageSize={51}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <FormGroup>
                    <Label className="control-label space-between">Additional comments/goals:</Label>
                    <Input
                        type="text"
                        ref="g1Comments"
                        value={this.state.fields["g1Comments"] || ""}
                        onChange={this.handleChange.bind(this, "g1Comments")}
                        className="error"
                        invalid={this.state.errors["g1Comments"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["g1Comments"]}>{this.state.errors["g1Comments"]}
                    </FormFeedback>
                </FormGroup>
                <div className={"sub-section"}>Level Two Goals:</div>
                <Row>
                    <Label className={"important pl-3"}>Only complete Level 2 Goals if 75% of the above Life Skills are completed independently.</Label>
                </Row>
                <ReactTable
                    className={"level1GoalsTable -striped -highlight"}
                    data={level2GoalsData}
                    columns={this.state.level2GoalsColumns}
                    defaultPageSize={91}
                    showPagination={false}
                    getTheadProps={(state, rowInfo) => {
                        return {
                            style: {
                                background: "#E9E9E9",
                            }
                        }
                    }}
                    getTableProps={() => {
                        return {
                            style: {
                                background: "white",
                            }
                        }
                    }}
                />
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className={"space-between"}>
                                Any additional notes or comments about Section 11: Independent Skills?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section11Comments"
                                value={this.state.fields["section11Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section11Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection12() {
        return (
            <fieldset id="/chai/section12">
                <div className={"section"}>Section 12: Additional Information for Evaluation Day</div>
                <Row>
                    <Col>
                        <Label>
                            On the day of your evaluation, your child will complete a variety of assessments with a Jacob’s Ladder
                            Evaluator in our designated testing area. Parent(s) will complete an interview for collection of
                            pertinent information in a separate room. Children may transition between buildings with the
                            facilitation of the Evaluator to complete all components of the assessment.
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Does your child demonstrate challenges when working with an unknown provider?
                            </Label>
                            <Input
                                type="textarea"
                                ref="challengesWithUnknownProvider"
                                value={this.state.fields["challengesWithUnknownProvider"] || ""}
                                onChange={this.handleChange.bind(this, "challengesWithUnknownProvider")}
                                className="error"
                                invalid={this.state.errors["challengesWithUnknownProvider"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["challengesWithUnknownProvider"] }>{this.state.errors["challengesWithUnknownProvider"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Our Evaluation space is a large room with designated areas for desk work and mat work.
                                Do you have any concerns with your student in this type of room?
                            </Label>
                            <Input
                                type="textarea"
                                ref="concernsWithRoom"
                                value={this.state.fields["concernsWithRoom"] || ""}
                                onChange={this.handleChange.bind(this, "concernsWithRoom")}
                                className="error"
                                invalid={this.state.errors["concernsWithRoom"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["concernsWithRoom"] }>{this.state.errors["concernsWithRoom"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Our individual student workspaces are smaller cubbies with space for a desk and chairs,
                                allowing the student to focus on the task presented.
                                Do you have any concerns with your student in this type of room?

                            </Label>
                            <Input
                                type="textarea"
                                ref="concernsWithCubbies"
                                value={this.state.fields["concernsWithCubbies"] || ""}
                                onChange={this.handleChange.bind(this, "concernsWithCubbies")}
                                className="error"
                                invalid={this.state.errors["concernsWithCubbies"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["concernsWithCubbies"] }>{this.state.errors["concernsWithCubbies"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label className={"sub-section"}>Toileting Information</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Does your child initiate the restroom? If not, what are the signs?
                            </Label>
                            <Input
                                type="textarea"
                                ref="signsOfToilet"
                                value={this.state.fields["signsOfToilet"] || ""}
                                onChange={this.handleChange.bind(this, "signsOfToilet")}
                                className="error"
                                invalid={this.state.errors["signsOfToilet"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["signsOfToilet"] }>{this.state.errors["signsOfToilet"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                How often do you take your child to the restroom?
                            </Label>
                            <Input
                                type="textarea"
                                ref="amountOfRestroomUse"
                                value={this.state.fields["amountOfRestroomUse"] || ""}
                                onChange={this.handleChange.bind(this, "amountOfRestroomUse")}
                                className="error"
                                invalid={this.state.errors["amountOfRestroomUse"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["amountOfRestroomUse"] }>{this.state.errors["amountOfRestroomUse"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                What is the terminology in your home for going to the restroom? (“pee-pee”, “pooh-pooh,” etc.)
                            </Label>
                            <Input
                                type="textarea"
                                ref="restroomTerminology"
                                value={this.state.fields["restroomTerminology"] || ""}
                                onChange={this.handleChange.bind(this, "restroomTerminology")}
                                className="error"
                                invalid={this.state.errors["restroomTerminology"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["restroomTerminology"] }>{this.state.errors["restroomTerminology"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                How independent is your child in the restroom? What needs to be prompted?
                            </Label>
                            <Input
                                type="textarea"
                                ref="restroomIndependence"
                                value={this.state.fields["restroomIndependence"] || ""}
                                onChange={this.handleChange.bind(this, "restroomIndependence")}
                                className="error"
                                invalid={this.state.errors["restroomIndependence"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["restroomIndependence"] }>{this.state.errors["restroomIndependence"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label className={"sub-section"}>Feeding Information</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Will your child require a snack during the evaluation?
                                If so, provide a snack, time, and preparation instructions (i.e. temperature of food)
                            </Label>
                            <Input
                                type="textarea"
                                ref="snackDuringEval"
                                value={this.state.fields["snackDuringEval"] || ""}
                                onChange={this.handleChange.bind(this, "snackDuringEval")}
                                className="error"
                                invalid={this.state.errors["snackDuringEval"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["snackDuringEval"] }>{this.state.errors["snackDuringEval"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Are there any helpful techniques to use when serving your child’s food?
                            </Label>
                            <Input
                                type="textarea"
                                ref="techniquesDuringEating"
                                value={this.state.fields["techniquesDuringEating"] || ""}
                                onChange={this.handleChange.bind(this, "techniquesDuringEating")}
                                className="error"
                                invalid={this.state.errors["techniquesDuringEating"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["techniquesDuringEating"] }>{this.state.errors["techniquesDuringEating"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Is your child independent with eating? If not, how much assistance is needed?
                            </Label>
                            <Input
                                type="textarea"
                                ref="eatingIndependence"
                                value={this.state.fields["eatingIndependence"] || ""}
                                onChange={this.handleChange.bind(this, "eatingIndependence")}
                                className="error"
                                invalid={this.state.errors["eatingIndependence"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["eatingIndependence"] }>{this.state.errors["eatingIndependence"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>

                </Row>

                <Row>
                    <Col>
                        <Label className={"sub-section"}>Medical Information</Label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Will your child require the administration of medication during the evaluation?
                                If so, provide detailed instructions below and bring the medication with you on the day of the evaluation.
                            </Label>
                            <Input
                                type="textarea"
                                ref="medicationDuringEval"
                                value={this.state.fields["medicationDuringEval"] || ""}
                                onChange={this.handleChange.bind(this, "medicationDuringEval")}
                                className="error"
                                invalid={this.state.errors["medicationDuringEval"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["medicationDuringEval"] }>{this.state.errors["medicationDuringEval"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label className={"sub-section"}>Medical Protocol</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>
                            The following information will assist the Jacob’s Ladder staff in caring for your child’s medical needs.
                            Please complete the following questions for each condition.
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label className={"sub-section"}>Rescue Medication / Epi-Pen</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                List any condition(s) that would require the use of rescue medications,
                                as well as any additional information that would be helpful for the Jacob’s
                                Ladder Team to be aware of during the evaluation time.
                                Include name of medication, frequency, and how to administer.
                            </Label>
                            <Input
                                type="textarea"
                                ref="conditionsWithRescueMedication"
                                value={this.state.fields["conditionsWithRescueMedication"] || ""}
                                onChange={this.handleChange.bind(this, "conditionsWithRescueMedication")}
                                className="error"
                                invalid={this.state.errors["conditionsWithRescueMedication"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["conditionsWithRescueMedication"] }>{this.state.errors["conditionsWithRescueMedication"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Should any particular allergic reaction be watch for?
                                (i.e. swelling, hives, redness, rapid breathing, etc?)
                            </Label>
                            <Input
                                type="textarea"
                                ref="allergicReaction"
                                value={this.state.fields["allergicReaction"] || ""}
                                onChange={this.handleChange.bind(this, "allergicReaction")}
                                className="error"
                                invalid={this.state.errors["allergicReaction"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["allergicReaction"] }>{this.state.errors["allergicReaction"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label className={"sub-section"}>Seizure History/Protocol</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Label>
                            Jacob’s Ladder seizure protocols are our standard operating procedure and are only
                            superseded by written protocols from a qualified medical professional or a qualified
                            medical profession on site (i.e EMS).
                        </Label>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Label className={"important"}>
                            The Jacob’s Ladder seizure protocol is as follows: <br/>
                            1. Roll to side and ensure airway is clear <br/>
                            2. If seizure activity is persistent for 5 minutes, then administer rescue medication. <br/>
                            3. If seizure has not stopped within 5 minutes of administering rescue medication, call 911.
                        </Label>
                    </Col>
                </Row>

                <div>
                    <p className={"control-label required"} >Does your child have a history of seizures? If "Yes", please complete the questions below. </p>
                    <FormGroup check>
                        <Label check onChange={this.toggleSeizures.bind(this)}>

                            <Input ref = "seizureCheckYes" type="checkbox"/>
                            Yes
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>

                            <Input ref = "seizureCheckNo" type="checkbox"/>
                            No
                        </Label>
                    </FormGroup>
                </div>
                <Collapse isOpen={this.state.seizures}>
                    <Card className={"toggle-card"}>
                        <CardBody className={"toggle-card-body"}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>History of Condition</Label>
                            <Input
                                type="textarea"
                                ref="seizureHistory"
                                value={this.state.fields["seizureHistory"] || ""}
                                onChange={this.handleChange.bind(this, "seizureHistory")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>What to look for/Precursor signs of a seizure</Label>
                            <Input
                                type="textarea"
                                ref="signsOfSeizure"
                                value={this.state.fields["signsOfSeizure"] || ""}
                                onChange={this.handleChange.bind(this, "signsOfSeizure")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Protocol to follow </Label>
                            <Label className={"additional-note"}>
                                If this varies greatly from the protocol stated above, provide a written approval
                                from a qualified medical professional.
                            </Label>
                            <Input
                                type="textarea"
                                ref="otherSeizureProtocol"
                                value={this.state.fields["otherSeizureProtocol"] || ""}
                                onChange={this.handleChange.bind(this, "otherSeizureProtocol")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Last seizure occurrence</Label>
                            <Input
                                type="textarea"
                                ref="lastSeizure"
                                value={this.state.fields["lastSeizure"] || ""}
                                onChange={this.handleChange.bind(this, "lastSeizure")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Frequency of seizure occurrence</Label>
                            <Input
                                type="textarea"
                                ref="seizureFrequency"
                                value={this.state.fields["seizureFrequency"] || ""}
                                onChange={this.handleChange.bind(this, "seizureFrequency")}/>
                        </FormGroup>
                    </Col>
                </Row>
                        </CardBody>
                    </Card>
                </Collapse>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>
                                Any additional notes or comments about Section 12: Additional Information for Evaluation Day?
                            </Label>
                            <Input
                                type="textarea"
                                ref="section12Comments"
                                value={this.state.fields["section12Comments"] || ""}
                                onChange={this.handleChange.bind(this, "section12Comments")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection13() {
        return (
            <fieldset id="/chai/section13">
                <div className={"section"}>Section 13: Goals and Additional Information</div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                How did you hear about us?
                            </Label>
                            <Input
                                type="textarea"
                                ref="hearAboutJL"
                                value={this.state.fields["hearAboutJL"] || ""}
                                onChange={this.handleChange.bind(this, "hearAboutJL")}
                                className="error"
                                invalid={this.state.errors["hearAboutJL"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["hearAboutJL"] }>{this.state.errors["hearAboutJL"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                What are your goals and expectations at Jacob’s Ladder?
                            </Label>
                            <Input
                                type="textarea"
                                ref="goalsAndExpectations"
                                value={this.state.fields["goalsAndExpectations"] || ""}
                                onChange={this.handleChange.bind(this, "goalsAndExpectations")}
                                className="error"
                                invalid={this.state.errors["goalsAndExpectations"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["goalsAndExpectations"] }>{this.state.errors["goalsAndExpectations"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                What placement or enrollment in therapy services are you interested in after completing
                                your evaluation? Include preferred start date and preferred schedule
                                (refer to the registration forms for specific schedule options).
                            </Label>
                            <Input
                                type="textarea"
                                ref="enrollmentAfterEval"
                                value={this.state.fields["enrollmentAfterEval"] || ""}
                                onChange={this.handleChange.bind(this, "enrollmentAfterEval")}
                                className="error"
                                invalid={this.state.errors["enrollmentAfterEval"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["enrollmentAfterEval"] }>{this.state.errors["enrollmentAfterEval"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">
                                Anything else you would like to tell us about your family and/or child?
                            </Label>
                            <Input
                                type="textarea"
                                ref="additionalInfoAboutChild"
                                value={this.state.fields["additionalInfoAboutChild"] || ""}
                                onChange={this.handleChange.bind(this, "additionalInfoAboutChild")}
                                className="error"
                                invalid={this.state.errors["additionalInfoAboutChild"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["additionalInfoAboutChild"] }>{this.state.errors["additionalInfoAboutChild"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>

            </fieldset>

        );
    }

    renderSection14() {
        return (
            <fieldset id="/chai/section14">
                <hr></hr>
                <div className={"section"}>Section 14: Signature</div>
                <Row>
                    <Col>
                        <Label>In addition to completing this form, submit a copy of all past evaluations (Psych, OT,
                            SLP, Educational, Behavioral, etc.). The additional sections of the enrollment
                            paperwork must also be completed
                        </Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup className={"pl-4"}>
                            <Input type="checkbox"
                                   ref="consentCheck"
                                   checked={this.state.fields["consentCheck"] === "true"}
                                   onChange={this.handleChangeCheckbox.bind(this, "consentCheck")}
                                   className="error"
                                   invalid={this.state.errors["consentCheck"] != null}/>
                            <FormFeedback
                                invalid={this.state.errors["consentCheck"]}>{this.state.errors["consentCheck"]}
                            </FormFeedback>
                            <Label className={"checkBox control-label required"}>
                                I acknowledge that I have read and completed this information to the best of my knowledge and ability.
                            </Label>

                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required" sm={12}>Student Name</Label>
                            <Input
                                type="text"
                                ref="studentName"
                                value={this.state.fields["studentName"] || ""}
                                onChange={this.handleChange.bind(this, "studentName")}
                                className="error"
                                invalid={this.state.errors["studentName"] != null}/>
                            <FormFeedback invalid={this.state.errors["studentName"]}>
                                {this.state.errors["studentName"]}
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required" sm={12}>Parent/Guardian Name</Label>
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
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required" sm={12}>Date</Label>
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
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }


    render() {
        return (
            <div>
                <Header loggedIn={true}/>

                <div className="form-title" >
                    <div className="row">
                        <a className="parent-top col-9">
                            <h2 className={"header-print"}>Client History and Information</h2>
                        </a>
                        <div className={"col-3"}>

                            <button className="print-button" onClick={() => window.print()}>Print</button>

                        </div>

                    </div>


                </div>
                <Row>
                    <Col className={"col-2"}>
                        <div id={"navbar"}> {this.renderNavbar()} </div>
                    </Col>
                    <Col>
                        <div className={"frame p-4 print-form"}>

                            <div> {this.renderSection1()} </div>
                            <div> {this.renderSection2()} </div>
                            <div> {this.renderSection3()} </div>
                            <div> {this.renderSection4()} </div>
                            <div> {this.renderSection5()} </div>
                            <div> {this.renderSection6()} </div>
                            <div> {this.renderSection7()} </div>
                            <div> {this.renderSection8()} </div>
                            <div> {this.renderSection9()} </div>
                            <div> {this.renderSection10()} </div>
                            <div> {this.renderSection11()} </div>
                            <div> {this.renderSection12()} </div>
                            <div> {this.renderSection13()} </div>
                            <div> {this.renderSection14()} </div>

                        </div>
                    </Col>

                </Row>


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


export default ClientHistoryAndInformation;
