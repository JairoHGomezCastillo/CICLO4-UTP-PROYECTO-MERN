import {Card, Button, Row, Col, Nav} from "react-bootstrap";

const Pagos = () => {
  return (
    <div>
      <Row>
        <Col>
          <Card className="m-auto mt-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/nequi.jpg" />
            <Card.Body>
              <Card.Title>Metodos de Pago</Card.Title>
              <Card.Text>
                Ofrecemos a nuestros clientes la facilidad de pagar sus pedidos
                por medio de Nequi y Daviplata
              </Card.Text>
              <Button variant="primary">
                <Nav.Link href="https://www.nequi.com.co">ir a Nequi</Nav.Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="m-5" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="images/davi.jpg" />
            <Card.Body>
              <Card.Title>Metodos de Pago</Card.Title>
              <Card.Text>
                Ofrecemos a nuestros clientes la facilidad de pagar sus pedidos
                por medio de Nequi y Daviplata
              </Card.Text>
              <Button variant="primary">
                <Nav.Link href="https://www.daviplata.com">
                  ir a Daviplata
                </Nav.Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Pagos;
