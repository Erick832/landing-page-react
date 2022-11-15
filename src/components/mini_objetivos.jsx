import React from 'react'

function mini_objetivos(props) {
    return (
        <div className="div-mision">
            <img className ="img-mision" src= {props.logo} alt="mision" />
            <h1>{props.titulo}</h1>
            <p>{props.floro}</p>
        </div>
    )
}

export default mini_objetivos; 