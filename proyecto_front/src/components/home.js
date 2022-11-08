import React from "react";
import {} from "react-bootstrap";
import Carrusel from "./carousel";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <h1>Home Reino Rolitos</h1>
      <div className="col 18">
        <Carrusel />
      </div>
      <p className="text1">
        {" "}
        Rolitos es conocido como uno de los reinos más queridos, aclamados y
        respetables que han existido. Algunos dicen que son sus imponentes
        palacios y castillos los que le conceden este reconocimiento.
      </p>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
