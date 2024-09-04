import React from "react";
import Cartel from "./CartelProductos";
import '../styles/FormHome.css'
function FormHome() {
    return(
        <div >
            <h1 className="titulo">BIENVENIDO A NUESTRA TIENDA VIRTUAL</h1>
            <Cartel/>
        </div>
    )
    
}

export default FormHome