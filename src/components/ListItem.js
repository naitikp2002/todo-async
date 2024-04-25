import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { ImCross, ImCheckmark } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Example from "./Modal";
const ListItem = ({ todos, setTodos }) => {
  const [editedTask,setEditedTask]= useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate =(todo) => {
    handleShow();
    // setTodos();
    if (editedTask && todo.task !== editedTask) {
        setTodos((prevTodos) =>
          prevTodos.map((td) =>
            td.id === todo.id ? { ...td, task: editedTask } : td
          )
        );
    }
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Example editedTask={editedTask} setEditedTask={setEditedTask} show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow}/>
      <ListGroup
        as="ol"
        numbered
        style={{ minWidth: "500px" }}
        className="list-group"
      >
        {todos.map((todo) => (
          <ListGroup.Item as="li">
            {todo.task}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                float: "right",
                gap: "5px",
                marginLeft: "10px",
              }}
            >
              <Button variant="danger" onClick={(e) => handleDelete(todo.id)}>
                <ImCross />
              </Button>
              <Button
                variant="secondary"
                onClick={(e) => handleUpdate(todo)}
              >
                <FaPen />
              </Button>
              <Button variant="success">
                <ImCheckmark />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ListItem;
