import React from 'react'
import Miembro from "./Miembro"
import member1 from "../images/img-member.png"

function Miembros(){
    return(
        <section className="section-members">
            <h2 className="titulo">Miembros</h2>
            <Miembro im = {member1} 
            descripcion ="Magister en enseñanza de matemáticas
            de la Pontificai Universidad Católica del Perú. Bachiller en ciencias. Cuenta
            con experiencia de 10 años en las mejores universidades y colegios del país" 
            nombre = "Pedro Aquino - Docente Destacado"/>  
            <hr id="id-miembros" />
        </section>
    )
}
export default Miembros;