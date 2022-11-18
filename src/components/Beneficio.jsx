import React from 'react'

function Beneficio(props){
    return(
        <div className="div-rect-benefit">
            <img className ="img-benefit" src= {props.im} alt="beneficio" />
            <div className = "div-objetives p">
                <p>{props.texto}</p>
            </div>
        </div>
    )
}
export default Beneficio; 