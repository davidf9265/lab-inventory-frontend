import React from "react";
import { Container, Row, Col, Table, Button, FormControl } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";

const ItemsManagement = () => {
  return (
    <Container className="container-box shadow-sm"> 
      <Row>
        <Col>
            <h5>Manejo de inventario</h5>
        </Col>
        <Col xl lg="1" >{/* TODO:Buscador */}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Col>
        <Col md="auto">
          {/* TODO:Boton de agregar item */}
          <Button variant="secondary">Agregar ítem</Button>
        </Col>
        <Col md="auto">
        {/* TODO:Boton de importar items */}
          <Button variant="dark">Agregar ítems</Button>
        </Col>
      </Row>
      <Table striped bordered hover className="mt-2">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio unidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default ItemsManagement;
