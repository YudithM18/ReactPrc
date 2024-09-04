import React from "react";
import '../styles/FormLogin.css'
import {Link} from'react-router-dom'
function FormLogin() {

    return(

        <div>
            <div className="centrar">
            <h1>LOGIN</h1>
            <br />
            <p>Nombre</p>
            <input type="text" />
            <p>Contraseña</p>
            <input type="text" />
            <br />
            <br />
            <button><Link to= "/Home" >Ingresar</Link></button>
            </div>
        </div>

    );
    
};

export default FormLogin