import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import data from "../data/data";
import Footer from "./elements/footer";
import "./tienda.css";

const Tienda = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/productos");
      setProductos(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <main>
        <h1>Listado de Productos</h1>
        <div className="productos">
          {productos.map((producto) => (
            <div className="producto" key={producto.detalle}>
              <Link to={`/producto/${producto.detalle}`}>
                <img src={producto.imagen} alt={producto.nombre} />
              </Link>
              <div className="prod-info">
                <Link to={`/producto/${producto.detalle}`}>
                  <p>{producto.nombre}</p>
                </Link>
                <p>
                  <strong>${producto.precio}</strong>
                </p>
                <button>Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Tienda;
