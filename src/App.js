import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Objetivos from "./components/objetivos";
import Beneficios from "./components/Beneficios";
import Miembros from "./components/Miembros";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Objetivos/>
      <Beneficios/>
      <Miembros/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
