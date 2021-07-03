import React from 'react'
import "./madal.css"
import { Link } from 'react-router-dom'
export default function modal() {
    return (
        <div className = "container myBox text-center">
            <div className="myText">
                <h4 style = {{fontWeight:"bold"}}>You have completed test</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <Link to = "/">
                <button className = "btn btn-primary">Finish test</button>
                </Link>
            </div>
        </div>
    )
}
