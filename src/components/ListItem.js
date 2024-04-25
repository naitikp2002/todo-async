import { Button } from "react-bootstrap";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
const ListItem = ({ todos, setTodos }) => {
    const handleDelete = (id) => {
      setTodos(todos.filter((todo) => todo.id!== id));
    };
  return (
    <ListGroup as="ol" numbered style={{ minWidth: "500px" }} className="list-group">
      {todos.map((todo) => (
        <ListGroup.Item as="li" >
          {todo.task}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              float: "right",
              gap: "5px",
              marginLeft: "10px"
            }}
          >
            <Button variant="danger" onClick={(e)=>handleDelete(todo.id)}>
              <ImCross />
            </Button>
            <Button variant="success">
              <FaCheck />
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListItem;
