import { Button } from "react-bootstrap";
import React from "react";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
const ListItem = () => {
  return (
    <ul style={{ width: "500px" }} className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", float:"right", gap:"5px"}}><Button variant="danger"><ImCross /></Button><Button variant="success"><FaCheck /></Button></div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", float:"right", gap:"5px"}}><Button variant="danger"><ImCross /></Button><Button variant="success"><FaCheck /></Button></div>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", float:"right", gap:"5px"}}><Button variant="danger"><ImCross /></Button><Button variant="success"><FaCheck /></Button></div>
      </li>
    </ul>
  );
};

export default ListItem;
