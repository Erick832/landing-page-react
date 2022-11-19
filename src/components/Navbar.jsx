import React from "react";
import logo from "../images/logo-tech.png";
function Navbar() {
  return (
    <nav className="nav-link">
      <a href="#id-home">
        <img className="img-logo" src={logo} alt="logo tech academy" />
      </a>
      <div className="div-search">
        <i id="icon-search" className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Buscar" />
      </div>
      <button className="button-header">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul>
        <li>
          <a href="#id-contactos">About Product</a>
        </li>
        <li>
          <a href="#id-objetivos">Objetivos</a>
        </li>
        <li>
          <a href="#id-beneficios">Beneficios</a>
        </li>
        <li>
          <a href="#id-miembros">Miembros</a>
        </li>
        <li>
          <a href="#id-contactos">Contactos</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
