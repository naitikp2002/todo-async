import "./App.css";
import InputForm from "./components/InputForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lists from "./components/Lists.js";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [todos,setTodos]= useState([])
  return <>
    <InputForm todos={todos} setTodos={setTodos} />
    <Lists todos={todos} setTodos={setTodos}/>
  </>;
}

export default App;
