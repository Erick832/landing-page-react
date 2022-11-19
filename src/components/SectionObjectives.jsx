import React from "react";
import imgV from "../images/img-vision.png";
import imgM from "../images/img-mision.png";
function SectionObjectives() {
  return (
    <section class="section-objetives">
      <h2 class="titulo">Objetivos</h2>
      <div class="div-objetives">
        <div class="div-mision">
          <img class="img-mision" src={imgM} alt="mision" />
          <h1>MISIÓN</h1>
          <p>Hacer del aprendizaje una experiencia importante, diferencial, apasionante, atractiva y divertida en nuestro rol de formar a los futuros profesionales del Perú.</p>
        </div>
        <div class="div-vision">
          <img class="img-vision" src={imgV} alt="vision" />
          <h1>VISIÓN</h1>
          <p>
            Ser la aplicación más completa y utilizada de preparación para todos los estudiantes que están culminando su etapa escolar y/o personas que deseen postular a la
            universidad.
          </p>
        </div>
      </div>
      <hr id="id-beneficios" />
    </section>
  );
}

export default SectionObjectives;
