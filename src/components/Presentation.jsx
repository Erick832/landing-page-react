import React from "react";

function Presentation() {
  return (
    <div className="section-pres">
      <hr id="id-about" />
      <h1>About Product IHC-TF</h1>
      <div className="frame-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E0i0bUCMqOg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Presentation;
