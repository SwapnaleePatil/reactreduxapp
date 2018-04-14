import {Student_Get,STUDENT_LOGIN,STUDENT_LOGOUT,REGISTER_STUDENT} from '../action/actionTypes';
export const newStudent= (state=[],action)=>{
    switch(action.type){
        case Student_Get:
            return action.payload
        case REGISTER_STUDENT:
            return action.payload
        default:
            return state;
    }
}
export const loginStudent=(state=[],action)=>{
    switch (action.type)
    {
        case STUDENT_LOGIN:
            return action.payload
        case STUDENT_LOGOUT:
            return state=[];
        default:
            return state;
    }
}