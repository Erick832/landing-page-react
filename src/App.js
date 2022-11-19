import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import SectionObjectives from "./components/SectionObjectives";
import SectionBenefits from "./components/SectionBenefits";
import SectionMembers from "./components/SectionMembers";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <SectionObjectives />
      <SectionBenefits />
      <SectionMembers />
      <Footer />
    </div>
  );
}

export default App;
