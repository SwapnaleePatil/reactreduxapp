import React from 'react';
import './table.css'
import {studRegister} from '../action/student'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {push} from 'react-router-redux'

const axios = require('axios')

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            student: []
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const {student} = this.state;
        student[name] = value;
        this.setState({student})
    }
    sendData = () => {
        let data = {
            ...this.state.student
        }
        this.props.studRegister(data);
        this.props.goToHome()
    }

    render() {
        return (
            <div className="table">
                <div className="container">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                    }}>
                        <div className="row">
                            <div className="col-25">
                                <label>Full Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="sname" name="sname" placeholder="Enter Your Name" required
                                       onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Email</label>
                            </div>
                            <div className="col-75">
                                <input type="email" id="email" name="email" required onChange={this.handleChange}
                                       placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Password</label>
                            </div>
                            <div className="col-75">
                                <input type="password" id="password" name="password" required
                                       onChange={this.handleChange} placeholder="Enter Your Secure Password"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Contact No</label>
                            </div>
                            <div className="col-75">
                                <input type="number" id="contactNo" name="contactNo" required
                                       onChange={this.handleChange} placeholder="Enter Number"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Gender</label>
                            </div>
                            <div className="col-75">
                                <div>
                                    <div className="col-10">
                                        <input type="radio" name="gender" value="boy" onChange={this.handleChange}/>
                                        <div vertical-align="middle" align="left">Boy</div>
                                    </div>
                                    <div className="col-10">
                                        <input type="radio" name="gender" value="girl" onChange={this.handleChange}/>
                                        <div vertical-align="middle" align="left">Girl</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label>Class Year</label>
                            </div>
                            <div className="col-75">
                                <select id="classYear" name="classYear" onChange={this.handleChange}>
                                    <option>--Select--</option>
                                    <option value="FYBCA">FYBCA</option>
                                    <option value="SYBCA">SYBCA</option>
                                    <option value="TYBCA">TYBCA</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                            </div>
                            <div className="col-75">
                                <input type="submit" value="Submit" onClick={this.sendData}
                                />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        studRegister,
        goToHome: () => push('/about')
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Registration);