import React, {Component} from 'react';
import './App.css';
import {MainComponent} from './component/mainComponent'
import {NavLink} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = (e) =>{
        e.preventDefault();
        this.setState({open: !this.state.open})
    };

    render() {
        return (
            <div className="App">
                <header>
                    <AppBar
                        title="DS Navratri Special"
                        titleStyle={{fontFamily:"gabriola",fontSize:"50px"}}
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                       onLeftIconButtonClick={this.handleToggle}>

                                <Drawer open={this.state.open} >
                                    <AppBar title="AppBar" onLeftIconButtonClick={this.handleToggle}/>
                                    {
                                        !localStorage.getItem('userType') &&
                                        <div><MenuItem ><NavLink exact to='/'>Login</NavLink></MenuItem>
                                            <MenuItem > <NavLink exact to='/register'>Register</NavLink></MenuItem>
                                            <MenuItem ><NavLink exact to='/about'>About</NavLink></MenuItem>
                                            <MenuItem ><NavLink to='/counter'>Counter</NavLink></MenuItem></div>

                                    }
                                    {localStorage.getItem('userType') === 'A' &&
                                    <div><MenuItem > <NavLink to='/studList'>Student List</NavLink></MenuItem>
                                        <MenuItem > <NavLink to='/eventList'>Event List</NavLink></MenuItem>
                                        <MenuItem > <NavLink to='/logout'>Logout</NavLink></MenuItem></div>
                                    }
                                    {
                                        localStorage.getItem('userType') === 'S' &&
                                        <div>
                                            <MenuItem > <NavLink to='/logout'>Logout</NavLink></MenuItem></div>
                                    }

                                </Drawer>
                    </AppBar>



                </header>

                <div className="App-intro">
                    {this.state.open?
                        <div className="col-sm-10 main" >
                            <MainComponent/>
                        </div>
                    :
                    <div className="col-sm-12 main" >
                        <MainComponent/>
                    </div>}
                </div>
                <footer className="footercss">
                    <div className="App-title col-sm-12">
                        <div className="col-sm-6">
                        Follow Us On:&nbsp;  <span><i className="fa fa-facebook-square"  /></span>&nbsp; & &nbsp;
                        <span><i className="fa fa-instagram "  /></span>&nbsp;
                        </div>
                        <div className="col-sm-6" style={{"fontFamily":"cambria","fontSize":"20px"}}>
                        <span><i className="fa fa-whatsapp" /></span>&nbsp; +919898752036 &nbsp;&nbsp;
                        <span><i className="fa fa-phone-square"/></span> &nbsp; +918141666305
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
export default App;