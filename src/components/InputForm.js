import React from "react";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import axios from "axios"
const InputForm = ({ todos, setTodos }) => {
  const inputRef = useRef(null);
  // const handleChange=(e) => {
  //   setTask(e.target.value)
  // }
  const handlecClick = async (e) => {
    e.preventDefault();
    const inputText = inputRef.current.value.trim();

    try {
      if (inputText.length === 0) {
        throw new Error("Todo text cannot be empty");
      }
      const response = await axios.post('http://localhost:3002/todos', { id: uuidv4(), task: inputText, isCompleted: false });
        // setTodos([...todos, response.data]);
        console.log(response.data)
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          response.data,
        ];
      });
    } catch (error) {
      console.error(error.message);
    }
    inputRef.current.value = '';
  };
  console.log(todos);
  return (
    <Form
      style={{
        padding: "10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form.Group
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
        className="mb-3 d-flex"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
        ref={inputRef}
        // onChange={handleChange}
          style={{ width: "500px" }}
          type="text"
          placeholder="purchase toys"
        />
        <button onClick={handlecClick} class="btn btn-primary" type="submit">
          Add
        </button>
      </Form.Group>
    </Form>
  );
};

export default InputForm;
