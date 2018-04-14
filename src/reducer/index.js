import {combineReducers} from 'redux'
import {newStudent,loginStudent} from './student'
import {newEvent} from './event'

const allreducer = combineReducers(
    {
        studentdata: newStudent,
        eventdata: newEvent,
        loginResponse:loginStudent
    })
export default allreducer;