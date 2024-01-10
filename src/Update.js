import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from 'react-redux'
import { updateproduct } from './Redux/Action';
function Example({product}) {
  const [show, setShow] = useState(false);
const dispatch=useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category,setCategory ] = useState(product.category)
  const [description,setDescription ] = useState(product.description)
  const [image,setImage ] = useState(product.image)
  const [price,setPrice ] = useState(product.price)
  const [title,setTitle ] = useState(product.title)
  const Edit=()=>{
    dispatch(updateproduct(product.id,{title,description,image,price,category,rating:product.rating,id:product.id}))
    handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>category</Form.Label>
              <Form.Control
                type="text"
                placeholder="category"
               onChange={event=>setCategory(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="title"
                onChange={event=>setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                onChange={event=>setDescription(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                type="text"
                placeholder="image"
                onChange={event=>setImage(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>price</Form.Label>
              <Form.Control
                type="number"
                placeholder="price"
                onChange={event=>setPrice(event.target.value)}
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Edit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;