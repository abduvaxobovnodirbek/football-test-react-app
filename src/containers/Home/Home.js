/* eslint-disable no-unused-vars */
import React, { useState,useEffect,useRef } from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import "./Home.css"
import { setUser} from "../../context/Action/Action"
import Typed from "react-typed";

export default function Home(){
    
    const [showForm,setShowForm] = useState(false)
    const [name,setName] = useState("")
    const handleChange = ()=>{
        setShowForm(true)
    }
    const handleWrite = (e)=>{
        setName(e.target.value)
    }
    const dispatch = useDispatch()
    let string = [
        "Please Login To Continue","Create Your Username"
     ]
    return (
        <div className = "Home-wrapper">
        <div className="Forms" style = {{transform:showForm?"translateY(0px)":"translateY(-200vh)"}}>
        <div className="container form-item pt-5">
        <i className="far fa-times-circle text-danger" onClick = {()=>setShowForm(false)}></i>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://www.zastavki.com/pictures/originals/2013/_The_player_of_Real_Madrid_Cristiano_Ronaldo_in_dark_background_048657_.jpg" alt="" className = "img-fluid formImage"/>
                </div>
                <div className="col-md-6">
                    <div className = "form-control form">
                      <span><Typed strings={string} backSpeed = {50} typeSpeed={50} loop = {true}/></span>  
                    <input  autoComplete = "off" name = "name" onChange = {handleWrite} type="text" placeholder = "enter your username" className = "form-control"/>
                    <button onClick = {()=>{
                        dispatch(setUser(name))
                    }}  disabled = {name !==""&&name.trim("") !==""? false:true} className = "form-control btn  btn-outline-warning"><Link className = "myLink" to = "/questions">Confirm</Link></button>
                   </div>
                </div>
            </div>
        </div>
        </div>
        <div className = "Home-buttons container">
            <div className="Home-items">
            <span>Welcome to Soccer test</span>
            <button onClick = {handleChange} className = "btn btn-outline-warning">Login Now</button>
            </div>
        </div>
        </div>

    )
}






 
