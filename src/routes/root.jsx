import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { getItems } from "./Items";
import '../styles/Header.scss';
// import '../assets/icons/icon_menu.svg';
import { ReactSVG } from 'react-svg'


export default function Root() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <ReactSVG src="../assets/icons/icon_menu.svg" alt="menu" className="menu" />
          <Container>
            <Navbar.Brand href="">Laboratorio</Navbar.Brand>
            <Nav className="me-auto navbar-left">
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Inventario" id="basic-nav-dropdown">
                <NavDropdown.Item href="/items">Items home</NavDropdown.Item>
                <NavDropdown.Item href="/items/manageitems">
                  Manejar inventario
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link to="#pricing">Contacto</Nav.Link>
              <Nav.Link to="#AcercaDe">Acerca de</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }

export async function loader() {
  const items = await getItems();
  return { items };
}