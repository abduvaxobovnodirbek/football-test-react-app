import { ActionTypes } from "../ActionTypes/ActionTypes";
const initialState = {
    info : ""
}
export const Reducer = (state = initialState,{type,payLoad})=>{
     switch(type){
         case (ActionTypes.SETUSER):
             return {...state,info:payLoad};
         default:
             return state
     }
}

export const ReducerData = (state = [],{type,payLoad})=>{
    switch(type){
        case (ActionTypes.SETDATA):
            return [...state,payLoad];
        default:
            return state
    }
}

export const Reducer_Elementary_Data = (state = [],{type,payLoad})=>{
    switch(type){
        case (ActionTypes.SET_ELEMENTARY_DATA):
            return [...state,payLoad];
        default:
            return state
    }
}

export const Reducer_Pre_Data = (state = [],{type,payLoad})=>{
    switch(type){
        case (ActionTypes.SET_PREINTERMEDIATE_DATA):
            return [...state,payLoad];
        default:
            return state
    }
}

export const Reducer_Inter_Data = (state = [],{type,payLoad})=>{
    switch(type){
        case (ActionTypes.SET_INTERMEDIATE_DATA):
            return [...state,payLoad];
        default:
            return state
    }
}

export const Reducer_Advanced_Data = (state = [],{type,payLoad})=>{
    switch(type){
        case (ActionTypes.SET_ADVANCED_DATA):
            return [...state,payLoad];
        default:
            return state
    }
}