import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/logo.jpg">
            <img
                alt="logo"
                src="/logo.jpg"
                width="200px"
              />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/logo.jpg">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/nosotros">
                Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/bienestar">
                Bienestar
              </Nav.Link>
              <Nav.Link as={Link} to="/tienda">
                Tienda
              </Nav.Link>
              <Nav.Link as={Link} to="/community">
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
