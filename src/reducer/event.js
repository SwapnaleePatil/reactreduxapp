import {Event_Add,Event_Get} from '../action/actionTypes';
export const newEvent= (state=[],action)=>{
    switch(action.type){
        case Event_Add:
            return [...state,action.payload];
        case Event_Get:
            return action.payload
        default:
            return state;
    }
}
