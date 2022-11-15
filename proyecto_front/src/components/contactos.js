import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Form className="contactenos">
      <Col sm={4}>
        <div>
          <h3>CONTACTANOS</h3>
        </div>
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

        <Button  variant="primary" type="submit">
          Enviar
        </Button>
      </Col>
    </Form>
  );
};
export default Contact;
