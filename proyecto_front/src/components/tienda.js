import { Link } from "react-router-dom";
import data from "../data/data";
import Footer from "./elements/footer";
import "./tienda.css";

const Tienda = () => {
  return (
    <div>
      <main>
        <h1>Listado de Productos</h1>
        <div className="productos">
          {data.productos.map((producto) => (
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
          <Footer/>
        </div>
      </main>
    </div>
  );
};
export default Tienda;
