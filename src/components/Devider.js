import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";
function JustifiedExample({ todos, setTodos }) {
  const [pendingTodos, setPendingTodos] = useState(null);
  const [completedTodos, setCompletedTodos] = useState(null);

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isCompleted === true));
    setPendingTodos(todos.filter((todo) => todo.isCompleted === false));
  }, [pendingTodos, completedTodos]);

  return (
    <div>
      <Tabs
        style={{ width: "500px" }}
        defaultActiveKey="pending"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="pending" title="Pending">
          <ListItem todos={pendingTodos} setTodos={setTodos}/>
        </Tab>
        <Tab eventKey="completed" title="Completed">
          <ListItem todos={completedTodos} setTodos={setTodos} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default JustifiedExample;
