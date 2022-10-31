import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

//import components
import Home from "./components/home";
import Nosotros from "./components/nosotros";
import Bienestar from "./components/bienestar";
import Tienda from "./components/tienda";
import Comunidad from "./components/community";
import Contact from "./components/contactos";
import Pagos from "./components/pagos";
import NavbarLinks from "./layouts/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLinks />}>
            <Route index element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="bienestar" element={<Bienestar />} />
            <Route path="tienda" element={<Tienda />} />
            <Route path="communnity" element={<Comunidad />} />
            <Route path="contactos" element={<Contact />} />
            <Route path="pagos" element={<Pagos />} />
            <Route path="*" element={<Navigate replace to="./" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
