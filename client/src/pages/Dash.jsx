import React from "react";
// import {useAuth} from '../contexts/AuthContext'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "../layout/DashBoard";
import Header from "../layout/Header";
import "../App.css";
import "../css/Page2.css";
import "../css/navbar.css";
import Page2 from "./Page2";
import School from "./School";
import Sports from "./Sports";
import Labs from "./Labs";
import Canteen from "./Canteen";
import More from "./More";
import FullWidthTabs from "./Hello";
import Logs from "./Logs";

// import { Router } from 'express';

const Dashboard = () => {
  // const {logout} = useAuth();
  return (
    <>
      {/* <BrowserRouter> */}

      {/* <Container className="contain m-0 p-0" fluid>
        <Row className="list-main" xs="12">
          <Col xs="2 p-0"> 
            <DashBoard></DashBoard>
          </Col>
          <Col xs="10 p-0 color">
            <Row xs="12">
              <Header></Header>
            </Row>
            { / * <hr style={{margin:0,color:"", opacity:".3 "}} />  * / }
            <Row className=""> 
              <Routes>
                <Route path="/" element={<Page2 />}></Route>
                <Route path="/school" element={<School />}></Route>
                <Route path="/sports" element={<Sports />}></Route>
                <Route path="/labs" element={<Labs />}></Route>
                <Route path="/canteen" element={<Canteen />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/Somemore" element={<More />}></Route>
                <Route path="/somemore2" element={<ControlledPopup />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/lab-list" element=""></Route>
                <Route path="/canteen-list" element=""></Route>
                <Route path="/sports-list" element=""></Route>
              </Routes>
            </Row>
          </Col>
        </Row>
      </Container> */}
      {/* {!isLoggedIn && <LoginPage />} */}

      {/* {isLoggedIn && ( */}
      <div className="appcontainer">
        <div className="containerDash">
          {/* <h2>Dash</h2>
          <ul>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul> */}

          <DashBoard
          // onButtonClick={handleLogout}
          />
        </div>
        <div className="containerContent">
          <div className="containerHead">
            <Header></Header>
          </div>
          <div className="containerContentHead">
            {/* <Router> */}
            <Routes>
              {/* <Route exact path="/" element={<LoginPage/>}></Route> */}
              <Route path="/" element={<Page2 />}></Route>
              <Route path="/school" element={<School />}></Route>
              <Route path="/sports" element={<Sports />}></Route>
              <Route path="/labs" element={<Labs />}></Route>
              <Route path="/canteen" element={<Canteen />}></Route>
              <Route path="/stock_adjustment/*" element={<More />}>
                <Route path="logs" element={<Logs />} />
              </Route>
              {/* <Route path="/admin" element={<Admin />}></Route>
                    {/* <Route path="/Somemore" element={<More />}></Route> */}
              {/* <Route path="/somemore2" element={<ControlledPopup />}></Route> */}
              {/* <Route path="/form" element={<Form />}></Route>
                    <Route path="/lab-list" element=""></Route>
                    <Route path="/canteen-list" element=""></Route>
                    <Route path="/sports-list" element=""></Route>  */}
            </Routes>
            {/* </Router> */}
          </div>
        </div>
      </div>
      {/* )}  */}
      {/* </BrowserRouter> */}
      {/* <button >Logout</button> */}
    </>
  );
};

export default Dashboard;
