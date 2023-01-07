import { Container, Navbar, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Inventario</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home/">Home</Nav.Link>
              <Nav.Link href="componentes/">Componentes</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
              <Nav.Link href="#AcercaDe">Acerca de</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </>
    );
  }