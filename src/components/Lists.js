import React from "react";
import ListItem from "./ListItem";

const Lists = ({todos,setTodos}) => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "normal",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ListItem todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
};

export default Lists;