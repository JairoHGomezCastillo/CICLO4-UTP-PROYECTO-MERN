import React from "react";
import { Form, Button, Col, Figure } from "react-bootstrap";
import Footer from "./elements/footer";
import "./contactos.css";
import emailjs from '@emailjs/browser';

const sendEmail= (event) => {
  event.preventDevault();
  emailjs.sendForm('service_mr194a4','template_p5vsddw', event.target,'IuNmh252XFRFEaHHz')
  .then(response => console.log(response))
  .catch(err => console.log(err))
}

const Contactos = () => {
 
  return (
    <div>
      <Form className="contactenos" onSubmit={sendEmail} >
        <Figure className="col 1">
          <Figure.Image width={400} src="/images/rol7.jpg" />
        </Figure>

        <Col sm={5}>
          <div>
            <h3>CONTACTANOS</h3>
          </div>
          <div class="col 2">
            <Form.Group class="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" name='user_name' placeholder="Escribe tu nombre" />
            </Form.Group>

            <Form.Group class="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name='user_mail' placeholder="Escribe tu Email" />
            </Form.Group>

            <Form.Group class="mb-3">
              <Form.Label>Comentarios</Form.Label>
              <Form.Control
                type="text"
                name='user_message'
                placeholder="¿En qué podemos ayudarte?"
              />
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
export default Contactos;
