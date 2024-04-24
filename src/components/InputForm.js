import React from "react";
import Form from "react-bootstrap/Form";

const InputForm = () => {
  return (
    <div
      style={{
        padding: "10px",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form>
        <Form.Group
          style={{
            // width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Todo
          </Form.Label>

          <Form.Control type="email" placeholder="purchase toys" />
          <button class="btn btn-primary" type="submit">
            Button
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputForm;
