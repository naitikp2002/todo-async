import "./App.css";
import InputForm from "./components/InputForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lists from "./components/Lists.js";
import { useState,useEffect } from "react";
import axios from "axios"
import {Provider} from "react-redux"
import { store } from "./store/store.js";
import { useSelector, useDispatch } from 'react-redux'
function App() {
  const todoItems = useSelector((state) => state.todos)
  // const [todos,setTodos]= useState([])
  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:3002/todos');
  //     setTodos(response.data);
  //   } catch (error) {
  //     console.error('Error fetching tasks:', error);
  //   }
  // };
  return <>
  {/* <Provider store={store}> */}
    <InputForm/>
    {/* <Lists todos={todos} setTodos={setTodos}/> */}
    {/* </Provider> */}
  </>;
}

export default App;
