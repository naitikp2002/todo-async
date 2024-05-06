import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { ImCross, ImCheckmark } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import Example from "./Modal";
import axios from "axios";
import completedTodo, { removeTodo } from "../store/todoSlice"

import { useSelector, useDispatch } from 'react-redux'
const ListItem = ({ todos }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos)
  const [todo, setTodo] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = (todo) => {
    setEditedTask(todo.task);
    handleShow();
    setTodo(todo);
  };
  const handleStatus = (todo) => {
    // await axios.put(`http://localhost:3002/todos/${todo.id}`, {
    //   ...todo,
    //   isCompleted: true,
    // });
    dispatch(completedTodo(todo))
  };
  // const handleUpdateAfterEdit = async () => {
  //   await axios.put(`http://localhost:3002/todos/${todo.id}`, {
  //     ...todo,
  //     task: editedTask,
  //   });
  //   if (editedTask) {
  //     setTodos((prevTodos) =>
  //     prevTodos.map((td) =>
  //     td.id === todo.id ? { ...td, task: editedTask } : td
  //   )
  // );
  // setEditedTask(null);
  //     // setEditedTask(null);
  //   }
  // };
  return (
    <>
      {/* <Example
        handleUpdateAfterEdit={handleUpdateAfterEdit}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        show={show}
        // setEndEditedTask={setEndEditedTask}
        handleClose={handleClose}
        handleShow={handleShow}
      /> */}

      <ListGroup
        as="ol"
        numbered
        style={{ minWidth: "500px" }}
        className="list-group"
      >
        {todos?.map((todo) => (
          <ListGroup.Item as="li" key={todo.id}>
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
              <Button variant="danger" onClick={(e) => dispatch(removeTodo(todo.id))}>
                <ImCross />
              </Button>
              <Button variant="secondary" onClick={(e) => handleUpdate(todo)}>
                <FaPen />
              </Button>
              {!todo.isCompleted && <Button variant="success" onClick={(e) => handleStatus(todo)}>
                <ImCheckmark />
              </Button>}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ListItem;
