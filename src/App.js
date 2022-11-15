import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Objetivos from "./components/objetivos";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Objetivos/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
