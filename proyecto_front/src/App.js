import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

//import components
import Home from "./components/home";
import Nosotros from "./components/nosotros";
import Bienestar from "./components/bienestar";
import Tienda from "./components/tienda";
import Comunidad from "./components/comunidad";
import Contactos from "./components/contactos";
import Pagos from "./components/pagos";
import NavbarLinks from "./layouts/navbar";
import Details from "./components/productos/details";
import Carrito from "./components/elements/carrito";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Rolitos</title>
      </Helmet>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarLinks />}>
              <Route index element={<Home />} />
              <Route path="nosotros" element={<Nosotros />} />
              <Route path="bienestar" element={<Bienestar />} />
              <Route path="tienda" element={<Tienda />} />
              <Route path="comunidad" element={<Comunidad />} />
              <Route path="contactos" element={<Contactos />} />
              <Route path="pagos" element={<Pagos />} />
              <Route path="*" element={<Navigate replace to="./" />} />
              <Route path="/producto/:slug" element={<Details />} />
              <Route path="/cart" element={<Carrito />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
