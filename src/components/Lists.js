import React from "react";
import ListItem from "./ListItem";
import JustifiedExample from "./Devider";
import { useState } from "react";
const Lists = ({ todos, setTodos }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <JustifiedExample todos={todos} setTodos={setTodos} />
      </div>
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
          {/* <ListItem todos={todos} setTodos={setTodos}/> */}
        </div>
      </div>
    </>
  );
};

export default Lists;
