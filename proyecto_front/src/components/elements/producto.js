import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../tienda.css";
import Rating from "./Rating";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../../contexto/store";

function Producto(props) {
  const { producto } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === producto._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`productos/id/${item._id}`);
    if (data.stock < quantity) {
      window.alert("Lo sentimos! Producto sin Unidades Suficientes");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/producto/${producto.detalle}`}>
        <img
          id="producto"
          src={producto.imagen}
          className="card-img-top"
          alt={producto.nombre}
        />
      </Link>
      <Card.Body>
        <Link to={`/producto/${producto.detalle}`}>
          <Card.Title>{producto.nombre}</Card.Title>
        </Link>
        <Rating rating={producto.clasificacion} />
        <Card.Text>${producto.precio}</Card.Text>
        {producto.stock === 0 ? (
          <Button variant="light" disabled>
            Sin Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(producto)}>Agregar al Carrito</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Producto;
