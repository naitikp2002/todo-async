import "./App.css";
import InputForm from "./components/InputForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lists from "./components/Lists.js";
import { useState,useEffect } from "react";
import axios from "axios"
function App() {
  const [todos,setTodos]= useState([])
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3002/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  return <>
    <InputForm todos={todos} setTodos={setTodos} />
    <Lists todos={todos} setTodos={setTodos}/>
  </>;
}

export default App;
