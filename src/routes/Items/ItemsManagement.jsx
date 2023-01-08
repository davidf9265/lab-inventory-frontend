import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  FormControl,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const ItemsManagement = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.1.26:3000/Item/getAll")
      .then((response) => {
        console.log(response.data.data);
        setItems(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container className="container-box shadow-sm">
      <Row>
        <Col>
          <h5>Manejo de inventario</h5>
        </Col>
        <Col xl lg="1">
          {/* TODO:Buscador */}
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit_price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ItemsManagement;
