import React from "react";
import { Form, Button, Col, Figure } from "react-bootstrap";
import Footer from "./footer";

const Contact = () => {
  return (
    <div>
      <Form className="contactenos">
        
        <Figure className="col 1">
          <Figure.Image width={400}  src="/rol7.jpg"/>
        </Figure>

        <Col sm={5} >
          <div>
            <h3>CONTACTANOS</h3>
          </div>
          <div class="col 2">
          <Form.Group class="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escribe tu nombre" />
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Escribe tu Email" />
          </Form.Group>

          <Form.Group class="mb-3">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control type="text" placeholder="¿En qué podemos ayudarte?" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
          </div>
        </Col>
      </Form>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Contact;
