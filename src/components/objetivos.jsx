import React from 'react'
import Mini_objetivos from "./mini_objetivos"
import Logo1 from "../images/img-mision.png"
import Logo2 from "../images/img-vision.png"

function objetivos() {
    return (
    <section className="section-objetives">
        <h2 className="titulo">Objetivos</h2>
        <div className="div-objetives">
            <Mini_objetivos logo = {Logo1} titulo = "MISIÓN" floro = "Hacer del aprendizaje una experiencia importante, diferencial, apasionante, atractiva y divertida en nuestro rol de formar a los futuros profesionales del Perú."/>
            <Mini_objetivos logo = {Logo2} titulo = "VISIÓN" floro = "Ser la aplicación más completa y utilizada de preparación para todos los estudiantes que están culminando su etapa escolar y/o personas que deseen postular a launiversidad."/>
        </div>
        <hr id="id-beneficios" />
    </section>
    )
}

export default objetivos;