import React from 'react';
import Login from "../login";
import {Route} from 'react-router-dom';
const Private = ({...props}) => {
    return (
        <div>
            {
                localStorage.getItem('token')
                    ? <Route {...props}/>
                    : <Login/>
            }
        </div>
    )
}
export default Private;