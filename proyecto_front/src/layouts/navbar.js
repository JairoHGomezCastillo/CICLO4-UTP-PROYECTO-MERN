import { useContext } from "react";
import { Container, Navbar, Nav, Badge } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import { Store } from "../contexto/store";
import "./navbar.css";

const NavbarLinks = () => {
  const { state } = useContext(Store);
  const { cart } = state;
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
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavbarLinks;
