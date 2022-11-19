import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "./navbar.css";

const NavbarLinks = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img id="brand-logo" src="/images/logo.jpg" alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/tienda">
                Tienda
              </Nav.Link>
              <Nav.Link as={Link} to="/comunidad">
                Comunidad Rolitos
              </Nav.Link>
              <Nav.Link as={Link} to="/contactos">
                Contactanos
              </Nav.Link>
              <Nav.Link as={Link} to="/pagos">
                Metodos de Pago
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavbarLinks;
