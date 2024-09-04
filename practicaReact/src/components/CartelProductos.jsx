import React from "react";
import ArbolC from '../img/Arbol Cortez.webp'
import ArbolM from '../img/ÁRBOL DEL MALINCHE.jpg'
import FlorD from '../img/dajika-1.jpg'
import FlorGR from '../img/gingerRoja.jpg'
import Guaria from '../img/GuariaMorada.jpg'
import Hortencia from '../img/hortecias.jpg'
import Laurel from '../img/laurel_2.webp'
import '../styles/CartelDeProd.css'

function Cartel() {
    return(
        <div>
            <div className="cartel">
                <img src={ArbolC} alt="Arbol" className="Imagen" />
                <img src={ArbolM} alt="Arbol" className="Imagen" />
                <img src={FlorD} alt="Arbol" className="Imagen" />
                <img src={FlorGR} alt="Arbol" className="Imagen" />
                <img src={Guaria} alt="Arbol" className="Imagen" />
                <img src={Hortencia} alt="Arbol" className="Imagen" />
                <img src={Laurel} alt="Arbol" className="Imagen" />
            </div>
        </div>
    )
}

export default Cartel