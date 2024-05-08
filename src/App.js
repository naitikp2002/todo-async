import "./App.css";
import InputForm from "./components/InputForm.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lists from "./components/Lists.js";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios"
import {Provider} from "react-redux"
// import { useSelector, useDispatch } from 'react-redux'
import { getTodos } from "./store/todoSlice.js";
function App() {
  const todoItems = useSelector((state) => state.todos)
  const dispatch = useDispatch();
  // const [todos,setTodos]= useState([])
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3002/todos');
      console.log(response);
      dispatch(getTodos(response.data ))
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  return <>
  {/* <Provider store={store}> */}
    <InputForm/>
    <Lists/>
    {/* </Provider> */}
  </>;
}

export default App;
