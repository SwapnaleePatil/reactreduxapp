import React from 'react';
import {Switch,Router} from 'react-router-dom'
import Login from './login';
import Logout from './logout';
import Registration from './registration';
import Counter from './counter';
import About from './about';
import Public from './route/public';
import Private from './route/private';
import StudList from './studList';
import EventList from './eventList'
import Home from './Home'
import Gallary from './gallary'
export class MainComponent extends React.Component
{
    render(){
        return(
            <Switch>
                <Public path='/' exact component={Login}/>
                <Public path='/register' exact component={Registration}/>
                <Public path='/counter' exact component={Counter}/>
                <Public path='/about' exact component={About}/>


                <Private path='/gallary' exact component={Gallary}/>
                <Private path='/Home' exact component={Home}/>
                <Private path='/studList' exact component={StudList}/>
                <Private path='/eventList' exact component={EventList}/>
                <Private path='/logout' exact component={Logout}/>
             </Switch>
        )
    }
}
