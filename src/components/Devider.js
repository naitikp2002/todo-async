import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
function JustifiedExample({ todos, setTodos }) {
  const [pendingTodos, setPendingTodos] = useState(null);
  const [completedTodos, setCompletedTodos] = useState(null);
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isCompleted === true));
    setPendingTodos(todos.filter((todo) => todo.isCompleted === false));
  }, [pendingTodos, completedTodos, todos]);

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
            <ListItem
              todos={pendingTodos}
              setTodos={setTodos}
              handleDelete={handleDelete}
            />
          </Tab>
        <Tab eventKey="completed" title="Completed">
          <ListItem
            todos={completedTodos}
            setTodos={setTodos}
            handleDelete={handleDelete}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default JustifiedExample;
