import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
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
