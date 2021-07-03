import { ActionTypes } from "../ActionTypes/ActionTypes";
export const setUser = (username)=>{
    return{
        type:ActionTypes.SETUSER,
        payLoad:username
    } 
}

export const infosData = (info)=>{
    return{
        type:ActionTypes.SETDATA,
        payLoad:info
    } 
}

export const ElementaryData = (info)=>{
    return{
        type:ActionTypes.SET_ELEMENTARY_DATA,
        payLoad:info
    } 
}

export const PreData = (info)=>{
    return{
        type:ActionTypes.SET_PREINTERMEDIATE_DATA,
        payLoad:info
    } 
}

export const InterData = (info)=>{
    return{
        type:ActionTypes.SET_INTERMEDIATE_DATA,
        payLoad:info
    } 
}

export const AdvancedData = (info)=>{
    return{
        type:ActionTypes.SET_ADVANCED_DATA,
        payLoad:info
    } 
}