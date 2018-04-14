import {Student_Get,STUDENT_LOGIN,REGISTER_STUDENT} from "./actionTypes";
import axios from 'axios';
export const studData = () => {
    debugger
    const api = {
        method: "get",
        url: "http://localhost:3005/api/student",
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    }
    return (dispatch)=>{
        axios(api).then((success) => {
            dispatch({
                type:Student_Get,
                payload:success.data
            })
        }).catch((e) => {
            console.log("Error:", e)
        });
    }
}
export const studRegister=(data)=>{
    const api = {
        method: "post",
        url: "http://localhost:3005/api/student",
        data: data,
    };
    return (dispatch)=>{
        axios(api).then((response) => {
            dispatch({
                type:REGISTER_STUDENT,
                payload:response.data
            })

        }).catch((e) => {
            console.log(e);
        })
    }
}
export const studentLogin=(data)=>{
    debugger
    const api={
        method:"post",
        url:"http://localhost:3005/api/student/loginPassport",
        data:data,
    };
    return (dispatch)=>{
        axios(api).then((response)=>{
            if(response){
                dispatch({
                    type:STUDENT_LOGIN,
                    payload:response
                });
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
}