import React from "react";
import img1 from "../images/benefit-1.png";
import img2 from "../images/benefit-2.jpg";
import img3 from "../images/benefit-3.jpg";

function SectionBenefits() {
  return (
    <section class="section-benefits">
      <h2 class="titulo">Beneficios</h2>
      <div class="div-benefits">
        <div class="div-rect-benefit">
          <img class="img-benefit" src={img1} alt="benefit-1" />
          <p>Conocimiento de los temas que exige una universidad de prestigio, gracias a las clases brindadas por los profesores.</p>
        </div>
        <div class="div-rect-benefit">
          <img class="img-benefit" src={img2} alt="benefit-2" />
          <p>Foro en donde profesores y otros compañeros resolverán las dudas del usuario, generando una comunidad.</p>
        </div>
        <div class="div-rect-benefit">
          <img class="img-benefit" src={img3} alt="benefit-3" />
          <p>Visualización de sus calificaciones en cada curso para hacer un seguimiento detallado en su proceso de aprendizaje.</p>
        </div>
      </div>
    </section>
  );
}

export default SectionBenefits;
