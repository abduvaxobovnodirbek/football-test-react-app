import { Reducer, ReducerData,Reducer_Elementary_Data,Reducer_Pre_Data,Reducer_Inter_Data,Reducer_Advanced_Data } from "./Reducer";
import {combineReducers} from "redux"
export const myInfo = combineReducers({
     UserInfo:Reducer,
     Data:ReducerData,
     ElementaryInfo:Reducer_Elementary_Data,
     PreInfo:Reducer_Pre_Data,
     InterInfo:Reducer_Inter_Data,
     AdvancedInfo:Reducer_Advanced_Data    
})