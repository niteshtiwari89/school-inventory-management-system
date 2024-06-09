// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Popup from "reactjs-popup";
// import { Piechart } from "../chart/Piechart";
// import { Container, Row, Col } from "reactstrap";
// import Form from "./Form";
import { useState } from "react";
// import { render } from "react-dom";
// import { Flag } from "@mui/icons-material";
import "../css/form.css";
// import { defineProps } from 'vue';
import FormFill from "./Form";
import { Box, Modal} from "@mui/material";

export default function Page() {
  // const [form, setForm] = useState(false);

  // const btnclick = () => {
  //   if (form == false) {
  //     setForm(
  //          {form ? <Form /> : <Page />}
  //     );
  //   } else {
  //     setForm(false);
  //   }
  // };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "rgb(248, 248, 248)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [addopen, setAddOpen] = useState(false);
  const addcloseModal = () => setAddOpen(false);
  const [delopen, setDelOpen] = useState(false);
  const delcloseModal = () => setDelOpen(false);

  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/form`);
  // };
  return (
    <>
      {/* 
        <Container>
          <Row>
            <Col> <Piechart/></Col>
            <Col></Col>
            <Col></Col>
            </Row>
        </Container> */}
      <div className="container-dash">
        <div className="product-event">
          <button onClick={() => setAddOpen((o) => !o)}>Add Product</button>
          <Modal open={addopen} onClose={addcloseModal}>
            <Box sx={style}>
              <FormFill title="Add Product" />
            </Box>
          </Modal>
          <button onClick={() => setDelOpen((o) => !o)}>Delete Product</button>
          <Modal open={delopen} onClose={delcloseModal}>
            <Box sx={style}>
              <FormFill title="Delete Product" />
            </Box>
          </Modal>
        </div>
        <hr />
        <div className="product-list">
          <h2>Items</h2>
          <div className="item-list">
            <table id="list">
              <tr>
                <th>ItemName</th>
                <th>Quantity</th>
                <th>Available</th>
                <th>In Used</th>
              </tr>
              <tr>
                <td>Name</td>
                <td>20</td>
                <td>15</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>20</td>
                <td>15</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>20</td>
                <td>15</td>
                <td>5</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

//const props = defineProps({
//title: String})
