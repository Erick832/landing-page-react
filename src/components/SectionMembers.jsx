import React from "react";
import img from "../images/img-member.png";

function SectionMembers() {
  return (
    <section class="section-members">
      <h2 class="titulo">Miembros</h2>
      <div class="div-members">
        <i id="ico-arrow-left" class="fa-solid fa-circle-arrow-left"></i>
        <img class="img-member" src={img} alt="member" />
        <div class="div-text-member">
          <p>
            MAGÍSTER EN ENSEÑANZA DE LAS MATEMÁTICAS DE LA PONTIFICIA UNIVERSIDAD CATÓLICA DEL PERÚ (PERÚ). BACHILLER EN CIENCIAS. CUENTA CON EXPERIENCIA DE 10 AÑOS EN LAS MEJORES
            UNIVERSIDADES Y COLEGIOS DEL PAÍS.
          </p>
          <h3>Pedro Aquino - Docente destacado</h3>
        </div>
        <i id="ico-arrow-right" class="fa-solid fa-circle-arrow-right"></i>
      </div>
    </section>
  );
}

export default SectionMembers;
