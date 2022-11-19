import React from "react";
import img from "../images/img-1.jpg";
function Main() {
  return (
    <main className="main-home">
      <hr id="id-home" />
      <div className="div-text-home">
        <h1>Bienvenido a la mejor academia virtual</h1>
        <p>
          Conviértete en cachimbo, contamos con la mejor preparación para la gran mayoría de universidades del país. Aprende con los profesores más capacitados. Domina todos los
          temas que necesites ¿Qué esperas?
        </p>
        <h3>¡Da el primer paso!</h3>
        <div className="div-button">
          <button className="button-body">Registrate</button>
        </div>
      </div>
      <img className="img-1" src={img} alt="img" />
    </main>
  );
}

export default Main;
