import axios from 'axios';
import {Event_Add, Event_Get} from "./actionTypes";
export const showData = () => {
    const api = {
        method: "get",
        url: "http://localhost:3005/api/event",
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    }
    return (dispatch)=>{
        axios(api).then((success) => {
            dispatch({
                type:Event_Get,
                payload:success.data
            })

        }).catch((e) => {
            console.log("Error:", e)
        });
    }
}
export const submitData = (data) => {
    const api = {
        method: "post",
        url: "http://localhost:3005/api/event",
        data: data,
        headers: {
            'x-auth': localStorage.getItem('token')
        }
    };
    return (dispatch)=>{
        axios(api).then((response) => {
            dispatch({
                type:Event_Add,
                payload:response.data
            })

        }).catch((e) => {
            console.log(e);
        })
    }
}
