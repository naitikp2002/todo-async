import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "651032f2-d2d8-4e45-99d2-88e7aefe519c",
      task: "Harshil Patel",
      isCompleted: false,
    },
    {
      id: "74242c36-4a53-410b-813a-f62530fa99dc",
      task: "Ayush Prajapati",
      isCompleted: true,
    },
    {
      id: "cfcb19cb-0d3e-4894-9989-1e4137b1de19",
      task: "Darsh Shah",
      isCompleted: true,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    getTodos: (state, action) =>{
      state.todos= action.payload
    }
    ,
    completedTodo: (state, action) => {
      state.todos = state.todos.map((td) =>
        td.id === action.payload.id ? { ...td, isCompleted: true } : td
      );
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload); 
    },
    updateTodo: (state, action) => {
      const { todo, editedTask } = action.payload;
     state.todos= state.todos.map((td) =>
        td.id === todo.id
          ? { ...td, task: editedTask }
          : td
      );
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodos,completedTodo, addTodo, updateTodo, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
