import React from 'react'
import stars from "../images/stars_2.jpg"

function Miembro(props){
    return(
        <div className="div-members">
            <img className = "img-member" src={props.im} alt="img miembro" />
            <div className = "desc-member">
                <img className = "img-stars" 
                src = {stars} 
                alt="estrellas" />
                <p>{props.descripcion}</p>
                <p>{props.nombre}</p>
            </div>
        </div>
    )
}
export default Miembro; 