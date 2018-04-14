import React from 'react';
import Home from '../Home'
import {Route} from 'react-router-dom'
import EventList from "../eventList";
const Public = ({...props}) => {
    return (
        <div>
            {
                !localStorage.getItem('token') || localStorage.getItem('token')
                    ? <Route {...props}/>
                    : <Home/>
            }
        </div>
    )

}
export default Public;