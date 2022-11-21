import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../tienda.css";
import Rating from "./Rating";

function Producto(props) {
  const { producto } = props;
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
      </Card.Body>
    </Card>
  );
}
export default Producto;
