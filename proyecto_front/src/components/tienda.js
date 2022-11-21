import { useEffect, useReducer } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
// import data from "../data/data";
import Footer from "./elements/footer";
import "./tienda.css";
import { Row, Col } from "react-bootstrap";
import Producto from "./elements/producto";
import { Helmet } from "react-helmet";
import LoadingBox from "./elements/LoadingBox";
import MessageBox from "./elements/MessageBox";

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
        <Helmet>
          <title>Tienda</title>
        </Helmet>
        <h1>Listado de Productos</h1>
        <div className="productos">
          {loading ? (
            <LoadingBox />
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Row>
              {productos.map((producto) => (
                <Col
                  key={producto.detalle}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-3"
                >
                  <Producto producto={producto}></Producto>
                </Col>
              ))}
            </Row>
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
