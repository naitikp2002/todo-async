import React from "react";
import Form from "react-bootstrap/Form";

const InputForm = () => {
  return (

      <Form style={{
        padding:"10px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
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
          {/* <Form.Label
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Todo
          </Form.Label> */}

          <Form.Control style={{width:"500px"}} type="text" placeholder="purchase toys" />
          <button class="btn btn-primary" type="submit">
            Add
          </button>
        </Form.Group>
      </Form>
  );
};

export default InputForm;
