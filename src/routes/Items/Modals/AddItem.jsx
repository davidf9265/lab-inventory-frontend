import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from 'axios';

const AddItem = (props) => {

    const [formData, setFormData] = useState({});

    const handleChangeField = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    }

    const handleCreateItem = (event) =>{
        event.preventDefault();

        axios.post('http://192.168.1.92:3000/Item/createNew', formData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
  return (
    <Modal show={props.show} onHide={props.onHide} className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Agregar item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleCreateItem}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Escribe el nombre" onChange={handleChangeField} />
            <Form.Text className="text-muted">
              Nombre con descripción detallada del producto.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="quantity">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="text" placeholder="Ingresa la cantidad" onChange={handleChangeField} />
            <Form.Text className="text-muted">
              Cantidad del componente.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text" placeholder="Precio unitario" onChange={handleChangeField} />
            <Form.Text className="text-muted">
              Ingresa el precio por unidad.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select>
                <option>TODO:map para traer todos los registros de categorias</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Selecciona la categoría a la que pertenece el ítem.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Select>
                <option>TODO:map para traer todos los registros de tipos</option>
            </Form.Select>
            <Form.Text className="text-muted">
              Selecciona el tipo al que pertenece el ítem.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Propiedades</Form.Label>
            <Form.Control
                as="textarea"
                placeholder="Ingresa las propiedades TODO: aquí debe aparecer un template predefinido"
                style={{ height: '200px' }}
            />
          </Form.Group>
          <Form.Group controlId="image0" className="mb-3">
            <Form.Label>Imagen principal</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="media1">
            <Form.Label>Otros archivos de visualización</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="media2">
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="media3">
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="media4">
            <Form.Control type="file" />
          </Form.Group>
          <Button type="submit">Crear ítem</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItem;
