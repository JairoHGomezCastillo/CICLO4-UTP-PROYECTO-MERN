import data from "../data/data";
import "./tienda.css";

const Tienda = () => {
  return (
    <div>
      <main>
        <h1>Listado de Productos</h1>
        <div className="productos">
          {data.productos.map((producto) => (
            <div className="producto" key={producto.detalle}>
              <a href={`/producto/${producto.detalle}`}>
                <img src={producto.imagen} alt={producto.nombre} />
              </a>
              <div className="prod-info">
                <a href={`/producto/${producto.detalle}`}>
                  <p>{producto.nombre}</p>
                </a>
                <p>
                  <strong>${producto.precio}</strong>
                </p>
                <button>Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
export default Tienda;
