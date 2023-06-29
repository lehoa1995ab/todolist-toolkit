import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import './Todolist.css';
import { addTodo } from '../todo/todoSlices';
import {randomId} from "@mieuteacher/meomeojs";
import moment from 'moment';
import { editTodo } from '../todo/todoSlices';

export default function Todoedit() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newTodo = {
        id:randomId(),
      title,
      date: moment().format('YYYY-MM-DD HH:mm:ss'),
      status,
    };
    console.log("🚀 ~ file: Todolists.jsx:30 ~ handleSubmit ~ newTodo:", newTodo)
    dispatch(addTodo(newTodo));
    handleClose();
  };
      
  return (
    
         <>
    <Modal show={show} onHide={handleClose} className="">
    <Modal.Header closeButton>
      <Modal.Title>Add Task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" autoFocus value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <InputGroup className="mb-3">
          <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Complete</option>
            <option>Incomplete</option>
          </Form.Select>
        </InputGroup>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" type='submit'>
          Add Task
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
  </> 
  )
    }
