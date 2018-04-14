import React from 'react';
import axios from 'axios';
import {Button,Modal} from 'react-bootstrap';
import {studData} from '../action/student'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
let studentRec={};
class StudList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            student: [],
            show: false,
            sid:''
        }
    }
    componentWillMount()
    {
        this.showData()
    }
    componentWillReceiveProps(nextprops)
    {
        this.setState({student:nextprops.stud})
    }
    handleClose = () => {
        this.setState({show: false});
    }
    handleShow = () => {
        this.setState({show: true});
    }
    showData = () => {
        this.props.studData();
    }

    render(){
        debugger
        let student = this.state.student;
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Student Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            student.map((v, i) => {
                                    if (v._id === this.state.sid) {
                                        studentRec = v;
                                    }
                                }
                            )
                        }
                        <div><h4>Student Name : {studentRec.sname}</h4></div>
                        <div><h4>Email : {studentRec.email}</h4></div>
                        <div><h4>Class Year : {studentRec.classYear}</h4></div>
                        <div><h4>Gender : {studentRec.gender}</h4></div>
                        <div><h4>Contact No : {studentRec.contactNo}</h4></div>



                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <div className="table-responsive container">
                    <h3 align="center">Display </h3>
                    <center>
                        <table className="table table-hover">
                            <tbody>
                            <tr>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>Contact No</th>
                                <th>Gender</th>
                                <th>Class Year</th>
                            </tr>
                            {

                                student.map((v, i) => {
                                    return <tr onClick={()=>{
                                        this.setState({sid:v._id})
                                        this.handleShow()
                                    }}>
                                        <td >{v.sname}</td>
                                        <td >{v.email}</td>
                                        <td >{v.contactNo}</td>
                                        <td>{v.gender}</td>
                                        <td>{v.classYear}</td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        stud:state.studentdata
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({studData},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(StudList);