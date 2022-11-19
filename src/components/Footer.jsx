import React from "react";
import logo1 from "../images/logo-tech.png";
function Footer() {
  return (
    <footer>
      <div className="div-footer">
        <hr id="id-contactos" />
        <div className="div-footer-1">
          <img className="img-logo-1" src={logo1} alt="logo" />
          <h3>Informacion</h3>
          <p>Siguenos en nuestras redes sociales</p>
          <div className="div-logos">
            <i className="ico-logo fa-brands fa-facebook"></i>
            <i className="ico-logo fa-brands fa-youtube"></i>
            <i className="ico-logo fa-brands fa-telegram"></i>
            <i className="ico-logo fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="div-footer-2">
          <div>
            <h3>Navegación</h3>
            <p>Tech Academy</p>
            <p>Objetivos</p>
            <p>Beneficios</p>
            <p>Miembros</p>
            <p>Contactos</p>
          </div>
          <div>
            <h3>Contáctanos</h3>
            <div className="div-contacto">
              <i className="ico-contacto fa-solid fa-location-dot"></i>
              <p>Jesus María 120</p>
            </div>
            <div className="div-contacto">
              <i className="ico-contacto fa-solid fa-at"></i>
              <p>tech_academy@edu.pe</p>
            </div>
            <div className="div-contacto">
              <i className="ico-contacto fa-solid fa-phone"></i>
              <p>920171365</p>
            </div>
            <div className="div-contacto">
              <i className="ico-contacto fa-solid fa-phone"></i>
              <p>960141484</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div-footer-3">
        <h3>@ 2022 Tech Academy</h3>
      </div>
    </footer>
  );
}

export default Footer;
