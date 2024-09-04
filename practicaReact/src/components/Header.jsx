import React from "react";
import {Link} from "react-router-dom"
import '../styles/Header.css'
function Header() {
    return(
        <div>
            <div className="ContenedorHeader">
                <Link to = "/Register" className="link">Register</Link>
                <Link to = "/Login" className="link">Login</Link>
                <Link to = "/Home" className="link">Home</Link>
                <Link to = "/Contact" className="link">Contact</Link>
            </div>
        </div>
    );
    
};

export default Header