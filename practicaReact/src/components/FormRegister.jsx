import React from "react";
import '../styles/FormRegister.css'
import {Link} from 'react-router-dom'
function FormRegister() {
    return(
        <div>
          <div className="contenedor">
          <h1>REGISTER</h1>
          <br />
          <p>Nombre</p>
          <input type="text" />
          <p>Correo Electronico</p>
          <input type="text" />
          <p>Contraseña</p>
          <input type="text" />
          <br />
          <br />
          <button><Link to="/Login">Registrarse</Link></button>
          </div>
        </div>
    );
    
};

export default FormRegister