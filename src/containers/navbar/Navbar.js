import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
export default function Navbar() {
    return (
        <nav className = "navbar-nav p-2">
            <div className="lists">
            <Link to = "/" style = {{textDecoration:'none',color:'gold'}}> 
            <i className="fab fa-ups icons"></i>
            </Link>
            <Link to = "/" style = {{textDecoration:'none',color:'gold'}}> 
            <span className = "list_span">Home</span>
            </Link>
            <Link to = "/questions" style = {{textDecoration:'none',color:'gold'}}> 
            <button className = "list_btn btn btn-outline-warning">Go to test</button>
            </Link>
            </div>
        </nav>
    )
}
