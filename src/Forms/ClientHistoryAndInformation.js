import React, { Component } from 'react';
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
            siblingData: [{
                name: <input type="text" name="sib1Name"/>,
                age: <input type="text" name="sib1Age"/>,
                gender: <input type="text" name="sib1Gender"/>,
            }, {
                name: <input type="text" name="sib2Name"/>,
                age: <input type="text" name="sib2Age"/>,
                gender: <input type="text" name="sib2Gender"/>,
            }, {
                name: <input type="text" name="sib3Name"/>,
                age: <input type="text" name="sib3Age"/>,
                gender: <input type="text" name="sib3Gender"/>,
            }, {
                name: <input type="text" name="sib4Name"/>,
                age: <input type="text" name="sib4Age"/>,
                gender: <input type="text" name="sib4Gender"/>,
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
                Header: 'Not Yet Developed',
                accessor: 'devHistoryNa'
            }],
            devHistoryData: [{
                devHistoryActivity: 'Crawled on stomach',
                devHistoryYears: <Input type="select"
                                        name="crawlYears"
                                        id="crawlYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="crawlMonths"
                                         id="crawlMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                           name="crawlNa"
                           id="crawlNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Crept on hands and knees',
                devHistoryYears: <Input type="select"
                                        name="creptYears"
                                        id="creptYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                               name="creptMonths"
                               id="creptMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="creptNa"
                                     id="creptNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Walked',
                devHistoryYears: <Input type="select"
                                        name="walkYears"
                                        id="walkYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="walkMonths"
                                         id="walkMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="walkNa"
                                     id="walkNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Toilet trained',
                devHistoryYears: <Input type="select"
                                        name="toiletYears"
                                        id="toiletYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="toiletMonths"
                                         id="toiletMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="toiletNa"
                                     id="toiletNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'First word',
                devHistoryYears: <Input type="select"
                                        name="wordYears"
                                        id="wordYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="wordMonths"
                                         id="wordMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="wordNa"
                                     id="wordNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Use of couplets (2 words together)',
                devHistoryYears: <Input type="select"
                                        name="coupletYears"
                                        id="coupletYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="coupletMonths"
                                         id="coupletMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="coupletNa"
                                     id="coupletNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: '3-4 word phrases',
                devHistoryYears: <Input type="select"
                                        name="phraseYears"
                                        id="phraseYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="phraseMonths"
                                         id="phraseMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="phraseNa"
                                     id="phraseNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Sentences',
                devHistoryYears: <Input type="select"
                                        name="sentenceYears"
                                        id="sentenceYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="sentenceMonths"
                                         id="sentenceMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="sentenceNa"
                                     id="sentenceNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Conversational language',
                devHistoryYears: <Input type="select"
                                        name="conversationYears"
                                        id="conversationYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="conversationMonths"
                                         id="conversationMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="conversationNa"
                                     id="conversationNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
            }, {
                devHistoryActivity: 'Reading',
                devHistoryYears: <Input type="select"
                                        name="readYears"
                                        id="readYears">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19+</option>
                </Input>,
                devHistoryMonths: <Input type="select"
                                         name="readMonths"
                                         id="readMonths">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </Input>,
                devHistoryNa: <Input type="select"
                                     name="readNa"
                                     id="readNa">
                    <option></option>
                    <option>true</option>
                    <option>false</option>
                </Input>
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
                Header: 'Schedule of Service',
                accessor: 'otherDrSched'
            }],
            otherDoctorsData: [{
                otherDrName: <input type="text" name="doc1Name"/>,
                otherDrSpecialty: <input type="text" name="doc1Specialty"/>,
                otherDrPhone: <input type="text" name="doc1Phone"/>,
                otherDrSched: <input type="text" name="doc1Sched"/>
            }, {
                otherDrName: <input type="text" name="doc2Name"/>,
                otherDrSpecialty: <input type="text" name="doc2Specialty"/>,
                otherDrPhone: <input type="text" name="doc2Phone"/>,
                otherDrSched: <input type="text" name="doc2Sched"/>
            }, {
                otherDrName: <input type="text" name="doc3Name"/>,
                otherDrSpecialty: <input type="text" name="doc3Specialty"/>,
                otherDrPhone: <input type="text" name="doc3Phone"/>,
                otherDrSched: <input type="text" name="doc3Sched"/>
            }, {
                otherDrName: <input type="text" name="doc4Name"/>,
                otherDrSpecialty: <input type="text" name="doc4Specialty"/>,
                otherDrPhone: <input type="text" name="doc4Phone"/>,
                otherDrSched: <input type="text" name="doc4Sched"/>
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
            otherProgramsData: [{
                programName: <input type="text" name="program1name"/>,
                startDate: <input type="date" name="startdate1"/>,
                provider: <input type="text" name="provider1"/>,
                programPhoneNumber: <input type="tel" name="phonenumber1"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission1"
                                          id="contactpermission1">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program2name"/>,
                startDate: <input type="date" name="startdate2"/>,
                provider: <input type="text" name="provider2"/>,
                programPhoneNumber: <input type="tel" name="phonenumber2"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission2"
                                          id="contactpermission2">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program3name"/>,
                startDate: <input type="date" name="startdate3"/>,
                provider: <input type="text" name="provider3"/>,
                programPhoneNumber: <input type="tel" name="phonenumber3"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission3"
                                          id="contactpermission3">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                programName: <input type="text" name="program4name"/>,
                startDate: <input type="date" name="startdate4"/>,
                provider: <input type="text" name="provider4"/>,
                programPhoneNumber: <input type="tel" name="phonenumber4"/>,
                contactPermission: <Input type="select"
                                          name="contactpermission4"
                                          id="contactpermission4">
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            medicalConditionsColumns: [{
                Header: 'Medical Condition',
                accessor: 'medCondition'
            }, {
                Header: 'Select Yes or No',
                accessor: 'medConditionYN'
            }],
            medicalConditionsData: [{
                medCondition: 'Epilepsy/Seizures',
                medConditionYN: <Input type="select"
                                       name="epilepsy"
                                       id="epilepsy">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Diabetes',
                medConditionYN: <Input type="select"
                                       name="diabetes"
                                       id="diabetes">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Asthma',
                medConditionYN: <Input type="select"
                                       name="asthma"
                                       id="asthma">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Uses an Epi-Pen',
                medConditionYN: <Input type="select"
                                       name="epipen"
                                       id="epipen">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                medCondition: 'Other (please list in the box below)',
                medConditionYN: <Input type="select"
                                       name="medConditionOther"
                                       id="medConditionOther">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            suppliesColumns: [{
                Header: 'Supplies/Equipment',
                accessor: 'supplies'
            }, {
                Header: 'Select Yes or No',
                accessor: 'suppliesYN'
            }],
            suppliesData: [{
                supplies: 'Braces/Splints',
                suppliesYN: <Input type="select"
                                   name="brace"
                                   id="brace">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Feeding Support & Supplies',
                suppliesYN: <Input type="select"
                                   name="feedSupport"
                                   id="feedSupport">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Toileting Equipment',
                suppliesYN: <Input type="select"
                                   name="toiletEquip"
                                   id="toiletEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Mobility Equipment',
                suppliesYN: <Input type="select"
                                   name="mobilityEquip"
                                   id="mobilityEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Communication Equipment',
                suppliesYN: <Input type="select"
                                   name="communicationEquip"
                                   id="communicationEquip">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Oxygen Tank',
                suppliesYN: <Input type="select"
                                   name="oxygenTank"
                                   id="oxygenTank">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Hearing Device',
                suppliesYN: <Input type="select"
                                   name="hearingDevice"
                                   id="hearingDevice">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                supplies: 'Other',
                suppliesYN: <Input type="select"
                                   name="otherSupply"
                                   id="otherSupply">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
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
            medsData: [{
                medsName: <input type="text" name="med1Name"/>,
                medsDosage: <input type="text" name="med1Dosage"/>,
                medsTimeGiven: <input type="text" name="med1TimeGiven"/>,
                medsFrequency: <input type="text" name="med1Frequency"/>,
                medsPurpose: <input type="text" name="med1Purpose"/>,
                medsSideEffects: <input type="text" name="med1SideEffects"/>
            }, {
                medsName: <input type="text" name="med2Name"/>,
                medsDosage: <input type="text" name="med2Dosage"/>,
                medsTimeGiven: <input type="text" name="med2TimeGiven"/>,
                medsFrequency: <input type="text" name="med2Frequency"/>,
                medsPurpose: <input type="text" name="med2Purpose"/>,
                medsSideEffects: <input type="text" name="med2SideEffects"/>
            }, {
                medsName: <input type="text" name="med3Name"/>,
                medsDosage: <input type="text" name="med3Dosage"/>,
                medsTimeGiven: <input type="text" name="med3TimeGiven"/>,
                medsFrequency: <input type="text" name="med3Frequency"/>,
                medsPurpose: <input type="text" name="med3Purpose"/>,
                medsSideEffects: <input type="text" name="med3SideEffects"/>
            }, {
                medsName: <input type="text" name="med4Name"/>,
                medsDosage: <input type="text" name="med4Dosage"/>,
                medsTimeGiven: <input type="text" name="med4TimeGiven"/>,
                medsFrequency: <input type="text" name="med4Frequency"/>,
                medsPurpose: <input type="text" name="med4Purpose"/>,
                medsSideEffects: <input type="text" name="med4SideEffects"/>
            }, {
                medsName: <input type="text" name="med5Name"/>,
                medsDosage: <input type="text" name="med5Dosage"/>,
                medsTimeGiven: <input type="text" name="med5TimeGiven"/>,
                medsFrequency: <input type="text" name="med5Frequency"/>,
                medsPurpose: <input type="text" name="med5Purpose"/>,
                medsSideEffects: <input type="text" name="med5SideEffects"/>
            }, {
                medsName: <input type="text" name="med6Name"/>,
                medsDosage: <input type="text" name="med6Dosage"/>,
                medsTimeGiven: <input type="text" name="med6TimeGiven"/>,
                medsFrequency: <input type="text" name="med6Frequency"/>,
                medsPurpose: <input type="text" name="med6Purpose"/>,
                medsSideEffects: <input type="text" name="med6SideEffects"/>
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
            }, {
                Header: 'Report Included (Please select Yes or No',
                accessor: 'testReport'
            }],
            testingData: [{
                testDate: <input type="date" name="test1Date"/>,
                testExaminer: <input type="text" name="test1Examiner"/>,
                testDiagnosis: <input type="text" name="test1Diagnosis"/>,
                testReco: <input type="text" name="test1Reco"/>,
                testReport: <Input type="select"
                                   name="test1Report"
                                   id="test1Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test2Date"/>,
                testExaminer: <input type="text" name="test2Examiner"/>,
                testDiagnosis: <input type="text" name="test2Diagnosis"/>,
                testReco: <input type="text" name="test2Reco"/>,
                testReport: <Input type="select"
                                   name="test2Report"
                                   id="test2Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test3Date"/>,
                testExaminer: <input type="text" name="test3Examiner"/>,
                testDiagnosis: <input type="text" name="test3Diagnosis"/>,
                testReco: <input type="text" name="test3Reco"/>,
                testReport: <Input type="select"
                                   name="test3Report"
                                   id="test3Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test4Date"/>,
                testExaminer: <input type="text" name="test4Examiner"/>,
                testDiagnosis: <input type="text" name="test4Diagnosis"/>,
                testReco: <input type="text" name="test4Reco"/>,
                testReport: <Input type="select"
                                   name="test4Report"
                                   id="test4Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test5Date"/>,
                testExaminer: <input type="text" name="test5Examiner"/>,
                testDiagnosis: <input type="text" name="test5Diagnosis"/>,
                testReco: <input type="text" name="test5Reco"/>,
                testReport: <Input type="select"
                                   name="test5Report"
                                   id="test5Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }, {
                testDate: <input type="date" name="test6Date"/>,
                testExaminer: <input type="text" name="test6Examiner"/>,
                testDiagnosis: <input type="text" name="test6Diagnosis"/>,
                testReco: <input type="text" name="test6Reco"/>,
                testReport: <Input type="select"
                                   name="test6Report"
                                   id="test6Report">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            foodGroupColumns: [{
                Header: 'Food Group',
                accessor: 'foodGroup'
            }, {
                Header: '',
                accessor: 'foodExcessive'
            }, {
                Header: '',
                accessor: 'foodDaily'
            }, {
                Header: '',
                accessor: 'foodWeekly'
            }, {
                Header: '',
                accessor: 'foodRarely'
            }, {
                Header: '',
                accessor: 'foodNever'
            }],
            foodGroupData: [{
                foodGroup: 'Vegetables',
                foodExcessive: <Label check> <Input type="checkbox" name="vegetableExcess" id="vegetableExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="vegetableDaily" id="vegetableDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="vegetableWeekly" id="vegetableWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="vegetableRarely" id="vegetableRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="vegetableNever" id="vegetableNever"/> Never </Label>
            }, {
                foodGroup: 'Fruits',
                foodExcessive: <Label check> <Input type="checkbox" name="fruitExcess" id="fruitExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="fruitDaily" id="fruitDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="fruitWeekly" id="fruitWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="fruitRarely" id="fruitRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="fruitNever" id="fruitNever"/> Never </Label>
            }, {
                foodGroup: 'Meats',
                foodExcessive: <Label check> <Input type="checkbox" name="meatExcess" id="meatExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="meatDaily" id="meatDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="meatWeekly" id="meatWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="meatRarely" id="meatRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="meatNever" id="meatNever"/> Never </Label>
            }, {
                foodGroup: 'Sugar',
                foodExcessive: <Label check> <Input type="checkbox" name="sugarExcess" id="sugarExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="sugarDaily" id="sugarDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="sugarWeekly" id="sugarWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="sugarRarely" id="sugarRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="sugarNever" id="sugarNever"/> Never </Label>
            }, {
                foodGroup: 'Artificial Sweetener',
                foodExcessive: <Label check> <Input type="checkbox" name="artSweetenerExcess" id="artSweetenerExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="artSweetenerDaily" id="artSweetenerDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="artSweetenerWeekly" id="artSweetenerWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="artSweetenerRarely" id="artSweetenerRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="artSweetenerNever" id="artSweetenerNever"/> Never </Label>
            }, {
                foodGroup: 'Artificial Products',
                foodExcessive: <Label check> <Input type="checkbox" name="artProductsExcess" id="artProductsExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="artProductsDaily" id="artProductsDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="artProductsWeekly" id="artProductsWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="artProductsRarely" id="artProductsRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="artProductsNever" id="artProductsNever"/> Never </Label>
            }, {
                foodGroup: 'Dairy Products',
                foodExcessive: <Label check> <Input type="checkbox" name="dairyExcess" id="dairyExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="dairyDaily" id="dairyDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="dairyWeekly" id="dairyWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="dairyRarely" id="dairyRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="dairyNever" id="dairyNever"/> Never </Label>
            }, {
                foodGroup: 'White Flour',
                foodExcessive: <Label check> <Input type="checkbox" name="flourExcess" id="flourExcess"/> Excessive </Label>,
                foodDaily: <Label check> <Input type="checkbox" name="flourDaily" id="flourDaily"/> Daily </Label>,
                foodWeekly: <Label check> <Input type="checkbox" name="flourWeekly" id="flourWeekly"/> Weekly </Label>,
                foodRarely: <Label check> <Input type="checkbox" name="flourRarely" id="flourRarely"/> Rarely </Label>,
                foodNever: <Label check> <Input type="checkbox" name="flourNever" id="flourNever"/> Never </Label>
            }],
            physicalMotorColumns: [{
                Header: '',
                accessor: 'physicalMotor'
            }, {
                Header: 'Select Yes or No',
                accessor: 'physicalMotorYN'
            }],
            physicalMotorData: [{
                physicalMotor: 'Low muscle tone',
                physicalMotorYN: <Input type="select"
                                        name="lowMuscleTone"
                                        id="lowMuscleTone">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'High muscle tone',
                physicalMotorYN: <Input type="select"
                                        name="highMuscleTone"
                                        id="highMuscleTone">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Coordination challenges',
                physicalMotorYN: <Input type="select"
                                        name="coordination"
                                        id="coordination">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Crawling challenges',
                physicalMotorYN: <Input type="select"
                                        name="crawling"
                                        id="crawling">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Walking challenges',
                physicalMotorYN: <Input type="select"
                                        name="walking"
                                        id="walking">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Running challenges',
                physicalMotorYN: <Input type="select"
                                        name="running"
                                        id="running">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Athetoid movement',
                physicalMotorYN: <Input type="select"
                                        name="athetoid"
                                        id="athetoid">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Ataxic',
                physicalMotorYN: <Input type="select"
                                        name="ataxic"
                                        id="ataxic">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Weak',
                physicalMotorYN: <Input type="select"
                                        name="weak"
                                        id="weak">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Balance challenges',
                physicalMotorYN: <Input type="select"
                                        name="balance"
                                        id="balance">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                physicalMotor: 'Other',
                physicalMotorYN: <Input type="select"
                                        name="otherPhysicalMotor"
                                        id="otherPhysicalMotor">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                </Input>
            }],
            handPreferenceColumns: [{
                Header: 'Activity',
                accessor: 'activityHandPreference'
            }, {
                Header: 'Hand Preference',
                accessor: 'handPreference'
            }],
            handPreferenceData: [{
                activityHandPreference: "Writing",
                handPreference: <Input type="select"
                                       name="handPreference1"
                                       id="handPreference1">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Eating",
                handPreference: <Input type="select"
                                       name="handPreference2"
                                       id="handPreference2">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Throwing",
                handPreference: <Input type="select"
                                       name="handPreference3"
                                       id="handPreference3">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Brushing Teeth",
                handPreference: <Input type="select"
                                       name="handPreference4"
                                       id="handPreference4">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Combing Hair",
                handPreference: <Input type="select"
                                       name="handPreference5"
                                       id="handPreference5">
                    <option>N/A</option>
                    <option>Right</option>
                    <option>Left</option>
                    <option>Mixed</option>
                </Input>
            }, {
                activityHandPreference: "Other",
                handPreference: <Input type="text"
                                       placeholder="If other, please explain"
                                       name="handPreference6"
                                       id="handPreference6">

                </Input>
            }],
            skillsColumns: [{
                Header: 'Skill',
                accessor: 'skill'
            }, {
                Header: 'Check all that apply',
                accessor: 'checkApplied'
            }],
            skillsData: [{
                skill: "Poor Pencil Grip",
                checkApplied: <Input type="select"
                                     name="skill1"
                                     id="skill1">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Sloppy Writing",
                checkApplied: <Input type="select"
                                     name="skill2"
                                     id="skill2">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Letter Reversals",
                checkApplied: <Input type="select"
                                     name="skill3"
                                     id="skill3">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Right/Left Confusion",
                checkApplied: <Input type="select"
                                     name="skill4"
                                     id="skill4">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Poor reading ability",
                checkApplied: <Input type="select"
                                     name="skill5"
                                     id="skill5">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Computation Challenges",
                checkApplied: <Input type="select"
                                     name="skill6"
                                     id="skill6">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Concept Challenges",
                checkApplied: <Input type="select"
                                     name="skill7"
                                     id="skill7">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Word Problem Challenges",
                checkApplied: <Input type="select"
                                     name="skill8"
                                     id="skill8">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Math Logic Challenges",
                checkApplied: <Input type="select"
                                     name="skill9"
                                     id="skill9">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>
                </Input>
            }, {
                skill: "Other related Challenges",
                checkApplied: <Input type="text"
                                     name="skill10"
                                     id="skill10"
                                     placeholder="Please Explain">
                </Input>
            }],
            communicationProblemsColumns: [{
                Header: 'Issue',
                accessor: 'communicationIssue'
            }, {
                Header: 'Yes/No/Not Sure',
                accessor: 'communicationResponse'
            }],
            communicationProblemsData: [{
                communicationIssue: "Articulation Problems",
                communicationResponse: <Input type="select"
                                   name="communicationIssue1"
                                   id="communicationIssue1">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            },{communicationIssue: "Stammer or Stutter",
                communicationResponse: <Input type="select"
                                              name="communicationIssue2"
                                              id="communicationIssue2">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            }, {
                communicationIssue: "Aphasia",
                communicationResponse: <Input type="select"
                                              name="communicationIssue3"
                                              id="communicationIssue3">
                    <option></option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not Sure</option>

                </Input>
            }],
            level1GoalsColumns: [{
                Header: 'Level of Completion',
                accessor: 'goal1Category'
            }, {
                Header: '',
                accessor: 'goal1NA',
                width: 100
            }, {
                Header: '',
                accessor: 'goal1Physical',
                width: 250
            }, {
                Header: '',
                accessor: 'goal1Verbal',
                width: 250
            }, {
                Header: '',
                accessor: 'goal1Initiates',
                width: 250
            }],
            level1GoalsData: [{
                goal1Category: 'Attending Skills',
                goal1NA: '',
                goal1Physical: '',
                goal1Verbal: '',
                goal1Initiates: ''
            }, {
                goal1Category: 'Sits in chair independently',
                goal1NA: <Label check> <Input type="checkbox" name="g1SitNA" id="g1SitNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SitPhysical" id="g1SitPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SitVerbal" id="g1SitVerbal"/> Verbal Prompt</Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SitInitiates" id="g1SitInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Attends to a task >5 minutes',
                goal1NA: <Label check> <Input type="checkbox" name="g1AttendTaskLongNA" id="g1AttendTaskLongNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1AttendTaskLongPhysical" id="g1AttendTaskLongPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1AttendTaskLongVerbal" id="g1AttendTaskLongVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1AttendTaskLongInitiates" id="g1AttendTaskLongInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Attends to a task <5 minutes',
                goal1NA: <Label check> <Input type="checkbox" name="g1AttendTaskShortNA" id="g1AttendTaskShortNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1AttendTaskShortPhysical" id="g1AttendTaskShortPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1AttendTaskShortVerbal" id="g1AttendTaskShortVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1AttendTaskShortInitiates" id="g1AttendTaskShortInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Makes eye contact',
                goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactNA" id="g1EyeContactNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactPhysical" id="g1EyeContactPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactVerbal" id="g1EyeContactVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactInitiates" id="g1EyeContactInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Sustains eye contact in response to name',
                goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactNameNA" id="g1EyeContactNameNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactNamePhysical" id="g1EyeContactNamePhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactNameVerbal" id="g1EyeContactNameVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactNameInitiates" id="g1EyeContactNameInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Makes eye contact during group instruction',
                goal1NA: <Label check> <Input type="checkbox" name="g1EyeContactGroupNA" id="g1EyeContactGroupNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1EyeContactGroupPhysical" id="g1EyeContactGroupPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1EyeContactGroupVerbal" id="g1EyeContactGroupVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1EyeContactGroupInitiates" id="g1EyeContactGroupInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Communication Skills',
                goal1NA: '',
                goal1Physical: '',
                goal1Verbal: '',
                goal1Initiates: ''
            }, {
                goal1Category: 'Communicates wants and needs',
                goal1NA: <Label check> <Input type="checkbox" name="g1WantsNeedsNA" id="g1WantsNeedsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1WantsNeedsPhysical" id="g1WantsNeedsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1WantsNeedsVerbal" id="g1WantsNeedsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1WantsNeedsInitiates" id="g1WantsNeedsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Answers simple social questions',
                goal1NA: <Label check> <Input type="checkbox" name="g1SocialQsNA" id="g1socialQsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SocialQsPhysical" id="g1SocialQsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SocialQsVerbal" id="g1SocialQsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SocialQsInitiates" id="g1SocialQsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Answers simple interference-based questions',
                goal1NA: <Label check> <Input type="checkbox" name="g1InterferenceQsNA" id="g1InterferenceQsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1InterferenceQsPhysical" id="g1InterferenceQsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1InterferenceQsVerbal" id="g1InterferenceQsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1InterferenceQsInitiates" id="g1InterferenceQsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Reciprocates conversation',
                goal1NA: <Label check> <Input type="checkbox" name="g1ReciprocateConversationNA" id="g1ReciprocateConversationNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ReciprocateConversationPhysical" id="g1ReciprocateConversationPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ReciprocateConversationVerbal" id="g1ReciprocateConversationVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ReciprocateConversationInitiates" id="g1ReciprocateConversationInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Maintains conversation',
                goal1NA: <Label check> <Input type="checkbox" name="g1MaintainConversationNA" id="g1MaintainConversationNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1MaintainConversationPhysical" id="g1MaintainConversationPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1MaintainConversationVerbal" id="g1MaintainConversationVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1MaintainConversationInitiates" id="g1MaintainConversationInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Has conversations using original thought',
                goal1NA: <Label check> <Input type="checkbox" name="g1OriginalConversationNA" id="g1OriginalConversationNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1OriginalConversationPhysical" id="g1OriginalConversationPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1OriginalConversationVerbal" id="g1OriginalConversationVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1OriginalConversationInitiates" id="g1OriginalConversationInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Independent Skills',
                goal1NA: '',
                goal1Physical: '',
                goal1Verbal: '',
                goal1Initiates: ''
            }, {
                goal1Category: 'Goes to designated person/place within the room',
                goal1NA: <Label check> <Input type="checkbox" name="g1WithinRoomNA" id="g1WithinRoomNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1WithinRoomPhysical" id="g1WithinRoomPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1WithinRoomVerbal" id="g1WithinRoomVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1WithinRoomInitiates" id="g1WithinRoomInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Goes to designated person/place in another room',
                goal1NA: <Label check> <Input type="checkbox" name="g1AnotherRoomNA" id="g1AnotherRoomNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1AnotherRoomPhysical" id="g1AnotherRoomPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1AnotherRoomVerbal" id="g1AnotherRoomVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1AnotherRoomInitiates" id="g1AnotherRoomInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Able to complete task independently >5 minutes',
                goal1NA: <Label check> <Input type="checkbox" name="g1IndTaskLongNA" id="g1IndTaskLongNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1IndTaskLongPhysical" id="g1IndTaskLongPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1IndTaskLongVerbal" id="g1IndTaskLongVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1IndTaskLongInitiates" id="g1IndTaskLongInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Able to complete task independently <5 minutes',
                goal1NA: <Label check> <Input type="checkbox" name="g1IndTaskShortNA" id="g1IndTaskShortNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1IndTaskShortPhysical" id="g1IndTaskShortPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1IndTaskShortVerbal" id="g1IndTaskShortVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1IndTaskShortInitiates" id="g1IndTaskShortInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Able to organize materials within and for simple tasks and execute them independently',
                goal1NA: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsNA" id="g1OrganizeMaterialsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsPhysical" id="g1OrganizeMaterialsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsVerbal" id="g1OrganizeMaterialsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1OrganizeMaterialsInitiates" id="g1OrganizeMaterialsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Able to organize/prioritize simple progression of tasks (ex. Prioritizing homework with different due dates- doing what is due first, then second, etc.)',
                goal1NA: <Label check> <Input type="checkbox" name="g1OrganizeTasksNA" id="g1OrganizeTasksNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1OrganizeTasksPhysical" id="g1OrganizeTasksPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1OrganizeTasksVerbal" id="g1OrganizeTasksVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1OrganizeTasksInitiates" id="g1OrganizeTasksInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Self-Care Skills',
                goal1NA: '',
                goal1Physical: '',
                goal1Verbal: '',
                goal1Initiates: ''
            }, {
                goal1Category: 'Put shoes on and off',
                goal1NA: <Label check> <Input type="checkbox" name="g1ShoesOnOffNA" id="g1ShoesOnOffNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ShoesOnOffPhysical" id="g1ShoesOnOffPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ShoesOnOffVerbal" id="g1ShoesOnOffVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ShoesOnOffInitiates" id="g1ShoesOnOffInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Discriminates right and left',
                goal1NA: <Label check> <Input type="checkbox" name="g1RightLeftNA" id="g1RightLeftNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1RightLeftPhysical" id="g1RightLeftPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1RightLeftVerbal" id="g1RightLeftVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1RightLeftInitiates" id="g1RightLeftInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Unties and ties shoes',
                goal1NA: <Label check> <Input type="checkbox" name="g1TieShoesNA" id="g1TieShoesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1TieShoesPhysical" id="g1TieShoesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1TieShoesVerbal" id="g1TieShoesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1TieShoesInitiates" id="g1TieShoesInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Pulls up/down pants',
                goal1NA: <Label check> <Input type="checkbox" name="g1PantsNA" id="g1PantsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1PantsPhysical" id="g1PantsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1PantsVerbal" id="g1PantsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1PantsInitiates" id="g1PantsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Buttons and unbuttons',
                goal1NA: <Label check> <Input type="checkbox" name="g1ButtonsNA" id="g1ButtonsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ButtonsPhysical" id="g1ButtonsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ButtonsVerbal" id="g1ButtonsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ButtonsInitiates" id="g1ButtonsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Adjusts clothes',
                goal1NA: <Label check> <Input type="checkbox" name="g1AdjustClothesNA" id="g1AdjustClothesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1AdjustClothesPhysical" id="g1AdjustClothesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1AdjustClothesVerbal" id="g1AdjustClothesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1AdjustClothesInitiates" id="g1AdjustClothesInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Dresses and undresses',
                goal1NA: <Label check> <Input type="checkbox" name="g1DressesNA" id="g1DressesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1DressesPhysical" id="g1DressesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1DressesVerbal" id="g1DressesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1DressesInitiates" id="g1DressesInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Sorts clothes for washing',
                goal1NA: <Label check> <Input type="checkbox" name="g1SortsClothesNA" id="g1SortsClothesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SortsClothesPhysical" id="g1SortsClothesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SortsClothesVerbal" id="g1SortsClothesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SortsClothesInitiates" id="g1SortsClothesInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Identifies clothes based on the weather',
                goal1NA: <Label check> <Input type="checkbox" name="g1ClothesWeatherNA" id="g1ClothesWeatherNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ClothesWeatherPhysical" id="g1ClothesWeatherPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ClothesWeatherVerbal" id="g1ClothesWeatherVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ClothesWeatherInitiates" id="g1ClothesWeatherInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Goes to the bathroom independently',
                goal1NA: <Label check> <Input type="checkbox" name="g1BathroomNA" id="g1BathroomNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1BathroomPhysical" id="g1BathroomPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1BathroomVerbal" id="g1BathroomVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1BathroomInitiates" id="g1BathroomInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Washes hands',
                goal1NA: <Label check> <Input type="checkbox" name="g1WashesHandsNA" id="g1WashesHandsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1WashesHandsPhysical" id="g1WashesHandsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1WashesHandsVerbal" id="g1WashesHandsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1WashesHandsInitiates" id="g1WashesHandsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Completes shower/bathing sequence',
                goal1NA: <Label check> <Input type="checkbox" name="g1ShowerNA" id="g1ShowerNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ShowerPhysical" id="g1ShowerPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ShowerVerbal" id="g1ShowerVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ShowerInitiates" id="g1ShowerInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Uses utensils properly when eating',
                goal1NA: <Label check> <Input type="checkbox" name="g1UtensilsNA" id="g1UtensilsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1UtensilsPhysical" id="g1UtensilsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1UtensilsVerbal" id="g1UtensilsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1UtensilsInitiates" id="g1UtensilsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Opens food containers/wrappers',
                goal1NA: <Label check> <Input type="checkbox" name="g1OpensContainersNA" id="g1OpensContainersNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1OpensContainersPhysical" id="g1OpensContainersPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1OpensContainersVerbal" id="g1OpensContainersVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1OpensContainersInitiates" id="g1OpensContainersInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Cleans up eating area after eating',
                goal1NA: <Label check> <Input type="checkbox" name="g1CleansEatingAreaNA" id="g1CleansEatingAreaNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1CleansEatingAreaPhysical" id="g1CleansEatingAreaPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1CleansEatingAreaVerbal" id="g1CleansEatingAreaVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1CleansEatingAreaInitiates" id="g1CleansEatingAreaInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Uses caution with hot items',
                goal1NA: <Label check> <Input type="checkbox" name="g1HotCautionNA" id="g1HotCautionNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1HotCautionPhysical" id="g1HotCautionPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1HotCautionVerbal" id="g1HotCautionVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1HotCautionInitiates" id="g1HotCautionInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Social Skills',
                goal1NA: '',
                goal1Physical: '',
                goal1Verbal: '',
                goal1Initiates: ''
            }, {
                goal1Category: 'Appropriate with near peers',
                goal1NA: <Label check> <Input type="checkbox" name="g1NearPeersNA" id="g1NearPeersNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1NearPeersPhysical" id="g1NearPeersPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1NearPeersVerbal" id="g1NearPeersVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1NearPeersInitiates" id="g1NearPeersInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Shows interest in others',
                goal1NA: <Label check> <Input type="checkbox" name="g1InterestInOthersNA" id="g1InterestInOthersNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1InterestInOthersPhysical" id="g1InterestInOthersPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1InterestInOthersVerbal" id="g1InterestInOthersVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1InterestInOthersInitiates" id="g1InterestInOthersInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Sits appropriately in small groups (3-5)',
                goal1NA: <Label check> <Input type="checkbox" name="g1SitSmallGroupNA" id="g1SitSmallGroupNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SitSmallGroupPhysical" id="g1SitSmallGroupPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SitSmallGroupVerbal" id="g1SitSmallGroupVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SitSmallGroupInitiates" id="g1SitSmallGroupInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Attends to instructor in small groups (3-5)',
                goal1NA: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupNA" id="g1InstructorSmallGroupNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupPhysical" id="g1InstructorSmallGroupPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupVerbal" id="g1InstructorSmallGroupVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructorSmallGroupInitiates" id="g1InstructorSmallGroupInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Follows instruction',
                goal1NA: <Label check> <Input type="checkbox" name="g1InstructionNA" id="g1InstructionNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1InstructionPhysical" id="g1InstructionPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructionVerbal" id="g1InstructionVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructionInitiates" id="g1InstructionInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Takes turns',
                goal1NA: <Label check> <Input type="checkbox" name="g1TakesTurnsNA" id="g1TakesTurnsNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1TakesTurnsPhysical" id="g1TakesTurnsPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1TakesTurnsVerbal" id="g1TakesTurnsVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1TakesTurnsInitiates" id="g1TakesTurnsInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Shares',
                goal1NA: <Label check> <Input type="checkbox" name="g1SharesNA" id="g1SharesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SharesPhysical" id="g1SharesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SharesVerbal" id="g1SharesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SharesInitiates" id="g1SharesInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Converses with others',
                goal1NA: <Label check> <Input type="checkbox" name="g1ConverseOthersNA" id="g1ConverseOthersNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1ConverseOthersPhysical" id="g1ConverseOthersPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1ConverseOthersVerbal" id="g1ConverseOthersVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1ConverseOthersInitiates" id="g1ConverseOthersInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Sits appropriately in large groups (3-5)',
                goal1NA: <Label check> <Input type="checkbox" name="g1SitLargeGroupNA" id="g1SitLargeGroupNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1SitLargeGroupPhysical" id="g1SitLargeGroupPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1SitLargeGroupVerbal" id="g1SitLargeGroupVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1SitLargeGroupInitiates" id="g1SitLargeGroupInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Attends to instructor in large groups (3-5)',
                goal1NA: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupNA" id="g1InstructorLargeGroupNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupPhysical" id="g1InstructorLargeGroupPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupVerbal" id="g1InstructorLargeGroupVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1InstructorLargeGroupInitiates" id="g1InstructorLargeGroupInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Stands and waits independently during transitions',
                goal1NA: <Label check> <Input type="checkbox" name="g1StandWaitNA" id="g1StandWaitNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1StandWaitPhysical" id="g1StandWaitPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1StandWaitVerbal" id="g1StandWaitVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1StandWaitInitiates" id="g1StandWaitInitiates"/> Initiates Independently </Label>
            }, {
                goal1Category: 'Understands simple rules of the classroom',
                goal1NA: <Label check> <Input type="checkbox" name="g1UnderstandsRulesNA" id="g1UnderstandsRulesNA"/> N/A </Label>,
                goal1Physical: <Label check> <Input type="checkbox" name="g1UnderstandsRulesPhysical" id="g1UnderstandsRulesPhysical"/> Physical Prompt </Label>,
                goal1Verbal: <Label check> <Input type="checkbox" name="g1UnderstandsRulesVerbal" id="g1UnderstandsRulesVerbal"/> Verbal Prompt </Label>,
                goal1Initiates: <Label check> <Input type="checkbox" name="g1UnderstandsRulesInitiates" id="g1UnderstandsRulesInitiates"/> Initiates Independently </Label>
            }],


            collapseVerbal: false,
            collapseCommunication: false,
            collapseCommunicationBinder: false,
            collapseSignLanguage: false,
            collapseCommunicationOther:false
        };

        this.goBack = this.goBack.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    goBack(event) {
        window.location.reload();
    }
    toggleVerbal() {
        this.setState(state => ({collapseVerbal: !state.collapseVerbal}));
    }

    toggleCommunication() {
        this.setState(state => ({collapseCommunication: !state.collapseCommunication}));
    }

    toggleCommunicationBinder() {
        this.setState(state => ({collapseCommunicationBinder: !state.collapseCommunicationBinder}));
    }

    toggleCommunicationOther() {
        this.setState(state => ({collapseCommunicationOther: !state.collapseCommunicationOther}));
    }

    toggleSignLanguage() {
        this.setState(state => ({collapseSignLanguage: !state.collapseSignLanguage}));
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.validate();
        this.setState({fields: fields});
    }
    checkValue(name) {
        let fields = this.state.fields;
        if (fields[name] >= 1){
            console.log("greater")
            return true;
        } else {
            console.log("nope")
            return false;
        }
    }

    handleCheckBoxChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    validate() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (this.state.submitButtonPressed) {
            //SECTION ONE
            if (!fields["dob"]) {
                formIsValid = false;
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
            // Section 3
            if (!fields["birthWeek"]) {
                formIsValid = false;
                errors["birthWeek"] = "Cannot be empty";
            }
            if (!fields["birthWeight"]) {
                formIsValid = false;
                errors["birthWeight"] = "Cannot be empty";
            }


            //SECTION FOUR

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

            //SECTION 14
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

        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitButtonPressed: true}, () => {
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

    renderSection1() {
        return (
            <fieldset>
                <div className={"section"}>Section 1: Client Information</div>
                <Row>
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
                            <Label className="control-label required">Referring Diagnosis</Label>
                            <Input
                                type="text"
                                ref="diagnosis"
                                value={this.state.fields["diagnosis"] || ""}
                                onChange={this.handleChange.bind(this, "diagnosis")}
                                className="error"
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
                                type="text"
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
        return (
            <fieldset>
                <div className={"section"}>Section 2: Family Information</div>
                <div className={"sub-section"}>Mother's Information</div>
                <Row>
                    <Col sm={9}>
                        <FormGroup>
                            <Label className="control-label required">Mother's Name</Label>
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
                            <Label className="control-label required">Mother's Age</Label>
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
                            <Label className="control-label required">Mother's Cell Phone #</Label>
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
                            <Label className="control-label required">Mother's Email</Label>
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
                            <Label className="control-label required">Mother's Occupation</Label>
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
                            <Label className="control-label required">Father's Name</Label>
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
                            <Label className="control-label required">Father's Age</Label>
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
                            <Label className="control-label required">Father's Cell Phone #</Label>
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
                            <Label className="control-label required">Father's Email</Label>
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
                            <Label className="control-label required">Father's Occupation</Label>
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
                                   id="maritalStatus">
                                <option></option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Separated</option>
                                <option>Widowed</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className={"pt-3"}>If Divorced or Separated, who is the legal guardian?</Label>
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
                            <Label>Step Mother's Name</Label>
                            <Input
                                type="text"
                                ref="sMotherName"
                                value={this.state.fields["sMotherName"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Step Mother's Age</Label>
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
                            <Label>Step Mother's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sMotherCell"
                                value={this.state.fields["sMotherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sMotherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Mother's Email</Label>
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
                            <Label>Step Mother's Occupation</Label>
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
                            <Label>Step Father's Name</Label>
                            <Input
                                type="text"
                                ref="sFatherName"
                                value={this.state.fields["sFatherName"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherName")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Step Father's Age</Label>
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
                            <Label>Step Father's Cell Phone #</Label>
                            <Input
                                type="text"
                                ref="sFatherCell"
                                value={this.state.fields["sFatherCell"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherCell")}/>
                        </FormGroup>
                    </Col>
                    <Col sm={8}>
                        <FormGroup>
                            <Label>Step Father's Email</Label>
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
                            <Label>Step Father's Occupation</Label>
                            <Input
                                type="text"
                                ref="sFatherOccupation"
                                value={this.state.fields["sFatherOccupation"] || ""}
                                onChange={this.handleChange.bind(this, "sFatherOccupation")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Is your child adopted?</Label>
                            <Input type="select"
                                   name="isAdopted"
                                   id="isAdopted">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["fatherOccupation"] }>{this.state.errors["fatherOccupation"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                    <Col sm={1} className={"text-right align-bottom"}>
                        <Label>If yes:</Label>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>What Age?</Label>
                            <Input type="text"
                                   name="isAdopted"
                                   id="isAdopted">
                            </Input>

                        </FormGroup>
                    </Col>
                    <Col sm={3}>
                        <FormGroup>
                            <Label>Country of Birth?</Label>
                            <Input type="text"
                                   name="birthCountry"
                                   id="birthCountry">
                            </Input>

                        </FormGroup>
                    </Col>
                </Row>
                <Label className="pr-2">Please list siblings in the table below. </Label>
                <ReactTable
                    className={"-striped -highlight"}
                    data={this.state.siblingData}
                    columns={this.state.siblingColumns}
                    defaultPageSize={4}
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
                                Any additional notes or comments about Section 2: Family Information?
                            </Label>
                            <Input
                                type="text"
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
            <fieldset>
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
                                   id="deliveryType">
                                <option></option>
                                <option>Vaginal</option>
                                <option>Cesarean</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Were there any complications during the
                                pregnancy or delivery?</Label>
                            <Input type="select"
                                   name="pregComplications"
                                   id="pregComplications">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
                                ref="pregComplicationDescription"
                                value={this.state.fields["pregComplicationDescription"] || ""}
                                onChange={this.handleChange.bind(this, "pregComplicationDescription")}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Was your child hospitalized after
                                birth?</Label>
                            <Input type="select"
                                   name="hospitaliedAfterBirth"
                                   id="hospitaliedAfterBirth">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                            {/*<FormFeedback*/}
                            {/*invalid={this.state.errors["maritalStatus"] }>{this.state.errors["maritalStatus"]}*/}
                            {/*</FormFeedback>*/}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>If yes, please describe</Label>
                            <Input
                                type="text"
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
                                type="text"
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
        return (
            <fieldset>
                <div className={"section"}>Section 4: Developmental History</div>
                <div className={"sub-section"}>If your child is over 18 years of age, please mark what is known.</div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.devHistoryData}
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
            </fieldset>
        );
    }

    renderSection5() {
        return (
            <fieldset>
                <div className={"section"}>Section 5: Medical History/Past Therapies</div>
                <Row>
                    <Col sm={3}>
                        <FormGroup>
                            <Label className="control-label required">Primary Physician's Name</Label>
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
                            <Label className="control-label required">Primary Physician's Phone Number</Label>
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
                            <Label className="control-label required">Primary Physician's Address</Label>
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
                <Row>
                    <Col sm={6}>
                        <FormGroup >
                            <Label className="control-label required pr-2">Does the client currently receive therapy services outside of Jacob's Ladder?</Label>
                            <Input type="select"
                                   name="outsideTherapy"
                                   id="outsideTherapy">
                                <option>Yes</option>
                                <option>No</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <ReactTable
                    className={"otherDoctorsTable -striped -highlight"}
                    data={this.state.otherDoctorsData}
                    columns={this.state.otherDoctorsColumns}
                    defaultPageSize={4}
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
                            <Label className="control-label required">Please list any hospitalizations and/or medical
                                procedures the client has received.</Label>
                            <Input
                                type="text"
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
                <Row>
                    <Label className="control-label required">Please indicate whether the following apply to the client.</Label>
                </Row>
                <ReactTable
                    className={"medicalConditionsTable -striped -highlight"}
                    data={this.state.medicalConditionsData}
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
                            <Label className="control-label required">Please list other medical conditions here.</Label>
                            <Input
                                type="text"
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
                <Row>
                    <Label className="control-label required">Please indicate if the client uses any of the following supplies/equipment.</Label>
                </Row>
                <ReactTable
                    className={"suppliesTable -striped -highlight"}
                    data={this.state.suppliesData}
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
                            <Label className="control-label required">Please list other supplies/equipment here.</Label>
                            <Input
                                type="text"
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
                <Row>
                    <Label className="control-label required">Please list all current medications, dietary supplement, and vitamins.</Label>
                </Row>
                <ReactTable
                    className={"medsTable -striped -highlight"}
                    data={this.state.medsData}
                    columns={this.state.medsColumns}
                    defaultPageSize={6}
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
                    <Label className="control-label required">Please list any pertinent medical, neurological, visual, hearing, therapeutic, psychological, and/or educational testing.</Label>
                </Row>
                <ReactTable
                    className={"testingTable -striped -highlight"}
                    data={this.state.testingData}
                    columns={this.state.testingColumns}
                    defaultPageSize={6}
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
            </fieldset>
        );
    }

    renderSection6() {
        return (
            <fieldset>
                <div className={"section"}>Section 6: General Health</div>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">Please describe the client's diet.</Label>
                            <Input
                                type="text"
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
                <Row>
                    <Label className="control-label required">Please check all that apply:</Label>
                </Row>
                <ReactTable
                    className={"foodGroupTable -striped -highlight"}
                    data={this.state.foodGroupData}
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
                    <Col sm={6}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Does the client have any allergies?</Label>
                            <Input type="select"
                                   name="allergies"
                                   id="allergies">
                                <option></option>
                                <option>Yes</option>
                                <option>None Known</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label className="control-label required">If yes, please describe.</Label>
                            <Input
                                type="text"
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
                    <Col sm={6}>
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
                    <Col sm={3}>
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
                    <Col sm={3}>
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
                                   id="troubleFallingAsleep">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Trouble staying asleep/wakes
                                frequently</Label>
                            <Input type="select"
                                   name="troubleStayingAsleep"
                                   id="troubleStayingAsleep">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col sm={4}>
                        <FormGroup>
                            <Label className="control-label required pr-2">Wakes Early</Label>
                            <Input type="select"
                                   name="wakesEarly"
                                   id="wakesEarly">
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Not Sure</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <div className={"sub-section"}>Physical Motor</div>
                <Row>
                    <Label className="control-label required">Please select whether the follow apply.</Label>
                </Row>
                <ReactTable
                    className={"physicalMotorTable -striped -highlight"}
                    data={this.state.physicalMotorData}
                    columns={this.state.physicalMotorColumns}
                    defaultPageSize={11}
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
                            <Label className="control-label required">Please list other physical motor challenges here.</Label>
                            <Input
                                type="text"
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
            </fieldset>

        );
    }

    renderSection7() {
        return (
            <fieldset>
                <div className={"section"}>Section 7: Educational History</div>
                <p>List current and past educational and/or treatment placement(s).</p>
                <ReactTable
                    className={"otherSchoolTable -striped -highlight"}
                    data={this.state.otherProgramsData}
                    columns={this.state.otherProgramsColumns}
                    defaultPageSize={4}
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
                        type="text"
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
                        type="text"
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
                    <Label className="control-label required">Does your child have a current Individualized Education Plan (IEP)?</Label>
                    <Col sm ={2}>
                        <Input type="select"
                               name="iepPlan"
                               id="iepPlan">
                            <option>Yes</option>
                            <option>No</option>
                        </Input>
                    </Col>

                </FormGroup>
                <p>Indicate your child’s hand preference for each activity: Right/Left/Mixed/Not Applicable.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.handPreferenceData}
                    columns={this.state.handPreferenceColumns}
                    defaultPageSize={6}
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
                <p>Please check all that apply.</p>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.skillsData}
                    columns={this.state.skillsColumns}
                    defaultPageSize={11}
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
                        type="text"
                        ref="academicGoal"
                        value={this.state.fields["academicGoal"] || ""}
                        onChange={this.handleChange.bind(this, "academicGoal")}
                        className="error"
                        invalid={this.state.errors["academicGoal"] != null}/>
                    <FormFeedback
                        invalid={this.state.errors["academicGoal"]}>{this.state.errors["academicGoal"]}
                    </FormFeedback>
                </FormGroup>

            </fieldset>

        );
    }

    renderSection8() {
        return (
            <fieldset>
                <div className={"section"}>Section 8: Communication</div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleVerbal.bind(this)}>

                            <Input type="checkbox"/>
                            Verbal
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseVerbal}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Input
                                    type="select"
                                    placeholder="why">
                                    <option>Select Current Independent Level</option>
                                    <option>fully conversational with original thought language</option>
                                    <option>sentences with some rote language</option>
                                    <option>1-2 word verbalizations</option>

                                </Input>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <FormGroup check>
                    <Label check>
                        <Input type="checkbox"/>
                        Pointing/Grabbing
                    </Label>
                </FormGroup>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleSignLanguage.bind(this)}>

                            <Input type="checkbox"/>
                            Sign Language
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseSignLanguage}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Label> Types of signs used (i.e.ALS or modified):</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label> Number of signs known:</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunication.bind(this)}>

                            <Input type="checkbox"/>
                            Communication Device
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunication}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
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
                                <FormGroup>
                                    <Input
                                        type="select">
                                        <option>Select Current Independent Level</option>
                                        <option>Fully Independent</option>
                                        <option>Emerging Independence</option>
                                        <option>Heavy Prompting Required</option>
                                    </Input>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunicationBinder.bind(this)}>

                            <Input type="checkbox"/>
                            Communication Binder
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunicationBinder}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Input
                                        type="select">
                                        <option>Select Current Independent Level</option>
                                        <option>Fully Independent</option>
                                        <option>Emerging Independence</option>
                                        <option>Heavy Prompting Required</option>

                                    </Input>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup check>
                        <Label check onChange={this.toggleCommunicationOther.bind(this)}>

                            <Input type="checkbox"/>
                            Other
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.state.collapseCommunicationOther}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <FormGroup>
                                    <Label> Please Explain</Label>
                                    <Input
                                        type="text"/>
                                </FormGroup>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <ReactTable
                    className={"devHistoryTable -striped -highlight"}
                    data={this.state.communicationProblemsData}
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
                    <Label className="control-label required">Primary language Spoken at home</Label>
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
            </fieldset>

        );
    }

    renderSection9() {
        return (
            <fieldset>
                <div className={"section"}>Section 9: Emotional/Behavioral History</div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"schoolConcentration")}>
                            School Concentration Difficulties
                            <Input type="select"
                                   ref="languageAtHome"
                                   value={this.state.fields["schoolConcentration"] || ""}
                                   onChange={this.handleChange.bind(this, "schoolConcentration")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("schoolConcentration")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                    <Label> Behaviors (past and current) seen at home/school</Label>
                                    <Input
                                        type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                            <Input
                                type="text"
                                className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                            <Input
                                type="text"
                                className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"socialAnxiety")}>
                            Social Anxiety
                            <Input type="select"
                                   ref="socialAnxiety"
                                   value={this.state.fields["socialAnxiety"] || ""}
                                   onChange={this.handleChange.bind(this, "socialAnxiety")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("socialAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"lowGrades")}>
                            Grades dropping or consistently low
                            <Input type="select"
                                   ref="lowGrades"
                                   value={this.state.fields["lowGrades"] || ""}
                                   onChange={this.handleChange.bind(this, "lowGrades")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("lowGrades")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"makingFriends")}>
                            Problems Making or Keeping Friends
                            <Input type="select"
                                   ref="makingFriends"
                                   value={this.state.fields["makingFriends"] || ""}
                                   onChange={this.handleChange.bind(this, "makingFriends")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("makingFriends")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"oppositionalBehavior")}>
                            Oppositional, defiant behavior
                            <Input type="select"
                                   ref="oppositionalBehavior"
                                   value={this.state.fields["oppositionalBehavior"] || ""}
                                   onChange={this.handleChange.bind(this, "oppositionalBehavior")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("oppositionalBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"problemsWithAuthority")}>
Problems With Authority
                            <Input type="select"
                                   ref="problemsWithAuthority"
                                   value={this.state.fields["problemsWithAuthority"] || ""}
                                   onChange={this.handleChange.bind(this, "provlemsWithAuthority")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("problemsAuthority")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"sociallyIsolated")}>
                            Isolated socially from peers
                            <Input type="select"
                                   ref="sociallyIsolated"
                                   value={this.state.fields["sociallyIsolated"] || ""}
                                   onChange={this.handleChange.bind(this, "sociallyIsolated")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sociallyIsolated")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"aggressiveBehavior")}>
                            Agressive Behavior towards others
                            <Input type="select"
                                   ref="aggressiveBehavior"
                                   value={this.state.fields["aggressiveBehavior"] || ""}
                                   onChange={this.handleChange.bind(this, "aggressiveBehavior")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("aggressiveBehavior")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"generalizedAnxiety")}>
                            Genralized Anxiety (across many situations)
                            <Input type="select"
                                   ref="generalizedAnxiety"
                                   value={this.state.fields["generalizedAnxiety"] || ""}
                                   onChange={this.handleChange.bind(this, "generalizedAnxiety")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("generalizedAnxiety")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"hyperactive")}>
                            Hyperactive, difficulty being still
                            <Input type="select"
                                   ref="hyperactive"
                                   value={this.state.fields["hyperactive"] || ""}
                                   onChange={this.handleChange.bind(this, "hyperactive")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("hyperactive")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>
                <div>
                    <FormGroup>
                        <Label  onChange={this.handleChange.bind(this,"sensoryProblems")}>
                            Sensory problems
                            <Input type="select"
                                   ref="sensoryProblems"
                                   value={this.state.fields["sensoryProblems"] || ""}
                                   onChange={this.handleChange.bind(this, "sensoryProblems")}>
                                <option></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                        </Label>
                    </FormGroup>
                    <Collapse isOpen={this.checkValue("sensoryProblems")}>
                        <Card className={"toggle-card"}>
                            <CardBody className={"toggle-card-body"}>
                                <Label> Behaviors (past and current) seen at home/school</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Description of the Behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical duration of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>
                                <Label> Typical location of the behavior</Label>
                                <Input
                                    type="text"
                                    className={"required"}/>

                            </CardBody>
                        </Card>
                    </Collapse>
                </div>




            </fieldset>
        );
    }

    renderSection10() {
        return (
            <fieldset>
                <div className={"section"}>Section 10: Current Schedule and Typical Day</div>
            </fieldset>
        );
    }

    renderSection11() {
        return (
            <fieldset>
                <div className={"section"}>Section 11: Independent Skill</div>
                <div>As part of the daily program at Jacob’s Ladder, our clients/students are learning and developing skills needed to successfully transition into adulthood.  Our goal is to assist you your family throughout your time at Jacob’s Ladder with meeting these skills by reinforcing them at school and home. In order for us to maintain cohesion across providers within their expectations, we ask that you complete the following questionnaire to better equip the JL Clinical Team with a thorough understanding of the client’s abilities.</div>
                <div className={"sub-section"}>Level One Goals:</div>
                <ReactTable
                    className={"level1GoalsTable -striped -highlight"}
                    data={this.state.level1GoalsData}
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
                    <Label className="control-label required">Additional comments/goals:</Label>
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
            </fieldset>

        );
    }

    renderSection12() {
        return (
            <fieldset>
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                <Row>
                    <Col>
                        <Label className={"additional-note"}>If your child has a history of seizures, please complete the following:</Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>History of Condition</Label>
                            <Input
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
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
                                type="text"
                                ref="seizureFrequency"
                                value={this.state.fields["seizureFrequency"] || ""}
                                onChange={this.handleChange.bind(this, "seizureFrequency")}/>
                        </FormGroup>
                    </Col>
                </Row>
            </fieldset>

        );
    }

    renderSection13() {
        return (
            <fieldset>
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
            <fieldset>
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
                                   value={this.state.fields["consentCheck"] || ""}
                                   onChange={this.handleChange.bind(this, "consentCheck")}
                                   className="error"
                                   invalid={this.state.errors["consentCheck"] != null}/>
                            {/*<FormFeedback*/}
                                {/*invalid={this.state.errors["consentCheck"]}>{this.state.errors["consentCheck"]}*/}
                            {/*</FormFeedback>*/}
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
                <div className="form-title">
                    <div className="row">
                        <a className="parent-top col-9">
                            <h2>Client History and Information</h2>
                        </a>
                    </div>
                </div>
                <div className={"frame p-4"} data-spy="scroll">
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

export default ClientHistoryAndInformation;