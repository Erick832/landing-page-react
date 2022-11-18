import React from 'react'
import Beneficio from "./Beneficio"
import benefit1 from "../images/benefit-1.png"
import benefit2 from "../images/benefit-2.jpg"
import benefit3 from "../images/benefit-3.jpg"

function Beneficios() {
    return(
        <section className="section-benefits">
            <h2 className="titulo">Beneficios</h2>
            <div className="div-benefits">
                <Beneficio im = {benefit1} texto ="Conocimiento de los temas que exige una universidad de prestigio, gracias
                a las clases brindadas por los profesores."/>
                <Beneficio im = {benefit2} texto ="Foro en donde profesores y otros compañeros resolverán las dudas del usuario,
                generando una comunidad"/>
                <Beneficio im = {benefit3} texto ="Visualización de sus calificaciones en cada curso para hacer un seguimiento
                detallado en un proceso de aprendizaje"/>
            </div>
            <hr id="id-beneficios" />

        </section>

    ) 
}
export default Beneficios;