import React from 'react';
import axios from 'axios';
import {Button, Modal, Table} from 'react-bootstrap';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {submitData, showData} from '../action/event'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import {NavLink} from 'react-router-dom'
let event = {};


class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            show: false,
            addShow: false,
            eid: '',
            error: {},
            newEvent: [],
            isSearch: false,
            searchArray: [],
            record: 3,
            page: 1

        }

    }

    componentWillMount() {
        this.props.showData();
    }

    componentWillReceiveProps(nextprops) {
        this.setState({events: nextprops.events})
    }

    handleClose = () => {
        this.setState({show: false});
    }
    handleShow = () => {
        this.setState({show: true});
    }
    handleAddClose = () => {
        this.setState({addShow: false});
    }
    handleAddShow = () => {
        this.setState({addShow: true});
    }
    handleChange = (e) => {
        let {name, value} = e.target;
        const {newEvent} = this.state;
        newEvent[name] = value;
        this.setState({newEvent}, () => {
            console.log("NEw ", this.state.newEvent);
        })

    }

    chkValidation = (e) => {
        let {error} = this.state;
        let name = e.target.name;
        if (name === "dob") {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            if (month <= 9) {
                month = "0" + month;
            }
            let year = date.getFullYear();
            let edate = year + '-' + month + '-' + day;
            if (e.target.value < edate) {
                error.dob = "Please Select Proper Birth Date";
            }
            else {
                error.dob = "";
            }
        }
        this.setState({error});
        if (e.target.value === "") {
            this.setState({error: {}});
        }
    }
    submitData = (e) => {
        let data = {...this.state.newEvent};
        this.props.submitData(data);

    }

    searchData(e) {
        this.setState({
            isSearch: true,
            searchArray: []
        });
        let {searchArray} = this.state;
        searchArray = [];
        this.state.events.map((values, index) => {
            if (values.ename.includes(e.target.value)) {
                searchArray.push(values);
            }
            if (e.target.value === "") {
                this.setState({
                    isSearch: false
                });
            }
        });
        this.setState({searchArray});
    }

    changeRec(e) {
        debugger
        this.setState({
            record: e.target.value,
            page: 1
        })
    }

    getPage = (pno) => {
        this.setState({
            page: pno
        })
    }

    render() {
        debugger
        let {events, error, isSearch, searchArray} = this.state;


        let tpages = [];

        let lastrec = this.state.record * this.state.page;
        let firstrec = lastrec - this.state.record;
        let totrec = this.state.events.slice(firstrec, lastrec);
        let len = this.state.events.length;
        let pages = Math.ceil(len / this.state.record);
        for (let i = 1; i <= pages; i++) {
            tpages.push(i);
        }

        return (

            <div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Event Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            events.map((v, i) => {
                                    if (v._id === this.state.eid) {
                                        event = v;
                                    }
                                }
                            )
                        }
                        <div><h4>Event Name : {event.ename}</h4></div>
                        <div><h4>Event Date : {event.edate && event.edate.split("T")[0]}</h4></div>
                        <div><h4>Event Locatiion : {event.location}</h4></div>

                    </Modal.Body>
                    <Modal.Footer>

                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                <div className="table-responsive container">

                    <FloatingActionButton style={{"margin-left": "1000px"}} onClick={this.handleAddShow}>
                        <ContentAdd/>
                    </FloatingActionButton>
                    <NavLink to='/eventList'><FlatButton primary={true} >Home</FlatButton></NavLink>


                    <Modal show={this.state.addShow} onHide={this.handleAddClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Event Detail</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form method="post" action="#">
                                <Table striped condensed hover>
                                    <tr>
                                        <th>Event Name:</th>
                                        <td><input className="form-control" type="text"
                                                   name="ename" onChange={this.handleChange} required/>
                                        </td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <th>Event Date:</th>
                                        <td><input className="form-control" type="date"
                                                   name="edate" onChange={(e) => {
                                            this.handleChange(e);
                                            this.chkValidation(e);
                                        }}/>
                                            {error.dob && <span style={{"color": "red"}}>{error.dob}</span>}
                                        </td>
                                    </tr>
                                    <br/>
                                    <tr>
                                        <th>Location:</th>
                                        <td><textarea className="form-control" type="text"
                                                      name="location" onChange={this.handleChange}/></td>
                                    </tr>
                                </Table>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.submitData}>Save</Button>

                            <Button onClick={this.handleAddClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <center>
                        <table className="table table-hover">
                            <tbody>
                            <tr>
                                <div>
                                    <div> Search By Name
                                        <input type="text" className="form-control " id="txts" name="txts"
                                               onChange={(e) => {
                                                   this.searchData(e);
                                               }}/>Select Any Number
                                        <select className="form-control " onChange={(e) => {
                                            this.changeRec(e)
                                        }}>
                                            <option>--Select--</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>
                                </div>
                            </tr>
                            <tr>
                                <th>Event Name</th>
                                <th>Event Date</th>
                                <th>Location</th>
                                <th colSpan="2"></th>
                            </tr>
                            {
                                isSearch ? searchArray.map((v, i) => {
                                        return <tr onClick={() => {
                                            this.setState({eid: v._id}, () => {
                                                console.log("Eid", this.state.eid)
                                            })
                                            this.handleShow();
                                        }}>
                                            <td>{v.ename}</td>
                                            <td>{v.edate.split('T')[0]}</td>
                                            <td>{v.location}</td>
                                            <td><a href="#" class="btn btn-info btn-lg" onClick={this.editRecord}>
                                                <span class="glyphicon glyphicon-pencil"/>
                                            </a></td>
                                            <td>
                                                <a href="#" class="btn btn-info btn-lg" onClick={this.deleteRecord}>
                                                    <span class="glyphicon glyphicon-trash"/>
                                                </a>
                                            </td>
                                        </tr>
                                    }) :
                                    totrec.map((v, i) => {
                                        return <tr onClick={() => {
                                            this.setState({eid: v._id}, () => {
                                                console.log("Eid", this.state.eid)
                                            })
                                            this.handleShow();
                                        }}>
                                            <td>{v.ename}</td>
                                            <td>{v.edate.split('T')[0]}</td>
                                            <td>{v.location}</td>
                                            <td><a href="#" class="btn btn-info btn-lg" onClick={this.editRecord}>
                                                <span class="glyphicon glyphicon-pencil"/>
                                            </a></td>
                                            <td>
                                                <a href="#" class="btn btn-info btn-lg" onClick={this.deleteRecord}>
                                                    <span class="glyphicon glyphicon-trash"/>
                                                </a>
                                            </td>
                                        </tr>
                                    })
                            }
                            </tbody>
                            <tbody>

                            <tr>
                                <td colSpan="9" align="center">
                                    <Button onClick={() => this.getPage(1)}><i
                                        className="fa fa-angle-double-left"/></Button>
                                    {
                                        (this.state.page === 1) ?
                                            <Button disabled={'true'}><i className="fa fa-angle-left"/></Button>
                                            :
                                            <Button onClick={() => this.getPage(this.state.page - 1)}><i
                                                className="fa fa-angle-left"/></Button>
                                    }


                                    {
                                        tpages.map((p, i) => {
                                            return <Button active onClick={() => {
                                                this.getPage(p);
                                            }}>{p}</Button>
                                        })
                                    }


                                    {
                                        (this.state.page === pages) ?
                                            <Button disabled={'true'}><i className="fa fa-angle-right"/></Button>
                                            :
                                            <Button onClick={() => this.getPage(this.state.page + 1)}><i
                                                className="fa fa-angle-right"/></Button>
                                    }
                                    <Button onClick={() => this.getPage(pages)}><i
                                        className="fa fa-angle-double-right"/></Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        events: state.eventdata
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({showData, submitData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList);