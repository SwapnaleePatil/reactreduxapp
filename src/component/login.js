import './login.css'
import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {studentLogin} from '../action/student'
import {push} from 'react-router-redux';
import { withRouter } from 'react-router'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            loginResponse: '',
            error: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        debugger
        this.setState({loginResponse: nextProps.loginResponse}, () => {
                let {error} = this.state;
                if (this.state.loginResponse.hasOwnProperty('data') && this.state.loginResponse.data.message === "login failed") {
                    error.password = "invalid Email Or Password"
                }
                else {
                    error.password = "";
                }
                this.setState({error});
            }
        );
        if (nextProps.loginResponse.hasOwnProperty('data')) {
            if (nextProps.loginResponse.data.message === 'login successful') {
                debugger
                localStorage.setItem('token', nextProps.loginResponse.data.token);
                localStorage.setItem('userType', nextProps.loginResponse.data.userType);
                localStorage.getItem('token')?this.props.goToHome():this.props.history.push('/')


            }
        }
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        const {user} = this.state;
        user[name] = value;
        this.setState({user})
    }
    register = () => {
        this.props.history.push('/register');
    }
    login = (e) => {
        // this.props.goToHome();
        e.preventDefault();
        let data = {...this.state.user}
        this.props.studentLogin(data);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div id="polina" className="col-sm-3">
                        <br/>

                        <br/>
                        <form className="form-horizontal">

                            <div className="form-group has-success has-feedback">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="username" name="username"
                                           placeholder="Email" onChange={this.handleChange} required/>
                                    <a href="#" className="glyphicon glyphicon-envelope form-control-feedback"/>
                                </div>
                            </div>

                            <div className="form-group has-success has-feedback">
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" id="password" name="password"
                                           placeholder="Password" required onChange={this.handleChange}/>
                                    <a href="#" className="glyphicon glyphicon-lock form-control-feedback"/>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="button" id="loginBtn" className="btn sellBtn btn-success" onClick={this.login}
                                >Login
                                </button>
                                &nbps;
                                <button type="button" className="btn sellBtn btn-success" onClick={this.register}
                                >Register
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginResponse: state.loginResponse
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            studentLogin,
            goToHome:()=>push('/Home')
        }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));