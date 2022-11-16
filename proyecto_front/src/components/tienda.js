import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from "use-reducer-logger";
// import data from "../data/data";
import Footer from "./elements/footer";
import "./tienda.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, productos: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Tienda = () => {
  const [{ loading, error, productos }, dispatch] = useReducer(
    logger(reducer),
    {
      productos: [],
      loading: true,
      error: "",
    }
  );
  //const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/productos");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: error.message });
      }

      //setProductos(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <main>
        <h1>Listado de Productos</h1>
        <div className="productos">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            productos.map((producto) => (
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
            ))
          )}
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  );
};
export default Tienda;
