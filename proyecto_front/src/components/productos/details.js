import { useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Row, Col, ListGroup, Card, Badge, Button, Container } from "react-bootstrap";
import "../tienda.css";
import Rating from "../elements/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../elements/LoadingBox";
import MessageBox from "../elements/MessageBox";
import { getError } from "../../utils";
import { Store } from "../../contexto/store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, producto: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Details() {
  const params = useParams();
  const { slug } = params;
  const navigate = useNavigate();

  const [{ loading, error, producto }, dispatch] = useReducer(reducer, {
    producto: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/productos/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: getError(error) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async() => {
    const existItem = cart.cartItems.find((x) => x._id === producto._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/productos/id/${producto._id}`);
    if (data.countInStock < quantity) {
      window.alert("Lo sentimos! Producto sin Stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...producto, quantity },
    });
    navigate("/cart");
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={4}>
            <img
              className="img-fluid"
              src={producto.imagen}
              alt={producto.name}
            ></img>
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Helmet>
                  <title>{producto.nombre}</title>
                </Helmet>
                <h1>{producto.nombre}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={producto.clasificacion}></Rating>
              </ListGroup.Item>
              <ListGroup.Item>Precio : ${producto.precio}</ListGroup.Item>
              <ListGroup.Item>
                Descripción:
                <p>{producto.descripcion}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Precio:</Col>
                      <Col>${producto.precio}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Stock:</Col>
                      <Col>
                        {producto.stock > 0 ? (
                          <Badge bg="success">Disponible</Badge>
                        ) : (
                          <Badge bg="danger">No disponible</Badge>
                        )}
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {producto.stock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        <Button onClick={addToCartHandler} variant="primary">
                          Agregar al Carrito
                        </Button>
                      </div>
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Details;
