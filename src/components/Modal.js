import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example({
  editedTask,
  setEditedTask,
  show,
  handleUpdateAfterEdit,
  setEndEditedTask,
  handleClose,
  handleShow,
}) {
  const handleUpdate = (e) => {
    e.preventDefault();
    setEndEditedTask(editedTask);
    handleUpdateAfterEdit();
    setEditedTask(null);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Edit Todo</Form.Label>
              <Form.Control
                type="text"
                placeholder="purchase Toys"
                value={editedTask}
                onChange={(event) => {
                  setEditedTask(event.target.value);
                }}
                // autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
