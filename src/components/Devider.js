import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice";
function JustifiedExample() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos.todos);
  const [pendingTodos, setPendingTodos] = useState(null);
  const [completedTodos, setCompletedTodos] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3002/todos/${id}`);
    dispatch(removeTodo(id));
  };
  useEffect(() => {
    setCompletedTodos(todoItems?.filter((todo) => todo.isCompleted === true));
    setPendingTodos(todoItems?.filter((todo) => todo.isCompleted === false));
  }, [todoItems]);

  return (
    <div>
      <Tabs
        style={{ minWidth: "500px" }}
        defaultActiveKey="pending"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="pending" title="Pending">
          <ListItem todos={pendingTodos} handleDelete={handleDelete}/>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <ListItem todos={completedTodos} handleDelete={handleDelete}/>
        </Tab>
      </Tabs>
    </div>
  );
}

export default JustifiedExample;
